# 🚀 NETSPEEDPRO — Professional Network & Internet Speed Test Platform

**NETSPEEDPRO** is a modern, high-precision, production-grade internet speed test application built with a Node.js/Express backend and a responsive React frontend with interactive Canvas visualizations.

---

## ✨ Features

### 1. Real Browser-Based Speed Testing
- **Multi-Stream Download Engine**: Saturates bandwidth using parallel streaming HTTP/HTTPS readers with high-precision `performance.now()` microsecond timing.
- **Binary Upload Engine**: Sends pre-allocated binary buffers with real-time progress events.
- **Multi-Sample Latency & Jitter**: Computes minimum, average, maximum RTT and Mean Absolute Successive Difference (MASD) jitter.
- **Network Stability & Quality Scoring**: Evaluates line consistency, throughput variation (Coefficient of Variation), and packet stability.

### 2. High-End UI & Visualizations
- **Adaptive Canvas Speedometer**: Dynamic non-linear scale (0, 10, 25, 50, 100, 250, 500, 1G, 2G+ Mbps) with smooth lerp damping physics and glowing neon arcs.
- **Live Real-Time Spline Graph**: Interactive HTML5 Canvas chart displaying bandwidth throughput over time with dual-gradient fills.
- **Results Dashboard**: Detailed breakdown of download/upload averages, peaks, latency, jitter, packet loss, bufferbloat, and connection quality ratings.

### 3. Comprehensive Network Telemetry
- **Connection & ISP Card**: Automatic IP address, ASN, ISP name, Geo-location, Browser, OS, and Device detection.
- **Global & Regional Server Selection**: Choose from 17 edge nodes across India, Asia Pacific, Europe, Americas, and Middle East.
- **Network Diagnostics**: One-click health check for gateway connectivity, DNS/HTTP latency, TLS security, and bufferbloat.
- **Speed Benchmarking**: Compares user speeds against global averages with 4K/8K streaming and gaming readiness indicators.

### 4. History, Export & Social Sharing
- **Local Storage Test History**: Persistent browser history with search, filtering, and deletion.
- **Multi-Format Export**: Certified PDF report generation via jsPDF, CSV spreadsheet export, and raw JSON export.
- **Social Sharing**: 1-click sharing to WhatsApp, X (Twitter), Telegram, Facebook, and native Web Share API.

### 5. Settings & Customization
- **Theme Switcher**: Dark mode and Light mode with persistent storage.
- **Configurable Speed Units**: Mbps (Megabits/s), MB/s (Megabytes/s), and Gbps (Gigabits/s).
- **Test Duration Modes**: Quick (~5s), Standard (~10s), Extended (~20s).
- **Multi-Language Support (i18n)**: English, Hindi, Spanish, French, German, and Japanese.
- **Demo / Simulation Mode**: Clear toggle with disclosure banner for offline/testing demonstrations.

---

## 🛠️ Project Structure

```text
network-speed-test/
├── server/
│   ├── routes/
│   │   └── speedtest.js      # Speedtest endpoints (ping, download, upload, ip-info, servers)
│   └── server.js             # Express application & static production server
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation, theme toggle & language dropdown
│   │   ├── Speedometer.jsx   # Animated Canvas Speedometer gauge
│   │   ├── LiveGraph.jsx     # Real-time HTML5 Canvas throughput graph
│   │   ├── ResultDashboard.jsx# Metrics cards, rating banner, export toolbar
│   │   ├── ConnectionInfo.jsx# Client IP, ISP, ASN, OS, browser info
│   │   ├── ServerCard.jsx    # Selected server node
│   │   ├── ServerModal.jsx   # Server selection modal with search & region filters
│   │   ├── NetworkDiagnostics.jsx # Gateway, DNS, jitter diagnostic checks
│   │   ├── SpeedComparison.jsx # Benchmark comparison & readiness cards
│   │   ├── TestHistory.jsx   # Local storage history table with export options
│   │   ├── ShareModal.jsx    # Result card preview & social share buttons
│   │   ├── SettingsModal.jsx # Units, durations, streams, theme settings
│   │   ├── FAQ.jsx           # 12+ interactive accordion questions
│   │   ├── About.jsx         # Technical methodology & architecture
│   │   ├── PrivacyPolicy.jsx # Data privacy & local storage disclosures
│   │   ├── Terms.jsx         # Fair network usage terms
│   │   └── Footer.jsx        # Footer & encryption status
│   ├── services/
│   │   ├── speedTestEngine.js# Core browser speedtest measurement engine
│   │   ├── storage.js        # LocalStorage history & settings manager
│   │   └── exportService.js  # PDF, CSV, and JSON export utilities
│   ├── styles/
│   │   ├── theme.css         # Design tokens & dark/light theme variables
│   │   └── index.css         # Global styling, animations, and resets
│   ├── translations/
│   │   └── i18n.js           # Multi-language dictionary
│   ├── App.jsx               # Main application component
│   └── main.jsx              # React DOM entrypoint
├── public/
│   ├── robots.txt            # SEO crawler configuration
│   └── sitemap.xml           # XML sitemap
├── index.html                # Entry HTML with SEO & OpenGraph tags
├── package.json              # Project dependencies & npm scripts
└── vite.config.js            # Vite bundler & API proxy configuration
```

---

## 🚀 Running Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Build Frontend & Start Fullstack Server
```bash
# Build the production bundle
npm run build

# Start the fullstack Express server (serves frontend + API on port 3001)
npm start
```
Open **`http://localhost:3001`** in your browser.

### 3. Development Mode
To run Vite with hot-module reloading:
```bash
# Terminal 1: Backend Server
node server/server.js

# Terminal 2: Vite Dev Server
npm run dev
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/speedtest/ping` | Latency & jitter probe (no-cache headers) |
| `GET` | `/api/speedtest/download` | High-throughput binary streaming for download testing |
| `POST` | `/api/speedtest/upload` | Stream receiver for upload throughput testing |
| `GET` | `/api/speedtest/ip-info` | Client IP, ISP, ASN, and geo-location metadata |
| `GET` | `/api/speedtest/servers` | Server node registry with location coordinates |
| `GET` | `/api/speedtest/diagnostics` | Server health and connection parameters |

---

## 📄 License
© 2026 NETSPEEDPRO Technologies. All rights reserved.
