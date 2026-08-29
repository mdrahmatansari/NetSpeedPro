// NETSPEEDPRO Comprehensive Network Guides & Step-by-Step Tutorials (32+ Full Guides)

export const GUIDE_CATEGORIES = [
  'All',
  'Speed & Optimization',
  'Wi-Fi & Routers',
  'Gaming & Low Latency',
  'Hardware & Cabling',
  'Troubleshooting & Diagnostics',
  'Work & Streaming'
];

export const GUIDES_DATA = [
  {
    id: 'how-to-test-internet-speed',
    slug: 'how-to-test-internet-speed-accurately',
    title: 'How to Test Internet Speed Accurately: The Definitive Guide',
    category: 'Speed & Optimization',
    readTime: '6 min read',
    difficulty: 'Beginner',
    featured: true,
    summary: 'Learn the exact methodology to benchmark your genuine download throughput, upload bandwidth, and latency without background app distortion.',
    intro: 'Running an internet speed test is simple, but achieving 100% genuine and reproducible results requires following strict diagnostic testing hygiene. Background updates, Wi-Fi interference, VPN overhead, and browser extensions can artificially reduce test results by 40% to 80%. This guide walks you through the step-by-step procedure to test your connection like a network engineer.',
    steps: [
      {
        stepNumber: 1,
        title: 'Hardwire with an Ethernet Cable (If Possible)',
        description: 'While testing over Wi-Fi is useful for diagnosing wireless coverage, measuring your true ISP subscription throughput requires a physical wired Cat6 Ethernet cable connected directly to a Gigabit or 2.5 GbE router port.',
        tip: 'Testing over Wi-Fi tests both your ISP line and the radio airwaves. Testing over Ethernet isolates your ISP line.'
      },
      {
        stepNumber: 2,
        title: 'Close All Background Applications and Downloads',
        description: 'Steam updates, Windows Update, Torrent clients, OneDrive/Google Drive sync, and cloud backups silently consume bandwidth in the background. Open Task Manager (Ctrl + Shift + Esc) and confirm network utilization is at 0% before starting.',
        tip: 'Check that other household members are not streaming 4K video or downloading massive console updates during your benchmark.'
      },
      {
        stepNumber: 3,
        title: 'Temporarily Disable Active VPNs and Ad-Blockers',
        description: 'VPN encryption and routing through remote data centers introduces 10ms to 80ms of latency overhead and can throttle peak multi-gigabit throughput. Disable your VPN client to measure direct ISP line capability.',
        tip: 'Some browser extensions intercept HTTP traffic and limit WebSockets speed test streaming.'
      },
      {
        stepNumber: 4,
        title: 'Select the Closest Optimal Multi-Stream Test Node',
        description: 'Ensure your speed test is connected to a nearby regional server (under 100 miles) that utilizes multi-stream concurrent WebSockets connections. NETSPEEDPRO automatically chooses the closest latency-optimized node.',
        tip: 'Testing to a server across the ocean measures international transit routing, not your local ISP loop capacity.'
      },
      {
        stepNumber: 5,
        title: 'Run Multiple Tests Across Different Times of Day',
        description: 'Run 3 tests in the morning, afternoon, and evening peak hours (7:00 PM – 10:00 PM) to detect whether your neighborhood suffers from evening ISP node oversubscription.',
        tip: 'Save your test records to Test History to generate a verifiable performance report for your ISP technician.'
      }
    ],
    commonProblems: [
      { problem: 'Speed test shows 95 Mbps on a 500 Mbps plan', solution: 'Check your Ethernet cable. A damaged cable or 100 Mbps Fast-Ethernet port caps throughput at exactly 94-95 Mbps.' },
      { problem: 'Ping is unexpectedly high (>100ms)', solution: 'Verify that an active VPN or cloud backup is not saturating your upload bandwidth, causing bufferbloat.' }
    ],
    faq: [
      { q: 'Why does my speed test differ from my Steam download rate?', a: 'Speed tests measure raw network bits (Mbps), while Steam displays file storage bytes (MB/s). 100 Mbps equals 12.5 MB/s.' },
      { q: 'Is a single-stream or multi-stream test better?', a: 'Multi-stream tests reflect total pipe capacity for modern multi-device homes; single-stream tests measure single TCP connection performance.' }
    ],
    relatedGuides: ['understanding-mbps-vs-gbps', 'how-to-reduce-gaming-ping', 'ethernet-vs-wifi-speed-comparison']
  },
  {
    id: 'how-to-improve-wifi-speed',
    slug: 'how-to-improve-wifi-speed-and-range',
    title: 'How to Improve Wi-Fi Speed and Range: 10 Pro Fixes',
    category: 'Wi-Fi & Routers',
    readTime: '8 min read',
    difficulty: 'Intermediate',
    featured: true,
    summary: 'Discover proven techniques to eliminate Wi-Fi dead spots, optimize frequency channels, and double your real-world wireless throughput.',
    intro: 'Wi-Fi radio waves are susceptible to physical attenuation from walls, electromagnetic interference from household appliances, and spectrum congestion from neighboring networks. By following these 10 hardware and configuration adjustments, you can dramatically improve signal strength, latency, and throughput across your entire living space.',
    steps: [
      {
        stepNumber: 1,
        title: 'Elevate Your Router and Place it Centrally',
        description: 'Place your router on a desk or high shelf in an open central room. Never hide the router inside a closed cabinet, behind a metallic smart TV, or on the floor.',
        tip: 'Radio waves propagate outward and downward like an umbrella. High, unobstructed placement yields maximum coverage.'
      },
      {
        stepNumber: 2,
        title: 'Separate 2.4 GHz and 5 GHz SSIDs',
        description: 'Many routers combine bands under one name (Smart Connect), often trapping high-speed laptops on the slow, congested 2.4 GHz band. Split your network names (e.g. "Home_5G" and "Home_2.4G") and connect all high-performance devices to 5 GHz.',
        tip: 'Keep smart home IoT devices (bulbs, plugs, cameras) on 2.4 GHz and your phones/laptops on 5 GHz.'
      },
      {
        stepNumber: 3,
        title: 'Scan and Select Uncongested Wi-Fi Channels',
        description: 'Use a free Wi-Fi analyzer app to scan neighborhood channel congestion. On 2.4 GHz, use only non-overlapping channels 1, 6, or 11. On 5 GHz, choose DFS channels (52–144) or high UNII-3 channels (149–161).',
        tip: 'Avoid 40 MHz channel width on 2.4 GHz as it overlaps with almost all neighboring frequencies.'
      },
      {
        stepNumber: 4,
        title: 'Adjust External Antennas to 90-Degree Angles',
        description: 'For dual-antenna routers, position one antenna vertically (for single-floor spread) and the other horizontally (for multi-story signal penetration).',
        tip: 'Perpendicular antennas optimize signal reception regardless of whether your phone is held vertically or horizontally.'
      },
      {
        stepNumber: 5,
        title: 'Upgrade to Wi-Fi 6 / 6E or a Mesh System',
        description: 'For homes larger than 2,000 sq ft, a tri-band Wi-Fi 6 mesh network (with dedicated wireless or wired Ethernet backhaul) eliminates all dead zones seamlessly.',
        tip: 'Always use wired Ethernet backhaul between mesh nodes whenever possible for true gigabit speeds.'
      }
    ],
    commonProblems: [
      { problem: 'Full Wi-Fi bars but slow internet speed', solution: 'The device is connected to a saturated 2.4 GHz band with high channel interference. Switch to 5 GHz.' },
      { problem: 'Connection drops when the microwave turns on', solution: 'Microwaves operate on 2.45 GHz. Switch your devices to the 5 GHz or 6 GHz Wi-Fi band.' }
    ],
    faq: [
      { q: 'Can Wi-Fi extenders solve my speed issues?', a: 'Standard extenders cut speed in half because they repeat signals on the same radio channel. A dedicated mesh system is far superior.' }
    ],
    relatedGuides: ['router-optimization-and-antenna-placement', 'two-point-four-vs-five-ghz-wifi', 'mesh-wifi-vs-extenders']
  },
  {
    id: 'how-to-reduce-gaming-ping',
    slug: 'how-to-reduce-gaming-ping-and-latency-spikes',
    title: 'How to Reduce Gaming Ping and Eliminate Latency Spikes',
    category: 'Gaming & Low Latency',
    readTime: '7 min read',
    difficulty: 'Advanced',
    featured: true,
    summary: 'A competitive esports guide to achieving single-digit ping, 0% packet loss, and zero bufferbloat in Valorant, CS2, Fortnite, and Call of Duty.',
    intro: 'In competitive gaming, a 20ms advantage can be the difference between winning a gunfight and losing a round. High ping, jitter, and rubberbanding are almost always caused by bufferbloat, Wi-Fi packet drops, suboptimal DNS/routing, or background upload traffic. Follow this guide to optimize your network for sub-millisecond local latency.',
    steps: [
      {
        stepNumber: 1,
        title: 'Ditch Wi-Fi and Use a Direct Cat6 Ethernet Cable',
        description: 'Wi-Fi radio waves suffer from packet retransmissions and jitter. A physical Cat6 Ethernet cable guarantees 0.5ms local latency and 0.00% packet loss.',
        tip: 'If running long cables is impossible, consider MoCA 2.5 (Ethernet over coaxial cable) rather than Wi-Fi.'
      },
      {
        stepNumber: 2,
        title: 'Enable Smart Queue Management (SQM / CAKE) on Your Router',
        description: 'SQM algorithms (like CAKE or FQ-CoDel on OpenWrt/Asuswrt-Merlin) eliminate bufferbloat by pacing packets and preventing buffer queues from filling up during downloads.',
        tip: 'Set upload and download bandwidth limits in SQM to 90–95% of your measured speed to lock loaded ping at baseline levels.'
      },
      {
        stepNumber: 3,
        title: 'Configure Fast Gaming DNS Resolvers',
        description: 'Switch your PC DNS settings to Cloudflare (1.1.1.1 / 1.0.0.1) or Google (8.8.8.8 / 8.8.4.4) for ultra-fast server lookups.',
        tip: 'Flush your DNS cache in Windows by running `ipconfig /flushdns` in Command Prompt.'
      },
      {
        stepNumber: 4,
        title: 'Enable Port Forwarding for Your Game Titles',
        description: 'Forward the required UDP and TCP ports for your specific game to achieve an Open NAT type, allowing direct connection to game matchmaking servers.',
        tip: 'Check your game publisher documentation for official port lists (e.g. Steam, Riot Games, Battle.net).'
      },
      {
        stepNumber: 5,
        title: 'Disable Windows Delivery Optimization & Background Cloud Sync',
        description: 'In Windows Settings > Windows Update > Advanced Options > Delivery Optimization, turn off "Allow downloads from other PCs" to prevent your computer from uploading update files.',
        tip: 'Pause OneDrive, Google Drive, and Dropbox syncing during gaming sessions.'
      }
    ],
    commonProblems: [
      { problem: 'Ping jumps from 20ms to 300ms when someone streams Netflix', solution: 'Classic bufferbloat. Enable SQM or QoS on your router to prioritize gaming UDP traffic.' },
      { problem: 'Packet loss symbol appears in-game', solution: 'Check for damaged Ethernet cables, faulty router ports, or ISP line noise using `tracert`.' }
    ],
    faq: [
      { q: 'Does high download speed guarantee low gaming ping?', a: 'No. Bandwidth is quantity; latency is speed. A 50 Mbps fiber line with 10ms ping beats a 1,000 Mbps satellite connection with 150ms ping for gaming.' }
    ],
    relatedGuides: ['understanding-ping-and-latency', 'understanding-jitter-and-packet-loss', 'how-to-fix-bufferbloat-with-sqm']
  }
];
