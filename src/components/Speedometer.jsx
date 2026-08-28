import React, { useEffect, useRef } from 'react';
import { translations } from '../translations/i18n';
import { storageService } from '../services/storage';

const SCALE_POINTS = [0, 5, 10, 25, 50, 100, 250, 500, 1000, 2000];

export default function Speedometer({ 
  currentSpeed = 0, 
  phase = 'idle', 
  unit = 'Mbps', 
  lang = 'en',
  ping = 0,
  jitter = 0,
  serverName = 'Auto',
  connectionType = 'Wi-Fi'
}) {
  const canvasRef = useRef(null);
  const currentSpeedRef = useRef(0);
  const targetSpeedRef = useRef(currentSpeed);
  const animationFrameRef = useRef(null);
  const t = translations[lang] || translations.en;

  targetSpeedRef.current = currentSpeed;

  // Non-linear mapping between 135° and 405° (270° sweep)
  const speedToAngle = (speed) => {
    const minAngle = 135 * (Math.PI / 180);
    const maxAngle = 405 * (Math.PI / 180);
    const sweep = maxAngle - minAngle;

    if (speed <= 0) return minAngle;
    if (speed >= 2000) return maxAngle;

    for (let i = 0; i < SCALE_POINTS.length - 1; i++) {
      const p1 = SCALE_POINTS[i];
      const p2 = SCALE_POINTS[i + 1];
      if (speed >= p1 && speed <= p2) {
        const segRatio = (speed - p1) / (p2 - p1);
        const segAngleStart = minAngle + (i / (SCALE_POINTS.length - 1)) * sweep;
        const segAngleEnd = minAngle + ((i + 1) / (SCALE_POINTS.length - 1)) * sweep;
        return segAngleStart + segRatio * (segAngleEnd - segAngleStart);
      }
    }
    return maxAngle;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const dpr = window.devicePixelRatio || 1;
    const size = 360;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const render = () => {
      // Smooth tracking of real measured speed
      currentSpeedRef.current += (targetSpeedRef.current - currentSpeedRef.current) * 0.25;
      const speed = currentSpeedRef.current;

      ctx.clearRect(0, 0, size, size);

      const centerX = size / 2;
      const centerY = size / 2;
      const radius = 135;
      const startAngle = 135 * (Math.PI / 180);
      const endAngle = 405 * (Math.PI / 180);

      const isLight = document.documentElement.getAttribute('data-theme') === 'light';

      // 1. Base Gauge Track
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.lineWidth = 14;
      ctx.strokeStyle = isLight ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.15)';
      ctx.lineCap = 'round';
      ctx.stroke();

      // 2. Tick Marks & Scale Numbers
      SCALE_POINTS.forEach((pt, idx) => {
        const angle = speedToAngle(pt);
        const isMajor = idx % 2 === 0 || pt === 1000 || pt === 2000;
        
        const tickInner = radius - (isMajor ? 18 : 10);
        const tickOuter = radius - 2;
        
        const x1 = centerX + Math.cos(angle) * tickInner;
        const y1 = centerY + Math.sin(angle) * tickInner;
        const x2 = centerX + Math.cos(angle) * tickOuter;
        const y2 = centerY + Math.sin(angle) * tickOuter;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineWidth = isMajor ? 2.5 : 1.2;
        ctx.strokeStyle = isMajor 
          ? (isLight ? '#334155' : '#cbd5e1') 
          : (isLight ? '#94a3b8' : '#64748b');
        ctx.stroke();

        // Scale Labels
        if (isMajor) {
          const textRadius = radius - 28;
          const tx = centerX + Math.cos(angle) * textRadius;
          const ty = centerY + Math.sin(angle) * textRadius + 4;

          ctx.font = '700 11px Outfit, sans-serif';
          ctx.fillStyle = isLight ? '#1e293b' : '#e2e8f0';
          ctx.textAlign = 'center';
          const label = pt >= 1000 ? `${pt / 1000}G` : `${pt}`;
          ctx.fillText(label, tx, ty);
        }
      });

      // 3. Active Glowing Speed Arc
      const currentAngle = speedToAngle(speed);
      if (currentAngle > startAngle) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, currentAngle);
        ctx.lineWidth = 14;
        ctx.lineCap = 'round';

        let arcColor = '#00f0ff';
        if (phase === 'upload') arcColor = '#00df89';
        else if (phase === 'ping') arcColor = '#8b5cf6';

        ctx.strokeStyle = arcColor;
        ctx.shadowColor = arcColor;
        ctx.shadowBlur = 16;
        ctx.stroke();
        ctx.shadowBlur = 0; // reset
      }

      // 4. Sleek Needle Pointer
      const needleLength = radius - 15;
      const needleX = centerX + Math.cos(currentAngle) * needleLength;
      const needleY = centerY + Math.sin(currentAngle) * needleLength;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(needleX, needleY);
      ctx.lineWidth = 3;
      ctx.strokeStyle = phase === 'upload' ? '#00df89' : '#00f0ff';
      ctx.shadowColor = phase === 'upload' ? '#00df89' : '#00f0ff';
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.restore();

      // Needle Center Cap
      ctx.beginPath();
      ctx.arc(centerX, centerY, 8, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);
      ctx.fillStyle = phase === 'upload' ? '#00df89' : '#00f0ff';
      ctx.fill();

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [phase]);

  const displaySpeedFormatted = storageService.formatSpeed(currentSpeed, unit);

  // Phase badge title text
  const getPhaseBadge = () => {
    switch (phase) {
      case 'connecting': return { text: t.phaseConnecting, color: 'badge-purple' };
      case 'ping': return { text: t.phasePing, color: 'badge-purple' };
      case 'download': return { text: t.download, color: 'badge-cyan' };
      case 'upload': return { text: t.upload, color: 'badge-emerald' };
      case 'stability': return { text: t.phaseStability, color: 'badge-amber' };
      case 'complete': return { text: t.phaseComplete, color: 'badge-emerald' };
      default: return { text: t.readyToTest, color: 'badge-cyan' };
    }
  };

  const badgeInfo = getPhaseBadge();

  return (
    <div className="speedometer-container">
      {/* Canvas Gauge */}
      <div className="canvas-wrapper">
        <canvas ref={canvasRef} style={{ width: '360px', height: '360px' }} />

        {/* Center Digital Speed Readout */}
        <div className="speedometer-center-content">
          <span className={`badge ${badgeInfo.color} speedometer-phase-badge`}>
            {phase !== 'idle' && phase !== 'complete' && <span className="live-indicator" />}
            {badgeInfo.text}
          </span>

          <div className="speed-number-wrapper">
            <span className="speed-number">{displaySpeedFormatted}</span>
            <span className="speed-unit">{unit}</span>
          </div>

          <div className="speedometer-substatus">
            {phase === 'download' && <span className="substatus-download">▼ Measuring Download</span>}
            {phase === 'upload' && <span className="substatus-upload">▲ Measuring Upload</span>}
            {phase === 'ping' && <span className="substatus-ping">● Probing Ping RTT</span>}
            {phase === 'idle' && <span className="substatus-idle">Press Start to Begin</span>}
            {phase === 'complete' && <span className="substatus-complete">✔ Test Complete</span>}
          </div>
        </div>
      </div>

      {/* Quick Live Telemetry Bar */}
      <div className="telemetry-bar">
        <div className="telemetry-item">
          <span className="telemetry-label">{t.ping}</span>
          <span className="telemetry-value text-purple">{ping > 0 ? `${ping} ms` : '--'}</span>
        </div>
        <div className="telemetry-divider" />
        <div className="telemetry-item">
          <span className="telemetry-label">{t.jitter}</span>
          <span className="telemetry-value">{jitter > 0 ? `${jitter} ms` : '--'}</span>
        </div>
        <div className="telemetry-divider" />
        <div className="telemetry-item">
          <span className="telemetry-label">{t.server}</span>
          <span className="telemetry-value text-cyan" title={serverName}>{serverName || 'Auto'}</span>
        </div>
        <div className="telemetry-divider" />
        <div className="telemetry-item">
          <span className="telemetry-label">{t.connection}</span>
          <span className="telemetry-value">{connectionType || 'Wi-Fi'}</span>
        </div>
      </div>

      <style>{`
        .speedometer-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
        }

        .canvas-wrapper {
          position: relative;
          width: 360px;
          height: 360px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .speedometer-center-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          pointer-events: none;
          padding-top: 50px;
        }

        .speedometer-phase-badge {
          margin-bottom: 6px;
          font-size: 0.76rem;
          padding: 4px 12px;
        }

        .speed-number-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1;
        }

        .speed-number {
          font-family: var(--font-mono);
          font-size: 3.4rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: var(--text-primary);
        }

        .speed-unit {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--accent-cyan);
          letter-spacing: 0.05em;
          margin-top: 2px;
        }

        .speedometer-substatus {
          margin-top: 8px;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-tertiary);
        }

        .substatus-download { color: var(--accent-cyan); }
        .substatus-upload { color: var(--accent-emerald); }
        .substatus-ping { color: var(--accent-purple); }
        .substatus-complete { color: var(--accent-emerald); font-weight: 800; }

        .telemetry-bar {
          display: flex;
          align-items: center;
          justify-content: space-around;
          width: 100%;
          background: var(--bg-card);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          padding: 12px 24px;
          margin-top: 14px;
          box-shadow: var(--shadow-sm);
        }

        .telemetry-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }

        .telemetry-label {
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--text-tertiary);
          letter-spacing: 0.08em;
        }

        .telemetry-value {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--text-primary);
          font-family: var(--font-mono);
          max-width: 110px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .text-purple { color: var(--accent-purple); }
        .text-cyan { color: var(--accent-cyan); }

        .telemetry-divider {
          width: 1px;
          height: 24px;
          background: var(--border-color);
        }

        @media (max-width: 480px) {
          .canvas-wrapper {
            transform: scale(0.88);
            margin: -20px 0;
          }
          .speed-number {
            font-size: 2.8rem;
          }
          .telemetry-bar {
            padding: 10px 14px;
          }
          .telemetry-value {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
}
