import React, { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import AIChatPanel from './components/AIChatPanel.jsx';
import TemplateGallery from './components/TemplateGallery.jsx';
import SaveTemplateModal from './components/SaveTemplateModal.jsx';
import DropdownMenu from './components/DropdownMenu.jsx';
import DiagramTypeSelector from './components/DiagramTypeSelector.jsx';
import NodeLibrarySidebar from './components/NodeLibrarySidebar.jsx';
import ColorSettingsPanel from './components/ColorSettingsPanel.jsx';
import ImageImportModal from './components/ImageImportModal.jsx';
import PlantUMLImportModal from './components/PlantUMLImportModal.jsx';
import PlantUMLExportModal from './components/PlantUMLExportModal.jsx';
import { exportAsPNG, exportAsSVG, copyToClipboard, exportAsPDF } from './services/exportService.js';
import { explainDiagram, suggestImprovements, validateDiagram, isAIConfigured } from './services/aiService.js';
import { useKeyboardShortcuts, getShortcutsByCategory, formatShortcutKey, SHORTCUTS } from './hooks/useKeyboardShortcuts.js';
import { getCurrentDiagram, saveCurrentDiagram, exportAsFile, importFromFile, getRecentFiles, removeFromRecentFiles, formatDate, isAutoSaveEnabled, setAutoSaveEnabled, getColorSettings, saveColorSettings, DEFAULT_COLOR_SETTINGS } from './services/storageService.js';
import { mermaidToDDFlow, ddflowToMermaid, downloadMermaidFile, copyMermaidToClipboard, detectMermaidType } from './services/mermaidService.js';
import useUndoRedo from './hooks/useUndoRedo.js';

// Simple debounce utility
function debounce(fn, delay) {
  let timer = null;
  const debounced = (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
  debounced.cancel = () => { if (timer) clearTimeout(timer); };
  return debounced;
}

// ============================================
// UNIVERSAL DIAGRAM ENGINE v8
// All nodes draggable + unified interactions
// ============================================

const THEMES = {
  dark: {
    name: 'dark',
    background: 'linear-gradient(135deg, #0a0a0f, #1a1a2e, #0f0f1a)',
    canvasBg: 'rgba(0,0,0,0.4)',
    gridColor: 'rgba(124,58,237,0.04)',
    textPrimary: '#ffffff',
    textSecondary: '#888888',
    textMuted: '#555555',
    border: 'rgba(255,255,255,0.1)',
    surface: 'rgba(15, 23, 42, 0.95)',
    headerBg: 'transparent',
    toolbarBg: 'transparent',
    editorBg: 'rgba(0,0,0,0.3)',
    editorText: '#a78bfa',
    buttonBg: 'rgba(255,255,255,0.05)',
    buttonActiveBg: 'rgba(124,58,237,0.3)',
    modalBg: 'linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))',
    inputBg: 'rgba(0,0,0,0.3)',
    logoGradient: 'linear-gradient(135deg, #fff, #a78bfa)',
  },
  light: {
    name: 'light',
    background: 'linear-gradient(135deg, #f8fafc, #e2e8f0, #f1f5f9)',
    canvasBg: 'rgba(255,255,255,0.7)',
    gridColor: 'rgba(124,58,237,0.08)',
    textPrimary: '#1e293b',
    textSecondary: '#64748b',
    textMuted: '#94a3b8',
    border: 'rgba(0,0,0,0.1)',
    surface: 'rgba(255, 255, 255, 0.95)',
    headerBg: 'rgba(255,255,255,0.8)',
    toolbarBg: 'rgba(255,255,255,0.6)',
    editorBg: 'rgba(255,255,255,0.95)',
    editorText: '#7c3aed',
    buttonBg: 'rgba(0,0,0,0.05)',
    buttonActiveBg: 'rgba(124,58,237,0.2)',
    modalBg: 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(241,245,249,0.98))',
    inputBg: 'rgba(255,255,255,0.9)',
    logoGradient: 'linear-gradient(135deg, #1e293b, #7c3aed)',
  }
};

// Theme persistence helpers
const THEME_STORAGE_KEY = 'ddflow_theme';
function getSavedTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) || 'dark';
  } catch { return 'dark'; }
}
function saveTheme(theme) {
  try { localStorage.setItem(THEME_STORAGE_KEY, theme); } catch {}
}

const COLORS = {
  purple: '#7C3AED', blue: '#0EA5E9', green: '#10B981', orange: '#F59E0B',
  pink: '#EC4899', red: '#EF4444', cyan: '#06B6D4', violet: '#8B5CF6',
  teal: '#14B8A6', amber: '#D97706', indigo: '#6366F1', rose: '#F43F5E',
  emerald: '#059669', sky: '#0284C7', fuchsia: '#D946EF', lime: '#84CC16',
  slate: '#64748B', zinc: '#71717A', yellow: '#EAB308'
};

const BRANCH_COLORS = [COLORS.purple, COLORS.blue, COLORS.green, COLORS.orange, COLORS.pink, COLORS.cyan, COLORS.violet, COLORS.teal];

// ============================================
// VISUAL STYLING HELPERS
// ============================================

// Generate gradient background for nodes
const getNodeGradient = (color) => {
  return `linear-gradient(135deg, ${color}38, ${color}15)`;
};

// Generate layered shadow for nodes based on state
const getNodeShadow = (nodeColor, isDragging, isSelected) => {
  if (isDragging) {
    return `0 0 0 2px ${nodeColor}, 0 12px 28px ${nodeColor}50, 0 20px 40px rgba(0,0,0,0.25)`;
  }
  if (isSelected) {
    return `0 0 0 3px rgba(124,58,237,0.7), 0 8px 24px rgba(124,58,237,0.35), 0 16px 32px ${nodeColor}25`;
  }
  return `0 2px 4px rgba(0,0,0,0.08), 0 8px 20px ${nodeColor}25, 0 16px 40px ${nodeColor}12`;
};

// Generate smooth cubic bezier path for connections
const getCurvedPath = (sx, sy, tx, ty) => {
  const dx = tx - sx;
  const dy = ty - sy;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const curvature = Math.min(dist * 0.25, 60);

  // Horizontal-ish connections: curve horizontally
  if (Math.abs(dx) > Math.abs(dy)) {
    const dir = dx > 0 ? 1 : -1;
    return `M ${sx} ${sy} C ${sx + curvature * dir} ${sy}, ${tx - curvature * dir} ${ty}, ${tx} ${ty}`;
  }

  // Vertical-ish connections: curve vertically
  const dir = dy > 0 ? 1 : -1;
  return `M ${sx} ${sy} C ${sx} ${sy + curvature * dir}, ${tx} ${ty - curvature * dir}, ${tx} ${ty}`;
};

// ============================================
// UNIFIED CANVAS HOOK WITH DRAGGING
// ============================================

function useInteractiveCanvas(initialPan = { x: 50, y: 50 }) {
  const canvasRef = useRef(null);
  const [pan, setPan] = useState(initialPan);
  const [zoom, setZoom] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });

  // Node dragging state
  const [positions, setPositions] = useState({});
  const [dragging, setDragging] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Snap to grid state
  const [snapToGrid, setSnapToGrid] = useState(true);
  const GRID_SIZE = 25;

  // Snap a value to the nearest grid point
  const snapToGridValue = useCallback((value) => {
    if (!snapToGrid) return value;
    return Math.round(value / GRID_SIZE) * GRID_SIZE;
  }, [snapToGrid, GRID_SIZE]);

  // Multi-select state
  const [selectedNodes, setSelectedNodes] = useState(new Set());

  // Inline editing state
  const [editingNode, setEditingNode] = useState(null);
  const [editValue, setEditValue] = useState('');

  // Node colors state
  const [nodeColors, setNodeColors] = useState({});

  // Node icons state
  const [nodeIcons, setNodeIcons] = useState({});

  // Node shapes state
  const [nodeShapes, setNodeShapes] = useState({});

  // Node sizes state (for resize)
  const [nodeSizes, setNodeSizes] = useState({});
  const DEFAULT_NODE_SIZE = { width: 130, height: 60 };
  const MIN_NODE_SIZE = { width: 80, height: 40 };
  const MAX_NODE_SIZE = { width: 300, height: 200 };

  // Resize state
  const [resizing, setResizing] = useState(null); // { nodeId, handle, startX, startY, startWidth, startHeight }

  // Context menu state
  const [contextMenu, setContextMenu] = useState(null);

  // Clipboard state for copy/paste
  const [clipboard, setClipboard] = useState(null);

  // Drag-box selection state
  const [selectionBox, setSelectionBox] = useState(null);
  const [isSelecting, setIsSelecting] = useState(false);

  // Edge/Connection editing state
  const [editingEdge, setEditingEdge] = useState(null);
  const [edgeEditValue, setEdgeEditValue] = useState('');

  // Connection drawing state (drag from node to node)
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionStart, setConnectionStart] = useState(null); // { nodeId, x, y }
  const [connectionEnd, setConnectionEnd] = useState(null); // { x, y } - mouse position
  const [connectionTarget, setConnectionTarget] = useState(null); // nodeId being hovered

  // Edge styles state (solid, dashed, dotted, animated)
  const [edgeStyles, setEdgeStyles] = useState({});

  // Edge arrow types state (triangle, open, diamond, circle, none)
  const [edgeArrowTypes, setEdgeArrowTypes] = useState({});

  // Edge path types state (curved or straight)
  const [edgePathTypes, setEdgePathTypes] = useState({});

  // Edge context menu state
  const [edgeContextMenu, setEdgeContextMenu] = useState(null);

  // Alignment guides state (shown when dragging nodes)
  const [alignmentGuides, setAlignmentGuides] = useState({ horizontal: [], vertical: [] });
  const ALIGNMENT_THRESHOLD = 5; // pixels threshold for snapping

  // Touch state for pinch-to-zoom
  const lastTouchDistance = useRef(null);
  const lastTouchCenter = useRef(null);

  const getCanvasPoint = useCallback((clientX, clientY) => {
    if (!canvasRef.current) return { x: 0, y: 0 };
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: (clientX - rect.left - pan.x) / zoom,
      y: (clientY - rect.top - pan.y) / zoom
    };
  }, [pan, zoom]);

  // Mouse handlers
  const handleCanvasMouseDown = useCallback((e) => {
    if (e.target === canvasRef.current || e.target.classList.contains('canvas-bg')) {
      // Shift+drag for selection box, otherwise pan
      if (e.shiftKey) {
        const point = getCanvasPoint(e.clientX, e.clientY);
        setIsSelecting(true);
        setSelectionBox({ startX: point.x, startY: point.y, endX: point.x, endY: point.y });
      } else {
        setIsPanning(true);
        setPanStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
      }
    }
  }, [pan, getCanvasPoint]);

  const handleNodeMouseDown = useCallback((e, nodeId, nodeX, nodeY) => {
    e.stopPropagation();
    // Close context menu if open
    setContextMenu(null);

    // Multi-select with Shift+click
    if (e.shiftKey) {
      setSelectedNodes(prev => {
        const newSet = new Set(prev);
        if (newSet.has(nodeId)) {
          newSet.delete(nodeId);
        } else {
          newSet.add(nodeId);
        }
        return newSet;
      });
      return; // Don't start dragging on shift-click
    }

    // Regular click - clear selection and select only this node
    setSelectedNodes(new Set([nodeId]));
    setDragging(nodeId);
    const point = getCanvasPoint(e.clientX, e.clientY);
    setDragOffset({ x: point.x - nodeX, y: point.y - nodeY });
  }, [getCanvasPoint]);

  // Double-click to edit node label
  const handleNodeDoubleClick = useCallback((e, nodeId, currentLabel) => {
    e.stopPropagation();
    setEditingNode(nodeId);
    setEditValue(currentLabel || '');
    setSelectedNodes(new Set([nodeId]));
  }, []);

  // Finish editing (called on Enter or blur)
  const finishEditing = useCallback(() => {
    const result = { nodeId: editingNode, newValue: editValue };
    setEditingNode(null);
    setEditValue('');
    return result;
  }, [editingNode, editValue]);

  // Cancel editing (called on Escape)
  const cancelEditing = useCallback(() => {
    setEditingNode(null);
    setEditValue('');
  }, []);

  // Context menu handler (right-click)
  const handleNodeContextMenu = useCallback((e, nodeId) => {
    e.preventDefault();
    e.stopPropagation();
    setContextMenu({
      nodeId,
      x: e.clientX,
      y: e.clientY
    });
    // Also select the node
    if (!selectedNodes.has(nodeId)) {
      setSelectedNodes(new Set([nodeId]));
    }
  }, [selectedNodes]);

  // Close context menu
  const closeContextMenu = useCallback(() => {
    setContextMenu(null);
  }, []);

  // Set node color
  const setNodeColor = useCallback((nodeId, color) => {
    setNodeColors(prev => ({
      ...prev,
      [nodeId]: color
    }));
    setContextMenu(null);
  }, []);

  // Set node icon
  const setNodeIcon = useCallback((nodeId, icon) => {
    setNodeIcons(prev => ({
      ...prev,
      [nodeId]: icon
    }));
  }, []);

  // Set node shape
  const setNodeShape = useCallback((nodeId, shape) => {
    setNodeShapes(prev => ({
      ...prev,
      [nodeId]: shape
    }));
  }, []);

  // Clear selection
  const clearSelection = useCallback(() => {
    setSelectedNodes(new Set());
  }, []);

  // Copy selected nodes to clipboard
  const copySelectedNodes = useCallback((nodes) => {
    if (selectedNodes.size === 0 || !nodes) return;
    const nodesToCopy = nodes.filter(n => selectedNodes.has(n.id));
    if (nodesToCopy.length === 0) return;
    // Store nodes with their positions
    const clipboardData = nodesToCopy.map(n => ({
      ...n,
      copiedX: positions[n.id]?.x ?? n.x,
      copiedY: positions[n.id]?.y ?? n.y,
    }));
    setClipboard(clipboardData);
    return clipboardData;
  }, [selectedNodes, positions]);

  // Paste nodes from clipboard (returns DSL snippet to add)
  const pasteNodes = useCallback(() => {
    if (!clipboard || clipboard.length === 0) return null;
    // Offset pasted nodes slightly
    const offset = 30;
    return clipboard.map(n => ({
      ...n,
      id: `${n.id}_copy_${Date.now()}`,
      x: n.copiedX + offset,
      y: n.copiedY + offset,
      label: n.label,
    }));
  }, [clipboard]);

  // Edge double-click to edit label
  const handleEdgeDoubleClick = useCallback((e, edgeId, currentLabel) => {
    e.stopPropagation();
    setEditingEdge(edgeId);
    setEdgeEditValue(currentLabel || '');
  }, []);

  // Finish edge editing
  const finishEdgeEditing = useCallback(() => {
    const result = { edgeId: editingEdge, newValue: edgeEditValue };
    setEditingEdge(null);
    setEdgeEditValue('');
    return result;
  }, [editingEdge, edgeEditValue]);

  // Cancel edge editing
  const cancelEdgeEditing = useCallback(() => {
    setEditingEdge(null);
    setEdgeEditValue('');
  }, []);

  // Edge context menu handler (right-click on edge)
  const handleEdgeContextMenu = useCallback((e, edgeId) => {
    e.preventDefault();
    e.stopPropagation();
    setEdgeContextMenu({
      edgeId,
      x: e.clientX,
      y: e.clientY
    });
  }, []);

  // Close edge context menu
  const closeEdgeContextMenu = useCallback(() => {
    setEdgeContextMenu(null);
  }, []);

  // Set edge style
  const setEdgeStyle = useCallback((edgeId, style) => {
    setEdgeStyles(prev => ({
      ...prev,
      [edgeId]: style
    }));
  }, []);

  // Set edge arrow type
  const setEdgeArrowType = useCallback((edgeId, arrowType) => {
    setEdgeArrowTypes(prev => ({
      ...prev,
      [edgeId]: arrowType
    }));
    setEdgeContextMenu(null);
  }, []);

  // Set edge path type (curved or straight)
  const setEdgePathType = useCallback((edgeId, pathType) => {
    setEdgePathTypes(prev => ({
      ...prev,
      [edgeId]: pathType
    }));
  }, []);

  // Get node size (custom or default)
  const getNodeSize = useCallback((nodeId) => {
    return nodeSizes[nodeId] || DEFAULT_NODE_SIZE;
  }, [nodeSizes]);

  // Start resizing a node
  const handleResizeStart = useCallback((e, nodeId, handle) => {
    e.stopPropagation();
    e.preventDefault();
    const size = nodeSizes[nodeId] || DEFAULT_NODE_SIZE;
    setResizing({
      nodeId,
      handle, // 'se' (southeast), 'e' (east), 's' (south)
      startX: e.clientX,
      startY: e.clientY,
      startWidth: size.width,
      startHeight: size.height
    });
  }, [nodeSizes]);

  // Handle resize during mouse move (called from handleMouseMove)
  const updateResize = useCallback((clientX, clientY) => {
    if (!resizing) return;
    const dx = (clientX - resizing.startX) / zoom;
    const dy = (clientY - resizing.startY) / zoom;
    let newWidth = resizing.startWidth;
    let newHeight = resizing.startHeight;

    if (resizing.handle.includes('e')) {
      newWidth = Math.max(MIN_NODE_SIZE.width, Math.min(MAX_NODE_SIZE.width, resizing.startWidth + dx));
    }
    if (resizing.handle.includes('s')) {
      newHeight = Math.max(MIN_NODE_SIZE.height, Math.min(MAX_NODE_SIZE.height, resizing.startHeight + dy));
    }

    // Snap to grid if enabled
    if (snapToGrid) {
      newWidth = Math.round(newWidth / GRID_SIZE) * GRID_SIZE;
      newHeight = Math.round(newHeight / GRID_SIZE) * GRID_SIZE;
      newWidth = Math.max(MIN_NODE_SIZE.width, newWidth);
      newHeight = Math.max(MIN_NODE_SIZE.height, newHeight);
    }

    setNodeSizes(prev => ({
      ...prev,
      [resizing.nodeId]: { width: newWidth, height: newHeight }
    }));
  }, [resizing, zoom, snapToGrid, GRID_SIZE]);

  // End resizing
  const handleResizeEnd = useCallback(() => {
    setResizing(null);
  }, []);

  // Start drawing a connection from a node's port
  const handlePortMouseDown = useCallback((e, nodeId, portX, portY) => {
    e.stopPropagation();
    e.preventDefault();
    setIsConnecting(true);
    setConnectionStart({ nodeId, x: portX, y: portY });
    setConnectionEnd({ x: portX, y: portY });
  }, []);

  // Cancel connection drawing
  const cancelConnection = useCallback(() => {
    setIsConnecting(false);
    setConnectionStart(null);
    setConnectionEnd(null);
    setConnectionTarget(null);
  }, []);

  // Set the target node when hovering during connection
  const setConnectionTargetNode = useCallback((nodeId) => {
    if (isConnecting && connectionStart && connectionStart.nodeId !== nodeId) {
      setConnectionTarget(nodeId);
    }
  }, [isConnecting, connectionStart]);

  // Clear target when leaving node
  const clearConnectionTarget = useCallback(() => {
    setConnectionTarget(null);
  }, []);

  // Get nodes within selection box
  const getNodesInSelectionBox = useCallback((nodes, box) => {
    if (!box || !nodes) return [];
    const minX = Math.min(box.startX, box.endX);
    const maxX = Math.max(box.startX, box.endX);
    const minY = Math.min(box.startY, box.endY);
    const maxY = Math.max(box.startY, box.endY);

    return nodes.filter(n => {
      const pos = positions[n.id] || { x: n.x, y: n.y };
      return pos.x >= minX && pos.x <= maxX && pos.y >= minY && pos.y <= maxY;
    }).map(n => n.id);
  }, [positions]);

  const handleMouseMove = useCallback((e) => {
    if (isPanning) {
      setPan({ x: e.clientX - panStart.x, y: e.clientY - panStart.y });
    } else if (resizing) {
      updateResize(e.clientX, e.clientY);
    } else if (isConnecting) {
      const point = getCanvasPoint(e.clientX, e.clientY);
      setConnectionEnd({ x: point.x, y: point.y });
    } else if (isSelecting && selectionBox) {
      const point = getCanvasPoint(e.clientX, e.clientY);
      setSelectionBox(prev => ({ ...prev, endX: point.x, endY: point.y }));
    } else if (dragging) {
      const point = getCanvasPoint(e.clientX, e.clientY);
      let newX = point.x - dragOffset.x;
      let newY = point.y - dragOffset.y;

      // Apply grid snapping first
      newX = snapToGridValue(newX);
      newY = snapToGridValue(newY);

      setPositions(prev => ({
        ...prev,
        [dragging]: { x: newX, y: newY }
      }));
    } else {
      // Clear alignment guides when not dragging
      if (alignmentGuides.horizontal.length > 0 || alignmentGuides.vertical.length > 0) {
        setAlignmentGuides({ horizontal: [], vertical: [] });
      }
    }
  }, [isPanning, panStart, resizing, updateResize, isConnecting, isSelecting, selectionBox, dragging, dragOffset, getCanvasPoint, snapToGridValue, alignmentGuides]);

  // Update alignment guides based on current drag position and other nodes
  const updateAlignmentGuides = useCallback((draggedNodeId, draggedPos, allNodes, getNodePos) => {
    if (!draggedNodeId || !draggedPos) {
      setAlignmentGuides({ horizontal: [], vertical: [] });
      return;
    }

    const horizontal = [];
    const vertical = [];

    allNodes.forEach(node => {
      if (node.id === draggedNodeId) return;

      const nodePos = getNodePos(node);

      // Check horizontal alignment (same y)
      if (Math.abs(nodePos.y - draggedPos.y) < ALIGNMENT_THRESHOLD) {
        horizontal.push({ y: nodePos.y, fromX: Math.min(nodePos.x, draggedPos.x) - 50, toX: Math.max(nodePos.x, draggedPos.x) + 200 });
      }

      // Check vertical alignment (same x)
      if (Math.abs(nodePos.x - draggedPos.x) < ALIGNMENT_THRESHOLD) {
        vertical.push({ x: nodePos.x, fromY: Math.min(nodePos.y, draggedPos.y) - 50, toY: Math.max(nodePos.y, draggedPos.y) + 100 });
      }
    });

    setAlignmentGuides({ horizontal, vertical });
  }, [ALIGNMENT_THRESHOLD]);

  // Complete connection on mouse up - returns connection info if valid
  const handleMouseUp = useCallback(() => {
    // Clear alignment guides
    setAlignmentGuides({ horizontal: [], vertical: [] });

    // Check if we completed a valid connection
    let completedConnection = null;
    if (isConnecting && connectionStart && connectionTarget) {
      completedConnection = {
        source: connectionStart.nodeId,
        target: connectionTarget
      };
    }

    setIsPanning(false);
    setDragging(null);
    setResizing(null); // End resize
    setIsSelecting(false);
    setSelectionBox(null);
    setIsConnecting(false);
    setConnectionStart(null);
    setConnectionEnd(null);
    setConnectionTarget(null);

    return completedConnection;
  }, [isConnecting, connectionStart, connectionTarget]);

  // Touch handlers
  const getTouchDistance = (touches) => {
    if (touches.length < 2) return null;
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const getTouchCenter = (touches) => {
    if (touches.length < 2) return { x: touches[0].clientX, y: touches[0].clientY };
    return {
      x: (touches[0].clientX + touches[1].clientX) / 2,
      y: (touches[0].clientY + touches[1].clientY) / 2
    };
  };

  const handleTouchStart = useCallback((e) => {
    if (e.touches.length === 2) {
      // Pinch gesture start
      e.preventDefault();
      lastTouchDistance.current = getTouchDistance(e.touches);
      lastTouchCenter.current = getTouchCenter(e.touches);
    } else if (e.touches.length === 1) {
      // Single touch - check if on canvas for panning
      const touch = e.touches[0];
      if (e.target === canvasRef.current || e.target.classList.contains('canvas-bg')) {
        setIsPanning(true);
        setPanStart({ x: touch.clientX - pan.x, y: touch.clientY - pan.y });
      }
    }
  }, [pan]);

  const handleNodeTouchStart = useCallback((e, nodeId, nodeX, nodeY) => {
    e.stopPropagation();
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      setDragging(nodeId);
      const point = getCanvasPoint(touch.clientX, touch.clientY);
      setDragOffset({ x: point.x - nodeX, y: point.y - nodeY });
    }
  }, [getCanvasPoint]);

  const handleTouchMove = useCallback((e) => {
    if (e.touches.length === 2) {
      // Pinch to zoom
      e.preventDefault();
      const newDistance = getTouchDistance(e.touches);
      const newCenter = getTouchCenter(e.touches);

      if (lastTouchDistance.current && newDistance) {
        const scale = newDistance / lastTouchDistance.current;
        setZoom(z => Math.min(Math.max(z * scale, 0.2), 3));
      }

      if (lastTouchCenter.current) {
        const dx = newCenter.x - lastTouchCenter.current.x;
        const dy = newCenter.y - lastTouchCenter.current.y;
        setPan(p => ({ x: p.x + dx, y: p.y + dy }));
      }

      lastTouchDistance.current = newDistance;
      lastTouchCenter.current = newCenter;
    } else if (e.touches.length === 1) {
      const touch = e.touches[0];
      if (isPanning) {
        setPan({ x: touch.clientX - panStart.x, y: touch.clientY - panStart.y });
      } else if (dragging) {
        e.preventDefault();
        const point = getCanvasPoint(touch.clientX, touch.clientY);
        setPositions(prev => ({
          ...prev,
          [dragging]: { x: point.x - dragOffset.x, y: point.y - dragOffset.y }
        }));
      }
    }
  }, [isPanning, panStart, dragging, dragOffset, getCanvasPoint]);

  const handleTouchEnd = useCallback(() => {
    setIsPanning(false);
    setDragging(null);
    lastTouchDistance.current = null;
    lastTouchCenter.current = null;
  }, []);

  const handleWheel = useCallback((e) => {
    e.preventDefault();
    const zoomSpeed = 0.002;
    const delta = 1 - e.deltaY * zoomSpeed;
    setZoom(z => Math.min(Math.max(z * delta, 0.2), 3));
  }, []);

  const resetView = useCallback(() => {
    setPan(initialPan);
    setZoom(1);
    setPositions({});
  }, [initialPan]);

  // Fit content to view
  const fitToView = useCallback((contentBounds) => {
    if (!canvasRef.current || !contentBounds) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const padding = 60;

    const scaleX = (rect.width - padding * 2) / contentBounds.width;
    const scaleY = (rect.height - padding * 2) / contentBounds.height;
    const newZoom = Math.min(Math.max(Math.min(scaleX, scaleY), 0.3), 1.5);

    const centerX = contentBounds.x + contentBounds.width / 2;
    const centerY = contentBounds.y + contentBounds.height / 2;

    setPan({
      x: rect.width / 2 - centerX * newZoom,
      y: rect.height / 2 - centerY * newZoom
    });
    setZoom(newZoom);
  }, []);

  const getNodePosition = useCallback((nodeId, defaultX, defaultY) => {
    const pos = positions[nodeId];
    return pos ? { x: pos.x, y: pos.y } : { x: defaultX, y: defaultY };
  }, [positions]);

  return {
    canvasRef,
    pan,
    setPan,
    zoom,
    setZoom,
    isPanning,
    dragging,
    positions,
    // Multi-select
    selectedNodes,
    setSelectedNodes,
    clearSelection,
    // Inline editing
    editingNode,
    editValue,
    setEditValue,
    handleNodeDoubleClick,
    finishEditing,
    cancelEditing,
    // Node colors
    nodeColors,
    setNodeColor,
    nodeIcons,
    setNodeIcon,
    nodeShapes,
    setNodeShape,
    // Node sizes (resize)
    nodeSizes,
    getNodeSize,
    resizing,
    handleResizeStart,
    // Context menu
    contextMenu,
    handleNodeContextMenu,
    closeContextMenu,
    // Clipboard (copy/paste)
    clipboard,
    copySelectedNodes,
    pasteNodes,
    // Selection box (drag to select)
    selectionBox,
    isSelecting,
    getNodesInSelectionBox,
    // Edge editing
    editingEdge,
    edgeEditValue,
    setEdgeEditValue,
    handleEdgeDoubleClick,
    finishEdgeEditing,
    cancelEdgeEditing,
    // Edge styles and context menu
    edgeStyles,
    setEdgeStyle,
    edgeArrowTypes,
    setEdgeArrowType,
    edgePathTypes,
    setEdgePathType,
    edgeContextMenu,
    handleEdgeContextMenu,
    closeEdgeContextMenu,
    // Connection drawing (drag from node to node)
    isConnecting,
    connectionStart,
    connectionEnd,
    connectionTarget,
    handlePortMouseDown,
    cancelConnection,
    setConnectionTargetNode,
    clearConnectionTarget,
    // Snap to grid
    snapToGrid,
    setSnapToGrid,
    // Alignment guides
    alignmentGuides,
    updateAlignmentGuides,
    // Existing handlers
    handleCanvasMouseDown,
    handleNodeMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchStart,
    handleNodeTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleWheel,
    resetView,
    fitToView,
    getNodePosition,
    setPositions
  };
}

// ============================================
// CANVAS CONTROLS
// ============================================

function CanvasControls({ onZoomIn, onZoomOut, onFit, onReset, zoom, snapToGrid, onToggleSnap, onAutoLayout }) {
  return (
    <>
      <div style={{ position: 'absolute', bottom: 12, left: 12, display: 'flex', gap: 6, zIndex: 100 }}>
        {[{ l: '+', a: onZoomIn }, { l: '−', a: onZoomOut }, { l: 'Fit', a: onFit }, { l: 'Reset', a: onReset }].map(b => (
          <button key={b.l} onClick={b.a} style={{ minWidth: b.l.length > 1 ? 'auto' : 36, height: 36, padding: b.l.length > 1 ? '0 12px' : 0, background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, color: '#fff', fontSize: b.l.length > 1 ? '0.75rem' : '1.2rem', cursor: 'pointer' }}>{b.l}</button>
        ))}
        {onToggleSnap && (
          <button
            onClick={onToggleSnap}
            title={snapToGrid ? 'Snap to grid: ON' : 'Snap to grid: OFF'}
            style={{
              minWidth: 36,
              height: 36,
              padding: '0 10px',
              background: snapToGrid ? 'rgba(124,58,237,0.5)' : 'rgba(0,0,0,0.7)',
              border: `1px solid ${snapToGrid ? COLORS.purple : 'rgba(255,255,255,0.2)'}`,
              borderRadius: 8,
              color: '#fff',
              fontSize: '0.75rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 4
            }}
          >
            <span style={{ fontSize: '1rem' }}>⊞</span>
            <span>{snapToGrid ? 'ON' : 'OFF'}</span>
          </button>
        )}
        {onAutoLayout && (
          <button
            onClick={onAutoLayout}
            title="Auto-layout: Arrange nodes automatically"
            style={{
              minWidth: 36,
              height: 36,
              padding: '0 10px',
              background: 'rgba(0,0,0,0.7)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 8,
              color: '#fff',
              fontSize: '0.75rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 4
            }}
          >
            <span style={{ fontSize: '1rem' }}>⚡</span>
            <span>Layout</span>
          </button>
        )}
      </div>
      <div style={{ position: 'absolute', bottom: 12, right: 12, background: 'rgba(0,0,0,0.7)', borderRadius: 6, padding: '4px 10px', color: '#888', fontSize: '0.7rem', zIndex: 100 }}>{Math.round(zoom * 100)}%</div>
      <div style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(0,0,0,0.6)', borderRadius: 6, padding: '6px 10px', color: '#666', fontSize: '0.65rem', zIndex: 100 }}>
        Drag nodes • Drag port to connect • Double-click to edit • Right-click for styles • Shift+drag to select
      </div>
    </>
  );
}

// ============================================
// COLOR PALETTE FOR NODE COLORS
// ============================================

const NODE_COLOR_PALETTE = [
  { name: 'Purple', color: COLORS.purple },
  { name: 'Blue', color: COLORS.blue },
  { name: 'Green', color: COLORS.green },
  { name: 'Orange', color: COLORS.orange },
  { name: 'Pink', color: COLORS.pink },
  { name: 'Red', color: COLORS.red },
  { name: 'Cyan', color: COLORS.cyan },
  { name: 'Teal', color: COLORS.teal },
  { name: 'Indigo', color: COLORS.indigo },
  { name: 'Rose', color: COLORS.rose },
  { name: 'Slate', color: COLORS.slate },
  { name: 'Default', color: null },
];

// Node shape options
const NODE_SHAPE_OPTIONS = [
  { name: 'Rectangle', shape: 'rectangle', icon: '▭' },
  { name: 'Rounded', shape: 'rounded', icon: '▢' },
  { name: 'Circle', shape: 'circle', icon: '●' },
  { name: 'Diamond', shape: 'diamond', icon: '◆' },
  { name: 'Hexagon', shape: 'hexagon', icon: '⬡' },
  { name: 'Pill', shape: 'pill', icon: '💊' },
];

// Node icon options
const NODE_ICON_OPTIONS = [
  { name: 'None', icon: null },
  { name: 'Server', icon: '🖥️' },
  { name: 'Database', icon: '🗄️' },
  { name: 'Cloud', icon: '☁️' },
  { name: 'User', icon: '👤' },
  { name: 'Settings', icon: '⚙️' },
  { name: 'Lock', icon: '🔒' },
  { name: 'Email', icon: '📧' },
  { name: 'API', icon: '🔌' },
  { name: 'File', icon: '📄' },
  { name: 'Folder', icon: '📁' },
  { name: 'Code', icon: '💻' },
  { name: 'Chart', icon: '📊' },
  { name: 'Bell', icon: '🔔' },
  { name: 'Star', icon: '⭐' },
  { name: 'Check', icon: '✅' },
  { name: 'Warning', icon: '⚠️' },
  { name: 'Error', icon: '❌' },
  { name: 'Money', icon: '💰' },
  { name: 'Clock', icon: '🕐' },
];

// ============================================
// COLOR PICKER CONTEXT MENU
// ============================================

function ColorPickerMenu({ x, y, nodeId, currentIcon, currentShape, onSelectColor, onSelectIcon, onSelectShape, onClose, theme }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      style={{
        position: 'fixed',
        left: x,
        top: y,
        background: theme?.modalBg || 'linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))',
        border: `1px solid ${theme?.border || 'rgba(255,255,255,0.15)'}`,
        borderRadius: 12,
        padding: 12,
        zIndex: 1000,
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        minWidth: 160,
      }}
    >
      <div style={{ color: theme?.textSecondary || '#888', fontSize: '0.75rem', marginBottom: 8, fontWeight: 600 }}>
        Node Color
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
        {NODE_COLOR_PALETTE.map((c) => (
          <button
            key={c.name}
            onClick={() => onSelectColor(nodeId, c.color)}
            title={c.name}
            style={{
              width: 28,
              height: 28,
              borderRadius: 6,
              border: c.color ? `2px solid ${c.color}` : `2px dashed ${theme?.textMuted || '#555'}`,
              background: c.color ? `${c.color}40` : 'transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.7rem',
              color: theme?.textMuted || '#666',
            }}
          >
            {!c.color && '×'}
          </button>
        ))}
      </div>
      {/* Icon Selection */}
      {onSelectIcon && (
        <div style={{ marginTop: 12, paddingTop: 10, borderTop: `1px solid ${theme?.border || 'rgba(255,255,255,0.1)'}` }}>
          <div style={{ color: theme?.textSecondary || '#888', fontSize: '0.75rem', marginBottom: 8, fontWeight: 600 }}>
            Node Icon
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 4, maxHeight: 120, overflowY: 'auto' }}>
            {NODE_ICON_OPTIONS.map((opt) => {
              const isSelected = currentIcon === opt.icon || (!currentIcon && !opt.icon);
              return (
                <button
                  key={opt.name}
                  onClick={() => onSelectIcon(nodeId, opt.icon)}
                  title={opt.name}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    border: isSelected ? `2px solid ${COLORS.purple}` : `1px solid ${theme?.border || 'rgba(255,255,255,0.1)'}`,
                    background: isSelected ? `${COLORS.purple}20` : 'transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: opt.icon ? '1rem' : '0.7rem',
                    color: theme?.textMuted || '#666',
                  }}
                >
                  {opt.icon || '×'}
                </button>
              );
            })}
          </div>
        </div>
      )}
      {/* Shape Selection */}
      {onSelectShape && (
        <div style={{ marginTop: 12, paddingTop: 10, borderTop: `1px solid ${theme?.border || 'rgba(255,255,255,0.1)'}` }}>
          <div style={{ color: theme?.textSecondary || '#888', fontSize: '0.75rem', marginBottom: 8, fontWeight: 600 }}>
            Node Shape
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
            {NODE_SHAPE_OPTIONS.map((opt) => {
              const isSelected = currentShape === opt.shape || (!currentShape && opt.shape === 'rounded');
              return (
                <button
                  key={opt.shape}
                  onClick={() => onSelectShape(nodeId, opt.shape)}
                  title={opt.name}
                  style={{
                    padding: '6px 8px',
                    borderRadius: 6,
                    border: isSelected ? `2px solid ${COLORS.purple}` : `1px solid ${theme?.border || 'rgba(255,255,255,0.1)'}`,
                    background: isSelected ? `${COLORS.purple}20` : 'transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 4,
                    fontSize: '0.7rem',
                    color: theme?.textPrimary || '#fff',
                  }}
                >
                  <span style={{ fontSize: '0.9rem' }}>{opt.icon}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
      <div style={{ marginTop: 10, paddingTop: 8, borderTop: `1px solid ${theme?.border || 'rgba(255,255,255,0.1)'}` }}>
        <button
          onClick={onClose}
          style={{
            width: '100%',
            padding: '6px 12px',
            background: 'transparent',
            border: `1px solid ${theme?.border || 'rgba(255,255,255,0.1)'}`,
            borderRadius: 6,
            color: theme?.textSecondary || '#888',
            fontSize: '0.75rem',
            cursor: 'pointer',
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

// ============================================
// EDGE STYLE OPTIONS
// ============================================

const EDGE_STYLE_OPTIONS = [
  { name: 'Animated', style: 'animated', icon: '〰️', dasharray: '8,4', animated: true },
  { name: 'Dashed', style: 'dashed', icon: '┅', dasharray: '8,4', animated: false },
  { name: 'Dotted', style: 'dotted', icon: '···', dasharray: '3,3', animated: false },
  { name: 'Solid', style: 'solid', icon: '━', dasharray: null, animated: false },
];

// Arrow type options for edges
const ARROW_TYPE_OPTIONS = [
  { name: 'Triangle', type: 'triangle', icon: '▶' },
  { name: 'Open', type: 'open', icon: '▷' },
  { name: 'Diamond', type: 'diamond', icon: '◆' },
  { name: 'Circle', type: 'circle', icon: '●' },
  { name: 'None', type: 'none', icon: '—' },
];

// ============================================
// EDGE STYLE CONTEXT MENU
// ============================================

function EdgeStyleMenu({ x, y, edgeId, currentStyle, currentArrowType, currentPathType, onSelectStyle, onSelectArrowType, onSelectPathType, onClose, theme }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      style={{
        position: 'fixed',
        left: x,
        top: y,
        background: theme?.modalBg || 'linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))',
        border: `1px solid ${theme?.border || 'rgba(255,255,255,0.15)'}`,
        borderRadius: 12,
        padding: 12,
        zIndex: 1000,
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        minWidth: 160,
      }}
    >
      <div style={{ color: theme?.textSecondary || '#888', fontSize: '0.75rem', marginBottom: 8, fontWeight: 600 }}>
        Line Style
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {EDGE_STYLE_OPTIONS.map((opt) => {
          const isSelected = currentStyle === opt.style || (!currentStyle && opt.style === 'animated');
          return (
            <button
              key={opt.style}
              onClick={() => onSelectStyle(edgeId, opt.style)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '8px 12px',
                borderRadius: 8,
                border: isSelected ? `2px solid ${COLORS.purple}` : `1px solid ${theme?.border || 'rgba(255,255,255,0.1)'}`,
                background: isSelected ? `${COLORS.purple}20` : 'transparent',
                cursor: 'pointer',
                color: theme?.textPrimary || '#fff',
                fontSize: '0.8rem',
              }}
            >
              <span style={{ fontSize: '1rem', width: 24 }}>{opt.icon}</span>
              <span>{opt.name}</span>
              {isSelected && <span style={{ marginLeft: 'auto', color: COLORS.purple }}>✓</span>}
            </button>
          );
        })}
      </div>
      {/* Arrow Type Selection */}
      <div style={{ marginTop: 12, paddingTop: 10, borderTop: `1px solid ${theme?.border || 'rgba(255,255,255,0.1)'}` }}>
        <div style={{ color: theme?.textSecondary || '#888', fontSize: '0.75rem', marginBottom: 8, fontWeight: 600 }}>
          Arrow Style
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {ARROW_TYPE_OPTIONS.map((opt) => {
            const isSelected = currentArrowType === opt.type || (!currentArrowType && opt.type === 'triangle');
            return (
              <button
                key={opt.type}
                onClick={() => onSelectArrowType(edgeId, opt.type)}
                title={opt.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  border: isSelected ? `2px solid ${COLORS.purple}` : `1px solid ${theme?.border || 'rgba(255,255,255,0.1)'}`,
                  background: isSelected ? `${COLORS.purple}20` : 'transparent',
                  cursor: 'pointer',
                  color: theme?.textPrimary || '#fff',
                  fontSize: '1rem',
                }}
              >
                {opt.icon}
              </button>
            );
          })}
        </div>
      </div>
      {/* Path Type Selection (Curved vs Straight) */}
      <div style={{ marginTop: 12, paddingTop: 10, borderTop: `1px solid ${theme?.border || 'rgba(255,255,255,0.1)'}` }}>
        <div style={{ color: theme?.textSecondary || '#888', fontSize: '0.75rem', marginBottom: 8, fontWeight: 600 }}>
          Path Style
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {[
            { name: 'Curved', type: 'curved', icon: '⌒' },
            { name: 'Straight', type: 'straight', icon: '—' },
            { name: 'Step', type: 'step', icon: '⌐' },
          ].map((opt) => {
            const isSelected = currentPathType === opt.type || (!currentPathType && opt.type === 'curved');
            return (
              <button
                key={opt.type}
                onClick={() => onSelectPathType(edgeId, opt.type)}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                  padding: '8px 12px',
                  borderRadius: 8,
                  border: isSelected ? `2px solid ${COLORS.purple}` : `1px solid ${theme?.border || 'rgba(255,255,255,0.1)'}`,
                  background: isSelected ? `${COLORS.purple}20` : 'transparent',
                  cursor: 'pointer',
                  color: theme?.textPrimary || '#fff',
                  fontSize: '0.8rem',
                }}
              >
                <span style={{ fontSize: '1rem' }}>{opt.icon}</span>
                <span>{opt.name}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div style={{ marginTop: 10, paddingTop: 8, borderTop: `1px solid ${theme?.border || 'rgba(255,255,255,0.1)'}` }}>
        <button
          onClick={onClose}
          style={{
            width: '100%',
            padding: '6px 12px',
            background: 'transparent',
            border: `1px solid ${theme?.border || 'rgba(255,255,255,0.1)'}`,
            borderRadius: 6,
            color: theme?.textSecondary || '#888',
            fontSize: '0.75rem',
            cursor: 'pointer',
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

// ============================================
// EDITABLE NODE LABEL (Inline Editing)
// ============================================

function EditableNodeLabel({
  isEditing,
  value,
  onChange,
  onFinish,
  onCancel,
  style = {},
  inputStyle = {},
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onFinish();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onCancel();
    }
  };

  if (!isEditing) {
    return <span style={style}>{value}</span>;
  }

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onFinish}
      onKeyDown={handleKeyDown}
      style={{
        background: 'rgba(0,0,0,0.5)',
        border: '1px solid rgba(124,58,237,0.5)',
        borderRadius: 4,
        color: '#fff',
        fontSize: 'inherit',
        fontWeight: 'inherit',
        textAlign: 'center',
        padding: '2px 6px',
        width: '100%',
        minWidth: 60,
        outline: 'none',
        ...inputStyle,
      }}
      onClick={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
    />
  );
}

// ============================================
// SELECTION INDICATOR STYLE
// ============================================

function getSelectionStyle(isSelected) {
  if (!isSelected) return {};
  return {
    boxShadow: '0 0 0 2px rgba(124,58,237,0.8), 0 0 12px rgba(124,58,237,0.4)',
    outline: '2px solid transparent',
  };
}

// ============================================
// JOURNEY SECTION PARSER
// ============================================

function parseJourneySectionFormat(text) {
  const result = {
    format: 'sections',
    title: '',
    actors: [],
    sections: []
  };

  let currentSection = null;

  // Section colors for visual distinction
  const sectionColors = [
    COLORS.cyan,
    COLORS.purple,
    COLORS.orange,
    COLORS.pink,
    COLORS.emerald,
    COLORS.amber,
    COLORS.blue,
    COLORS.red
  ];

  // Actor colors
  const actorColors = {
    'user': COLORS.pink,
    'system': COLORS.blue,
    'admin': COLORS.purple,
    'customer': COLORS.cyan,
    'default': COLORS.slate
  };

  text.split('\n').forEach(line => {
    line = line.trim();
    if (!line) return;

    // Title
    const titleMatch = line.match(/^title:\s*(.+)/i);
    if (titleMatch) {
      result.title = titleMatch[1].trim();
      return;
    }

    // Actors
    const actorsMatch = line.match(/^actors:\s*(.+)/i);
    if (actorsMatch) {
      result.actors = actorsMatch[1].split(',').map(a => {
        const name = a.trim();
        const color = actorColors[name.toLowerCase()] || actorColors.default;
        return { name, color };
      });
      return;
    }

    // Section header: == Section Name ==
    const sectionMatch = line.match(/^==\s*(.+?)\s*==$/);
    if (sectionMatch) {
      const sectionIndex = result.sections.length;
      currentSection = {
        name: sectionMatch[1],
        color: sectionColors[sectionIndex % sectionColors.length],
        tasks: []
      };
      result.sections.push(currentSection);
      return;
    }

    // Task: - Task Name | score | actors
    const taskMatch = line.match(/^-\s*(.+?)\s*\|\s*(\d+)(?:\s*\|\s*(.+))?$/);
    if (taskMatch && currentSection) {
      const taskName = taskMatch[1].trim();
      const score = parseInt(taskMatch[2]);
      const actorsStr = taskMatch[3] || '';
      const actors = actorsStr ? actorsStr.split(',').map(a => a.trim()).filter(a => a) : [];

      currentSection.tasks.push({
        id: `task-${result.sections.length - 1}-${currentSection.tasks.length}`,
        name: taskName,
        score,
        actors
      });
    }
  });

  return result;
}

// ============================================
// PARSERS (condensed)
// ============================================

const Parsers = {
  markdown: (text) => {
    const lines = text.split('\n').filter(l => l.trim());
    if (!lines.length) return { id: 'root', label: 'Empty', children: [] };
    const root = { id: 'root', label: lines[0].trim(), children: [] };
    const stack = [{ node: root, indent: -1 }];
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i], trimmed = line.trimStart(), indent = line.length - trimmed.length;
      const label = trimmed.replace(/^[-*+]\s*/, '').trim();
      if (!label) continue;
      while (stack.length > 1 && stack[stack.length - 1].indent >= indent) stack.pop();
      const node = { id: `node-${i}`, label, children: [] };
      stack[stack.length - 1].node.children.push(node);
      stack.push({ node, indent });
    }
    return root;
  },

  sql: (text) => {
    const tables = [];
    const regex = /CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?[`"']?(\w+)[`"']?\s*\(([\s\S]*?)\);/gi;
    let match;
    while ((match = regex.exec(text)) !== null) {
      const name = match[1], fields = [];
      match[2].split(',').map(l => l.trim()).filter(l => l && !/^(PRIMARY|FOREIGN|UNIQUE|CHECK|CONSTRAINT|INDEX|KEY)/i.test(l)).forEach(line => {
        const colMatch = line.match(/^[`"']?(\w+)[`"']?\s+(\w+(?:\([^)]+\))?)/i);
        if (colMatch) {
          const field = { name: colMatch[1], type: colMatch[2].toUpperCase() };
          if (/PRIMARY\s+KEY/i.test(line)) field.key = true;
          const refMatch = line.match(/REFERENCES\s+[`"']?(\w+)[`"']?/i);
          if (refMatch) { field.fk = true; field.references = refMatch[1]; }
          fields.push(field);
        }
      });
      tables.push({ name, fields });
    }
    return tables;
  },

  architecture: (text) => {
    const nodes = new Map(), edges = [];
    const typeStyles = {
      clients: { color: COLORS.pink, icon: '🖥️' }, client: { color: COLORS.pink, icon: '🖥️' },
      gateway: { color: COLORS.orange, icon: '🚪' }, gateways: { color: COLORS.orange, icon: '🚪' },
      services: { color: COLORS.blue, icon: '⚙️' }, service: { color: COLORS.blue, icon: '⚙️' },
      databases: { color: COLORS.emerald, icon: '🗄️' }, database: { color: COLORS.emerald, icon: '🗄️' },
      data: { color: COLORS.emerald, icon: '🗄️' }, cache: { color: COLORS.red, icon: '⚡' },
      queue: { color: COLORS.amber, icon: '📬' }, storage: { color: COLORS.emerald, icon: '💾' }
    };
    let currentY = 80;
    const CANVAS_WIDTH = 1200; // Expanded canvas for more nodes
    const MIN_SPACING = 150; // Minimum spacing between nodes
    const NODE_WIDTH = 130;
    const ROW_HEIGHT = 120; // Height between rows in same layer
    const LAYER_GAP = 40; // Extra gap between different layers

    text.split('\n').forEach(line => {
      line = line.trim();
      if (!line || line.startsWith('#')) return;
      const layerMatch = line.match(/^\[(\w+)\]\s*(.+)/);
      if (layerMatch) {
        const style = typeStyles[layerMatch[1].toLowerCase()] || { color: COLORS.slate, icon: '📦' };
        const items = layerMatch[2].split(',').map(s => s.trim()).filter(s => s);

        // Calculate how many nodes fit per row
        const maxNodesPerRow = Math.max(1, Math.floor((CANVAS_WIDTH - 100) / MIN_SPACING));
        const rows = [];
        for (let i = 0; i < items.length; i += maxNodesPerRow) {
          rows.push(items.slice(i, i + maxNodesPerRow));
        }

        // Position nodes row by row
        rows.forEach((rowItems, rowIndex) => {
          // Calculate spacing for this row
          const totalWidth = rowItems.length * NODE_WIDTH + (rowItems.length - 1) * (MIN_SPACING - NODE_WIDTH);
          const spacing = rowItems.length <= 1 ? 0 : Math.max(MIN_SPACING, (CANVAS_WIDTH - 100) / rowItems.length);
          const startX = (CANVAS_WIDTH - (rowItems.length - 1) * spacing) / 2;

          rowItems.forEach((item, i) => {
            const id = item.toLowerCase().replace(/[^a-z0-9]/g, '_');
            nodes.set(id, { id, label: item, ...style, x: startX + i * spacing, y: currentY + rowIndex * ROW_HEIGHT });
          });
        });

        // Move to next layer position
        currentY += rows.length * ROW_HEIGHT + LAYER_GAP;
        return;
      }
      // Parse edges with optional labels: A -> B or A -> B: label
      const edgeMatch = line.match(/^(.+?)\s*->\s*(.+?)(?::\s*(.+))?$/);
      if (edgeMatch) {
        const [, source, target, label] = edgeMatch;
        edges.push({
          id: `e-${edges.length}`,
          source: source.trim().toLowerCase().replace(/[^a-z0-9]/g, '_'),
          target: target.trim().toLowerCase().replace(/[^a-z0-9]/g, '_'),
          label: label?.trim() || ''
        });
      }
    });
    return { nodes: Array.from(nodes.values()), edges };
  },

  flowchart: (text) => {
    const nodes = new Map(), edges = [], nodeOrder = [];

    // Helper to parse node: (type) label or just label
    const parseNode = (part) => {
      part = part.trim();
      // Try to match (type) label - allow multi-word in parens
      const match = part.match(/^\(([^)]+)\)\s*(.*)$/);
      if (match) {
        const inParens = match[1].trim();
        const afterParens = match[2].trim();
        // Check if it's the bad pattern: (Label) Label (duplicate)
        if (afterParens && inParens.toLowerCase() === afterParens.toLowerCase()) {
          return { type: 'process', label: afterParens };
        }
        // Check if type is a valid keyword
        const validTypes = ['start', 'end', 'process', 'decision', 'io', 'data', 'database', 'document'];
        if (validTypes.includes(inParens.toLowerCase())) {
          return { type: inParens.toLowerCase(), label: afterParens || inParens };
        }
        // Otherwise, it's a bad format - use content as label
        return { type: 'process', label: afterParens || inParens };
      }
      return { type: 'process', label: part };
    };

    // First pass: collect all nodes and edges
    text.split('\n').forEach(line => {
      line = line.trim();
      if (!line || line.startsWith('#')) return;
      const parts = line.split(/\s*->\s*/);
      parts.forEach((part, i) => {
        const { type, label } = parseNode(part);
        const id = label.toLowerCase().replace(/[^a-z0-9]/g, '_');
        if (!nodes.has(id)) { nodes.set(id, { id, type, label, x: 0, y: 0 }); nodeOrder.push(id); }
        if (i > 0) {
          const { label: prevLabel } = parseNode(parts[i - 1]);
          const sourceId = prevLabel.toLowerCase().replace(/[^a-z0-9]/g, '_');
          const edgeLabel = line.match(/->\s*\([^)]*\)\s*[^:]+:\s*(.+)$/)?.[1] || '';
          edges.push({ id: `e-${edges.length}`, source: sourceId, target: id, label: edgeLabel });
        }
      });
    });
    // Second pass: calculate layout with branching
    const outgoing = new Map(), incoming = new Map();
    edges.forEach(e => {
      if (!outgoing.has(e.source)) outgoing.set(e.source, []);
      outgoing.get(e.source).push(e.target);
      if (!incoming.has(e.target)) incoming.set(e.target, []);
      incoming.get(e.target).push(e.source);
    });

    // Calculate node dimensions based on label length
    const calcNodeSize = (label) => {
      const charWidth = 8;
      const padding = 40;
      const minWidth = 100;
      const maxWidth = 180;
      const width = Math.min(maxWidth, Math.max(minWidth, (label?.length || 5) * charWidth + padding));
      // Height based on text wrapping (rough estimate)
      const charsPerLine = Math.floor((width - 20) / charWidth);
      const lines = Math.ceil((label?.length || 5) / charsPerLine);
      const height = Math.max(60, 30 + lines * 18);
      return { width, height };
    };

    // Add width/height to all nodes
    nodes.forEach((node, id) => {
      const size = calcNodeSize(node.label);
      node.width = size.width;
      node.height = size.height;
    });

    // Find root nodes (no incoming edges)
    const roots = nodeOrder.filter(id => !incoming.has(id) || incoming.get(id).length === 0);
    const positioned = new Set();
    const depthColors = [COLORS.purple, COLORS.blue, COLORS.emerald, COLORS.orange, COLORS.pink, COLORS.cyan];

    const positionNode = (id, x, y, branchOffset = 0, depth = 0) => {
      if (positioned.has(id)) return;
      const node = nodes.get(id);
      if (!node) return;
      node.x = x + branchOffset;
      node.y = y;
      node.depth = depth;
      // Assign color based on depth
      node.color = depthColors[depth % depthColors.length];
      positioned.add(id);
      const children = outgoing.get(id) || [];
      const nodeHeight = node.height || 60;
      const verticalGap = nodeHeight + 40;
      if (children.length === 1) {
        positionNode(children[0], x, y + verticalGap, branchOffset, depth + 1);
      } else if (children.length >= 2) {
        // Branch: spread children horizontally
        const spacing = 200;
        const totalWidth = (children.length - 1) * spacing;
        children.forEach((childId, i) => {
          const childNode = nodes.get(childId);
          const childWidth = childNode?.width || 130;
          const offset = -totalWidth / 2 + i * spacing;
          positionNode(childId, x, y + verticalGap, offset, depth + 1);
        });
      }
    };

    // Position from roots with more spacing
    let startX = 400;
    roots.forEach((rootId, i) => { positionNode(rootId, startX + i * 250, 100, 0, 0); });
    // Position any unpositioned nodes (disconnected)
    let unposY = 100;
    nodeOrder.forEach(id => {
      if (!positioned.has(id)) {
        const node = nodes.get(id);
        node.x = 700; node.y = unposY;
        node.depth = 0;
        node.color = COLORS.gray;
        unposY += (node.height || 60) + 40;
        positioned.add(id);
      }
    });
    return { nodes: Array.from(nodes.values()), edges };
  },

  stateMachine: (text) => {
    const states = new Map(), transitions = [];
    text.split('\n').forEach(line => {
      line = line.trim();
      if (!line || line.startsWith('#')) return;
      const stateMatch = line.match(/^\((\w+)\)\s*(\w+)/);
      if (stateMatch) { states.set(stateMatch[2], { id: stateMatch[2], label: stateMatch[2], isInitial: stateMatch[1] === 'initial', isFinal: stateMatch[1] === 'final' }); return; }
      const transMatch = line.match(/^(\w+)\s*->\s*(\w+)(?::\s*(.+))?/);
      if (transMatch) {
        if (!states.has(transMatch[1])) states.set(transMatch[1], { id: transMatch[1], label: transMatch[1] });
        if (!states.has(transMatch[2])) states.set(transMatch[2], { id: transMatch[2], label: transMatch[2] });
        transitions.push({ from: transMatch[1], to: transMatch[2], event: transMatch[3] || '' });
      }
    });
    const arr = Array.from(states.values());
    arr.forEach((s, i) => { const angle = (2 * Math.PI / arr.length) * i - Math.PI / 2; s.x = 300 + Math.cos(angle) * 150; s.y = 250 + Math.sin(angle) * 150; });
    return { states: arr, transitions };
  },

  userJourney: (text) => {
    // Check if this is the new section-based format (from Mermaid)
    if (text.includes('== ') || text.includes('title:') || text.includes('actors:')) {
      return parseJourneySectionFormat(text);
    }

    // Legacy format support
    const nodes = [], edges = [];
    const nodeMap = new Map();
    const typeConfig = {
      actor: { color: COLORS.pink, icon: '👤', shape: 'circle' },
      user: { color: COLORS.pink, icon: '👤', shape: 'circle' },
      page: { color: COLORS.cyan, icon: '📱', shape: 'rect' },
      screen: { color: COLORS.cyan, icon: '📱', shape: 'rect' },
      action: { color: COLORS.purple, icon: '👆', shape: 'rect' },
      form: { color: COLORS.orange, icon: '📝', shape: 'rect' },
      email: { color: COLORS.amber, icon: '✉️', shape: 'rect' },
      success: { color: COLORS.green, icon: '✅', shape: 'rect' },
      error: { color: COLORS.red, icon: '❌', shape: 'rect' },
      decision: { color: COLORS.orange, icon: '❓', shape: 'diamond' },
      notification: { color: COLORS.red, icon: '🔔', shape: 'rect', badge: 'New' },
      milestone: { color: COLORS.green, icon: '🎯', shape: 'rect' },
      default: { color: COLORS.blue, icon: '📄', shape: 'rect' }
    };

    text.split('\n').forEach((line) => {
      line = line.trim();
      if (!line || line.startsWith('#') || line.toLowerCase().startsWith('title')) return;

      const nodeMatch = line.match(/^[\[(](\w+)[\])]\s*(.+?)(?:\s*:\s*(.+))?$/);
      if (nodeMatch && !line.includes('->')) {
        const type = nodeMatch[1].toLowerCase();
        const label = nodeMatch[2].trim();
        const description = nodeMatch[3]?.trim() || '';
        const id = label.toLowerCase().replace(/[^a-z0-9]/g, '_');
        const config = typeConfig[type] || typeConfig.default;
        if (!nodeMap.has(id)) nodeMap.set(id, { id, label, description, type, ...config, x: 0, y: 0 });
        return;
      }

      const connMatch = line.match(/^(.+?)\s*-(?:([^>]+)->|->)\s*(.+?)$/);
      if (connMatch) {
        const sourceLabel = connMatch[1].trim(), edgeLabel = connMatch[2]?.trim() || '', targetLabel = connMatch[3].trim();
        const sourceId = sourceLabel.toLowerCase().replace(/[^a-z0-9]/g, '_');
        const targetId = targetLabel.toLowerCase().replace(/[^a-z0-9]/g, '_');
        if (!nodeMap.has(sourceId)) nodeMap.set(sourceId, { id: sourceId, label: sourceLabel, type: 'default', ...typeConfig.default, x: 0, y: 0 });
        if (!nodeMap.has(targetId)) nodeMap.set(targetId, { id: targetId, label: targetLabel, type: 'default', ...typeConfig.default, x: 0, y: 0 });
        edges.push({ id: `edge-${edges.length}`, source: sourceId, target: targetId, label: edgeLabel });
      }
    });

    const nodesArr = Array.from(nodeMap.values());
    const levels = new Map(), visited = new Set();
    const hasIncoming = new Set(edges.map(e => e.target));
    const roots = nodesArr.filter(n => !hasIncoming.has(n.id));

    const assignLevels = (nodeId, level) => {
      if (visited.has(nodeId)) return;
      visited.add(nodeId);
      levels.set(nodeId, Math.max(levels.get(nodeId) || 0, level));
      edges.filter(e => e.source === nodeId).forEach(e => assignLevels(e.target, level + 1));
    };
    (roots.length ? roots : nodesArr.slice(0, 1)).forEach(n => assignLevels(n.id, 0));
    nodesArr.forEach(n => { if (!levels.has(n.id)) levels.set(n.id, 0); });

    const levelGroups = new Map();
    nodesArr.forEach(n => {
      const level = levels.get(n.id) || 0;
      if (!levelGroups.has(level)) levelGroups.set(level, []);
      levelGroups.get(level).push(n);
    });

    // Better layout: more horizontal spacing, center nodes vertically per level
    const maxNodesInLevel = Math.max(...Array.from(levelGroups.values()).map(g => g.length), 1);
    const levelCount = Math.max(...Array.from(levels.values()), 0) + 1;
    const horizontalSpacing = 220; // Space between levels
    const verticalSpacing = 160; // Space between nodes in same level

    for (let level = 0; level <= levelCount - 1; level++) {
      const group = levelGroups.get(level) || [];
      const groupHeight = group.length * verticalSpacing;
      const startY = 150 + (maxNodesInLevel * verticalSpacing - groupHeight) / 2;

      group.forEach((node, idx) => {
        node.x = 180 + level * horizontalSpacing;
        node.y = startY + idx * verticalSpacing;
      });
    }

    return { nodes: nodesArr, edges };
  },

  timeline: (text) => {
    const events = [];
    let x = 100;
    text.split('\n').forEach((line, i) => {
      line = line.trim();
      if (!line || line.startsWith('#')) return;
      const match = line.match(/^\[(.+?)\]\s*(.+?)(?:\|(.+))?$/) || [null, '', line, ''];
      let label = match[2].trim();
      const isMilestone = label.startsWith('*');
      if (isMilestone) label = label.substring(1).trim();
      events.push({ id: `timeline-${i}`, date: match[1]?.trim() || '', label, description: match[3]?.trim() || '', x, y: 200, isMilestone });
      x += 220;
    });
    return events;
  },

  sequence: (text) => {
    const participants = [], messages = [];
    let px = 80;
    text.split('\n').forEach(line => {
      line = line.trim();
      if (!line || line.startsWith('#')) return;
      const partMatch = line.match(/^participants?\s+(.+)/i);
      if (partMatch) {
        partMatch[1].split(',').forEach(p => {
          const name = p.trim(), id = name.toLowerCase().replace(/\s/g, '_');
          if (!participants.find(pp => pp.id === id)) { participants.push({ id, label: name, x: px }); px += 160; }
        });
        return;
      }
      const msgMatch = line.match(/^(\w+)\s*(->|-->)\s*(\w+)(?::\s*(.+))?/);
      if (msgMatch) {
        const fromId = msgMatch[1].toLowerCase(), toId = msgMatch[3].toLowerCase();
        if (!participants.find(p => p.id === fromId)) { participants.push({ id: fromId, label: msgMatch[1], x: px }); px += 160; }
        if (!participants.find(p => p.id === toId)) { participants.push({ id: toId, label: msgMatch[3], x: px }); px += 160; }
        messages.push({ from: fromId, to: toId, label: msgMatch[4] || '', isReturn: msgMatch[2] === '-->' });
      }
    });
    return { participants, messages };
  },

  orgChart: (text) => {
    const nodes = [], edges = [], stack = [{ id: null, indent: -1 }];
    text.split('\n').forEach((line, i) => {
      if (!line.trim()) return;
      const trimmed = line.trimStart(), indent = line.length - trimmed.length;
      const match = trimmed.match(/^(.+?)(?:\s*\[(.+?)\])?$/);
      while (stack.length > 1 && stack[stack.length - 1].indent >= indent) stack.pop();
      const node = { id: `org-${i}`, label: match[1].trim(), title: match[2]?.trim() || '', children: [], parent: stack[stack.length - 1].id };
      nodes.push(node);
      if (stack[stack.length - 1].id) {
        edges.push({ id: `oe-${i}`, source: stack[stack.length - 1].id, target: node.id });
        const parent = nodes.find(n => n.id === stack[stack.length - 1].id);
        if (parent) parent.children.push(node.id);
      }
      stack.push({ id: node.id, indent });
    });
    return { nodes, edges };
  },

  network: (text) => {
    const devices = new Map(), connections = [];
    text.split('\n').forEach(line => {
      line = line.trim();
      if (!line || line.startsWith('#')) return;
      const devMatch = line.match(/^\[(\w+)\]\s*(.+?)(?:\s*\((.+?)\))?$/);
      if (devMatch) {
        const id = devMatch[2].trim().toLowerCase().replace(/[^a-z0-9]/g, '_');
        devices.set(id, { id, type: devMatch[1].toLowerCase(), label: devMatch[2].trim(), ip: devMatch[3]?.trim() || '' });
        return;
      }
      const connMatch = line.match(/^(.+?)\s*--\s*(.+?)(?:\s*:\s*(.+))?$/);
      if (connMatch) connections.push({ id: `conn-${connections.length}`, source: connMatch[1].trim().toLowerCase().replace(/[^a-z0-9]/g, '_'), target: connMatch[2].trim().toLowerCase().replace(/[^a-z0-9]/g, '_'), protocol: connMatch[3] || '' });
    });
    return { devices: Array.from(devices.values()), connections };
  },

  gantt: (text) => {
    const tasks = [];
    text.split('\n').forEach((line, i) => {
      line = line.trim();
      if (!line || line.startsWith('#')) return;
      const parts = line.split(',').map(s => s.trim());
      if (parts.length >= 2) tasks.push({ id: `task-${i}`, name: parts[0], start: parseInt(parts[1]) || i * 2, duration: parseInt(parts[2]) || 2, progress: parseInt(parts[3]) || 0 });
    });
    return tasks;
  },

  deployment: (text) => {
    const nodes = [], stack = [{ id: null, indent: -1 }];
    let idx = 0;
    text.split('\n').forEach(line => {
      if (!line.trim()) return;
      const trimmed = line.trimStart(), indent = line.length - trimmed.length;
      const match = trimmed.match(/^\[(\w+)\]\s*(.+)$/) || [null, 'component', trimmed];
      while (stack.length > 1 && stack[stack.length - 1].indent >= indent) stack.pop();
      const node = { id: `deploy-${idx++}`, label: (match[2] || trimmed).trim(), type: (match[1] || 'component').toLowerCase(), parentId: stack[stack.length - 1].id, indent };
      nodes.push(node);
      stack.push({ id: node.id, indent });
    });
    return { nodes };
  },

  pie: (text) => {
    const slices = [];
    text.split('\n').forEach(line => {
      line = line.trim();
      if (!line || line.startsWith('#') || line.toLowerCase().startsWith('title')) return;
      const match = line.match(/^"?([^":,]+)"?\s*[:,]\s*(\d+(?:\.\d+)?)/);
      if (match) slices.push({ label: match[1].trim(), value: parseFloat(match[2]) });
    });
    return slices;
  },

  quadrant: (text) => {
    const config = { title: '', xLabel: '', yLabel: '', quadrants: ['', '', '', ''] }, points = [];
    text.split('\n').forEach(line => {
      line = line.trim();
      if (!line || line.startsWith('#')) return;
      if (line.startsWith('title:')) { config.title = line.replace('title:', '').trim(); return; }
      if (line.startsWith('x-axis:')) { config.xLabel = line.replace('x-axis:', '').trim(); return; }
      if (line.startsWith('y-axis:')) { config.yLabel = line.replace('y-axis:', '').trim(); return; }
      const qMatch = line.match(/^quadrant-(\d):\s*(.+)$/);
      if (qMatch) { config.quadrants[parseInt(qMatch[1]) - 1] = qMatch[2]; return; }
      const pMatch = line.match(/^(.+?):\s*\[(\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)\]$/);
      if (pMatch) points.push({ id: `point-${points.length}`, label: pMatch[1].trim(), x: parseFloat(pMatch[2]), y: parseFloat(pMatch[3]) });
    });
    return { config, points };
  },

  git: (text) => {
    const commits = [], branches = new Map();
    let currentBranch = 'main', commitIndex = 0;
    branches.set('main', { name: 'main', y: 100, parentBranch: null, branchPoint: 0 });
    text.split('\n').forEach(line => {
      line = line.trim();
      if (!line || line.startsWith('#')) return;
      if (line.startsWith('branch ')) {
        const name = line.replace('branch ', '').trim();
        if (!branches.has(name)) branches.set(name, { name, y: 100 + branches.size * 80, parentBranch: currentBranch, branchPoint: commitIndex });
        currentBranch = name;
        return;
      }
      if (line.startsWith('checkout ')) { currentBranch = line.replace('checkout ', '').trim(); return; }
      if (line.startsWith('commit') || line.startsWith('merge')) {
        const isMerge = line.startsWith('merge'), labelMatch = line.match(/"([^"]+)"/);
        let mergeFrom = null;
        if (isMerge) { const m = line.match(/merge\s+(\w+)/i); if (m) mergeFrom = m[1]; }
        commits.push({ id: `commit-${commitIndex}`, label: labelMatch ? labelMatch[1] : `C${commitIndex}`, branch: currentBranch, x: 120 + commitIndex * 100, y: branches.get(currentBranch)?.y || 100, isMerge, mergeFrom, index: commitIndex });
        commitIndex++;
      }
    });
    return { commits, branches: Array.from(branches.values()) };
  },

  wireframe: (text) => {
    const elements = [];
    let y = 20, x = 20, containerStack = [], currentRow = null;
    let sidebarMode = false, sidebarStartY = 0, mainContentEndY = 0;
    const width = 480;
    const sidebarWidth = 200;

    const getX = () => {
      if (sidebarMode) return width + 30;
      return containerStack.length > 0 ? containerStack[containerStack.length - 1].x + 15 : x;
    };
    const getWidth = () => {
      if (sidebarMode) return sidebarWidth;
      return containerStack.length > 0 ? containerStack[containerStack.length - 1].width - 30 : width;
    };
    
    text.split('\n').forEach((line, i) => {
      const trimmed = line.trim();
      // Skip empty lines and comments (// or # without space after = comment, # with space = heading)
      if (!trimmed || trimmed.startsWith('//')) return;
      if (trimmed.startsWith('#') && !trimmed.startsWith('# ') && !trimmed.startsWith('## ') && !trimmed.startsWith('### ')) return;
      
      const currX = getX(), currW = getWidth();
      
      // Window/Frame: {Title}
      if (trimmed.match(/^\{(.+)\}$/)) {
        // Window spans full width including sidebar area
        elements.push({ id: `wf-${i}`, type: 'window', label: trimmed.slice(1, -1), x: currX, y, width: width + sidebarWidth + 30, height: 36 });
        y += 46; return;
      }
      
      // Card start: <Card Title> or <card>
      if (trimmed.match(/^<(.+)>$/) && !trimmed.includes('/')) {
        const label = trimmed.slice(1, -1);
        // Check if this is a sidebar section (contains sidebar, aside, slip, cart, panel, etc.)
        const isSidebar = /sidebar|aside|slip|cart|panel|summary/i.test(label);
        if (isSidebar && !sidebarMode) {
          sidebarMode = true;
          mainContentEndY = y;
          sidebarStartY = 80; // Start sidebar near top, after window
          y = sidebarStartY;
        }
        const card = { id: `wf-${i}`, type: 'card', label: label === 'card' ? '' : label, x: currX, y, width: currW, startY: y, children: [], isSidebar };
        elements.push(card);
        containerStack.push(card);
        y += label && label !== 'card' ? 45 : 15;
        return;
      }

      // Card/Section end: </anything> or </>
      if (trimmed.match(/^<\/(.*)>$/) || trimmed === '</>') {
        if (containerStack.length > 0) {
          const card = containerStack.pop();
          card.height = y - card.startY + 20;
          // If closing a sidebar section, restore main content y position
          if (card.isSidebar) {
            sidebarMode = false;
            y = Math.max(y, mainContentEndY);
          }
        }
        y += 25; return; // More space between sections
      }
      
      // Modal: {{Modal Title}}
      if (trimmed.match(/^\{\{(.+)\}\}$/)) {
        elements.push({ id: `wf-${i}`, type: 'modal', label: trimmed.slice(2, -2), x: currX + 20, y, width: currW - 40, height: 200 });
        y += 220; return;
      }
      
      // Navbar: [[ item1 | item2 | item3 ]]
      if (trimmed.match(/^\[\[(.+)\]\]$/)) {
        const items = trimmed.slice(2, -2).split('|').map(s => s.trim());
        // Navbar spans full width including sidebar area
        elements.push({ id: `wf-${i}`, type: 'navbar', items, x: currX, y, width: width + sidebarWidth + 30, height: 44 });
        y += 54; return;
      }
      
      // Tabs: (( tab1 | tab2 | tab3 ))
      if (trimmed.match(/^\(\((.+)\)\)$/)) {
        const items = trimmed.slice(2, -2).split('|').map(s => s.trim());
        elements.push({ id: `wf-${i}`, type: 'tabs', items, activeIndex: 0, x: currX, y, width: currW, height: 40 });
        y += 50; return;
      }
      
      // Breadcrumbs: >> Home > Products > Item
      if (trimmed.startsWith('>>')) {
        const items = trimmed.slice(2).split('>').map(s => s.trim()).filter(s => s);
        elements.push({ id: `wf-${i}`, type: 'breadcrumbs', items, x: currX, y, width: currW });
        y += 35; return;
      }
      
      // Search bar: [🔍 placeholder...]
      if (trimmed.match(/^\[🔍\s*(.*)?\]$/) || trimmed.match(/^\[search:?\s*(.*)\]$/i)) {
        const label = trimmed.match(/^\[🔍\s*(.*)?\]$/)?.[1] || trimmed.match(/^\[search:?\s*(.*)\]$/i)?.[1] || 'Search...';
        elements.push({ id: `wf-${i}`, type: 'search', label, x: currX, y, width: currW, height: 40 });
        y += 50; return;
      }
      
      // Dropdown/Select: [v Options] or [select: Options]
      if (trimmed.match(/^\[v\s+(.+)\]$/) || trimmed.match(/^\[select:\s*(.+)\]$/i)) {
        const label = trimmed.match(/^\[v\s+(.+)\]$/)?.[1] || trimmed.match(/^\[select:\s*(.+)\]$/i)?.[1];
        elements.push({ id: `wf-${i}`, type: 'dropdown', label, x: currX, y, width: Math.min(200, currW), height: 36 });
        y += 46; return;
      }
      
      // Toggle/Switch: [o] Label (off) or [O] Label (on)
      if (trimmed.match(/^\[([oO])\]\s*(.+)$/)) {
        const match = trimmed.match(/^\[([oO])\]\s*(.+)$/);
        elements.push({ id: `wf-${i}`, type: 'toggle', enabled: match[1] === 'O', label: match[2], x: currX, y });
        y += 40; return;
      }
      
      // Radio button: (o) Label (off) or (O) Label (on)
      if (trimmed.match(/^\(([oO\*\s])\)\s*(.+)$/)) {
        const match = trimmed.match(/^\(([oO\*\s])\)\s*(.+)$/);
        elements.push({ id: `wf-${i}`, type: 'radio', selected: match[1] === 'O' || match[1] === '*', label: match[2], x: currX, y });
        y += 35; return;
      }
      
      // Slider: [====o----] or [slider: 60%]
      if (trimmed.match(/^\[=+o-+\]$/) || trimmed.match(/^\[slider:\s*(\d+)%?\]$/i)) {
        let value = 50;
        const pctMatch = trimmed.match(/^\[slider:\s*(\d+)%?\]$/i);
        if (pctMatch) value = parseInt(pctMatch[1]);
        else {
          const eqMatch = trimmed.match(/^\[(=*)o(-*)\]$/);
          if (eqMatch) value = Math.round((eqMatch[1].length / (eqMatch[1].length + eqMatch[2].length)) * 100);
        }
        elements.push({ id: `wf-${i}`, type: 'slider', value, x: currX, y, width: Math.min(200, currW) });
        y += 45; return;
      }
      
      // Progress bar: [||||....] or [progress: 75%]
      if (trimmed.match(/^\[\|+\.+\]$/) || trimmed.match(/^\[progress:\s*(\d+)%?\]$/i)) {
        let value = 50;
        const pctMatch = trimmed.match(/^\[progress:\s*(\d+)%?\]$/i);
        if (pctMatch) value = parseInt(pctMatch[1]);
        else {
          const barMatch = trimmed.match(/^\[(\|*)(\.+)\]$/);
          if (barMatch) value = Math.round((barMatch[1].length / (barMatch[1].length + barMatch[2].length)) * 100);
        }
        elements.push({ id: `wf-${i}`, type: 'progress', value, x: currX, y, width: currW - 20 });
        y += 35; return;
      }
      
      // Avatar: (@) or (@Name) or (@@@) for avatar group
      if (trimmed.match(/^\(@+\)$/) || trimmed.match(/^\(@(.+)\)$/)) {
        const groupMatch = trimmed.match(/^\(@+\)$/);
        if (groupMatch) {
          const count = trimmed.length - 2;
          elements.push({ id: `wf-${i}`, type: 'avatar-group', count, x: currX, y });
        } else {
          const name = trimmed.match(/^\(@(.+)\)$/)?.[1] || '';
          elements.push({ id: `wf-${i}`, type: 'avatar', label: name, x: currX, y });
        }
        y += 55; return;
      }
      
      // Image placeholder: [img] or [img: caption] or [img 16:9]
      if (trimmed.match(/^\[img[:\s]?.*\]$/i)) {
        const caption = trimmed.match(/^\[img:\s*(.+)\]$/i)?.[1] || '';
        const ratioMatch = trimmed.match(/(\d+):(\d+)/);
        const ratio = ratioMatch ? parseInt(ratioMatch[1]) / parseInt(ratioMatch[2]) : 16/9;
        const h = Math.round(currW / ratio);
        elements.push({ id: `wf-${i}`, type: 'image', label: caption, x: currX, y, width: currW, height: Math.min(h, 200) });
        y += Math.min(h, 200) + 15; return;
      }
      
      // Video placeholder: [video] or [video: caption]
      if (trimmed.match(/^\[video[:\s]?.*\]$/i)) {
        const caption = trimmed.match(/^\[video:\s*(.+)\]$/i)?.[1] || '';
        elements.push({ id: `wf-${i}`, type: 'video', label: caption, x: currX, y, width: currW, height: 180 });
        y += 195; return;
      }
      
      // Map placeholder: [map] or [map: location]
      if (trimmed.match(/^\[map[:\s]?.*\]$/i)) {
        const label = trimmed.match(/^\[map:\s*(.+)\]$/i)?.[1] || '';
        elements.push({ id: `wf-${i}`, type: 'map', label, x: currX, y, width: currW, height: 160 });
        y += 175; return;
      }
      
      // Chart placeholder: [chart] or [chart: type]
      if (trimmed.match(/^\[chart[:\s]?.*\]$/i)) {
        const chartType = trimmed.match(/^\[chart:\s*(.+)\]$/i)?.[1] || 'bar';
        elements.push({ id: `wf-${i}`, type: 'chart', chartType, x: currX, y, width: currW, height: 150 });
        y += 165; return;
      }
      
      // Calendar: [calendar]
      if (trimmed.match(/^\[calendar\]$/i)) {
        elements.push({ id: `wf-${i}`, type: 'calendar', x: currX, y, width: Math.min(280, currW), height: 220 });
        y += 235; return;
      }
      
      // Table: |col1|col2|col3| (header) followed by |data|data|data|
      if (trimmed.match(/^\|.+\|$/)) {
        const cells = trimmed.slice(1, -1).split('|').map(s => s.trim());
        const isHeader = !elements.some(e => e.type === 'table-row' && e.y === y - 36);
        elements.push({ id: `wf-${i}`, type: 'table-row', cells, isHeader, x: currX, y, width: currW, height: 36 });
        y += 36; return;
      }
      
      // List item: - item or * item or • item  
      if (trimmed.match(/^[-\*•]\s+(.+)$/)) {
        const label = trimmed.match(/^[-\*•]\s+(.+)$/)[1];
        elements.push({ id: `wf-${i}`, type: 'list-item', label, x: currX, y });
        y += 32; return;
      }
      
      // Numbered list: 1. item or 1) item
      if (trimmed.match(/^(\d+)[.)]\s+(.+)$/)) {
        const match = trimmed.match(/^(\d+)[.)]\s+(.+)$/);
        elements.push({ id: `wf-${i}`, type: 'list-item-numbered', number: match[1], label: match[2], x: currX, y });
        y += 32; return;
      }
      
      // Badge/Tag: {badge} or {tag:label}
      if (trimmed.match(/^\{(\w+):?(.*)?\}$/) && !trimmed.match(/^\{.{15,}\}$/)) {
        const match = trimmed.match(/^\{(\w+):?(.*)?\}$/);
        const variant = match[1].toLowerCase();
        const label = match[2] || match[1];
        if (['badge', 'tag', 'success', 'warning', 'error', 'info', 'new', 'beta', 'pro'].includes(variant) || match[2]) {
          elements.push({ id: `wf-${i}`, type: 'badge', variant, label, x: currX, y });
          y += 35; return;
        }
      }
      
      // Alert/Notification: [!] message or [i] message or [✓] message
      if (trimmed.match(/^\[([!iI✓✗⚠])\]\s*(.+)$/)) {
        const match = trimmed.match(/^\[([!iI✓✗⚠])\]\s*(.+)$/);
        const variant = { '!': 'error', 'i': 'info', 'I': 'info', '✓': 'success', '✗': 'error', '⚠': 'warning' }[match[1]] || 'info';
        elements.push({ id: `wf-${i}`, type: 'alert', variant, label: match[2], x: currX, y, width: currW });
        y += 55; return;
      }
      
      // Stepper/Wizard: (1)---(2)---(3) or [step: 2/5]
      if (trimmed.match(/^\(\d+\)(---\(\d+\))+$/) || trimmed.match(/^\[step:\s*(\d+)\/(\d+)\]$/i)) {
        let current = 1, total = 3;
        const stepMatch = trimmed.match(/^\[step:\s*(\d+)\/(\d+)\]$/i);
        if (stepMatch) { current = parseInt(stepMatch[1]); total = parseInt(stepMatch[2]); }
        else { const steps = trimmed.match(/\((\d+)\)/g); total = steps.length; current = 1; }
        elements.push({ id: `wf-${i}`, type: 'stepper', current, total, x: currX, y, width: currW });
        y += 50; return;
      }
      
      // Pagination: [< 1 2 3 ... 10 >] or [page: 3/10]
      if (trimmed.match(/^\[<.*>\]$/) || trimmed.match(/^\[page:\s*(\d+)\/(\d+)\]$/i)) {
        let current = 1, total = 5;
        const pageMatch = trimmed.match(/^\[page:\s*(\d+)\/(\d+)\]$/i);
        if (pageMatch) { current = parseInt(pageMatch[1]); total = parseInt(pageMatch[2]); }
        elements.push({ id: `wf-${i}`, type: 'pagination', current, total, x: currX, y, width: currW });
        y += 45; return;
      }
      
      // Skeleton loader: [~~~] or [skeleton]
      if (trimmed === '[~~~]' || trimmed.toLowerCase() === '[skeleton]') {
        elements.push({ id: `wf-${i}`, type: 'skeleton', x: currX, y, width: currW, height: 20 });
        y += 30; return;
      }
      
      // Textarea: [""" placeholder] or [textarea]
      if (trimmed.match(/^\["""\s*(.*)\]$/) || trimmed.toLowerCase() === '[textarea]') {
        const label = trimmed.match(/^\["""\s*(.*)\]$/)?.[1] || '';
        elements.push({ id: `wf-${i}`, type: 'textarea', label, x: currX, y, width: currW, height: 80 });
        y += 95; return;
      }
      
      // Button variants: [Primary] [~Secondary~] [--Ghost--] [!!Danger!!]
      if (trimmed.match(/^\[~(.+)~\]$/)) {
        elements.push({ id: `wf-${i}`, type: 'button', variant: 'secondary', label: trimmed.match(/^\[~(.+)~\]$/)[1], x: currX, y, width: 120, height: 36 });
        y += 48; return;
      }
      if (trimmed.match(/^\[--(.+)--\]$/)) {
        elements.push({ id: `wf-${i}`, type: 'button', variant: 'ghost', label: trimmed.match(/^\[--(.+)--\]$/)[1], x: currX, y, width: 120, height: 36 });
        y += 48; return;
      }
      if (trimmed.match(/^\[!!(.+)!!\]$/)) {
        elements.push({ id: `wf-${i}`, type: 'button', variant: 'danger', label: trimmed.match(/^\[!!(.+)!!\]$/)[1], x: currX, y, width: 120, height: 36 });
        y += 48; return;
      }
      
      // Icon button: [icon:name] or just icon indicators
      if (trimmed.match(/^\[icon:(\w+)\]$/i)) {
        const icon = trimmed.match(/^\[icon:(\w+)\]$/i)[1];
        elements.push({ id: `wf-${i}`, type: 'icon-button', icon, x: currX, y });
        y += 45; return;
      }
      
      // Divider with label: --- Label --- or === Label ===
      if (trimmed.match(/^---\s*(.+)\s*---$/) || trimmed.match(/^===\s*(.+)\s*===$/)) {
        const label = trimmed.match(/^[-=]{3}\s*(.+)\s*[-=]{3}$/)[1];
        elements.push({ id: `wf-${i}`, type: 'divider-label', label, x: currX, y, width: currW });
        y += 30; return;
      }
      
      // Rating: [*****] or [★★★☆☆]
      if (trimmed.match(/^\[[\*★☆]+\]$/)) {
        const stars = trimmed.slice(1, -1);
        const filled = (stars.match(/[\*★]/g) || []).length;
        const total = stars.length;
        elements.push({ id: `wf-${i}`, type: 'rating', filled, total, x: currX, y });
        y += 35; return;
      }
      
      // Chip/Tag group: <tag1> <tag2> <tag3>
      if (trimmed.match(/^(<\w+>\s*)+$/)) {
        const tags = trimmed.match(/<(\w+)>/g).map(t => t.slice(1, -1));
        elements.push({ id: `wf-${i}`, type: 'chip-group', tags, x: currX, y });
        y += 40; return;
      }
      
      // Tooltip indicator: [?] or (?)
      if (trimmed === '[?]' || trimmed === '(?)') {
        elements.push({ id: `wf-${i}`, type: 'tooltip', x: currX, y });
        y += 30; return;
      }
      
      // Horizontal button row: [Btn1] [Btn2] [Btn3] (multiple buttons on one line)
      if (trimmed.match(/^\[.+\](\s+\[.+\])+$/) && !trimmed.includes('|')) {
        const buttons = trimmed.match(/\[([^\]]+)\]/g).map(b => b.slice(1, -1));
        elements.push({ id: `wf-${i}`, type: 'button-row', buttons, x: currX, y, width: currW });
        y += 50; return;
      }
      
      // Feed item / notification: @username text or @username: text
      if (trimmed.match(/^@\w+\s+.+/) || trimmed.match(/^@\w+:\s*.+/)) {
        const match = trimmed.match(/^@(\w+):?\s*(.+)$/);
        if (match) {
          elements.push({ id: `wf-${i}`, type: 'feed-item', username: match[1], text: match[2], x: currX, y, width: currW });
          y += 38; return;
        }
      }
      
      // Win notification: 🏆 @user won $amount or similar with emojis
      if (trimmed.match(/^[🏆💰🎉🔥⭐]\s*@\w+/)) {
        const match = trimmed.match(/^([🏆💰🎉🔥⭐])\s*@(\w+)\s*(.+)$/);
        if (match) {
          elements.push({ id: `wf-${i}`, type: 'win-notification', emoji: match[1], username: match[2], text: match[3], x: currX, y, width: currW });
          y += 44; return;
        }
      }
      
      // Social stats row: ❤️ 2.4k   💬 892   🔄 Share
      if (trimmed.match(/^[❤️💬🔄💾🎯👍👎].+[❤️💬🔄💾🎯👍👎]/)) {
        elements.push({ id: `wf-${i}`, type: 'social-stats', text: trimmed, x: currX, y, width: currW });
        y += 40; return;
      }
      
      // Spacer: ___
      if (trimmed.match(/^_{3,}$/)) {
        y += 20; return;
      }
      
      // Original elements below:

      // Window (already handled above)

      // Chat message/bubble: [User: message] or [Bot: message] or [ChatGPT: message] etc.
      const chatMatch = trimmed.match(/^\[(\w+):\s*(.+)\]$/);
      if (chatMatch) {
        const sender = chatMatch[1];
        const message = chatMatch[2];
        const isUser = /user|me|you/i.test(sender);
        elements.push({ id: `wf-${i}`, type: 'chat-message', sender, message, isUser, x: currX, y, width: currW });
        y += 60; return;
      }

      // Primary Button: [Label] (but not chat messages or special elements)
      if (trimmed.match(/^\[(.+)\]$/) && !trimmed.match(/^\[_{2,}\]$/) && !trimmed.match(/^\[(x| )\]/i) && !trimmed.match(/^\[v\s/) && !trimmed.includes(':')) {
        elements.push({ id: `wf-${i}`, type: 'button', variant: 'primary', label: trimmed.slice(1, -1), x: currX, y, width: 120, height: 36 });
        y += 48; return;
      }
      
      // Input: [____] or "placeholder"
      if (trimmed.match(/^\[_{2,}\]$/) || trimmed.match(/^"(.+)"$/)) {
        elements.push({ id: `wf-${i}`, type: 'input', label: trimmed.match(/^"(.+)"$/)?.[1] || '', x: currX, y, width: currW, height: 36 });
        y += 48; return;
      }
      
      // Checkbox: [x] Label or [ ] Label
      const checkMatch = trimmed.match(/^\[(x| )\]\s*(.+)$/i);
      if (checkMatch) {
        elements.push({ id: `wf-${i}`, type: 'checkbox', checked: checkMatch[1].toLowerCase() === 'x', label: checkMatch[2], x: currX, y });
        y += 35; return;
      }
      
      // Simple separator: --- or ===
      if (trimmed === '---' || trimmed === '===') {
        elements.push({ id: `wf-${i}`, type: 'separator', x: currX, y, width: currW, height: 2 });
        y += 15; return;
      }
      
      // Text: **Header** or regular text
      if (trimmed) {
        const isH1 = trimmed.startsWith('# ');
        const isH2 = trimmed.startsWith('## ');
        const isH3 = trimmed.startsWith('### ');
        const isBold = trimmed.startsWith('**') && trimmed.endsWith('**');
        let label = trimmed;
        let textType = 'body';
        if (isH1) { label = trimmed.slice(2); textType = 'h1'; }
        else if (isH2) { label = trimmed.slice(3); textType = 'h2'; }
        else if (isH3) { label = trimmed.slice(4); textType = 'h3'; }
        else if (isBold) { label = trimmed.slice(2, -2); textType = 'bold'; }
        elements.push({ id: `wf-${i}`, type: 'text', label, textType, x: currX, y });
        y += textType === 'h1' ? 45 : textType === 'h2' ? 38 : textType === 'h3' ? 32 : textType === 'bold' ? 30 : 26;
      }
    });
    
    // Close any unclosed containers
    while (containerStack.length > 0) {
      const card = containerStack.pop();
      card.height = y - card.startY + 15;
    }
    
    return { elements, totalHeight: y + 40 };
  },

  classDiagram: (text) => {
    const classes = [], relationships = [];
    let currentClass = null;
    text.split('\n').forEach(line => {
      line = line.trim();
      if (!line || line.startsWith('#')) return;
      const classMatch = line.match(/^class\s+(\w+)/i);
      if (classMatch) { if (currentClass) classes.push(currentClass); currentClass = { id: classMatch[1], name: classMatch[1], properties: [], methods: [] }; return; }
      // Relationship syntax: Class1 --> Class2 : label or Class1 --|> Class2 (extends) or Class1 --* Class2 (composition)
      const relMatch = line.match(/^(\w+)\s*(--|>|--\*|-->|--)\s*(\w+)(?:\s*:\s*(.+))?$/);
      if (relMatch) {
        const type = relMatch[2] === '--|>' ? 'extends' : relMatch[2] === '--*' ? 'composition' : 'association';
        relationships.push({ from: relMatch[1], to: relMatch[3], type, label: relMatch[4]?.trim() || '' });
        return;
      }
      const propMatch = line.match(/^([+\-#~])?\s*(\w+)\s*:\s*(.+)$/);
      if (propMatch && currentClass) { currentClass.properties.push({ visibility: propMatch[1] || '+', name: propMatch[2], type: propMatch[3] }); return; }
      const methodMatch = line.match(/^([+\-#~])?\s*(\w+)\s*\(([^)]*)\)\s*(?::\s*(.+))?$/);
      if (methodMatch && currentClass) { currentClass.methods.push({ visibility: methodMatch[1] || '+', name: methodMatch[2], params: methodMatch[3], returns: methodMatch[4] || 'void' }); }
    });
    if (currentClass) classes.push(currentClass);
    return { classes, relationships };
  },

  activity: (text) => {
    const nodeMap = new Map(), edges = [], nodeOrder = [];
    // First pass: parse nodes
    const lines = text.split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'));
    lines.forEach((line) => {
      // Skip edge definitions in first pass
      if (line.match(/^[^<:\[].+?\s*->\s*.+$/)) return;
      let type = 'action', label = line, displayLabel = line;
      if (line === '[start]' || line === 'start') { type = 'start'; label = 'start'; displayLabel = ''; }
      else if (line === '[end]' || line === 'end') { type = 'end'; label = 'end'; displayLabel = ''; }
      else if (line.match(/^<(.+)>$/)) { type = 'decision'; label = line.match(/^<(.+)>$/)[1]; displayLabel = label; }
      else if (line.match(/^:(.+);?$/)) { label = line.match(/^:(.+);?$/)[1]; displayLabel = label; }
      const id = label.toLowerCase().replace(/[^a-z0-9]/g, '_');
      if (!nodeMap.has(id)) { nodeMap.set(id, { id, type, label: displayLabel, x: 0, y: 0 }); nodeOrder.push(id); }
    });
    // Second pass: parse edges
    lines.forEach((line) => {
      const edgeMatch = line.match(/^(.+?)\s*->\s*(.+?)(?::\s*(.+))?$/);
      if (edgeMatch) {
        const srcLabel = edgeMatch[1].replace(/^[<:\[]|[>;>\]]$/g, '').trim();
        const tgtLabel = edgeMatch[2].replace(/^[<:\[]|[>;>\]]$/g, '').trim();
        const label = edgeMatch[3]?.trim() || '';
        const srcId = srcLabel.toLowerCase().replace(/[^a-z0-9]/g, '_');
        const tgtId = tgtLabel.toLowerCase().replace(/[^a-z0-9]/g, '_');
        if (nodeMap.has(srcId) && nodeMap.has(tgtId)) {
          edges.push({ id: `ae-${edges.length}`, source: srcId, target: tgtId, label });
        }
      }
    });
    // If no explicit edges, create sequential edges
    if (edges.length === 0 && nodeOrder.length > 1) {
      for (let i = 0; i < nodeOrder.length - 1; i++) {
        edges.push({ id: `ae-${i}`, source: nodeOrder[i], target: nodeOrder[i + 1] });
      }
    }
    // Calculate layout with branching support
    const outgoing = new Map(), incoming = new Map();
    edges.forEach(e => {
      if (!outgoing.has(e.source)) outgoing.set(e.source, []);
      outgoing.get(e.source).push(e.target);
      if (!incoming.has(e.target)) incoming.set(e.target, []);
      incoming.get(e.target).push(e.source);
    });
    const positioned = new Set();
    const positionNode = (id, x, y) => {
      if (positioned.has(id) || !nodeMap.has(id)) return;
      const node = nodeMap.get(id);
      node.x = x; node.y = y;
      positioned.add(id);
      const children = outgoing.get(id) || [];
      if (children.length === 1) {
        positionNode(children[0], x, y + 120);
      } else if (children.length >= 2) {
        const spacing = 200;
        children.forEach((childId, i) => {
          const xOffset = (i === 0) ? -spacing/2 : (i === 1) ? spacing/2 : (i - 0.5) * spacing;
          positionNode(childId, x + xOffset, y + 120);
        });
      }
    };
    // Find and position from start node or first node
    const startNode = nodeOrder.find(id => nodeMap.get(id)?.type === 'start') || nodeOrder[0];
    if (startNode) positionNode(startNode, 400, 80);
    // Position remaining nodes
    let unposY = 80;
    nodeOrder.forEach(id => {
      if (!positioned.has(id)) {
        const node = nodeMap.get(id);
        node.x = 650; node.y = unposY;
        unposY += 120;
        positioned.add(id);
      }
    });
    return { nodes: Array.from(nodeMap.values()), edges };
  },

  useCase: (text) => {
    const actors = [], useCases = [], relationships = [];
    text.split('\n').forEach(line => {
      line = line.trim();
      if (!line || line.startsWith('#')) return;
      if (line.match(/^actor\s+/i)) { actors.push({ id: `actor-${actors.length}`, label: line.replace(/^actor\s+/i, '').trim() }); return; }
      if (line.startsWith('(') || line.match(/^usecase\s+/i)) { useCases.push({ id: `uc-${useCases.length}`, label: line.replace(/^usecase\s+/i, '').replace(/[()]/g, '').trim() }); return; }
      const relMatch = line.match(/^(.+?)\s*->\s*(.+)$/);
      if (relMatch) relationships.push({ from: relMatch[1].trim(), to: relMatch[2].trim() });
    });
    return { actors, useCases, relationships };
  },

  component: (text) => {
    const components = [], connections = [];
    text.split('\n').forEach(line => {
      line = line.trim();
      if (!line || line.startsWith('#')) return;
      const compMatch = line.match(/^\[(\w+)\]\s*(.+)$/);
      if (compMatch) { components.push({ id: `comp-${components.length}`, label: compMatch[2].trim(), type: compMatch[1] }); return; }
      const connMatch = line.match(/^(.+?)\s*(-->|--)\s*(.+)$/);
      if (connMatch) connections.push({ from: connMatch[1].trim(), to: connMatch[3].trim() });
    });
    return { components, connections };
  },

  c4: (text) => {
    const elements = [], relationships = [];
    text.split('\n').forEach((line, i) => {
      line = line.trim();
      if (!line || line.startsWith('#')) return;
      const elemMatch = line.match(/^\[(\w+)\]\s*(.+?)(?::\s*(.+))?$/);
      if (elemMatch) { elements.push({ id: `c4-${i}`, type: elemMatch[1].toLowerCase(), label: elemMatch[2].trim(), description: elemMatch[3]?.trim() || '' }); return; }
      const relMatch = line.match(/^(.+?)\s*->\s*(.+?)(?::\s*(.+))?$/);
      if (relMatch) relationships.push({ from: relMatch[1].trim(), to: relMatch[2].trim(), label: relMatch[3]?.trim() || '' });
    });
    return { elements, relationships };
  },

  requirement: (text) => {
    const requirements = [], traces = [];
    let current = null;
    text.split('\n').forEach((line, i) => {
      line = line.trim();
      if (!line || line.startsWith('#')) return;
      const reqMatch = line.match(/^requirement\s+(.+?)(?:\s*{)?$/i);
      if (reqMatch) { if (current) requirements.push(current); current = { id: `req-${i}`, name: reqMatch[1].trim(), text: '', risk: '', priority: '' }; return; }
      const traceMatch = line.match(/^(.+?)\s*->\s*(.+?)(?::\s*(.+))?$/);
      if (traceMatch && !current) { traces.push({ from: traceMatch[1].trim(), to: traceMatch[2].trim(), label: traceMatch[3]?.trim() || '' }); return; }
      if (current) {
        if (line.startsWith('text:')) current.text = line.replace('text:', '').trim();
        else if (line.startsWith('risk:')) current.risk = line.replace('risk:', '').trim();
        else if (line.startsWith('priority:')) current.priority = line.replace('priority:', '').trim();
        else if (line === '}') { requirements.push(current); current = null; }
      }
    });
    if (current) requirements.push(current);
    return { requirements, traces };
  }
};

// ============================================
// DRAGGABLE DIAGRAM COMPONENTS
// ============================================

// Mind Map with draggable nodes
function MindMapDiagram({ data, theme = THEMES.dark, onLabelChange, onDeleteNodes, onPasteNodes }) {
  const canvas = useInteractiveCanvas({ x: 100, y: 0 });
  const [collapsed, setCollapsed] = useState(new Set());

  const layout = useMemo(() => {
    const nodes = [], edges = [];
    const levelWidths = new Map(); // Track max width at each level
    const NODE_GAP = 50; // Gap between levels

    // Calculate node width based on label
    const getNodeWidth = (label) => Math.max(120, (label?.length || 5) * 9 + 50);

    // First pass: calculate max width at each level
    const calcLevelWidths = (node, level) => {
      const w = getNodeWidth(node.label);
      levelWidths.set(level, Math.max(levelWidths.get(level) || 0, w));
      if (node.children?.length && !collapsed.has(node.id)) {
        node.children.forEach(child => calcLevelWidths(child, level + 1));
      }
    };

    // Get X position for a level (cumulative widths + gaps)
    const getLevelX = (level) => {
      let x = 0;
      for (let i = 0; i < level; i++) {
        x += (levelWidths.get(i) || 120) + NODE_GAP;
      }
      return x;
    };

    const getHeight = (node) => (!node.children?.length || collapsed.has(node.id)) ? 38 : node.children.reduce((s, c) => s + getHeight(c) + 16, -16);

    const layoutNode = (node, level, yOff, parentId, color) => {
      const h = getHeight(node), y = yOff + h / 2, w = getNodeWidth(node.label);
      const c = level === 0 ? COLORS.purple : color;
      const x = getLevelX(level);
      nodes.push({ id: node.id, label: node.label || '', defaultX: x, defaultY: y, width: w, level, color: c, hasChildren: node.children?.length > 0, isCollapsed: collapsed.has(node.id), childCount: node.children?.length || 0 });
      if (parentId) edges.push({ id: `e-${parentId}-${node.id}`, source: parentId, target: node.id, color: c });
      if (node.children?.length && !collapsed.has(node.id)) {
        let cy = yOff;
        node.children.forEach((child, i) => { layoutNode(child, level + 1, cy, node.id, level === 0 ? BRANCH_COLORS[i % BRANCH_COLORS.length] : color); cy += getHeight(child) + 16; });
      }
    };

    if (data?.label) {
      calcLevelWidths(data, 0); // First pass: calculate level widths
      layoutNode(data, 0, 0, null, BRANCH_COLORS[0]); // Second pass: layout with proper spacing
      if (nodes.length) { const minY = Math.min(...nodes.map(n => n.defaultY)), maxY = Math.max(...nodes.map(n => n.defaultY)); nodes.forEach(n => { n.defaultY += -(minY + maxY) / 2 + 300; }); }
    }
    return { nodes, edges };
  }, [data, collapsed]);

  const getPos = (node) => canvas.getNodePosition(node.id, node.defaultX, node.defaultY);

  const getBezier = (src, tgt) => {
    const sp = getPos(src), tp = getPos(tgt);
    const sx = sp.x + src.width + 5, sy = sp.y;
    const tx = tp.x - 5, ty = tp.y;
    const dx = tx - sx;
    const curvature = Math.min(Math.abs(dx) * 0.4, 80);
    return `M ${sx} ${sy} C ${sx + curvature} ${sy}, ${tx - curvature} ${ty}, ${tx} ${ty}`;
  };

  // Handle label edit complete
  const handleLabelEditFinish = useCallback(() => {
    const result = canvas.finishEditing();
    if (result.nodeId && result.newValue && onLabelChange) {
      const node = layout.nodes.find(n => n.id === result.nodeId);
      if (node && node.label !== result.newValue) {
        onLabelChange(result.nodeId, node.label, result.newValue);
      }
    }
  }, [canvas, layout.nodes, onLabelChange]);

  // Handle keyboard shortcuts (Delete, Copy, Paste)
  useEffect(() => {
    const handleKeyDown = (e) => {
      const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform);
      const metaKey = isMac ? e.metaKey : e.ctrlKey;
      if (canvas.editingNode) return;
      if ((e.key === 'Delete' || e.key === 'Backspace') && canvas.selectedNodes.size > 0 && onDeleteNodes) {
        e.preventDefault();
        onDeleteNodes(Array.from(canvas.selectedNodes));
        canvas.clearSelection();
        return;
      }
      if (metaKey && e.key.toLowerCase() === 'c' && canvas.selectedNodes.size > 0) {
        e.preventDefault();
        canvas.copySelectedNodes(layout.nodes);
        return;
      }
      if (metaKey && e.key.toLowerCase() === 'v' && canvas.clipboard && onPasteNodes) {
        e.preventDefault();
        const pastedNodes = canvas.pasteNodes();
        if (pastedNodes) onPasteNodes(pastedNodes);
        return;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [canvas, layout.nodes, onDeleteNodes, onPasteNodes]);

  // Handle selection box completion
  useEffect(() => {
    if (!canvas.isSelecting && canvas.selectionBox) {
      const nodeIds = canvas.getNodesInSelectionBox(layout.nodes.map(n => ({ ...n, x: n.defaultX, y: n.defaultY })), canvas.selectionBox);
      if (nodeIds.length > 0) canvas.setSelectedNodes(new Set(nodeIds));
    }
  }, [canvas.isSelecting, canvas.selectionBox, layout.nodes, canvas]);

  // Click on canvas to clear selection
  const handleCanvasClick = useCallback((e) => {
    if (e.target === canvas.canvasRef.current || e.target.classList.contains('canvas-bg')) {
      canvas.clearSelection();
      canvas.closeContextMenu();
    }
  }, [canvas]);

  // Handle collapse toggle (single click on +/- button)
  const handleCollapseToggle = useCallback((nodeId) => {
    setCollapsed(p => { const n = new Set(p); n.has(nodeId) ? n.delete(nodeId) : n.add(nodeId); return n; });
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}` }}>
      <div ref={canvas.canvasRef} className="canvas-bg" onClick={handleCanvasClick} onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={canvas.handleMouseUp} onMouseLeave={canvas.handleMouseUp} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : canvas.dragging ? 'grabbing' : 'grab' }}>
        <div className="canvas-bg" style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${theme.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridColor} 1px, transparent 1px)`, backgroundSize: `${30 * canvas.zoom}px ${30 * canvas.zoom}px`, backgroundPosition: `${canvas.pan.x}px ${canvas.pan.y}px`, pointerEvents: 'none' }} />
        <svg width="100%" height="100%" style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none' }}>
          <g transform={`translate(${canvas.pan.x}, ${canvas.pan.y}) scale(${canvas.zoom})`}>
            {layout.edges.map(e => { const src = layout.nodes.find(n => n.id === e.source), tgt = layout.nodes.find(n => n.id === e.target); if (!src || !tgt) return null; const path = getBezier(src, tgt); return (<g key={e.id}><path d={path} fill="none" stroke={e.color} strokeWidth={6} strokeOpacity={0.1} strokeLinecap="round" /><path d={path} fill="none" stroke={e.color} strokeWidth={3} strokeOpacity={0.25} strokeLinecap="round" /><path d={path} fill="none" stroke={e.color} strokeWidth={2} strokeOpacity={0.8} strokeLinecap="round" /></g>); })}
            {/* Selection box */}
            {canvas.isSelecting && canvas.selectionBox && (
              <rect
                x={Math.min(canvas.selectionBox.startX, canvas.selectionBox.endX)}
                y={Math.min(canvas.selectionBox.startY, canvas.selectionBox.endY)}
                width={Math.abs(canvas.selectionBox.endX - canvas.selectionBox.startX)}
                height={Math.abs(canvas.selectionBox.endY - canvas.selectionBox.startY)}
                fill="rgba(124,58,237,0.1)" stroke={COLORS.purple} strokeWidth={2} strokeDasharray="5,5" style={{ pointerEvents: 'none' }}
              />
            )}
          </g>
        </svg>
        <div style={{ position: 'absolute', transform: `translate(${canvas.pan.x}px, ${canvas.pan.y}px) scale(${canvas.zoom})`, transformOrigin: '0 0' }}>
          {layout.nodes.map(node => {
            const pos = getPos(node);
            const nodeColor = canvas.nodeColors[node.id] || node.color;
            const isDragging = canvas.dragging === node.id;
            const isSelected = canvas.selectedNodes.has(node.id);
            const isEditing = canvas.editingNode === node.id;
            return (
              <div
                key={node.id}
                onMouseDown={(e) => canvas.handleNodeMouseDown(e, node.id, pos.x, pos.y)}
                onDoubleClick={(e) => canvas.handleNodeDoubleClick(e, node.id, node.label)}
                onContextMenu={(e) => canvas.handleNodeContextMenu(e, node.id)}
                style={{
                  position: 'absolute', left: pos.x, top: pos.y - 19, width: node.width, height: 38,
                  background: node.level === 0 ? `linear-gradient(135deg, ${nodeColor}, ${nodeColor}dd)` : getNodeGradient(nodeColor),
                  border: `2px solid ${nodeColor}`,
                  borderRadius: node.level === 0 ? 19 : 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: isDragging ? 'grabbing' : 'grab',
                  boxShadow: getNodeShadow(nodeColor, isDragging, isSelected),
                  transition: isDragging ? 'none' : 'box-shadow 0.2s, background 0.2s'
                }}
              >
                <EditableNodeLabel
                  isEditing={isEditing}
                  value={isEditing ? canvas.editValue : node.label}
                  onChange={canvas.setEditValue}
                  onFinish={handleLabelEditFinish}
                  onCancel={canvas.cancelEditing}
                  style={{ color: node.level === 0 ? '#fff' : theme.textPrimary, fontSize: node.level === 0 ? 14 : 13, fontWeight: node.level === 0 ? 700 : 500 }}
                />
                {node.hasChildren && (
                  <div
                    onClick={(e) => { e.stopPropagation(); handleCollapseToggle(node.id); }}
                    style={{ position: 'absolute', right: -28, width: 24, height: 24, borderRadius: '50%', background: nodeColor, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}
                  >
                    {node.isCollapsed ? '+' : '−'}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.2, 3))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.8, 0.2))} onFit={() => {}} onReset={() => { canvas.resetView(); setCollapsed(new Set()); }} zoom={canvas.zoom} snapToGrid={canvas.snapToGrid} onToggleSnap={() => canvas.setSnapToGrid(v => !v)} />
      {/* Selection info */}
      {canvas.selectedNodes.size > 0 && (
        <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(124,58,237,0.9)', borderRadius: 6, padding: '4px 10px', color: '#fff', fontSize: '0.75rem', zIndex: 100 }}>
          {canvas.selectedNodes.size} selected • ⌘C copy • ⌘V paste • Del remove
        </div>
      )}
      {/* Clipboard indicator */}
      {canvas.clipboard && canvas.clipboard.length > 0 && canvas.selectedNodes.size === 0 && (
        <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(16,185,129,0.9)', borderRadius: 6, padding: '4px 10px', color: '#fff', fontSize: '0.75rem', zIndex: 100 }}>
          {canvas.clipboard.length} in clipboard • ⌘V to paste
        </div>
      )}
      {/* Context menu */}
      {canvas.contextMenu && (
        <ColorPickerMenu
          x={canvas.contextMenu.x}
          y={canvas.contextMenu.y}
          nodeId={canvas.contextMenu.nodeId}
          currentIcon={canvas.nodeIcons[canvas.contextMenu.nodeId]}
          currentShape={canvas.nodeShapes[canvas.contextMenu.nodeId]}
          onSelectColor={canvas.setNodeColor}
          onSelectIcon={canvas.setNodeIcon}
          onSelectShape={canvas.setNodeShape}
          onClose={canvas.closeContextMenu}
          theme={theme}
        />
      )}
    </div>
  );
}

// Architecture with draggable nodes
function ArchitectureDiagram({ data, theme = THEMES.dark, onLabelChange, onDeleteNodes, onPasteNodes }) {
  const canvas = useInteractiveCanvas({ x: 0, y: 30 });
  const getPos = (node) => canvas.getNodePosition(node.id, node.x, node.y);
  const getShape = (type) => { if (['database', 'cache', 'storage'].includes(type)) return 'cylinder'; if (['gateway', 'loadbalancer'].includes(type)) return 'hexagon'; return 'rect'; };

  // Handle label edit complete
  const handleLabelEditFinish = useCallback(() => {
    const result = canvas.finishEditing();
    if (result.nodeId && result.newValue && onLabelChange) {
      const node = data.nodes.find(n => n.id === result.nodeId);
      if (node && node.label !== result.newValue) {
        onLabelChange(result.nodeId, node.label, result.newValue);
      }
    }
  }, [canvas, data.nodes, onLabelChange]);

  // Handle keyboard shortcuts (Delete, Copy, Paste)
  useEffect(() => {
    const handleKeyDown = (e) => {
      const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform);
      const metaKey = isMac ? e.metaKey : e.ctrlKey;
      if (canvas.editingNode) return;
      if ((e.key === 'Delete' || e.key === 'Backspace') && canvas.selectedNodes.size > 0 && onDeleteNodes) {
        e.preventDefault();
        onDeleteNodes(Array.from(canvas.selectedNodes));
        canvas.clearSelection();
        return;
      }
      if (metaKey && e.key.toLowerCase() === 'c' && canvas.selectedNodes.size > 0) {
        e.preventDefault();
        canvas.copySelectedNodes(data.nodes);
        return;
      }
      if (metaKey && e.key.toLowerCase() === 'v' && canvas.clipboard && onPasteNodes) {
        e.preventDefault();
        const pastedNodes = canvas.pasteNodes();
        if (pastedNodes) onPasteNodes(pastedNodes);
        return;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [canvas, data.nodes, onDeleteNodes, onPasteNodes]);

  // Handle selection box completion
  useEffect(() => {
    if (!canvas.isSelecting && canvas.selectionBox) {
      const nodeIds = canvas.getNodesInSelectionBox(data.nodes, canvas.selectionBox);
      if (nodeIds.length > 0) canvas.setSelectedNodes(new Set(nodeIds));
    }
  }, [canvas.isSelecting, canvas.selectionBox, data.nodes, canvas]);

  // Click on canvas to clear selection
  const handleCanvasClick = useCallback((e) => {
    if (e.target === canvas.canvasRef.current || e.target.classList.contains('canvas-bg')) {
      canvas.clearSelection();
      canvas.closeContextMenu();
    }
  }, [canvas]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}` }}>
      <div ref={canvas.canvasRef} className="canvas-bg" onClick={handleCanvasClick} onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={canvas.handleMouseUp} onMouseLeave={canvas.handleMouseUp} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : canvas.dragging ? 'grabbing' : 'grab' }}>
        <div className="canvas-bg" style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${theme.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * canvas.zoom}px ${25 * canvas.zoom}px`, backgroundPosition: `${canvas.pan.x}px ${canvas.pan.y}px`, pointerEvents: 'none' }} />
        <svg width="100%" height="100%" style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none' }}>
          <defs><marker id="arch-arr" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><polygon points="0 0, 10 4, 0 8" fill={COLORS.purple} /></marker></defs>
          <g transform={`translate(${canvas.pan.x}, ${canvas.pan.y}) scale(${canvas.zoom})`}>
            {data.edges.map(e => {
              const src = data.nodes.find(n => n.id === e.source), tgt = data.nodes.find(n => n.id === e.target);
              if (!src || !tgt) return null;
              const sp = getPos(src), tp = getPos(tgt);
              const dx = tp.x - sp.x, dy = tp.y - sp.y, dist = Math.sqrt(dx * dx + dy * dy) || 1;
              const x1 = sp.x + (dx / dist) * 55, y1 = sp.y + (dy / dist) * 45;
              const x2 = tp.x - (dx / dist) * 55, y2 = tp.y - (dy / dist) * 45;
              const midX = (x1 + x2) / 2, midY = (y1 + y2) / 2;
              // Use curved path instead of straight line
              const path = getCurvedPath(x1, y1, x2, y2);
              return (
                <g key={e.id}>
                  {/* Outer glow layer */}
                  <path d={path} fill="none" stroke={COLORS.purple} strokeWidth={8} strokeOpacity={0.08} strokeLinecap="round" />
                  {/* Inner glow layer */}
                  <path d={path} fill="none" stroke={COLORS.purple} strokeWidth={4} strokeOpacity={0.2} strokeLinecap="round" />
                  {/* Main stroke with dashes */}
                  <path d={path} fill="none" stroke={COLORS.purple} strokeWidth={2} strokeDasharray="6,4" markerEnd="url(#arch-arr)" opacity={0.8} strokeLinecap="round" />
                  {e.label && (
                    <>
                      <rect x={midX - 45} y={midY - 10} width={90} height={20} rx={4} fill="rgba(15,23,42,0.9)" stroke={COLORS.purple} strokeWidth={1} opacity={0.9} />
                      <text x={midX} y={midY + 4} textAnchor="middle" fill={theme.textPrimary} fontSize="10" fontFamily="system-ui" fontWeight="500">{e.label}</text>
                    </>
                  )}
                </g>
              );
            })}
            {/* Selection box */}
            {canvas.isSelecting && canvas.selectionBox && (
              <rect
                x={Math.min(canvas.selectionBox.startX, canvas.selectionBox.endX)}
                y={Math.min(canvas.selectionBox.startY, canvas.selectionBox.endY)}
                width={Math.abs(canvas.selectionBox.endX - canvas.selectionBox.startX)}
                height={Math.abs(canvas.selectionBox.endY - canvas.selectionBox.startY)}
                fill="rgba(124,58,237,0.1)" stroke={COLORS.purple} strokeWidth={2} strokeDasharray="5,5" style={{ pointerEvents: 'none' }}
              />
            )}
          </g>
        </svg>
        <div style={{ position: 'absolute', transform: `translate(${canvas.pan.x}px, ${canvas.pan.y}px) scale(${canvas.zoom})`, transformOrigin: '0 0' }}>
          {data.nodes.map(node => {
            const pos = getPos(node);
            const shape = getShape(node.type);
            const nodeColor = canvas.nodeColors[node.id] || node.color;
            const isDragging = canvas.dragging === node.id;
            const isSelected = canvas.selectedNodes.has(node.id);
            const isEditing = canvas.editingNode === node.id;
            let style = { position: 'absolute', left: pos.x - 65, top: pos.y - 37, width: 130, height: 75, background: getNodeGradient(nodeColor), border: `2px solid ${nodeColor}`, borderRadius: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: isDragging ? 'grabbing' : 'grab', boxShadow: getNodeShadow(nodeColor, isDragging, isSelected), transition: isDragging ? 'none' : 'box-shadow 0.2s' };
            if (shape === 'cylinder') { style.borderRadius = '50% / 15%'; style.height = 85; }
            if (shape === 'hexagon') { style.clipPath = 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)'; style.width = 145; }
            return (
              <div
                key={node.id}
                onMouseDown={(e) => canvas.handleNodeMouseDown(e, node.id, pos.x, pos.y)}
                onDoubleClick={(e) => canvas.handleNodeDoubleClick(e, node.id, node.label)}
                onContextMenu={(e) => canvas.handleNodeContextMenu(e, node.id)}
                style={style}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: 4 }}>{canvas.nodeIcons[node.id] || node.icon}</div>
                <EditableNodeLabel
                  isEditing={isEditing}
                  value={isEditing ? canvas.editValue : node.label}
                  onChange={canvas.setEditValue}
                  onFinish={handleLabelEditFinish}
                  onCancel={canvas.cancelEditing}
                  style={{ fontSize: '0.8rem', fontWeight: 600, color: theme.textPrimary, textAlign: 'center' }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.2, 2.5))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.8, 0.3))} onFit={() => {}} onReset={canvas.resetView} zoom={canvas.zoom} snapToGrid={canvas.snapToGrid} onToggleSnap={() => canvas.setSnapToGrid(v => !v)} />
      {/* Selection info */}
      {canvas.selectedNodes.size > 0 && (
        <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(124,58,237,0.9)', borderRadius: 6, padding: '4px 10px', color: '#fff', fontSize: '0.75rem', zIndex: 100 }}>
          {canvas.selectedNodes.size} selected • ⌘C copy • ⌘V paste • Del remove
        </div>
      )}
      {/* Clipboard indicator */}
      {canvas.clipboard && canvas.clipboard.length > 0 && canvas.selectedNodes.size === 0 && (
        <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(16,185,129,0.9)', borderRadius: 6, padding: '4px 10px', color: '#fff', fontSize: '0.75rem', zIndex: 100 }}>
          {canvas.clipboard.length} in clipboard • ⌘V to paste
        </div>
      )}
      {/* Context menu */}
      {canvas.contextMenu && (
        <ColorPickerMenu
          x={canvas.contextMenu.x}
          y={canvas.contextMenu.y}
          nodeId={canvas.contextMenu.nodeId}
          currentIcon={canvas.nodeIcons[canvas.contextMenu.nodeId]}
          currentShape={canvas.nodeShapes[canvas.contextMenu.nodeId]}
          onSelectColor={canvas.setNodeColor}
          onSelectIcon={canvas.setNodeIcon}
          onSelectShape={canvas.setNodeShape}
          onClose={canvas.closeContextMenu}
          theme={theme}
        />
      )}
    </div>
  );
}

// User Journey with draggable nodes - supports both legacy and section-based formats
function UserJourneyDiagram({ data, theme = THEMES.dark, onLabelChange, onDeleteNodes, onPasteNodes }) {
  // Check if this is the new section-based format
  if (data?.format === 'sections') {
    return <JourneySectionDiagram data={data} theme={theme} />;
  }

  // Legacy format with nodes and edges
  const canvas = useInteractiveCanvas({ x: 50, y: 50 });
  const { nodes, edges } = data;
  const getPos = (node) => canvas.getNodePosition(node.id, node.x, node.y);

  // Calculate content bounds for fit-to-view
  const contentBounds = useMemo(() => {
    if (!nodes || nodes.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const xs = nodes.map(n => n.x);
    const ys = nodes.map(n => n.y);
    const minX = Math.min(...xs) - 100;
    const maxX = Math.max(...xs) + 100;
    const minY = Math.min(...ys) - 80;
    const maxY = Math.max(...ys) + 80;
    return { x: minX, y: minY, width: maxX - minX, height: maxY - minY };
  }, [nodes]);

  // Handle label edit complete
  const handleLabelEditFinish = useCallback(() => {
    const result = canvas.finishEditing();
    if (result.nodeId && result.newValue !== undefined && onLabelChange) {
      const node = nodes.find(n => n.id === result.nodeId);
      if (node && node.label !== result.newValue) {
        onLabelChange(result.nodeId, node.label, result.newValue);
      }
    }
  }, [canvas, nodes, onLabelChange]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform);
      const metaKey = isMac ? e.metaKey : e.ctrlKey;
      if (canvas.editingNode) return;
      if ((e.key === 'Delete' || e.key === 'Backspace') && canvas.selectedNodes.size > 0 && onDeleteNodes) {
        e.preventDefault();
        onDeleteNodes(Array.from(canvas.selectedNodes));
        canvas.clearSelection();
        return;
      }
      if (metaKey && e.key.toLowerCase() === 'c' && canvas.selectedNodes.size > 0) {
        e.preventDefault();
        canvas.copySelectedNodes(nodes);
        return;
      }
      if (metaKey && e.key.toLowerCase() === 'v' && canvas.clipboard && onPasteNodes) {
        e.preventDefault();
        const pastedNodes = canvas.pasteNodes();
        if (pastedNodes) onPasteNodes(pastedNodes);
        return;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [canvas, nodes, onDeleteNodes, onPasteNodes]);

  // Handle selection box completion
  useEffect(() => {
    if (!canvas.isSelecting && canvas.selectionBox) {
      const nodeIds = canvas.getNodesInSelectionBox(nodes, canvas.selectionBox);
      if (nodeIds.length > 0) canvas.setSelectedNodes(new Set(nodeIds));
    }
  }, [canvas.isSelecting, canvas.selectionBox, nodes, canvas]);

  // Handle canvas click to clear selection
  const handleCanvasClick = useCallback((e) => {
    if (e.target === canvas.canvasRef.current || e.target.classList.contains('canvas-bg')) {
      canvas.clearSelection();
      canvas.closeContextMenu();
    }
  }, [canvas]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}`, touchAction: 'none' }}>
      <div ref={canvas.canvasRef} className="canvas-bg" onClick={handleCanvasClick} onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={canvas.handleMouseUp} onMouseLeave={canvas.handleMouseUp} onTouchStart={canvas.handleTouchStart} onTouchMove={canvas.handleTouchMove} onTouchEnd={canvas.handleTouchEnd} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : canvas.dragging ? 'grabbing' : 'grab', touchAction: 'none' }}>
        <div className="canvas-bg" style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${theme.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * canvas.zoom}px ${25 * canvas.zoom}px`, backgroundPosition: `${canvas.pan.x}px ${canvas.pan.y}px`, pointerEvents: 'none' }} />

        <svg width="100%" height="100%" style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none' }}>
          <defs>
            <marker id="journey-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M 0 0 L 6 3 L 0 6 Z" fill={COLORS.purple} opacity="0.9" />
            </marker>
          </defs>
          <g transform={`translate(${canvas.pan.x}, ${canvas.pan.y}) scale(${canvas.zoom})`}>
            {edges.map(edge => {
              const src = nodes.find(n => n.id === edge.source), tgt = nodes.find(n => n.id === edge.target);
              if (!src || !tgt) return null;
              const sp = getPos(src), tp = getPos(tgt);
              const dx = tp.x - sp.x, dy = tp.y - sp.y, dist = Math.sqrt(dx * dx + dy * dy) || 1;

              // Node sizes for edge calculation
              const srcW = src.shape === 'circle' ? 50 : 70, srcH = src.shape === 'circle' ? 50 : 45;
              const tgtW = tgt.shape === 'circle' ? 50 : 70, tgtH = tgt.shape === 'circle' ? 50 : 45;

              // Calculate edge start/end points at node boundaries
              const angle = Math.atan2(dy, dx);
              const sx = sp.x + Math.cos(angle) * srcW;
              const sy = sp.y + Math.sin(angle) * srcH;
              const tx = tp.x - Math.cos(angle) * tgtW;
              const ty = tp.y - Math.sin(angle) * tgtH;

              // Simple quadratic curve - subtle bend
              const midX = (sx + tx) / 2;
              const midY = (sy + ty) / 2;
              const curveOffset = Math.min(Math.abs(dy) * 0.3, 30);
              const ctrlX = midX;
              const ctrlY = midY - curveOffset;

              const path = `M ${sx} ${sy} Q ${ctrlX} ${ctrlY} ${tx} ${ty}`;
              const labelWidth = edge.label ? Math.max(edge.label.length * 7 + 16, 50) : 0;

              return (
                <g key={edge.id}>
                  {/* Outer glow layer */}
                  <path d={path} fill="none" stroke={COLORS.purple} strokeWidth={8} strokeOpacity={0.08} strokeLinecap="round" />
                  {/* Inner glow layer */}
                  <path d={path} fill="none" stroke={COLORS.purple} strokeWidth={4} strokeOpacity={0.2} strokeLinecap="round" />
                  {/* Main line */}
                  <path d={path} fill="none" stroke={COLORS.purple} strokeWidth={2} markerEnd="url(#journey-arrow)" strokeLinecap="round" opacity="0.8" />
                  {/* Animated dots flowing in arrow direction */}
                  <path d={path} fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth={2} strokeLinecap="round" strokeDasharray="4,12">
                    <animate attributeName="stroke-dashoffset" from="16" to="0" dur="0.8s" repeatCount="indefinite" />
                  </path>
                  {/* Label */}
                  {edge.label && (
                    <g>
                      <rect x={midX - labelWidth / 2} y={ctrlY - 10} width={labelWidth} height={20} rx={10} fill="rgba(15, 23, 42, 0.9)" stroke="rgba(124,58,237,0.5)" strokeWidth={1} />
                      <text x={midX} y={ctrlY + 4} textAnchor="middle" fill="#e0e0e0" fontSize={10} fontWeight="500" fontFamily="system-ui, sans-serif">{edge.label}</text>
                    </g>
                  )}
                </g>
              );
            })}
            {/* Selection box */}
            {canvas.isSelecting && canvas.selectionBox && (
              <rect x={Math.min(canvas.selectionBox.startX, canvas.selectionBox.endX)} y={Math.min(canvas.selectionBox.startY, canvas.selectionBox.endY)} width={Math.abs(canvas.selectionBox.endX - canvas.selectionBox.startX)} height={Math.abs(canvas.selectionBox.endY - canvas.selectionBox.startY)} fill={`${COLORS.blue}20`} stroke={COLORS.blue} strokeWidth={1} strokeDasharray="4,4" />
            )}
          </g>
        </svg>

        <div style={{ position: 'absolute', transform: `translate(${canvas.pan.x}px, ${canvas.pan.y}px) scale(${canvas.zoom})`, transformOrigin: '0 0' }}>
          {nodes.map(node => {
            const pos = getPos(node);
            const isDragging = canvas.dragging === node.id;
            const isSelected = canvas.selectedNodes.has(node.id);

            if (node.shape === 'circle') {
              return (
                <div key={node.id} onClick={(e) => canvas.handleNodeClick(e, node.id)} onDoubleClick={(e) => canvas.handleNodeDoubleClick(e, node.id, node.label)} onContextMenu={(e) => canvas.handleNodeContextMenu(e, node.id)} onMouseDown={(e) => canvas.handleNodeMouseDown(e, node.id, pos.x, pos.y)} onTouchStart={(e) => canvas.handleNodeTouchStart(e, node.id, pos.x, pos.y)} style={{ position: 'absolute', left: pos.x - 50, top: pos.y - 50, width: 100, height: 100, borderRadius: '50%', background: getNodeGradient(node.color), border: `2px solid ${isSelected ? COLORS.blue : node.color}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: isDragging ? 'grabbing' : 'grab', boxShadow: getNodeShadow(node.color, isDragging, isSelected), transition: isDragging ? 'none' : 'box-shadow 0.2s', touchAction: 'none' }}>
                  <span style={{ fontSize: 24 }}>{node.icon}</span>
                  {canvas.editingNode === node.id ? (
                    <EditableNodeLabel value={canvas.editingValue} onChange={(v) => canvas.setEditingValue(v)} onFinish={handleLabelEditFinish} style={{ fontSize: 12, fontWeight: 600, color: theme.textPrimary, marginTop: 4 }} />
                  ) : (
                    <span style={{ fontSize: 12, fontWeight: 600, color: theme.textPrimary, marginTop: 4 }}>{node.label}</span>
                  )}
                </div>
              );
            }

            return (
              <div key={node.id} onClick={(e) => canvas.handleNodeClick(e, node.id)} onDoubleClick={(e) => canvas.handleNodeDoubleClick(e, node.id, node.label)} onContextMenu={(e) => canvas.handleNodeContextMenu(e, node.id)} onMouseDown={(e) => canvas.handleNodeMouseDown(e, node.id, pos.x, pos.y)} onTouchStart={(e) => canvas.handleNodeTouchStart(e, node.id, pos.x, pos.y)} style={{ position: 'absolute', left: pos.x - 70, top: pos.y - 45, width: 140, height: 90, background: getNodeGradient(node.color), border: `2px solid ${isSelected ? COLORS.blue : node.color}`, borderRadius: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: isDragging ? 'grabbing' : 'grab', boxShadow: getNodeShadow(node.color, isDragging, isSelected), transition: isDragging ? 'none' : 'box-shadow 0.2s', touchAction: 'none' }}>
                {node.badge && <div style={{ position: 'absolute', top: -10, right: -10, background: COLORS.red, color: '#fff', fontSize: 10, fontWeight: 600, padding: '3px 8px', borderRadius: 10 }}>{node.badge}</div>}
                <span style={{ fontSize: 22 }}>{node.icon}</span>
                {canvas.editingNode === node.id ? (
                  <EditableNodeLabel value={canvas.editingValue} onChange={(v) => canvas.setEditingValue(v)} onFinish={handleLabelEditFinish} style={{ fontSize: 11, fontWeight: 600, color: theme.textPrimary, marginTop: 4 }} />
                ) : (
                  <span style={{ fontSize: 11, fontWeight: 600, color: theme.textPrimary, marginTop: 4 }}>{node.label}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* Selection info */}
      {canvas.selectedNodes.size > 0 && (
        <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(0,0,0,0.8)', padding: '6px 12px', borderRadius: 6, fontSize: '0.75rem', color: '#fff', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span>{canvas.selectedNodes.size} selected</span>
          <span style={{ opacity: 0.6 }}>|</span>
          <span style={{ opacity: 0.7 }}>Del to delete • ⌘C copy • ⌘V paste</span>
        </div>
      )}
      {/* Clipboard indicator */}
      {canvas.clipboard && (
        <div style={{ position: 'absolute', top: canvas.selectedNodes.size > 0 ? 48 : 12, left: 12, background: `${COLORS.green}20`, padding: '4px 10px', borderRadius: 4, fontSize: '0.7rem', color: COLORS.green, border: `1px solid ${COLORS.green}40` }}>
          {canvas.clipboard.length} node{canvas.clipboard.length > 1 ? 's' : ''} copied
        </div>
      )}
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.2, 3))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.8, 0.2))} onFit={() => canvas.fitToView(contentBounds)} onReset={canvas.resetView} zoom={canvas.zoom} />
      {/* Context menu */}
      {canvas.contextMenu && <ColorPickerMenu position={canvas.contextMenu} onClose={() => canvas.closeContextMenu()} nodeId={canvas.contextMenu.nodeId} />}
    </div>
  );
}

// Modern Graphical Journey Visualization - flowing path with emotion curve
function JourneySectionDiagram({ data, theme = THEMES.dark }) {
  const { title, actors, sections } = data;
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 600 });

  // Flatten all tasks with section info for path calculation
  const allTasks = useMemo(() => {
    const tasks = [];
    sections.forEach((section, si) => {
      section.tasks.forEach((task, ti) => {
        tasks.push({ ...task, section: section.name, sectionIndex: si, sectionColor: section.color });
      });
    });
    return tasks;
  }, [sections]);

  // Update dimensions on mount
  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setDimensions({ width: Math.max(rect.width, 800), height: Math.max(rect.height - 80, 400) });
    }
  }, []);

  // Calculate path points and node positions
  const pathData = useMemo(() => {
    const padding = { top: 120, bottom: 100, left: 80, right: 80 };
    const availableWidth = Math.max(dimensions.width - padding.left - padding.right, allTasks.length * 150);
    const availableHeight = dimensions.height - padding.top - padding.bottom;
    const nodeSpacing = availableWidth / Math.max(allTasks.length - 1, 1);

    // Create wave pattern for y positions (alternating up/down for visual interest)
    const nodes = allTasks.map((task, i) => {
      const x = padding.left + i * nodeSpacing;
      // Wave pattern: nodes alternate between top and bottom of center
      const waveAmplitude = availableHeight * 0.2;
      const waveOffset = Math.sin(i * 0.8) * waveAmplitude;
      const baseY = padding.top + availableHeight / 2;
      const y = baseY + waveOffset;

      return { ...task, x, y, index: i };
    });

    // Create smooth curve path through all nodes
    let pathString = '';
    if (nodes.length > 0) {
      pathString = `M ${nodes[0].x} ${nodes[0].y}`;
      for (let i = 1; i < nodes.length; i++) {
        const prev = nodes[i - 1];
        const curr = nodes[i];
        const cpx1 = prev.x + (curr.x - prev.x) * 0.5;
        const cpx2 = prev.x + (curr.x - prev.x) * 0.5;
        pathString += ` C ${cpx1} ${prev.y}, ${cpx2} ${curr.y}, ${curr.x} ${curr.y}`;
      }
    }

    // Calculate emotion curve (score line)
    const emotionPath = nodes.map((node, i) => {
      const scoreY = padding.top + 50 - (node.score - 1) * 12; // Score 5 = high, score 1 = low
      return { x: node.x, y: scoreY, score: node.score };
    });

    let emotionPathString = '';
    if (emotionPath.length > 0) {
      emotionPathString = `M ${emotionPath[0].x} ${emotionPath[0].y}`;
      for (let i = 1; i < emotionPath.length; i++) {
        const prev = emotionPath[i - 1];
        const curr = emotionPath[i];
        const cpx = prev.x + (curr.x - prev.x) * 0.5;
        emotionPathString += ` C ${cpx} ${prev.y}, ${cpx} ${curr.y}, ${curr.x} ${curr.y}`;
      }
    }

    // Section boundaries for background gradients
    const sectionBounds = [];
    let currentSection = -1;
    let sectionStart = 0;
    nodes.forEach((node, i) => {
      if (node.sectionIndex !== currentSection) {
        if (currentSection >= 0) {
          sectionBounds.push({
            index: currentSection,
            start: sectionStart,
            end: node.x - nodeSpacing / 2,
            color: sections[currentSection].color,
            name: sections[currentSection].name
          });
        }
        currentSection = node.sectionIndex;
        sectionStart = i === 0 ? padding.left - 40 : node.x - nodeSpacing / 2;
      }
    });
    // Add last section
    if (currentSection >= 0) {
      sectionBounds.push({
        index: currentSection,
        start: sectionStart,
        end: padding.left + availableWidth + 40,
        color: sections[currentSection].color,
        name: sections[currentSection].name
      });
    }

    return { nodes, pathString, emotionPathString, emotionPath, sectionBounds, padding, availableWidth };
  }, [allTasks, dimensions, sections]);

  // Score colors
  const getScoreColor = (score) => {
    const colors = { 1: '#ef4444', 2: '#f97316', 3: '#eab308', 4: '#22c55e', 5: '#10b981' };
    return colors[score] || '#64748b';
  };

  // Actor styling
  const getActorColor = (name) => {
    const n = name.toLowerCase();
    if (n.includes('user')) return COLORS.pink;
    if (n.includes('system')) return COLORS.blue;
    if (n.includes('admin')) return COLORS.purple;
    return COLORS.cyan;
  };

  const getActorIcon = (name) => {
    const n = name.toLowerCase();
    if (n.includes('user')) return '👤';
    if (n.includes('system')) return '⚙️';
    if (n.includes('admin')) return '👨‍💼';
    return '🧑';
  };

  const totalWidth = pathData.padding.left + pathData.availableWidth + pathData.padding.right;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: `linear-gradient(180deg, ${theme.canvasBg} 0%, rgba(15,23,42,1) 100%)`,
        borderRadius: 12,
        border: `1px solid ${theme.border}`
      }}
    >
      {/* Title Header */}
      {title && (
        <div style={{
          position: 'absolute',
          top: 16,
          left: 24,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 12
        }}>
          <div style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            boxShadow: '0 4px 20px rgba(139,92,246,0.4)'
          }}>
            🚀
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: theme.textPrimary }}>{title}</h2>
            <p style={{ margin: 0, fontSize: '0.75rem', color: theme.textSecondary }}>{allTasks.length} steps across {sections.length} phases</p>
          </div>
        </div>
      )}

      {/* Actor Legend */}
      {actors.length > 0 && (
        <div style={{
          position: 'absolute',
          top: 16,
          right: 24,
          zIndex: 10,
          display: 'flex',
          gap: 8
        }}>
          {actors.map((actor, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 14px',
              borderRadius: 20,
              background: `${getActorColor(actor.name)}15`,
              border: `1px solid ${getActorColor(actor.name)}40`,
              backdropFilter: 'blur(8px)'
            }}>
              <span style={{ fontSize: '0.9rem' }}>{getActorIcon(actor.name)}</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: getActorColor(actor.name) }}>{actor.name}</span>
            </div>
          ))}
        </div>
      )}

      {/* Scrollable SVG Canvas */}
      <div style={{ width: '100%', height: '100%', overflowX: 'auto', overflowY: 'hidden' }}>
        <svg
          width={Math.max(totalWidth, dimensions.width)}
          height={dimensions.height}
          style={{ display: 'block' }}
        >
          <defs>
            {/* Gradient for main path */}
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={COLORS.purple} />
              <stop offset="50%" stopColor={COLORS.pink} />
              <stop offset="100%" stopColor={COLORS.cyan} />
            </linearGradient>

            {/* Glow filter */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Section gradients */}
            {pathData.sectionBounds.map((section, i) => (
              <linearGradient key={i} id={`sectionGrad${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={section.color} stopOpacity="0.08" />
                <stop offset="100%" stopColor={section.color} stopOpacity="0.02" />
              </linearGradient>
            ))}

            {/* Emotion curve gradient */}
            <linearGradient id="emotionGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>

          {/* Section background panels */}
          {pathData.sectionBounds.map((section, i) => (
            <g key={`section-${i}`}>
              <rect
                x={section.start}
                y={60}
                width={section.end - section.start}
                height={dimensions.height - 120}
                rx={16}
                fill={`url(#sectionGrad${i})`}
              />
              {/* Section label at top */}
              <text
                x={section.start + (section.end - section.start) / 2}
                y={85}
                textAnchor="middle"
                fill={section.color}
                fontSize="11"
                fontWeight="600"
                fontFamily="system-ui"
                opacity="0.8"
              >
                {section.name.toUpperCase()}
              </text>
              {/* Section number badge */}
              <circle
                cx={section.start + 30}
                cy={85}
                r={12}
                fill={section.color}
                opacity="0.9"
              />
              <text
                x={section.start + 30}
                y={89}
                textAnchor="middle"
                fill="#fff"
                fontSize="10"
                fontWeight="700"
                fontFamily="system-ui"
              >
                {i + 1}
              </text>
            </g>
          ))}

          {/* Emotion Curve (sentiment journey line) */}
          <g>
            {/* Background area under emotion curve */}
            <path
              d={pathData.emotionPathString + ` L ${pathData.emotionPath[pathData.emotionPath.length - 1]?.x || 0} ${pathData.padding.top + 60} L ${pathData.emotionPath[0]?.x || 0} ${pathData.padding.top + 60} Z`}
              fill="url(#emotionGrad)"
              opacity="0.1"
            />
            {/* Emotion curve line */}
            <path
              d={pathData.emotionPathString}
              fill="none"
              stroke="url(#emotionGrad)"
              strokeWidth="2"
              strokeDasharray="4,4"
              opacity="0.6"
            />
            {/* Score dots on emotion curve */}
            {pathData.emotionPath.map((point, i) => (
              <circle
                key={`emotion-${i}`}
                cx={point.x}
                cy={point.y}
                r={4}
                fill={getScoreColor(point.score)}
                opacity="0.8"
              />
            ))}
            {/* Emotion scale labels */}
            <text x={pathData.padding.left - 45} y={pathData.padding.top + 10} fill={theme.textSecondary} fontSize="9" fontFamily="system-ui">😊 Great</text>
            <text x={pathData.padding.left - 45} y={pathData.padding.top + 58} fill={theme.textSecondary} fontSize="9" fontFamily="system-ui">😞 Poor</text>
          </g>

          {/* Main Journey Path - glowing background */}
          <path
            d={pathData.pathString}
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.2"
            filter="url(#glow)"
          />

          {/* Main Journey Path */}
          <path
            d={pathData.pathString}
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Animated flowing particles */}
          <path
            d={pathData.pathString}
            fill="none"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="8,40"
            opacity="0.6"
          >
            <animate attributeName="stroke-dashoffset" from="48" to="0" dur="2s" repeatCount="indefinite" />
          </path>

          {/* Journey Nodes */}
          {pathData.nodes.map((node, i) => {
            const nodeSize = 48;
            const actorColor = node.actors.length > 0 ? getActorColor(node.actors[0]) : node.sectionColor;

            return (
              <g key={node.id} style={{ cursor: 'pointer' }}>
                {/* Node glow */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={nodeSize / 2 + 8}
                  fill={actorColor}
                  opacity="0.15"
                  filter="url(#glow)"
                />

                {/* Node outer ring */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={nodeSize / 2 + 3}
                  fill="none"
                  stroke={actorColor}
                  strokeWidth="2"
                  opacity="0.5"
                />

                {/* Node background */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={nodeSize / 2}
                  fill={`${theme.canvasBg}`}
                  stroke={actorColor}
                  strokeWidth="2"
                />

                {/* Score indicator ring */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={nodeSize / 2 - 4}
                  fill="none"
                  stroke={getScoreColor(node.score)}
                  strokeWidth="3"
                  strokeDasharray={`${(node.score / 5) * 100} 100`}
                  transform={`rotate(-90 ${node.x} ${node.y})`}
                  opacity="0.8"
                />

                {/* Step number */}
                <text
                  x={node.x}
                  y={node.y + 4}
                  textAnchor="middle"
                  fill={theme.textPrimary}
                  fontSize="14"
                  fontWeight="700"
                  fontFamily="system-ui"
                >
                  {i + 1}
                </text>

                {/* Actor icon badge */}
                {node.actors.length > 0 && (
                  <g>
                    <circle
                      cx={node.x + nodeSize / 2 - 4}
                      cy={node.y - nodeSize / 2 + 4}
                      r={10}
                      fill={actorColor}
                    />
                    <text
                      x={node.x + nodeSize / 2 - 4}
                      y={node.y - nodeSize / 2 + 8}
                      textAnchor="middle"
                      fontSize="10"
                    >
                      {getActorIcon(node.actors[0])}
                    </text>
                  </g>
                )}

                {/* Task label below node */}
                <foreignObject
                  x={node.x - 70}
                  y={node.y + nodeSize / 2 + 8}
                  width="140"
                  height="50"
                >
                  <div style={{
                    textAlign: 'center',
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    color: theme.textPrimary,
                    lineHeight: 1.3,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical'
                  }}>
                    {node.name}
                  </div>
                </foreignObject>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Bottom Legend */}
      <div style={{
        position: 'absolute',
        bottom: 12,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 24,
        padding: '8px 20px',
        background: 'rgba(0,0,0,0.6)',
        borderRadius: 20,
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 20, height: 3, background: 'linear-gradient(90deg, #8b5cf6, #ec4899, #06b6d4)', borderRadius: 2 }} />
          <span style={{ fontSize: '0.7rem', color: theme.textSecondary }}>Journey Path</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 20, height: 2, background: '#22c55e', borderRadius: 2, opacity: 0.6 }} />
          <span style={{ fontSize: '0.7rem', color: theme.textSecondary }}>Sentiment</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {[5, 4, 3, 2, 1].map(s => (
            <div key={s} style={{ width: 8, height: 8, borderRadius: '50%', background: getScoreColor(s) }} />
          ))}
          <span style={{ fontSize: '0.7rem', color: theme.textSecondary, marginLeft: 4 }}>Score</span>
        </div>
      </div>
    </div>
  );
}

// Flow Diagram with draggable nodes
function FlowDiagram({ nodes: initNodes, edges, theme = THEMES.dark, onLabelChange, onDeleteNodes, onPasteNodes, onEdgeLabelChange, onCreateConnection }) {
  const canvas = useInteractiveCanvas({ x: 50, y: 50 });
  const styles = { start: { color: COLORS.green, icon: '▶' }, end: { color: COLORS.red, icon: '■' }, process: { color: COLORS.blue, icon: '⚙️' }, decision: { color: COLORS.orange, icon: '◇' }, action: { color: COLORS.blue, icon: '▹' }, io: { color: COLORS.purple, icon: '📦' }, default: { color: COLORS.purple, icon: '📦' } };
  const getPos = (node) => canvas.getNodePosition(node.id, node.x, node.y);

  const contentBounds = useMemo(() => {
    if (!initNodes || initNodes.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const xs = initNodes.map(n => n.x);
    const ys = initNodes.map(n => n.y);
    return { x: Math.min(...xs) - 100, y: Math.min(...ys) - 80, width: Math.max(...xs) - Math.min(...xs) + 300, height: Math.max(...ys) - Math.min(...ys) + 200 };
  }, [initNodes]);

  // Handle label edit complete
  const handleLabelEditFinish = useCallback(() => {
    const result = canvas.finishEditing();
    if (result.nodeId && result.newValue && onLabelChange) {
      const node = initNodes.find(n => n.id === result.nodeId);
      if (node && node.label !== result.newValue) {
        onLabelChange(result.nodeId, node.label, result.newValue);
      }
    }
  }, [canvas, initNodes, onLabelChange]);

  // Handle edge label edit complete
  const handleEdgeLabelEditFinish = useCallback(() => {
    const result = canvas.finishEdgeEditing();
    if (result.edgeId && onEdgeLabelChange) {
      const edge = edges.find(e => e.id === result.edgeId);
      onEdgeLabelChange(result.edgeId, edge?.label || '', result.newValue);
    }
  }, [canvas, edges, onEdgeLabelChange]);

  // Auto-layout: arrange nodes in a hierarchical tree layout
  const applyAutoLayout = useCallback(() => {
    if (!initNodes || initNodes.length === 0) return;

    // Build adjacency list
    const outgoing = new Map(); // nodeId -> [targetIds]
    const incoming = new Map(); // nodeId -> count
    initNodes.forEach(n => {
      outgoing.set(n.id, []);
      incoming.set(n.id, 0);
    });
    edges.forEach(e => {
      if (outgoing.has(e.source)) {
        outgoing.get(e.source).push(e.target);
      }
      if (incoming.has(e.target)) {
        incoming.set(e.target, incoming.get(e.target) + 1);
      }
    });

    // Find root nodes (no incoming edges)
    const roots = initNodes.filter(n => incoming.get(n.id) === 0);
    if (roots.length === 0) {
      // If no roots (cyclic), just use first node
      roots.push(initNodes[0]);
    }

    // BFS to assign levels
    const levels = new Map();
    const queue = roots.map(r => ({ id: r.id, level: 0 }));
    const visited = new Set();

    while (queue.length > 0) {
      const { id, level } = queue.shift();
      if (visited.has(id)) continue;
      visited.add(id);
      levels.set(id, level);

      const children = outgoing.get(id) || [];
      children.forEach(childId => {
        if (!visited.has(childId)) {
          queue.push({ id: childId, level: level + 1 });
        }
      });
    }

    // Handle unvisited nodes (disconnected)
    initNodes.forEach(n => {
      if (!visited.has(n.id)) {
        levels.set(n.id, 0);
      }
    });

    // Group nodes by level
    const levelGroups = new Map();
    levels.forEach((level, id) => {
      if (!levelGroups.has(level)) levelGroups.set(level, []);
      levelGroups.get(level).push(id);
    });

    // Calculate positions
    const LEVEL_HEIGHT = 120;
    const NODE_SPACING = 180;
    const START_Y = 100;
    const newPositions = {};

    levelGroups.forEach((nodeIds, level) => {
      const y = START_Y + level * LEVEL_HEIGHT;
      const totalWidth = (nodeIds.length - 1) * NODE_SPACING;
      const startX = 300 - totalWidth / 2;

      nodeIds.forEach((nodeId, index) => {
        newPositions[nodeId] = {
          x: startX + index * NODE_SPACING,
          y: y
        };
      });
    });

    canvas.setPositions(newPositions);
    canvas.fitToView(contentBounds);
  }, [initNodes, edges, canvas, contentBounds]);

  // Distribute selected nodes horizontally (evenly spaced)
  const distributeHorizontally = useCallback(() => {
    const selectedIds = Array.from(canvas.selectedNodes);
    if (selectedIds.length < 3) return;

    // Get current positions
    const nodePositions = selectedIds.map(id => ({
      id,
      x: canvas.positions[id]?.x ?? initNodes.find(n => n.id === id)?.x ?? 0
    }));

    // Sort by x position
    nodePositions.sort((a, b) => a.x - b.x);

    // Calculate new positions
    const minX = nodePositions[0].x;
    const maxX = nodePositions[nodePositions.length - 1].x;
    const spacing = (maxX - minX) / (nodePositions.length - 1);

    const newPositions = { ...canvas.positions };
    nodePositions.forEach((node, index) => {
      const currentY = newPositions[node.id]?.y ?? initNodes.find(n => n.id === node.id)?.y ?? 0;
      newPositions[node.id] = { x: minX + index * spacing, y: currentY };
    });

    canvas.setPositions(newPositions);
  }, [canvas, initNodes]);

  // Distribute selected nodes vertically (evenly spaced)
  const distributeVertically = useCallback(() => {
    const selectedIds = Array.from(canvas.selectedNodes);
    if (selectedIds.length < 3) return;

    // Get current positions
    const nodePositions = selectedIds.map(id => ({
      id,
      y: canvas.positions[id]?.y ?? initNodes.find(n => n.id === id)?.y ?? 0
    }));

    // Sort by y position
    nodePositions.sort((a, b) => a.y - b.y);

    // Calculate new positions
    const minY = nodePositions[0].y;
    const maxY = nodePositions[nodePositions.length - 1].y;
    const spacing = (maxY - minY) / (nodePositions.length - 1);

    const newPositions = { ...canvas.positions };
    nodePositions.forEach((node, index) => {
      const currentX = newPositions[node.id]?.x ?? initNodes.find(n => n.id === node.id)?.x ?? 0;
      newPositions[node.id] = { x: currentX, y: minY + index * spacing };
    });

    canvas.setPositions(newPositions);
  }, [canvas, initNodes]);

  // Update alignment guides when dragging
  useEffect(() => {
    if (canvas.dragging) {
      const draggedPos = getPos({ id: canvas.dragging });
      canvas.updateAlignmentGuides(canvas.dragging, draggedPos, initNodes, getPos);
    }
  }, [canvas.dragging, canvas.positions, initNodes, getPos, canvas.updateAlignmentGuides]);

  // Handle keyboard shortcuts (Delete, Copy, Paste)
  useEffect(() => {
    const handleKeyDown = (e) => {
      const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform);
      const metaKey = isMac ? e.metaKey : e.ctrlKey;

      // Don't handle shortcuts when editing
      if (canvas.editingNode || canvas.editingEdge) return;

      // Delete selected nodes
      if ((e.key === 'Delete' || e.key === 'Backspace') && canvas.selectedNodes.size > 0 && onDeleteNodes) {
        e.preventDefault();
        onDeleteNodes(Array.from(canvas.selectedNodes));
        canvas.clearSelection();
        return;
      }

      // Copy (Cmd+C)
      if (metaKey && e.key.toLowerCase() === 'c' && canvas.selectedNodes.size > 0) {
        e.preventDefault();
        canvas.copySelectedNodes(initNodes);
        return;
      }

      // Paste (Cmd+V)
      if (metaKey && e.key.toLowerCase() === 'v' && canvas.clipboard && onPasteNodes) {
        e.preventDefault();
        const pastedNodes = canvas.pasteNodes();
        if (pastedNodes) {
          onPasteNodes(pastedNodes);
        }
        return;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [canvas, initNodes, onDeleteNodes, onPasteNodes]);

  // Handle selection box completion - select nodes within box
  useEffect(() => {
    if (!canvas.isSelecting && canvas.selectionBox) {
      const nodeIds = canvas.getNodesInSelectionBox(initNodes, canvas.selectionBox);
      if (nodeIds.length > 0) {
        canvas.setSelectedNodes(new Set(nodeIds));
      }
    }
  }, [canvas.isSelecting, canvas.selectionBox, initNodes, canvas]);

  // Click on canvas to clear selection
  const handleCanvasClick = useCallback((e) => {
    if (e.target === canvas.canvasRef.current || e.target.classList.contains('canvas-bg')) {
      canvas.clearSelection();
      canvas.closeContextMenu();
      canvas.closeEdgeContextMenu();
      canvas.cancelEdgeEditing();
    }
  }, [canvas]);

  // Helper to get edge style properties
  const getEdgeStyleProps = useCallback((edgeId) => {
    const style = canvas.edgeStyles[edgeId] || 'animated';
    const arrowType = canvas.edgeArrowTypes[edgeId] || 'triangle';
    const opt = EDGE_STYLE_OPTIONS.find(o => o.style === style) || EDGE_STYLE_OPTIONS[0];

    // Determine marker URL based on arrow type
    let markerEnd = 'url(#flow-arr-triangle)';
    if (arrowType === 'none') {
      markerEnd = '';
    } else if (arrowType === 'open') {
      markerEnd = 'url(#flow-arr-open)';
    } else if (arrowType === 'diamond') {
      markerEnd = 'url(#flow-arr-diamond)';
    } else if (arrowType === 'circle') {
      markerEnd = 'url(#flow-arr-circle)';
    }

    return {
      strokeDasharray: opt.dasharray,
      animation: opt.animated ? 'flowDash 1s linear infinite' : 'none',
      markerEnd,
    };
  }, [canvas.edgeStyles, canvas.edgeArrowTypes]);

  // Wrap mouse up to handle connection completion
  const handleMouseUpWithConnection = useCallback((e) => {
    const connection = canvas.handleMouseUp();
    if (connection && onCreateConnection) {
      onCreateConnection(connection.source, connection.target);
    }
  }, [canvas, onCreateConnection]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}`, touchAction: 'none' }}>
      <style>{`
        @keyframes flowDash { to { stroke-dashoffset: -20; } }
        .flow-node:hover .connection-port-right { opacity: 1 !important; transform: translateY(-50%) scale(1.1) !important; }
        .flow-node:hover .connection-port-left { opacity: 0.3 !important; }
        .edge-add-label:hover { opacity: 1 !important; }
      `}</style>
      <div ref={canvas.canvasRef} className="canvas-bg" onClick={handleCanvasClick} onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={handleMouseUpWithConnection} onMouseLeave={handleMouseUpWithConnection} onTouchStart={canvas.handleTouchStart} onTouchMove={canvas.handleTouchMove} onTouchEnd={canvas.handleTouchEnd} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : canvas.dragging ? 'grabbing' : canvas.isConnecting ? 'crosshair' : 'grab', touchAction: 'none' }}>
        <div className="canvas-bg" style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${theme.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * canvas.zoom}px ${25 * canvas.zoom}px`, backgroundPosition: `${canvas.pan.x}px ${canvas.pan.y}px`, pointerEvents: 'none' }} />
        <svg width="100%" height="100%" style={{ position: 'absolute', overflow: 'visible' }}>
          <defs>
            {/* Triangle arrow (filled) */}
            <marker id="flow-arr-triangle" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><polygon points="0 0, 10 4, 0 8" fill={COLORS.purple} /></marker>
            {/* Open arrow (outline only) */}
            <marker id="flow-arr-open" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><polyline points="0 0, 10 4, 0 8" fill="none" stroke={COLORS.purple} strokeWidth="2" /></marker>
            {/* Diamond arrow */}
            <marker id="flow-arr-diamond" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto"><polygon points="0 4, 6 0, 12 4, 6 8" fill={COLORS.purple} /></marker>
            {/* Circle arrow */}
            <marker id="flow-arr-circle" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><circle cx="5" cy="5" r="4" fill={COLORS.purple} /></marker>
            {/* Default/backward compatibility */}
            <marker id="flow-arr" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><polygon points="0 0, 10 4, 0 8" fill={COLORS.purple} /></marker>
          </defs>
          <g transform={`translate(${canvas.pan.x}, ${canvas.pan.y}) scale(${canvas.zoom})`}>
            {edges.map(e => {
              const src = initNodes.find(n => n.id === e.source), tgt = initNodes.find(n => n.id === e.target);
              if (!src || !tgt) return null;
              const sp = getPos(src), tp = getPos(tgt);
              const dx = tp.x - sp.x, dy = tp.y - sp.y, dist = Math.sqrt(dx * dx + dy * dy) || 1;
              const srcR = src.type === 'decision' ? 45 : 40, tgtR = tgt.type === 'decision' ? 45 : 40;
              const sx = sp.x + (dx / dist) * srcR, sy = sp.y + (dy / dist) * 35;
              const tx = tp.x - (dx / dist) * tgtR, ty = tp.y - (dy / dist) * 35;
              // Get path type (curved, straight, or step)
              const pathType = canvas.edgePathTypes[e.id] || 'curved';
              const midX = (sx + tx) / 2, midY = (sy + ty) / 2;
              const curveOffset = pathType === 'straight' ? 0 : (Math.abs(dx) > 50 ? Math.sign(dy || 1) * 20 : 0);
              let path;
              if (pathType === 'straight') {
                path = `M ${sx} ${sy} L ${tx} ${ty}`;
              } else if (pathType === 'step') {
                // Orthogonal/step path with right angles
                if (Math.abs(dx) > Math.abs(dy)) {
                  // More horizontal - go right first, then up/down
                  path = `M ${sx} ${sy} L ${midX} ${sy} L ${midX} ${ty} L ${tx} ${ty}`;
                } else {
                  // More vertical - go down first, then left/right
                  path = `M ${sx} ${sy} L ${sx} ${midY} L ${tx} ${midY} L ${tx} ${ty}`;
                }
              } else {
                // Smooth curved (default) - use cubic bezier for smoother curves
                path = getCurvedPath(sx, sy, tx, ty);
              }
              const isEditingThisEdge = canvas.editingEdge === e.id;
              const labelText = isEditingThisEdge ? canvas.edgeEditValue : (e.label || '');
              const edgeStyleProps = getEdgeStyleProps(e.id);
              return (
                <g key={e.id}>
                  {/* Invisible wider path for easier clicking */}
                  <path d={path} fill="none" stroke="transparent" strokeWidth={20} style={{ cursor: 'pointer', pointerEvents: 'stroke' }} onDoubleClick={(ev) => { ev.stopPropagation(); canvas.handleEdgeDoubleClick(ev, e.id, e.label || ''); }} onContextMenu={(ev) => { ev.preventDefault(); ev.stopPropagation(); canvas.handleEdgeContextMenu(ev, e.id); }} />
                  {/* Outer glow layer */}
                  <path d={path} fill="none" stroke={COLORS.purple} strokeWidth={8} strokeOpacity={0.08} strokeLinecap="round" style={{ pointerEvents: 'none' }} />
                  {/* Inner glow layer */}
                  <path d={path} fill="none" stroke={COLORS.purple} strokeWidth={4} strokeOpacity={0.2} strokeLinecap="round" style={{ pointerEvents: 'none' }} />
                  {/* Main stroke */}
                  <path d={path} fill="none" stroke={COLORS.purple} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={edgeStyleProps.strokeDasharray} markerEnd={edgeStyleProps.markerEnd} opacity={0.9} style={{ animation: edgeStyleProps.animation, pointerEvents: 'none' }} />
                  {/* Edge label or edit input */}
                  {(labelText || isEditingThisEdge) && (
                    <g style={{ cursor: 'pointer' }} onDoubleClick={(ev) => { ev.stopPropagation(); canvas.handleEdgeDoubleClick(ev, e.id, e.label || ''); }}>
                      <rect x={midX - Math.max(labelText.length, 3) * 3.5 - 8} y={midY + curveOffset - 12} width={Math.max(labelText.length, 3) * 7 + 16} height={22} rx={11} fill={isEditingThisEdge ? 'rgba(124,58,237,0.3)' : 'rgba(15,23,42,0.9)'} stroke={isEditingThisEdge ? COLORS.purple : 'rgba(124,58,237,0.4)'} strokeWidth={isEditingThisEdge ? 2 : 1} />
                      {!isEditingThisEdge && <text x={midX} y={midY + curveOffset + 4} textAnchor="middle" fill="#e0e0e0" fontSize={10} fontWeight={500}>{labelText}</text>}
                    </g>
                  )}
                  {/* Add label hint when no label */}
                  {!labelText && !isEditingThisEdge && (
                    <g style={{ cursor: 'pointer', opacity: 0 }} className="edge-add-label" onDoubleClick={(ev) => { ev.stopPropagation(); canvas.handleEdgeDoubleClick(ev, e.id, ''); }}>
                      <rect x={midX - 20} y={midY + curveOffset - 10} width={40} height={20} rx={10} fill="rgba(124,58,237,0.2)" />
                      <text x={midX} y={midY + curveOffset + 4} textAnchor="middle" fill="#888" fontSize={9}>+ label</text>
                    </g>
                  )}
                </g>
              );
            })}
            {/* Selection box */}
            {canvas.isSelecting && canvas.selectionBox && (
              <rect
                x={Math.min(canvas.selectionBox.startX, canvas.selectionBox.endX)}
                y={Math.min(canvas.selectionBox.startY, canvas.selectionBox.endY)}
                width={Math.abs(canvas.selectionBox.endX - canvas.selectionBox.startX)}
                height={Math.abs(canvas.selectionBox.endY - canvas.selectionBox.startY)}
                fill="rgba(124,58,237,0.1)"
                stroke={COLORS.purple}
                strokeWidth={2}
                strokeDasharray="5,5"
                style={{ pointerEvents: 'none' }}
              />
            )}
            {/* Connection preview line while drawing */}
            {canvas.isConnecting && canvas.connectionStart && canvas.connectionEnd && (
              <g style={{ pointerEvents: 'none' }}>
                <line
                  x1={canvas.connectionStart.x}
                  y1={canvas.connectionStart.y}
                  x2={canvas.connectionEnd.x}
                  y2={canvas.connectionEnd.y}
                  stroke={canvas.connectionTarget ? COLORS.green : COLORS.purple}
                  strokeWidth={3}
                  strokeDasharray="8,4"
                  opacity={0.8}
                />
                {/* Target indicator circle */}
                <circle
                  cx={canvas.connectionEnd.x}
                  cy={canvas.connectionEnd.y}
                  r={8}
                  fill={canvas.connectionTarget ? COLORS.green : COLORS.purple}
                  opacity={0.6}
                />
              </g>
            )}
            {/* Alignment guides */}
            {canvas.alignmentGuides.horizontal.map((guide, i) => (
              <line
                key={`h-${i}`}
                x1={guide.fromX}
                y1={guide.y}
                x2={guide.toX}
                y2={guide.y}
                stroke={COLORS.cyan}
                strokeWidth={1}
                strokeDasharray="4,4"
                opacity={0.8}
                style={{ pointerEvents: 'none' }}
              />
            ))}
            {canvas.alignmentGuides.vertical.map((guide, i) => (
              <line
                key={`v-${i}`}
                x1={guide.x}
                y1={guide.fromY}
                x2={guide.x}
                y2={guide.toY}
                stroke={COLORS.cyan}
                strokeWidth={1}
                strokeDasharray="4,4"
                opacity={0.8}
                style={{ pointerEvents: 'none' }}
              />
            ))}
          </g>
        </svg>
        {/* Edge label edit input (positioned in screen space) */}
        {canvas.editingEdge && (() => {
          const edge = edges.find(e => e.id === canvas.editingEdge);
          if (!edge) return null;
          const src = initNodes.find(n => n.id === edge.source), tgt = initNodes.find(n => n.id === edge.target);
          if (!src || !tgt) return null;
          const sp = getPos(src), tp = getPos(tgt);
          const midX = (sp.x + tp.x) / 2, midY = (sp.y + tp.y) / 2;
          const screenX = midX * canvas.zoom + canvas.pan.x;
          const screenY = midY * canvas.zoom + canvas.pan.y;
          return (
            <div style={{ position: 'absolute', left: screenX - 50, top: screenY - 12, zIndex: 200 }}>
              <input
                autoFocus
                type="text"
                value={canvas.edgeEditValue}
                onChange={(ev) => canvas.setEdgeEditValue(ev.target.value)}
                onKeyDown={(ev) => { if (ev.key === 'Enter') { ev.preventDefault(); handleEdgeLabelEditFinish(); } else if (ev.key === 'Escape') { ev.preventDefault(); canvas.cancelEdgeEditing(); } }}
                onBlur={handleEdgeLabelEditFinish}
                placeholder="Label"
                style={{ width: 100, padding: '4px 8px', background: 'rgba(15,23,42,0.95)', border: `2px solid ${COLORS.purple}`, borderRadius: 8, color: '#fff', fontSize: '0.75rem', textAlign: 'center', outline: 'none' }}
                onClick={(ev) => ev.stopPropagation()}
                onMouseDown={(ev) => ev.stopPropagation()}
              />
            </div>
          );
        })()}
        <div style={{ position: 'absolute', transform: `translate(${canvas.pan.x}px, ${canvas.pan.y}px) scale(${canvas.zoom})`, transformOrigin: '0 0' }}>
          {initNodes.map(node => {
            const pos = getPos(node);
            const s = styles[node.type] || styles.default;
            // Use node's parsed color, then canvas custom color, then type-based color
            const nodeColor = canvas.nodeColors[node.id] || node.color || s.color;
            const isDragging = canvas.dragging === node.id;
            const isSelected = canvas.selectedNodes.has(node.id);
            const isEditing = canvas.editingNode === node.id;
            const isResizing = canvas.resizing?.nodeId === node.id;
            // Get custom shape (or determine from node type)
            const customShape = canvas.nodeShapes[node.id];
            const nodeShape = customShape || (node.type === 'decision' ? 'diamond' : (['start', 'end'].includes(node.type) ? 'pill' : 'rounded'));
            const isDiamond = nodeShape === 'diamond';
            // Get custom size, then parsed size from node, then default
            const canvasSize = canvas.getNodeSize(node.id);
            const nodeSize = canvas.nodeSizes[node.id] ? canvasSize : {
              width: node.width || canvasSize.width,
              height: node.height || canvasSize.height
            };
            const isCircle = nodeShape === 'circle';
            const circleSize = Math.max(nodeSize.width, nodeSize.height);
            const nodeWidth = isDiamond ? 70 : (isCircle ? circleSize : nodeSize.width);
            const nodeHeight = isDiamond ? 70 : (isCircle ? circleSize : nodeSize.height);
            // Compute border radius based on shape
            let borderRadius = 12;
            let clipPath = undefined;
            if (nodeShape === 'rectangle') borderRadius = 0;
            else if (nodeShape === 'rounded') borderRadius = 12;
            else if (nodeShape === 'circle') borderRadius = '50%';
            else if (nodeShape === 'pill') borderRadius = nodeHeight / 2;
            else if (nodeShape === 'hexagon') clipPath = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';
            let style = {
              position: 'absolute',
              left: pos.x - nodeWidth / 2,
              top: pos.y - nodeHeight / 2,
              width: nodeWidth,
              height: nodeHeight,
              background: getNodeGradient(nodeColor), border: `2px solid ${nodeColor}`,
              borderRadius: borderRadius,
              clipPath: clipPath,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              cursor: isDragging ? 'grabbing' : isResizing ? 'nwse-resize' : 'grab',
              boxShadow: getNodeShadow(nodeColor, isDragging, isSelected),
              transition: isDragging || isResizing ? 'none' : 'box-shadow 0.2s, background 0.2s', touchAction: 'none'
            };
            if (isDiamond) { style.left = pos.x - 35; style.top = pos.y - 35; style.transform = 'rotate(45deg)'; style.borderRadius = 8; style.clipPath = undefined; }
            const isConnectionTarget = canvas.isConnecting && canvas.connectionTarget === node.id;
            const canBeTarget = canvas.isConnecting && canvas.connectionStart?.nodeId !== node.id;
            // Calculate port positions (right side for outgoing, left for incoming)
            const portRightX = isDiamond ? 35 : nodeWidth / 2;
            const portLeftX = isDiamond ? -35 : -nodeWidth / 2;
            return (
              <div
                key={node.id}
                className="flow-node"
                onMouseDown={(e) => canvas.handleNodeMouseDown(e, node.id, pos.x, pos.y)}
                onDoubleClick={(e) => canvas.handleNodeDoubleClick(e, node.id, node.label)}
                onContextMenu={(e) => canvas.handleNodeContextMenu(e, node.id)}
                onTouchStart={(e) => canvas.handleNodeTouchStart(e, node.id, pos.x, pos.y)}
                onMouseEnter={() => canBeTarget && canvas.setConnectionTargetNode(node.id)}
                onMouseLeave={() => canvas.clearConnectionTarget()}
                style={{
                  ...style,
                  boxShadow: isConnectionTarget
                    ? `0 0 0 4px ${COLORS.green}, 0 0 30px ${COLORS.green}50`
                    : style.boxShadow
                }}
              >
                <div style={{ transform: isDiamond ? 'rotate(-45deg)' : 'none', textAlign: 'center', width: '100%', padding: '0 8px' }}>
                  {(canvas.nodeIcons[node.id] || s.icon) && <div style={{ fontSize: '1.2rem' }}>{canvas.nodeIcons[node.id] || s.icon}</div>}
                  <EditableNodeLabel
                    isEditing={isEditing}
                    value={isEditing ? canvas.editValue : node.label}
                    onChange={canvas.setEditValue}
                    onFinish={handleLabelEditFinish}
                    onCancel={canvas.cancelEditing}
                    style={{ fontSize: '0.8rem', fontWeight: 600, color: theme.textPrimary }}
                  />
                </div>
                {/* Right port - for starting connections (outgoing) */}
                <div
                  className="connection-port connection-port-right"
                  onMouseDown={(e) => canvas.handlePortMouseDown(e, node.id, pos.x + portRightX, pos.y)}
                  style={{
                    position: 'absolute',
                    right: isDiamond ? -8 : -8,
                    top: '50%',
                    transform: isDiamond ? 'rotate(-45deg) translateY(-50%)' : 'translateY(-50%)',
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: COLORS.purple,
                    border: '3px solid rgba(255,255,255,0.9)',
                    cursor: 'crosshair',
                    opacity: 0,
                    transition: 'opacity 0.15s, transform 0.15s',
                    zIndex: 10
                  }}
                  title="Drag to connect"
                />
                {/* Left port - for receiving connections (incoming) */}
                <div
                  className="connection-port connection-port-left"
                  style={{
                    position: 'absolute',
                    left: isDiamond ? -8 : -8,
                    top: '50%',
                    transform: isDiamond ? 'rotate(-45deg) translateY(-50%)' : 'translateY(-50%)',
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: canBeTarget ? COLORS.green : COLORS.blue,
                    border: '3px solid rgba(255,255,255,0.9)',
                    cursor: 'pointer',
                    opacity: canBeTarget ? 1 : 0,
                    transition: 'opacity 0.15s, transform 0.15s',
                    zIndex: 10,
                    pointerEvents: canBeTarget ? 'auto' : 'none'
                  }}
                />
                {/* Resize handles - show when selected (not for diamond) */}
                {isSelected && !isDiamond && (
                  <>
                    {/* Southeast corner handle */}
                    <div
                      className="resize-handle resize-handle-se"
                      onMouseDown={(e) => canvas.handleResizeStart(e, node.id, 'se')}
                      style={{
                        position: 'absolute',
                        right: -6,
                        bottom: -6,
                        width: 12,
                        height: 12,
                        background: COLORS.purple,
                        border: '2px solid #fff',
                        borderRadius: 2,
                        cursor: 'nwse-resize',
                        zIndex: 20
                      }}
                    />
                    {/* East edge handle */}
                    <div
                      className="resize-handle resize-handle-e"
                      onMouseDown={(e) => canvas.handleResizeStart(e, node.id, 'e')}
                      style={{
                        position: 'absolute',
                        right: -5,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: 10,
                        height: 20,
                        background: COLORS.purple,
                        border: '2px solid #fff',
                        borderRadius: 2,
                        cursor: 'ew-resize',
                        zIndex: 20,
                        opacity: 0.7
                      }}
                    />
                    {/* South edge handle */}
                    <div
                      className="resize-handle resize-handle-s"
                      onMouseDown={(e) => canvas.handleResizeStart(e, node.id, 's')}
                      style={{
                        position: 'absolute',
                        bottom: -5,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 20,
                        height: 10,
                        background: COLORS.purple,
                        border: '2px solid #fff',
                        borderRadius: 2,
                        cursor: 'ns-resize',
                        zIndex: 20,
                        opacity: 0.7
                      }}
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.2, 2.5))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.8, 0.3))} onFit={() => canvas.fitToView(contentBounds)} onReset={canvas.resetView} zoom={canvas.zoom} snapToGrid={canvas.snapToGrid} onToggleSnap={() => canvas.setSnapToGrid(v => !v)} onAutoLayout={applyAutoLayout} />
      {/* Selection info */}
      {canvas.selectedNodes.size > 0 && (
        <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', alignItems: 'center', gap: 8, zIndex: 100 }}>
          <div style={{ background: 'rgba(124,58,237,0.9)', borderRadius: 6, padding: '4px 10px', color: '#fff', fontSize: '0.75rem' }}>
            {canvas.selectedNodes.size} selected • ⌘C copy • ⌘V paste • Del remove
          </div>
          {canvas.selectedNodes.size >= 3 && (
            <div style={{ display: 'flex', gap: 4 }}>
              <button
                onClick={distributeHorizontally}
                title="Distribute horizontally"
                style={{
                  padding: '4px 8px',
                  background: 'rgba(0,0,0,0.8)',
                  border: '1px solid rgba(124,58,237,0.5)',
                  borderRadius: 6,
                  color: '#fff',
                  fontSize: '0.7rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4
                }}
              >
                <span style={{ transform: 'rotate(90deg)', fontSize: '0.9rem' }}>⋮</span> H
              </button>
              <button
                onClick={distributeVertically}
                title="Distribute vertically"
                style={{
                  padding: '4px 8px',
                  background: 'rgba(0,0,0,0.8)',
                  border: '1px solid rgba(124,58,237,0.5)',
                  borderRadius: 6,
                  color: '#fff',
                  fontSize: '0.7rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4
                }}
              >
                <span style={{ fontSize: '0.9rem' }}>⋮</span> V
              </button>
            </div>
          )}
        </div>
      )}
      {/* Clipboard indicator */}
      {canvas.clipboard && canvas.clipboard.length > 0 && canvas.selectedNodes.size === 0 && (
        <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(16,185,129,0.9)', borderRadius: 6, padding: '4px 10px', color: '#fff', fontSize: '0.75rem', zIndex: 100 }}>
          {canvas.clipboard.length} in clipboard • ⌘V to paste
        </div>
      )}
      {/* Context menu */}
      {canvas.contextMenu && (
        <ColorPickerMenu
          x={canvas.contextMenu.x}
          y={canvas.contextMenu.y}
          nodeId={canvas.contextMenu.nodeId}
          currentIcon={canvas.nodeIcons[canvas.contextMenu.nodeId]}
          currentShape={canvas.nodeShapes[canvas.contextMenu.nodeId]}
          onSelectColor={canvas.setNodeColor}
          onSelectIcon={canvas.setNodeIcon}
          onSelectShape={canvas.setNodeShape}
          onClose={canvas.closeContextMenu}
          theme={theme}
        />
      )}
      {/* Edge style menu */}
      {canvas.edgeContextMenu && (
        <EdgeStyleMenu
          x={canvas.edgeContextMenu.x}
          y={canvas.edgeContextMenu.y}
          edgeId={canvas.edgeContextMenu.edgeId}
          currentStyle={canvas.edgeStyles[canvas.edgeContextMenu.edgeId]}
          currentArrowType={canvas.edgeArrowTypes[canvas.edgeContextMenu.edgeId]}
          currentPathType={canvas.edgePathTypes[canvas.edgeContextMenu.edgeId]}
          onSelectStyle={canvas.setEdgeStyle}
          onSelectArrowType={canvas.setEdgeArrowType}
          onSelectPathType={canvas.setEdgePathType}
          onClose={canvas.closeEdgeContextMenu}
          theme={theme}
        />
      )}
    </div>
  );
}

// ERD with draggable tables
function ERDDiagram({ tables, theme = THEMES.dark, onLabelChange, onDeleteNodes, onPasteNodes }) {
  const canvas = useInteractiveCanvas();
  const layout = useMemo(() => {
    const cols = Math.min(3, Math.ceil(Math.sqrt(tables.length)));
    return tables.map((t, i) => ({ ...t, id: t.name, label: t.name, defaultX: (i % cols) * 280 + 60, defaultY: Math.floor(i / cols) * 250 + 60, width: 230 }));
  }, [tables]);
  const getPos = (t) => canvas.getNodePosition(t.name, t.defaultX, t.defaultY);

  const contentBounds = useMemo(() => {
    if (!layout || layout.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const xs = layout.map(t => t.defaultX);
    const ys = layout.map(t => t.defaultY);
    return { x: Math.min(...xs) - 60, y: Math.min(...ys) - 60, width: Math.max(...xs) - Math.min(...xs) + 300, height: Math.max(...ys) - Math.min(...ys) + 300 };
  }, [layout]);

  // Handle label edit complete (for table names)
  const handleLabelEditFinish = useCallback(() => {
    const result = canvas.finishEditing();
    if (result.nodeId && result.newValue && onLabelChange) {
      const table = layout.find(t => t.name === result.nodeId);
      if (table && table.name !== result.newValue) {
        onLabelChange(result.nodeId, table.name, result.newValue);
      }
    }
  }, [canvas, layout, onLabelChange]);

  // Handle keyboard shortcuts (Delete, Copy, Paste)
  useEffect(() => {
    const handleKeyDown = (e) => {
      const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform);
      const metaKey = isMac ? e.metaKey : e.ctrlKey;
      if (canvas.editingNode) return;
      if ((e.key === 'Delete' || e.key === 'Backspace') && canvas.selectedNodes.size > 0 && onDeleteNodes) {
        e.preventDefault();
        onDeleteNodes(Array.from(canvas.selectedNodes));
        canvas.clearSelection();
        return;
      }
      if (metaKey && e.key.toLowerCase() === 'c' && canvas.selectedNodes.size > 0) {
        e.preventDefault();
        canvas.copySelectedNodes(layout);
        return;
      }
      if (metaKey && e.key.toLowerCase() === 'v' && canvas.clipboard && onPasteNodes) {
        e.preventDefault();
        const pastedNodes = canvas.pasteNodes();
        if (pastedNodes) onPasteNodes(pastedNodes);
        return;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [canvas, layout, onDeleteNodes, onPasteNodes]);

  // Handle selection box completion
  useEffect(() => {
    if (!canvas.isSelecting && canvas.selectionBox) {
      const nodeIds = canvas.getNodesInSelectionBox(layout.map(t => ({ ...t, x: t.defaultX, y: t.defaultY })), canvas.selectionBox);
      if (nodeIds.length > 0) canvas.setSelectedNodes(new Set(nodeIds));
    }
  }, [canvas.isSelecting, canvas.selectionBox, layout, canvas]);

  // Click on canvas to clear selection
  const handleCanvasClick = useCallback((e) => {
    if (e.target === canvas.canvasRef.current || e.target.classList.contains('canvas-bg')) {
      canvas.clearSelection();
      canvas.closeContextMenu();
    }
  }, [canvas]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}`, touchAction: 'none' }}>
      <div ref={canvas.canvasRef} className="canvas-bg" onClick={handleCanvasClick} onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={canvas.handleMouseUp} onMouseLeave={canvas.handleMouseUp} onTouchStart={canvas.handleTouchStart} onTouchMove={canvas.handleTouchMove} onTouchEnd={canvas.handleTouchEnd} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : canvas.dragging ? 'grabbing' : 'grab', touchAction: 'none' }}>
        <div className="canvas-bg" style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${theme.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * canvas.zoom}px ${25 * canvas.zoom}px`, backgroundPosition: `${canvas.pan.x}px ${canvas.pan.y}px`, pointerEvents: 'none' }} />
        <svg width="100%" height="100%" style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none' }}>
          <defs><marker id="erd-crow" markerWidth="16" markerHeight="12" refX="14" refY="6" orient="auto"><path d="M 0 6 L 10 0 M 0 6 L 10 6 M 0 6 L 10 12" stroke={COLORS.blue} strokeWidth="2" fill="none" /></marker></defs>
          <g transform={`translate(${canvas.pan.x}, ${canvas.pan.y}) scale(${canvas.zoom})`}>
            {layout.flatMap(t => t.fields?.filter(f => f.fk && f.references).map((f, fi) => {
              const tgt = layout.find(tt => tt.name === f.references);
              if (!tgt) return null;
              const sp = getPos(t), tp = getPos(tgt);
              const sy = sp.y + 44 + fi * 30 + 15, sx = sp.x + t.width, tx = tp.x, ty = tp.y + 22;
              const path = `M ${sx} ${sy} C ${(sx + tx) / 2} ${sy}, ${(sx + tx) / 2} ${ty}, ${tx} ${ty}`;
              return (
                <g key={`${t.name}-${f.name}`}>
                  {/* Outer glow layer */}
                  <path d={path} fill="none" stroke={COLORS.blue} strokeWidth={8} strokeOpacity={0.1} strokeLinecap="round" />
                  {/* Inner glow layer */}
                  <path d={path} fill="none" stroke={COLORS.blue} strokeWidth={4} strokeOpacity={0.25} strokeLinecap="round" />
                  {/* Main stroke */}
                  <path d={path} fill="none" stroke={COLORS.blue} strokeWidth={2} markerEnd="url(#erd-crow)" opacity={0.8} strokeLinecap="round" />
                </g>
              );
            }) || [])}
            {/* Selection box */}
            {canvas.isSelecting && canvas.selectionBox && (
              <rect
                x={Math.min(canvas.selectionBox.startX, canvas.selectionBox.endX)}
                y={Math.min(canvas.selectionBox.startY, canvas.selectionBox.endY)}
                width={Math.abs(canvas.selectionBox.endX - canvas.selectionBox.startX)}
                height={Math.abs(canvas.selectionBox.endY - canvas.selectionBox.startY)}
                fill="rgba(124,58,237,0.1)" stroke={COLORS.purple} strokeWidth={2} strokeDasharray="5,5" style={{ pointerEvents: 'none' }}
              />
            )}
          </g>
        </svg>
        <div style={{ position: 'absolute', transform: `translate(${canvas.pan.x}px, ${canvas.pan.y}px) scale(${canvas.zoom})`, transformOrigin: '0 0' }}>
          {layout.map(t => {
            const pos = getPos(t);
            const isDragging = canvas.dragging === t.name;
            const isSelected = canvas.selectedNodes.has(t.name);
            const isEditing = canvas.editingNode === t.name;
            const tableColor = canvas.nodeColors[t.name] || COLORS.orange;
            return (
              <div
                key={t.name}
                onMouseDown={(e) => canvas.handleNodeMouseDown(e, t.name, pos.x, pos.y)}
                onDoubleClick={(e) => canvas.handleNodeDoubleClick(e, t.name, t.name)}
                onContextMenu={(e) => canvas.handleNodeContextMenu(e, t.name)}
                onTouchStart={(e) => canvas.handleNodeTouchStart(e, t.name, pos.x, pos.y)}
                style={{ position: 'absolute', left: pos.x, top: pos.y, width: t.width, background: `linear-gradient(180deg, ${theme.surface}, rgba(15,23,42,0.95))`, border: `2px solid ${tableColor}`, borderRadius: 12, overflow: 'hidden', cursor: isDragging ? 'grabbing' : 'grab', boxShadow: getNodeShadow(tableColor, isDragging, isSelected), transition: isDragging ? 'none' : 'box-shadow 0.2s', touchAction: 'none' }}
              >
                <div style={{ padding: '12px 16px', background: `linear-gradient(135deg, ${tableColor}, ${tableColor}dd)` }}>
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                    📊
                    <EditableNodeLabel
                      isEditing={isEditing}
                      value={isEditing ? canvas.editValue : t.name}
                      onChange={canvas.setEditValue}
                      onFinish={handleLabelEditFinish}
                      onCancel={canvas.cancelEditing}
                      style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}
                    />
                  </span>
                </div>
                <div style={{ padding: '8px 0' }}>
                  {t.fields?.map((f, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '7px 16px', borderBottom: i < t.fields.length - 1 ? `1px solid ${theme.border}` : 'none', gap: 10 }}>
                      <span style={{ width: 20, fontSize: '0.8rem' }}>{f.key ? '🔑' : f.fk ? '🔗' : ''}</span>
                      <span style={{ flex: 1, color: f.key ? tableColor : f.fk ? COLORS.blue : theme.textPrimary, fontSize: '0.85rem', fontWeight: f.key ? 600 : 400 }}>{f.name}</span>
                      <span style={{ color: theme.textMuted, fontSize: '0.75rem', fontFamily: 'monospace' }}>{f.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.2, 2))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.8, 0.3))} onFit={() => canvas.fitToView(contentBounds)} onReset={canvas.resetView} zoom={canvas.zoom} snapToGrid={canvas.snapToGrid} onToggleSnap={() => canvas.setSnapToGrid(v => !v)} />
      {/* Selection info */}
      {canvas.selectedNodes.size > 0 && (
        <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(124,58,237,0.9)', borderRadius: 6, padding: '4px 10px', color: '#fff', fontSize: '0.75rem', zIndex: 100 }}>
          {canvas.selectedNodes.size} selected • ⌘C copy • ⌘V paste • Del remove
        </div>
      )}
      {/* Clipboard indicator */}
      {canvas.clipboard && canvas.clipboard.length > 0 && canvas.selectedNodes.size === 0 && (
        <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(16,185,129,0.9)', borderRadius: 6, padding: '4px 10px', color: '#fff', fontSize: '0.75rem', zIndex: 100 }}>
          {canvas.clipboard.length} in clipboard • ⌘V to paste
        </div>
      )}
      {/* Context menu */}
      {canvas.contextMenu && (
        <ColorPickerMenu
          x={canvas.contextMenu.x}
          y={canvas.contextMenu.y}
          nodeId={canvas.contextMenu.nodeId}
          currentIcon={canvas.nodeIcons[canvas.contextMenu.nodeId]}
          currentShape={canvas.nodeShapes[canvas.contextMenu.nodeId]}
          onSelectColor={canvas.setNodeColor}
          onSelectIcon={canvas.setNodeIcon}
          onSelectShape={canvas.setNodeShape}
          onClose={canvas.closeContextMenu}
          theme={theme}
        />
      )}
    </div>
  );
}

// Network with draggable devices
function NetworkDiagram({ data, theme = THEMES.dark, onLabelChange, onDeleteNodes, onPasteNodes }) {
  const canvas = useInteractiveCanvas();
  const icons = { router: '📡', switch: '🔀', firewall: '🛡️', server: '🖥️', computer: '💻', cloud: '☁️', hub: '🔌' };
  const layout = useMemo(() => {
    const cols = Math.ceil(Math.sqrt(data.devices.length));
    return { devices: data.devices.map((d, i) => ({ ...d, defaultX: 100 + (i % cols) * 200, defaultY: 100 + Math.floor(i / cols) * 170 })), connections: data.connections };
  }, [data]);
  const getPos = (d) => canvas.getNodePosition(d.id, d.defaultX, d.defaultY);

  const contentBounds = useMemo(() => {
    if (!layout.devices || layout.devices.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const xs = layout.devices.map(d => d.defaultX);
    const ys = layout.devices.map(d => d.defaultY);
    return { x: Math.min(...xs) - 60, y: Math.min(...ys) - 60, width: Math.max(...xs) - Math.min(...xs) + 200, height: Math.max(...ys) - Math.min(...ys) + 200 };
  }, [layout]);

  // Handle label edit complete
  const handleLabelEditFinish = useCallback(() => {
    const result = canvas.finishEditing();
    if (result.nodeId && result.newValue && onLabelChange) {
      const device = layout.devices.find(d => d.id === result.nodeId);
      if (device && device.label !== result.newValue) {
        onLabelChange(result.nodeId, device.label, result.newValue);
      }
    }
  }, [canvas, layout.devices, onLabelChange]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform);
      const metaKey = isMac ? e.metaKey : e.ctrlKey;
      if (canvas.editingNode) return;
      if ((e.key === 'Delete' || e.key === 'Backspace') && canvas.selectedNodes.size > 0 && onDeleteNodes) {
        e.preventDefault();
        onDeleteNodes(Array.from(canvas.selectedNodes));
        canvas.clearSelection();
        return;
      }
      if (metaKey && e.key.toLowerCase() === 'c' && canvas.selectedNodes.size > 0) {
        e.preventDefault();
        canvas.copySelectedNodes(layout.devices);
        return;
      }
      if (metaKey && e.key.toLowerCase() === 'v' && canvas.clipboard && onPasteNodes) {
        e.preventDefault();
        const pastedNodes = canvas.pasteNodes();
        if (pastedNodes) onPasteNodes(pastedNodes);
        return;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [canvas, layout.devices, onDeleteNodes, onPasteNodes]);

  // Handle selection box completion
  useEffect(() => {
    if (!canvas.isSelecting && canvas.selectionBox) {
      const nodeIds = canvas.getNodesInSelectionBox(layout.devices.map(d => ({ ...d, x: d.defaultX, y: d.defaultY })), canvas.selectionBox);
      if (nodeIds.length > 0) canvas.setSelectedNodes(new Set(nodeIds));
    }
  }, [canvas.isSelecting, canvas.selectionBox, layout.devices, canvas]);

  // Click on canvas to clear selection
  const handleCanvasClick = useCallback((e) => {
    if (e.target === canvas.canvasRef.current || e.target.classList.contains('canvas-bg')) {
      canvas.clearSelection();
      canvas.closeContextMenu();
    }
  }, [canvas]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}`, touchAction: 'none' }}>
      <div ref={canvas.canvasRef} className="canvas-bg" onClick={handleCanvasClick} onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={canvas.handleMouseUp} onMouseLeave={canvas.handleMouseUp} onTouchStart={canvas.handleTouchStart} onTouchMove={canvas.handleTouchMove} onTouchEnd={canvas.handleTouchEnd} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : canvas.dragging ? 'grabbing' : 'grab', touchAction: 'none' }}>
        <div className="canvas-bg" style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${theme.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * canvas.zoom}px ${25 * canvas.zoom}px`, backgroundPosition: `${canvas.pan.x}px ${canvas.pan.y}px`, pointerEvents: 'none' }} />
        <svg width="100%" height="100%" style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none' }}>
          <g transform={`translate(${canvas.pan.x}, ${canvas.pan.y}) scale(${canvas.zoom})`}>
            {layout.connections.map(conn => {
              const src = layout.devices.find(d => d.id === conn.source), tgt = layout.devices.find(d => d.id === conn.target);
              if (!src || !tgt) return null;
              const sp = getPos(src), tp = getPos(tgt);
              const sx = sp.x + 65, sy = sp.y + 55, tx = tp.x + 65, ty = tp.y + 55;
              const path = getCurvedPath(sx, sy, tx, ty);
              const midX = (sx + tx) / 2, midY = (sy + ty) / 2;
              return (
                <g key={conn.id}>
                  {/* Outer glow */}
                  <path d={path} fill="none" stroke={COLORS.blue} strokeWidth={8} strokeOpacity={0.08} strokeLinecap="round" />
                  {/* Inner glow */}
                  <path d={path} fill="none" stroke={COLORS.blue} strokeWidth={4} strokeOpacity={0.2} strokeLinecap="round" />
                  {/* Main stroke */}
                  <path d={path} fill="none" stroke={COLORS.blue} strokeWidth={2} strokeDasharray="6,4" opacity={0.8} strokeLinecap="round" />
                  {conn.protocol && (
                    <>
                      <rect x={midX - 28} y={midY - 10} width={56} height={18} rx={4} fill="rgba(0,0,0,0.8)" />
                      <text x={midX} y={midY + 3} textAnchor="middle" fill={COLORS.blue} fontSize={10}>{conn.protocol}</text>
                    </>
                  )}
                </g>
              );
            })}
            {/* Selection box */}
            {canvas.isSelecting && canvas.selectionBox && (
              <rect
                x={Math.min(canvas.selectionBox.startX, canvas.selectionBox.endX)}
                y={Math.min(canvas.selectionBox.startY, canvas.selectionBox.endY)}
                width={Math.abs(canvas.selectionBox.endX - canvas.selectionBox.startX)}
                height={Math.abs(canvas.selectionBox.endY - canvas.selectionBox.startY)}
                fill="rgba(124,58,237,0.1)" stroke={COLORS.purple} strokeWidth={2} strokeDasharray="5,5" style={{ pointerEvents: 'none' }}
              />
            )}
          </g>
        </svg>
        <div style={{ position: 'absolute', transform: `translate(${canvas.pan.x}px, ${canvas.pan.y}px) scale(${canvas.zoom})`, transformOrigin: '0 0' }}>
          {layout.devices.map(device => {
            const pos = getPos(device);
            const isDragging = canvas.dragging === device.id;
            const isSelected = canvas.selectedNodes.has(device.id);
            const isEditing = canvas.editingNode === device.id;
            const deviceColor = canvas.nodeColors[device.id] || COLORS.blue;
            return (
              <div
                key={device.id}
                onMouseDown={(e) => canvas.handleNodeMouseDown(e, device.id, pos.x, pos.y)}
                onDoubleClick={(e) => canvas.handleNodeDoubleClick(e, device.id, device.label)}
                onContextMenu={(e) => canvas.handleNodeContextMenu(e, device.id)}
                onTouchStart={(e) => canvas.handleNodeTouchStart(e, device.id, pos.x, pos.y)}
                style={{ position: 'absolute', left: pos.x, top: pos.y, width: 130, background: getNodeGradient(deviceColor), border: `2px solid ${deviceColor}`, borderRadius: 12, padding: 12, textAlign: 'center', cursor: isDragging ? 'grabbing' : 'grab', boxShadow: getNodeShadow(deviceColor, isDragging, isSelected), transition: isDragging ? 'none' : 'box-shadow 0.2s', touchAction: 'none' }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: 6 }}>{canvas.nodeIcons[device.id] || icons[device.type] || '📦'}</div>
                <EditableNodeLabel
                  isEditing={isEditing}
                  value={isEditing ? canvas.editValue : device.label}
                  onChange={canvas.setEditValue}
                  onFinish={handleLabelEditFinish}
                  onCancel={canvas.cancelEditing}
                  style={{ fontSize: '0.85rem', fontWeight: 600, color: theme.textPrimary }}
                />
                {device.ip && <div style={{ fontSize: '0.7rem', color: theme.textSecondary, fontFamily: 'monospace', marginTop: 4 }}>{device.ip}</div>}
              </div>
            );
          })}
        </div>
      </div>
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.2, 2))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.8, 0.3))} onFit={() => canvas.fitToView(contentBounds)} onReset={canvas.resetView} zoom={canvas.zoom} snapToGrid={canvas.snapToGrid} onToggleSnap={() => canvas.setSnapToGrid(v => !v)} />
      {/* Selection info */}
      {canvas.selectedNodes.size > 0 && (
        <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(124,58,237,0.9)', borderRadius: 6, padding: '4px 10px', color: '#fff', fontSize: '0.75rem', zIndex: 100 }}>
          {canvas.selectedNodes.size} selected • ⌘C copy • ⌘V paste • Del remove
        </div>
      )}
      {/* Clipboard indicator */}
      {canvas.clipboard && canvas.clipboard.length > 0 && canvas.selectedNodes.size === 0 && (
        <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(16,185,129,0.9)', borderRadius: 6, padding: '4px 10px', color: '#fff', fontSize: '0.75rem', zIndex: 100 }}>
          {canvas.clipboard.length} in clipboard • ⌘V to paste
        </div>
      )}
      {/* Context menu */}
      {canvas.contextMenu && (
        <ColorPickerMenu
          x={canvas.contextMenu.x}
          y={canvas.contextMenu.y}
          nodeId={canvas.contextMenu.nodeId}
          currentIcon={canvas.nodeIcons[canvas.contextMenu.nodeId]}
          currentShape={canvas.nodeShapes[canvas.contextMenu.nodeId]}
          onSelectColor={canvas.setNodeColor}
          onSelectIcon={canvas.setNodeIcon}
          onSelectShape={canvas.setNodeShape}
          onClose={canvas.closeContextMenu}
          theme={theme}
        />
      )}
    </div>
  );
}

// Class Diagram with draggable classes
function ClassDiagram({ data, theme = THEMES.dark, onLabelChange, onDeleteNodes, onPasteNodes }) {
  const canvas = useInteractiveCanvas();
  const { classes = [], relationships = [] } = data;
  const layout = useMemo(() => {
    const cols = Math.min(3, Math.ceil(Math.sqrt(classes.length)));
    return classes.map((c, i) => ({ ...c, label: c.name, defaultX: 80 + (i % cols) * 300, defaultY: 80 + Math.floor(i / cols) * 220, width: 230 }));
  }, [classes]);
  const getPos = (c) => canvas.getNodePosition(c.id, c.defaultX, c.defaultY);

  const contentBounds = useMemo(() => {
    if (!layout || layout.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const xs = layout.map(c => c.defaultX);
    const ys = layout.map(c => c.defaultY);
    return { x: Math.min(...xs) - 60, y: Math.min(...ys) - 60, width: Math.max(...xs) - Math.min(...xs) + 320, height: Math.max(...ys) - Math.min(...ys) + 280 };
  }, [layout]);

  // Calculate class heights for accurate edge positioning
  const getClassHeight = (cls) => {
    const headerH = 38;
    const propsH = cls.properties.length > 0 ? cls.properties.length * 22 + 16 : 30;
    const methodsH = cls.methods.length > 0 ? cls.methods.length * 22 + 16 : 30;
    return headerH + propsH + methodsH;
  };

  // Handle label edit complete
  const handleLabelEditFinish = useCallback(() => {
    const result = canvas.finishEditing();
    if (result.nodeId && result.newValue && onLabelChange) {
      const cls = layout.find(c => c.id === result.nodeId);
      if (cls && cls.name !== result.newValue) {
        onLabelChange(result.nodeId, cls.name, result.newValue);
      }
    }
  }, [canvas, layout, onLabelChange]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform);
      const metaKey = isMac ? e.metaKey : e.ctrlKey;
      if (canvas.editingNode) return;
      if ((e.key === 'Delete' || e.key === 'Backspace') && canvas.selectedNodes.size > 0 && onDeleteNodes) {
        e.preventDefault();
        onDeleteNodes(Array.from(canvas.selectedNodes));
        canvas.clearSelection();
        return;
      }
      if (metaKey && e.key.toLowerCase() === 'c' && canvas.selectedNodes.size > 0) {
        e.preventDefault();
        canvas.copySelectedNodes(layout);
        return;
      }
      if (metaKey && e.key.toLowerCase() === 'v' && canvas.clipboard && onPasteNodes) {
        e.preventDefault();
        const pastedNodes = canvas.pasteNodes();
        if (pastedNodes) onPasteNodes(pastedNodes);
        return;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [canvas, layout, onDeleteNodes, onPasteNodes]);

  // Handle selection box completion
  useEffect(() => {
    if (!canvas.isSelecting && canvas.selectionBox) {
      const nodeIds = canvas.getNodesInSelectionBox(layout.map(c => ({ ...c, x: c.defaultX, y: c.defaultY })), canvas.selectionBox);
      if (nodeIds.length > 0) canvas.setSelectedNodes(new Set(nodeIds));
    }
  }, [canvas.isSelecting, canvas.selectionBox, layout, canvas]);

  // Click on canvas to clear selection
  const handleCanvasClick = useCallback((e) => {
    if (e.target === canvas.canvasRef.current || e.target.classList.contains('canvas-bg')) {
      canvas.clearSelection();
      canvas.closeContextMenu();
    }
  }, [canvas]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}`, touchAction: 'none' }}>
      <style>{`@keyframes flowDash { to { stroke-dashoffset: -20; } }`}</style>
      <div ref={canvas.canvasRef} className="canvas-bg" onClick={handleCanvasClick} onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={canvas.handleMouseUp} onMouseLeave={canvas.handleMouseUp} onTouchStart={canvas.handleTouchStart} onTouchMove={canvas.handleTouchMove} onTouchEnd={canvas.handleTouchEnd} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : canvas.dragging ? 'grabbing' : 'grab', touchAction: 'none' }}>
        <div className="canvas-bg" style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${theme.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * canvas.zoom}px ${25 * canvas.zoom}px`, backgroundPosition: `${canvas.pan.x}px ${canvas.pan.y}px`, pointerEvents: 'none' }} />
        <svg width="100%" height="100%" style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none' }}>
          <defs>
            <marker id="class-inherit" markerWidth="12" markerHeight="12" refX="11" refY="6" orient="auto"><polygon points="0 0, 12 6, 0 12" fill="none" stroke={COLORS.purple} strokeWidth="2" /></marker>
            <marker id="class-assoc" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><polygon points="0 0, 10 4, 0 8" fill={COLORS.blue} /></marker>
            <marker id="class-diamond" markerWidth="12" markerHeight="12" refX="11" refY="6" orient="auto"><polygon points="0 6, 6 0, 12 6, 6 12" fill={COLORS.orange} /></marker>
          </defs>
          <g transform={`translate(${canvas.pan.x}, ${canvas.pan.y}) scale(${canvas.zoom})`}>
            {relationships.map((rel, i) => {
              const src = layout.find(c => c.id === rel.from || c.name === rel.from);
              const tgt = layout.find(c => c.id === rel.to || c.name === rel.to);
              if (!src || !tgt) return null;
              const sp = getPos(src), tp = getPos(tgt);
              const srcH = getClassHeight(src), tgtH = getClassHeight(tgt);
              const sx = sp.x + src.width / 2, sy = sp.y + srcH / 2;
              const tx = tp.x + tgt.width / 2, ty = tp.y + tgtH / 2;
              const dx = tx - sx, dy = ty - sy, dist = Math.sqrt(dx * dx + dy * dy) || 1;
              const startX = sx + (dx / dist) * (src.width / 2 + 5), startY = sy + (dy / dist) * (srcH / 2 + 5);
              const endX = tx - (dx / dist) * (tgt.width / 2 + 15), endY = ty - (dy / dist) * (tgtH / 2 + 5);
              const midX = (startX + endX) / 2, midY = (startY + endY) / 2;
              const marker = rel.type === 'extends' ? 'url(#class-inherit)' : rel.type === 'composition' ? 'url(#class-diamond)' : 'url(#class-assoc)';
              const color = rel.type === 'extends' ? COLORS.purple : rel.type === 'composition' ? COLORS.orange : COLORS.blue;
              const path = getCurvedPath(startX, startY, endX, endY);
              return (
                <g key={i}>
                  {/* Outer glow */}
                  <path d={path} fill="none" stroke={color} strokeWidth={8} strokeOpacity={0.08} strokeLinecap="round" />
                  {/* Inner glow */}
                  <path d={path} fill="none" stroke={color} strokeWidth={4} strokeOpacity={0.2} strokeLinecap="round" />
                  {/* Main stroke */}
                  <path d={path} fill="none" stroke={color} strokeWidth={2} strokeDasharray="8,4" markerEnd={marker} opacity={0.8} strokeLinecap="round" style={{ animation: 'flowDash 1s linear infinite' }} />
                  {rel.label && (
                    <g>
                      <rect x={midX - rel.label.length * 3.5 - 6} y={midY - 10} width={rel.label.length * 7 + 12} height={18} rx={4} fill="rgba(0,0,0,0.8)" />
                      <text x={midX} y={midY + 4} textAnchor="middle" fill={color} fontSize={10}>{rel.label}</text>
                    </g>
                  )}
                </g>
              );
            })}
            {/* Selection box */}
            {canvas.isSelecting && canvas.selectionBox && (
              <rect
                x={Math.min(canvas.selectionBox.startX, canvas.selectionBox.endX)}
                y={Math.min(canvas.selectionBox.startY, canvas.selectionBox.endY)}
                width={Math.abs(canvas.selectionBox.endX - canvas.selectionBox.startX)}
                height={Math.abs(canvas.selectionBox.endY - canvas.selectionBox.startY)}
                fill="rgba(124,58,237,0.1)" stroke={COLORS.purple} strokeWidth={2} strokeDasharray="5,5" style={{ pointerEvents: 'none' }}
              />
            )}
          </g>
        </svg>
        <div style={{ position: 'absolute', transform: `translate(${canvas.pan.x}px, ${canvas.pan.y}px) scale(${canvas.zoom})`, transformOrigin: '0 0' }}>
          {layout.map(cls => {
            const pos = getPos(cls);
            const isDragging = canvas.dragging === cls.id;
            const isSelected = canvas.selectedNodes.has(cls.id);
            const isEditing = canvas.editingNode === cls.id;
            const classColor = canvas.nodeColors[cls.id] || COLORS.purple;
            return (
              <div
                key={cls.id}
                onMouseDown={(e) => canvas.handleNodeMouseDown(e, cls.id, pos.x, pos.y)}
                onDoubleClick={(e) => canvas.handleNodeDoubleClick(e, cls.id, cls.name)}
                onContextMenu={(e) => canvas.handleNodeContextMenu(e, cls.id)}
                onTouchStart={(e) => canvas.handleNodeTouchStart(e, cls.id, pos.x, pos.y)}
                style={{ position: 'absolute', left: pos.x, top: pos.y, width: cls.width, background: `linear-gradient(180deg, ${theme.surface}, rgba(15,23,42,0.95))`, border: `2px solid ${classColor}`, borderRadius: 8, overflow: 'hidden', cursor: isDragging ? 'grabbing' : 'grab', boxShadow: getNodeShadow(classColor, isDragging, isSelected), transition: isDragging ? 'none' : 'box-shadow 0.2s', touchAction: 'none' }}
              >
                <div style={{ padding: '10px 14px', background: `linear-gradient(135deg, ${classColor}40, ${classColor}20)`, borderBottom: `1px solid ${classColor}` }}>
                  <EditableNodeLabel
                    isEditing={isEditing}
                    value={isEditing ? canvas.editValue : cls.name}
                    onChange={canvas.setEditValue}
                    onFinish={handleLabelEditFinish}
                    onCancel={canvas.cancelEditing}
                    style={{ color: theme.textPrimary, fontWeight: 700 }}
                  />
                </div>
                <div style={{ padding: '8px 14px', borderBottom: `1px solid ${theme.border}` }}>
                  {cls.properties.map((p, i) => <div key={i} style={{ fontSize: '0.8rem', color: theme.textSecondary }}><span style={{ color: COLORS.orange }}>{p.visibility}</span> {p.name}: {p.type}</div>)}
                  {cls.properties.length === 0 && <div style={{ fontSize: '0.75rem', color: theme.textMuted }}>No properties</div>}
                </div>
                <div style={{ padding: '8px 14px' }}>
                  {cls.methods.map((m, i) => <div key={i} style={{ fontSize: '0.8rem', color: theme.textSecondary }}><span style={{ color: COLORS.green }}>{m.visibility}</span> {m.name}(): {m.returns}</div>)}
                  {cls.methods.length === 0 && <div style={{ fontSize: '0.75rem', color: theme.textMuted }}>No methods</div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.2, 2))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.8, 0.3))} onFit={() => canvas.fitToView(contentBounds)} onReset={canvas.resetView} zoom={canvas.zoom} snapToGrid={canvas.snapToGrid} onToggleSnap={() => canvas.setSnapToGrid(v => !v)} />
      {/* Selection info */}
      {canvas.selectedNodes.size > 0 && (
        <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(124,58,237,0.9)', borderRadius: 6, padding: '4px 10px', color: '#fff', fontSize: '0.75rem', zIndex: 100 }}>
          {canvas.selectedNodes.size} selected • ⌘C copy • ⌘V paste • Del remove
        </div>
      )}
      {/* Context menu */}
      {canvas.contextMenu && (
        <ColorPickerMenu
          x={canvas.contextMenu.x}
          y={canvas.contextMenu.y}
          nodeId={canvas.contextMenu.nodeId}
          currentIcon={canvas.nodeIcons[canvas.contextMenu.nodeId]}
          currentShape={canvas.nodeShapes[canvas.contextMenu.nodeId]}
          onSelectColor={canvas.setNodeColor}
          onSelectIcon={canvas.setNodeIcon}
          onSelectShape={canvas.setNodeShape}
          onClose={canvas.closeContextMenu}
          theme={theme}
        />
      )}
    </div>
  );
}

// Org Chart with draggable nodes
function OrgChartDiagram({ data, theme = THEMES.dark, onLabelChange, onDeleteNodes, onPasteNodes }) {
  const canvas = useInteractiveCanvas({ x: 0, y: 50 });
  const layout = useMemo(() => {
    const { nodes, edges } = data;
    if (!nodes.length) return { nodes: [], edges };
    const childrenMap = {};
    nodes.forEach(n => { childrenMap[n.id] = []; });
    edges.forEach(e => { if (childrenMap[e.source]) childrenMap[e.source].push(e.target); });
    const hasParent = new Set(edges.map(e => e.target));
    const root = nodes.find(n => !hasParent.has(n.id));
    if (!root) return { nodes, edges };
    const getWidth = (id) => { const children = childrenMap[id] || []; return children.length === 0 ? 160 : Math.max(160, children.map(getWidth).reduce((s, w) => s + w + 30, -30)); };
    const positioned = [];
    const positionNode = (id, x, y, level) => {
      const node = nodes.find(n => n.id === id);
      if (!node) return;
      const children = childrenMap[id] || [], width = getWidth(id);
      positioned.push({ ...node, defaultX: x, defaultY: y, level, color: [COLORS.purple, COLORS.blue, COLORS.green, COLORS.orange][Math.min(level, 3)] });
      if (children.length) { let cx = x - width / 2; children.forEach(cid => { const cw = getWidth(cid); positionNode(cid, cx + cw / 2, y + 170, level + 1); cx += cw + 30; }); }
    };
    positionNode(root.id, getWidth(root.id) / 2 + 100, 80, 0);
    return { nodes: positioned, edges };
  }, [data]);
  const getPos = (n) => canvas.getNodePosition(n.id, n.defaultX, n.defaultY);

  // Handle label edit complete
  const handleLabelEditFinish = useCallback(() => {
    const result = canvas.finishEditing();
    if (result.nodeId && result.newValue !== undefined && onLabelChange) {
      const node = layout.nodes.find(n => n.id === result.nodeId);
      if (node && node.label !== result.newValue) {
        onLabelChange(result.nodeId, node.label, result.newValue);
      }
    }
  }, [canvas, layout.nodes, onLabelChange]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform);
      const metaKey = isMac ? e.metaKey : e.ctrlKey;
      if (canvas.editingNode) return;
      if ((e.key === 'Delete' || e.key === 'Backspace') && canvas.selectedNodes.size > 0 && onDeleteNodes) {
        e.preventDefault();
        onDeleteNodes(Array.from(canvas.selectedNodes));
        canvas.clearSelection();
        return;
      }
      if (metaKey && e.key.toLowerCase() === 'c' && canvas.selectedNodes.size > 0) {
        e.preventDefault();
        canvas.copySelectedNodes(layout.nodes);
        return;
      }
      if (metaKey && e.key.toLowerCase() === 'v' && canvas.clipboard && onPasteNodes) {
        e.preventDefault();
        const pastedNodes = canvas.pasteNodes();
        if (pastedNodes) onPasteNodes(pastedNodes);
        return;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [canvas, layout.nodes, onDeleteNodes, onPasteNodes]);

  // Handle selection box completion
  useEffect(() => {
    if (!canvas.isSelecting && canvas.selectionBox) {
      const nodeIds = canvas.getNodesInSelectionBox(layout.nodes.map(n => ({ ...n, x: n.defaultX, y: n.defaultY })), canvas.selectionBox);
      if (nodeIds.length > 0) canvas.setSelectedNodes(new Set(nodeIds));
    }
  }, [canvas.isSelecting, canvas.selectionBox, layout.nodes, canvas]);

  // Handle canvas click to clear selection
  const handleCanvasClick = useCallback((e) => {
    if (e.target === canvas.canvasRef.current || e.target.classList.contains('canvas-bg')) {
      canvas.clearSelection();
      canvas.closeContextMenu();
    }
  }, [canvas]);

  const contentBounds = useMemo(() => {
    if (!layout.nodes || layout.nodes.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const xs = layout.nodes.map(n => n.defaultX);
    const ys = layout.nodes.map(n => n.defaultY);
    return { x: Math.min(...xs) - 60, y: Math.min(...ys) - 60, width: Math.max(...xs) - Math.min(...xs) + 250, height: Math.max(...ys) - Math.min(...ys) + 180 };
  }, [layout]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}`, touchAction: 'none' }}>
      <div ref={canvas.canvasRef} className="canvas-bg" onClick={handleCanvasClick} onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={canvas.handleMouseUp} onMouseLeave={canvas.handleMouseUp} onTouchStart={canvas.handleTouchStart} onTouchMove={canvas.handleTouchMove} onTouchEnd={canvas.handleTouchEnd} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : canvas.dragging ? 'grabbing' : 'grab', touchAction: 'none' }}>
        <div className="canvas-bg" style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${theme.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * canvas.zoom}px ${25 * canvas.zoom}px`, backgroundPosition: `${canvas.pan.x}px ${canvas.pan.y}px`, pointerEvents: 'none' }} />
        <svg width="100%" height="100%" style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none' }}>
          <g transform={`translate(${canvas.pan.x}, ${canvas.pan.y}) scale(${canvas.zoom})`}>
            {layout.edges.map(e => {
              const src = layout.nodes.find(n => n.id === e.source), tgt = layout.nodes.find(n => n.id === e.target);
              if (!src || !tgt) return null;
              const sp = getPos(src), tp = getPos(tgt);
              const sx = sp.x + 80, sy = sp.y + 70, tx = tp.x + 80, ty = tp.y, my = (sy + ty) / 2;
              const path = `M ${sx} ${sy} L ${sx} ${my} L ${tx} ${my} L ${tx} ${ty}`;
              return (
                <g key={e.id}>
                  {/* Outer glow */}
                  <path d={path} fill="none" stroke={COLORS.purple} strokeWidth={8} strokeOpacity={0.08} strokeLinecap="round" strokeLinejoin="round" />
                  {/* Inner glow */}
                  <path d={path} fill="none" stroke={COLORS.purple} strokeWidth={4} strokeOpacity={0.2} strokeLinecap="round" strokeLinejoin="round" />
                  {/* Main stroke */}
                  <path d={path} fill="none" stroke={COLORS.purple} strokeWidth={2} strokeDasharray="6,4" opacity={0.7} strokeLinecap="round" strokeLinejoin="round" />
                </g>
              );
            })}
            {/* Selection box */}
            {canvas.isSelecting && canvas.selectionBox && (
              <rect x={Math.min(canvas.selectionBox.startX, canvas.selectionBox.endX)} y={Math.min(canvas.selectionBox.startY, canvas.selectionBox.endY)} width={Math.abs(canvas.selectionBox.endX - canvas.selectionBox.startX)} height={Math.abs(canvas.selectionBox.endY - canvas.selectionBox.startY)} fill={`${COLORS.blue}20`} stroke={COLORS.blue} strokeWidth={1} strokeDasharray="4,4" />
            )}
          </g>
        </svg>
        <div style={{ position: 'absolute', transform: `translate(${canvas.pan.x}px, ${canvas.pan.y}px) scale(${canvas.zoom})`, transformOrigin: '0 0' }}>
          {layout.nodes.map(node => {
            const pos = getPos(node);
            const isDragging = canvas.dragging === node.id;
            const isSelected = canvas.selectedNodes.has(node.id);
            return (
              <div key={node.id} onClick={(e) => canvas.handleNodeClick(e, node.id)} onDoubleClick={(e) => canvas.handleNodeDoubleClick(e, node.id, node.label)} onContextMenu={(e) => canvas.handleNodeContextMenu(e, node.id)} onMouseDown={(e) => canvas.handleNodeMouseDown(e, node.id, pos.x, pos.y)} onTouchStart={(e) => canvas.handleNodeTouchStart(e, node.id, pos.x, pos.y)} style={{ position: 'absolute', left: pos.x, top: pos.y, width: 160, background: getNodeGradient(node.color), border: `2px solid ${isSelected ? COLORS.blue : node.color}`, borderRadius: 12, padding: 12, textAlign: 'center', cursor: isDragging ? 'grabbing' : 'grab', boxShadow: getNodeShadow(node.color, isDragging, isSelected), transition: isDragging ? 'none' : 'box-shadow 0.2s', touchAction: 'none' }}>
                {canvas.editingNode === node.id ? (
                  <EditableNodeLabel value={canvas.editingValue} onChange={(v) => canvas.setEditingValue(v)} onFinish={handleLabelEditFinish} style={{ fontSize: '0.95rem', fontWeight: 600, color: theme.textPrimary }} />
                ) : (
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: theme.textPrimary }}>{node.label}</div>
                )}
                {node.title && <div style={{ fontSize: '0.75rem', color: node.color, marginTop: 4 }}>{node.title}</div>}
              </div>
            );
          })}
        </div>
      </div>
      {/* Selection info */}
      {canvas.selectedNodes.size > 0 && (
        <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(0,0,0,0.8)', padding: '6px 12px', borderRadius: 6, fontSize: '0.75rem', color: '#fff', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span>{canvas.selectedNodes.size} selected</span>
          <span style={{ opacity: 0.6 }}>|</span>
          <span style={{ opacity: 0.7 }}>Del to delete • ⌘C copy • ⌘V paste</span>
        </div>
      )}
      {/* Clipboard indicator */}
      {canvas.clipboard && (
        <div style={{ position: 'absolute', top: canvas.selectedNodes.size > 0 ? 48 : 12, left: 12, background: `${COLORS.green}20`, padding: '4px 10px', borderRadius: 4, fontSize: '0.7rem', color: COLORS.green, border: `1px solid ${COLORS.green}40` }}>
          {canvas.clipboard.length} node{canvas.clipboard.length > 1 ? 's' : ''} copied
        </div>
      )}
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.2, 2))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.8, 0.3))} onFit={() => canvas.fitToView(contentBounds)} onReset={canvas.resetView} zoom={canvas.zoom} />
      {/* Context menu */}
      {canvas.contextMenu && <ColorPickerMenu position={canvas.contextMenu} onClose={() => canvas.closeContextMenu()} nodeId={canvas.contextMenu.nodeId} />}
    </div>
  );
}

// Sequence (participants draggable horizontally)
function SequenceDiagram({ data, theme = THEMES.dark }) {
  const { participants, messages } = data;
  const canvas = useInteractiveCanvas({ x: 30, y: 20 });
  const getPos = (p) => canvas.getNodePosition(p.id, p.x, 0);

  const contentBounds = useMemo(() => {
    if (!participants || participants.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const xs = participants.map(p => p.x);
    return { x: Math.min(...xs) - 60, y: 0, width: Math.max(...xs) - Math.min(...xs) + 200, height: 85 + messages.length * 60 + 80 };
  }, [participants, messages]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}`, touchAction: 'none' }}>
      <div ref={canvas.canvasRef} className="canvas-bg" onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={canvas.handleMouseUp} onMouseLeave={canvas.handleMouseUp} onTouchStart={canvas.handleTouchStart} onTouchMove={canvas.handleTouchMove} onTouchEnd={canvas.handleTouchEnd} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : canvas.dragging ? 'grabbing' : 'grab', touchAction: 'none' }}>
        <svg width="100%" height="100%" style={{ position: 'absolute' }}>
          <g transform={`translate(${canvas.pan.x}, ${canvas.pan.y}) scale(${canvas.zoom})`}>
            {participants.map((p, i) => {
              const pos = getPos(p);
              return (
                <g key={p.id}>
                  <line x1={pos.x + 60} y1={85} x2={pos.x + 60} y2={85 + messages.length * 60 + 40} stroke={COLORS.purple} strokeWidth={2} strokeDasharray="4,4" opacity={0.4} />
                  <defs>
                    <linearGradient id={`seq-grad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={BRANCH_COLORS[i % BRANCH_COLORS.length]} stopOpacity="0.35" />
                      <stop offset="100%" stopColor={BRANCH_COLORS[i % BRANCH_COLORS.length]} stopOpacity="0.12" />
                    </linearGradient>
                    <filter id={`seq-shadow-${i}`} x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor={BRANCH_COLORS[i % BRANCH_COLORS.length]} floodOpacity="0.3" />
                    </filter>
                  </defs>
                  <rect x={pos.x} y={30} width={120} height={45} rx={8} fill={`url(#seq-grad-${i})`} stroke={BRANCH_COLORS[i % BRANCH_COLORS.length]} strokeWidth={2} filter={`url(#seq-shadow-${i})`} style={{ cursor: canvas.dragging === p.id ? 'grabbing' : 'grab', touchAction: 'none' }} onMouseDown={(e) => { e.stopPropagation(); canvas.handleNodeMouseDown(e, p.id, pos.x, 0); }} onTouchStart={(e) => { e.stopPropagation(); canvas.handleNodeTouchStart(e, p.id, pos.x, 0); }} />
                  <text x={pos.x + 60} y={58} textAnchor="middle" fill={theme.textPrimary} fontSize={13} fontWeight={600} style={{ pointerEvents: 'none' }}>{p.label}</text>
                </g>
              );
            })}
            {messages.map((msg, i) => {
              const from = participants.find(p => p.id === msg.from), to = participants.find(p => p.id === msg.to);
              if (!from || !to) return null;
              const fp = getPos(from), tp = getPos(to);
              const y = 110 + i * 60, fromX = fp.x + 60, toX = tp.x + 60;
              const msgColor = msg.isReturn ? theme.textSecondary : COLORS.purple;
              return (
                <g key={`msg-${i}`}>
                  <defs><marker id={`seq-arr-${i}`} markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto"><polygon points="0 0, 10 4, 0 8" fill={msgColor} /></marker></defs>
                  {/* Outer glow */}
                  <line x1={fromX} y1={y} x2={toX - (fromX < toX ? 8 : -8)} y2={y} stroke={msgColor} strokeWidth={6} strokeOpacity={0.1} strokeLinecap="round" />
                  {/* Inner glow */}
                  <line x1={fromX} y1={y} x2={toX - (fromX < toX ? 8 : -8)} y2={y} stroke={msgColor} strokeWidth={4} strokeOpacity={0.2} strokeLinecap="round" />
                  {/* Main stroke */}
                  <line x1={fromX} y1={y} x2={toX - (fromX < toX ? 8 : -8)} y2={y} stroke={msgColor} strokeWidth={2} strokeDasharray={msg.isReturn ? "4,3" : "none"} markerEnd={`url(#seq-arr-${i})`} />
                  <rect x={Math.min(fromX, toX) + Math.abs(toX - fromX) / 2 - 50} y={y - 20} width={100} height={18} rx={4} fill="rgba(0,0,0,0.85)" />
                  <text x={Math.min(fromX, toX) + Math.abs(toX - fromX) / 2} y={y - 7} textAnchor="middle" fill={msgColor} fontSize={11}>{msg.label}</text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.2, 2))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.8, 0.3))} onFit={() => canvas.fitToView(contentBounds)} onReset={canvas.resetView} zoom={canvas.zoom} />
    </div>
  );
}

// Timeline with draggable events
function TimelineDiagram({ events, theme = THEMES.dark }) {
  const canvas = useInteractiveCanvas({ x: 30, y: 0 });
  const getPos = (e) => canvas.getNodePosition(e.id, e.x, e.y);

  const contentBounds = useMemo(() => {
    if (!events || events.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const xs = events.map(e => e.x);
    return { x: Math.min(...xs) - 60, y: 0, width: Math.max(...xs) - Math.min(...xs) + 280, height: 350 };
  }, [events]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}`, touchAction: 'none' }}>
      <div ref={canvas.canvasRef} className="canvas-bg" onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={canvas.handleMouseUp} onMouseLeave={canvas.handleMouseUp} onTouchStart={canvas.handleTouchStart} onTouchMove={canvas.handleTouchMove} onTouchEnd={canvas.handleTouchEnd} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : canvas.dragging ? 'grabbing' : 'grab', touchAction: 'none' }}>
        <div style={{ position: 'absolute', transform: `translate(${canvas.pan.x}px, ${canvas.pan.y}px) scale(${canvas.zoom})`, transformOrigin: '0 0', padding: '80px 50px' }}>
          <div style={{ position: 'absolute', top: 265, left: 50, width: events.length * 220, height: 4, background: `linear-gradient(90deg, ${COLORS.purple}, ${COLORS.blue}, ${COLORS.green})`, borderRadius: 2 }} />
          {events.map((event, i) => {
            const pos = getPos(event);
            const color = event.isMilestone ? COLORS.orange : COLORS.purple;
            const isDragging = canvas.dragging === event.id;
            return (
              <div key={event.id} onMouseDown={(e) => canvas.handleNodeMouseDown(e, event.id, pos.x, pos.y)} onTouchStart={(e) => canvas.handleNodeTouchStart(e, event.id, pos.x, pos.y)} style={{ position: 'absolute', left: pos.x, top: 80, width: 190, cursor: isDragging ? 'grabbing' : 'grab', touchAction: 'none' }}>
                <div style={{ background: event.isMilestone ? `linear-gradient(135deg, ${COLORS.orange}35, ${COLORS.orange}12)` : getNodeGradient(color), border: `2px solid ${color}`, borderRadius: 12, padding: 16, textAlign: 'center', minHeight: 110, boxShadow: getNodeShadow(color, isDragging, false), transition: isDragging ? 'none' : 'box-shadow 0.2s' }}>
                  {event.isMilestone && <div style={{ fontSize: '1.3rem', marginBottom: 6 }}>🎯</div>}
                  <div style={{ fontSize: '0.8rem', color, fontWeight: 600, marginBottom: 6 }}>{event.date}</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: theme.textPrimary }}>{event.label}</div>
                  {event.description && <div style={{ fontSize: '0.75rem', color: theme.textSecondary, marginTop: 6 }}>{event.description}</div>}
                </div>
                <div style={{ position: 'absolute', left: 93, top: '100%', width: 2, height: 35, background: color }} />
                <div style={{ position: 'absolute', left: 88, top: 'calc(100% + 30px)', width: 14, height: 14, borderRadius: '50%', background: color, border: '3px solid #0f0f1a' }} />
              </div>
            );
          })}
        </div>
      </div>
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.2, 2))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.8, 0.3))} onFit={() => canvas.fitToView(contentBounds)} onReset={canvas.resetView} zoom={canvas.zoom} />
    </div>
  );
}

// Git Graph with draggable commits
function GitGraphDiagram({ data, theme = THEMES.dark }) {
  const { commits, branches } = data;
  const canvas = useInteractiveCanvas({ x: 20, y: 20 });
  const getPos = (c) => canvas.getNodePosition(c.id, c.x, c.y);

  const contentBounds = useMemo(() => {
    if (!commits || commits.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const xs = commits.map(c => c.x);
    const ys = commits.map(c => c.y);
    return { x: Math.min(...xs) - 100, y: Math.min(...ys) - 60, width: Math.max(...xs) - Math.min(...xs) + 200, height: Math.max(...ys) - Math.min(...ys) + 120 };
  }, [commits]);

  const connections = useMemo(() => {
    const conns = [];
    branches.forEach((branch, bi) => {
      const bc = commits.filter(c => c.branch === branch.name).sort((a, b) => a.index - b.index);
      for (let i = 0; i < bc.length - 1; i++) conns.push({ type: 'seq', from: bc[i], to: bc[i + 1], color: BRANCH_COLORS[bi % BRANCH_COLORS.length] });
      if (branch.parentBranch) {
        const pbi = branches.findIndex(b => b.name === branch.parentBranch);
        const pc = commits.filter(c => c.branch === branch.parentBranch);
        const fromC = pc.find(c => c.index === branch.branchPoint - 1) || pc[pc.length - 1];
        const toC = bc[0];
        if (fromC && toC) conns.push({ type: 'branch', from: fromC, to: toC, color: BRANCH_COLORS[bi % BRANCH_COLORS.length] });
      }
    });
    commits.filter(c => c.isMerge && c.mergeFrom).forEach(mc => {
      const sbi = branches.findIndex(b => b.name === mc.mergeFrom);
      const sc = commits.filter(c => c.branch === mc.mergeFrom).sort((a, b) => b.index - a.index)[0];
      if (sc) conns.push({ type: 'merge', from: sc, to: mc, color: BRANCH_COLORS[sbi % BRANCH_COLORS.length] });
    });
    return conns;
  }, [commits, branches]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}`, touchAction: 'none' }}>
      <div ref={canvas.canvasRef} className="canvas-bg" onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={canvas.handleMouseUp} onMouseLeave={canvas.handleMouseUp} onTouchStart={canvas.handleTouchStart} onTouchMove={canvas.handleTouchMove} onTouchEnd={canvas.handleTouchEnd} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : canvas.dragging ? 'grabbing' : 'grab', touchAction: 'none' }}>
        <svg width="100%" height="100%" style={{ position: 'absolute' }}>
          <g transform={`translate(${canvas.pan.x}, ${canvas.pan.y}) scale(${canvas.zoom})`}>
            {branches.map((b, i) => <text key={b.name} x={30} y={b.y + 5} fill={BRANCH_COLORS[i % BRANCH_COLORS.length]} fontSize={14} fontWeight={700}>{b.name}</text>)}
            {connections.map((c, i) => {
              const fp = getPos(c.from), tp = getPos(c.to);
              if (c.type === 'seq') {
                return (
                  <g key={i}>
                    {/* Outer glow */}
                    <line x1={fp.x} y1={fp.y} x2={tp.x} y2={tp.y} stroke={c.color} strokeWidth={10} strokeOpacity={0.1} strokeLinecap="round" />
                    {/* Inner glow */}
                    <line x1={fp.x} y1={fp.y} x2={tp.x} y2={tp.y} stroke={c.color} strokeWidth={6} strokeOpacity={0.25} strokeLinecap="round" />
                    {/* Main stroke */}
                    <line x1={fp.x} y1={fp.y} x2={tp.x} y2={tp.y} stroke={c.color} strokeWidth={4} strokeLinecap="round" />
                  </g>
                );
              }
              const mx = (fp.x + tp.x) / 2;
              const path = `M ${fp.x} ${fp.y} C ${mx} ${fp.y}, ${mx} ${tp.y}, ${tp.x} ${tp.y}`;
              return (
                <g key={i}>
                  {/* Outer glow */}
                  <path d={path} fill="none" stroke={c.color} strokeWidth={8} strokeOpacity={0.1} strokeLinecap="round" />
                  {/* Inner glow */}
                  <path d={path} fill="none" stroke={c.color} strokeWidth={5} strokeOpacity={0.25} strokeLinecap="round" />
                  {/* Main stroke */}
                  <path d={path} fill="none" stroke={c.color} strokeWidth={3} strokeDasharray={c.type === 'merge' ? '6,4' : 'none'} opacity={0.9} strokeLinecap="round" />
                </g>
              );
            })}
            {commits.map(c => {
              const pos = getPos(c);
              const bi = branches.findIndex(b => b.name === c.branch);
              const isDragging = canvas.dragging === c.id;
              return (
                <g key={c.id} style={{ cursor: isDragging ? 'grabbing' : 'grab', touchAction: 'none' }} onMouseDown={(e) => { e.stopPropagation(); canvas.handleNodeMouseDown(e, c.id, pos.x, pos.y); }} onTouchStart={(e) => { e.stopPropagation(); canvas.handleNodeTouchStart(e, c.id, pos.x, pos.y); }}>
                  <circle cx={pos.x} cy={pos.y} r={c.isMerge ? 14 : 12} fill={BRANCH_COLORS[bi % BRANCH_COLORS.length]} stroke={isDragging ? '#fff' : theme.canvasBg} strokeWidth={isDragging ? 4 : 3} />
                  {c.isMerge && <circle cx={pos.x} cy={pos.y} r={6} fill={theme.canvasBg} />}
                  <text x={pos.x} y={pos.y - 22} textAnchor="middle" fill={theme.textPrimary} fontSize={12} fontWeight={600}>{c.label}</text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.2, 2))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.8, 0.3))} onFit={() => canvas.fitToView(contentBounds)} onReset={canvas.resetView} zoom={canvas.zoom} />
    </div>
  );
}

// Non-draggable diagrams (Gantt, Pie, Quadrant, Wireframe, Deployment, Simple Cards)
function GanttDiagram({ tasks, theme = THEMES.dark }) {
  const maxEnd = Math.max(...tasks.map(t => t.start + t.duration), 14);
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'auto', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}`, padding: 20 }}>
      <div style={{ display: 'flex', marginLeft: 160, marginBottom: 12 }}>{Array.from({ length: maxEnd + 1 }, (_, i) => <div key={i} style={{ width: 40, textAlign: 'center', fontSize: '0.75rem', color: theme.textSecondary }}>{i}</div>)}</div>
      {tasks.map((task, i) => (
        <div key={task.id} style={{ display: 'flex', alignItems: 'center', height: 44, borderBottom: `1px solid ${theme.border}` }}>
          <div style={{ width: 160, paddingRight: 16, fontSize: '0.85rem', color: theme.textPrimary, fontWeight: 500 }}>{task.name}</div>
          <div style={{ flex: 1, position: 'relative', height: '100%' }}>
            {Array.from({ length: maxEnd + 1 }, (_, j) => <div key={j} style={{ position: 'absolute', left: j * 40, top: 0, bottom: 0, width: 1, background: theme.border }} />)}
            <div style={{ position: 'absolute', left: task.start * 40 + 2, top: 10, width: task.duration * 40 - 4, height: 24, background: `linear-gradient(135deg, ${BRANCH_COLORS[i % BRANCH_COLORS.length]}, ${BRANCH_COLORS[i % BRANCH_COLORS.length]}cc)`, borderRadius: 6, boxShadow: `0 2px 8px ${BRANCH_COLORS[i % BRANCH_COLORS.length]}40` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function PieChartDiagram({ data, theme = THEMES.dark }) {
  const total = data.reduce((s, d) => s + d.value, 0);
  let angle = -90;
  const slices = data.map((slice, i) => {
    const pct = (slice.value / total) * 100, a = (slice.value / total) * 360, start = angle;
    angle += a;
    const x1 = 200 + 120 * Math.cos((start * Math.PI) / 180), y1 = 200 + 120 * Math.sin((start * Math.PI) / 180);
    const x2 = 200 + 120 * Math.cos(((start + a) * Math.PI) / 180), y2 = 200 + 120 * Math.sin(((start + a) * Math.PI) / 180);
    const lx = 200 + 150 * Math.cos(((start + a / 2) * Math.PI) / 180), ly = 200 + 150 * Math.sin(((start + a / 2) * Math.PI) / 180);
    return { ...slice, pct, path: `M 200 200 L ${x1} ${y1} A 120 120 0 ${a > 180 ? 1 : 0} 1 ${x2} ${y2} Z`, color: BRANCH_COLORS[i % BRANCH_COLORS.length], lx, ly };
  });
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="450" height="400" viewBox="0 0 450 400">{slices.map((s, i) => <g key={i}><path d={s.path} fill={s.color} stroke={theme.canvasBg} strokeWidth={2} /><text x={s.lx} y={s.ly} textAnchor="middle" fill={theme.textPrimary} fontSize={11} fontWeight={500}>{s.label}</text><text x={s.lx} y={s.ly + 14} textAnchor="middle" fill={theme.textSecondary} fontSize={10}>{s.pct.toFixed(1)}%</text></g>)}</svg>
      <div style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)' }}>{slices.map((s, i) => <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}><div style={{ width: 14, height: 14, borderRadius: 3, background: s.color }} /><span style={{ fontSize: '0.8rem', color: theme.textPrimary }}>{s.label}</span></div>)}</div>
    </div>
  );
}

function QuadrantDiagram({ data, theme = THEMES.dark }) {
  const { config, points } = data;
  const canvas = useInteractiveCanvas({ x: 50, y: 20 });
  const size = 400, pad = 60, chart = size - pad * 2;
  const getPos = (p) => canvas.getNodePosition(p.id, pad + (p.x / 100) * chart + 50, pad + chart - (p.y / 100) * chart);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}` }}>
      <div ref={canvas.canvasRef} className="canvas-bg" onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={canvas.handleMouseUp} onMouseLeave={canvas.handleMouseUp} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : canvas.dragging ? 'grabbing' : 'grab', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width={size + 100} height={size} viewBox={`0 0 ${size + 100} ${size}`} style={{ transform: `translate(${canvas.pan.x - 50}px, ${canvas.pan.y - 20}px) scale(${canvas.zoom})`, transformOrigin: 'center' }}>
          {config.title && <text x={size / 2 + 50} y={30} textAnchor="middle" fill={theme.textPrimary} fontSize={16} fontWeight={700}>{config.title}</text>}
          <rect x={pad + 50} y={pad} width={chart / 2} height={chart / 2} fill={COLORS.green + '15'} />
          <rect x={pad + chart / 2 + 50} y={pad} width={chart / 2} height={chart / 2} fill={COLORS.blue + '15'} />
          <rect x={pad + 50} y={pad + chart / 2} width={chart / 2} height={chart / 2} fill={COLORS.orange + '15'} />
          <rect x={pad + chart / 2 + 50} y={pad + chart / 2} width={chart / 2} height={chart / 2} fill={COLORS.red + '15'} />
          <line x1={pad + 50} y1={pad + chart / 2} x2={pad + chart + 50} y2={pad + chart / 2} stroke={theme.border} strokeWidth={2} />
          <line x1={pad + chart / 2 + 50} y1={pad} x2={pad + chart / 2 + 50} y2={pad + chart} stroke={theme.border} strokeWidth={2} />
          {config.quadrants.map((q, i) => { const pos = [{ x: pad + chart / 4 + 50, y: pad + chart / 4 }, { x: pad + chart * 3 / 4 + 50, y: pad + chart / 4 }, { x: pad + chart / 4 + 50, y: pad + chart * 3 / 4 }, { x: pad + chart * 3 / 4 + 50, y: pad + chart * 3 / 4 }]; return q && <text key={i} x={pos[i].x} y={pos[i].y} textAnchor="middle" fill={theme.textSecondary} fontSize={11}>{q}</text>; })}
          {config.xLabel && <text x={size / 2 + 50} y={size - 10} textAnchor="middle" fill={theme.textSecondary} fontSize={12}>{config.xLabel}</text>}
          {config.yLabel && <text x={20} y={size / 2} textAnchor="middle" fill={theme.textSecondary} fontSize={12} transform={`rotate(-90, 20, ${size / 2})`}>{config.yLabel}</text>}
          {points.map((p, i) => {
            const pos = getPos(p);
            const isDragging = canvas.dragging === p.id;
            return (
              <g key={i} style={{ cursor: isDragging ? 'grabbing' : 'grab' }} onMouseDown={(e) => { e.stopPropagation(); canvas.handleNodeMouseDown(e, p.id, pos.x, pos.y); }}>
                <circle cx={pos.x} cy={pos.y} r={12} fill={BRANCH_COLORS[i % BRANCH_COLORS.length]} stroke={isDragging ? '#fff' : 'none'} strokeWidth={3} />
                <text x={pos.x} y={pos.y - 18} textAnchor="middle" fill={theme.textPrimary} fontSize={11}>{p.label}</text>
              </g>
            );
          })}
        </svg>
      </div>
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.2, 2))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.8, 0.3))} onFit={() => {}} onReset={canvas.resetView} zoom={canvas.zoom} />
    </div>
  );
}

function DeploymentDiagram({ data, theme = THEMES.dark, onLabelChange, onDeleteNodes, onPasteNodes }) {
  const canvas = useInteractiveCanvas({ x: 30, y: 30 });
  const typeStyles = { cloud: { color: COLORS.sky, icon: '☁️' }, cluster: { color: COLORS.teal, icon: '🌐' }, container: { color: COLORS.cyan, icon: '📦' }, database: { color: COLORS.green, icon: '🗄️' }, storage: { color: COLORS.emerald, icon: '💾' }, device: { color: COLORS.pink, icon: '📱' }, server: { color: COLORS.violet, icon: '🖧' }, component: { color: COLORS.purple, icon: '⚙️' } };
  const layout = useMemo(() => {
    const nodes = data.nodes, positioned = [];
    const getChildren = (pid) => nodes.filter(n => n.parentId === pid);
    const getHeight = (id) => { const children = getChildren(id); return children.length === 0 ? 70 : 60 + children.reduce((s, c) => s + getHeight(c.id) + 15, 0); };
    const positionNode = (node, x, y, level) => {
      const style = typeStyles[node.type] || typeStyles.component;
      const children = getChildren(node.id), h = getHeight(node.id);
      positioned.push({ ...node, defaultX: x, defaultY: y, width: 220, height: h, level, ...style, hasChildren: children.length > 0 });
      let cy = y + 55;
      children.forEach(child => { positionNode(child, x + 20, cy, level + 1); cy += getHeight(child.id) + 15; });
    };
    const roots = nodes.filter(n => !n.parentId);
    let rx = 40;
    roots.forEach(root => { positionNode(root, rx, 40, 0); rx += 280; });
    return { nodes: positioned.sort((a, b) => a.level - b.level) };
  }, [data]);
  const getPos = (n) => canvas.getNodePosition(n.id, n.defaultX, n.defaultY);

  // Handle label edit complete
  const handleLabelEditFinish = useCallback(() => {
    const result = canvas.finishEditing();
    if (result.nodeId && result.newValue !== undefined && onLabelChange) {
      const node = layout.nodes.find(n => n.id === result.nodeId);
      if (node && node.label !== result.newValue) {
        onLabelChange(result.nodeId, node.label, result.newValue);
      }
    }
  }, [canvas, layout.nodes, onLabelChange]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform);
      const metaKey = isMac ? e.metaKey : e.ctrlKey;
      if (canvas.editingNode) return;
      if ((e.key === 'Delete' || e.key === 'Backspace') && canvas.selectedNodes.size > 0 && onDeleteNodes) {
        e.preventDefault();
        onDeleteNodes(Array.from(canvas.selectedNodes));
        canvas.clearSelection();
        return;
      }
      if (metaKey && e.key.toLowerCase() === 'c' && canvas.selectedNodes.size > 0) {
        e.preventDefault();
        canvas.copySelectedNodes(layout.nodes);
        return;
      }
      if (metaKey && e.key.toLowerCase() === 'v' && canvas.clipboard && onPasteNodes) {
        e.preventDefault();
        const pastedNodes = canvas.pasteNodes();
        if (pastedNodes) onPasteNodes(pastedNodes);
        return;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [canvas, layout.nodes, onDeleteNodes, onPasteNodes]);

  // Handle selection box completion
  useEffect(() => {
    if (!canvas.isSelecting && canvas.selectionBox) {
      const nodeIds = canvas.getNodesInSelectionBox(layout.nodes.map(n => ({ ...n, x: n.defaultX, y: n.defaultY })), canvas.selectionBox);
      if (nodeIds.length > 0) canvas.setSelectedNodes(new Set(nodeIds));
    }
  }, [canvas.isSelecting, canvas.selectionBox, layout.nodes, canvas]);

  // Handle canvas click to clear selection
  const handleCanvasClick = useCallback((e) => {
    if (e.target === canvas.canvasRef.current || e.target.classList.contains('canvas-bg')) {
      canvas.clearSelection();
      canvas.closeContextMenu();
    }
  }, [canvas]);

  const contentBounds = useMemo(() => {
    if (!layout.nodes || layout.nodes.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const xs = layout.nodes.map(n => n.defaultX);
    const ys = layout.nodes.map(n => n.defaultY);
    const heights = layout.nodes.map(n => n.height || 70);
    return { x: Math.min(...xs) - 60, y: Math.min(...ys) - 60, width: Math.max(...xs) - Math.min(...xs) + 300, height: Math.max(...ys.map((y, i) => y + heights[i])) - Math.min(...ys) + 120 };
  }, [layout]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}`, touchAction: 'none' }}>
      <div ref={canvas.canvasRef} className="canvas-bg" onClick={handleCanvasClick} onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={canvas.handleMouseUp} onMouseLeave={canvas.handleMouseUp} onTouchStart={canvas.handleTouchStart} onTouchMove={canvas.handleTouchMove} onTouchEnd={canvas.handleTouchEnd} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : canvas.dragging ? 'grabbing' : 'grab', touchAction: 'none' }}>
        <div className="canvas-bg" style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${theme.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * canvas.zoom}px ${25 * canvas.zoom}px`, backgroundPosition: `${canvas.pan.x}px ${canvas.pan.y}px`, pointerEvents: 'none' }} />
        <svg width="100%" height="100%" style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none' }}>
          <g transform={`translate(${canvas.pan.x}, ${canvas.pan.y}) scale(${canvas.zoom})`}>
            {/* Selection box */}
            {canvas.isSelecting && canvas.selectionBox && (
              <rect x={Math.min(canvas.selectionBox.startX, canvas.selectionBox.endX)} y={Math.min(canvas.selectionBox.startY, canvas.selectionBox.endY)} width={Math.abs(canvas.selectionBox.endX - canvas.selectionBox.startX)} height={Math.abs(canvas.selectionBox.endY - canvas.selectionBox.startY)} fill={`${COLORS.blue}20`} stroke={COLORS.blue} strokeWidth={1} strokeDasharray="4,4" />
            )}
          </g>
        </svg>
        <div style={{ position: 'absolute', transform: `translate(${canvas.pan.x}px, ${canvas.pan.y}px) scale(${canvas.zoom})`, transformOrigin: '0 0' }}>
          {layout.nodes.map(node => {
            const pos = getPos(node);
            const isDragging = canvas.dragging === node.id;
            const isSelected = canvas.selectedNodes.has(node.id);
            return (
              <div key={node.id} onClick={(e) => canvas.handleNodeClick(e, node.id)} onDoubleClick={(e) => canvas.handleNodeDoubleClick(e, node.id, node.label)} onContextMenu={(e) => canvas.handleNodeContextMenu(e, node.id)} onMouseDown={(e) => canvas.handleNodeMouseDown(e, node.id, pos.x, pos.y)} onTouchStart={(e) => canvas.handleNodeTouchStart(e, node.id, pos.x, pos.y)} style={{ position: 'absolute', left: pos.x, top: pos.y, width: node.width, height: node.height, background: `${node.color}10`, border: `2px ${node.level === 0 ? 'solid' : 'dashed'} ${isSelected ? COLORS.blue : node.color}`, borderRadius: 12, boxSizing: 'border-box', cursor: isDragging ? 'grabbing' : 'grab', boxShadow: isSelected ? `0 0 0 2px ${COLORS.blue}, 0 0 20px ${COLORS.blue}40` : isDragging ? `0 0 30px ${node.color}40` : 'none', transition: isDragging ? 'none' : 'box-shadow 0.2s', touchAction: 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderBottom: node.hasChildren ? `1px solid ${node.color}30` : 'none' }}>
                  <span style={{ fontSize: '1.3rem' }}>{node.icon}</span>
                  {canvas.editingNode === node.id ? (
                    <EditableNodeLabel value={canvas.editingValue} onChange={(v) => canvas.setEditingValue(v)} onFinish={handleLabelEditFinish} style={{ fontSize: '0.9rem', fontWeight: 600, color: theme.textPrimary }} />
                  ) : (
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: theme.textPrimary }}>{node.label}</span>
                  )}
                  <span style={{ fontSize: '0.6rem', color: node.color, marginLeft: 'auto', background: `${node.color}20`, padding: '3px 8px', borderRadius: 4 }}>«{node.type}»</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Selection info */}
      {canvas.selectedNodes.size > 0 && (
        <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(0,0,0,0.8)', padding: '6px 12px', borderRadius: 6, fontSize: '0.75rem', color: '#fff', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span>{canvas.selectedNodes.size} selected</span>
          <span style={{ opacity: 0.6 }}>|</span>
          <span style={{ opacity: 0.7 }}>Del to delete • ⌘C copy • ⌘V paste</span>
        </div>
      )}
      {/* Clipboard indicator */}
      {canvas.clipboard && (
        <div style={{ position: 'absolute', top: canvas.selectedNodes.size > 0 ? 48 : 12, left: 12, background: `${COLORS.green}20`, padding: '4px 10px', borderRadius: 4, fontSize: '0.7rem', color: COLORS.green, border: `1px solid ${COLORS.green}40` }}>
          {canvas.clipboard.length} node{canvas.clipboard.length > 1 ? 's' : ''} copied
        </div>
      )}
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.2, 2))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.8, 0.3))} onFit={() => canvas.fitToView(contentBounds)} onReset={canvas.resetView} zoom={canvas.zoom} />
      {/* Context menu */}
      {canvas.contextMenu && <ColorPickerMenu position={canvas.contextMenu} onClose={() => canvas.closeContextMenu()} nodeId={canvas.contextMenu.nodeId} />}
    </div>
  );
}

function WireframeDiagram({ data, theme = THEMES.dark }) {
  const { elements, totalHeight } = data;
  
  const renderElement = (el) => {
    const base = { position: 'absolute', left: el.x, top: el.y, fontFamily: 'system-ui' };
    
    switch (el.type) {
      case 'window':
        return (
          <div key={el.id} style={{ ...base, width: el.width, height: el.height, background: COLORS.slate, borderRadius: '8px 8px 0 0', display: 'flex', alignItems: 'center', padding: '0 12px' }}>
            <div style={{ display: 'flex', gap: 6, marginRight: 12 }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: COLORS.red }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: COLORS.yellow }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: COLORS.green }} />
            </div>
            <span style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 600 }}>{el.label}</span>
          </div>
        );
        
      case 'card':
        return (
          <div key={el.id} style={{ ...base, width: el.width, height: el.height, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
            {el.label && <div style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', borderRadius: '12px 12px 0 0', fontWeight: 600, color: theme.textPrimary, fontSize: '0.85rem' }}>{el.label}</div>}
          </div>
        );
        
      case 'modal':
        return (
          <div key={el.id} style={{ ...base, width: el.width, height: el.height, background: theme.surface, border: '1px solid rgba(255,255,255,0.2)', borderRadius: 12, boxShadow: '0 25px 50px rgba(0,0,0,0.5)' }}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: 600, color: theme.textPrimary }}>{el.label}</span>
              <span style={{ color: theme.textMuted, cursor: 'pointer', fontSize: '1.2rem' }}>×</span>
            </div>
            <div style={{ padding: 20, color: theme.textSecondary, fontSize: '0.85rem' }}>Modal content area...</div>
          </div>
        );
        
      case 'navbar':
        return (
          <div key={el.id} style={{ ...base, width: el.width, height: el.height, background: 'rgba(0,0,0,0.4)', borderRadius: 8, display: 'flex', alignItems: 'center', padding: '0 16px', gap: 24 }}>
            <span style={{ fontWeight: 700, color: theme.textPrimary, fontSize: '1rem' }}>◆</span>
            {el.items.map((item, i) => (
              <span key={i} style={{ color: i === 0 ? COLORS.purple : theme.textSecondary, fontSize: '0.85rem', fontWeight: i === 0 ? 600 : 400 }}>{item}</span>
            ))}
          </div>
        );
        
      case 'tabs':
        return (
          <div key={el.id} style={{ ...base, width: el.width, height: el.height, display: 'flex', borderBottom: '2px solid rgba(255,255,255,0.1)' }}>
            {el.items.map((item, i) => (
              <div key={i} style={{ padding: '10px 20px', color: i === el.activeIndex ? COLORS.purple : theme.textSecondary, borderBottom: i === el.activeIndex ? `2px solid ${COLORS.purple}` : 'none', marginBottom: -2, fontSize: '0.85rem', fontWeight: i === el.activeIndex ? 600 : 400 }}>{item}</div>
            ))}
          </div>
        );
        
      case 'breadcrumbs':
        return (
          <div key={el.id} style={{ ...base, display: 'flex', alignItems: 'center', gap: 8 }}>
            {el.items.map((item, i) => (
              <React.Fragment key={i}>
                <span style={{ color: i === el.items.length - 1 ? theme.textPrimary : COLORS.purple, fontSize: '0.8rem' }}>{item}</span>
                {i < el.items.length - 1 && <span style={{ color: theme.textMuted }}>›</span>}
              </React.Fragment>
            ))}
          </div>
        );
        
      case 'search':
        return (
          <div key={el.id} style={{ ...base, width: el.width, height: el.height, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 20, display: 'flex', alignItems: 'center', padding: '0 16px', gap: 10 }}>
            <span style={{ fontSize: '1rem' }}>🔍</span>
            <span style={{ color: theme.textMuted, fontSize: '0.85rem' }}>{el.label}</span>
          </div>
        );
        
      case 'dropdown':
        return (
          <div key={el.id} style={{ ...base, width: el.width, height: el.height, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px' }}>
            <span style={{ color: theme.textPrimary, fontSize: '0.85rem' }}>{el.label}</span>
            <span style={{ color: theme.textMuted }}>▾</span>
          </div>
        );
        
      case 'toggle':
        return (
          <div key={el.id} style={{ ...base, display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 44, height: 24, borderRadius: 12, background: el.enabled ? COLORS.green : 'rgba(255,255,255,0.2)', position: 'relative', transition: 'background 0.2s' }}>
              <div style={{ position: 'absolute', top: 2, left: el.enabled ? 22 : 2, width: 20, height: 20, borderRadius: '50%', background: '#fff', transition: 'left 0.2s' }} />
            </div>
            <span style={{ color: theme.textPrimary, fontSize: '0.85rem' }}>{el.label}</span>
          </div>
        );
        
      case 'radio':
        return (
          <div key={el.id} style={{ ...base, display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 20, height: 20, borderRadius: '50%', border: `2px solid ${el.selected ? COLORS.purple : 'rgba(255,255,255,0.4)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {el.selected && <div style={{ width: 10, height: 10, borderRadius: '50%', background: COLORS.purple }} />}
            </div>
            <span style={{ color: theme.textPrimary, fontSize: '0.85rem' }}>{el.label}</span>
          </div>
        );
        
      case 'slider':
        return (
          <div key={el.id} style={{ ...base, width: el.width }}>
            <div style={{ height: 6, background: 'rgba(255,255,255,0.2)', borderRadius: 3, position: 'relative' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${el.value}%`, background: COLORS.purple, borderRadius: 3 }} />
              <div style={{ position: 'absolute', top: -7, left: `${el.value}%`, transform: 'translateX(-50%)', width: 20, height: 20, borderRadius: '50%', background: '#fff', border: `3px solid ${COLORS.purple}` }} />
            </div>
            <div style={{ textAlign: 'right', fontSize: '0.75rem', color: theme.textSecondary, marginTop: 8 }}>{el.value}%</div>
          </div>
        );
        
      case 'progress':
        return (
          <div key={el.id} style={{ ...base, width: el.width }}>
            <div style={{ height: 8, background: 'rgba(255,255,255,0.15)', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${el.value}%`, background: `linear-gradient(90deg, ${COLORS.purple}, ${COLORS.blue})`, borderRadius: 4 }} />
            </div>
            <div style={{ textAlign: 'right', fontSize: '0.7rem', color: theme.textSecondary, marginTop: 4 }}>{el.value}%</div>
          </div>
        );
        
      case 'avatar':
        return (
          <div key={el.id} style={{ ...base, display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: `linear-gradient(135deg, ${COLORS.purple}, ${COLORS.pink})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>
              {el.label ? el.label.charAt(0).toUpperCase() : '👤'}
            </div>
            {el.label && <span style={{ color: theme.textPrimary, fontSize: '0.9rem' }}>{el.label}</span>}
          </div>
        );
        
      case 'avatar-group':
        return (
          <div key={el.id} style={{ ...base, display: 'flex' }}>
            {Array.from({ length: Math.min(el.count, 5) }).map((_, i) => (
              <div key={i} style={{ width: 36, height: 36, borderRadius: '50%', background: BRANCH_COLORS[i % BRANCH_COLORS.length], border: '2px solid #1a1a2e', marginLeft: i > 0 ? -12 : 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.8rem', fontWeight: 600 }}>
                {String.fromCharCode(65 + i)}
              </div>
            ))}
            {el.count > 5 && <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', border: '2px solid #1a1a2e', marginLeft: -12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.textSecondary, fontSize: '0.7rem' }}>+{el.count - 5}</div>}
          </div>
        );
        
      case 'image':
        return (
          <div key={el.id} style={{ ...base, width: el.width, height: el.height, background: 'rgba(255,255,255,0.05)', border: '2px dashed rgba(255,255,255,0.2)', borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <span style={{ fontSize: '2rem' }}>🖼️</span>
            <span style={{ color: theme.textMuted, fontSize: '0.8rem' }}>{el.label || 'Image'}</span>
          </div>
        );
        
      case 'video':
        return (
          <div key={el.id} style={{ ...base, width: el.width, height: el.height, background: 'rgba(0,0,0,0.3)', border: '2px dashed rgba(255,255,255,0.2)', borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '1.5rem', marginLeft: 4 }}>▶</span>
            </div>
            <span style={{ color: theme.textMuted, fontSize: '0.8rem' }}>{el.label || 'Video'}</span>
          </div>
        );
        
      case 'map':
        return (
          <div key={el.id} style={{ ...base, width: el.width, height: el.height, background: 'rgba(20,184,166,0.1)', border: '2px dashed rgba(20,184,166,0.3)', borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <span style={{ fontSize: '2.5rem' }}>📍</span>
            <span style={{ color: COLORS.teal, fontSize: '0.8rem' }}>{el.label || 'Map'}</span>
          </div>
        );
        
      case 'chart':
        return (
          <div key={el.id} style={{ ...base, width: el.width, height: el.height, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 16 }}>
            <div style={{ height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', gap: 8 }}>
              {[60, 85, 45, 90, 55, 70].map((h, i) => (
                <div key={i} style={{ width: '12%', height: `${h}%`, background: `linear-gradient(180deg, ${BRANCH_COLORS[i % BRANCH_COLORS.length]}, ${BRANCH_COLORS[i % BRANCH_COLORS.length]}88)`, borderRadius: '4px 4px 0 0' }} />
              ))}
            </div>
          </div>
        );
        
      case 'calendar':
        return (
          <div key={el.id} style={{ ...base, width: el.width, height: el.height, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <span style={{ color: theme.textMuted }}>‹</span>
              <span style={{ color: theme.textPrimary, fontWeight: 600, fontSize: '0.85rem' }}>December 2024</span>
              <span style={{ color: theme.textMuted }}>›</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2, textAlign: 'center' }}>
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                <div key={i} style={{ color: theme.textMuted, fontSize: '0.7rem', padding: 4 }}>{d}</div>
              ))}
              {Array.from({ length: 35 }).map((_, i) => {
                const day = i - 5;
                const isToday = day === 15;
                return (
                  <div key={i} style={{ padding: 6, fontSize: '0.75rem', color: day < 1 || day > 31 ? 'transparent' : isToday ? '#fff' : theme.textSecondary, background: isToday ? COLORS.purple : 'transparent', borderRadius: '50%' }}>
                    {day < 1 ? '' : day > 31 ? '' : day}
                  </div>
                );
              })}
            </div>
          </div>
        );
        
      case 'table-row':
        return (
          <div key={el.id} style={{ ...base, width: el.width, height: el.height, display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.1)', background: el.isHeader ? 'rgba(255,255,255,0.05)' : 'transparent' }}>
            {el.cells.map((cell, i) => (
              <div key={i} style={{ flex: 1, padding: '8px 12px', color: el.isHeader ? theme.textPrimary : theme.textSecondary, fontSize: '0.8rem', fontWeight: el.isHeader ? 600 : 400, borderRight: i < el.cells.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>{cell}</div>
            ))}
          </div>
        );
        
      case 'list-item':
        return (
          <div key={el.id} style={{ ...base, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ color: COLORS.purple }}>•</span>
            <span style={{ color: theme.textPrimary, fontSize: '0.85rem' }}>{el.label}</span>
          </div>
        );
        
      case 'list-item-numbered':
        return (
          <div key={el.id} style={{ ...base, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ color: COLORS.purple, fontWeight: 600, minWidth: 20 }}>{el.number}.</span>
            <span style={{ color: theme.textPrimary, fontSize: '0.85rem' }}>{el.label}</span>
          </div>
        );
        
      case 'badge':
        const badgeColors = { success: COLORS.green, warning: COLORS.orange, error: COLORS.red, info: COLORS.blue, new: COLORS.pink, beta: COLORS.purple, pro: COLORS.amber };
        const badgeColor = badgeColors[el.variant] || COLORS.purple;
        return (
          <div key={el.id} style={{ ...base, display: 'inline-flex', padding: '4px 10px', background: `${badgeColor}25`, border: `1px solid ${badgeColor}`, borderRadius: 12, color: badgeColor, fontSize: '0.75rem', fontWeight: 600 }}>
            {el.label}
          </div>
        );
        
      case 'alert':
        const alertConfig = { info: { color: COLORS.blue, icon: 'ℹ️' }, success: { color: COLORS.green, icon: '✓' }, warning: { color: COLORS.orange, icon: '⚠️' }, error: { color: COLORS.red, icon: '✗' } };
        const alertStyle = alertConfig[el.variant] || alertConfig.info;
        return (
          <div key={el.id} style={{ ...base, width: el.width, padding: '12px 16px', background: `${alertStyle.color}15`, border: `1px solid ${alertStyle.color}40`, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: '1.1rem' }}>{alertStyle.icon}</span>
            <span style={{ color: theme.textPrimary, fontSize: '0.85rem' }}>{el.label}</span>
          </div>
        );
        
      case 'stepper':
        return (
          <div key={el.id} style={{ ...base, width: el.width, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0 }}>
            {Array.from({ length: el.total }).map((_, i) => (
              <React.Fragment key={i}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: i < el.current ? COLORS.green : i === el.current - 1 ? COLORS.purple : 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: i < el.current ? '#fff' : theme.textSecondary, fontSize: '0.8rem', fontWeight: 600 }}>
                  {i < el.current - 1 ? '✓' : i + 1}
                </div>
                {i < el.total - 1 && <div style={{ width: 40, height: 2, background: i < el.current - 1 ? COLORS.green : 'rgba(255,255,255,0.15)' }} />}
              </React.Fragment>
            ))}
          </div>
        );
        
      case 'pagination':
        return (
          <div key={el.id} style={{ ...base, display: 'flex', alignItems: 'center', gap: 4 }}>
            <button style={{ width: 32, height: 32, background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: 6, color: theme.textSecondary, cursor: 'pointer' }}>‹</button>
            {Array.from({ length: Math.min(el.total, 5) }).map((_, i) => {
              const page = i + 1;
              return (
                <button key={i} style={{ width: 32, height: 32, background: page === el.current ? COLORS.purple : 'rgba(255,255,255,0.1)', border: 'none', borderRadius: 6, color: page === el.current ? '#fff' : theme.textSecondary, cursor: 'pointer', fontSize: '0.8rem' }}>{page}</button>
              );
            })}
            {el.total > 5 && <span style={{ color: theme.textMuted, padding: '0 8px' }}>...</span>}
            {el.total > 5 && <button style={{ width: 32, height: 32, background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: 6, color: theme.textSecondary, cursor: 'pointer', fontSize: '0.8rem' }}>{el.total}</button>}
            <button style={{ width: 32, height: 32, background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: 6, color: theme.textSecondary, cursor: 'pointer' }}>›</button>
          </div>
        );
        
      case 'skeleton':
        return (
          <div key={el.id} style={{ ...base, width: el.width, height: el.height, background: 'linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 75%)', backgroundSize: '200% 100%', borderRadius: 4, animation: 'shimmer 1.5s infinite' }} />
        );
        
      case 'textarea':
        return (
          <div key={el.id} style={{ ...base, width: el.width, height: el.height, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 8, padding: 12 }}>
            <span style={{ color: theme.textMuted, fontSize: '0.85rem' }}>{el.label || 'Enter text...'}</span>
          </div>
        );
        
      case 'chat-message':
        const msgBg = el.isUser ? COLORS.blue : 'rgba(255,255,255,0.1)';
        const msgAlign = el.isUser ? 'flex-end' : 'flex-start';
        const msgRadius = el.isUser ? '16px 16px 4px 16px' : '16px 16px 16px 4px';
        return (
          <div key={el.id} style={{ ...base, width: el.width, display: 'flex', flexDirection: 'column', alignItems: msgAlign }}>
            <span style={{ fontSize: '0.7rem', color: theme.textMuted, marginBottom: 4 }}>{el.sender}</span>
            <div style={{ maxWidth: '75%', background: msgBg, padding: '10px 14px', borderRadius: msgRadius }}>
              <span style={{ color: el.isUser ? '#fff' : theme.textPrimary, fontSize: '0.85rem', lineHeight: 1.4 }}>{el.message}</span>
            </div>
          </div>
        );

      case 'button':
        const btnStyles = {
          primary: { bg: COLORS.blue, border: COLORS.blue, color: '#fff' },
          secondary: { bg: 'transparent', border: 'rgba(255,255,255,0.3)', color: theme.textPrimary },
          ghost: { bg: 'transparent', border: 'transparent', color: COLORS.purple },
          danger: { bg: COLORS.red, border: COLORS.red, color: '#fff' }
        };
        const btn = btnStyles[el.variant] || btnStyles.primary;
        return (
          <div key={el.id} style={{ ...base, width: el.width, height: el.height, background: btn.bg, border: `2px solid ${btn.border}`, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <span style={{ color: btn.color, fontSize: '0.85rem', fontWeight: 600 }}>{el.label}</span>
          </div>
        );
        
      case 'icon-button':
        const icons = { menu: '☰', close: '✕', settings: '⚙', user: '👤', search: '🔍', home: '🏠', edit: '✏️', delete: '🗑️', add: '+', more: '⋯' };
        return (
          <div key={el.id} style={{ ...base, width: 40, height: 40, background: 'rgba(255,255,255,0.1)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <span style={{ fontSize: '1.2rem' }}>{icons[el.icon] || el.icon}</span>
          </div>
        );
        
      case 'divider-label':
        return (
          <div key={el.id} style={{ ...base, width: el.width, display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.15)' }} />
            <span style={{ color: theme.textMuted, fontSize: '0.75rem' }}>{el.label}</span>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.15)' }} />
          </div>
        );
        
      case 'rating':
        return (
          <div key={el.id} style={{ ...base, display: 'flex', gap: 4 }}>
            {Array.from({ length: el.total }).map((_, i) => (
              <span key={i} style={{ color: i < el.filled ? COLORS.amber : 'rgba(255,255,255,0.2)', fontSize: '1.2rem' }}>★</span>
            ))}
          </div>
        );
        
      case 'chip-group':
        return (
          <div key={el.id} style={{ ...base, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {el.tags.map((tag, i) => (
              <span key={i} style={{ padding: '6px 12px', background: `${BRANCH_COLORS[i % BRANCH_COLORS.length]}20`, border: `1px solid ${BRANCH_COLORS[i % BRANCH_COLORS.length]}`, borderRadius: 16, color: BRANCH_COLORS[i % BRANCH_COLORS.length], fontSize: '0.8rem' }}>{tag}</span>
            ))}
          </div>
        );
        
      case 'tooltip':
        return (
          <div key={el.id} style={{ ...base, width: 20, height: 20, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.textSecondary, fontSize: '0.75rem', fontWeight: 600 }}>?</div>
        );
        
      case 'button-row':
        return (
          <div key={el.id} style={{ ...base, width: el.width, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {el.buttons.map((btn, i) => (
              <div key={i} style={{ padding: '10px 16px', background: BRANCH_COLORS[i % BRANCH_COLORS.length], borderRadius: 8, color: '#fff', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                {btn}
              </div>
            ))}
          </div>
        );
        
      case 'feed-item':
        return (
          <div key={el.id} style={{ ...base, width: el.width, display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0' }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: `linear-gradient(135deg, ${COLORS.purple}, ${COLORS.pink})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.75rem', fontWeight: 700 }}>
              {el.username.charAt(0).toUpperCase()}
            </div>
            <div style={{ flex: 1 }}>
              <span style={{ color: COLORS.purple, fontWeight: 600, fontSize: '0.85rem' }}>@{el.username}</span>
              <span style={{ color: theme.textSecondary, fontSize: '0.85rem', marginLeft: 6 }}>{el.text}</span>
            </div>
          </div>
        );
        
      case 'win-notification':
        return (
          <div key={el.id} style={{ ...base, width: el.width, display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 10 }}>
            <span style={{ fontSize: '1.5rem' }}>{el.emoji}</span>
            <div style={{ flex: 1 }}>
              <span style={{ color: COLORS.green, fontWeight: 700, fontSize: '0.9rem' }}>@{el.username}</span>
              <span style={{ color: theme.textPrimary, fontSize: '0.9rem', marginLeft: 6 }}>{el.text}</span>
            </div>
          </div>
        );
        
      case 'social-stats':
        return (
          <div key={el.id} style={{ ...base, width: el.width, display: 'flex', alignItems: 'center', gap: 20, padding: '8px 0' }}>
            {el.text.split(/\s{2,}/).map((stat, i) => (
              <span key={i} style={{ color: i === 0 ? COLORS.pink : theme.textSecondary, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 4 }}>
                {stat}
              </span>
            ))}
          </div>
        );
        
      case 'input':
        return (
          <div key={el.id} style={{ ...base, width: el.width, height: el.height, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 8, display: 'flex', alignItems: 'center', padding: '0 12px' }}>
            <span style={{ color: theme.textMuted, fontSize: '0.85rem' }}>{el.label || 'Enter text...'}</span>
          </div>
        );
        
      case 'checkbox':
        return (
          <div key={el.id} style={{ ...base, display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 20, height: 20, border: `2px solid ${el.checked ? COLORS.blue : 'rgba(255,255,255,0.4)'}`, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', background: el.checked ? COLORS.blue : 'transparent' }}>
              {el.checked && <span style={{ color: '#fff', fontSize: '0.75rem' }}>✓</span>}
            </div>
            <span style={{ color: theme.textPrimary, fontSize: '0.85rem' }}>{el.label}</span>
          </div>
        );
        
      case 'separator':
        return <div key={el.id} style={{ ...base, width: el.width, height: el.height, background: 'rgba(255,255,255,0.15)' }} />;
        
      case 'text':
        const textStyles = {
          h1: { fontSize: '1.5rem', fontWeight: 800, color: theme.textPrimary },
          h2: { fontSize: '1.2rem', fontWeight: 700, color: theme.textPrimary },
          h3: { fontSize: '1rem', fontWeight: 600, color: theme.textPrimary },
          bold: { fontSize: '0.9rem', fontWeight: 600, color: theme.textPrimary },
          body: { fontSize: '0.9rem', fontWeight: 400, color: theme.textSecondary }
        };
        const textStyle = textStyles[el.textType] || textStyles.body;
        return <div key={el.id} style={{ ...base, ...textStyle }}>{el.label}</div>;
        
      default:
        return null;
    }
  };
  
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'auto', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}` }}>
      <style>{`@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`}</style>
      <div style={{ position: 'relative', minHeight: totalHeight, padding: 20 }}>
        {elements.map(renderElement)}
      </div>
    </div>
  );
}

// Component Diagram with connections
function ComponentDiagram({ data, theme = THEMES.dark, onLabelChange, onDeleteNodes, onPasteNodes }) {
  const canvas = useInteractiveCanvas({ x: 50, y: 50 });
  const { components = [], connections = [] } = data;

  const typeStyles = {
    service: { color: COLORS.blue, icon: '⚙️' },
    database: { color: COLORS.green, icon: '🗄️' },
    cache: { color: COLORS.red, icon: '⚡' },
    queue: { color: COLORS.orange, icon: '📬' },
    api: { color: COLORS.purple, icon: '🔌' },
    component: { color: COLORS.purple, icon: '📦' },
    default: { color: COLORS.purple, icon: '📦' }
  };

  const layout = useMemo(() => {
    const cols = Math.min(4, Math.max(2, Math.ceil(Math.sqrt(components.length))));
    return components.map((c, i) => ({
      ...c,
      id: c.label.toLowerCase().replace(/[^a-z0-9]/g, '_'),
      defaultX: 120 + (i % cols) * 220,
      defaultY: 100 + Math.floor(i / cols) * 160,
      style: typeStyles[c.type] || typeStyles.default
    }));
  }, [components]);

  const getPos = (comp) => canvas.getNodePosition(comp.id, comp.defaultX, comp.defaultY);

  // Handle label edit complete
  const handleLabelEditFinish = useCallback(() => {
    const result = canvas.finishEditing();
    if (result.nodeId && result.newValue !== undefined && onLabelChange) {
      const comp = layout.find(c => c.id === result.nodeId);
      if (comp && comp.label !== result.newValue) {
        onLabelChange(result.nodeId, comp.label, result.newValue);
      }
    }
  }, [canvas, layout, onLabelChange]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform);
      const metaKey = isMac ? e.metaKey : e.ctrlKey;
      if (canvas.editingNode) return;
      if ((e.key === 'Delete' || e.key === 'Backspace') && canvas.selectedNodes.size > 0 && onDeleteNodes) {
        e.preventDefault();
        onDeleteNodes(Array.from(canvas.selectedNodes));
        canvas.clearSelection();
        return;
      }
      if (metaKey && e.key.toLowerCase() === 'c' && canvas.selectedNodes.size > 0) {
        e.preventDefault();
        canvas.copySelectedNodes(layout);
        return;
      }
      if (metaKey && e.key.toLowerCase() === 'v' && canvas.clipboard && onPasteNodes) {
        e.preventDefault();
        const pastedNodes = canvas.pasteNodes();
        if (pastedNodes) onPasteNodes(pastedNodes);
        return;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [canvas, layout, onDeleteNodes, onPasteNodes]);

  // Handle selection box completion
  useEffect(() => {
    if (!canvas.isSelecting && canvas.selectionBox) {
      const nodeIds = canvas.getNodesInSelectionBox(layout.map(c => ({ ...c, x: c.defaultX, y: c.defaultY })), canvas.selectionBox);
      if (nodeIds.length > 0) canvas.setSelectedNodes(new Set(nodeIds));
    }
  }, [canvas.isSelecting, canvas.selectionBox, layout, canvas]);

  // Handle canvas click to clear selection
  const handleCanvasClick = useCallback((e) => {
    if (e.target === canvas.canvasRef.current || e.target.classList.contains('canvas-bg')) {
      canvas.clearSelection();
      canvas.closeContextMenu();
    }
  }, [canvas]);

  const contentBounds = useMemo(() => {
    if (!layout.length) return { x: 0, y: 0, width: 400, height: 300 };
    const xs = layout.map(c => c.defaultX);
    const ys = layout.map(c => c.defaultY);
    return { x: Math.min(...xs) - 80, y: Math.min(...ys) - 60, width: Math.max(...xs) - Math.min(...xs) + 280, height: Math.max(...ys) - Math.min(...ys) + 220 };
  }, [layout]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}`, touchAction: 'none' }}>
      <style>{`@keyframes flowDash { to { stroke-dashoffset: -20; } }`}</style>
      <div ref={canvas.canvasRef} className="canvas-bg" onClick={handleCanvasClick} onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={canvas.handleMouseUp} onMouseLeave={canvas.handleMouseUp} onTouchStart={canvas.handleTouchStart} onTouchMove={canvas.handleTouchMove} onTouchEnd={canvas.handleTouchEnd} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : canvas.dragging ? 'grabbing' : 'grab', touchAction: 'none' }}>
        <div className="canvas-bg" style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${theme.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * canvas.zoom}px ${25 * canvas.zoom}px`, backgroundPosition: `${canvas.pan.x}px ${canvas.pan.y}px`, pointerEvents: 'none' }} />
        <svg width="100%" height="100%" style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none' }}>
          <defs><marker id="comp-arrow" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><polygon points="0 0, 10 4, 0 8" fill={COLORS.purple} /></marker></defs>
          <g transform={`translate(${canvas.pan.x}, ${canvas.pan.y}) scale(${canvas.zoom})`}>
            {connections.map((conn, i) => {
              const src = layout.find(c => c.id === conn.from.toLowerCase().replace(/[^a-z0-9]/g, '_'));
              const tgt = layout.find(c => c.id === conn.to.toLowerCase().replace(/[^a-z0-9]/g, '_'));
              if (!src || !tgt) return null;
              const sp = getPos(src), tp = getPos(tgt);
              const dx = tp.x - sp.x, dy = tp.y - sp.y, dist = Math.sqrt(dx * dx + dy * dy) || 1;
              const midX = (sp.x + tp.x) / 2, midY = (sp.y + tp.y) / 2;
              const perpX = -dy / dist * 30, perpY = dx / dist * 30;
              const path = `M ${sp.x + (dx/dist)*75} ${sp.y + (dy/dist)*50} Q ${midX + perpX} ${midY + perpY} ${tp.x - (dx/dist)*75} ${tp.y - (dy/dist)*50}`;
              return (
                <g key={i}>
                  <path d={path} fill="none" stroke={COLORS.purple} strokeWidth={2} strokeDasharray="8,4" markerEnd="url(#comp-arrow)" opacity={0.8} style={{ animation: 'flowDash 1s linear infinite' }} />
                  {conn.label && <text x={midX + perpX} y={midY + perpY - 8} textAnchor="middle" fill={theme.textSecondary} fontSize={10}>{conn.label}</text>}
                </g>
              );
            })}
            {/* Selection box */}
            {canvas.isSelecting && canvas.selectionBox && (
              <rect x={Math.min(canvas.selectionBox.startX, canvas.selectionBox.endX)} y={Math.min(canvas.selectionBox.startY, canvas.selectionBox.endY)} width={Math.abs(canvas.selectionBox.endX - canvas.selectionBox.startX)} height={Math.abs(canvas.selectionBox.endY - canvas.selectionBox.startY)} fill={`${COLORS.blue}20`} stroke={COLORS.blue} strokeWidth={1} strokeDasharray="4,4" />
            )}
          </g>
        </svg>
        <div style={{ position: 'absolute', transform: `translate(${canvas.pan.x}px, ${canvas.pan.y}px) scale(${canvas.zoom})`, transformOrigin: '0 0' }}>
          {layout.map(comp => {
            const pos = getPos(comp);
            const isDragging = canvas.dragging === comp.id;
            const isSelected = canvas.selectedNodes.has(comp.id);
            return (
              <div key={comp.id} onClick={(e) => canvas.handleNodeClick(e, comp.id)} onDoubleClick={(e) => canvas.handleNodeDoubleClick(e, comp.id, comp.label)} onContextMenu={(e) => canvas.handleNodeContextMenu(e, comp.id)} onMouseDown={(e) => canvas.handleNodeMouseDown(e, comp.id, pos.x, pos.y)} onTouchStart={(e) => canvas.handleNodeTouchStart(e, comp.id, pos.x, pos.y)} style={{ position: 'absolute', left: pos.x - 75, top: pos.y - 50, width: 150, height: 100, background: `${comp.style.color}15`, border: `2px solid ${isSelected ? COLORS.blue : comp.style.color}`, borderRadius: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: isDragging ? 'grabbing' : 'grab', boxShadow: isSelected ? `0 0 0 2px ${COLORS.blue}, 0 0 20px ${COLORS.blue}40` : isDragging ? `0 0 30px ${comp.style.color}50` : `0 4px 20px ${comp.style.color}20`, transition: isDragging ? 'none' : 'box-shadow 0.2s', touchAction: 'none' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: 6 }}>{comp.style.icon}</div>
                {canvas.editingNode === comp.id ? (
                  <EditableNodeLabel value={canvas.editingValue} onChange={(v) => canvas.setEditingValue(v)} onFinish={handleLabelEditFinish} style={{ fontSize: '0.85rem', fontWeight: 600, color: theme.textPrimary, textAlign: 'center' }} />
                ) : (
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: theme.textPrimary, textAlign: 'center', padding: '0 8px' }}>{comp.label}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* Selection info */}
      {canvas.selectedNodes.size > 0 && (
        <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(0,0,0,0.8)', padding: '6px 12px', borderRadius: 6, fontSize: '0.75rem', color: '#fff', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span>{canvas.selectedNodes.size} selected</span>
          <span style={{ opacity: 0.6 }}>|</span>
          <span style={{ opacity: 0.7 }}>Del to delete • ⌘C copy • ⌘V paste</span>
        </div>
      )}
      {/* Clipboard indicator */}
      {canvas.clipboard && (
        <div style={{ position: 'absolute', top: canvas.selectedNodes.size > 0 ? 48 : 12, left: 12, background: `${COLORS.green}20`, padding: '4px 10px', borderRadius: 4, fontSize: '0.7rem', color: COLORS.green, border: `1px solid ${COLORS.green}40` }}>
          {canvas.clipboard.length} node{canvas.clipboard.length > 1 ? 's' : ''} copied
        </div>
      )}
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.2, 2.5))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.8, 0.3))} onFit={() => canvas.fitToView(contentBounds)} onReset={canvas.resetView} zoom={canvas.zoom} />
      {/* Context menu */}
      {canvas.contextMenu && <ColorPickerMenu position={canvas.contextMenu} onClose={() => canvas.closeContextMenu()} nodeId={canvas.contextMenu.nodeId} />}
    </div>
  );
}

// C4 Diagram with relationships
function C4Diagram({ data, theme = THEMES.dark, onLabelChange, onDeleteNodes, onPasteNodes }) {
  const canvas = useInteractiveCanvas({ x: 50, y: 50 });
  const { elements = [], relationships = [] } = data;

  const typeStyles = {
    person: { color: COLORS.blue, icon: '👤', shape: 'person' },
    system: { color: COLORS.cyan, icon: '🏢', shape: 'rect' },
    container: { color: COLORS.green, icon: '📦', shape: 'rect' },
    component: { color: COLORS.purple, icon: '⚙️', shape: 'rect' },
    database: { color: COLORS.emerald, icon: '🗄️', shape: 'cylinder' },
    external: { color: COLORS.slate, icon: '🌐', shape: 'rect' },
    default: { color: COLORS.cyan, icon: '🏗️', shape: 'rect' }
  };

  const layout = useMemo(() => {
    const cols = Math.min(4, Math.max(2, Math.ceil(Math.sqrt(elements.length))));
    return elements.map((el, i) => ({
      ...el,
      id: el.label.toLowerCase().replace(/[^a-z0-9]/g, '_'),
      defaultX: 150 + (i % cols) * 240,
      defaultY: 120 + Math.floor(i / cols) * 180,
      style: typeStyles[el.type] || typeStyles.default
    }));
  }, [elements]);

  const getPos = (el) => canvas.getNodePosition(el.id, el.defaultX, el.defaultY);

  // Handle label edit complete
  const handleLabelEditFinish = useCallback(() => {
    const result = canvas.finishEditing();
    if (result.nodeId && result.newValue !== undefined && onLabelChange) {
      const el = layout.find(e => e.id === result.nodeId);
      if (el && el.label !== result.newValue) {
        onLabelChange(result.nodeId, el.label, result.newValue);
      }
    }
  }, [canvas, layout, onLabelChange]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform);
      const metaKey = isMac ? e.metaKey : e.ctrlKey;
      if (canvas.editingNode) return;
      if ((e.key === 'Delete' || e.key === 'Backspace') && canvas.selectedNodes.size > 0 && onDeleteNodes) {
        e.preventDefault();
        onDeleteNodes(Array.from(canvas.selectedNodes));
        canvas.clearSelection();
        return;
      }
      if (metaKey && e.key.toLowerCase() === 'c' && canvas.selectedNodes.size > 0) {
        e.preventDefault();
        canvas.copySelectedNodes(layout);
        return;
      }
      if (metaKey && e.key.toLowerCase() === 'v' && canvas.clipboard && onPasteNodes) {
        e.preventDefault();
        const pastedNodes = canvas.pasteNodes();
        if (pastedNodes) onPasteNodes(pastedNodes);
        return;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [canvas, layout, onDeleteNodes, onPasteNodes]);

  // Handle selection box completion
  useEffect(() => {
    if (!canvas.isSelecting && canvas.selectionBox) {
      const nodeIds = canvas.getNodesInSelectionBox(layout.map(el => ({ ...el, x: el.defaultX, y: el.defaultY })), canvas.selectionBox);
      if (nodeIds.length > 0) canvas.setSelectedNodes(new Set(nodeIds));
    }
  }, [canvas.isSelecting, canvas.selectionBox, layout, canvas]);

  // Handle canvas click to clear selection
  const handleCanvasClick = useCallback((e) => {
    if (e.target === canvas.canvasRef.current || e.target.classList.contains('canvas-bg')) {
      canvas.clearSelection();
      canvas.closeContextMenu();
    }
  }, [canvas]);

  const contentBounds = useMemo(() => {
    if (!layout.length) return { x: 0, y: 0, width: 400, height: 300 };
    const xs = layout.map(e => e.defaultX);
    const ys = layout.map(e => e.defaultY);
    return { x: Math.min(...xs) - 100, y: Math.min(...ys) - 80, width: Math.max(...xs) - Math.min(...xs) + 320, height: Math.max(...ys) - Math.min(...ys) + 260 };
  }, [layout]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}`, touchAction: 'none' }}>
      <style>{`@keyframes flowDash { to { stroke-dashoffset: -20; } }`}</style>
      <div ref={canvas.canvasRef} className="canvas-bg" onClick={handleCanvasClick} onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={canvas.handleMouseUp} onMouseLeave={canvas.handleMouseUp} onTouchStart={canvas.handleTouchStart} onTouchMove={canvas.handleTouchMove} onTouchEnd={canvas.handleTouchEnd} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : canvas.dragging ? 'grabbing' : 'grab', touchAction: 'none' }}>
        <div className="canvas-bg" style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${theme.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * canvas.zoom}px ${25 * canvas.zoom}px`, backgroundPosition: `${canvas.pan.x}px ${canvas.pan.y}px`, pointerEvents: 'none' }} />
        <svg width="100%" height="100%" style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none' }}>
          <defs><marker id="c4-arrow" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><polygon points="0 0, 10 4, 0 8" fill={COLORS.cyan} /></marker></defs>
          <g transform={`translate(${canvas.pan.x}, ${canvas.pan.y}) scale(${canvas.zoom})`}>
            {relationships.map((rel, i) => {
              const src = layout.find(e => e.id === rel.from.toLowerCase().replace(/[^a-z0-9]/g, '_'));
              const tgt = layout.find(e => e.id === rel.to.toLowerCase().replace(/[^a-z0-9]/g, '_'));
              if (!src || !tgt) return null;
              const sp = getPos(src), tp = getPos(tgt);
              const dx = tp.x - sp.x, dy = tp.y - sp.y, dist = Math.sqrt(dx * dx + dy * dy) || 1;
              const midX = (sp.x + tp.x) / 2, midY = (sp.y + tp.y) / 2;
              const perpX = -dy / dist * 25, perpY = dx / dist * 25;
              const path = `M ${sp.x + (dx/dist)*85} ${sp.y + (dy/dist)*60} Q ${midX + perpX} ${midY + perpY} ${tp.x - (dx/dist)*85} ${tp.y - (dy/dist)*60}`;
              return (
                <g key={i}>
                  <path d={path} fill="none" stroke={COLORS.cyan} strokeWidth={2} strokeDasharray="8,4" markerEnd="url(#c4-arrow)" opacity={0.8} style={{ animation: 'flowDash 1s linear infinite' }} />
                  {rel.label && (
                    <g>
                      <rect x={midX + perpX - rel.label.length * 3.5 - 6} y={midY + perpY - 18} width={rel.label.length * 7 + 12} height={16} rx={4} fill="rgba(0,0,0,0.8)" />
                      <text x={midX + perpX} y={midY + perpY - 7} textAnchor="middle" fill={COLORS.cyan} fontSize={10}>{rel.label}</text>
                    </g>
                  )}
                </g>
              );
            })}
            {/* Selection box */}
            {canvas.isSelecting && canvas.selectionBox && (
              <rect x={Math.min(canvas.selectionBox.startX, canvas.selectionBox.endX)} y={Math.min(canvas.selectionBox.startY, canvas.selectionBox.endY)} width={Math.abs(canvas.selectionBox.endX - canvas.selectionBox.startX)} height={Math.abs(canvas.selectionBox.endY - canvas.selectionBox.startY)} fill={`${COLORS.blue}20`} stroke={COLORS.blue} strokeWidth={1} strokeDasharray="4,4" />
            )}
          </g>
        </svg>
        <div style={{ position: 'absolute', transform: `translate(${canvas.pan.x}px, ${canvas.pan.y}px) scale(${canvas.zoom})`, transformOrigin: '0 0' }}>
          {layout.map(el => {
            const pos = getPos(el);
            const isDragging = canvas.dragging === el.id;
            const isSelected = canvas.selectedNodes.has(el.id);
            const isPerson = el.style.shape === 'person';
            return (
              <div key={el.id} onClick={(e) => canvas.handleNodeClick(e, el.id)} onDoubleClick={(e) => canvas.handleNodeDoubleClick(e, el.id, el.label)} onContextMenu={(e) => canvas.handleNodeContextMenu(e, el.id)} onMouseDown={(e) => canvas.handleNodeMouseDown(e, el.id, pos.x, pos.y)} onTouchStart={(e) => canvas.handleNodeTouchStart(e, el.id, pos.x, pos.y)} style={{ position: 'absolute', left: pos.x - 85, top: pos.y - 60, width: 170, height: 120, background: `${el.style.color}15`, border: `2px solid ${isSelected ? COLORS.blue : el.style.color}`, borderRadius: isPerson ? '50% 50% 12px 12px' : el.style.shape === 'cylinder' ? '50% / 15%' : 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: isDragging ? 'grabbing' : 'grab', boxShadow: isSelected ? `0 0 0 2px ${COLORS.blue}, 0 0 20px ${COLORS.blue}40` : isDragging ? `0 0 30px ${el.style.color}50` : `0 4px 20px ${el.style.color}20`, transition: isDragging ? 'none' : 'box-shadow 0.2s', touchAction: 'none' }}>
                <div style={{ fontSize: '2rem', marginBottom: 6 }}>{el.style.icon}</div>
                {canvas.editingNode === el.id ? (
                  <EditableNodeLabel value={canvas.editingValue} onChange={(v) => canvas.setEditingValue(v)} onFinish={handleLabelEditFinish} style={{ fontSize: '0.9rem', fontWeight: 600, color: theme.textPrimary, textAlign: 'center' }} />
                ) : (
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: theme.textPrimary, textAlign: 'center' }}>{el.label}</div>
                )}
                {el.description && <div style={{ fontSize: '0.7rem', color: theme.textSecondary, textAlign: 'center', padding: '0 8px', marginTop: 4 }}>{el.description}</div>}
              </div>
            );
          })}
        </div>
      </div>
      {/* Selection info */}
      {canvas.selectedNodes.size > 0 && (
        <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(0,0,0,0.8)', padding: '6px 12px', borderRadius: 6, fontSize: '0.75rem', color: '#fff', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span>{canvas.selectedNodes.size} selected</span>
          <span style={{ opacity: 0.6 }}>|</span>
          <span style={{ opacity: 0.7 }}>Del to delete • ⌘C copy • ⌘V paste</span>
        </div>
      )}
      {/* Clipboard indicator */}
      {canvas.clipboard && (
        <div style={{ position: 'absolute', top: canvas.selectedNodes.size > 0 ? 48 : 12, left: 12, background: `${COLORS.green}20`, padding: '4px 10px', borderRadius: 4, fontSize: '0.7rem', color: COLORS.green, border: `1px solid ${COLORS.green}40` }}>
          {canvas.clipboard.length} node{canvas.clipboard.length > 1 ? 's' : ''} copied
        </div>
      )}
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.2, 2.5))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.8, 0.3))} onFit={() => canvas.fitToView(contentBounds)} onReset={canvas.resetView} zoom={canvas.zoom} />
      {/* Context menu */}
      {canvas.contextMenu && <ColorPickerMenu position={canvas.contextMenu} onClose={() => canvas.closeContextMenu()} nodeId={canvas.contextMenu.nodeId} />}
    </div>
  );
}

// Requirements Diagram with traceability
function RequirementDiagram({ data, theme = THEMES.dark }) {
  const canvas = useInteractiveCanvas({ x: 50, y: 50 });
  const { requirements = [], traces = [] } = data;

  const priorityColors = {
    critical: COLORS.red,
    high: COLORS.orange,
    medium: COLORS.amber,
    low: COLORS.green
  };

  const layout = useMemo(() => {
    const cols = Math.min(3, Math.max(2, Math.ceil(Math.sqrt(requirements.length))));
    return requirements.map((req, i) => ({
      ...req,
      id: req.name.toLowerCase().replace(/[^a-z0-9]/g, '_'),
      defaultX: 150 + (i % cols) * 280,
      defaultY: 100 + Math.floor(i / cols) * 160,
      color: priorityColors[req.priority?.toLowerCase()] || COLORS.orange
    }));
  }, [requirements]);

  const getPos = (req) => canvas.getNodePosition(req.id, req.defaultX, req.defaultY);

  const contentBounds = useMemo(() => {
    if (!layout.length) return { x: 0, y: 0, width: 400, height: 300 };
    const xs = layout.map(r => r.defaultX);
    const ys = layout.map(r => r.defaultY);
    return { x: Math.min(...xs) - 100, y: Math.min(...ys) - 60, width: Math.max(...xs) - Math.min(...xs) + 360, height: Math.max(...ys) - Math.min(...ys) + 220 };
  }, [layout]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}`, touchAction: 'none' }}>
      <style>{`@keyframes flowDash { to { stroke-dashoffset: -20; } }`}</style>
      <div ref={canvas.canvasRef} className="canvas-bg" onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={canvas.handleMouseUp} onMouseLeave={canvas.handleMouseUp} onTouchStart={canvas.handleTouchStart} onTouchMove={canvas.handleTouchMove} onTouchEnd={canvas.handleTouchEnd} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : canvas.dragging ? 'grabbing' : 'grab', touchAction: 'none' }}>
        <div className="canvas-bg" style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${theme.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * canvas.zoom}px ${25 * canvas.zoom}px`, backgroundPosition: `${canvas.pan.x}px ${canvas.pan.y}px`, pointerEvents: 'none' }} />
        <svg width="100%" height="100%" style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none' }}>
          <defs><marker id="req-arrow" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><polygon points="0 0, 10 4, 0 8" fill={COLORS.orange} /></marker></defs>
          <g transform={`translate(${canvas.pan.x}, ${canvas.pan.y}) scale(${canvas.zoom})`}>
            {traces.map((trace, i) => {
              const src = layout.find(r => r.id === trace.from.toLowerCase().replace(/[^a-z0-9]/g, '_'));
              const tgt = layout.find(r => r.id === trace.to.toLowerCase().replace(/[^a-z0-9]/g, '_'));
              if (!src || !tgt) return null;
              const sp = getPos(src), tp = getPos(tgt);
              const dx = tp.x - sp.x, dy = tp.y - sp.y, dist = Math.sqrt(dx * dx + dy * dy) || 1;
              return (
                <g key={i}>
                  <line x1={sp.x + (dx/dist)*120} y1={sp.y + (dy/dist)*65} x2={tp.x - (dx/dist)*120} y2={tp.y - (dy/dist)*65} stroke={COLORS.orange} strokeWidth={2} strokeDasharray="8,4" markerEnd="url(#req-arrow)" opacity={0.8} style={{ animation: 'flowDash 1s linear infinite' }} />
                  {trace.label && <text x={(sp.x+tp.x)/2} y={(sp.y+tp.y)/2 - 8} textAnchor="middle" fill={theme.textSecondary} fontSize={10}>{trace.label}</text>}
                </g>
              );
            })}
          </g>
        </svg>
        <div style={{ position: 'absolute', transform: `translate(${canvas.pan.x}px, ${canvas.pan.y}px) scale(${canvas.zoom})`, transformOrigin: '0 0' }}>
          {layout.map(req => {
            const pos = getPos(req);
            const isDragging = canvas.dragging === req.id;
            return (
              <div key={req.id} onMouseDown={(e) => canvas.handleNodeMouseDown(e, req.id, pos.x, pos.y)} onTouchStart={(e) => canvas.handleNodeTouchStart(e, req.id, pos.x, pos.y)} style={{ position: 'absolute', left: pos.x - 110, top: pos.y - 55, width: 220, height: 110, background: `${req.color}15`, border: `2px solid ${req.color}`, borderRadius: 12, padding: 12, cursor: isDragging ? 'grabbing' : 'grab', boxShadow: isDragging ? `0 0 30px ${req.color}50` : `0 4px 20px ${req.color}20`, transition: isDragging ? 'none' : 'box-shadow 0.2s', touchAction: 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <span style={{ fontSize: '1.2rem' }}>📋</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: theme.textPrimary }}>{req.name}</span>
                </div>
                {req.text && <div style={{ fontSize: '0.75rem', color: theme.textSecondary, marginBottom: 6, lineHeight: 1.3 }}>{req.text}</div>}
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {req.priority && <span style={{ fontSize: '0.65rem', padding: '2px 6px', background: `${req.color}30`, color: req.color, borderRadius: 4 }}>{req.priority}</span>}
                  {req.risk && <span style={{ fontSize: '0.65rem', padding: '2px 6px', background: 'rgba(255,255,255,0.1)', color: theme.textSecondary, borderRadius: 4 }}>Risk: {req.risk}</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.2, 2.5))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.8, 0.3))} onFit={() => canvas.fitToView(contentBounds)} onReset={canvas.resetView} zoom={canvas.zoom} />
    </div>
  );
}

// Use Case Diagram with actors, ovals, and connections
function UseCaseDiagram({ data, theme = THEMES.dark, onLabelChange, onDeleteNodes, onPasteNodes }) {
  const canvas = useInteractiveCanvas({ x: 50, y: 50 });
  const { actors = [], useCases = [], relationships = [] } = data;

  // Smart layout: group use cases by their connected actor for better organization
  const { actorPositions, useCasePositions } = useMemo(() => {
    // Find which use cases each actor connects to
    const actorUseCases = new Map();
    actors.forEach(a => actorUseCases.set(a.label.toLowerCase(), []));

    relationships.forEach(rel => {
      const actorKey = rel.from.toLowerCase();
      const ucLabel = rel.to.toLowerCase();
      if (actorUseCases.has(actorKey)) {
        actorUseCases.get(actorKey).push(ucLabel);
      }
    });

    // Position use cases in a single column, grouped by actor
    const ucPositions = [];
    const usedUCs = new Set();
    let currentY = 120;
    const ucSpacing = 110;
    const ucX = 450;

    // First pass: place use cases connected to actors in order
    actors.forEach((actor, actorIdx) => {
      const connectedUCs = actorUseCases.get(actor.label.toLowerCase()) || [];
      connectedUCs.forEach(ucLabel => {
        const uc = useCases.find(u => u.label.toLowerCase() === ucLabel);
        if (uc && !usedUCs.has(uc.id)) {
          ucPositions.push({ ...uc, x: ucX, y: currentY, actorIndex: actorIdx });
          usedUCs.add(uc.id);
          currentY += ucSpacing;
        }
      });
    });

    // Second pass: place any unconnected use cases
    useCases.forEach(uc => {
      if (!usedUCs.has(uc.id)) {
        ucPositions.push({ ...uc, x: ucX, y: currentY, actorIndex: -1 });
        currentY += ucSpacing;
      }
    });

    // Position actors to align with their connected use cases
    const actorPos = actors.map((actor, i) => {
      const connectedUCPositions = ucPositions.filter(uc => uc.actorIndex === i);
      let actorY;
      if (connectedUCPositions.length > 0) {
        // Center actor vertically among its connected use cases
        const minY = Math.min(...connectedUCPositions.map(uc => uc.y));
        const maxY = Math.max(...connectedUCPositions.map(uc => uc.y));
        actorY = (minY + maxY) / 2;
      } else {
        actorY = 150 + i * 180;
      }
      return { ...actor, x: 120, y: actorY };
    });

    return { actorPositions: actorPos, useCasePositions: ucPositions };
  }, [actors, useCases, relationships]);

  const getActorPos = (actor) => canvas.getNodePosition(actor.id, actor.x, actor.y);
  const getUseCasePos = (uc) => canvas.getNodePosition(uc.id, uc.x, uc.y);

  // Find connections by matching labels
  const connections = useMemo(() => {
    return relationships.map((rel, i) => {
      const fromActor = actorPositions.find(a => a.label.toLowerCase() === rel.from.toLowerCase());
      const toUseCase = useCasePositions.find(uc => uc.label.toLowerCase() === rel.to.toLowerCase());
      if (fromActor && toUseCase) {
        return { id: `conn-${i}`, from: fromActor, to: toUseCase };
      }
      return null;
    }).filter(Boolean);
  }, [relationships, actorPositions, useCasePositions]);

  // System boundary dimensions
  const systemBounds = useMemo(() => {
    if (useCasePositions.length === 0) return { x: 280, y: 40, width: 400, height: 300 };
    const xs = useCasePositions.map(uc => uc.x);
    const ys = useCasePositions.map(uc => uc.y);
    const padding = 100;
    return {
      x: Math.min(...xs) - padding,
      y: Math.min(...ys) - padding - 20,
      width: Math.max(...xs) - Math.min(...xs) + padding * 2 + 140,
      height: Math.max(...ys) - Math.min(...ys) + padding * 2 + 80
    };
  }, [useCasePositions]);

  // Calculate content bounds for fit-to-view
  const contentBounds = useMemo(() => {
    const allX = [...actorPositions.map(a => a.x), ...useCasePositions.map(u => u.x)];
    const allY = [...actorPositions.map(a => a.y), ...useCasePositions.map(u => u.y)];
    if (allX.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const minX = Math.min(...allX) - 100;
    const maxX = Math.max(...allX) + 100;
    const minY = Math.min(...allY) - 80;
    const maxY = Math.max(...allY) + 80;
    return { x: minX, y: minY, width: maxX - minX, height: maxY - minY };
  }, [actorPositions, useCasePositions]);

  // Combine all nodes for selection and interaction
  const allNodes = useMemo(() => [...actorPositions, ...useCasePositions], [actorPositions, useCasePositions]);

  // Handle label edit complete
  const handleLabelEditFinish = useCallback(() => {
    const result = canvas.finishEditing();
    if (result.nodeId && result.newValue !== undefined && onLabelChange) {
      const node = allNodes.find(n => n.id === result.nodeId);
      if (node && node.label !== result.newValue) {
        onLabelChange(result.nodeId, node.label, result.newValue);
      }
    }
  }, [canvas, allNodes, onLabelChange]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform);
      const metaKey = isMac ? e.metaKey : e.ctrlKey;
      if (canvas.editingNode) return;
      if ((e.key === 'Delete' || e.key === 'Backspace') && canvas.selectedNodes.size > 0 && onDeleteNodes) {
        e.preventDefault();
        onDeleteNodes(Array.from(canvas.selectedNodes));
        canvas.clearSelection();
        return;
      }
      if (metaKey && e.key.toLowerCase() === 'c' && canvas.selectedNodes.size > 0) {
        e.preventDefault();
        canvas.copySelectedNodes(allNodes);
        return;
      }
      if (metaKey && e.key.toLowerCase() === 'v' && canvas.clipboard && onPasteNodes) {
        e.preventDefault();
        const pastedNodes = canvas.pasteNodes();
        if (pastedNodes) onPasteNodes(pastedNodes);
        return;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [canvas, allNodes, onDeleteNodes, onPasteNodes]);

  // Handle selection box completion
  useEffect(() => {
    if (!canvas.isSelecting && canvas.selectionBox) {
      const nodeIds = canvas.getNodesInSelectionBox(allNodes, canvas.selectionBox);
      if (nodeIds.length > 0) canvas.setSelectedNodes(new Set(nodeIds));
    }
  }, [canvas.isSelecting, canvas.selectionBox, allNodes, canvas]);

  // Handle canvas click to clear selection
  const handleCanvasClick = useCallback((e) => {
    if (e.target === canvas.canvasRef.current || e.target.classList.contains('canvas-bg')) {
      canvas.clearSelection();
      canvas.closeContextMenu();
    }
  }, [canvas]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}`, touchAction: 'none' }}>
      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
        @keyframes flow { from { stroke-dashoffset: 20; } to { stroke-dashoffset: 0; } }
      `}</style>
      <div ref={canvas.canvasRef} className="canvas-bg" onClick={handleCanvasClick} onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={canvas.handleMouseUp} onMouseLeave={canvas.handleMouseUp} onTouchStart={canvas.handleTouchStart} onTouchMove={canvas.handleTouchMove} onTouchEnd={canvas.handleTouchEnd} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : canvas.dragging ? 'grabbing' : 'grab', touchAction: 'none' }}>
        <div className="canvas-bg" style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle at 1px 1px, ${theme.gridColor} 1px, transparent 0)`, backgroundSize: `${30 * canvas.zoom}px ${30 * canvas.zoom}px`, backgroundPosition: `${canvas.pan.x}px ${canvas.pan.y}px`, pointerEvents: 'none' }} />

        <svg width="100%" height="100%" style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="uc-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={COLORS.purple} />
              <stop offset="100%" stopColor={COLORS.blue} />
            </linearGradient>
            <filter id="uc-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g transform={`translate(${canvas.pan.x}, ${canvas.pan.y}) scale(${canvas.zoom})`}>
            {/* System boundary - glassmorphism style */}
            <rect x={systemBounds.x} y={systemBounds.y} width={systemBounds.width} height={systemBounds.height} fill="rgba(124, 58, 237, 0.03)" rx={24} />
            <rect x={systemBounds.x} y={systemBounds.y} width={systemBounds.width} height={systemBounds.height} fill="none" stroke="url(#uc-gradient)" strokeWidth={2} rx={24} opacity="0.4" />
            <text x={systemBounds.x + systemBounds.width / 2} y={systemBounds.y + 30} textAnchor="middle" fill={COLORS.purple} fontSize={13} fontWeight="600" fontFamily="system-ui, sans-serif" opacity="0.8">System Boundary</text>

            {/* Connections with gradient and animation */}
            {connections.map((conn, idx) => {
              const fromPos = getActorPos(conn.from);
              const toPos = getUseCasePos(conn.to);
              const sx = fromPos.x + 45;
              const sy = fromPos.y;
              const tx = toPos.x - 85;
              const ty = toPos.y;

              // Direct horizontal line for clean look
              const path = `M ${sx} ${sy} L ${tx} ${ty}`;

              return (
                <g key={conn.id}>
                  {/* Subtle glow */}
                  <path d={path} fill="none" stroke={COLORS.purple} strokeWidth={4} strokeLinecap="round" opacity="0.15" />
                  {/* Main gradient line */}
                  <path d={path} fill="none" stroke="url(#uc-gradient)" strokeWidth={1.5} strokeLinecap="round" opacity="0.6" />
                  {/* Animated particles */}
                  <path d={path} fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="2,10" style={{ animation: `flow 0.6s linear infinite`, animationDelay: `${idx * 0.15}s` }} />
                </g>
              );
            })}
            {/* Selection box */}
            {canvas.isSelecting && canvas.selectionBox && (
              <rect x={Math.min(canvas.selectionBox.startX, canvas.selectionBox.endX)} y={Math.min(canvas.selectionBox.startY, canvas.selectionBox.endY)} width={Math.abs(canvas.selectionBox.endX - canvas.selectionBox.startX)} height={Math.abs(canvas.selectionBox.endY - canvas.selectionBox.startY)} fill={`${COLORS.blue}20`} stroke={COLORS.blue} strokeWidth={1} strokeDasharray="4,4" />
            )}
          </g>
        </svg>

        <div style={{ position: 'absolute', transform: `translate(${canvas.pan.x}px, ${canvas.pan.y}px) scale(${canvas.zoom})`, transformOrigin: '0 0' }}>
          {/* Actors - modern card style with icon */}
          {actorPositions.map(actor => {
            const pos = getActorPos(actor);
            const isDragging = canvas.dragging === actor.id;
            const isSelected = canvas.selectedNodes.has(actor.id);
            return (
              <div key={actor.id} onClick={(e) => canvas.handleNodeClick(e, actor.id)} onDoubleClick={(e) => canvas.handleNodeDoubleClick(e, actor.id, actor.label)} onContextMenu={(e) => canvas.handleNodeContextMenu(e, actor.id)} onMouseDown={(e) => canvas.handleNodeMouseDown(e, actor.id, pos.x, pos.y)} onTouchStart={(e) => canvas.handleNodeTouchStart(e, actor.id, pos.x, pos.y)} style={{ position: 'absolute', left: pos.x - 45, top: pos.y - 55, width: 90, display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: isDragging ? 'grabbing' : 'grab', transition: isDragging ? 'none' : 'transform 0.2s', transform: isDragging ? 'scale(1.05)' : 'scale(1)', touchAction: 'none' }}>
                {/* Modern avatar circle */}
                <div style={{ width: 70, height: 70, borderRadius: '50%', background: `linear-gradient(135deg, ${COLORS.pink}35, ${COLORS.purple}15)`, border: `2px solid ${isSelected ? COLORS.blue : COLORS.pink}`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: getNodeShadow(COLORS.pink, isDragging, isSelected), transition: 'box-shadow 0.2s' }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="4" stroke={COLORS.pink} strokeWidth="1.5" fill={`${COLORS.pink}20`} />
                    <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke={COLORS.pink} strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  </svg>
                </div>
                <div style={{ marginTop: 10, padding: '4px 12px', background: 'rgba(0,0,0,0.4)', borderRadius: 12, backdropFilter: 'blur(8px)' }}>
                  {canvas.editingNode === actor.id ? (
                    <EditableNodeLabel value={canvas.editingValue} onChange={(v) => canvas.setEditingValue(v)} onFinish={handleLabelEditFinish} style={{ fontSize: 12, fontWeight: 600, color: theme.textPrimary }} />
                  ) : (
                    <span style={{ fontSize: 12, fontWeight: 600, color: theme.textPrimary }}>{actor.label}</span>
                  )}
                </div>
              </div>
            );
          })}

          {/* Use Cases - modern pill style */}
          {useCasePositions.map(uc => {
            const pos = getUseCasePos(uc);
            const isDragging = canvas.dragging === uc.id;
            const isSelected = canvas.selectedNodes.has(uc.id);
            return (
              <div key={uc.id} onClick={(e) => canvas.handleNodeClick(e, uc.id)} onDoubleClick={(e) => canvas.handleNodeDoubleClick(e, uc.id, uc.label)} onContextMenu={(e) => canvas.handleNodeContextMenu(e, uc.id)} onMouseDown={(e) => canvas.handleNodeMouseDown(e, uc.id, pos.x, pos.y)} onTouchStart={(e) => canvas.handleNodeTouchStart(e, uc.id, pos.x, pos.y)} style={{ position: 'absolute', left: pos.x - 80, top: pos.y - 35, width: 160, height: 70, background: `linear-gradient(135deg, ${COLORS.blue}25, ${COLORS.purple}15)`, border: `1.5px solid ${isSelected ? COLORS.blue : 'rgba(14, 165, 233, 0.5)'}`, borderRadius: 35, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: isDragging ? 'grabbing' : 'grab', boxShadow: getNodeShadow(COLORS.blue, isDragging, isSelected), backdropFilter: 'blur(8px)', transition: isDragging ? 'none' : 'box-shadow 0.2s, transform 0.2s', transform: isDragging ? 'scale(1.03)' : 'scale(1)', touchAction: 'none' }}>
                {canvas.editingNode === uc.id ? (
                  <EditableNodeLabel value={canvas.editingValue} onChange={(v) => canvas.setEditingValue(v)} onFinish={handleLabelEditFinish} style={{ fontSize: 12, fontWeight: 500, color: theme.textPrimary, textAlign: 'center' }} />
                ) : (
                  <span style={{ fontSize: 12, fontWeight: 500, color: theme.textPrimary, textAlign: 'center', padding: '0 12px', lineHeight: 1.3 }}>{uc.label}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* Selection info */}
      {canvas.selectedNodes.size > 0 && (
        <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(0,0,0,0.8)', padding: '6px 12px', borderRadius: 6, fontSize: '0.75rem', color: '#fff', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span>{canvas.selectedNodes.size} selected</span>
          <span style={{ opacity: 0.6 }}>|</span>
          <span style={{ opacity: 0.7 }}>Del to delete • ⌘C copy • ⌘V paste</span>
        </div>
      )}
      {/* Clipboard indicator */}
      {canvas.clipboard && (
        <div style={{ position: 'absolute', top: canvas.selectedNodes.size > 0 ? 48 : 12, left: 12, background: `${COLORS.green}20`, padding: '4px 10px', borderRadius: 4, fontSize: '0.7rem', color: COLORS.green, border: `1px solid ${COLORS.green}40` }}>
          {canvas.clipboard.length} node{canvas.clipboard.length > 1 ? 's' : ''} copied
        </div>
      )}
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.15, 3))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.85, 0.2))} onFit={() => canvas.fitToView(contentBounds)} onReset={canvas.resetView} zoom={canvas.zoom} />
      {/* Context menu */}
      {canvas.contextMenu && <ColorPickerMenu position={canvas.contextMenu} onClose={() => canvas.closeContextMenu()} nodeId={canvas.contextMenu.nodeId} />}
    </div>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================

export function UniversalDiagram({ type, data, source, theme = 'dark', onLabelChange, onDeleteNodes, onPasteNodes, onEdgeLabelChange, onCreateConnection }) {
  const t = THEMES[theme] || THEMES.dark;
  const parsed = useMemo(() => {
    if (data) return data;
    if (!source) return null;
    const p = Parsers;
    switch (type) {
      case 'mindmap': case 'wbs': return p.markdown(source);
      case 'erd': return p.sql(source);
      case 'flowchart': return p.flowchart(source);
      case 'architecture': return p.architecture(source);
      case 'state': return p.stateMachine(source);
      case 'journey': return p.userJourney(source);
      case 'timeline': return p.timeline(source);
      case 'sequence': return p.sequence(source);
      case 'orgchart': return p.orgChart(source);
      case 'network': return p.network(source);
      case 'gantt': return p.gantt(source);
      case 'deployment': return p.deployment(source);
      case 'pie': return p.pie(source);
      case 'quadrant': return p.quadrant(source);
      case 'git': return p.git(source);
      case 'wireframe': return p.wireframe(source);
      case 'class': return p.classDiagram(source);
      case 'activity': return p.activity(source);
      case 'usecase': return p.useCase(source);
      case 'component': return p.component(source);
      case 'c4': return p.c4(source);
      case 'requirement': return p.requirement(source);
      default: return null;
    }
  }, [type, data, source]);

  if (!parsed) return <div style={{ padding: 20, color: '#888' }}>No data</div>;

  switch (type) {
    case 'mindmap': case 'wbs': return <MindMapDiagram data={parsed} theme={t} onLabelChange={onLabelChange} onDeleteNodes={onDeleteNodes} onPasteNodes={onPasteNodes} />;
    case 'erd': return <ERDDiagram tables={Array.isArray(parsed) ? parsed : []} theme={t} onLabelChange={onLabelChange} onDeleteNodes={onDeleteNodes} onPasteNodes={onPasteNodes} />;
    case 'architecture': return <ArchitectureDiagram data={parsed} theme={t} onLabelChange={onLabelChange} onDeleteNodes={onDeleteNodes} onPasteNodes={onPasteNodes} />;
    case 'flowchart': return <FlowDiagram nodes={parsed.nodes || []} edges={parsed.edges || []} theme={t} onLabelChange={onLabelChange} onDeleteNodes={onDeleteNodes} onPasteNodes={onPasteNodes} onEdgeLabelChange={onEdgeLabelChange} onCreateConnection={onCreateConnection} />;
    case 'state': return <FlowDiagram nodes={parsed.states || []} edges={parsed.transitions?.map((tr, i) => ({ id: `t-${i}`, source: tr.from, target: tr.to, label: tr.event })) || []} theme={t} onLabelChange={onLabelChange} onDeleteNodes={onDeleteNodes} onPasteNodes={onPasteNodes} onEdgeLabelChange={onEdgeLabelChange} onCreateConnection={onCreateConnection} />;
    case 'activity': return <FlowDiagram nodes={parsed.nodes || []} edges={parsed.edges || []} theme={t} onLabelChange={onLabelChange} onDeleteNodes={onDeleteNodes} onPasteNodes={onPasteNodes} onEdgeLabelChange={onEdgeLabelChange} onCreateConnection={onCreateConnection} />;
    case 'journey': return <UserJourneyDiagram data={parsed} theme={t} onLabelChange={onLabelChange} onDeleteNodes={onDeleteNodes} onPasteNodes={onPasteNodes} />;
    case 'timeline': return <TimelineDiagram events={parsed} theme={t} />;
    case 'sequence': return <SequenceDiagram data={parsed} theme={t} />;
    case 'orgchart': return <OrgChartDiagram data={parsed} theme={t} onLabelChange={onLabelChange} onDeleteNodes={onDeleteNodes} onPasteNodes={onPasteNodes} />;
    case 'network': return <NetworkDiagram data={parsed} theme={t} onLabelChange={onLabelChange} onDeleteNodes={onDeleteNodes} onPasteNodes={onPasteNodes} />;
    case 'gantt': return <GanttDiagram tasks={parsed} theme={t} />;
    case 'deployment': return <DeploymentDiagram data={parsed} theme={t} onLabelChange={onLabelChange} onDeleteNodes={onDeleteNodes} onPasteNodes={onPasteNodes} />;
    case 'pie': return <PieChartDiagram data={parsed} theme={t} />;
    case 'quadrant': return <QuadrantDiagram data={parsed} theme={t} />;
    case 'git': return <GitGraphDiagram data={parsed} theme={t} />;
    case 'wireframe': return <WireframeDiagram data={parsed} theme={t} />;
    case 'class': return <ClassDiagram data={parsed} theme={t} onLabelChange={onLabelChange} onDeleteNodes={onDeleteNodes} onPasteNodes={onPasteNodes} />;
    case 'usecase': return <UseCaseDiagram data={parsed} theme={t} onLabelChange={onLabelChange} onDeleteNodes={onDeleteNodes} onPasteNodes={onPasteNodes} />;
    case 'component': return <ComponentDiagram data={parsed} theme={t} onLabelChange={onLabelChange} onDeleteNodes={onDeleteNodes} onPasteNodes={onPasteNodes} />;
    case 'c4': return <C4Diagram data={parsed} theme={t} onLabelChange={onLabelChange} onDeleteNodes={onDeleteNodes} onPasteNodes={onPasteNodes} />;
    case 'requirement': return <RequirementDiagram data={parsed} theme={t} />;
    default: return <div style={{ padding: 20, color: '#888' }}>Unknown: {type}</div>;
  }
}

// ============================================
// KEYBOARD SHORTCUTS MODAL
// ============================================

function KeyboardShortcutsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const categories = getShortcutsByCategory();
  const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad|iPod/.test(navigator.platform);

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 10000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))',
          borderRadius: 16, padding: 24, maxWidth: 600, width: '90%', maxHeight: '80vh',
          overflow: 'auto', border: '1px solid rgba(124,58,237,0.3)',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h2 style={{ margin: 0, fontSize: '1.25rem', color: '#fff', display: 'flex', alignItems: 'center', gap: 8 }}>
            ⌨️ Keyboard Shortcuts
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: 8,
              padding: '6px 12px', color: '#888', cursor: 'pointer', fontSize: '0.875rem'
            }}
          >
            ESC
          </button>
        </div>

        <p style={{ color: '#888', fontSize: '0.75rem', marginBottom: 16 }}>
          {isMac ? 'Using ⌘ (Command) for keyboard shortcuts' : 'Using Ctrl for keyboard shortcuts'}
        </p>

        {Object.entries(categories).map(([category, shortcuts]) => (
          <div key={category} style={{ marginBottom: 20 }}>
            <h3 style={{
              margin: '0 0 8px 0', fontSize: '0.7rem', color: COLORS.purple,
              textTransform: 'uppercase', letterSpacing: '0.1em'
            }}>
              {category}
            </h3>
            <div style={{ display: 'grid', gap: 6 }}>
              {shortcuts.map(shortcut => (
                <div
                  key={shortcut.name}
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '8px 12px', background: 'rgba(255,255,255,0.03)',
                    borderRadius: 8, border: '1px solid rgba(255,255,255,0.05)'
                  }}
                >
                  <span style={{ color: '#e0e0e0', fontSize: '0.8rem' }}>{shortcut.description}</span>
                  <kbd style={{
                    background: 'rgba(124,58,237,0.2)', padding: '4px 8px', borderRadius: 4,
                    fontSize: '0.7rem', color: '#a78bfa', fontFamily: 'monospace',
                    border: '1px solid rgba(124,58,237,0.3)'
                  }}>
                    {shortcut.formatted}
                  </kbd>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{ marginTop: 20, padding: 12, background: 'rgba(16,185,129,0.1)', borderRadius: 8, border: '1px solid rgba(16,185,129,0.2)' }}>
          <p style={{ margin: 0, color: COLORS.green, fontSize: '0.75rem' }}>
            💡 Tip: Press <kbd style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: 4, margin: '0 4px' }}>?</kbd> anytime to show this help
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================
// RECENT FILES PANEL
// ============================================

function RecentFilesPanel({ isOpen, onClose, onSelect, onRemove }) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (isOpen) {
      setFiles(getRecentFiles());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))',
          borderRadius: 16, padding: 24, maxWidth: 500, width: '90%', maxHeight: '70vh',
          overflow: 'auto', border: '1px solid rgba(124,58,237,0.3)',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h2 style={{ margin: 0, fontSize: '1.25rem', color: '#fff', display: 'flex', alignItems: 'center', gap: 8 }}>
            📂 Recent Diagrams
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: 8,
              padding: '6px 12px', color: '#888', cursor: 'pointer', fontSize: '0.875rem'
            }}
          >
            ESC
          </button>
        </div>

        {files.length === 0 ? (
          <div style={{ padding: 40, textAlign: 'center', color: '#666' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>📭</div>
            <p style={{ margin: 0 }}>No recent diagrams</p>
            <p style={{ margin: '8px 0 0 0', fontSize: '0.75rem' }}>Save a diagram to see it here</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {files.map((file, i) => (
              <div
                key={`${file.name}-${i}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '12px 16px', background: 'rgba(255,255,255,0.03)',
                  borderRadius: 10, border: '1px solid rgba(255,255,255,0.05)',
                  cursor: 'pointer', transition: 'all 0.2s'
                }}
                onClick={() => { onSelect(file); onClose(); }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(124,58,237,0.1)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
              >
                <div style={{ fontSize: 24 }}>
                  {DEMOS[file.type]?.title?.split(' ')[0] || '📄'}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: '#e0e0e0', fontWeight: 600, fontSize: '0.9rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {file.name}
                  </div>
                  <div style={{ color: '#666', fontSize: '0.7rem', display: 'flex', gap: 8 }}>
                    <span>{file.type}</span>
                    <span>•</span>
                    <span>{formatDate(file.savedAt)}</span>
                  </div>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); onRemove(file.name); setFiles(f => f.filter(x => x.name !== file.name)); }}
                  style={{
                    background: 'rgba(239,68,68,0.1)', border: 'none', borderRadius: 6,
                    padding: '4px 8px', color: COLORS.red, cursor: 'pointer', fontSize: '0.7rem'
                  }}
                  title="Remove from recent"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: 8 }}>
          <button
            onClick={async () => {
              try {
                const diagram = await importFromFile();
                onSelect(diagram);
                onClose();
              } catch (err) {
                alert(err.message);
              }
            }}
            style={{
              flex: 1, padding: '10px 16px', background: 'rgba(16,185,129,0.2)',
              border: '1px solid rgba(16,185,129,0.3)', borderRadius: 8,
              color: COLORS.green, cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem'
            }}
          >
            📁 Import .ddflow File
          </button>
        </div>
      </div>
    </div>
  );
}

// Mermaid Import Modal Component
function MermaidImportModal({ isOpen, onClose, onImport }) {
  const [mermaidSource, setMermaidSource] = useState('');
  const [error, setError] = useState('');
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      setMermaidSource('');
      setError('');
      setPreview(null);
    }
  }, [isOpen]);

  const handlePreview = () => {
    try {
      setError('');
      const result = mermaidToDDFlow(mermaidSource);
      setPreview(result);
    } catch (err) {
      setError(err.message);
      setPreview(null);
    }
  };

  const handleImport = () => {
    if (preview) {
      onImport(preview.type, preview.source);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))',
          borderRadius: 16, padding: 24, maxWidth: 700, width: '90%', maxHeight: '85vh',
          overflow: 'auto', border: '1px solid rgba(124,58,237,0.3)',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h2 style={{ margin: 0, fontSize: '1.25rem', color: '#fff', display: 'flex', alignItems: 'center', gap: 8 }}>
            🧜‍♀️ Import from Mermaid
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: 8,
              padding: '6px 12px', color: '#888', cursor: 'pointer', fontSize: '0.875rem'
            }}
          >
            ESC
          </button>
        </div>

        <p style={{ color: '#888', fontSize: '0.8rem', marginBottom: 16 }}>
          Paste your Mermaid diagram code below. Supported: flowchart, sequence, class, state, erDiagram, gantt, pie, gitGraph, journey, mindmap
        </p>

        <textarea
          value={mermaidSource}
          onChange={e => { setMermaidSource(e.target.value); setError(''); setPreview(null); }}
          placeholder={`flowchart TD
    A[Start] --> B{Decision}
    B -->|Yes| C[OK]
    B -->|No| D[Cancel]`}
          style={{
            width: '100%', height: 200, background: 'rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8,
            padding: 12, color: '#a78bfa', fontFamily: 'Monaco, monospace',
            fontSize: '0.75rem', lineHeight: 1.5, resize: 'vertical', outline: 'none',
            boxSizing: 'border-box'
          }}
        />

        {error && (
          <div style={{ marginTop: 12, padding: 12, background: 'rgba(239,68,68,0.1)', borderRadius: 8, border: '1px solid rgba(239,68,68,0.3)' }}>
            <div style={{ color: COLORS.red, fontSize: '0.8rem' }}>❌ {error}</div>
          </div>
        )}

        {preview && (
          <div style={{ marginTop: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span style={{ color: COLORS.green, fontSize: '0.85rem' }}>✅ Detected: <strong>{preview.type}</strong></span>
            </div>
            <div style={{
              background: 'rgba(0,0,0,0.3)', borderRadius: 8, padding: 12,
              border: '1px solid rgba(16,185,129,0.3)', maxHeight: 150, overflow: 'auto'
            }}>
              <pre style={{ margin: 0, color: '#a78bfa', fontSize: '0.7rem', fontFamily: 'Monaco, monospace', whiteSpace: 'pre-wrap' }}>
                {preview.source}
              </pre>
            </div>
          </div>
        )}

        <div style={{ marginTop: 20, display: 'flex', gap: 8 }}>
          <button
            onClick={handlePreview}
            disabled={!mermaidSource.trim()}
            style={{
              flex: 1, padding: '10px 16px', background: 'rgba(124,58,237,0.2)',
              border: '1px solid rgba(124,58,237,0.3)', borderRadius: 8,
              color: COLORS.purple, cursor: mermaidSource.trim() ? 'pointer' : 'not-allowed',
              fontWeight: 600, fontSize: '0.85rem', opacity: mermaidSource.trim() ? 1 : 0.5
            }}
          >
            🔍 Preview Conversion
          </button>
          <button
            onClick={handleImport}
            disabled={!preview}
            style={{
              flex: 1, padding: '10px 16px', background: preview ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.05)',
              border: `1px solid ${preview ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.1)'}`, borderRadius: 8,
              color: preview ? COLORS.green : '#666', cursor: preview ? 'pointer' : 'not-allowed',
              fontWeight: 600, fontSize: '0.85rem'
            }}
          >
            ✨ Import to Editor
          </button>
        </div>
      </div>
    </div>
  );
}

// Mermaid Export Modal Component
function MermaidExportModal({ isOpen, onClose, diagramType, diagramSource }) {
  const [mermaidSource, setMermaidSource] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen && diagramType && diagramSource) {
      try {
        const result = ddflowToMermaid(diagramType, diagramSource);
        setMermaidSource(result);
        setError('');
      } catch (err) {
        setMermaidSource('');
        setError(err.message);
      }
    }
  }, [isOpen, diagramType, diagramSource]);

  useEffect(() => {
    if (!isOpen) {
      setCopied(false);
    }
  }, [isOpen]);

  const handleCopy = async () => {
    try {
      await copyMermaidToClipboard(mermaidSource);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setError('Failed to copy: ' + err.message);
    }
  };

  const handleDownload = () => {
    downloadMermaidFile(mermaidSource, `ddflow-${diagramType}`);
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))',
          borderRadius: 16, padding: 24, maxWidth: 600, width: '90%', maxHeight: '80vh',
          overflow: 'auto', border: '1px solid rgba(124,58,237,0.3)',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h2 style={{ margin: 0, fontSize: '1.25rem', color: '#fff', display: 'flex', alignItems: 'center', gap: 8 }}>
            🧜‍♀️ Export as Mermaid
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: 8,
              padding: '6px 12px', color: '#888', cursor: 'pointer', fontSize: '0.875rem'
            }}
          >
            ESC
          </button>
        </div>

        {error ? (
          <div style={{ padding: 20, background: 'rgba(239,68,68,0.1)', borderRadius: 8, border: '1px solid rgba(239,68,68,0.3)' }}>
            <div style={{ color: COLORS.red, fontSize: '0.85rem' }}>❌ {error}</div>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ color: COLORS.green, fontSize: '0.85rem' }}>✅ Converted from: <strong>{diagramType}</strong></span>
            </div>

            <div style={{
              background: 'rgba(0,0,0,0.3)', borderRadius: 8, padding: 16,
              border: '1px solid rgba(124,58,237,0.2)', maxHeight: 300, overflow: 'auto'
            }}>
              <pre style={{ margin: 0, color: '#a78bfa', fontSize: '0.75rem', fontFamily: 'Monaco, monospace', whiteSpace: 'pre-wrap' }}>
                {mermaidSource}
              </pre>
            </div>

            <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
              <button
                onClick={handleCopy}
                style={{
                  flex: 1, padding: '10px 16px', background: copied ? 'rgba(16,185,129,0.3)' : 'rgba(14,165,233,0.2)',
                  border: `1px solid ${copied ? 'rgba(16,185,129,0.3)' : 'rgba(14,165,233,0.3)'}`, borderRadius: 8,
                  color: copied ? COLORS.green : COLORS.blue, cursor: 'pointer',
                  fontWeight: 600, fontSize: '0.85rem'
                }}
              >
                {copied ? '✅ Copied!' : '📋 Copy to Clipboard'}
              </button>
              <button
                onClick={handleDownload}
                style={{
                  flex: 1, padding: '10px 16px', background: 'rgba(124,58,237,0.2)',
                  border: '1px solid rgba(124,58,237,0.3)', borderRadius: 8,
                  color: COLORS.purple, cursor: 'pointer',
                  fontWeight: 600, fontSize: '0.85rem'
                }}
              >
                📥 Download .mmd
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ============================================
// DEMO
// ============================================

const DEMOS = {
  journey: { title: '🚶 Journey', source: `[actor] User\n[page] Landing Page\n[action] Sign Up\n[email] Verify Email\n[page] Onboarding\n[page] Dashboard\n[notification] Welcome!\n\nUser -Visit-> Landing Page\nLanding Page -Click CTA-> Sign Up\nSign Up -Submit-> Verify Email\nVerify Email -Confirm-> Onboarding\nOnboarding -Complete-> Dashboard\nDashboard -> Welcome!` },
  mindmap: { title: '🧠 Mind Map', source: `Project\n  Goals\n    Revenue\n    Growth\n  Features\n    Auth\n    Dashboard\n  Stack\n    React\n    Node` },
  architecture: { title: '🏗️ Architecture', source: `[clients] Web, Mobile\n[gateway] API Gateway\n[services] Auth, Users, Orders\n[data] PostgreSQL, Redis\n\nWeb -> API Gateway\nMobile -> API Gateway\nAPI Gateway -> Auth\nAPI Gateway -> Users\nAuth -> Redis\nUsers -> PostgreSQL` },
  erd: { title: '📊 ERD', source: `CREATE TABLE users (id UUID PRIMARY KEY, email VARCHAR(255), name VARCHAR(100));\nCREATE TABLE posts (id UUID PRIMARY KEY, title VARCHAR(200), user_id UUID REFERENCES users(id));` },
  sequence: { title: '🔄 Sequence', source: `participant Client, API, DB\n\nClient -> API: Request\nAPI -> DB: Query\nDB --> API: Result\nAPI --> Client: Response` },
  flowchart: { title: '📈 Flowchart', source: `(start) Start\nStart -> (process) Process\nProcess -> (decision) Valid?\nValid? -> (end) Done\nValid? -> (io) Error` },
  state: { title: '⚡ State', source: `(initial) Idle\n(final) Done\n\nIdle -> Loading: FETCH\nLoading -> Done: SUCCESS\nLoading -> Idle: FAIL` },
  timeline: { title: '📅 Timeline', source: `[Jan] *Kickoff | Started\n[Mar] Design | UI done\n[Jun] *MVP | Core ready\n[Sep] Launch | Public` },
  orgchart: { title: '👥 Org Chart', source: `CEO [Chief Executive]\n  CTO [Technology]\n    Dev Lead\n    QA Lead\n  CFO [Finance]` },
  network: { title: '🌐 Network', source: `[cloud] Internet\n[firewall] Firewall (10.0.0.1)\n[router] Router (10.0.0.2)\n[server] Server (10.0.0.10)\n\nInternet -- Firewall\nFirewall -- Router\nRouter -- Server` },
  gantt: { title: '📊 Gantt', source: `Research, 0, 2\nDesign, 2, 3\nDevelop, 5, 4\nTest, 9, 2\nLaunch, 11, 1` },
  deployment: { title: '🚀 Deployment', source: `[cloud] AWS\n  [cluster] K8s\n    [container] API\n    [container] Worker\n  [database] RDS\n[device] Browser` },
  pie: { title: '🥧 Pie', source: `"JavaScript": 40\n"Python": 25\n"TypeScript": 20\n"Go": 15` },
  quadrant: { title: '📊 Quadrant', source: `title: Tech Matrix\nx-axis: Effort →\ny-axis: Impact →\nquadrant-1: Quick Wins\nquadrant-2: Big Projects\nquadrant-3: Fill-ins\nquadrant-4: Thankless\n\nReact: [30, 90]\nRefactor: [80, 70]\nDocs: [20, 40]` },
  git: { title: '🌿 Git', source: `commit "Initial"\ncommit "Feature A"\nbranch develop\ncommit "Dev work"\ncheckout main\ncommit "Hotfix"\nmerge develop` },
  wireframe: { title: '📱 Wireframe', source: `{My App}
[[ Home | Products | About | Contact ]]

>> Home > Dashboard

# Welcome Back

<User Dashboard>
(@John Doe)

[search: Search products...]

[v Select Category]
[slider: 65%]

---

**Quick Stats**
[progress: 78%]

|Name|Status|Amount|
|Order #1|Shipped|$120|
|Order #2|Pending|$85|

---

(( Overview | Analytics | Settings ))

[img: Product Preview]

- Feature one included
- Feature two enabled  
- Feature three available

[o] Dark mode
[O] Notifications

[step: 2/4]

---

[Login] [Cancel] [Delete]

[page: 3/10]

{badge:New} {success:Active} {warning:Review}
</>`},
  class: { title: '📐 Class', source: `class User\n+id: string\n+name: string\n-password: string\n+login(): boolean\n+getPosts(): Post[]\n\nclass Post\n+id: string\n+title: string\n+content: string\n+userId: string\n+publish(): void\n\nUser --> Post : has many\nUser --* Post : owns` },
  activity: { title: '🔄 Activity', source: `[start]\n:Open App;\n:Login;\n<Valid?>\n:Dashboard;\n:Error;\n[end]\n\nstart -> Open App\nOpen App -> Login\nLogin -> Valid?\nValid? -> Dashboard: Yes\nValid? -> Error: No\nDashboard -> end\nError -> Login` },
  usecase: { title: '👤 Use Case', source: `actor Customer\nactor Admin\n(Browse Products)\n(Checkout)\n(Manage Inventory)\n(View Reports)\n\nCustomer -> Browse Products\nCustomer -> Checkout\nAdmin -> Manage Inventory\nAdmin -> View Reports` },
  component: { title: '📦 Component', source: `[service] Frontend\n[api] API Gateway\n[service] Auth Service\n[database] Database\n[cache] Redis Cache\n\nFrontend --> API Gateway\nAPI Gateway --> Auth Service\nAPI Gateway --> Database\nAuth Service --> Redis Cache` },
  c4: { title: '🏛️ C4', source: `[person] User: App customer\n[system] WebApp: Main application\n[container] API: REST Backend\n[database] DB: PostgreSQL\n[external] Email: SendGrid\n\nUser -> WebApp: Uses\nWebApp -> API: Calls\nAPI -> DB: Reads/Writes\nAPI -> Email: Sends` },
  requirement: { title: '📋 Requirement', source: `requirement Login {\ntext: Users must authenticate\nrisk: low\npriority: high\n}\n\nrequirement Security {\ntext: All data encrypted\npriority: critical\n}\n\nrequirement Performance {\ntext: Response under 200ms\nrisk: medium\npriority: high\n}\n\nLogin -> Security: derives\nSecurity -> Performance: traces` }
};

export default function Demo() {
  const [active, setActive] = useState('journey');
  const [source, setSource] = useState('');
  const [showEditor, setShowEditor] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [showRecentFiles, setShowRecentFiles] = useState(false);
  const [showMermaidImport, setShowMermaidImport] = useState(false);
  const [showMermaidExport, setShowMermaidExport] = useState(false);
  const [showTemplateGallery, setShowTemplateGallery] = useState(false);
  const [showSaveTemplate, setShowSaveTemplate] = useState(false);
  const [showNodeLibrary, setShowNodeLibrary] = useState(false);
  const [showAIResult, setShowAIResult] = useState(null); // { type: 'explain' | 'improve' | 'validate', content: any, loading: boolean }
  const [aiLoading, setAiLoading] = useState(false);
  const [showColorSettings, setShowColorSettings] = useState(false);
  const [showImageImport, setShowImageImport] = useState(false);
  const [showPlantUMLImport, setShowPlantUMLImport] = useState(false);
  const [showPlantUMLExport, setShowPlantUMLExport] = useState(false);
  const [colorSettings, setColorSettings] = useState(() => getColorSettings());
  const [diagramName, setDiagramName] = useState('Untitled Diagram');
  const [autoSaveEnabled, setAutoSaveEnabledState] = useState(() => isAutoSaveEnabled());
  const [exportStatus, setExportStatus] = useState({ loading: false, message: '' });
  const [themeName, setThemeName] = useState(() => getSavedTheme());
  const baseTheme = THEMES[themeName] || THEMES.dark;

  // Apply custom accent colors to theme
  const theme = useMemo(() => ({
    ...baseTheme,
    // Override accent-related styles with custom colors
    buttonActiveBg: `${colorSettings.accentPrimary}30`,
    gridColor: `${colorSettings.accentPrimary}08`,
    logoGradient: `linear-gradient(135deg, ${baseTheme.name === 'dark' ? '#fff' : '#1e293b'}, ${colorSettings.accentPrimary})`,
  }), [baseTheme, colorSettings]);
  const diagramRef = useRef(null);
  const autoSaveTimeoutRef = useRef(null);
  const isSyncingFromHistoryRef = useRef(false);
  const demo = DEMOS[active];
  const src = showEditor && source ? source : demo.source;

  // Undo/Redo history management
  const {
    state: historyState,
    canUndo,
    canRedo,
    undo: undoHistory,
    redo: redoHistory,
    pushState,
    reset: resetHistory,
    isApplying
  } = useUndoRedo({
    type: active,
    source: source || demo.source,
    diagramName: diagramName
  });

  // Debounced function to push source changes to history
  const debouncedPushSourceRef = useRef(null);
  useEffect(() => {
    debouncedPushSourceRef.current = debounce((newSource, type, name) => {
      if (!isSyncingFromHistoryRef.current && !isApplying()) {
        pushState({ type, source: newSource, diagramName: name }, 'source');
      }
    }, 1000);
    return () => debouncedPushSourceRef.current?.cancel();
  }, [pushState, isApplying]);

  // Handle source change with history tracking
  const handleSourceChange = useCallback((newSource) => {
    setSource(newSource);
    debouncedPushSourceRef.current?.(newSource, active, diagramName);
  }, [active, diagramName]);

  // Handle diagram type change with history tracking
  const handleTypeChange = useCallback((newType) => {
    debouncedPushSourceRef.current?.cancel();
    setActive(newType);
    setSource('');
    pushState({ type: newType, source: '', diagramName }, 'type');
  }, [pushState, diagramName]);

  // Handle diagram name change with history tracking
  const handleNameChange = useCallback((newName) => {
    setDiagramName(newName);
    // Don't push name changes to history for now (too noisy)
  }, []);

  // Handle node label change from inline editing
  const handleNodeLabelChange = useCallback((nodeId, oldLabel, newLabel) => {
    if (!src || !oldLabel || !newLabel) return;
    // Replace the old label with new label in the source
    // Use regex to find and replace the label, being careful to match whole words
    const escapedOld = oldLabel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escapedOld}\\b`, 'g');
    const newSource = src.replace(regex, newLabel);
    if (newSource !== src) {
      setSource(newSource);
      pushState({ type: active, source: newSource, diagramName }, 'label-edit');
    }
  }, [src, active, diagramName, pushState]);

  // Handle delete nodes
  const handleDeleteNodes = useCallback((nodeIds) => {
    if (!src || !nodeIds || nodeIds.length === 0) return;
    let newSource = src;
    // For each node, try to remove the line that defines it
    nodeIds.forEach(nodeId => {
      // Common patterns: node definition lines
      const lines = newSource.split('\n');
      const filteredLines = lines.filter(line => {
        const trimmed = line.trim();
        // Check if line contains the node ID as a definition
        if (trimmed.startsWith(nodeId + ':') || trimmed.startsWith(nodeId + ' ')) return false;
        if (trimmed.match(new RegExp(`^\\[${nodeId}\\]`))) return false;
        if (trimmed.match(new RegExp(`^${nodeId}\\s*->`))) return false;
        if (trimmed.match(new RegExp(`->\\s*${nodeId}\\s*$`))) return false;
        return true;
      });
      newSource = filteredLines.join('\n');
    });
    if (newSource !== src) {
      setSource(newSource);
      pushState({ type: active, source: newSource, diagramName }, 'delete-nodes');
    }
  }, [src, active, diagramName, pushState]);

  // Handle paste nodes - add new nodes to DSL
  const handlePasteNodes = useCallback((pastedNodes) => {
    if (!pastedNodes || pastedNodes.length === 0) return;
    // Generate DSL lines for pasted nodes
    const newLines = pastedNodes.map(n => {
      // For flowchart-style: NodeId: Label
      const typePrefix = n.type ? `[${n.type}] ` : '';
      return `${n.id}: ${typePrefix}${n.label}`;
    });
    const newSource = src + '\n' + newLines.join('\n');
    setSource(newSource);
    pushState({ type: active, source: newSource, diagramName }, 'paste-nodes');
  }, [src, active, diagramName, pushState]);

  // Handle edge label change
  const handleEdgeLabelChange = useCallback((edgeId, oldLabel, newLabel) => {
    if (!src) return;
    // For flowchart edges, try to find and update the connection line
    // Common patterns: A -> B : label or A --> B |label|
    const lines = src.split('\n');
    const newLines = lines.map(line => {
      // Check if this line contains a connection (->)
      if (line.includes('->')) {
        // Try to match: source -> target : oldLabel or source -> target |oldLabel|
        if (oldLabel && line.includes(oldLabel)) {
          return line.replace(oldLabel, newLabel);
        }
        // If adding new label to unlabeled edge
        if (!oldLabel && newLabel) {
          // Check if this is the right edge by looking for the edge pattern
          const trimmed = line.trim();
          // Add label to end of connection line
          if (!trimmed.includes(':') && !trimmed.includes('|')) {
            return line + ' : ' + newLabel;
          }
        }
      }
      return line;
    });
    const newSource = newLines.join('\n');
    if (newSource !== src) {
      setSource(newSource);
      pushState({ type: active, source: newSource, diagramName }, 'edge-label');
    }
  }, [src, active, diagramName, pushState]);

  // Handle creating a new connection between nodes (drag from port to port)
  const handleCreateConnection = useCallback((sourceNodeId, targetNodeId) => {
    if (!sourceNodeId || !targetNodeId) return;
    // Add a new connection line to the DSL
    // Format: sourceId -> targetId
    const newLine = `${sourceNodeId} -> ${targetNodeId}`;
    const newSource = src + '\n' + newLine;
    setSource(newSource);
    pushState({ type: active, source: newSource, diagramName }, 'create-connection');
  }, [src, active, diagramName, pushState]);

  // Sync history state back to component state when undo/redo
  useEffect(() => {
    if (isApplying()) {
      isSyncingFromHistoryRef.current = true;
      if (historyState.type !== active) {
        setActive(historyState.type);
      }
      if (historyState.source !== source) {
        setSource(historyState.source);
      }
      if (historyState.diagramName !== diagramName) {
        setDiagramName(historyState.diagramName);
      }
      // Use setTimeout to reset the flag after React commits
      setTimeout(() => { isSyncingFromHistoryRef.current = false; }, 0);
    }
  }, [historyState, isApplying]);

  // Undo/Redo keyboard shortcuts (works even in textarea)
  useEffect(() => {
    const handleUndoRedoKeys = (e) => {
      const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform);
      const metaKey = isMac ? e.metaKey : e.ctrlKey;

      if (metaKey && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        if (e.shiftKey) {
          redoHistory();
        } else {
          undoHistory();
        }
      }
    };

    window.addEventListener('keydown', handleUndoRedoKeys);
    return () => window.removeEventListener('keydown', handleUndoRedoKeys);
  }, [undoHistory, redoHistory]);

  // Keyboard shortcut handlers
  const keyboardHandlers = useMemo(() => ({
    HELP: () => setShowShortcuts(true),
    HELP_ALT: () => setShowShortcuts(true),
    TOGGLE_EDITOR: () => setShowEditor(prev => !prev),
    TOGGLE_AI_CHAT: () => setShowAIChat(prev => !prev),
    EXPORT_PNG: () => handleExportPNG(),
    EXPORT_SVG: () => handleExportSVG(),
    COPY_CLIPBOARD: () => handleCopyToClipboard(),
  }), []);

  useKeyboardShortcuts(keyboardHandlers, !showShortcuts);

  // Load saved diagram on mount
  useEffect(() => {
    const saved = getCurrentDiagram();
    if (saved) {
      if (DEMOS[saved.type]) {
        setActive(saved.type);
        setSource(saved.source);
        if (saved.name) setDiagramName(saved.name);
        setShowEditor(true);
      }
    }
  }, []);

  // Auto-save effect (debounced)
  useEffect(() => {
    if (!autoSaveEnabled) return;

    if (autoSaveTimeoutRef.current) {
      clearTimeout(autoSaveTimeoutRef.current);
    }

    autoSaveTimeoutRef.current = setTimeout(() => {
      const currentSource = source || demo.source;
      saveCurrentDiagram(active, currentSource, diagramName);
    }, 1000); // Save 1 second after last change

    return () => {
      if (autoSaveTimeoutRef.current) {
        clearTimeout(autoSaveTimeoutRef.current);
      }
    };
  }, [active, source, diagramName, autoSaveEnabled, demo.source]);

  // Save handlers
  const handleSave = () => {
    const currentSource = source || demo.source;
    saveCurrentDiagram(active, currentSource, diagramName);
    setExportStatus({ loading: false, message: 'Saved!' });
    setTimeout(() => setExportStatus({ loading: false, message: '' }), 2000);
  };

  const handleExportFile = () => {
    const currentSource = source || demo.source;
    const filename = diagramName.replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'diagram';
    exportAsFile(active, currentSource, filename);
    setExportStatus({ loading: false, message: 'File exported!' });
    setTimeout(() => setExportStatus({ loading: false, message: '' }), 2000);
  };

  const handleImportFile = async () => {
    try {
      setExportStatus({ loading: true, message: 'Importing...' });
      const diagram = await importFromFile();
      if (DEMOS[diagram.type]) {
        setActive(diagram.type);
        setSource(diagram.source);
        setDiagramName(diagram.name || 'Imported Diagram');
        setShowEditor(true);
        setExportStatus({ loading: false, message: 'File imported!' });
        setTimeout(() => setExportStatus({ loading: false, message: '' }), 2000);
      } else {
        throw new Error(`Unknown diagram type: ${diagram.type}`);
      }
    } catch (err) {
      setExportStatus({ loading: false, message: `Error: ${err.message}` });
      setTimeout(() => setExportStatus({ loading: false, message: '' }), 3000);
    }
  };

  const handleSelectRecentFile = (file) => {
    if (DEMOS[file.type]) {
      setActive(file.type);
      setSource(file.source);
      setDiagramName(file.name || 'Recent Diagram');
      setShowEditor(true);
    }
  };

  const handleToggleAutoSave = () => {
    const newValue = !autoSaveEnabled;
    setAutoSaveEnabledState(newValue);
    setAutoSaveEnabled(newValue);
    setExportStatus({ loading: false, message: newValue ? 'Auto-save enabled' : 'Auto-save disabled' });
    setTimeout(() => setExportStatus({ loading: false, message: '' }), 2000);
  };

  const handleToggleTheme = () => {
    const newTheme = themeName === 'dark' ? 'light' : 'dark';
    setThemeName(newTheme);
    saveTheme(newTheme);
    setExportStatus({ loading: false, message: `${newTheme === 'dark' ? 'Dark' : 'Light'} mode` });
    setTimeout(() => setExportStatus({ loading: false, message: '' }), 2000);
  };

  // Export handlers
  const handleExportPNG = async () => {
    if (!diagramRef.current) return;
    setExportStatus({ loading: true, message: 'Exporting PNG...' });
    try {
      await exportAsPNG(diagramRef.current, `ddflow-${active}`);
      setExportStatus({ loading: false, message: 'PNG exported!' });
      setTimeout(() => setExportStatus({ loading: false, message: '' }), 2000);
    } catch (err) {
      setExportStatus({ loading: false, message: `Error: ${err.message}` });
      setTimeout(() => setExportStatus({ loading: false, message: '' }), 3000);
    }
  };

  const handleExportSVG = () => {
    if (!diagramRef.current) return;
    setExportStatus({ loading: true, message: 'Exporting SVG...' });
    try {
      exportAsSVG(diagramRef.current, `ddflow-${active}`);
      setExportStatus({ loading: false, message: 'SVG exported!' });
      setTimeout(() => setExportStatus({ loading: false, message: '' }), 2000);
    } catch (err) {
      setExportStatus({ loading: false, message: `Error: ${err.message}` });
      setTimeout(() => setExportStatus({ loading: false, message: '' }), 3000);
    }
  };

  const handleCopyToClipboard = async () => {
    if (!diagramRef.current) return;
    setExportStatus({ loading: true, message: 'Copying to clipboard...' });
    try {
      await copyToClipboard(diagramRef.current);
      setExportStatus({ loading: false, message: 'Copied to clipboard!' });
      setTimeout(() => setExportStatus({ loading: false, message: '' }), 2000);
    } catch (err) {
      setExportStatus({ loading: false, message: `Error: ${err.message}` });
      setTimeout(() => setExportStatus({ loading: false, message: '' }), 3000);
    }
  };

  const handleExportPDF = () => {
    if (!diagramRef.current) return;
    setExportStatus({ loading: true, message: 'Opening print dialog...' });
    try {
      exportAsPDF(diagramRef.current);
      setExportStatus({ loading: false, message: '' });
    } catch (err) {
      setExportStatus({ loading: false, message: `Error: ${err.message}` });
      setTimeout(() => setExportStatus({ loading: false, message: '' }), 3000);
    }
  };

  // Handle applying AI-generated diagram
  const handleApplyDiagram = (type, dsl) => {
    setActive(type);
    setSource(dsl);
    setShowEditor(true);
  };

  // Handle dropping a node from the library
  const handleDropNode = useCallback((nodeDsl) => {
    // Append the new node DSL to the current source
    const currentSource = source || demo.source;
    const newSource = currentSource.trim() + '\n' + nodeDsl;
    handleSourceChange(newSource);
    setShowEditor(true); // Show editor so user can see the added node
  }, [source, demo.source, handleSourceChange]);

  // AI Enhancement Handlers
  const handleExplainDiagram = useCallback(async () => {
    if (!isAIConfigured()) {
      setExportStatus({ loading: false, message: 'AI not configured. Check .env' });
      setTimeout(() => setExportStatus({ loading: false, message: '' }), 3000);
      return;
    }
    setAiLoading(true);
    setShowAIResult({ type: 'explain', content: null, loading: true });
    try {
      const explanation = await explainDiagram(src, active);
      setShowAIResult({ type: 'explain', content: explanation, loading: false });
    } catch (error) {
      setShowAIResult({ type: 'explain', content: `Error: ${error.message}`, loading: false });
    } finally {
      setAiLoading(false);
    }
  }, [src, active]);

  const handleImproveDiagram = useCallback(async () => {
    if (!isAIConfigured()) {
      setExportStatus({ loading: false, message: 'AI not configured. Check .env' });
      setTimeout(() => setExportStatus({ loading: false, message: '' }), 3000);
      return;
    }
    setAiLoading(true);
    setShowAIResult({ type: 'improve', content: null, loading: true });
    try {
      const result = await suggestImprovements(src, active);
      setShowAIResult({ type: 'improve', content: result, loading: false });
    } catch (error) {
      setShowAIResult({ type: 'improve', content: { explanation: `Error: ${error.message}` }, loading: false });
    } finally {
      setAiLoading(false);
    }
  }, [src, active]);

  const handleValidateDiagram = useCallback(async () => {
    if (!isAIConfigured()) {
      setExportStatus({ loading: false, message: 'AI not configured. Check .env' });
      setTimeout(() => setExportStatus({ loading: false, message: '' }), 3000);
      return;
    }
    setAiLoading(true);
    setShowAIResult({ type: 'validate', content: null, loading: true });
    try {
      const result = await validateDiagram(src, active);
      setShowAIResult({ type: 'validate', content: result, loading: false });
    } catch (error) {
      setShowAIResult({ type: 'validate', content: { isValid: false, errors: [error.message], warnings: [], suggestions: [] }, loading: false });
    } finally {
      setAiLoading(false);
    }
  }, [src, active]);

  const handleApplyImprovement = useCallback(() => {
    if (showAIResult?.type === 'improve' && showAIResult.content?.dsl) {
      setActive(showAIResult.content.type);
      setSource(showAIResult.content.dsl);
      setShowEditor(true);
      setShowAIResult(null);
    }
  }, [showAIResult]);

  // Handle Mermaid import
  const handleMermaidImport = (type, dsl) => {
    setActive(type);
    setSource(dsl);
    setShowEditor(true);
    setExportStatus({ loading: false, message: 'Mermaid imported!' });
    setTimeout(() => setExportStatus({ loading: false, message: '' }), 2000);
  };

  return (
    <div style={{ minHeight: '100vh', background: theme.background, fontFamily: 'system-ui', color: theme.textPrimary, transition: 'background 0.3s ease, color 0.3s ease' }}>
      {/* Header */}
      <div style={{ padding: '10px 20px', borderBottom: `1px solid ${theme.border}`, background: theme.headerBg, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div>
            <h1 style={{ fontSize: '1.2rem', fontWeight: 800, background: theme.logoGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: '1.4rem' }}>◈</span> DDFlow
            </h1>
          </div>
          <div style={{ height: 24, width: 1, background: theme.border }} />
          <span style={{ color: theme.textMuted, fontSize: '0.7rem' }}>Diagram Engine</span>
        </div>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <button onClick={handleToggleTheme} style={{ padding: '6px 10px', background: 'transparent', border: `1px solid ${theme.border}`, borderRadius: 6, color: theme.textSecondary, fontSize: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }} title={`Switch to ${themeName === 'dark' ? 'light' : 'dark'} mode`}>
            {themeName === 'dark' ? '☀️' : '🌙'}
          </button>
          <button onClick={() => setShowShortcuts(true)} style={{ padding: '6px 10px', background: 'transparent', border: `1px solid ${theme.border}`, borderRadius: 6, color: theme.textSecondary, fontSize: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }} title="Keyboard Shortcuts (?)">
            ⌨️
          </button>
          <button onClick={() => setShowColorSettings(true)} style={{ padding: '6px 10px', background: 'transparent', border: `1px solid ${theme.border}`, borderRadius: 6, color: theme.textSecondary, fontSize: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }} title="Color Settings">
            🎨
          </button>
          <a href="/guide.html" target="_blank" rel="noopener noreferrer" style={{ padding: '6px 10px', background: 'transparent', border: `1px solid ${theme.border}`, borderRadius: 6, color: theme.textSecondary, fontSize: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
            📖
          </a>
          <div style={{ height: 20, width: 1, background: theme.border, margin: '0 4px' }} />
          <button onClick={() => setShowAIChat(!showAIChat)} style={{ padding: '6px 14px', background: showAIChat ? `linear-gradient(135deg, ${colorSettings.accentPrimary}, ${colorSettings.accentSecondary})` : `${colorSettings.accentPrimary}20`, border: `1px solid ${showAIChat ? 'transparent' : colorSettings.accentPrimary}`, borderRadius: 6, color: showAIChat ? '#fff' : colorSettings.accentPrimary, fontSize: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
            🤖 AI Chat
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div style={{ display: 'flex', gap: 10, padding: '10px 20px', borderBottom: `1px solid ${theme.border}`, background: theme.toolbarBg, alignItems: 'center' }}>
        {/* Diagram Type Selector */}
        <DiagramTypeSelector
          activeType={active}
          onTypeChange={handleTypeChange}
          theme={theme}
        />

        {/* Divider */}
        <div style={{ width: 1, height: 28, background: theme.border }} />

        {/* File Menu */}
        <DropdownMenu
          label="File"
          icon="📁"
          color={COLORS.blue}
          theme={theme}
          items={[
            { type: 'section', label: 'Create' },
            { icon: '📋', label: 'Browse Templates', description: 'Start from a template', onClick: () => setShowTemplateGallery(true) },
            { icon: '⭐', label: 'Save as Template', description: 'Save current as template', onClick: () => setShowSaveTemplate(true) },
            { type: 'divider' },
            { type: 'section', label: 'Save & Open' },
            { icon: '💾', label: 'Save', description: 'Save to browser', shortcut: '⌘S', onClick: handleSave },
            { icon: '📥', label: 'Export File', description: 'Download .ddflow', onClick: handleExportFile },
            { icon: '📂', label: 'Open Recent', description: 'Open saved diagrams', onClick: () => setShowRecentFiles(true) },
            { type: 'divider' },
            { icon: autoSaveEnabled ? '✓' : '○', label: 'Auto-save', description: autoSaveEnabled ? 'Enabled' : 'Disabled', onClick: handleToggleAutoSave, active: autoSaveEnabled },
          ]}
        />

        {/* Export Menu */}
        <DropdownMenu
          label="Export"
          icon="📤"
          color={COLORS.pink}
          theme={theme}
          items={[
            { type: 'section', label: 'Image' },
            { icon: '📋', label: 'Copy to Clipboard', shortcut: '⌘⇧C', onClick: handleCopyToClipboard, disabled: exportStatus.loading },
            { icon: '🖼️', label: 'Export as PNG', shortcut: '⌘⇧P', onClick: handleExportPNG, disabled: exportStatus.loading },
            { icon: '📐', label: 'Export as SVG', shortcut: '⌘⇧S', onClick: handleExportSVG, disabled: exportStatus.loading },
            { icon: '📄', label: 'Export as PDF', onClick: handleExportPDF, disabled: exportStatus.loading },
            { type: 'divider' },
            { type: 'section', label: 'Code' },
            { icon: '🧜‍♀️', label: 'Export as Mermaid', description: 'Convert to Mermaid syntax', onClick: () => setShowMermaidExport(true) },
            { icon: '🌱', label: 'Export as PlantUML', description: 'Convert to PlantUML syntax', onClick: () => setShowPlantUMLExport(true) },
          ]}
        />

        {/* Import Menu */}
        <DropdownMenu
          label="Import"
          icon="📥"
          color={COLORS.cyan}
          theme={theme}
          items={[
            { icon: '🖼️', label: 'Import from Image', description: 'AI extracts diagram from image', onClick: () => setShowImageImport(true) },
            { icon: '🧜‍♀️', label: 'Import Mermaid', description: 'Convert from Mermaid syntax', onClick: () => setShowMermaidImport(true) },
            { icon: '🌱', label: 'Import PlantUML', description: 'Convert from PlantUML syntax', onClick: () => setShowPlantUMLImport(true) },
            { icon: '📂', label: 'Open .ddflow File', description: 'Load saved diagram', onClick: () => setShowRecentFiles(true) },
          ]}
        />

        {/* AI Tools Menu */}
        <DropdownMenu
          label={aiLoading ? 'AI...' : 'AI Tools'}
          icon="✨"
          color={COLORS.purple}
          theme={theme}
          items={[
            { type: 'section', label: 'Analysis' },
            { icon: '📖', label: 'Explain Diagram', description: 'Get AI explanation of diagram', onClick: handleExplainDiagram, disabled: aiLoading },
            { icon: '✅', label: 'Validate Diagram', description: 'Check for errors and issues', onClick: handleValidateDiagram, disabled: aiLoading },
            { type: 'divider' },
            { type: 'section', label: 'Enhancement' },
            { icon: '💡', label: 'Suggest Improvements', description: 'Get AI optimization tips', onClick: handleImproveDiagram, disabled: aiLoading },
          ]}
        />

        {/* Divider */}
        <div style={{ width: 1, height: 28, background: theme.border }} />

        {/* Undo/Redo */}
        <div style={{ display: 'flex', gap: 4 }}>
          <button onClick={undoHistory} disabled={!canUndo} style={{ padding: '6px 10px', background: canUndo ? 'rgba(100,116,139,0.2)' : 'rgba(255,255,255,0.02)', border: `1px solid ${canUndo ? 'rgba(100,116,139,0.3)' : 'rgba(255,255,255,0.05)'}`, borderRadius: 6, color: canUndo ? COLORS.slate : '#444', fontSize: '0.7rem', cursor: canUndo ? 'pointer' : 'not-allowed', opacity: canUndo ? 1 : 0.5, display: 'flex', alignItems: 'center', gap: 4 }} title="Undo (Cmd+Z)">
            <span>↩</span>
          </button>
          <button onClick={redoHistory} disabled={!canRedo} style={{ padding: '6px 10px', background: canRedo ? 'rgba(100,116,139,0.2)' : 'rgba(255,255,255,0.02)', border: `1px solid ${canRedo ? 'rgba(100,116,139,0.3)' : 'rgba(255,255,255,0.05)'}`, borderRadius: 6, color: canRedo ? COLORS.slate : '#444', fontSize: '0.7rem', cursor: canRedo ? 'pointer' : 'not-allowed', opacity: canRedo ? 1 : 0.5, display: 'flex', alignItems: 'center', gap: 4 }} title="Redo (Cmd+Shift+Z)">
            <span>↪</span>
          </button>
        </div>

        {/* Divider */}
        <div style={{ width: 1, height: 28, background: theme.border }} />

        {/* Node Library Toggle */}
        <button onClick={() => setShowNodeLibrary(!showNodeLibrary)} style={{ padding: '6px 12px', background: showNodeLibrary ? `${COLORS.orange}30` : 'rgba(255,255,255,0.05)', border: `1px solid ${showNodeLibrary ? COLORS.orange : 'rgba(255,255,255,0.1)'}`, borderRadius: 6, color: showNodeLibrary ? COLORS.orange : (themeName === 'dark' ? '#888' : '#64748b'), fontSize: '0.7rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontWeight: 500 }} title="Toggle Node Library">
          {showNodeLibrary ? '📚' : '📦'} Nodes
        </button>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Status Message */}
        {exportStatus.message && (
          <span style={{ padding: '5px 10px', background: exportStatus.message.startsWith('Error') ? 'rgba(239,68,68,0.2)' : 'rgba(16,185,129,0.2)', borderRadius: 6, color: exportStatus.message.startsWith('Error') ? COLORS.red : COLORS.green, fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: 4 }}>
            {exportStatus.loading && '⏳'}{exportStatus.message}
          </span>
        )}

        {/* Editor Toggle */}
        <button onClick={() => setShowEditor(!showEditor)} style={{ padding: '6px 12px', background: showEditor ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.05)', border: `1px solid ${showEditor ? COLORS.green : 'rgba(255,255,255,0.1)'}`, borderRadius: 6, color: showEditor ? COLORS.green : (themeName === 'dark' ? '#888' : '#64748b'), fontSize: '0.7rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontWeight: 500 }}>
          {showEditor ? '✓' : '◇'} Editor
        </button>
      </div>

      <div style={{ display: 'flex', height: 'calc(100vh - 105px)' }}>
        {showEditor && (
          <div style={{ width: 300, borderRight: `1px solid ${theme.border}` }}>
            <textarea value={source || demo.source} onChange={e => handleSourceChange(e.target.value)} style={{ width: '100%', height: '100%', background: theme.editorBg, border: 'none', padding: 12, color: theme.editorText, fontFamily: 'Monaco, monospace', fontSize: '0.65rem', lineHeight: 1.5, resize: 'none', outline: 'none', boxSizing: 'border-box', transition: 'background 0.3s ease, color 0.3s ease' }} />
          </div>
        )}
        <div
          ref={diagramRef}
          style={{ flex: 1, padding: 10, marginRight: showAIChat ? '380px' : 0, marginLeft: showNodeLibrary ? '260px' : 0, transition: 'margin 0.3s ease' }}
          onDragOver={(e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'copy'; }}
          onDrop={(e) => {
            e.preventDefault();
            const nodeDsl = e.dataTransfer.getData('text/plain');
            if (nodeDsl) {
              handleDropNode(nodeDsl);
            }
          }}
        >
          <UniversalDiagram key={`${active}-${src}-${themeName}`} type={active} source={src} theme={themeName} onLabelChange={handleNodeLabelChange} onDeleteNodes={handleDeleteNodes} onPasteNodes={handlePasteNodes} onEdgeLabelChange={handleEdgeLabelChange} onCreateConnection={handleCreateConnection} />
        </div>
      </div>

      {/* Node Library Sidebar */}
      <NodeLibrarySidebar
        isOpen={showNodeLibrary}
        diagramType={active}
        theme={theme}
        onAddNode={handleDropNode}
      />

      <AIChatPanel isOpen={showAIChat} onClose={() => setShowAIChat(false)} onApplyDiagram={handleApplyDiagram} />
      <KeyboardShortcutsModal isOpen={showShortcuts} onClose={() => setShowShortcuts(false)} />
      <RecentFilesPanel
        isOpen={showRecentFiles}
        onClose={() => setShowRecentFiles(false)}
        onSelect={handleSelectRecentFile}
        onRemove={removeFromRecentFiles}
      />
      <MermaidImportModal
        isOpen={showMermaidImport}
        onClose={() => setShowMermaidImport(false)}
        onImport={handleMermaidImport}
      />
      <MermaidExportModal
        isOpen={showMermaidExport}
        onClose={() => setShowMermaidExport(false)}
        diagramType={active}
        diagramSource={src}
      />
      <TemplateGallery
        isOpen={showTemplateGallery}
        onClose={() => setShowTemplateGallery(false)}
        onApplyTemplate={handleApplyDiagram}
        theme={theme}
      />
      <SaveTemplateModal
        isOpen={showSaveTemplate}
        onClose={() => setShowSaveTemplate(false)}
        diagramType={active}
        diagramSource={src}
        theme={theme}
      />

      {/* AI Result Modal */}
      {showAIResult && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: 20
        }} onClick={() => !showAIResult.loading && setShowAIResult(null)}>
          <div style={{
            background: theme.modalBg,
            borderRadius: 16,
            border: `1px solid ${theme.border}`,
            width: '100%',
            maxWidth: 600,
            maxHeight: '80vh',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0,0,0,0.4)'
          }} onClick={e => e.stopPropagation()}>
            {/* Header */}
            <div style={{
              padding: '16px 20px',
              borderBottom: `1px solid ${theme.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: `${COLORS.purple}15`
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: '1.2rem' }}>
                  {showAIResult.type === 'explain' ? '📖' : showAIResult.type === 'validate' ? '✅' : '💡'}
                </span>
                <span style={{ fontWeight: 600, color: theme.textPrimary }}>
                  {showAIResult.type === 'explain' ? 'Diagram Explanation' : showAIResult.type === 'validate' ? 'Validation Results' : 'Improvement Suggestions'}
                </span>
              </div>
              <button
                onClick={() => setShowAIResult(null)}
                disabled={showAIResult.loading}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: theme.textSecondary,
                  fontSize: '1.2rem',
                  cursor: showAIResult.loading ? 'not-allowed' : 'pointer',
                  padding: 4
                }}
              >✕</button>
            </div>

            {/* Content */}
            <div style={{
              padding: 20,
              maxHeight: 'calc(80vh - 120px)',
              overflowY: 'auto'
            }}>
              {showAIResult.loading ? (
                <div style={{ textAlign: 'center', padding: 40, color: theme.textSecondary }}>
                  <div style={{ fontSize: '2rem', marginBottom: 12 }}>⏳</div>
                  <div>Analyzing diagram with AI...</div>
                </div>
              ) : showAIResult.type === 'explain' ? (
                <div style={{ color: theme.textPrimary, lineHeight: 1.6, fontSize: '0.9rem', whiteSpace: 'pre-wrap' }}>
                  {showAIResult.content}
                </div>
              ) : showAIResult.type === 'validate' ? (
                <div>
                  {/* Validation Status */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '12px 16px',
                    background: showAIResult.content?.isValid ? `${COLORS.green}15` : `${COLORS.red}15`,
                    borderRadius: 8,
                    marginBottom: 16
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>{showAIResult.content?.isValid ? '✓' : '✗'}</span>
                    <span style={{ color: showAIResult.content?.isValid ? COLORS.green : COLORS.red, fontWeight: 600 }}>
                      {showAIResult.content?.isValid ? 'Diagram is valid' : 'Issues found'}
                    </span>
                  </div>

                  {/* Errors */}
                  {showAIResult.content?.errors?.length > 0 && (
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ color: COLORS.red, fontWeight: 600, marginBottom: 8, fontSize: '0.85rem' }}>Errors:</div>
                      {showAIResult.content.errors.map((err, i) => (
                        <div key={i} style={{ padding: '8px 12px', background: `${COLORS.red}10`, borderRadius: 6, marginBottom: 4, color: theme.textPrimary, fontSize: '0.85rem' }}>
                          {err}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Warnings */}
                  {showAIResult.content?.warnings?.length > 0 && (
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ color: COLORS.orange, fontWeight: 600, marginBottom: 8, fontSize: '0.85rem' }}>Warnings:</div>
                      {showAIResult.content.warnings.map((warn, i) => (
                        <div key={i} style={{ padding: '8px 12px', background: `${COLORS.orange}10`, borderRadius: 6, marginBottom: 4, color: theme.textPrimary, fontSize: '0.85rem' }}>
                          {warn}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Suggestions */}
                  {showAIResult.content?.suggestions?.length > 0 && (
                    <div>
                      <div style={{ color: COLORS.blue, fontWeight: 600, marginBottom: 8, fontSize: '0.85rem' }}>Suggestions:</div>
                      {showAIResult.content.suggestions.map((sug, i) => (
                        <div key={i} style={{ padding: '8px 12px', background: `${COLORS.blue}10`, borderRadius: 6, marginBottom: 4, color: theme.textPrimary, fontSize: '0.85rem' }}>
                          {sug}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : showAIResult.type === 'improve' ? (
                <div>
                  {/* Explanation */}
                  <div style={{ color: theme.textPrimary, lineHeight: 1.6, fontSize: '0.9rem', marginBottom: 20, whiteSpace: 'pre-wrap' }}>
                    {showAIResult.content?.explanation || 'No explanation provided.'}
                  </div>

                  {/* Improved DSL Preview */}
                  {showAIResult.content?.dsl && (
                    <div>
                      <div style={{ color: COLORS.purple, fontWeight: 600, marginBottom: 8, fontSize: '0.85rem' }}>Improved DSL:</div>
                      <pre style={{
                        background: theme.inputBg,
                        padding: 12,
                        borderRadius: 8,
                        fontSize: '0.75rem',
                        overflow: 'auto',
                        maxHeight: 200,
                        color: theme.editorText
                      }}>{showAIResult.content.dsl}</pre>
                    </div>
                  )}
                </div>
              ) : null}
            </div>

            {/* Footer */}
            {!showAIResult.loading && (
              <div style={{
                padding: '12px 20px',
                borderTop: `1px solid ${theme.border}`,
                display: 'flex',
                justifyContent: 'flex-end',
                gap: 10
              }}>
                {showAIResult.type === 'improve' && showAIResult.content?.dsl && (
                  <button
                    onClick={handleApplyImprovement}
                    style={{
                      padding: '8px 16px',
                      background: `linear-gradient(135deg, ${COLORS.purple}, ${COLORS.indigo})`,
                      border: 'none',
                      borderRadius: 6,
                      color: '#fff',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    Apply Improvements
                  </button>
                )}
                <button
                  onClick={() => setShowAIResult(null)}
                  style={{
                    padding: '8px 16px',
                    background: 'rgba(255,255,255,0.1)',
                    border: `1px solid ${theme.border}`,
                    borderRadius: 6,
                    color: theme.textSecondary,
                    fontSize: '0.8rem',
                    cursor: 'pointer'
                  }}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Color Settings Panel */}
      <ColorSettingsPanel
        isOpen={showColorSettings}
        onClose={() => setShowColorSettings(false)}
        onApply={setColorSettings}
        theme={theme}
      />

      {/* Image Import Modal */}
      <ImageImportModal
        isOpen={showImageImport}
        onClose={() => setShowImageImport(false)}
        onImport={(type, dsl, name) => {
          setActive(type);
          setSource(dsl);
          if (name) setDiagramName(name);
          setShowEditor(true);
          setShowImageImport(false);
          setExportStatus({ loading: false, message: `Diagram "${name || 'Imported'}" imported from image!` });
          setTimeout(() => setExportStatus({ loading: false, message: '' }), 2000);
        }}
        theme={theme}
      />

      {/* PlantUML Import Modal */}
      <PlantUMLImportModal
        isOpen={showPlantUMLImport}
        onClose={() => setShowPlantUMLImport(false)}
        onImport={(type, dsl) => {
          setActive(type);
          setSource(dsl);
          setShowEditor(true);
          setShowPlantUMLImport(false);
          setExportStatus({ loading: false, message: 'PlantUML diagram imported!' });
          setTimeout(() => setExportStatus({ loading: false, message: '' }), 2000);
        }}
        theme={theme}
      />

      {/* PlantUML Export Modal */}
      <PlantUMLExportModal
        isOpen={showPlantUMLExport}
        onClose={() => setShowPlantUMLExport(false)}
        diagramType={active}
        diagramSource={src}
        theme={theme}
      />
    </div>
  );
}

export { MindMapDiagram, ERDDiagram, ArchitectureDiagram, FlowDiagram, UserJourneyDiagram, TimelineDiagram, SequenceDiagram, OrgChartDiagram, NetworkDiagram, GanttDiagram, DeploymentDiagram, PieChartDiagram, QuadrantDiagram, GitGraphDiagram, WireframeDiagram, ClassDiagram, UseCaseDiagram, Parsers, THEMES, COLORS };
