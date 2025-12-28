// DDFlow Mermaid Service - Import/Export Mermaid syntax

/**
 * Detect Mermaid diagram type from source
 * @param {string} source - Mermaid source code
 * @returns {string|null} Detected diagram type or null
 */
export function detectMermaidType(source) {
  const trimmed = source.trim().toLowerCase();

  if (trimmed.startsWith('flowchart') || trimmed.startsWith('graph')) return 'flowchart';
  if (trimmed.startsWith('sequencediagram')) return 'sequence';
  if (trimmed.startsWith('classdiagram')) return 'class';
  if (trimmed.startsWith('statediagram')) return 'state';
  if (trimmed.startsWith('erdiagram')) return 'erd';
  if (trimmed.startsWith('gantt')) return 'gantt';
  if (trimmed.startsWith('pie')) return 'pie';
  if (trimmed.startsWith('gitgraph')) return 'git';
  if (trimmed.startsWith('journey')) return 'journey';
  if (trimmed.startsWith('mindmap')) return 'mindmap';

  return null;
}

/**
 * Clean HTML tags from label (like <br/>)
 */
function cleanLabel(label) {
  return label
    .replace(/<br\s*\/?>/gi, ' ')  // Replace <br/> with space
    .replace(/<[^>]+>/g, '')        // Remove other HTML tags
    .replace(/\s+/g, ' ')           // Collapse multiple spaces
    .trim();
}

/**
 * Convert Mermaid flowchart to DDFlow
 * Detects if it's a system architecture diagram and converts accordingly
 */
function mermaidFlowchartToDDFlow(source) {
  const lines = source.split('\n').slice(1); // Skip first line (flowchart TD/LR)
  const nodeLabels = new Map();
  const nodeTypes = new Map();
  const nodeSubgroups = new Map(); // Track which subgraph each node belongs to
  const subgraphs = new Map(); // subgraph name -> array of node IDs
  const edges = [];
  let hasDecisions = false;
  let currentSubgraph = null;

  lines.forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('%%')) return;

    // Parse subgraph declarations
    const subgraphMatch = line.match(/^subgraph\s+(.+)/i);
    if (subgraphMatch) {
      currentSubgraph = cleanLabel(subgraphMatch[1]);
      if (!subgraphs.has(currentSubgraph)) {
        subgraphs.set(currentSubgraph, []);
      }
      return;
    }
    if (line === 'end') {
      currentSubgraph = null;
      return;
    }

    // Parse node definitions with shapes: A[Label] or A{Label} or A((Label)) or A([Label]) or A[(Label)]
    const nodeDefs = [...line.matchAll(/(\w+)(?:\[([^\]]+)\]|\{([^}]+)\}|\(\(([^)]+)\)\)|\(\[([^\]]+)\]\)|\[\(([^)]+)\)\])/g)];
    for (const match of nodeDefs) {
      const id = match[1];
      const rawLabel = match[2] || match[3] || match[4] || match[5] || match[6] || id;
      const label = cleanLabel(rawLabel);
      nodeLabels.set(id, label);

      // Track subgraph membership
      if (currentSubgraph) {
        nodeSubgroups.set(id, currentSubgraph);
        subgraphs.get(currentSubgraph).push(id);
      }

      // Detect type from shape
      if (match[3]) {
        nodeTypes.set(id, 'decision'); // {diamond}
        hasDecisions = true;
      }
      else if (match[4]) nodeTypes.set(id, 'start'); // ((circle))
      else if (match[5]) nodeTypes.set(id, 'process'); // ([stadium])
      else if (match[6]) nodeTypes.set(id, 'database'); // [(cylinder)]
      else nodeTypes.set(id, 'process'); // [rectangle]
    }

    // Parse edges: A --> B or A -->|label| B
    const edgeMatch = line.match(/(\w+)\s*(?:--?-?>|==?>|-\.->?)\s*(?:\|([^|]+)\|)?\s*(\w+)/);
    if (edgeMatch) {
      const [, from, label, to] = edgeMatch;
      if (!nodeLabels.has(from)) nodeLabels.set(from, from);
      if (!nodeLabels.has(to)) nodeLabels.set(to, to);
      edges.push({ from, to, label: cleanLabel(label || '') });
    }
  });

  // Determine node order from edges
  const nodeOrder = [];
  edges.forEach(({ from, to }) => {
    if (!nodeOrder.includes(from)) nodeOrder.push(from);
    if (!nodeOrder.includes(to)) nodeOrder.push(to);
  });
  nodeLabels.forEach((label, id) => {
    if (!nodeOrder.includes(id)) nodeOrder.push(id);
  });

  // Check if this looks like a system/architecture diagram
  // Multiple edges, subgraphs, or labeled connections suggest architecture
  const sourceCounts = new Map();
  let hasInteractionLabels = false;
  edges.forEach(({ from, label }) => {
    sourceCounts.set(from, (sourceCounts.get(from) || 0) + 1);
    if (label && /interact|fetch|cache|call|send|use|connect|query|read|write|get|post|create|update/i.test(label)) {
      hasInteractionLabels = true;
    }
  });
  const hasMultipleFromSameSource = [...sourceCounts.values()].some(count => count > 1);
  const hasSubgraphs = subgraphs.size > 0;
  const isArchitectureStyle = hasSubgraphs ||
                              (hasMultipleFromSameSource && hasInteractionLabels) ||
                              (hasInteractionLabels && !hasDecisions) ||
                              (nodeLabels.size >= 5 && hasMultipleFromSameSource);

  // If it looks like an architecture diagram, convert to architecture format
  if (isArchitectureStyle) {
    return {
      type: 'architecture',
      source: mermaidToArchitecture(nodeLabels, edges, nodeOrder, nodeSubgroups, subgraphs, nodeTypes)
    };
  }

  // Otherwise output as flowchart
  const ddflowLines = [];
  const processedNodes = new Set();

  // First, output the starting node
  if (nodeOrder.length > 0) {
    const firstId = nodeOrder[0];
    const firstLabel = nodeLabels.get(firstId) || firstId;
    const firstType = nodeTypes.get(firstId) || 'process';
    ddflowLines.push(`(${firstType}) ${firstLabel}`);
    processedNodes.add(firstId);
  }

  // Then output edges with target node types
  edges.forEach(({ from, to }) => {
    const fromLabel = nodeLabels.get(from) || from;
    const toLabel = nodeLabels.get(to) || to;
    const toType = nodeTypes.get(to) || 'process';
    ddflowLines.push(`${fromLabel} -> (${toType}) ${toLabel}`);
    processedNodes.add(to);
  });

  return {
    type: 'flowchart',
    source: ddflowLines.join('\n')
  };
}

/**
 * Convert to DDFlow architecture format with hierarchical layers based on graph flow
 * Uses subgraphs from Mermaid to better organize layers
 */
function mermaidToArchitecture(nodeLabels, edges, nodeOrder, nodeSubgroups = new Map(), subgraphs = new Map(), nodeTypes = new Map()) {
  const ddflowLines = [];

  // Subgroup to layer type mapping
  const subgroupToLayerType = {
    'gateway layer': 'gateway',
    'gateway': 'gateway',
    'core services': 'services',
    'services': 'services',
    'data layer': 'data',
    'data': 'data',
    'external': 'services',
    'external services': 'services',
    'clients': 'clients',
    'frontend': 'clients',
  };

  // Type patterns for layer naming (fallback)
  const typePatterns = {
    clients: /^(fe|ui|frontend|user|client|browser|mobile|app|web|platform)/i,
    gateway: /gateway|proxy|load.?balancer|nginx|router|ingress|auth/i,
    services: /api|service|server|backend|engine|model|search|personal|stripe|twilio|payment|sms/i,
    data: /database|db|mysql|postgres|mongo|redis|cache|storage|sql|queue|index|store|elasticsearch/i,
  };

  // If we have subgraphs, use them to organize layers
  if (subgraphs.size > 0) {
    // First, output nodes not in any subgraph (typically entry points like Frontend)
    const nodesWithoutSubgraph = nodeOrder.filter(id => !nodeSubgroups.has(id));
    if (nodesWithoutSubgraph.length > 0) {
      const labels = nodesWithoutSubgraph.map(id => nodeLabels.get(id) || id);
      // Determine type for these nodes
      let layerType = 'clients';
      for (const [type, pattern] of Object.entries(typePatterns)) {
        if (labels.some(label => pattern.test(label)) || nodesWithoutSubgraph.some(id => pattern.test(id))) {
          layerType = type;
          break;
        }
      }
      ddflowLines.push(`[${layerType}] ${labels.join(', ')}`);
    }

    // Then output each subgraph as a layer
    subgraphs.forEach((nodeIds, subgraphName) => {
      if (nodeIds.length === 0) return;

      const labels = nodeIds.map(id => nodeLabels.get(id) || id);

      // Determine layer type from subgraph name or node content
      let layerType = subgroupToLayerType[subgraphName.toLowerCase()] || 'services';

      // If not found in mapping, try to detect from labels/IDs
      if (layerType === 'services') {
        for (const [type, pattern] of Object.entries(typePatterns)) {
          if (labels.some(label => pattern.test(label)) || nodeIds.some(id => pattern.test(id))) {
            layerType = type;
            break;
          }
        }
      }

      ddflowLines.push(`[${layerType}] ${labels.join(', ')}`);
    });
  } else {
    // No subgraphs - fall back to flow-based layering

    // First pass: identify potential "entry points" (UI, Frontend, User, etc.)
    const entryPatterns = /^(fe|ui|frontend|user|client|app|browser|web|mobile)/i;
    const entryPoints = new Set();
    nodeOrder.forEach(id => {
      const label = nodeLabels.get(id) || id;
      if (entryPatterns.test(id) || entryPatterns.test(label)) {
        entryPoints.add(id);
      }
    });

    // Build adjacency info
    const outgoing = new Map();
    const incoming = new Map();

    nodeOrder.forEach(id => {
      outgoing.set(id, []);
      incoming.set(id, []);
    });

    // Identify "forward" vs "backward" edges (backward = response edges)
    const forwardEdges = [];

    edges.forEach(edge => {
      const { from, to } = edge;
      if (!outgoing.has(from)) outgoing.set(from, []);
      outgoing.get(from).push(to);
      if (!incoming.has(to)) incoming.set(to, []);
      incoming.get(to).push(from);

      // Edge going TO an entry point is likely a "response" edge - skip for layering
      if (!(entryPoints.has(to) && !entryPoints.has(from))) {
        forwardEdges.push(edge);
      }
    });

    // Calculate layers using only forward edges
    const nodeLevel = new Map();

    // Initialize entry points at level 0, others at -1
    nodeOrder.forEach(id => {
      if (entryPoints.has(id)) {
        nodeLevel.set(id, 0);
      } else {
        nodeLevel.set(id, -1);
      }
    });

    // If no entry points found, use nodes with no incoming forward edges
    if (entryPoints.size === 0) {
      const forwardIncoming = new Map();
      nodeOrder.forEach(id => forwardIncoming.set(id, 0));
      forwardEdges.forEach(({ to }) => {
        forwardIncoming.set(to, (forwardIncoming.get(to) || 0) + 1);
      });
      nodeOrder.forEach(id => {
        if (forwardIncoming.get(id) === 0) {
          nodeLevel.set(id, 0);
        }
      });
    }

    // BFS to assign levels based on forward edges
    let changed = true;
    let iterations = 0;
    while (changed && iterations < 20) {
      changed = false;
      iterations++;

      forwardEdges.forEach(({ from, to }) => {
        const fromLevel = nodeLevel.get(from);
        const toLevel = nodeLevel.get(to);

        if (fromLevel >= 0) {
          const newLevel = fromLevel + 1;
          if (toLevel < newLevel) {
            nodeLevel.set(to, newLevel);
            changed = true;
          }
        }
      });
    }

    // Handle any nodes still at level -1
    nodeOrder.forEach(id => {
      if (nodeLevel.get(id) < 0) {
        nodeLevel.set(id, 1);
      }
    });

    // Group nodes by level
    const levelGroups = new Map();
    nodeOrder.forEach(id => {
      const level = nodeLevel.get(id);
      if (!levelGroups.has(level)) {
        levelGroups.set(level, []);
      }
      levelGroups.get(level).push(id);
    });

    // Sort levels and create layer definitions
    const sortedLevels = [...levelGroups.keys()].sort((a, b) => a - b);

    sortedLevels.forEach((level, index) => {
      const nodeIds = levelGroups.get(level);
      const labels = nodeIds.map(id => nodeLabels.get(id) || id);

      // Determine layer type
      let layerName = 'services';
      for (const [type, pattern] of Object.entries(typePatterns)) {
        if (labels.some(label => pattern.test(label)) || nodeIds.some(id => pattern.test(id))) {
          layerName = type;
          break;
        }
      }

      // Override based on position
      if (index === 0) layerName = 'clients';
      else if (index === sortedLevels.length - 1 && layerName === 'services') layerName = 'data';

      ddflowLines.push(`[${layerName}] ${labels.join(', ')}`);
    });
  }

  ddflowLines.push('');

  // Output all connections with labels
  edges.forEach(({ from, to, label }) => {
    const fromLabel = nodeLabels.get(from) || from;
    const toLabel = nodeLabels.get(to) || to;
    if (label) {
      ddflowLines.push(`${fromLabel} -> ${toLabel}: ${label}`);
    } else {
      ddflowLines.push(`${fromLabel} -> ${toLabel}`);
    }
  });

  return ddflowLines.join('\n');
}

/**
 * Convert Mermaid sequence diagram to DDFlow sequence
 */
function mermaidSequenceToDDFlow(source) {
  const lines = source.split('\n').slice(1);
  const participants = [];
  const messages = [];

  lines.forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('%%')) return;

    // Parse participant
    const partMatch = line.match(/^participant\s+(\w+)(?:\s+as\s+(.+))?/i);
    if (partMatch) {
      participants.push(partMatch[2] || partMatch[1]);
      return;
    }

    // Parse actor
    const actorMatch = line.match(/^actor\s+(\w+)(?:\s+as\s+(.+))?/i);
    if (actorMatch) {
      participants.push(actorMatch[2] || actorMatch[1]);
      return;
    }

    // Parse message: A->>B: message or A-->>B: message
    const msgMatch = line.match(/(\w+)\s*(-?->>?|-->>?)\s*(\w+)\s*:\s*(.+)/);
    if (msgMatch) {
      const [, from, arrow, to, msg] = msgMatch;
      const isDashed = arrow.startsWith('--');
      messages.push({ from, to, msg, isDashed });
    }
  });

  // Build DDFlow source
  const ddflowLines = [];

  if (participants.length > 0) {
    ddflowLines.push(`participant ${participants.join(', ')}`);
    ddflowLines.push('');
  }

  messages.forEach(({ from, to, msg, isDashed }) => {
    const arrow = isDashed ? '-->' : '->';
    ddflowLines.push(`${from} ${arrow} ${to}: ${msg}`);
  });

  return ddflowLines.join('\n');
}

/**
 * Convert Mermaid class diagram to DDFlow class
 */
function mermaidClassToDDFlow(source) {
  const lines = source.split('\n').slice(1);
  const classes = new Map();
  const relations = [];

  let currentClass = null;

  lines.forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('%%')) return;

    // Class definition: class ClassName
    const classMatch = line.match(/^class\s+(\w+)/i);
    if (classMatch) {
      currentClass = classMatch[1];
      if (!classes.has(currentClass)) {
        classes.set(currentClass, { name: currentClass, members: [] });
      }
      return;
    }

    // Member in class block: +field: type or +method()
    if (currentClass && (line.startsWith('+') || line.startsWith('-') || line.startsWith('#') || line.startsWith('~'))) {
      classes.get(currentClass).members.push(line);
      return;
    }

    // Inline class definition: ClassName : +field
    const inlineMatch = line.match(/^(\w+)\s*:\s*(.+)/);
    if (inlineMatch && !line.includes('--') && !line.includes('..')) {
      const [, className, member] = inlineMatch;
      if (!classes.has(className)) {
        classes.set(className, { name: className, members: [] });
      }
      classes.get(className).members.push(member);
      return;
    }

    // Relations: A --|> B or A --> B or A ..> B
    const relMatch = line.match(/(\w+)\s*(--|>|\.\.>|-->|--\*|--o|\.\.|--)\s*(\w+)(?:\s*:\s*(.+))?/);
    if (relMatch) {
      const [, from, arrow, to, label] = relMatch;
      let ddflowArrow = '-->';
      if (arrow === '--|>') ddflowArrow = '--|>';
      else if (arrow === '--*') ddflowArrow = '--*';
      else if (arrow === '--o') ddflowArrow = '--o';
      else if (arrow.includes('..')) ddflowArrow = '..>';

      relations.push({ from, to, arrow: ddflowArrow, label: label || '' });
    }
  });

  // Build DDFlow source
  const ddflowLines = [];

  classes.forEach(({ name, members }) => {
    ddflowLines.push(`class ${name}`);
    members.forEach(m => ddflowLines.push(m));
    ddflowLines.push('');
  });

  relations.forEach(({ from, to, arrow, label }) => {
    const line = label ? `${from} ${arrow} ${to} : ${label}` : `${from} ${arrow} ${to}`;
    ddflowLines.push(line);
  });

  return ddflowLines.join('\n');
}

/**
 * Convert Mermaid state diagram to DDFlow state
 */
function mermaidStateToDDFlow(source) {
  const lines = source.split('\n').slice(1);
  const states = new Map();
  const transitions = [];

  lines.forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('%%')) return;

    // Start state: [*] --> S1
    if (line.includes('[*]')) {
      const startMatch = line.match(/\[\*\]\s*-->\s*(\w+)/);
      const endMatch = line.match(/(\w+)\s*-->\s*\[\*\]/);

      if (startMatch) {
        states.set(startMatch[1], { id: startMatch[1], isInitial: true });
      }
      if (endMatch) {
        states.set(endMatch[1], { ...states.get(endMatch[1]), isFinal: true });
      }
      return;
    }

    // Transition: S1 --> S2 : event
    const transMatch = line.match(/(\w+)\s*-->\s*(\w+)(?:\s*:\s*(.+))?/);
    if (transMatch) {
      const [, from, to, event] = transMatch;
      if (!states.has(from)) states.set(from, { id: from });
      if (!states.has(to)) states.set(to, { id: to });
      transitions.push({ from, to, event: event || '' });
    }
  });

  // Build DDFlow source
  const ddflowLines = [];

  states.forEach((state) => {
    if (state.isInitial) ddflowLines.push(`(initial) ${state.id}`);
    else if (state.isFinal) ddflowLines.push(`(final) ${state.id}`);
  });

  if (ddflowLines.length > 0) ddflowLines.push('');

  transitions.forEach(({ from, to, event }) => {
    const line = event ? `${from} -> ${to}: ${event}` : `${from} -> ${to}`;
    ddflowLines.push(line);
  });

  return ddflowLines.join('\n');
}

/**
 * Convert Mermaid ER diagram to DDFlow ERD (SQL format)
 */
function mermaidERToDDFlow(source) {
  const lines = source.split('\n').slice(1);
  const tables = new Map();

  lines.forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('%%')) return;

    // Entity definition: ENTITY_NAME { ... }
    const entityMatch = line.match(/^(\w+)\s*\{/);
    if (entityMatch) {
      tables.set(entityMatch[1], { name: entityMatch[1], fields: [] });
      return;
    }

    // Field definition: type name PK/FK
    const fieldMatch = line.match(/^\s*(\w+)\s+(\w+)\s*(PK|FK)?/);
    if (fieldMatch && tables.size > 0) {
      const [, type, name, key] = fieldMatch;
      const lastTable = Array.from(tables.values()).pop();
      if (lastTable) {
        lastTable.fields.push({
          name,
          type: type.toUpperCase(),
          isPK: key === 'PK',
          isFK: key === 'FK'
        });
      }
    }
  });

  // Build DDFlow SQL source
  const sqlLines = [];

  tables.forEach(({ name, fields }) => {
    const fieldDefs = fields.map(f => {
      let def = `${f.name} ${f.type}`;
      if (f.isPK) def += ' PRIMARY KEY';
      return def;
    }).join(', ');

    sqlLines.push(`CREATE TABLE ${name} (${fieldDefs});`);
  });

  return sqlLines.join('\n');
}

/**
 * Convert Mermaid Gantt chart to DDFlow gantt
 */
function mermaidGanttToDDFlow(source) {
  const lines = source.split('\n').slice(1);
  const tasks = [];
  let currentSection = '';
  let dayOffset = 0;

  lines.forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('%%') || line.startsWith('title') || line.startsWith('dateFormat')) return;

    // Section
    if (line.startsWith('section')) {
      currentSection = line.replace('section', '').trim();
      return;
    }

    // Task: TaskName :id, start, duration
    const taskMatch = line.match(/^(.+?)\s*:\s*(?:\w+,\s*)?(?:(\d+)d\s*,\s*)?(\d+)d?/);
    if (taskMatch) {
      const [, name, start, duration] = taskMatch;
      const startDay = start ? parseInt(start) : dayOffset;
      const dur = parseInt(duration) || 1;
      tasks.push({ name: name.trim(), start: startDay, duration: dur });
      dayOffset = startDay + dur;
    }
  });

  // Build DDFlow source
  return tasks.map(t => `${t.name}, ${t.start}, ${t.duration}`).join('\n');
}

/**
 * Convert Mermaid pie chart to DDFlow pie
 */
function mermaidPieToDDFlow(source) {
  const lines = source.split('\n').slice(1);
  const items = [];

  lines.forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('%%') || line.startsWith('title')) return;

    // Item: "Label" : value
    const itemMatch = line.match(/"([^"]+)"\s*:\s*(\d+(?:\.\d+)?)/);
    if (itemMatch) {
      items.push({ label: itemMatch[1], value: parseFloat(itemMatch[2]) });
    }
  });

  // Build DDFlow source
  return items.map(i => `"${i.label}": ${i.value}`).join('\n');
}

/**
 * Convert Mermaid gitGraph to DDFlow git
 */
function mermaidGitToDDFlow(source) {
  const lines = source.split('\n').slice(1);
  const commands = [];

  lines.forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('%%')) return;

    // commit
    const commitMatch = line.match(/^commit(?:\s+id:\s*"([^"]+)")?(?:\s+msg:\s*"([^"]+)")?/i);
    if (commitMatch) {
      const msg = commitMatch[2] || commitMatch[1] || 'Commit';
      commands.push(`commit "${msg}"`);
      return;
    }

    // branch
    const branchMatch = line.match(/^branch\s+(\w+)/i);
    if (branchMatch) {
      commands.push(`branch ${branchMatch[1]}`);
      return;
    }

    // checkout
    const checkoutMatch = line.match(/^checkout\s+(\w+)/i);
    if (checkoutMatch) {
      commands.push(`checkout ${checkoutMatch[1]}`);
      return;
    }

    // merge
    const mergeMatch = line.match(/^merge\s+(\w+)/i);
    if (mergeMatch) {
      commands.push(`merge ${mergeMatch[1]}`);
      return;
    }
  });

  return commands.join('\n');
}

/**
 * Convert Mermaid journey to DDFlow journey
 * Properly extracts title, sections, tasks with scores and actors
 */
function mermaidJourneyToDDFlow(source) {
  const lines = source.split('\n');
  const sections = [];
  let title = '';
  let currentSection = null;

  lines.forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('%%')) return;

    // Skip 'journey' declaration
    if (line.toLowerCase() === 'journey') return;

    // Title
    const titleMatch = line.match(/^title\s+(.+)/i);
    if (titleMatch) {
      title = titleMatch[1].trim();
      return;
    }

    // Section
    const sectionMatch = line.match(/^section\s+(.+)/i);
    if (sectionMatch) {
      currentSection = {
        name: sectionMatch[1].trim(),
        tasks: []
      };
      sections.push(currentSection);
      return;
    }

    // Task: Task Name: score: actor1, actor2
    const taskMatch = line.match(/^(.+?):\s*(\d+)(?:\s*:\s*(.+))?$/);
    if (taskMatch && currentSection) {
      const task = taskMatch[1].trim();
      const score = parseInt(taskMatch[2]);
      const actorsStr = taskMatch[3] || '';
      const actors = actorsStr ? actorsStr.split(',').map(a => a.trim()).filter(a => a) : [];

      currentSection.tasks.push({ task, score, actors });
    }
  });

  // Build DDFlow journey format with sections
  const ddflowLines = [];

  // Add title if present
  if (title) {
    ddflowLines.push(`title: ${title}`);
    ddflowLines.push('');
  }

  // Collect all unique actors
  const allActors = new Set();
  sections.forEach(section => {
    section.tasks.forEach(t => t.actors.forEach(a => allActors.add(a)));
  });

  // Add actors
  if (allActors.size > 0) {
    ddflowLines.push(`actors: ${[...allActors].join(', ')}`);
    ddflowLines.push('');
  }

  // Add sections with tasks
  sections.forEach(section => {
    ddflowLines.push(`== ${section.name} ==`);
    section.tasks.forEach(t => {
      // Format: task | score | actors
      const actorStr = t.actors.length > 0 ? ` | ${t.actors.join(', ')}` : '';
      ddflowLines.push(`- ${t.task} | ${t.score}${actorStr}`);
    });
    ddflowLines.push('');
  });

  return ddflowLines.join('\n');
}

/**
 * Convert Mermaid mindmap to DDFlow mindmap
 */
function mermaidMindmapToDDFlow(source) {
  const lines = source.split('\n').slice(1);
  const result = [];

  lines.forEach(line => {
    if (!line.trim() || line.trim().startsWith('%%')) return;

    // Count leading spaces/tabs for indentation
    const indent = line.match(/^(\s*)/)[1].length;
    const text = line.trim()
      .replace(/^\(\((.+)\)\)$/, '$1')  // ((text))
      .replace(/^\((.+)\)$/, '$1')      // (text)
      .replace(/^\[(.+)\]$/, '$1')      // [text]
      .replace(/^{{(.+)}}$/, '$1');     // {{text}}

    if (text) {
      result.push('  '.repeat(Math.floor(indent / 2)) + text);
    }
  });

  return result.join('\n');
}

/**
 * Convert Mermaid source to DDFlow DSL
 * @param {string} mermaidSource - Mermaid diagram source
 * @returns {{ type: string, source: string }} DDFlow type and source
 */
export function mermaidToDDFlow(mermaidSource) {
  const detectedType = detectMermaidType(mermaidSource);

  if (!detectedType) {
    throw new Error('Could not detect Mermaid diagram type. Supported types: flowchart, sequence, class, state, erDiagram, gantt, pie, gitGraph, journey, mindmap');
  }

  let source = '';
  let type = detectedType;

  switch (detectedType) {
    case 'flowchart': {
      // flowchart may be converted to architecture if it looks like a system diagram
      const flowResult = mermaidFlowchartToDDFlow(mermaidSource);
      source = flowResult.source;
      type = flowResult.type;
      break;
    }
    case 'sequence':
      source = mermaidSequenceToDDFlow(mermaidSource);
      break;
    case 'class':
      source = mermaidClassToDDFlow(mermaidSource);
      break;
    case 'state':
      source = mermaidStateToDDFlow(mermaidSource);
      break;
    case 'erd':
      source = mermaidERToDDFlow(mermaidSource);
      break;
    case 'gantt':
      source = mermaidGanttToDDFlow(mermaidSource);
      break;
    case 'pie':
      source = mermaidPieToDDFlow(mermaidSource);
      break;
    case 'git':
      source = mermaidGitToDDFlow(mermaidSource);
      break;
    case 'journey':
      source = mermaidJourneyToDDFlow(mermaidSource);
      break;
    case 'mindmap':
      source = mermaidMindmapToDDFlow(mermaidSource);
      break;
    default:
      throw new Error(`Unsupported Mermaid diagram type: ${type}`);
  }

  return { type, source };
}

// ============= DDFlow to Mermaid Converters =============

/**
 * Convert DDFlow flowchart to Mermaid flowchart
 */
function ddflowFlowchartToMermaid(source) {
  const lines = ['flowchart TD'];
  const nodeIds = new Map();
  let nodeCounter = 0;

  const getNodeId = (label) => {
    const key = label.toLowerCase().replace(/[^a-z0-9]/g, '_');
    if (!nodeIds.has(key)) {
      nodeIds.set(key, `N${nodeCounter++}`);
    }
    return nodeIds.get(key);
  };

  source.split('\n').forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('#')) return;

    // Parse edge: A -> B or (type) A -> (type) B
    const parts = line.split(/\s*->\s*/);
    if (parts.length >= 2) {
      for (let i = 0; i < parts.length - 1; i++) {
        const fromMatch = parts[i].match(/^\((\w+)\)\s*(.+)/) || [null, 'process', parts[i]];
        const toMatch = parts[i + 1].match(/^\((\w+)\)\s*(.+)/) || [null, 'process', parts[i + 1]];

        const fromType = fromMatch[1];
        const fromLabel = fromMatch[2].trim();
        const toType = toMatch[1];
        let toLabel = toMatch[2].trim();

        // Check for edge label
        let edgeLabel = '';
        const labelMatch = toLabel.match(/^(.+?):\s*(.+)$/);
        if (labelMatch) {
          toLabel = labelMatch[1].trim();
          edgeLabel = labelMatch[2].trim();
        }

        const fromId = getNodeId(fromLabel);
        const toId = getNodeId(toLabel);

        // Define nodes with shapes
        const getShape = (type, label, id) => {
          switch (type) {
            case 'decision': return `${id}{${label}}`;
            case 'start': case 'end': return `${id}((${label}))`;
            case 'io': return `${id}[/${label}/]`;
            default: return `${id}[${label}]`;
          }
        };

        const fromNode = getShape(fromType, fromLabel, fromId);
        const toNode = getShape(toType, toLabel, toId);

        if (edgeLabel) {
          lines.push(`    ${fromNode} -->|${edgeLabel}| ${toNode}`);
        } else {
          lines.push(`    ${fromNode} --> ${toNode}`);
        }
      }
    }
  });

  return lines.join('\n');
}

/**
 * Convert DDFlow sequence to Mermaid sequence diagram
 */
function ddflowSequenceToMermaid(source) {
  const lines = ['sequenceDiagram'];

  source.split('\n').forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('#')) return;

    // Participant line
    if (line.toLowerCase().startsWith('participant')) {
      const parts = line.replace(/^participant\s+/i, '').split(',').map(p => p.trim());
      parts.forEach(p => lines.push(`    participant ${p}`));
      return;
    }

    // Message: A -> B: message or A --> B: message
    const msgMatch = line.match(/^(\w+)\s*(-->?)\s*(\w+)\s*:\s*(.+)/);
    if (msgMatch) {
      const [, from, arrow, to, msg] = msgMatch;
      const mermaidArrow = arrow === '-->' ? '-->>' : '->>';
      lines.push(`    ${from}${mermaidArrow}${to}: ${msg}`);
    }
  });

  return lines.join('\n');
}

/**
 * Convert DDFlow class diagram to Mermaid class diagram
 */
function ddflowClassToMermaid(source) {
  const lines = ['classDiagram'];
  let currentClass = null;

  source.split('\n').forEach(line => {
    line = line.trim();
    if (!line) return;

    // Class definition
    if (line.startsWith('class ')) {
      currentClass = line.replace('class ', '').trim();
      lines.push(`    class ${currentClass}`);
      return;
    }

    // Member (+ - # ~)
    if (currentClass && /^[+\-#~]/.test(line)) {
      lines.push(`    ${currentClass} : ${line}`);
      return;
    }

    // Relation
    const relMatch = line.match(/^(\w+)\s*(-->|--\*|--o|--|>|\.\.>)\s*(\w+)(?:\s*:\s*(.+))?/);
    if (relMatch) {
      const [, from, arrow, to, label] = relMatch;
      let mermaidArrow = '-->';
      if (arrow === '--|>') mermaidArrow = '--|>';
      else if (arrow === '--*') mermaidArrow = '*--';
      else if (arrow === '--o') mermaidArrow = 'o--';
      else if (arrow === '..>') mermaidArrow = '..>';

      const rel = label ? `${from} ${mermaidArrow} ${to} : ${label}` : `${from} ${mermaidArrow} ${to}`;
      lines.push(`    ${rel}`);
      currentClass = null;
    }
  });

  return lines.join('\n');
}

/**
 * Convert DDFlow state to Mermaid state diagram
 */
function ddflowStateToMermaid(source) {
  const lines = ['stateDiagram-v2'];
  const initialState = [];
  const finalStates = [];

  source.split('\n').forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('#')) return;

    // Initial/final state
    const stateMatch = line.match(/^\((\w+)\)\s*(\w+)/);
    if (stateMatch) {
      if (stateMatch[1] === 'initial') initialState.push(stateMatch[2]);
      if (stateMatch[1] === 'final') finalStates.push(stateMatch[2]);
      return;
    }

    // Transition
    const transMatch = line.match(/^(\w+)\s*->\s*(\w+)(?::\s*(.+))?/);
    if (transMatch) {
      const [, from, to, event] = transMatch;
      const trans = event ? `${from} --> ${to} : ${event}` : `${from} --> ${to}`;
      lines.push(`    ${trans}`);
    }
  });

  // Add start/end
  initialState.forEach(s => lines.unshift(`    [*] --> ${s}`));
  finalStates.forEach(s => lines.push(`    ${s} --> [*]`));

  return lines.join('\n');
}

/**
 * Convert DDFlow ERD (SQL) to Mermaid ER diagram
 */
function ddflowERDToMermaid(source) {
  const lines = ['erDiagram'];
  const tableRegex = /CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?[`"']?(\w+)[`"']?\s*\(([\s\S]*?)\);/gi;
  const relations = [];
  let match;

  while ((match = tableRegex.exec(source)) !== null) {
    const tableName = match[1];
    const fieldsDef = match[2];

    lines.push(`    ${tableName} {`);

    fieldsDef.split(',').forEach(field => {
      field = field.trim();
      if (!field || /^(PRIMARY|FOREIGN|UNIQUE|CHECK|CONSTRAINT)/i.test(field)) return;

      const fieldMatch = field.match(/^[`"']?(\w+)[`"']?\s+(\w+)/);
      if (fieldMatch) {
        const [, name, type] = fieldMatch;
        const isPK = /PRIMARY\s+KEY/i.test(field);
        const isFK = /REFERENCES/i.test(field);

        let mermaidType = type.toLowerCase();
        if (isPK) mermaidType = `${mermaidType} PK`;
        if (isFK) mermaidType = `${mermaidType} FK`;

        lines.push(`        ${mermaidType} ${name}`);

        // Track relations
        const refMatch = field.match(/REFERENCES\s+[`"']?(\w+)[`"']?/i);
        if (refMatch) {
          relations.push({ from: tableName, to: refMatch[1], field: name });
        }
      }
    });

    lines.push('    }');
  }

  // Add relations
  relations.forEach(r => {
    lines.push(`    ${r.to} ||--o{ ${r.from} : "has"`);
  });

  return lines.join('\n');
}

/**
 * Convert DDFlow gantt to Mermaid gantt
 */
function ddflowGanttToMermaid(source) {
  const lines = ['gantt', '    dateFormat X', '    axisFormat %d'];

  source.split('\n').forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('#')) return;

    // Task: Name, start, duration
    const taskMatch = line.match(/^(.+?),\s*(\d+),\s*(\d+)/);
    if (taskMatch) {
      const [, name, start, duration] = taskMatch;
      lines.push(`    ${name.trim()} :${start}, ${duration}d`);
    }
  });

  return lines.join('\n');
}

/**
 * Convert DDFlow pie to Mermaid pie
 */
function ddflowPieToMermaid(source) {
  const lines = ['pie showData'];

  source.split('\n').forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('#')) return;

    // Item: "Label": value
    const itemMatch = line.match(/"([^"]+)"\s*:\s*(\d+(?:\.\d+)?)/);
    if (itemMatch) {
      lines.push(`    "${itemMatch[1]}" : ${itemMatch[2]}`);
    }
  });

  return lines.join('\n');
}

/**
 * Convert DDFlow git to Mermaid gitGraph
 */
function ddflowGitToMermaid(source) {
  const lines = ['gitGraph'];

  source.split('\n').forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('#')) return;

    // commit "msg"
    const commitMatch = line.match(/^commit\s+"([^"]+)"/i);
    if (commitMatch) {
      lines.push(`    commit id: "${commitMatch[1]}"`);
      return;
    }

    // branch name
    const branchMatch = line.match(/^branch\s+(\w+)/i);
    if (branchMatch) {
      lines.push(`    branch ${branchMatch[1]}`);
      return;
    }

    // checkout name
    const checkoutMatch = line.match(/^checkout\s+(\w+)/i);
    if (checkoutMatch) {
      lines.push(`    checkout ${checkoutMatch[1]}`);
      return;
    }

    // merge name
    const mergeMatch = line.match(/^merge\s+(\w+)/i);
    if (mergeMatch) {
      lines.push(`    merge ${mergeMatch[1]}`);
      return;
    }
  });

  return lines.join('\n');
}

/**
 * Convert DDFlow journey to Mermaid journey
 */
function ddflowJourneyToMermaid(source) {
  const lines = ['journey', '    title User Journey'];
  const nodes = [];
  const edges = [];

  source.split('\n').forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('#')) return;

    // Node definition
    const nodeMatch = line.match(/^\[(\w+)\]\s*(.+?)(?:\s*:\s*(.+))?$/);
    if (nodeMatch && !line.includes('->')) {
      nodes.push({ type: nodeMatch[1], label: nodeMatch[2], desc: nodeMatch[3] });
      return;
    }

    // Edge
    if (line.includes('->')) {
      const edgeMatch = line.match(/^(.+?)\s*-(?:([^>]+)->|->)\s*(.+)$/);
      if (edgeMatch) {
        edges.push({ from: edgeMatch[1].trim(), label: edgeMatch[2]?.trim(), to: edgeMatch[3].trim() });
      }
    }
  });

  // Build sections with steps
  lines.push('    section Journey');
  nodes.filter(n => n.type !== 'actor').forEach((n, i) => {
    const score = 5 - Math.floor(i / 2); // Vary score
    lines.push(`        ${n.label}: ${Math.max(1, Math.min(5, score))}`);
  });

  return lines.join('\n');
}

/**
 * Convert DDFlow mindmap to Mermaid mindmap
 */
function ddflowMindmapToMermaid(source) {
  const lines = ['mindmap'];

  source.split('\n').forEach(line => {
    if (!line.trim()) return;

    // Count indentation (2 spaces = 1 level)
    const indent = line.match(/^(\s*)/)[1].length;
    const level = Math.floor(indent / 2);
    const text = line.trim();

    if (text) {
      lines.push('  '.repeat(level + 1) + text);
    }
  });

  return lines.join('\n');
}

/**
 * Convert DDFlow DSL to Mermaid syntax
 * @param {string} type - DDFlow diagram type
 * @param {string} source - DDFlow DSL source
 * @returns {string} Mermaid diagram source
 */
export function ddflowToMermaid(type, source) {
  switch (type) {
    case 'flowchart':
      return ddflowFlowchartToMermaid(source);
    case 'sequence':
      return ddflowSequenceToMermaid(source);
    case 'class':
      return ddflowClassToMermaid(source);
    case 'state':
      return ddflowStateToMermaid(source);
    case 'erd':
      return ddflowERDToMermaid(source);
    case 'gantt':
      return ddflowGanttToMermaid(source);
    case 'pie':
      return ddflowPieToMermaid(source);
    case 'git':
      return ddflowGitToMermaid(source);
    case 'journey':
      return ddflowJourneyToMermaid(source);
    case 'mindmap':
      return ddflowMindmapToMermaid(source);
    default:
      throw new Error(`Cannot export "${type}" to Mermaid. Supported types: flowchart, sequence, class, state, erd, gantt, pie, git, journey, mindmap`);
  }
}

/**
 * Download Mermaid source as .mmd file
 * @param {string} mermaidSource - Mermaid diagram source
 * @param {string} filename - Filename without extension
 */
export function downloadMermaidFile(mermaidSource, filename = 'diagram') {
  const blob = new Blob([mermaidSource], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.mmd`;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => URL.revokeObjectURL(url), 100);
}

/**
 * Copy Mermaid source to clipboard
 * @param {string} mermaidSource - Mermaid diagram source
 */
export async function copyMermaidToClipboard(mermaidSource) {
  await navigator.clipboard.writeText(mermaidSource);
}
