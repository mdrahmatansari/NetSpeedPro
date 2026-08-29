import React, { useState, useMemo } from 'react';
import { HelpCircle, ChevronDown, Search, PlusCircle, CheckCircle2, Sparkles, Filter, Zap, AlertTriangle, Lightbulb } from 'lucide-react';
import { getTranslations } from '../translations/i18n';
import { FAQ_DATA, FAQ_CATEGORIES } from '../data/faqData';

// Helper to highlight key terms, bold tokens, and prefix definitions before colons
function renderHighlightedText(text) {
  if (!text) return null;

  // Split by markdown bold **text** if present
  const boldRegex = /(\*\*[^*]+\*\*)/g;
  const parts = text.split(boldRegex);

  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={idx} className="faq-highlight-term">
          {part.slice(2, -2)}
        </strong>
      );
    }

    // Check if line contains a "Key Definition:" or "Title:" prefix before a colon
    const colonIdx = part.indexOf(':');
    if (colonIdx > 0 && colonIdx <= 50 && !part.startsWith('http') && !part.startsWith('//')) {
      const prefix = part.substring(0, colonIdx + 1);
      const remainder = part.substring(colonIdx + 1);
      return (
        <React.Fragment key={idx}>
          <strong className="faq-highlight-term">{prefix}</strong>
          <span>{remainder}</span>
        </React.Fragment>
      );
    }

    return <span key={idx}>{part}</span>;
  });
}

// Component that parses and highlights key terms, bullet lists, subheadings, and callout badges
function FormattedFAQAnswer({ text, t = {} }) {
  if (!text) return null;

  const paragraphs = text.split('\n\n');

  return (
    <div className="faq-formatted-answer">
      {paragraphs.map((para, pIdx) => {
        const lines = para.split('\n').filter(l => l.trim().length > 0);
        if (lines.length === 0) return null;

        const firstLine = lines[0].trim();

        // 1. Detect Callout Alert Cards (Tip, Fix, Formula, Warning, Diagnosis, Recommendation)
        const isCallout = /^(Tip|Pro Tip|Fix|How to Fix|Diagnosis|Formula|Practical Conversion Formula|Key Takeaways?|Recommendation|Warning|Why You Must Use One):/i.test(firstLine);

        if (isCallout) {
          const match = firstLine.match(/^(Tip|Pro Tip|Fix|How to Fix|Diagnosis|Formula|Practical Conversion Formula|Key Takeaways?|Recommendation|Warning|Why You Must Use One):/i);
          const calloutType = match ? match[1] : 'Tip';
          const calloutBody = para.replace(/^(Tip|Pro Tip|Fix|How to Fix|Diagnosis|Formula|Practical Conversion Formula|Key Takeaways?|Recommendation|Warning|Why You Must Use One):\s*/i, '');
          const calloutLines = calloutBody.split('\n').filter(l => l.trim().length > 0);

          let icon = <Sparkles size={16} className="text-cyan" />;
          let badgeClass = 'callout-cyan';
          let displayCalloutType = calloutType;

          if (/fix|how to fix/i.test(calloutType)) {
            icon = <Zap size={16} className="text-emerald" />;
            badgeClass = 'callout-emerald';
            displayCalloutType = t.fix || calloutType;
          } else if (/formula/i.test(calloutType)) {
            icon = <Lightbulb size={16} className="text-purple" />;
            badgeClass = 'callout-purple';
            displayCalloutType = t.formula || calloutType;
          } else if (/diagnosis/i.test(calloutType)) {
            icon = <Lightbulb size={16} className="text-purple" />;
            badgeClass = 'callout-purple';
            displayCalloutType = t.diagnosis || calloutType;
          } else if (/warning/i.test(calloutType)) {
            icon = <AlertTriangle size={16} className="text-amber" />;
            badgeClass = 'callout-amber';
            displayCalloutType = t.warning || calloutType;
          } else if (/tip/i.test(calloutType)) {
            displayCalloutType = t.proTip || t.tip || calloutType;
          }

          return (
            <div key={pIdx} className={`faq-callout-box ${badgeClass}`}>
              <div className="callout-header">
                {icon}
                <span className="callout-tag">{displayCalloutType}</span>
              </div>
              <div className="callout-content">
                {calloutLines.map((cLine, cIdx) => (
                  <div key={cIdx} className="callout-line">
                    {renderHighlightedText(cLine)}
                  </div>
                ))}
              </div>
            </div>
          );
        }

        // 2. Check if paragraph contains bullet lines or numbered lines
        const hasBullets = lines.some(l => /^[-•*]|\d+\./.test(l.trim()));

        if (hasBullets) {
          return (
            <div key={pIdx} className="faq-bullet-group">
              {lines.map((line, lIdx) => {
                const trimmed = line.trim();
                const isBullet = /^[-•*]/.test(trimmed);
                const isNumbered = /^\d+\./.test(trimmed);

                if (isBullet) {
                  const cleanText = trimmed.replace(/^[-•*]\s*/, '');
                  return (
                    <div key={lIdx} className="faq-bullet-item">
                      <span className="faq-bullet-dot" />
                      <span className="faq-bullet-text">
                        {renderHighlightedText(cleanText)}
                      </span>
                    </div>
                  );
                }

                if (isNumbered) {
                  const numMatch = trimmed.match(/^(\d+)\.\s*/);
                  const numStr = numMatch ? numMatch[1] : `${lIdx + 1}`;
                  const cleanText = trimmed.replace(/^\d+\.\s*/, '');
                  return (
                    <div key={lIdx} className="faq-bullet-item faq-numbered-item">
                      <span className="faq-bullet-num">#{numStr}</span>
                      <span className="faq-bullet-text">
                        {renderHighlightedText(cleanText)}
                      </span>
                    </div>
                  );
                }

                // If line ends with a colon or is a section subhead
                if (trimmed.endsWith(':') || lIdx === 0) {
                  return (
                    <h5 key={lIdx} className="faq-sub-heading">
                      {trimmed}
                    </h5>
                  );
                }

                return (
                  <p key={lIdx} className="faq-standard-para">
                    {renderHighlightedText(trimmed)}
                  </p>
                );
              })}
            </div>
          );
        }

        // 3. Normal Standard Paragraph with Inline Highlights
        return (
          <p key={pIdx} className="faq-standard-para">
            {renderHighlightedText(para)}
          </p>
        );
      })}
    </div>
  );
}

export default function FAQ({ lang = 'en' }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(10);
  const t = getTranslations(lang);

  // Filter FAQs based on search query and category
  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesQuery = !searchQuery.trim() || 
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  // Sliced list based on visibleCount pagination
  const displayedFaqs = useMemo(() => {
    return filteredFaqs.slice(0, visibleCount);
  }, [filteredFaqs, visibleCount]);

  const hasMore = visibleCount < filteredFaqs.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 10, filteredFaqs.length));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleCount(10);
    setOpenIndex(0);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setVisibleCount(10);
    setOpenIndex(0);
  };

  return (
    <div className="glass-card faq-card">
      {/* Top Header */}
      <div className="faq-header">
        <div className="faq-title-wrap">
          <div className="faq-icon-box">
            <HelpCircle size={24} className="text-cyan" />
          </div>
          <div>
            <div className="faq-title-row">
              <h3 className="faq-title">{t.faqTitle}</h3>
              <span className="faq-badge-count">{t.faqBadge || "115+ FAQs"}</span>
            </div>
            <span className="faq-subtitle">{t.faqSubtitle}</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="faq-search-wrap">
          <Search size={16} className="faq-search-icon" />
          <input 
            type="text"
            placeholder={t.searchFaqPlaceholder || t.faqSearchPlaceholder || "Search 115+ questions..."}
            value={searchQuery}
            onChange={handleSearchChange}
            className="faq-search-input"
          />
          {searchQuery && (
            <button className="faq-search-clear" onClick={() => setSearchQuery('')}>✕</button>
          )}
        </div>
      </div>

      {/* Category Pills Filter */}
      <div className="faq-categories-row">
        <div className="category-scroll-wrap">
          {FAQ_CATEGORIES.map(cat => {
            const isSelected = selectedCategory === cat;
            const categoryKey = 'cat' + cat.replace(/[^a-zA-Z0-9]/g, '');
            const categoryLabel = cat === 'All' ? (t.all || 'All') : (t[categoryKey] || cat);
            return (
              <button
                key={cat}
                className={`category-pill ${isSelected ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat === 'All' && <Filter size={12} />}
                <span>{categoryLabel}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Counter Status */}
      <div className="faq-status-bar">
        <span className="faq-counter-text">
          {Math.min(visibleCount, filteredFaqs.length)} / {filteredFaqs.length}
        </span>
        {selectedCategory !== 'All' && (
          <span className="faq-active-filter-badge">
            {selectedCategory}
          </span>
        )}
      </div>

      {/* Accordion List */}
      <div className="faq-accordion-list">
        {displayedFaqs.length === 0 ? (
          <div className="faq-empty-state">
            <HelpCircle size={40} className="text-muted" />
            <h4>{t.noQuestionsFound || "No questions found matching your search"}</h4>
            <button className="btn-secondary" onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}>
              {t.resetDefaults || "Reset Filters"}
            </button>
          </div>
        ) : (
          displayedFaqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            const itemNumber = item.id < 10 ? `0${item.id}` : `${item.id}`;
            return (
              <div key={item.id} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button 
                  className="faq-question-btn" 
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                >
                  <div className="faq-q-left">
                    <span className="faq-q-number">#{itemNumber}</span>
                    <span className="faq-q-category-tag">{item.category}</span>
                  </div>
                  <span className="faq-q-text">{item.q}</span>
                  <div className={`faq-chevron-wrap ${isOpen ? 'rotate' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-answer-container">
                    <div className="faq-answer-content">
                      <FormattedFAQAnswer text={item.a} t={t} />
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Load More Button or Completed Indicator */}
      {filteredFaqs.length > 0 && (
        <div className="faq-pagination-footer">
          {hasMore ? (
            <div className="faq-load-more-row">
              <button className="btn-secondary faq-load-more-btn" onClick={handleLoadMore}>
                <PlusCircle size={16} />
                <span>{t.loadMoreFaqs || t.loadMore || "Load More"}</span>
              </button>
            </div>
          ) : (
            <div className="faq-all-loaded">
              <CheckCircle2 size={18} className="text-emerald" />
              <span>{t.telemetryVerified} ({filteredFaqs.length})</span>
            </div>
          )}
        </div>
      )}

      <style>{`
        .faq-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
          border-radius: var(--radius-md);
        }

        .faq-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 22px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .faq-title-wrap {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .faq-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: var(--radius-sm);
          background: rgba(0, 240, 255, 0.1);
          border: 1px solid rgba(0, 240, 255, 0.25);
          flex-shrink: 0;
        }

        .faq-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .faq-title {
          font-size: 1.45rem;
          font-weight: 900;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }

        .faq-badge-count {
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          background: rgba(0, 229, 255, 0.12);
          border: 1px solid rgba(0, 229, 255, 0.3);
          color: var(--accent-cyan);
          padding: 3px 10px;
          border-radius: var(--radius-full);
        }

        .faq-subtitle {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-top: 2px;
          display: block;
        }

        .faq-search-wrap {
          position: relative;
          display: flex;
          align-items: center;
          min-width: 280px;
        }

        .faq-search-icon {
          position: absolute;
          left: 14px;
          color: var(--text-tertiary);
          pointer-events: none;
        }

        .faq-search-input {
          width: 100%;
          padding: 10px 36px 10px 38px;
          font-size: 0.9rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          color: var(--text-primary);
          transition: all var(--transition-fast);
        }

        .faq-search-input:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 0 3px var(--accent-cyan-glow);
          outline: none;
        }

        .faq-search-clear {
          position: absolute;
          right: 12px;
          background: none;
          border: none;
          color: var(--text-tertiary);
          cursor: pointer;
          font-size: 0.8rem;
          padding: 4px;
        }

        .faq-categories-row {
          width: 100%;
          overflow-x: auto;
          padding-bottom: 4px;
        }

        .category-scroll-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: max-content;
        }

        .category-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-secondary);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }

        .category-pill:hover {
          color: var(--text-primary);
          border-color: var(--border-color-hover);
          transform: translateY(-1px);
        }

        .category-pill.active {
          background: var(--accent-cyan);
          color: #ffffff;
          border-color: var(--accent-cyan);
          box-shadow: 0 4px 14px var(--accent-cyan-glow);
        }

        .faq-status-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 4px;
          font-size: 0.82rem;
          color: var(--text-tertiary);
        }

        .faq-status-bar strong {
          color: var(--text-primary);
        }

        .faq-active-filter-badge {
          background: var(--bg-tertiary);
          padding: 2px 10px;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          border: 1px solid var(--border-color);
        }

        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-item {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          overflow: hidden;
          transition: all var(--transition-fast);
        }

        .faq-item:hover {
          border-color: var(--border-color-hover);
        }

        .faq-item.open {
          border-color: var(--accent-cyan);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .faq-question-btn {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 18px 22px;
          text-align: left;
          gap: 16px;
          background: none;
          border: none;
          cursor: pointer;
          user-select: none;
        }

        .faq-q-left {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .faq-q-number {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 800;
          color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.08);
          padding: 2px 8px;
          border-radius: var(--radius-xs);
        }

        .faq-q-category-tag {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--text-tertiary);
          background: var(--bg-tertiary);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .faq-q-text {
          flex: 1;
          font-size: 1.02rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.4;
        }

        .faq-chevron-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          transition: transform 0.25s ease, background-color var(--transition-fast);
          flex-shrink: 0;
        }

        .faq-chevron-wrap.rotate {
          transform: rotate(180deg);
          background: var(--accent-cyan);
          color: #ffffff;
        }

        .faq-answer-container {
          border-top: 1px solid var(--border-light);
          padding: 18px 24px 22px 24px;
          background: var(--bg-tertiary);
          animation: fadeIn 0.25s ease-out;
        }

        .faq-answer-content {
          padding-left: 8px;
          border-left: 3px solid var(--accent-cyan);
        }

        /* Formatted Answer Layout */
        .faq-formatted-answer {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .faq-standard-para {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin: 0;
        }

        .faq-bullet-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin: 4px 0;
        }

        .faq-sub-heading {
          font-size: 0.86rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: 0.03em;
          margin: 6px 0 2px 0;
          text-transform: uppercase;
        }

        .faq-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 7px 12px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xs);
          transition: all var(--transition-fast);
        }

        .faq-bullet-item:hover {
          border-color: var(--border-color-hover);
          transform: translateX(2px);
        }

        .faq-bullet-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 6px var(--accent-cyan-glow);
          margin-top: 7px;
          flex-shrink: 0;
        }

        .faq-bullet-text {
          font-size: 0.92rem;
          line-height: 1.6;
          color: var(--text-secondary);
        .faq-highlight-term {
          color: var(--accent-cyan);
          font-weight: 800;
          margin-right: 4px;
        }

        .faq-highlight-bold {
          color: var(--text-primary);
          font-weight: 800;
        }

        .faq-bullet-num {
          font-family: var(--font-mono);
          font-size: 0.76rem;
          font-weight: 800;
          color: var(--accent-purple);
          background: rgba(139, 92, 246, 0.12);
          border: 1px solid rgba(139, 92, 246, 0.25);
          padding: 2px 6px;
          border-radius: 4px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .faq-numbered-item {
          background: rgba(139, 92, 246, 0.03);
          border-color: rgba(139, 92, 246, 0.18);
        }

        .faq-numbered-item:hover {
          border-color: rgba(139, 92, 246, 0.4);
        }

        /* Callout Highlight Cards */
        .faq-callout-box {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          margin-top: 4px;
        }

        .callout-cyan {
          background: rgba(0, 240, 255, 0.06);
          border: 1px solid rgba(0, 240, 255, 0.25);
          box-shadow: 0 4px 16px rgba(0, 240, 255, 0.08);
        }

        .callout-emerald {
          background: rgba(16, 185, 129, 0.06);
          border: 1px solid rgba(16, 185, 129, 0.25);
          box-shadow: 0 4px 16px rgba(16, 185, 129, 0.08);
        }

        .callout-purple {
          background: rgba(139, 92, 246, 0.06);
          border: 1px solid rgba(139, 92, 246, 0.25);
          box-shadow: 0 4px 16px rgba(139, 92, 246, 0.08);
        }

        .callout-amber {
          background: rgba(245, 158, 11, 0.06);
          border: 1px solid rgba(245, 158, 11, 0.25);
          box-shadow: 0 4px 16px rgba(245, 158, 11, 0.08);
        }

        .callout-header {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .callout-tag {
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          color: var(--text-primary);
        }

        .callout-content {
          font-size: 0.92rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .callout-line {
          margin: 3px 0;
        }

        .faq-pagination-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 12px;
        }

        .btn-load-more {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 32px;
          font-size: 1rem;
          font-weight: 800;
          color: #ffffff;
          background: var(--grad-button);
          border: none;
          border-radius: var(--radius-full);
          cursor: pointer;
          box-shadow: var(--shadow-button);
          transition: all var(--transition-fast);
        }

        .btn-load-more:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0, 240, 255, 0.4);
        }

        .btn-load-more:active {
          transform: translateY(1px);
        }

        .faq-all-loaded {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-secondary);
        }

        .faq-empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 48px 24px;
          gap: 12px;
        }

        .faq-empty-state h4 {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .faq-empty-state p {
          font-size: 0.9rem;
          color: var(--text-tertiary);
          max-width: 400px;
        }

        [data-theme="light"] .faq-item.open {
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
        }

        [data-theme="light"] .faq-icon-box {
          background: rgba(2, 132, 199, 0.08);
          border-color: rgba(2, 132, 199, 0.25);
        }

        [data-theme="light"] .faq-q-number {
          background: rgba(2, 132, 199, 0.08);
          color: #0284c7;
        }

        [data-theme="light"] .faq-highlight-term {
          color: #0284c7;
        }

        [data-theme="light"] .faq-bullet-item {
          background: #ffffff;
          border-color: #e2e8f0;
        }

        [data-theme="light"] .callout-cyan {
          background: rgba(2, 132, 199, 0.07);
          border-color: rgba(2, 132, 199, 0.3);
        }

        [data-theme="light"] .callout-emerald {
          background: rgba(5, 150, 105, 0.07);
          border-color: rgba(5, 150, 105, 0.3);
        }

        [data-theme="light"] .callout-purple {
          background: rgba(124, 58, 237, 0.07);
          border-color: rgba(124, 58, 237, 0.3);
        }

        [data-theme="light"] .btn-load-more {
          background: linear-gradient(135deg, #0284c7 0%, #2563eb 50%, #4f46e5 100%);
          box-shadow: 0 8px 24px rgba(2, 132, 199, 0.35);
        }

        @media (max-width: 768px) {
          .faq-card {
            padding: 20px 16px;
          }
          .faq-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .faq-search-wrap {
            width: 100%;
          }
          .faq-question-btn {
            padding: 14px 16px;
            gap: 12px;
          }
          .faq-q-text {
            font-size: 0.94rem;
          }
          .faq-q-category-tag {
            display: none;
          }
          .faq-answer-container {
            padding: 14px 16px 18px 16px;
          }
          .btn-load-more {
            width: 100%;
            padding: 14px 20px;
          }
        }
      `}</style>
    </div>
  );
}
