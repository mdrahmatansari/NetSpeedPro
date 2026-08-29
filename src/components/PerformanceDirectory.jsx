import React, { useState, useMemo } from 'react';
import { 
  BarChart2, 
  Search, 
  ArrowDown, 
  ArrowUp, 
  Activity, 
  ShieldCheck, 
  Server, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import CountryFlag from './CountryFlag';
import { getTranslations } from '../translations/i18n';
import { PERFORMANCE_METRICS_INFO, ISP_DIRECTORY_DATA, METHODOLOGY_EXPLANATION } from '../data/performanceDirectoryData';

export default function PerformanceDirectory({ onNavigate, lang = 'en' }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState('All');
  const [sortField, setSortField] = useState('avgDownload');
  const [sortOrder, setSortOrder] = useState('desc');
  const t = getTranslations(lang);

  // Filter & Sort ISPs
  const filteredIsps = useMemo(() => {
    return ISP_DIRECTORY_DATA.filter(item => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.name.toLowerCase().includes(q) || 
        item.country.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q);

      const matchesTech = selectedTech === 'All' || 
        (selectedTech === 'Fiber' && item.type.includes('Fiber')) ||
        (selectedTech === 'Cable' && item.type.includes('Cable')) ||
        (selectedTech === 'Satellite' && item.type.includes('Satellite'));

      return matchesSearch && matchesTech;
    }).sort((a, b) => {
      let aVal = a[sortField];
      let bVal = b[sortField];
      if (typeof aVal === 'string') aVal = parseFloat(aVal) || aVal;
      if (typeof bVal === 'string') bVal = parseFloat(bVal) || bVal;
      if (sortOrder === 'asc') return aVal > bVal ? 1 : -1;
      return aVal < bVal ? 1 : -1;
    });
  }, [searchQuery, selectedTech, sortField, sortOrder]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  return (
    <div className="container page-container">
      <Breadcrumbs 
        items={[
          { label: t.tools, path: '/speedtest-performance-directory' },
          { label: t.performanceDirectoryTitle, path: '/speedtest-performance-directory' }
        ]} 
        onNavigate={onNavigate} 
        lang={lang}
      />

      {/* Hero Card */}
      <div className="glass-card directory-hero-card">
        <div className="hero-badge-row">
          <div className="directory-badge-pill">
            <BarChart2 size={15} className="text-cyan" />
            <span>{t.directoryPill}</span>
          </div>
          <span className="demo-data-pill verified-badge-pill">{t.telemetryVerified}</span>
        </div>
        <h1 className="directory-main-title">{t.performanceDirectoryTitle}</h1>
        <p className="directory-main-lead">
          {t.directoryMainLead}
        </p>
      </div>

      {/* 1. Core Performance Metrics Breakdown */}
      <section className="directory-section">
        <h2 className="directory-section-title">
          <Activity size={20} className="text-cyan" />
          <span>{t.coreMetricsExplained || "Core Telemetry Metrics Explained"}</span>
        </h2>
        <div className="metrics-cards-grid">
          {PERFORMANCE_METRICS_INFO.map(metric => (
            <div key={metric.id} className="glass-card metric-info-card">
              <div className="metric-header-row">
                <span className="metric-name">{metric.name}</span>
                <span className="metric-unit-badge">{metric.unit}</span>
              </div>
              <span className="metric-importance">{metric.importance}</span>
              <p className="metric-desc">{metric.description}</p>
              <div className="metric-footer-box">
                <div className="metric-good-range">
                  <span className="range-label">{t.benchmarkLabel || "Benchmark Standard:"}</span>
                  <span className="range-val">{metric.goodRange}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. ISP Performance Benchmark Table */}
      <section className="directory-section">
        <div className="table-header-row">
          <div>
            <h2 className="directory-section-title">
              <Server size={20} className="text-cyan" />
              <span>{t.ispCarrierIndex || "ISP & Carrier Performance Index"}</span>
            </h2>
            <span className="table-subtitle">{t.ispCarrierSubtitle || "Verified throughput and latency metrics aggregated from consumer benchmarks"}</span>
          </div>

          {/* Search and Filters */}
          <div className="table-controls-wrap">
            <div className="table-search-box">
              <Search size={14} className="table-search-ico" />
              <input 
                type="text"
                placeholder={t.directorySearchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="table-search-input"
              />
            </div>

            <div className="table-filter-pills">
              {['All', 'Fiber', 'Cable', 'Satellite'].map(tech => (
                <button
                  key={tech}
                  type="button"
                  className={`table-filter-btn ${selectedTech === tech ? 'active' : ''}`}
                  onClick={() => setSelectedTech(tech)}
                >
                  {tech === 'All' ? (t.all || 'All') : tech}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="glass-card directory-table-container">
          <table className="directory-table">
            <thead>
              <tr>
                <th>{t.providerCol || "PROVIDER & REGION"}</th>
                <th>{t.techCol || "TECHNOLOGY"}</th>
                <th onClick={() => handleSort('avgDownload')} className="sortable-th">
                  <div className="th-content">
                    <span>{t.download || "DOWNLOAD"}</span>
                    {sortField === 'avgDownload' && (sortOrder === 'desc' ? '▼' : '▲')}
                  </div>
                </th>
                <th onClick={() => handleSort('avgUpload')} className="sortable-th">
                  <div className="th-content">
                    <span>{t.upload || "UPLOAD"}</span>
                    {sortField === 'avgUpload' && (sortOrder === 'desc' ? '▼' : '▲')}
                  </div>
                </th>
                <th onClick={() => handleSort('avgPing')} className="sortable-th">
                  <div className="th-content">
                    <span>{t.ping || "PING"}</span>
                    {sortField === 'avgPing' && (sortOrder === 'desc' ? '▼' : '▲')}
                  </div>
                </th>
                <th>{t.stability || "STABILITY"}</th>
                <th>{t.overallRating || "RATING"}</th>
              </tr>
            </thead>
            <tbody>
              {filteredIsps.map(isp => (
                <tr key={isp.id}>
                  <td>
                    <div className="provider-cell">
                      <CountryFlag country={isp.countryCode} size="small" />
                      <div className="provider-names">
                        <strong className="provider-name">{isp.name}</strong>
                        <span className="provider-country">{isp.country} • {isp.coverage}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="tech-badge">{isp.type}</span>
                  </td>
                  <td>
                    <div className="speed-stat dl-stat">
                      <ArrowDown size={13} />
                      <strong>{isp.avgDownload}</strong>
                      <span className="stat-unit">Mbps</span>
                    </div>
                  </td>
                  <td>
                    <div className="speed-stat ul-stat">
                      <ArrowUp size={13} />
                      <strong>{isp.avgUpload}</strong>
                      <span className="stat-unit">Mbps</span>
                    </div>
                  </td>
                  <td>
                    <span className="ping-stat">{isp.avgPing} ms</span>
                  </td>
                  <td>
                    <span className="badge badge-emerald">{isp.stabilityScore}</span>
                  </td>
                  <td>
                    <div className="rating-pill">
                      <span className="star-icon">★</span>
                      <span>{isp.rating}</span>
                      <span className="sample-sub">({isp.sampleCount})</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Measurement Methodology & Accuracy Checklist */}
      <section className="directory-section">
        <div className="glass-card methodology-card">
          <div className="methodology-header">
            <ShieldCheck size={24} className="text-cyan" />
            <div>
              <h3 className="methodology-title">{METHODOLOGY_EXPLANATION.title}</h3>
              <p className="methodology-lead">{METHODOLOGY_EXPLANATION.lead}</p>
            </div>
          </div>

          <div className="methodology-pillars-grid">
            {METHODOLOGY_EXPLANATION.pillars.map((pillar, idx) => (
              <div key={idx} className="methodology-pillar-box">
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="accuracy-checklist-box">
            <h4 className="checklist-title">
              <Sparkles size={16} className="text-cyan" />
              <span>Recommended Checklist for 100% Accurate Testing</span>
            </h4>
            <div className="checklist-grid">
              {METHODOLOGY_EXPLANATION.accuracyChecklist.map((item, idx) => (
                <div key={idx} className="checklist-item">
                  <CheckCircle2 size={16} className="text-emerald" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .directory-hero-card {
          padding: 32px;
          margin-bottom: 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
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

        .directory-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          background: rgba(0, 229, 255, 0.08);
          border: 1px solid rgba(0, 229, 255, 0.25);
          border-radius: var(--radius-full);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--accent-cyan);
          width: fit-content;
        }

        .directory-main-title {
          font-size: 2.2rem;
          font-weight: 900;
          letter-spacing: -0.02em;
          background: var(--grad-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .directory-main-lead {
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 840px;
        }

        .directory-section {
          margin-bottom: 36px;
        }

        .directory-section-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .metrics-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
          margin-top: 16px;
        }

        .metric-info-card {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          border-radius: var(--radius-sm);
        }

        .metric-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .metric-name {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .metric-unit-badge {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.08);
          border: 1px solid rgba(0, 229, 255, 0.2);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .metric-importance {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--accent-purple);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .metric-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .metric-footer-box {
          margin-top: auto;
          padding-top: 12px;
          border-top: 1px solid var(--border-color);
        }

        .metric-good-range {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
        }

        .range-label {
          color: var(--text-tertiary);
        }

        .range-val {
          color: #10b981;
          font-weight: 700;
        }

        .table-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .table-subtitle {
          font-size: 0.85rem;
          color: var(--text-tertiary);
        }

        .table-controls-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .table-search-box {
          position: relative;
          display: flex;
          align-items: center;
        }

        .table-search-ico {
          position: absolute;
          left: 12px;
          color: var(--text-tertiary);
        }

        .table-search-input {
          padding: 8px 12px 8px 34px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xs);
          font-size: 0.85rem;
          color: var(--text-primary);
          width: 220px;
        }

        .table-filter-pills {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .table-filter-btn {
          padding: 6px 12px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xs);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .table-filter-btn.active {
          background: var(--accent-cyan);
          color: #070d18;
          border-color: var(--accent-cyan);
        }

        .directory-table-container {
          overflow-x: auto;
          border-radius: var(--radius-sm);
          padding: 0;
        }

        .directory-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .directory-table th {
          padding: 14px 18px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: var(--text-tertiary);
          border-bottom: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.02);
          white-space: nowrap;
        }

        .sortable-th {
          cursor: pointer;
          user-select: none;
        }

        .sortable-th:hover {
          color: var(--accent-cyan);
        }

        .th-content {
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .directory-table td {
          padding: 16px 18px;
          border-bottom: 1px solid var(--border-color);
          font-size: 0.88rem;
          vertical-align: middle;
        }

        .directory-table tr:hover {
          background: rgba(0, 229, 255, 0.03);
        }

        .provider-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .provider-names {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .provider-name {
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .provider-country {
          font-size: 0.76rem;
          color: var(--text-tertiary);
        }

        .tech-badge {
          font-size: 0.74rem;
          font-weight: 700;
          color: var(--text-secondary);
          background: var(--bg-tertiary);
          padding: 4px 8px;
          border-radius: 4px;
          border: 1px solid var(--border-color);
          white-space: nowrap;
        }

        .speed-stat {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.95rem;
        }

        .dl-stat {
          color: var(--accent-cyan);
        }

        .ul-stat {
          color: var(--accent-purple);
        }

        .stat-unit {
          font-size: 0.72rem;
          color: var(--text-tertiary);
        }

        .ping-stat {
          font-weight: 700;
          color: #a78bfa;
        }

        .rating-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.84rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .star-icon {
          color: #f59e0b;
        }

        .sample-sub {
          font-size: 0.72rem;
          color: var(--text-tertiary);
          font-weight: 400;
        }

        .methodology-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          border-radius: var(--radius-sm);
        }

        .methodology-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .methodology-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .methodology-lead {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .methodology-pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }

        .methodology-pillar-box {
          padding: 18px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xs);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .pillar-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--accent-cyan);
        }

        .pillar-desc {
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .accuracy-checklist-box {
          padding: 20px;
          background: rgba(0, 229, 255, 0.05);
          border: 1px solid rgba(0, 229, 255, 0.2);
          border-radius: var(--radius-xs);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .checklist-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.98rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .checklist-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 10px;
        }

        .checklist-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        @media (max-width: 768px) {
          .directory-hero-card {
            padding: 20px 16px;
          }
          .directory-main-title {
            font-size: 1.6rem;
          }
          .table-header-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .table-controls-wrap {
            width: 100%;
          }
          .table-search-box {
            width: 100%;
          }
          .table-search-input {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
