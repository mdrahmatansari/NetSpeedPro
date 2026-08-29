import React, { useState } from 'react';
import { 
  History, 
  Trash2, 
  FileSpreadsheet, 
  Code, 
  FileText, 
  Eye, 
  ArrowDown, 
  ArrowUp, 
  Calendar,
  Search,
  PlusCircle,
  CheckCircle2
} from 'lucide-react';
import { translations } from '../translations/i18n';
import { storageService } from '../services/storage';

export default function TestHistory({ 
  history = [], 
  onDelete, 
  onClear, 
  onExportCsv, 
  onExportJson, 
  onExportPdf, 
  onViewDetails, 
  unit = 'Mbps', 
  lang = 'en' 
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(5);
  const t = translations[lang] || translations.en;

  const filteredHistory = history.filter((item) => {
    const term = searchTerm.toLowerCase();
    return (
      item.formattedDate?.toLowerCase().includes(term) ||
      item.isp?.toLowerCase().includes(term) ||
      item.server?.toLowerCase().includes(term) ||
      String(item.download).includes(term)
    );
  });

  const displayedHistory = filteredHistory.slice(0, visibleCount);
  const hasMore = visibleCount < filteredHistory.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 5, filteredHistory.length));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setVisibleCount(5);
  };

  return (
    <div className="glass-card test-history-card">
      <div className="history-header">
        <div className="history-title-wrap">
          <History className="text-cyan" size={24} />
          <div>
            <h3 className="history-title">{t.testHistory}</h3>
            <span className="history-subtitle">
              {history.length} {history.length === 1 ? 'record' : 'records'} stored locally on your device
            </span>
          </div>
        </div>

        {history.length > 0 && (
          <div className="history-actions">
            <div className="history-search-wrap">
              <Search size={14} className="history-search-icon" />
              <input 
                type="text" 
                placeholder="Search history..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="history-search-input"
              />
            </div>

            <button className="btn-secondary history-btn" onClick={onExportCsv} title="Export CSV">
              <FileSpreadsheet size={15} />
              <span>CSV</span>
            </button>
            <button className="btn-secondary history-btn" onClick={onExportJson} title="Export JSON">
              <Code size={15} />
              <span>JSON</span>
            </button>
            <button className="btn-secondary history-clear-btn" onClick={onClear} title={t.clearHistory}>
              <Trash2 size={15} />
              <span>{t.clearHistory}</span>
            </button>
          </div>
        )}
      </div>

      {history.length === 0 ? (
        <div className="history-empty">
          <History size={48} className="empty-icon" />
          <p className="empty-text">{t.noHistory}</p>
          <span className="empty-sub">Your speed tests will be automatically recorded here.</span>
        </div>
      ) : (
        <>
          {/* History Status Bar */}
          <div className="history-status-bar">
            <span className="history-counter-text">
              Showing <strong>{Math.min(visibleCount, filteredHistory.length)}</strong> of <strong>{filteredHistory.length}</strong> Records
            </span>
            {searchTerm && (
              <span className="history-search-badge">
                Search: "{searchTerm}"
              </span>
            )}
          </div>

          {/* Desktop/Tablet Table View */}
          <div className="history-table-container desktop-table-view">
            <table className="history-table">
              <thead>
                <tr>
                  <th>DATE & TIME</th>
                  <th>DOWNLOAD</th>
                  <th>UPLOAD</th>
                  <th>PING / JITTER</th>
                  <th>STABILITY</th>
                  <th>ISP / SERVER</th>
                  <th style={{ textAlign: 'right' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {displayedHistory.map((item) => {
                  const dlFormatted = storageService.formatSpeed(item.download, unit);
                  const ulFormatted = storageService.formatSpeed(item.upload, unit);
                  return (
                    <tr key={item.id}>
                      <td>
                        <div className="date-cell">
                          <Calendar size={13} className="text-tertiary" />
                          <span>{item.formattedDate || item.timestamp}</span>
                        </div>
                      </td>
                      <td>
                        <div className="speed-cell dl-cell">
                          <ArrowDown size={14} />
                          <span className="speed-val">{dlFormatted}</span>
                          <span className="unit-val">{unit}</span>
                        </div>
                      </td>
                      <td>
                        <div className="speed-cell ul-cell">
                          <ArrowUp size={14} />
                          <span className="speed-val">{ulFormatted}</span>
                          <span className="unit-val">{unit}</span>
                        </div>
                      </td>
                      <td>
                        <div className="ping-cell">
                          <span className="text-purple">{item.ping || 0} ms</span>
                          <span className="sub-jitter">±{item.jitter || 0} ms</span>
                        </div>
                      </td>
                      <td>
                        <span className={`badge ${item.stabilityRating === 'Excellent' ? 'badge-emerald' : 'badge-cyan'}`}>
                          {item.stabilityRating || 'Good'}
                        </span>
                      </td>
                      <td>
                        <div className="isp-cell">
                          <span className="isp-name">{item.isp || 'Broadband'}</span>
                          <span className="server-sub">{item.server || 'Mumbai'}</span>
                        </div>
                      </td>
                      <td>
                        <div className="action-buttons-cell">
                          <button 
                            className="btn-icon mini-action-btn"
                            onClick={() => onViewDetails(item)}
                            title="View Details / Certificate"
                            aria-label="View Details"
                          >
                            <Eye size={14} />
                          </button>
                          <button 
                            className="btn-icon mini-action-btn"
                            onClick={() => onExportPdf(item)}
                            title="Download PDF Report"
                            aria-label="Download PDF Report"
                          >
                            <FileText size={14} />
                          </button>
                          <button 
                            className="btn-icon mini-action-btn btn-delete"
                            onClick={() => onDelete(item.id)}
                            title="Delete Record"
                            aria-label="Delete Record"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Card-Based List View */}
          <div className="history-mobile-cards">
            {displayedHistory.map((item) => {
              const dlFormatted = storageService.formatSpeed(item.download, unit);
              const ulFormatted = storageService.formatSpeed(item.upload, unit);
              return (
                <div key={item.id} className="history-card-item">
                  {/* Top Header Row */}
                  <div className="history-card-top">
                    <div className="date-cell">
                      <Calendar size={13} className="text-tertiary" />
                      <span>{item.formattedDate || item.timestamp}</span>
                    </div>
                    <span className={`badge ${item.stabilityRating === 'Excellent' ? 'badge-emerald' : 'badge-cyan'}`}>
                      {item.stabilityRating || 'Good'}
                    </span>
                  </div>

                  {/* Metrics Row */}
                  <div className="history-card-metrics">
                    <div className="card-metric-col">
                      <span className="card-metric-label">DOWNLOAD</span>
                      <div className="speed-cell dl-cell">
                        <ArrowDown size={13} />
                        <span className="speed-val">{dlFormatted}</span>
                        <span className="unit-val">{unit}</span>
                      </div>
                    </div>

                    <div className="card-metric-col">
                      <span className="card-metric-label">UPLOAD</span>
                      <div className="speed-cell ul-cell">
                        <ArrowUp size={13} />
                        <span className="speed-val">{ulFormatted}</span>
                        <span className="unit-val">{unit}</span>
                      </div>
                    </div>

                    <div className="card-metric-col">
                      <span className="card-metric-label">PING</span>
                      <div className="ping-cell">
                        <span className="text-purple">{item.ping || 0} ms</span>
                        <span className="sub-jitter">±{item.jitter || 0} ms</span>
                      </div>
                    </div>
                  </div>

                  {/* ISP & Server info */}
                  <div className="history-card-info">
                    <span className="isp-name">{item.isp || 'Broadband ISP'}</span>
                    <span className="server-sub">• {item.server || 'Mumbai Server'}</span>
                  </div>

                  {/* Mobile Action Buttons */}
                  <div className="history-card-actions">
                    <button 
                      className="btn-secondary history-card-btn"
                      onClick={() => onViewDetails(item)}
                    >
                      <Eye size={14} />
                      <span>View</span>
                    </button>
                    <button 
                      className="btn-secondary history-card-btn"
                      onClick={() => onExportPdf(item)}
                    >
                      <FileText size={14} />
                      <span>PDF</span>
                    </button>
                    <button 
                      className="btn-secondary history-card-btn card-btn-delete"
                      onClick={() => onDelete(item.id)}
                    >
                      <Trash2 size={14} />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More Button or Completed Indicator */}
          {filteredHistory.length > 0 && (
            <div className="history-pagination-footer">
              {hasMore ? (
                <button className="btn-load-more" onClick={handleLoadMore}>
                  <PlusCircle size={18} />
                  <span>More History ({filteredHistory.length - visibleCount} remaining)</span>
                </button>
              ) : (
                <div className="history-all-loaded">
                  <CheckCircle2 size={18} className="text-emerald" />
                  <span>All {filteredHistory.length} test records displayed</span>
                </div>
              )}
            </div>
          )}
        </>
      )}

      <style>{`
        .test-history-card {
          padding: 24px 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .history-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 16px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .history-title-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .history-title {
          font-size: 1.2rem;
          font-weight: 700;
        }

        .history-subtitle {
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }

        .history-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .history-search-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }

        .history-search-icon {
          position: absolute;
          left: 10px;
          color: var(--text-tertiary);
          pointer-events: none;
        }

        .history-search-input {
          padding: 7px 10px 7px 30px;
          font-size: 0.82rem;
          width: 150px;
        }

        .history-btn {
          padding: 7px 12px;
          font-size: 0.82rem;
        }

        .history-clear-btn {
          padding: 7px 12px;
          font-size: 0.82rem;
          color: var(--accent-coral);
        }

        .history-clear-btn:hover {
          background: rgba(255, 51, 102, 0.1);
          border-color: var(--accent-coral);
          color: var(--accent-coral);
        }

        .history-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px 20px;
          text-align: center;
          gap: 8px;
        }

        .empty-icon {
          color: var(--text-tertiary);
          opacity: 0.4;
          margin-bottom: 8px;
        }

        .empty-text {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .empty-sub {
          font-size: 0.82rem;
          color: var(--text-tertiary);
        }

        .history-table-container {
          overflow-x: auto;
          width: 100%;
          -webkit-overflow-scrolling: touch;
        }

        .history-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          min-width: 600px;
        }

        .history-table th {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--text-tertiary);
          letter-spacing: 0.05em;
          padding: 12px 14px;
          border-bottom: 1px solid var(--border-color);
        }

        .history-table td {
          padding: 14px;
          border-bottom: 1px solid var(--border-light);
          font-size: 0.88rem;
        }

        .history-table tbody tr {
          transition: background var(--transition-fast);
        }

        .history-table tbody tr:hover {
          background: var(--bg-card-hover);
        }

        .date-cell {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          color: var(--text-secondary);
          white-space: nowrap;
        }

        .speed-cell {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-weight: 700;
        }

        .dl-cell { color: var(--accent-cyan); }
        .ul-cell { color: var(--accent-emerald); }

        .speed-val {
          font-size: 1.05rem;
        }

        .unit-val {
          font-size: 0.75rem;
          color: var(--text-tertiary);
        }

        .ping-cell {
          display: flex;
          flex-direction: column;
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.88rem;
        }

        .sub-jitter {
          font-size: 0.72rem;
          color: var(--text-tertiary);
        }

        .isp-cell {
          display: flex;
          flex-direction: column;
        }

        .isp-name {
          font-weight: 600;
          color: var(--text-primary);
          word-break: break-word;
        }

        .server-sub {
          font-size: 0.75rem;
          color: var(--text-tertiary);
        }

        .action-buttons-cell {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 6px;
        }

        .mini-action-btn {
          width: 34px;
          height: 34px;
        }

        .btn-delete:hover {
          color: var(--accent-coral);
          border-color: var(--accent-coral);
          background: rgba(255, 51, 102, 0.1);
        }

        /* Mobile Card View */
        .history-mobile-cards {
          display: none;
          flex-direction: column;
          gap: 12px;
        }

        .history-card-item {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 14px 16px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
        }

        .history-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .history-card-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          padding: 10px 0;
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }

        .card-metric-col {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .card-metric-label {
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--text-tertiary);
          letter-spacing: 0.05em;
        }

        .history-card-info {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          flex-wrap: wrap;
        }

        .history-card-actions {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-top: 4px;
        }

        .history-card-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 10px;
          font-size: 0.8rem;
          min-height: 38px;
        }

        .card-btn-delete {
          color: var(--accent-coral);
        }

        .card-btn-delete:hover {
          background: rgba(255, 51, 102, 0.1);
          border-color: var(--accent-coral);
        }

        /* History Status Bar */
        .history-status-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xs);
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .history-counter-text strong {
          color: var(--accent-cyan);
        }

        .history-search-badge {
          background: rgba(0, 229, 255, 0.1);
          color: var(--accent-cyan);
          padding: 2px 8px;
          border-radius: var(--radius-full);
          font-size: 0.72rem;
          font-weight: 600;
        }

        /* History Pagination Footer */
        .history-pagination-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 14px;
        }

        .history-pagination-footer .btn-load-more {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 28px;
          background: linear-gradient(135deg, rgba(0, 229, 255, 0.12) 0%, rgba(139, 92, 246, 0.12) 100%);
          border: 1px solid rgba(0, 229, 255, 0.35);
          border-radius: var(--radius-full);
          color: #ffffff;
          font-size: 0.92rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(0, 229, 255, 0.15);
        }

        .history-pagination-footer .btn-load-more:hover {
          background: linear-gradient(135deg, rgba(0, 229, 255, 0.22) 0%, rgba(139, 92, 246, 0.22) 100%);
          border-color: var(--accent-cyan);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 229, 255, 0.28);
        }

        .history-all-loaded {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          border-radius: var(--radius-full);
          color: #10b981;
          font-size: 0.84rem;
          font-weight: 600;
        }

        [data-theme="light"] .history-pagination-footer .btn-load-more {
          background: linear-gradient(135deg, rgba(0, 180, 216, 0.12) 0%, rgba(124, 58, 237, 0.12) 100%);
          border-color: rgba(0, 180, 216, 0.4);
          color: var(--text-primary);
        }

        [data-theme="light"] .history-status-bar {
          background: rgba(15, 23, 42, 0.02);
        }

        @media (max-width: 640px) {
          .desktop-table-view {
            display: none;
          }
          .history-mobile-cards {
            display: flex;
          }
          .test-history-card {
            padding: 18px 14px;
          }
          .history-actions {
            width: 100%;
          }
          .history-search-wrap {
            flex: 1 1 100%;
          }
          .history-search-input {
            width: 100%;
          }
          .history-btn, .history-clear-btn {
            flex: 1;
            justify-content: center;
          }
          .history-pagination-footer .btn-load-more {
            width: 100%;
          }
        }
      `}</style>

    </div>
  );
}
