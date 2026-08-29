// Server List Management & Geolocation-based Server Selection Service

export const DEFAULT_SERVERS = [
  // India Nodes
  { id: 'in-bom-1', name: 'Mumbai Server', city: 'Mumbai', country: 'India', countryCode: 'IN', sponsor: 'NetSpeedPro Edge - Reliance Jio IDC', lat: 19.0760, lon: 72.8777, status: 'online', isDefault: true },
  { id: 'in-del-1', name: 'Delhi Server', city: 'Delhi/NCR', country: 'India', countryCode: 'IN', sponsor: 'NetSpeedPro Edge - Airtel Core', lat: 28.6139, lon: 77.2090, status: 'online' },
  { id: 'in-pat-1', name: 'Patna Server', city: 'Patna/Bihar', country: 'India', countryCode: 'IN', sponsor: 'NetSpeedPro Edge - BSNL Eastern Hub', lat: 25.5941, lon: 85.1376, status: 'online' },
  { id: 'in-blr-1', name: 'Bengaluru Server', city: 'Bengaluru', country: 'India', countryCode: 'IN', sponsor: 'NetSpeedPro Edge - ACT Fibernet Node', lat: 12.9716, lon: 77.5946, status: 'online' },
  { id: 'in-hyd-1', name: 'Hyderabad Server', city: 'Hyderabad', country: 'India', countryCode: 'IN', sponsor: 'NetSpeedPro Edge - CtrlS Data Center', lat: 17.3850, lon: 78.4867, status: 'online' },
  { id: 'in-maa-1', name: 'Chennai Server', city: 'Chennai', country: 'India', countryCode: 'IN', sponsor: 'NetSpeedPro Edge - Tata Communications', lat: 13.0827, lon: 80.2707, status: 'online' },
  { id: 'in-ccu-1', name: 'Kolkata Server', city: 'Kolkata', country: 'India', countryCode: 'IN', sponsor: 'NetSpeedPro Edge - BSNL Backbone', lat: 22.5726, lon: 88.3639, status: 'online' },
  { id: 'in-pnq-1', name: 'Pune Server', city: 'Pune', country: 'India', countryCode: 'IN', sponsor: 'NetSpeedPro Edge - Vodafone Idea Core', lat: 18.5204, lon: 73.8567, status: 'online' },
  { id: 'in-amd-1', name: 'Ahmedabad Server', city: 'Ahmedabad', country: 'India', countryCode: 'IN', sponsor: 'NetSpeedPro Edge - GTPL Hathway Hub', lat: 23.0225, lon: 72.5714, status: 'online' },
  { id: 'in-jai-1', name: 'Jaipur Server', city: 'Jaipur', country: 'India', countryCode: 'IN', sponsor: 'NetSpeedPro Edge - Telelink PoP', lat: 26.9124, lon: 75.7873, status: 'online' },

  // Global Nodes
  { id: 'sg-sin-1', name: 'Singapore Server', city: 'Singapore', country: 'Singapore', countryCode: 'SG', sponsor: 'NetSpeedPro Global - Equinix SG1', lat: 1.3521, lon: 103.8198, status: 'online' },
  { id: 'ae-dxb-1', name: 'Dubai Server', city: 'Dubai', country: 'United Arab Emirates', countryCode: 'AE', sponsor: 'NetSpeedPro Global - UAE-IX Node', lat: 25.2048, lon: 55.2708, status: 'online' },
  { id: 'jp-tyo-1', name: 'Tokyo Server', city: 'Tokyo', country: 'Japan', countryCode: 'JP', sponsor: 'NetSpeedPro Global - NTT Communications', lat: 35.6762, lon: 139.6503, status: 'online' },
  { id: 'de-fra-1', name: 'Frankfurt Server', city: 'Frankfurt', country: 'Germany', countryCode: 'DE', sponsor: 'NetSpeedPro Global - DE-CIX Core', lat: 50.1109, lon: 8.6821, status: 'online' },
  { id: 'gb-lon-1', name: 'London Server', city: 'London', country: 'United Kingdom', countryCode: 'GB', sponsor: 'NetSpeedPro Global - LINX Hub', lat: 51.5074, lon: -0.1278, status: 'online' },
  { id: 'us-nyc-1', name: 'New York Server', city: 'New York', country: 'United States', countryCode: 'US', sponsor: 'NetSpeedPro Global - Digital Realty NY', lat: 40.7128, lon: -74.0060, status: 'online' },
  { id: 'us-sfo-1', name: 'San Francisco Server', city: 'San Francisco', country: 'United States', countryCode: 'US', sponsor: 'NetSpeedPro Global - Bay Area Exchange', lat: 37.7749, lon: -122.4194, status: 'online' },
  { id: 'au-syd-1', name: 'Sydney Server', city: 'Sydney', country: 'Australia', countryCode: 'AU', sponsor: 'NetSpeedPro Global - Equinix SY3', lat: -33.8688, lon: 151.2093, status: 'online' }
];

// Haversine distance formula in kilometers
function getDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export const serverService = {
  // Fetch servers from backend or return full built-in default list
  async fetchServers() {
    try {
      const res = await fetch('/api/speedtest/servers');
      if (res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data.servers) && data.servers.length > 0) {
          return data.servers;
        }
      }
    } catch (e) {
      console.warn('Backend server list fetch failed, using built-in high-speed servers:', e);
    }
    return DEFAULT_SERVERS;
  },

  // Auto-select nearest server based on user coordinates or country
  findNearestServer(servers, lat, lon, countryCode = 'IN') {
    if (!servers || servers.length === 0) return DEFAULT_SERVERS[0];

    // If user has valid GPS/IP coordinates, compute closest node
    if (typeof lat === 'number' && typeof lon === 'number') {
      let nearest = servers[0];
      let minDistance = Infinity;

      for (const s of servers) {
        if (typeof s.lat === 'number' && typeof s.lon === 'number') {
          const dist = getDistanceKm(lat, lon, s.lat, s.lon);
          if (dist < minDistance) {
            minDistance = dist;
            nearest = s;
          }
        }
      }
      return nearest;
    }

    // Match by country code
    const countryMatch = servers.find(s => s.countryCode === countryCode);
    if (countryMatch) return countryMatch;

    return servers.find(s => s.isDefault) || servers[0];
  }
};
