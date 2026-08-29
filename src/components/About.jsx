import { Info, Shield, Zap, Server, Award, User, Phone, Mail, ExternalLink } from 'lucide-react';
import { translations } from '../translations/i18n';

function LinkedInIcon({ size = 14, className = '' }) {
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

export default function About({ lang = 'en' }) {
  const t = translations[lang] || translations.en;

  return (
    <div className="glass-card about-card">
      <div className="about-header">
        <Info className="text-cyan" size={24} />
        <div>
          <h3 className="about-title">{t.aboutTitle}</h3>
          <span className="about-subtitle">Transparent engineering and network measurement standards</span>
        </div>
      </div>

      <div className="about-body">
        <p className="about-lead">
          <strong>NETSPEEDPRO</strong> is a high-precision, browser-based internet speed and broadband diagnostics platform designed to measure raw network capacity, latency responsiveness, jitter variance, and line stability without requiring third-party plugins or desktop software.
        </p>

        {/* Founder Attribution & Contact Card */}
        <div className="founder-card">
          <div className="founder-icon-box">
            <User size={24} />
          </div>
          <div className="founder-info">
            <span className="founder-badge">✦ FOUNDER & LEAD ARCHITECT</span>
            <div className="founder-name-wrap">
              <h4 className="founder-name">MD RAHMAT ANSARI</h4>
              <span className="founder-verified-ico" title="Verified Creator & Architect">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#00e5ff">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </span>
            </div>
            <p className="founder-desc">
              Dedicated to building transparent, carrier-grade, and privacy-first network telemetry tools for users worldwide.
            </p>

            {/* Direct Contact & Social Links */}
            <div className="founder-contacts">
              <a 
                href="https://www.linkedin.com/in/mdrahmat/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="founder-contact-item founder-linkedin-item" 
                title="Connect with MD Rahmat Ansari on LinkedIn"
              >
                <LinkedInIcon size={14} className="contact-icon linkedin-icon" />
                <span>LinkedIn Profile</span>
                <ExternalLink size={11} className="external-ico" />
              </a>
              <a href="tel:+919877807391" className="founder-contact-item" title="Call MD Rahmat Ansari">
                <Phone size={14} className="contact-icon" />
                <span>+91 9877807391</span>
              </a>
              <a href="mailto:rahmatansari4171@gmail.com" className="founder-contact-item" title="Email MD Rahmat Ansari">
                <Mail size={14} className="contact-icon" />
                <span>rahmatansari4171@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-feature">
            <div className="about-feat-icon">
              <Zap size={20} />
            </div>
            <h5>Multi-Stream Architecture</h5>
            <p>
              By launching multiple concurrent streaming workers, NETSPEEDPRO completely saturates modern fiber and broadband pipes up to multi-gigabit throughput.
            </p>
          </div>

          <div className="about-feature">
            <div className="about-feat-icon">
              <Server size={20} />
            </div>
            <h5>Sub-Millisecond Telemetry</h5>
            <p>
              Using the HTML5 Performance API (<code>performance.now()</code>), ping and jitter samples are tracked with microsecond accuracy.
            </p>
          </div>

          <div className="about-feature">
            <div className="about-feat-icon">
              <Shield size={20} />
            </div>
            <h5>Privacy-First Local Storage</h5>
            <p>
              Your speed test records remain stored securely in your browser's local sandbox and are never sold or shared with advertisers.
            </p>
          </div>

          <div className="about-feature">
            <div className="about-feat-icon">
              <Award size={20} />
            </div>
            <h5>Transparent Accuracy</h5>
            <p>
              Results reflect 100% genuine real-world network data directly measured from your device.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .about-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .about-header {
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 16px;
        }

        .about-title {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .about-subtitle {
          font-size: 0.82rem;
          color: var(--text-tertiary);
        }

        .about-lead {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }

        .founder-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          background: linear-gradient(135deg, rgba(0, 229, 255, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%);
          border: 1px solid rgba(0, 229, 255, 0.3);
          border-radius: var(--radius-sm);
          margin-bottom: 20px;
        }

        .founder-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: var(--radius-xs);
          background: var(--grad-button);
          color: #ffffff;
          flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(0, 229, 255, 0.3);
        }

        .founder-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .founder-badge {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--accent-cyan);
          text-transform: uppercase;
        }

        .founder-name-wrap {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .founder-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }

        .founder-verified-ico {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .founder-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .founder-contacts {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 8px;
          flex-wrap: wrap;
        }

        .founder-contact-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.08);
          border: 1px solid rgba(0, 229, 255, 0.25);
          padding: 5px 12px;
          border-radius: var(--radius-full);
          text-decoration: none;
          transition: all var(--transition-fast);
        }

        .founder-contact-item:hover {
          background: rgba(0, 229, 255, 0.18);
          border-color: var(--accent-cyan);
          color: #ffffff;
          transform: translateY(-1px);
        }

        .founder-linkedin-item {
          background: rgba(10, 102, 194, 0.12);
          border-color: rgba(10, 102, 194, 0.35);
          color: #38bdf8;
        }

        .founder-linkedin-item:hover {
          background: #0a66c2;
          border-color: #0a66c2;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(10, 102, 194, 0.4);
        }

        .linkedin-icon {
          color: inherit;
        }

        .external-ico {
          opacity: 0.7;
          margin-left: 1px;
        }

        .contact-icon {
          color: var(--accent-cyan);
        }

        [data-theme="light"] .founder-linkedin-item {
          background: rgba(10, 102, 194, 0.08);
          border-color: rgba(10, 102, 194, 0.3);
          color: #0a66c2;
        }

        [data-theme="light"] .founder-linkedin-item:hover {
          background: #0a66c2;
          color: #ffffff;
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .about-feature {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .about-feat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: var(--radius-xs);
          background: rgba(0, 240, 255, 0.1);
          color: var(--accent-cyan);
        }

        .about-feature h5 {
          font-size: 0.98rem;
          font-weight: 700;
        }

        .about-feature p {
          font-size: 0.85rem;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        @media (max-width: 680px) {
          .about-card {
            padding: 18px 14px;
          }
          .about-grid {
            grid-template-columns: 1fr;
          }
          .founder-card {
            padding: 14px 16px;
            gap: 12px;
          }
        }

        @media (max-width: 380px) {
          .founder-card {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
