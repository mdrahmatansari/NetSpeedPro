import React, { useState, useMemo } from 'react';
import { 
  Compass, 
  Search, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  AlertTriangle, 
  HelpCircle, 
  Share2, 
  Check, 
  ArrowLeft,
  Layers
} from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import { GUIDES_DATA, GUIDE_CATEGORIES } from '../data/guidesData';

export default function Guides({ activeGuideSlug = null, onNavigate, lang = 'en' }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copied, setCopied] = useState(false);

  // If a slug is provided, find the active guide
  const currentGuide = useMemo(() => {
    if (!activeGuideSlug) return null;
    return GUIDES_DATA.find(g => g.slug === activeGuideSlug || g.id === activeGuideSlug) || null;
  }, [activeGuideSlug]);

  // Filtered guides for hub view
  const filteredGuides = useMemo(() => {
    return GUIDES_DATA.filter(guide => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        guide.title.toLowerCase().includes(q) || 
        guide.summary.toLowerCase().includes(q) ||
        guide.category.toLowerCase().includes(q);

      const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredGuide = useMemo(() => {
    return GUIDES_DATA.find(g => g.featured) || GUIDES_DATA[0];
  }, []);

  const handleShareGuide = (slug) => {
    const url = `${window.location.origin}/guides/${slug}`;
    navigator.clipboard?.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 1. SINGLE GUIDE READER VIEW
  if (currentGuide) {
    return (
      <div className="container page-container">
        <Breadcrumbs 
          items={[
            { label: 'Learn', path: '/key-terms' },
            { label: 'Guides Hub', path: '/guides' },
            { label: currentGuide.title }
          ]} 
          onNavigate={onNavigate} 
        />

        <div className="single-guide-layout">
          <article className="glass-card guide-article-card">
            <button 
              type="button" 
              className="btn-back-to-guides"
              onClick={() => onNavigate('/guides')}
            >
              <ArrowLeft size={16} />
              <span>Back to all guides</span>
            </button>

            {/* Article Header */}
            <header className="guide-article-header">
              <div className="guide-meta-row">
                <span className="guide-cat-badge">{currentGuide.category}</span>
                <span className="guide-meta-item">
                  <Clock size={13} />
                  <span>{currentGuide.readTime}</span>
                </span>
                <span className={`guide-diff-badge diff-${currentGuide.difficulty.toLowerCase()}`}>
                  {currentGuide.difficulty}
                </span>
              </div>

              <h1 className="guide-article-title">{currentGuide.title}</h1>
              <p className="guide-article-intro">{currentGuide.intro}</p>
            </header>

            {/* Step-by-Step Instructions */}
            <div className="guide-steps-section">
              <h2 className="guide-section-heading">Step-by-Step Instructions</h2>
              <div className="guide-steps-list">
                {currentGuide.steps.map((step) => (
                  <div key={step.stepNumber} className="guide-step-card">
                    <div className="step-number-bubble">{step.stepNumber}</div>
                    <div className="step-content-col">
                      <h3 className="step-title">{step.title}</h3>
                      <p className="step-desc">{step.description}</p>
                      {step.tip && (
                        <div className="step-tip-box">
                          <Sparkles size={14} className="text-cyan" />
                          <span><strong>Pro Tip:</strong> {step.tip}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Problems & Solutions */}
            {currentGuide.commonProblems?.length > 0 && (
              <div className="guide-troubleshoot-section">
                <h2 className="guide-section-heading">
                  <AlertTriangle size={18} className="text-amber" />
                  <span>Common Issues & Solutions</span>
                </h2>
                <div className="troubleshoot-grid">
                  {currentGuide.commonProblems.map((cp, idx) => (
                    <div key={idx} className="troubleshoot-card">
                      <h4 className="troubleshoot-problem">⚠️ Problem: {cp.problem}</h4>
                      <p className="troubleshoot-solution">✅ <strong>Fix:</strong> {cp.solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Frequently Asked Questions */}
            {currentGuide.faq?.length > 0 && (
              <div className="guide-faq-section">
                <h2 className="guide-section-heading">
                  <HelpCircle size={18} className="text-purple" />
                  <span>Frequently Asked Questions</span>
                </h2>
                <div className="guide-faq-list">
                  {currentGuide.faq.map((f, idx) => (
                    <div key={idx} className="guide-faq-item">
                      <h4 className="guide-faq-q">Q: {f.q}</h4>
                      <p className="guide-faq-a">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Share Article Bar */}
            <div className="guide-share-bar">
              <span className="share-text">Found this guide helpful?</span>
              <button 
                type="button" 
                className="btn-share-guide"
                onClick={() => handleShareGuide(currentGuide.slug)}
              >
                {copied ? <Check size={14} className="text-emerald" /> : <Share2 size={14} />}
                <span>{copied ? 'Link Copied!' : 'Share Guide'}</span>
              </button>
            </div>
          </article>
        </div>

        <style>{`
          .single-guide-layout {
            margin-bottom: 40px;
          }

          .guide-article-card {
            padding: 36px 40px;
            border-radius: var(--radius-md);
            display: flex;
            flex-direction: column;
            gap: 28px;
          }

          .btn-back-to-guides {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: none;
            border: none;
            color: var(--accent-cyan);
            font-size: 0.85rem;
            font-weight: 600;
            cursor: pointer;
            width: fit-content;
            padding: 4px 8px;
            border-radius: 4px;
            transition: all var(--transition-fast);
          }

          .btn-back-to-guides:hover {
            background: rgba(0, 229, 255, 0.08);
            transform: translateX(-2px);
          }

          .guide-meta-row {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 12px;
            flex-wrap: wrap;
          }

          .guide-cat-badge {
            font-size: 0.72rem;
            font-weight: 800;
            text-transform: uppercase;
            color: var(--accent-cyan);
            background: rgba(0, 229, 255, 0.08);
            border: 1px solid rgba(0, 229, 255, 0.25);
            padding: 3px 10px;
            border-radius: var(--radius-full);
          }

          .guide-meta-item {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            font-size: 0.8rem;
            color: var(--text-tertiary);
          }

          .guide-diff-badge {
            font-size: 0.72rem;
            font-weight: 700;
            padding: 2px 8px;
            border-radius: 4px;
          }

          .guide-diff-badge.diff-beginner {
            background: rgba(16, 185, 129, 0.1);
            color: #10b981;
            border: 1px solid rgba(16, 185, 129, 0.25);
          }

          .guide-diff-badge.diff-intermediate {
            background: rgba(0, 229, 255, 0.1);
            color: #00e5ff;
            border: 1px solid rgba(0, 229, 255, 0.25);
          }

          .guide-diff-badge.diff-advanced {
            background: rgba(139, 92, 246, 0.1);
            color: #a78bfa;
            border: 1px solid rgba(139, 92, 246, 0.25);
          }

          .guide-article-title {
            font-size: 2.2rem;
            font-weight: 900;
            line-height: 1.25;
            color: var(--text-primary);
            letter-spacing: -0.02em;
            margin-bottom: 14px;
          }

          .guide-article-intro {
            font-size: 1.05rem;
            line-height: 1.65;
            color: var(--text-secondary);
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 24px;
          }

          .guide-section-heading {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.4rem;
            font-weight: 800;
            color: var(--text-primary);
            margin-bottom: 20px;
          }

          .guide-steps-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .guide-step-card {
            display: flex;
            gap: 18px;
            padding: 20px 24px;
            background: var(--bg-tertiary);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-sm);
            transition: all var(--transition-fast);
          }

          .guide-step-card:hover {
            border-color: rgba(0, 229, 255, 0.35);
          }

          .step-number-bubble {
            width: 38px;
            height: 38px;
            border-radius: 50%;
            background: var(--grad-primary);
            color: #070d18;
            font-weight: 900;
            font-size: 1.1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .step-content-col {
            display: flex;
            flex-direction: column;
            gap: 8px;
            flex: 1;
          }

          .step-title {
            font-size: 1.15rem;
            font-weight: 800;
            color: var(--text-primary);
          }

          .step-desc {
            font-size: 0.94rem;
            line-height: 1.6;
            color: var(--text-secondary);
          }

          .step-tip-box {
            display: flex;
            align-items: flex-start;
            gap: 8px;
            padding: 10px 14px;
            background: rgba(0, 229, 255, 0.06);
            border: 1px solid rgba(0, 229, 255, 0.2);
            border-radius: var(--radius-xs);
            font-size: 0.86rem;
            color: var(--text-primary);
            margin-top: 4px;
          }

          .troubleshoot-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }

          .troubleshoot-card {
            padding: 16px 18px;
            background: rgba(245, 158, 11, 0.05);
            border: 1px solid rgba(245, 158, 11, 0.2);
            border-radius: var(--radius-xs);
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .troubleshoot-problem {
            font-size: 0.92rem;
            font-weight: 700;
            color: #fbbf24;
          }

          .troubleshoot-solution {
            font-size: 0.88rem;
            line-height: 1.5;
            color: var(--text-secondary);
          }

          .guide-faq-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .guide-faq-item {
            padding: 16px 20px;
            background: var(--bg-tertiary);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-xs);
          }

          .guide-faq-q {
            font-size: 0.96rem;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 6px;
          }

          .guide-faq-a {
            font-size: 0.9rem;
            line-height: 1.55;
            color: var(--text-secondary);
          }

          .guide-share-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px 20px;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-sm);
            flex-wrap: wrap;
            gap: 12px;
          }

          .share-text {
            font-size: 0.92rem;
            font-weight: 600;
            color: var(--text-secondary);
          }

          .btn-share-guide {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 16px;
            background: rgba(0, 229, 255, 0.1);
            border: 1px solid var(--accent-cyan);
            border-radius: var(--radius-full);
            color: #ffffff;
            font-weight: 700;
            font-size: 0.85rem;
            cursor: pointer;
            transition: all var(--transition-fast);
          }

          .btn-share-guide:hover {
            background: var(--accent-cyan);
            color: #070d18;
          }

          @media (max-width: 768px) {
            .guide-article-card {
              padding: 24px 18px;
            }
            .guide-article-title {
              font-size: 1.6rem;
            }
            .troubleshoot-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    );
  }

  // 2. GUIDES HUB DIRECTORY VIEW
  return (
    <div className="container page-container">
      <Breadcrumbs 
        items={[
          { label: 'Learn', path: '/key-terms' },
          { label: 'Guides & Tutorials', path: '/guides' }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Hero Card */}
      <div className="glass-card guides-hero-card">
        <div className="guides-hero-left">
          <div className="guides-badge-pill">
            <Compass size={15} className="text-cyan" />
            <span>STEP-BY-STEP TUTORIALS & MASTERCLASSES</span>
          </div>
          <h1 className="guides-main-title">Network Optimization Guides</h1>
          <p className="guides-main-lead">
            Explore actionable step-by-step guides written by network engineers to optimize Wi-Fi, reduce gaming ping, fix bufferbloat, and maximize throughput.
          </p>

          {/* Search Box */}
          <div className="guides-search-box">
            <Search size={18} className="guides-search-ico" />
            <input 
              type="text"
              placeholder="Search guides (e.g. Wi-Fi speed, reduce ping, 5GHz vs 6GHz)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="guides-search-input"
            />
            {searchQuery && (
              <button className="guides-clear-btn" onClick={() => setSearchQuery('')}>✕</button>
            )}
          </div>
        </div>

        {/* Featured Guide Quick Card */}
        {featuredGuide && !searchQuery && (
          <div 
            className="featured-guide-highlight"
            onClick={() => onNavigate(`/guides/${featuredGuide.slug}`)}
          >
            <div className="featured-top-tag">
              <Sparkles size={13} className="text-cyan" />
              <span>FEATURED GUIDE</span>
            </div>
            <h3 className="featured-guide-title">{featuredGuide.title}</h3>
            <p className="featured-guide-desc">{featuredGuide.summary}</p>
            <div className="featured-meta-row">
              <span className="feat-badge">{featuredGuide.readTime}</span>
              <span className="feat-badge">{featuredGuide.difficulty}</span>
              <span className="feat-read-btn">Read Now →</span>
            </div>
          </div>
        )}
      </div>

      {/* Category Pills */}
      <div className="guides-categories-row">
        <div className="cat-pills-scroll">
          {GUIDE_CATEGORIES.map(cat => (
            <button
              key={cat}
              type="button"
              className={`guide-cat-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'All' && <Layers size={13} />}
              <span>{cat}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Counter Bar */}
      <div className="guides-status-bar">
        <span className="guides-count-text">
          Showing <strong>{filteredGuides.length}</strong> of <strong>{GUIDES_DATA.length}</strong> Guides
        </span>
        {(selectedCategory !== 'All' || searchQuery) && (
          <button 
            className="guides-reset-btn"
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Guides Grid */}
      <div className="guides-cards-grid">
        {filteredGuides.map(guide => (
          <div 
            key={guide.id}
            className="glass-card guide-hub-card"
            onClick={() => onNavigate(`/guides/${guide.slug}`)}
          >
            <div className="guide-card-top">
              <span className="guide-card-category">{guide.category}</span>
              <span className={`guide-diff-badge diff-${guide.difficulty.toLowerCase()}`}>
                {guide.difficulty}
              </span>
            </div>

            <h3 className="guide-card-title">{guide.title}</h3>
            <p className="guide-card-summary">{guide.summary}</p>

            <div className="guide-card-bottom">
              <span className="guide-read-time">
                <Clock size={13} />
                <span>{guide.readTime}</span>
              </span>
              <span className="guide-read-link">
                <span>Read Full Guide</span>
                <ArrowRight size={14} />
              </span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .guides-hero-card {
          padding: 32px;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 28px;
          align-items: center;
          margin-bottom: 24px;
        }

        .guides-badge-pill {
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

        .guides-main-title {
          font-size: 2.2rem;
          font-weight: 900;
          letter-spacing: -0.02em;
          background: var(--grad-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 8px;
        }

        .guides-main-lead {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }

        .guides-search-box {
          position: relative;
          display: flex;
          align-items: center;
        }

        .guides-search-ico {
          position: absolute;
          left: 14px;
          color: var(--accent-cyan);
          pointer-events: none;
        }

        .guides-search-input {
          width: 100%;
          padding: 12px 40px 12px 44px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          font-size: 0.95rem;
          color: var(--text-primary);
          transition: all var(--transition-fast);
        }

        .guides-search-input:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 16px rgba(0, 229, 255, 0.2);
        }

        .guides-clear-btn {
          position: absolute;
          right: 12px;
          background: none;
          border: none;
          color: var(--text-tertiary);
          cursor: pointer;
        }

        .featured-guide-highlight {
          padding: 22px;
          background: linear-gradient(135deg, rgba(0, 229, 255, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%);
          border: 1px solid rgba(0, 229, 255, 0.35);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .featured-guide-highlight:hover {
          border-color: var(--accent-cyan);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 229, 255, 0.18);
        }

        .featured-top-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--accent-cyan);
          letter-spacing: 0.06em;
        }

        .featured-guide-title {
          font-size: 1.18rem;
          font-weight: 800;
          line-height: 1.35;
          color: var(--text-primary);
        }

        .featured-guide-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .featured-meta-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 6px;
        }

        .feat-badge {
          font-size: 0.72rem;
          padding: 2px 8px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          color: var(--text-secondary);
        }

        .feat-read-btn {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--accent-cyan);
          margin-left: auto;
        }

        .guides-categories-row {
          margin-bottom: 16px;
          overflow-x: auto;
        }

        .cat-pills-scroll {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .guide-cat-btn {
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

        .guide-cat-btn:hover {
          color: var(--accent-cyan);
          border-color: rgba(0, 229, 255, 0.35);
        }

        .guide-cat-btn.active {
          background: var(--grad-primary);
          color: #070d18;
          border-color: transparent;
          font-weight: 700;
        }

        .guides-status-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xs);
          margin-bottom: 24px;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .guides-count-text strong {
          color: var(--accent-cyan);
        }

        .guides-reset-btn {
          background: none;
          border: none;
          color: var(--accent-cyan);
          font-size: 0.82rem;
          cursor: pointer;
          text-decoration: underline;
        }

        .guides-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .guide-hub-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .guide-hub-card:hover {
          border-color: var(--accent-cyan);
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
        }

        .guide-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .guide-card-category {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--accent-cyan);
          text-transform: uppercase;
        }

        .guide-card-title {
          font-size: 1.15rem;
          font-weight: 800;
          line-height: 1.35;
          color: var(--text-primary);
        }

        .guide-card-summary {
          font-size: 0.88rem;
          line-height: 1.55;
          color: var(--text-secondary);
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .guide-card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid var(--border-color);
        }

        .guide-read-time {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.78rem;
          color: var(--text-tertiary);
        }

        .guide-read-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--accent-cyan);
        }

        .guide-hub-card:hover .guide-read-link {
          color: #ffffff;
        }

        @media (max-width: 900px) {
          .guides-hero-card {
            grid-template-columns: 1fr;
          }
          .guides-main-title {
            font-size: 1.7rem;
          }
        }
      `}</style>
    </div>
  );
}
