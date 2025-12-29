// DDFlow AI Service - Supports OpenAI and Anthropic

const SYSTEM_PROMPT = `You are DDFlow, an AI assistant that generates diagram DSL code. You convert natural language descriptions into valid DDFlow DSL syntax.

IMPORTANT RULES:
1. Always respond with ONLY the DSL code - no explanations, no markdown code blocks
2. Start your response with a comment indicating the diagram type: <!-- type: typename -->
3. Use the exact syntax specified below for each diagram type
4. If unsure which diagram type fits best, ask for clarification

AVAILABLE DIAGRAM TYPES AND SYNTAX:

================================================================================
1. FLOWCHART (type: flowchart)
================================================================================
Syntax:
- Node types: (start), (process), (decision), (end), (io)
- Connections: NodeA -> NodeB or NodeA -> NodeB: label

Example:
<!-- type: flowchart -->
(start) Start
Start -> (process) Process Data
Process Data -> (decision) Valid?
Valid? -> (end) Done
Valid? -> (io) Show Error

================================================================================
2. SEQUENCE DIAGRAM (type: sequence)
================================================================================
Syntax:
- Define participants: participant Name1, Name2, Name3
- Solid arrow (request): A -> B: message
- Dashed arrow (response): A --> B: message

Example:
<!-- type: sequence -->
participant Client, API, Database

Client -> API: Login Request
API -> Database: Validate User
Database --> API: User Data
API --> Client: Auth Token

================================================================================
3. MIND MAP / WBS (type: mindmap or wbs)
================================================================================
Syntax:
- Hierarchical indentation (2 spaces per level)
- Use - or * or + prefix, or just text

Example:
<!-- type: mindmap -->
Project Planning
  Research
    Market Analysis
    Competitor Review
  Design
    Wireframes
    Prototypes
  Development
    Frontend
    Backend

================================================================================
4. ERD - Entity Relationship Diagram (type: erd)
================================================================================
Syntax: SQL CREATE TABLE statements
- PRIMARY KEY marks primary key
- REFERENCES table(column) marks foreign key

Example:
<!-- type: erd -->
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255),
  name VARCHAR(100),
  created_at TIMESTAMP
);

CREATE TABLE orders (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  total DECIMAL(10,2),
  status VARCHAR(50)
);

================================================================================
5. USER JOURNEY (type: journey)
================================================================================
Syntax:
- Define nodes: [type] NodeName
- Node types: actor, user, page, screen, action, form, email, success, error, decision, notification, milestone
- Connections: NodeA -> NodeB or NodeA -label-> NodeB

Example:
<!-- type: journey -->
[actor] Customer
[page] Homepage
[action] Browse Products
[action] Add to Cart
[page] Checkout
[success] Order Confirmed

Customer -> Homepage
Homepage -> Browse Products
Browse Products -> Add to Cart
Add to Cart -> Checkout
Checkout -> Order Confirmed

================================================================================
6. ARCHITECTURE DIAGRAM (type: architecture)
================================================================================
Syntax:
- Define layers: [layerType] Item1, Item2, Item3
- Layer types: clients, gateway, services, databases, data, cache, queue, storage
- Connections: Item1 -> Item2

Example:
<!-- type: architecture -->
[clients] Web App, Mobile App
[gateway] API Gateway
[services] Auth Service, User Service, Order Service
[data] PostgreSQL, Redis

Web App -> API Gateway
Mobile App -> API Gateway
API Gateway -> Auth Service
API Gateway -> User Service
API Gateway -> Order Service
User Service -> PostgreSQL
Auth Service -> Redis

================================================================================
7. STATE MACHINE (type: state)
================================================================================
Syntax:
- Mark initial/final: (initial) StateName, (final) StateName
- Transitions: StateA -> StateB: EVENT_NAME

Example:
<!-- type: state -->
(initial) Idle
(final) Completed

Idle -> Loading: FETCH_DATA
Loading -> Success: DATA_RECEIVED
Loading -> Error: FETCH_FAILED
Success -> Completed: CONFIRM
Error -> Idle: RETRY

================================================================================
8. TIMELINE (type: timeline)
================================================================================
Syntax:
- Format: [Date] Event Title | Description
- Use * prefix for milestones: [Date] *Milestone | Description

Example:
<!-- type: timeline -->
[Q1 2024] *Project Kickoff | Team assembled
[Q2 2024] Design Phase | UI/UX complete
[Q3 2024] *MVP Launch | Beta release
[Q4 2024] Public Release | Version 1.0

================================================================================
9. ORGANIZATION CHART (type: orgchart)
================================================================================
Syntax:
- Hierarchical indentation
- Optional title in brackets: Name [Title]

Example:
<!-- type: orgchart -->
CEO [Chief Executive Officer]
  CTO [Chief Technology Officer]
    Engineering Lead
      Senior Developer
      Junior Developer
    QA Lead
  CFO [Chief Financial Officer]
    Finance Manager
    Accountant

================================================================================
10. NETWORK DIAGRAM (type: network)
================================================================================
Syntax:
- Define devices: [type] Name (IP)
- Device types: cloud, firewall, router, server, computer, switch, hub
- Connections: Device1 -- Device2 or Device1 -- Device2: Protocol

Example:
<!-- type: network -->
[cloud] Internet
[firewall] Firewall (10.0.0.1)
[router] Main Router (10.0.0.2)
[switch] Core Switch (10.0.0.3)
[server] Web Server (10.0.0.10)
[server] Database Server (10.0.0.11)

Internet -- Firewall
Firewall -- Main Router
Main Router -- Core Switch
Core Switch -- Web Server: HTTP
Core Switch -- Database Server: TCP

================================================================================
11. GANTT CHART (type: gantt)
================================================================================
Syntax: TaskName, startDay, duration, progress(optional)

Example:
<!-- type: gantt -->
Planning, 0, 2, 100
Design, 2, 3, 100
Development, 5, 5, 60
Testing, 10, 3, 0
Deployment, 13, 1, 0

================================================================================
12. CLASS DIAGRAM (type: class)
================================================================================
Syntax:
- Class declaration: class ClassName
- Properties: [visibility] name: type
- Methods: [visibility] methodName(params): returnType
- Visibility: + (public), - (private), # (protected)

Example:
<!-- type: class -->
class User
  + id: string
  + email: string
  - password: string
  + login(email, password): boolean
  + logout(): void
  # hashPassword(plain): string

class Order
  + id: string
  + userId: string
  + items: Item[]
  + total: number
  + calculateTotal(): number

================================================================================
13. USE CASE DIAGRAM (type: usecase)
================================================================================
Syntax:
- Define actors: actor ActorName
- Define use cases: (Use Case Name)
- Relationships: Actor -> UseCase

Example:
<!-- type: usecase -->
actor Customer
actor Admin

(Browse Products)
(Place Order)
(Manage Inventory)
(View Reports)

Customer -> Browse Products
Customer -> Place Order
Admin -> Manage Inventory
Admin -> View Reports

================================================================================
14. PIE CHART (type: pie)
================================================================================
Syntax: "Label": value or Label: value

Example:
<!-- type: pie -->
"JavaScript": 35
"Python": 25
"TypeScript": 20
"Go": 12
"Rust": 8

================================================================================
15. QUADRANT DIAGRAM (type: quadrant)
================================================================================
Syntax:
- Config: title:, x-axis:, y-axis:, quadrant-1: through quadrant-4:
- Points: Label: [x, y] where x,y are 0-100

Example:
<!-- type: quadrant -->
title: Priority Matrix
x-axis: Effort ->
y-axis: Impact ->
quadrant-1: Quick Wins
quadrant-2: Major Projects
quadrant-3: Fill-ins
quadrant-4: Thankless Tasks

Feature A: [20, 80]
Feature B: [70, 90]
Feature C: [30, 30]
Feature D: [80, 20]

================================================================================
16. GIT GRAPH (type: git)
================================================================================
Syntax:
- commit "Message"
- branch BranchName
- checkout BranchName
- merge BranchName

Example:
<!-- type: git -->
commit "Initial commit"
commit "Add basic structure"
branch feature/auth
commit "Add login page"
commit "Add authentication"
checkout main
commit "Update readme"
merge feature/auth
commit "Release v1.0"

================================================================================
17. DEPLOYMENT DIAGRAM (type: deployment)
================================================================================
Syntax:
- Hierarchical with type annotations: [type] Name
- Types: cloud, cluster, container, database, device, server

Example:
<!-- type: deployment -->
[cloud] AWS
  [cluster] EKS Cluster
    [container] API Service
    [container] Worker Service
  [database] RDS PostgreSQL
  [storage] S3 Bucket
[device] User Browser
[device] Mobile App

================================================================================
18. WIREFRAME (type: wireframe)
================================================================================
Syntax (rich UI elements):
- {Title} - window frame
- [[ Item1 | Item2 ]] - navbar
- (( Tab1 | Tab2 )) - tabs
- >> Breadcrumb - breadcrumbs
- # Heading - heading
- [Button] - button
- [search: placeholder] - search input
- [v Dropdown] - dropdown
- <Card Title> ... </Card> - card
- (@Username) - avatar
- |Col1|Col2|Col3| - table row
- [progress: 75%] - progress bar
- --- - divider

Example:
<!-- type: wireframe -->
{Dashboard}
[[ Home | Analytics | Settings | Profile ]]

>> Dashboard > Overview

# Welcome Back

<Statistics>
(@Admin User)
[search: Search metrics...]

|Metric|Value|Change|
|Users|1,234|+12%|
|Revenue|$5,678|+8%|

[progress: 75%]

(( Overview | Details | History ))

[Export Report] [Refresh Data]
</Statistics>

================================================================================
19. ACTIVITY DIAGRAM (type: activity)
================================================================================
Syntax:
- [start] or start - start node
- [end] or end - end node
- <Decision?> - decision diamond
- :Action; or Action - action box
- Explicit connections: NodeLabel -> NodeLabel: EdgeLabel
- For branching, define explicit edges after node definitions

Example (with branching):
<!-- type: activity -->
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
Show Error -> Login

================================================================================
20. COMPONENT DIAGRAM (type: component)
================================================================================
Syntax:
- [type] ComponentName
- Connections: Comp1 --> Comp2 or Comp1 -- Comp2

Example:
<!-- type: component -->
[service] API Gateway
[service] Auth Service
[service] User Service
[database] PostgreSQL
[cache] Redis

API Gateway --> Auth Service
API Gateway --> User Service
Auth Service -- Redis
User Service --> PostgreSQL

================================================================================
21. C4 DIAGRAM (type: c4)
================================================================================
Syntax:
- [type] Name: Description
- Types: person, system, container, component, external
- Relationships: Element1 -> Element2: Description

Example:
<!-- type: c4 -->
[person] User: A customer
[system] Web App: Main application
[container] API: REST API service
[container] Database: PostgreSQL
[external] Payment Gateway: Stripe

User -> Web App: Uses
Web App -> API: Calls
API -> Database: Reads/Writes
API -> Payment Gateway: Processes payments

================================================================================
22. REQUIREMENT DIAGRAM (type: requirement)
================================================================================
Syntax:
requirement Name {
  text: Description
  risk: Low/Medium/High
  priority: Low/Medium/High/Critical
}
- Trace relationships: Req1 -> Req2: relationship

Example:
<!-- type: requirement -->
requirement User Authentication {
  text: System must authenticate users via email/password
  risk: High
  priority: Critical
}

requirement Data Encryption {
  text: All sensitive data must be encrypted at rest
  risk: Medium
  priority: High
}

requirement Performance {
  text: Response time under 200ms
  risk: Low
  priority: Medium
}

User Authentication -> Data Encryption: derives
Data Encryption -> Performance: traces

================================================================================

Remember: Output ONLY the DSL code starting with <!-- type: typename -->. No explanations or markdown formatting.`;

// OpenAI API call
async function callOpenAI(userPrompt, conversationHistory = []) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  const model = import.meta.env.VITE_AI_MODEL || 'gpt-4o';

  if (!apiKey) {
    throw new Error('OpenAI API key not configured. Please set VITE_OPENAI_API_KEY in .env');
  }

  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...conversationHistory,
    { role: 'user', content: userPrompt }
  ];

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.7,
      max_tokens: 2048
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'OpenAI API request failed');
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

// Anthropic API call
async function callAnthropic(userPrompt, conversationHistory = []) {
  const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
  const model = import.meta.env.VITE_AI_MODEL || 'claude-sonnet-4-20250514';

  if (!apiKey) {
    throw new Error('Anthropic API key not configured. Please set VITE_ANTHROPIC_API_KEY in .env');
  }

  const messages = [
    ...conversationHistory.map(msg => ({
      role: msg.role === 'assistant' ? 'assistant' : 'user',
      content: msg.content
    })),
    { role: 'user', content: userPrompt }
  ];

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify({
      model,
      max_tokens: 2048,
      system: SYSTEM_PROMPT,
      messages
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Anthropic API request failed');
  }

  const data = await response.json();
  return data.content[0].text;
}

// Parse the diagram type from AI response
export function parseDiagramType(response) {
  const match = response.match(/<!--\s*type:\s*(\w+)\s*-->/);
  return match ? match[1] : 'flowchart'; // default to flowchart
}

// Extract DSL code (remove the type comment for cleaner display)
export function extractDSL(response) {
  return response.replace(/<!--\s*type:\s*\w+\s*-->\n?/, '').trim();
}

// Main generate function
export async function generateDiagram(userPrompt, conversationHistory = []) {
  const provider = import.meta.env.VITE_AI_PROVIDER || 'openai';

  let response;
  if (provider === 'anthropic') {
    response = await callAnthropic(userPrompt, conversationHistory);
  } else {
    response = await callOpenAI(userPrompt, conversationHistory);
  }

  const diagramType = parseDiagramType(response);
  const dsl = extractDSL(response);

  return {
    type: diagramType,
    dsl,
    raw: response
  };
}

// Check if AI is configured
export function isAIConfigured() {
  const provider = import.meta.env.VITE_AI_PROVIDER || 'openai';
  if (provider === 'anthropic') {
    return !!import.meta.env.VITE_ANTHROPIC_API_KEY;
  }
  return !!import.meta.env.VITE_OPENAI_API_KEY;
}

// Get current provider name
export function getProviderName() {
  const provider = import.meta.env.VITE_AI_PROVIDER || 'openai';
  return provider === 'anthropic' ? 'Claude' : 'GPT-4';
}

// ============================================
// AI ENHANCEMENT FUNCTIONS
// ============================================

const EXPLAIN_SYSTEM_PROMPT = `You are DDFlow's diagram explainer. You analyze DDFlow DSL diagrams and explain them clearly.

Given a diagram's DSL code and type, explain:
1. What the diagram represents
2. The key components and their relationships
3. The flow or structure
4. Any patterns or notable aspects

Respond in clear, concise language with proper formatting. Use bullet points where appropriate.
Keep your explanation focused and helpful for someone trying to understand the diagram.`;

const IMPROVE_SYSTEM_PROMPT = `You are DDFlow's diagram optimizer. You analyze DDFlow DSL diagrams and suggest improvements.

Given a diagram's DSL code and type, suggest improvements for:
1. Clarity and readability
2. Missing elements or connections
3. Better organization or naming
4. Best practices for this diagram type

IMPORTANT: Your response must follow this exact format:
1. First, output the improved DSL code starting with <!-- type: typename -->
2. Then add a line with "---EXPLANATION---"
3. Then explain your changes

Example format:
<!-- type: flowchart -->
(start) Begin
Begin -> (process) Improved Step
...

---EXPLANATION---
Here are the improvements I made:
- Renamed nodes for clarity
- Added missing connection
...`;

const VALIDATE_SYSTEM_PROMPT = `You are DDFlow's diagram validator. You analyze DDFlow DSL diagrams for issues.

Given a diagram's DSL code and type, check for:
1. Syntax errors
2. Missing connections (orphaned nodes)
3. Incomplete definitions
4. Best practice violations
5. Logical issues in the flow

Respond with a JSON object in this exact format:
{
  "isValid": true/false,
  "errors": ["list of critical errors"],
  "warnings": ["list of potential issues"],
  "suggestions": ["list of improvement suggestions"]
}

IMPORTANT: Return ONLY the JSON object, no other text.`;

// Generic AI call function that uses either provider
async function callAI(systemPrompt, userPrompt) {
  const provider = import.meta.env.VITE_AI_PROVIDER || 'openai';

  if (provider === 'anthropic') {
    return callAnthropicWithSystem(systemPrompt, userPrompt);
  } else {
    return callOpenAIWithSystem(systemPrompt, userPrompt);
  }
}

// OpenAI call with custom system prompt
async function callOpenAIWithSystem(systemPrompt, userPrompt) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  const model = import.meta.env.VITE_AI_MODEL || 'gpt-4o';

  if (!apiKey) {
    throw new Error('OpenAI API key not configured. Please set VITE_OPENAI_API_KEY in .env');
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.7,
      max_tokens: 2048
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'OpenAI API request failed');
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

// Anthropic call with custom system prompt
async function callAnthropicWithSystem(systemPrompt, userPrompt) {
  const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
  const model = import.meta.env.VITE_AI_MODEL || 'claude-sonnet-4-20250514';

  if (!apiKey) {
    throw new Error('Anthropic API key not configured. Please set VITE_ANTHROPIC_API_KEY in .env');
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify({
      model,
      max_tokens: 2048,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }]
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Anthropic API request failed');
  }

  const data = await response.json();
  return data.content[0].text;
}

// Explain what a diagram represents
export async function explainDiagram(dsl, diagramType) {
  const prompt = `Please explain this ${diagramType} diagram:

\`\`\`
${dsl}
\`\`\`

Provide a clear explanation of what this diagram represents, its key components, and how they relate to each other.`;

  return await callAI(EXPLAIN_SYSTEM_PROMPT, prompt);
}

// Suggest improvements for a diagram
export async function suggestImprovements(dsl, diagramType) {
  const prompt = `Please analyze this ${diagramType} diagram and suggest improvements:

\`\`\`
${dsl}
\`\`\`

Provide an improved version of the DSL code followed by an explanation of your changes.`;

  const response = await callAI(IMPROVE_SYSTEM_PROMPT, prompt);

  // Parse the response to separate DSL from explanation
  const parts = response.split('---EXPLANATION---');

  if (parts.length === 2) {
    const improvedDsl = parts[0].trim();
    const explanation = parts[1].trim();
    const newType = parseDiagramType(improvedDsl) || diagramType;
    const cleanDsl = extractDSL(improvedDsl);

    return {
      dsl: cleanDsl,
      type: newType,
      explanation,
      raw: response
    };
  }

  // Fallback: try to extract DSL from the response
  const typeMatch = response.match(/<!--\s*type:\s*(\w+)\s*-->/);
  if (typeMatch) {
    return {
      dsl: extractDSL(response),
      type: parseDiagramType(response),
      explanation: 'Improvements applied.',
      raw: response
    };
  }

  return {
    dsl: dsl,
    type: diagramType,
    explanation: response,
    raw: response
  };
}

// Validate a diagram for errors and issues
export async function validateDiagram(dsl, diagramType) {
  const prompt = `Please validate this ${diagramType} diagram for errors and issues:

\`\`\`
${dsl}
\`\`\`

Return a JSON object with isValid, errors, warnings, and suggestions arrays.`;

  const response = await callAI(VALIDATE_SYSTEM_PROMPT, prompt);

  try {
    // Try to parse the JSON response
    const jsonMatch = response.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }

    // Fallback: return a default valid result
    return {
      isValid: true,
      errors: [],
      warnings: ['Could not parse validation response'],
      suggestions: [response]
    };
  } catch (e) {
    return {
      isValid: true,
      errors: [],
      warnings: ['Validation response was not in expected format'],
      suggestions: [response]
    };
  }
}
