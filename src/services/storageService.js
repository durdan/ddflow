// DDFlow Storage Service - Save/Load functionality

const STORAGE_KEYS = {
  CURRENT_DIAGRAM: 'ddflow_current_diagram',
  RECENT_FILES: 'ddflow_recent_files',
  AUTO_SAVE_ENABLED: 'ddflow_autosave_enabled',
  COLOR_SETTINGS: 'ddflow_color_settings',
};

const MAX_RECENT_FILES = 10;

/**
 * Get the current diagram from localStorage
 * @returns {Object|null} The saved diagram or null
 */
export function getCurrentDiagram() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.CURRENT_DIAGRAM);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to load diagram from localStorage:', e);
  }
  return null;
}

/**
 * Save the current diagram to localStorage
 * @param {string} type - Diagram type
 * @param {string} source - Diagram DSL source
 * @param {string} name - Optional diagram name
 */
export function saveCurrentDiagram(type, source, name = 'Untitled Diagram') {
  try {
    const diagram = {
      type,
      source,
      name,
      savedAt: new Date().toISOString(),
      version: '1.0',
    };
    localStorage.setItem(STORAGE_KEYS.CURRENT_DIAGRAM, JSON.stringify(diagram));
    return true;
  } catch (e) {
    console.error('Failed to save diagram to localStorage:', e);
    return false;
  }
}

/**
 * Clear the current diagram from localStorage
 */
export function clearCurrentDiagram() {
  try {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_DIAGRAM);
  } catch (e) {
    console.error('Failed to clear diagram from localStorage:', e);
  }
}

/**
 * Get recent files list
 * @returns {Array} List of recent files
 */
export function getRecentFiles() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.RECENT_FILES);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to load recent files:', e);
  }
  return [];
}

/**
 * Add a file to recent files list
 * @param {Object} file - File object with name, type, source, savedAt
 */
export function addToRecentFiles(file) {
  try {
    let recent = getRecentFiles();

    // Remove existing entry with same name
    recent = recent.filter(f => f.name !== file.name);

    // Add to beginning
    recent.unshift({
      ...file,
      savedAt: new Date().toISOString(),
    });

    // Keep only MAX_RECENT_FILES
    recent = recent.slice(0, MAX_RECENT_FILES);

    localStorage.setItem(STORAGE_KEYS.RECENT_FILES, JSON.stringify(recent));
  } catch (e) {
    console.error('Failed to add to recent files:', e);
  }
}

/**
 * Remove a file from recent files list
 * @param {string} name - File name to remove
 */
export function removeFromRecentFiles(name) {
  try {
    let recent = getRecentFiles();
    recent = recent.filter(f => f.name !== name);
    localStorage.setItem(STORAGE_KEYS.RECENT_FILES, JSON.stringify(recent));
  } catch (e) {
    console.error('Failed to remove from recent files:', e);
  }
}

/**
 * Clear all recent files
 */
export function clearRecentFiles() {
  try {
    localStorage.removeItem(STORAGE_KEYS.RECENT_FILES);
  } catch (e) {
    console.error('Failed to clear recent files:', e);
  }
}

/**
 * Export diagram as .ddflow JSON file
 * @param {string} type - Diagram type
 * @param {string} source - Diagram DSL source
 * @param {string} filename - Filename (without extension)
 */
export function exportAsFile(type, source, filename = 'diagram') {
  const diagram = {
    type,
    source,
    name: filename,
    exportedAt: new Date().toISOString(),
    version: '1.0',
    format: 'ddflow',
  };

  const json = JSON.stringify(diagram, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.ddflow`;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => URL.revokeObjectURL(url), 100);

  // Add to recent files
  addToRecentFiles({ name: filename, type, source });
}

/**
 * Import diagram from .ddflow JSON file
 * @returns {Promise<Object>} The imported diagram
 */
export function importFromFile() {
  return new Promise((resolve, reject) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.ddflow,.json';
    input.style.display = 'none';

    input.onchange = async (e) => {
      const file = e.target.files?.[0];
      if (!file) {
        reject(new Error('No file selected'));
        return;
      }

      try {
        const text = await file.text();
        const diagram = JSON.parse(text);

        // Validate the diagram structure
        if (!diagram.type || !diagram.source) {
          throw new Error('Invalid diagram file: missing type or source');
        }

        // Extract name from filename if not present
        if (!diagram.name) {
          diagram.name = file.name.replace(/\.(ddflow|json)$/i, '');
        }

        // Add to recent files
        addToRecentFiles({
          name: diagram.name,
          type: diagram.type,
          source: diagram.source,
        });

        resolve(diagram);
      } catch (err) {
        reject(new Error(`Failed to parse file: ${err.message}`));
      }
    };

    input.onerror = () => {
      reject(new Error('Failed to open file'));
    };

    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  });
}

/**
 * Check if auto-save is enabled
 * @returns {boolean}
 */
export function isAutoSaveEnabled() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.AUTO_SAVE_ENABLED);
    return saved !== 'false'; // Default to true
  } catch (e) {
    return true;
  }
}

/**
 * Set auto-save enabled state
 * @param {boolean} enabled
 */
export function setAutoSaveEnabled(enabled) {
  try {
    localStorage.setItem(STORAGE_KEYS.AUTO_SAVE_ENABLED, String(enabled));
  } catch (e) {
    console.error('Failed to save auto-save setting:', e);
  }
}

/**
 * Format a date for display
 * @param {string} isoString - ISO date string
 * @returns {string} Formatted date
 */
export function formatDate(isoString) {
  try {
    const date = new Date(isoString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return date.toLocaleDateString();
  } catch (e) {
    return 'Unknown';
  }
}

// ============================================
// COLOR SETTINGS
// ============================================

// Default accent colors
export const DEFAULT_COLOR_SETTINGS = {
  accentPrimary: '#7C3AED',    // Main accent (purple)
  accentSecondary: '#6366F1',  // Secondary accent (indigo)
  selection: '#0EA5E9',        // Selection highlight (blue)
  success: '#10B981',          // Success states (green)
  warning: '#F59E0B',          // Warning states (orange)
  error: '#EF4444',            // Error states (red)
};

// Preset color themes
export const COLOR_PRESETS = {
  purple: {
    name: 'Purple (Default)',
    icon: '💜',
    accentPrimary: '#7C3AED',
    accentSecondary: '#6366F1',
  },
  blue: {
    name: 'Ocean Blue',
    icon: '💙',
    accentPrimary: '#0EA5E9',
    accentSecondary: '#3B82F6',
  },
  green: {
    name: 'Forest Green',
    icon: '💚',
    accentPrimary: '#10B981',
    accentSecondary: '#059669',
  },
  orange: {
    name: 'Sunset Orange',
    icon: '🧡',
    accentPrimary: '#F59E0B',
    accentSecondary: '#D97706',
  },
  pink: {
    name: 'Rose Pink',
    icon: '💗',
    accentPrimary: '#EC4899',
    accentSecondary: '#DB2777',
  },
  cyan: {
    name: 'Teal Cyan',
    icon: '💠',
    accentPrimary: '#06B6D4',
    accentSecondary: '#14B8A6',
  },
  red: {
    name: 'Ruby Red',
    icon: '❤️',
    accentPrimary: '#EF4444',
    accentSecondary: '#DC2626',
  },
};

/**
 * Get saved color settings
 * @returns {Object} Color settings object
 */
export function getColorSettings() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.COLOR_SETTINGS);
    if (saved) {
      return { ...DEFAULT_COLOR_SETTINGS, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.error('Failed to load color settings:', e);
  }
  return { ...DEFAULT_COLOR_SETTINGS };
}

/**
 * Save color settings
 * @param {Object} settings - Color settings to save
 */
export function saveColorSettings(settings) {
  try {
    localStorage.setItem(STORAGE_KEYS.COLOR_SETTINGS, JSON.stringify(settings));
    return true;
  } catch (e) {
    console.error('Failed to save color settings:', e);
    return false;
  }
}

/**
 * Reset color settings to defaults
 */
export function resetColorSettings() {
  try {
    localStorage.removeItem(STORAGE_KEYS.COLOR_SETTINGS);
  } catch (e) {
    console.error('Failed to reset color settings:', e);
  }
}
