import React, { useState, useMemo } from 'react';
import { 
  Compass, 
  Search, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  AlertTriangle, 
  Share2, 
  Check, 
  ArrowLeft,
  Layers,
  BookOpen,
  ListOrdered,
  Lightbulb,
  AlertOctagon,
  CheckCircle2
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

  // 1. SINGLE GUIDE READER VIEW (Schema: Introduction → Explanation → Steps → Tips → Common Mistakes → Conclusion)
  if (currentGuide) {
    return (
      <div className="container page-container">
        <Breadcrumbs 
          items={[
            { label: 'Learn', path: '/key-terms' },
            { label: 'Guides & Tutorials', path: '/guides' },
            { label: currentGuide.title, path: `/guides/${currentGuide.slug}` }
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
              <p className="guide-article-lead-summary">{currentGuide.summary}</p>
            </header>

            {/* 1. INTRODUCTION */}
            <section className="guide-section-block">
              <h2 className="guide-section-heading">
                <BookOpen size={18} className="text-cyan" />
                <span>1. Introduction</span>
              </h2>
              <div className="guide-text-body">
                <p>{currentGuide.intro}</p>
              </div>
            </section>

            {/* 2. EXPLANATION */}
            <section className="guide-section-block">
              <h2 className="guide-section-heading">
                <Sparkles size={18} className="text-purple" />
                <span>2. In-Depth Technical Explanation</span>
              </h2>
              <div className="guide-text-body guide-explanation-box">
                <p>{currentGuide.explanation}</p>
              </div>
            </section>

            {/* 3. STEPS */}
            <section className="guide-section-block">
              <h2 className="guide-section-heading">
                <ListOrdered size={18} className="text-cyan" />
                <span>3. Step-by-Step Instructions</span>
              </h2>
              <div className="guide-steps-list">
                {currentGuide.steps.map((step) => (
                  <div key={step.stepNumber} className="guide-step-card">
                    <div className="step-number-bubble">{step.stepNumber}</div>
                    <div className="step-content-col">
                      <h3 className="step-title">{step.title}</h3>
                      <p className="step-desc">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. PRO TIPS */}
            {currentGuide.tips?.length > 0 && (
              <section className="guide-section-block">
                <h2 className="guide-section-heading">
                  <Lightbulb size={18} className="text-emerald" />
                  <span>4. Expert Pro Tips</span>
                </h2>
                <div className="guide-tips-grid">
                  {currentGuide.tips.map((tip, idx) => (
                    <div key={idx} className="guide-tip-card">
                      <Sparkles size={16} className="text-emerald" />
                      <p className="tip-text"><strong>Tip {idx + 1}:</strong> {tip}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 5. COMMON MISTAKES */}
            {currentGuide.commonMistakes?.length > 0 && (
              <section className="guide-section-block">
                <h2 className="guide-section-heading">
                  <AlertOctagon size={18} className="text-amber" />
                  <span>5. Common Mistakes to Avoid</span>
                </h2>
                <div className="guide-mistakes-grid">
                  {currentGuide.commonMistakes.map((mistake, idx) => (
                    <div key={idx} className="guide-mistake-card">
                      <AlertTriangle size={16} className="text-amber" />
                      <p className="mistake-text"><strong>Mistake {idx + 1}:</strong> {mistake}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 6. CONCLUSION */}
            <section className="guide-section-block">
              <h2 className="guide-section-heading">
                <CheckCircle2 size={18} className="text-cyan" />
                <span>6. Key Takeaways & Conclusion</span>
              </h2>
              <div className="guide-conclusion-box">
                <p>{currentGuide.conclusion}</p>
              </div>
            </section>

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
            gap: 32px;
          }

          .btn-back-to-guides {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: none;
            border: none;
            color: var(--accent-cyan);
            font-size: 0.88rem;
            font-weight: 700;
            cursor: pointer;
            width: fit-content;
            padding: 6px 12px;
            border-radius: var(--radius-xs);
            background: rgba(0, 229, 255, 0.08);
            border: 1px solid rgba(0, 229, 255, 0.2);
            transition: all var(--transition-fast);
          }

          .btn-back-to-guides:hover {
            background: rgba(0, 229, 255, 0.16);
            transform: translateX(-3px);
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
            font-size: clamp(1.6rem, 3.5vw, 2.3rem);
            font-weight: 900;
            line-height: 1.25;
            color: var(--text-primary);
            letter-spacing: -0.02em;
            margin-bottom: 12px;
          }

          .guide-article-lead-summary {
            font-size: 1.05rem;
            line-height: 1.6;
            color: var(--text-secondary);
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 20px;
          }

          .guide-section-block {
            display: flex;
            flex-direction: column;
            gap: 14px;
          }

          .guide-section-heading {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.25rem;
            font-weight: 800;
            color: var(--text-primary);
          }

          .guide-text-body {
            font-size: 0.96rem;
            line-height: 1.7;
            color: var(--text-secondary);
          }

          .guide-explanation-box {
            padding: 20px;
            background: rgba(139, 92, 246, 0.05);
            border: 1px solid rgba(139, 92, 246, 0.2);
            border-radius: var(--radius-sm);
          }

          .guide-steps-list {
            display: flex;
            flex-direction: column;
            gap: 14px;
          }

          .guide-step-card {
            display: flex;
            gap: 16px;
            padding: 18px 20px;
            background: var(--bg-tertiary);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-sm);
            transition: all var(--transition-fast);
          }

          .guide-step-card:hover {
            border-color: rgba(0, 229, 255, 0.35);
          }

          .step-number-bubble {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: var(--grad-primary);
            color: #070d18;
            font-weight: 900;
            font-size: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .step-content-col {
            display: flex;
            flex-direction: column;
            gap: 6px;
            flex: 1;
          }

          .step-title {
            font-size: 1.05rem;
            font-weight: 800;
            color: var(--text-primary);
          }

          .step-desc {
            font-size: 0.92rem;
            line-height: 1.6;
            color: var(--text-secondary);
          }

          .guide-tips-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }

          .guide-tip-card {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 16px;
            background: rgba(16, 185, 129, 0.06);
            border: 1px solid rgba(16, 185, 129, 0.2);
            border-radius: var(--radius-sm);
          }

          .tip-text {
            font-size: 0.9rem;
            line-height: 1.5;
            color: var(--text-primary);
          }

          .guide-mistakes-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }

          .guide-mistake-card {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 16px;
            background: rgba(245, 158, 11, 0.06);
            border: 1px solid rgba(245, 158, 11, 0.25);
            border-radius: var(--radius-sm);
          }

          .mistake-text {
            font-size: 0.9rem;
            line-height: 1.5;
            color: var(--text-primary);
          }

          .guide-conclusion-box {
            padding: 20px;
            background: rgba(0, 229, 255, 0.05);
            border: 1px solid rgba(0, 229, 255, 0.2);
            border-radius: var(--radius-sm);
            font-size: 0.96rem;
            line-height: 1.7;
            color: var(--text-primary);
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
              padding: 24px 16px;
            }
            .guide-tips-grid,
            .guide-mistakes-grid {
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
            Explore 19 comprehensive, actionable guides written by network engineers to optimize Wi-Fi, reduce gaming ping, fix bufferbloat, and maximize throughput.
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
          font-size: clamp(1.8rem, 3.5vw, 2.3rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          background: var(--grad-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 8px;
        }

        .guides-main-lead {
          font-size: 0.96rem;
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
          padding: 24px;
          background: rgba(0, 229, 255, 0.05);
          border: 1px solid rgba(0, 229, 255, 0.3);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all var(--transition-normal);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .featured-guide-highlight:hover {
          background: rgba(0, 229, 255, 0.09);
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 229, 255, 0.15);
        }

        .featured-top-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--accent-cyan);
          letter-spacing: 0.06em;
        }

        .featured-guide-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .featured-guide-desc {
          font-size: 0.88rem;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        .featured-meta-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 4px;
        }

        .feat-badge {
          font-size: 0.72rem;
          padding: 2px 8px;
          background: var(--bg-tertiary);
          border-radius: 4px;
          color: var(--text-tertiary);
        }

        .feat-read-btn {
          margin-left: auto;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--accent-cyan);
        }

        .guides-categories-row {
          margin-bottom: 18px;
        }

        .cat-pills-scroll {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 6px;
        }

        .guide-cat-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-secondary);
          white-space: nowrap;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .guide-cat-btn:hover {
          color: var(--text-primary);
          border-color: var(--accent-cyan);
        }

        .guide-cat-btn.active {
          background: var(--accent-cyan);
          color: #070d18;
          border-color: var(--accent-cyan);
          box-shadow: 0 0 14px rgba(0, 229, 255, 0.3);
        }

        .guides-status-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          font-size: 0.85rem;
          color: var(--text-tertiary);
        }

        .guides-reset-btn {
          color: var(--accent-cyan);
          font-weight: 700;
          background: none;
          border: none;
          cursor: pointer;
        }

        .guides-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-bottom: 40px;
        }

        .guide-hub-card {
          padding: 22px;
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          gap: 12px;
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .guide-hub-card:hover {
          transform: translateY(-3px);
          border-color: var(--accent-cyan);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
        }

        .guide-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .guide-card-category {
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--accent-cyan);
        }

        .guide-card-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.35;
        }

        .guide-card-summary {
          font-size: 0.86rem;
          line-height: 1.5;
          color: var(--text-secondary);
          flex: 1;
        }

        .guide-card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
          border-top: 1px solid var(--border-light);
          font-size: 0.8rem;
        }

        .guide-read-time {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: var(--text-tertiary);
        }

        .guide-read-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: var(--accent-cyan);
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .guides-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .guides-hero-card {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .guides-cards-grid {
            grid-template-columns: 1fr;
          }
          .guides-hero-card {
            padding: 20px 16px;
          }
        }
      `}</style>
    </div>
  );
}
