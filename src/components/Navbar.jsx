import React, { useState, useRef, useEffect } from 'react';
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
  Check
} from 'lucide-react';
import { translations } from '../translations/i18n';

const LANGUAGES = [
  { code: 'en', label: 'English', short: 'EN', flag: '🇺🇸' },
  { code: 'hi', label: 'हिन्दी', short: 'HI', flag: '🇮🇳' },
  { code: 'es', label: 'Español', short: 'ES', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', short: 'FR', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', short: 'DE', flag: '🇩🇪' },
  { code: 'ja', label: '日本語', short: 'JA', flag: '🇯🇵' },
];

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
  const langMenuRef = useRef(null);
  const t = translations[lang] || translations.en;

  const currentLangObj = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];

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
            <span className="brand-badge">PRO</span>
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

        {/* Action Controls (Custom Language Dropdown, Theme, Settings) */}
        <div className="nav-actions">
          {/* Custom Sleek Language Selector */}
          <div className="custom-lang-wrapper" ref={langMenuRef}>
            <button 
              className={`custom-lang-btn ${langMenuOpen ? 'active' : ''}`}
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              aria-label="Select Language"
              title="Change Language"
            >
              <Globe size={15} className="lang-icon" />
              <span className="lang-code-text">{currentLangObj.short}</span>
              <ChevronDown size={14} className={`chevron-icon ${langMenuOpen ? 'rotate' : ''}`} />
            </button>

            {/* Language Dropdown Menu */}
            {langMenuOpen && (
              <div className="custom-lang-dropdown glass-card">
                <div className="dropdown-header">Select Language</div>
                <div className="dropdown-list">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      className={`lang-option-btn ${lang === l.code ? 'selected' : ''}`}
                      onClick={() => handleLanguageSelect(l.code)}
                    >
                      <span className="lang-flag">{l.flag}</span>
                      <span className="lang-option-label">{l.label}</span>
                      {lang === l.code && <Check size={14} className="lang-check-icon" />}
                    </button>
                  ))}
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
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}

            {/* Mobile Language Bar */}
            <div className="mobile-lang-bar">
              <span className="mobile-lang-title">Language:</span>
              <div className="mobile-lang-pills">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    className={`mobile-lang-pill ${lang === l.code ? 'active' : ''}`}
                    onClick={() => handleLanguageSelect(l.code)}
                  >
                    <span>{l.flag} {l.short}</span>
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
          gap: 16px;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          user-select: none;
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
          gap: 8px;
        }

        .brand-name {
          font-size: 1.35rem;
          font-weight: 900;
          letter-spacing: -0.035em;
          background: var(--grad-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .brand-badge {
          font-size: 0.65rem;
          font-weight: 900;
          padding: 2px 6px;
          border-radius: 4px;
          background: rgba(0, 229, 255, 0.15);
          color: var(--accent-cyan);
          border: 1px solid rgba(0, 229, 255, 0.3);
          letter-spacing: 0.08em;
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
          gap: 10px;
        }

        /* Custom Language Selector */
        .custom-lang-wrapper {
          position: relative;
        }

        .custom-lang-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
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

        .custom-lang-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          width: 170px;
          background: var(--bg-card-solid);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 6px;
          box-shadow: var(--shadow-lg);
          z-index: 1000;
          animation: slideUp 0.18s ease-out;
        }

        .dropdown-header {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 6px 10px 4px;
        }

        .dropdown-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .lang-option-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          padding: 8px 10px;
          border-radius: var(--radius-xs);
          color: var(--text-primary);
          font-size: 0.85rem;
          font-weight: 600;
          background: transparent;
          cursor: pointer;
          transition: all var(--transition-fast);
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
          font-size: 1rem;
        }

        .lang-option-label {
          flex: 1;
          text-align: left;
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
          padding: 16px 0;
          animation: slideUp 0.2s ease-out;
        }

        .mobile-drawer-inner {
          display: flex;
          flex-direction: column;
          gap: 8px;
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
        }

        .mobile-nav-link.active {
          color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.1);
        }

        .mobile-lang-bar {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .mobile-lang-title {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--text-tertiary);
          text-transform: uppercase;
        }

        .mobile-lang-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .mobile-lang-pill {
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 0.8rem;
          font-weight: 700;
        }

        .mobile-lang-pill.active {
          background: var(--accent-cyan);
          color: #000000;
          border-color: var(--accent-cyan);
        }

        @media (max-width: 960px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-btn {
            display: inline-flex;
          }
        }
      `}</style>
    </header>
  );
}
