import React, { useEffect, useRef } from 'react';
import { getTranslations } from '../translations/i18n';
import { storageService } from '../services/storage';

// High-speed benchmark scale points
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
  const t = getTranslations(lang);

  targetSpeedRef.current = currentSpeed;

  // Non-linear logarithmic-feel mapping between 135° and 405° (270° sweep)
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
    
    const updateCanvasSize = () => {
      const parentWidth = canvas.parentElement?.clientWidth || 380;
      const width = Math.min(380, Math.max(270, parentWidth));
      const height = Math.round(width * 0.76); // 288px height for 380px width
      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      return { width, height };
    };

    let { width, height } = updateCanvasSize();

    const handleResize = () => {
      const dims = updateCanvasSize();
      width = dims.width;
      height = dims.height;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      // Smooth continuous easing towards real measured speed
      currentSpeedRef.current += (targetSpeedRef.current - currentSpeedRef.current) * 0.22;
      const speed = currentSpeedRef.current;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height * 0.52;
      const scaleRatio = width / 380;
      const radius = 132 * scaleRatio;
      const startAngle = 135 * (Math.PI / 180);
      const endAngle = 405 * (Math.PI / 180);

      const isLight = document.documentElement.getAttribute('data-theme') === 'light';

      // 1. Radial Cockpit Lens Depth Glow
      const bgGrad = ctx.createRadialGradient(
        centerX, centerY, radius * 0.2,
        centerX, centerY, radius * 1.15
      );
      if (isLight) {
        bgGrad.addColorStop(0, 'rgba(2, 132, 199, 0.04)');
        bgGrad.addColorStop(0.75, 'rgba(241, 245, 249, 0.85)');
        bgGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      } else {
        bgGrad.addColorStop(0, 'rgba(0, 229, 255, 0.03)');
        bgGrad.addColorStop(0.75, 'rgba(15, 23, 42, 0.45)');
        bgGrad.addColorStop(1, 'rgba(2, 6, 23, 0)');
      }

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.15, 0, Math.PI * 2);
      ctx.fillStyle = bgGrad;
      ctx.fill();

      // 2. Precision Outer Dial Rim
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + (8 * scaleRatio), startAngle, endAngle);
      ctx.lineWidth = 1.5 * scaleRatio;
      ctx.strokeStyle = isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)';
      ctx.stroke();

      // 3. Base Recessed Track
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.lineWidth = 10 * scaleRatio;
      ctx.strokeStyle = isLight ? '#e2e8f0' : 'rgba(255, 255, 255, 0.1)';
      ctx.lineCap = 'round';
      ctx.stroke();

      // 4. Precision Segmented Ticks & Numbers
      const totalTicks = 44;
      const angleSweep = endAngle - startAngle;

      for (let i = 0; i <= totalTicks; i++) {
        const tickAngle = startAngle + (i / totalTicks) * angleSweep;
        const isMajorIndex = i % 4 === 0;

        const tickInner = radius - ((isMajorIndex ? 13 : 6) * scaleRatio);
        const tickOuter = radius - (2 * scaleRatio);

        const x1 = centerX + Math.cos(tickAngle) * tickInner;
        const y1 = centerY + Math.sin(tickAngle) * tickInner;
        const x2 = centerX + Math.cos(tickAngle) * tickOuter;
        const y2 = centerY + Math.sin(tickAngle) * tickOuter;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineWidth = (isMajorIndex ? 2 : 1) * scaleRatio;
        ctx.strokeStyle = isMajorIndex 
          ? (isLight ? '#334155' : 'rgba(255, 255, 255, 0.55)') 
          : (isLight ? '#cbd5e1' : 'rgba(148, 163, 184, 0.25)');
        ctx.stroke();
      }

      // Major Scale Numerical Labels
      const MAJOR_LABELS = [
        { val: 0, label: '0' },
        { val: 10, label: '10' },
        { val: 50, label: '50' },
        { val: 100, label: '100' },
        { val: 250, label: '250' },
        { val: 500, label: '500' },
        { val: 1000, label: '1G' },
        { val: 2000, label: '2G' }
      ];

      MAJOR_LABELS.forEach(({ val, label }) => {
        const angle = speedToAngle(val);
        const textRadius = radius - (25 * scaleRatio);
        const tx = centerX + Math.cos(angle) * textRadius;
        const ty = centerY + Math.sin(angle) * textRadius + (3.5 * scaleRatio);

        const fontSize = Math.max(9, Math.round(10.5 * scaleRatio));
        ctx.font = `700 ${fontSize}px "Outfit", "Inter", -apple-system, sans-serif`;
        ctx.fillStyle = isLight ? '#334155' : '#94a3b8';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(label, tx, ty);
      });

      // 5. Active Dual-Pass Glowing Speed Arc
      const currentAngle = speedToAngle(speed);
      if (currentAngle > startAngle) {
        let themeColor = isLight ? '#0284c7' : '#00f0ff';
        let themeGlow = isLight ? 'rgba(2, 132, 199, 0.35)' : 'rgba(0, 240, 255, 0.5)';

        if (phase === 'upload') {
          themeColor = isLight ? '#059669' : '#00df89';
          themeGlow = isLight ? 'rgba(5, 150, 105, 0.35)' : 'rgba(0, 223, 137, 0.5)';
        } else if (phase === 'ping') {
          themeColor = isLight ? '#7c3aed' : '#8b5cf6';
          themeGlow = isLight ? 'rgba(124, 58, 237, 0.35)' : 'rgba(139, 92, 246, 0.5)';
        }

        // Pass A: Wide Diffused Ambient Glow
        ctx.save();
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, currentAngle);
        ctx.lineWidth = 14 * scaleRatio;
        ctx.lineCap = 'round';
        ctx.strokeStyle = themeGlow;
        ctx.shadowColor = themeColor;
        ctx.shadowBlur = 22 * scaleRatio;
        ctx.stroke();
        ctx.restore();

        // Pass B: Sharp Core Vibrant Arc
        ctx.save();
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, currentAngle);
        ctx.lineWidth = 10 * scaleRatio;
        ctx.lineCap = 'round';
        ctx.strokeStyle = themeColor;
        ctx.stroke();
        ctx.restore();

        // 6. Leading Luminous Orbiting Pointer Bead
        const tipX = centerX + Math.cos(currentAngle) * radius;
        const tipY = centerY + Math.sin(currentAngle) * radius;

        // Outer atmospheric pulse halo
        ctx.save();
        ctx.beginPath();
        ctx.arc(tipX, tipY, 8.5 * scaleRatio, 0, Math.PI * 2);
        ctx.fillStyle = themeColor;
        ctx.shadowColor = themeColor;
        ctx.shadowBlur = 18 * scaleRatio;
        ctx.fill();

        // Inner white nucleus
        ctx.beginPath();
        ctx.arc(tipX, tipY, 4 * scaleRatio, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 4 * scaleRatio;
        ctx.fill();
        ctx.restore();
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [phase]);

  const displaySpeedFormatted = storageService.formatSpeed(currentSpeed, unit);

  // Phase badge formatting
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
      {/* Canvas Gauge Dial */}
      <div className="canvas-wrapper">
        <canvas ref={canvasRef} className="speedometer-canvas" />

        {/* Center Digital Cockpit Readout */}
        <div className="speedometer-center-content">
          <div className={`badge ${badgeInfo.color} speedometer-phase-badge`}>
            {phase !== 'idle' && phase !== 'complete' && <span className="live-indicator" />}
            <span>{badgeInfo.text}</span>
          </div>

          <div className="speed-number-wrapper">
            <span className="speed-number">{displaySpeedFormatted}</span>
            <span className="speed-unit-pill">{unit}</span>
          </div>

          <div className="speedometer-substatus">
            {phase === 'download' && <span className="substatus-download">{t.liveDownloadStream}</span>}
            {phase === 'upload' && <span className="substatus-upload">{t.liveUploadStream}</span>}
            {phase === 'ping' && <span className="substatus-ping">{t.probingLatency}</span>}
            {phase === 'idle' && <span className="substatus-idle">{t.readyForBenchmark}</span>}
            {phase === 'complete' && <span className="substatus-complete">{t.telemetryVerified}</span>}
          </div>
        </div>
      </div>

      {/* Quick Live Telemetry Bar */}
      <div className="telemetry-bar">
        {/* Metric 1: Ping */}
        <div className="telemetry-segment">
          <div className="segment-header">
            <span className="segment-dot dot-purple" />
            <span className="segment-label">{t.ping}</span>
          </div>
          <div className="segment-value-row">
            <span className="segment-value text-purple">{ping > 0 ? ping : '--'}</span>
            <span className="segment-unit">ms</span>
          </div>
        </div>

        <div className="telemetry-divider" />

        {/* Metric 2: Jitter */}
        <div className="telemetry-segment">
          <div className="segment-header">
            <span className="segment-dot dot-amber" />
            <span className="segment-label">{t.jitter}</span>
          </div>
          <div className="segment-value-row">
            <span className="segment-value text-amber">{jitter > 0 ? jitter : '--'}</span>
            <span className="segment-unit">ms</span>
          </div>
        </div>

        <div className="telemetry-divider" />

        {/* Metric 3: Server */}
        <div className="telemetry-segment">
          <div className="segment-header">
            <span className="segment-dot dot-cyan" />
            <span className="segment-label">{t.server}</span>
          </div>
          <div className="segment-value-row">
            <span className="segment-value text-cyan" title={serverName}>{serverName || 'Auto'}</span>
          </div>
        </div>

        <div className="telemetry-divider" />

        {/* Metric 4: Connection */}
        <div className="telemetry-segment">
          <div className="segment-header">
            <span className="segment-dot dot-emerald" />
            <span className="segment-label">{t.connection}</span>
          </div>
          <div className="segment-value-row">
            <span className="segment-value text-emerald" title={connectionType}>{connectionType || 'Broadband'}</span>
          </div>
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
          max-width: 540px;
          margin: 0 auto;
        }

        .canvas-wrapper {
          position: relative;
          width: 100%;
          max-width: 380px;
          aspect-ratio: 380 / 288;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .speedometer-canvas {
          width: 100%;
          height: 100%;
          display: block;
          filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.25));
        }

        .speedometer-center-content {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          pointer-events: none;
          gap: 2px;
        }

        .speedometer-phase-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: clamp(0.68rem, 2vw, 0.75rem);
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 12px;
          border-radius: var(--radius-full);
        }

        .speed-number-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1;
          margin: 1px 0;
        }

        .speed-number {
          font-family: var(--font-mono);
          font-size: clamp(2.6rem, 8.5vw, 3.8rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          color: var(--text-primary);
          font-feature-settings: 'tnum' on, 'lnum' on;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        [data-theme="light"] .speed-number {
          text-shadow: none;
          color: #0f172a;
        }

        .speed-unit-pill {
          display: inline-block;
          font-size: clamp(0.8rem, 2.4vw, 0.92rem);
          font-weight: 800;
          color: var(--accent-cyan);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: rgba(0, 229, 255, 0.08);
          border: 1px solid rgba(0, 229, 255, 0.25);
          padding: 1px 9px;
          border-radius: var(--radius-full);
          margin-top: 2px;
        }

        [data-theme="light"] .speed-unit-pill {
          background: rgba(2, 132, 199, 0.08);
          border-color: rgba(2, 132, 199, 0.25);
          color: #0284c7;
        }

        .speedometer-substatus {
          margin-top: 4px;
          font-size: clamp(0.68rem, 1.8vw, 0.75rem);
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--text-tertiary);
        }

        .substatus-download { 
          color: var(--accent-cyan); 
          text-shadow: 0 0 10px rgba(0, 229, 255, 0.4);
        }
        .substatus-upload { 
          color: var(--accent-emerald); 
          text-shadow: 0 0 10px rgba(0, 223, 137, 0.4);
        }
        .substatus-ping { 
          color: var(--accent-purple); 
          text-shadow: 0 0 10px rgba(139, 92, 246, 0.4);
        }
        .substatus-complete { 
          color: var(--accent-emerald); 
          font-weight: 800; 
        }

        /* Luxury Segmented Telemetry Pill Bar */
        .telemetry-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(8, 14, 28, 0.9) 100%);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: var(--radius-full);
          padding: 6px 10px;
          margin-top: 5px;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .telemetry-segment {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          text-align: center;
          flex: 1;
          min-width: 0;
          padding: 6px 8px;
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
        }

        .telemetry-segment:hover {
          background: rgba(255, 255, 255, 0.04);
        }

        .segment-header {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .segment-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .dot-purple {
          background: var(--accent-purple);
          box-shadow: 0 0 6px var(--accent-purple-glow);
        }

        .dot-amber {
          background: var(--accent-amber);
          box-shadow: 0 0 6px var(--accent-amber-glow);
        }

        .dot-cyan {
          background: var(--accent-cyan);
          box-shadow: 0 0 6px var(--accent-cyan-glow);
        }

        .dot-emerald {
          background: var(--accent-emerald);
          box-shadow: 0 0 6px var(--accent-emerald-glow);
        }

        .segment-label {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--text-tertiary);
          letter-spacing: 0.09em;
          white-space: nowrap;
        }

        .segment-value-row {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 3px;
          max-width: 100%;
          overflow: hidden;
        }

        .segment-value {
          font-size: 1rem;
          font-weight: 800;
          color: var(--text-primary);
          font-family: var(--font-mono);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .segment-unit {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-tertiary);
          text-transform: lowercase;
        }

        .text-purple { color: var(--accent-purple); }
        .text-amber { color: var(--accent-amber); }
        .text-cyan { color: var(--accent-cyan); }
        .text-emerald { color: var(--accent-emerald); }

        .telemetry-divider {
          width: 1px;
          height: 24px;
          background: linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.15) 50%, transparent 100%);
          flex-shrink: 0;
        }

        [data-theme="light"] .telemetry-bar {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        [data-theme="light"] .telemetry-segment:hover {
          background: rgba(2, 132, 199, 0.04);
        }

        [data-theme="light"] .telemetry-divider {
          background: linear-gradient(180deg, transparent 0%, #cbd5e1 50%, transparent 100%);
        }

        @media (max-width: 520px) {
          .telemetry-bar {
            padding: 5px 6px;
          }
          .telemetry-segment {
            padding: 5px 3px;
          }
          .segment-value {
            font-size: 0.88rem;
          }
          .segment-label {
            font-size: 0.6rem;
          }
        }
      `}</style>
    </div>
  );
}
