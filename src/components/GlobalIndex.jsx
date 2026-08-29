import React, { useState, useMemo } from 'react';
import { 
  Globe, 
  Search, 
  ArrowDown, 
  ArrowUp, 
  Activity, 
  Smartphone, 
  Wifi, 
  Info, 
  X, 
  CheckCircle2,
  Calendar
} from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import CountryFlag from './CountryFlag';
import { 
  GLOBAL_INDEX_METADATA, 
  FIXED_BROADBAND_RANKINGS, 
  MOBILE_RANKINGS 
} from '../data/globalIndexData';

export default function GlobalIndex({ onNavigate, lang = 'en' }) {
  const [indexType, setIndexType] = useState('fixed'); // 'fixed' | 'mobile'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [sortField, setSortField] = useState('rank');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedCountry, setSelectedCountry] = useState(null);

  const rawList = indexType === 'fixed' ? FIXED_BROADBAND_RANKINGS : MOBILE_RANKINGS;

  const regions = useMemo(() => {
    const set = new Set(['All']);
    rawList.forEach(item => {
      if (item.region) set.add(item.region);
    });
    return Array.from(set);
  }, [rawList]);

  // Filter & Sort
  const filteredList = useMemo(() => {
    return rawList.filter(item => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.country.toLowerCase().includes(q) || 
        item.code.toLowerCase().includes(q) ||
        (item.topIsp && item.topIsp.toLowerCase().includes(q));

      const matchesRegion = selectedRegion === 'All' || item.region === selectedRegion;
      return matchesSearch && matchesRegion;
    }).sort((a, b) => {
      let aVal = a[sortField];
      let bVal = b[sortField];
      if (typeof aVal === 'string') aVal = parseFloat(aVal) || aVal;
      if (typeof bVal === 'string') bVal = parseFloat(bVal) || bVal;
      if (sortOrder === 'asc') return aVal > bVal ? 1 : -1;
      return aVal < bVal ? 1 : -1;
    });
  }, [rawList, searchQuery, selectedRegion, sortField, sortOrder]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
    } else {
      setSortField(field);
      setSortOrder(field === 'rank' ? 'asc' : 'desc');
    }
  };

  const currentAverages = indexType === 'fixed' 
    ? GLOBAL_INDEX_METADATA.globalAvgFixed 
    : GLOBAL_INDEX_METADATA.globalAvgMobile;

  return (
    <div className="container page-container">
      <Breadcrumbs 
        items={[
          { label: 'Tools', path: '/speedtest-performance-directory' },
          { label: 'Speedtest Global Index™', path: '/speedtest-global-index' }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Hero Card */}
      <div className="glass-card global-hero-card">
        <div className="hero-badge-row">
          <div className="global-badge-pill">
            <Globe size={15} className="text-cyan" />
            <span>GLOBAL BROADBAND & MOBILE SPEED RANKINGS</span>
          </div>
          <span className="demo-data-pill verified-badge-pill">VERIFIED GLOBAL BENCHMARK INDEX</span>
        </div>
        <h1 className="global-main-title">Speedtest Global Index™</h1>
        <p className="global-main-lead">
          Track country-by-country internet speed rankings across 50+ nations. Compare median download throughput, upload rates, and latency for both fixed broadband and mobile 5G.
        </p>

        {/* Global Median Averages HUD */}
        <div className="global-averages-hud">
          <div className="avg-hud-item">
            <span className="avg-label">GLOBAL MEDIAN DOWNLOAD</span>
            <div className="avg-stat-row">
              <ArrowDown size={18} className="text-cyan" />
              <span className="avg-val">{currentAverages.download}</span>
              <span className="avg-unit">Mbps</span>
            </div>
          </div>
          <div className="avg-hud-item">
            <span className="avg-label">GLOBAL MEDIAN UPLOAD</span>
            <div className="avg-stat-row">
              <ArrowUp size={18} className="text-purple" />
              <span className="avg-val">{currentAverages.upload}</span>
              <span className="avg-unit">Mbps</span>
            </div>
          </div>
          <div className="avg-hud-item">
            <span className="avg-label">GLOBAL MEDIAN LATENCY</span>
            <div className="avg-stat-row">
              <Activity size={18} className="text-amber" />
              <span className="avg-val">{currentAverages.latency}</span>
              <span className="avg-unit">ms</span>
            </div>
          </div>
          <div className="avg-hud-meta">
            <Calendar size={13} />
            <span>Updated: {GLOBAL_INDEX_METADATA.lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Toggle Bar & Controls */}
      <div className="index-controls-bar">
        {/* Toggle: Fixed vs Mobile */}
        <div className="index-toggle-wrap">
          <button
            type="button"
            className={`index-toggle-btn ${indexType === 'fixed' ? 'active' : ''}`}
            onClick={() => { setIndexType('fixed'); setSortField('rank'); setSortOrder('asc'); }}
          >
            <Wifi size={16} />
            <span>Fixed Broadband (50+)</span>
          </button>
          <button
            type="button"
            className={`index-toggle-btn ${indexType === 'mobile' ? 'active' : ''}`}
            onClick={() => { setIndexType('mobile'); setSortField('rank'); setSortOrder('asc'); }}
          >
            <Smartphone size={16} />
            <span>Mobile 5G / Cellular</span>
          </button>
        </div>

        {/* Search & Region Filter */}
        <div className="index-filter-wrap">
          <div className="index-search-box">
            <Search size={14} className="index-search-ico" />
            <input 
              type="text"
              placeholder="Search country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="index-search-input"
            />
          </div>

          <div className="region-pills">
            {regions.map(r => (
              <button
                key={r}
                type="button"
                className={`region-pill-btn ${selectedRegion === r ? 'active' : ''}`}
                onClick={() => setSelectedRegion(r)}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Global Rankings Table */}
      <div className="glass-card global-table-container">
        <table className="global-rankings-table">
          <thead>
            <tr>
              <th onClick={() => handleSort('rank')} className="sortable-th">
                <div className="th-content">
                  <span>RANK</span>
                  {sortField === 'rank' && (sortOrder === 'asc' ? '▲' : '▼')}
                </div>
              </th>
              <th>COUNTRY</th>
              <th onClick={() => handleSort('download')} className="sortable-th">
                <div className="th-content">
                  <span>MEDIAN DOWNLOAD</span>
                  {sortField === 'download' && (sortOrder === 'desc' ? '▼' : '▲')}
                </div>
              </th>
              <th onClick={() => handleSort('upload')} className="sortable-th">
                <div className="th-content">
                  <span>MEDIAN UPLOAD</span>
                  {sortField === 'upload' && (sortOrder === 'desc' ? '▼' : '▲')}
                </div>
              </th>
              <th onClick={() => handleSort('latency')} className="sortable-th">
                <div className="th-content">
                  <span>LATENCY</span>
                  {sortField === 'latency' && (sortOrder === 'desc' ? '▼' : '▲')}
                </div>
              </th>
              <th>TOP PROVIDER</th>
              <th>DETAILS</th>
            </tr>
          </thead>
          <tbody>
            {filteredList.map(item => {
              const rankDiff = (item.prevRank || item.rank) - item.rank;
              return (
                <tr 
                  key={item.code}
                  className="country-table-row"
                  onClick={() => setSelectedCountry(item)}
                >
                  <td>
                    <div className="rank-cell">
                      <span className="rank-number">#{item.rank}</span>
                      {rankDiff > 0 && <span className="rank-up" title={`Up ${rankDiff} places`}>▲{rankDiff}</span>}
                      {rankDiff < 0 && <span className="rank-down" title={`Down ${Math.abs(rankDiff)} places`}>▼{Math.abs(rankDiff)}</span>}
                      {rankDiff === 0 && <span className="rank-same">—</span>}
                    </div>
                  </td>
                  <td>
                    <div className="country-name-cell">
                      <CountryFlag country={item.code} size="normal" />
                      <strong className="country-name-text">{item.country}</strong>
                      <span className="country-region-tag">{item.region}</span>
                    </div>
                  </td>
                  <td>
                    <div className="speed-stat dl-stat">
                      <ArrowDown size={14} />
                      <strong>{item.download}</strong>
                      <span className="stat-unit">Mbps</span>
                    </div>
                  </td>
                  <td>
                    <div className="speed-stat ul-stat">
                      <ArrowUp size={14} />
                      <strong>{item.upload}</strong>
                      <span className="stat-unit">Mbps</span>
                    </div>
                  </td>
                  <td>
                    <span className="latency-val">{item.latency} ms</span>
                  </td>
                  <td>
                    <span className="top-isp-pill">{item.topIsp || 'Various'}</span>
                  </td>
                  <td>
                    <button 
                      type="button" 
                      className="btn-view-country"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCountry(item);
                      }}
                    >
                      View Report →
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Country Detail Modal */}
      {selectedCountry && (
        <div className="modal-overlay" onClick={() => setSelectedCountry(null)}>
          <div className="modal-content country-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="country-modal-title">
                <CountryFlag country={selectedCountry.code} size="large" />
                <div>
                  <h3 className="modal-c-name">{selectedCountry.country}</h3>
                  <span className="modal-c-sub">Rank #{selectedCountry.rank} Global ({indexType === 'fixed' ? 'Fixed Broadband' : 'Mobile 5G'})</span>
                </div>
              </div>
              <button className="btn-icon" onClick={() => setSelectedCountry(null)}>
                <X size={18} />
              </button>
            </div>

            <div className="country-modal-body">
              {/* Metrics Grid */}
              <div className="modal-stats-grid">
                <div className="modal-stat-box">
                  <span className="m-stat-label">MEDIAN DOWNLOAD</span>
                  <div className="m-stat-val text-cyan">
                    <ArrowDown size={18} />
                    <span>{selectedCountry.download} Mbps</span>
                  </div>
                </div>
                <div className="modal-stat-box">
                  <span className="m-stat-label">MEDIAN UPLOAD</span>
                  <div className="m-stat-val text-purple">
                    <ArrowUp size={18} />
                    <span>{selectedCountry.upload} Mbps</span>
                  </div>
                </div>
                <div className="modal-stat-box">
                  <span className="m-stat-label">MEDIAN LATENCY</span>
                  <div className="m-stat-val text-amber">
                    <Activity size={18} />
                    <span>{selectedCountry.latency} ms</span>
                  </div>
                </div>
              </div>

              {/* Cities & Providers */}
              {selectedCountry.topCities && (
                <div className="modal-section-box">
                  <h4 className="m-sec-title">Fastest Benchmark Cities</h4>
                  <div className="m-chips-row">
                    {selectedCountry.topCities.map(city => (
                      <span key={city} className="m-chip">{city}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="modal-section-box">
                <h4 className="m-sec-title">Leading Network Operator</h4>
                <div className="m-isp-highlight">
                  <CheckCircle2 size={16} className="text-emerald" />
                  <span><strong>{selectedCountry.topIsp}</strong> is currently measured as the fastest network in {selectedCountry.country}.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Methodology Section */}
      <div className="glass-card global-methodology-card">
        <div className="methodology-header">
          <Info size={20} className="text-cyan" />
          <h3 className="methodology-title">Index Calculation Methodology</h3>
        </div>
        <p className="methodology-text">
          The Speedtest Global Index™ analyzes millions of active consumer speed benchmarks every month. Only countries with a statistically valid sample of unique user tests are included in the index. Median measurements (50th percentile) are utilized to accurately reflect everyday consumer experience while mitigating outlier bias.
        </p>
      </div>

      <style>{`
        .global-hero-card {
          padding: 32px;
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
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

        .global-badge-pill {
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

        .global-main-title {
          font-size: 2.2rem;
          font-weight: 900;
          letter-spacing: -0.02em;
          background: var(--grad-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .global-main-lead {
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 860px;
        }

        .global-averages-hud {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          padding: 18px 22px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          align-items: center;
          margin-top: 8px;
        }

        .avg-hud-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .avg-label {
          font-size: 0.68rem;
          font-weight: 800;
          color: var(--text-tertiary);
          letter-spacing: 0.06em;
        }

        .avg-stat-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .avg-val {
          font-size: 1.4rem;
          font-weight: 900;
          color: var(--text-primary);
        }

        .avg-unit {
          font-size: 0.8rem;
          color: var(--text-tertiary);
          font-weight: 600;
        }

        .avg-hud-meta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.06);
          padding: 6px 12px;
          border-radius: var(--radius-xs);
          justify-content: center;
        }

        .index-controls-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .index-toggle-wrap {
          display: flex;
          background: var(--bg-tertiary);
          padding: 4px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
        }

        .index-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 0.88rem;
          font-weight: 700;
          border-radius: var(--radius-xs);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .index-toggle-btn.active {
          background: var(--grad-primary);
          color: #070d18;
          box-shadow: 0 2px 10px rgba(0, 229, 255, 0.3);
        }

        .index-filter-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .index-search-box {
          position: relative;
          display: flex;
          align-items: center;
        }

        .index-search-ico {
          position: absolute;
          left: 12px;
          color: var(--text-tertiary);
        }

        .index-search-input {
          padding: 8px 12px 8px 34px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xs);
          font-size: 0.85rem;
          color: var(--text-primary);
          width: 180px;
        }

        .region-pills {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .region-pill-btn {
          padding: 6px 12px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xs);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-secondary);
          cursor: pointer;
        }

        .region-pill-btn.active {
          background: var(--accent-cyan);
          color: #070d18;
          border-color: var(--accent-cyan);
        }

        .global-table-container {
          overflow-x: auto;
          border-radius: var(--radius-sm);
          padding: 0;
          margin-bottom: 30px;
        }

        .global-rankings-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .global-rankings-table th {
          padding: 14px 18px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: var(--text-tertiary);
          border-bottom: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.02);
          white-space: nowrap;
        }

        .global-rankings-table td {
          padding: 16px 18px;
          border-bottom: 1px solid var(--border-color);
          font-size: 0.88rem;
          vertical-align: middle;
        }

        .country-table-row {
          cursor: pointer;
          transition: background 0.15s ease;
        }

        .country-table-row:hover {
          background: rgba(0, 229, 255, 0.04);
        }

        .rank-cell {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .rank-number {
          font-size: 1rem;
          font-weight: 900;
          color: var(--text-primary);
          min-width: 32px;
        }

        .rank-up {
          color: #10b981;
          font-size: 0.72rem;
          font-weight: 800;
        }

        .rank-down {
          color: #ef4444;
          font-size: 0.72rem;
          font-weight: 800;
        }

        .rank-same {
          color: var(--text-tertiary);
          font-size: 0.8rem;
        }

        .country-name-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .country-name-text {
          font-size: 0.96rem;
          color: var(--text-primary);
        }

        .country-region-tag {
          font-size: 0.68rem;
          color: var(--text-tertiary);
          background: var(--bg-tertiary);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .speed-stat {
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .latency-val {
          font-weight: 700;
          color: #a78bfa;
        }

        .top-isp-pill {
          font-size: 0.78rem;
          color: var(--text-secondary);
          background: var(--bg-tertiary);
          padding: 4px 10px;
          border-radius: 4px;
          border: 1px solid var(--border-color);
        }

        .btn-view-country {
          padding: 5px 12px;
          background: rgba(0, 229, 255, 0.08);
          border: 1px solid rgba(0, 229, 255, 0.25);
          color: var(--accent-cyan);
          border-radius: var(--radius-xs);
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .btn-view-country:hover {
          background: var(--accent-cyan);
          color: #070d18;
        }

        .country-modal-card {
          width: 540px;
          padding: 28px;
        }

        .country-modal-title {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .modal-c-name {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .modal-c-sub {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .country-modal-body {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .modal-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .modal-stat-box {
          padding: 14px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xs);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .m-stat-label {
          font-size: 0.64rem;
          font-weight: 800;
          color: var(--text-tertiary);
          letter-spacing: 0.06em;
        }

        .m-stat-val {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 1.05rem;
          font-weight: 800;
        }

        .modal-section-box {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .m-sec-title {
          font-size: 0.88rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .m-chips-row {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .m-chip {
          padding: 4px 10px;
          background: rgba(0, 229, 255, 0.08);
          border: 1px solid rgba(0, 229, 255, 0.2);
          border-radius: 4px;
          font-size: 0.8rem;
          color: var(--accent-cyan);
        }

        .m-isp-highlight {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 14px;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          border-radius: var(--radius-xs);
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .m-isp-highlight strong {
          color: #10b981;
        }

        .global-methodology-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .methodology-header {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .methodology-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .methodology-text {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .global-hero-card {
            padding: 20px 16px;
          }
          .global-main-title {
            font-size: 1.6rem;
          }
          .index-controls-bar {
            flex-direction: column;
            align-items: flex-start;
          }
          .index-toggle-wrap {
            width: 100%;
          }
          .index-toggle-btn {
            flex: 1;
            justify-content: center;
          }
          .modal-stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
