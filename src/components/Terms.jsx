import React from 'react';
import { FileText } from 'lucide-react';
import { translations } from '../translations/i18n';

export default function Terms({ lang = 'en' }) {
  const t = translations[lang] || translations.en;

  return (
    <div className="glass-card legal-card">
      <div className="legal-header">
        <FileText className="text-cyan" size={24} />
        <div>
          <h3 className="legal-title">{t.termsTitle}</h3>
          <span className="legal-subtitle">Terms of Use and Acceptable Network Testing</span>
        </div>
      </div>

      <div className="legal-body">
        <section className="legal-section">
          <h4>1. Acceptance of Terms</h4>
          <p>
            By accessing or running speed tests on NETSPEED, you agree to these Terms of Service. If you do not agree with any portion of these terms, please do not use the application.
          </p>
        </section>

        <section className="legal-section">
          <h4>2. Acceptable Network Usage</h4>
          <p>
            NETSPEED is intended for personal and enterprise broadband speed diagnostics. You agree not to automate denial-of-service (DoS) stress tests, scrape backend binary streams maliciously, or overload network edge nodes without authorization.
          </p>
        </section>

        <section className="legal-section">
          <h4>3. Measurement Accuracy & Disclaimers</h4>
          <p>
            While NETSPEED employs multi-stream precision algorithms, actual throughput can vary depending on Wi-Fi interference, router hardware limits, background apps, device CPU load, and transit peering between ISPs. Results are provided for informational and troubleshooting purposes.
          </p>
        </section>
      </div>

      <style>{`
        .legal-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .legal-header {
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 16px;
        }

        .legal-title {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .legal-subtitle {
          font-size: 0.82rem;
          color: var(--text-tertiary);
        }

        .legal-body {
          display: flex;
          flex-direction: column;
          gap: 18px;
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .legal-section h4 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 6px;
        }
      `}</style>
    </div>
  );
}
