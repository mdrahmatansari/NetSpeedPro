// NETSPEEDPRO Speedtest Awards™ Dataset

export const SPEEDTEST_AWARDS_DATA = {
  currentYear: 2026,
  lastUpdated: 'Q3 2026',
  programOverview: 'The NETSPEEDPRO Speedtest Awards™ recognize the top-performing internet service providers and mobile network operators worldwide based on real consumer speed test measurements.',
  eligibilityThreshold: 'Providers must register a minimum sample volume of 500,000 unique user tests per quarter and demonstrate coverage across at least 70% of their designated operating territory.',
  
  categories: [
    {
      id: 'fastest-broadband',
      title: 'Fastest Fixed Broadband Network',
      icon: 'Zap',
      badgeColor: 'emerald',
      description: 'Awarded to the fixed broadband provider achieving the highest average download and upload throughput across nationwide consumer tests.',
      winners2026: [
        { region: 'United States', winner: 'Google Fiber', score: '980.4 Mbps Avg', runnerUp: 'Verizon Fios' },
        { region: 'India', winner: 'ACT Fibernet / Airtel Xstream', score: '340.1 Mbps Avg', runnerUp: 'Jio Fiber' },
        { region: 'United Kingdom', winner: 'Community Fibre', score: '420.5 Mbps Avg', runnerUp: 'Hyperoptic' },
        { region: 'Singapore', winner: 'Singtel Fiber 10G', score: '890.5 Mbps Avg', runnerUp: 'ViewQwest' }
      ]
    },
    {
      id: 'fastest-mobile-5g',
      title: 'Fastest 5G Mobile Network',
      icon: 'Smartphone',
      badgeColor: 'cyan',
      description: 'Recognizes the mobile operator delivering the fastest median 5G download throughput and widest Standalone (SA) 5G coverage.',
      winners2026: [
        { region: 'United States', winner: 'T-Mobile 5G Ultra Capacity', score: '248.6 Mbps Median', runnerUp: 'Verizon 5G' },
        { region: 'India', winner: 'Jio True 5G (Standalone)', score: '285.4 Mbps Median', runnerUp: 'Airtel 5G Plus' },
        { region: 'Middle East (UAE)', winner: 'e& (Etisalat 5G)', score: '395.2 Mbps Median', runnerUp: 'du 5G' },
        { region: 'South Korea', winner: 'SK Telecom', score: '312.8 Mbps Median', runnerUp: 'KT 5G' }
      ]
    },
    {
      id: 'best-gaming-latency',
      title: 'Best Gaming Latency & Stability Award',
      icon: 'Gamepad2',
      badgeColor: 'purple',
      description: 'Awarded to the ISP delivering the lowest median round-trip ping latency, lowest jitter variance (<2ms), and 0% packet loss to major game server clusters.',
      winners2026: [
        { region: 'United States', winner: 'Verizon Fios Gigabit', score: '6.8 ms Latency', runnerUp: 'AT&T Fiber' },
        { region: 'India', winner: 'Airtel Xstream Fiber', score: '9.4 ms Latency', runnerUp: 'ACT Fibernet' },
        { region: 'Europe (Germany)', winner: 'Init7 / Deutsche Telekom Fiber', score: '5.2 ms Latency', runnerUp: 'Vodafone Fiber' }
      ]
    },
    {
      id: 'best-video-streaming',
      title: 'Best 4K Video Streaming Experience',
      icon: 'Tv',
      badgeColor: 'amber',
      description: 'Measures video start time, zero-buffering percentage, and sustained multi-stream 4K/8K delivery consistency during peak network hours.',
      winners2026: [
        { region: 'United States', winner: 'AT&T Fiber', score: '99.9% 4K Buffer-Free', runnerUp: 'Comcast Xfinity' },
        { region: 'India', winner: 'Jio Fiber', score: '99.4% 4K Buffer-Free', runnerUp: 'Tata Play Fiber' },
        { region: 'United Kingdom', winner: 'BT Broadband / EE', score: '99.1% 4K Buffer-Free', runnerUp: 'Virgin Media' }
      ]
    },
    {
      id: 'best-reliability',
      title: 'Most Consistent Network Reliability',
      icon: 'ShieldCheck',
      badgeColor: 'emerald',
      description: 'Awarded to providers maintaining at least 90% of advertised subscription speeds during 99.5%+ of all test measurements.',
      winners2026: [
        { region: 'Global Fixed', winner: 'Google Fiber & Singtel', score: '99.8% Consistency', runnerUp: 'Verizon Fios' },
        { region: 'Global Mobile', winner: 'Swisscom 5G', score: '99.2% Consistency', runnerUp: 'T-Mobile US' }
      ]
    }
  ],

  historicalWinners: [
    {
      year: 2025,
      summary: '2025 marked the mass adoption of 10G-PON fiber and widespread Standalone 5G rollouts in Asia and North America.',
      topFixed: 'Singtel (Singapore) & Verizon Fios (USA)',
      topMobile: 'e& Etisalat (UAE) & T-Mobile (USA)',
      topGaming: 'Google Fiber (USA) & ACT Fibernet (India)'
    },
    {
      year: 2024,
      summary: '2024 witnessed mid-band 5G spectrum consolidation and massive FTTH rural fiber expansions worldwide.',
      topFixed: 'Mundo (Chile) & Google Fiber (USA)',
      topMobile: 'SK Telecom (South Korea) & Jio 5G (India)',
      topGaming: 'Verizon Fios (USA)'
    },
    {
      year: 2023,
      summary: 'Initial commercial deployments of Wi-Fi 6E mesh routers and multi-gigabit residential broadband tiers.',
      topFixed: 'Singtel (Singapore) & AT&T Fiber (USA)',
      topMobile: 'Etisalat (UAE) & T-Mobile (USA)',
      topGaming: 'Init7 (Switzerland)'
    }
  ],

  methodologyFaq: [
    {
      q: 'How are NETSPEEDPRO Speedtest Award winners determined?',
      a: 'Winners are determined strictly by analyzing millions of real consumer speed tests performed on the NETSPEEDPRO platform over a 12-month period, calculating 90th percentile speeds, median latency, and consistency index.'
    },
    {
      q: 'Can an ISP pay to receive an award?',
      a: 'No. NETSPEEDPRO awards are 100% data-driven and objective. Commercial sponsorships or affiliations do not influence rankings or scores.'
    },
    {
      q: 'What is the Consistency Score?',
      a: 'The Consistency Score reflects the percentage of a provider’s speed test results that meet or exceed a threshold of 25 Mbps download and 3 Mbps upload for broadband, and 10 Mbps download for mobile.'
    }
  ]
};
