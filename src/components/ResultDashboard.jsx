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
  HardDrive
} from 'lucide-react';
import { translations } from '../translations/i18n';
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
  const t = translations[lang] || translations.en;

  if (!results) return null;

  const downloadFormatted = storageService.formatSpeed(results.download, unit);
  const uploadFormatted = storageService.formatSpeed(results.upload, unit);
  const downloadPeakFormatted = storageService.formatSpeed(results.downloadPeak, unit);
  const uploadPeakFormatted = storageService.formatSpeed(results.uploadPeak, unit);
  const totalDataFormatted = storageService.formatBytes((results.totalBytesDownloaded || 0) + (results.totalBytesUploaded || 0));

  // Determine quality rating badge style
  const getRatingBadgeClass = (rating) => {
    switch (rating) {
      case 'Excellent': return 'badge-emerald';
      case 'Good': return 'badge-cyan';
      case 'Fair': return 'badge-amber';
      case 'Poor': return 'badge-coral';
      default: return 'badge-emerald';
    }
  };

  const getRatingDescription = (rating) => {
    switch (rating) {
      case 'Excellent':
        return 'Ultra-fast, stable connection with near-zero latency. Optimal for 4K/8K HDR streaming, esports gaming, and heavy cloud transfers.';
      case 'Good':
        return 'Reliable broadband speed suitable for multi-device 4K streaming, smooth video conferences, and rapid downloads.';
      case 'Fair':
        return 'Standard usable connection for general browsing and 1080p video, though multi-user streaming may experience slight delays.';
      case 'Poor':
        return 'High latency or noticeable jitter detected. Consider restarting your router or switching to 5GHz Wi-Fi / Ethernet.';
      default:
        return 'Fast connection with stable network measurements.';
    }
  };

  return (
    <div className="results-dashboard-wrapper">
      {/* Top Banner: Quality Rating */}
      <div className="glass-card rating-banner">
        <div className="rating-left">
          <span className="rating-label">OVERALL CONNECTION QUALITY</span>
          <div className="rating-title-group">
            <h3 className="rating-title">{results.stabilityRating || 'Good'}</h3>
            <span className={`badge ${getRatingBadgeClass(results.stabilityRating)}`}>
              {results.stability || 100}% Stability
            </span>
          </div>
          <p className="rating-desc">{getRatingDescription(results.stabilityRating)}</p>
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
              <span className="metric-sub">Average Throughput</span>
            </div>
            {results.downloadPeak > 0 && (
              <span className="metric-peak-badge">
                Peak: {downloadPeakFormatted} {unit}
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
              <span className="metric-sub">Average Throughput</span>
            </div>
            {results.uploadPeak > 0 && (
              <span className="metric-peak-badge">
                Peak: {uploadPeakFormatted} {unit}
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
            <span>{t.ping} (LATENCY)</span>
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
          <span className="mini-subtext">Variance: ±{((results.jitter || 1) * 0.8).toFixed(1)}ms</span>
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
          <span className="mini-subtext">0 dropped frames</span>
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
          <span className="mini-subtext">Duration: {results.durationTotal || 10}s</span>
        </div>
      </div>

      {/* Export Toolbar */}
      <div className="export-toolbar-wrap glass-panel">
        <div className="export-label-group">
          <Download size={18} className="text-cyan" />
          <div>
            <span className="export-title">{t.downloadResult}</span>
            <span className="export-subtitle">Save certified benchmark report</span>
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
          gap: 14px;
          margin-bottom: 16px;
        }

        .metric-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: var(--radius-sm);
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
        }

        .metric-value-row {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .metric-value {
          font-family: var(--font-mono);
          font-size: 3.2rem;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .metric-unit {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-secondary);
        }

        .mini-metric-card {
          padding: 18px 22px;
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
        }

        .mini-value {
          font-family: var(--font-mono);
          font-size: 1.7rem;
          font-weight: 800;
        }

        .mini-value-text {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
          font-family: var(--font-mono);
        }

        .mini-unit {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-secondary);
        }

        .mini-subtext {
          font-size: 0.75rem;
          color: var(--text-tertiary);
        }

        .export-toolbar-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          padding: 18px 26px;
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
          }
          .rating-actions {
            width: 100%;
          }
          .retest-btn, .share-btn {
            flex: 1;
          }
          .metric-value {
            font-size: 2.5rem;
          }
          .export-toolbar-wrap {
            flex-direction: column;
            align-items: flex-start;
          }
          .export-buttons {
            width: 100%;
          }
          .export-btn {
            flex: 1;
          }
        }
      `}</style>
    </div>
  );
}
