import React from 'react';
import { 
  Settings, 
  X, 
  Moon, 
  Sun, 
  Gauge, 
  Clock, 
  Network, 
  Database, 
  Trash2, 
  AlertTriangle, 
  Globe, 
  Cpu 
} from 'lucide-react';
import { translations } from '../translations/i18n';

export default function SettingsModal({ 
  isOpen, 
  onClose, 
  settings, 
  onUpdateSettings, 
  onClearHistory, 
  lang = 'en', 
  setLang 
}) {
  const t = translations[lang] || translations.en;

  if (!isOpen) return null;

  const handleToggleTheme = () => {
    onUpdateSettings({ theme: settings.theme === 'dark' ? 'light' : 'dark' });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content settings-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title">
            <Settings size={22} className="text-cyan" />
            <span>{t.settings}</span>
          </div>
          <button className="btn-icon" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <div className="settings-sections">
          {/* Section 1: Theme & Display */}
          <div className="setting-row">
            <div className="setting-info">
              <div className="setting-label-row">
                {settings.theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
                <span className="setting-label">{t.theme}</span>
              </div>
              <span className="setting-desc">Switch between high-contrast dark and light interfaces</span>
            </div>
            <button className="btn-secondary theme-switch-btn" onClick={handleToggleTheme}>
              {settings.theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
            </button>
          </div>

          {/* Section 2: Speed Units */}
          <div className="setting-row">
            <div className="setting-info">
              <div className="setting-label-row">
                <Gauge size={16} />
                <span className="setting-label">{t.units}</span>
              </div>
              <span className="setting-desc">Distinguish Megabits/s from Megabytes/s (1 MB/s = 8 Mbps)</span>
            </div>
            <div className="unit-pill-group">
              {['Mbps', 'MB/s', 'Gbps'].map((u) => (
                <button
                  key={u}
                  className={`unit-pill ${settings.unit === u ? 'active' : ''}`}
                  onClick={() => onUpdateSettings({ unit: u })}
                >
                  {u}
                </button>
              ))}
            </div>
          </div>

          {/* Section 3: Test Duration */}
          <div className="setting-row">
            <div className="setting-info">
              <div className="setting-label-row">
                <Clock size={16} />
                <span className="setting-label">{t.duration}</span>
              </div>
              <span className="setting-desc">Longer duration provides maximum accuracy for gigabit links</span>
            </div>
            <select 
              value={settings.duration} 
              onChange={(e) => onUpdateSettings({ duration: parseInt(e.target.value, 10) })}
              className="settings-select"
            >
              <option value={5}>{t.quick}</option>
              <option value={10}>{t.standard}</option>
              <option value={20}>{t.extended}</option>
            </select>
          </div>

          {/* Section 4: Parallel Multi-stream */}
          <div className="setting-row">
            <div className="setting-info">
              <div className="setting-label-row">
                <Network size={16} />
                <span className="setting-label">{t.parallelStreams}</span>
              </div>
              <span className="setting-desc">Concurrent streams to fully saturate broadband pipeline</span>
            </div>
            <select 
              value={settings.parallelStreams} 
              onChange={(e) => onUpdateSettings({ parallelStreams: parseInt(e.target.value, 10) })}
              className="settings-select"
            >
              <option value={1}>1 Stream (Single-thread)</option>
              <option value={2}>2 Streams</option>
              <option value={4}>4 Streams (Recommended)</option>
              <option value={8}>8 Streams (Gigabit+)</option>
            </select>
          </div>

          {/* Section 5: Local Storage Test History */}
          <div className="setting-row">
            <div className="setting-info">
              <div className="setting-label-row">
                <Database size={16} />
                <span className="setting-label">{t.saveHistoryToggle}</span>
              </div>
              <span className="setting-desc">Keep record of your past speed tests in browser storage</span>
            </div>
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={settings.saveHistory} 
                onChange={(e) => onUpdateSettings({ saveHistory: e.target.checked })}
              />
              <span className="toggle-slider" />
            </label>
          </div>



          {/* Section 7: Language Selector */}
          <div className="setting-row lang-setting-row">
            <div className="setting-info">
              <div className="setting-label-row">
                <Globe size={16} />
                <span className="setting-label">Language / भाषा</span>
              </div>
              <span className="setting-desc">Interface localization</span>
            </div>
            <div className="lang-pills-grid">
              {[
                { code: 'en', label: 'English', flag: '🇺🇸' },
                { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
                { code: 'es', label: 'Español', flag: '🇪🇸' },
                { code: 'fr', label: 'Français', flag: '🇫🇷' },
                { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
                { code: 'ja', label: '日本語', flag: '🇯🇵' },
              ].map((item) => (
                <button
                  key={item.code}
                  type="button"
                  className={`lang-pill-btn ${lang === item.code ? 'active' : ''}`}
                  onClick={() => {
                    setLang(item.code);
                    onUpdateSettings({ language: item.code });
                  }}
                >
                  <span className="lang-pill-flag">{item.flag}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Data Usage Warning Box */}
        <div className="settings-warning-box">
          <AlertTriangle size={16} className="text-amber" />
          <span>{t.dataWarning}</span>
        </div>

        {/* Danger Zone: Clear History */}
        <div className="settings-footer">
          <button 
            className="btn-secondary clear-all-btn" 
            onClick={() => {
              if (window.confirm('Are you sure you want to delete all saved test history?')) {
                onClearHistory();
              }
            }}
          >
            <Trash2 size={16} />
            <span>{t.clearHistory}</span>
          </button>
        </div>
      </div>

      <style>{`
        .settings-modal-box {
          max-width: 600px;
        }

        .settings-sections {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .setting-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          gap: 16px;
        }

        .setting-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }

        .setting-label-row {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-primary);
        }

        .setting-label {
          font-size: 0.92rem;
          font-weight: 700;
        }

        .setting-desc {
          font-size: 0.78rem;
          color: var(--text-tertiary);
        }

        .unit-pill-group {
          display: flex;
          gap: 4px;
          background: var(--bg-card-solid);
          padding: 3px;
          border-radius: var(--radius-xs);
          border: 1px solid var(--border-color);
        }

        .unit-pill {
          padding: 4px 10px;
          font-size: 0.8rem;
          font-weight: 700;
          border-radius: 4px;
          color: var(--text-tertiary);
        }

        .unit-pill.active {
          background: var(--accent-cyan);
          color: #000;
        }

        .lang-setting-row {
          flex-direction: column;
          align-items: stretch;
          gap: 12px;
        }

        .lang-pills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }

        .lang-pill-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .lang-pill-btn:hover {
          background: var(--bg-card-hover);
          border-color: var(--accent-cyan);
          color: var(--text-primary);
        }

        .lang-pill-btn.active {
          background: rgba(0, 229, 255, 0.15);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          box-shadow: 0 0 12px rgba(0, 229, 255, 0.2);
        }

        .lang-pill-flag {
          font-size: 1rem;
        }

        @media (max-width: 540px) {
          .lang-pills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .settings-select {
          padding: 6px 12px;
          font-size: 0.85rem;
          min-width: 140px;
        }

        .theme-switch-btn {
          padding: 6px 14px;
          font-size: 0.82rem;
        }

        /* Toggle Switch */
        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 44px;
          height: 24px;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .toggle-slider {
          position: absolute;
          cursor: pointer;
          inset: 0;
          background-color: var(--bg-card-solid);
          border: 1px solid var(--border-color);
          transition: 0.3s;
          border-radius: 24px;
        }

        .toggle-slider:before {
          position: absolute;
          content: "";
          height: 16px;
          width: 16px;
          left: 3px;
          bottom: 3px;
          background-color: var(--text-tertiary);
          transition: 0.3s;
          border-radius: 50%;
        }

        input:checked + .toggle-slider {
          background-color: var(--accent-cyan);
          border-color: var(--accent-cyan);
        }

        input:checked + .toggle-slider:before {
          transform: translateX(20px);
          background-color: #000;
        }

        .settings-warning-box {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.25);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-top: 16px;
        }

        .settings-footer {
          margin-top: 16px;
          padding-top: 14px;
          border-top: 1px solid var(--border-color);
          display: flex;
          justify-content: flex-end;
        }

        .clear-all-btn {
          color: var(--accent-coral);
        }

        .clear-all-btn:hover {
          background: rgba(255, 51, 102, 0.1);
          border-color: var(--accent-coral);
          color: var(--accent-coral);
        }
      `}</style>
    </div>
  );
}
