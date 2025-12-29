# DDFlow Roadmap

A comprehensive feature roadmap for DDFlow Diagram Engine.

---

## Phase 1: Editor Enhancements (Current Focus)

### 1.1 Export Options
- [~] **PNG Export** - Basic export works, text/icons inside nodes need fixing (use html2canvas)
- [~] **SVG Export** - Exports connections only (diagrams use mixed HTML+SVG)
- [x] **PDF Export** - Document-ready format (via print dialog) ✅
- [~] **Copy to clipboard** - Basic export works, needs html2canvas for full support

### 1.2 Undo/Redo System
- [x] **Action history stack** - Track all changes ✅
- [x] **Undo** (Cmd/Ctrl+Z) - Revert last action ✅
- [x] **Redo** (Cmd/Ctrl+Shift+Z) - Restore undone action ✅
- [ ] **History panel** - Visual list of changes

### 1.3 Save/Load
- [x] **Local storage** - Auto-save to browser storage ✅
- [x] **File export** - Download as .ddflow JSON file ✅
- [x] **File import** - Load .ddflow files ✅
- [x] **Recent files** - Quick access to recent diagrams ✅

### 1.4 Theme System
- [x] **Dark/Light toggle** - Switch between themes ✅
- [ ] **Custom accent colors** - User-defined color scheme
- [ ] **High contrast mode** - Accessibility option

### 1.5 Keyboard Shortcuts
- [x] **Toggle Editor** - Cmd/Ctrl+E ✅
- [x] **Toggle AI Chat** - Cmd/Ctrl+K ✅
- [x] **Export PNG** - Cmd/Ctrl+Shift+P ✅
- [x] **Export SVG** - Cmd/Ctrl+Shift+S ✅
- [x] **Copy to Clipboard** - Cmd/Ctrl+Shift+C ✅
- [x] **Shortcut help modal** - ? key to show shortcuts ✅

---

## Phase 2: Diagram Improvements

### 2.1 Node Editing
- [x] **Inline label editing** - Double-click to edit ✅
- [x] **Multi-select** - Shift+click to select multiple ✅
- [x] **Delete selected** - Delete/Backspace to remove ✅
- [x] **Group selection** - Shift+drag box to select area ✅
- [x] **Copy/Paste nodes** - ⌘C/⌘V to duplicate ✅

### 2.2 Connection Enhancements
- [x] **Click to add labels** - Double-click edges to edit ✅
- [x] **Connection styles** - Solid, dashed, dotted, animated (right-click) ✅
- [x] **Arrow types** - Different arrowhead styles (triangle, open, diamond, circle, none) ✅
- [x] **Curved vs straight** - Toggle connection style (curved, straight, step) ✅
- [x] **Connection routing** - Smart path finding with orthogonal/step paths ✅

### 2.3 Node Customization
- [x] **Color picker** - Custom node colors (right-click) ✅
- [x] **Node resize** - Drag handles on selected nodes ✅
- [x] **Custom icons** - Icon selector with 20 icon options ✅
- [x] **Node shapes** - Rectangle, rounded, circle, diamond, hexagon, pill ✅

### 2.4 Layout Tools
- [x] **Snap to grid** - Magnetic alignment with toggle button ✅
- [x] **Alignment guides** - Visual alignment helpers when dragging ✅
- [x] **Auto-layout** - Automatic arrangement ✅
- [x] **Distribute evenly** - Space nodes uniformly (H/V buttons) ✅

---

## Phase 3: AI Enhancements

### 3.1 Diagram Intelligence
- [ ] **Explain diagram** - AI describes the diagram
- [ ] **Suggest improvements** - AI optimization tips
- [ ] **Validate diagram** - Check for common issues
- [ ] **Generate documentation** - Auto-create docs from diagram

### 3.2 Natural Language Editing
- [ ] **Voice commands** - "Add a database node"
- [ ] **Contextual edits** - "Move Auth Service below API"
- [ ] **Batch operations** - "Color all services blue"

### 3.3 Smart Import
- [ ] **Image to diagram** - Extract from screenshots
- [ ] **Text to diagram** - Parse documentation
- [ ] **Code to diagram** - Generate from codebase

---

## Phase 4: Templates & Library

### 4.1 Template System
- [ ] **Preset templates** - Common diagram patterns
- [ ] **Save as template** - Create custom templates
- [ ] **Template categories** - Organized by type
- [ ] **Quick start gallery** - Visual template browser

### 4.2 Node Library
- [ ] **Sidebar library** - Drag-and-drop nodes
- [ ] **Custom node types** - Create reusable nodes
- [ ] **Icon library** - Built-in icon collection
- [ ] **Import icons** - Upload custom icons

### 4.3 Example Gallery
- [ ] **Sample diagrams** - Browse examples
- [ ] **Community submissions** - Shared diagrams
- [ ] **Use case examples** - Industry-specific samples

---

## Phase 5: Collaboration

### 5.1 Sharing
- [ ] **Share URL** - Encoded diagram in URL
- [ ] **Embed code** - iframe/embed snippets
- [ ] **Social sharing** - Twitter, LinkedIn cards
- [ ] **QR code** - Quick mobile access

### 5.2 Real-time Collaboration
- [ ] **Live cursors** - See other users
- [ ] **Simultaneous editing** - Multi-user support
- [ ] **Change attribution** - Who changed what
- [ ] **Presence indicators** - Who's viewing

### 5.3 Feedback & Review
- [ ] **Comments** - Add notes to diagrams
- [ ] **Annotations** - Draw on diagrams
- [ ] **Version history** - Track changes over time
- [ ] **Compare versions** - Diff view

---

## Phase 6: Integration

### 6.1 Format Support
- [x] **Mermaid import** - Convert from Mermaid ✅
- [x] **Mermaid export** - Convert to Mermaid ✅
- [ ] **PlantUML import** - Support PlantUML syntax
- [ ] **Draw.io import** - Load Draw.io files

### 6.2 Developer Tools
- [ ] **REST API** - Programmatic access
- [ ] **NPM package** - Embed in other apps
- [ ] **VS Code extension** - Edit in IDE
- [ ] **CLI tool** - Generate diagrams from terminal

### 6.3 Third-party Integration
- [ ] **Notion embed** - Notion integration
- [ ] **Confluence** - Atlassian integration
- [ ] **GitHub** - Render in README
- [ ] **Slack** - Share in channels

---

## Technical Improvements

### Performance
- [ ] **Virtual rendering** - Handle large diagrams
- [ ] **Web Workers** - Offload parsing
- [ ] **Lazy loading** - Load diagram types on demand

### Accessibility
- [ ] **Screen reader support** - ARIA labels
- [ ] **Keyboard navigation** - Full keyboard access
- [ ] **Focus indicators** - Clear focus states
- [ ] **Color blind modes** - Alternative palettes

### Mobile
- [ ] **Responsive layout** - Adapt to screen size
- [ ] **Touch gestures** - Pinch, pan, tap
- [ ] **Mobile toolbar** - Touch-friendly controls

---

## Progress Tracking

| Phase | Status | Progress |
|-------|--------|----------|
| Phase 1: Editor | Complete | 95% |
| Phase 2: Diagram | Complete | 100% |
| Phase 3: AI | Planned | 0% |
| Phase 4: Templates | Planned | 0% |
| Phase 5: Collaboration | Planned | 0% |
| Phase 6: Integration | In Progress | 20% |

---

## Next Steps

**Current Focus: Phase 2 - Diagram Improvements**

Completed:
1. ~~Inline label editing~~ ✅ Double-click nodes to edit
2. ~~Multi-select~~ ✅ Shift+click to select multiple
3. ~~Delete selected~~ ✅ Delete/Backspace key
4. ~~Color picker~~ ✅ Right-click for colors
5. ~~Group selection~~ ✅ Shift+drag to box-select
6. ~~Copy/Paste~~ ✅ ⌘C/⌘V to duplicate
7. ~~Connection labels~~ ✅ Double-click edges to edit
8. ~~Connection styles~~ ✅ Right-click edges for solid/dashed/dotted
9. ~~Snap to grid~~ ✅ Toggle button in canvas controls
10. ~~Node resize~~ ✅ Drag handles on selected nodes
11. ~~Auto-layout~~ ✅ Layout button arranges nodes hierarchically

Next priority:
1. Alignment guides - Visual helpers
2. Arrow types - Different arrowhead styles
3. Distribute evenly - Space nodes uniformly

---

*Last updated: December 2025*
