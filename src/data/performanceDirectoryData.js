// NETSPEEDPRO Speedtest Performance Directory Dataset

export const PERFORMANCE_METRICS_INFO = [
  {
    id: 'download',
    name: 'Download Throughput',
    unit: 'Mbps / Gbps',
    importance: 'Critical for Web & Streaming',
    description: 'Measures how rapidly data streams from high-bandwidth multi-threaded WebSockets edge servers to your device.',
    goodRange: '100 - 1000+ Mbps',
    howTested: 'Saturates TCP buffers using concurrent multi-stream binary blob chunks with microsecond Performance API timing.'
  },
  {
    id: 'upload',
    name: 'Upload Bandwidth',
    unit: 'Mbps / Gbps',
    importance: 'Essential for Creators & Remote Work',
    description: 'Measures how quickly your local machine can push payload data up to remote cloud servers.',
    goodRange: '50 - 1000+ Mbps (Symmetrical on Fiber)',
    howTested: 'Generates randomized entropy payload arrays transmitted via parallel HTTP/WebSockets POST streams.'
  },
  {
    id: 'ping',
    name: 'Idle Ping (Latency)',
    unit: 'Milliseconds (ms)',
    importance: 'Essential for Gaming & Responsiveness',
    description: 'The physical round-trip time required for a packet to travel to the closest exchange node and return.',
    goodRange: '< 20 ms (Fiber: 1-8 ms)',
    howTested: 'Measures high-precision round-trip time across 10+ sequential ICMP/WebSocket echo samples.'
  },
  {
    id: 'jitter',
    name: 'Jitter Variance',
    unit: 'Milliseconds (ms)',
    importance: 'Crucial for VoIP & Discord Audio',
    description: 'The statistical standard deviation in latency timing between sequential packet arrivals.',
    goodRange: '< 3 ms (Stable)',
    howTested: 'Calculated using RFC 3550 statistical deviation formulas across all ping sample iterations.'
  },
  {
    id: 'bufferbloat',
    name: 'Loaded Latency (Bufferbloat)',
    unit: 'Milliseconds (ms) / Rating',
    importance: 'Prevents Lag Under Household Load',
    description: 'Measures how much ping latency degrades while the connection is 100% saturated with download or upload traffic.',
    goodRange: '+0 ms to +20 ms over idle',
    howTested: 'Continuous ping sampling executed simultaneously inside the active multi-stream download and upload phases.'
  }
];

export const ISP_DIRECTORY_DATA = [
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
    sampleCount: '1.4M tests',
    tech: 'GPON / XGS-PON',
    coverage: 'Pan-India Nationwide'
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
    sampleCount: '1.2M tests',
    tech: 'GPON Fiber',
    coverage: 'Pan-India Metro & Tier 1/2'
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
    sampleCount: '850K tests',
    tech: 'Metro Ethernet / Fiber',
    coverage: 'South & West India Metros'
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
    rating: 5.0,
    sampleCount: '3.8M tests',
    tech: 'XGS-PON 10G',
    coverage: 'US East Coast'
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
    sampleCount: '4.1M tests',
    tech: 'XGS-PON 10G',
    coverage: 'US Nationwide'
  },
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
    sampleCount: '1.1M tests',
    tech: '10G / 20G Active Optical',
    coverage: 'Select US Metro Cities'
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
