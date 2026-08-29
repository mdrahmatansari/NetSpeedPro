import React from 'react';
import { FileText } from 'lucide-react';
import { getTranslations } from '../translations/i18n';

export default function Terms({ lang = 'en' }) {
  const t = getTranslations(lang);

  return (
    <div className="glass-card legal-card">
      <div className="legal-header">
        <FileText className="text-cyan" size={24} />
        <div>
          <h3 className="legal-title">{t.termsTitle}</h3>
          <span className="legal-subtitle">{t.termsSubtitle || "Terms of Use and Acceptable Network Testing"}</span>
        </div>
      </div>

      <div className="legal-body">
        <section className="legal-section">
          <h4>{t.termsAcceptanceTitle || "1. Acceptance of Terms"}</h4>
          <p>{t.termsAcceptanceText || "By accessing or running speed tests on NETSPEEDPRO, you agree to these Terms of Service. If you do not agree with any portion of these terms, please do not use the application."}</p>
        </section>

        <section className="legal-section">
          <h4>{t.termsUsageTitle || "2. Acceptable Network Usage"}</h4>
          <p>{t.termsUsageText || "NETSPEEDPRO is intended for personal and enterprise broadband speed diagnostics. You agree not to automate denial-of-service (DoS) stress tests, scrape backend binary streams maliciously, or overload network edge nodes without authorization."}</p>
        </section>

        <section className="legal-section">
          <h4>{t.termsAccuracyTitle || "3. Measurement Accuracy & Disclaimers"}</h4>
          <p>{t.termsAccuracyText || "While NETSPEEDPRO employs multi-stream precision algorithms, actual throughput can vary depending on Wi-Fi interference, router hardware limits, background apps, device CPU load, and transit peering between ISPs. Results are provided for informational and troubleshooting purposes."}</p>
        </section>

        <section className="legal-section">
          <h4>{t.termsContactTitle || "4. Contact Information"}</h4>
          <p>{t.termsContactText || "For support inquiries, enterprise testing partnerships, or questions regarding these terms, reach out directly:"}</p>
          <p style={{ marginTop: '6px' }}>
            <strong>{t.founderTitle || "Lead Architect & Founder"}:</strong> MD RAHMAT ANSARI<br />
            <strong>Phone / Mobile:</strong> <a href="tel:+919877807391" style={{ color: 'var(--accent-cyan)' }}>+91 9877807391</a><br />
            <strong>Email:</strong> <a href="mailto:rahmatansari4171@gmail.com" style={{ color: 'var(--accent-cyan)' }}>rahmatansari4171@gmail.com</a>
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

        @media (max-width: 600px) {
          .legal-card {
            padding: 18px 14px;
          }
          .legal-header {
            gap: 10px;
            padding-bottom: 12px;
          }
          .legal-title {
            font-size: 1.1rem;
          }
          .legal-body {
            font-size: 0.85rem;
            gap: 14px;
          }
        }
      `}</style>
    </div>
  );
}
