# Contributing to Diagram Engine

Thank you for your interest in contributing to the Universal Diagram Engine! This document provides guidelines and instructions for contributing.

## 🚀 Quick Start

```bash
# Fork and clone the repo
git clone https://github.com/YOUR_USERNAME/diagram-engine
cd diagram-engine

# Install dependencies
npm install

# Start development
npm run dev

# Run playground
npm run playground
```

## 📁 Project Structure

```
diagram-engine/
├── src/
│   ├── index.ts              # Main exports
│   ├── types.ts              # TypeScript definitions
│   ├── constants.ts          # Colors, themes, config
│   ├── parsers/              # DSL parsers
│   │   ├── index.ts
│   │   ├── markdown.ts       # Mind map parser
│   │   ├── sql.ts            # ERD parser
│   │   └── ...
│   ├── components/           # React components
│   │   ├── UniversalDiagram.tsx
│   │   ├── diagrams/
│   │   │   ├── MindMap.tsx
│   │   │   ├── Flowchart.tsx
│   │   │   └── ...
│   │   └── ui/
│   │       ├── CanvasControls.tsx
│   │       └── ...
│   ├── hooks/                # React hooks
│   │   ├── useInteractiveCanvas.ts
│   │   └── useDraggable.ts
│   └── utils/                # Utilities
│       ├── layout.ts
│       └── export.ts
├── playground/               # Demo site
├── docs/                     # Documentation
├── tests/                    # Unit tests
└── examples/                 # Example projects
```

## 🔧 Development Workflow

### 1. Pick an Issue

- Check [existing issues](https://github.com/sdlc-dev/diagram-engine/issues)
- Look for `good first issue` or `help wanted` labels
- Comment on the issue to claim it

### 2. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-description
```

### 3. Make Changes

- Follow the coding style (enforced by ESLint/Prettier)
- Add tests for new features
- Update documentation if needed

### 4. Test Your Changes

```bash
# Run tests
npm test

# Type checking
npm run typecheck

# Linting
npm run lint

# Build
npm run build
```

### 5. Submit a Pull Request

- Fill out the PR template
- Link to related issues
- Request review from maintainers

## 📝 Coding Standards

### TypeScript

- Use explicit types (avoid `any`)
- Export types from `types.ts`
- Use interfaces for object shapes
- Use type aliases for unions

```typescript
// Good
interface NodeProps {
  id: string;
  label: string;
  position: Position;
}

// Avoid
const props: any = { ... };
```

### React Components

- Use functional components with hooks
- Extract reusable logic into hooks
- Use `memo` for expensive renders
- Keep components focused and small

```typescript
// Good
export const DiagramNode = memo(function DiagramNode({ 
  node, 
  onDrag 
}: DiagramNodeProps) {
  // ...
});

// Avoid class components
```

### Parsers

- Return strongly-typed data
- Handle edge cases gracefully
- Include helpful error messages
- Write comprehensive tests

```typescript
// Good
export function parseMarkdown(text: string): MindMapNode {
  if (!text.trim()) {
    return { id: 'root', label: 'Empty', children: [] };
  }
  // ...
}
```

### CSS/Styling

- Use inline styles (for library portability)
- Use CSS variables for theming
- Avoid `!important`
- Keep styles co-located with components

## 🧪 Testing

### Unit Tests

```typescript
// tests/parsers/markdown.test.ts
import { describe, it, expect } from 'vitest';
import { parseMarkdown } from '@/parsers/markdown';

describe('parseMarkdown', () => {
  it('parses simple hierarchy', () => {
    const input = `Parent\n  Child`;
    const result = parseMarkdown(input);
    
    expect(result.label).toBe('Parent');
    expect(result.children).toHaveLength(1);
    expect(result.children[0].label).toBe('Child');
  });
  
  it('handles empty input', () => {
    const result = parseMarkdown('');
    expect(result.label).toBe('Empty');
  });
});
```

### Component Tests

```typescript
// tests/components/MindMap.test.tsx
import { render, screen } from '@testing-library/react';
import { MindMapDiagram } from '@/components/diagrams/MindMap';

describe('MindMapDiagram', () => {
  it('renders nodes', () => {
    const data = {
      id: 'root',
      label: 'Test',
      children: []
    };
    
    render(<MindMapDiagram data={data} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

## 📚 Documentation

### Adding New Diagram Type

1. **Create parser** in `src/parsers/`
2. **Create component** in `src/components/diagrams/`
3. **Add types** in `src/types.ts`
4. **Update exports** in `src/index.ts`
5. **Add demo** in playground
6. **Document DSL** in `docs/DSL_EXAMPLES.md`
7. **Write tests** in `tests/`

### Updating README

- Keep examples minimal and clear
- Test all code snippets
- Update feature list if needed

## 🐛 Bug Reports

Include:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Browser/Node version
- Minimal reproduction (CodeSandbox/StackBlitz)

## ✨ Feature Requests

Include:
- Use case description
- Proposed API/DSL syntax
- Mock-ups if visual
- Willingness to implement

## 📋 Pull Request Checklist

- [ ] Code follows project style
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] Types are correct
- [ ] No console logs
- [ ] No `any` types
- [ ] Builds successfully
- [ ] All tests pass

## 🏷️ Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add pie chart diagram type
fix: correct edge rendering in flowchart
docs: update wireframe DSL examples
refactor: extract canvas hook
test: add parser unit tests
chore: update dependencies
```

## 📞 Getting Help

- [GitHub Discussions](https://github.com/sdlc-dev/diagram-engine/discussions)
- [Discord Community](https://discord.gg/sdlc)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/diagram-engine)

## 🙏 Thank You!

Every contribution matters - code, documentation, bug reports, or feature ideas. Thank you for helping make Diagram Engine better!
