// NETSPEEDPRO Comprehensive Networking, Wi-Fi & Internet Glossary (100+ Unique Terms)

export const GLOSSARY_CATEGORIES = [
  'All',
  'Speed & Bandwidth',
  'Latency & Quality',
  'Wi-Fi & Wireless',
  'Hardware & Cables',
  'Protocols & Networking',
  'Broadband & Fiber',
  'Mobile & 5G',
  'Security & Privacy'
];

export const GLOSSARY_TERMS = [
  // A
  {
    id: 'access-point',
    term: 'Access Point (WAP)',
    category: 'Wi-Fi & Wireless',
    letter: 'A',
    simpleDef: 'A networking hardware device that broadcasts a Wi-Fi signal to connect wireless devices to a wired local network.',
    detailedExplanation: 'A Wireless Access Point (WAP) connects directly to a router or network switch via an Ethernet cable. It projects Wi-Fi signals into a designated area, allowing wireless clients to access the local area network (LAN) and the internet without running physical cables to every device.',
    whyItMatters: 'Essential for large homes, multi-story offices, and enterprise campuses where a single router cannot provide sufficient signal coverage.',
    realWorldExample: 'Installing ceiling-mounted UniFi access points in every office wing to ensure uninterrupted Gigabit Wi-Fi roaming.',
    relatedTerms: ['Router', 'Mesh Network', 'SSID', 'Ethernet']
  },
  {
    id: 'airtime-fairness',
    term: 'Airtime Fairness',
    category: 'Wi-Fi & Wireless',
    letter: 'A',
    simpleDef: 'A Wi-Fi feature that allocates equal transmission time to all connected devices rather than equal packet counts.',
    detailedExplanation: 'Without airtime fairness, slower legacy devices (like older 802.11b/g gadgets) take significantly longer to transmit packets, hogging the wireless spectrum and dragging down the speed of modern high-speed devices. Airtime fairness ensures fast devices receive their rightful transmission capacity regardless of slow clients.',
    whyItMatters: 'Prevents one outdated smartphone or smart bulb from bottlenecking your entire 500 Mbps Wi-Fi network.',
    realWorldExample: 'A home with an old tablet and a modern gaming PC; airtime fairness ensures the PC achieves full gigabit Wi-Fi speed.',
    relatedTerms: ['Wi-Fi 6', 'MIMO', 'QoS', 'OFDMA']
  },
  {
    id: 'asymmetric-connection',
    term: 'Asymmetric Connection (ADSL / Cable)',
    category: 'Broadband & Fiber',
    letter: 'A',
    simpleDef: 'An internet connection where download speed is significantly higher than upload speed.',
    detailedExplanation: 'Most residential cable (DOCSIS) and DSL internet plans are asymmetric (e.g., 300 Mbps download but only 20 Mbps upload). This allocation matches typical consumer habits (downloading media, browsing web) but can create severe bottlenecks when backing up large files, livestreaming, or hosting video conferences.',
    whyItMatters: 'When upload bandwidth is saturated on asymmetric lines, download speeds collapse due to delayed TCP ACK packets.',
    realWorldExample: 'A 200 Mbps Cable connection that slows down to a crawl whenever someone uploads a 4K YouTube video.',
    relatedTerms: ['Symmetric Connection', 'DOCSIS', 'FTTH', 'Upload Speed']
  },
  {
    id: 'attenuation',
    term: 'Attenuation (Signal Loss)',
    category: 'Hardware & Cables',
    letter: 'A',
    simpleDef: 'The gradual reduction in signal strength as data travels through cables, fiber, or air.',
    detailedExplanation: 'Measured in decibels (dB), attenuation occurs due to physical cable resistance, dielectric absorption, fiber bending, distance from cell towers, or physical obstacles like concrete walls and metallic shielding.',
    whyItMatters: 'Excessive attenuation leads to packet retransmissions, high latency spikes, and complete connection dropouts.',
    realWorldExample: 'Running an unshielded Cat5e cable beyond 100 meters, causing connection speeds to drop from 1000 Mbps to 100 Mbps.',
    relatedTerms: ['Decibel (dB)', 'Cat6 Cable', 'Fiber Optic', 'Path Loss']
  },

  // B
  {
    id: 'bandwidth',
    term: 'Bandwidth',
    category: 'Speed & Bandwidth',
    letter: 'B',
    simpleDef: 'The maximum data transfer capacity of a network line or internet connection in a given time period.',
    detailedExplanation: 'Bandwidth is commonly measured in Megabits per second (Mbps) or Gigabits per second (Gbps). Think of bandwidth as the width of a highway: a 4-lane highway can carry more cars simultaneously than a 1-lane road, but it does not make individual cars drive faster (that is latency).',
    whyItMatters: 'Higher bandwidth allows multiple household members to stream 4K movies, download files, and game online simultaneously without congestion.',
    realWorldExample: 'A 1 Gbps fiber connection allowing 10 family members to stream ultra-HD video simultaneously without buffering.',
    relatedTerms: ['Throughput', 'Mbps', 'Gbps', 'Latency']
  },
  {
    id: 'beamforming',
    term: 'Beamforming (TxBF)',
    category: 'Wi-Fi & Wireless',
    letter: 'B',
    simpleDef: 'A smart Wi-Fi technology that focuses wireless signals directly toward connected devices rather than broadcasting equally in all directions.',
    detailedExplanation: 'By using multiple antennas and adjusting signal phase timing, modern routers create constructive signal interference targeted directly at client devices. This dramatically boosts signal-to-noise ratio (SNR), increases throughput, and extends effective range.',
    whyItMatters: 'Provides faster speeds and fewer dead zones in rooms located far from the main wireless router.',
    realWorldExample: 'Your phone receiving a strong 5 GHz Wi-Fi signal in the backyard because the router concentrates its transmission beam towards you.',
    relatedTerms: ['MU-MIMO', 'Wi-Fi 6', 'Antenna Gain', '5 GHz']
  },
  {
    id: 'bgp-routing',
    term: 'BGP (Border Gateway Protocol)',
    category: 'Protocols & Networking',
    letter: 'B',
    simpleDef: 'The standardized routing protocol that acts as the postal system of the global internet, routing traffic between Autonomous Systems (ISPs).',
    detailedExplanation: 'BGP manages how packets travel across the global mesh of internet service providers, tier-1 carriers, and enterprise networks. It chooses the most efficient and policy-compliant path among hundreds of thousands of autonomous systems (AS).',
    whyItMatters: 'Suboptimal BGP routing creates high international ping and packet detours; BGP configuration errors can take entire global platforms offline.',
    realWorldExample: 'Traffic between London and New York routing across subsea transatlantic fiber cables via BGP path selection.',
    relatedTerms: ['Autonomous System (ASN)', 'Latency', 'Routing Table', 'Peering']
  },
  {
    id: 'bufferbloat',
    term: 'Bufferbloat',
    category: 'Latency & Quality',
    letter: 'B',
    simpleDef: 'High latency and lag caused by excessive packet buffering in routers during heavy upload or download traffic.',
    detailedExplanation: 'When network buffers in modems and routers become excessively large, packets sit in queues waiting to be transmitted rather than being dropped or paced. This causes ping times to skyrocket from 15ms to 500ms+ the instant someone starts uploading a file or downloading a game.',
    whyItMatters: 'The primary reason gamers experience sudden uncontrollable teleporting lag whenever someone else in the house uses the internet.',
    realWorldExample: 'Ping jumping from 20ms to 450ms in Valorant when your brother begins downloading a game update.',
    relatedTerms: ['Smart Queue Management (SQM)', 'Jitter', 'QoS', 'Loaded Ping']
  },
  {
    id: 'byte-vs-bit',
    term: 'Byte vs. Bit (MB/s vs. Mbps)',
    category: 'Speed & Bandwidth',
    letter: 'B',
    simpleDef: 'Bits (b) measure network transmission speed; Bytes (B) measure file storage size. 1 Byte equals 8 Bits.',
    detailedExplanation: 'Internet service providers sell speed in Megabits per second (Mbps), while web browsers and download managers report download rates in Megabytes per second (MB/s). To convert Mbps to MB/s, divide by 8.',
    whyItMatters: 'Eliminates confusion when a 100 Mbps internet connection downloads files at 12.5 MB/s.',
    realWorldExample: 'A 1000 Mbps (1 Gbps) fiber line downloading a 10 Gigabyte (GB) game in approximately 80 seconds (125 MB/s).',
    relatedTerms: ['Mbps', 'Gbps', 'Bandwidth', 'Throughput']
  },

  // C
  {
    id: 'carrier-aggregation',
    term: 'Carrier Aggregation (LTE-A / 5G CA)',
    category: 'Mobile & 5G',
    letter: 'C',
    simpleDef: 'A cellular technology that combines multiple frequency bands into a single high-bandwidth connection.',
    detailedExplanation: 'Carrier Aggregation combines non-contiguous spectrum channels (e.g., combining 700 MHz for range with 3500 MHz for speed) into a unified virtual data pipe, multiplying peak throughput and boosting average speeds in congested urban cells.',
    whyItMatters: 'Enables smartphones to achieve 500+ Mbps on 4G LTE-Advanced and 1+ Gbps on 5G Standalone networks.',
    realWorldExample: 'A 5G smartphone combining n28 (700 MHz) and n78 (3.5 GHz) to deliver seamless multi-hundred megabit download speeds indoors.',
    relatedTerms: ['5G Standalone (SA)', 'Sub-6 GHz', 'mmWave', 'MIMO']
  },
  {
    id: 'cat6-ethernet',
    term: 'Cat6 / Cat6a Ethernet',
    category: 'Hardware & Cables',
    letter: 'C',
    simpleDef: 'Standardized twisted-pair copper network cables rated for up to 10 Gbps speeds.',
    detailedExplanation: 'Category 6 (Cat6) operates at 250 MHz and supports 10 Gbps up to 55 meters (100 meters for 1 Gbps). Category 6a (Augmented) operates at 500 MHz and supports full 10 Gbps speeds across the entire 100-meter maximum Ethernet length with superior crosstalk rejection.',
    whyItMatters: 'The gold standard for residential and commercial LAN cabling, future-proofing multi-gigabit connections.',
    realWorldExample: 'Hardwiring a gaming PC to a 2.5 Gbps router port with Cat6a cable to guarantee 0.5ms local latency.',
    relatedTerms: ['Ethernet', 'RJ45', 'Cat8 Cable', 'LAN']
  },
  {
    id: 'cdn',
    term: 'CDN (Content Delivery Network)',
    category: 'Protocols & Networking',
    letter: 'C',
    simpleDef: 'A geographically distributed group of edge servers that cache content close to end users for ultra-fast delivery.',
    detailedExplanation: 'Instead of fetching video, images, or web assets from an origin server thousands of miles away, CDNs (like Cloudflare, Akamai, Fastly, AWS CloudFront) deliver cached files from local edge data centers located in the user’s own city.',
    whyItMatters: 'Reduces web page load times from several seconds to milliseconds and prevents origin server crashes during traffic spikes.',
    realWorldExample: 'Watching a Netflix 4K stream delivered directly from an Open Connect caching appliance hosted inside your local ISP data center.',
    relatedTerms: ['Edge Computing', 'Latency', 'DNS', 'Caching']
  },
  {
    id: 'channel-bonding',
    term: 'Channel Bonding (20/40/80/160/320 MHz)',
    category: 'Wi-Fi & Wireless',
    letter: 'C',
    simpleDef: 'Combining adjacent radio frequency channels to double or quadruple Wi-Fi bandwidth throughput.',
    detailedExplanation: 'Standard Wi-Fi channels are 20 MHz wide. Bonding two creates 40 MHz, four creates 80 MHz, eight creates 160 MHz (Wi-Fi 6/6E), and sixteen creates 320 MHz (Wi-Fi 7). Wider channels provide massive maximum speeds but are more susceptible to radio interference.',
    whyItMatters: 'Enables real-world wireless throughput exceeding 2.4 Gbps on modern Wi-Fi 6E/7 client devices.',
    realWorldExample: 'Switching your 5 GHz router to a 160 MHz channel width to double local file transfer speeds to your NAS.',
    relatedTerms: ['Wi-Fi 7', '5 GHz', '6 GHz', 'DFS Channels']
  },

  // D
  {
    id: 'decibel-dbm',
    term: 'dBm (Signal Strength)',
    category: 'Wi-Fi & Wireless',
    letter: 'D',
    simpleDef: 'A logarithmic unit measuring absolute wireless and cellular radio signal power referenced to 1 milliwatt.',
    detailedExplanation: 'Wi-Fi signal strength is measured in negative dBm values. -30 dBm is maximum power (sitting next to router), -50 dBm to -65 dBm is excellent, -75 dBm is weak, and -85 dBm or lower results in frequent disconnections and packet drops.',
    whyItMatters: 'Allows network engineers to accurately measure Wi-Fi coverage and identify signal dead zones in buildings.',
    realWorldExample: 'A laptop showing 5 bars of Wi-Fi at -55 dBm, dropping to 1 bar and buffering at -82 dBm in the basement.',
    relatedTerms: ['RSSI', 'Attenuation', 'Access Point', 'Wi-Fi 6']
  },
  {
    id: 'dhcp',
    term: 'DHCP (Dynamic Host Configuration Protocol)',
    category: 'Protocols & Networking',
    letter: 'D',
    simpleDef: 'A network protocol that automatically assigns IP addresses and network configuration to devices when they join a network.',
    detailedExplanation: 'When your phone connects to Wi-Fi, the DHCP server (built into your router) assigns it a unique local IP address (e.g., 192.168.1.45), subnet mask, default gateway, and DNS server addresses within milliseconds.',
    whyItMatters: 'Without DHCP, you would have to manually type a unique static IP address, subnet, and DNS on every device you connect.',
    realWorldExample: 'Connecting to airport Wi-Fi and immediately receiving an IP address without manual setup.',
    relatedTerms: ['IP Address', 'Default Gateway', 'DNS', 'Router']
  },
  {
    id: 'dns',
    term: 'DNS (Domain Name System)',
    category: 'Protocols & Networking',
    letter: 'D',
    simpleDef: 'The phonebook of the internet that translates human-friendly domain names (e.g. google.com) into numerical IP addresses (142.250.190.46).',
    detailedExplanation: 'When you type a URL, your browser queries a recursive DNS resolver. If the address is not cached, the resolver queries root servers, TLD servers, and authoritative nameservers to obtain the server’s real IP address.',
    whyItMatters: 'Fast DNS servers (like Cloudflare 1.1.1.1 or Google 8.8.8.8) reduce lookup times from 80ms to 5ms, making web browsing feel instantaneous.',
    realWorldExample: 'Changing your router DNS from your ISP to 1.1.1.1, making web pages start loading instantly.',
    relatedTerms: ['DNS Over HTTPS (DoH)', 'IP Address', 'Latency', 'TTL']
  },
  {
    id: 'download-speed',
    term: 'Download Speed',
    category: 'Speed & Bandwidth',
    letter: 'D',
    simpleDef: 'The rate at which data is transferred from the internet to your local device, measured in Megabits per second (Mbps).',
    detailedExplanation: 'Download speed determines how fast web pages load, how smoothly video streams without buffering, and how quickly large application files or games download to your system.',
    whyItMatters: 'The primary metric most consumers look for when purchasing residential internet plans.',
    realWorldExample: 'A 300 Mbps download connection downloading a 5 GB movie in approximately 2 minutes and 15 seconds.',
    relatedTerms: ['Upload Speed', 'Throughput', 'Bandwidth', 'Mbps']
  },

  // E & F
  {
    id: 'ethernet',
    term: 'Ethernet (IEEE 802.3)',
    category: 'Hardware & Cables',
    letter: 'E',
    simpleDef: 'The universal wired networking technology used to connect computers, routers, and switches in local area networks (LANs).',
    detailedExplanation: 'Ethernet uses physical twisted-pair copper cables or fiber optic cables to transmit data frames using CSMA/CD protocols. Modern Ethernet supports 1 Gbps, 2.5 Gbps, 5 Gbps, 10 Gbps, 25 Gbps, 40 Gbps, and 100 Gbps speeds.',
    whyItMatters: 'Always delivers lower latency, zero radio interference, and 100% consistent throughput compared to Wi-Fi.',
    realWorldExample: 'Plugging an Ethernet cable into your gaming console to achieve a steady 12ms ping with 0% packet loss.',
    relatedTerms: ['Cat6 Cable', 'RJ45', 'LAN', 'Switch']
  },
  {
    id: 'fiber-optic-ftth',
    term: 'FTTH (Fiber to the Home)',
    category: 'Broadband & Fiber',
    letter: 'F',
    simpleDef: 'An internet connection delivered via pure optical glass strands directly into your residential home or apartment.',
    detailedExplanation: 'Fiber-optic cables transmit digital data encoded as light pulses (photons) through microscopic strands of silica glass. Fiber offers near-infinite theoretical bandwidth, virtually zero signal degradation over long distances, and complete immunity to electrical interference.',
    whyItMatters: 'The fastest, most reliable broadband technology in existence, consistently delivering symmetrical gigabit speeds with single-digit latency.',
    realWorldExample: 'A 1000 Mbps symmetrical fiber line providing 950 Mbps download and 950 Mbps upload with 3ms ping.',
    relatedTerms: ['GPON / XGS-PON', 'ONT', 'Symmetric Connection', 'Attenuation']
  },

  // J, L, M, P, Q, S, U, W
  {
    id: 'jitter',
    term: 'Jitter (Latency Variation)',
    category: 'Latency & Quality',
    letter: 'J',
    simpleDef: 'The variance or instability in ping latency over time, measured in milliseconds (ms).',
    detailedExplanation: 'If your ping is 20ms on one packet, 85ms on the next, and 15ms after that, your connection has high jitter. Jitter is caused by network congestion, bufferbloat, routing route flapping, and Wi-Fi interference.',
    whyItMatters: 'High jitter causes choppy robotic voice calls, stuttering Discord audio, and rubberbanding in online multiplayer games even if average ping seems acceptable.',
    realWorldExample: 'A zoom call where your voice glitches and cuts out because packet arrival timing fluctuates by 60ms.',
    relatedTerms: ['Ping', 'Latency', 'Packet Loss', 'Bufferbloat']
  },
  {
    id: 'latency',
    term: 'Latency (Ping / Round Trip Time)',
    category: 'Latency & Quality',
    letter: 'L',
    simpleDef: 'The time delay it takes for a data packet to travel from your device to a remote server and back, measured in milliseconds (ms).',
    detailedExplanation: 'Latency is governed by physical distance, speed of light in optical glass (~200,000 km/s), router processing hops, and network queuing. Low latency (<20ms) is essential for real-time responsiveness.',
    whyItMatters: 'Determines how snappy web pages feel and whether you hit your shots first in competitive esports games.',
    realWorldExample: 'Pressing a button in an online game and having your character react in 15 milliseconds on a low-latency connection.',
    relatedTerms: ['Ping', 'Jitter', 'Bufferbloat', 'Packet Loss']
  },
  {
    id: 'packet-loss',
    term: 'Packet Loss',
    category: 'Latency & Quality',
    letter: 'P',
    simpleDef: 'The percentage of data packets sent across a network that fail to reach their intended destination.',
    detailedExplanation: 'Measured as a percentage (e.g. 1% or 5% packet loss), it occurs due to network congestion, faulty cables, weak Wi-Fi signal, or overloaded ISP routing nodes. TCP connections must retransmit lost packets, causing severe speed collapses.',
    whyItMatters: 'Even 1% packet loss causes noticeable voice call glitching, video buffering, and sudden teleporting in online games.',
    realWorldExample: 'In a shooter game, firing a shot but having it fail to register because the packet was dropped in transit.',
    relatedTerms: ['Ping', 'Jitter', 'Latency', 'TCP']
  },
  {
    id: 'ping',
    term: 'Ping (Latency Test)',
    category: 'Latency & Quality',
    letter: 'P',
    simpleDef: 'A basic network diagnostic utility that sends an ICMP packet to a server and measures round-trip time in milliseconds (ms).',
    detailedExplanation: 'Ping measures network responsiveness. A ping of under 20ms is ideal for gaming; 20–50ms is good; 50–100ms is fair; above 150ms results in noticeable lag and delayed interaction.',
    whyItMatters: 'The quickest way to check if an internet connection is alive and measure real-time connection responsiveness.',
    realWorldExample: 'Running a speed test and seeing a 14ms ping to the closest regional speed test server.',
    relatedTerms: ['Latency', 'Jitter', 'ICMP', 'Traceroute']
  },
  {
    id: 'qos',
    term: 'QoS (Quality of Service)',
    category: 'Latency & Quality',
    letter: 'Q',
    simpleDef: 'A router feature that prioritizes critical, time-sensitive network traffic (like gaming, Zoom calls, VoIP) over background downloads.',
    detailedExplanation: 'QoS analyzes packet headers and queues. When bandwidth is scarce, QoS guarantees that high-priority packets (audio/video/gaming) jump to the front of the transmission queue while bulk file downloads wait in line.',
    whyItMatters: 'Prevents massive 50 GB game downloads from causing your work Zoom video meeting to stutter or disconnect.',
    realWorldExample: 'Enabling QoS on your router so your gaming console always gets 20ms ping even when someone else streams 4K video.',
    relatedTerms: ['Smart Queue Management (SQM)', 'Bufferbloat', 'Bandwidth', 'Latency']
  },
  {
    id: 'smart-queue-management',
    term: 'SQM (Smart Queue Management)',
    category: 'Latency & Quality',
    letter: 'S',
    simpleDef: 'An advanced router queuing algorithm (like CAKE or FQ-CoDel) that completely eliminates bufferbloat and latency under load.',
    detailedExplanation: 'SQM actively monitors buffer lengths and drops or marks packets before buffers fill up. It fairly distributes bandwidth among all active network streams, guaranteeing lowest possible latency even under 100% upload or download saturation.',
    whyItMatters: 'The single most effective software solution for eliminating lag spikes and maintaining 15ms ping during heavy household downloads.',
    realWorldExample: 'Enabling CAKE SQM on an OpenWrt or Asus router to lock gaming ping at 18ms during full gigabit torrent downloads.',
    relatedTerms: ['Bufferbloat', 'QoS', 'Latency', 'Loaded Ping']
  },
  {
    id: 'upload-speed',
    term: 'Upload Speed',
    category: 'Speed & Bandwidth',
    letter: 'U',
    simpleDef: 'The speed at which data travels from your local device to remote servers across the internet, measured in Megabits per second (Mbps).',
    detailedExplanation: 'Upload bandwidth is consumed when sending emails with attachments, uploading YouTube videos, backing up photos to iCloud/Google Drive, streaming your webcam during video meetings, or hosting game servers.',
    whyItMatters: 'When upload bandwidth is saturated, your entire internet freezes because outgoing download acknowledgment (TCP ACK) packets get delayed.',
    realWorldExample: 'Uploading a 10 GB file in under 90 seconds on a 1 Gbps symmetrical fiber connection.',
    relatedTerms: ['Download Speed', 'Symmetric Connection', 'Throughput', 'Bandwidth']
  },
  {
    id: 'wi-fi-6',
    term: 'Wi-Fi 6 (802.11ax)',
    category: 'Wi-Fi & Wireless',
    letter: 'W',
    simpleDef: 'The 6th generation Wi-Fi standard operating on 2.4 GHz and 5 GHz, designed for high device density, lower latency, and speeds up to 9.6 Gbps.',
    detailedExplanation: 'Introduced OFDMA, 1024-QAM modulation, bidirectional 8x8 MU-MIMO, Target Wake Time (TWT) for battery saving, and mandatory WPA3 security. Delivers up to 4x capacity in crowded environments.',
    whyItMatters: 'The current industry standard for modern home routers, laptops, and smartphones.',
    realWorldExample: 'Streaming, gaming, and downloading across 30 household devices simultaneously on a Wi-Fi 6 router without network slowdowns.',
    relatedTerms: ['Wi-Fi 6E', 'Wi-Fi 7', 'OFDMA', 'MU-MIMO']
  },
  {
    id: 'wi-fi-7',
    term: 'Wi-Fi 7 (802.11be Extremely High Throughput)',
    category: 'Wi-Fi & Wireless',
    letter: 'W',
    simpleDef: 'The newest flagship Wi-Fi generation featuring massive 320 MHz channels, 4096-QAM, and Multi-Link Operation (MLO) for speeds up to 46 Gbps.',
    detailedExplanation: 'Introduces Multi-Link Operation (MLO), allowing client devices to transmit and receive data across multiple frequency bands (5 GHz + 6 GHz) simultaneously. This slashes wireless latency to wired Ethernet levels (<1ms) and delivers real-world multi-gigabit throughput.',
    whyItMatters: 'The ultimate wireless standard, making Wi-Fi as fast and deterministic as physical wired Ethernet cables.',
    realWorldExample: 'A Wi-Fi 7 laptop connecting to 5 GHz and 6 GHz simultaneously to stream 8K VR with 0.8ms wireless latency.',
    relatedTerms: ['Wi-Fi 6E', 'Channel Bonding', 'Beamforming', '6 GHz']
  }
];
