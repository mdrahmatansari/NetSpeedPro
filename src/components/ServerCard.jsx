import React from 'react';
import { Server, MapPin, Activity, ChevronRight, Wifi, Sparkles } from 'lucide-react';
import { getTranslations } from '../translations/i18n';

export default function ServerCard({ server, ipInfo, onOpenModal, lang = 'en', ping = 0 }) {
  const t = getTranslations(lang);
  const companyName = ipInfo?.companyName || ipInfo?.isp || 'High-Speed Broadband';

  return (
    <div className="glass-card server-card">
      <div className="server-icon-wrap">
        <Server size={22} />
      </div>

      <div className="server-details">
        <div className="server-label-row">
          <span className="server-card-label">{t.server}</span>
          <span className="badge badge-cyan server-auto-badge">
            <Sparkles size={11} />
            <span>{t.autoServer}</span>
          </span>
        </div>
        <h4 className="server-name">{server?.name || 'Patna Server'}</h4>
        <span className="server-sponsor">{server?.sponsor || 'NetSpeedPro Core Node'}</span>
        
        {/* Connected Network Company Info */}
        <div className="server-network-company">
          <Wifi size={13} className="text-cyan" />
          <span>{t.connection}: <strong>{companyName}</strong></span>
        </div>
      </div>

      <div className="server-meta">
        <div className="server-location-badge">
          <MapPin size={13} />
          <span>{server?.city || 'Patna/Bihar'}, {server?.country || 'India'}</span>
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

        .server-label-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 2px;
        }

        .server-card-label {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .server-auto-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.68rem;
          padding: 2px 8px;
          border-radius: var(--radius-full);
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

        .server-network-company {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin-top: 4px;
        }

        .server-network-company strong {
          color: var(--accent-cyan);
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
          .server-card {
            padding: 16px 14px;
            gap: 12px;
          }
          .server-details {
            min-width: 140px;
          }
          .server-meta {
            width: 100%;
            justify-content: flex-start;
          }
          .change-server-btn {
            width: 100%;
            margin-left: 0;
            padding: 10px 16px;
          }
        }
      `}</style>
    </div>
  );
}
