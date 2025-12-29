import React, { useState, useRef, useCallback, useEffect } from 'react';
import { extractDiagramFromImage, isAIConfigured } from '../services/aiService.js';

const COLORS = {
  purple: '#7C3AED',
  blue: '#0EA5E9',
  green: '#10B981',
  orange: '#F59E0B',
  red: '#EF4444',
  indigo: '#6366F1',
};

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const SUPPORTED_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/gif'];

function ImageImportModal({ isOpen, onClose, onImport, theme }) {
  const [image, setImage] = useState(null); // { base64, mimeType, name, size, preview }
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null); // { type, dsl }
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);
  const dropZoneRef = useRef(null);
  const isDark = theme?.name === 'dark';

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setImage(null);
      setResult(null);
      setError(null);
      setIsAnalyzing(false);
    }
  }, [isOpen]);

  // Handle paste from clipboard
  useEffect(() => {
    if (!isOpen) return;

    const handlePaste = async (e) => {
      const items = e.clipboardData?.items;
      if (!items) return;

      for (const item of items) {
        if (item.type.startsWith('image/')) {
          e.preventDefault();
          const file = item.getAsFile();
          if (file) {
            await processFile(file);
          }
          break;
        }
      }
    };

    document.addEventListener('paste', handlePaste);
    return () => document.removeEventListener('paste', handlePaste);
  }, [isOpen]);

  const processFile = async (file) => {
    setError(null);
    setResult(null);

    // Validate file type
    if (!SUPPORTED_TYPES.includes(file.type)) {
      setError(`Unsupported file type: ${file.type}. Please use PNG, JPG, WEBP, or GIF.`);
      return;
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      setError(`File too large (${(file.size / 1024 / 1024).toFixed(1)}MB). Maximum size is 10MB.`);
      return;
    }

    // Read file as base64
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      const base64 = dataUrl.split(',')[1];
      setImage({
        base64,
        mimeType: file.type,
        name: file.name,
        size: file.size,
        preview: dataUrl,
      });
    };
    reader.onerror = () => {
      setError('Failed to read file. Please try again.');
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer?.files;
    if (files && files.length > 0) {
      await processFile(files[0]);
    }
  }, []);

  const handleFileSelect = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      await processFile(file);
    }
  };

  const [selectedType, setSelectedType] = useState(null);

  const handleAnalyze = async () => {
    if (!image || !isAIConfigured()) return;

    setIsAnalyzing(true);
    setError(null);
    setResult(null);
    setSelectedType(null);

    try {
      const extracted = await extractDiagramFromImage(image.base64, image.mimeType);
      setResult(extracted);
      setSelectedType(extracted.type);
    } catch (err) {
      setError(err.message || 'Failed to analyze image. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleApply = () => {
    if (result && onImport) {
      onImport(selectedType || result.type, result.dsl, result.name);
    }
  };

  const handleTypeChange = (newType) => {
    setSelectedType(newType);
  };

  const handleClear = () => {
    setImage(null);
    setResult(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  if (!isOpen) return null;

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  };

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
      maxWidth: 600,
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
      background: `${COLORS.purple}15`,
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
    dropZone: {
      border: `2px dashed ${isDragging ? COLORS.purple : (isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)')}`,
      borderRadius: 12,
      padding: 40,
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s',
      background: isDragging ? `${COLORS.purple}10` : 'transparent',
    },
    dropIcon: {
      fontSize: '3rem',
      marginBottom: 16,
      opacity: 0.7,
    },
    dropText: {
      fontSize: '1rem',
      fontWeight: 500,
      color: theme?.textPrimary || '#fff',
      marginBottom: 8,
    },
    dropSubtext: {
      fontSize: '0.8rem',
      color: theme?.textSecondary || '#888',
      marginBottom: 16,
    },
    browseBtn: {
      padding: '8px 20px',
      background: `${COLORS.purple}20`,
      border: `1px solid ${COLORS.purple}`,
      borderRadius: 8,
      color: COLORS.purple,
      fontSize: '0.85rem',
      fontWeight: 500,
      cursor: 'pointer',
    },
    pasteHint: {
      fontSize: '0.7rem',
      color: theme?.textMuted || '#666',
      marginTop: 16,
    },
    imagePreview: {
      marginTop: 20,
      padding: 16,
      background: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.05)',
      borderRadius: 12,
    },
    previewHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12,
    },
    previewInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    },
    previewName: {
      fontSize: '0.85rem',
      fontWeight: 500,
      color: theme?.textPrimary || '#fff',
    },
    previewSize: {
      fontSize: '0.75rem',
      color: theme?.textSecondary || '#888',
    },
    clearBtn: {
      padding: '4px 10px',
      background: 'transparent',
      border: `1px solid ${theme?.border || 'rgba(255,255,255,0.1)'}`,
      borderRadius: 6,
      color: theme?.textSecondary || '#888',
      fontSize: '0.75rem',
      cursor: 'pointer',
    },
    previewImage: {
      width: '100%',
      maxHeight: 300,
      objectFit: 'contain',
      borderRadius: 8,
      background: isDark ? 'rgba(0,0,0,0.5)' : '#fff',
    },
    analyzeBtn: {
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
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    },
    analyzingBtn: {
      width: '100%',
      padding: '12px 20px',
      background: `${COLORS.purple}50`,
      border: 'none',
      borderRadius: 8,
      color: '#fff',
      fontSize: '0.9rem',
      fontWeight: 600,
      cursor: 'not-allowed',
      marginTop: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
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
    result: {
      marginTop: 20,
      padding: 16,
      background: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.05)',
      borderRadius: 12,
    },
    resultHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 12,
    },
    resultIcon: {
      fontSize: '1rem',
    },
    resultTitle: {
      fontSize: '0.9rem',
      fontWeight: 600,
      color: COLORS.green,
    },
    resultType: {
      display: 'inline-block',
      padding: '4px 10px',
      background: `${COLORS.purple}20`,
      borderRadius: 6,
      color: COLORS.purple,
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
      fontFamily: 'Monaco, monospace',
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
    applyBtn: {
      padding: '8px 20px',
      background: `linear-gradient(135deg, ${COLORS.green}, ${COLORS.blue})`,
      border: 'none',
      borderRadius: 6,
      color: '#fff',
      fontSize: '0.8rem',
      fontWeight: 600,
      cursor: 'pointer',
    },
    disabledBtn: {
      padding: '8px 20px',
      background: 'rgba(255,255,255,0.1)',
      border: 'none',
      borderRadius: 6,
      color: '#666',
      fontSize: '0.8rem',
      cursor: 'not-allowed',
    },
    notConfigured: {
      textAlign: 'center',
      padding: 40,
      color: theme?.textSecondary || '#888',
    },
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerTitle}>
            <span style={styles.headerIcon}>🖼️</span>
            <div>
              <div style={styles.title}>Import from Image</div>
              <div style={styles.subtitle}>AI-powered diagram extraction</div>
            </div>
          </div>
          <button style={styles.closeBtn} onClick={onClose}>✕</button>
        </div>

        {/* Content */}
        <div style={styles.content}>
          {!isAIConfigured() ? (
            <div style={styles.notConfigured}>
              <div style={{ fontSize: '3rem', marginBottom: 16 }}>⚠️</div>
              <div style={{ fontSize: '1rem', fontWeight: 500, marginBottom: 8, color: theme?.textPrimary }}>
                AI Not Configured
              </div>
              <div style={{ fontSize: '0.85rem' }}>
                Please configure your AI provider in the .env file to use this feature.
              </div>
            </div>
          ) : (
            <>
              {/* Drop Zone */}
              {!image && (
                <div
                  ref={dropZoneRef}
                  style={styles.dropZone}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div style={styles.dropIcon}>📸</div>
                  <div style={styles.dropText}>
                    {isDragging ? 'Drop image here' : 'Drag & drop an image'}
                  </div>
                  <div style={styles.dropSubtext}>
                    or click to browse files
                  </div>
                  <button style={styles.browseBtn} onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>
                    Browse Files
                  </button>
                  <div style={styles.pasteHint}>
                    💡 Tip: You can also paste an image from clipboard (Ctrl+V / Cmd+V)
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept={SUPPORTED_TYPES.join(',')}
                    onChange={handleFileSelect}
                    style={{ display: 'none' }}
                  />
                </div>
              )}

              {/* Image Preview */}
              {image && (
                <div style={styles.imagePreview}>
                  <div style={styles.previewHeader}>
                    <div style={styles.previewInfo}>
                      <span style={styles.previewName}>{image.name}</span>
                      <span style={styles.previewSize}>({formatFileSize(image.size)})</span>
                    </div>
                    <button style={styles.clearBtn} onClick={handleClear}>
                      Clear
                    </button>
                  </div>
                  <img src={image.preview} alt="Preview" style={styles.previewImage} />

                  {/* Analyze Button */}
                  {!result && (
                    <button
                      style={isAnalyzing ? styles.analyzingBtn : styles.analyzeBtn}
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                    >
                      {isAnalyzing ? (
                        <>
                          <span>⏳</span> Analyzing with AI...
                        </>
                      ) : (
                        <>
                          <span>✨</span> Extract Diagram with AI
                        </>
                      )}
                    </button>
                  )}
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div style={styles.error}>
                  ❌ {error}
                </div>
              )}

              {/* Result */}
              {result && (
                <div style={styles.result}>
                  <div style={styles.resultHeader}>
                    <span style={styles.resultIcon}>✅</span>
                    <span style={styles.resultTitle}>Diagram Extracted Successfully</span>
                  </div>

                  {/* Diagram Name */}
                  <div style={{ marginBottom: 12, padding: '8px 12px', background: `${COLORS.purple}15`, borderRadius: 8, border: `1px solid ${COLORS.purple}30` }}>
                    <div style={{ fontSize: '0.7rem', color: theme?.textSecondary || '#888', marginBottom: 4 }}>DIAGRAM NAME</div>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: theme?.textPrimary || '#fff' }}>{result.name}</div>
                  </div>

                  {/* Type Selection */}
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontSize: '0.7rem', color: theme?.textSecondary || '#888', marginBottom: 8 }}>DIAGRAM TYPE</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {/* Primary detected type */}
                      <button
                        onClick={() => handleTypeChange(result.type)}
                        style={{
                          padding: '6px 14px',
                          background: selectedType === result.type ? `${COLORS.green}20` : 'transparent',
                          border: `2px solid ${selectedType === result.type ? COLORS.green : (isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)')}`,
                          borderRadius: 8,
                          color: selectedType === result.type ? COLORS.green : (theme?.textPrimary || '#fff'),
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6
                        }}
                      >
                        {selectedType === result.type && <span>✓</span>}
                        {result.type}
                        <span style={{ fontSize: '0.65rem', opacity: 0.7 }}>(detected)</span>
                      </button>

                      {/* Alternative types */}
                      {result.alternatives && result.alternatives.length > 0 && result.alternatives.map(alt => (
                        <button
                          key={alt}
                          onClick={() => handleTypeChange(alt)}
                          style={{
                            padding: '6px 14px',
                            background: selectedType === alt ? `${COLORS.blue}20` : 'transparent',
                            border: `2px solid ${selectedType === alt ? COLORS.blue : (isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)')}`,
                            borderRadius: 8,
                            color: selectedType === alt ? COLORS.blue : (theme?.textSecondary || '#888'),
                            fontSize: '0.85rem',
                            fontWeight: 500,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6
                          }}
                        >
                          {selectedType === alt && <span>✓</span>}
                          {alt}
                        </button>
                      ))}
                    </div>
                    {result.alternatives && result.alternatives.length > 0 && (
                      <div style={{ fontSize: '0.7rem', color: theme?.textMuted || '#666', marginTop: 6 }}>
                        💡 Alternative types may render this data differently
                      </div>
                    )}
                  </div>

                  {/* DSL Preview */}
                  <div style={{ fontSize: '0.7rem', color: theme?.textSecondary || '#888', marginBottom: 6 }}>DSL PREVIEW</div>
                  <div style={styles.dslPreview}>
                    {result.dsl}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <button style={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>
          {result ? (
            <button style={styles.applyBtn} onClick={handleApply}>
              Apply Diagram
            </button>
          ) : (
            <button style={styles.disabledBtn} disabled>
              Apply Diagram
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageImportModal;
