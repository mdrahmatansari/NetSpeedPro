import React from 'react';
import { Activity, ShieldCheck, Phone, Mail, ExternalLink } from 'lucide-react';
import { getTranslations } from '../translations/i18n';

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
  const t = getTranslations(lang);

  const handleNav = (tab, path) => {
    if (typeof onNavClick === 'function') {
      onNavClick(tab, path);
    }
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        {/* Left Side: Brand, Description & Founder Card */}
        <div className="footer-brand-col">
          <div className="footer-logo" onClick={() => handleNav('speedtest', '/')}>
            <div className="footer-icon-wrap">
              <Activity size={20} />
            </div>
            <span className="footer-brand-name">{t.brand}</span>
          </div>

          <p className="footer-tagline">{t.tagline}</p>
          
          <p className="footer-desc">
            {t.footerDesc}
          </p>

          {/* Professional Founder & Architect Card */}
          <div className="footer-founder-card">
            <div className="founder-card-left">
              <div className="founder-avatar-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="founder-info">
                <span className="founder-role">{t.founderTitle || "FOUNDER & CHIEF ARCHITECT"}</span>
                <span className="founder-name">MD RAHMAT ANSARI</span>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/mdrahmat/"
              target="_blank"
              rel="noopener noreferrer"
              className="founder-li-btn"
              title="Connect with MD Rahmat Ansari on LinkedIn"
            >
              <LinkedInIcon size={13} />
              <span>LinkedIn</span>
              <ExternalLink size={11} />
            </a>
          </div>
        </div>

        {/* Right Side: 4 Navigation Columns */}
        <div className="footer-nav-grid">
          {/* Column 1: Learn */}
          <div className="footer-nav-col">
            <div className="footer-col-header">
              <span className="footer-col-title">{t.learn}</span>
              <span className="footer-col-accent" />
            </div>
            <div className="footer-links-list">
              <button type="button" className="footer-link-btn" onClick={() => handleNav('key-terms', '/key-terms')}>
                {t.keyTermsTitle}
              </button>
              <button type="button" className="footer-link-btn" onClick={() => handleNav('guides', '/guides')}>
                {t.guidesMainTitle}
              </button>
              <button type="button" className="footer-link-btn" onClick={() => handleNav('speedtest', '/')}>
                {t.navSpeedTest}
              </button>
              <button type="button" className="footer-link-btn" onClick={() => handleNav('history', '/history')}>
                {t.navHistory}
              </button>
            </div>
          </div>

          {/* Column 2: Tools */}
          <div className="footer-nav-col">
            <div className="footer-col-header">
              <span className="footer-col-title">{t.tools}</span>
              <span className="footer-col-accent" />
            </div>
            <div className="footer-links-list">
              <button type="button" className="footer-link-btn" onClick={() => handleNav('performance-directory', '/speedtest-performance-directory')}>
                {t.performanceDirectoryTitle}
              </button>
              <button type="button" className="footer-link-btn" onClick={() => handleNav('global-index', '/speedtest-global-index')}>
                {t.globalIndexMainTitle}
              </button>
              <button type="button" className="footer-link-btn" onClick={() => handleNav('speedtest-awards', '/speedtest-awards')}>
                {t.speedtestAwardsTitle}
              </button>
              <button type="button" className="footer-link-btn" onClick={() => handleNav('diagnostics', '/diagnostics')}>
                {t.navDiagnostics}
              </button>
              <button type="button" className="footer-link-btn" onClick={() => handleNav('compare', '/compare')}>
                {t.navCompare}
              </button>
            </div>
          </div>

          {/* Column 3: Support */}
          <div className="footer-nav-col">
            <div className="footer-col-header">
              <span className="footer-col-title">{t.support}</span>
              <span className="footer-col-accent" />
            </div>
            <div className="footer-links-list">
              <button type="button" className="footer-link-btn" onClick={() => handleNav('faq', '/faq')}>
                {t.navFAQ}
              </button>
              <button type="button" className="footer-link-btn" onClick={() => handleNav('servers', '/servers')}>
                {t.navServers}
              </button>
              <button type="button" className="footer-link-btn" onClick={() => handleNav('about', '/about')}>
                {t.navAbout}
              </button>
              <button type="button" className="footer-link-btn" onClick={() => handleNav('privacy', '/privacy')}>
                {t.privacyTitle}
              </button>
              <button type="button" className="footer-link-btn" onClick={() => handleNav('terms', '/terms')}>
                {t.termsTitle}
              </button>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-nav-col">
            <div className="footer-col-header">
              <span className="footer-col-title">{t.contact}</span>
              <span className="footer-col-accent" />
            </div>
            <div className="footer-links-list">
              <a
                href="https://www.linkedin.com/in/mdrahmat/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link footer-contact-linkedin"
                title="MD Rahmat Ansari LinkedIn Profile"
              >
                <LinkedInIcon size={14} className="contact-ico" />
                <span>{t.linkedinProfile || "LinkedIn Profile"}</span>
              </a>
              <a href="tel:+919877807391" className="footer-contact-link" title="Direct Phone">
                <Phone size={13} className="contact-ico" />
                <span>+91 9877807391</span>
              </a>
              <a href="mailto:rahmatansari4171@gmail.com" className="footer-contact-link" title="Direct Email">
                <Mail size={13} className="contact-ico" />
                <span>rahmatansari4171@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Telemetry Badge */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <div className="footer-copyright-wrap">
            <span className="footer-copyright">
              {t.footerCopyright || `© ${new Date().getFullYear()} NETSPEEDPRO. All rights reserved. Designed & Developed by MD Rahmat Ansari.`}
            </span>
          </div>

          <div className="footer-security-pill">
            <ShieldCheck size={14} className="text-emerald" />
            <span>{t.telemetryVerified}</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-wrapper {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          margin-top: auto;
          padding-top: 48px;
          width: 100%;
          position: relative;
        }

        .footer-container {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 48px;
          padding-bottom: 40px;
          align-items: start;
        }

        /* Brand Column */
        .footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          width: fit-content;
          user-select: none;
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
          box-shadow: 0 0 12px rgba(0, 240, 255, 0.15);
        }

        .footer-brand-name {
          font-size: 1.3rem;
          font-weight: 900;
          letter-spacing: -0.02em;
          background: var(--grad-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-tagline {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--accent-cyan);
          letter-spacing: 0.01em;
        }

        .footer-desc {
          font-size: 0.82rem;
          line-height: 1.6;
          color: var(--text-tertiary);
          margin: 0;
        }

        /* Founder Card */
        .footer-founder-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 10px 14px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          margin-top: 8px;
          transition: all var(--transition-fast);
        }

        .footer-founder-card:hover {
          border-color: rgba(0, 229, 255, 0.35);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }

        .founder-card-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .founder-avatar-icon {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-xs);
          background: rgba(0, 229, 255, 0.08);
          border: 1px solid rgba(0, 229, 255, 0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .founder-info {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .founder-role {
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: var(--accent-cyan);
          text-transform: uppercase;
        }

        .founder-name {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: 0.01em;
        }

        .founder-li-btn {
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

        .founder-li-btn:hover {
          background: #0a66c2;
          border-color: #0a66c2;
          color: #ffffff;
          transform: translateY(-1px);
          box-shadow: 0 2px 10px rgba(10, 102, 194, 0.4);
        }

        /* Navigation Grid */
        .footer-nav-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
        }

        .footer-nav-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-col-header {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .footer-col-title {
          font-size: 0.74rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .footer-col-accent {
          width: 20px;
          height: 2px;
          background: var(--accent-cyan);
          border-radius: 2px;
        }

        .footer-links-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-link-btn {
          background: none;
          border: none;
          font-family: inherit;
          font-size: 0.84rem;
          color: var(--text-secondary);
          text-align: start;
          padding: 2px 0;
          transition: color var(--transition-fast), transform var(--transition-fast);
          cursor: pointer;
          width: fit-content;
          line-height: 1.45;
        }

        .footer-link-btn:hover {
          color: var(--accent-cyan);
          transform: translateX(3px);
        }

        [dir="rtl"] .footer-link-btn:hover {
          transform: translateX(-3px);
        }

        /* Contact Links */
        .footer-contact-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.84rem;
          color: var(--text-secondary);
          text-decoration: none;
          padding: 2px 0;
          transition: color var(--transition-fast), transform var(--transition-fast);
          width: fit-content;
          line-height: 1.45;
        }

        .footer-contact-link:hover {
          color: var(--accent-cyan);
          transform: translateX(3px);
        }

        .footer-contact-linkedin {
          color: #38bdf8;
          font-weight: 600;
        }

        .footer-contact-linkedin:hover {
          color: #60a5fa;
        }

        .contact-ico {
          flex-shrink: 0;
          opacity: 0.85;
        }

        /* Bottom Bar */
        .footer-bottom-bar {
          border-top: 1px solid var(--border-color);
          padding: 18px 0;
          background: var(--bg-primary);
          width: 100%;
        }

        .footer-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
        }

        .footer-copyright-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .footer-copyright {
          font-size: 0.78rem;
          color: var(--text-tertiary);
          line-height: 1.5;
        }

        .footer-security-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: var(--radius-full);
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.2);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-emerald);
        }

        /* Light Theme Overrides */
        [data-theme="light"] .footer-founder-card {
          background: #ffffff;
          border-color: rgba(15, 23, 42, 0.1);
          box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05);
        }

        [data-theme="light"] .footer-founder-card:hover {
          border-color: #0a66c2;
        }

        [data-theme="light"] .founder-li-btn {
          background: rgba(10, 102, 194, 0.08);
          border-color: rgba(10, 102, 194, 0.25);
          color: #0a66c2;
        }

        [data-theme="light"] .founder-li-btn:hover {
          background: #0a66c2;
          color: #ffffff;
        }

        [data-theme="light"] .footer-contact-linkedin {
          color: #0a66c2;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .footer-brand-col {
            max-width: 520px;
          }
          .footer-nav-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
          }
        }

        @media (max-width: 720px) {
          .footer-nav-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          .footer-bottom-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }

        @media (max-width: 440px) {
          .footer-wrapper {
            padding-top: 36px;
          }
          .footer-nav-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .footer-founder-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .founder-li-btn {
            align-self: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
