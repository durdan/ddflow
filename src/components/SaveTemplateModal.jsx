import React, { useState, useRef, useEffect } from 'react';
import { saveCustomTemplate, TEMPLATE_CATEGORIES } from '../services/templateService.js';

const COLORS = {
  purple: '#7C3AED',
  green: '#10B981',
  red: '#EF4444',
};

function SaveTemplateModal({ isOpen, onClose, diagramType, diagramSource, theme }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(TEMPLATE_CATEGORIES.FLOWCHARTS);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const nameInputRef = useRef(null);

  const isDark = theme?.name === 'dark';

  useEffect(() => {
    if (isOpen) {
      setName('');
      setDescription('');
      setCategory(TEMPLATE_CATEGORIES.FLOWCHARTS);
      setError('');
      setSuccess(false);
      setTimeout(() => nameInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSave = () => {
    if (!name.trim()) {
      setError('Please enter a template name');
      return;
    }

    if (!diagramSource?.trim()) {
      setError('No diagram content to save');
      return;
    }

    try {
      saveCustomTemplate({
        name: name.trim(),
        description: description.trim() || 'Custom template',
        category,
        type: diagramType,
        source: diagramSource,
      });

      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (err) {
      setError('Failed to save template: ' + err.message);
    }
  };

  if (!isOpen) return null;

  const styles = {
    overlay: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(4px)',
      zIndex: 1001,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modal: {
      width: '90vw',
      maxWidth: '450px',
      background: isDark
        ? 'linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))'
        : 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(241,245,249,0.98))',
      borderRadius: '16px',
      border: `1px solid ${isDark ? 'rgba(124,58,237,0.3)' : 'rgba(124,58,237,0.2)'}`,
      overflow: 'hidden',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    },
    header: {
      padding: '20px 24px',
      borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: isDark ? 'rgba(124, 58, 237, 0.1)' : 'rgba(124, 58, 237, 0.05)',
    },
    headerTitle: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    headerIcon: {
      fontSize: '24px',
    },
    titleText: {
      color: isDark ? '#fff' : '#1e293b',
      fontWeight: 600,
      fontSize: '18px',
    },
    closeButton: {
      background: 'transparent',
      border: 'none',
      color: isDark ? '#888' : '#64748b',
      cursor: 'pointer',
      fontSize: '24px',
      padding: '4px 8px',
      borderRadius: '6px',
    },
    content: {
      padding: '24px',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      color: isDark ? '#aaa' : '#64748b',
      fontSize: '12px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      marginBottom: '8px',
    },
    input: {
      width: '100%',
      padding: '12px 14px',
      background: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.05)',
      border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
      borderRadius: '8px',
      color: isDark ? '#fff' : '#1e293b',
      fontSize: '14px',
      outline: 'none',
      boxSizing: 'border-box',
    },
    textarea: {
      width: '100%',
      padding: '12px 14px',
      background: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.05)',
      border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
      borderRadius: '8px',
      color: isDark ? '#fff' : '#1e293b',
      fontSize: '14px',
      outline: 'none',
      minHeight: '80px',
      resize: 'vertical',
      fontFamily: 'inherit',
      boxSizing: 'border-box',
    },
    select: {
      width: '100%',
      padding: '12px 14px',
      background: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.05)',
      border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
      borderRadius: '8px',
      color: isDark ? '#fff' : '#1e293b',
      fontSize: '14px',
      outline: 'none',
      cursor: 'pointer',
      boxSizing: 'border-box',
    },
    typeInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '12px 14px',
      background: isDark ? 'rgba(124,58,237,0.1)' : 'rgba(124,58,237,0.05)',
      borderRadius: '8px',
      border: `1px solid ${isDark ? 'rgba(124,58,237,0.2)' : 'rgba(124,58,237,0.1)'}`,
    },
    typeLabel: {
      color: isDark ? '#888' : '#64748b',
      fontSize: '12px',
    },
    typeBadge: {
      padding: '4px 10px',
      background: `${COLORS.purple}20`,
      color: COLORS.purple,
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    error: {
      padding: '10px 14px',
      background: `${COLORS.red}15`,
      border: `1px solid ${COLORS.red}40`,
      borderRadius: '8px',
      color: COLORS.red,
      fontSize: '13px',
      marginBottom: '16px',
    },
    success: {
      padding: '10px 14px',
      background: `${COLORS.green}15`,
      border: `1px solid ${COLORS.green}40`,
      borderRadius: '8px',
      color: COLORS.green,
      fontSize: '13px',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    footer: {
      padding: '16px 24px',
      borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '12px',
    },
    button: (isPrimary) => ({
      padding: '10px 20px',
      background: isPrimary ? COLORS.purple : (isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'),
      color: isPrimary ? '#fff' : (isDark ? '#fff' : '#1e293b'),
      border: 'none',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'all 0.2s',
    }),
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerTitle}>
            <span style={styles.headerIcon}>💾</span>
            <span style={styles.titleText}>Save as Template</span>
          </div>
          <button style={styles.closeButton} onClick={onClose}>×</button>
        </div>

        {/* Content */}
        <div style={styles.content}>
          {error && <div style={styles.error}>{error}</div>}
          {success && (
            <div style={styles.success}>
              <span>✓</span>
              Template saved successfully!
            </div>
          )}

          <div style={styles.formGroup}>
            <label style={styles.label}>Template Name</label>
            <input
              ref={nameInputRef}
              type="text"
              placeholder="Enter template name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              disabled={success}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Description</label>
            <textarea
              placeholder="Describe what this template is for..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={styles.textarea}
              disabled={success}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={styles.select}
              disabled={success}
            >
              {Object.values(TEMPLATE_CATEGORIES).map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Diagram Type</label>
            <div style={styles.typeInfo}>
              <span style={styles.typeLabel}>This template will be saved as:</span>
              <span style={styles.typeBadge}>{diagramType}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <button
            style={styles.button(false)}
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            style={styles.button(true)}
            onClick={handleSave}
            disabled={success}
          >
            {success ? 'Saved!' : 'Save Template'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SaveTemplateModal;
