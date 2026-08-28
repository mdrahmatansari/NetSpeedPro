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
  Search
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
                onChange={(e) => setSearchTerm(e.target.value)}
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
        <div className="history-table-container">
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
              {filteredHistory.map((item) => {
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
                        >
                          <Eye size={14} />
                        </button>
                        <button 
                          className="btn-icon mini-action-btn"
                          onClick={() => onExportPdf(item)}
                          title="Download PDF Report"
                        >
                          <FileText size={14} />
                        </button>
                        <button 
                          className="btn-icon mini-action-btn btn-delete"
                          onClick={() => onDelete(item.id)}
                          title="Delete Record"
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
        }

        .history-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
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
          max-width: 140px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
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
          width: 32px;
          height: 32px;
        }

        .btn-delete:hover {
          color: var(--accent-coral);
          border-color: var(--accent-coral);
          background: rgba(255, 51, 102, 0.1);
        }
      `}</style>
    </div>
  );
}
