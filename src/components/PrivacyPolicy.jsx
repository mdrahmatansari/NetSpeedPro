import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { translations } from '../translations/i18n';

export default function PrivacyPolicy({ lang = 'en' }) {
  const t = translations[lang] || translations.en;

  return (
    <div className="glass-card legal-card">
      <div className="legal-header">
        <ShieldCheck className="text-cyan" size={24} />
        <div>
          <h3 className="legal-title">{t.privacyTitle}</h3>
          <span className="legal-subtitle">Effective Date: January 2026 | Version 1.0</span>
        </div>
      </div>

      <div className="legal-body">
        <section className="legal-section">
          <h4>1. Our Privacy Commitment</h4>
          <p>
            At NETSPEEDPRO, we believe speed testing should be fast, accurate, and respect your digital privacy. We do not sell your personal IP information, track your web browsing history, or share telemetry data with third-party data brokers.
          </p>
        </section>

        <section className="legal-section">
          <h4>2. Information Processed During Tests</h4>
          <p>
            When you initiate a speed test, the following temporary technical telemetry is processed solely to calculate accurate network throughput and routing latency:
          </p>
          <ul>
            <li><strong>Public IP Address & Autonomous System Number (ASN)</strong>: Used to determine your ISP name and select the lowest latency test server.</li>
            <li><strong>Data Throughput Metrics</strong>: Bytes transferred, elapsed microseconds, and round-trip ping timestamps.</li>
            <li><strong>Browser User-Agent</strong>: Used to optimize multi-stream worker configurations.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h4>3. Local Storage of Test History</h4>
          <p>
            Your speed test records (speeds, ping, ISP, date) are stored exclusively in your browser's local <code>localStorage</code> cache. You have 100% control to export, disable, or delete your entire test history at any time with a single click.
          </p>
        </section>

        <section className="legal-section">
          <h4>4. Security & Encryption</h4>
          <p>
            All test data transmissions utilize standard HTTPS/TLS encryption to prevent eavesdropping and data packet tampering in transit.
          </p>
        </section>

        <section className="legal-section">
          <h4>5. Contact & Privacy Inquiries</h4>
          <p>
            If you have any questions or data privacy inquiries regarding NETSPEEDPRO, please contact:
          </p>
          <p style={{ marginTop: '6px' }}>
            <strong>Lead Architect & Founder:</strong> MD RAHMAT ANSARI<br />
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

        .legal-section ul {
          margin-left: 20px;
          margin-top: 6px;
          display: flex;
          flex-direction: column;
          gap: 4px;
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
          .legal-section ul {
            margin-left: 16px;
          }
        }
      `}</style>
    </div>
  );
}
