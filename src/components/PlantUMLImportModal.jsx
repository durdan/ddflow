import React, { useState, useRef, useEffect } from 'react';
import { plantumlToDDFlow, detectPlantUMLType } from '../services/plantumlService.js';

const COLORS = {
  purple: '#7C3AED',
  blue: '#0EA5E9',
  green: '#10B981',
  orange: '#F59E0B',
  red: '#EF4444',
  indigo: '#6366F1',
};

function PlantUMLImportModal({ isOpen, onClose, onImport, theme }) {
  const [source, setSource] = useState('');
  const [preview, setPreview] = useState(null); // { type, source }
  const [error, setError] = useState('');
  const [detectedType, setDetectedType] = useState(null);
  const fileInputRef = useRef(null);
  const isDark = theme?.name === 'dark';

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setSource('');
      setPreview(null);
      setError('');
      setDetectedType(null);
    }
  }, [isOpen]);

  // Auto-detect type as user types
  useEffect(() => {
    if (source.trim()) {
      try {
        const type = detectPlantUMLType(source);
        setDetectedType(type);
      } catch {
        setDetectedType(null);
      }
    } else {
      setDetectedType(null);
    }
  }, [source]);

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setSource(event.target.result);
      setPreview(null);
      setError('');
    };
    reader.onerror = () => {
      setError('Failed to read file');
    };
    reader.readAsText(file);
  };

  const handlePreview = () => {
    setError('');
    setPreview(null);

    if (!source.trim()) {
      setError('Please enter PlantUML source code');
      return;
    }

    try {
      const result = plantumlToDDFlow(source);
      setPreview(result);
    } catch (err) {
      setError(err.message || 'Failed to convert PlantUML');
    }
  };

  const handleImport = () => {
    if (preview) {
      onImport(preview.type, preview.source);
    }
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
    inputSection: {
      marginBottom: 16,
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
      height: 200,
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
    fileRow: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 12,
    },
    uploadBtn: {
      padding: '8px 16px',
      background: `${COLORS.blue}20`,
      border: `1px solid ${COLORS.blue}`,
      borderRadius: 6,
      color: COLORS.blue,
      fontSize: '0.8rem',
      fontWeight: 500,
      cursor: 'pointer',
    },
    fileHint: {
      fontSize: '0.75rem',
      color: theme?.textMuted || '#666',
    },
    typeIndicator: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 10px',
      background: `${COLORS.purple}20`,
      borderRadius: 6,
      fontSize: '0.75rem',
      color: COLORS.purple,
      marginTop: 8,
    },
    previewBtn: {
      width: '100%',
      padding: '12px 20px',
      background: `linear-gradient(135deg, ${COLORS.purple}, ${COLORS.indigo})`,
      border: 'none',
      borderRadius: 8,
      color: '#fff',
      fontSize: '0.9rem',
      fontWeight: 600,
      cursor: 'pointer',
      marginTop: 16,
    },
    previewBtnDisabled: {
      width: '100%',
      padding: '12px 20px',
      background: 'rgba(255,255,255,0.1)',
      border: 'none',
      borderRadius: 8,
      color: '#666',
      fontSize: '0.9rem',
      fontWeight: 600,
      cursor: 'not-allowed',
      marginTop: 16,
    },
    error: {
      marginTop: 16,
      padding: '12px 16px',
      background: `${COLORS.red}15`,
      border: `1px solid ${COLORS.red}40`,
      borderRadius: 8,
      color: COLORS.red,
      fontSize: '0.85rem',
    },
    previewSection: {
      marginTop: 20,
      padding: 16,
      background: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.05)',
      borderRadius: 12,
    },
    previewHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 12,
    },
    previewIcon: {
      fontSize: '1rem',
    },
    previewTitle: {
      fontSize: '0.9rem',
      fontWeight: 600,
      color: COLORS.green,
    },
    previewType: {
      display: 'inline-block',
      padding: '4px 10px',
      background: `${COLORS.green}20`,
      borderRadius: 6,
      color: COLORS.green,
      fontSize: '0.8rem',
      fontWeight: 500,
      marginBottom: 12,
    },
    dslPreview: {
      background: theme?.inputBg || (isDark ? 'rgba(0,0,0,0.4)' : '#fff'),
      padding: 12,
      borderRadius: 8,
      maxHeight: 200,
      overflow: 'auto',
      fontFamily: 'Monaco, Consolas, monospace',
      fontSize: '0.75rem',
      color: theme?.editorText || COLORS.purple,
      whiteSpace: 'pre-wrap',
      lineHeight: 1.5,
    },
    footer: {
      padding: '12px 20px',
      borderTop: `1px solid ${theme?.border || 'rgba(255,255,255,0.1)'}`,
      display: 'flex',
      justifyContent: 'flex-end',
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
    importBtn: {
      padding: '8px 20px',
      background: `linear-gradient(135deg, ${COLORS.green}, ${COLORS.blue})`,
      border: 'none',
      borderRadius: 6,
      color: '#fff',
      fontSize: '0.8rem',
      fontWeight: 600,
      cursor: 'pointer',
    },
    importBtnDisabled: {
      padding: '8px 20px',
      background: 'rgba(255,255,255,0.1)',
      border: 'none',
      borderRadius: 6,
      color: '#666',
      fontSize: '0.8rem',
      cursor: 'not-allowed',
    },
    exampleHint: {
      marginTop: 12,
      padding: 12,
      background: `${COLORS.blue}10`,
      borderRadius: 8,
      fontSize: '0.75rem',
      color: theme?.textSecondary || '#888',
    },
    exampleCode: {
      fontFamily: 'Monaco, Consolas, monospace',
      fontSize: '0.7rem',
      color: COLORS.blue,
      marginTop: 8,
      whiteSpace: 'pre',
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
              <div style={styles.title}>Import from PlantUML</div>
              <div style={styles.subtitle}>Convert PlantUML diagrams to DDFlow</div>
            </div>
          </div>
          <button style={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Content */}
        <div style={styles.content}>
          {/* Input Section */}
          <div style={styles.inputSection}>
            <label style={styles.label}>PLANTUML SOURCE</label>
            <textarea
              style={styles.textarea}
              value={source}
              onChange={(e) => {
                setSource(e.target.value);
                setPreview(null);
                setError('');
              }}
              placeholder={`@startuml
participant Client
participant Server
Client -> Server: Request
Server --> Client: Response
@enduml`}
              spellCheck={false}
            />

            <div style={styles.fileRow}>
              <button
                style={styles.uploadBtn}
                onClick={() => fileInputRef.current?.click()}
              >
                Upload .puml File
              </button>
              <span style={styles.fileHint}>
                Supports .puml, .plantuml, .txt files
              </span>
              <input
                ref={fileInputRef}
                type="file"
                accept=".puml,.plantuml,.txt"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
            </div>

            {detectedType && (
              <div style={styles.typeIndicator}>
                <span>Detected type:</span>
                <strong>{detectedType}</strong>
              </div>
            )}
          </div>

          {/* Example Hint */}
          {!source && (
            <div style={styles.exampleHint}>
              <strong>Supported diagram types:</strong> Sequence, Class, State, Activity (Flowchart), Use Case, Component (Architecture), Mind Map, Gantt, ERD
              <div style={styles.exampleCode}>
{`@startuml
class User {
  +id: string
  +login(): boolean
}
@enduml`}
              </div>
            </div>
          )}

          {/* Preview Button */}
          <button
            style={source.trim() ? styles.previewBtn : styles.previewBtnDisabled}
            onClick={handlePreview}
            disabled={!source.trim()}
          >
            Preview Conversion
          </button>

          {/* Error */}
          {error && <div style={styles.error}>❌ {error}</div>}

          {/* Preview Section */}
          {preview && (
            <div style={styles.previewSection}>
              <div style={styles.previewHeader}>
                <span style={styles.previewIcon}>✅</span>
                <span style={styles.previewTitle}>Conversion Successful</span>
              </div>
              <div style={styles.previewType}>{preview.type}</div>
              <div style={styles.dslPreview}>{preview.source}</div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <button style={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>
          <button
            style={preview ? styles.importBtn : styles.importBtnDisabled}
            onClick={handleImport}
            disabled={!preview}
          >
            Import Diagram
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlantUMLImportModal;
