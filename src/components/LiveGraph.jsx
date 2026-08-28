import React, { useEffect, useRef } from 'react';
import { translations } from '../translations/i18n';

export default function LiveGraph({ 
  downloadSamples = [], 
  uploadSamples = [], 
  phase = 'idle', 
  unit = 'Mbps', 
  lang = 'en' 
}) {
  const canvasRef = useRef(null);
  const t = translations[lang] || translations.en;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.parentElement.clientWidth || 600;
    const height = 220;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, width, height);

    const padding = { top: 20, right: 30, bottom: 35, left: 55 };
    const graphWidth = width - padding.left - padding.right;
    const graphHeight = height - padding.top - padding.bottom;

    // Combine samples to determine max speed scale
    const allSpeeds = [
      ...downloadSamples.map(s => s.speed),
      ...uploadSamples.map(s => s.speed),
      20 // minimum 20 Mbps ceiling
    ];
    const maxSpeedRaw = Math.max(...allSpeeds);
    // Round max scale to nice number (e.g. 50, 100, 200, 500, 1000)
    let maxSpeed = Math.ceil(maxSpeedRaw * 1.15 / 10) * 10;
    if (maxSpeed < 50) maxSpeed = 50;

    // Total test duration time window
    const maxTime = Math.max(
      10,
      ...(downloadSamples.map(s => s.time)),
      ...(uploadSamples.map(s => s.time))
    );

    // 1. Draw Grid Lines and Y-Axis Labels
    const yGridSteps = 4;
    ctx.font = '500 10px JetBrains Mono, monospace';
    ctx.fillStyle = 'rgba(148, 163, 184, 0.6)';
    ctx.textAlign = 'right';

    for (let i = 0; i <= yGridSteps; i++) {
      const yVal = (maxSpeed / yGridSteps) * i;
      const yPos = padding.top + graphHeight - (i / yGridSteps) * graphHeight;

      ctx.beginPath();
      ctx.moveTo(padding.left, yPos);
      ctx.lineTo(width - padding.right, yPos);
      ctx.lineWidth = 1;
      ctx.strokeStyle = i === 0 ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)';
      ctx.stroke();

      ctx.fillText(`${Math.round(yVal)} ${unit}`, padding.left - 8, yPos + 3);
    }

    // 2. Draw X-Axis Time Ticks
    const xGridSteps = 5;
    ctx.textAlign = 'center';
    for (let i = 0; i <= xGridSteps; i++) {
      const timeVal = (maxTime / xGridSteps) * i;
      const xPos = padding.left + (i / xGridSteps) * graphWidth;

      ctx.beginPath();
      ctx.moveTo(xPos, padding.top + graphHeight);
      ctx.lineTo(xPos, padding.top + graphHeight + 5);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.stroke();

      ctx.fillText(`${timeVal.toFixed(0)}s`, xPos, height - 12);
    }

    // Helper to draw smooth bezier curves with gradient area
    const drawCurve = (samples, color, fillColor, glowColor) => {
      if (!samples || samples.length < 2) return;

      const points = samples.map(s => ({
        x: padding.left + Math.min(1, s.time / maxTime) * graphWidth,
        y: padding.top + graphHeight - (Math.min(s.speed, maxSpeed) / maxSpeed) * graphHeight
      }));

      // Draw Gradient Fill under curve
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(points[0].x, padding.top + graphHeight);
      ctx.lineTo(points[0].x, points[0].y);

      for (let i = 0; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }
      ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
      ctx.lineTo(points[points.length - 1].x, padding.top + graphHeight);
      ctx.closePath();

      const gradient = ctx.createLinearGradient(0, padding.top, 0, padding.top + graphHeight);
      gradient.addColorStop(0, fillColor);
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.restore();

      // Draw Stroke Line
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 0; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }
      ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);

      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = 12;
      ctx.stroke();
      ctx.restore();

      // Head indicator dot
      const lastPoint = points[points.length - 1];
      ctx.beginPath();
      ctx.arc(lastPoint.x, lastPoint.y, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = 8;
      ctx.fill();
    };

    // Draw Download curve (Cyan)
    drawCurve(downloadSamples, '#00f0ff', 'rgba(0, 240, 255, 0.22)', 'rgba(0, 240, 255, 0.8)');

    // Draw Upload curve (Emerald)
    drawCurve(uploadSamples, '#00df89', 'rgba(0, 223, 137, 0.22)', 'rgba(0, 223, 137, 0.8)');

  }, [downloadSamples, uploadSamples, phase, unit]);

  return (
    <div className="glass-card live-graph-card">
      <div className="graph-header">
        <div className="graph-title-group">
          <span className="graph-title">{t.liveGraph}</span>
          <span className="graph-subtitle">Time vs Bandwidth Throughput</span>
        </div>

        {/* Legend */}
        <div className="graph-legend">
          <div className="legend-item">
            <span className="legend-dot download-dot" />
            <span>{t.download}</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot upload-dot" />
            <span>{t.upload}</span>
          </div>
        </div>
      </div>

      <div className="canvas-holder">
        <canvas ref={canvasRef} />
      </div>

      <style>{`
        .live-graph-card {
          width: 100%;
          padding: 20px 24px;
        }

        .graph-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .graph-title-group {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .graph-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .graph-subtitle {
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }

        .graph-legend {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .download-dot {
          background-color: var(--accent-cyan);
          box-shadow: 0 0 8px var(--accent-cyan-glow);
        }

        .upload-dot {
          background-color: var(--accent-emerald);
          box-shadow: 0 0 8px var(--accent-emerald-glow);
        }

        .canvas-holder {
          width: 100%;
          height: 220px;
          position: relative;
        }

        .canvas-holder canvas {
          width: 100% !important;
          height: 100% !important;
          display: block;
        }
      `}</style>
    </div>
  );
}
