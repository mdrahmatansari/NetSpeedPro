export async function onRequest(context) {
  const { request } = context;
  const cf = request.cf || {};
  
  const clientIp = request.headers.get('cf-connecting-ip') || 
                   request.headers.get('x-forwarded-for') || 
                   '103.21.244.0';

  // Helper to convert 2-letter country code into emoji flag
  const getFlag = (code) => {
    if (!code || code.length !== 2) return '🌐';
    return String.fromCodePoint(...[...code.toUpperCase()].map(c => 0x1F1E6 + c.charCodeAt(0) - 65));
  };

  const countryCode = cf.country || 'IN';

  const info = {
    ip: clientIp,
    version: clientIp.includes(':') ? 'IPv6' : 'IPv4',
    isp: cf.asOrganization || 'Cloudflare Edge Network / ISP',
    organization: cf.asOrganization || 'Cloudflare Global Anycast Edge',
    asn: cf.asn ? `AS${cf.asn}` : 'AS13335',
    city: cf.city || 'Edge Node',
    region: cf.region || 'Edge Region',
    country: cf.country || 'India',
    countryCode: countryCode,
    countryFlag: getFlag(countryCode),
    latitude: cf.latitude || null,
    longitude: cf.longitude || null,
    timezone: cf.timezone || 'Asia/Kolkata',
    isLocal: false,
    connectionType: 'Edge Anycast Fiber / Broadband',
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
