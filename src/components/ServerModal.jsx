import React, { useState } from 'react';
import { Server, Search, MapPin, X, Check } from 'lucide-react';
import { translations } from '../translations/i18n';

export default function ServerModal({ 
  isOpen, 
  onClose, 
  servers = [], 
  currentServer, 
  onSelectServer, 
  lang = 'en' 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRegion, setActiveRegion] = useState('all');
  const t = translations[lang] || translations.en;

  if (!isOpen) return null;

  const regions = [
    { id: 'all', label: 'All Locations' },
    { id: 'IN', label: 'India' },
    { id: 'asia', label: 'Asia Pacific' },
    { id: 'europe', label: 'Europe' },
    { id: 'americas', label: 'Americas' }
  ];

  const filteredServers = servers.filter((s) => {
    const matchesSearch = 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.sponsor.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (activeRegion === 'all') return true;
    if (activeRegion === 'IN') return s.countryCode === 'IN';
    if (activeRegion === 'asia') return ['SG', 'JP', 'AE'].includes(s.countryCode);
    if (activeRegion === 'europe') return ['DE', 'GB'].includes(s.countryCode);
    if (activeRegion === 'americas') return ['US'].includes(s.countryCode);
    return true;
  });

  const handleSelect = (s) => {
    onSelectServer(s);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content server-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title">
            <Server size={22} className="text-cyan" />
            <span>Select Speed Test Server</span>
          </div>
          <button className="btn-icon" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* Search & Region Filter Bar */}
        <div className="server-modal-controls">
          <div className="search-input-wrapper">
            <Search size={16} className="search-icon" />
            <input 
              type="text"
              placeholder="Search by city, country, or provider..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="server-search-input"
            />
          </div>

          <div className="region-pills">
            {regions.map((reg) => (
              <button
                key={reg.id}
                className={`region-pill ${activeRegion === reg.id ? 'active' : ''}`}
                onClick={() => setActiveRegion(reg.id)}
              >
                {reg.label}
              </button>
            ))}
          </div>
        </div>

        {/* Server List */}
        <div className="server-list">
          {filteredServers.length === 0 ? (
            <div className="empty-servers">
              <span>No servers found matching "{searchQuery}"</span>
            </div>
          ) : (
            filteredServers.map((s) => {
              const isSelected = currentServer?.id === s.id;
              return (
                <div 
                  key={s.id} 
                  className={`server-list-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSelect(s)}
                >
                  <div className="server-item-left">
                    <div className="server-item-icon">
                      <MapPin size={16} />
                    </div>
                    <div className="server-item-info">
                      <div className="server-item-title-row">
                        <span className="server-item-name">{s.city}, {s.country}</span>
                        {s.isDefault && <span className="badge badge-cyan default-badge">Primary</span>}
                      </div>
                      <span className="server-item-sponsor">{s.sponsor}</span>
                    </div>
                  </div>

                  <div className="server-item-right">
                    <span className="badge badge-emerald online-badge">Online</span>
                    {isSelected && (
                      <div className="selected-check">
                        <Check size={16} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="server-modal-footer">
          <span className="server-footer-text">
            Servers are hosted on high-bandwidth edge backbones. Choosing a server geographically closest to you provides the most accurate broadband line measurements.
          </span>
        </div>
      </div>

      <style>{`
        .server-modal-box {
          max-width: 680px;
        }

        .server-modal-controls {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
        }

        .search-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 14px;
          color: var(--text-tertiary);
          pointer-events: none;
        }

        .server-search-input {
          width: 100%;
          padding-left: 40px;
        }

        .region-pills {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 4px;
        }

        .region-pill {
          padding: 6px 14px;
          border-radius: var(--radius-full);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 0.8rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .region-pill.active {
          background: rgba(0, 240, 255, 0.12);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }

        .server-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          max-height: 380px;
          overflow-y: auto;
          padding-right: 4px;
        }

        .server-list-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .server-list-item:hover {
          border-color: var(--border-color-hover);
          background: var(--bg-card-hover);
        }

        .server-list-item.selected {
          border-color: var(--accent-cyan);
          background: rgba(0, 240, 255, 0.08);
        }

        .server-item-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .server-item-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: var(--radius-xs);
          background: rgba(139, 92, 246, 0.1);
          color: var(--accent-purple);
          flex-shrink: 0;
        }

        .server-item-info {
          display: flex;
          flex-direction: column;
        }

        .server-item-title-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .server-item-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .default-badge {
          font-size: 0.65rem;
          padding: 1px 6px;
        }

        .server-item-sponsor {
          font-size: 0.78rem;
          color: var(--text-tertiary);
        }

        .server-item-right {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .online-badge {
          font-size: 0.7rem;
        }

        .selected-check {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--accent-cyan);
          color: #000;
        }

        .empty-servers {
          padding: 32px;
          text-align: center;
          color: var(--text-tertiary);
          font-size: 0.9rem;
        }

        .server-modal-footer {
          margin-top: 16px;
          padding-top: 12px;
          border-top: 1px solid var(--border-color);
        }

        .server-footer-text {
          font-size: 0.76rem;
          color: var(--text-tertiary);
          line-height: 1.4;
        }
      `}</style>
    </div>
  );
}
