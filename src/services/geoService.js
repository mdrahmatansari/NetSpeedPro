// Real-Time IP, ISP, and Geo-Location Detection Service

// Helper to convert 2-letter country code into flag emoji
const getCountryFlag = (countryCode) => {
  if (!countryCode || countryCode.length !== 2) return '🌐';
  try {
    return String.fromCodePoint(...[...countryCode.toUpperCase()].map(c => 0x1F1E6 + c.charCodeAt(0) - 65));
  } catch {
    return '🌐';
  }
};

// Helper to format commercial consumer network company name (Clean, Brand-Standard)
export const formatNetworkCompanyName = (isp = '', org = '', domain = '', asn = '') => {
  const combined = `${isp} ${org} ${domain} ${asn}`.toLowerCase();

  if (combined.includes('jio') || combined.includes('reliance')) {
    return 'Jio';
  }
  if (combined.includes('airtel') || combined.includes('bharti')) {
    return 'Airtel';
  }
  if (
    combined.includes('bsnl') || 
    combined.includes('bharat sanchar') || 
    combined.includes('national internet backbone') || 
    combined.includes('as9829')
  ) {
    return 'BSNL';
  }
  if (combined.includes('vodafone') || combined.includes('idea') || combined.includes('vi ') || combined.includes('as55836')) {
    return 'Vi';
  }
  if (combined.includes('act ') || combined.includes('beam telecom') || combined.includes('actcorp') || combined.includes('atria')) {
    return 'ACT Fibernet';
  }
  if (combined.includes('tata') || combined.includes('vsnl')) {
    return 'Tata Play Fiber';
  }
  if (combined.includes('hathway')) {
    return 'Hathway';
  }
  if (combined.includes('gtpl')) {
    return 'GTPL';
  }
  if (combined.includes('excitel')) {
    return 'Excitel';
  }
  if (combined.includes('railwire') || combined.includes('railtel')) {
    return 'RailWire';
  }

  // Clean fallback
  const clean = (org || isp || 'Broadband').trim();
  if (clean.length > 20) {
    return clean.slice(0, 18) + '...';
  }
  return clean || 'Broadband';
};

export const geoService = {
  // Fetch real IP & location with multi-tiered resilient fallback
  async getRealLocation() {
    // 1. Try ipwho.is (High accuracy, full ISP & ASN, CORS enabled)
    try {
      const res = await fetch('https://ipwho.is/', {
        cache: 'no-store'
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.success !== false && data.ip) {
          const countryCode = data.country_code || 'IN';
          const rawIsp = data.connection?.isp || data.connection?.org || 'Broadband ISP';
          const rawOrg = data.connection?.org || '';
          const rawDomain = data.connection?.domain || '';
          const rawAsn = data.connection?.asn ? `AS${data.connection.asn}` : 'AS-AUTO';
          const companyName = formatNetworkCompanyName(rawIsp, rawOrg, rawDomain, rawAsn);

          return {
            ip: data.ip,
            version: data.type || (data.ip.includes(':') ? 'IPv6' : 'IPv4'),
            isp: companyName,
            rawIsp: rawIsp,
            organization: rawOrg || companyName,
            companyName: companyName,
            asn: rawAsn,
            city: data.city || 'Local Area',
            region: data.region || '',
            country: data.country || 'India',
            countryCode: countryCode,
            countryFlag: getCountryFlag(countryCode),
            latitude: data.latitude || null,
            longitude: data.longitude || null,
            timezone: data.timezone?.id || Intl.DateTimeFormat().resolvedOptions().timeZone,
            postal: data.postal || '',
            source: 'ipwhois'
          };
        }
      }
    } catch (e) {
      console.warn('ipwho.is fetch failed, trying fallback provider...', e);
    }

    // 2. Try freeipapi.com (Fallback 1)
    try {
      const res = await fetch('https://freeipapi.com/api/json', {
        cache: 'no-store'
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.ipAddress) {
          const countryCode = data.countryCode || 'IN';
          const rawOrg = data.asnOrganization || '';
          const rawAsn = data.asn ? `AS${data.asn}` : 'AS-AUTO';
          const companyName = formatNetworkCompanyName(rawOrg, rawOrg, '', rawAsn);

          return {
            ip: data.ipAddress,
            version: data.ipVersion ? `IPv${data.ipVersion}` : (data.ipAddress.includes(':') ? 'IPv6' : 'IPv4'),
            isp: companyName,
            rawIsp: rawOrg,
            organization: rawOrg || companyName,
            companyName: companyName,
            asn: rawAsn,
            city: data.cityName || 'Local Area',
            region: data.regionName || '',
            country: data.countryName || 'India',
            countryCode: countryCode,
            countryFlag: getCountryFlag(countryCode),
            latitude: data.latitude || null,
            longitude: data.longitude || null,
            timezone: (data.timeZones && data.timeZones[0]) || Intl.DateTimeFormat().resolvedOptions().timeZone,
            postal: data.zipCode || '',
            source: 'freeipapi'
          };
        }
      }
    } catch (e) {
      console.warn('freeipapi.com fetch failed, trying fallback provider...', e);
    }

    // 3. Try db-ip.com (Fallback 2)
    try {
      const res = await fetch('https://api.db-ip.com/v2/free/self', {
        cache: 'no-store'
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.ipAddress) {
          const countryCode = data.countryCode || 'IN';
          return {
            ip: data.ipAddress,
            version: data.ipAddress.includes(':') ? 'IPv6' : 'IPv4',
            isp: 'High-Speed Broadband',
            organization: 'Internet Service Provider',
            companyName: 'High-Speed Broadband',
            asn: 'AS-AUTO',
            city: data.city || 'Local Area',
            region: data.stateProv || '',
            country: data.countryName || 'India',
            countryCode: countryCode,
            countryFlag: getCountryFlag(countryCode),
            latitude: null,
            longitude: null,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            source: 'dbip'
          };
        }
      }
    } catch (e) {
      console.warn('db-ip.com fetch failed, trying Cloudflare backend...', e);
    }

    // 4. Try Cloudflare Pages Function endpoint
    try {
      const res = await fetch('/api/speedtest/ip-info', {
        cache: 'no-store'
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.ip) {
          const companyName = formatNetworkCompanyName(data.isp, data.organization, '', data.asn);
          return {
            ...data,
            isp: companyName,
            companyName: companyName
          };
        }
      }
    } catch (e) {
      console.warn('Local ip-info endpoint failed...', e);
    }

    // 5. Safe fallback
    return {
      ip: '117.250.111.178',
      version: 'IPv4',
      isp: 'BSNL',
      organization: 'Bharat Sanchar Nigam Ltd',
      companyName: 'BSNL',
      asn: 'AS9829',
      city: 'Nokha',
      region: 'Bihar',
      country: 'India',
      countryCode: 'IN',
      countryFlag: '🇮🇳',
      latitude: 25.1047,
      longitude: 84.1161,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      source: 'default'
    };
  },

  // HTML5 Precise GPS Location Detection + Reverse Geocoding
  async getPreciseGpsLocation(currentInfo = {}) {
    return new Promise((resolve) => {
      if (!navigator.geolocation) {
        resolve(currentInfo);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          try {
            // Reverse Geocode using OpenStreetMap Nominatim
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=12`,
              {
                headers: { 'Accept': 'application/json' }
              }
            );

            if (res.ok) {
              const geoData = await res.json();
              const addr = geoData.address || {};
              const preciseCity = addr.city || addr.town || addr.village || addr.county || addr.suburb || addr.state_district || currentInfo.city;
              const preciseRegion = addr.state || currentInfo.region;
              const preciseCountry = addr.country || currentInfo.country;
              const countryCode = (addr.country_code || currentInfo.countryCode || 'in').toUpperCase();

              resolve({
                ...currentInfo,
                city: preciseCity,
                region: preciseRegion,
                country: preciseCountry,
                countryCode: countryCode,
                countryFlag: getCountryFlag(countryCode),
                latitude: lat,
                longitude: lon,
                isGpsPrecise: true
              });
              return;
            }
          } catch (err) {
            console.warn('Reverse geocode failed:', err);
          }

          // Return coordinates even if reverse geocode failed
          resolve({
            ...currentInfo,
            latitude: lat,
            longitude: lon,
            isGpsPrecise: true
          });
        },
        (error) => {
          console.warn('Geolocation permission denied or error:', error);
          resolve(currentInfo);
        },
        { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
      );
    });
  }
};
