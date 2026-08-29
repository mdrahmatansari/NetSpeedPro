import React from 'react';
import { Activity, ShieldCheck, Phone, Mail, ExternalLink } from 'lucide-react';
import { translations } from '../translations/i18n';

function LinkedInIcon({ size = 13, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.4 9.74v-8.37H5.06v8.37z" />
    </svg>
  );
}

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
          {/* Professional Founder & Architect Card */}
          <div className="footer-founder-box">
            <div className="founder-box-left">
              <div className="founder-icon-pill">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="founder-details">
                <span className="founder-label">FOUNDER & LEAD ARCHITECT</span>
                <span className="founder-fullname">MD RAHMAT ANSARI</span>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/mdrahmat/"
              target="_blank"
              rel="noopener noreferrer"
              className="founder-linkedin-badge"
              title="Connect with MD Rahmat Ansari on LinkedIn"
            >
              <LinkedInIcon size={13} className="li-ico-brand" />
              <span>LinkedIn</span>
              <ExternalLink size={11} className="li-external-arrow" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="footer-links-group">
          <div className="footer-links-col">
            <span className="footer-col-title">LEARN</span>
            <button className="footer-link" onClick={() => onNavClick('key-terms', '/key-terms')}>Key Terms & Glossary</button>
            <button className="footer-link" onClick={() => onNavClick('guides', '/guides')}>Guides & Tutorials</button>
            <button className="footer-link" onClick={() => onNavClick('speedtest', '/')}>{t.navSpeedTest}</button>
            <button className="footer-link" onClick={() => onNavClick('history', '/history')}>{t.navHistory}</button>
          </div>

          <div className="footer-links-col">
            <span className="footer-col-title">TOOLS & INDEX</span>
            <button className="footer-link" onClick={() => onNavClick('performance-directory', '/speedtest-performance-directory')}>Performance Directory</button>
            <button className="footer-link" onClick={() => onNavClick('global-index', '/speedtest-global-index')}>Global Index™</button>
            <button className="footer-link" onClick={() => onNavClick('speedtest-awards', '/speedtest-awards')}>Speedtest Awards™</button>
            <button className="footer-link" onClick={() => onNavClick('diagnostics', '/diagnostics')}>{t.navDiagnostics}</button>
            <button className="footer-link" onClick={() => onNavClick('compare', '/compare')}>{t.navCompare}</button>
          </div>

          <div className="footer-links-col">
            <span className="footer-col-title">SUPPORT & LEGAL</span>
            <button className="footer-link" onClick={() => onNavClick('faq', '/faq')}>{t.navFAQ}</button>
            <button className="footer-link" onClick={() => onNavClick('servers', '/servers')}>{t.navServers}</button>
            <button className="footer-link" onClick={() => onNavClick('about', '/about')}>{t.navAbout}</button>
            <button className="footer-link" onClick={() => onNavClick('privacy', '/privacy')}>{t.privacyTitle}</button>
            <button className="footer-link" onClick={() => onNavClick('terms', '/terms')}>{t.termsTitle}</button>
          </div>

          <div className="footer-links-col">
            <span className="footer-col-title">CONTACT</span>
            <a
              href="https://www.linkedin.com/in/mdrahmat/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link footer-contact-direct footer-li-link"
              title="MD Rahmat Ansari LinkedIn Profile"
            >
              <LinkedInIcon size={13} />
              <span>LinkedIn Profile</span>
            </a>
            <a href="tel:+919877807391" className="footer-link footer-contact-direct" title="Direct Phone">
              <Phone size={13} />
              <span>+91 9877807391</span>
            </a>
            <a href="mailto:rahmatansari4171@gmail.com" className="footer-link footer-contact-direct" title="Direct Email">
              <Mail size={13} />
              <span>rahmatansari4171@gmail.com</span>
            </a>
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
          padding-top: 32px;
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          gap: 32px;
          padding-bottom: 28px;
          flex-wrap: wrap;
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
          max-width: 360px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        .footer-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: var(--radius-xs);
          background: rgba(0, 240, 255, 0.12);
          color: var(--accent-cyan);
          border: 1px solid rgba(0, 240, 255, 0.25);
        }

        .footer-brand-name {
          font-size: 1.15rem;
          font-weight: 900;
          background: var(--grad-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-tagline {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--accent-cyan);
        }

        .footer-desc {
          font-size: 0.78rem;
          line-height: 1.45;
          color: var(--text-tertiary);
        }

        /* Enterprise Clean Founder Card */
        .footer-founder-box {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          margin-top: 8px;
          width: fit-content;
          transition: all var(--transition-fast);
        }

        .footer-founder-box:hover {
          border-color: rgba(0, 229, 255, 0.35);
          background: rgba(0, 229, 255, 0.03);
        }

        .founder-box-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .founder-icon-pill {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-xs);
          background: rgba(0, 229, 255, 0.08);
          border: 1px solid rgba(0, 229, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .founder-details {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .founder-label {
          font-size: 0.64rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--accent-cyan);
          text-transform: uppercase;
        }

        .founder-fullname {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: 0.01em;
        }

        .founder-linkedin-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 10px;
          border-radius: 6px;
          background: rgba(10, 102, 194, 0.12);
          border: 1px solid rgba(10, 102, 194, 0.3);
          color: #38bdf8;
          font-size: 0.74rem;
          font-weight: 600;
          text-decoration: none;
          transition: all var(--transition-fast);
          flex-shrink: 0;
        }

        .founder-linkedin-badge:hover {
          background: #0a66c2;
          border-color: #0a66c2;
          color: #ffffff;
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(10, 102, 194, 0.35);
        }

        .li-ico-brand {
          color: inherit;
        }

        .li-external-arrow {
          opacity: 0.7;
        }

        .footer-li-link {
          color: #38bdf8 !important;
        }

        .footer-li-link:hover {
          color: #0a66c2 !important;
        }

        [data-theme="light"] .footer-founder-box {
          background: #ffffff;
          border-color: rgba(15, 23, 42, 0.1);
          box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05);
        }

        [data-theme="light"] .footer-founder-box:hover {
          border-color: #0a66c2;
        }

        [data-theme="light"] .founder-linkedin-badge {
          background: rgba(10, 102, 194, 0.08);
          border-color: rgba(10, 102, 194, 0.25);
          color: #0a66c2;
        }

        [data-theme="light"] .founder-linkedin-badge:hover {
          background: #0a66c2;
          color: #ffffff;
        }

        .footer-links-group {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
        }

        .footer-links-col {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .footer-col-title {
          font-size: 0.68rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: 0.08em;
          margin-bottom: 6px;
        }

        .footer-link {
          font-size: 0.82rem;
          color: var(--text-secondary);
          text-align: left;
          padding: 3px 0;
          transition: color var(--transition-fast);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          cursor: pointer;
        }

        .footer-link:hover {
          color: var(--accent-cyan);
        }

        .footer-contact-direct {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          word-break: break-all;
        }

        .footer-bottom-bar {
          border-top: 1px solid var(--border-color);
          padding: 14px 0;
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

        .footer-security-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        @media (max-width: 900px) {
          .footer-container {
            flex-direction: column;
            gap: 32px;
            padding-bottom: 28px;
          }
          .footer-links-group {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
          }
        }

        @media (max-width: 680px) {
          .footer-links-group {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 520px) {
          .footer-wrapper {
            padding-top: 36px;
          }
          .footer-bottom-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }

        @media (max-width: 340px) {
          .footer-links-group {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
