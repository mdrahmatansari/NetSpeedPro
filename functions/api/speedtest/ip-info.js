export async function onRequest(context) {
  const { request } = context;
  const cf = request.cf || {};
  
  const clientIp = request.headers.get('cf-connecting-ip') || 
                   request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 
                   request.headers.get('x-real-ip') || 
                   '';

  // Helper to convert 2-letter country code into emoji flag
  const getFlag = (code) => {
    if (!code || code.length !== 2) return '🌐';
    return String.fromCodePoint(...[...code.toUpperCase()].map(c => 0x1F1E6 + c.charCodeAt(0) - 65));
  };

  const countryCode = cf.country || 'IN';

  const info = {
    ip: clientIp || '117.250.111.178',
    version: clientIp.includes(':') ? 'IPv6' : 'IPv4',
    isp: cf.asOrganization || 'Broadband / Fiber Network',
    organization: cf.asOrganization || 'Internet Service Provider',
    asn: cf.asn ? `AS${cf.asn}` : 'AS-AUTO',
    city: cf.city || '',
    region: cf.region || '',
    country: cf.country || 'India',
    countryCode: countryCode,
    countryFlag: getFlag(countryCode),
    latitude: cf.latitude || null,
    longitude: cf.longitude || null,
    timezone: cf.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
    isLocal: false,
    colo: cf.colo || 'GLOBAL'
  };

  return new Response(JSON.stringify(info), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
