/**
 * DDFlow DSL Reference
 *
 * This module exports the complete DSL syntax reference for all diagram types.
 * Users can import this and provide it as context to AI systems for generating
 * correct DDFlow DSL.
 *
 * Usage:
 *   import { DSL_REFERENCE, AI_PROMPT_TEMPLATE, getDSLForType } from 'ddflow/dslReference';
 *
 *   // Get full reference
 *   const fullReference = DSL_REFERENCE;
 *
 *   // Get reference for specific diagram type
 *   const archRef = getDSLForType('architecture');
 *
 *   // Get ready-to-use AI prompt
 *   const prompt = AI_PROMPT_TEMPLATE;
 */

// ============================================================================
// DIAGRAM TYPE DEFINITIONS
// ============================================================================

export const DIAGRAM_TYPES = {
  // Core diagram types
  flowchart: {
    name: 'Flowchart',
    description: 'Process flows with decisions and steps',
    aliases: ['flow', 'process']
  },
  sequence: {
    name: 'Sequence Diagram',
    description: 'Message passing between participants over time',
    aliases: ['seq']
  },
  mindmap: {
    name: 'Mind Map',
    description: 'Hierarchical tree structure for concepts and ideas',
    aliases: ['tree', 'wbs']
  },
  architecture: {
    name: 'Architecture Diagram',
    description: 'System architecture with layers, components, and connections',
    aliases: ['arch', 'system']
  },
  c4: {
    name: 'C4 Diagram',
    description: 'C4 model diagrams (Context, Container, Component, Code)',
    aliases: ['c4model']
  },
  erd: {
    name: 'ERD',
    description: 'Entity Relationship Diagram using SQL CREATE TABLE syntax',
    aliases: ['database', 'db', 'sql']
  },
  state: {
    name: 'State Machine',
    description: 'State transitions with events',
    aliases: ['statemachine', 'fsm']
  },
  journey: {
    name: 'User Journey',
    description: 'User flow through pages and actions',
    aliases: ['userjourney', 'userflow']
  },
  timeline: {
    name: 'Timeline',
    description: 'Chronological events with dates',
    aliases: ['roadmap']
  },
  orgchart: {
    name: 'Organization Chart',
    description: 'Hierarchical organization structure',
    aliases: ['org', 'hierarchy']
  },
  network: {
    name: 'Network Diagram',
    description: 'Network topology with devices and connections',
    aliases: ['topology']
  },
  gantt: {
    name: 'Gantt Chart',
    description: 'Project timeline with tasks and durations',
    aliases: ['project']
  },
  class: {
    name: 'Class Diagram',
    description: 'UML class diagram with properties and methods',
    aliases: ['uml']
  },
  usecase: {
    name: 'Use Case Diagram',
    description: 'Actors and their interactions with the system',
    aliases: ['usecases']
  },
  pie: {
    name: 'Pie Chart',
    description: 'Proportional data visualization',
    aliases: ['piechart']
  },
  quadrant: {
    name: 'Quadrant Diagram',
    description: '2x2 matrix for prioritization and analysis',
    aliases: ['matrix', 'priority']
  },
  git: {
    name: 'Git Graph',
    description: 'Git branch and commit visualization',
    aliases: ['gitgraph', 'branches']
  },
  deployment: {
    name: 'Deployment Diagram',
    description: 'Infrastructure and deployment topology',
    aliases: ['infra', 'infrastructure']
  },
  wireframe: {
    name: 'Wireframe',
    description: 'UI mockup with components',
    aliases: ['ui', 'mockup']
  },
  activity: {
    name: 'Activity Diagram',
    description: 'UML activity diagram with actions and decisions',
    aliases: ['workflow']
  },
  component: {
    name: 'Component Diagram',
    description: 'System components and their dependencies',
    aliases: ['components']
  },
  requirement: {
    name: 'Requirement Diagram',
    description: 'Requirements with risk and priority levels',
    aliases: ['requirements', 'specs']
  }
};

// ============================================================================
// DSL SYNTAX REFERENCE BY DIAGRAM TYPE
// ============================================================================

export const DSL_SYNTAX = {
  // ---------------------------------------------------------------------------
  // FLOWCHART
  // ---------------------------------------------------------------------------
  flowchart: `
## Flowchart DSL Syntax

**Node Types** (use these keywords, not custom labels):
- (start) Label - Start node (rounded)
- (end) Label - End node (rounded)
- (process) Label - Process step (rectangle)
- (decision) Label - Decision point (diamond)
- (io) Label - Input/Output (parallelogram)

**Connections:**
- NodeLabel -> NextNodeLabel
- NodeLabel -> NextNodeLabel: edge label

**Example:**
\`\`\`
(start) Begin
Begin -> (process) Validate Input
Validate Input -> (decision) Is Valid?
Is Valid? -> (process) Process Data: Yes
Is Valid? -> (io) Show Error: No
Process Data -> (end) Complete
Show Error -> (process) Validate Input: Retry
\`\`\`

**IMPORTANT:** The type keyword (start/end/process/decision/io) defines the shape, NOT the label.
WRONG: (My Label) My Label
RIGHT: (process) My Label
`,

  // ---------------------------------------------------------------------------
  // SEQUENCE DIAGRAM
  // ---------------------------------------------------------------------------
  sequence: `
## Sequence Diagram DSL Syntax

**Define Participants:**
\`participant Name1, Name2, Name3\`

**Message Types:**
- A -> B: message  (solid arrow - request/call)
- A --> B: message (dashed arrow - response/return)
- A ->> B: message (async message)

**Self-calls:**
- A -> A: internal process

**Example:**
\`\`\`
participant Client, API, Database

Client -> API: POST /login
API -> Database: Query user
Database --> API: User data
API -> API: Validate credentials
API --> Client: JWT Token
\`\`\`
`,

  // ---------------------------------------------------------------------------
  // MIND MAP
  // ---------------------------------------------------------------------------
  mindmap: `
## Mind Map DSL Syntax

**Structure:** Indentation-based hierarchy (2 spaces per level)
**NO ARROWS** - hierarchy is defined by indentation only

**Format:**
\`\`\`
Root Topic
  Branch 1
    Sub-item 1.1
    Sub-item 1.2
  Branch 2
    Sub-item 2.1
      Deep item
  Branch 3
\`\`\`

**Optional prefixes:** -, *, + (all treated the same)

**IMPORTANT:**
- Do NOT use arrows (->)
- Hierarchy comes from indentation
- Use consistent 2-space indentation
`,

  // ---------------------------------------------------------------------------
  // ARCHITECTURE DIAGRAM
  // ---------------------------------------------------------------------------
  architecture: `
## Architecture Diagram DSL Syntax

**Title/Subtitle (optional):**
\`\`\`
title: System Architecture
subtitle: High-level overview
\`\`\`

**Layer Definitions:**
\`[layerType] Component1, Component2, Component3\`
\`[layerType] Component: Description\`

**Layer Types:**
- [clients] - Client applications (web, mobile)
- [frontend] - Frontend layer
- [gateway] - API gateways, load balancers
- [api] - API layer
- [services] - Microservices, backend services
- [backend] - Backend layer
- [data] - Data stores
- [database] - Databases (PostgreSQL, MongoDB)
- [cache] - Caching layer (Redis, Memcached)
- [queue] - Message queues (RabbitMQ, Kafka)
- [storage] - Object storage (S3, Blob)
- [external] - External systems

**C4-Style Node Types (for detailed diagrams):**
- [person] User: Description
- [system] System Name: Description
- [webapp] Web Application: Technology
- [mobileapp] Mobile App: Technology
- [component] Component: Description
- [service] Service Name: Description
- [server] Server: Description
- [monitoring] Monitoring Tool: Description
- [logging] Logging: Description

**Grouping with Boundaries (C4 style):**
\`\`\`
boundary "Group Name" {
  [type] Component1: Description
  [type] Component2: Description
}
\`\`\`

**Connections:**
- Source -> Target
- Source -> Target: label

**Edge Styles:**
- A -> B (solid)
- A --> B (dotted)
- A ==> B (thick)
- A ->> B (async)
- A -.-> B (dashed)

**Complete Example:**
\`\`\`
title: E-Commerce Platform
subtitle: Microservices Architecture

[person] Customer: Online shopper
[external] Payment Gateway: Stripe

boundary "Web Layer" {
  [webapp] Web App: React
  [mobileapp] Mobile App: React Native
}

boundary "Services" {
  [service] User Service: Authentication
  [service] Order Service: Order management
  [service] Product Service: Catalog
}

boundary "Data Layer" {
  [database] PostgreSQL: Primary DB
  [cache] Redis: Session cache
  [queue] RabbitMQ: Events
}

Customer -> Web App: Uses
Web App -> User Service: API calls
Order Service -> PostgreSQL: Writes
Order Service -> RabbitMQ: Publishes
\`\`\`
`,

  // ---------------------------------------------------------------------------
  // C4 DIAGRAM
  // ---------------------------------------------------------------------------
  c4: `
## C4 Diagram DSL Syntax

**Element Types:**
- [person] Name: Description
- [system] Name: Description
- [container] Name: Description
- [component] Name: Description
- [external] Name: Description
- [database] Name: Description

**Grouping with Boundaries:**
\`\`\`
boundary "System Name" {
  [container] API: REST API
  [container] Web App: React frontend
  [database] Database: PostgreSQL
}
\`\`\`

**Relationships:**
- Element1 -> Element2: Description

**Example:**
\`\`\`
[person] User: A customer of the system

boundary "Internet Banking System" {
  [container] Web Application: React
  [container] API: Node.js REST API
  [database] Database: PostgreSQL
}

[external] Email System: SendGrid

User -> Web Application: Uses
Web Application -> API: JSON/HTTPS
API -> Database: Reads/Writes
API -> Email System: Sends emails
\`\`\`
`,

  // ---------------------------------------------------------------------------
  // ERD
  // ---------------------------------------------------------------------------
  erd: `
## ERD (Entity Relationship Diagram) DSL Syntax

**Uses SQL CREATE TABLE statements**

**Primary Key:** column_name TYPE PRIMARY KEY
**Foreign Key:** column_name TYPE REFERENCES table(column)

**Example:**
\`\`\`sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(100),
  created_at TIMESTAMP
);

CREATE TABLE orders (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  total DECIMAL(10,2),
  status VARCHAR(50)
);

CREATE TABLE order_items (
  id UUID PRIMARY KEY,
  order_id UUID REFERENCES orders(id),
  product_id UUID REFERENCES products(id),
  quantity INTEGER,
  price DECIMAL(10,2)
);
\`\`\`
`,

  // ---------------------------------------------------------------------------
  // STATE MACHINE
  // ---------------------------------------------------------------------------
  state: `
## State Machine DSL Syntax

**Special States:**
- (initial) StateName - Start state
- (final) StateName - End state

**Transitions:**
\`State1 -> State2: EVENT_NAME\`

**Example:**
\`\`\`
(initial) Idle

Idle -> Loading: FETCH
Loading -> Success: RESOLVE
Loading -> Error: REJECT
Success -> Idle: RESET
Error -> Loading: RETRY
Error -> Idle: DISMISS

(final) Success
\`\`\`
`,

  // ---------------------------------------------------------------------------
  // USER JOURNEY
  // ---------------------------------------------------------------------------
  journey: `
## User Journey DSL Syntax

**Node Types:**
- [actor] Name - User/persona
- [user] Name - User
- [page] Name - Page/screen
- [screen] Name - Screen
- [action] Name - User action
- [form] Name - Form
- [email] Name - Email
- [success] Name - Success state
- [error] Name - Error state
- [decision] Name - Decision point
- [notification] Name - Notification
- [milestone] Name - Milestone

**Connections:**
- Node1 -> Node2
- Node1 -label-> Node2

**Example:**
\`\`\`
[actor] Customer
[page] Homepage
[action] Search Products
[page] Product List
[action] Add to Cart
[page] Cart
[action] Checkout
[form] Payment Form
[success] Order Confirmed

Customer -> Homepage
Homepage -> Search Products
Search Products -> Product List
Product List -> Add to Cart
Add to Cart -> Cart
Cart -> Checkout
Checkout -> Payment Form
Payment Form -> Order Confirmed
\`\`\`
`,

  // ---------------------------------------------------------------------------
  // TIMELINE
  // ---------------------------------------------------------------------------
  timeline: `
## Timeline DSL Syntax

**Format:**
\`[Date] Event Title | Description\`

**Milestones (with *):**
\`[Date] *Milestone Title | Description\`

**Example:**
\`\`\`
[Q1 2024] *Project Kickoff | Team assembled
[Q1 2024] Requirements | Specs finalized
[Q2 2024] Design Phase | UI/UX complete
[Q2 2024] *Alpha Release | Core features done
[Q3 2024] Beta Testing | User feedback
[Q4 2024] *Public Launch | Version 1.0
\`\`\`
`,

  // ---------------------------------------------------------------------------
  // ORG CHART
  // ---------------------------------------------------------------------------
  orgchart: `
## Organization Chart DSL Syntax

**Structure:** Indentation-based hierarchy

**Optional title in brackets:**
\`Name [Title]\`

**Example:**
\`\`\`
CEO [Chief Executive Officer]
  CTO [Chief Technology Officer]
    VP Engineering
      Engineering Manager
        Senior Developer
        Developer
    QA Lead
      QA Engineer
  CFO [Chief Financial Officer]
    Finance Manager
    HR Manager
\`\`\`
`,

  // ---------------------------------------------------------------------------
  // NETWORK DIAGRAM
  // ---------------------------------------------------------------------------
  network: `
## Network Diagram DSL Syntax

**Device Types:**
- [cloud] Name (IP)
- [firewall] Name (IP)
- [router] Name (IP)
- [switch] Name (IP)
- [server] Name (IP)
- [computer] Name (IP)
- [hub] Name (IP)

**Connections:**
- Device1 -- Device2
- Device1 -- Device2: Protocol

**Example:**
\`\`\`
[cloud] Internet
[firewall] Firewall (10.0.0.1)
[router] Router (10.0.0.2)
[switch] Switch (10.0.1.1)
[server] Web Server (10.0.1.10)
[server] DB Server (10.0.1.11)
[computer] Workstation (10.0.2.10)

Internet -- Firewall
Firewall -- Router
Router -- Switch
Switch -- Web Server: HTTP
Switch -- DB Server: PostgreSQL
Router -- Workstation: SSH
\`\`\`
`,

  // ---------------------------------------------------------------------------
  // GANTT CHART
  // ---------------------------------------------------------------------------
  gantt: `
## Gantt Chart DSL Syntax

**Format:**
\`TaskName, startDay, duration, progress(optional)\`

- startDay: Day number (0 = start)
- duration: Number of days
- progress: 0-100 percentage (optional)

**Example:**
\`\`\`
Planning, 0, 3, 100
Design, 3, 4, 100
Development, 7, 10, 60
Testing, 15, 5, 0
Deployment, 19, 2, 0
\`\`\`
`,

  // ---------------------------------------------------------------------------
  // CLASS DIAGRAM
  // ---------------------------------------------------------------------------
  class: `
## Class Diagram DSL Syntax

**Class Declaration:**
\`class ClassName\`

**Properties:**
- + property: type  (public)
- - property: type  (private)
- # property: type  (protected)

**Methods:**
- + methodName(params): returnType  (public)
- - methodName(): void  (private)

**Example:**
\`\`\`
class User
  + id: string
  + email: string
  - passwordHash: string
  + login(email, password): boolean
  + logout(): void
  # hashPassword(plain): string

class Order
  + id: string
  + userId: string
  + items: Item[]
  + total: number
  + calculateTotal(): number
  + addItem(item): void
\`\`\`
`,

  // ---------------------------------------------------------------------------
  // USE CASE DIAGRAM
  // ---------------------------------------------------------------------------
  usecase: `
## Use Case Diagram DSL Syntax

**Actors:**
\`actor ActorName\`

**Use Cases:**
\`(Use Case Name)\`

**Relationships:**
\`Actor -> Use Case\`

**Example:**
\`\`\`
actor Customer
actor Admin
actor System

(Browse Products)
(Add to Cart)
(Checkout)
(Manage Products)
(Process Orders)
(Send Notifications)

Customer -> Browse Products
Customer -> Add to Cart
Customer -> Checkout
Admin -> Manage Products
Admin -> Process Orders
System -> Send Notifications
\`\`\`
`,

  // ---------------------------------------------------------------------------
  // PIE CHART
  // ---------------------------------------------------------------------------
  pie: `
## Pie Chart DSL Syntax

**Format:**
\`"Label": value\` or \`Label: value\`

**Example:**
\`\`\`
"JavaScript": 35
"Python": 25
"TypeScript": 20
"Go": 12
"Other": 8
\`\`\`
`,

  // ---------------------------------------------------------------------------
  // QUADRANT DIAGRAM
  // ---------------------------------------------------------------------------
  quadrant: `
## Quadrant Diagram DSL Syntax

**Configuration:**
\`\`\`
title: Chart Title
x-axis: Label ->
y-axis: Label ->
quadrant-1: Top-Right Label
quadrant-2: Top-Left Label
quadrant-3: Bottom-Left Label
quadrant-4: Bottom-Right Label
\`\`\`

**Points:**
\`Label: [x, y]\` where x,y are 0-100

**Example:**
\`\`\`
title: Priority Matrix
x-axis: Effort ->
y-axis: Impact ->
quadrant-1: Quick Wins
quadrant-2: Major Projects
quadrant-3: Fill-ins
quadrant-4: Thankless Tasks

Feature A: [20, 85]
Feature B: [80, 90]
Feature C: [30, 30]
Feature D: [75, 25]
\`\`\`
`,

  // ---------------------------------------------------------------------------
  // GIT GRAPH
  // ---------------------------------------------------------------------------
  git: `
## Git Graph DSL Syntax

**Commands:**
- commit "Message"
- branch BranchName
- checkout BranchName
- merge BranchName

**Example:**
\`\`\`
commit "Initial commit"
commit "Add project structure"
branch develop
commit "Feature: Auth"
commit "Feature: Dashboard"
checkout main
commit "Hotfix: Security"
merge develop
commit "Release v1.0"
\`\`\`
`,

  // ---------------------------------------------------------------------------
  // DEPLOYMENT DIAGRAM
  // ---------------------------------------------------------------------------
  deployment: `
## Deployment Diagram DSL Syntax

**Node Types (hierarchical with indentation):**
- [cloud] Name
- [cluster] Name
- [container] Name
- [server] Name
- [database] Name
- [storage] Name
- [device] Name
- [component] Name

**Example:**
\`\`\`
[cloud] AWS
  [cluster] EKS Cluster
    [container] API Pod
    [container] Worker Pod
  [database] RDS PostgreSQL
  [storage] S3 Bucket
  [cache] ElastiCache
[cloud] Cloudflare
  [component] CDN
  [component] WAF
[device] User Browser
\`\`\`
`,

  // ---------------------------------------------------------------------------
  // WIREFRAME
  // ---------------------------------------------------------------------------
  wireframe: `
## Wireframe DSL Syntax

**Window Frame:**
\`{Window Title}\`

**Navigation:**
\`[[ Item1 | Item2 | Item3 ]]\` - navbar
\`(( Tab1 | Tab2 ))\` - tabs

**Content:**
- \`# Heading\` - heading
- \`>> Breadcrumb > Path\` - breadcrumbs
- \`---\` - divider
- \`___\` - spacer

**Components:**
- \`[Button]\` - button
- \`[search: placeholder]\` - search
- \`[v Dropdown]\` - dropdown
- \`[progress: 75%]\` - progress bar
- \`(@Username)\` - avatar

**Cards:**
\`\`\`
<Card Title>
  Content here
</Card>
\`\`\`

**Tables:**
\`|Col1|Col2|Col3|\`

**Example:**
\`\`\`
{Dashboard}
[[ Home | Analytics | Settings ]]

>> Dashboard > Overview

# Welcome Back

<Stats>
|Metric|Value|
|Users|1,234|
|Revenue|$5,678|

[progress: 75%]
</Stats>

[Export] [Refresh]
\`\`\`
`,

  // ---------------------------------------------------------------------------
  // ACTIVITY DIAGRAM
  // ---------------------------------------------------------------------------
  activity: `
## Activity Diagram DSL Syntax

**Nodes:**
- \`[start]\` or \`start\` - start node
- \`[end]\` or \`end\` - end node
- \`:Action Name;\` - action
- \`<Decision?>\` - decision diamond

**Connections (required for branching):**
\`NodeLabel -> NodeLabel: EdgeLabel\`

**Example:**
\`\`\`
[start]
:Open App;
:Login;
<Authenticated?>
:Show Dashboard;
:Show Error;
[end]

start -> Open App
Open App -> Login
Login -> Authenticated?
Authenticated? -> Show Dashboard: Yes
Authenticated? -> Show Error: No
Show Dashboard -> end
Show Error -> Login: Retry
\`\`\`
`,

  // ---------------------------------------------------------------------------
  // COMPONENT DIAGRAM
  // ---------------------------------------------------------------------------
  component: `
## Component Diagram DSL Syntax

**Component Types:**
- [service] Name
- [component] Name
- [database] Name
- [cache] Name
- [queue] Name
- [api] Name

**Connections:**
- Comp1 --> Comp2 (depends on)
- Comp1 -- Comp2 (associates with)

**Example:**
\`\`\`
[service] API Gateway
[service] Auth Service
[service] User Service
[database] PostgreSQL
[cache] Redis
[queue] RabbitMQ

API Gateway --> Auth Service
API Gateway --> User Service
Auth Service -- Redis
User Service --> PostgreSQL
User Service --> RabbitMQ
\`\`\`
`,

  // ---------------------------------------------------------------------------
  // REQUIREMENT DIAGRAM
  // ---------------------------------------------------------------------------
  requirement: `
## Requirement Diagram DSL Syntax

**Requirement Definition:**
\`\`\`
requirement Name {
  text: Requirement description
  risk: Low | Medium | High
  priority: Low | Medium | High | Critical
}
\`\`\`

**Relationships:**
- Req1 -> Req2: derives
- Req1 -> Req2: traces
- Req1 -> Req2: satisfies

**Example:**
\`\`\`
requirement Authentication {
  text: Users must authenticate via OAuth or password
  risk: High
  priority: Critical
}

requirement Encryption {
  text: All data must be encrypted at rest
  risk: Medium
  priority: High
}

requirement Audit {
  text: All actions must be logged
  risk: Low
  priority: Medium
}

Authentication -> Encryption: derives
Encryption -> Audit: traces
\`\`\`
`
};

// ============================================================================
// COMPLETE DSL REFERENCE (ALL TYPES)
// ============================================================================

export const DSL_REFERENCE = `# DDFlow DSL Reference

This is the complete DSL syntax reference for DDFlow diagram generation.
Use this reference when prompting AI to generate diagram DSL.

## Supported Diagram Types

${Object.entries(DIAGRAM_TYPES).map(([type, info]) => `- **${type}** - ${info.description}`).join('\n')}

---

${Object.entries(DSL_SYNTAX).map(([type, syntax]) => syntax).join('\n---\n')}
`;

// ============================================================================
// AI PROMPT TEMPLATE
// ============================================================================

export const AI_PROMPT_TEMPLATE = `You are a diagram DSL generator for DDFlow. Generate ONLY valid DDFlow DSL code based on user descriptions.

CRITICAL RULES:
1. Output ONLY the DSL code - no explanations, no markdown code blocks
2. Start with: <!-- type: DIAGRAM_TYPE -->
3. Use EXACT syntax from the reference below
4. For hierarchical data (mind maps, org charts) use INDENTATION, not arrows

${DSL_REFERENCE}

---

USER REQUEST:
{USER_INPUT}

Generate the DDFlow DSL:`;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get DSL syntax reference for a specific diagram type
 * @param {string} type - Diagram type (e.g., 'flowchart', 'architecture')
 * @returns {string} DSL syntax reference for the type
 */
export function getDSLForType(type) {
  const normalizedType = type.toLowerCase();

  // Check direct match
  if (DSL_SYNTAX[normalizedType]) {
    return DSL_SYNTAX[normalizedType];
  }

  // Check aliases
  for (const [diagramType, info] of Object.entries(DIAGRAM_TYPES)) {
    if (info.aliases?.includes(normalizedType)) {
      return DSL_SYNTAX[diagramType];
    }
  }

  return null;
}

/**
 * Get all available diagram types
 * @returns {string[]} Array of diagram type names
 */
export function getAvailableTypes() {
  return Object.keys(DIAGRAM_TYPES);
}

/**
 * Get diagram type info including aliases
 * @param {string} type - Diagram type
 * @returns {object} Type info with name, description, aliases
 */
export function getTypeInfo(type) {
  return DIAGRAM_TYPES[type.toLowerCase()] || null;
}

/**
 * Create a custom AI prompt with the user's input
 * @param {string} userInput - User's diagram description
 * @returns {string} Complete prompt ready for AI
 */
export function createAIPrompt(userInput) {
  return AI_PROMPT_TEMPLATE.replace('{USER_INPUT}', userInput);
}

/**
 * Get a compact DSL reference (shorter version for token-limited contexts)
 * @returns {string} Compact DSL reference
 */
export function getCompactReference() {
  return `DDFlow DSL Quick Reference

FLOWCHART: (start) Label -> (process) Label -> (decision) Label? -> (end) Done
SEQUENCE: participant A, B, C | A -> B: message | B --> A: response
MINDMAP: Root (indent 2 spaces for children, NO arrows)
ARCHITECTURE: [clients] App1, App2 | [services] Svc1, Svc2 | App1 -> Svc1
  - Boundaries: boundary "Name" { [type] Component }
C4: [person] User | [system] App | [container] API | User -> App: Uses
ERD: CREATE TABLE name (id INT PRIMARY KEY, fk INT REFERENCES other(id));
STATE: (initial) Start | Start -> Loading: EVENT | (final) Done
JOURNEY: [actor] User | [page] Home | [action] Click | User -> Home
TIMELINE: [Q1 2024] *Milestone | Description
ORGCHART: CEO (indent for hierarchy)
NETWORK: [server] Name (IP) | Server1 -- Server2: Protocol
GANTT: TaskName, startDay, duration, progress
CLASS: class Name | +public: type | -private: type | +method(): void
USECASE: actor User | (Use Case) | User -> Use Case
PIE: "Label": value
QUADRANT: title: Name | x-axis: Label -> | Point: [x, y]
GIT: commit "msg" | branch name | checkout name | merge name
DEPLOYMENT: [cloud] AWS (indent [container] for children)
WIREFRAME: {Title} | [[ Nav ]] | # Heading | [Button] | <Card>...</>
ACTIVITY: [start] | :Action; | <Decision?> | [end] | Node -> Node: label
COMPONENT: [service] Name | [database] Name | Svc --> DB
REQUIREMENT: requirement Name { text: desc | risk: High | priority: Critical }

Always start with: <!-- type: TYPENAME -->`;
}

// Default export for convenience
export default {
  DIAGRAM_TYPES,
  DSL_SYNTAX,
  DSL_REFERENCE,
  AI_PROMPT_TEMPLATE,
  getDSLForType,
  getAvailableTypes,
  getTypeInfo,
  createAIPrompt,
  getCompactReference
};
