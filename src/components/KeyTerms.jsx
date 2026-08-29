import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Share2, 
  Check, 
  Sparkles, 
  Layers
} from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import { GLOSSARY_TERMS, GLOSSARY_CATEGORIES } from '../data/glossaryData';

const ALPHABETS = ['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

export default function KeyTerms({ onNavigate, lang = 'en' }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedId, setExpandedId] = useState(GLOSSARY_TERMS[0]?.id || null);
  const [copiedId, setCopiedId] = useState(null);

  // Filter terms by search, alphabet, and category
  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter(item => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.term.toLowerCase().includes(q) || 
        item.simpleDef.toLowerCase().includes(q) || 
        item.detailedExplanation.toLowerCase().includes(q);

      const matchesLetter = selectedLetter === 'All' || item.letter === selectedLetter;
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;

      return matchesSearch && matchesLetter && matchesCategory;
    });
  }, [searchQuery, selectedLetter, selectedCategory]);

  const handleCopyLink = (id, e) => {
    e.stopPropagation();
    const url = `${window.location.origin}/key-terms#${id}`;
    navigator.clipboard?.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedLetter('All');
    setSelectedCategory('All');
  };

  return (
    <div className="container page-container">
      <Breadcrumbs 
        items={[
          { label: 'Learn', path: '/key-terms' },
          { label: 'Key Terms & Glossary', path: '/key-terms' }
        ]} 
        onNavigate={onNavigate} 
      />

      <div className="glass-card glossary-hero-card">
        <div className="glossary-header-content">
          <div className="glossary-badge-pill">
            <BookOpen size={15} className="text-cyan" />
            <span>NETWORKING & SPEED TEST ENCYCLOPEDIA</span>
          </div>
          <h1 className="glossary-title">Key Internet & Network Terms</h1>
          <p className="glossary-lead">
            A comprehensive, plain-English reference guide to 100+ vital internet, broadband, Wi-Fi, 5G, and speed benchmarking concepts.
          </p>

          {/* Search Bar */}
          <div className="glossary-search-box">
            <Search size={18} className="glossary-search-ico" />
            <input 
              type="text"
              placeholder="Search 100+ terms (e.g. Bufferbloat, Wi-Fi 7, Jitter, Cat6, MTU)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="glossary-search-input"
            />
            {searchQuery && (
              <button 
                className="glossary-clear-btn" 
                onClick={() => setSearchQuery('')}
                aria-label="Clear Search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="glossary-categories-row">
          <div className="cat-pills-scroll">
            {GLOSSARY_CATEGORIES.map(cat => (
              <button
                key={cat}
                type="button"
                className={`glossary-cat-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === 'All' && <Layers size={13} />}
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* A-Z Alphabet Filter */}
        <div className="glossary-alpha-row">
          {ALPHABETS.map(letter => {
            const hasTerms = letter === 'All' || GLOSSARY_TERMS.some(t => t.letter === letter);
            return (
              <button
                key={letter}
                type="button"
                className={`glossary-alpha-btn ${selectedLetter === letter ? 'active' : ''} ${!hasTerms ? 'disabled' : ''}`}
                onClick={() => hasTerms && setSelectedLetter(letter)}
                disabled={!hasTerms}
              >
                {letter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Status Bar */}
      <div className="glossary-status-bar">
        <span className="glossary-count-text">
          Showing <strong>{filteredTerms.length}</strong> of <strong>{GLOSSARY_TERMS.length}</strong> Terms
        </span>
        {(selectedLetter !== 'All' || selectedCategory !== 'All' || searchQuery) && (
          <button className="glossary-reset-link" onClick={handleResetFilters}>
            Reset All Filters
          </button>
        )}
      </div>

      {/* Glossary Cards Grid */}
      <div className="glossary-cards-grid">
        {filteredTerms.length === 0 ? (
          <div className="glass-card glossary-empty-state">
            <BookOpen size={48} className="text-muted" />
            <h3>No matching network terms found</h3>
            <p>Try searching for a different keyword or resetting your filters.</p>
            <button className="btn-secondary" onClick={handleResetFilters}>
              Reset Filters
            </button>
          </div>
        ) : (
          filteredTerms.map(item => {
            const isExpanded = expandedId === item.id;
            return (
              <div 
                key={item.id} 
                id={item.id}
                className={`glass-card glossary-card ${isExpanded ? 'expanded' : ''}`}
              >
                <div 
                  className="glossary-card-header"
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                >
                  <div className="term-title-col">
                    <div className="term-badge-row">
                      <span className="term-category-badge">{item.category}</span>
                      <span className="term-letter-badge">{item.letter}</span>
                    </div>
                    <h3 className="term-name">{item.term}</h3>
                    <p className="term-simple-def">{item.simpleDef}</p>
                  </div>
                  <div className="term-toggle-btn">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>

                {isExpanded && (
                  <div className="glossary-card-body">
                    {/* Detailed Technical Explanation */}
                    <div className="glossary-section">
                      <h4 className="section-label">
                        <Sparkles size={14} className="text-cyan" />
                        <span>Technical Breakdown</span>
                      </h4>
                      <p className="section-text">{item.detailedExplanation}</p>
                    </div>

                    {/* Why It Matters Callout */}
                    <div className="glossary-callout-why">
                      <div className="callout-why-header">
                        <span className="why-tag">💡 WHY IT MATTERS</span>
                      </div>
                      <p className="why-text">{item.whyItMatters}</p>
                    </div>

                    {/* Real World Example */}
                    {item.realWorldExample && (
                      <div className="glossary-example-box">
                        <span className="example-tag">⚡ REAL-WORLD EXAMPLE:</span>
                        <p className="example-text">{item.realWorldExample}</p>
                      </div>
                    )}

                    {/* Related Terms Chips & Copy */}
                    <div className="glossary-card-footer">
                      <div className="related-terms-wrap">
                        <span className="related-label">Related:</span>
                        <div className="related-chips">
                          {item.relatedTerms?.map((rt, idx) => (
                            <span 
                              key={idx} 
                              className="related-chip"
                              onClick={() => setSearchQuery(rt)}
                            >
                              {rt}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button 
                        type="button"
                        className="btn-copy-term"
                        onClick={(e) => handleCopyLink(item.id, e)}
                        title="Copy direct link to this term"
                      >
                        {copiedId === item.id ? <Check size={14} className="text-emerald" /> : <Share2 size={14} />}
                        <span>{copiedId === item.id ? 'Copied!' : 'Share Term'}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      <style>{`
        .glossary-hero-card {
          padding: 32px;
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .glossary-badge-pill {
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
          margin-bottom: 12px;
        }

        .glossary-title {
          font-size: 2.2rem;
          font-weight: 900;
          letter-spacing: -0.02em;
          margin-bottom: 8px;
          background: var(--grad-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .glossary-lead {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 800px;
          margin-bottom: 8px;
        }

        .glossary-search-box {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          margin-top: 12px;
        }

        .glossary-search-ico {
          position: absolute;
          left: 16px;
          color: var(--accent-cyan);
          pointer-events: none;
        }

        .glossary-search-input {
          width: 100%;
          padding: 14px 44px 14px 48px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          font-size: 0.98rem;
          color: var(--text-primary);
          transition: all var(--transition-fast);
        }

        .glossary-search-input:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 16px rgba(0, 229, 255, 0.2);
        }

        .glossary-clear-btn {
          position: absolute;
          right: 14px;
          background: none;
          border: none;
          color: var(--text-tertiary);
          cursor: pointer;
          font-size: 1.1rem;
        }

        /* Category Filter Row */
        .glossary-categories-row {
          overflow-x: auto;
          padding-bottom: 4px;
        }

        .cat-pills-scroll {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .glossary-cat-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          font-size: 0.84rem;
          font-weight: 600;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }

        .glossary-cat-pill:hover {
          color: var(--accent-cyan);
          border-color: rgba(0, 229, 255, 0.35);
        }

        .glossary-cat-pill.active {
          background: var(--grad-primary);
          color: #070d18;
          border-color: transparent;
          font-weight: 700;
        }

        /* Alphabet Row */
        .glossary-alpha-row {
          display: flex;
          align-items: center;
          gap: 4px;
          flex-wrap: wrap;
          padding-top: 8px;
          border-top: 1px solid var(--border-color);
        }

        .glossary-alpha-btn {
          width: 32px;
          height: 32px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xs);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .glossary-alpha-btn:first-child {
          width: auto;
          padding: 0 10px;
        }

        .glossary-alpha-btn:hover:not(.disabled) {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }

        .glossary-alpha-btn.active {
          background: var(--accent-cyan);
          color: #070d18;
          border-color: var(--accent-cyan);
        }

        .glossary-alpha-btn.disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        /* Status Bar */
        .glossary-status-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xs);
          margin-bottom: 20px;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .glossary-count-text strong {
          color: var(--accent-cyan);
        }

        .glossary-reset-link {
          background: none;
          border: none;
          color: var(--accent-cyan);
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: underline;
        }

        /* Cards Grid */
        .glossary-cards-grid {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 40px;
        }

        .glossary-card {
          padding: 20px 24px;
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
        }

        .glossary-card.expanded {
          border-color: rgba(0, 229, 255, 0.4);
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.25);
        }

        .glossary-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          cursor: pointer;
        }

        .term-title-col {
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex: 1;
        }

        .term-badge-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .term-category-badge {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.08);
          border: 1px solid rgba(0, 229, 255, 0.2);
          padding: 2px 8px;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .term-letter-badge {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--accent-purple);
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.25);
          width: 20px;
          height: 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
        }

        .term-name {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }

        .term-simple-def {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .term-toggle-btn {
          color: var(--accent-cyan);
          padding: 6px;
          border-radius: 50%;
          background: rgba(0, 229, 255, 0.08);
          flex-shrink: 0;
        }

        /* Card Body Expanded */
        .glossary-card-body {
          margin-top: 18px;
          padding-top: 18px;
          border-top: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .glossary-section {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .section-text {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .glossary-callout-why {
          padding: 14px 16px;
          background: rgba(139, 92, 246, 0.08);
          border: 1px solid rgba(139, 92, 246, 0.25);
          border-radius: var(--radius-xs);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .why-tag {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: var(--accent-purple);
        }

        .why-text {
          font-size: 0.9rem;
          color: var(--text-primary);
          line-height: 1.5;
        }

        .glossary-example-box {
          padding: 12px 16px;
          background: rgba(0, 229, 255, 0.06);
          border: 1px solid rgba(0, 229, 255, 0.2);
          border-radius: var(--radius-xs);
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .example-tag {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--accent-cyan);
          letter-spacing: 0.05em;
        }

        .example-text {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .glossary-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding-top: 10px;
          flex-wrap: wrap;
        }

        .related-terms-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .related-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-tertiary);
        }

        .related-chips {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .related-chip {
          padding: 3px 10px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .related-chip:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
        }

        .btn-copy-term {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xs);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .btn-copy-term:hover {
          background: rgba(0, 229, 255, 0.1);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }

        @media (max-width: 680px) {
          .glossary-hero-card {
            padding: 20px 16px;
          }
          .glossary-title {
            font-size: 1.6rem;
          }
          .glossary-card {
            padding: 16px;
          }
          .term-name {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
}
