import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';
import { translations } from '../translations/i18n';

export default function FAQ({ lang = 'en' }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const t = translations[lang] || translations.en;

  const faqItems = [
    {
      q: "What is internet speed?",
      a: "Internet speed refers to the rate at which data travels between your connected device and the wider internet. It is commonly quantified in Megabits per second (Mbps) or Gigabits per second (Gbps), consisting of both download and upload bandwidth capacities along with latency responsiveness."
    },
    {
      q: "What is download speed?",
      a: "Download speed measures how quickly your device can pull data from remote servers. High download speed enables seamless video streaming (YouTube, Netflix 4K), rapid file downloads, instantaneous web page rendering, and smooth software updates."
    },
    {
      q: "What is upload speed?",
      a: "Upload speed measures how fast your device can send data across the web to other computers or cloud servers. Crucial for video conferencing (Zoom, Google Meet), livestreaming on Twitch, sending large email attachments, online cloud backups, and uploading YouTube videos."
    },
    {
      q: "What is ping (latency)?",
      a: "Ping (measured in milliseconds, ms) is the round-trip reaction time of your connection—how long it takes for a data packet to travel from your device to a server and return back. Lower ping is essential for smooth real-time gaming, VoIP voice calls, and interactive online experiences."
    },
    {
      q: "What is jitter?",
      a: "Jitter measures the statistical variance or fluctuation in latency over consecutive packet transmissions. High jitter causes stutter, micro-freezes, and choppy audio during live gaming and video calls, even if overall bandwidth is high. A jitter score under 5–10 ms indicates excellent stability."
    },
    {
      q: "What is packet loss?",
      a: "Packet loss occurs when units of data traveling across a network fail to reach their destination due to network congestion, faulty cabling, or weak wireless signals. 0% packet loss is the ideal target for broadband connections."
    },
    {
      q: "Why does my internet speed change throughout the day?",
      a: "Speeds fluctuate due to peak-hour neighborhood congestion, local Wi-Fi channel interference, router thermal throttling, background app downloads, operating system updates, or ISP bandwidth shaping during high-traffic windows."
    },
    {
      q: "Why is Wi-Fi slower than a direct Ethernet cable?",
      a: "Wi-Fi signals are subject to physical obstacles (walls, doors, metal appliances), distance degradation, radio frequency interference from neighboring routers, and channel congestion. Direct Ethernet cables offer dedicated, shielded full-duplex transmission without wireless interference."
    },
    {
      q: "How accurate is a browser-based speed test?",
      a: "NETSPEEDPRO measures real network transfers by saturating multiple parallel HTTP/HTTPS streams with binary chunks and timing them using high-precision performance timers. While browser security sandboxes add minimal overhead compared to low-level native sockets, browser tests reflect real-world web performance with 98%+ accuracy."
    },
    {
      q: "Does running a speed test consume my data plan?",
      a: "Yes. In order to accurately measure high-throughput bandwidth, the test transfers real data streams between your browser and test servers. A standard gigabit speed test can transfer between 40MB and 200MB+ of data depending on link speed."
    },
    {
      q: "How can I improve my internet speed?",
      a: "1) Connect via a CAT6/CAT7 Ethernet cable. 2) Switch Wi-Fi to 5GHz or 6GHz bands instead of 2.4GHz. 3) Restart your modem/router monthly. 4) Close background torrents or cloud sync software. 5) Upgrade router firmware or use a mesh Wi-Fi system."
    },
    {
      q: "What is a good ping for competitive online gaming?",
      a: "• < 20 ms: Excellent esports tier (instantaneous response)\n• 20–45 ms: Very good (smooth gameplay)\n• 45–80 ms: Average (playable for most titles)\n• > 100 ms: Noticeable lag and delay in competitive games."
    }
  ];

  const filteredFaqs = faqItems.filter(
    item => item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
            item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="glass-card faq-card">
      <div className="faq-header">
        <div className="faq-title-wrap">
          <HelpCircle className="text-cyan" size={24} />
          <div>
            <h3 className="faq-title">{t.faqTitle}</h3>
            <span className="faq-subtitle">Everything you need to know about internet benchmarks</span>
          </div>
        </div>

        <div className="faq-search-wrap">
          <Search size={14} className="faq-search-icon" />
          <input 
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="faq-search-input"
          />
        </div>
      </div>

      <div className="faq-accordion-list">
        {filteredFaqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
              <button 
                className="faq-question-btn" 
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                aria-expanded={isOpen}
              >
                <span className="faq-q-number">0{idx + 1}</span>
                <span className="faq-q-text">{item.q}</span>
                <ChevronDown className={`faq-chevron ${isOpen ? 'rotate' : ''}`} size={18} />
              </button>

              {isOpen && (
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        .faq-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .faq-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 18px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .faq-title-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .faq-title {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .faq-subtitle {
          font-size: 0.82rem;
          color: var(--text-tertiary);
        }

        .faq-search-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }

        .faq-search-icon {
          position: absolute;
          left: 12px;
          color: var(--text-tertiary);
          pointer-events: none;
        }

        .faq-search-input {
          padding: 8px 12px 8px 34px;
          font-size: 0.85rem;
          width: 220px;
        }

        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .faq-item {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          overflow: hidden;
          transition: border-color var(--transition-fast);
        }

        .faq-item.open {
          border-color: var(--accent-cyan);
        }

        .faq-question-btn {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 16px 20px;
          text-align: left;
          gap: 14px;
        }

        .faq-q-number {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-cyan);
        }

        .faq-q-text {
          flex: 1;
          font-size: 0.98rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .faq-chevron {
          color: var(--text-tertiary);
          transition: transform 0.25s ease;
        }

        .faq-chevron.rotate {
          transform: rotate(180deg);
          color: var(--accent-cyan);
        }

        .faq-answer {
          padding: 0 20px 18px 50px;
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
          white-space: pre-line;
          animation: fadeIn 0.2s ease-out;
        }

        @media (max-width: 600px) {
          .faq-search-input {
            width: 100%;
          }
          .faq-answer {
            padding: 0 16px 16px 16px;
          }
        }
      `}</style>
    </div>
  );
}
