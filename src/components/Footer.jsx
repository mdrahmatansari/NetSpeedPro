import React from 'react';
import { Activity, ShieldCheck } from 'lucide-react';
import { translations } from '../translations/i18n';

export default function Footer({ onNavClick, lang = 'en' }) {
  const t = translations[lang] || translations.en;

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        {/* Brand & Slogan */}
        <div className="footer-brand-col">
          <div className="footer-logo" onClick={() => onNavClick('speedtest')}>
            <div className="footer-icon-wrap">
              <Activity size={20} />
            </div>
            <span className="footer-brand-name">{t.brand}</span>
          </div>
          <p className="footer-tagline">{t.tagline}</p>
          <p className="footer-desc">
            Professional high-speed broadband and latency diagnostic suite powered by real browser-based network streaming telemetry.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links-group">
          <div className="footer-links-col">
            <span className="footer-col-title">NAVIGATION</span>
            <button className="footer-link" onClick={() => onNavClick('speedtest')}>{t.navSpeedTest}</button>
            <button className="footer-link" onClick={() => onNavClick('history')}>{t.navHistory}</button>
            <button className="footer-link" onClick={() => onNavClick('diagnostics')}>{t.navDiagnostics}</button>
            <button className="footer-link" onClick={() => onNavClick('compare')}>{t.navCompare}</button>
          </div>

          <div className="footer-links-col">
            <span className="footer-col-title">RESOURCES</span>
            <button className="footer-link" onClick={() => onNavClick('servers')}>{t.navServers}</button>
            <button className="footer-link" onClick={() => onNavClick('faq')}>{t.navFAQ}</button>
            <button className="footer-link" onClick={() => onNavClick('about')}>{t.navAbout}</button>
          </div>

          <div className="footer-links-col">
            <span className="footer-col-title">LEGAL</span>
            <button className="footer-link" onClick={() => onNavClick('privacy')}>{t.privacyTitle}</button>
            <button className="footer-link" onClick={() => onNavClick('terms')}>{t.termsTitle}</button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <div className="footer-copyright-wrap">
            <span className="footer-copyright">
              © {new Date().getFullYear()} NETSPEEDPRO Technologies. All rights reserved.
            </span>
            <span className="footer-founder-credit">
              Founded & Built by <strong>MD RAHMAT ANSARI</strong>
            </span>
          </div>
          <div className="footer-security-pill">
            <ShieldCheck size={14} className="text-emerald" />
            <span>Secure 256-bit Encrypted Telemetry</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-wrapper {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          margin-top: auto;
          padding-top: 48px;
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          gap: 40px;
          padding-bottom: 40px;
          flex-wrap: wrap;
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-width: 380px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }

        .footer-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: var(--radius-xs);
          background: rgba(0, 240, 255, 0.12);
          color: var(--accent-cyan);
          border: 1px solid rgba(0, 240, 255, 0.25);
        }

        .footer-brand-name {
          font-size: 1.25rem;
          font-weight: 900;
          background: var(--grad-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-tagline {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent-cyan);
        }

        .footer-desc {
          font-size: 0.82rem;
          line-height: 1.5;
          color: var(--text-tertiary);
        }

        .footer-links-group {
          display: flex;
          gap: 48px;
          flex-wrap: wrap;
        }

        .footer-links-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-col-title {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: 0.08em;
          margin-bottom: 4px;
        }

        .footer-link {
          font-size: 0.85rem;
          color: var(--text-secondary);
          text-align: left;
          padding: 2px 0;
          transition: color var(--transition-fast);
        }

        .footer-link:hover {
          color: var(--accent-cyan);
        }

        .footer-bottom-bar {
          border-top: 1px solid var(--border-color);
          padding: 16px 0;
          background: var(--bg-primary);
        }

        .footer-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer-copyright-wrap {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .footer-copyright {
          font-size: 0.78rem;
          color: var(--text-tertiary);
        }

        .footer-founder-credit {
          font-size: 0.78rem;
          color: var(--text-secondary);
          border-left: 1px solid var(--border-color);
          padding-left: 14px;
        }

        .footer-founder-credit strong {
          color: var(--accent-cyan);
          font-weight: 700;
        }

        .footer-security-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
          }
          .footer-links-group {
            gap: 32px;
          }
        }
      `}</style>
    </footer>
  );
}
