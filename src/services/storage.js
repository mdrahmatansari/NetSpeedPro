const HISTORY_KEY = 'netspeed_test_history_v1';
const SETTINGS_KEY = 'netspeed_settings_v1';

export const DEFAULT_SETTINGS = {
  theme: 'dark', // 'dark' | 'light'
  unit: 'Mbps', // 'Mbps' | 'MB/s' | 'Gbps'
  duration: 10, // 5 (quick) | 10 (standard) | 20 (extended)
  parallelStreams: 4, // 1 | 2 | 4 | 8
  saveHistory: true,
  language: 'en',
  serverId: 'in-bom-1'
};

export const storageService = {
  /**
   * History Management
   */
  getHistory() {
    try {
      const data = localStorage.getItem(HISTORY_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveHistory(item) {
    try {
      const settings = this.getSettings();
      if (!settings.saveHistory) return [];

      const history = this.getHistory();
      const newEntry = {
        id: 'test_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
        timestamp: new Date().toISOString(),
        formattedDate: new Intl.DateTimeFormat(undefined, {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }).format(new Date()),
        ...item
      };

      const updated = [newEntry, ...history.slice(0, 49)]; // keep latest 50
      localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
      return updated;
    } catch (err) {
      console.error('Failed to save test history:', err);
      return [];
    }
  },

  deleteHistoryItem(id) {
    try {
      const history = this.getHistory().filter(item => item.id !== id);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
      return history;
    } catch {
      return [];
    }
  },

  clearHistory() {
    try {
      localStorage.removeItem(HISTORY_KEY);
      return [];
    } catch {
      return [];
    }
  },

  /**
   * Settings Management
   */
  getSettings() {
    try {
      const data = localStorage.getItem(SETTINGS_KEY);
      return data ? { ...DEFAULT_SETTINGS, ...JSON.parse(data) } : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  },

  saveSettings(partialSettings) {
    try {
      const current = this.getSettings();
      const updated = { ...current, ...partialSettings };
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(updated));
      return updated;
    } catch {
      return DEFAULT_SETTINGS;
    }
  },

  /**
   * Speed & Data Formatting Utilities
   */
  formatSpeed(mbps, unit = 'Mbps') {
    const val = parseFloat(mbps) || 0;
    if (unit === 'MB/s') {
      return (val / 8).toFixed(2);
    } else if (unit === 'Gbps') {
      return (val / 1000).toFixed(3);
    }
    return val >= 100 ? val.toFixed(1) : val.toFixed(2);
  },

  formatBytes(bytes) {
    if (!bytes || bytes === 0) return '0 MB';
    const mb = bytes / (1024 * 1024);
    if (mb >= 1000) {
      return (mb / 1024).toFixed(2) + ' GB';
    }
    return mb.toFixed(1) + ' MB';
  }
};
