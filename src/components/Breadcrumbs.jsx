import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { getTranslations } from '../translations/i18n';

export default function Breadcrumbs({ items = [], onNavigate, lang = 'en' }) {
  const t = getTranslations(lang);

  return (
    <nav className="breadcrumbs-nav" aria-label="Breadcrumbs">
      <button 
        type="button" 
        className="breadcrumb-link home-crumb" 
        onClick={() => onNavigate('/')}
        title={t.navSpeedTest || 'Home'}
      >
        <Home size={14} />
        <span>{t.home || 'Home'}</span>
      </button>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            <ChevronRight size={13} className="breadcrumb-separator" />
            {isLast || !item.path ? (
              <span className="breadcrumb-current" aria-current="page">
                {item.label}
              </span>
            ) : (
              <button 
                type="button" 
                className="breadcrumb-link" 
                onClick={() => onNavigate(item.path)}
              >
                {item.label}
              </button>
            )}
          </React.Fragment>
        );
      })}

      <style>{`
        .breadcrumbs-nav {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: var(--text-tertiary);
          margin-bottom: 18px;
          flex-wrap: wrap;
        }

        .breadcrumb-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 3px 6px;
          border-radius: 4px;
          font-size: inherit;
          transition: all var(--transition-fast);
        }

        .breadcrumb-link:hover {
          color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.08);
        }

        .breadcrumb-separator {
          color: var(--text-tertiary);
          opacity: 0.6;
          flex-shrink: 0;
        }

        .breadcrumb-current {
          color: var(--accent-cyan);
          font-weight: 600;
          padding: 3px 6px;
        }
      `}</style>
    </nav>
  );
}
