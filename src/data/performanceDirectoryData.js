// NETSPEEDPRO Speedtest Performance Directory Dataset

export const PERFORMANCE_METRICS_INFO = [
  {
    id: 'download',
    name: 'Download Throughput',
    unit: 'Mbps / Gbps',
    importance: 'Critical for Web, 4K/8K Streaming & File Downloads',
    description: 'Measures how rapidly data streams from high-bandwidth multi-threaded WebSockets edge nodes to your device.',
    goodRange: '100 - 1000+ Mbps',
    howTested: 'Saturates TCP buffers using concurrent multi-stream binary blob chunks with microsecond Performance API timing.'
  },
  {
    id: 'upload',
    name: 'Upload Bandwidth',
    unit: 'Mbps / Gbps',
    importance: 'Essential for Video Calls, Cloud Backups & Creators',
    description: 'Measures how quickly your local machine can push payload data up to remote cloud servers.',
    goodRange: '50 - 1000+ Mbps (Symmetrical on Pure Fiber)',
    howTested: 'Generates randomized entropy payload arrays transmitted via parallel HTTP/WebSockets POST streams.'
  },
  {
    id: 'ping',
    name: 'Idle Ping (Latency)',
    unit: 'Milliseconds (ms)',
    importance: 'Essential for Competitive Gaming & Fast Page Loads',
    description: 'The physical round-trip time required for a packet to travel to the closest exchange node and return.',
    goodRange: '< 20 ms (Fiber: 1-8 ms)',
    howTested: 'Measures high-precision round-trip time across 10+ sequential ICMP/WebSocket echo samples.'
  },
  {
    id: 'jitter',
    name: 'Jitter Variance',
    unit: 'Milliseconds (ms)',
    importance: 'Crucial for VoIP, Discord & Zoom Audio Clarity',
    description: 'The statistical standard deviation in latency timing between sequential packet arrivals.',
    goodRange: '< 3 ms (Stable)',
    howTested: 'Calculated using RFC 3550 statistical deviation formulas across all ping sample iterations.'
  },
  {
    id: 'bufferbloat',
    name: 'Loaded Latency (Bufferbloat)',
    unit: 'Milliseconds (ms) / Rating',
    importance: 'Prevents In-Game Lag Spikes Under Family Load',
    description: 'Measures how much ping latency degrades while the connection is 100% saturated with download or upload traffic.',
    goodRange: '+0 ms to +20 ms over idle',
    howTested: 'Continuous ping sampling executed simultaneously inside the active multi-stream download and upload phases.'
  }
];

export const ISP_DIRECTORY_DATA = [
  {
    id: 'google-fiber',
    name: 'Google Fiber',
    country: 'United States',
    countryCode: 'us',
    type: 'FTTH (Pure Fiber)',
    avgDownload: 980.4,
    avgUpload: 975.2,
    avgPing: 4.8,
    avgJitter: 0.8,
    stabilityScore: '99.9%',
    rating: 5.0,
    sampleCount: '2.1M tests',
    tech: '10G / 20G Active Optical',
    coverage: 'Key US Metros'
  },
  {
    id: 'singtel-fiber',
    name: 'Singtel Fiber 10G',
    country: 'Singapore',
    countryCode: 'sg',
    type: 'FTTH (Pure Fiber)',
    avgDownload: 920.8,
    avgUpload: 895.4,
    avgPing: 3.2,
    avgJitter: 0.6,
    stabilityScore: '99.9%',
    rating: 5.0,
    sampleCount: '1.8M tests',
    tech: '10G XGS-PON',
    coverage: 'Singapore Nationwide'
  },
  {
    id: 'verizon-fios',
    name: 'Verizon Fios',
    country: 'United States',
    countryCode: 'us',
    type: 'FTTH (Pure Fiber)',
    avgDownload: 620.5,
    avgUpload: 610.8,
    avgPing: 7.2,
    avgJitter: 1.1,
    stabilityScore: '99.7%',
    rating: 4.9,
    sampleCount: '5.8M tests',
    tech: 'XGS-PON 10G',
    coverage: 'US East Coast & Mid-Atlantic'
  },
  {
    id: 'att-fiber',
    name: 'AT&T Fiber',
    country: 'United States',
    countryCode: 'us',
    type: 'FTTH (Pure Fiber)',
    avgDownload: 590.2,
    avgUpload: 585.1,
    avgPing: 8.9,
    avgJitter: 1.3,
    stabilityScore: '99.5%',
    rating: 4.9,
    sampleCount: '6.4M tests',
    tech: 'XGS-PON 10G',
    coverage: 'US Nationwide 21+ States'
  },
  {
    id: 'free-france',
    name: 'Free (Freebox Ultra 10G)',
    country: 'France',
    countryCode: 'fr',
    type: 'FTTH (Pure Fiber)',
    avgDownload: 680.4,
    avgUpload: 620.8,
    avgPing: 6.8,
    avgJitter: 1.0,
    stabilityScore: '99.6%',
    rating: 4.9,
    sampleCount: '3.2M tests',
    tech: '10G-EPON FTTH',
    coverage: 'France Nationwide'
  },
  {
    id: 'community-fibre',
    name: 'Community Fibre',
    country: 'United Kingdom',
    countryCode: 'gb',
    type: 'FTTH (Pure Fiber)',
    avgDownload: 520.6,
    avgUpload: 512.4,
    avgPing: 6.2,
    avgJitter: 1.2,
    stabilityScore: '99.6%',
    rating: 4.9,
    sampleCount: '1.4M tests',
    tech: '100% Full Fibre (FTTP)',
    coverage: 'Greater London'
  },
  {
    id: 'act-fibernet',
    name: 'ACT Fibernet',
    country: 'India',
    countryCode: 'in',
    type: 'FTTH (Pure Fiber)',
    avgDownload: 340.1,
    avgUpload: 335.8,
    avgPing: 8.5,
    avgJitter: 1.4,
    stabilityScore: '99.4%',
    rating: 4.9,
    sampleCount: '1.8M tests',
    tech: 'Metro Ethernet / Gigabit FTTH',
    coverage: 'South, West & North India Metros'
  },
  {
    id: 'airtel-xstream',
    name: 'Airtel Xstream Fiber',
    country: 'India',
    countryCode: 'in',
    type: 'FTTH (Pure Fiber)',
    avgDownload: 298.2,
    avgUpload: 289.5,
    avgPing: 10.8,
    avgJitter: 1.8,
    stabilityScore: '99.1%',
    rating: 4.9,
    sampleCount: '4.2M tests',
    tech: 'GPON / XGS-PON Fiber',
    coverage: 'Pan-India Nationwide (200+ Cities)'
  },
  {
    id: 'jio-fiber',
    name: 'Jio Fiber (Reliance Jio)',
    country: 'India',
    countryCode: 'in',
    type: 'FTTH (Pure Fiber)',
    avgDownload: 285.4,
    avgUpload: 268.9,
    avgPing: 12.4,
    avgJitter: 2.1,
    stabilityScore: '98.6%',
    rating: 4.8,
    sampleCount: '5.6M tests',
    tech: 'GPON / FTTH',
    coverage: 'Pan-India Nationwide (350+ Cities)'
  },
  {
    id: 'tata-play-fiber',
    name: 'Tata Play Fiber',
    country: 'India',
    countryCode: 'in',
    type: 'FTTH (Pure Fiber)',
    avgDownload: 290.5,
    avgUpload: 282.4,
    avgPing: 9.8,
    avgJitter: 1.6,
    stabilityScore: '99.2%',
    rating: 4.8,
    sampleCount: '920K tests',
    tech: 'GPON 100% Optical',
    coverage: 'Major Indian Metros'
  },
  {
    id: 'comcast-xfinity',
    name: 'Comcast Xfinity',
    country: 'United States',
    countryCode: 'us',
    type: 'Hybrid Fiber-Coaxial (Cable)',
    avgDownload: 380.2,
    avgUpload: 45.6,
    avgPing: 14.8,
    avgJitter: 2.8,
    stabilityScore: '97.8%',
    rating: 4.5,
    sampleCount: '8.9M tests',
    tech: 'DOCSIS 3.1 / 4.0 Cable',
    coverage: 'US Nationwide 39+ States'
  },
  {
    id: 'deutsche-telekom',
    name: 'Deutsche Telekom Glasfaser',
    country: 'Germany',
    countryCode: 'de',
    type: 'FTTH (Pure Fiber)',
    avgDownload: 360.5,
    avgUpload: 180.2,
    avgPing: 11.4,
    avgJitter: 1.5,
    stabilityScore: '99.3%',
    rating: 4.8,
    sampleCount: '3.4M tests',
    tech: 'FTTH Gigabit',
    coverage: 'Germany Nationwide'
  },
  {
    id: 'swisscom-fiber',
    name: 'Swisscom Fiber',
    country: 'Switzerland',
    countryCode: 'ch',
    type: 'FTTH (Pure Fiber)',
    avgDownload: 540.2,
    avgUpload: 530.8,
    avgPing: 5.4,
    avgJitter: 0.9,
    stabilityScore: '99.8%',
    rating: 5.0,
    sampleCount: '1.2M tests',
    tech: 'XGS-PON 10G',
    coverage: 'Switzerland Nationwide'
  },
  {
    id: 'telstra-fiber',
    name: 'Telstra NBN Full Fibre',
    country: 'Australia',
    countryCode: 'au',
    type: 'FTTH (Pure Fiber)',
    avgDownload: 245.8,
    avgUpload: 48.2,
    avgPing: 14.2,
    avgJitter: 2.0,
    stabilityScore: '98.5%',
    rating: 4.6,
    sampleCount: '2.8M tests',
    tech: 'NBN FTTP Optical',
    coverage: 'Australia Nationwide'
  },
  {
    id: 'starlink-satellite',
    name: 'Starlink (SpaceX LEO)',
    country: 'Global',
    countryCode: 'us',
    type: 'Low Earth Orbit (Satellite)',
    avgDownload: 148.6,
    avgUpload: 22.4,
    avgPing: 34.8,
    avgJitter: 6.2,
    stabilityScore: '96.2%',
    rating: 4.7,
    sampleCount: '3.9M tests',
    tech: 'LEO Ku/Ka-Band Phased Array',
    coverage: 'Global / Rural & Remote 75+ Countries'
  }
];

export const METHODOLOGY_EXPLANATION = {
  title: 'How NETSPEEDPRO Measures Network Performance',
  lead: 'NETSPEEDPRO utilizes multi-threaded browser-native WebSockets and Performance API telemetry to eliminate browser engine bottlenecks and measure true line capacity.',
  pillars: [
    {
      title: '1. Dynamic Multi-Stream Saturation',
      desc: 'Single-thread tests are easily throttled by individual TCP window size limits. NETSPEEDPRO launches up to 16 concurrent worker streams across adaptive payload sizes (256 KB to 16 MB) to completely fill multi-gigabit pipes.'
    },
    {
      title: '2. Microsecond Precision Timing',
      desc: 'Using the W3C High Resolution Time API (`window.performance.now()`), throughput chunks and round-trip ping timestamps are tracked with sub-millisecond precision, discarding initial TCP slow-start spikes.'
    },
    {
      title: '3. Continuous Loaded Jitter & Bufferbloat Tracking',
      desc: 'Ping samples are continuously polled throughout the active download and upload saturation phases, calculating standard deviation (RFC 3550) to measure line stability under real household load.'
    }
  ],
  accuracyChecklist: [
    'Hardwire your testing device via Cat6 Ethernet directly to the router for true line measurement.',
    'Confirm no background downloads, torrents, or cloud sync clients are running in Task Manager.',
    'Temporarily disable active VPN connections and proxy software.',
    'Test across multiple times of day to account for neighborhood peak usage hours.'
  ]
};
