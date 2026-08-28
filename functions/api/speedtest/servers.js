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

export async function onRequest() {
  return new Response(JSON.stringify({
    status: 'ok',
    total: SPEED_SERVERS.length,
    servers: SPEED_SERVERS
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
