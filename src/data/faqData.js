// Comprehensive In-Depth Knowledge Base of 115 Unique Network & Speed Benchmark FAQs with Full Technical Details

export const FAQ_CATEGORIES = [
  'All',
  'Speed Basics',
  'Ping & Latency',
  'Wi-Fi & Routers',
  'Fiber & Broadband',
  '5G & Mobile',
  'Gaming & Esports',
  'Streaming & Work',
  'Hardware & Cables',
  'DNS, VPN & Security'
];

export const FAQ_DATA = [
  // =========================================================================
  // 1. SPEED BASICS & BENCHMARK METRICS (Q1 - Q15)
  // =========================================================================
  {
    id: 1,
    category: 'Speed Basics',
    q: "What is internet speed and how is it measured across modern networks?",
    a: "Internet speed represents the data transfer capacity and velocity between your connected client device (PC, smartphone, console) and remote web/cloud servers across global infrastructure.\n\n• Megabits per second (Mbps): Standard residential measurement. 1 Mbps = 1,000,000 bits of digital data transferred every second.\n• Gigabits per second (Gbps): Ultra-high-speed fiber metric. 1 Gbps = 1,000 Mbps = 1,000,000,000 bits per second.\n• Three Core Pillars: Internet quality is not just raw bandwidth; it consists of Download Throughput (inbound data rate), Upload Throughput (outbound data rate), and Latency/Ping (round-trip reaction time).\n\nWhen you run a test on NETSPEEDPRO, multiple concurrent HTTP/3 and WebSocket streams are initialized to saturate your connection pipe and evaluate true sustained throughput."
  },
  {
    id: 2,
    category: 'Speed Basics',
    q: "What is the exact mathematical difference between Megabits (Mbps) and Megabytes (MB/s)?",
    a: "The difference comes down to bits versus bytes in digital computing:\n\n• 1 Byte (B) = 8 Bits (b).\n• ISPs and network benchmarks quote speeds in Megabits per second (lowercase 'b', Mbps).\n• Web browsers, Steam, and operating systems report file downloads in Megabytes per second (uppercase 'B', MB/s).\n\nPractical Conversion Formula:\nDownload Rate (MB/s) = Internet Speed (Mbps) ÷ 8\n\nReal-World Download Examples on a 100 Mbps Connection:\n• Maximum theoretical speed: 100 ÷ 8 = 12.5 MB/s.\n• Accounting for ~5% TCP/IP protocol overhead: ~11.8 MB/s actual download speed.\n• A 50 GB modern game will take approximately 1 hour and 12 minutes to download at 11.8 MB/s."
  },
  {
    id: 3,
    category: 'Speed Basics',
    q: "What is download speed, why is it critical, and how much do you really need?",
    a: "Download speed measures how rapidly data travels from external servers to your local device. It directly governs the speed of browsing web pages, streaming movies, downloading software, and updating operating systems.\n\nBandwidth Requirement Breakdown by Activity:\n• Basic Web Browsing & Social Media: 5–15 Mbps per user.\n• HD Video Streaming (1080p 60fps): 10–15 Mbps per active screen.\n• 4K UHD HDR Streaming (Netflix, Prime, Disney+): 25–40 Mbps per screen.\n• 8K VR & Next-Gen Cloud Streaming: 60–100 Mbps.\n• Large Game Downloads (100GB+ titles): 200–1000 Mbps for rapid 15–20 minute installs.\n\nFor a multi-user household with 4 people streaming, working, and gaming simultaneously, a 150–300 Mbps broadband connection ensures zero buffering or quality throttling."
  },
  {
    id: 4,
    category: 'Speed Basics',
    q: "What is upload speed, who needs high upload bandwidth, and what are the use cases?",
    a: "Upload speed measures the rate at which your device sends data packets outbound across the internet to other computers or cloud infrastructure.\n\nKey Use Cases Requiring Fast Upload:\n• Video Conferencing: Zoom, Microsoft Teams, and Google Meet require 3.5–5 Mbps stable upload per 1080p stream.\n• Livestreaming (Twitch / YouTube): 1080p 60fps streaming requires 6–8 Mbps sustained bitrate; 4K streaming requires 20–30 Mbps.\n• Cloud Sync & Backups: Uploading raw camera footage, Google Drive backups, or iCloud syncs can take hours on weak 5 Mbps upload lines.\n• Remote Work (VPN / RDP / SSH): Pushing large git repositories, CAD drawings, or database files to corporate servers.\n• Smart Home Security: 4 to 8 outdoor 2K/4K surveillance cameras uploading continuous feeds to cloud storage need 15–25 Mbps upload."
  },
  {
    id: 5,
    category: 'Speed Basics',
    q: "Why is upload speed typically much slower than download speed on residential internet?",
    a: "Most traditional residential broadband technologies (such as Cable DOCSIS 3.0/3.1 and VDSL/ADSL) are engineered with an asymmetrical architecture.\n\nWhy ISPs Build Asymmetrical Networks:\n1. Historical Usage Patterns: Over 85–90% of typical consumer internet traffic is inbound (video streaming, web page assets, game downloads). Only 10–15% is outbound (chat messages, search queries, upload requests).\n2. Coaxial Frequency Slicing: Cable TV coaxial cables have limited radio frequency spectrum. ISPs allocate the vast majority of radio channels (50 MHz to 1000 MHz) for downstream data, reserving only a tiny slice (5 MHz to 42 MHz) for upstream data.\n3. Cost Optimization: Symmetrical routing requires full fiber optic infrastructure (FTTH). On pure fiber, you receive 100% symmetrical speeds (e.g., 300 Mbps download and 300 Mbps upload)."
  },
  {
    id: 6,
    category: 'Speed Basics',
    q: "What is a symmetrical internet connection and why is it superior for content creators and power users?",
    a: "A symmetrical connection delivers identical maximum throughput in both download and upload directions (e.g., 1000 Mbps download AND 1000 Mbps upload).\n\nKey Advantages of Symmetrical Connections:\n• No Upload Bottlenecks: Backing up a 100 GB folder to Google Drive or OneDrive takes ~14 minutes on gigabit symmetrical fiber, compared to 5.5 hours on cable internet with 40 Mbps upload.\n• Zero Bufferbloat During Uploads: Multiple family members can upload 4K video clips or sync photos without causing ping spikes in online games.\n• High-Performance Self-Hosting: Allows seamless hosting of local Media Servers (Plex, Jellyfin), private Nextcloud instances, or home VPN endpoints.\n• Professional Video Editing: Remote editors can stream raw uncompressed ProRes and 8K timelines to clients in real time."
  },
  {
    id: 7,
    category: 'Speed Basics',
    q: "How does the NETSPEEDPRO speed testing engine work under the hood?",
    a: "NETSPEEDPRO employs a multi-phase, high-concurrency browser telemetry engine engineered in HTML5 and JavaScript:\n\n1. Edge Geolocation Detection: Upon load, the client queries low-latency IP endpoints to extract your public ASN, ISP provider name, city, and coordinates to select the nearest optimal server node.\n2. Latency & Jitter Measurement: Executes 20 consecutive HTTP HEAD probes using performance.now() microsecond timers to calculate minimum, median, and statistical standard deviation (jitter).\n3. Adaptive Download Benchmark: Spawns 4 to 8 parallel asynchronous streams. Dynamically scales payload chunk sizes (from 256KB up to 32MB) over a 10-second sliding window to accurately saturate high-speed gigabit pipes.\n4. Real-Time Socket Upload Benchmark: Dispatches randomized binary Uint8Array byte payloads using XMLHttpRequest upload.onprogress listeners to calculate raw socket-level outbound throughput.\n5. Live Graph Rendering: Renders bezier smoothed throughput charts on HTML5 Canvas at 60 FPS without UI thread stutter."
  },
  {
    id: 8,
    category: 'Speed Basics',
    q: "How much data does a full speed test consume on mobile or limited broadband plans?",
    a: "Because a benchmark must completely fill your network pipe for 10–15 seconds to determine peak stable throughput, data consumption scales directly with your connection speed:\n\nApproximate Data Usage by Speed Tier:\n• 10–25 Mbps Connection: ~25 MB to 45 MB total data.\n• 50–100 Mbps Connection: ~60 MB to 120 MB total data.\n• 300–500 Mbps Connection: ~200 MB to 450 MB total data.\n• 1 Gbps (1000 Mbps) Fiber: ~500 MB to 1.2 GB per full test.\n• 2.5 Gbps Multi-Gigabit: ~1.5 GB to 3.0 GB per test.\n\nTip: If you are on a limited mobile 4G/5G daily data cap (e.g. 1.5 GB/day), be mindful that running multiple consecutive gigabit 5G speed tests can consume your daily quota in minutes."
  },
  {
    id: 9,
    category: 'Speed Basics',
    q: "Why do speed test results differ between different testing websites or apps?",
    a: "Discrepancies between testing platforms are normal and occur due to several technical variables:\n\n1. Server Physical Distance: A speed test server 20 km away inside your ISP's regional network will show higher speeds and lower latency than a server 1,200 km away in another state.\n2. Peering and Transit Routes: Different test services host servers on different tier-1 backbones (Cloudflare, AWS, Google Cloud, Fastly, local ISP data centers). The number of routing hops directly alters performance.\n3. Threading Architecture: Single-stream (1 thread) tests evaluate single-file web download limits, whereas multi-stream (4–16 parallel threads) tests evaluate total maximum line bandwidth.\n4. Browser vs. App Engine: Native desktop apps bypass browser sandbox memory management, resulting in 2–5% variance compared to browser benchmarks."
  },
  {
    id: 10,
    category: 'Speed Basics',
    q: "What is an ideal internet speed benchmark score for 1, 2, 4, and 6+ user households?",
    a: "Recommended minimum bandwidth guidelines based on concurrent active users:\n\n• 1 User (Solo Professional / Student):\n  - Recommended: 50–100 Mbps Download | 15+ Mbps Upload.\n  - Ideal for 4K streaming, Zoom calls, and gaming on 2–3 personal devices.\n\n• 2 Users (Couples / Roommates):\n  - Recommended: 100–200 Mbps Download | 30+ Mbps Upload.\n  - Supports two simultaneous 4K streams and concurrent work video meetings.\n\n• 3–4 Users (Standard Family):\n  - Recommended: 250–500 Mbps Download | 50+ Mbps Upload (or Symmetrical Fiber).\n  - Seamless handling of multiple smart TVs, gaming consoles, and smart home IoT gear.\n\n• 5+ Users / Smart Home (Power Users):\n  - Recommended: 500–1000 Mbps (1 Gbps) Symmetrical Fiber.\n  - Zero slowdowns during simultaneous 4K streams, cloud backups, gaming, and 30+ connected IoT devices."
  },
  {
    id: 11,
    category: 'Speed Basics',
    q: "What is bandwidth throttling, why do ISPs do it, and how can you prove it?",
    a: "Bandwidth throttling is the intentional capping or slowdown of internet speeds by an Internet Service Provider.\n\nCommon Reasons ISPs Throttle:\n1. Fair Usage Policy (FUP) Breaches: Exceeding monthly soft caps (e.g. 3,300 GB) drops speeds to 1–10 Mbps.\n2. Peak-Hour Congestion Management: Throttling heavy streaming or torrent protocols between 7:00 PM and 11:00 PM to protect neighborhood line capacity.\n3. Service-Specific Shaping: Deliberately throttling video streaming platforms (Netflix, YouTube) to reduce backbone peering costs.\n\nHow to Detect and Prove Throttling:\n• Run a benchmark on NETSPEEDPRO at 10:00 AM, then run another at 9:00 PM. A persistent 50%+ drop during peak hours indicates network congestion or throttling.\n• Run a benchmark on your normal connection, then connect to a fast WireGuard VPN and re-test. If streaming speeds dramatically increase under the VPN, your ISP is packet-inspecting and throttling specific traffic."
  },
  {
    id: 12,
    category: 'Speed Basics',
    q: "How should I prepare my computer and network before running an accurate speed test?",
    a: "To ensure your speed test results reflect your true line capacity and not local device bottlenecks, follow this checklist:\n\n1. Use a Direct Wired Connection: Connect your PC directly to the router using a CAT6/CAT7 Ethernet cable.\n2. Pause Heavy Downloads & Syncs: Stop Steam downloads, Windows Updates, torrent clients, Google Drive, and OneDrive syncs.\n3. Close Extra Browser Tabs: Close tabs with active video streams, heavy web apps, or ad-heavy sites.\n4. Disconnect VPNs: Disable third-party VPNs unless you specifically wish to test your encrypted tunnel throughput.\n5. Check Device CPU Load: Open Task Manager (Ctrl+Shift+Esc) to confirm CPU and memory utilization are below 50%.\n6. Keep Wi-Fi Close: If testing on Wi-Fi, stand within 2–3 meters of your router on the 5 GHz or 6 GHz frequency band."
  },
  {
    id: 13,
    category: 'Speed Basics',
    q: "What causes internet speeds to fluctuate during different hours of the day?",
    a: "Speed fluctuations are driven by a combination of physical and network variables:\n\n• Neighborhood Node Saturation: On Cable DOCSIS and GPON Fiber networks, bandwidth is shared across a local neighborhood splitter (often 32 to 64 homes per port). Peak evening hours (8:00 PM – 11:00 PM) create aggregate traffic surges.\n• Wi-Fi Spectrum Crowding: In apartment complexes, neighboring routers broadcast on identical wireless channels in the evening, causing co-channel packet collisions.\n• Router Thermal Throttling: Routers running in unventilated cabinets can overheat under prolonged heavy load, reducing CPU clock speeds.\n• Background Cloud Backups: Smartphones and smart TVs scheduled to perform cloud syncs when plugged in at night can silently saturate upstream bandwidth."
  },
  {
    id: 14,
    category: 'Speed Basics',
    q: "What is TCP Slow Start and how does it influence initial speed test readings?",
    a: "TCP Slow Start is a foundational congestion control mechanism specified in RFC 5681 for internet communication:\n\n• When a data stream begins, the sender does not know the receiver's line capacity. To prevent immediate network packet loss, it starts with a small Congestion Window (cwnd) of 10 segments.\n• With each acknowledgment (ACK) received, the window doubles exponentially (10 ➔ 20 ➔ 40 ➔ 80 packets).\n• Within 1.5 to 3 seconds, the window reaches the line's maximum physical capacity.\n\nThis is why speed test speedometer needles and live throughput graphs start low for the first 1–2 seconds before accelerating smoothly to your maximum subscribed speed."
  },
  {
    id: 15,
    category: 'Speed Basics',
    q: "What is the difference between peak burst speed and sustained average speed?",
    a: "• Peak Burst Speed: The maximum instantaneous throughput achieved during a short window (e.g. 350 Mbps for 1 second). Many cable ISPs employ 'SpeedBoost' features that grant 10–20% extra burst bandwidth for the first few seconds of a transfer.\n• Sustained Average Speed: The stable, continuous transfer rate maintained over a full 10–30 second measurement window (e.g. 295 Mbps).\n\nNETSPEEDPRO uses robust statistical filtering (trimming top/bottom 5% outliers) to deliver your true sustained average speed, which is the realistic number that reflects long video streaming, cloud backups, and large game downloads."
  },

  // =========================================================================
  // 2. PING, LATENCY & JITTER (Q16 - Q30)
  // =========================================================================
  {
    id: 16,
    category: 'Ping & Latency',
    q: "What is the exact technical definition of ping and latency?",
    a: "Latency is the total time delay incurred for a digital data packet to travel from a source device, pass through intermediate routing hops, reach a destination server, and have an acknowledgment packet return back to the source.\n\nPing is the diagnostic utility and unit of measurement (expressed in milliseconds, ms) used to measure this round-trip time (RTT).\n\nComponents of Total Latency:\n1. Propagation Delay: The physical speed of light/signals traveling through fiber glass (~200,000 km/s) or copper.\n2. Transmission Delay: The time required to push packet bits onto the physical medium.\n3. Processing Delay: The time router CPUs spend inspecting packet headers and routing tables.\n4. Queuing Delay: Time spent waiting in congested router buffer queues."
  },
  {
    id: 17,
    category: 'Ping & Latency',
    q: "What is considered a good, average, and bad ping score for gaming and daily use?",
    a: "Ping benchmark standards for residential and commercial connections:\n\n• Under 15 ms (Elite / Fiber Tier): Instantaneous response. Standard on FTTH fiber optic connections to local metro servers. Ideal for esports tournaments and high-frequency trading.\n• 15–35 ms (Excellent Tier): Butter-smooth experience for all multiplayer gaming, voice calls, and 4K livestreaming.\n• 35–65 ms (Good / Average Tier): Typical for 4G/5G mobile networks and cable broadband. Fully playable for competitive games with minimal delay.\n• 65–100 ms (Fair / Playable Tier): Acceptable for casual web browsing and Netflix streaming; minor hit-registration delay in fast-paced FPS shooters.\n• 100–250+ ms (Poor / Laggy): High latency caused by international routing, satellite hops, or heavy line congestion. Voice calls suffer audio overlap; online games experience severe rubber-banding."
  },
  {
    id: 18,
    category: 'Ping & Latency',
    q: "What is jitter, why is it dangerous for voice/video calls, and what causes it?",
    a: "Jitter is the statistical fluctuation or variance in latency over time across consecutive data packets.\n\nWhy Jitter Destroys Real-Time Applications:\n• Real-time protocols (UDP) used by Zoom, Teams, VoIP, and games do not re-request lost packets; they require a steady, rhythmic arrival of data (e.g. one packet every 20 ms).\n• If Packet 1 arrives in 15 ms, Packet 2 in 85 ms, and Packet 3 in 20 ms, the application's jitter buffer runs dry, resulting in robotic voice distortion, audio dropouts, and frozen video frames.\n\nRoot Causes of High Jitter:\n1. Wi-Fi Radio Interference: Neighboring routers, Bluetooth devices, and microwaves causing intermittent re-transmissions.\n2. Bufferbloat: Unmanaged router queues filling up under download strain.\n3. Dynamic ISP Routing: Packets taking different physical paths through congested network peering points."
  },
  {
    id: 19,
    category: 'Ping & Latency',
    q: "What is a healthy jitter threshold score and how do I fix high jitter?",
    a: "Healthy Jitter Benchmark Scale:\n• Under 2 ms: Elite fiber stability. Zero audio or video packet loss.\n• 2–5 ms: Very good residential standard.\n• 5–12 ms: Moderate; minor voice distortion during high-bandwidth moments.\n• 15+ ms: Problematic; noticeable gaming lag spikes and video call stutter.\n\nHow to Fix High Jitter:\n1. Switch to Wired Ethernet: Eliminates wireless radio frequency airtime contention.\n2. Enable SQM QoS: Turn on CAKE or FQ-CoDel Smart Queue Management on your router.\n3. Change Wi-Fi Frequency: Move from congested 2.4 GHz to clean 5 GHz / 6 GHz bands.\n4. Replace Old Modems: Modems featuring defective Intel Puma 6 chipsets are notorious for hardware-level latency jitter."
  },
  {
    id: 20,
    category: 'Ping & Latency',
    q: "What is packet loss, how does it differ from latency, and how do you diagnose it?",
    a: "Packet loss occurs when one or more packets of data traveling across a computer network fail to reach their destination, getting dropped in transit.\n\nDifference Between Latency and Packet Loss:\n• Latency is a time delay (data arrives late).\n• Packet Loss is data disappearance (data never arrives and must either be discarded or retransmitted).\n\nAcceptable Packet Loss Thresholds:\n• 0.0%: The only acceptable target for fiber, cable, and esports gaming.\n• 0.5%–1.5%: Noticeable stutter in online games and audio clipping in Discord/Zoom.\n• 3.0%+: Severe network degradation, websites failing to load, and video streams buffering.\n\nDiagnosis: Run ping -t 8.8.8.8 in Windows Command Prompt. If 'Request timed out' appears, packets are dropping either at your router, local cabling, or ISP street node."
  },
  {
    id: 21,
    category: 'Ping & Latency',
    q: "What is bufferbloat, how does it ruin ping during downloads, and how does SQM fix it?",
    a: "Bufferbloat is high latency under load caused by routers with excessively large, unmanaged internal packet buffers.\n\nHow Bufferbloat Happens:\n• When you start a large download or cloud backup, your ISP pipe fills to 100% capacity.\n• Older or budget routers hold excess packets in a massive FIFO (First-In, First-Out) memory queue instead of dropping or scheduling them.\n• Time-sensitive gaming packets (which are only a few bytes) get stuck behind huge 1,500-byte video chunks, causing ping to skyrocket from 20 ms to 400+ ms.\n\nHow Smart Queue Management (SQM) Solves It:\nSQM algorithms (like CAKE and FQ-CoDel) create separate sub-queues for every active network stream and employ active queue management to ensure tiny, real-time gaming and VoIP packets are instantly transmitted ahead of bulk file downloads."
  },
  {
    id: 22,
    category: 'Ping & Latency',
    q: "Why is latency on international servers always higher than local servers?",
    a: "International latency is constrained by fundamental laws of physics and global submarine optical routing:\n\n1. Speed of Light in Fiber Glass: Light travels through a vacuum at 300,000 km/s, but slows to ~200,000 km/s inside silica fiber optic glass (refractive index ~1.47).\n2. Physical Distance: The round-trip distance between Mumbai and New York is ~25,000 km. Physical transit time alone requires a minimum theoretical 125 ms.\n3. Active Routing Hops: International packets must pass through 15 to 30 intermediate Tier-1 routers, submarine cable landing stations (e.g. in Marseille, Singapore, or London), and optical repeaters, adding processing and switching overhead."
  },
  {
    id: 23,
    category: 'Ping & Latency',
    q: "Can using a VPN reduce ping in online games or does it always increase latency?",
    a: "In 95% of scenarios, a VPN increases ping by 5 to 25 ms due to cryptographic encryption overhead and routing through a middleman server.\n\nWhen a VPN CAN Lower Ping:\n• Sub-optimal ISP Routing: If your ISP routes traffic to a game server through a congested, circuitous 8-hop detour, a gaming VPN with direct Tier-1 peering agreements can route your packets through a geographically direct, uncongested path.\n• ISP Traffic Throttling: If your ISP intentionally throttles UDP gaming traffic, VPN encryption conceals packet headers, bypassing ISP throttling."
  },
  {
    id: 24,
    category: 'Ping & Latency',
    q: "What causes random, periodic ping spikes on home Wi-Fi networks?",
    a: "Periodic Wi-Fi ping spikes (e.g. jumping from 25 ms to 200 ms every 30 seconds) are usually caused by:\n\n1. Windows Background Wi-Fi Scanning: Windows periodically scans for nearby SSIDs in the background to maintain its network list, causing a 100–300 ms wireless radio freeze. (Can be fixed using tools like WLAN Optimizer).\n2. Dual-Band Band Steering: Routers attempting to force a device back and forth between 2.4 GHz and 5 GHz.\n3. Smart Home Telemetry Bursts: Security cameras or smart appliances sending batch telemetry bursts.\n4. Household Appliances: 2.4 GHz microwave ovens, Bluetooth speakers, or cordless phones emitting electromagnetic interference."
  },
  {
    id: 25,
    category: 'Ping & Latency',
    q: "What is the difference between Idle Ping, Download Loaded Ping, and Upload Loaded Ping?",
    a: "NETSPEEDPRO benchmarks three distinct latency states to assess total network health:\n\n• Idle Ping (Baseline): Measured when no data is transferring. Reflects your pure physical line distance to the server.\n• Download Loaded Ping: Measured while multi-threaded download streams saturate your inbound line. High values indicate router download bufferbloat.\n• Upload Loaded Ping: Measured while outbound streams saturate your upload line. This is typically where budget routers suffer the worst bufferbloat latency spikes (often 300–800 ms)."
  },
  {
    id: 26,
    category: 'Ping & Latency',
    q: "Why do fiber optic connections achieve much lower latency than cable or satellite?",
    a: "Physical Medium Comparison:\n\n• Fiber Optic (FTTH): Pure light pulses through silica glass. Low attenuation, zero electrical interference, and native microsecond switching latency (typically 1–5 ms to regional hubs).\n• Cable DOCSIS: Electrical signals over copper coaxial cables. Shared neighborhood spectrum and RF amplification add 10–25 ms latency.\n• LEO Satellite (Starlink): Signals travel ~550 km to orbit and back, resulting in 25–45 ms latency.\n• Geostationary Satellite (Legacy): Signals travel 35,786 km to geostationary orbit and back, resulting in unavoidable physical latency of 600–800 ms."
  },
  {
    id: 27,
    category: 'Ping & Latency',
    q: "How does geolocated server selection improve the accuracy of network benchmarks?",
    a: "Speed benchmarks are designed to evaluate the physical link performance of your last-mile ISP connection. Connecting to a server across the continent introduces third-party backbone congestion that does not reflect your actual home broadband capability.\n\nNETSPEEDPRO uses ultra-fast edge geolocation to select the closest Tier-1 server node, ensuring measurements accurately reflect your true line bandwidth and local latency."
  },
  {
    id: 28,
    category: 'Ping & Latency',
    q: "What is Round-Trip Time (RTT) and how is it measured in browser JavaScript?",
    a: "Round-Trip Time (RTT) is the duration in milliseconds required for a network packet to travel from a client to a server and for an acknowledgment signal (ACK) to return.\n\nIn NETSPEEDPRO, RTT is measured using the browser's high-resolution performance.now() API (accurate to within 5 microseconds). Multiple consecutive HTTP HEAD and WebSocket round-trips are executed, filtering out TCP handshake overhead to calculate true network transport latency."
  },
  {
    id: 29,
    category: 'Ping & Latency',
    q: "Can outdated network card drivers or Windows power-saving settings increase latency?",
    a: "Yes. Network Interface Card (NIC) settings significantly impact latency:\n\n• Energy Efficient Ethernet (EEE) / Green Ethernet: Power-saving features put the network chip into sleep states during micro-pauses, adding 5–15 ms wake-up latency.\n• Interrupt Moderation: Batches network packets together to save CPU cycles, which increases throughput for file transfers but adds latency jitter for gaming.\n• Fix: Open Device Manager ➔ Network Adapters ➔ Properties ➔ Advanced. Disable 'Energy Efficient Ethernet' and set 'Interrupt Moderation' to Disabled or Low for minimal gaming latency."
  },
  {
    id: 30,
    category: 'Ping & Latency',
    q: "What is the difference between ping and server response time (TTFB)?",
    a: "• Ping (Network Latency): The time required for a packet to physically travel across wires to the server and back.\n• TTFB (Time to First Byte): Combines network latency PLUS the server's internal processing time (database queries, PHP/Node.js script execution, generating HTML) before it sends the first byte of data back.\n\nA website can have a fast 15 ms ping, but if the web server is overloaded, its TTFB may be slow (1,200 ms)."
  },

  // =========================================================================
  // 3. WI-FI & ROUTERS (Q31 - Q45)
  // =========================================================================
  {
    id: 31,
    category: 'Wi-Fi & Routers',
    q: "What are the core technical differences between 2.4 GHz, 5 GHz, and 6 GHz Wi-Fi?",
    a: "Wireless frequency bands operate on different trade-offs between physical range and maximum bandwidth throughput:\n\n• 2.4 GHz Band:\n  - Frequency Range: 2.400–2.484 GHz (Channels 1–14).\n  - Range: ~45–50 meters (excellent wall penetration).\n  - Max Real Speed: 40–90 Mbps.\n  - Drawback: Only 3 non-overlapping channels (1, 6, 11); heavily congested by neighbors, Bluetooth, and microwaves.\n\n• 5 GHz Band:\n  - Frequency Range: 5.150–5.850 GHz (24+ non-overlapping channels).\n  - Range: ~15–20 meters (moderate wall penetration).\n  - Max Real Speed: 400–900 Mbps on Wi-Fi 6 (80/160 MHz channels).\n  - Best for: 4K streaming, gaming, and gigabit fiber.\n\n• 6 GHz Band (Wi-Fi 6E & Wi-Fi 7):\n  - Frequency Range: 5.925–7.125 GHz (up to 1,200 MHz of clean spectrum).\n  - Range: ~10–12 meters (line-of-sight optimized).\n  - Max Real Speed: 1,500–4,000+ Mbps (Multi-Gigabit).\n  - Best for: Zero-interference ultra-low latency VR, 8K streaming, and multi-gigabit transfers."
  },
  {
    id: 32,
    category: 'Wi-Fi & Routers',
    q: "What are the scientific rules for optimal Wi-Fi router placement in a home?",
    a: "To maximize radio signal distribution and minimize attenuation, follow these positioning principles:\n\n1. Central Location: Place the router in the geographical center of your home, rather than in an isolated corner or basement.\n2. Elevate the Device: Mount the router on a shelf or desk (1.2 to 1.8 meters high). Radio waves travel downward and outward in an umbrella pattern.\n3. Avoid Dense Obstacles: Never place routers behind thick concrete/brick walls, inside metal AV cabinets, or directly behind large TVs.\n4. Beware of Reflective Surfaces: Large mirrors and metallic surfaces bounce and reflect radio waves, causing destructive multipath interference.\n5. Keep Away from Interference Sources: Maintain at least 2 meters separation from microwave ovens, 2.4 GHz cordless phones, baby monitors, and heavy electrical breaker panels."
  },
  {
    id: 33,
    category: 'Wi-Fi & Routers',
    q: "What are Wi-Fi 6 (802.11ax) and Wi-Fi 7 (802.11be), and what new technologies do they introduce?",
    a: "Wi-Fi standards evolve to handle higher device density, wider channels, and lower latency:\n\n• Wi-Fi 6 (802.11ax):\n  - OFDMA (Orthogonal Frequency-Division Multiple Access): Splits wireless channels into hundreds of sub-carriers, allowing a router to communicate with up to 30+ smart devices simultaneously in one transmission.\n  - 1024-QAM: Increases data packing density by 25% over Wi-Fi 5.\n  - Target Wake Time (TWT): Drastically improves smartphone and smart IoT battery life by scheduling sleep cycles.\n\n• Wi-Fi 7 (802.11be - Next-Gen):\n  - 320 MHz Ultra-Wide Channels: Doubles channel bandwidth over Wi-Fi 6.\n  - 4096-QAM (4K-QAM): Increases peak throughput by another 20%.\n  - Multi-Link Operation (MLO): Enables devices to transmit and receive across both 5 GHz and 6 GHz bands simultaneously, combining speeds and cutting latency to near-zero."
  },
  {
    id: 34,
    category: 'Wi-Fi & Routers',
    q: "What is a Mesh Wi-Fi system and is it genuinely better than a Wi-Fi range extender?",
    a: "Yes, Mesh Wi-Fi is vastly superior to traditional cheap range extenders in every performance metric:\n\n• The Problem with Wi-Fi Range Extenders:\n  - Repeaters simply listen to a broadcast signal and re-transmit it on the same radio, immediately cutting available bandwidth by 50%.\n  - They create separate SSIDs (e.g. 'Home_EXT'), forcing your phone to stick to weak signals until connection drops completely.\n\n• How Mesh Wi-Fi Works:\n  - Mesh systems (e.g. ASUS ZenWiFi, TP-Link Deco, Netgear Orbi, Eero) consist of a main router and satellite nodes that communicate over a dedicated wireless backhaul band (or wired Ethernet backhaul).\n  - Unified Single SSID with 802.11k/v/r Seamless Roaming: Your device automatically and seamlessly handshakes to the closest node with zero dropped calls or buffering."
  },
  {
    id: 35,
    category: 'Wi-Fi & Routers',
    q: "Why does rebooting or power-cycling a router resolve slow internet speeds?",
    a: "Modern Wi-Fi routers are specialized embedded computers equipped with multi-core CPUs, RAM, and Linux-based operating systems.\n\nWhat Happens During Weeks of Continuous Operation:\n1. Memory Fragmentation & Leaks: Firmware processes, DNS resolvers, and routing daemons accumulate memory fragmentation, slowing down packet processing.\n2. Saturated NAT Lookup Tables: Routers maintain tables mapping every internal connection (hundreds per phone/PC). Stale TCP/UDP connection states clog memory.\n3. Wi-Fi Channel Congestion: Routers often lock onto a channel selected on initial boot. Over time, neighbors turn on new routers, crowding that channel.\n\nRebooting flushes RAM, clears stale NAT entries, terminates hung background threads, and forces the router to scan and lock onto the cleanest radio channel."
  },
  {
    id: 36,
    category: 'Wi-Fi & Routers',
    q: "How do I choose the best, non-overlapping Wi-Fi channels to avoid neighbor interference?",
    a: "Wi-Fi channel optimization depends on frequency band:\n\n• For 2.4 GHz Band:\n  - There are 11 channels in North America (13 in Europe/Asia), each 20 MHz wide, but spaced only 5 MHz apart.\n  - Rule: ONLY use channels 1, 6, or 11. Using channel 2, 3, 4, 7, 8, 9, or 10 creates adjacent-channel interference, degrading speeds for both you and your neighbors.\n\n• For 5 GHz Band:\n  - Channels are 20/40/80/160 MHz wide. Use a free Wi-Fi Analyzer mobile app to identify unoccupied channels.\n  - UNII-1 (Channels 36, 40, 44, 48) and UNII-3 (Channels 149, 153, 157, 161) are standard and reliable.\n  - DFS Channels (52–144): Clean and unoccupied, but will temporarily switch off if nearby airport/weather radar signals are detected."
  },
  {
    id: 37,
    category: 'Wi-Fi & Routers',
    q: "What is Quality of Service (QoS) on a router and how do I configure it properly?",
    a: "Quality of Service (QoS) is an intelligent traffic management feature on modern routers that prioritizes time-sensitive data over bulk downloads.\n\nHow to Configure QoS for Peak Performance:\n1. Log in to your router gateway (typically 192.168.1.1 or 192.168.0.1).\n2. Navigate to QoS / Traffic Management settings.\n3. Measure your true line speed using NETSPEEDPRO.\n4. Set your Upload and Download bandwidth limits in QoS to 90–95% of your true line capacity (this prevents ISP buffer queues from ever filling).\n5. Set Priority Rules: Assign 'Highest Priority' to Gaming Consoles, PC MAC addresses, and Video Conferencing (Zoom/Teams); assign 'Low Priority' to BitTorrent, OS Updates, and smart TVs."
  },
  {
    id: 38,
    category: 'Wi-Fi & Routers',
    q: "Can having 30+ smart home IoT devices slow down my computer's Wi-Fi speed?",
    a: "On older Wi-Fi 4 (802.11n) and Wi-Fi 5 (802.11ac) routers, YES. Older routers use single-user time slicing, meaning every smart bulb, security camera, smart plug, and sensor must take turns communicating with the router, stealing valuable airtime from your PC.\n\nSolutions to Prevent IoT Slowdowns:\n• Upgrade to a Wi-Fi 6 or Wi-Fi 7 Router: OFDMA allows the router to communicate with dozens of low-bandwidth IoT devices simultaneously in a single radio frame.\n• Separate IoT SSIDs on 2.4 GHz: Put smart home gear on a dedicated 2.4 GHz Guest Network, reserving the 5 GHz and 6 GHz bands exclusively for your PCs, laptops, and phones."
  },
  {
    id: 39,
    category: 'Wi-Fi & Routers',
    q: "What are MU-MIMO, Beamforming, and OFDMA in wireless technology?",
    a: "Three key wireless technologies that enhance modern router performance:\n\n• Beamforming: Instead of broadcasting radio waves in a uniform 360-degree sphere, the router calculates the physical location of your device and phases antenna signals to focus a concentrated beam of RF energy directly at your phone or laptop.\n• MU-MIMO (Multi-User MIMO): Enables a router with multiple antennas (e.g. 4x4 or 8x8) to transmit distinct spatial streams to 4+ devices at the exact same instant, eliminating queuing delays.\n• OFDMA: Divides a single channel into smaller sub-carriers (Resource Units), enabling simultaneous transmission of data to multiple devices in a single packet cycle."
  },
  {
    id: 40,
    category: 'Wi-Fi & Routers',
    q: "Why should you buy a standalone router instead of using your ISP's combination modem/router gateway?",
    a: "ISP-provided 'combo' gateway devices are built to keep provider costs low and typically suffer from several limitations:\n\n• Weak Antennas & Range: Budget internal PCB antennas struggle to penetrate 2+ walls.\n• Slow Processors: Low-power single or dual-core CPUs overheat under multi-device loads, causing random disconnects.\n• Locked Firmware: ISPs lock down DNS settings, disable advanced port forwarding, prevent SQM bufferbloat configuration, and restrict VPN client setups.\n• Recommendation: Put your ISP modem into 'Bridge Mode' (or IP Passthrough) and connect a quality standalone Wi-Fi 6/7 router (ASUS, TP-Link Archer, Netgear Nighthawk) for superior range, speeds, and security."
  },
  {
    id: 41,
    category: 'Wi-Fi & Routers',
    q: "How often should I update router firmware and what are the security risks of skipping updates?",
    a: "You should check for router firmware updates every 3 to 6 months (or enable Automatic Security Updates in settings).\n\nRisks of Outdated Firmware:\n• Botnet Hijacking: Hackers scan the web for unpatched routers to enlist them into massive Mirai or VPNFilter DDoS botnets.\n• DNS Hijacking: Malicious firmware exploits can overwrite your DNS servers, redirecting you from legitimate banking or shopping websites to phishing clones without your knowledge.\n• Performance Bugs: Updates regularly patch memory leaks, improve Wi-Fi 6 scheduling, and optimize thermal management."
  },
  {
    id: 42,
    category: 'Wi-Fi & Routers',
    q: "What is the difference between WPA2, WPA3, and Open Wi-Fi security protocols?",
    a: "• Open Wi-Fi (No Password): Zero encryption. Any person nearby with a packet sniffer (like Wireshark) can capture unencrypted network traffic and URLs.\n• WPA2-AES: The global standard for the last 15 years. Uses 128-bit AES encryption. While secure, it is vulnerable to KRACK (Key Reinstallation Attacks) and offline dictionary password cracking.\n• WPA3-SAE (Simultaneous Authentication of Equals): The modern standard. Provides 192-bit cryptographic strength, immune to offline dictionary attacks even with simple passwords, and enables Protected Management Frames (PMF) to prevent de-authentication disconnect attacks."
  },
  {
    id: 43,
    category: 'Wi-Fi & Routers',
    q: "Why is 5 GHz Wi-Fi fast right next to the router but drops off in distant bedrooms?",
    a: "This is governed by the physics of electromagnetic radio wave propagation (Friis Transmission Equation):\n\n• Higher frequency waves (5 GHz / 6 GHz) oscillate much faster and carry significantly more data per second, but their shorter wavelengths are easily absorbed by physical matter (drywall, brick, metal, glass, water pipes).\n• Lower frequency waves (2.4 GHz) have longer wavelengths that bend around corners and penetrate solid structures with less energy loss.\n• Solution: If your bedroom is far from the router, install a wired Ethernet cable or deploy a Mesh Wi-Fi node to bridge the distance."
  },
  {
    id: 44,
    category: 'Wi-Fi & Routers',
    q: "What is a Guest Wi-Fi network, why is it essential, and how does it protect your devices?",
    a: "A Guest Network creates a completely isolated Virtual Local Area Network (VLAN) on your router with its own dedicated SSID and password.\n\nWhy You Must Use One:\n• Isolation: Devices on the Guest Network have full access to the internet, but are strictly blocked from discovering or communicating with your private PCs, NAS storage drives, home printers, and smart security cameras.\n• Malware Containment: If a friend's infected phone or an insecure smart plug gets compromised, the malware cannot spread across your local home network."
  },
  {
    id: 45,
    category: 'Wi-Fi & Routers',
    q: "Do cheap Wi-Fi range extenders or DIY foil reflectors work effectively?",
    a: "• DIY Foil Reflectors: Placing parabolic cardboard foil behind an antenna can theoretically redirect RF energy in one direction by 1–2 dB, but it creates severe multipath signal reflection errors and dead zones behind the router.\n• Cheap Plug-in Range Extenders ($20–$40): Extenders use a single wireless chip to listen and re-transmit, instantly cutting available speed by 50% while doubling latency.\n• The Right Fix: Run a cheap CAT6 flat Ethernet cable under baseboards or upgrade to a modern Wi-Fi 6 Mesh System with dedicated wireless backhaul."
  },

  // =========================================================================
  // 4. FIBER & BROADBAND (Q46 - Q58)
  // =========================================================================
  {
    id: 46,
    category: 'Fiber & Broadband',
    q: "What is Fiber Optic (FTTH) internet and why is it superior to copper cable?",
    a: "Fiber-to-the-Home (FTTH) transmits binary data as modulated pulses of infrared laser light through hair-thin strands of ultra-pure silica glass.\n\nKey Advantages Over Copper Coaxial / DSL:\n1. Speed Capacity: Fiber cables have practically unlimited theoretical bandwidth; commercial lines easily run at 1 Gbps, 2.5 Gbps, 10 Gbps, and 40 Gbps.\n2. Symmetrical Upload & Download: Identical speeds in both directions.\n3. Immunity to Electrical Interference: Glass is an electrical insulator. Nearby power transformers, lightning storms, and high-voltage electrical lines cause zero signal degradation.\n4. Ultra-Low Latency: Light travels through glass with negligible resistance, delivering local latency as low as 1–3 ms."
  },
  {
    id: 47,
    category: 'Fiber & Broadband',
    q: "What are the structural differences between FTTH, FTTC, FTTB, and FTTP?",
    a: "These acronyms represent how close physical fiber optic cables reach to your living room:\n\n• FTTH / FTTP (Fiber to the Home / Premises): 100% pure glass fiber runs directly into your house and terminates into an Optical Network Terminal (ONT). The gold standard for speed and reliability.\n• FTTB (Fiber to the Building): Fiber runs to an apartment building's basement telecom rack. Copper Ethernet cables or G.fast phone lines connect individual floors.\n• FTTC (Fiber to the Curb / Cabinet): Fiber runs to a street corner cabinet up to 300 meters away. Older copper telephone wires complete the final leg to your house, resulting in lower speeds and distance degradation."
  },
  {
    id: 48,
    category: 'Fiber & Broadband',
    q: "What is DOCSIS Cable internet (DOCSIS 3.0 vs. DOCSIS 3.1 vs. DOCSIS 4.0)?",
    a: "DOCSIS (Data Over Cable Service Interface Specification) is the technology used by cable TV companies to deliver internet over coaxial copper lines:\n\n• DOCSIS 3.0: Bonds up to 8–32 copper channels, supporting download speeds up to 300–500 Mbps, but uploads are capped at 20–35 Mbps.\n• DOCSIS 3.1: Introduces OFDM channels, enabling up to 10 Gbps download and 1–2 Gbps upload.\n• DOCSIS 4.0 (Next-Gen): Introduces Full Duplex DOCSIS (FDX) and Extended Spectrum (ESD), delivering symmetrical 10 Gbps download and 6 Gbps upload over existing coaxial TV cables."
  },
  {
    id: 49,
    category: 'Fiber & Broadband',
    q: "What is DSL internet (ADSL / VDSL) and why is it being phased out globally?",
    a: "DSL operates over copper telephone wires invented in the 19th century:\n\n• Severe Distance Decay: DSL signals attenuate rapidly. If you live more than 1 km from the telephone exchange, speeds drop from 50 Mbps down to 5–10 Mbps.\n• Noise Vulnerability: Corrosion on copper phone lines, rain in street junction boxes, and AM radio signals cause severe packet loss and line sync disconnects.\n• Telecommunications providers worldwide are actively shutting down legacy copper networks and replacing them with fiber optics."
  },
  {
    id: 50,
    category: 'Fiber & Broadband',
    q: "How does Low Earth Orbit (LEO) Satellite internet (Starlink) compare to legacy geostationary satellites?",
    a: "The difference lies entirely in orbital altitude:\n\n• Legacy Geostationary Satellites (HughesNet, Viasat):\n  - Orbit: 35,786 km above Earth.\n  - Latency: 600–800 ms (unavoidable physical light transit delay).\n  - Speeds: 15–25 Mbps with strict monthly data caps (20–50 GB).\n\n• Starlink (LEO Satellites):\n  - Orbit: ~550 km above Earth (65x closer).\n  - Latency: 25–45 ms (competitive with ground broadband).\n  - Speeds: 100–250 Mbps download | 15–30 Mbps upload.\n  - Supports online gaming, Zoom calls, and 4K streaming in rural and remote off-grid locations."
  },
  {
    id: 51,
    category: 'Fiber & Broadband',
    q: "What is a Fair Usage Policy (FUP) and how do commercial broadband data caps operate?",
    a: "A Fair Usage Policy (FUP) is a contractual bandwidth cap enforced by ISPs on residential 'Unlimited' broadband plans:\n\n• How It Works: Your plan provides full gigabit speeds up to a monthly threshold (e.g. 3,300 GB or 3.3 TB). If your household exceeds this quota, your speed is automatically throttled to 1–10 Mbps for the remainder of the billing cycle.\n• Why ISPs Use It: Prevents commercial crypto-mining farms, unauthorized local redistribution, or heavy seedbox servers from monopolizing shared neighborhood optical splitters.\n• Monitoring: Check your ISP's self-care customer portal monthly to track aggregate family data consumption."
  },
  {
    id: 52,
    category: 'Fiber & Broadband',
    q: "Why do storms, rain, and cold weather occasionally cause broadband slowdowns?",
    a: "• Fiber Optic Lines: Completely immune to rain, moisture, and lightning. If fiber slows down during a storm, it is usually due to power outages at regional ISP switching stations.\n• Satellite Internet: Suffers from 'Rain Fade'. Heavy rain droplets and storm clouds absorb and scatter high-frequency microwave radio signals (Ku/Ka bands).\n• Underground Copper Cables: Older copper phone and coaxial cables develop micro-cracks in insulation. Rainwater ingress causes electrical impedance drops and packet loss."
  },
  {
    id: 53,
    category: 'Fiber & Broadband',
    q: "What is an Optical Network Terminal (ONT) / ONU and how does it function?",
    a: "An Optical Network Terminal (ONT) is the hardware device installed inside your home where the fiber optic line enters from the street:\n\n• Function: It receives high-frequency optical laser pulses through an SC/APC green fiber connector, demodulates the light photons, and converts them into standard Ethernet data packets transmitted via an RJ45 LAN port.\n• Difference from a Modem: Modems modulate analog radio signals over coaxial/phone lines. ONTs convert light wavelengths using GPON/XGS-PON optical protocols."
  },
  {
    id: 54,
    category: 'Fiber & Broadband',
    q: "What hardware is required to actually achieve 2.5 Gbps or 10 Gbps multi-gigabit speeds on a PC?",
    a: "Standard PCs and routers sold prior to 2022 are limited to 1 Gbps (1,000 Mbps). To utilize multi-gigabit fiber, you must upgrade your entire hardware chain:\n\n1. Multi-Gigabit Ethernet Port: Your PC needs a 2.5G, 5G, or 10G LAN port (either built into modern motherboards or via a PCIe NIC card / Thunderbolt 3 adapter).\n2. Multi-Gigabit Router: A router featuring 2.5G/10G WAN and LAN ports.\n3. Quality Cabling: Minimum CAT6 cabling (supports 10 Gbps up to 55 meters) or CAT6a (10 Gbps up to 100 meters).\n4. Fast Storage NVMe SSD: A traditional mechanical hard drive writes at ~120 MB/s (1 Gbps max). Downloading at 2.5 Gbps (312 MB/s) requires a modern M.2 PCIe NVMe SSD."
  },
  {
    id: 55,
    category: 'Fiber & Broadband',
    q: "What is GPON vs. XGS-PON in residential fiber architecture?",
    a: "GPON and XGS-PON are the optical transmission standards used by fiber providers:\n\n• GPON (Gigabit Passive Optical Network):\n  - Downstream: 2.488 Gbps shared across 32 or 64 homes.\n  - Upstream: 1.244 Gbps shared.\n  - Caps residential plans at ~1 Gbps download and 500–1000 Mbps upload.\n\n• XGS-PON (10-Gigabit Symmetrical PON):\n  - Downstream: 10 Gbps symmetrical.\n  - Upstream: 10 Gbps symmetrical.\n  - The modern standard supporting 2 Gbps, 5 Gbps, and 10 Gbps residential plans."
  },
  {
    id: 56,
    category: 'Fiber & Broadband',
    q: "What is Tier-1 Internet Backbone Peering and how does it determine global internet routing?",
    a: "The global internet is a network of networks organized into three tiers:\n\n• Tier-1 Backbones (Lumen, Telia/Arelion, NTT, Tata Communications, AT&T, Zayo): Giant telecom networks that own transoceanic submarine fiber cables. They peer with one another for free and form the global backbone.\n• Tier-2 & Tier-3 (Consumer ISPs): Local providers (Jio, Airtel, Comcast, Spectrum) that purchase transit from Tier-1 networks.\n• Why It Matters: An ISP with premium direct peering routes your international traffic in 2–3 hops, while budget ISPs route through 10+ hops, causing latency spikes and packet loss."
  },
  {
    id: 57,
    category: 'Fiber & Broadband',
    q: "What is a Static IP address vs. Dynamic IP address, and when do you need a Static IP?",
    a: "• Dynamic IP Address: Your ISP dynamically assigns an IP from a shared pool whenever your modem boots. It changes every few days or weeks. Perfect for 98% of users.\n• Static IP Address: A dedicated, permanent IP address assigned exclusively to your line that never changes.\n\nWhen a Static IP is Necessary:\n1. Hosting Home Servers: Running private Plex servers, NAS cloud storage, or Minecraft/game servers.\n2. Remote Desktop Access: Direct SSH or RDP connections to home workstations from work.\n3. Security Whitelisting: Connecting to corporate databases or bank APIs that require fixed IP authorization.\n4. Bypassing CGNAT: Essential for achieving Open NAT Type on gaming consoles if your ISP uses Carrier-Grade NAT."
  },
  {
    id: 58,
    category: 'Fiber & Broadband',
    q: "What is IPv6, how does it differ from IPv4, and does it speed up web browsing?",
    a: "• IPv4 (32-bit): Provides ~4.3 billion unique addresses, which are now completely exhausted globally.\n• IPv6 (128-bit): Provides 340 undecillion unique addresses (enough for every atom on Earth's surface to have multiple IPs).\n\nDoes IPv6 Improve Speed?\nYes, by 5–15 ms on supported sites. Because every device receives a globally unique IPv6 address, routers and ISP servers bypass Carrier-Grade NAT (CGNAT) address translation tables, resulting in direct end-to-end routing with lower CPU overhead."
  },

  // =========================================================================
  // 5. 5G & MOBILE NETWORKS (Q59 - Q70)
  // =========================================================================
  {
    id: 59,
    category: '5G & Mobile',
    q: "What are the structural differences between 4G LTE and 5G cellular technology?",
    a: "5G represents a revolutionary generational upgrade over 4G LTE in speed, latency, and device density:\n\n• 4G LTE:\n  - Max Real Speeds: 25–100 Mbps.\n  - Latency: 35–65 ms.\n  - Device Capacity: ~10,000 devices per square kilometer.\n  - Spectrum: Sub-3 GHz.\n\n• 5G NR (New Radio):\n  - Max Real Speeds: 300–1,500+ Mbps.\n  - Latency: 10–25 ms.\n  - Device Capacity: 1,000,000 devices per square kilometer (eliminating stadium/concert network crashes).\n  - Spectrum: Low-Band (600–900 MHz), Mid-Band Sub-6 (2.5–3.7 GHz), and mmWave (24–40 GHz)."
  },
  {
    id: 60,
    category: '5G & Mobile',
    q: "What is the difference between 5G SA (Standalone) and 5G NSA (Non-Standalone)?",
    a: "• 5G NSA (Non-Standalone - Early 5G):\n  - Uses new 5G radio towers for data transfer, but relies on older 4G LTE core network infrastructure for authentication and signaling.\n  - Delivers fast download speeds, but ping and upload remain similar to 4G.\n\n• 5G SA (Standalone - True 5G):\n  - Built end-to-end on dedicated cloud-native 5G core equipment with zero reliance on 4G.\n  - Unlocks ultra-low latency (under 15 ms), high upload speeds, network slicing, and up to 20% lower phone battery drain."
  },
  {
    id: 61,
    category: '5G & Mobile',
    q: "What is 5G mmWave vs. Sub-6 GHz Mid-Band spectrum?",
    a: "• Sub-6 GHz Mid-Band (C-Band / 3.5 GHz):\n  - The global backbone of 5G coverage.\n  - Travels 2 to 5 km from cell towers and penetrates buildings.\n  - Real-world speeds: 200–800 Mbps with 20–30 ms latency.\n\n• mmWave (Millimeter Wave / 24–40 GHz):\n  - Ultra-high frequency radio spectrum.\n  - Range is limited to 150–300 meters and blocked by glass, walls, and foliage.\n  - Massive throughput: 1,000–3,500+ Mbps (1–3.5 Gbps) with sub-10 ms latency. Deployed in airports, stadiums, and dense downtown city centers."
  },
  {
    id: 62,
    category: '5G & Mobile',
    q: "What is 5G Fixed Wireless Access (FWA) Home Broadband (Jio AirFiber, T-Mobile Home)?",
    a: "5G FWA provides residential high-speed broadband wirelessly over the 5G cellular network, bypassing the need for physical optical cables to the house:\n\n• How It Operates: An outdoor high-gain 5G receiver antenna mounts to your roof/balcony, connecting via Ethernet to a Wi-Fi router inside your home.\n• Who It Is For: Suburban and rural areas where digging optical fiber trenches is economically unfeasible.\n• Performance: Delivers 100–300 Mbps with 25–40 ms ping, rivaling traditional cable broadband."
  },
  {
    id: 63,
    category: '5G & Mobile',
    q: "Why is 5G mobile data blazing fast outdoors but drops to slow 4G inside buildings?",
    a: "High-frequency radio signals suffer from building material attenuation:\n\n• Modern Building Materials: Low-Emissivity (Low-E) double-pane energy-efficient windows contain thin metallic oxide coatings that block 5G radio waves by 25–35 dB.\n• Reinforced Concrete & Steel: Steel rebars act as a partial Faraday cage, reflecting mid-band and mmWave radio frequencies.\n• When your smartphone detects the signal drop, it automatically falls back to lower-frequency 4G LTE (700–850 MHz) to maintain voice and data connectivity."
  },
  {
    id: 64,
    category: '5G & Mobile',
    q: "Why does running speed tests on 5G consume battery and cause mobile phones to get warm?",
    a: "Running a 5G benchmark at 800+ Mbps places the entire mobile hardware stack under peak load:\n\n1. 5G Baseband Modem: Transmits and decodes thousands of high-QAM radio frames per second, drawing maximum power (up to 3–5 Watts).\n2. CPU & Memory: The processor handles multi-threaded TCP socket streams, data decryption, and real-time canvas UI rendering at 60–120 Hz.\n3. Thermal Dissipation: Smartphone metal frames act as passive heatsinks to protect internal components, feeling noticeably warm during the test."
  },
  {
    id: 65,
    category: '5G & Mobile',
    q: "Can a smartphone mobile hotspot completely replace a dedicated home fiber connection?",
    a: "While fine as an emergency backup, smartphone hotspots have major limitations for full-time home use:\n\n• Battery & Thermal Degradation: Continuous hotspot operation causes high battery wear and thermal throttling.\n• Weak Wireless Range: Phone antennas can only cover 5–8 meters, failing across multi-room homes.\n• High Jitter & Latency: Hotspots suffer high jitter and bufferbloat under simultaneous multi-device streaming and gaming.\n• Carrier Throttling: Mobile carriers apply strict 15–50 GB monthly hotspot caps before throttling speeds to 600 Kbps."
  },
  {
    id: 66,
    category: '5G & Mobile',
    q: "What causes mobile internet to slow down at concerts, festivals, and sports stadiums?",
    a: "Cellular Base Station Radio Resource Exhaustion:\n\n• Each cell tower sector has a finite radio bandwidth pool (e.g. 1.2 Gbps total shared throughput).\n• When 40,000 fans in a stadium attempt to upload Instagram stories, WhatsApp videos, and stream simultaneously, the tower's airtime scheduler divides capacity among thousands of devices, slowing speeds down to kilobytes per second."
  },
  {
    id: 67,
    category: '5G & Mobile',
    q: "What is Carrier Aggregation (CA) and why does my phone display '4G+' or '5G+'?",
    a: "Carrier Aggregation is an advanced LTE-A and 5G feature that combines multiple separate radio frequency bands into one virtual high-speed data highway.\n\n• Example: Instead of connecting only to Band 3 (1800 MHz @ 50 Mbps), your phone bonds Band 3 + Band 40 (2300 MHz) + Band 41 (2500 MHz) simultaneously.\n• Result: Combined throughput jumps from 50 Mbps to 250+ Mbps with lower latency and higher connection stability."
  },
  {
    id: 68,
    category: '5G & Mobile',
    q: "What are VoLTE, VoWiFi, and VoNR, and how do they impact internet and call quality?",
    a: "• VoLTE (Voice over LTE) & VoNR (Voice over 5G NR): Transmits phone calls as high-priority digital voice packets over IP data channels, enabling crystal-clear HD audio while maintaining full 5G download speeds during calls.\n• VoWiFi (Wi-Fi Calling): Routes voice calls through your home Wi-Fi network when cellular tower reception is weak indoors, preventing dropped calls."
  },
  {
    id: 69,
    category: '5G & Mobile',
    q: "Why does toggling Airplane Mode for 10 seconds refresh and speed up mobile data?",
    a: "Smartphones maintain connection to a cell tower until the signal drops below a minimum threshold, even if a closer, less congested tower is available.\n\nToggling Airplane Mode forces the baseband processor to completely reset its radio frequency cache and perform a fresh signal triangulation handshake with the nearest, least congested cell tower."
  },
  {
    id: 70,
    category: '5G & Mobile',
    q: "How does 5G Network Slicing benefit enterprises, gamers, and emergency services?",
    a: "Network Slicing allows 5G SA operators to divide a single physical 5G network into multiple isolated virtual networks, each optimized for specific requirements:\n\n• Slice 1 (Esports / Cloud Gaming): Guaranteed sub-15 ms latency and zero jitter.\n• Slice 2 (Autonomous Vehicles / Emergency Services): 99.999% ultra-reliable low-latency communication (URLLC).\n• Slice 3 (Public Video Streaming): High throughput with standard latency."
  },

  // =========================================================================
  // 6. GAMING & ESPORTS (Q71 - Q82)
  // =========================================================================
  {
    id: 71,
    category: 'Gaming & Esports',
    q: "What matters more for competitive online gaming: High Download Speed or Low Ping/Jitter?",
    a: "Ping and Jitter are infinitely more important than raw download speed for gaming.\n\n• Actual Game Bandwidth Usage: Online multiplayer games (Valorant, CS2, Fortnite, Warzone, Rocket League) only transmit small player coordinate packets, consuming merely 0.5 to 2.5 Mbps of bandwidth.\n• The Importance of Ping: A player with 15 ms ping on a 50 Mbps fiber line will always have a massive competitive advantage over a player with 120 ms ping on a 1,000 Mbps connection because their server updates arrive 105 ms faster."
  },
  {
    id: 72,
    category: 'Gaming & Esports',
    q: "What is server 'tick rate' and how does it interact with network latency?",
    a: "Tick rate is the frequency at which the game server calculates physics, bullet trajectories, and player positions:\n\n• 64-Tick Server (Standard): Updates game state 64 times per second (every 15.6 ms).\n• 128-Tick Server (Esports / Competitive): Updates game state 128 times per second (every 7.8 ms).\n\nIf your ping is 15 ms on a 128-tick server, your inputs are processed on the very next server tick, resulting in crisp hit-registration and zero 'ghost bullets'."
  },
  {
    id: 73,
    category: 'Gaming & Esports',
    q: "Why should competitive gamers NEVER play on Wi-Fi?",
    a: "Wi-Fi is fundamentally a half-duplex wireless medium operating through airtime sharing:\n\n1. Packet Collisions: If another device or neighboring router broadcasts at the same millisecond, packets collide and must be re-transmitted, causing random 80–200 ms latency spikes.\n2. Radio Interference: Microwaves, Bluetooth controllers, and walls create micro-drops.\n3. Ethernet Advantage: CAT6 Ethernet is full-duplex with dedicated shielded copper lines, transmitting and receiving data simultaneously with zero packet loss and 0 ms jitter."
  },
  {
    id: 74,
    category: 'Gaming & Esports',
    q: "What is 'peeker's advantage' and netcode interpolation in online multiplayer shooters?",
    a: "Peeker's advantage is an inherent side effect of network latency and client-side prediction algorithms:\n\n• When Player A swings around a corner, their local client immediately renders the movement.\n• The movement packet takes 30 ms to reach the server and another 30 ms to reach Player B.\n• Player A sees Player B 60 ms before Player B's monitor ever displays Player A's model, granting the moving attacker a split-second reaction advantage."
  },
  {
    id: 75,
    category: 'Gaming & Esports',
    q: "What are NAT Types (Open / Moderate / Strict) on PlayStation, Xbox, and PC?",
    a: "NAT (Network Address Translation) dictates how easily your gaming console communicates with other players in peer-to-peer multiplayer lobbies:\n\n• Type 1 (Open): Direct connection to the web. Can host lobbies and connect to all players.\n• Type 2 (Moderate): Connected behind a standard router with correct port forwarding. Can connect to Open and Moderate players.\n• Type 3 (Strict): Behind restrictive firewalls or Carrier-Grade NAT. Cannot host matches, voice chat frequently fails, and matchmaking times are slow.\n\nFix: Enable UPnP (Universal Plug and Play) in your router settings or assign a static IP to your console and configure Port Forwarding."
  },
  {
    id: 76,
    category: 'Gaming & Esports',
    q: "What is UPnP and should gamers enable it on their routers?",
    a: "UPnP (Universal Plug and Play) is a networking protocol that allows games and consoles to dynamically request and open port forwarding rules on your router without manual configuration.\n\n• For Gamers: Enabling UPnP instantly resolves Strict NAT issues on PS5, Xbox Series X, Nintendo Switch, and PC games.\n• Security Consideration: Ensure your router firmware is kept up to date, as legacy UPnP implementations had security vulnerabilities."
  },
  {
    id: 77,
    category: 'Gaming & Esports',
    q: "Why do Cloud Gaming services (GeForce NOW, Xbox Cloud Gaming) require high bandwidth AND low latency?",
    a: "Unlike traditional games where graphics are rendered locally on your PC/console GPU, Cloud Gaming runs the game on a remote data center server:\n\n• Downstream: The server encodes a pristine, uncompressed 1080p/4K 60–120 FPS video stream sent to your screen, requiring 35–75+ Mbps sustained bandwidth.\n• Upstream: Every button click, mouse movement, and joystick tilt is sent across the web to the remote GPU.\n• Latency Requirement: If ping exceeds 35 ms, severe input lag makes aiming and fast reaction games feel sluggish."
  },
  {
    id: 78,
    category: 'Gaming & Esports',
    q: "What causes Discord RTC Connecting / No Route voice errors and how do you fix them?",
    a: "This error indicates that your Discord client cannot establish a UDP voice connection with Discord's regional voice servers.\n\nHow to Fix Discord Voice Errors:\n1. Change Voice Region: In Discord Server Settings ➔ Overview ➔ Voice Region, switch to a different nearby region.\n2. Change DNS: Switch your router or PC DNS to Cloudflare (1.1.1.1) or Google (8.8.8.8).\n3. Disable VPN / Proxy: High-security VPNs often block UDP voice ports.\n4. Disable QoS High Packet Priority in Discord Settings ➔ Voice & Video."
  },
  {
    id: 79,
    category: 'Gaming & Esports',
    q: "Can Gaming Routers with Geo-Filtering actually lower your in-game ping?",
    a: "Yes. Premium gaming routers (like Netduma R3, ASUS ROG Rapture) include Geo-Filtering software:\n\n• How It Works: It draws an adjustable geographical radius on a world map (e.g. 500 km around your city) and blocks your game client from connecting to distant, high-ping servers overseas.\n• Result: Forces matchmaking algorithms in games like Call of Duty, FIFA, and Halo to place you exclusively on local, low-latency dedicated servers."
  },
  {
    id: 80,
    category: 'Gaming & Esports',
    q: "Why does my ping look good on a speed test but lags inside game matches?",
    a: "Speed test benchmarks connect to your closest local ISP edge server (e.g. 15 km away in your city) to test your physical line capacity.\n\nGame servers (EA, Riot, Valve, Epic Games), on the other hand, are centralized in major international data centers (e.g. Frankfurt, Mumbai, Singapore, Virginia). The physical distance and third-party peering routing to those specific game servers determine your in-game ping."
  },
  {
    id: 81,
    category: 'Gaming & Esports',
    q: "What is Input Lag vs. Display Lag vs. Network Latency in gaming?",
    a: "Total System Latency is the combined sum of three separate delays:\n\n1. Input Lag: Time taken for your mouse/keyboard switch to register and send signals to your PC (~1–3 ms on 1000Hz polling rate).\n2. Display Lag: Time taken for your GPU to render a frame and your gaming monitor to refresh the pixels (~2–5 ms on 144Hz/240Hz monitors).\n3. Network Latency (Ping): Time taken for your game action to travel across the internet to the server (15–60 ms).\n\nReducing all three delivers elite esport reaction responsiveness."
  },
  {
    id: 82,
    category: 'Gaming & Esports',
    q: "How do I optimize Windows 11 network settings for competitive gaming?",
    a: "1. Disable Nagle's Algorithm (TcpAckFrequency & TCPNoDelay in Windows Registry) to force instant packet sending.\n2. Set Network Adapter to Maximum Performance in Windows Power Plan.\n3. Disable Delivery Optimization (Settings ➔ Windows Update ➔ Advanced ➔ Delivery Optimization ➔ Turn Off) to prevent Windows from uploading updates in the background during matches.\n4. Use a wired CAT6 Ethernet cable directly into your router."
  },

  // =========================================================================
  // 7. STREAMING & WORK (Q83 - Q93)
  // =========================================================================
  {
    id: 83,
    category: 'Streaming & Work',
    q: "What are the exact internet speed requirements for Netflix, YouTube, and Prime in 4K HDR?",
    a: "Official recommended sustained download bandwidth per active screen:\n\n• SD (480p): 3–4 Mbps.\n• HD (1080p Full HD): 5–10 Mbps.\n• 4K Ultra HD (2160p with HDR / Dolby Vision): 25–35 Mbps.\n• 4K High-Bitrate Remux (Apple TV+ / Sony Bravia Core): 50–80 Mbps.\n\nTip: For households with two smart TVs streaming 4K HDR simultaneously while other users browse, a minimum 100 Mbps broadband plan prevents resolution downscaling."
  },
  {
    id: 84,
    category: 'Streaming & Work',
    q: "What bandwidth is required for HD and 1080p Zoom and Microsoft Teams video conferencing?",
    a: "Official requirements for business video conferencing:\n\n• 1-on-1 Standard HD Video: 1.5 Mbps Download | 1.5 Mbps Upload.\n• Group Video Calls (Gallery View): 3.0 Mbps Download | 3.5 Mbps Upload.\n• 1080p Full HD Video Conferencing: 4.5 Mbps Download | 4.5 Mbps Upload.\n• Screen Sharing with Audio: 2.0 Mbps Upload.\n\nStability Tip: While bandwidth needs are modest, video calls require Jitter < 8 ms and Packet Loss = 0% to prevent robotic audio and frozen video."
  },
  {
    id: 85,
    category: 'Streaming & Work',
    q: "Why do YouTube and Netflix drop video resolution to 480p/720p automatically?",
    a: "Streaming platforms use Adaptive Bitrate Streaming (ABR) protocols like HLS and MPEG-DASH:\n\n• How ABR Works: Video files are pre-sliced into small 4-second chunks at multiple resolutions (480p, 720p, 1080p, 4K).\n• The video player monitors your device's buffer fill rate every 2 seconds. If a Wi-Fi latency spike or temporary bandwidth dip occurs, the player immediately requests lower-resolution chunks to prevent video playback from freezing completely."
  },
  {
    id: 86,
    category: 'Streaming & Work',
    q: "What is the recommended upload bitrate for 1080p 60FPS Twitch and YouTube livestreaming in OBS?",
    a: "Optimal OBS Studio Bitrate Settings:\n\n• 1080p 60FPS (Twitch - H.264 / NVENC): 6,000–8,000 Kbps (6–8 Mbps) video bitrate + 160 Kbps audio.\n• 1080p 60FPS (YouTube - H.264 / AV1): 8,000–12,000 Kbps (8–12 Mbps).\n• 1440p / 4K 60FPS (YouTube): 18,000–30,000 Kbps (18–30 Mbps).\n\nRule of Thumb: Your internet upload speed should be at least 2.5x your OBS stream bitrate to accommodate game telemetry and avoid dropped frames."
  },
  {
    id: 87,
    category: 'Streaming & Work',
    q: "Why does Remote Desktop (RDP / Citrix / AnyDesk) feel laggy and how can you optimize it?",
    a: "Remote desktop protocols stream continuous screen delta bitmaps while transmitting keyboard and mouse coordinates in real time.\n\nHow to Optimize Remote Work Performance:\n1. Connect via Wired Ethernet: Cuts packet jitter, making cursor movement feel instantaneous.\n2. Adjust RDP Display Settings: In Remote Desktop Connection ➔ Experience tab, choose 'High-speed broadband' and disable 'Desktop background', 'Show window contents while dragging', and 'Menu animations'.\n3. Reduce Resolution Scaling: Setting RDP to 1080p instead of 4K cuts required bandwidth by 65%."
  },
  {
    id: 88,
    category: 'Streaming & Work',
    q: "Why do smart TVs struggle with 4K streaming over Wi-Fi and should you use Ethernet?",
    a: "Most smart TVs (even high-end $2,000 OLED models) contain budget 100 Mbps Fast Ethernet ports and basic Wi-Fi antennas located behind large metal backplates.\n\nOptimal TV Setup:\n• If using Wi-Fi: Connect to the 5 GHz band within line of sight.\n• If using Ethernet: Plug a $15 USB-to-Gigabit Ethernet adapter into your TV's USB 3.0 port to achieve 300+ Mbps throughput and eliminate 4K Dolby Vision buffering."
  },
  {
    id: 89,
    category: 'Streaming & Work',
    q: "Why do wireless multi-room smart speakers (Sonos, Apple HomePod) stutter or desync?",
    a: "Multi-room audio systems stream synchronized UDP audio packets across your local network:\n\n• If speakers are placed on a congested 2.4 GHz band or on opposite ends of a house with high Wi-Fi packet drops, time-sync clocks drift, causing audio dropouts and stuttering.\n• Solution: Connect at least one main speaker via Ethernet or deploy a Mesh Wi-Fi system."
  },
  {
    id: 90,
    category: 'Streaming & Work',
    q: "What is AV1, HEVC (H.265), and AVC (H.264) video compression, and how do they save bandwidth?",
    a: "Video codecs compress raw video data to transmit high quality over minimal internet bandwidth:\n\n• AVC (H.264): Legacy 2003 standard. Requires 25–40 Mbps for 4K streaming.\n• HEVC (H.265): 50% more efficient than H.264. Standard for 4K Blu-ray and Netflix HDR.\n• AV1 (Next-Gen Open Royalty-Free): 30% more efficient than HEVC. Allows YouTube, Netflix, and Discord to stream pristine 4K video using just 15–20 Mbps bandwidth."
  },
  {
    id: 91,
    category: 'Streaming & Work',
    q: "How can I prevent family members' downloads from lagging my critical work video calls?",
    a: "1. Enable Smart Queue Management (SQM) or QoS on your router.\n2. Set your work laptop's IP/MAC address to 'Highest Priority'.\n3. Set a download/upload bandwidth cap (e.g. 70% max) on gaming consoles and torrent PCs during working hours (9:00 AM – 5:00 PM)."
  },
  {
    id: 92,
    category: 'Streaming & Work',
    q: "What is streaming bitrate and how does it determine image clarity vs. bandwidth usage?",
    a: "Bitrate is the volume of data processed per second in video/audio media (measured in Kbps or Mbps):\n\n• High Bitrate = Crisper image, vibrant gradients, no dark pixelation/banding during fast motion, but requires higher bandwidth.\n• Low Bitrate = Blocky artifacts, blurry compression, but easily streams on weak 5 Mbps connections.\n• Example: A 4K movie on 4K Blu-ray streams at 85 Mbps, while Netflix 4K streams at 18 Mbps."
  },
  {
    id: 93,
    category: 'Streaming & Work',
    q: "How do background cloud photo backups (Google Photos, iCloud, OneDrive) impact daytime home network speed?",
    a: "When you shoot high-resolution 4K videos or photos on your phone, cloud backup daemons immediately attempt to saturate your full upstream bandwidth to sync to cloud servers.\n\nOn asymmetrical broadband plans (e.g. 100 Mbps download / 10 Mbps upload), an iCloud sync saturates 100% of your upload pipe, causing severe bufferbloat and lagging web browsing for everyone in the house.\n\nFix: In phone settings, set backups to run exclusively 'While Charging and Connected to Wi-Fi Overnight'."
  },

  // =========================================================================
  // 8. HARDWARE, CABLES & PORTS (Q94 - Q105)
  // =========================================================================
  {
    id: 94,
    category: 'Hardware & Cables',
    q: "What are the exact technical specifications of CAT5e, CAT6, CAT6a, CAT7, and CAT8 Ethernet cables?",
    a: "Ethernet cable standard comparison:\n\n• CAT5e (Category 5 Enhanced):\n  - Max Speed: 1 Gbps (1,000 Mbps) up to 100 meters.\n  - Frequency: 100 MHz.\n  - Best for: Basic budget residential networking.\n\n• CAT6 (Category 6 - Recommended Standard):\n  - Max Speed: 10 Gbps up to 55 meters | 1 Gbps up to 100 meters.\n  - Frequency: 250 MHz.\n  - Features internal spline separator to reduce crosstalk. Ideal for modern gigabit homes.\n\n• CAT6a (Category 6 Augmented):\n  - Max Speed: 10 Gbps up to 100 meters full distance.\n  - Frequency: 500 MHz.\n  - Heavy shielding. Ideal for commercial installations.\n\n• CAT7 / CAT8:\n  - Max Speed: 25–40 Gbps up to 30 meters (CAT8).\n  - Frequency: 2,000 MHz. Shielded (S/FTP) for enterprise data centers."
  },
  {
    id: 95,
    category: 'Hardware & Cables',
    q: "Can a damaged, kinked, or poorly crimped Ethernet cable secretly reduce speed to 100 Mbps?",
    a: "YES. Gigabit Ethernet (1000BASE-T) requires all 8 internal copper wires (4 twisted pairs) to function properly:\n\n• If even one single internal wire is severed or pin 4, 5, 7, or 8 has poor contact in the RJ45 connector, the network adapter cannot establish a gigabit link.\n• Automatic Link Downgrade: The hardware automatically negotiates down to 100BASE-TX (Fast Ethernet), which only requires 4 wires.\n• Your 500 Mbps connection will be physically hard-capped at exactly 94–95 Mbps in speed tests without displaying any explicit error message."
  },
  {
    id: 96,
    category: 'Hardware & Cables',
    q: "Why is my PC capped at exactly 100 Mbps on a 300+ Mbps broadband plan?",
    a: "Top Causes for the 100 Mbps Link Speed Bottleneck:\n\n1. Damaged or 4-Wire CAT5 Cable: Replace with a verified CAT6 cable.\n2. 100 Mbps Fast Ethernet Switch/Wall Port: Older wall jacks or $10 budget switches capped at 100 Mbps.\n3. Windows NIC Link Speed Configuration: Open Network Connections ➔ Right-click Ethernet ➔ Properties ➔ Configure ➔ Advanced ➔ Speed & Duplex. Ensure it is set to 'Auto Negotiation' or '1.0 Gbps Full Duplex'.\n4. Bent RJ45 Pins: Inspect the Ethernet port on your motherboard and router for bent copper contact pins."
  },
  {
    id: 97,
    category: 'Hardware & Cables',
    q: "What is an Unmanaged Gigabit Switch and does it add latency to my network?",
    a: "An Unmanaged Gigabit Switch (e.g. TP-Link, Netgear 5/8-Port Switch) expands a single LAN port on your router into multiple high-speed ports:\n\n• Latency Impact: Virtually zero. High-quality switches operate at Layer 2 (Data Link layer) using dedicated ASIC hardware chips with switching latency under 2 to 3 microseconds (0.003 ms).\n• Plug-and-play with zero setup required."
  },
  {
    id: 98,
    category: 'Hardware & Cables',
    q: "What are MoCA (Multimedia over Coax) adapters and are they as fast as real Ethernet?",
    a: "MoCA (Multimedia over Coax Alliance) technology transforms existing coaxial TV cables inside your walls into high-speed Ethernet backhauls:\n\n• MoCA 2.5 Standard: Delivers real-world speeds up to 2.5 Gbps with 1–3 ms latency.\n• Ideal for two-story homes where running new CAT6 Ethernet through walls is difficult, delivering true wired performance across rooms."
  },
  {
    id: 99,
    category: 'Hardware & Cables',
    q: "Are Powerline Ethernet adapters good for speed and gaming?",
    a: "Powerline adapters send network data across existing home electrical copper wiring:\n\n• Real-World Performance: While convenient, speed and latency depend heavily on home electrical wiring age and circuit breaker configurations.\n• Electrical Noise: Washing machines, air conditioners, and phone chargers introduce electrical noise, causing packet loss and jitter spikes.\n• Recommendation: Fine for basic browsing and smart TVs; inferior to MoCA or true CAT6 for competitive gaming."
  },
  {
    id: 100,
    category: 'Hardware & Cables',
    q: "What is a Dual-Band vs. Tri-Band vs. Quad-Band router?",
    a: "• Dual-Band Router: 1x 2.4 GHz band + 1x 5 GHz band. Standard for basic apartments.\n• Tri-Band Router: 1x 2.4 GHz band + 2x 5 GHz bands (or 1x 5 GHz + 1x 6 GHz). The second 5 GHz band acts as a dedicated wireless backhaul for mesh systems without halving speed.\n• Quad-Band Router (Wi-Fi 7): 2.4 GHz + 2x 5 GHz + 6 GHz bands for ultra-high device capacity in luxury smart homes."
  },
  {
    id: 101,
    category: 'Hardware & Cables',
    q: "What is the typical lifespan of a home Wi-Fi router before hardware degradation occurs?",
    a: "The optimal lifespan of a home Wi-Fi router is 3 to 5 years.\n\nWhy Routers Need Upgrading:\n• Electrolytic Capacitor Aging: Operating 24/7 at elevated temperatures degrades power delivery components, causing random reboots.\n• Advancing Standards: Newer wireless standards (Wi-Fi 6E/7) provide wider channels and higher speeds.\n• Security Support: Manufacturers typically discontinue security vulnerability firmware patches after 4–5 years."
  },
  {
    id: 102,
    category: 'Hardware & Cables',
    q: "What is SFP+ vs. 10GBASE-T in 10-Gigabit networking?",
    a: "• SFP+ (Small Form-factor Pluggable Plus): Uses optical fiber transceivers or Direct Attach Copper (DAC) cables. Low power consumption (1 Watt) and runs cool; standard for enterprise servers and homelabs.\n• 10GBASE-T: Delivers 10 Gbps over standard RJ45 copper CAT6a cables up to 100 meters. Generates more heat (4–8 Watts per port) but utilizes familiar Ethernet wall jacks."
  },
  {
    id: 103,
    category: 'Hardware & Cables',
    q: "Can USB-to-Ethernet adapters achieve full Gigabit speeds on laptops without built-in LAN ports?",
    a: "• USB 3.0 / USB-C Gigabit Adapters: Yes. USB 3.0 provides 5 Gbps bus bandwidth, easily supporting full 940–950 Mbps gigabit throughput.\n• Older USB 2.0 Adapters (Black ports): No. USB 2.0 is physically limited to 480 Mbps (real-world max ~300 Mbps)."
  },
  {
    id: 104,
    category: 'Hardware & Cables',
    q: "What is Power over Ethernet (PoE) and how does it simplify smart home setups?",
    a: "Power over Ethernet (PoE - IEEE 802.3af/at/bt) sends both high-speed data and DC electrical power over a single CAT6 Ethernet cable up to 100 meters.\n\nCommon Uses: Powers ceiling-mounted Wi-Fi Access Points, outdoor 4K security cameras, and VoIP desk phones without needing an electrical outlet nearby."
  },
  {
    id: 105,
    category: 'Hardware & Cables',
    q: "Why is the maximum certified length of copper Ethernet cables exactly 100 meters (328 ft)?",
    a: "The 100-meter limit is established by IEEE 802.3 standards due to physical electrical constraints:\n\n1. Signal Attenuation: Electrical resistance in 24 AWG copper wire causes voltage drop and high-frequency signal loss beyond 100 meters.\n2. Timing & Collision Detection: CSMA/CD timing standards require packet signals to travel and receive acknowledgments within strict microsecond windows.\n3. Beyond 100 meters, fiber optic cabling or active network repeaters must be used."
  },

  // =========================================================================
  // 9. DNS, VPNS, SECURITY & PROTOCOLS (Q106 - Q115)
  // =========================================================================
  {
    id: 106,
    category: 'DNS, VPN & Security',
    q: "What is DNS (Domain Name System) and how does changing it speed up web browsing?",
    a: "DNS is the digital phonebook of the internet. It translates human-friendly domain names (e.g. google.com) into machine-routable numeric IP addresses (142.250.190.46).\n\nHow Fast DNS Improves Web Browsing:\n• Before your browser can load a single image or script from a web page, it must resolve the domain IP.\n• ISP Default DNS servers are often slow and overloaded, taking 60–120 ms per lookup.\n• Switching to Cloudflare (1.1.1.1) or Google (8.8.8.8) cuts DNS resolution times to 5–15 ms, making websites start loading noticeably faster."
  },
  {
    id: 107,
    category: 'DNS, VPN & Security',
    q: "Which public DNS providers are the fastest, most reliable, and most secure globally?",
    a: "Top Free Public DNS Resolvers:\n\n• Cloudflare DNS (1.1.1.1 / 1.0.0.1):\n  - Fastest global resolution speeds, strict privacy policy (never logs IP addresses).\n\n• Google Public DNS (8.8.8.8 / 8.8.4.4):\n  - Massive global Anycast infrastructure, highly reliable and resilient.\n\n• Quad9 DNS (9.9.9.9 / 149.112.112.112):\n  - Automatically blocks malicious phishing, spyware, and malware domains in real time.\n\n• AdGuard DNS (94.140.14.14 / 94.140.15.15):\n  - Automatically blocks ads and tracking scripts at the network level across all home devices."
  },
  {
    id: 108,
    category: 'DNS, VPN & Security',
    q: "What are DNS over HTTPS (DoH) and DNS over TLS (DoT), and why are they vital for privacy?",
    a: "Traditional DNS queries are transmitted in unencrypted plaintext on port 53. Anyone on your local Wi-Fi, your ISP, or government snooping tools can see every domain you visit.\n\n• DoH (DNS over HTTPS - Port 443) & DoT (DNS over TLS - Port 853):\n  - Encrypts your DNS lookup queries inside HTTPS/TLS cryptographic tunnels.\n  - Prevents ISP browsing history logging, eavesdropping, and ISP DNS redirection/censorship."
  },
  {
    id: 109,
    category: 'DNS, VPN & Security',
    q: "Why does connecting to a VPN reduce internet speed test throughput?",
    a: "Connecting to a VPN (Virtual Private Network) introduces three unavoidable performance overheads:\n\n1. Cryptographic Encryption/Decryption: Your CPU must encrypt every outbound packet (AES-256 or ChaCha20) and decrypt every inbound packet.\n2. Server Routing Detour: Your traffic travels to the VPN server first before heading to the destination, adding physical distance and latency.\n3. Shared Server Bandwidth: Commercial VPN servers share bandwidth among hundreds of simultaneous connected users.\n• High-quality WireGuard VPNs minimize throughput loss to just 10–15%."
  },
  {
    id: 110,
    category: 'DNS, VPN & Security',
    q: "What is WireGuard protocol and why is it faster than legacy OpenVPN and IKEv2?",
    a: "• OpenVPN: Built on ~100,000 lines of legacy code with OpenSSL. Heavy CPU usage, higher latency, and slow reconnect times.\n• WireGuard: Next-generation VPN protocol built on just ~4,000 lines of modern, audited C code using state-of-the-art cryptography (ChaCha20, Poly1305, Curve25519).\n• Delivers 3x to 5x higher throughput, near-instant connection handshakes, and significantly lower smartphone battery drain."
  },
  {
    id: 111,
    category: 'DNS, VPN & Security',
    q: "Can third-party antivirus web shields and firewalls bottleneck gigabit speed tests?",
    a: "Yes. Third-party antivirus suites (Norton, McAfee, Avast, Bitdefender) include 'Real-Time Web Protection' and 'HTTPS Scanning':\n\n• These modules intercept and inspect every incoming network packet buffer in memory before passing it to your browser.\n• On gigabit connections (1,000+ Mbps), this Deep Packet Inspection (DPI) bottlenecks CPU throughput, reducing speed test results by 20–40%."
  },
  {
    id: 112,
    category: 'DNS, VPN & Security',
    q: "How does NETSPEEDPRO protect user privacy and handle benchmark data?",
    a: "NETSPEEDPRO is built with a Privacy-First architecture:\n\n• All speed, latency, and jitter calculations are executed client-side in your local browser memory.\n• Your IP address is never sold, tracked, or monetized.\n• Test history is saved locally in your browser's localStorage, remaining 100% on your device under your complete control."
  },
  {
    id: 113,
    category: 'DNS, VPN & Security',
    q: "What is MTU (Maximum Transmission Unit) and how does an incorrect setting cause packet fragmentation?",
    a: "MTU (Maximum Transmission Unit) is the largest size (in bytes) of a single data packet that can be transmitted over a network without fragmentation:\n\n• Standard Ethernet MTU: 1500 bytes.\n• PPPoE DSL / Fiber MTU: 1492 bytes (8 bytes reserved for PPPoE header).\n• What Happens If MTU Is Too High: Packets larger than the physical link capacity are fragmented into multiple pieces, increasing packet loss, retransmissions, and latency."
  },
  {
    id: 114,
    category: 'DNS, VPN & Security',
    q: "What is Google BBR (Bottleneck Bandwidth and RTT) Congestion Control?",
    a: "BBR is a modern TCP congestion control algorithm developed by Google:\n\n• Traditional TCP algorithms (like CUBIC) treat packet loss as a sign of congestion and dramatically slash speed in half.\n• BBR continuously measures true bottleneck bandwidth and minimum round-trip time, adjusting throughput smoothly without crashing speeds.\n• BBR powers Google services, YouTube, and modern high-speed edge networks, delivering up to 14x faster throughput on lossy Wi-Fi and mobile links."
  },
  {
    id: 115,
    category: 'DNS, VPN & Security',
    q: "How does NETSPEEDPRO accurately identify your ISP, ASN, and optimal server node?",
    a: "When you visit NETSPEEDPRO, the client makes lightweight asynchronous queries to globally distributed edge nodes:\n\n1. Autonomous System Number (ASN) Lookup: Maps your public IP to your Internet Service Provider's network registry (e.g. AS55836 for BSNL, AS55836 for Jio, AS45609 for Airtel).\n2. Geolocation Triangulation: Determines city, region, and approximate latitude/longitude.\n3. Latency Ping Probing: Pings regional candidate nodes to automatically route your test to the lowest-latency edge server."
  }
];
