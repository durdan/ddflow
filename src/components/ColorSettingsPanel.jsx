import React, { useState, useEffect } from 'react';
import { getColorSettings, saveColorSettings, resetColorSettings, DEFAULT_COLOR_SETTINGS, COLOR_PRESETS } from '../services/storageService.js';

function ColorSettingsPanel({ isOpen, onClose, onApply, theme }) {
  const [settings, setSettings] = useState(() => getColorSettings());
  const [activePreset, setActivePreset] = useState(null);
  const isDark = theme?.name === 'dark';

  // Detect active preset
  useEffect(() => {
    const preset = Object.entries(COLOR_PRESETS).find(
      ([_, p]) => p.accentPrimary === settings.accentPrimary && p.accentSecondary === settings.accentSecondary
    );
    setActivePreset(preset ? preset[0] : null);
  }, [settings]);

  const handlePresetClick = (presetKey) => {
    const preset = COLOR_PRESETS[presetKey];
    const newSettings = {
      ...settings,
      accentPrimary: preset.accentPrimary,
      accentSecondary: preset.accentSecondary,
    };
    setSettings(newSettings);
  };

  const handleColorChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleApply = () => {
    saveColorSettings(settings);
    if (onApply) onApply(settings);
    onClose();
  };

  const handleReset = () => {
    resetColorSettings();
    setSettings({ ...DEFAULT_COLOR_SETTINGS });
    if (onApply) onApply(DEFAULT_COLOR_SETTINGS);
  };

  if (!isOpen) return null;

  const styles = {
    overlay: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: 20,
    },
    modal: {
      background: theme?.modalBg || (isDark ? 'linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))' : 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))'),
      borderRadius: 16,
      border: `1px solid ${theme?.border || 'rgba(255,255,255,0.1)'}`,
      width: '100%',
      maxWidth: 480,
      overflow: 'hidden',
      boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
    },
    header: {
      padding: '16px 20px',
      borderBottom: `1px solid ${theme?.border || 'rgba(255,255,255,0.1)'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: `${settings.accentPrimary}15`,
    },
    headerTitle: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
    },
    headerIcon: {
      fontSize: '1.2rem',
    },
    title: {
      fontWeight: 600,
      color: theme?.textPrimary || '#fff',
    },
    closeBtn: {
      background: 'transparent',
      border: 'none',
      color: theme?.textSecondary || '#888',
      fontSize: '1.2rem',
      cursor: 'pointer',
      padding: 4,
    },
    content: {
      padding: 20,
      maxHeight: 'calc(80vh - 140px)',
      overflowY: 'auto',
    },
    section: {
      marginBottom: 24,
    },
    sectionTitle: {
      fontSize: '0.75rem',
      fontWeight: 600,
      color: theme?.textSecondary || '#888',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      marginBottom: 12,
    },
    presetsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 8,
    },
    presetItem: (isActive, color) => ({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      padding: '12px 8px',
      background: isActive ? `${color}20` : (isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.05)'),
      border: `2px solid ${isActive ? color : 'transparent'}`,
      borderRadius: 10,
      cursor: 'pointer',
      transition: 'all 0.15s',
    }),
    presetIcon: {
      fontSize: '1.4rem',
    },
    presetName: {
      fontSize: '0.65rem',
      color: theme?.textPrimary || '#fff',
      textAlign: 'center',
      fontWeight: 500,
    },
    colorRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 0',
      borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
    },
    colorLabel: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
    },
    colorName: {
      fontSize: '0.85rem',
      fontWeight: 500,
      color: theme?.textPrimary || '#fff',
    },
    colorDesc: {
      fontSize: '0.7rem',
      color: theme?.textSecondary || '#888',
    },
    colorInput: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    },
    colorPicker: {
      width: 36,
      height: 36,
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
      padding: 0,
    },
    colorHex: {
      fontSize: '0.75rem',
      fontFamily: 'Monaco, monospace',
      color: theme?.textSecondary || '#888',
      background: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.05)',
      padding: '4px 8px',
      borderRadius: 4,
    },
    preview: {
      padding: 16,
      background: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.05)',
      borderRadius: 10,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
    },
    previewItem: (color) => ({
      padding: '6px 12px',
      background: `${color}20`,
      border: `1px solid ${color}`,
      borderRadius: 6,
      color: color,
      fontSize: '0.75rem',
      fontWeight: 500,
    }),
    footer: {
      padding: '12px 20px',
      borderTop: `1px solid ${theme?.border || 'rgba(255,255,255,0.1)'}`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    resetBtn: {
      padding: '8px 16px',
      background: 'transparent',
      border: `1px solid ${theme?.border || 'rgba(255,255,255,0.1)'}`,
      borderRadius: 6,
      color: theme?.textSecondary || '#888',
      fontSize: '0.8rem',
      cursor: 'pointer',
    },
    buttonGroup: {
      display: 'flex',
      gap: 10,
    },
    cancelBtn: {
      padding: '8px 16px',
      background: 'rgba(255,255,255,0.1)',
      border: `1px solid ${theme?.border || 'rgba(255,255,255,0.1)'}`,
      borderRadius: 6,
      color: theme?.textSecondary || '#888',
      fontSize: '0.8rem',
      cursor: 'pointer',
    },
    applyBtn: {
      padding: '8px 16px',
      background: `linear-gradient(135deg, ${settings.accentPrimary}, ${settings.accentSecondary})`,
      border: 'none',
      borderRadius: 6,
      color: '#fff',
      fontSize: '0.8rem',
      fontWeight: 600,
      cursor: 'pointer',
    },
  };

  const colorSettings = [
    { key: 'accentPrimary', name: 'Primary Accent', desc: 'Main brand color for buttons, links' },
    { key: 'accentSecondary', name: 'Secondary Accent', desc: 'Gradients and hover states' },
    { key: 'selection', name: 'Selection', desc: 'Selected items highlight' },
    { key: 'success', name: 'Success', desc: 'Success messages and states' },
    { key: 'warning', name: 'Warning', desc: 'Warning messages and states' },
    { key: 'error', name: 'Error', desc: 'Error messages and states' },
  ];

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerTitle}>
            <span style={styles.headerIcon}>🎨</span>
            <span style={styles.title}>Color Settings</span>
          </div>
          <button style={styles.closeBtn} onClick={onClose}>✕</button>
        </div>

        {/* Content */}
        <div style={styles.content}>
          {/* Presets */}
          <div style={styles.section}>
            <div style={styles.sectionTitle}>Color Presets</div>
            <div style={styles.presetsGrid}>
              {Object.entries(COLOR_PRESETS).map(([key, preset]) => (
                <div
                  key={key}
                  style={styles.presetItem(activePreset === key, preset.accentPrimary)}
                  onClick={() => handlePresetClick(key)}
                  onMouseEnter={(e) => {
                    if (activePreset !== key) {
                      e.currentTarget.style.borderColor = preset.accentPrimary + '50';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activePreset !== key) {
                      e.currentTarget.style.borderColor = 'transparent';
                    }
                  }}
                >
                  <span style={styles.presetIcon}>{preset.icon}</span>
                  <span style={styles.presetName}>{preset.name.split(' ')[0]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Colors */}
          <div style={styles.section}>
            <div style={styles.sectionTitle}>Custom Colors</div>
            {colorSettings.map(({ key, name, desc }) => (
              <div key={key} style={styles.colorRow}>
                <div style={styles.colorLabel}>
                  <span style={styles.colorName}>{name}</span>
                  <span style={styles.colorDesc}>{desc}</span>
                </div>
                <div style={styles.colorInput}>
                  <input
                    type="color"
                    value={settings[key]}
                    onChange={(e) => handleColorChange(key, e.target.value)}
                    style={styles.colorPicker}
                  />
                  <span style={styles.colorHex}>{settings[key]}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Preview */}
          <div style={styles.section}>
            <div style={styles.sectionTitle}>Preview</div>
            <div style={styles.preview}>
              <span style={styles.previewItem(settings.accentPrimary)}>Primary</span>
              <span style={styles.previewItem(settings.accentSecondary)}>Secondary</span>
              <span style={styles.previewItem(settings.selection)}>Selected</span>
              <span style={styles.previewItem(settings.success)}>Success</span>
              <span style={styles.previewItem(settings.warning)}>Warning</span>
              <span style={styles.previewItem(settings.error)}>Error</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <button style={styles.resetBtn} onClick={handleReset}>
            Reset to Default
          </button>
          <div style={styles.buttonGroup}>
            <button style={styles.cancelBtn} onClick={onClose}>
              Cancel
            </button>
            <button style={styles.applyBtn} onClick={handleApply}>
              Apply Colors
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorSettingsPanel;
