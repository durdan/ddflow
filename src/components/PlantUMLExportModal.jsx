import React, { useState, useEffect } from 'react';
import { ddflowToPlantUML, downloadPlantUMLFile, copyPlantUMLToClipboard } from '../services/plantumlService.js';

const COLORS = {
  purple: '#7C3AED',
  blue: '#0EA5E9',
  green: '#10B981',
  orange: '#F59E0B',
  red: '#EF4444',
  indigo: '#6366F1',
};

// Supported diagram types for PlantUML export
const SUPPORTED_TYPES = [
  'sequence',
  'class',
  'state',
  'flowchart',
  'usecase',
  'architecture',
  'component',
  'mindmap',
  'wbs',
  'gantt',
  'erd',
  'orgchart',
];

function PlantUMLExportModal({ isOpen, onClose, diagramType, diagramSource, theme }) {
  const [plantUMLSource, setPlantUMLSource] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const isDark = theme?.name === 'dark';

  // Convert when modal opens
  useEffect(() => {
    if (isOpen && diagramType && diagramSource) {
      setError('');
      setCopied(false);

      if (!SUPPORTED_TYPES.includes(diagramType)) {
        setError(`Export to PlantUML is not supported for "${diagramType}" diagrams.\n\nSupported types: ${SUPPORTED_TYPES.join(', ')}`);
        setPlantUMLSource('');
        return;
      }

      try {
        const result = ddflowToPlantUML(diagramType, diagramSource);
        setPlantUMLSource(result);
      } catch (err) {
        setError(err.message || 'Failed to convert to PlantUML');
        setPlantUMLSource('');
      }
    }
  }, [isOpen, diagramType, diagramSource]);

  // Reset when modal closes
  useEffect(() => {
    if (!isOpen) {
      setPlantUMLSource('');
      setError('');
      setCopied(false);
    }
  }, [isOpen]);

  const handleCopy = async () => {
    const success = await copyPlantUMLToClipboard(plantUMLSource);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    const filename = `diagram-${diagramType}`;
    downloadPlantUMLFile(plantUMLSource, filename);
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
      maxWidth: 700,
      maxHeight: '90vh',
      overflow: 'hidden',
      boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      padding: '16px 20px',
      borderBottom: `1px solid ${theme?.border || 'rgba(255,255,255,0.1)'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: `${COLORS.green}15`,
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
    subtitle: {
      fontSize: '0.7rem',
      color: theme?.textSecondary || '#888',
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
      flex: 1,
      overflowY: 'auto',
    },
    typeInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16,
    },
    typeBadge: {
      display: 'inline-block',
      padding: '6px 14px',
      background: `${COLORS.purple}20`,
      borderRadius: 8,
      color: COLORS.purple,
      fontSize: '0.85rem',
      fontWeight: 600,
    },
    conversionArrow: {
      fontSize: '1.2rem',
      color: theme?.textMuted || '#666',
    },
    outputBadge: {
      display: 'inline-block',
      padding: '6px 14px',
      background: `${COLORS.green}20`,
      borderRadius: 8,
      color: COLORS.green,
      fontSize: '0.85rem',
      fontWeight: 600,
    },
    label: {
      display: 'block',
      fontSize: '0.8rem',
      fontWeight: 500,
      color: theme?.textSecondary || '#888',
      marginBottom: 8,
    },
    textarea: {
      width: '100%',
      height: 300,
      padding: 12,
      background: theme?.inputBg || (isDark ? 'rgba(0,0,0,0.3)' : '#fff'),
      border: `1px solid ${theme?.border || 'rgba(255,255,255,0.1)'}`,
      borderRadius: 8,
      color: theme?.textPrimary || '#fff',
      fontFamily: 'Monaco, Consolas, monospace',
      fontSize: '0.85rem',
      resize: 'vertical',
      outline: 'none',
    },
    actions: {
      display: 'flex',
      gap: 10,
      marginTop: 16,
    },
    copyBtn: {
      flex: 1,
      padding: '12px 20px',
      background: copied ? `${COLORS.green}20` : `${COLORS.blue}20`,
      border: `1px solid ${copied ? COLORS.green : COLORS.blue}`,
      borderRadius: 8,
      color: copied ? COLORS.green : COLORS.blue,
      fontSize: '0.85rem',
      fontWeight: 600,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    },
    downloadBtn: {
      flex: 1,
      padding: '12px 20px',
      background: `linear-gradient(135deg, ${COLORS.purple}, ${COLORS.indigo})`,
      border: 'none',
      borderRadius: 8,
      color: '#fff',
      fontSize: '0.85rem',
      fontWeight: 600,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    },
    error: {
      padding: '20px',
      background: `${COLORS.red}10`,
      border: `1px solid ${COLORS.red}30`,
      borderRadius: 12,
      textAlign: 'center',
    },
    errorIcon: {
      fontSize: '2rem',
      marginBottom: 12,
    },
    errorText: {
      color: COLORS.red,
      fontSize: '0.9rem',
      whiteSpace: 'pre-wrap',
    },
    footer: {
      padding: '12px 20px',
      borderTop: `1px solid ${theme?.border || 'rgba(255,255,255,0.1)'}`,
      display: 'flex',
      justifyContent: 'flex-end',
    },
    closeFooterBtn: {
      padding: '8px 20px',
      background: 'rgba(255,255,255,0.1)',
      border: `1px solid ${theme?.border || 'rgba(255,255,255,0.1)'}`,
      borderRadius: 6,
      color: theme?.textSecondary || '#888',
      fontSize: '0.8rem',
      cursor: 'pointer',
    },
    hint: {
      marginTop: 12,
      padding: 12,
      background: `${COLORS.blue}10`,
      borderRadius: 8,
      fontSize: '0.75rem',
      color: theme?.textSecondary || '#888',
    },
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerTitle}>
            <span style={styles.headerIcon}>🌱</span>
            <div>
              <div style={styles.title}>Export to PlantUML</div>
              <div style={styles.subtitle}>Convert DDFlow diagram to PlantUML format</div>
            </div>
          </div>
          <button style={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Content */}
        <div style={styles.content}>
          {/* Type Info */}
          <div style={styles.typeInfo}>
            <span style={styles.typeBadge}>{diagramType}</span>
            <span style={styles.conversionArrow}>→</span>
            <span style={styles.outputBadge}>PlantUML</span>
          </div>

          {error ? (
            /* Error State */
            <div style={styles.error}>
              <div style={styles.errorIcon}>⚠️</div>
              <div style={styles.errorText}>{error}</div>
            </div>
          ) : (
            /* Success State */
            <>
              <label style={styles.label}>PLANTUML OUTPUT</label>
              <textarea
                style={styles.textarea}
                value={plantUMLSource}
                readOnly
                spellCheck={false}
              />

              <div style={styles.actions}>
                <button style={styles.copyBtn} onClick={handleCopy}>
                  {copied ? '✓ Copied!' : '📋 Copy to Clipboard'}
                </button>
                <button style={styles.downloadBtn} onClick={handleDownload}>
                  ⬇️ Download .puml
                </button>
              </div>

              <div style={styles.hint}>
                <strong>Tip:</strong> You can use this PlantUML code with online renderers like{' '}
                <a
                  href="https://www.plantuml.com/plantuml/uml/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: COLORS.blue }}
                >
                  plantuml.com
                </a>{' '}
                or in VS Code with the PlantUML extension.
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <button style={styles.closeFooterBtn} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlantUMLExportModal;
