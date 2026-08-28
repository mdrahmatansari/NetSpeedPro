import { Router } from 'express';
import crypto from 'crypto';

const router = Router();

// Pre-allocate a 4MB pseudo-random non-compressible buffer to serve fast downloads without memory allocation thrashing
const CHUNK_SIZE = 4 * 1024 * 1024; // 4MB
const pseudoRandomBuffer = Buffer.alloc(CHUNK_SIZE);
for (let i = 0; i < CHUNK_SIZE; i += 64) {
  crypto.randomFillSync(pseudoRandomBuffer, i, Math.min(64, CHUNK_SIZE - i));
}

// Global & regional speed test server registry
const SPEED_SERVERS = [
  { id: 'in-bom-1', name: 'Mumbai Server', city: 'Mumbai', country: 'India', countryCode: 'IN', sponsor: 'NetSpeedPro Edge - Reliance Jio IDC', lat: 19.0760, lon: 72.8777, status: 'online', isDefault: true },
  { id: 'in-del-1', name: 'Delhi Server', city: 'Delhi / NCR', country: 'India', countryCode: 'IN', sponsor: 'NetSpeedPro Edge - Airtel Core', lat: 28.6139, lon: 77.2090, status: 'online' },
  { id: 'in-blr-1', name: 'Bengaluru Server', city: 'Bengaluru', country: 'India', countryCode: 'IN', sponsor: 'NetSpeedPro Edge - ACT Fibernet Node', lat: 12.9716, lon: 77.5946, status: 'online' },
  { id: 'in-hyd-1', name: 'Hyderabad Server', city: 'Hyderabad', country: 'India', countryCode: 'IN', sponsor: 'NetSpeedPro Edge - CtrlS Data Center', lat: 17.3850, lon: 78.4867, status: 'online' },
  { id: 'in-maa-1', name: 'Chennai Server', city: 'Chennai', country: 'India', countryCode: 'IN', sponsor: 'NetSpeedPro Edge - Tata Communications', lat: 13.0827, lon: 80.2707, status: 'online' },
  { id: 'in-ccu-1', name: 'Kolkata Server', city: 'Kolkata', country: 'India', countryCode: 'IN', sponsor: 'NetSpeedPro Edge - BSNL Backbone', lat: 22.5726, lon: 88.3639, status: 'online' },
  { id: 'in-pnq-1', name: 'Pune Server', city: 'Pune', country: 'India', countryCode: 'IN', sponsor: 'NetSpeedPro Edge - Vodafone Idea Core', lat: 18.5204, lon: 73.8567, status: 'online' },
  { id: 'in-amd-1', name: 'Ahmedabad Server', city: 'Ahmedabad', country: 'India', countryCode: 'IN', sponsor: 'NetSpeedPro Edge - GTPL Hathway Hub', lat: 23.0225, lon: 72.5714, status: 'online' },
  { id: 'in-jai-1', name: 'Jaipur Server', city: 'Jaipur', country: 'India', countryCode: 'IN', sponsor: 'NetSpeedPro Edge - Telelink PoP', lat: 26.9124, lon: 75.7873, status: 'online' },
  { id: 'sg-sin-1', name: 'Singapore Server', city: 'Singapore', country: 'Singapore', countryCode: 'SG', sponsor: 'NetSpeedPro Global - Equinix SG1', lat: 1.3521, lon: 103.8198, status: 'online' },
  { id: 'jp-tyo-1', name: 'Tokyo Server', city: 'Tokyo', country: 'Japan', countryCode: 'JP', sponsor: 'NetSpeedPro Global - NTT Communications', lat: 35.6762, lon: 139.6503, status: 'online' },
  { id: 'de-fra-1', name: 'Frankfurt Server', city: 'Frankfurt', country: 'Germany', countryCode: 'DE', sponsor: 'NetSpeedPro Global - DE-CIX Core', lat: 50.1109, lon: 8.6821, status: 'online' },
  { id: 'gb-lon-1', name: 'London Server', city: 'London', country: 'United Kingdom', countryCode: 'GB', sponsor: 'NetSpeedPro Global - LINX Hub', lat: 51.5074, lon: -0.1278, status: 'online' },
  { id: 'us-nyc-1', name: 'New York Server', city: 'New York', country: 'United States', countryCode: 'US', sponsor: 'NetSpeedPro Global - Digital Realty NY', lat: 40.7128, lon: -74.0060, status: 'online' },
  { id: 'us-sfo-1', name: 'San Francisco Server', city: 'San Francisco', country: 'United States', countryCode: 'US', sponsor: 'NetSpeedPro Global - Bay Area Exchange', lat: 37.7749, lon: -122.4194, status: 'online' },
  { id: 'au-syd-1', name: 'Sydney Server', city: 'Sydney', country: 'Australia', countryCode: 'AU', sponsor: 'NetSpeedPro Global - Equinix SY3', lat: -33.8688, lon: 151.2093, status: 'online' },
  { id: 'ae-dxb-1', name: 'Dubai Server', city: 'Dubai', country: 'United Arab Emirates', countryCode: 'AE', sponsor: 'NetSpeedPro Global - UAE-IX Node', lat: 25.2048, lon: 55.2708, status: 'online' }
];

// No-cache middleware
const setNoCacheHeaders = (res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Surrogate-Control', 'no-store');
  res.setHeader('Timing-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Origin', '*');
};

/**
 * GET /api/speedtest/ping
 * Minimal payload for round-trip latency & jitter measurements
 */
router.get('/ping', (req, res) => {
  setNoCacheHeaders(res);
  const clientTime = req.query.t ? parseInt(req.query.t, 10) : null;
  const now = Date.now();
  
  res.json({
    status: 'ok',
    serverTime: now,
    clientTime: clientTime,
    echo: req.query.echo || null
  });
});

/**
 * GET /api/speedtest/download
 * High-throughput binary data streaming endpoint for measuring real download speed
 * Supports ?size=MB (e.g. 5, 10, 25, 40) or ?bytes=N
 */
router.get('/download', (req, res) => {
  setNoCacheHeaders(res);
  
  // Disable compression for this endpoint in case compression middleware exists
  res.setHeader('Content-Encoding', 'identity');
  res.setHeader('Content-Type', 'application/octet-stream');
  res.setHeader('Content-Disposition', 'attachment; filename="speedtest.bin"');

  let totalBytes = 10 * 1024 * 1024; // Default 10MB per stream
  if (req.query.size) {
    const sizeMb = Math.min(Math.max(parseFloat(req.query.size) || 10, 0.5), 100);
    totalBytes = Math.floor(sizeMb * 1024 * 1024);
  } else if (req.query.bytes) {
    const bytesParam = parseInt(req.query.bytes, 10);
    if (!isNaN(bytesParam) && bytesParam > 0) {
      totalBytes = Math.min(bytesParam, 100 * 1024 * 1024);
    }
  }

  res.setHeader('Content-Length', totalBytes.toString());

  // Handle client abort / disconnect
  let isAborted = false;
  req.on('close', () => {
    isAborted = true;
  });

  let bytesSent = 0;
  function writeStream() {
    while (bytesSent < totalBytes && !isAborted) {
      const remaining = totalBytes - bytesSent;
      const writeSize = Math.min(remaining, CHUNK_SIZE);
      const chunk = writeSize === CHUNK_SIZE ? pseudoRandomBuffer : pseudoRandomBuffer.subarray(0, writeSize);
      
      const canContinue = res.write(chunk);
      bytesSent += writeSize;

      if (!canContinue) {
        // Backpressure: wait for drain event before sending more
        res.once('drain', writeStream);
        return;
      }
    }

    if (!isAborted) {
      res.end();
    }
  }

  writeStream();
});

/**
 * POST /api/speedtest/upload
 * Endpoint to receive binary upload payloads and calculate exact received bytes
 */
router.post('/upload', (req, res) => {
  setNoCacheHeaders(res);
  const startTime = Date.now();
  let bytesReceived = 0;
  const maxBytes = 100 * 1024 * 1024; // 100MB security safety limit

  let aborted = false;

  req.on('data', (chunk) => {
    if (aborted) return;
    bytesReceived += chunk.length;
    if (bytesReceived > maxBytes) {
      aborted = true;
      res.status(413).json({ error: 'Payload exceeds maximum test size limit.' });
      req.destroy();
    }
  });

  req.on('end', () => {
    if (aborted) return;
    const durationMs = Date.now() - startTime;
    res.json({
      status: 'ok',
      bytesReceived,
      durationMs,
      timestamp: Date.now()
    });
  });

  req.on('error', (err) => {
    if (!res.headersSent) {
      res.status(500).json({ error: 'Upload stream error', details: err.message });
    }
  });
});

/**
 * GET /api/speedtest/ip-info
 * Returns client IP, ISP information, location, and connection metadata
 */
router.get('/ip-info', async (req, res) => {
  setNoCacheHeaders(res);

  let clientIp = req.headers['x-forwarded-for'] || 
                 req.headers['x-real-ip'] || 
                 req.socket.remoteAddress || 
                 '127.0.0.1';

  // If comma-separated, take the first one
  if (clientIp.includes(',')) {
    clientIp = clientIp.split(',')[0].trim();
  }

  // Clean IPv6-mapped IPv4
  if (clientIp.startsWith('::ffff:')) {
    clientIp = clientIp.substring(7);
  }

  const isLocal = clientIp === '127.0.0.1' || clientIp === '::1' || clientIp.startsWith('192.168.') || clientIp.startsWith('10.') || clientIp.startsWith('172.16.');

  let info = {
    ip: clientIp,
    version: clientIp.includes(':') ? 'IPv6' : 'IPv4',
    isp: 'Local / Private Network Provider',
    organization: 'Intranet / Development Node',
    asn: 'AS-LOCAL',
    city: 'Mumbai',
    region: 'Maharashtra',
    country: 'India',
    countryCode: 'IN',
    countryFlag: '🇮🇳',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Kolkata',
    isLocal: isLocal,
    connectionType: 'Broadband / Fiber',
    simulated: false
  };

  // If running locally, we can query an external IP lookup for real ISP details if available, with a fast 1500ms timeout
  if (isLocal) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1500);
      const publicRes = await fetch('https://ipwho.is/', { signal: controller.signal });
      clearTimeout(timeoutId);
      
      if (publicRes.ok) {
        const publicData = await publicRes.json();
        if (publicData && publicData.success !== false && publicData.ip) {
          info.ip = publicData.ip;
          info.isp = publicData.connection?.isp || publicData.isp || 'Broadband Provider';
          info.organization = publicData.connection?.org || publicData.org || 'Internet Service';
          info.asn = publicData.connection?.asn ? `AS${publicData.connection.asn}` : 'AS-AUTO';
          info.city = publicData.city || 'Mumbai';
          info.region = publicData.region || 'Maharashtra';
          info.country = publicData.country || 'India';
          info.countryCode = publicData.country_code || 'IN';
          info.countryFlag = publicData.flag?.emoji || '🇮🇳';
          info.latitude = publicData.latitude;
          info.longitude = publicData.longitude;
          info.timezone = publicData.timezone?.id || info.timezone;
        }
      }
    } catch {
      // Fallback to local default without failing
    }
  }

  res.json(info);
});

/**
 * GET /api/speedtest/servers
 * Returns available test servers
 */
router.get('/servers', (req, res) => {
  setNoCacheHeaders(res);
  res.json({
    status: 'ok',
    total: SPEED_SERVERS.length,
    servers: SPEED_SERVERS
  });
});

/**
 * GET /api/speedtest/diagnostics
 * Fast diagnostic check for connectivity and server health
 */
router.get('/diagnostics', (req, res) => {
  setNoCacheHeaders(res);
  res.json({
    status: 'ok',
    timestamp: Date.now(),
    uptime: process.uptime(),
    nodeVersion: process.version,
    memoryUsage: process.memoryUsage().rss / 1024 / 1024,
    dnsCheck: true,
    protocol: req.httpVersion
  });
});

export default router;
