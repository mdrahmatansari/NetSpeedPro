import React from 'react';
import { Server, MapPin, Activity, ChevronRight } from 'lucide-react';
import { translations } from '../translations/i18n';

export default function ServerCard({ server, onOpenModal, lang = 'en', ping = 0 }) {
  const t = translations[lang] || translations.en;

  return (
    <div className="glass-card server-card">
      <div className="server-icon-wrap">
        <Server size={22} />
      </div>

      <div className="server-details">
        <span className="server-card-label">{t.server}</span>
        <h4 className="server-name">{server?.name || 'Mumbai Server'}</h4>
        <span className="server-sponsor">{server?.sponsor || 'NetSpeed Edge Core Node'}</span>
      </div>

      <div className="server-meta">
        <div className="server-location-badge">
          <MapPin size={13} />
          <span>{server?.city || 'Mumbai'}, {server?.country || 'India'}</span>
        </div>
        {ping > 0 && (
          <span className="badge badge-purple">
            <Activity size={12} /> {ping} ms
          </span>
        )}
      </div>

      <button className="btn-secondary change-server-btn" onClick={onOpenModal}>
        <span>{t.changeServer}</span>
        <ChevronRight size={16} />
      </button>

      <style>{`
        .server-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 24px;
          width: 100%;
          flex-wrap: wrap;
        }

        .server-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: var(--radius-sm);
          background: rgba(139, 92, 246, 0.12);
          color: var(--accent-purple);
          border: 1px solid rgba(139, 92, 246, 0.25);
          flex-shrink: 0;
        }

        .server-details {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-width: 180px;
        }

        .server-card-label {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .server-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .server-sponsor {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .server-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .server-location-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: var(--bg-tertiary);
          padding: 6px 12px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-color);
        }

        .change-server-btn {
          margin-left: auto;
          padding: 8px 16px;
          border-radius: var(--radius-full);
        }

        @media (max-width: 640px) {
          .change-server-btn {
            width: 100%;
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
}
