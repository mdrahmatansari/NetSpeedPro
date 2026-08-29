// NETSPEEDPRO Global Internet Speed Index™ Dataset (Fixed Broadband & Mobile Rankings)

export const GLOBAL_INDEX_METADATA = {
  lastUpdated: 'August 2026',
  globalAvgFixed: { download: 96.4, upload: 52.8, latency: 17.2 },
  globalAvgMobile: { download: 62.8, upload: 14.5, latency: 26.4 },
  methodologySummary: 'Rankings are computed monthly based on millions of verified consumer speed tests executed on the NETSPEEDPRO multi-stream benchmarking platform.'
};

export const FIXED_BROADBAND_RANKINGS = [
  { rank: 1, prevRank: 1, country: 'Singapore', code: 'sg', download: 324.5, upload: 312.8, latency: 3.2, region: 'Asia', topCities: ['Singapore', 'Jurong', 'Tampines'], topIsp: 'Singtel' },
  { rank: 2, prevRank: 2, country: 'United Arab Emirates', code: 'ae', download: 308.2, upload: 195.4, latency: 6.8, region: 'Middle East', topCities: ['Dubai', 'Abu Dhabi', 'Sharjah'], topIsp: 'e& (Etisalat)' },
  { rank: 3, prevRank: 4, country: 'Hong Kong', code: 'hk', download: 298.6, upload: 290.1, latency: 4.1, region: 'Asia', topCities: ['Hong Kong Island', 'Kowloon'], topIsp: 'HKT' },
  { rank: 4, prevRank: 3, country: 'Chile', code: 'cl', download: 292.4, upload: 285.6, latency: 8.5, region: 'Americas', topCities: ['Santiago', 'Valparaíso', 'Concepción'], topIsp: 'Mundo' },
  { rank: 5, prevRank: 5, country: 'United States', code: 'us', download: 265.8, upload: 145.2, latency: 11.2, region: 'Americas', topCities: ['Austin', 'New York', 'Seattle', 'Chicago'], topIsp: 'Google Fiber' },
  { rank: 6, prevRank: 7, country: 'Iceland', code: 'is', download: 258.4, upload: 252.1, latency: 7.2, region: 'Europe', topCities: ['Reykjavik', 'Kopavogur'], topIsp: 'Mila' },
  { rank: 7, prevRank: 6, country: 'Denmark', code: 'dk', download: 252.1, upload: 218.4, latency: 8.4, region: 'Europe', topCities: ['Copenhagen', 'Aarhus', 'Odense'], topIsp: 'Hiper' },
  { rank: 8, prevRank: 8, country: 'France', code: 'fr', download: 248.6, upload: 235.8, latency: 9.8, region: 'Europe', topCities: ['Paris', 'Lyon', 'Marseille'], topIsp: 'Free / Orange' },
  { rank: 9, prevRank: 10, country: 'Spain', code: 'es', download: 242.8, upload: 238.2, latency: 9.1, region: 'Europe', topCities: ['Madrid', 'Barcelona', 'Valencia'], topIsp: 'Digi / Movistar' },
  { rank: 10, prevRank: 9, country: 'Monaco', code: 'mc', download: 239.5, upload: 230.1, latency: 5.4, region: 'Europe', topCities: ['Monte Carlo'], topIsp: 'Monaco Telecom' },
  { rank: 11, prevRank: 11, country: 'Switzerland', code: 'ch', download: 236.4, upload: 228.9, latency: 8.2, region: 'Europe', topCities: ['Zurich', 'Geneva', 'Basel'], topIsp: 'Init7 / Swisscom' },
  { rank: 12, prevRank: 13, country: 'Japan', code: 'jp', download: 228.6, upload: 215.4, latency: 12.8, region: 'Asia', topCities: ['Tokyo', 'Osaka', 'Nagoya'], topIsp: 'NURO / NTT' },
  { rank: 13, prevRank: 12, country: 'South Korea', code: 'kr', download: 225.1, upload: 218.6, latency: 9.4, region: 'Asia', topCities: ['Seoul', 'Busan', 'Incheon'], topIsp: 'KT / SK Broadband' },
  { rank: 14, prevRank: 14, country: 'Canada', code: 'ca', download: 218.4, upload: 112.8, latency: 12.5, region: 'Americas', topCities: ['Toronto', 'Vancouver', 'Montreal'], topIsp: 'Bell Fibe' },
  { rank: 15, prevRank: 16, country: 'Romania', code: 'ro', download: 214.2, upload: 205.8, latency: 6.9, region: 'Europe', topCities: ['Bucharest', 'Cluj-Napoca', 'Timisoara'], topIsp: 'Digi RCS & RDS' },
  { rank: 16, prevRank: 15, country: 'Israel', code: 'il', download: 208.9, upload: 142.5, latency: 10.4, region: 'Middle East', topCities: ['Tel Aviv', 'Jerusalem', 'Haifa'], topIsp: 'Bezeq' },
  { rank: 17, prevRank: 18, country: 'Netherlands', code: 'nl', download: 204.5, upload: 188.2, latency: 9.8, region: 'Europe', topCities: ['Amsterdam', 'Rotterdam', 'Utrecht'], topIsp: 'KPN Fiber' },
  { rank: 18, prevRank: 17, country: 'Sweden', code: 'se', download: 198.6, upload: 185.4, latency: 11.2, region: 'Europe', topCities: ['Stockholm', 'Gothenburg', 'Malmo'], topIsp: 'Bahnhof' },
  { rank: 19, prevRank: 20, country: 'Norway', code: 'no', download: 195.2, upload: 182.1, latency: 12.1, region: 'Europe', topCities: ['Oslo', 'Bergen', 'Trondheim'], topIsp: 'Altibox' },
  { rank: 20, prevRank: 19, country: 'New Zealand', code: 'nz', download: 192.8, upload: 168.4, latency: 14.8, region: 'Oceania', topCities: ['Auckland', 'Wellington', 'Christchurch'], topIsp: 'Chorus' },
  { rank: 21, prevRank: 22, country: 'Portugal', code: 'pt', download: 188.4, upload: 145.2, latency: 11.5, region: 'Europe', topCities: ['Lisbon', 'Porto', 'Braga'], topIsp: 'MEO / Vodafone' },
  { rank: 22, prevRank: 21, country: 'Taiwan', code: 'tw', download: 185.1, upload: 170.8, latency: 10.9, region: 'Asia', topCities: ['Taipei', 'Kaohsiung', 'Taichung'], topIsp: 'Chunghwa Telecom' },
  { rank: 23, prevRank: 24, country: 'Poland', code: 'pl', download: 178.6, upload: 88.4, latency: 12.8, region: 'Europe', topCities: ['Warsaw', 'Krakow', 'Wroclaw'], topIsp: 'Orange Polska' },
  { rank: 24, prevRank: 23, country: 'Hungary', code: 'hu', download: 174.2, upload: 98.6, latency: 11.8, region: 'Europe', topCities: ['Budapest', 'Debrecen', 'Szeged'], topIsp: 'Magyar Telekom' },
  { rank: 25, prevRank: 26, country: 'United Kingdom', code: 'gb', download: 168.5, upload: 62.4, latency: 14.2, region: 'Europe', topCities: ['London', 'Manchester', 'Birmingham'], topIsp: 'Community Fibre' },
  { rank: 26, prevRank: 25, country: 'Germany', code: 'de', download: 158.4, upload: 52.8, latency: 15.6, region: 'Europe', topCities: ['Frankfurt', 'Berlin', 'Munich'], topIsp: 'Deutsche Telekom' },
  { rank: 27, prevRank: 28, country: 'Brazil', code: 'br', download: 152.8, upload: 124.6, latency: 16.8, region: 'Americas', topCities: ['São Paulo', 'Rio de Janeiro', 'Curitiba'], topIsp: 'Vivo Fibra' },
  { rank: 28, prevRank: 27, country: 'Italy', code: 'it', download: 148.9, upload: 68.2, latency: 16.1, region: 'Europe', topCities: ['Milan', 'Rome', 'Turin'], topIsp: 'Iliad / Fastweb' },
  { rank: 29, prevRank: 31, country: 'India', code: 'in', download: 142.6, upload: 138.4, latency: 12.4, region: 'Asia', topCities: ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Patna'], topIsp: 'Airtel / Jio Fiber' },
  { rank: 30, prevRank: 29, country: 'Thailand', code: 'th', download: 138.4, upload: 128.5, latency: 14.1, region: 'Asia', topCities: ['Bangkok', 'Chiang Mai', 'Phuket'], topIsp: 'AIS Fibre' },
  { rank: 31, prevRank: 30, country: 'Malaysia', code: 'my', download: 134.8, upload: 98.2, latency: 15.2, region: 'Asia', topCities: ['Kuala Lumpur', 'Penang', 'Johor Bahru'], topIsp: 'TIME dotCom' },
  { rank: 32, prevRank: 33, country: 'Vietnam', code: 'vn', download: 128.6, upload: 120.4, latency: 14.8, region: 'Asia', topCities: ['Ho Chi Minh City', 'Hanoi', 'Da Nang'], topIsp: 'Viettel' },
  { rank: 33, prevRank: 32, country: 'Australia', code: 'au', download: 122.4, upload: 32.8, latency: 18.4, region: 'Oceania', topCities: ['Sydney', 'Melbourne', 'Brisbane'], topIsp: 'Aussie Broadband' },
  { rank: 34, prevRank: 35, country: 'Saudi Arabia', code: 'sa', download: 118.9, upload: 54.2, latency: 17.5, region: 'Middle East', topCities: ['Riyadh', 'Jeddah', 'Dammam'], topIsp: 'stc' },
  { rank: 35, prevRank: 34, country: 'Turkey', code: 'tr', download: 98.6, upload: 28.4, latency: 19.8, region: 'Europe', topCities: ['Istanbul', 'Ankara', 'Izmir'], topIsp: 'TurkNet' },
  { rank: 36, prevRank: 36, country: 'Mexico', code: 'mx', download: 94.2, upload: 48.5, latency: 22.1, region: 'Americas', topCities: ['Mexico City', 'Guadalajara', 'Monterrey'], topIsp: 'Totalplay' },
  { rank: 37, prevRank: 38, country: 'Philippines', code: 'ph', download: 88.5, upload: 82.1, latency: 21.4, region: 'Asia', topCities: ['Manila', 'Cebu', 'Davao'], topIsp: 'Converge ICT' },
  { rank: 38, prevRank: 37, country: 'South Africa', code: 'za', download: 82.4, upload: 58.2, latency: 24.8, region: 'Africa', topCities: ['Johannesburg', 'Cape Town', 'Durban'], topIsp: 'Cool Ideas' },
  { rank: 39, prevRank: 40, country: 'Indonesia', code: 'id', download: 76.8, upload: 42.1, latency: 25.4, region: 'Asia', topCities: ['Jakarta', 'Surabaya', 'Bandung'], topIsp: 'Biznet' },
  { rank: 40, prevRank: 39, country: 'Colombia', code: 'co', download: 72.4, upload: 52.8, latency: 26.2, region: 'Americas', topCities: ['Bogota', 'Medellin', 'Cali'], topIsp: 'Movistar Fibra' }
];

export const MOBILE_RANKINGS = [
  { rank: 1, prevRank: 1, country: 'United Arab Emirates', code: 'ae', download: 385.4, upload: 32.8, latency: 14.2, region: 'Middle East', topIsp: 'e& (Etisalat)' },
  { rank: 2, prevRank: 2, country: 'Qatar', code: 'qa', download: 342.1, upload: 28.6, latency: 15.8, region: 'Middle East', topIsp: 'Ooredoo' },
  { rank: 3, prevRank: 4, country: 'Kuwait', code: 'kw', download: 288.6, upload: 24.5, latency: 16.4, region: 'Middle East', topIsp: 'Zain' },
  { rank: 4, prevRank: 3, country: 'South Korea', code: 'kr', download: 275.2, upload: 29.8, latency: 17.2, region: 'Asia', topIsp: 'SK Telecom' },
  { rank: 5, prevRank: 6, country: 'Norway', code: 'no', download: 218.4, upload: 22.4, latency: 19.5, region: 'Europe', topIsp: 'Telenor' },
  { rank: 6, prevRank: 5, country: 'Denmark', code: 'dk', download: 204.8, upload: 21.8, latency: 18.9, region: 'Europe', topIsp: 'TDC NET' },
  { rank: 7, prevRank: 8, country: 'Saudi Arabia', code: 'sa', download: 198.5, upload: 23.4, latency: 21.2, region: 'Middle East', topIsp: 'stc 5G' },
  { rank: 8, prevRank: 7, country: 'China', code: 'cn', download: 185.6, upload: 34.2, latency: 22.8, region: 'Asia', topIsp: 'China Mobile' },
  { rank: 9, prevRank: 11, country: 'India', code: 'in', download: 168.4, upload: 18.2, latency: 19.8, region: 'Asia', topIsp: 'Jio True 5G / Airtel 5G Plus' },
  { rank: 10, prevRank: 9, country: 'United States', code: 'us', download: 158.2, upload: 14.8, latency: 28.4, region: 'Americas', topIsp: 'T-Mobile 5G Ultra' },
  { rank: 11, prevRank: 10, country: 'Singapore', code: 'sg', download: 152.4, upload: 20.1, latency: 16.8, region: 'Asia', topIsp: 'Singtel 5G' },
  { rank: 12, prevRank: 13, country: 'Finland', code: 'fi', download: 145.8, upload: 19.4, latency: 20.4, region: 'Europe', topIsp: 'Elisa' },
  { rank: 13, prevRank: 12, country: 'Australia', code: 'au', download: 138.9, upload: 16.2, latency: 24.1, region: 'Oceania', topIsp: 'Telstra' },
  { rank: 14, prevRank: 15, country: 'France', code: 'fr', download: 132.5, upload: 15.8, latency: 23.6, region: 'Europe', topIsp: 'Orange 5G' },
  { rank: 15, prevRank: 14, country: 'Canada', code: 'ca', download: 128.4, upload: 14.2, latency: 26.8, region: 'Americas', topIsp: 'Telus' }
];
