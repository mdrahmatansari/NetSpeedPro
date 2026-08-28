import React, { useState } from 'react';
import { 
  Share2, 
  Copy, 
  Check, 
  X, 
  MessageCircle, 
  Send, 
  Smartphone 
} from 'lucide-react';
import { translations } from '../translations/i18n';

export default function ShareModal({ isOpen, onClose, result, unit = 'Mbps', lang = 'en' }) {
  const [copied, setCopied] = useState(false);
  const t = translations[lang] || translations.en;

  if (!isOpen || !result) return null;

  const shareText = 
`🚀 My Internet Speed Test on NETSPEED:
📥 Download: ${result.download || 0} ${unit}
📤 Upload: ${result.upload || 0} ${unit}
⚡ Ping: ${result.ping || 0} ms | Jitter: ${result.jitter || 0} ms
🛡️ Stability: ${result.stabilityRating || 'Excellent'} (${result.stability || 100}%)
🌐 Tested via NETSPEED (https://netspeed.app)`;

  const shareUrl = window.location.origin;

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Internet Speed Test on NETSPEED',
          text: shareText,
          url: shareUrl
        });
      } catch {}
    }
  };

  const shareWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, '_blank');
  };

  const shareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, '_blank');
  };

  const shareTelegram = () => {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`, '_blank');
  };

  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content share-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title">
            <Share2 size={22} className="text-cyan" />
            <span>{t.shareResult}</span>
          </div>
          <button className="btn-icon" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* Share Summary Preview Box */}
        <div className="share-preview-card">
          <div className="share-preview-header">
            <span className="brand-badge-mini">NETSPEED CERTIFIED</span>
            <span className="share-date">{result.formattedDate || new Date().toLocaleDateString()}</span>
          </div>

          <div className="share-stats-row">
            <div className="share-stat-item">
              <span className="share-stat-label">DOWNLOAD</span>
              <span className="share-stat-val text-cyan">{result.download || 0}</span>
              <span className="share-stat-unit">{unit}</span>
            </div>
            <div className="share-stat-item">
              <span className="share-stat-label">UPLOAD</span>
              <span className="share-stat-val text-emerald">{result.upload || 0}</span>
              <span className="share-stat-unit">{unit}</span>
            </div>
            <div className="share-stat-item">
              <span className="share-stat-label">PING</span>
              <span className="share-stat-val text-purple">{result.ping || 0}</span>
              <span className="share-stat-unit">ms</span>
            </div>
          </div>

          <div className="share-meta-row">
            <span>Server: {result.server || 'Mumbai'}</span>
            <span>Stability: {result.stabilityRating || 'Excellent'}</span>
          </div>
        </div>

        {/* Copy Actions */}
        <div className="copy-action-row">
          <button className="btn-primary copy-main-btn" onClick={handleCopyText}>
            {copied ? <Check size={18} /> : <Copy size={18} />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Formatted Result'}</span>
          </button>

          {navigator.share && (
            <button className="btn-secondary native-share-btn" onClick={handleNativeShare} title="Share via device">
              <Smartphone size={18} />
              <span>Device Share</span>
            </button>
          )}
        </div>

        {/* Social Share Grid */}
        <div className="social-share-grid">
          <button className="social-btn whatsapp-btn" onClick={shareWhatsApp}>
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </button>

          <button className="social-btn twitter-btn" onClick={shareTwitter}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span>X (Twitter)</span>
          </button>

          <button className="social-btn telegram-btn" onClick={shareTelegram}>
            <Send size={18} />
            <span>Telegram</span>
          </button>

          <button className="social-btn facebook-btn" onClick={shareFacebook}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Facebook</span>
          </button>
        </div>
      </div>

      <style>{`
        .share-modal-box {
          max-width: 520px;
        }

        .share-preview-card {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 20px;
        }

        .share-preview-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-badge-mini {
          font-size: 0.68rem;
          font-weight: 800;
          color: var(--accent-cyan);
          letter-spacing: 0.08em;
        }

        .share-date {
          font-size: 0.78rem;
          color: var(--text-tertiary);
        }

        .share-stats-row {
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 12px 0;
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .share-stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .share-stat-label {
          font-size: 0.68rem;
          font-weight: 800;
          color: var(--text-tertiary);
          letter-spacing: 0.05em;
        }

        .share-stat-val {
          font-family: var(--font-mono);
          font-size: 1.8rem;
          font-weight: 800;
          line-height: 1.1;
        }

        .share-stat-unit {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-tertiary);
        }

        .share-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .copy-action-row {
          display: flex;
          gap: 10px;
          margin-bottom: 16px;
        }

        .copy-main-btn {
          flex: 1;
        }

        .native-share-btn {
          padding: 12px 18px;
        }

        .social-share-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          border-radius: var(--radius-sm);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          font-size: 0.88rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }

        .whatsapp-btn:hover {
          background: rgba(37, 211, 102, 0.15);
          border-color: #25d366;
          color: #25d366;
        }

        .twitter-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: #ffffff;
          color: #ffffff;
        }

        .telegram-btn:hover {
          background: rgba(0, 136, 204, 0.15);
          border-color: #0088cc;
          color: #0088cc;
        }

        .facebook-btn:hover {
          background: rgba(24, 119, 242, 0.15);
          border-color: #1877f2;
          color: #1877f2;
        }
      `}</style>
    </div>
  );
}
