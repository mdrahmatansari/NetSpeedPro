import React from 'react';
import { 
  Globe, 
  Wifi, 
  Monitor, 
  Cpu, 
  MapPin, 
  Clock, 
  Info, 
  Layers,
  Crosshair,
  RefreshCw,
  CheckCircle2
} from 'lucide-react';
import { translations } from '../translations/i18n';

export default function ConnectionInfo({ 
  ipInfo, 
  lang = 'en', 
  onDetectGps, 
  onRefresh, 
  isLocating = false 
}) {
  const t = translations[lang] || translations.en;

  // Browser & Device detection via UserAgent
  const getClientEnvironment = () => {
    const ua = navigator.userAgent;
    let browser = 'Unknown Browser';
    let os = 'Unknown OS';
    let device = 'Desktop Device';

    // Browser
    if (ua.includes('Firefox')) browser = 'Mozilla Firefox';
    else if (ua.includes('Edg/')) browser = 'Microsoft Edge';
    else if (ua.includes('Chrome/')) browser = 'Google Chrome';
    else if (ua.includes('Safari/')) browser = 'Apple Safari';
    else if (ua.includes('Opera') || ua.includes('OPR')) browser = 'Opera Browser';

    // OS
    if (ua.includes('Win')) os = 'Microsoft Windows';
    else if (ua.includes('Mac')) os = 'macOS (Apple)';
    else if (ua.includes('Linux')) os = 'Linux';
    else if (ua.includes('Android')) os = 'Android OS';
    else if (ua.includes('iPhone') || ua.includes('iPad')) os = 'iOS (Apple)';

    // Device
    if (/Mobile|Android|iP(hone|od)/i.test(ua)) device = 'Smartphone / Mobile';
    else if (/Tablet|iPad/i.test(ua)) device = 'Tablet Device';

    return { browser, os, device };
  };

  const clientEnv = getClientEnvironment();

  // Format accurate location display
  const getLocationDisplay = () => {
    if (!ipInfo) return 'Detecting Real Location...';
    const city = ipInfo.city || '';
    const region = ipInfo.region || '';
    const country = ipInfo.country || 'India';
    
    if (city && region && city !== region) {
      return `${city}, ${region}, ${country}`;
    }
    if (city) {
      return `${city}, ${country}`;
    }
    return country;
  };

  const details = [
    {
      icon: Globe,
      label: t.ipAddress,
      value: ipInfo?.ip || 'Detecting Real IP...',
      sub: `${ipInfo?.version || 'IPv4'}${ipInfo?.postal ? ` • PIN ${ipInfo.postal}` : ''}`
    },
    {
      icon: Wifi,
      label: t.isp,
      value: ipInfo?.isp || 'Broadband ISP',
      sub: ipInfo?.asn || 'AS-AUTO'
    },
    {
      icon: MapPin,
      label: t.location,
      value: getLocationDisplay(),
      sub: `${ipInfo?.countryFlag || '🇮🇳'} ${ipInfo?.isGpsPrecise ? 'Exact GPS Verified' : (ipInfo?.region ? `${ipInfo.region} • Live Network Geo` : 'Live Network Geo')}`,
      highlight: true
    },
    {
      icon: Clock,
      label: 'Time Zone',
      value: ipInfo?.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
      sub: 'Local System Clock'
    },
    {
      icon: Monitor,
      label: t.browser,
      value: clientEnv.browser,
      sub: 'HTML5 Modern Client'
    },
    {
      icon: Cpu,
      label: t.os,
      value: clientEnv.os,
      sub: clientEnv.device
    }
  ];

  return (
    <div className="glass-card connection-info-card">
      <div className="connection-header">
        <div className="connection-title-wrap">
          <Layers className="text-cyan" size={20} />
          <div>
            <h3 className="connection-title">{t.connectionInfo}</h3>
            <span className="connection-subtitle">Live real-time client telemetry</span>
          </div>
        </div>

        <div className="connection-header-actions">
          {onDetectGps && (
            <button 
              className={`btn-secondary gps-detect-btn ${ipInfo?.isGpsPrecise ? 'gps-active' : ''}`}
              onClick={onDetectGps}
              disabled={isLocating}
              title="Detect Exact GPS Coordinates"
            >
              <Crosshair size={13} className={isLocating ? 'spin' : ''} />
              <span>{ipInfo?.isGpsPrecise ? 'GPS Active' : 'Exact GPS'}</span>
            </button>
          )}

          {onRefresh && (
            <button 
              className="btn-icon refresh-geo-btn"
              onClick={onRefresh}
              disabled={isLocating}
              title="Refresh Real Location & IP"
            >
              <RefreshCw size={13} className={isLocating ? 'spin' : ''} />
            </button>
          )}
        </div>
      </div>

      <div className="connection-grid">
        {details.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className={`connection-item ${item.highlight ? 'item-highlight' : ''}`}>
              <div className="item-icon-wrap">
                <Icon size={18} />
              </div>
              <div className="item-content">
                <span className="item-label">{item.label}</span>
                <span className="item-value" title={item.value}>{item.value}</span>
                <span className="item-sub">{item.sub}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="connection-note">
        <Info size={14} className="text-cyan" />
        <span>
          Real-time network coordinates and ISP Autonomous System routing detected directly from your live connection.
        </span>
      </div>

      <style>{`
        .connection-info-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .connection-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 16px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .connection-title-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .connection-header-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .gps-detect-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          font-size: 0.78rem;
          font-weight: 700;
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
        }

        .gps-active {
          background: rgba(16, 185, 129, 0.15);
          border-color: var(--accent-emerald);
          color: var(--accent-emerald);
        }

        .refresh-geo-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }

        .spin {
          animation: spin 1s infinite linear;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .connection-title {
          font-size: 1.15rem;
          font-weight: 700;
        }

        .connection-subtitle {
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }

        .connection-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .connection-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 14px 16px;
          transition: border-color var(--transition-fast);
        }

        .connection-item.item-highlight {
          border-color: rgba(0, 229, 255, 0.35);
          background: linear-gradient(135deg, rgba(0, 229, 255, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);
        }

        .connection-item:hover {
          border-color: var(--border-color-hover);
        }

        .item-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: var(--radius-xs);
          background: rgba(0, 240, 255, 0.08);
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .item-content {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .item-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .item-value {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          word-break: break-word;
        }

        .item-sub {
          font-size: 0.76rem;
          color: var(--text-secondary);
          word-break: break-word;
        }

        .connection-note {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 10px 14px;
          background: rgba(0, 240, 255, 0.04);
          border-radius: var(--radius-xs);
          border: 1px solid rgba(0, 240, 255, 0.15);
          font-size: 0.78rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        @media (max-width: 900px) {
          .connection-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .connection-info-card {
            padding: 18px 14px;
          }
          .connection-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .connection-item {
            padding: 12px 14px;
          }
        }
      `}</style>
    </div>
  );
}
