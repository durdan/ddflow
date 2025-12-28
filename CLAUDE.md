# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Git Commit Guidelines

When committing code, always use Durgesh Dandotiya as the main author:
- **Author:** Durgesh Dandotiya <durgesh_d@hotmail.com>
- **Co-Author:** Claude Opus 4.5 <noreply@anthropic.com>

## Project Overview

DDFlow is a React-based diagram rendering library that converts simple text DSL into interactive diagrams. It supports 22+ diagram types and runs entirely client-side with no server dependencies.

## Development Commands

```bash
npm install        # Install dependencies
npm run dev        # Start development server
npm run playground # Run interactive playground
npm run build      # Build for production
npm test           # Run tests
```

## AI Chat Configuration

DDFlow includes an AI-powered chat interface that generates diagrams from natural language descriptions.

### Setup

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Configure your AI provider in `.env`:
   ```env
   # Choose provider: "openai" or "anthropic"
   VITE_AI_PROVIDER=openai

   # Add your API key
   VITE_OPENAI_API_KEY=sk-your-key-here
   # OR
   VITE_ANTHROPIC_API_KEY=sk-ant-your-key-here
   ```

3. Restart the dev server

### Usage

1. Click the "AI Chat" button in the header
2. Describe the diagram you want (e.g., "Create a flowchart for user authentication")
3. Click "Apply" to render the generated diagram

### Files

- `src/services/aiService.js` - LLM API integration (OpenAI + Anthropic)
- `src/components/AIChatPanel.jsx` - Chat UI component

## Architecture

### Single-File Engine

The core implementation is in `universal-diagram-engine-v8.jsx` (~2260 lines), which contains:

1. **Theme System** (`THEMES`, `COLORS`) - Dark theme configuration and color palette
2. **Interactive Canvas Hook** (`useInteractiveCanvas`) - Unified drag/drop, pan/zoom handling for all diagram types
3. **Parsers** (`Parsers` object) - Text DSL parsers for each diagram type
4. **Diagram Components** - Individual React components for each diagram type
5. **Main Component** (`UniversalDiagram`) - Entry point that routes to appropriate diagram component

### Parser Pattern

Each parser transforms DSL text into a data structure:
- `Parsers.markdown(text)` → tree structure for mind maps
- `Parsers.sql(text)` → array of tables for ERD
- `Parsers.architecture(text)` → nodes/edges for architecture diagrams
- `Parsers.flowchart(text)` → nodes/edges for flowcharts
- `Parsers.wireframe(text)` → array of UI elements

### Diagram Types

| Type | Parser | Key DSL Syntax |
|------|--------|----------------|
| `mindmap` | markdown | Indentation-based hierarchy |
| `architecture` | architecture | `[layer] component1, component2` |
| `erd` | sql | SQL CREATE TABLE statements |
| `flowchart` | flowchart | `(type) Label -> (type) Label` |
| `sequence` | sequence | `participant A, B` + `A -> B: message` |
| `wireframe` | wireframe | `{Title}`, `[Button]`, `<Card>...</>` |
| `state` | stateMachine | `State -> State: event` |
| `journey` | userJourney | `[type] Node` + `Node -action-> Node` |

### Component Structure

All diagram components follow this pattern:
```jsx
function DiagramName({ data, theme }) {
  const canvas = useInteractiveCanvas();
  // Parse/layout logic
  return (
    <div ref={canvas.canvasRef} onMouseMove={canvas.handleMouseMove} ...>
      <svg>
        {/* Render edges/connections */}
      </svg>
      <div>
        {/* Render nodes with onMouseDown for dragging */}
      </div>
      <CanvasControls ... />
    </div>
  );
}
```

### Exports

```jsx
// Main component
export { UniversalDiagram }

// Individual diagrams
export { MindMapDiagram, ERDDiagram, ArchitectureDiagram, FlowDiagram, ... }

// Utilities
export { Parsers, THEMES, COLORS }
```

## DSL Syntax Quick Reference

**Mind Map:** Indentation defines hierarchy
```
Root
  Child 1
    Grandchild
  Child 2
```

**Architecture:** Layer brackets + arrow connections
```
[clients] Web, Mobile
[services] API, Auth
Web -> API
```

**Flowchart:** Node types in parens
```
(start) Begin -> (decision) Valid? -> (end) Done
```

**Wireframe:** UI element syntax
```
{Window Title}
[[ Nav | Items ]]
<Card>
  [Button]
</>
```
