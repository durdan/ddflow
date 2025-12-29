import React, { useState, useRef, useEffect } from 'react';

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

function DropdownMenu({
  label,
  icon,
  items,
  theme,
  color = COLORS.purple,
  disabled = false,
  showCaret = true,
}) {
  const [isOpen, setIsOpen] = useState(false);
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

  const handleItemClick = (item) => {
    if (item.onClick && !item.disabled) {
      item.onClick();
      setIsOpen(false);
    }
  };

  const styles = {
    container: {
      position: 'relative',
      display: 'inline-block',
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      padding: '5px 10px',
      background: isOpen ? `${color}30` : `${color}20`,
      border: `1px solid ${isOpen ? color : `${color}50`}`,
      borderRadius: 6,
      color: color,
      fontSize: '0.7rem',
      fontWeight: 500,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'all 0.15s ease',
      whiteSpace: 'nowrap',
    },
    caret: {
      fontSize: '0.6rem',
      transition: 'transform 0.15s ease',
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    },
    dropdown: {
      position: 'absolute',
      top: 'calc(100% + 4px)',
      left: 0,
      minWidth: '180px',
      background: isDark
        ? 'linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))'
        : 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))',
      border: `1px solid ${isDark ? 'rgba(124,58,237,0.3)' : 'rgba(124,58,237,0.2)'}`,
      borderRadius: 8,
      boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
      zIndex: 1000,
      overflow: 'hidden',
      backdropFilter: 'blur(10px)',
    },
    section: {
      padding: '6px 0',
      borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
    },
    sectionLast: {
      padding: '6px 0',
    },
    sectionLabel: {
      padding: '4px 12px',
      fontSize: '0.6rem',
      fontWeight: 600,
      color: isDark ? '#666' : '#94a3b8',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    item: (item, isHovered) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '8px 12px',
      fontSize: '0.75rem',
      color: item.disabled
        ? (isDark ? '#555' : '#cbd5e1')
        : (isDark ? '#e2e8f0' : '#334155'),
      cursor: item.disabled ? 'not-allowed' : 'pointer',
      background: isHovered && !item.disabled
        ? (isDark ? 'rgba(124,58,237,0.2)' : 'rgba(124,58,237,0.1)')
        : 'transparent',
      opacity: item.disabled ? 0.5 : 1,
      transition: 'background 0.1s ease',
    }),
    itemIcon: {
      fontSize: '0.9rem',
      width: '20px',
      textAlign: 'center',
    },
    itemContent: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    itemLabel: {
      fontWeight: 500,
    },
    itemDescription: {
      fontSize: '0.65rem',
      color: isDark ? '#666' : '#94a3b8',
      marginTop: '2px',
    },
    itemShortcut: {
      fontSize: '0.6rem',
      color: isDark ? '#555' : '#94a3b8',
      fontFamily: 'monospace',
      background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
      padding: '2px 5px',
      borderRadius: 3,
    },
    itemBadge: (badgeColor) => ({
      fontSize: '0.55rem',
      padding: '2px 6px',
      background: `${badgeColor}20`,
      color: badgeColor,
      borderRadius: 4,
      fontWeight: 600,
    }),
    divider: {
      height: 1,
      background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
      margin: '4px 0',
    },
  };

  // Group items by section
  const sections = [];
  let currentSection = { label: null, items: [] };

  items.forEach((item, index) => {
    if (item.type === 'divider') {
      if (currentSection.items.length > 0) {
        sections.push(currentSection);
        currentSection = { label: null, items: [] };
      }
    } else if (item.type === 'section') {
      if (currentSection.items.length > 0) {
        sections.push(currentSection);
      }
      currentSection = { label: item.label, items: [] };
    } else {
      currentSection.items.push(item);
    }
  });
  if (currentSection.items.length > 0) {
    sections.push(currentSection);
  }

  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div ref={menuRef} style={styles.container}>
      <button
        style={styles.button}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onMouseEnter={(e) => {
          if (!disabled) {
            e.currentTarget.style.background = `${color}30`;
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled && !isOpen) {
            e.currentTarget.style.background = `${color}20`;
          }
        }}
      >
        {icon && <span>{icon}</span>}
        <span>{label}</span>
        {showCaret && <span style={styles.caret}>▼</span>}
      </button>

      {isOpen && (
        <div style={styles.dropdown}>
          {sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              style={sectionIndex < sections.length - 1 ? styles.section : styles.sectionLast}
            >
              {section.label && (
                <div style={styles.sectionLabel}>{section.label}</div>
              )}
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  style={styles.item(item, hoveredItem === `${sectionIndex}-${itemIndex}`)}
                  onClick={() => handleItemClick(item)}
                  onMouseEnter={() => setHoveredItem(`${sectionIndex}-${itemIndex}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.icon && <span style={styles.itemIcon}>{item.icon}</span>}
                  <div style={styles.itemContent}>
                    <span style={styles.itemLabel}>{item.label}</span>
                    {item.description && (
                      <span style={styles.itemDescription}>{item.description}</span>
                    )}
                  </div>
                  {item.shortcut && (
                    <span style={styles.itemShortcut}>{item.shortcut}</span>
                  )}
                  {item.badge && (
                    <span style={styles.itemBadge(item.badgeColor || COLORS.purple)}>
                      {item.badge}
                    </span>
                  )}
                  {item.active && (
                    <span style={{ color: COLORS.green }}>✓</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
