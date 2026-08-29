import React, { useState, useEffect, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Play, Square, AlertCircle, RotateCcw } from 'lucide-react';

import Navbar from './components/Navbar';
import Speedometer from './components/Speedometer';
import LiveGraph from './components/LiveGraph';
import ResultDashboard from './components/ResultDashboard';
import ConnectionInfo from './components/ConnectionInfo';
import ServerCard from './components/ServerCard';
import ServerModal from './components/ServerModal';
import NetworkDiagnostics from './components/NetworkDiagnostics';
import SpeedComparison from './components/SpeedComparison';
import TestHistory from './components/TestHistory';
import ShareModal from './components/ShareModal';
import SettingsModal from './components/SettingsModal';
import FAQ from './components/FAQ';
import About from './components/About';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import KeyTerms from './components/KeyTerms';
import Guides from './components/Guides';
import PerformanceDirectory from './components/PerformanceDirectory';
import GlobalIndex from './components/GlobalIndex';
import SpeedtestAwards from './components/SpeedtestAwards';
import Footer from './components/Footer';

import { translations } from './translations/i18n';
import { storageService } from './services/storage';
import { SpeedTestEngine } from './services/speedTestEngine';
import { exportService } from './services/exportService';
import { geoService } from './services/geoService';
import { serverService, DEFAULT_SERVERS } from './services/serverService';

// Native SPA Route Parser
function parseRoute(pathname) {
  const clean = pathname ? pathname.replace(/\/+$/, '') || '/' : '/';
  
  if (clean === '/' || clean === '/speedtest') {
    return { tab: 'speedtest', slug: null };
  }
  if (clean === '/key-terms') {
    return { tab: 'key-terms', slug: null };
  }
  if (clean === '/guides') {
    return { tab: 'guides', slug: null };
  }
  if (clean.startsWith('/guides/')) {
    const slug = clean.replace('/guides/', '');
    return { tab: 'guides', slug };
  }
  if (clean === '/speedtest-performance-directory' || clean === '/performance-directory') {
    return { tab: 'performance-directory', slug: null };
  }
  if (clean === '/speedtest-global-index' || clean === '/global-index') {
    return { tab: 'global-index', slug: null };
  }
  if (clean === '/speedtest-awards' || clean === '/awards') {
    return { tab: 'speedtest-awards', slug: null };
  }
  if (clean === '/faq') {
    return { tab: 'faq', slug: null };
  }
  if (clean === '/history') {
    return { tab: 'history', slug: null };
  }
  if (clean === '/diagnostics') {
    return { tab: 'diagnostics', slug: null };
  }
  if (clean === '/compare') {
    return { tab: 'compare', slug: null };
  }
  if (clean === '/servers') {
    return { tab: 'servers', slug: null };
  }
  if (clean === '/about') {
    return { tab: 'about', slug: null };
  }
  if (clean === '/privacy') {
    return { tab: 'privacy', slug: null };
  }
  if (clean === '/terms') {
    return { tab: 'terms', slug: null };
  }
  return { tab: 'speedtest', slug: null };
}

function getPathForTab(tab, slug = null) {
  switch (tab) {
    case 'key-terms': return '/key-terms';
    case 'guides': return slug ? `/guides/${slug}` : '/guides';
    case 'performance-directory': return '/speedtest-performance-directory';
    case 'global-index': return '/speedtest-global-index';
    case 'speedtest-awards': return '/speedtest-awards';
    case 'faq': return '/faq';
    case 'history': return '/history';
    case 'diagnostics': return '/diagnostics';
    case 'compare': return '/compare';
    case 'servers': return '/servers';
    case 'about': return '/about';
    case 'privacy': return '/privacy';
    case 'terms': return '/terms';
    case 'speedtest':
    default:
      return '/';
  }
}

export default function App() {
  // App Settings & Preferences
  const [settings, setSettings] = useState(() => storageService.getSettings());
  const [theme, setTheme] = useState(settings.theme || 'dark');
  const [lang, setLang] = useState(settings.language || 'en');

  // URL & Routing State
  const initialRoute = parseRoute(window.location.pathname);
  const [activeTab, setActiveTab] = useState(initialRoute.tab);
  const [guideSlug, setGuideSlug] = useState(initialRoute.slug);

  // Network & Server State
  const [ipInfo, setIpInfo] = useState(null);
  const [isLocating, setIsLocating] = useState(false);
  const [servers, setServers] = useState(DEFAULT_SERVERS);
  const [selectedServer, setSelectedServer] = useState(DEFAULT_SERVERS[0]);
  const [history, setHistory] = useState(() => storageService.getHistory());

  // Test Lifecycle State
  const [isTesting, setIsTesting] = useState(false);
  const [testPhase, setTestPhase] = useState('idle');
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const [livePing, setLivePing] = useState(0);
  const [liveJitter, setLiveJitter] = useState(0);
  const [downloadSamples, setDownloadSamples] = useState([]);
  const [uploadSamples, setUploadSamples] = useState([]);
  const [testResults, setTestResults] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // Modals
  const [isServerModalOpen, setIsServerModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [shareTargetResult, setShareTargetResult] = useState(null);

  const engineRef = useRef(null);
  const t = translations[lang] || translations.en;

  // Apply Theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Synchronize Browser Back / Forward History Navigation
  useEffect(() => {
    const handlePopState = () => {
      const { tab, slug } = parseRoute(window.location.pathname);
      setActiveTab(tab);
      setGuideSlug(slug);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Universal Navigation Dispatcher
  const navigateTo = useCallback((target, slug = null) => {
    let nextTab = target;
    let nextSlug = slug;
    let targetPath = target;

    if (typeof target === 'string' && target.startsWith('/')) {
      const parsed = parseRoute(target);
      nextTab = parsed.tab;
      nextSlug = parsed.slug;
      targetPath = target;
    } else {
      targetPath = getPathForTab(nextTab, nextSlug);
    }

    setActiveTab(nextTab);
    setGuideSlug(nextSlug);

    if (window.location.pathname !== targetPath) {
      window.history.pushState({ tab: nextTab, slug: nextSlug }, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Initial Data Fetching: Real IP & Location + Nearest Server Auto-Selection
  useEffect(() => {
    const initData = async () => {
      let realLoc = null;

      try {
        realLoc = await geoService.getRealLocation();
        setIpInfo(realLoc);
      } catch (err) {
        console.warn('Real location fetch failed:', err);
      }

      try {
        const loadedServers = await serverService.fetchServers();
        const serverList = (loadedServers && loadedServers.length > 0) ? loadedServers : DEFAULT_SERVERS;
        setServers(serverList);

        const nearest = serverService.findNearestServer(
          serverList,
          realLoc?.latitude,
          realLoc?.longitude,
          realLoc?.countryCode || 'IN'
        );
        setSelectedServer(nearest || serverList[0]);
      } catch (err) {
        console.warn('Server initialization error:', err);
        setServers(DEFAULT_SERVERS);
        setSelectedServer(DEFAULT_SERVERS[0]);
      }
    };

    initData();
  }, []);

  // Precise GPS Location Detection Handler
  const handleDetectGpsLocation = async () => {
    setIsLocating(true);
    try {
      const gpsLocation = await geoService.getPreciseGpsLocation(ipInfo);
      setIpInfo(gpsLocation);

      if (gpsLocation?.latitude && typeof gpsLocation.latitude === 'number') {
        const nearest = serverService.findNearestServer(
          servers,
          gpsLocation.latitude,
          gpsLocation.longitude,
          gpsLocation.countryCode
        );
        if (nearest) {
          setSelectedServer(nearest);
        }
      }
    } catch (e) {
      console.warn('GPS location detection error:', e);
    } finally {
      setIsLocating(false);
    }
  };

  const handleRefreshLocation = async () => {
    setIsLocating(true);
    try {
      const refreshed = await geoService.getRealLocation();
      setIpInfo(refreshed);
    } catch (e) {
      console.warn('Refresh location error:', e);
    } finally {
      setIsLocating(false);
    }
  };

  const handleUpdateSettings = (newSettings) => {
    const updated = storageService.saveSettings(newSettings);
    setSettings(updated);
    if (newSettings.theme) setTheme(newSettings.theme);
    if (newSettings.language) setLang(newSettings.language);
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    handleUpdateSettings({ theme: nextTheme });
  };

  // Start Speed Test Execution
  const startSpeedTest = () => {
    setErrorMessage(null);
    setIsTesting(true);
    setTestPhase('connecting');
    setCurrentSpeed(0);
    setLivePing(0);
    setLiveJitter(0);
    setDownloadSamples([]);
    setUploadSamples([]);
    setTestResults(null);

    const engine = new SpeedTestEngine({
      duration: settings.duration || 9,
      parallelStreams: settings.parallelStreams || 6,

      onPhaseChange: (phase) => {
        setTestPhase(phase);
      },

      onProgress: (data) => {
        if (data.phase === 'ping') {
          setLivePing(data.currentPing);
        } else if (data.phase === 'download') {
          setCurrentSpeed(data.currentSpeed);
          setDownloadSamples(prev => [...prev, { time: prev.length * 0.1, speed: data.currentSpeed }]);
        } else if (data.phase === 'upload') {
          setCurrentSpeed(data.currentSpeed);
          setUploadSamples(prev => [...prev, { time: prev.length * 0.1, speed: data.currentSpeed }]);
        }
      },

      onComplete: (results) => {
        setIsTesting(false);
        setTestPhase('complete');
        setCurrentSpeed(results.download);
        setLivePing(results.ping);
        setLiveJitter(results.jitter);

        const fullResult = {
          ...results,
          isp: ipInfo?.isp || 'Broadband ISP',
          ip: ipInfo?.ip || 'Protected',
          asn: ipInfo?.asn || 'AS-AUTO',
          server: selectedServer ? `${selectedServer.city}, ${selectedServer.country}` : 'Mumbai, India',
          connectionType: 'High-Speed Broadband / Fiber'
        };

        setTestResults(fullResult);

        // Save to history
        if (settings.saveHistory) {
          const updatedHistory = storageService.saveHistory(fullResult);
          setHistory(updatedHistory);
        }

        // Trigger confetti
        try {
          confetti({
            particleCount: 75,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch { }
      },

      onError: (err) => {
        setIsTesting(false);
        setTestPhase('error');
        setErrorMessage(err);
      }
    });

    engineRef.current = engine;
    engine.start();
  };

  const stopSpeedTest = () => {
    if (engineRef.current) {
      engineRef.current.stop();
    }
    setIsTesting(false);
    setTestPhase('idle');
  };

  const handleRetest = () => {
    navigateTo('/');
    startSpeedTest();
  };

  const handleDeleteHistory = (id) => {
    const updated = storageService.deleteHistoryItem(id);
    setHistory(updated);
  };

  const handleClearHistory = () => {
    const updated = storageService.clearHistory();
    setHistory(updated);
  };

  const openShareModal = (result) => {
    setShareTargetResult(result || testResults);
    setIsShareModalOpen(true);
  };

  return (
    <div className="app-layout">
      {/* Top Navbar with Menu system replacing FAQ */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(t) => navigateTo(t)}
        onNavigate={navigateTo}
        theme={theme}
        toggleTheme={toggleTheme}
        lang={lang}
        setLang={(l) => handleUpdateSettings({ language: l })}
        openSettings={() => setIsSettingsModalOpen(true)}
        isTesting={isTesting}
      />

      <main className="main-content">
        {/* VIEW 1: Main Speed Test UI & Homepage */}
        {activeTab === 'speedtest' && (
          <div className="container speedtest-page">
            {/* Hero Heading Section */}
            <section className="hero-section">
              <div className="hero-badge">
                <Sparkles size={14} className="text-cyan" />
                <span>Next-Generation Network Telemetry</span>
              </div>
              <h1 className="hero-heading">{t.heroTitle}</h1>
              <p className="hero-subtitle">{t.heroSubtitle}</p>
            </section>

            {/* Speedometer & Live Action Controls */}
            <section className="speedometer-section">
              <Speedometer
                currentSpeed={currentSpeed}
                phase={testPhase}
                unit={settings.unit}
                lang={lang}
                ping={livePing}
                jitter={liveJitter}
                serverName={selectedServer ? selectedServer.city : 'Auto Selected Node'}
                connectionType={ipInfo?.companyName || ipInfo?.isp || 'Broadband'}
              />

              {/* Main Call to Action Button */}
              <div className="test-action-container">
                {!isTesting ? (
                  <button
                    className="btn-primary start-test-btn"
                    onClick={startSpeedTest}
                    id="start-speedtest-btn"
                  >
                    <Play size={20} fill="currentColor" />
                    <span>{testPhase === 'complete' ? t.testAgain : t.startTest}</span>
                  </button>
                ) : (
                  <button
                    className="btn-danger stop-test-btn"
                    onClick={stopSpeedTest}
                    id="stop-speedtest-btn"
                  >
                    <Square size={18} fill="currentColor" />
                    <span>{t.stopTest}</span>
                  </button>
                )}

                <span className="browser-test-note">
                  {t.browserTested}
                </span>
              </div>
            </section>

            {/* Error Message Notice */}
            {errorMessage && (
              <div className="error-alert-banner">
                <AlertCircle size={20} />
                <div className="error-text">
                  <strong>Measurement Notice:</strong> {errorMessage}
                </div>
                <button className="btn-secondary" onClick={() => setErrorMessage(null)}>Dismiss</button>
              </div>
            )}

            {/* Real-time Dynamic Live Graph */}
            {(isTesting || downloadSamples.length > 0 || uploadSamples.length > 0) && (
              <section className="graph-section">
                <LiveGraph
                  downloadSamples={downloadSamples}
                  uploadSamples={uploadSamples}
                  phase={testPhase}
                  unit={settings.unit}
                  lang={lang}
                />
              </section>
            )}

            {/* Results Dashboard */}
            {testResults && testPhase === 'complete' && (
              <section className="results-section">
                <ResultDashboard
                  results={testResults}
                  unit={settings.unit}
                  lang={lang}
                  onRetest={handleRetest}
                  onOpenShare={() => openShareModal(testResults)}
                  onExportPdf={() => exportService.exportToPdf(testResults)}
                  onExportCsv={() => exportService.exportToCsv(testResults)}
                  onExportJson={() => exportService.exportToJson(testResults)}
                />
              </section>
            )}

            {/* Server Card & Connection Details */}
            <section className="grid-2 connection-server-grid">
              <ServerCard
                server={selectedServer}
                ipInfo={ipInfo}
                onOpenModal={() => setIsServerModalOpen(true)}
                lang={lang}
                ping={livePing}
              />
              <ConnectionInfo
                ipInfo={ipInfo}
                lang={lang}
                onDetectGps={handleDetectGpsLocation}
                onRefresh={handleRefreshLocation}
                isLocating={isLocating}
              />
            </section>

            {/* Speed Comparison Benchmarks */}
            <section className="compare-section">
              <SpeedComparison
                latestResult={testResults || history[0]}
                unit={settings.unit}
                lang={lang}
              />
            </section>

            {/* Network Diagnostics Card */}
            <section className="diagnostics-section">
              <NetworkDiagnostics
                latestResult={testResults || history[0]}
                lang={lang}
              />
            </section>

            {/* Test History Section */}
            <section className="history-section">
              <TestHistory
                history={history}
                onDelete={handleDeleteHistory}
                onClear={handleClearHistory}
                onExportCsv={() => exportService.exportToCsv(history)}
                onExportJson={() => exportService.exportToJson(history)}
                onExportPdf={(item) => exportService.exportToPdf(item)}
                onViewDetails={(item) => openShareModal(item)}
                unit={settings.unit}
                lang={lang}
              />
            </section>

            {/* FAQ Accordions on Homepage */}
            <section className="faq-section">
              <FAQ lang={lang} />
            </section>
          </div>
        )}

        {/* VIEW 2: Key Terms & Glossary Page */}
        {activeTab === 'key-terms' && (
          <KeyTerms onNavigate={navigateTo} lang={lang} />
        )}

        {/* VIEW 3: Guides Page (Hub & Reader) */}
        {activeTab === 'guides' && (
          <Guides activeGuideSlug={guideSlug} onNavigate={navigateTo} lang={lang} />
        )}

        {/* VIEW 4: Speedtest Performance Directory */}
        {activeTab === 'performance-directory' && (
          <PerformanceDirectory onNavigate={navigateTo} lang={lang} />
        )}

        {/* VIEW 5: Speedtest Global Index™ */}
        {activeTab === 'global-index' && (
          <GlobalIndex onNavigate={navigateTo} lang={lang} />
        )}

        {/* VIEW 6: Speedtest Awards™ */}
        {activeTab === 'speedtest-awards' && (
          <SpeedtestAwards onNavigate={navigateTo} lang={lang} />
        )}

        {/* VIEW 7: Dedicated FAQ Page (/faq) */}
        {activeTab === 'faq' && (
          <div className="container page-container">
            <FAQ lang={lang} />
          </div>
        )}

        {/* VIEW 8: History Full View */}
        {activeTab === 'history' && (
          <div className="container page-container">
            <TestHistory
              history={history}
              onDelete={handleDeleteHistory}
              onClear={handleClearHistory}
              onExportCsv={() => exportService.exportToCsv(history)}
              onExportJson={() => exportService.exportToJson(history)}
              onExportPdf={(item) => exportService.exportToPdf(item)}
              onViewDetails={(item) => openShareModal(item)}
              unit={settings.unit}
              lang={lang}
            />
          </div>
        )}

        {/* VIEW 9: Network Diagnostics Full View */}
        {activeTab === 'diagnostics' && (
          <div className="container page-container">
            <NetworkDiagnostics
              latestResult={testResults || history[0]}
              lang={lang}
            />
          </div>
        )}

        {/* VIEW 10: Speed Comparison Full View */}
        {activeTab === 'compare' && (
          <div className="container page-container">
            <SpeedComparison
              latestResult={testResults || history[0]}
              unit={settings.unit}
              lang={lang}
            />
          </div>
        )}

        {/* VIEW 11: Servers Full View */}
        {activeTab === 'servers' && (
          <div className="container page-container">
            <div className="glass-card servers-page-card">
              <div className="servers-page-header">
                <h3>Global & Regional Speed Test Servers</h3>
                <p>Select any node to benchmark connection latency and throughput.</p>
              </div>
              <div className="grid-3 server-cards-grid">
                {(servers && servers.length > 0 ? servers : DEFAULT_SERVERS).map((s) => (
                  <div
                    key={s.id}
                    className={`glass-panel server-node-item ${selectedServer?.id === s.id ? 'active-server' : ''}`}
                    onClick={() => {
                      setSelectedServer(s);
                      navigateTo('/');
                    }}
                  >
                    <div className="node-item-top">
                      <span className="node-city">{s.city}, {s.country}</span>
                      <span className="badge badge-emerald">Online</span>
                    </div>
                    <span className="node-sponsor">{s.sponsor}</span>
                    <button className="btn-secondary node-select-btn">
                      {selectedServer?.id === s.id ? 'Currently Selected' : 'Select Server'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VIEW 12: About Full View */}
        {activeTab === 'about' && (
          <div className="container page-container">
            <About lang={lang} />
          </div>
        )}

        {/* VIEW 13: Privacy Full View */}
        {activeTab === 'privacy' && (
          <div className="container page-container">
            <PrivacyPolicy lang={lang} />
          </div>
        )}

        {/* VIEW 14: Terms Full View */}
        {activeTab === 'terms' && (
          <div className="container page-container">
            <Terms lang={lang} />
          </div>
        )}
      </main>

      {/* Global Modals */}
      <ServerModal
        isOpen={isServerModalOpen}
        onClose={() => setIsServerModalOpen(false)}
        servers={servers && servers.length > 0 ? servers : DEFAULT_SERVERS}
        currentServer={selectedServer}
        onSelectServer={(s) => setSelectedServer(s)}
        lang={lang}
      />

      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
        onClearHistory={handleClearHistory}
        lang={lang}
        setLang={setLang}
      />

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        result={shareTargetResult}
        unit={settings.unit}
        lang={lang}
      />

      {/* Modern Footer */}
      <Footer
        onNavClick={(tab, path) => {
          navigateTo(path || tab);
        }}
        lang={lang}
      />

      <style>{`
        .speedtest-page {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .hero-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding-top: 36px;
          gap: 12px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 16px;
          border-radius: var(--radius-full);
          background: rgba(0, 240, 255, 0.08);
          border: 1px solid rgba(0, 240, 255, 0.25);
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--accent-cyan);
          letter-spacing: 0.04em;
        }

        .hero-heading {
          font-size: clamp(1.85rem, 6vw, 3rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          background: var(--grad-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          max-width: 780px;
        }

        .hero-subtitle {
          font-size: clamp(0.92rem, 2.8vw, 1.15rem);
          color: var(--text-secondary);
          max-width: 620px;
          line-height: 1.5;
        }

        .speedometer-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .test-action-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          width: 100%;
          max-width: 360px;
          margin-top: 2px;
        }

        .start-test-btn {
          width: 100%;
          padding: 16px 36px;
          font-size: 1.15rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          min-height: 54px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #00f0ff 0%, #0070f3 100%);
          color: #000000;
          box-shadow: 0 8px 30px rgba(0, 240, 255, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.6);
          border: none;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .start-test-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 38px rgba(0, 240, 255, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.8);
        }

        [data-theme="light"] .start-test-btn {
          background: linear-gradient(135deg, #0284c7 0%, #2563eb 50%, #4f46e5 100%);
          color: #ffffff;
          box-shadow: 0 8px 24px rgba(2, 132, 199, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.4);
        }

        [data-theme="light"] .start-test-btn:hover {
          background: linear-gradient(135deg, #0369a1 0%, #1d4ed8 50%, #4338ca 100%);
          box-shadow: 0 12px 32px rgba(2, 132, 199, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.5);
        }

        .start-test-btn:active {
          transform: translateY(1px);
        }

        .stop-test-btn {
          width: 100%;
          padding: 16px 36px;
          font-size: 1.05rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          min-height: 54px;
          border-radius: var(--radius-full);
          box-shadow: 0 8px 26px rgba(239, 68, 68, 0.35);
        }

        .browser-test-note {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-tertiary);
          text-align: center;
          letter-spacing: 0.02em;
        }

        .error-alert-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          background: rgba(255, 51, 102, 0.12);
          border: 1px solid var(--accent-coral);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          gap: 14px;
          flex-wrap: wrap;
        }

        .error-text {
          flex: 1;
          font-size: 0.9rem;
        }

        .page-container {
          padding-top: 32px;
        }

        .servers-page-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .servers-page-header h3 {
          font-size: 1.35rem;
          margin-bottom: 4px;
        }

        .server-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .server-node-item {
          display: flex;
          flex-direction: column;
          gap: 10px;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .server-node-item:hover {
          border-color: var(--accent-cyan);
          transform: translateY(-2px);
        }

        .server-node-item.active-server {
          border-color: var(--accent-cyan);
          background: rgba(0, 240, 255, 0.08);
        }

        .node-item-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .node-city {
          font-weight: 700;
          font-size: 1rem;
        }

        .node-sponsor {
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }

        .node-select-btn {
          margin-top: 6px;
          width: 100%;
          min-height: 40px;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 16px;
          }
          .speedtest-page {
            gap: 28px;
          }
          .page-container {
            padding-top: 16px;
          }
          .servers-page-card {
            padding: 20px 16px;
            gap: 18px;
          }
          .server-cards-grid {
            grid-template-columns: 1fr;
          }
          .error-alert-banner {
            flex-direction: column;
            align-items: stretch;
            padding: 14px 16px;
          }
        }

        @media (max-width: 480px) {
          .start-test-btn {
            padding: 15px 22px;
            font-size: 1.05rem;
          }
          .stop-test-btn {
            padding: 14px 22px;
            font-size: 0.98rem;
          }
          .hero-badge {
            font-size: 0.76rem;
            padding: 5px 12px;
          }
        }
      `}</style>
    </div>
  );
}
