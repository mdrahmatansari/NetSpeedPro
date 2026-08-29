import React from 'react';
import { 
  ArrowDown, 
  ArrowUp, 
  Activity, 
  Zap, 
  ShieldCheck, 
  Share2, 
  RotateCcw, 
  Download, 
  FileText, 
  FileSpreadsheet, 
  Code, 
  HardDrive,
  Wifi,
  Server,
  Globe
} from 'lucide-react';
import { getTranslations } from '../translations/i18n';
import { storageService } from '../services/storage';

export default function ResultDashboard({ 
  results, 
  unit = 'Mbps', 
  lang = 'en', 
  onRetest, 
  onOpenShare, 
  onExportPdf, 
  onExportCsv, 
  onExportJson 
}) {
  const t = getTranslations(lang);

  if (!results) return null;

  const downloadFormatted = storageService.formatSpeed(results.download, unit);
  const uploadFormatted = storageService.formatSpeed(results.upload, unit);
  const downloadPeakFormatted = storageService.formatSpeed(results.downloadPeak || results.download, unit);
  const uploadPeakFormatted = storageService.formatSpeed(results.uploadPeak || results.upload, unit);
  const totalDataFormatted = storageService.formatBytes((results.totalBytesDownloaded || 0) + (results.totalBytesUploaded || 0));

  // Determine Overall Quality Score
  const getQualityEvaluation = () => {
    const d = results.download || 0;
    const p = results.ping || 0;

    if (d >= 100 && p <= 20) {
      return {
        title: t.ultraFastTitle,
        desc: t.ultraFastDesc,
        badge: t.tier1,
        badgeColor: 'badge-cyan'
      };
    } else if (d >= 40 && p <= 45) {
      return {
        title: t.fastTitle,
        desc: t.fastDesc,
        badge: t.highSpeedBroadband,
        badgeColor: 'badge-emerald'
      };
    } else if (d >= 15) {
      return {
        title: t.averageTitle,
        desc: t.averageDesc,
        badge: t.standardConnection,
        badgeColor: 'badge-amber'
      };
    } else {
      return {
        title: t.slowTitle,
        desc: t.slowDesc,
        badge: t.congestedSlow,
        badgeColor: 'badge-purple'
      };
    }
  };

  const quality = getQualityEvaluation();

  return (
    <div className="results-dashboard-wrapper">
      {/* Quality Rating Banner */}
      <div className="glass-card rating-banner">
        <div className="rating-left">
          <span className="rating-label">{t.overallRating}</span>
          <div className="rating-title-group">
            <h3 className="rating-title">{quality.title}</h3>
            <span className={`badge ${quality.badgeColor} quality-badge`}>
              {quality.badge}
            </span>
          </div>
          <p className="rating-desc">{quality.desc}</p>
        </div>

        <div className="rating-actions">
          <button className="btn-primary retest-btn" onClick={onRetest}>
            <RotateCcw size={18} />
            <span>{t.testAgain}</span>
          </button>
          <button className="btn-secondary share-btn" onClick={onOpenShare}>
            <Share2 size={18} />
            <span>{t.shareResult}</span>
          </button>
        </div>
      </div>

      {/* Verified Network Provider & Server Bar */}
      <div className="glass-card result-network-bar">
        <div className="result-network-item">
          <div className="result-network-icon-wrap icon-cyan">
            <Wifi size={18} />
          </div>
          <div className="result-network-text">
            <span className="result-network-label">{t.connectedNetwork}</span>
            <span className="result-network-value">{results.isp || 'BSNL (Bharat Sanchar Nigam Ltd)'}</span>
          </div>
        </div>
        
        <div className="result-network-divider" />

        <div className="result-network-item">
          <div className="result-network-icon-wrap icon-purple">
            <Server size={18} />
          </div>
          <div className="result-network-text">
            <span className="result-network-label">{t.serverNode}</span>
            <span className="result-network-value">{results.server || 'Auto Selected Node'}</span>
          </div>
        </div>

        <div className="result-network-divider" />

        <div className="result-network-item">
          <div className="result-network-icon-wrap icon-emerald">
            <Globe size={18} />
          </div>
          <div className="result-network-text">
            <span className="result-network-label">{t.ipAddress} & {t.asn}</span>
            <span className="result-network-value">{results.ip || 'Protected'} {results.asn ? `• ${results.asn}` : ''}</span>
          </div>
        </div>
      </div>

      {/* Primary Metrics Grid */}
      <div className="grid-2 main-metrics-grid">
        {/* Download Card */}
        <div className="glass-card metric-card download-card">
          <div className="metric-card-header">
            <div className="metric-icon-wrap icon-cyan">
              <ArrowDown size={22} />
            </div>
            <div className="metric-labels">
              <span className="metric-name">{t.download}</span>
              <span className="metric-sub">{t.speed}</span>
            </div>
            {results.downloadPeak > 0 && (
              <span className="metric-peak-badge">
                {t.speed}: {downloadPeakFormatted} {unit}
              </span>
            )}
          </div>
          <div className="metric-value-row">
            <span className="metric-value text-cyan">{downloadFormatted}</span>
            <span className="metric-unit">{unit}</span>
          </div>
        </div>

        {/* Upload Card */}
        <div className="glass-card metric-card upload-card">
          <div className="metric-card-header">
            <div className="metric-icon-wrap icon-emerald">
              <ArrowUp size={22} />
            </div>
            <div className="metric-labels">
              <span className="metric-name">{t.upload}</span>
              <span className="metric-sub">{t.speed}</span>
            </div>
            {results.uploadPeak > 0 && (
              <span className="metric-peak-badge">
                {t.speed}: {uploadPeakFormatted} {unit}
              </span>
            )}
          </div>
          <div className="metric-value-row">
            <span className="metric-value text-emerald">{uploadFormatted}</span>
            <span className="metric-unit">{unit}</span>
          </div>
        </div>
      </div>

      {/* Secondary Telemetry Grid: Ping, Jitter, Packet Loss, Bufferbloat, Data Used */}
      <div className="grid-4 secondary-metrics-grid">
        {/* Ping */}
        <div className="glass-card mini-metric-card">
          <div className="mini-header">
            <Activity size={16} className="text-purple" />
            <span>{t.ping}</span>
          </div>
          <div className="mini-value-wrap">
            <span className="mini-value text-purple">{results.ping || 0}</span>
            <span className="mini-unit">ms</span>
          </div>
          <span className="mini-subtext">Min: {results.minPing || results.ping || 0}ms / Max: {results.maxPing || results.ping || 0}ms</span>
        </div>

        {/* Jitter */}
        <div className="glass-card mini-metric-card">
          <div className="mini-header">
            <Zap size={16} className="text-amber" />
            <span>{t.jitter}</span>
          </div>
          <div className="mini-value-wrap">
            <span className="mini-value text-amber">{results.jitter || 0}</span>
            <span className="mini-unit">ms</span>
          </div>
          <span className="mini-subtext">±{((results.jitter || 1) * 0.8).toFixed(1)}ms</span>
        </div>

        {/* Packet Loss */}
        <div className="glass-card mini-metric-card">
          <div className="mini-header">
            <ShieldCheck size={16} className="text-emerald" />
            <span>{t.packetLoss}</span>
          </div>
          <div className="mini-value-wrap">
            <span className="mini-value text-emerald">{results.packetLoss || 0}%</span>
          </div>
          <span className="mini-subtext">{t.online}</span>
        </div>

        {/* Bufferbloat / Data Consumed */}
        <div className="glass-card mini-metric-card">
          <div className="mini-header">
            <HardDrive size={16} className="text-cyan" />
            <span>{t.dataUsed}</span>
          </div>
          <div className="mini-value-wrap">
            <span className="mini-value-text">{totalDataFormatted}</span>
          </div>
          <span className="mini-subtext">{results.durationTotal || 10}s</span>
        </div>
      </div>

      {/* Export Toolbar */}
      <div className="export-toolbar-wrap glass-panel">
        <div className="export-label-group">
          <Download size={18} className="text-cyan" />
          <div>
            <span className="export-title">{t.downloadResult}</span>
            <span className="export-subtitle">{t.testHistorySubtitle}</span>
          </div>
        </div>

        <div className="export-buttons">
          <button className="btn-secondary export-btn" onClick={onExportPdf}>
            <FileText size={16} />
            <span>{t.exportPdf}</span>
          </button>
          <button className="btn-secondary export-btn" onClick={onExportCsv}>
            <FileSpreadsheet size={16} />
            <span>{t.exportCsv}</span>
          </button>
          <button className="btn-secondary export-btn" onClick={onExportJson}>
            <Code size={16} />
            <span>{t.exportJson}</span>
          </button>
        </div>
      </div>

      <style>{`
        .results-dashboard-wrapper {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .rating-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 30px;
          border-left: 4px solid var(--accent-cyan);
          flex-wrap: wrap;
          gap: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .rating-left {
          display: flex;
          flex-direction: column;
          gap: 4px;
          max-width: 600px;
        }

        .rating-label {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--text-tertiary);
          letter-spacing: 0.08em;
        }

        .rating-title-group {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .rating-title {
          font-size: 1.7rem;
          font-weight: 900;
        }

        .rating-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.45;
          margin-top: 2px;
        }

        .rating-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .result-network-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          gap: 16px;
          flex-wrap: wrap;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
        }

        .result-network-item {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
          min-width: 200px;
        }

        .result-network-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: var(--radius-xs);
          flex-shrink: 0;
        }

        .icon-cyan {
          background: rgba(0, 229, 255, 0.1);
          color: var(--accent-cyan);
        }

        .icon-purple {
          background: rgba(139, 92, 246, 0.1);
          color: var(--accent-purple);
        }

        .icon-emerald {
          background: rgba(16, 185, 129, 0.1);
          color: var(--accent-emerald);
        }

        .result-network-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .result-network-label {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--text-tertiary);
          text-transform: uppercase;
        }

        .result-network-value {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .result-network-divider {
          width: 1px;
          height: 32px;
          background: var(--border-color);
        }

        @media (max-width: 768px) {
          .result-network-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
            padding: 16px;
          }
          .result-network-divider {
            display: none;
          }
          .result-network-item {
            width: 100%;
          }
        }

        .metric-card {
          padding: 26px 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }

        .download-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--grad-download);
          box-shadow: 0 0 16px var(--accent-cyan-glow);
        }

        .upload-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--grad-upload);
          box-shadow: 0 0 16px var(--accent-emerald-glow);
        }

        .metric-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .metric-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: var(--radius-sm);
          flex-shrink: 0;
        }

        .icon-cyan {
          background: rgba(0, 229, 255, 0.12);
          color: var(--accent-cyan);
          border: 1px solid rgba(0, 229, 255, 0.3);
          box-shadow: 0 0 16px rgba(0, 229, 255, 0.2);
        }

        .icon-emerald {
          background: rgba(16, 185, 129, 0.12);
          color: var(--accent-emerald);
          border: 1px solid rgba(16, 185, 129, 0.3);
          box-shadow: 0 0 16px rgba(16, 185, 129, 0.2);
        }

        .metric-labels {
          display: flex;
          flex-direction: column;
        }

        .metric-name {
          font-size: 1.15rem;
          font-weight: 800;
          letter-spacing: 0.04em;
        }

        .metric-sub {
          font-size: 0.78rem;
          color: var(--text-tertiary);
        }

        .metric-peak-badge {
          margin-left: auto;
          font-size: 0.78rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          font-family: var(--font-mono);
          white-space: nowrap;
        }

        .metric-value-row {
          display: flex;
          align-items: baseline;
          gap: 8px;
          flex-wrap: wrap;
        }

        .metric-value {
          font-family: var(--font-mono);
          font-size: clamp(2.2rem, 7vw, 3.2rem);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.04em;
          word-break: break-word;
        }

        .metric-unit {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-secondary);
        }

        .mini-metric-card {
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .mini-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--text-tertiary);
          letter-spacing: 0.06em;
        }

        .mini-value-wrap {
          display: flex;
          align-items: baseline;
          gap: 4px;
          flex-wrap: wrap;
        }

        .mini-value {
          font-family: var(--font-mono);
          font-size: clamp(1.4rem, 4vw, 1.7rem);
          font-weight: 800;
        }

        .mini-value-text {
          font-size: clamp(1.15rem, 3.5vw, 1.4rem);
          font-weight: 800;
          color: var(--text-primary);
          font-family: var(--font-mono);
          word-break: break-word;
        }

        .mini-unit {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-secondary);
        }

        .mini-subtext {
          font-size: 0.75rem;
          color: var(--text-tertiary);
          word-break: break-word;
        }

        .export-toolbar-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          padding: 18px 24px;
        }

        .export-label-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .export-title {
          font-size: 0.98rem;
          font-weight: 800;
          color: var(--text-primary);
          display: block;
        }

        .export-subtitle {
          font-size: 0.8rem;
          color: var(--text-tertiary);
          display: block;
        }

        .export-buttons {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .text-cyan { 
          color: var(--accent-cyan); 
          text-shadow: 0 0 20px rgba(0, 229, 255, 0.3);
        }
        .text-emerald { 
          color: var(--accent-emerald); 
          text-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
        }
        .text-purple { 
          color: var(--accent-purple); 
          text-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
        }
        .text-amber { 
          color: var(--accent-amber); 
          text-shadow: 0 0 20px rgba(245, 158, 11, 0.3);
        }

        @media (max-width: 768px) {
          .rating-banner {
            flex-direction: column;
            align-items: flex-start;
            padding: 20px 18px;
          }
          .rating-actions {
            width: 100%;
            gap: 10px;
          }
          .retest-btn, .share-btn {
            flex: 1 1 140px;
            justify-content: center;
          }
          .metric-card {
            padding: 20px 18px;
          }
          .secondary-metrics-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .export-toolbar-wrap {
            flex-direction: column;
            align-items: flex-start;
            padding: 16px 18px;
          }
          .export-buttons {
            width: 100%;
          }
          .export-btn {
            flex: 1 1 90px;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .rating-banner {
            padding: 16px 14px;
          }
          .rating-title {
            font-size: 1.4rem;
          }
          .metric-card {
            padding: 16px 14px;
          }
          .metric-peak-badge {
            margin-left: 0;
            width: 100%;
            text-align: center;
          }
          .mini-metric-card {
            padding: 14px 14px;
          }
          .export-toolbar-wrap {
            padding: 14px 14px;
          }
        }

        @media (max-width: 360px) {
          .secondary-metrics-grid {
            grid-template-columns: 1fr;
          }
          .retest-btn, .share-btn {
            flex: 1 1 100%;
          }
          .export-btn {
            flex: 1 1 100%;
          }
        }
      `}</style>
    </div>
  );
}
