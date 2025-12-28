// DDFlow Keyboard Shortcuts Hook
import { useEffect, useCallback } from 'react';

/**
 * Keyboard shortcut definitions
 */
export const SHORTCUTS = {
  UNDO: { key: 'z', meta: true, description: 'Undo', category: 'Edit' },
  REDO: { key: 'z', meta: true, shift: true, description: 'Redo', category: 'Edit' },
  ZOOM_IN: { key: '=', keyAlt: '+', description: 'Zoom in', category: 'View' },
  ZOOM_OUT: { key: '-', description: 'Zoom out', category: 'View' },
  RESET_VIEW: { key: 'r', description: 'Reset view', category: 'View' },
  RESET_VIEW_ALT: { key: 'Home', description: 'Reset view (alt)', category: 'View' },
  PAN_UP: { key: 'ArrowUp', description: 'Pan up', category: 'Navigation' },
  PAN_DOWN: { key: 'ArrowDown', description: 'Pan down', category: 'Navigation' },
  PAN_LEFT: { key: 'ArrowLeft', description: 'Pan left', category: 'Navigation' },
  PAN_RIGHT: { key: 'ArrowRight', description: 'Pan right', category: 'Navigation' },
  TOGGLE_EDITOR: { key: 'e', meta: true, description: 'Toggle editor', category: 'Editor' },
  TOGGLE_AI_CHAT: { key: 'k', meta: true, description: 'Toggle AI chat', category: 'Editor' },
  HELP: { key: '?', description: 'Show keyboard shortcuts', category: 'Help' },
  HELP_ALT: { key: '/', shift: true, description: 'Show keyboard shortcuts (alt)', category: 'Help' },
  EXPORT_PNG: { key: 'p', meta: true, shift: true, description: 'Export as PNG', category: 'Export' },
  EXPORT_SVG: { key: 's', meta: true, shift: true, description: 'Export as SVG', category: 'Export' },
  COPY_CLIPBOARD: { key: 'c', meta: true, shift: true, description: 'Copy to clipboard', category: 'Export' },
};

/**
 * Get formatted shortcut key display
 */
export function formatShortcutKey(shortcut) {
  const parts = [];
  const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad|iPod/.test(navigator.platform);

  if (shortcut.meta) {
    parts.push(isMac ? '⌘' : 'Ctrl');
  }
  if (shortcut.shift) {
    parts.push(isMac ? '⇧' : 'Shift');
  }
  if (shortcut.alt) {
    parts.push(isMac ? '⌥' : 'Alt');
  }

  let key = shortcut.key;
  // Format special keys
  if (key === 'ArrowUp') key = '↑';
  else if (key === 'ArrowDown') key = '↓';
  else if (key === 'ArrowLeft') key = '←';
  else if (key === 'ArrowRight') key = '→';
  else if (key === 'Home') key = 'Home';
  else if (key === '=') key = '+';
  else if (key === '/') key = '/';
  else key = key.toUpperCase();

  parts.push(key);
  return parts.join(isMac ? '' : '+');
}

/**
 * Group shortcuts by category
 */
export function getShortcutsByCategory() {
  const categories = {};

  Object.entries(SHORTCUTS).forEach(([name, shortcut]) => {
    if (name.endsWith('_ALT')) return; // Skip alt shortcuts

    const category = shortcut.category || 'Other';
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push({
      name,
      ...shortcut,
      formatted: formatShortcutKey(shortcut)
    });
  });

  return categories;
}

/**
 * Check if an event matches a shortcut definition
 */
function matchesShortcut(event, shortcut) {
  const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform);
  const metaPressed = isMac ? event.metaKey : event.ctrlKey;

  if (shortcut.meta && !metaPressed) return false;
  if (!shortcut.meta && metaPressed) return false;
  if (shortcut.shift && !event.shiftKey) return false;
  if (!shortcut.shift && event.shiftKey && shortcut.key !== '?') return false;
  if (shortcut.alt && !event.altKey) return false;
  if (!shortcut.alt && event.altKey) return false;

  const key = event.key.toLowerCase();
  const shortcutKey = shortcut.key.toLowerCase();
  const shortcutKeyAlt = shortcut.keyAlt?.toLowerCase();

  return key === shortcutKey || (shortcutKeyAlt && key === shortcutKeyAlt);
}

/**
 * Custom hook for keyboard shortcuts
 * @param {Object} handlers - Object mapping shortcut names to handler functions
 * @param {boolean} enabled - Whether shortcuts are enabled
 */
export function useKeyboardShortcuts(handlers, enabled = true) {
  const handleKeyDown = useCallback((event) => {
    if (!enabled) return;

    // Ignore if typing in an input or textarea
    const target = event.target;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
      return;
    }

    // Check each shortcut
    for (const [name, shortcut] of Object.entries(SHORTCUTS)) {
      if (matchesShortcut(event, shortcut)) {
        const handler = handlers[name];
        if (handler) {
          event.preventDefault();
          handler(event);
          return;
        }
      }
    }
  }, [handlers, enabled]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}

export default useKeyboardShortcuts;
