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
  // C4 diagram types
  if (trimmed.startsWith('c4context') || trimmed.startsWith('c4container') ||
      trimmed.startsWith('c4component') || trimmed.startsWith('c4dynamic') ||
      trimmed.startsWith('c4deployment')) return 'c4';

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
  const allLines = source.split('\n');
  const firstLine = allLines[0].trim().toLowerCase();
  const lines = allLines.slice(1); // Skip first line (flowchart TD/LR)

  // Extract direction from first line: flowchart LR, flowchart TD, graph LR, etc.
  let direction = 'TB'; // Default: top-to-bottom
  const dirMatch = firstLine.match(/(?:flowchart|graph)\s+(td|tb|lr|rl|bt)/i);
  if (dirMatch) {
    direction = dirMatch[1].toUpperCase();
    // Normalize TD to TB
    if (direction === 'TD') direction = 'TB';
  }

  const nodeLabels = new Map();
  const nodeTypes = new Map();
  const nodeSubgroups = new Map(); // Track which subgraph each node belongs to
  const subgraphs = new Map(); // subgraph name -> array of node IDs
  const edges = [];
  let hasDecisions = false;
  let currentSubgraph = null;

  // Helper to parse a node definition and extract id, label, type
  const parseNodeDef = (str) => {
    str = str.trim();
    // Try different shape patterns
    // [Label] - rectangle
    let match = str.match(/^(\w+)\[([^\]]+)\]$/);
    if (match) return { id: match[1], label: cleanLabel(match[2]), type: 'process' };

    // {Label} - diamond/decision
    match = str.match(/^(\w+)\{([^}]+)\}$/);
    if (match) return { id: match[1], label: cleanLabel(match[2]), type: 'decision' };

    // ((Label)) - circle
    match = str.match(/^(\w+)\(\(([^)]+)\)\)$/);
    if (match) return { id: match[1], label: cleanLabel(match[2]), type: 'start' };

    // ([Label]) - stadium
    match = str.match(/^(\w+)\(\[([^\]]+)\]\)$/);
    if (match) return { id: match[1], label: cleanLabel(match[2]), type: 'process' };

    // [(Label)] - cylinder/database
    match = str.match(/^(\w+)\[\(([^)]+)\)\]$/);
    if (match) return { id: match[1], label: cleanLabel(match[2]), type: 'database' };

    // (Label) - stadium/pill shape (common in Mermaid)
    match = str.match(/^(\w+)\(([^)]+)\)$/);
    if (match) return { id: match[1], label: cleanLabel(match[2]), type: 'process' };

    // Just an ID
    match = str.match(/^(\w+)$/);
    if (match) return { id: match[1], label: match[1], type: 'process' };

    return null;
  };

  // Clean font-awesome icons from labels: fa:fa-car Car -> Car
  const cleanFaIcons = (label) => {
    return label.replace(/fa:fa-[\w-]+\s*/g, '').trim() || label;
  };

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

    // Parse edges with inline node definitions: A[Label] -->|edge label| B(Label)
    // Match pattern: NodeDef arrow (optional |label|) NodeDef
    const edgePattern = /^(.+?)\s*(--+>|==+>|-\.+->?|--+)\s*(?:\|([^|]*)\|)?\s*(.+)$/;
    const edgeMatch = line.match(edgePattern);

    if (edgeMatch) {
      const [, fromPart, arrow, edgeLabel, toPart] = edgeMatch;

      // Parse from node
      const fromNode = parseNodeDef(fromPart.trim());
      if (fromNode) {
        const label = cleanFaIcons(fromNode.label);
        // Only update label if this is a proper definition (has shape, not just ID reference)
        // or if we haven't seen this node before
        const hasShapeDefinition = fromNode.label !== fromNode.id;
        if (hasShapeDefinition || !nodeLabels.has(fromNode.id)) {
          nodeLabels.set(fromNode.id, label);
        }
        // Update type only if it's not just an ID (which defaults to 'process')
        if (hasShapeDefinition || !nodeTypes.has(fromNode.id)) {
          nodeTypes.set(fromNode.id, fromNode.type);
        }
        if (fromNode.type === 'decision') hasDecisions = true;
        if (currentSubgraph) {
          nodeSubgroups.set(fromNode.id, currentSubgraph);
          if (!subgraphs.get(currentSubgraph).includes(fromNode.id)) {
            subgraphs.get(currentSubgraph).push(fromNode.id);
          }
        }
      }

      // Parse to node
      const toNode = parseNodeDef(toPart.trim());
      if (toNode) {
        const label = cleanFaIcons(toNode.label);
        // Only update label if this is a proper definition (has shape, not just ID reference)
        // or if we haven't seen this node before
        const hasShapeDefinition = toNode.label !== toNode.id;
        if (hasShapeDefinition || !nodeLabels.has(toNode.id)) {
          nodeLabels.set(toNode.id, label);
        }
        // Update type only if it's not just an ID (which defaults to 'process')
        if (hasShapeDefinition || !nodeTypes.has(toNode.id)) {
          nodeTypes.set(toNode.id, toNode.type);
        }
        if (toNode.type === 'decision') hasDecisions = true;
        if (currentSubgraph) {
          nodeSubgroups.set(toNode.id, currentSubgraph);
          if (!subgraphs.get(currentSubgraph).includes(toNode.id)) {
            subgraphs.get(currentSubgraph).push(toNode.id);
          }
        }
      }

      // Add edge
      if (fromNode && toNode) {
        edges.push({
          from: fromNode.id,
          to: toNode.id,
          label: edgeLabel ? cleanLabel(edgeLabel) : ''
        });
      }
      return;
    }

    // Parse standalone node definitions (no edge)
    const standaloneNode = parseNodeDef(line);
    if (standaloneNode) {
      const label = cleanFaIcons(standaloneNode.label);
      // Only update if this has a shape definition or we haven't seen it
      const hasShapeDefinition = standaloneNode.label !== standaloneNode.id;
      if (hasShapeDefinition || !nodeLabels.has(standaloneNode.id)) {
        nodeLabels.set(standaloneNode.id, label);
      }
      if (hasShapeDefinition || !nodeTypes.has(standaloneNode.id)) {
        nodeTypes.set(standaloneNode.id, standaloneNode.type);
      }
      if (standaloneNode.type === 'decision') hasDecisions = true;
      if (currentSubgraph) {
        nodeSubgroups.set(standaloneNode.id, currentSubgraph);
        if (!subgraphs.get(currentSubgraph).includes(standaloneNode.id)) {
          subgraphs.get(currentSubgraph).push(standaloneNode.id);
        }
      }
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
  // But NOT if it has decision nodes (those are flowcharts)
  const sourceCounts = new Map();
  let hasInteractionLabels = false;
  edges.forEach(({ from, label }) => {
    sourceCounts.set(from, (sourceCounts.get(from) || 0) + 1);
    if (label && /interact|fetch|cache|call|send|use|connect|query|read|write|get|post|create|update|webhook|event/i.test(label)) {
      hasInteractionLabels = true;
    }
  });
  const hasMultipleFromSameSource = [...sourceCounts.values()].some(count => count > 1);
  const hasSubgraphs = subgraphs.size > 0;
  // Architecture style: subgraphs OR (interaction labels without decisions) OR (many nodes with interaction labels)
  // Simple flowcharts with decisions should NOT become architecture diagrams
  const isArchitectureStyle = !hasDecisions && (
                              hasSubgraphs ||
                              (hasMultipleFromSameSource && hasInteractionLabels) ||
                              hasInteractionLabels ||
                              (nodeLabels.size >= 8 && hasMultipleFromSameSource));

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

  // Add direction directive if not default (TB)
  if (direction !== 'TB') {
    ddflowLines.push(`direction: ${direction}`);
  }

  // First, output the starting node
  if (nodeOrder.length > 0) {
    const firstId = nodeOrder[0];
    const firstLabel = nodeLabels.get(firstId) || firstId;
    const firstType = nodeTypes.get(firstId) || 'process';
    ddflowLines.push(`(${firstType}) ${firstLabel}`);
    processedNodes.add(firstId);
  }

  // Then output edges with target node types and labels
  edges.forEach(({ from, to, label }) => {
    const fromLabel = nodeLabels.get(from) || from;
    const toLabel = nodeLabels.get(to) || to;
    const toType = nodeTypes.get(to) || 'process';
    if (label) {
      ddflowLines.push(`${fromLabel} -> (${toType}) ${toLabel}: ${label}`);
    } else {
      ddflowLines.push(`${fromLabel} -> (${toType}) ${toLabel}`);
    }
    processedNodes.add(to);
  });

  return {
    type: 'flowchart',
    source: ddflowLines.join('\n')
  };
}

/**
 * Convert to DDFlow architecture format with hierarchical layers based on graph flow
 * Uses BFS to compute proper layer hierarchy from edge directions
 */
function mermaidToArchitecture(nodeLabels, edges, nodeOrder, nodeSubgroups = new Map(), subgraphs = new Map(), nodeTypes = new Map()) {
  const ddflowLines = [];

  // Extended type patterns for better layer inference
  const typePatterns = {
    clients: /^(fe|ui|frontend|user|client|browser|mobile|app)\b/i,
    gateway: /gateway|proxy|load.?balancer|nginx|router|ingress|kong|traefik|envoy/i,
    service: /(api|service|server|backend|engine|controller|handler|processor)\b/i,
    database: /database|db|mysql|postgres|mongo|redis|cache|storage|sql|queue|index|store|elastic|dynamo|s3|bucket/i,
    external: /external|third.?party|vendor|saas|stripe|twilio|sendgrid|aws|gcp|azure/i,
  };

  // Infer node type from label
  const inferNodeType = (label, id) => {
    const text = `${label} ${id}`.toLowerCase();
    if (typePatterns.clients.test(text)) return 'clients';
    if (typePatterns.gateway.test(text)) return 'gateway';
    if (typePatterns.database.test(text)) return 'database';
    if (typePatterns.external.test(text)) return 'external';
    if (typePatterns.service.test(text)) return 'service';
    return 'service'; // Default
  };

  // Build adjacency for BFS-based layer computation
  const outgoing = new Map();
  const incoming = new Map();
  nodeOrder.forEach(id => {
    outgoing.set(id, []);
    incoming.set(id, []);
  });

  edges.forEach(({ from, to }) => {
    if (outgoing.has(from)) outgoing.get(from).push(to);
    if (incoming.has(to)) incoming.get(to).push(from);
  });

  // Find entry points (nodes with no incoming edges, or identified as clients/frontend)
  const entryPoints = new Set();
  nodeOrder.forEach(id => {
    const label = nodeLabels.get(id) || id;
    const incomingEdges = incoming.get(id) || [];
    // Entry point if: no incoming edges OR matches frontend pattern
    if (incomingEdges.length === 0 || typePatterns.clients.test(label) || typePatterns.clients.test(id)) {
      entryPoints.add(id);
    }
  });

  // If no entry points found, use nodes that only have outgoing edges to frontend
  if (entryPoints.size === 0 && nodeOrder.length > 0) {
    entryPoints.add(nodeOrder[0]);
  }

  // Identify "response" edges (edges going BACK to entry points)
  const responseEdges = new Set();
  edges.forEach(({ from, to }, idx) => {
    if (entryPoints.has(to) && !entryPoints.has(from)) {
      responseEdges.add(idx);
    }
  });

  // Compute layers using BFS from entry points (ignoring response edges)
  const nodeLevel = new Map();
  entryPoints.forEach(id => nodeLevel.set(id, 0));

  // BFS to assign levels
  const queue = [...entryPoints];
  while (queue.length > 0) {
    const nodeId = queue.shift();
    const currentLevel = nodeLevel.get(nodeId);
    const targets = outgoing.get(nodeId) || [];

    targets.forEach(targetId => {
      // Skip if this edge is a response edge
      const edgeIdx = edges.findIndex(e => e.from === nodeId && e.to === targetId);
      if (responseEdges.has(edgeIdx)) return;

      const targetLevel = nodeLevel.get(targetId);
      const newLevel = currentLevel + 1;
      if (targetLevel === undefined || targetLevel < newLevel) {
        nodeLevel.set(targetId, newLevel);
        if (!queue.includes(targetId)) {
          queue.push(targetId);
        }
      }
    });
  }

  // Handle nodes in subgraphs that weren't reached by BFS
  if (subgraphs.size > 0) {
    // Nodes in subgraphs might be separate flow (like ingestion)
    subgraphs.forEach((nodeIds, subgraphName) => {
      // Find the entry point of this subgraph
      const subgraphEntries = nodeIds.filter(id => {
        const inEdges = (incoming.get(id) || []).filter(src => !nodeIds.includes(src));
        return inEdges.length === 0;
      });

      // If subgraph has no external inputs, treat as parallel flow
      if (subgraphEntries.length === nodeIds.length) {
        // All nodes in subgraph have no external inputs - assign starting level
        const maxLevel = Math.max(0, ...[...nodeLevel.values()]);
        nodeIds.forEach((id, idx) => {
          if (!nodeLevel.has(id)) {
            nodeLevel.set(id, 0); // Start at same level as main entry
          }
        });
        // Now BFS within subgraph
        const subQueue = nodeIds.filter(id => nodeLevel.has(id));
        while (subQueue.length > 0) {
          const nodeId = subQueue.shift();
          const currentLevel = nodeLevel.get(nodeId);
          const targets = (outgoing.get(nodeId) || []).filter(t => nodeIds.includes(t) || !nodeLevel.has(t));
          targets.forEach(targetId => {
            const newLevel = currentLevel + 1;
            if (!nodeLevel.has(targetId) || nodeLevel.get(targetId) < newLevel) {
              nodeLevel.set(targetId, newLevel);
              if (!subQueue.includes(targetId)) subQueue.push(targetId);
            }
          });
        }
      }
    });
  }

  // Assign remaining unleveled nodes
  const avgLevel = nodeLevel.size > 0
    ? Math.floor([...nodeLevel.values()].reduce((a, b) => a + b, 0) / nodeLevel.size)
    : 0;
  nodeOrder.forEach(id => {
    if (!nodeLevel.has(id)) {
      nodeLevel.set(id, avgLevel);
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

  // Sort levels
  const sortedLevels = [...levelGroups.keys()].sort((a, b) => a - b);

  // Generate layer definitions with proper types
  sortedLevels.forEach((level) => {
    const nodeIds = levelGroups.get(level);

    // Group nodes in this level by their inferred type
    const typeGroups = new Map();
    nodeIds.forEach(id => {
      const label = nodeLabels.get(id) || id;
      // Check if node is in a subgraph
      const subgroupName = nodeSubgroups.get(id);
      let nodeType;

      if (subgroupName) {
        // Infer type from subgraph name first
        const subLower = subgroupName.toLowerCase();
        if (/ingestion|ingest|import|input/i.test(subLower)) nodeType = 'service';
        else if (/gateway|api/i.test(subLower)) nodeType = 'gateway';
        else if (/data|storage|database/i.test(subLower)) nodeType = 'database';
        else if (/external|third/i.test(subLower)) nodeType = 'external';
        else nodeType = inferNodeType(label, id);
      } else {
        nodeType = inferNodeType(label, id);
      }

      if (!typeGroups.has(nodeType)) {
        typeGroups.set(nodeType, []);
      }
      typeGroups.get(nodeType).push(id);
    });

    // Output each type group as a separate layer line
    typeGroups.forEach((ids, type) => {
      const labels = ids.map(id => nodeLabels.get(id) || id);
      ddflowLines.push(`[${type}] ${labels.join(', ')}`);
    });
  });

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
  const participants = new Set();
  const ddflowLines = [];
  const participantAliases = new Map(); // id -> display name

  lines.forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('%%')) return;

    // Parse participant: participant A as Alice
    const partMatch = line.match(/^participant\s+(\w+)(?:\s+as\s+(.+))?/i);
    if (partMatch) {
      const id = partMatch[1];
      const name = partMatch[2] || partMatch[1];
      participantAliases.set(id, name);
      participants.add(name);
      return;
    }

    // Parse actor: actor A as Alice
    const actorMatch = line.match(/^actor\s+(\w+)(?:\s+as\s+(.+))?/i);
    if (actorMatch) {
      const id = actorMatch[1];
      const name = actorMatch[2] || actorMatch[1];
      participantAliases.set(id, name);
      participants.add(name);
      return;
    }

    // Parse loop block: loop HealthCheck
    const loopMatch = line.match(/^loop\s+(.+)/i);
    if (loopMatch) {
      ddflowLines.push(`loop ${loopMatch[1]}`);
      return;
    }

    // Parse alt block: alt Success
    const altMatch = line.match(/^alt\s+(.+)/i);
    if (altMatch) {
      ddflowLines.push(`alt ${altMatch[1]}`);
      return;
    }

    // Parse else block: else Failure
    const elseMatch = line.match(/^else\s*(.*)/i);
    if (elseMatch) {
      ddflowLines.push(`else ${elseMatch[1] || ''}`);
      return;
    }

    // Parse opt block: opt Optional
    const optMatch = line.match(/^opt\s+(.+)/i);
    if (optMatch) {
      ddflowLines.push(`opt ${optMatch[1]}`);
      return;
    }

    // Parse end block
    if (line.toLowerCase() === 'end') {
      ddflowLines.push('end');
      return;
    }

    // Parse note: Note right of John: text
    const noteMatch = line.match(/^note\s+(left|right)\s+of\s+(\w+)\s*:\s*(.+)/i);
    if (noteMatch) {
      const position = noteMatch[1].toLowerCase();
      const participantId = noteMatch[2];
      const participantName = participantAliases.get(participantId) || participantId;
      const noteText = noteMatch[3];
      ddflowLines.push(`note ${position} of ${participantName}: ${noteText}`);
      return;
    }

    // Parse note over: Note over A,B: text
    const noteOverMatch = line.match(/^note\s+over\s+(.+?)\s*:\s*(.+)/i);
    if (noteOverMatch) {
      const participantIds = noteOverMatch[1].split(',').map(p => {
        const id = p.trim();
        return participantAliases.get(id) || id;
      });
      ddflowLines.push(`note over ${participantIds.join(', ')}: ${noteOverMatch[2]}`);
      return;
    }

    // Parse message: A->>B: message or A-->>B: message
    const msgMatch = line.match(/(\w+)\s*(-?->>?|-->>?)\s*(\w+)\s*:\s*(.+)/);
    if (msgMatch) {
      const [, fromId, arrow, toId, msg] = msgMatch;
      const from = participantAliases.get(fromId) || fromId;
      const to = participantAliases.get(toId) || toId;
      const isDashed = arrow.startsWith('--');
      participants.add(from);
      participants.add(to);
      const ddflowArrow = isDashed ? '-->' : '->';
      ddflowLines.push(`${from} ${ddflowArrow} ${to}: ${msg}`);
    }
  });

  // Build final output with participants at top
  const output = [];
  if (participants.size > 0) {
    output.push(`participant ${[...participants].join(', ')}`);
    output.push('');
  }
  output.push(...ddflowLines);

  return output.join('\n');
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
 * Convert Mermaid C4 diagram to DDFlow architecture format
 * Supports C4Context, C4Container, C4Component, C4Dynamic, C4Deployment
 */
function mermaidC4ToDDFlow(source) {
  const lines = source.split('\n');
  const firstLine = lines[0].trim().toLowerCase();

  // Determine C4 diagram type
  let c4Type = 'context';
  if (firstLine.includes('c4container')) c4Type = 'container';
  else if (firstLine.includes('c4component')) c4Type = 'component';
  else if (firstLine.includes('c4dynamic')) c4Type = 'dynamic';
  else if (firstLine.includes('c4deployment')) c4Type = 'deployment';

  const elements = new Map(); // alias -> { type, label, description, technology, boundary }
  const relationships = [];
  const boundaryStack = []; // Stack for nested boundaries
  const boundaryDefinitions = new Map(); // boundary alias -> { label, type, parentBoundary }

  // Helper to extract parameters from C4 function calls
  // Format: FunctionName(alias, "label", "tech", "description")
  const parseC4Call = (line) => {
    const match = line.match(/^(\w+)\s*\((.+)\)\s*$/);
    if (!match) return null;

    const funcName = match[1];
    const argsStr = match[2];

    // Parse arguments - handle quoted strings and plain values
    const args = [];
    let current = '';
    let inQuote = false;
    let quoteChar = '';

    for (let i = 0; i < argsStr.length; i++) {
      const char = argsStr[i];
      if ((char === '"' || char === "'") && !inQuote) {
        inQuote = true;
        quoteChar = char;
      } else if (char === quoteChar && inQuote) {
        inQuote = false;
        quoteChar = '';
      } else if (char === ',' && !inQuote) {
        args.push(current.trim().replace(/^["']|["']$/g, ''));
        current = '';
      } else {
        current += char;
      }
    }
    if (current.trim()) {
      args.push(current.trim().replace(/^["']|["']$/g, ''));
    }

    return { funcName, args };
  };

  // Process lines
  lines.slice(1).forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('%%') || line.startsWith('title')) return;

    // Handle boundary start
    const boundaryMatch = line.match(/^(Enterprise_Boundary|System_Boundary|Container_Boundary|Boundary)\s*\(([^,]+),\s*["']([^"']+)["'](?:,\s*["']([^"']+)["'])?\s*\)/i);
    if (boundaryMatch) {
      const boundaryAlias = boundaryMatch[2].trim();
      const boundaryLabel = boundaryMatch[3];
      const boundaryType = boundaryMatch[4] || boundaryMatch[1].replace('_Boundary', '').toLowerCase();
      const parentBoundary = boundaryStack.length > 0 ? boundaryStack[boundaryStack.length - 1].alias : null;

      boundaryDefinitions.set(boundaryAlias, {
        label: boundaryLabel,
        type: boundaryType,
        parentBoundary
      });

      boundaryStack.push({
        type: boundaryMatch[1],
        alias: boundaryAlias,
        label: boundaryLabel
      });
      return;
    }

    // Handle boundary end
    if (line === '}' || line === '{') {
      if (line === '}' && boundaryStack.length > 0) {
        boundaryStack.pop();
      }
      return;
    }

    // Handle UpdateElementStyle, UpdateRelStyle, UpdateLayoutConfig - skip styling
    if (line.startsWith('Update')) return;

    const parsed = parseC4Call(line);
    if (!parsed) return;

    const { funcName, args } = parsed;
    const funcLower = funcName.toLowerCase();

    // Current boundary context
    const currentBoundary = boundaryStack.length > 0 ? boundaryStack[boundaryStack.length - 1].alias : null;

    // Person elements
    if (funcLower.startsWith('person')) {
      const isExternal = funcLower.includes('_ext');
      elements.set(args[0], {
        type: isExternal ? 'external' : 'clients',
        label: args[1] || args[0],
        description: args[2] || '',
        boundary: currentBoundary
      });
      return;
    }

    // System elements
    if (funcLower.startsWith('system')) {
      const isExternal = funcLower.includes('_ext');
      const isDb = funcLower.includes('db');
      const isQueue = funcLower.includes('queue');
      let type = 'service';
      if (isExternal) type = 'external';
      else if (isDb) type = 'database';
      else if (isQueue) type = 'service';

      elements.set(args[0], {
        type,
        label: args[1] || args[0],
        description: args[2] || '',
        technology: '',
        boundary: currentBoundary
      });
      return;
    }

    // Container elements
    if (funcLower.startsWith('container')) {
      const isExternal = funcLower.includes('_ext');
      const isDb = funcLower.includes('db');
      const isQueue = funcLower.includes('queue');
      let type = 'service';
      if (isExternal) type = 'external';
      else if (isDb) type = 'database';
      else if (isQueue) type = 'service';

      elements.set(args[0], {
        type,
        label: args[1] || args[0],
        technology: args[2] || '',
        description: args[3] || '',
        boundary: currentBoundary
      });
      return;
    }

    // Component elements
    if (funcLower.startsWith('component')) {
      const isExternal = funcLower.includes('_ext');
      const isDb = funcLower.includes('db');
      let type = 'service';
      if (isExternal) type = 'external';
      else if (isDb) type = 'database';

      elements.set(args[0], {
        type,
        label: args[1] || args[0],
        technology: args[2] || '',
        description: args[3] || '',
        boundary: currentBoundary
      });
      return;
    }

    // Node (for deployment diagrams)
    if (funcLower === 'node' || funcLower === 'node_l' || funcLower === 'node_r') {
      elements.set(args[0], {
        type: 'service',
        label: args[1] || args[0],
        technology: args[2] || '',
        description: args[3] || '',
        boundary: currentBoundary
      });
      return;
    }

    // Deployment Node
    if (funcLower.startsWith('deployment_node')) {
      elements.set(args[0], {
        type: 'service',
        label: args[1] || args[0],
        technology: args[2] || '',
        description: args[3] || '',
        boundary: currentBoundary
      });
      return;
    }

    // Relationships
    if (funcLower.startsWith('rel') || funcLower === 'birel') {
      const isBidirectional = funcLower === 'birel';
      // Rel(from, to, label, ?technology)
      // RelIndex(index, from, to, label) for dynamic diagrams
      let from, to, label, tech;

      if (funcLower === 'relindex') {
        // RelIndex has index as first param
        from = args[1];
        to = args[2];
        label = args[3] || '';
        tech = args[4] || '';
      } else {
        from = args[0];
        to = args[1];
        label = args[2] || '';
        tech = args[3] || '';
      }

      relationships.push({
        from,
        to,
        label: tech ? `${label} [${tech}]` : label,
        bidirectional: isBidirectional
      });
      return;
    }
  });

  // Build DDFlow architecture DSL
  const ddflowLines = [];

  // Group elements by boundary first, then by type
  const elementsByBoundary = new Map(); // boundary alias -> elements
  const unboundedElements = []; // elements without boundary

  elements.forEach((el, alias) => {
    if (el.boundary) {
      if (!elementsByBoundary.has(el.boundary)) {
        elementsByBoundary.set(el.boundary, []);
      }
      elementsByBoundary.get(el.boundary).push({ alias, ...el });
    } else {
      unboundedElements.push({ alias, ...el });
    }
  });

  // Helper to output elements grouped by type
  const outputElementsByType = (els) => {
    const byType = new Map();
    els.forEach(el => {
      if (!byType.has(el.type)) byType.set(el.type, []);
      byType.get(el.type).push(el);
    });

    const typeOrder = ['clients', 'external', 'gateway', 'service', 'database'];
    typeOrder.forEach(type => {
      const typeEls = byType.get(type);
      if (typeEls && typeEls.length > 0) {
        const labels = typeEls.map(e => e.label);
        ddflowLines.push(`[${type}] ${labels.join(', ')}`);
      }
    });

    // Output any remaining types
    byType.forEach((typeEls, type) => {
      if (!typeOrder.includes(type) && typeEls.length > 0) {
        const labels = typeEls.map(e => e.label);
        ddflowLines.push(`[${type}] ${labels.join(', ')}`);
      }
    });
  };

  // Output unbounded elements first (outside any boundary)
  if (unboundedElements.length > 0) {
    outputElementsByType(unboundedElements);
    ddflowLines.push('');
  }

  // Find root boundaries (those without parent) and build hierarchy
  const rootBoundaries = [];
  const childrenOf = new Map(); // parent alias -> [child aliases]

  boundaryDefinitions.forEach((boundaryDef, boundaryAlias) => {
    if (!boundaryDef.parentBoundary) {
      rootBoundaries.push(boundaryAlias);
    } else {
      if (!childrenOf.has(boundaryDef.parentBoundary)) {
        childrenOf.set(boundaryDef.parentBoundary, []);
      }
      childrenOf.get(boundaryDef.parentBoundary).push(boundaryAlias);
    }
  });

  // Helper to recursively output a boundary and its children
  const outputBoundary = (boundaryAlias, indent = '') => {
    const boundaryDef = boundaryDefinitions.get(boundaryAlias);
    if (!boundaryDef) return;

    const boundaryElements = elementsByBoundary.get(boundaryAlias) || [];
    const children = childrenOf.get(boundaryAlias) || [];

    // Skip empty boundaries with no children
    if (boundaryElements.length === 0 && children.length === 0) return;

    // Start boundary block
    ddflowLines.push(`${indent}group "${boundaryDef.label}" {`);

    // Output elements directly in this boundary (grouped by type)
    if (boundaryElements.length > 0) {
      const byType = new Map();
      boundaryElements.forEach(el => {
        if (!byType.has(el.type)) byType.set(el.type, []);
        byType.get(el.type).push(el);
      });

      const typeOrder = ['clients', 'external', 'gateway', 'service', 'database'];
      typeOrder.forEach(type => {
        const typeEls = byType.get(type);
        if (typeEls && typeEls.length > 0) {
          const labels = typeEls.map(e => e.label);
          ddflowLines.push(`${indent}  [${type}] ${labels.join(', ')}`);
        }
      });

      // Output any remaining types
      byType.forEach((typeEls, type) => {
        if (!typeOrder.includes(type) && typeEls.length > 0) {
          const labels = typeEls.map(e => e.label);
          ddflowLines.push(`${indent}  [${type}] ${labels.join(', ')}`);
        }
      });
    }

    // Output nested child boundaries
    if (children.length > 0) {
      if (boundaryElements.length > 0) ddflowLines.push('');
      children.forEach(childAlias => {
        outputBoundary(childAlias, indent + '  ');
      });
    }

    // End boundary block
    ddflowLines.push(`${indent}}`);
    ddflowLines.push('');
  };

  // Output all root boundaries recursively
  rootBoundaries.forEach(rootAlias => {
    outputBoundary(rootAlias);
  });

  // Output relationships
  relationships.forEach(rel => {
    const fromEl = elements.get(rel.from);
    const toEl = elements.get(rel.to);
    const fromLabel = fromEl?.label || rel.from;
    const toLabel = toEl?.label || rel.to;

    if (rel.bidirectional) {
      ddflowLines.push(`${fromLabel} <-> ${toLabel}: ${rel.label}`);
    } else if (rel.label) {
      ddflowLines.push(`${fromLabel} -> ${toLabel}: ${rel.label}`);
    } else {
      ddflowLines.push(`${fromLabel} -> ${toLabel}`);
    }
  });

  return ddflowLines.join('\n');
}

/**
 * Convert Mermaid source to DDFlow DSL
 * @param {string} mermaidSource - Mermaid diagram source
 * @returns {{ type: string, source: string }} DDFlow type and source
 */
export function mermaidToDDFlow(mermaidSource) {
  const detectedType = detectMermaidType(mermaidSource);

  if (!detectedType) {
    throw new Error('Could not detect Mermaid diagram type. Supported types: flowchart, sequence, class, state, erDiagram, gantt, pie, gitGraph, journey, mindmap, c4');
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
    case 'c4':
      source = mermaidC4ToDDFlow(mermaidSource);
      type = 'architecture';
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
