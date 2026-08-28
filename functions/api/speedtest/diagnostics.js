export async function onRequest(context) {
  const { request } = context;
  const cf = request.cf || {};

  return new Response(JSON.stringify({
    status: 'ok',
    timestamp: Date.now(),
    edgeColo: cf.colo || 'GLOBAL',
    httpProtocol: cf.httpProtocol || 'HTTP/2 / HTTP/3',
    country: cf.country || 'Global',
    tlsVersion: cf.tlsVersion || 'TLSv1.3',
    dnsCheck: true
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
