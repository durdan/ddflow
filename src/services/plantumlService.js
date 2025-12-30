// DDFlow PlantUML Service - Import/Export PlantUML diagrams

// ============================================
// TYPE DETECTION
// ============================================

/**
 * Detect PlantUML diagram type from source
 */
export function detectPlantUMLType(source) {
  const normalized = source.toLowerCase();

  // Check for special diagram types with their own start tags
  if (normalized.includes('@startmindmap')) return 'mindmap';
  if (normalized.includes('@startwbs')) return 'mindmap'; // WBS -> mindmap
  if (normalized.includes('@startgantt')) return 'gantt';
  if (normalized.includes('@startjson') || normalized.includes('@startyaml')) return 'unsupported';

  // Check content patterns for @startuml diagrams
  const content = source.replace(/@startuml.*|@enduml.*/gi, '').trim();

  // C4 diagram (C4-PlantUML library)
  if (/\b(Person|System|Container|Component|System_Ext|Container_Ext|Boundary|Enterprise_Boundary|System_Boundary|Container_Boundary)\s*\(/i.test(content) ||
      /\b(Rel|Rel_R|Rel_L|Rel_U|Rel_D)\s*\(/i.test(content)) {
    return 'c4';
  }

  // Deployment diagram - node, device, artifact, etc.
  if (/\b(node|device|artifact|file|folder|frame|rectangle|card)\s+"?[^"]*"?\s*(<<|as|\{|$)/im.test(content)) {
    // Only if it looks like deployment (has node/device/artifact)
    if (/\b(node|device|artifact)\b/i.test(content)) {
      return 'deployment';
    }
  }

  // Use case diagram
  if (/\bactor\b/i.test(content) && (/\busecase\b/i.test(content) || /\([^)]+\)/i.test(content))) {
    return 'usecase';
  }

  // Class diagram - look for class/interface definitions
  if (/\b(class|interface|abstract\s+class|enum)\s+\w+/i.test(content)) {
    return 'class';
  }

  // State diagram - [*] is initial/final state marker
  if (/\[\*\]\s*(-->|->)/.test(content) || /(-->|->)\s*\[\*\]/.test(content)) {
    return 'state';
  }
  if (/\bstate\s+\w+/i.test(content) && !content.includes('component')) {
    return 'state';
  }

  // Sequence diagram - participant/actor with message arrows
  if (/\bparticipant\b/i.test(content) || /\bactor\b.*->/.test(content)) {
    if (/->>|-->>|->|-->/.test(content) && /:/.test(content)) {
      return 'sequence';
    }
  }

  // Activity diagram (flowchart) - start/stop keywords, :action; syntax
  if (/\bstart\b/i.test(content) && /\bstop\b/i.test(content)) {
    return 'flowchart';
  }
  if (/:[^;]+;/.test(content)) {
    return 'flowchart';
  }
  if (/\bif\s*\(/.test(content) && /\bthen\b/.test(content)) {
    return 'flowchart';
  }

  // Component diagram -> architecture
  if (/\b(component|package|node|folder|frame|cloud|database)\b/i.test(content)) {
    return 'architecture';
  }

  // ERD - entity keyword or database with relationships
  if (/\bentity\b/i.test(content)) {
    return 'erd';
  }

  // Object diagram -> class
  if (/\bobject\b/i.test(content)) {
    return 'class';
  }

  // Default to sequence if has arrows with messages
  if (/->>|-->>|->|-->/.test(content) && /:/.test(content)) {
    return 'sequence';
  }

  // Default to flowchart
  return 'flowchart';
}

// ============================================
// IMPORT: PlantUML -> DDFlow
// ============================================

/**
 * Convert PlantUML source to DDFlow DSL
 */
export function plantumlToDDFlow(source) {
  let type = detectPlantUMLType(source);

  let dsl;
  switch (type) {
    case 'sequence':
      dsl = plantumlSequenceToDDFlow(source);
      break;
    case 'class':
      dsl = plantumlClassToDDFlow(source);
      break;
    case 'state':
      dsl = plantumlStateToDDFlow(source);
      break;
    case 'flowchart':
      dsl = plantumlActivityToDDFlow(source);
      break;
    case 'usecase':
      dsl = plantumlUsecaseToDDFlow(source);
      break;
    case 'architecture':
      dsl = plantumlComponentToDDFlow(source);
      break;
    case 'mindmap':
      dsl = plantumlMindmapToDDFlow(source);
      break;
    case 'gantt':
      dsl = plantumlGanttToDDFlow(source);
      break;
    case 'erd':
      dsl = plantumlERDToDDFlow(source);
      break;
    case 'c4':
      dsl = plantumlC4ToDDFlow(source);
      type = 'architecture'; // C4 maps to architecture
      break;
    case 'deployment':
      dsl = plantumlDeploymentToDDFlow(source);
      break;
    default:
      throw new Error(`Unsupported PlantUML diagram type: ${type}`);
  }

  return { type, source: dsl };
}

/**
 * Strip PlantUML tags and get content
 */
function stripPlantUMLTags(source) {
  return source
    .replace(/@startuml.*\n?/gi, '')
    .replace(/@enduml.*\n?/gi, '')
    .replace(/@startmindmap.*\n?/gi, '')
    .replace(/@endmindmap.*\n?/gi, '')
    .replace(/@startwbs.*\n?/gi, '')
    .replace(/@endwbs.*\n?/gi, '')
    .replace(/@startgantt.*\n?/gi, '')
    .replace(/@endgantt.*\n?/gi, '')
    .replace(/^\s*title\s+.+$/gim, '') // Remove title
    .replace(/^\s*skinparam\s+.+$/gim, '') // Remove skinparam
    .replace(/^\s*hide\s+.+$/gim, '') // Remove hide directives
    .replace(/^\s*'.*$/gim, '') // Remove single-line comments
    .trim();
}

/**
 * Sequence diagram: PlantUML -> DDFlow
 * PlantUML and DDFlow sequence syntax are nearly identical
 */
function plantumlSequenceToDDFlow(source) {
  const content = stripPlantUMLTags(source);
  const lines = content.split('\n').filter(l => l.trim());
  const result = [];
  const participants = [];

  lines.forEach(line => {
    const trimmed = line.trim();

    // Participant definition
    const participantMatch = trimmed.match(/^(participant|actor)\s+"?([^"]+)"?(\s+as\s+(\w+))?/i);
    if (participantMatch) {
      const name = participantMatch[4] || participantMatch[2];
      if (!participants.includes(name)) {
        participants.push(name);
      }
      return;
    }

    // Message arrow: A -> B: message or A --> B: message
    const arrowMatch = trimmed.match(/^(\w+)\s*(->>|-->>|->|-->)\s*(\w+)\s*:\s*(.+)$/);
    if (arrowMatch) {
      const [, from, arrow, to, message] = arrowMatch;
      // Add participants if not seen
      if (!participants.includes(from)) participants.push(from);
      if (!participants.includes(to)) participants.push(to);

      // Convert arrow types: ->> -> -> , -->> -> -->
      const ddflowArrow = arrow.replace('>>', '>');
      result.push(`${from} ${ddflowArrow} ${to}: ${message}`);
      return;
    }

    // Note
    const noteMatch = trimmed.match(/^note\s+(left|right|over)\s*:?\s*(.+)$/i);
    if (noteMatch) {
      // DDFlow doesn't have notes, skip or add as comment
      return;
    }
  });

  // Build output
  const output = [];
  if (participants.length > 0) {
    output.push(`participant ${participants.join(', ')}`);
    output.push('');
  }
  output.push(...result);

  return output.join('\n');
}

/**
 * Class diagram: PlantUML -> DDFlow
 */
function plantumlClassToDDFlow(source) {
  const content = stripPlantUMLTags(source);
  const lines = content.split('\n');
  const result = [];
  let currentClass = null;
  let inClassBody = false;
  let braceCount = 0;

  lines.forEach(line => {
    const trimmed = line.trim();

    // Class/interface definition start
    const classMatch = trimmed.match(/^(class|interface|abstract\s+class|enum)\s+(\w+)(\s*\{)?/i);
    if (classMatch) {
      if (currentClass) {
        result.push(''); // Blank line between classes
      }
      currentClass = classMatch[2];
      result.push(`class ${currentClass}`);
      if (trimmed.includes('{')) {
        inClassBody = true;
        braceCount = 1;
      }
      return;
    }

    // Object definition (treat as class)
    const objectMatch = trimmed.match(/^object\s+"?([^"]+)"?/i);
    if (objectMatch) {
      if (currentClass) {
        result.push('');
      }
      currentClass = objectMatch[1].replace(/\s+/g, '_');
      result.push(`class ${currentClass}`);
      if (trimmed.includes('{')) {
        inClassBody = true;
        braceCount = 1;
      }
      return;
    }

    // Opening brace
    if (trimmed === '{' && currentClass) {
      inClassBody = true;
      braceCount = 1;
      return;
    }

    // Closing brace
    if (trimmed === '}' && inClassBody) {
      braceCount--;
      if (braceCount <= 0) {
        inClassBody = false;
        currentClass = null;
      }
      return;
    }

    // Class member (inside class body)
    if (inClassBody && currentClass && trimmed && trimmed !== '{' && trimmed !== '}') {
      // Parse member: +/-/# name : type or method()
      let memberLine = trimmed;

      // Handle method with parentheses
      const methodMatch = trimmed.match(/^([+\-#~])?\s*(\w+)\s*\(([^)]*)\)\s*:?\s*(\w+)?/);
      if (methodMatch) {
        const [, visibility = '+', name, params, returnType] = methodMatch;
        const returnPart = returnType ? `: ${returnType}` : '';
        result.push(`  ${visibility} ${name}(${params})${returnPart}`);
        return;
      }

      // Handle property
      const propMatch = trimmed.match(/^([+\-#~])?\s*(\w+)\s*:\s*(.+)/);
      if (propMatch) {
        const [, visibility = '+', name, type] = propMatch;
        result.push(`  ${visibility} ${name}: ${type}`);
        return;
      }

      // Simple property without type
      const simplePropMatch = trimmed.match(/^([+\-#~])?\s*(\w+)$/);
      if (simplePropMatch) {
        const [, visibility = '+', name] = simplePropMatch;
        result.push(`  ${visibility} ${name}`);
        return;
      }
    }

    // Relationship outside class body
    if (!inClassBody) {
      // Inheritance: A <|-- B or A --|> B
      const inheritMatch = trimmed.match(/^(\w+)\s*(<\|--|--\|>)\s*(\w+)/);
      if (inheritMatch) {
        const [, left, arrow, right] = inheritMatch;
        if (arrow === '<|--') {
          result.push(`${right} extends ${left}`);
        } else {
          result.push(`${left} extends ${right}`);
        }
        return;
      }

      // Association: A -- B or A --> B
      const assocMatch = trimmed.match(/^(\w+)\s*(--|-->|<--)\s*(\w+)/);
      if (assocMatch) {
        // Skip for now, DDFlow class doesn't have associations in same format
        return;
      }
    }
  });

  return result.join('\n');
}

/**
 * State diagram: PlantUML -> DDFlow
 */
function plantumlStateToDDFlow(source) {
  const content = stripPlantUMLTags(source);
  const lines = content.split('\n').filter(l => l.trim());
  const result = [];
  const seenStates = new Set();

  lines.forEach(line => {
    const trimmed = line.trim();

    // State definition: state "Name" as alias
    const stateDefMatch = trimmed.match(/^state\s+"([^"]+)"\s+as\s+(\w+)/i);
    if (stateDefMatch) {
      const [, , alias] = stateDefMatch;
      seenStates.add(alias);
      return;
    }

    // Simple state definition: state StateName
    const simpleStateMatch = trimmed.match(/^state\s+(\w+)$/i);
    if (simpleStateMatch) {
      seenStates.add(simpleStateMatch[1]);
      return;
    }

    // Transition: [*] --> State or State --> [*] or State --> State : event
    const transitionMatch = trimmed.match(/^(\[\*\]|\w+)\s*(-->|->)\s*(\[\*\]|\w+)(\s*:\s*(.+))?$/);
    if (transitionMatch) {
      let [, from, , to, , event] = transitionMatch;

      // Convert [*] to initial/final markers
      let fromStr = from;
      let toStr = to;

      if (from === '[*]' && !seenStates.has('__initial__')) {
        result.unshift(`(initial) ${to}`);
        seenStates.add('__initial__');
        fromStr = to;
        // Still need the transition if there's an event
        if (!event) return;
      }

      if (to === '[*]') {
        if (!seenStates.has('__final__')) {
          result.push(`(final) End`);
          seenStates.add('__final__');
        }
        toStr = 'End';
      }

      if (from !== '[*]') {
        const eventPart = event ? `: ${event.trim()}` : '';
        result.push(`${fromStr} -> ${toStr}${eventPart}`);
      }
      return;
    }
  });

  return result.join('\n');
}

/**
 * Activity diagram: PlantUML -> DDFlow flowchart
 */
function plantumlActivityToDDFlow(source) {
  const content = stripPlantUMLTags(source);
  const lines = content.split('\n').filter(l => l.trim());
  const nodes = [];
  const edges = [];
  let nodeCounter = 0;
  let lastNode = null;
  const nodeStack = []; // For if/else tracking

  const createNode = (type, label) => {
    const id = `node${nodeCounter++}`;
    nodes.push({ id, type, label });
    return id;
  };

  lines.forEach(line => {
    const trimmed = line.trim();

    // Start
    if (/^start$/i.test(trimmed)) {
      const id = createNode('start', 'Start');
      lastNode = id;
      return;
    }

    // Stop/end
    if (/^(stop|end)$/i.test(trimmed)) {
      const id = createNode('end', 'End');
      if (lastNode) {
        edges.push({ from: lastNode, to: id });
      }
      lastNode = id;
      return;
    }

    // Action: :Action text;
    const actionMatch = trimmed.match(/^:([^;]+);?$/);
    if (actionMatch) {
      const label = actionMatch[1].trim();
      const id = createNode('process', label);
      if (lastNode) {
        edges.push({ from: lastNode, to: id });
      }
      lastNode = id;
      return;
    }

    // If condition: if (condition?) then (yes)
    const ifMatch = trimmed.match(/^if\s*\(([^)]+)\)\s*then\s*\(([^)]+)\)/i);
    if (ifMatch) {
      const condition = ifMatch[1].trim();
      const yesLabel = ifMatch[2].trim();
      const id = createNode('decision', condition);
      if (lastNode) {
        edges.push({ from: lastNode, to: id });
      }
      nodeStack.push({ type: 'if', decisionId: id, yesLabel, noLabel: null, mergePoint: null });
      lastNode = id;
      // Next line will be the "yes" branch
      return;
    }

    // Else: else (no)
    const elseMatch = trimmed.match(/^else\s*\(([^)]+)\)/i);
    if (elseMatch && nodeStack.length > 0) {
      const ctx = nodeStack[nodeStack.length - 1];
      ctx.noLabel = elseMatch[1].trim();
      ctx.lastYesNode = lastNode;
      lastNode = ctx.decisionId;
      return;
    }

    // Endif
    if (/^endif$/i.test(trimmed) && nodeStack.length > 0) {
      const ctx = nodeStack.pop();
      // Both branches should converge - next node will be the merge point
      ctx.lastNoNode = lastNode;
      // For simplicity, last node stays as is (the last action before endif)
      return;
    }
  });

  // Build DDFlow DSL
  const result = [];
  nodes.forEach(node => {
    result.push(`(${node.type}) ${node.label}`);
  });

  result.push('');

  edges.forEach(edge => {
    const fromNode = nodes.find(n => n.id === edge.from);
    const toNode = nodes.find(n => n.id === edge.to);
    if (fromNode && toNode) {
      const label = edge.label ? `: ${edge.label}` : '';
      result.push(`${fromNode.label} -> ${toNode.label}${label}`);
    }
  });

  return result.join('\n');
}

/**
 * Use case diagram: PlantUML -> DDFlow
 */
function plantumlUsecaseToDDFlow(source) {
  const content = stripPlantUMLTags(source);
  const lines = content.split('\n').filter(l => l.trim());
  const result = [];
  const actors = [];
  const usecases = [];
  const relationships = [];

  lines.forEach(line => {
    const trimmed = line.trim();

    // Actor definition: actor Name or actor "Name" as alias
    const actorMatch = trimmed.match(/^actor\s+"?([^"]+)"?(\s+as\s+(\w+))?/i);
    if (actorMatch) {
      const name = actorMatch[3] || actorMatch[1];
      if (!actors.includes(name)) {
        actors.push(name);
        result.push(`actor ${name}`);
      }
      return;
    }

    // Use case definition: usecase "Name" or (Name)
    const usecaseMatch = trimmed.match(/^usecase\s+"?([^"]+)"?(\s+as\s+(\w+))?/i);
    if (usecaseMatch) {
      const name = usecaseMatch[3] || usecaseMatch[1];
      if (!usecases.includes(name)) {
        usecases.push(name);
        result.push(`(${name})`);
      }
      return;
    }

    // Inline use case: (Use Case Name)
    const inlineUsecaseMatch = trimmed.match(/^\(([^)]+)\)$/);
    if (inlineUsecaseMatch) {
      const name = inlineUsecaseMatch[1];
      if (!usecases.includes(name)) {
        usecases.push(name);
        result.push(`(${name})`);
      }
      return;
    }

    // Relationship: Actor --> (UseCase) or Actor -> UseCase
    const relMatch = trimmed.match(/^(\w+)\s*(-->|->|--)\s*\(?([^)]+)\)?$/);
    if (relMatch) {
      const [, from, , to] = relMatch;
      const toClean = to.replace(/[()]/g, '');
      relationships.push(`${from} -> ${toClean}`);
      return;
    }
  });

  result.push('');
  result.push(...relationships);

  return result.join('\n');
}

/**
 * Component diagram: PlantUML -> DDFlow architecture
 */
function plantumlComponentToDDFlow(source) {
  const content = stripPlantUMLTags(source);
  const lines = content.split('\n').filter(l => l.trim());
  const layers = {
    clients: [],
    gateway: [],
    services: [],
    data: [],
    storage: [],
    other: []
  };
  const connections = [];

  lines.forEach(line => {
    const trimmed = line.trim();

    // Component/node/package definition
    const compMatch = trimmed.match(/^(component|node|package|folder|frame|cloud|database|storage|queue)\s+"?([^"]+)"?(\s+as\s+(\w+))?/i);
    if (compMatch) {
      const [, type, name, , alias] = compMatch;
      const compName = alias || name;
      const typeLower = type.toLowerCase();

      if (typeLower === 'database' || typeLower === 'storage') {
        layers.data.push(compName);
      } else if (typeLower === 'cloud') {
        layers.clients.push(compName);
      } else if (typeLower === 'queue') {
        layers.services.push(compName);
      } else {
        layers.services.push(compName);
      }
      return;
    }

    // Simple component: [ComponentName]
    const bracketMatch = trimmed.match(/^\[([^\]]+)\]$/);
    if (bracketMatch) {
      layers.services.push(bracketMatch[1]);
      return;
    }

    // Connection: A --> B or [A] --> [B]
    const connMatch = trimmed.match(/^(\[?[^\]]+\]?)\s*(-->|->|--)\s*(\[?[^\]]+\]?)(\s*:\s*(.+))?$/);
    if (connMatch) {
      let [, from, , to] = connMatch;
      from = from.replace(/[\[\]]/g, '').trim();
      to = to.replace(/[\[\]]/g, '').trim();
      connections.push(`${from} -> ${to}`);
      return;
    }
  });

  // Build output
  const result = [];

  if (layers.clients.length > 0) {
    result.push(`[clients] ${layers.clients.join(', ')}`);
  }
  if (layers.gateway.length > 0) {
    result.push(`[gateway] ${layers.gateway.join(', ')}`);
  }
  if (layers.services.length > 0) {
    result.push(`[services] ${layers.services.join(', ')}`);
  }
  if (layers.data.length > 0) {
    result.push(`[data] ${layers.data.join(', ')}`);
  }
  if (layers.storage.length > 0) {
    result.push(`[storage] ${layers.storage.join(', ')}`);
  }
  if (layers.other.length > 0) {
    result.push(`[services] ${layers.other.join(', ')}`);
  }

  if (connections.length > 0) {
    result.push('');
    result.push(...connections);
  }

  return result.join('\n');
}

/**
 * Mind map: PlantUML -> DDFlow
 */
function plantumlMindmapToDDFlow(source) {
  const content = stripPlantUMLTags(source);
  const lines = content.split('\n').filter(l => l.trim());
  const result = [];

  lines.forEach(line => {
    // Count asterisks to determine level
    const match = line.match(/^(\*+)\s*(.+)$/);
    if (match) {
      const level = match[1].length - 1; // * = 0, ** = 1, etc.
      const text = match[2].trim();
      const indent = '  '.repeat(level);
      result.push(`${indent}${text}`);
    }
  });

  return result.join('\n');
}

/**
 * Gantt chart: PlantUML -> DDFlow
 */
function plantumlGanttToDDFlow(source) {
  const content = stripPlantUMLTags(source);
  const lines = content.split('\n').filter(l => l.trim());
  const result = [];
  let currentDay = 0;

  lines.forEach(line => {
    const trimmed = line.trim();

    // Task definition: [TaskName] lasts X days
    const taskMatch = trimmed.match(/^\[([^\]]+)\]\s+lasts\s+(\d+)\s+days?/i);
    if (taskMatch) {
      const [, name, duration] = taskMatch;
      result.push(`${name}, ${currentDay}, ${duration}`);
      currentDay += parseInt(duration);
      return;
    }

    // Task with start: [TaskName] starts at day X
    const startMatch = trimmed.match(/^\[([^\]]+)\]\s+starts\s+at\s+day\s+(\d+)/i);
    if (startMatch) {
      currentDay = parseInt(startMatch[2]);
      return;
    }

    // Project start
    const projectMatch = trimmed.match(/^project\s+starts\s+/i);
    if (projectMatch) {
      // Skip project start date
      return;
    }
  });

  return result.join('\n');
}

/**
 * ERD: PlantUML -> DDFlow (SQL CREATE TABLE format)
 */
function plantumlERDToDDFlow(source) {
  const content = stripPlantUMLTags(source);
  const lines = content.split('\n');
  const result = [];
  let currentEntity = null;
  let inEntity = false;

  lines.forEach(line => {
    const trimmed = line.trim();

    // Entity definition: entity "Name" or entity Name
    const entityMatch = trimmed.match(/^entity\s+"?([^"{\s]+)"?\s*(\{)?/i);
    if (entityMatch) {
      if (currentEntity) {
        result.push(');');
        result.push('');
      }
      currentEntity = entityMatch[1];
      result.push(`CREATE TABLE ${currentEntity} (`);
      inEntity = trimmed.includes('{');
      return;
    }

    // Opening brace
    if (trimmed === '{' && currentEntity) {
      inEntity = true;
      return;
    }

    // Closing brace
    if (trimmed === '}' && inEntity) {
      result.push(');');
      inEntity = false;
      currentEntity = null;
      return;
    }

    // Field definition inside entity
    if (inEntity && currentEntity && trimmed && !trimmed.startsWith('--')) {
      // Pattern: * field_name : type or field_name : type
      const fieldMatch = trimmed.match(/^(\*?)?\s*(\w+)\s*:\s*(.+)$/);
      if (fieldMatch) {
        const [, pk, name, type] = fieldMatch;
        const pkStr = pk === '*' ? ' PRIMARY KEY' : '';
        const typeClean = type.trim().toUpperCase();
        result.push(`  ${name} ${typeClean}${pkStr},`);
      }
    }
  });

  // Close last entity if needed
  if (inEntity) {
    result.push(');');
  }

  // Clean up trailing commas
  return result.join('\n').replace(/,\n\);/g, '\n);');
}

/**
 * C4 diagram: PlantUML (C4-PlantUML) -> DDFlow architecture
 * C4-PlantUML uses: Person(), System(), Container(), Component(), Boundary(), Rel()
 */
function plantumlC4ToDDFlow(source) {
  const content = stripPlantUMLTags(source);
  const lines = content.split('\n').filter(l => l.trim());
  const elements = new Map(); // alias -> { type, label, description }
  const relationships = [];
  const boundaryStack = [];
  const boundaryDefs = new Map();

  lines.forEach(line => {
    const trimmed = line.trim();

    // Skip includes and comments
    if (trimmed.startsWith('!include') || trimmed.startsWith("'")) return;

    // Boundary start: Boundary(alias, "Label") or Enterprise_Boundary, System_Boundary, Container_Boundary
    const boundaryMatch = trimmed.match(/^(Enterprise_Boundary|System_Boundary|Container_Boundary|Boundary)\s*\(\s*(\w+)\s*,\s*["']([^"']+)["']/i);
    if (boundaryMatch) {
      const parent = boundaryStack.length > 0 ? boundaryStack[boundaryStack.length - 1] : null;
      boundaryDefs.set(boundaryMatch[2], { label: boundaryMatch[3], type: boundaryMatch[1], parent });
      boundaryStack.push(boundaryMatch[2]);
      return;
    }

    // Boundary end
    if (trimmed === '}' && boundaryStack.length > 0) {
      boundaryStack.pop();
      return;
    }

    // Person(alias, "Label", "Description")
    const personMatch = trimmed.match(/^Person(?:_Ext)?\s*\(\s*(\w+)\s*,\s*["']([^"']+)["'](?:\s*,\s*["']([^"']+)["'])?\)/i);
    if (personMatch) {
      const boundary = boundaryStack.length > 0 ? boundaryStack[boundaryStack.length - 1] : null;
      elements.set(personMatch[1], {
        type: 'user',
        label: personMatch[2],
        description: personMatch[3] || '',
        boundary
      });
      return;
    }

    // System(alias, "Label", "Description") or System_Ext
    const systemMatch = trimmed.match(/^System(?:_Ext)?\s*\(\s*(\w+)\s*,\s*["']([^"']+)["'](?:\s*,\s*["']([^"']+)["'])?\)/i);
    if (systemMatch) {
      const boundary = boundaryStack.length > 0 ? boundaryStack[boundaryStack.length - 1] : null;
      elements.set(systemMatch[1], {
        type: trimmed.includes('_Ext') ? 'external' : 'services',
        label: systemMatch[2],
        description: systemMatch[3] || '',
        boundary
      });
      return;
    }

    // Container(alias, "Label", "Technology", "Description") or Container_Ext
    const containerMatch = trimmed.match(/^Container(?:_Ext|Db|Queue)?\s*\(\s*(\w+)\s*,\s*["']([^"']+)["'](?:\s*,\s*["']([^"']+)["'])?(?:\s*,\s*["']([^"']+)["'])?\)/i);
    if (containerMatch) {
      const boundary = boundaryStack.length > 0 ? boundaryStack[boundaryStack.length - 1] : null;
      let type = 'services';
      if (/ContainerDb/i.test(trimmed)) type = 'data';
      else if (/ContainerQueue/i.test(trimmed)) type = 'queue';
      else if (/_Ext/i.test(trimmed)) type = 'external';

      elements.set(containerMatch[1], {
        type,
        label: containerMatch[2],
        technology: containerMatch[3] || '',
        description: containerMatch[4] || '',
        boundary
      });
      return;
    }

    // Component(alias, "Label", "Technology", "Description") or Component_Ext
    const componentMatch = trimmed.match(/^Component(?:_Ext|Db|Queue)?\s*\(\s*(\w+)\s*,\s*["']([^"']+)["'](?:\s*,\s*["']([^"']+)["'])?(?:\s*,\s*["']([^"']+)["'])?\)/i);
    if (componentMatch) {
      const boundary = boundaryStack.length > 0 ? boundaryStack[boundaryStack.length - 1] : null;
      let type = 'services';
      if (/ComponentDb/i.test(trimmed)) type = 'data';
      if (/_Ext/i.test(trimmed)) type = 'external';

      elements.set(componentMatch[1], {
        type,
        label: componentMatch[2],
        technology: componentMatch[3] || '',
        description: componentMatch[4] || '',
        boundary
      });
      return;
    }

    // Rel(from, to, "Label", "Tech") or Rel_R, Rel_L, Rel_U, Rel_D, BiRel
    const relMatch = trimmed.match(/^(?:Bi)?Rel(?:_[RLUD])?\s*\(\s*(\w+)\s*,\s*(\w+)\s*,\s*["']([^"']+)["'](?:\s*,\s*["']([^"']+)["'])?\)/i);
    if (relMatch) {
      relationships.push({
        from: relMatch[1],
        to: relMatch[2],
        label: relMatch[3],
        tech: relMatch[4] || ''
      });
    }
  });

  // Build DDFlow architecture format with boundaries as groups
  const result = [];

  // Group elements by layer type
  const layers = { user: [], clients: [], services: [], data: [], external: [], queue: [] };

  elements.forEach((el, alias) => {
    const layerKey = el.type || 'services';
    if (!layers[layerKey]) layers[layerKey] = [];
    layers[layerKey].push(el.label);
  });

  // Output layer definitions
  Object.entries(layers).forEach(([layer, items]) => {
    if (items.length > 0) {
      result.push(`[${layer}] ${items.join(', ')}`);
    }
  });

  // Output boundaries as groups
  const outputBoundary = (boundaryAlias, indent = '') => {
    const def = boundaryDefs.get(boundaryAlias);
    if (!def) return;

    result.push(`${indent}group "${def.label}" {`);

    // Find elements in this boundary
    elements.forEach((el, alias) => {
      if (el.boundary === boundaryAlias) {
        result.push(`${indent}  ${el.label}`);
      }
    });

    // Find child boundaries
    boundaryDefs.forEach((childDef, childAlias) => {
      if (childDef.parent === boundaryAlias) {
        outputBoundary(childAlias, indent + '  ');
      }
    });

    result.push(`${indent}}`);
  };

  // Output top-level boundaries
  boundaryDefs.forEach((def, alias) => {
    if (!def.parent) {
      outputBoundary(alias);
    }
  });

  result.push('');

  // Output relationships
  relationships.forEach(rel => {
    const fromEl = elements.get(rel.from);
    const toEl = elements.get(rel.to);
    if (fromEl && toEl) {
      result.push(`${fromEl.label} -> ${toEl.label}`);
    }
  });

  return result.join('\n');
}

/**
 * Deployment diagram: PlantUML -> DDFlow deployment
 */
function plantumlDeploymentToDDFlow(source) {
  const content = stripPlantUMLTags(source);
  const lines = content.split('\n').filter(l => l.trim());
  const result = [];
  const nodes = new Map();
  const connections = [];
  let currentNode = null;
  let inBlock = false;

  lines.forEach(line => {
    const trimmed = line.trim();

    // Node/device/artifact definition: node "Label" as alias or node Label
    const nodeMatch = trimmed.match(/^(node|device|artifact|file|folder|frame|rectangle|card)\s+"?([^"{]+)"?(?:\s+as\s+(\w+))?(?:\s*\{)?/i);
    if (nodeMatch) {
      const type = nodeMatch[1].toLowerCase();
      const label = nodeMatch[2].trim();
      const alias = nodeMatch[3] || label.replace(/\s+/g, '_');

      nodes.set(alias, { type, label, children: [] });
      currentNode = alias;

      if (trimmed.includes('{')) {
        inBlock = true;
      }
      return;
    }

    // Nested element inside a node
    if (inBlock && currentNode) {
      // Another nested node/artifact
      const nestedMatch = trimmed.match(/^(node|device|artifact|component|database)\s+"?([^"{]+)"?(?:\s+as\s+(\w+))?/i);
      if (nestedMatch) {
        const childAlias = nestedMatch[3] || nestedMatch[2].replace(/\s+/g, '_');
        nodes.set(childAlias, { type: nestedMatch[1].toLowerCase(), label: nestedMatch[2].trim(), parent: currentNode });
        const parent = nodes.get(currentNode);
        if (parent) parent.children.push(childAlias);
        return;
      }
    }

    // End block
    if (trimmed === '}') {
      inBlock = false;
      currentNode = null;
      return;
    }

    // Connection: A --> B or A -> B
    const connMatch = trimmed.match(/^(\w+)\s*(-->|->|--)\s*(\w+)(?:\s*:\s*(.+))?$/);
    if (connMatch) {
      connections.push({
        from: connMatch[1],
        to: connMatch[3],
        label: connMatch[4] || ''
      });
    }
  });

  // Build DDFlow deployment format
  nodes.forEach((node, alias) => {
    if (!node.parent) {
      // Top-level node
      let line = `(${node.type}) ${node.label}`;
      result.push(line);

      // Add children
      if (node.children.length > 0) {
        node.children.forEach(childAlias => {
          const child = nodes.get(childAlias);
          if (child) {
            result.push(`  (${child.type}) ${child.label}`);
          }
        });
      }
    }
  });

  result.push('');

  // Add connections
  connections.forEach(conn => {
    const fromNode = nodes.get(conn.from);
    const toNode = nodes.get(conn.to);
    if (fromNode && toNode) {
      const label = conn.label ? `: ${conn.label}` : '';
      result.push(`${fromNode.label} -> ${toNode.label}${label}`);
    }
  });

  return result.join('\n');
}

// ============================================
// EXPORT: DDFlow -> PlantUML
// ============================================

/**
 * Convert DDFlow DSL to PlantUML
 */
export function ddflowToPlantUML(type, source) {
  switch (type) {
    case 'sequence':
      return ddflowSequenceToPlantUML(source);
    case 'class':
      return ddflowClassToPlantUML(source);
    case 'state':
      return ddflowStateToPlantUML(source);
    case 'flowchart':
      return ddflowFlowchartToPlantUML(source);
    case 'usecase':
      return ddflowUsecaseToPlantUML(source);
    case 'architecture':
    case 'component':
      return ddflowArchitectureToPlantUML(source);
    case 'mindmap':
    case 'wbs':
      return ddflowMindmapToPlantUML(source);
    case 'gantt':
      return ddflowGanttToPlantUML(source);
    case 'erd':
      return ddflowERDToPlantUML(source);
    case 'orgchart':
      return ddflowOrgchartToPlantUML(source);
    default:
      throw new Error(`Export to PlantUML not supported for diagram type: ${type}`);
  }
}

/**
 * Sequence: DDFlow -> PlantUML
 */
function ddflowSequenceToPlantUML(source) {
  const lines = source.split('\n').filter(l => l.trim());
  const result = ['@startuml'];

  lines.forEach(line => {
    const trimmed = line.trim();

    // Participant line
    if (trimmed.startsWith('participant ')) {
      result.push(trimmed);
      return;
    }

    // Message: A -> B: msg or A --> B: msg
    const msgMatch = trimmed.match(/^(\w+)\s*(->|-->)\s*(\w+)\s*:\s*(.+)$/);
    if (msgMatch) {
      result.push(trimmed);
      return;
    }
  });

  result.push('@enduml');
  return result.join('\n');
}

/**
 * Class: DDFlow -> PlantUML
 */
function ddflowClassToPlantUML(source) {
  const lines = source.split('\n');
  const result = ['@startuml'];
  let currentClass = null;

  lines.forEach(line => {
    const trimmed = line.trim();

    // Class definition
    if (trimmed.startsWith('class ')) {
      if (currentClass) {
        result.push('}');
        result.push('');
      }
      currentClass = trimmed.replace('class ', '');
      result.push(`class ${currentClass} {`);
      return;
    }

    // Member (indented with visibility)
    const memberMatch = trimmed.match(/^([+\-#~])\s*(.+)$/);
    if (memberMatch && currentClass) {
      result.push(`  ${trimmed}`);
      return;
    }

    // Inheritance
    const extendsMatch = trimmed.match(/^(\w+)\s+extends\s+(\w+)$/);
    if (extendsMatch) {
      if (currentClass) {
        result.push('}');
        currentClass = null;
      }
      result.push(`${extendsMatch[2]} <|-- ${extendsMatch[1]}`);
      return;
    }
  });

  if (currentClass) {
    result.push('}');
  }

  result.push('@enduml');
  return result.join('\n');
}

/**
 * State: DDFlow -> PlantUML
 */
function ddflowStateToPlantUML(source) {
  const lines = source.split('\n').filter(l => l.trim());
  const result = ['@startuml'];
  let hasInitial = false;
  let hasFinal = false;

  lines.forEach(line => {
    const trimmed = line.trim();

    // Initial state: (initial) StateName
    const initialMatch = trimmed.match(/^\(initial\)\s+(\w+)$/);
    if (initialMatch) {
      if (!hasInitial) {
        result.push(`[*] --> ${initialMatch[1]}`);
        hasInitial = true;
      }
      return;
    }

    // Final state: (final) StateName
    const finalMatch = trimmed.match(/^\(final\)\s+(\w+)$/);
    if (finalMatch) {
      hasFinal = true;
      return;
    }

    // Transition: State1 -> State2: EVENT
    const transMatch = trimmed.match(/^(\w+)\s*->\s*(\w+)(\s*:\s*(.+))?$/);
    if (transMatch) {
      const [, from, to, , event] = transMatch;
      const eventPart = event ? ` : ${event}` : '';

      // Check if going to final state
      if (to.toLowerCase() === 'end' || to.toLowerCase() === 'final') {
        result.push(`${from} --> [*]${eventPart}`);
      } else {
        result.push(`${from} --> ${to}${eventPart}`);
      }
      return;
    }
  });

  result.push('@enduml');
  return result.join('\n');
}

/**
 * Flowchart: DDFlow -> PlantUML Activity
 */
function ddflowFlowchartToPlantUML(source) {
  const lines = source.split('\n').filter(l => l.trim());
  const result = ['@startuml'];
  const nodes = new Map();
  const edges = [];

  // First pass: collect nodes
  lines.forEach(line => {
    const trimmed = line.trim();
    const nodeMatch = trimmed.match(/^\((\w+)\)\s+(.+)$/);
    if (nodeMatch) {
      nodes.set(nodeMatch[2], nodeMatch[1]);
    }

    // Edge: Node1 -> Node2 or Node1 -> Node2: label
    const edgeMatch = trimmed.match(/^(.+?)\s*->\s*(.+?)(\s*:\s*(.+))?$/);
    if (edgeMatch && !trimmed.startsWith('(')) {
      edges.push({
        from: edgeMatch[1].trim(),
        to: edgeMatch[2].trim(),
        label: edgeMatch[4]?.trim()
      });
    }
  });

  // Generate PlantUML activity
  const processed = new Set();

  edges.forEach(edge => {
    const fromType = nodes.get(edge.from) || 'process';
    const toType = nodes.get(edge.to) || 'process';

    // Start node
    if (fromType === 'start' && !processed.has('__start__')) {
      result.push('start');
      processed.add('__start__');
    }

    // From node action
    if (fromType !== 'start' && fromType !== 'end' && !processed.has(edge.from)) {
      if (fromType === 'decision') {
        result.push(`if (${edge.from}?) then (${edge.label || 'yes'})`);
      } else {
        result.push(`:${edge.from};`);
      }
      processed.add(edge.from);
    }

    // To node action
    if (toType === 'end' && !processed.has('__end__')) {
      result.push('stop');
      processed.add('__end__');
    } else if (toType !== 'start' && !processed.has(edge.to)) {
      if (toType === 'decision') {
        result.push(`if (${edge.to}?) then (yes)`);
      } else if (toType !== 'end') {
        result.push(`:${edge.to};`);
      }
      processed.add(edge.to);
    }
  });

  // Ensure stop is added
  if (!processed.has('__end__') && nodes.has('End')) {
    result.push('stop');
  }

  result.push('@enduml');
  return result.join('\n');
}

/**
 * Use case: DDFlow -> PlantUML
 */
function ddflowUsecaseToPlantUML(source) {
  const lines = source.split('\n').filter(l => l.trim());
  const result = ['@startuml'];

  lines.forEach(line => {
    const trimmed = line.trim();

    // Actor
    if (trimmed.startsWith('actor ')) {
      result.push(trimmed);
      return;
    }

    // Use case: (Name)
    const usecaseMatch = trimmed.match(/^\(([^)]+)\)$/);
    if (usecaseMatch) {
      result.push(`usecase "${usecaseMatch[1]}"`);
      return;
    }

    // Relationship: Actor -> UseCase
    const relMatch = trimmed.match(/^(\w+)\s*->\s*(\w+)$/);
    if (relMatch) {
      result.push(`${relMatch[1]} --> (${relMatch[2]})`);
      return;
    }
  });

  result.push('@enduml');
  return result.join('\n');
}

/**
 * Architecture: DDFlow -> PlantUML Component
 */
function ddflowArchitectureToPlantUML(source) {
  const lines = source.split('\n').filter(l => l.trim());
  const result = ['@startuml'];

  lines.forEach(line => {
    const trimmed = line.trim();

    // Layer definition: [layer] item1, item2
    const layerMatch = trimmed.match(/^\[(\w+)\]\s+(.+)$/);
    if (layerMatch) {
      const [, layer, items] = layerMatch;
      const itemList = items.split(',').map(i => i.trim());

      result.push(`package "${layer}" {`);
      itemList.forEach(item => {
        if (layer === 'data' || layer === 'databases') {
          result.push(`  database "${item}"`);
        } else if (layer === 'clients') {
          result.push(`  node "${item}"`);
        } else {
          result.push(`  component "${item}"`);
        }
      });
      result.push('}');
      result.push('');
      return;
    }

    // Connection: Item1 -> Item2
    const connMatch = trimmed.match(/^(.+?)\s*->\s*(.+)$/);
    if (connMatch && !trimmed.startsWith('[')) {
      result.push(`[${connMatch[1].trim()}] --> [${connMatch[2].trim()}]`);
      return;
    }
  });

  result.push('@enduml');
  return result.join('\n');
}

/**
 * Mind map: DDFlow -> PlantUML
 */
function ddflowMindmapToPlantUML(source) {
  const lines = source.split('\n');
  const result = ['@startmindmap'];

  lines.forEach(line => {
    if (!line.trim()) return;

    // Count leading spaces to determine level
    const indent = line.match(/^(\s*)/)[1].length;
    const level = Math.floor(indent / 2) + 1;
    const text = line.trim();

    if (text) {
      result.push('*'.repeat(level) + ' ' + text);
    }
  });

  result.push('@endmindmap');
  return result.join('\n');
}

/**
 * Gantt: DDFlow -> PlantUML
 */
function ddflowGanttToPlantUML(source) {
  const lines = source.split('\n').filter(l => l.trim());
  const result = ['@startgantt'];

  lines.forEach(line => {
    const trimmed = line.trim();

    // Task: TaskName, startDay, duration, progress
    const taskMatch = trimmed.match(/^([^,]+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?$/);
    if (taskMatch) {
      const [, name, start, duration] = taskMatch;
      result.push(`[${name.trim()}] lasts ${duration} days`);
      if (parseInt(start) > 0) {
        result.push(`[${name.trim()}] starts at day ${start}`);
      }
      return;
    }
  });

  result.push('@endgantt');
  return result.join('\n');
}

/**
 * ERD: DDFlow -> PlantUML
 */
function ddflowERDToPlantUML(source) {
  const lines = source.split('\n');
  const result = ['@startuml'];
  let currentTable = null;

  lines.forEach(line => {
    const trimmed = line.trim();

    // CREATE TABLE
    const createMatch = trimmed.match(/^CREATE\s+TABLE\s+(\w+)/i);
    if (createMatch) {
      if (currentTable) {
        result.push('}');
        result.push('');
      }
      currentTable = createMatch[1];
      result.push(`entity "${currentTable}" {`);
      return;
    }

    // Column definition
    const colMatch = trimmed.match(/^(\w+)\s+(\w+)(.*)$/);
    if (colMatch && currentTable && !trimmed.startsWith('CREATE') && !trimmed.startsWith(')')) {
      const [, name, type, rest] = colMatch;
      const isPK = /PRIMARY\s+KEY/i.test(rest);
      const prefix = isPK ? '*' : '';
      result.push(`  ${prefix}${name} : ${type}`);
      return;
    }

    // End of table
    if (trimmed === ');' && currentTable) {
      result.push('}');
      currentTable = null;
      return;
    }
  });

  if (currentTable) {
    result.push('}');
  }

  result.push('@enduml');
  return result.join('\n');
}

/**
 * Org chart: DDFlow -> PlantUML (as mindmap/WBS)
 */
function ddflowOrgchartToPlantUML(source) {
  // Org charts convert to mindmaps in PlantUML
  return ddflowMindmapToPlantUML(source);
}

// ============================================
// FILE UTILITIES
// ============================================

/**
 * Download PlantUML source as .puml file
 */
export function downloadPlantUMLFile(source, filename = 'diagram') {
  const blob = new Blob([source], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${filename}.puml`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Copy PlantUML source to clipboard
 */
export async function copyPlantUMLToClipboard(source) {
  try {
    await navigator.clipboard.writeText(source);
    return true;
  } catch (err) {
    console.error('Failed to copy to clipboard:', err);
    return false;
  }
}
