import React from 'react';
import { BarChart2, Tv, Gamepad2, Video, CloudUpload, CheckCircle, AlertCircle } from 'lucide-react';
import { translations } from '../translations/i18n';

export default function SpeedComparison({ latestResult, unit = 'Mbps', lang = 'en' }) {
  const t = translations[lang] || translations.en;

  const userDownload = parseFloat(latestResult?.download) || 120;
  const userUpload = parseFloat(latestResult?.upload) || 45;
  const userPing = parseFloat(latestResult?.ping) || 22;

  const globalAvgDownload = 92.5;
  const globalAvgUpload = 41.2;

  // Calculate approximate percentile against global dataset curve
  const calculatePercentile = (speed) => {
    if (speed <= 10) return 15;
    if (speed <= 30) return 40;
    if (speed <= 60) return 60;
    if (speed <= 100) return 75;
    if (speed <= 200) return 88;
    if (speed <= 500) return 96;
    return 99;
  };

  const percentile = calculatePercentile(userDownload);

  const useCases = [
    {
      title: '4K / 8K Ultra HD Video',
      icon: Tv,
      req: '25+ Mbps Download',
      status: userDownload >= 25 ? 'ready' : 'limited',
      desc: userDownload >= 25 ? 'Smooth bufferless 4K HDR playback on multiple screens.' : 'Sufficient for 1080p, may buffer on 4K HDR.'
    },
    {
      title: 'Competitive Esports Gaming',
      icon: Gamepad2,
      req: '< 35ms Latency & Low Jitter',
      status: userPing <= 35 ? 'ready' : 'limited',
      desc: userPing <= 35 ? 'Ultra-low latency for instant hit-registration and responsiveness.' : 'Acceptable for casual gaming; slight lag in competitive FPS.'
    },
    {
      title: 'HD Multi-Party Video Calls',
      icon: Video,
      req: '5+ Mbps Upload & Download',
      status: userUpload >= 5 && userDownload >= 10 ? 'ready' : 'limited',
      desc: 'Crystal-clear 1080p video conferences on Zoom, Teams & Google Meet.'
    },
    {
      title: 'Cloud Backup & File Transfer',
      icon: CloudUpload,
      req: '25+ Mbps Upload',
      status: userUpload >= 25 ? 'ready' : 'limited',
      desc: userUpload >= 25 ? 'Fast uploads of large RAW video files and bulk cloud syncing.' : 'Standard cloud backup speed.'
    }
  ];

  return (
    <div className="glass-card speed-compare-card">
      <div className="compare-header">
        <div className="compare-title-wrap">
          <BarChart2 className="text-cyan" size={24} />
          <div>
            <h3 className="compare-title">{t.compareTitle}</h3>
            <span className="compare-subtitle">Performance benchmarks against global broadband indices</span>
          </div>
        </div>

        <div className="percentile-pill">
          <span className="percentile-number">{percentile}%</span>
          <span className="percentile-text">Faster than {percentile}% of tested networks</span>
        </div>
      </div>

      {/* Comparison Bars */}
      <div className="bars-container">
        {/* Download Comparison */}
        <div className="bar-group">
          <div className="bar-labels">
            <span className="bar-title">Download Throughput Comparison</span>
            <span className="bar-val-user text-cyan">Your Speed: {userDownload.toFixed(1)} {unit}</span>
          </div>
          <div className="bar-track">
            <div 
              className="bar-fill user-dl-fill" 
              style={{ width: `${Math.min(100, Math.max(10, (userDownload / 300) * 100))}%` }}
            >
              <span>{userDownload.toFixed(1)} {unit}</span>
            </div>
            <div 
              className="benchmark-marker" 
              style={{ left: `${Math.min(95, (globalAvgDownload / 300) * 100)}%` }}
              title="Global Average (~92.5 Mbps)"
            >
              <div className="marker-line" />
              <span className="marker-label">Global Avg (92.5)</span>
            </div>
          </div>
        </div>

        {/* Upload Comparison */}
        <div className="bar-group">
          <div className="bar-labels">
            <span className="bar-title">Upload Throughput Comparison</span>
            <span className="bar-val-user text-emerald">Your Speed: {userUpload.toFixed(1)} {unit}</span>
          </div>
          <div className="bar-track">
            <div 
              className="bar-fill user-ul-fill" 
              style={{ width: `${Math.min(100, Math.max(10, (userUpload / 150) * 100))}%` }}
            >
              <span>{userUpload.toFixed(1)} {unit}</span>
            </div>
            <div 
              className="benchmark-marker" 
              style={{ left: `${Math.min(95, (globalAvgUpload / 150) * 100)}%` }}
              title="Global Average (~41.2 Mbps)"
            >
              <div className="marker-line" />
              <span className="marker-label">Global Avg (41.2)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Use-Case Readiness Cards */}
      <div className="use-cases-grid">
        {useCases.map((uc, idx) => {
          const Icon = uc.icon;
          const isReady = uc.status === 'ready';
          return (
            <div key={idx} className="use-case-item">
              <div className="use-case-top">
                <div className={`use-case-icon ${isReady ? 'icon-ready' : 'icon-limited'}`}>
                  <Icon size={18} />
                </div>
                <span className={`badge ${isReady ? 'badge-emerald' : 'badge-amber'}`}>
                  {isReady ? <CheckCircle size={12} /> : <AlertCircle size={12} />}
                  {isReady ? 'Ready' : 'Fair'}
                </span>
              </div>
              <h5 className="use-case-title">{uc.title}</h5>
              <span className="use-case-req">{uc.req}</span>
              <p className="use-case-desc">{uc.desc}</p>
            </div>
          );
        })}
      </div>

      <style>{`
        .speed-compare-card {
          padding: 24px 28px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
        }

        .compare-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 16px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .compare-title-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .compare-title {
          font-size: 1.2rem;
          font-weight: 700;
        }

        .compare-subtitle {
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }

        .percentile-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(0, 240, 255, 0.1);
          border: 1px solid rgba(0, 240, 255, 0.3);
          border-radius: var(--radius-full);
          padding: 8px 16px;
        }

        .percentile-number {
          font-family: var(--font-mono);
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--accent-cyan);
        }

        .percentile-text {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .bars-container {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .bar-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 14px;
        }

        .bar-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          font-weight: 600;
          flex-wrap: wrap;
          gap: 6px;
        }

        .bar-title {
          color: var(--text-secondary);
        }

        .bar-val-user {
          font-family: var(--font-mono);
          font-weight: 700;
        }

        .bar-track {
          position: relative;
          height: 32px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-full);
          border: 1px solid var(--border-color);
          overflow: visible;
          display: flex;
          align-items: center;
          margin-bottom: 16px;
        }

        .bar-fill {
          height: 100%;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          padding: 0 14px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          color: #ffffff;
          transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .user-dl-fill {
          background: var(--grad-download);
          box-shadow: 0 0 16px var(--accent-cyan-glow);
        }

        .user-ul-fill {
          background: var(--grad-upload);
          box-shadow: 0 0 16px var(--accent-emerald-glow);
        }

        .benchmark-marker {
          position: absolute;
          top: -6px;
          bottom: -6px;
          display: flex;
          flex-direction: column;
          align-items: center;
          pointer-events: none;
          z-index: 10;
        }

        .marker-line {
          width: 2px;
          height: 100%;
          background: #ffffff;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
        }

        .marker-label {
          position: absolute;
          bottom: -20px;
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--text-tertiary);
          white-space: nowrap;
        }

        .use-cases-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 12px;
        }

        .use-case-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 16px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
        }

        .use-case-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
        }

        .use-case-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: var(--radius-xs);
        }

        .icon-ready {
          background: rgba(0, 223, 137, 0.12);
          color: var(--accent-emerald);
        }

        .icon-limited {
          background: rgba(245, 158, 11, 0.12);
          color: var(--accent-amber);
        }

        .use-case-title {
          font-size: 0.92rem;
          font-weight: 700;
        }

        .use-case-req {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-tertiary);
        }

        .use-case-desc {
          font-size: 0.78rem;
          color: var(--text-secondary);
          line-height: 1.35;
        }

        @media (max-width: 1024px) {
          .use-cases-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .speed-compare-card {
            padding: 18px 14px;
          }
          .percentile-pill {
            width: 100%;
            justify-content: center;
          }
          .use-cases-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
