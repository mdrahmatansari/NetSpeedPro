import React, { useState } from 'react';
import { 
  Award, 
  Trophy, 
  Zap, 
  Smartphone, 
  Gamepad2, 
  Tv, 
  ShieldCheck, 
  HelpCircle, 
  Calendar, 
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import { getTranslations } from '../translations/i18n';
import { SPEEDTEST_AWARDS_DATA } from '../data/awardsData';

const ICON_MAP = {
  Zap: Zap,
  Smartphone: Smartphone,
  Gamepad2: Gamepad2,
  Tv: Tv,
  ShieldCheck: ShieldCheck
};

export default function SpeedtestAwards({ onNavigate, lang = 'en' }) {
  const [openFaqIdx, setOpenFaqIdx] = useState(0);
  const t = getTranslations(lang);

  return (
    <div className="container page-container">
      <Breadcrumbs 
        items={[
          { label: t.tools, path: '/speedtest-performance-directory' },
          { label: t.speedtestAwardsTitle, path: '/speedtest-awards' }
        ]} 
        onNavigate={onNavigate} 
        lang={lang}
      />

      {/* Hero Card */}
      <div className="glass-card awards-hero-card">
        <div className="hero-badge-row">
          <div className="awards-badge-pill">
            <Trophy size={15} className="text-amber" />
            <span>{t.awardsPill}</span>
          </div>
          <span className="demo-data-pill verified-badge-pill">{t.telemetryVerified}</span>
        </div>
        <h1 className="awards-main-title">{t.speedtestAwardsTitle}</h1>
        <p className="awards-main-lead">
          {t.awardsMainLead || SPEEDTEST_AWARDS_DATA.programOverview}
        </p>

        <div className="awards-eligibility-callout">
          <Info size={16} className="text-cyan" />
          <span><strong>{t.eligibilityStandard || "Eligibility Standard:"}</strong> {SPEEDTEST_AWARDS_DATA.eligibilityThreshold}</span>
        </div>
      </div>

      {/* Award Categories Showcase */}
      <section className="awards-section">
        <h2 className="awards-section-title">
          <Award size={20} className="text-cyan" />
          <span>{SPEEDTEST_AWARDS_DATA.currentYear} {t.awardCategoriesWinners || "Award Categories & Winners"}</span>
        </h2>

        <div className="award-categories-grid">
          {SPEEDTEST_AWARDS_DATA.categories.map(cat => {
            const Icon = ICON_MAP[cat.icon] || Trophy;
            return (
              <div key={cat.id} className="glass-card award-category-card">
                <div className="award-cat-top">
                  <div className={`award-icon-box badge-${cat.badgeColor}`}>
                    <Icon size={22} />
                  </div>
                  <div className="award-cat-title-wrap">
                    <h3 className="award-cat-name">{cat.title}</h3>
                    <span className="award-year-tag">{SPEEDTEST_AWARDS_DATA.currentYear} {t.winnerClass || "Winner Class"}</span>
                  </div>
                </div>

                <p className="award-cat-desc">{cat.description}</p>

                {/* Winners Table inside Card */}
                <div className="award-winners-list">
                  <span className="winners-sub-label">✔ {t.verifiedWinners || "VERIFIED WINNERS"}:</span>
                  {cat.winners2026.map((w, idx) => (
                    <div key={idx} className="winner-row">
                      <div className="winner-region-col">
                        <span className="winner-region">{w.region}</span>
                        <strong className="winner-name">🏆 {w.winner}</strong>
                      </div>
                      <div className="winner-score-col">
                        <span className="winner-score">{w.score}</span>
                        <span className="winner-runner">{t.runnerUp || "Runner-up:"} {w.runnerUp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Historical Winners Archive */}
      <section className="awards-section">
        <div className="glass-card historical-archive-card">
          <div className="archive-header">
            <Calendar size={20} className="text-purple" />
            <h2 className="archive-title">{t.awardsArchive || "Speedtest Awards™ Archive"}</h2>
          </div>

          <div className="archive-years-grid">
            {SPEEDTEST_AWARDS_DATA.historicalWinners.map(hw => (
              <div key={hw.year} className="archive-year-box">
                <div className="archive-year-badge">{hw.year} {t.awardsBadge || "Awards"}</div>
                <p className="archive-year-summary">{hw.summary}</p>
                <div className="archive-winners-detail">
                  <div className="arch-item">
                    <span className="arch-label">{t.topFixed || "Top Fixed Network"}:</span>
                    <strong className="arch-val">{hw.topFixed}</strong>
                  </div>
                  <div className="arch-item">
                    <span className="arch-label">{t.topMobile || "Top Mobile Network"}:</span>
                    <strong className="arch-val">{hw.topMobile}</strong>
                  </div>
                  <div className="arch-item">
                    <span className="arch-label">{t.topGaming || "Best for Gaming"}:</span>
                    <strong className="arch-val">{hw.topGaming}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards FAQ */}
      <section className="awards-section">
        <div className="glass-card awards-faq-card">
          <div className="faq-card-header">
            <HelpCircle size={20} className="text-cyan" />
            <h3 className="faq-title">{t.awardsFaqTitle || "Frequently Asked Questions About the Awards"}</h3>
          </div>

          <div className="awards-faq-list">
            {SPEEDTEST_AWARDS_DATA.methodologyFaq.map((f, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={idx} className={`award-faq-item ${isOpen ? 'open' : ''}`}>
                  <button 
                    type="button" 
                    className="award-faq-q-btn"
                    onClick={() => setOpenFaqIdx(isOpen ? -1 : idx)}
                  >
                    <span>{f.q}</span>
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {isOpen && (
                    <div className="award-faq-ans">
                      <p>{f.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        .awards-hero-card {
          padding: 32px;
          margin-bottom: 28px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .hero-badge-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }

        .verified-badge-pill {
          font-size: 0.72rem;
          font-weight: 800;
          color: #10b981;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.35);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          letter-spacing: 0.05em;
          box-shadow: 0 0 12px rgba(16, 185, 129, 0.15);
        }

        .awards-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.25);
          border-radius: var(--radius-full);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #f59e0b;
          width: fit-content;
        }

        .awards-main-title {
          font-size: 2.2rem;
          font-weight: 900;
          letter-spacing: -0.02em;
          background: var(--grad-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .awards-main-lead {
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 840px;
        }

        .awards-eligibility-callout {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(0, 229, 255, 0.06);
          border: 1px solid rgba(0, 229, 255, 0.2);
          border-radius: var(--radius-xs);
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .awards-eligibility-callout strong {
          color: var(--accent-cyan);
        }

        .awards-section {
          margin-bottom: 36px;
        }

        .awards-section-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 18px;
        }

        .award-categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 20px;
        }

        .award-category-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          border-radius: var(--radius-sm);
        }

        .award-cat-top {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .award-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-xs);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .award-icon-box.badge-emerald {
          background: rgba(16, 185, 129, 0.12);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .award-icon-box.badge-cyan {
          background: rgba(0, 229, 255, 0.12);
          color: #00e5ff;
          border: 1px solid rgba(0, 229, 255, 0.3);
        }

        .award-icon-box.badge-purple {
          background: rgba(139, 92, 246, 0.12);
          color: #a78bfa;
          border: 1px solid rgba(139, 92, 246, 0.3);
        }

        .award-icon-box.badge-amber {
          background: rgba(245, 158, 11, 0.12);
          color: #f59e0b;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }

        .award-cat-title-wrap {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .award-cat-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .award-year-tag {
          font-size: 0.72rem;
          color: var(--text-tertiary);
          font-weight: 600;
        }

        .award-cat-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .award-winners-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-top: 12px;
          border-top: 1px solid var(--border-color);
        }

        .winners-sub-label {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: var(--text-tertiary);
        }

        .winner-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xs);
          gap: 12px;
        }

        .winner-region-col {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .winner-region {
          font-size: 0.7rem;
          color: var(--text-tertiary);
        }

        .winner-name {
          font-size: 0.88rem;
          color: var(--text-primary);
        }

        .winner-score-col {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1px;
        }

        .winner-score {
          font-size: 0.84rem;
          font-weight: 700;
          color: var(--accent-cyan);
        }

        .winner-runner {
          font-size: 0.68rem;
          color: var(--text-tertiary);
        }

        .historical-archive-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          border-radius: var(--radius-sm);
        }

        .archive-header {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .archive-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .archive-years-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 16px;
        }

        .archive-year-box {
          padding: 16px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xs);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .archive-year-badge {
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--accent-purple);
          text-transform: uppercase;
        }

        .archive-year-summary {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .archive-winners-detail {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-top: 4px;
          padding-top: 8px;
          border-top: 1px solid var(--border-color);
          font-size: 0.8rem;
        }

        .arch-item {
          display: flex;
          justify-content: space-between;
          gap: 8px;
        }

        .arch-label {
          color: var(--text-tertiary);
        }

        .arch-val {
          color: var(--text-primary);
          text-align: right;
        }

        .awards-faq-card {
          padding: 28px;
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-card-header {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .faq-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .awards-faq-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .award-faq-item {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xs);
          background: var(--bg-tertiary);
          overflow: hidden;
        }

        .award-faq-q-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          background: none;
          border: none;
          color: var(--text-primary);
          font-size: 0.92rem;
          font-weight: 700;
          cursor: pointer;
          text-align: left;
        }

        .award-faq-ans {
          padding: 0 18px 14px 18px;
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        @media (max-width: 768px) {
          .awards-hero-card {
            padding: 20px 16px;
          }
          .awards-main-title {
            font-size: 1.6rem;
          }
          .award-categories-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
