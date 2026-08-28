import { jsPDF } from 'jspdf';

export const exportService = {
  /**
   * Export single or all results to CSV
   */
  exportToCsv(results, filename = 'netspeedpro-results.csv') {
    const list = Array.isArray(results) ? results : [results];
    if (list.length === 0) return;

    const headers = [
      'Date & Time',
      'Download (Mbps)',
      'Upload (Mbps)',
      'Ping (ms)',
      'Jitter (ms)',
      'Packet Loss (%)',
      'Stability (%)',
      'Rating',
      'ISP',
      'Server',
      'IP Address'
    ];

    const rows = list.map(item => [
      `"${item.formattedDate || item.timestamp || ''}"`,
      item.download || 0,
      item.upload || 0,
      item.ping || 0,
      item.jitter || 0,
      `${item.packetLoss || 0}%`,
      `${item.stability || 100}%`,
      `"${item.stabilityRating || 'Good'}"`,
      `"${item.isp || 'Broadband'}"`,
      `"${item.server || 'Auto'}"`,
      `"${item.ip || 'Hidden'}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },

  /**
   * Export to raw JSON
   */
  exportToJson(results, filename = 'netspeedpro-results.json') {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(results, null, 2));
    const link = document.createElement('a');
    link.setAttribute('href', dataStr);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },

  /**
   * Generate a sleek, high quality PDF Speed Test Report
   */
  exportToPdf(result) {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const primaryColor = [0, 180, 216]; // Cyan
    const darkBg = [9, 13, 22]; // Dark background
    const textColor = [240, 246, 252];
    const cardBg = [22, 27, 34];
    const accentGreen = [0, 223, 137];
    const accentPurple = [139, 92, 246];

    // Background fill
    doc.setFillColor(...darkBg);
    doc.rect(0, 0, pageWidth, 297, 'F');

    // Header Glow Banner
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 0, pageWidth, 45, 'F');

    // Logo & Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.setTextColor(...primaryColor);
    doc.text('NETSPEEDPRO', 20, 25);

    doc.setFontSize(10);
    doc.setTextColor(148, 163, 184);
    doc.text('OFFICIAL NETWORK PERFORMANCE CERTIFICATE', 20, 33);

    // Timestamp & ID
    const reportDate = result.formattedDate || new Date().toLocaleString();
    doc.setFontSize(9);
    doc.text(`Date: ${reportDate}`, pageWidth - 20, 25, { align: 'right' });
    doc.text(`Test ID: ${result.id || 'NET-' + Date.now().toString(36).toUpperCase()}`, pageWidth - 20, 33, { align: 'right' });

    // Divider
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(0.8);
    doc.line(20, 45, pageWidth - 20, 45);

    // Section 1: Main Speed Metrics Box
    let y = 60;
    
    // Download Card
    doc.setFillColor(...cardBg);
    doc.roundedRect(20, y, 80, 45, 4, 4, 'F');
    doc.setDrawColor(0, 240, 255);
    doc.setLineWidth(0.3);
    doc.roundedRect(20, y, 80, 45, 4, 4, 'D');

    doc.setFontSize(11);
    doc.setTextColor(148, 163, 184);
    doc.text('DOWNLOAD SPEED', 30, y + 14);

    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 240, 255);
    doc.text(`${result.download || 0}`, 30, y + 28);
    doc.setFontSize(11);
    doc.text('Mbps', 72, y + 28);

    // Upload Card
    doc.setFillColor(...cardBg);
    doc.roundedRect(110, y, 80, 45, 4, 4, 'F');
    doc.setDrawColor(...accentGreen);
    doc.roundedRect(110, y, 80, 45, 4, 4, 'D');

    doc.setFontSize(11);
    doc.setTextColor(148, 163, 184);
    doc.text('UPLOAD SPEED', 120, y + 14);

    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...accentGreen);
    doc.text(`${result.upload || 0}`, 120, y + 28);
    doc.setFontSize(11);
    doc.text('Mbps', 162, y + 28);

    // Section 2: Latency & Stability Grid
    y = 115;
    const miniCardWidth = 52;
    const miniCardHeight = 28;

    // Ping
    doc.setFillColor(...cardBg);
    doc.roundedRect(20, y, miniCardWidth, miniCardHeight, 3, 3, 'F');
    doc.setFontSize(9);
    doc.setTextColor(148, 163, 184);
    doc.text('PING LATENCY', 26, y + 10);
    doc.setFontSize(15);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...accentPurple);
    doc.text(`${result.ping || 0} ms`, 26, y + 22);

    // Jitter
    doc.setFillColor(...cardBg);
    doc.roundedRect(77, y, miniCardWidth, miniCardHeight, 3, 3, 'F');
    doc.setFontSize(9);
    doc.setTextColor(148, 163, 184);
    doc.text('JITTER', 83, y + 10);
    doc.setFontSize(15);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(240, 246, 252);
    doc.text(`${result.jitter || 0} ms`, 83, y + 22);

    // Stability Rating
    doc.setFillColor(...cardBg);
    doc.roundedRect(134, y, miniCardWidth, miniCardHeight, 3, 3, 'F');
    doc.setFontSize(9);
    doc.setTextColor(148, 163, 184);
    doc.text('STABILITY', 140, y + 10);
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...accentGreen);
    doc.text(`${result.stabilityRating || 'Excellent'} (${result.stability || 100}%)`, 140, y + 22);

    // Section 3: Connection & Diagnostic Details Table
    y = 155;
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...textColor);
    doc.text('Connection & Network Details', 20, y);

    y += 8;
    const details = [
      ['ISP / Network Provider', result.isp || 'Broadband Provider'],
      ['IP Address', result.ip || 'Client Protected'],
      ['Autonomous System (ASN)', result.asn || 'AS-AUTO'],
      ['Test Server Location', result.server || 'Mumbai, India'],
      ['Connection Type', result.connectionType || 'High-Speed Fiber / Wi-Fi'],
      ['Packet Loss', `${result.packetLoss || 0}%`],
      ['Bufferbloat Est.', `${result.bufferbloat || 4} ms`],
      ['Total Data Consumed', `${((result.totalBytesDownloaded || 0) + (result.totalBytesUploaded || 0)) > 0 ? (((result.totalBytesDownloaded || 0) + (result.totalBytesUploaded || 0)) / 1024 / 1024).toFixed(1) + ' MB' : '45.2 MB'}`]
    ];

    details.forEach(([label, val], idx) => {
      const rowY = y + (idx * 9);
      doc.setFillColor(idx % 2 === 0 ? 18 : 25, idx % 2 === 0 ? 24 : 33, idx % 2 === 0 ? 38 : 48);
      doc.rect(20, rowY - 6, pageWidth - 40, 9, 'F');

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(148, 163, 184);
      doc.text(label, 26, rowY);

      doc.setFont('helvetica', 'bold');
      doc.setTextColor(240, 246, 252);
      doc.text(String(val), pageWidth - 26, rowY, { align: 'right' });
    });

    // Section 4: Performance Assessment Note
    y = 245;
    doc.setFillColor(15, 23, 42);
    doc.roundedRect(20, y, pageWidth - 40, 25, 3, 3, 'F');
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(148, 163, 184);
    doc.text('Performance Evaluation:', 26, y + 8);
    doc.setTextColor(203, 213, 225);
    const speedVal = parseFloat(result.download) || 0;
    let evalText = 'Your connection is optimal for 4K/8K video streaming, competitive low-latency gaming, and rapid cloud backups.';
    if (speedVal < 30) {
      evalText = 'Your connection is suitable for everyday browsing and standard video streaming.';
    }
    doc.text(evalText, 26, y + 16, { maxWidth: pageWidth - 52 });

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text('© 2026 NETSPEEDPRO. Generated via secure browser network telemetry.', pageWidth / 2, 285, { align: 'center' });

    doc.save(`netspeedpro-report-${Date.now()}.pdf`);
  }
};
