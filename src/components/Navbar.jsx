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
  Menu as MenuIcon,
  X,
  Globe,
  ChevronDown,
  Check,
  Search,
  BookOpen,
  Compass,
  Trophy,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { translations, LANGUAGES } from '../translations/i18n';
import CountryFlag from './CountryFlag';

export default function Navbar({
  activeTab,
  setActiveTab,
  onNavigate,
  theme,
  toggleTheme,
  lang,
  setLang,
  openSettings,
  isTesting
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const [langSearch, setLangSearch] = useState('');
  
  const langMenuRef = useRef(null);
  const menuDropdownRef = useRef(null);
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

  // Primary Desktop Top-Level Navigation Items
  const navItems = [
    { id: 'speedtest', path: '/', label: t.navSpeedTest, icon: Activity },
    { id: 'history', path: '/history', label: t.navHistory, icon: History },
    { id: 'diagnostics', path: '/diagnostics', label: t.navDiagnostics, icon: ShieldCheck },
    { id: 'compare', path: '/compare', label: t.navCompare, icon: BarChart2 },
    { id: 'servers', path: '/servers', label: t.navServers, icon: Server }
  ];

  // Comprehensive Menu Structure (LEARN, TOOLS, SUPPORT)
  const menuSections = [
    {
      title: 'LEARN',
      tag: 'EDUCATION',
      accent: 'cyan',
      items: [
        {
          id: 'key-terms',
          path: '/key-terms',
          label: 'Key Terms & Glossary',
          desc: '100+ networking terms, bandwidth & speed concepts',
          icon: BookOpen,
          badge: '100+ Terms'
        },
        {
          id: 'guides',
          path: '/guides',
          label: 'Guides & Masterclasses',
          desc: '19 step-by-step Wi-Fi, ping, router & 5G tutorials',
          icon: Compass,
          badge: '19 Guides'
        }
      ]
    },
    {
      title: 'TOOLS',
      tag: 'TELEMETRY',
      accent: 'blue',
      items: [
        {
          id: 'performance-directory',
          path: '/speedtest-performance-directory',
          label: 'Performance Directory',
          desc: 'Global ISP latency, consistency & speed metrics',
          icon: BarChart2,
          badge: 'Directory'
        },
        {
          id: 'global-index',
          path: '/speedtest-global-index',
          label: 'Global Index™',
          desc: 'Fixed broadband & 5G rankings across 50+ nations',
          icon: Globe,
          badge: '50+ Nations'
        },
        {
          id: 'speedtest-awards',
          path: '/speedtest-awards',
          label: 'Speedtest Awards™',
          desc: 'Official honors for fastest & most reliable networks',
          icon: Trophy,
          badge: '2026'
        }
      ]
    },
    {
      title: 'SUPPORT',
      tag: 'HELP & INFO',
      accent: 'purple',
      items: [
        {
          id: 'faq',
          path: '/faq',
          label: 'FAQ & Help Center',
          desc: 'Speed test methodology & troubleshooting answers',
          icon: HelpCircle,
          badge: 'Help'
        },
        {
          id: 'about',
          path: '/about',
          label: 'About NETSPEEDPRO',
          desc: 'Company background, leadership & infrastructure',
          icon: Info,
          badge: 'About'
        }
      ]
    }
  ];

  const isMenuTabActive = useMemo(() => {
    return [
      'key-terms',
      'guides',
      'performance-directory',
      'global-index',
      'speedtest-awards',
      'faq',
      'about'
    ].includes(activeTab);
  }, [activeTab]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setLangMenuOpen(false);
      }
      if (menuDropdownRef.current && !menuDropdownRef.current.contains(event.target)) {
        setMenuDropdownOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setLangMenuOpen(false);
        setMenuDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleNavClick = (id, path = null) => {
    setMobileMenuOpen(false);
    setMenuDropdownOpen(false);
    if (onNavigate) {
      onNavigate(path || (id === 'speedtest' ? '/' : `/${id}`));
    } else if (setActiveTab) {
      setActiveTab(id);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMenuItemClick = (item) => {
    setMenuDropdownOpen(false);
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(item.path);
    } else if (setActiveTab) {
      setActiveTab(item.id);
    }
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
        <div 
          className="brand-logo" 
          onClick={() => handleNavClick('speedtest', '/')}
          role="button"
          tabIndex={0}
          aria-label="NETSPEEDPRO Home"
          onKeyDown={(e) => e.key === 'Enter' && handleNavClick('speedtest', '/')}
        >
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
                type="button"
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id, item.path)}
                disabled={isTesting && item.id !== 'speedtest'}
                title={item.label}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </button>
            );
          })}

          {/* Desktop Menu Button with Dropdown */}
          <div className="menu-nav-wrapper" ref={menuDropdownRef}>
            <button
              type="button"
              className={`nav-link menu-btn ${menuDropdownOpen || isMenuTabActive ? 'active' : ''}`}
              onClick={() => {
                setMenuDropdownOpen(!menuDropdownOpen);
                setLangMenuOpen(false);
              }}
              aria-expanded={menuDropdownOpen}
              aria-haspopup="true"
              aria-label="Toggle Menu Navigation"
              title="Explore Menu: Learn, Tools, Support"
            >
              <MenuIcon size={16} />
              <span>Menu</span>
              <ChevronDown size={14} className={`chevron-icon ${menuDropdownOpen ? 'rotate' : ''}`} />
            </button>

            {/* Desktop Menu Dropdown Modal/Card */}
            {menuDropdownOpen && (
              <div 
                className="desktop-menu-dropdown glass-card"
                role="menu"
                aria-orientation="vertical"
              >
                {/* High-Tech Top Glow Highlight */}
                <div className="menu-top-glow" />

                <div className="menu-dropdown-header">
                  <div className="menu-header-left">
                    <div className="menu-header-badge">
                      <Sparkles size={13} className="text-cyan" />
                      <span>NETSPEEDPRO PLATFORM</span>
                    </div>
                    <span className="menu-header-sub">Network Telemetry, Knowledge Hub & Directory</span>
                  </div>
                  <div className="menu-header-right">
                    <span className="menu-esc-chip">ESC to close</span>
                  </div>
                </div>

                <div className="menu-sections-grid">
                  {menuSections.map((sec) => (
                    <div key={sec.title} className={`menu-section-col sec-${sec.accent}`}>
                      <div className="menu-section-title-wrap">
                        <div className="menu-sec-dot" />
                        <span className="menu-section-title">{sec.title}</span>
                        <span className="menu-section-tag">{sec.tag}</span>
                      </div>
                      <div className="menu-items-group">
                        {sec.items.map((item) => {
                          const Icon = item.icon;
                          const isItemActive = activeTab === item.id;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              className={`menu-dropdown-item ${isItemActive ? 'item-active' : ''}`}
                              onClick={() => handleMenuItemClick(item)}
                              role="menuitem"
                            >
                              <div className="menu-item-icon-box">
                                {Icon && <Icon size={17} />}
                              </div>
                              <div className="menu-item-text-box">
                                <div className="menu-item-name-row">
                                  <span className="menu-item-name">{item.label}</span>
                                  {item.badge && (
                                    <span className="menu-item-badge">{item.badge}</span>
                                  )}
                                  <ArrowRight size={13} className="menu-item-arrow" />
                                </div>
                                <span className="menu-item-desc">{item.desc}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sleek Bottom Spotlight Bar */}
                <div className="menu-dropdown-footer">
                  <div className="menu-footer-left">
                    <Activity size={14} className="text-emerald" />
                    <span>Real-time Gigabit Speed Testing & Latency Telemetry Engine</span>
                  </div>
                  <button 
                    type="button" 
                    className="menu-footer-action-btn"
                    onClick={() => handleNavClick('speedtest', '/')}
                  >
                    <span>Run Speed Test</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Action Controls (Custom Language Selector, Theme, Settings, Mobile Button) */}
        <div className="nav-actions">
          {/* Custom Sleek Language Selector */}
          <div className="custom-lang-wrapper" ref={langMenuRef}>
            <button
              type="button"
              className={`custom-lang-btn ${langMenuOpen ? 'active' : ''}`}
              onClick={() => {
                setLangMenuOpen(!langMenuOpen);
                setMenuDropdownOpen(false);
                setLangSearch('');
              }}
              aria-label="Select Language"
              title="Change Language"
              aria-expanded={langMenuOpen}
            >
              <Globe size={15} className="lang-icon" />
              <CountryFlag country={currentLangObj.country} fallback={currentLangObj.flag} size="small" />
              <span className="lang-code-text">{currentLangObj.short}</span>
              <ChevronDown size={14} className={`chevron-icon ${langMenuOpen ? 'rotate' : ''}`} />
            </button>

            {/* Language Dropdown Menu */}
            {langMenuOpen && (
              <div className="custom-lang-dropdown glass-card">
                <div className="dropdown-header-row">
                  <span className="dropdown-header-title">Select Language ({LANGUAGES.length})</span>
                  <span className="dropdown-header-badge">{LANGUAGES.length} Available</span>
                </div>

                {/* Search Bar */}
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
                    <button type="button" className="lang-search-clear" onClick={() => setLangSearch('')}>✕</button>
                  )}
                </div>

                <div className="dropdown-list">
                  {filteredLanguages.length === 0 ? (
                    <div className="lang-no-match">No language found</div>
                  ) : (
                    filteredLanguages.map((l) => (
                      <button
                        key={l.code}
                        type="button"
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
            type="button"
            className="btn-icon theme-toggle-btn"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Settings Button */}
          <button
            type="button"
            className="btn-icon settings-btn"
            onClick={openSettings}
            title={t.settings}
            aria-label="Open Settings"
          >
            <Settings size={18} />
          </button>

          {/* Mobile Hamburger / Menu Button */}
          <button
            type="button"
            className="btn-icon mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <div className="container mobile-drawer-inner">
            {/* Quick Mobile Action Bar (Theme & Settings) */}
            <div className="mobile-quick-actions">
              <button
                type="button"
                className="mobile-quick-btn"
                onClick={toggleTheme}
              >
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>

              <button
                type="button"
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

            {/* Main Navigation Links */}
            <div className="mobile-nav-links-list">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.id, item.path)}
                    disabled={isTesting && item.id !== 'speedtest'}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Categorized Menu Sections on Mobile (LEARN, TOOLS, SUPPORT) */}
            <div className="mobile-menu-sections-container">
              {menuSections.map((sec) => (
                <div key={sec.title} className="mobile-menu-sec-group">
                  <span className="mobile-menu-sec-heading">{sec.title}</span>
                  <div className="mobile-menu-sec-items">
                    {sec.items.map((item) => {
                      const Icon = item.icon;
                      const isItemActive = activeTab === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          className={`mobile-menu-item-btn ${isItemActive ? 'active' : ''}`}
                          onClick={() => handleMenuItemClick(item)}
                        >
                          <div className="mobile-item-ico-wrap">
                            {Icon && <Icon size={16} />}
                          </div>
                          <div className="mobile-item-info">
                            <div className="mobile-item-title-row">
                              <span className="mobile-item-title">{item.label}</span>
                              {item.badge && (
                                <span className="mobile-item-badge">{item.badge}</span>
                              )}
                            </div>
                            <span className="mobile-item-desc">{item.desc}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Language Bar */}
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
                    type="button"
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
          padding: 8px 13px;
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

        /* Desktop Menu Button & Dropdown */
        .menu-nav-wrapper {
          position: relative;
        }

        .menu-btn {
          cursor: pointer;
        }

        .desktop-menu-dropdown {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          width: 860px;
          max-width: calc(100vw - 24px);
          box-sizing: border-box;
          background: #0b1120;
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          border: 1px solid rgba(0, 240, 255, 0.25);
          border-radius: 12px;
          padding: 0;
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.85), 0 0 35px rgba(0, 240, 255, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          z-index: 1000;
          transform-origin: top right;
          animation: slideUp 0.16s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        .menu-top-glow {
          height: 2px;
          width: 100%;
          background: linear-gradient(90deg, transparent 0%, #00f0ff 50%, transparent 100%);
        }

        .menu-dropdown-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 18px 11px;
          background: rgba(255, 255, 255, 0.015);
          border-bottom: 1px solid var(--border-light);
          box-sizing: border-box;
          width: 100%;
        }

        .menu-header-left {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .menu-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--accent-cyan);
          background: rgba(0, 240, 255, 0.08);
          padding: 3px 10px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(0, 240, 255, 0.25);
        }

        .menu-header-sub {
          font-size: 0.76rem;
          color: var(--text-tertiary);
          font-weight: 500;
        }

        .menu-esc-chip {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--text-tertiary);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          padding: 2px 8px;
          border-radius: 4px;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }

        .menu-sections-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          padding: 14px 16px;
          box-sizing: border-box;
          width: 100%;
        }

        .menu-section-col {
          display: flex;
          flex-direction: column;
          gap: 6px;
          min-width: 0;
          width: 100%;
          box-sizing: border-box;
        }

        .menu-section-title-wrap {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 2px;
          padding: 0 2px;
          min-width: 0;
        }

        .menu-sec-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 8px var(--accent-cyan);
          flex-shrink: 0;
        }

        .sec-blue .menu-sec-dot {
          background: #38bdf8;
          box-shadow: 0 0 8px #38bdf8;
        }

        .sec-purple .menu-sec-dot {
          background: #a855f7;
          box-shadow: 0 0 8px #a855f7;
        }

        .menu-section-title {
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          text-transform: uppercase;
          white-space: nowrap;
        }

        .menu-section-tag {
          font-size: 0.60rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: var(--text-tertiary);
          margin-left: auto;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .menu-items-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          min-width: 0;
          width: 100%;
        }

        .menu-dropdown-item {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          padding: 8px 9px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          text-align: left;
          cursor: pointer;
          transition: all var(--transition-fast);
          width: 100%;
          min-width: 0;
          box-sizing: border-box;
        }

        .menu-dropdown-item:hover {
          background: rgba(0, 240, 255, 0.06);
          border-color: var(--accent-cyan);
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4), 0 0 12px rgba(0, 240, 255, 0.15);
        }

        .menu-dropdown-item.item-active {
          border-color: var(--accent-cyan);
          background: rgba(0, 240, 255, 0.1);
        }

        .menu-item-icon-box {
          width: 30px;
          height: 30px;
          border-radius: 7px;
          background: linear-gradient(135deg, rgba(0, 240, 255, 0.12), rgba(0, 112, 243, 0.12));
          border: 1px solid rgba(0, 240, 255, 0.25);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
          transition: all var(--transition-fast);
        }

        .menu-dropdown-item:hover .menu-item-icon-box {
          background: linear-gradient(135deg, rgba(0, 240, 255, 0.25), rgba(0, 112, 243, 0.25));
          border-color: var(--accent-cyan);
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
          transform: scale(1.04);
        }

        .sec-purple .menu-item-icon-box {
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.12), rgba(0, 112, 243, 0.12));
          border-color: rgba(168, 85, 247, 0.25);
          color: #c084fc;
        }

        .sec-purple .menu-dropdown-item:hover .menu-item-icon-box {
          border-color: #c084fc;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.3);
        }

        .menu-item-text-box {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
          min-width: 0;
          overflow: hidden;
        }

        .menu-item-name-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4px;
          min-width: 0;
          width: 100%;
        }

        .menu-item-name {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.25;
          min-width: 0;
          word-break: break-word;
        }

        .menu-item-badge {
          font-size: 0.58rem;
          font-weight: 800;
          color: var(--accent-cyan);
          background: rgba(0, 240, 255, 0.12);
          border: 1px solid rgba(0, 240, 255, 0.2);
          padding: 1px 5px;
          border-radius: 4px;
          white-space: nowrap;
          flex-shrink: 0;
          margin-left: auto;
        }

        .menu-item-arrow {
          color: var(--accent-cyan);
          opacity: 0;
          transform: translateX(-4px);
          transition: all var(--transition-fast);
          flex-shrink: 0;
          display: none;
        }

        .menu-dropdown-item:hover .menu-item-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .menu-item-desc {
          font-size: 0.70rem;
          line-height: 1.35;
          color: var(--text-tertiary);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          word-break: break-word;
        }

        .menu-dropdown-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 18px;
          background: rgba(0, 240, 255, 0.03);
          border-top: 1px solid var(--border-light);
          gap: 12px;
          box-sizing: border-box;
          width: 100%;
        }

        .menu-footer-left {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .menu-footer-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(0, 112, 243, 0.15));
          border: 1px solid rgba(0, 240, 255, 0.3);
          color: var(--accent-cyan);
          font-size: 0.76rem;
          font-weight: 800;
          cursor: pointer;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }

        .menu-footer-action-btn:hover {
          background: linear-gradient(135deg, rgba(0, 240, 255, 0.3), rgba(0, 112, 243, 0.3));
          box-shadow: 0 0 14px rgba(0, 240, 255, 0.3);
          transform: translateY(-1px);
        }

        [data-theme="light"] .desktop-menu-dropdown {
          background: #ffffff;
          border-color: #cbd5e1;
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.15), 0 0 0 1px rgba(15, 23, 42, 0.05);
        }

        [data-theme="light"] .menu-top-glow {
          background: linear-gradient(90deg, transparent 0%, #0284c7 50%, transparent 100%);
        }

        [data-theme="light"] .menu-dropdown-header {
          background: #f8fafc;
        }

        [data-theme="light"] .menu-header-badge {
          background: rgba(2, 132, 199, 0.1);
          border-color: rgba(2, 132, 199, 0.3);
          color: #0284c7;
        }

        [data-theme="light"] .menu-dropdown-item {
          background: #f8fafc;
          border-color: #e2e8f0;
        }

        [data-theme="light"] .menu-dropdown-item:hover {
          background: #f0f9ff;
          border-color: #0284c7;
          box-shadow: 0 6px 16px rgba(2, 132, 199, 0.12);
        }

        [data-theme="light"] .menu-dropdown-item.item-active {
          background: #e0f2fe;
          border-color: #0284c7;
        }

        [data-theme="light"] .menu-dropdown-footer {
          background: #f8fafc;
        }

        [data-theme="light"] .menu-footer-action-btn {
          background: linear-gradient(135deg, rgba(2, 132, 199, 0.1), rgba(79, 70, 229, 0.1));
          border-color: rgba(2, 132, 199, 0.3);
          color: #0284c7;
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

        /* Language Dropdown Box */
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
          padding: 16px 0 24px;
          animation: slideUp 0.2s ease-out;
          box-shadow: var(--shadow-md);
          max-height: calc(100vh - 70px);
          overflow-y: auto;
        }

        .mobile-drawer-inner {
          display: flex;
          flex-direction: column;
          gap: 16px;
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

        /* Mobile Menu Sections */
        .mobile-menu-sections-container {
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 12px 0;
          border-top: 1px solid var(--border-color);
        }

        .mobile-menu-sec-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .mobile-menu-sec-heading {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--accent-cyan);
          letter-spacing: 0.08em;
          padding-left: 4px;
          text-transform: uppercase;
        }

        .mobile-menu-sec-items {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .mobile-menu-item-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          text-align: left;
          min-height: 48px;
          cursor: pointer;
          transition: all var(--transition-fast);
          width: 100%;
        }

        .mobile-menu-item-btn:hover {
          border-color: var(--accent-cyan);
          background: var(--bg-card-hover);
        }

        .mobile-menu-item-btn.active {
          border-color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.12);
        }

        .mobile-item-ico-wrap {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: rgba(0, 229, 255, 0.1);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .mobile-item-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }

        .mobile-item-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
        }

        .mobile-item-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .mobile-item-badge {
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.12);
          padding: 1px 6px;
          border-radius: 4px;
        }

        .mobile-item-desc {
          font-size: 0.75rem;
          color: var(--text-tertiary);
          line-height: 1.3;
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
          min-height: 40px;
        }

        .mobile-lang-pill.active {
          background: var(--accent-cyan);
          color: #000000;
          border-color: var(--accent-cyan);
        }

        .pill-text {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        [data-theme="light"] .desktop-menu-dropdown {
          background: #ffffff;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 0 20px rgba(2, 132, 199, 0.1);
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
        [data-theme="light"] .mobile-lang-current,
        [data-theme="light"] .menu-header-badge,
        [data-theme="light"] .mobile-menu-sec-heading,
        [data-theme="light"] .menu-item-icon-box,
        [data-theme="light"] .mobile-item-ico-wrap {
          color: #0284c7;
        }

        [data-theme="light"] .menu-item-icon-box,
        [data-theme="light"] .mobile-item-ico-wrap,
        [data-theme="light"] .menu-item-badge,
        [data-theme="light"] .mobile-item-badge {
          background: rgba(2, 132, 199, 0.1);
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

        @media (max-width: 1080px) {
          .desktop-menu-dropdown {
            width: 580px;
          }
          .nav-link {
            padding: 8px 9px;
            font-size: 0.84rem;
          }
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
          .custom-lang-btn {
            padding: 6px 8px;
            font-size: 0.78rem;
          }
          .mobile-lang-scroll-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
