import React, { useState, useRef, useEffect } from 'react';

const COLORS = {
  purple: '#7C3AED',
  blue: '#0EA5E9',
  green: '#10B981',
  orange: '#F59E0B',
  pink: '#EC4899',
  cyan: '#06B6D4',
  violet: '#8B5CF6',
};

// Diagram types organized by category
const DIAGRAM_CATEGORIES = {
  'Flow & Process': {
    icon: '🔀',
    color: COLORS.blue,
    types: ['flowchart', 'activity', 'state', 'journey'],
  },
  'Architecture': {
    icon: '🏗️',
    color: COLORS.purple,
    types: ['architecture', 'deployment', 'component', 'c4', 'network'],
  },
  'Data & Structure': {
    icon: '📊',
    color: COLORS.green,
    types: ['erd', 'class', 'mindmap', 'orgchart'],
  },
  'Planning': {
    icon: '📅',
    color: COLORS.orange,
    types: ['gantt', 'timeline', 'requirement'],
  },
  'Interaction': {
    icon: '🔄',
    color: COLORS.cyan,
    types: ['sequence', 'usecase'],
  },
  'Visualization': {
    icon: '📈',
    color: COLORS.pink,
    types: ['pie', 'quadrant', 'wireframe', 'git'],
  },
};

// Diagram type metadata
const TYPE_INFO = {
  flowchart: { icon: '📈', name: 'Flowchart', desc: 'Process flows' },
  activity: { icon: '🔄', name: 'Activity', desc: 'UML activity' },
  state: { icon: '⚡', name: 'State Machine', desc: 'State transitions' },
  journey: { icon: '🚶', name: 'User Journey', desc: 'User experience' },
  architecture: { icon: '🏗️', name: 'Architecture', desc: 'System design' },
  deployment: { icon: '🚀', name: 'Deployment', desc: 'Infrastructure' },
  component: { icon: '📦', name: 'Component', desc: 'Components' },
  c4: { icon: '🏛️', name: 'C4 Model', desc: 'C4 architecture' },
  network: { icon: '🌐', name: 'Network', desc: 'Network topology' },
  erd: { icon: '📊', name: 'ERD', desc: 'Database schema' },
  class: { icon: '📐', name: 'Class Diagram', desc: 'OOP classes' },
  mindmap: { icon: '🧠', name: 'Mind Map', desc: 'Ideas hierarchy' },
  orgchart: { icon: '👥', name: 'Org Chart', desc: 'Organization' },
  gantt: { icon: '📊', name: 'Gantt Chart', desc: 'Project timeline' },
  timeline: { icon: '📅', name: 'Timeline', desc: 'Events timeline' },
  requirement: { icon: '📋', name: 'Requirements', desc: 'Specifications' },
  sequence: { icon: '🔄', name: 'Sequence', desc: 'Message flow' },
  usecase: { icon: '👤', name: 'Use Case', desc: 'Actor interactions' },
  pie: { icon: '🥧', name: 'Pie Chart', desc: 'Data distribution' },
  quadrant: { icon: '📊', name: 'Quadrant', desc: 'Priority matrix' },
  wireframe: { icon: '📱', name: 'Wireframe', desc: 'UI mockups' },
  git: { icon: '🌿', name: 'Git Graph', desc: 'Branch history' },
};

function DiagramTypeSelector({ activeType, onTypeChange, theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const menuRef = useRef(null);
  const isDark = theme?.name === 'dark';

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeInfo = TYPE_INFO[activeType] || { icon: '📄', name: activeType };

  const styles = {
    container: {
      position: 'relative',
    },
    trigger: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '6px 12px',
      background: isOpen
        ? (isDark ? 'rgba(124,58,237,0.3)' : 'rgba(124,58,237,0.2)')
        : (isDark ? 'rgba(124,58,237,0.15)' : 'rgba(124,58,237,0.1)'),
      border: `1px solid ${isOpen ? COLORS.purple : 'rgba(124,58,237,0.3)'}`,
      borderRadius: 8,
      cursor: 'pointer',
      transition: 'all 0.15s ease',
    },
    triggerIcon: {
      fontSize: '1rem',
    },
    triggerText: {
      color: isDark ? '#fff' : '#1e293b',
      fontSize: '0.8rem',
      fontWeight: 600,
    },
    triggerDesc: {
      color: isDark ? '#888' : '#64748b',
      fontSize: '0.65rem',
    },
    caret: {
      color: isDark ? '#888' : '#64748b',
      fontSize: '0.6rem',
      marginLeft: '4px',
      transition: 'transform 0.15s ease',
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    },
    dropdown: {
      position: 'absolute',
      top: 'calc(100% + 6px)',
      left: 0,
      width: '320px',
      maxHeight: '70vh',
      overflowY: 'auto',
      background: isDark
        ? 'linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))'
        : 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))',
      border: `1px solid ${isDark ? 'rgba(124,58,237,0.3)' : 'rgba(124,58,237,0.2)'}`,
      borderRadius: 12,
      boxShadow: '0 15px 50px rgba(0,0,0,0.3)',
      zIndex: 1000,
      backdropFilter: 'blur(10px)',
    },
    category: {
      padding: '8px 0',
      borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
    },
    categoryLast: {
      padding: '8px 0',
    },
    categoryHeader: (color) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '6px 14px',
      fontSize: '0.65rem',
      fontWeight: 600,
      color: color,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    }),
    typeGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '4px',
      padding: '0 8px',
    },
    typeItem: (isActive, isHovered) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 10px',
      borderRadius: 6,
      cursor: 'pointer',
      background: isActive
        ? (isDark ? 'rgba(124,58,237,0.3)' : 'rgba(124,58,237,0.15)')
        : isHovered
          ? (isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)')
          : 'transparent',
      border: isActive
        ? `1px solid ${COLORS.purple}`
        : '1px solid transparent',
      transition: 'all 0.1s ease',
    }),
    typeIcon: {
      fontSize: '1rem',
    },
    typeContent: {
      flex: 1,
      minWidth: 0,
    },
    typeName: (isActive) => ({
      fontSize: '0.75rem',
      fontWeight: isActive ? 600 : 500,
      color: isActive ? COLORS.purple : (isDark ? '#e2e8f0' : '#334155'),
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }),
    typeDesc: {
      fontSize: '0.6rem',
      color: isDark ? '#666' : '#94a3b8',
    },
    checkmark: {
      color: COLORS.green,
      fontSize: '0.8rem',
    },
  };

  const categories = Object.entries(DIAGRAM_CATEGORIES);

  return (
    <div ref={menuRef} style={styles.container}>
      <div
        style={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={(e) => {
          if (!isOpen) {
            e.currentTarget.style.background = isDark ? 'rgba(124,58,237,0.25)' : 'rgba(124,58,237,0.15)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isOpen) {
            e.currentTarget.style.background = isDark ? 'rgba(124,58,237,0.15)' : 'rgba(124,58,237,0.1)';
          }
        }}
      >
        <span style={styles.triggerIcon}>{activeInfo.icon}</span>
        <div>
          <div style={styles.triggerText}>{activeInfo.name}</div>
          <div style={styles.triggerDesc}>{activeInfo.desc}</div>
        </div>
        <span style={styles.caret}>▼</span>
      </div>

      {isOpen && (
        <div style={styles.dropdown}>
          {categories.map(([categoryName, category], catIndex) => (
            <div
              key={categoryName}
              style={catIndex < categories.length - 1 ? styles.category : styles.categoryLast}
            >
              <div style={styles.categoryHeader(category.color)}>
                <span>{category.icon}</span>
                <span>{categoryName}</span>
              </div>
              <div style={styles.typeGrid}>
                {category.types.map((type) => {
                  const info = TYPE_INFO[type];
                  const isActive = type === activeType;
                  const isHovered = hoveredItem === type;

                  return (
                    <div
                      key={type}
                      style={styles.typeItem(isActive, isHovered)}
                      onClick={() => {
                        onTypeChange(type);
                        setIsOpen(false);
                      }}
                      onMouseEnter={() => setHoveredItem(type)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <span style={styles.typeIcon}>{info.icon}</span>
                      <div style={styles.typeContent}>
                        <div style={styles.typeName(isActive)}>{info.name}</div>
                        <div style={styles.typeDesc}>{info.desc}</div>
                      </div>
                      {isActive && <span style={styles.checkmark}>✓</span>}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DiagramTypeSelector;
