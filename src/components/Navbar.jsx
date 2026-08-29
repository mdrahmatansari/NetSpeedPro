import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  Activity,
  History,
  Server,
  ShieldCheck,
  BarChart2,
  HelpCircle,
  Info,
  Settings,
  Sun,
  Moon,
  Menu,
  X,
  Globe,
  ChevronDown,
  Check,
  Search
} from 'lucide-react';
import { translations, LANGUAGES } from '../translations/i18n';
import CountryFlag from './CountryFlag';

export default function Navbar({
  activeTab,
  setActiveTab,
  theme,
  toggleTheme,
  lang,
  setLang,
  openSettings,
  isTesting
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [langSearch, setLangSearch] = useState('');
  const langMenuRef = useRef(null);
  const t = translations[lang] || translations.en;

  const currentLangObj = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];

  const filteredLanguages = useMemo(() => {
    if (!langSearch.trim()) return LANGUAGES;
    const q = langSearch.toLowerCase();
    return LANGUAGES.filter(l =>
      l.label.toLowerCase().includes(q) ||
      l.native.toLowerCase().includes(q) ||
      l.code.toLowerCase().includes(q) ||
      l.region.toLowerCase().includes(q)
    );
  }, [langSearch]);

  const navItems = [
    { id: 'speedtest', label: t.navSpeedTest, icon: Activity },
    { id: 'history', label: t.navHistory, icon: History },
    { id: 'diagnostics', label: t.navDiagnostics, icon: ShieldCheck },
    { id: 'compare', label: t.navCompare, icon: BarChart2 },
    { id: 'servers', label: t.navServers, icon: Server },
    { id: 'faq', label: t.navFAQ, icon: HelpCircle },
    { id: 'about', label: t.navAbout, icon: Info }
  ];

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageSelect = (code) => {
    setLang(code);
    setLangMenuOpen(false);
    setLangSearch('');
  };

  return (
    <header className="navbar-wrapper">
      <div className="container navbar-container">
        {/* Brand Logo */}
        <div className="brand-logo" onClick={() => handleNavClick('speedtest')}>
          <div className="brand-icon-wrapper">
            <Activity className="brand-icon" size={22} />
            <div className="brand-pulse" />
          </div>
          <div className="brand-text">
            <span className="brand-name">{t.brand}</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
                disabled={isTesting && item.id !== 'speedtest'}
                title={item.label}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls (Custom 24-Language Dropdown, Theme, Settings) */}
        <div className="nav-actions">
          {/* Custom Sleek Language Selector */}
          <div className="custom-lang-wrapper" ref={langMenuRef}>
            <button
              className={`custom-lang-btn ${langMenuOpen ? 'active' : ''}`}
              onClick={() => {
                setLangMenuOpen(!langMenuOpen);
                setLangSearch('');
              }}
              aria-label="Select Language"
              title="Change Language"
            >
              <Globe size={15} className="lang-icon" />
              <CountryFlag country={currentLangObj.country} fallback={currentLangObj.flag} size="small" />
              <span className="lang-code-text">{currentLangObj.short}</span>
              <ChevronDown size={14} className={`chevron-icon ${langMenuOpen ? 'rotate' : ''}`} />
            </button>

            {/* Language Dropdown Menu (44 Languages with Search) */}
            {langMenuOpen && (
              <div className="custom-lang-dropdown glass-card">
                <div className="dropdown-header-row">
                  <span className="dropdown-header-title">Select Language ({LANGUAGES.length})</span>
                  <span className="dropdown-header-badge">{LANGUAGES.length} Available</span>
                </div>

                {/* Instant Search Bar */}
                <div className="lang-search-box">
                  <Search size={13} className="lang-search-ico" />
                  <input
                    type="text"
                    placeholder="Search language..."
                    value={langSearch}
                    onChange={(e) => setLangSearch(e.target.value)}
                    className="lang-search-input"
                    autoFocus
                  />
                  {langSearch && (
                    <button className="lang-search-clear" onClick={() => setLangSearch('')}>✕</button>
                  )}
                </div>

                <div className="dropdown-list">
                  {filteredLanguages.length === 0 ? (
                    <div className="lang-no-match">No language found</div>
                  ) : (
                    filteredLanguages.map((l) => (
                      <button
                        key={l.code}
                        className={`lang-option-btn ${lang === l.code ? 'selected' : ''}`}
                        onClick={() => handleLanguageSelect(l.code)}
                      >
                        <CountryFlag country={l.country} fallback={l.flag} size="normal" />
                        <div className="lang-names-col">
                          <span className="lang-native-name">{l.native}</span>
                          <span className="lang-english-label">{l.label}</span>
                        </div>
                        {lang === l.code && <Check size={14} className="lang-check-icon" />}
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Theme Toggle Button */}
          <button
            className="btn-icon theme-toggle-btn"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Settings Button */}
          <button
            className="btn-icon settings-btn"
            onClick={openSettings}
            title={t.settings}
            aria-label="Open Settings"
          >
            <Settings size={18} />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            className="btn-icon mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="container mobile-drawer-inner">
            {/* Quick Mobile Action Bar (Theme & Settings) */}
            <div className="mobile-quick-actions">
              <button
                className="mobile-quick-btn"
                onClick={toggleTheme}
              >
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>

              <button
                className="mobile-quick-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openSettings();
                }}
              >
                <Settings size={17} />
                <span>{t.settings}</span>
              </button>
            </div>

            {/* Navigation links */}
            <div className="mobile-nav-links-list">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                    disabled={isTesting && item.id !== 'speedtest'}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Language Bar (44 Languages Scrollable Grid) */}
            <div className="mobile-lang-bar">
              <div className="mobile-lang-header">
                <span className="mobile-lang-title">Choose Language ({LANGUAGES.length}):</span>
                <span className="mobile-lang-current">
                  <CountryFlag country={currentLangObj.country} fallback={currentLangObj.flag} size="small" />
                  <span>{currentLangObj.native}</span>
                </span>
              </div>
              <div className="mobile-lang-scroll-grid">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    className={`mobile-lang-pill ${lang === l.code ? 'active' : ''}`}
                    onClick={() => handleLanguageSelect(l.code)}
                  >
                    <CountryFlag country={l.country} fallback={l.flag} size="small" />
                    <span className="pill-text">{l.native}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .navbar-wrapper {
          position: sticky;
          top: 0;
          z-index: 500;
          background: var(--bg-card);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid var(--border-color);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          transition: background var(--transition-normal);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
          gap: 12px;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          user-select: none;
          flex-shrink: 0;
        }

        .brand-icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background: linear-gradient(135deg, rgba(0, 229, 255, 0.18), rgba(139, 92, 246, 0.18));
          border: 1px solid rgba(0, 229, 255, 0.35);
          box-shadow: 0 0 16px rgba(0, 229, 255, 0.2);
          flex-shrink: 0;
        }

        .brand-icon {
          color: var(--accent-cyan);
        }

        .brand-pulse {
          position: absolute;
          inset: -2px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--accent-cyan);
          opacity: 0.5;
          animation: pulseGlow 2.5s infinite;
        }

        .brand-text {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .brand-name {
          font-size: clamp(1.15rem, 3.5vw, 1.35rem);
          font-weight: 900;
          letter-spacing: -0.035em;
          background: var(--grad-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          white-space: nowrap;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 8px 14px;
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          font-size: 0.88rem;
          font-weight: 700;
          transition: all var(--transition-fast);
        }

        .nav-link:hover:not(:disabled) {
          color: var(--text-primary);
          background: var(--bg-tertiary);
        }

        .nav-link.active {
          color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.1);
          border: 1px solid rgba(0, 229, 255, 0.25);
          box-shadow: 0 0 14px rgba(0, 229, 255, 0.15);
        }

        .nav-link:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        /* Custom Language Selector */
        .custom-lang-wrapper {
          position: relative;
        }

        .custom-lang-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 11px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .custom-lang-btn:hover, .custom-lang-btn.active {
          background: var(--bg-card-hover);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          box-shadow: 0 0 14px rgba(0, 229, 255, 0.15);
        }

        .lang-icon {
          color: var(--accent-cyan);
        }

        .lang-flag-preview {
          font-size: 0.95rem;
        }

        .lang-code-text {
          font-weight: 800;
          letter-spacing: 0.05em;
        }

        .chevron-icon {
          color: var(--text-tertiary);
          transition: transform var(--transition-fast);
        }

        .chevron-icon.rotate {
          transform: rotate(180deg);
        }

        /* 24-Language Dropdown Box */
        .custom-lang-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          width: 250px;
          background: var(--bg-card-solid);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 10px;
          box-shadow: var(--shadow-lg);
          z-index: 1000;
          animation: slideUp 0.18s ease-out;
        }

        .dropdown-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2px 4px 8px 4px;
          border-bottom: 1px solid var(--border-light);
        }

        .dropdown-header-title {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .dropdown-header-badge {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .lang-search-box {
          position: relative;
          display: flex;
          align-items: center;
          margin: 8px 0;
        }

        .lang-search-ico {
          position: absolute;
          left: 10px;
          color: var(--text-tertiary);
          pointer-events: none;
        }

        .lang-search-input {
          width: 100%;
          padding: 6px 26px 6px 30px;
          font-size: 0.8rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xs);
          color: var(--text-primary);
        }

        .lang-search-input:focus {
          border-color: var(--accent-cyan);
          outline: none;
        }

        .lang-search-clear {
          position: absolute;
          right: 8px;
          background: none;
          border: none;
          color: var(--text-tertiary);
          cursor: pointer;
          font-size: 0.75rem;
        }

        .dropdown-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
          max-height: 260px;
          overflow-y: auto;
          padding-right: 2px;
        }

        .dropdown-list::-webkit-scrollbar {
          width: 5px;
        }

        .dropdown-list::-webkit-scrollbar-thumb {
          background: var(--border-color);
          border-radius: 4px;
        }

        .lang-no-match {
          padding: 16px;
          text-align: center;
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }

        .lang-option-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 7px 8px;
          border-radius: var(--radius-xs);
          color: var(--text-primary);
          background: transparent;
          cursor: pointer;
          transition: all var(--transition-fast);
          border: none;
        }

        .lang-option-btn:hover {
          background: var(--bg-tertiary);
          color: var(--accent-cyan);
        }

        .lang-option-btn.selected {
          background: rgba(0, 229, 255, 0.12);
          color: var(--accent-cyan);
          font-weight: 800;
        }

        .lang-flag {
          font-size: 1.1rem;
        }

        .lang-names-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex: 1;
          line-height: 1.2;
        }

        .lang-native-name {
          font-size: 0.85rem;
          font-weight: 700;
        }

        .lang-english-label {
          font-size: 0.72rem;
          color: var(--text-tertiary);
        }

        .lang-check-icon {
          color: var(--accent-cyan);
        }

        /* Mobile Drawer Menu */
        .mobile-menu-btn {
          display: none;
        }

        .mobile-drawer {
          background: var(--bg-card-solid);
          border-bottom: 1px solid var(--border-color);
          padding: 16px 0 20px;
          animation: slideUp 0.2s ease-out;
          box-shadow: var(--shadow-md);
        }

        .mobile-drawer-inner {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .mobile-quick-actions {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-color);
        }

        .mobile-quick-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 14px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-size: 0.85rem;
          font-weight: 700;
        }

        .mobile-quick-btn:hover {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }

        .mobile-nav-links-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-weight: 700;
          text-align: left;
          width: 100%;
          min-height: 44px;
          transition: all var(--transition-fast);
        }

        .mobile-nav-link:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }

        .mobile-nav-link.active {
          color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.12);
          border: 1px solid rgba(0, 229, 255, 0.25);
        }

        .mobile-lang-bar {
          margin-top: 4px;
          padding-top: 14px;
          border-top: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .mobile-lang-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .mobile-lang-title {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .mobile-lang-current {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-cyan);
        }

        .mobile-lang-scroll-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
          max-height: 180px;
          overflow-y: auto;
          padding-right: 4px;
        }

        .mobile-lang-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 10px;
          border-radius: var(--radius-xs);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
        }

        .mobile-lang-pill.active {
          background: var(--accent-cyan);
          color: #000000;
          border-color: var(--accent-cyan);
        }

        .pill-flag {
          font-size: 0.95rem;
        }

        .pill-text {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        [data-theme="light"] .custom-lang-btn.active,
        [data-theme="light"] .custom-lang-btn:hover {
          border-color: #0284c7;
          color: #0284c7;
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.15);
        }

        [data-theme="light"] .lang-icon,
        [data-theme="light"] .lang-check-icon,
        [data-theme="light"] .dropdown-header-badge,
        [data-theme="light"] .mobile-lang-current {
          color: #0284c7;
        }

        [data-theme="light"] .dropdown-header-badge {
          background: rgba(2, 132, 199, 0.1);
        }

        [data-theme="light"] .lang-option-btn.selected {
          background: rgba(2, 132, 199, 0.1);
          color: #0284c7;
        }

        [data-theme="light"] .mobile-lang-pill.active {
          background: #0284c7;
          color: #ffffff;
          border-color: #0284c7;
        }

        @media (max-width: 960px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-btn {
            display: inline-flex;
          }
        }

        @media (max-width: 480px) {
          .navbar-container {
            height: 62px;
            gap: 8px;
          }
          .nav-actions {
            gap: 6px;
          }
          .btn-icon {
            width: 36px;
            height: 36px;
          }
          .brand-icon-wrapper {
            width: 34px;
            height: 34px;
          }
          .custom-lang-btn {
            padding: 7px 8px;
            font-size: 0.8rem;
          }
          .mobile-lang-scroll-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 360px) {
          .brand-name {
            font-size: 1.1rem;
          }
          .brand-icon-wrapper {
            width: 32px;
            height: 32px;
          }
          .nav-actions {
            gap: 4px;
          }
          .btn-icon {
            width: 33px;
            height: 33px;
          }
          .custom-lang-btn {
            padding: 6px 6px;
            font-size: 0.76rem;
            gap: 3px;
      `}</style>
    </header>
  );
}

