export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const clientTime = url.searchParams.get('t') ? parseInt(url.searchParams.get('t'), 10) : null;
  const now = Date.now();

  return new Response(JSON.stringify({
    status: 'ok',
    serverTime: now,
    clientTime: clientTime,
    echo: url.searchParams.get('echo') || null
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
