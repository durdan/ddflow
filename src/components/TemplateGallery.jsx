import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  getPresetTemplates,
  getCustomTemplates,
  getCategories,
  searchTemplates,
  deleteCustomTemplate,
  TEMPLATE_CATEGORIES,
} from '../services/templateService.js';

const COLORS = {
  purple: '#7C3AED',
  blue: '#0EA5E9',
  green: '#10B981',
  orange: '#F59E0B',
  pink: '#EC4899',
  red: '#EF4444',
  cyan: '#06B6D4',
  violet: '#8B5CF6',
};

// Thumbnail icons for each diagram type
const TYPE_ICONS = {
  flowchart: '🔀',
  sequence: '↔️',
  mindmap: '🧠',
  wbs: '📊',
  erd: '🗃️',
  architecture: '🏗️',
  state: '🔄',
  timeline: '📅',
  orgchart: '👥',
  network: '🌐',
  gantt: '📈',
  class: '📦',
  usecase: '👤',
  pie: '🥧',
  quadrant: '📍',
  git: '🔱',
  deployment: '☁️',
  wireframe: '📱',
  activity: '⚡',
  component: '🧩',
  c4: '🏛️',
  requirement: '📋',
  journey: '🚶',
};

// Category icons
const CATEGORY_ICONS = {
  [TEMPLATE_CATEGORIES.FLOWCHARTS]: '🔀',
  [TEMPLATE_CATEGORIES.ARCHITECTURE]: '🏗️',
  [TEMPLATE_CATEGORIES.DATA_MODELING]: '🗃️',
  [TEMPLATE_CATEGORIES.PROJECT_MANAGEMENT]: '📊',
  [TEMPLATE_CATEGORIES.SOFTWARE_DESIGN]: '💻',
  [TEMPLATE_CATEGORIES.BUSINESS]: '💼',
  [TEMPLATE_CATEGORIES.NETWORK]: '🌐',
  [TEMPLATE_CATEGORIES.UI_DESIGN]: '📱',
  [TEMPLATE_CATEGORIES.APP_BUNDLES]: '📦',
  'My Templates': '⭐',
};

// Color palette for categories
const CATEGORY_COLORS = {
  [TEMPLATE_CATEGORIES.FLOWCHARTS]: COLORS.blue,
  [TEMPLATE_CATEGORIES.ARCHITECTURE]: COLORS.purple,
  [TEMPLATE_CATEGORIES.DATA_MODELING]: COLORS.green,
  [TEMPLATE_CATEGORIES.PROJECT_MANAGEMENT]: COLORS.orange,
  [TEMPLATE_CATEGORIES.SOFTWARE_DESIGN]: COLORS.violet,
  [TEMPLATE_CATEGORIES.BUSINESS]: COLORS.pink,
  [TEMPLATE_CATEGORIES.NETWORK]: COLORS.cyan,
  [TEMPLATE_CATEGORIES.UI_DESIGN]: COLORS.red,
  [TEMPLATE_CATEGORIES.APP_BUNDLES]: COLORS.teal,
  'My Templates': COLORS.orange,
};

function TemplateGallery({ isOpen, onClose, onApplyTemplate, theme }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredTemplate, setHoveredTemplate] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const searchInputRef = useRef(null);

  const isDark = theme?.name === 'dark';

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Get templates based on filters
  const templates = useMemo(() => {
    let result;

    if (searchQuery.trim()) {
      result = searchTemplates(searchQuery);
    } else {
      const presets = getPresetTemplates();
      const custom = getCustomTemplates();
      result = [...custom, ...presets];
    }

    // Filter by category
    if (selectedCategory === 'All') {
      return result;
    } else if (selectedCategory === 'My Templates') {
      return result.filter(t => t.isCustom);
    } else {
      return result.filter(t => t.category === selectedCategory);
    }
  }, [searchQuery, selectedCategory]);

  // Get all categories including custom
  const categories = useMemo(() => {
    const customTemplates = getCustomTemplates();
    const cats = ['All', ...Object.values(TEMPLATE_CATEGORIES)];
    if (customTemplates.length > 0) {
      cats.splice(1, 0, 'My Templates');
    }
    return cats;
  }, []);

  const handleApply = (template) => {
    onApplyTemplate(template.type, template.source);
    onClose();
  };

  const handleDelete = (templateId) => {
    deleteCustomTemplate(templateId);
    setConfirmDelete(null);
  };

  if (!isOpen) return null;

  const styles = {
    overlay: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(4px)',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modal: {
      width: '90vw',
      maxWidth: '1100px',
      height: '85vh',
      maxHeight: '800px',
      background: isDark
        ? 'linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))'
        : 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(241,245,249,0.98))',
      borderRadius: '16px',
      border: `1px solid ${isDark ? 'rgba(124,58,237,0.3)' : 'rgba(124,58,237,0.2)'}`,
      display: 'flex',
      flexDirection: 'column',
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
    subtitle: {
      color: isDark ? '#888' : '#64748b',
      fontSize: '12px',
    },
    closeButton: {
      background: 'transparent',
      border: 'none',
      color: isDark ? '#888' : '#64748b',
      cursor: 'pointer',
      fontSize: '24px',
      padding: '4px 8px',
      borderRadius: '6px',
      transition: 'all 0.2s',
    },
    searchBar: {
      padding: '16px 24px',
      borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
    },
    searchInput: {
      width: '100%',
      padding: '12px 16px',
      paddingLeft: '44px',
      background: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.05)',
      border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
      borderRadius: '10px',
      color: isDark ? '#fff' : '#1e293b',
      fontSize: '14px',
      outline: 'none',
      transition: 'all 0.2s',
    },
    searchWrapper: {
      position: 'relative',
    },
    searchIcon: {
      position: 'absolute',
      left: '14px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: isDark ? '#666' : '#94a3b8',
      fontSize: '16px',
      pointerEvents: 'none',
    },
    content: {
      display: 'flex',
      flex: 1,
      overflow: 'hidden',
    },
    sidebar: {
      width: '200px',
      borderRight: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
      padding: '16px 0',
      overflowY: 'auto',
    },
    categoryItem: (isSelected, color) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px 20px',
      cursor: 'pointer',
      background: isSelected ? (isDark ? 'rgba(124,58,237,0.2)' : 'rgba(124,58,237,0.1)') : 'transparent',
      borderLeft: isSelected ? `3px solid ${color || COLORS.purple}` : '3px solid transparent',
      color: isSelected ? (isDark ? '#fff' : '#1e293b') : (isDark ? '#aaa' : '#64748b'),
      fontSize: '13px',
      fontWeight: isSelected ? 600 : 400,
      transition: 'all 0.2s',
    }),
    categoryIcon: {
      fontSize: '16px',
    },
    categoryCount: {
      marginLeft: 'auto',
      fontSize: '11px',
      padding: '2px 6px',
      background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
      borderRadius: '10px',
      color: isDark ? '#888' : '#64748b',
    },
    grid: {
      flex: 1,
      padding: '20px',
      overflowY: 'auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: '16px',
      alignContent: 'start',
    },
    card: (isHovered, categoryColor) => ({
      background: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.8)',
      borderRadius: '12px',
      border: `1px solid ${isHovered ? (categoryColor || COLORS.purple) : (isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)')}`,
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.2s',
      transform: isHovered ? 'translateY(-2px)' : 'none',
      boxShadow: isHovered ? `0 8px 20px ${categoryColor}20` : 'none',
    }),
    cardThumbnail: (categoryColor) => ({
      height: '100px',
      background: `linear-gradient(135deg, ${categoryColor}15, ${categoryColor}05)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '40px',
      borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
    }),
    cardContent: {
      padding: '16px',
      minHeight: '100px',
    },
    cardTitle: {
      color: isDark ? '#ffffff' : '#1e293b',
      fontSize: '15px',
      fontWeight: 700,
      marginBottom: '8px',
      lineHeight: 1.3,
    },
    cardDescription: {
      color: isDark ? '#aaaaaa' : '#64748b',
      fontSize: '13px',
      lineHeight: 1.5,
      marginBottom: '12px',
      minHeight: '36px',
    },
    cardMeta: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginTop: '10px',
    },
    typeBadge: (color) => ({
      padding: '3px 8px',
      background: `${color}20`,
      color: color,
      borderRadius: '4px',
      fontSize: '10px',
      fontWeight: 600,
      textTransform: 'uppercase',
    }),
    customBadge: {
      padding: '3px 8px',
      background: `${COLORS.orange}20`,
      color: COLORS.orange,
      borderRadius: '4px',
      fontSize: '10px',
    },
    bundleBadge: {
      padding: '4px 10px',
      background: `${COLORS.teal}25`,
      color: COLORS.teal,
      borderRadius: '6px',
      fontSize: '10px',
      fontWeight: 600,
      border: `1px solid ${COLORS.teal}40`,
    },
    deleteButton: {
      marginLeft: 'auto',
      padding: '4px 8px',
      background: `${COLORS.red}20`,
      color: COLORS.red,
      border: 'none',
      borderRadius: '4px',
      fontSize: '11px',
      cursor: 'pointer',
    },
    emptyState: {
      gridColumn: '1 / -1',
      textAlign: 'center',
      padding: '60px 20px',
      color: isDark ? '#666' : '#94a3b8',
    },
    emptyIcon: {
      fontSize: '48px',
      marginBottom: '16px',
    },
    emptyTitle: {
      fontSize: '16px',
      color: isDark ? '#888' : '#64748b',
      marginBottom: '8px',
    },
    emptyText: {
      fontSize: '13px',
    },
    confirmOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '12px',
    },
    confirmBox: {
      background: isDark ? '#1e293b' : '#fff',
      padding: '16px',
      borderRadius: '8px',
      textAlign: 'center',
    },
    confirmText: {
      color: isDark ? '#fff' : '#1e293b',
      fontSize: '13px',
      marginBottom: '12px',
    },
    confirmButtons: {
      display: 'flex',
      gap: '8px',
      justifyContent: 'center',
    },
    confirmButton: (isDelete) => ({
      padding: '6px 14px',
      background: isDelete ? COLORS.red : (isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'),
      color: isDelete ? '#fff' : (isDark ? '#fff' : '#1e293b'),
      border: 'none',
      borderRadius: '6px',
      fontSize: '12px',
      cursor: 'pointer',
    }),
  };

  // Count templates per category
  const getCategoryCount = (category) => {
    const allTemplates = [...getCustomTemplates(), ...getPresetTemplates()];
    if (category === 'All') return allTemplates.length;
    if (category === 'My Templates') return getCustomTemplates().length;
    return allTemplates.filter(t => t.category === category).length;
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerTitle}>
            <span style={styles.headerIcon}>📋</span>
            <div>
              <div style={styles.titleText}>Template Gallery</div>
              <div style={styles.subtitle}>Choose a template to get started quickly</div>
            </div>
          </div>
          <button
            style={styles.closeButton}
            onClick={onClose}
            onMouseEnter={(e) => e.target.style.color = isDark ? '#fff' : '#1e293b'}
            onMouseLeave={(e) => e.target.style.color = isDark ? '#888' : '#64748b'}
          >
            ×
          </button>
        </div>

        {/* Search Bar */}
        <div style={styles.searchBar}>
          <div style={styles.searchWrapper}>
            <span style={styles.searchIcon}>🔍</span>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search templates by name, type, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.searchInput}
            />
          </div>
        </div>

        {/* Content */}
        <div style={styles.content}>
          {/* Sidebar */}
          <div style={styles.sidebar}>
            {categories.map((category) => (
              <div
                key={category}
                style={styles.categoryItem(
                  selectedCategory === category,
                  CATEGORY_COLORS[category]
                )}
                onClick={() => setSelectedCategory(category)}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                <span style={styles.categoryIcon}>
                  {CATEGORY_ICONS[category] || '📁'}
                </span>
                <span>{category}</span>
                <span style={styles.categoryCount}>{getCategoryCount(category)}</span>
              </div>
            ))}
          </div>

          {/* Template Grid */}
          <div style={styles.grid}>
            {templates.length === 0 ? (
              <div style={styles.emptyState}>
                <div style={styles.emptyIcon}>🔍</div>
                <div style={styles.emptyTitle}>No templates found</div>
                <div style={styles.emptyText}>
                  Try a different search term or category
                </div>
              </div>
            ) : (
              templates.map((template) => {
                const categoryColor = CATEGORY_COLORS[template.category] || COLORS.purple;
                const isHovered = hoveredTemplate === template.id;
                const isConfirmingDelete = confirmDelete === template.id;

                return (
                  <div
                    key={template.id}
                    style={{ ...styles.card(isHovered, categoryColor), position: 'relative' }}
                    onMouseEnter={() => setHoveredTemplate(template.id)}
                    onMouseLeave={() => setHoveredTemplate(null)}
                    onClick={() => !isConfirmingDelete && handleApply(template)}
                  >
                    {/* Thumbnail */}
                    <div style={styles.cardThumbnail(categoryColor)}>
                      {TYPE_ICONS[template.type] || '📄'}
                    </div>

                    {/* Content */}
                    <div style={styles.cardContent}>
                      <div style={styles.cardTitle}>{template.name || 'Untitled'}</div>
                      <div style={styles.cardDescription}>{template.description || 'No description'}</div>
                      <div style={styles.cardMeta}>
                        <span style={styles.typeBadge(categoryColor)}>{template.type?.toUpperCase()}</span>
                        {template.bundle && (
                          <span style={styles.bundleBadge}>{template.bundle}</span>
                        )}
                        {template.isCustom && (
                          <>
                            <span style={styles.customBadge}>Custom</span>
                            <button
                              style={styles.deleteButton}
                              onClick={(e) => {
                                e.stopPropagation();
                                setConfirmDelete(template.id);
                              }}
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Delete Confirmation */}
                    {isConfirmingDelete && (
                      <div style={styles.confirmOverlay} onClick={(e) => e.stopPropagation()}>
                        <div style={styles.confirmBox}>
                          <div style={styles.confirmText}>Delete this template?</div>
                          <div style={styles.confirmButtons}>
                            <button
                              style={styles.confirmButton(false)}
                              onClick={() => setConfirmDelete(null)}
                            >
                              Cancel
                            </button>
                            <button
                              style={styles.confirmButton(true)}
                              onClick={() => handleDelete(template.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateGallery;
