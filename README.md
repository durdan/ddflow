<p align="center">
  <img src="https://ddflow.dev/logo.svg" alt="DDFlow" width="120" />
</p>

<h1 align="center">DDFlow</h1>

<p align="center">
  <strong>22+ diagram types from simple text DSL</strong><br>
  Mind maps • Flowcharts • ERD • Architecture • Wireframes • and more
</p>

<p align="center">
  <em>Created by <a href="https://github.com/durgeshdandotiya">Durgesh Dandotiya (DD)</a></em>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/ddflow"><img src="https://img.shields.io/npm/v/ddflow?color=7C3AED&label=npm" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/ddflow"><img src="https://img.shields.io/npm/dm/ddflow?color=0EA5E9" alt="npm downloads" /></a>
  <a href="https://github.com/ddflow/ddflow/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-10B981" alt="MIT License" /></a>
  <a href="https://github.com/ddflow/ddflow"><img src="https://img.shields.io/github/stars/ddflow/ddflow?style=social" alt="GitHub stars" /></a>
</p>

<p align="center">
  <a href="https://ddflow.dev">🎮 Live Playground</a> •
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-diagram-types">Diagram Types</a> •
  <a href="#-dsl-reference">DSL Reference</a> •
  <a href="https://discord.gg/ddflow">Discord</a>
</p>

<p align="center">
  <img src="https://ddflow.dev/demo.gif" alt="DDFlow Demo" width="800" />
</p>

---

## ✨ Why DDFlow?

| Feature | Mermaid | DDFlow |
|---------|---------|--------|
| Diagram types | 13 | **22+** |
| Drag & drop nodes | ❌ | ✅ |
| Simple syntax | ❌ Complex | ✅ Intuitive |
| Interactive | ❌ Static | ✅ Pan/Zoom |
| Wireframes | ❌ | ✅ 35+ elements |
| Dark theme | Partial | ✅ Beautiful |
| Bundle size | ~200KB | **~50KB** |
| Server required | Sometimes | **Never** |

### 🌐 100% Client-Side

DDFlow runs entirely in the browser. No server, no API calls, no data leaving your machine.

```
✅ DSL Parsing      → Browser JavaScript
✅ Layout Engine    → Client-side calculations
✅ Rendering        → React + SVG
✅ Interactions     → Mouse events + state
✅ Data             → In-memory (React state)
```

---

## 🚀 Quick Start

### Installation

```bash
npm install ddflow
# or
yarn add ddflow
# or
pnpm add ddflow
```

### Basic Usage

```tsx
import { DDFlow } from 'ddflow';

function App() {
  return (
    <DDFlow
      type="mindmap"
      source={`
        Project Plan
          Research
            Market Analysis
            User Interviews
          Design
            Wireframes
            Prototypes
          Development
            Frontend
            Backend
      `}
    />
  );
}
```

### CDN Usage (No Build Tools)

```html
<script src="https://unpkg.com/ddflow/dist/ddflow.umd.js"></script>
<div id="diagram"></div>
<script>
  DDFlow.render('#diagram', {
    type: 'flowchart',
    source: 'Start -> Process -> End'
  });
</script>
```

---

## 📊 Diagram Types

<table>
<tr>
<td width="25%">

### 🧠 Mind Map
```
Project
  Goals
    Revenue
    Growth
  Features
    Auth
    Dashboard
```

</td>
<td width="25%">

### 🏗️ Architecture
```
[clients] Web, Mobile
[gateway] API Gateway
[services] Auth, Users
[databases] PostgreSQL

Web -> API Gateway
API Gateway -> Auth
```

</td>
<td width="25%">

### 📈 Flowchart
```
(start) Begin
Begin -> (decision) Valid?
Valid? -> (end) Success
Valid? -> (process) Retry
```

</td>
<td width="25%">

### 🔄 Sequence
```
participant Client, API, DB

Client -> API: Request
API -> DB: Query
DB --> API: Result
API --> Client: Response
```

</td>
</tr>
<tr>
<td>

### 📊 ERD
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255),
  name VARCHAR(100)
);

CREATE TABLE posts (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users
);
```

</td>
<td>

### 🚶 User Journey
```
[actor] User
[page] Landing
[action] Sign Up
[page] Dashboard

User -Visit-> Landing
Landing -Click-> Sign Up
Sign Up -Complete-> Dashboard
```

</td>
<td>

### ⚡ State Machine
```
(initial) Idle

Idle -> Loading: FETCH
Loading -> Success: RESOLVE
Loading -> Error: REJECT
Error -> Idle: RETRY
```

</td>
<td>

### 📅 Timeline
```
[Q1] *Kickoff | Started
[Q2] Design | Complete
[Q3] *MVP | Launched
[Q4] Scale | Growth
```

</td>
</tr>
</table>

<details>
<summary><strong>View all 22+ diagram types →</strong></summary>

| Type | Description | Key Syntax |
|------|-------------|------------|
| `mindmap` | Hierarchical mind maps | Indentation-based |
| `architecture` | System architecture | `[layer] components` |
| `erd` | Entity Relationship | SQL CREATE TABLE |
| `flowchart` | Process flows | `(type) Label` → |
| `sequence` | Sequence diagrams | `A -> B: message` |
| `state` | State machines | `State -> State: event` |
| `journey` | User journeys | `[type] Node` with connections |
| `timeline` | Timelines | `[date] Event \| description` |
| `orgchart` | Org charts | Indentation-based |
| `network` | Network topology | `[device] Name (IP)` |
| `gantt` | Gantt charts | `Task, start, duration` |
| `deployment` | Deployment diagrams | Nested `[type] Name` |
| `pie` | Pie charts | `"Label": value` |
| `quadrant` | Quadrant charts | `Label: [x, y]` |
| `git` | Git graphs | `commit`, `branch`, `merge` |
| `wireframe` | UI wireframes | 35+ element types |
| `class` | Class diagrams | `class Name` + members |
| `activity` | Activity diagrams | `:Action;` with decisions |
| `usecase` | Use case diagrams | `actor` + `(use case)` |
| `component` | Component diagrams | `[component] Name` |
| `c4` | C4 diagrams | `[person/system/container]` |
| `requirement` | Requirements | `requirement Name {...}` |

</details>

---

## 📱 Wireframe DSL

Build UI mockups with 35+ elements - perfect for rapid prototyping:

```
{App Title}
[[ Home | Products | About ]]

>> Home > Dashboard

# Welcome Back

<Card>
(@John Doe)
[search: Search products...]
[v Select Category]
[slider: 65%]

|Name|Status|Amount|
|Order #1|Shipped|$120|
|Order #2|Pending|$85|

[progress: 78%]

[Submit] [Cancel] [Delete]
</>

@user1 liked your post • 2m ago
@user2 commented: Great work!

{badge:New} {success:Active} {warning:Review}
```

<details>
<summary><strong>View all wireframe elements →</strong></summary>

| Category | Elements | Syntax |
|----------|----------|--------|
| **Layout** | Window, Card, Modal | `{Title}`, `<Card>...</>`, `{{Modal}}` |
| **Navigation** | Navbar, Tabs, Breadcrumbs | `[[ a \| b ]]`, `(( tab1 \| tab2 ))`, `>> Home > Page` |
| **Forms** | Input, Textarea, Dropdown, Search | `"placeholder"`, `[""" text]`, `[v Options]`, `[🔍 Search]` |
| **Controls** | Button, Toggle, Checkbox, Radio | `[Btn]`, `[O] On`, `[x] Check`, `(O) Radio` |
| **Feedback** | Progress, Alert, Badge, Rating | `[progress: 75%]`, `[!] Error`, `{success:Done}`, `[★★★☆☆]` |
| **Data** | Table, List, Feed | `\|a\|b\|`, `- item`, `@user text` |
| **Media** | Image, Video, Map, Chart | `[img]`, `[video]`, `[map]`, `[chart]` |
| **Navigation** | Stepper, Pagination | `[step: 2/5]`, `[page: 3/10]` |

</details>

---

## 🎮 Interactive Features

### Drag & Drop
Click and drag any node to reposition it. The layout adapts automatically.

### Pan & Zoom
- **Scroll** to zoom in/out
- **Click + drag** on empty space to pan
- **Reset** button to restore default view

### Controls
```
┌─────────────────────────────────┐
│  [+] [-] [Fit] [Reset]    75%   │
│                                 │
│     Drag nodes • Scroll to      │
│     zoom • Drag canvas to pan   │
└─────────────────────────────────┘
```

---

## 🎨 Customization

### Themes

```tsx
<DDFlow
  type="mindmap"
  source="..."
  theme="dark"  // 'dark' | 'light'
/>
```

### Custom Colors

```tsx
import { DDFlow, createTheme } from 'ddflow';

const customTheme = createTheme({
  colors: {
    primary: '#8B5CF6',
    secondary: '#0EA5E9',
    success: '#10B981',
  },
  background: '#0f0f1a',
});

<DDFlow theme={customTheme} ... />
```

### Controlled Mode

```tsx
import { DDFlow, useDDFlowState } from 'ddflow';

function App() {
  const { positions, setPositions, zoom, setZoom } = useDDFlowState();
  
  return (
    <DDFlow
      type="architecture"
      source={source}
      positions={positions}
      onPositionChange={setPositions}
      zoom={zoom}
      onZoomChange={setZoom}
    />
  );
}
```

---

## 🔧 API Reference

### `<DDFlow />`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `DiagramType` | required | Diagram type |
| `source` | `string` | - | DSL source text |
| `data` | `object` | - | Pre-parsed data |
| `theme` | `'dark' \| 'light' \| Theme` | `'dark'` | Color theme |
| `width` | `string \| number` | `'100%'` | Container width |
| `height` | `string \| number` | `'100%'` | Container height |
| `className` | `string` | - | CSS class |
| `interactive` | `boolean` | `true` | Enable drag/pan/zoom |
| `onNodeClick` | `(node) => void` | - | Node click handler |
| `onPositionChange` | `(positions) => void` | - | Position change handler |

### Parsers

```tsx
import { parsers } from 'ddflow';

const mindmapData = parsers.mindmap(source);
const erdData = parsers.erd(sqlSource);
const flowData = parsers.flowchart(source);
const wireframeData = parsers.wireframe(source);
```

### Utilities

```tsx
import { exportToPNG, exportToSVG } from 'ddflow';

// Export diagram
const png = await exportToPNG(diagramRef);
const svg = await exportToSVG(diagramRef);
```

---

## 📦 Individual Components

Import only what you need for smaller bundles:

```tsx
import { MindMap } from 'ddflow/mindmap';
import { Flowchart } from 'ddflow/flowchart';
import { ERD } from 'ddflow/erd';
import { Wireframe } from 'ddflow/wireframe';
import { Architecture } from 'ddflow/architecture';
```

---

## 🌐 Framework Support

### Next.js

```tsx
'use client';

import dynamic from 'next/dynamic';

const DDFlow = dynamic(() => import('ddflow'), { ssr: false });

export default function Diagram({ source }) {
  return <DDFlow type="mindmap" source={source} />;
}
```

### Vanilla JS

```html
<div id="diagram"></div>
<script src="https://unpkg.com/ddflow"></script>
<script>
  DDFlow.render('#diagram', {
    type: 'architecture',
    source: `
      [clients] Web, Mobile
      [services] API, Auth
      Web -> API
    `
  });
</script>
```

### Vue (Coming Soon)

```vue
<template>
  <DDFlow type="flowchart" :source="source" />
</template>
```

---

## 🛠️ Development

```bash
# Clone
git clone https://github.com/ddflow/ddflow
cd ddflow

# Install
npm install

# Dev server
npm run dev

# Run playground
npm run playground

# Build
npm run build

# Test
npm test
```

---

## 📋 Roadmap

- [x] 22 diagram types
- [x] Drag & drop nodes
- [x] Pan & zoom
- [x] Dark theme
- [x] 100% client-side
- [ ] Light theme
- [ ] Export PNG/SVG/PDF
- [ ] Mermaid import
- [ ] VS Code extension
- [ ] Figma plugin
- [ ] AI diagram generation
- [ ] Real-time collaboration

---

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

```bash
# Create feature branch
git checkout -b feature/amazing-feature

# Make changes & test
npm test

# Submit PR
```

---

## 💬 Community

- [Discord](https://discord.gg/ddflow) - Chat with the community
- [GitHub Discussions](https://github.com/ddflow/ddflow/discussions) - Ask questions
- [Twitter](https://twitter.com/ddaborat) - Follow for updates

---

## 👨‍💻 Author

**Durgesh Dandotiya (DD)**

- GitHub: [@durgeshdandotiya](https://github.com/durgeshdandotiya)
- Twitter: [@ddaborat](https://twitter.com/ddaborat)
- Website: [sdlc.dev](https://sdlc.dev)

---

## 📄 License

MIT © [Durgesh Dandotiya](https://github.com/durgeshdandotiya)

---

<p align="center">
  <sub>Built with ❤️ by <strong>DD</strong> (Durgesh Dandotiya)</sub>
</p>

<p align="center">
  <a href="https://ddflow.dev">Website</a> •
  <a href="https://ddflow.dev/docs">Docs</a> •
  <a href="https://ddflow.dev/playground">Playground</a> •
  <a href="https://github.com/ddflow/ddflow">GitHub</a>
</p>
