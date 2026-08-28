import { Info, Shield, Zap, Server, Award, User } from 'lucide-react';
import { translations } from '../translations/i18n';

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

        {/* Founder Attribution Card */}
        <div className="founder-card">
          <div className="founder-icon-box">
            <User size={22} />
          </div>
          <div className="founder-info">
            <span className="founder-badge">FOUNDER & LEAD ARCHITECT</span>
            <h4 className="founder-name">MD RAHMAT ANSARI</h4>
            <p className="founder-desc">
              Dedicated to building transparent, carrier-grade, and privacy-first network telemetry tools for users worldwide.
            </p>
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

        .founder-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }

        .founder-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.4;
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
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
