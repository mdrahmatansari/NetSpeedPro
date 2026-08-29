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
  // Numbers & Frequencies
  {
    id: 'frequency-2-4ghz',
    term: '2.4 GHz Band',
    category: 'Wi-Fi & Wireless',
    letter: '2',
    simpleDef: 'A standard Wi-Fi frequency band known for long physical range and high wall penetration, but lower maximum speeds.',
    detailedExplanation: 'The 2.4 GHz spectrum spans 2.400 to 2.4835 GHz and is divided into 11–14 channels. Because lower radio frequencies travel farther through concrete, wood, and drywall, 2.4 GHz is ideal for extended home coverage. However, it offers narrow channel widths (20/40 MHz) and experiences heavy interference from microwaves, Bluetooth devices, and baby monitors.',
    whyItMatters: 'Essential for connecting smart home IoT devices (bulbs, plugs, doorbells) that require long-distance reach rather than multi-gigabit throughput.',
    realWorldExample: 'A smart security camera installed in the backyard garage connects reliably on the 2.4 GHz band because 5 GHz signals cannot penetrate three exterior walls.',
    relatedTerms: ['5 GHz Band', '6 GHz Band', 'Wi-Fi 6', 'Signal Strength']
  },
  {
    id: 'frequency-5ghz',
    term: '5 GHz Band',
    category: 'Wi-Fi & Wireless',
    letter: '5',
    simpleDef: 'A high-speed Wi-Fi frequency band that delivers significantly faster data transfer with shorter physical broadcast range.',
    detailedExplanation: 'The 5 GHz spectrum operates between 5.150 and 5.850 GHz, offering 24+ non-overlapping channels and support for wider 80 MHz and 160 MHz channel bonding. It delivers speeds exceeding 1 Gbps on Wi-Fi 6/7, but its shorter wavelength is more easily absorbed by dense physical obstacles like brick and stone.',
    whyItMatters: 'The primary band for gaming laptops, 4K streaming TVs, and smartphones located within 15–30 feet of the wireless router.',
    realWorldExample: 'Switching your PlayStation 5 from 2.4 GHz to 5 GHz increases speed test download rates from 45 Mbps to 480 Mbps.',
    relatedTerms: ['2.4 GHz Band', '6 GHz Band', 'Channel Bonding', 'Wi-Fi 6']
  },
  {
    id: 'frequency-6ghz',
    term: '6 GHz Band',
    category: 'Wi-Fi & Wireless',
    letter: '6',
    simpleDef: 'The newest, pristine Wi-Fi spectrum reserved exclusively for Wi-Fi 6E and Wi-Fi 7 devices with zero legacy interference.',
    detailedExplanation: 'Spanning from 5.925 to 7.125 GHz (providing 1,200 MHz of clean spectrum), the 6 GHz band provides up to seven ultra-wide 160 MHz channels or three massive 320 MHz channels. Because older Wi-Fi 4/5 devices cannot transmit on 6 GHz, the airwaves are completely free of legacy contention and radio congestion.',
    whyItMatters: 'Enables genuine multi-gigabit wireless speeds (2+ Gbps) and sub-2ms wireless latency for VR headsets, 8K video streaming, and esports gaming.',
    realWorldExample: 'A Wi-Fi 6E laptop downloading a 50 GB game over 6 GHz at 1,850 Mbps without suffering any interference from neighboring apartment networks.',
    relatedTerms: ['Wi-Fi 6E', 'Wi-Fi 7', '5 GHz Band', 'Channel Bonding']
  },
  {
    id: 'cellular-4g',
    term: '4G LTE (Fourth Generation)',
    category: 'Mobile & 5G',
    letter: '4',
    simpleDef: 'The fourth-generation cellular wireless standard delivering mobile broadband speeds typically ranging from 20 to 100 Mbps.',
    detailedExplanation: '4G LTE (Long-Term Evolution) uses all-IP packet-switched architecture and Orthogonal Frequency-Division Multiple Access (OFDMA) to provide high-speed mobile internet with average latencies of 30–60 ms. LTE-Advanced (LTE-A) introduced Carrier Aggregation to reach peak burst speeds up to 300+ Mbps.',
    whyItMatters: 'Provides reliable baseline mobile internet coverage across rural, highway, and urban areas worldwide.',
    realWorldExample: 'Streaming a 1080p YouTube video on your smartphone while commuting on a suburban train via 4G LTE.',
    relatedTerms: ['5G Network', 'Carrier Aggregation', 'Latency', 'Signal Strength']
  },
  {
    id: 'cellular-5g',
    term: '5G Network (Fifth Generation)',
    category: 'Mobile & 5G',
    letter: '5',
    simpleDef: 'The 5th generation mobile cellular standard designed for multi-gigabit peak data rates, ultra-low latency, and massive device density.',
    detailedExplanation: '5G operates across low-band (sub-1 GHz for coverage), mid-band (C-band/sub-6 GHz for speed and range balance), and high-band mmWave (24–40 GHz for 1–4 Gbps stadium bursts). 5G Standalone (SA) architecture introduces network slicing and slashes mobile latency to 10–18 ms.',
    whyItMatters: 'Enables cloud gaming on mobile devices, autonomous vehicle telemetry, and high-speed Fixed Wireless Access (FWA) home broadband.',
    realWorldExample: 'Using a 5G home router (Fixed Wireless Access) to get 350 Mbps download speed in an area without underground fiber lines.',
    relatedTerms: ['4G LTE', 'Carrier Aggregation', 'Frequency', 'Latency']
  },

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
    relatedTerms: ['Symmetric Connection', 'FTTH', 'Upload Speed', 'Broadband']
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
    relatedTerms: ['Signal Strength', 'Cat6 Ethernet', 'Fiber Optic', 'Decibel (dBm)']
  },

  // B
  {
    id: 'bandwidth',
    term: 'Bandwidth',
    category: 'Speed & Bandwidth',
    letter: 'B',
    simpleDef: 'The maximum theoretical data transfer capacity of a network line or internet connection in a given time period.',
    detailedExplanation: 'Bandwidth is measured in Megabits per second (Mbps) or Gigabits per second (Gbps). Think of bandwidth as the width of a highway: a 4-lane highway can carry more vehicles simultaneously than a single-lane road, but it does not make individual cars drive faster (speed/latency).',
    whyItMatters: 'Higher bandwidth allows multiple household members to stream 4K movies, download games, and join video calls simultaneously without buffering.',
    realWorldExample: 'A 1 Gbps fiber connection allowing 10 family members to stream ultra-HD video simultaneously without any reduction in quality.',
    relatedTerms: ['Throughput', 'Mbps', 'Gbps', 'Latency', 'Internet Speed']
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
    relatedTerms: ['Wi-Fi 6', '5 GHz Band', 'Signal Strength', 'Access Point']
  },
  {
    id: 'bufferbloat',
    term: 'Bufferbloat',
    category: 'Latency & Quality',
    letter: 'B',
    simpleDef: 'High latency and lag caused by excessive packet buffering in modems and routers during heavy upload or download traffic.',
    detailedExplanation: 'When network buffers in consumer routers become excessively large, packets sit in queues waiting to be transmitted rather than being paced or dropped. This causes ping times to skyrocket from 15 ms to 500+ ms the instant someone starts uploading a file or downloading a game.',
    whyItMatters: 'The primary reason gamers experience sudden uncontrollable teleporting lag whenever someone else in the house uses the internet.',
    realWorldExample: 'Ping jumping from 20 ms to 450 ms in competitive gaming when a family member begins downloading a console update.',
    relatedTerms: ['Latency', 'Jitter', 'QoS', 'Smart Queue Management (SQM)']
  },
  {
    id: 'byte-vs-bit',
    term: 'Byte vs. Bit (MB/s vs. Mbps)',
    category: 'Speed & Bandwidth',
    letter: 'B',
    simpleDef: 'Bits (b) measure network transmission speed; Bytes (B) measure file storage size. 1 Byte equals 8 Bits.',
    detailedExplanation: 'Internet service providers sell speed in Megabits per second (Mbps), while web browsers and download managers report download rates in Megabytes per second (MB/s). To convert Mbps to MB/s, divide by 8.',
    whyItMatters: 'Eliminates confusion when a 100 Mbps internet plan downloads files at a maximum rate of 12.5 MB/s.',
    realWorldExample: 'A 1,000 Mbps (1 Gbps) fiber line downloading a 10 Gigabyte (GB) video in approximately 80 seconds (125 MB/s).',
    relatedTerms: ['Mbps', 'Gbps', 'Bandwidth', 'Throughput']
  },

  // C
  {
    id: 'cat6-ethernet',
    term: 'Cat6 / Cat6a Ethernet Cable',
    category: 'Hardware & Cables',
    letter: 'C',
    simpleDef: 'Standardized twisted-pair copper network cables rated for up to 10 Gbps speeds with low electrical crosstalk.',
    detailedExplanation: 'Category 6 (Cat6) operates at 250 MHz and supports 10 Gbps up to 55 meters (100 meters for 1 Gbps). Category 6a (Augmented) operates at 500 MHz and supports full 10 Gbps speeds across the entire 100-meter maximum Ethernet length with superior crosstalk rejection.',
    whyItMatters: 'The gold standard for residential and commercial LAN cabling, future-proofing multi-gigabit connections.',
    realWorldExample: 'Hardwiring a gaming PC to a 2.5 Gbps router port with Cat6a cable to guarantee 0.5ms local latency and 0% packet loss.',
    relatedTerms: ['Ethernet', 'Router', 'Modem', 'Bandwidth']
  },
  {
    id: 'cdn',
    term: 'CDN (Content Delivery Network)',
    category: 'Protocols & Networking',
    letter: 'C',
    simpleDef: 'A geographically distributed group of edge servers that cache content close to end users for ultra-fast delivery.',
    detailedExplanation: 'Instead of fetching video, images, or web assets from an origin server thousands of miles away, CDNs (like Cloudflare, Akamai, Fastly, AWS CloudFront) deliver cached files from local edge data centers located in the user’s own city or region.',
    whyItMatters: 'Reduces web page load times from several seconds to milliseconds and prevents origin server crashes during traffic spikes.',
    realWorldExample: 'Watching a Netflix 4K stream delivered directly from an Open Connect caching server hosted inside your local ISP data center.',
    relatedTerms: ['Server', 'Data Center', 'Latency', 'DNS']
  },

  // D
  {
    id: 'data-center',
    term: 'Data Center',
    category: 'Protocols & Networking',
    letter: 'D',
    simpleDef: 'A dedicated physical facility housing thousands of enterprise servers, storage arrays, and network infrastructure.',
    detailedExplanation: 'Data centers feature redundant industrial power feeds, backup diesel generators, chilled-water cooling systems, high-speed fiber cross-connects, and multi-tier physical security. Cloud providers (AWS, Azure, Google Cloud) operate global hyper-scale data centers powering modern web applications.',
    whyItMatters: 'The physical backbone where cloud servers, multiplayer gaming hosts, streaming platforms, and speed test nodes reside.',
    realWorldExample: 'Speed test results show 4 ms ping because your connection routes directly to an IX (Internet Exchange) data center in your metropolitan city.',
    relatedTerms: ['Server', 'ISP', 'Latency', 'DNS']
  },
  {
    id: 'decibel-dbm',
    term: 'Decibel (dBm) / Signal Strength',
    category: 'Wi-Fi & Wireless',
    letter: 'D',
    simpleDef: 'A logarithmic unit measuring wireless and cellular radio signal power referenced to 1 milliwatt.',
    detailedExplanation: 'Wi-Fi signal strength is measured in negative dBm values. -30 dBm is maximum power (sitting right next to router), -50 dBm to -65 dBm is excellent, -75 dBm is weak, and -85 dBm or lower results in frequent packet drops and disconnects.',
    whyItMatters: 'Allows users and network engineers to pinpoint Wi-Fi dead spots and optimize router/access point placement.',
    realWorldExample: 'A laptop showing full signal at -52 dBm in the living room, but dropping to -84 dBm in the basement causing video calls to disconnect.',
    relatedTerms: ['Signal Strength', 'Network Quality', 'Wi-Fi', 'Frequency']
  },
  {
    id: 'dns',
    term: 'DNS (Domain Name System)',
    category: 'Protocols & Networking',
    letter: 'D',
    simpleDef: 'The phonebook of the internet that translates human-friendly domain names (google.com) into numerical IP addresses (142.250.190.46).',
    detailedExplanation: 'When you type a URL, your browser queries a recursive DNS resolver. If the address is not cached, the resolver queries root servers, TLD servers, and authoritative nameservers to obtain the server’s real IP address.',
    whyItMatters: 'Fast, secure DNS resolvers (like Cloudflare 1.1.1.1 or Google 8.8.8.8) reduce lookup times from 80 ms to 4 ms, making web browsing feel instantaneous.',
    realWorldExample: 'Changing your router DNS to 1.1.1.1 slashes initial domain resolution latency across all household devices.',
    relatedTerms: ['IP Address', 'Public IP', 'Server', 'HTTPS']
  },
  {
    id: 'download-speed',
    term: 'Download Speed',
    category: 'Speed & Bandwidth',
    letter: 'D',
    simpleDef: 'The rate at which data is transferred from remote internet servers to your local device, measured in Mbps or Gbps.',
    detailedExplanation: 'Download speed determines how fast web pages load, how smoothly 4K/8K video streams without buffering, and how quickly large application files, games, and OS updates download to your system.',
    whyItMatters: 'The primary headline metric advertised by ISPs for residential internet subscriptions.',
    realWorldExample: 'A 300 Mbps download connection downloading a 5 GB movie in approximately 2 minutes and 15 seconds.',
    relatedTerms: ['Upload Speed', 'Internet Speed', 'Throughput', 'Mbps', 'Gbps']
  },

  // E & F
  {
    id: 'ethernet',
    term: 'Ethernet (IEEE 802.3)',
    category: 'Hardware & Cables',
    letter: 'E',
    simpleDef: 'The universal wired networking standard used to connect computers, routers, and switches with maximum reliability.',
    detailedExplanation: 'Ethernet uses physical twisted-pair copper cables (Cat5e, Cat6, Cat6a, Cat8) or optical fiber to transmit data frames. Modern consumer Ethernet supports 1 Gbps, 2.5 Gbps, and 10 Gbps line speeds with zero radio interference and deterministic microsecond latency.',
    whyItMatters: 'Always delivers lower latency, zero packet loss, and 100% consistent throughput compared to wireless Wi-Fi.',
    realWorldExample: 'Plugging an Ethernet cable into your gaming PC to achieve a steady 12 ms ping with 0% packet loss.',
    relatedTerms: ['Cat6 Ethernet', 'Router', 'Wi-Fi', 'Latency']
  },
  {
    id: 'fiber-optic-ftth',
    term: 'Fiber Optic / FTTH (Fiber to the Home)',
    category: 'Broadband & Fiber',
    letter: 'F',
    simpleDef: 'An internet connection delivered via pure optical glass strands transmitting data as pulses of light.',
    detailedExplanation: 'Fiber-optic cables transmit digital data encoded as light photons through microscopic strands of silica glass. Fiber offers near-infinite theoretical bandwidth, virtually zero signal degradation over long distances, and complete immunity to electrical/electromagnetic interference.',
    whyItMatters: 'The fastest, most reliable broadband technology in existence, consistently delivering symmetrical gigabit download and upload speeds with single-digit latency.',
    realWorldExample: 'A 1,000 Mbps symmetrical fiber line providing 950 Mbps download, 950 Mbps upload, and 2 ms ping.',
    relatedTerms: ['Broadband', 'Download Speed', 'Upload Speed', 'Latency']
  },
  {
    id: 'frequency',
    term: 'Frequency (Radio Spectrum)',
    category: 'Wi-Fi & Wireless',
    letter: 'F',
    simpleDef: 'The rate of electromagnetic radio wave oscillations per second, measured in Megahertz (MHz) or Gigahertz (GHz).',
    detailedExplanation: 'In networking, frequency determines the physical characteristics of wireless signals: lower frequencies (like 2.4 GHz, 700 MHz) travel farther and penetrate walls easily, while higher frequencies (5 GHz, 6 GHz, 28 GHz mmWave) carry vastly more data per second over shorter distances.',
    whyItMatters: 'Governs the trade-off between coverage distance and maximum wireless speed on Wi-Fi and 5G.',
    realWorldExample: 'Your router operates on dual frequencies: 2.4 GHz for whole-home range and 5 GHz for maximum speed close to the router.',
    relatedTerms: ['2.4 GHz Band', '5 GHz Band', '6 GHz Band', 'Signal Strength']
  },

  // G, H, I
  {
    id: 'gbps',
    term: 'Gbps (Gigabits per Second)',
    category: 'Speed & Bandwidth',
    letter: 'G',
    simpleDef: 'A measurement unit for ultra-high-speed network data transfer, equal to 1,000 Megabits per second (Mbps).',
    detailedExplanation: '1 Gbps equals 1,000,000,000 bits per second. In practical file storage terms, 1 Gbps allows data transfer rates up to 125 Megabytes per second (MB/s). Multi-gigabit plans offer 2.5 Gbps, 5 Gbps, and 10 Gbps throughput.',
    whyItMatters: 'The modern standard for next-generation fiber-optic broadband and enterprise data center backbones.',
    realWorldExample: 'Downloading a massive 100 GB game title in under 14 minutes on a 1 Gbps fiber internet plan.',
    relatedTerms: ['Mbps', 'Bandwidth', 'Throughput', 'Internet Speed']
  },
  {
    id: 'http-https',
    term: 'HTTP / HTTPS (Hypertext Transfer Protocol Secure)',
    category: 'Protocols & Networking',
    letter: 'H',
    simpleDef: 'The underlying protocol used by the World Wide Web to transfer data between web browsers and web servers.',
    detailedExplanation: 'HTTPS is the secure version of HTTP. It encrypts all communications using Transport Layer Security (TLS 1.3), guaranteeing data privacy, server authentication, and message integrity so sensitive credentials and speed test payloads cannot be intercepted or modified.',
    whyItMatters: 'Protects user privacy, ensures secure online transactions, and enables modern high-performance web features like HTTP/3 and WebSockets.',
    realWorldExample: 'The padlock icon in your browser address bar verifying that your connection to NETSPEEDPRO is fully encrypted via TLS.',
    relatedTerms: ['TCP', 'UDP', 'Server', 'VPN']
  },
  {
    id: 'internet-speed',
    term: 'Internet Speed',
    category: 'Speed & Bandwidth',
    letter: 'I',
    simpleDef: 'The composite measure of how fast and responsive your internet connection is, defined by bandwidth, throughput, and latency.',
    detailedExplanation: 'Internet speed is not just one number. It is a combination of three key pillars: Download Throughput (data received), Upload Bandwidth (data transmitted), and Latency/Ping (reaction delay in milliseconds). A truly fast connection requires both high throughput and low, stable latency.',
    whyItMatters: 'Directly impacts the responsiveness of web browsing, video streaming quality, voice call clarity, and online gaming smoothness.',
    realWorldExample: 'A 500 Mbps connection with 10 ms ping loading complex modern web apps and streaming 4K HDR video effortlessly.',
    relatedTerms: ['Download Speed', 'Upload Speed', 'Ping', 'Latency', 'Bandwidth']
  },
  {
    id: 'ip-address',
    term: 'IP Address (Internet Protocol Address)',
    category: 'Protocols & Networking',
    letter: 'I',
    simpleDef: 'A unique numerical identifier assigned to every device connected to a computer network or the internet.',
    detailedExplanation: 'IP addresses allow devices to locate and communicate with each other. IPv4 addresses consist of four numbers separated by dots (e.g. 192.168.1.1). IPv6 addresses use 128-bit hexadecimal notation (e.g. 2001:0db8:85a3::8a2e:0370:7334) to provide trillions of unique addresses for the modern internet.',
    whyItMatters: 'Essential for routing data packets from web servers and game hosts to your specific device.',
    realWorldExample: 'Your router assigning a local IP of 192.168.1.15 to your laptop so data packets reach the right screen.',
    relatedTerms: ['Public IP', 'Private IP', 'DNS', 'Router']
  },
  {
    id: 'isp',
    term: 'ISP (Internet Service Provider)',
    category: 'Broadband & Fiber',
    letter: 'I',
    simpleDef: 'The telecommunications company that provides you with access to the global internet infrastructure.',
    detailedExplanation: 'ISPs operate fiber networks, cable lines, cellular towers, and regional routing gateways that connect residential and commercial customers to Tier-1 global internet exchange backbones (e.g. Jio, Airtel, Comcast, Verizon, AT&T, Singtel).',
    whyItMatters: 'Your ISP determines your available bandwidth tiers, routing paths, data caps, customer support, and monthly subscription cost.',
    realWorldExample: 'Subscribing to Airtel Xstream or Verizon Fios to get fiber-optic internet installed in your home.',
    relatedTerms: ['Broadband', 'Fiber Optic', 'Router', 'Modem']
  },

  // J, L, M
  {
    id: 'jitter',
    term: 'Jitter (Latency Variation)',
    category: 'Latency & Quality',
    letter: 'J',
    simpleDef: 'The variation or instability in ping latency timing over time, measured in milliseconds (ms).',
    detailedExplanation: 'If your ping is 15 ms on one packet, 90 ms on the next, and 20 ms after that, your connection suffers from high jitter. Jitter is caused by network congestion, bufferbloat, route flapping, and wireless interference. Stable connections have jitter below 3 ms.',
    whyItMatters: 'High jitter causes choppy, robotic voice calls on Zoom/Discord, frame stuttering in video conferences, and rubberbanding in online multiplayer games.',
    realWorldExample: 'A Zoom video meeting where the audio breaks up and stutters because packet arrival intervals vary wildly.',
    relatedTerms: ['Ping', 'Latency', 'Packet Loss', 'Bufferbloat', 'Network Quality']
  },
  {
    id: 'latency',
    term: 'Latency (Ping / Round Trip Time)',
    category: 'Latency & Quality',
    letter: 'L',
    simpleDef: 'The time delay in milliseconds (ms) for a data packet to travel from your device to a remote server and return.',
    detailedExplanation: 'Latency is governed by the physical speed of light in optical glass (~200,000 km/s), distance between endpoints, router hops, and queue buffering. Low latency (<20 ms) feels instantaneous, while high latency (>150 ms) produces perceptible lag.',
    whyItMatters: 'Crucial for real-time applications where every millisecond counts: competitive gaming, VoIP voice calls, and live trading.',
    realWorldExample: 'Clicking a link and having the web page immediately begin rendering in 12 milliseconds.',
    relatedTerms: ['Ping', 'Jitter', 'Packet Loss', 'Bufferbloat']
  },
  {
    id: 'mbps',
    term: 'Mbps (Megabits per Second)',
    category: 'Speed & Bandwidth',
    letter: 'M',
    simpleDef: 'The standard unit of measurement for internet bandwidth and speed, equal to 1,000,000 bits per second.',
    detailedExplanation: 'Megabits per second (Mbps) measures transmission speed. It takes 8 Megabits (Mb) to equal 1 Megabyte (MB) of file storage. For example, a 100 Mbps internet connection transfers data at a rate of 12.5 MB/s.',
    whyItMatters: 'The universal benchmark metric used by ISPs, speed test tools, and streaming services to rate connection capabilities.',
    realWorldExample: 'Netflix recommending 25 Mbps download speed for streaming 4K Ultra HD video smoothly.',
    relatedTerms: ['Gbps', 'Download Speed', 'Upload Speed', 'Bandwidth']
  },
  {
    id: 'modem',
    term: 'Modem (Modulator / Demodulator)',
    category: 'Hardware & Cables',
    letter: 'M',
    simpleDef: 'The hardware device that converts incoming analog signals from your ISP into digital data your home network can read.',
    detailedExplanation: 'Modems interface with physical ISP delivery mediums: coaxial cable (DOCSIS modem), fiber optics (ONT - Optical Network Terminal), or DSL phone lines. The modem passes decoded digital Ethernet traffic to your router.',
    whyItMatters: 'The bridge between your ISP’s external infrastructure and your home’s local area network.',
    realWorldExample: 'An optical fiber ONT modem converting light pulses from the street cable into standard RJ45 Ethernet data.',
    relatedTerms: ['Router', 'ISP', 'Ethernet', 'Fiber Optic']
  },

  // N
  {
    id: 'network-congestion',
    term: 'Network Congestion',
    category: 'Latency & Quality',
    letter: 'N',
    simpleDef: 'A state where network demand exceeds available data carrying capacity, causing slower speeds, packet loss, and lag.',
    detailedExplanation: 'Similar to vehicular traffic jams during rush hour, network congestion happens when too many users in a neighborhood or too many devices in a home attempt to transmit data simultaneously over a shared link. Routers drop excess packets or queue them, driving up latency.',
    whyItMatters: 'Explains why internet speeds frequently drop during evening peak hours (7:00 PM – 10:00 PM) on oversubscribed cable nodes.',
    realWorldExample: 'Internet speeds dropping from 300 Mbps in the morning to 65 Mbps on Friday evening due to neighborhood streaming demand.',
    relatedTerms: ['Bufferbloat', 'Bandwidth', 'Throughput', 'ISP']
  },
  {
    id: 'network-quality',
    term: 'Network Quality / Stability',
    category: 'Latency & Quality',
    letter: 'N',
    simpleDef: 'The overall health and consistency of a connection, determined by low jitter, zero packet loss, and steady loaded latency.',
    detailedExplanation: 'High bandwidth alone does not guarantee a high-quality connection. A 100 Mbps connection with 5 ms ping and 0% packet loss delivers a vastly superior user experience compared to a 1,000 Mbps connection with 150 ms ping and 5% packet loss.',
    whyItMatters: 'Ensures uninterrupted Zoom calls, zero buffering on streams, and glitch-free online gameplay.',
    realWorldExample: 'A connection scoring 99.5% on the NETSPEEDPRO Stability Index due to rock-solid 1.2 ms jitter.',
    relatedTerms: ['Ping', 'Jitter', 'Packet Loss', 'Bufferbloat']
  },

  // P
  {
    id: 'packet-loss',
    term: 'Packet Loss',
    category: 'Latency & Quality',
    letter: 'P',
    simpleDef: 'The percentage of data packets that fail to reach their intended destination across a network.',
    detailedExplanation: 'Measured as a percentage (e.g. 1% or 5%), packet loss occurs due to signal attenuation, congested router queues, faulty Ethernet cables, or bad Wi-Fi reception. TCP connections must retransmit lost packets, severely degrading download and upload speeds.',
    whyItMatters: 'Even 1% to 2% packet loss causes noticeable audio dropouts in Discord/Teams, choppy video, and character stutter in multiplayer games.',
    realWorldExample: 'Experiencing teleportation and missed shots in a competitive shooter because 3% of outgoing packets are dropped.',
    relatedTerms: ['Ping', 'Latency', 'Jitter', 'TCP', 'UDP']
  },
  {
    id: 'ping',
    term: 'Ping (ICMP Echo)',
    category: 'Latency & Quality',
    letter: 'P',
    simpleDef: 'A fundamental network diagnostic test that measures the round-trip time in milliseconds (ms) for a packet to reach a host and return.',
    detailedExplanation: 'Ping sends an ICMP Echo Request and waits for an Echo Reply. Ping values under 20 ms are excellent, 20–50 ms is good, 50–100 ms is fair, and above 150 ms results in noticeable delay.',
    whyItMatters: 'The fastest, most direct metric for determining whether a network connection is alive and evaluating real-time responsiveness.',
    realWorldExample: 'Running a speed test and seeing an idle ping of 8 ms to the nearest local exchange node.',
    relatedTerms: ['Latency', 'Jitter', 'Packet Loss', 'Server']
  },
  {
    id: 'private-ip',
    term: 'Private IP Address (LAN IP)',
    category: 'Protocols & Networking',
    letter: 'P',
    simpleDef: 'An IP address reserved exclusively for internal local area network (LAN) communication behind a router.',
    detailedExplanation: 'Defined by RFC 1918 standards (e.g. 192.168.x.x, 10.x.x.x, 172.16.x.x–172.31.x.x), private IP addresses are assigned by your router’s DHCP server to phones, laptops, and printers. They are not routable on the public global internet.',
    whyItMatters: 'Allows dozens of home devices to securely share a single public IP address via Network Address Translation (NAT).',
    realWorldExample: 'Your smart TV having a private IP of 192.168.1.42 to communicate with your home media server.',
    relatedTerms: ['Public IP', 'IP Address', 'Router', 'DHCP']
  },
  {
    id: 'public-ip',
    term: 'Public IP Address (WAN IP)',
    category: 'Protocols & Networking',
    letter: 'P',
    simpleDef: 'The globally unique IP address assigned to your router by your ISP that represents your home network on the worldwide internet.',
    detailedExplanation: 'Every website, cloud server, and remote gaming host communicates with your home network using this single public IP address. Your router uses Network Address Translation (NAT) to forward incoming packets to the correct private device.',
    whyItMatters: 'Identifies your network location to web servers, content delivery networks, and speed test servers.',
    realWorldExample: 'Checking NETSPEEDPRO and seeing your public IP address (e.g. 49.207.12.85) and ISP geolocation.',
    relatedTerms: ['Private IP', 'IP Address', 'ISP', 'VPN']
  },

  // R & S
  {
    id: 'router',
    term: 'Router',
    category: 'Hardware & Cables',
    letter: 'R',
    simpleDef: 'The central networking hardware device that directs data traffic between your local home devices and the wider internet.',
    detailedExplanation: 'Routers manage IP address distribution (DHCP), firewall security, Network Address Translation (NAT), Quality of Service (QoS), and wireless Wi-Fi broadcasting. They inspect packet destination headers and choose the most efficient path to route data.',
    whyItMatters: 'The nerve center of your home network; a modern router ensures fast Wi-Fi coverage, low latency, and network security.',
    realWorldExample: 'Upgrading to a Wi-Fi 6 tri-band router to eliminate dead zones and support 40 simultaneous household devices.',
    relatedTerms: ['Modem', 'Access Point', 'Wi-Fi', 'Ethernet']
  },
  {
    id: 'server',
    term: 'Server',
    category: 'Protocols & Networking',
    letter: 'S',
    simpleDef: 'A high-performance computer or software program that provides services, data, or resources to client devices over a network.',
    detailedExplanation: 'Servers host web pages, stream video content, manage database queries, coordinate multiplayer game lobbies, and power speed test measurement endpoints. They run in continuous 24/7 high-availability data centers.',
    whyItMatters: 'Every speed test, web search, and cloud file transfer connects your device to a remote server.',
    realWorldExample: 'NETSPEEDPRO connecting to a dedicated 10 Gbps edge server in Mumbai to measure your peak fiber throughput.',
    relatedTerms: ['Data Center', 'CDN', 'HTTP / HTTPS', 'Latency']
  },
  {
    id: 'signal-strength',
    term: 'Signal Strength (RSSI)',
    category: 'Wi-Fi & Wireless',
    letter: 'S',
    simpleDef: 'The relative received power level of a wireless Wi-Fi or cellular radio signal, measured in negative dBm.',
    detailedExplanation: 'Received Signal Strength Indicator (RSSI) measures how strongly your device receives radio waves from the router or cell tower. -30 to -65 dBm represents strong reception, -75 dBm indicates moderate range, and below -85 dBm causes high packet loss and dropped connections.',
    whyItMatters: 'Directly dictates maximum Wi-Fi modulation speeds (QAM) and overall connection stability.',
    realWorldExample: 'Moving closer to the router increases signal strength from -80 dBm to -50 dBm, tripling your speed test result.',
    relatedTerms: ['Decibel (dBm)', 'Frequency', 'Wi-Fi', 'Beamforming']
  },

  // T, U, V, W
  {
    id: 'tcp',
    term: 'TCP (Transmission Control Protocol)',
    category: 'Protocols & Networking',
    letter: 'T',
    simpleDef: 'A connection-oriented network protocol that guarantees reliable, ordered, and error-checked delivery of data packets.',
    detailedExplanation: 'TCP uses a 3-way handshake (SYN, SYN-ACK, ACK) and sequence numbers to ensure every packet arrives intact. If a packet is lost in transit, TCP automatically requests a retransmission. Used for web browsing, file downloads, emails, and speed test streaming.',
    whyItMatters: 'Ensures downloaded files and web pages are 100% complete without missing data or corruption.',
    realWorldExample: 'Downloading a software installation file where every single byte must arrive in perfect sequence.',
    relatedTerms: ['UDP', 'HTTP / HTTPS', 'Packet Loss', 'Throughput']
  },
  {
    id: 'throughput',
    term: 'Throughput',
    category: 'Speed & Bandwidth',
    letter: 'T',
    simpleDef: 'The actual, real-world rate of successful data delivery over a network connection, taking overhead and packet loss into account.',
    detailedExplanation: 'While bandwidth represents maximum theoretical capacity (e.g. a 500 Mbps line), throughput measures the actual data successfully transferred (e.g. 475 Mbps actual download throughput) after factoring in TCP protocol headers, Wi-Fi interference, and server congestion.',
    whyItMatters: 'The genuine speed your applications actually experience in daily internet usage.',
    realWorldExample: 'Running a speed test on a 1,000 Mbps line and measuring a real-world throughput of 940 Mbps over Gigabit Ethernet.',
    relatedTerms: ['Bandwidth', 'Download Speed', 'Upload Speed', 'Internet Speed']
  },
  {
    id: 'udp',
    term: 'UDP (User Datagram Protocol)',
    category: 'Protocols & Networking',
    letter: 'U',
    simpleDef: 'A lightweight, connectionless network protocol designed for speed and low latency without retransmission delays.',
    detailedExplanation: 'Unlike TCP, UDP does not require a handshake or retransmission of lost packets ("fire and forget"). This eliminates latency overhead, making it the ideal protocol for live video streaming, VoIP voice calls, DNS lookups, and fast-paced multiplayer gaming.',
    whyItMatters: 'Enables the lowest possible latency for real-time multiplayer games and live video feeds where losing an occasional frame is better than freezing.',
    realWorldExample: 'In an esports game, player movements are sent via UDP so character positions update with zero delay.',
    relatedTerms: ['TCP', 'Latency', 'Ping', 'Packet Loss']
  },
  {
    id: 'upload-speed',
    term: 'Upload Speed',
    category: 'Speed & Bandwidth',
    letter: 'U',
    simpleDef: 'The rate at which data is transmitted from your local device to remote servers across the internet, measured in Mbps or Gbps.',
    detailedExplanation: 'Upload bandwidth is consumed when sending emails with attachments, uploading YouTube videos, backing up photos to cloud storage (Google Drive, iCloud), sharing your webcam during Zoom/Teams calls, and broadcasting Twitch livestreams.',
    whyItMatters: 'When upload bandwidth is saturated, your entire internet freezes because outgoing download acknowledgment (TCP ACK) packets get delayed.',
    realWorldExample: 'Uploading a 4K video to YouTube in under 2 minutes on a 500 Mbps upload fiber connection.',
    relatedTerms: ['Download Speed', 'Internet Speed', 'Throughput', 'Mbps', 'Fiber Optic']
  },
  {
    id: 'vpn',
    term: 'VPN (Virtual Private Network)',
    category: 'Security & Privacy',
    letter: 'V',
    simpleDef: 'A secure encrypted tunnel between your device and a remote VPN server that shields your IP address and online activity.',
    detailedExplanation: 'A VPN encrypts all incoming and outgoing internet traffic using strong cryptography (AES-256 or ChaCha20). Web servers see the VPN server’s public IP rather than your real home IP address. VPNs add slight latency overhead due to encryption and geographic detour routing.',
    whyItMatters: 'Protects privacy on untrusted public Wi-Fi networks, prevents ISP tracking, and enables secure remote access to enterprise networks.',
    realWorldExample: 'Connecting to a VPN at an airport coffee shop to ensure nobody on the public Wi-Fi can snoop on your login passwords.',
    relatedTerms: ['Public IP', 'HTTP / HTTPS', 'Latency', 'ISP']
  },
  {
    id: 'wi-fi',
    term: 'Wi-Fi (IEEE 802.11)',
    category: 'Wi-Fi & Wireless',
    letter: 'W',
    simpleDef: 'The universal wireless networking technology that uses radio waves to provide high-speed local network and internet access.',
    detailedExplanation: 'Wi-Fi allows smartphones, laptops, TVs, and smart home appliances to communicate without physical cables. Operating across 2.4 GHz, 5 GHz, and 6 GHz frequencies, modern Wi-Fi generations (Wi-Fi 6, 6E, 7) deliver multi-gigabit throughput and low latency.',
    whyItMatters: 'The primary way billions of consumer devices connect to the internet in homes, offices, and public spaces daily.',
    realWorldExample: 'Connecting your smartphone to your home Wi-Fi network to browse the web wirelessly at 400 Mbps.',
    relatedTerms: ['2.4 GHz Band', '5 GHz Band', 'Wi-Fi 6', 'Wi-Fi 7', 'Router']
  },
  {
    id: 'wi-fi-6',
    term: 'Wi-Fi 6 (802.11ax)',
    category: 'Wi-Fi & Wireless',
    letter: 'W',
    simpleDef: 'The 6th generation Wi-Fi standard operating on 2.4 GHz and 5 GHz, engineered for high device density and speeds up to 9.6 Gbps.',
    detailedExplanation: 'Introduced OFDMA (dividing channels for simultaneous multi-device transmission), 1024-QAM modulation, bidirectional 8x8 MU-MIMO, Target Wake Time (TWT) for battery saving, and mandatory WPA3 security.',
    whyItMatters: 'The current industry standard for modern home routers, laptops, and smartphones, delivering up to 4x capacity in crowded homes.',
    realWorldExample: 'Streaming, gaming, and downloading across 30 household devices simultaneously on a Wi-Fi 6 router without network slowdowns.',
    relatedTerms: ['Wi-Fi 6E', 'Wi-Fi 7', '5 GHz Band', 'Router']
  },
  {
    id: 'wi-fi-6e',
    term: 'Wi-Fi 6E (6 GHz Extended)',
    category: 'Wi-Fi & Wireless',
    letter: 'W',
    simpleDef: 'An extension of Wi-Fi 6 that unlocks access to the pristine, ultra-wide 6 GHz frequency band for zero-interference multi-gigabit speeds.',
    detailedExplanation: 'Wi-Fi 6E takes the capabilities of Wi-Fi 6 and expands them into the 6 GHz spectrum (5.925–7.125 GHz). Offering up to seven continuous 160 MHz channels, Wi-Fi 6E eliminates congestion from legacy Wi-Fi 4/5 devices and delivers real-world throughput exceeding 1.8 Gbps with sub-3ms latency.',
    whyItMatters: 'The first major spectrum expansion for Wi-Fi in over a decade, providing clean airwaves for heavy bandwidth applications.',
    realWorldExample: 'A Wi-Fi 6E desktop achieving 1,650 Mbps speed test results in an apartment building crowded with dozens of competing 5 GHz networks.',
    relatedTerms: ['6 GHz Band', 'Wi-Fi 6', 'Wi-Fi 7', 'Channel Bonding']
  },
  {
    id: 'wi-fi-7',
    term: 'Wi-Fi 7 (802.11be Extremely High Throughput)',
    category: 'Wi-Fi & Wireless',
    letter: 'W',
    simpleDef: 'The newest flagship Wi-Fi generation featuring massive 320 MHz channels, 4096-QAM, and Multi-Link Operation (MLO) for speeds up to 46 Gbps.',
    detailedExplanation: 'Introduces Multi-Link Operation (MLO), allowing client devices to transmit and receive data across multiple frequency bands (5 GHz + 6 GHz) simultaneously. This slashes wireless latency to wired Ethernet levels (<1 ms) and delivers real-world multi-gigabit throughput.',
    whyItMatters: 'The ultimate wireless standard, making Wi-Fi as fast and deterministic as physical wired Ethernet cables.',
    realWorldExample: 'A Wi-Fi 7 laptop connecting to 5 GHz and 6 GHz simultaneously to stream 8K VR with 0.8 ms wireless latency.',
    relatedTerms: ['Wi-Fi 6E', '6 GHz Band', 'Channel Bonding', 'Ethernet']
  }
];
