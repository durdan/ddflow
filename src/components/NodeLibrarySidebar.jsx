import React, { useState, useMemo } from 'react';

const COLORS = {
  purple: '#7C3AED',
  blue: '#0EA5E9',
  green: '#10B981',
  orange: '#F59E0B',
  pink: '#EC4899',
  red: '#EF4444',
  cyan: '#06B6D4',
  violet: '#8B5CF6',
  teal: '#14B8A6',
  amber: '#D97706',
  emerald: '#059669',
  sky: '#0284C7',
  indigo: '#6366F1',
};

// Node types for each diagram type
const NODE_LIBRARY = {
  flowchart: {
    name: 'Flowchart',
    categories: [
      {
        name: 'Flow Control',
        nodes: [
          { type: 'start', icon: '▶️', label: 'Start', color: COLORS.green, dsl: '(start) Start' },
          { type: 'end', icon: '⏹️', label: 'End', color: COLORS.red, dsl: '(end) End' },
          { type: 'decision', icon: '◇', label: 'Decision', color: COLORS.orange, dsl: '(decision) Decision?' },
        ],
      },
      {
        name: 'Actions',
        nodes: [
          { type: 'process', icon: '⬜', label: 'Process', color: COLORS.blue, dsl: '(process) Process' },
          { type: 'action', icon: '⚡', label: 'Action', color: COLORS.purple, dsl: '(action) Action' },
          { type: 'io', icon: '▱', label: 'Input/Output', color: COLORS.cyan, dsl: '(io) Input/Output' },
        ],
      },
    ],
  },
  architecture: {
    name: 'Architecture',
    categories: [
      {
        name: 'Frontend',
        nodes: [
          { type: 'clients', icon: '👥', label: 'Client', color: COLORS.pink, dsl: '[clients] Client' },
          { type: 'gateway', icon: '🚪', label: 'Gateway', color: COLORS.orange, dsl: '[gateway] API Gateway' },
        ],
      },
      {
        name: 'Backend',
        nodes: [
          { type: 'services', icon: '⚙️', label: 'Service', color: COLORS.blue, dsl: '[services] Service' },
          { type: 'data', icon: '🗄️', label: 'Database', color: COLORS.emerald, dsl: '[data] Database' },
          { type: 'cache', icon: '⚡', label: 'Cache', color: COLORS.red, dsl: '[cache] Redis' },
          { type: 'queue', icon: '📨', label: 'Queue', color: COLORS.amber, dsl: '[queue] Message Queue' },
          { type: 'storage', icon: '📦', label: 'Storage', color: COLORS.teal, dsl: '[storage] S3 Bucket' },
        ],
      },
    ],
  },
  journey: {
    name: 'User Journey',
    categories: [
      {
        name: 'People',
        nodes: [
          { type: 'actor', icon: '👤', label: 'Actor', color: COLORS.pink, dsl: '[actor] User' },
          { type: 'user', icon: '🧑', label: 'User', color: COLORS.pink, dsl: '[user] Customer' },
        ],
      },
      {
        name: 'Touchpoints',
        nodes: [
          { type: 'page', icon: '📱', label: 'Page', color: COLORS.cyan, dsl: '[page] Landing Page' },
          { type: 'screen', icon: '🖥️', label: 'Screen', color: COLORS.cyan, dsl: '[screen] Dashboard' },
          { type: 'action', icon: '👆', label: 'Action', color: COLORS.purple, dsl: '[action] Click Button' },
          { type: 'form', icon: '📝', label: 'Form', color: COLORS.orange, dsl: '[form] Sign Up Form' },
        ],
      },
      {
        name: 'Communication',
        nodes: [
          { type: 'email', icon: '✉️', label: 'Email', color: COLORS.amber, dsl: '[email] Welcome Email' },
          { type: 'notification', icon: '🔔', label: 'Notification', color: COLORS.red, dsl: '[notification] Alert' },
        ],
      },
      {
        name: 'Outcomes',
        nodes: [
          { type: 'success', icon: '✅', label: 'Success', color: COLORS.green, dsl: '[success] Completed' },
          { type: 'error', icon: '❌', label: 'Error', color: COLORS.red, dsl: '[error] Failed' },
          { type: 'milestone', icon: '🎯', label: 'Milestone', color: COLORS.green, dsl: '[milestone] Goal Reached' },
          { type: 'decision', icon: '❓', label: 'Decision', color: COLORS.orange, dsl: '[decision] Choose Path' },
        ],
      },
    ],
  },
  state: {
    name: 'State Machine',
    categories: [
      {
        name: 'States',
        nodes: [
          { type: 'initial', icon: '▶️', label: 'Initial', color: COLORS.green, dsl: '(initial) Initial' },
          { type: 'state', icon: '⬜', label: 'State', color: COLORS.blue, dsl: 'State' },
          { type: 'final', icon: '⏹️', label: 'Final', color: COLORS.red, dsl: '(final) Final' },
        ],
      },
    ],
  },
  erd: {
    name: 'ERD',
    categories: [
      {
        name: 'Tables',
        nodes: [
          { type: 'table', icon: '📋', label: 'Table', color: COLORS.blue, dsl: 'CREATE TABLE table_name (\n  id UUID PRIMARY KEY,\n  name VARCHAR(255)\n);' },
          { type: 'pk', icon: '🔑', label: 'Primary Key', color: COLORS.amber, dsl: '  id UUID PRIMARY KEY,' },
          { type: 'fk', icon: '🔗', label: 'Foreign Key', color: COLORS.purple, dsl: '  ref_id UUID REFERENCES other_table(id),' },
          { type: 'column', icon: '▪️', label: 'Column', color: COLORS.cyan, dsl: '  column_name VARCHAR(255),' },
        ],
      },
    ],
  },
  sequence: {
    name: 'Sequence',
    categories: [
      {
        name: 'Participants',
        nodes: [
          { type: 'participant', icon: '👤', label: 'Participant', color: COLORS.blue, dsl: 'participant Actor' },
        ],
      },
      {
        name: 'Messages',
        nodes: [
          { type: 'request', icon: '➡️', label: 'Request', color: COLORS.green, dsl: 'A -> B: Request' },
          { type: 'response', icon: '⬅️', label: 'Response', color: COLORS.orange, dsl: 'B --> A: Response' },
        ],
      },
    ],
  },
  mindmap: {
    name: 'Mind Map',
    categories: [
      {
        name: 'Nodes',
        nodes: [
          { type: 'root', icon: '🌳', label: 'Root', color: COLORS.purple, dsl: 'Root Topic' },
          { type: 'branch', icon: '🌿', label: 'Branch', color: COLORS.blue, dsl: '  Branch' },
          { type: 'leaf', icon: '🍃', label: 'Leaf', color: COLORS.green, dsl: '    Leaf' },
        ],
      },
    ],
  },
  class: {
    name: 'Class Diagram',
    categories: [
      {
        name: 'Classes',
        nodes: [
          { type: 'class', icon: '📦', label: 'Class', color: COLORS.blue, dsl: 'class ClassName\n  + property: type\n  + method(): void' },
          { type: 'interface', icon: '📄', label: 'Interface', color: COLORS.purple, dsl: 'interface IName\n  + method(): void' },
        ],
      },
      {
        name: 'Members',
        nodes: [
          { type: 'public', icon: '➕', label: 'Public', color: COLORS.green, dsl: '  + publicMember: type' },
          { type: 'private', icon: '➖', label: 'Private', color: COLORS.red, dsl: '  - privateMember: type' },
          { type: 'protected', icon: '#️⃣', label: 'Protected', color: COLORS.orange, dsl: '  # protectedMember: type' },
        ],
      },
    ],
  },
  deployment: {
    name: 'Deployment',
    categories: [
      {
        name: 'Infrastructure',
        nodes: [
          { type: 'cloud', icon: '☁️', label: 'Cloud', color: COLORS.sky, dsl: '[cloud] AWS' },
          { type: 'cluster', icon: '🔷', label: 'Cluster', color: COLORS.teal, dsl: '  [cluster] Kubernetes' },
          { type: 'container', icon: '📦', label: 'Container', color: COLORS.cyan, dsl: '    [container] Service' },
        ],
      },
      {
        name: 'Data',
        nodes: [
          { type: 'database', icon: '🗄️', label: 'Database', color: COLORS.green, dsl: '  [database] PostgreSQL' },
          { type: 'storage', icon: '💾', label: 'Storage', color: COLORS.emerald, dsl: '  [storage] S3' },
        ],
      },
      {
        name: 'Clients',
        nodes: [
          { type: 'device', icon: '💻', label: 'Device', color: COLORS.pink, dsl: '[device] Browser' },
          { type: 'server', icon: '🖥️', label: 'Server', color: COLORS.violet, dsl: '[server] Web Server' },
        ],
      },
    ],
  },
  network: {
    name: 'Network',
    categories: [
      {
        name: 'Devices',
        nodes: [
          { type: 'cloud', icon: '☁️', label: 'Cloud', color: COLORS.sky, dsl: '[cloud] Internet' },
          { type: 'firewall', icon: '🛡️', label: 'Firewall', color: COLORS.red, dsl: '[firewall] Firewall (10.0.0.1)' },
          { type: 'router', icon: '📡', label: 'Router', color: COLORS.orange, dsl: '[router] Router (10.0.0.2)' },
          { type: 'switch', icon: '🔀', label: 'Switch', color: COLORS.blue, dsl: '[switch] Switch (10.0.0.3)' },
          { type: 'server', icon: '🖥️', label: 'Server', color: COLORS.purple, dsl: '[server] Server (10.0.0.10)' },
          { type: 'computer', icon: '💻', label: 'Computer', color: COLORS.green, dsl: '[computer] Workstation' },
        ],
      },
    ],
  },
  usecase: {
    name: 'Use Case',
    categories: [
      {
        name: 'Elements',
        nodes: [
          { type: 'actor', icon: '👤', label: 'Actor', color: COLORS.blue, dsl: 'actor User' },
          { type: 'usecase', icon: '⭕', label: 'Use Case', color: COLORS.purple, dsl: '(Use Case Name)' },
        ],
      },
    ],
  },
  component: {
    name: 'Component',
    categories: [
      {
        name: 'Components',
        nodes: [
          { type: 'component', icon: '🧩', label: 'Component', color: COLORS.purple, dsl: '[component] Component' },
          { type: 'service', icon: '⚙️', label: 'Service', color: COLORS.blue, dsl: '[service] Service' },
          { type: 'api', icon: '🔌', label: 'API', color: COLORS.orange, dsl: '[api] API Gateway' },
          { type: 'database', icon: '🗄️', label: 'Database', color: COLORS.green, dsl: '[database] Database' },
          { type: 'cache', icon: '⚡', label: 'Cache', color: COLORS.red, dsl: '[cache] Redis' },
        ],
      },
    ],
  },
  c4: {
    name: 'C4 Model',
    categories: [
      {
        name: 'Elements',
        nodes: [
          { type: 'person', icon: '👤', label: 'Person', color: COLORS.blue, dsl: '[person] User: Description' },
          { type: 'system', icon: '🏢', label: 'System', color: COLORS.purple, dsl: '[system] System: Description' },
          { type: 'container', icon: '📦', label: 'Container', color: COLORS.cyan, dsl: '[container] Container: Description' },
          { type: 'component', icon: '🧩', label: 'Component', color: COLORS.green, dsl: '[component] Component: Description' },
          { type: 'external', icon: '🌐', label: 'External', color: COLORS.orange, dsl: '[external] External: Description' },
        ],
      },
    ],
  },
  activity: {
    name: 'Activity',
    categories: [
      {
        name: 'Control',
        nodes: [
          { type: 'start', icon: '▶️', label: 'Start', color: COLORS.green, dsl: '[start]' },
          { type: 'end', icon: '⏹️', label: 'End', color: COLORS.red, dsl: '[end]' },
          { type: 'decision', icon: '◇', label: 'Decision', color: COLORS.orange, dsl: '<Decision?>' },
        ],
      },
      {
        name: 'Actions',
        nodes: [
          { type: 'action', icon: '⬜', label: 'Action', color: COLORS.blue, dsl: ':Action;' },
        ],
      },
    ],
  },
  gantt: {
    name: 'Gantt',
    categories: [
      {
        name: 'Tasks',
        nodes: [
          { type: 'task', icon: '📋', label: 'Task', color: COLORS.blue, dsl: 'Task Name, 0, 3' },
          { type: 'milestone', icon: '🎯', label: 'Milestone', color: COLORS.green, dsl: 'Milestone, 5, 0' },
        ],
      },
    ],
  },
  timeline: {
    name: 'Timeline',
    categories: [
      {
        name: 'Events',
        nodes: [
          { type: 'event', icon: '📅', label: 'Event', color: COLORS.blue, dsl: '[Date] Event Title | Description' },
          { type: 'milestone', icon: '⭐', label: 'Milestone', color: COLORS.green, dsl: '[Date] *Milestone | Description' },
        ],
      },
    ],
  },
  wireframe: {
    name: 'Wireframe',
    categories: [
      {
        name: 'Layout',
        nodes: [
          { type: 'window', icon: '🪟', label: 'Window', color: COLORS.blue, dsl: '{Window Title}' },
          { type: 'navbar', icon: '📊', label: 'Navbar', color: COLORS.purple, dsl: '[[ Home | About | Contact ]]' },
          { type: 'tabs', icon: '📑', label: 'Tabs', color: COLORS.cyan, dsl: '(( Tab1 | Tab2 | Tab3 ))' },
          { type: 'card', icon: '🃏', label: 'Card', color: COLORS.orange, dsl: '<Card Title>\nContent here\n</Card>' },
        ],
      },
      {
        name: 'Elements',
        nodes: [
          { type: 'button', icon: '🔘', label: 'Button', color: COLORS.green, dsl: '[Button Text]' },
          { type: 'input', icon: '📝', label: 'Input', color: COLORS.blue, dsl: '[text: Placeholder...]' },
          { type: 'search', icon: '🔍', label: 'Search', color: COLORS.purple, dsl: '[search: Search...]' },
          { type: 'dropdown', icon: '📋', label: 'Dropdown', color: COLORS.orange, dsl: '[v Select Option]' },
        ],
      },
      {
        name: 'Content',
        nodes: [
          { type: 'heading', icon: '📰', label: 'Heading', color: COLORS.blue, dsl: '# Heading Text' },
          { type: 'divider', icon: '➖', label: 'Divider', color: COLORS.cyan, dsl: '---' },
          { type: 'table', icon: '📊', label: 'Table', color: COLORS.purple, dsl: '|Col1|Col2|Col3|\n|Data|Data|Data|' },
          { type: 'progress', icon: '📊', label: 'Progress', color: COLORS.green, dsl: '[progress: 75%]' },
        ],
      },
    ],
  },
};

// Fallback for unsupported types
const DEFAULT_LIBRARY = {
  name: 'Generic',
  categories: [
    {
      name: 'Basic',
      nodes: [
        { type: 'node', icon: '⬜', label: 'Node', color: COLORS.blue, dsl: 'Node' },
      ],
    },
  ],
};

function NodeLibrarySidebar({ isOpen, diagramType, onDragStart, onClose, onAddNode, theme }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});
  const isDark = theme?.name === 'dark';

  // Get library for current diagram type
  const library = NODE_LIBRARY[diagramType] || DEFAULT_LIBRARY;

  // Filter nodes based on search
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return library.categories;

    const query = searchQuery.toLowerCase();
    return library.categories
      .map(cat => ({
        ...cat,
        nodes: cat.nodes.filter(
          node =>
            node.label.toLowerCase().includes(query) ||
            node.type.toLowerCase().includes(query)
        ),
      }))
      .filter(cat => cat.nodes.length > 0);
  }, [library.categories, searchQuery]);

  const toggleCategory = (catName) => {
    setExpandedCategories(prev => ({
      ...prev,
      [catName]: !prev[catName],
    }));
  };

  const handleDragStart = (e, node) => {
    // Use text/plain with DSL for drop handling
    e.dataTransfer.setData('text/plain', node.dsl);
    e.dataTransfer.effectAllowed = 'copy';
    if (onDragStart) onDragStart(node);
  };

  const handleNodeClick = (node) => {
    // Click to add node
    if (onAddNode) {
      onAddNode(node.dsl);
    }
  };

  if (!isOpen) return null;

  const styles = {
    sidebar: {
      position: 'fixed',
      left: 0,
      top: 105, // Below header and toolbar
      width: 260,
      height: 'calc(100vh - 105px)',
      background: isDark
        ? 'linear-gradient(180deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))'
        : 'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))',
      borderRight: `1px solid ${isDark ? 'rgba(124,58,237,0.2)' : 'rgba(124,58,237,0.1)'}`,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      zIndex: 100,
      boxShadow: '4px 0 20px rgba(0,0,0,0.2)',
    },
    header: {
      padding: '12px 14px',
      borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: isDark ? 'rgba(124,58,237,0.1)' : 'rgba(124,58,237,0.05)',
    },
    headerTitle: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    },
    headerIcon: {
      fontSize: '1rem',
    },
    title: {
      fontSize: '0.8rem',
      fontWeight: 600,
      color: isDark ? '#fff' : '#1e293b',
    },
    subtitle: {
      fontSize: '0.65rem',
      color: isDark ? '#888' : '#64748b',
    },
    closeBtn: {
      background: 'transparent',
      border: 'none',
      color: isDark ? '#888' : '#64748b',
      cursor: 'pointer',
      fontSize: '1rem',
      padding: 4,
      borderRadius: 4,
    },
    search: {
      padding: '10px 14px',
      borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
    },
    searchInput: {
      width: '100%',
      padding: '8px 12px',
      background: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.05)',
      border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
      borderRadius: 6,
      color: isDark ? '#fff' : '#1e293b',
      fontSize: '0.75rem',
      outline: 'none',
    },
    content: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 0',
    },
    category: {
      marginBottom: 4,
    },
    categoryHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 14px',
      cursor: 'pointer',
      color: isDark ? '#aaa' : '#64748b',
      fontSize: '0.7rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    categoryArrow: (isExpanded) => ({
      transition: 'transform 0.2s',
      transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
      fontSize: '0.6rem',
    }),
    nodesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 6,
      padding: '4px 10px 12px',
    },
    nodeItem: (color) => ({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '10px 6px',
      background: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.03)',
      border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
      borderRadius: 8,
      cursor: 'grab',
      transition: 'all 0.15s',
    }),
    nodeIcon: {
      fontSize: '1.2rem',
      marginBottom: 4,
    },
    nodeLabel: {
      fontSize: '0.65rem',
      color: isDark ? '#ccc' : '#334155',
      textAlign: 'center',
      fontWeight: 500,
    },
    emptyState: {
      padding: '20px 14px',
      textAlign: 'center',
      color: isDark ? '#666' : '#94a3b8',
      fontSize: '0.75rem',
    },
    tip: {
      padding: '10px 14px',
      borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
      background: isDark ? 'rgba(124,58,237,0.05)' : 'rgba(124,58,237,0.03)',
    },
    tipText: {
      fontSize: '0.65rem',
      color: isDark ? '#888' : '#64748b',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.sidebar}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerTitle}>
          <span style={styles.headerIcon}>🧩</span>
          <div>
            <div style={styles.title}>Node Library</div>
            <div style={styles.subtitle}>{library.name}</div>
          </div>
        </div>
        <button style={styles.closeBtn} onClick={onClose} title="Close library">
          ✕
        </button>
      </div>

      {/* Search */}
      <div style={styles.search}>
        <input
          type="text"
          placeholder="Search nodes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      {/* Content */}
      <div style={styles.content}>
        {filteredCategories.length === 0 ? (
          <div style={styles.emptyState}>
            No nodes match your search
          </div>
        ) : (
          filteredCategories.map((category) => {
            const isExpanded = expandedCategories[category.name] !== false;
            return (
              <div key={category.name} style={styles.category}>
                <div
                  style={styles.categoryHeader}
                  onClick={() => toggleCategory(category.name)}
                >
                  <span style={styles.categoryArrow(isExpanded)}>▶</span>
                  <span>{category.name}</span>
                  <span style={{ marginLeft: 'auto', opacity: 0.6 }}>
                    {category.nodes.length}
                  </span>
                </div>
                {isExpanded && (
                  <div style={styles.nodesGrid}>
                    {category.nodes.map((node) => (
                      <div
                        key={node.type}
                        style={styles.nodeItem(node.color)}
                        draggable
                        onClick={() => handleNodeClick(node)}
                        onDragStart={(e) => handleDragStart(e, node)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = node.color;
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = `0 4px 12px ${node.color}30`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
                          e.currentTarget.style.transform = 'none';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                        title={`Click or drag to add ${node.label}`}
                      >
                        <span style={styles.nodeIcon}>{node.icon}</span>
                        <span style={styles.nodeLabel}>{node.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Tip */}
      <div style={styles.tip}>
        <div style={styles.tipText}>
          Click or drag nodes to add them to your diagram
        </div>
      </div>
    </div>
  );
}

export default NodeLibrarySidebar;
