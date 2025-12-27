import React, { useState, useMemo, useRef, useCallback } from 'react';

// ============================================
// UNIVERSAL DIAGRAM ENGINE v8
// All nodes draggable + unified interactions
// ============================================

const THEMES = {
  dark: {
    background: 'linear-gradient(135deg, #0a0a0f, #1a1a2e, #0f0f1a)',
    canvasBg: 'rgba(0,0,0,0.4)',
    gridColor: 'rgba(124,58,237,0.04)',
    textPrimary: '#ffffff',
    textSecondary: '#888888',
    textMuted: '#555555',
    border: 'rgba(255,255,255,0.1)',
    surface: 'rgba(15, 23, 42, 0.95)',
  }
};

const COLORS = {
  purple: '#7C3AED', blue: '#0EA5E9', green: '#10B981', orange: '#F59E0B',
  pink: '#EC4899', red: '#EF4444', cyan: '#06B6D4', violet: '#8B5CF6',
  teal: '#14B8A6', amber: '#D97706', indigo: '#6366F1', rose: '#F43F5E',
  emerald: '#059669', sky: '#0284C7', fuchsia: '#D946EF', lime: '#84CC16',
  slate: '#64748B', zinc: '#71717A', yellow: '#EAB308'
};

const BRANCH_COLORS = [COLORS.purple, COLORS.blue, COLORS.green, COLORS.orange, COLORS.pink, COLORS.cyan, COLORS.violet, COLORS.teal];

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
      setIsPanning(true);
      setPanStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  }, [pan]);

  const handleNodeMouseDown = useCallback((e, nodeId, nodeX, nodeY) => {
    e.stopPropagation();
    setDragging(nodeId);
    const point = getCanvasPoint(e.clientX, e.clientY);
    setDragOffset({ x: point.x - nodeX, y: point.y - nodeY });
  }, [getCanvasPoint]);

  const handleMouseMove = useCallback((e) => {
    if (isPanning) {
      setPan({ x: e.clientX - panStart.x, y: e.clientY - panStart.y });
    } else if (dragging) {
      const point = getCanvasPoint(e.clientX, e.clientY);
      setPositions(prev => ({
        ...prev,
        [dragging]: { x: point.x - dragOffset.x, y: point.y - dragOffset.y }
      }));
    }
  }, [isPanning, panStart, dragging, dragOffset, getCanvasPoint]);

  const handleMouseUp = useCallback(() => {
    setIsPanning(false);
    setDragging(null);
  }, []);

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

function CanvasControls({ onZoomIn, onZoomOut, onFit, onReset, zoom }) {
  return (
    <>
      <div style={{ position: 'absolute', bottom: 12, left: 12, display: 'flex', gap: 6, zIndex: 100 }}>
        {[{ l: '+', a: onZoomIn }, { l: '−', a: onZoomOut }, { l: 'Fit', a: onFit }, { l: 'Reset', a: onReset }].map(b => (
          <button key={b.l} onClick={b.a} style={{ minWidth: b.l.length > 1 ? 'auto' : 36, height: 36, padding: b.l.length > 1 ? '0 12px' : 0, background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, color: '#fff', fontSize: b.l.length > 1 ? '0.75rem' : '1.2rem', cursor: 'pointer' }}>{b.l}</button>
        ))}
      </div>
      <div style={{ position: 'absolute', bottom: 12, right: 12, background: 'rgba(0,0,0,0.7)', borderRadius: 6, padding: '4px 10px', color: '#888', fontSize: '0.7rem', zIndex: 100 }}>{Math.round(zoom * 100)}%</div>
      <div style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(0,0,0,0.6)', borderRadius: 6, padding: '6px 10px', color: '#666', fontSize: '0.65rem', zIndex: 100 }}>
        Drag nodes • Scroll to zoom • Drag canvas to pan
      </div>
    </>
  );
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
    let layerIndex = 0;
    text.split('\n').forEach(line => {
      line = line.trim();
      if (!line || line.startsWith('#')) return;
      const layerMatch = line.match(/^\[(\w+)\]\s*(.+)/);
      if (layerMatch) {
        const style = typeStyles[layerMatch[1].toLowerCase()] || { color: COLORS.slate, icon: '📦' };
        const items = layerMatch[2].split(',').map(s => s.trim()).filter(s => s);
        const startX = (900 - items.length * 190) / 2 + 70;
        items.forEach((item, i) => {
          const id = item.toLowerCase().replace(/[^a-z0-9]/g, '_');
          nodes.set(id, { id, label: item, ...style, x: startX + i * 190, y: 80 + layerIndex * 150 });
        });
        layerIndex++;
        return;
      }
      const parts = line.split(/\s*->\s*/);
      if (parts.length >= 2) {
        for (let i = 0; i < parts.length - 1; i++) {
          edges.push({ id: `e-${edges.length}`, source: parts[i].trim().toLowerCase().replace(/[^a-z0-9]/g, '_'), target: parts[i + 1].trim().toLowerCase().replace(/[^a-z0-9]/g, '_') });
        }
      }
    });
    return { nodes: Array.from(nodes.values()), edges };
  },

  flowchart: (text) => {
    const nodes = new Map(), edges = [];
    let y = 80;
    text.split('\n').forEach(line => {
      line = line.trim();
      if (!line || line.startsWith('#')) return;
      const parts = line.split(/\s*->\s*/);
      parts.forEach((part, i) => {
        const match = part.match(/^\((\w+)\)\s*(.+)/) || [null, 'process', part];
        const type = match[1] || 'process', label = (match[2] || part).trim();
        const id = label.toLowerCase().replace(/[^a-z0-9]/g, '_');
        if (!nodes.has(id)) { nodes.set(id, { id, type, label, x: 300, y }); y += 100; }
        if (i > 0) {
          const prevLabel = (parts[i - 1].match(/^\(\w+\)\s*(.+)/) || [null, parts[i - 1]])[1].trim();
          edges.push({ id: `e-${edges.length}`, source: prevLabel.toLowerCase().replace(/[^a-z0-9]/g, '_'), target: id });
        }
      });
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
    const width = 340;
    
    const getX = () => containerStack.length > 0 ? containerStack[containerStack.length - 1].x + 15 : x;
    const getWidth = () => containerStack.length > 0 ? containerStack[containerStack.length - 1].width - 30 : width;
    
    text.split('\n').forEach((line, i) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('//')) return;
      
      const currX = getX(), currW = getWidth();
      
      // Window/Frame: {Title}
      if (trimmed.match(/^\{(.+)\}$/)) {
        elements.push({ id: `wf-${i}`, type: 'window', label: trimmed.slice(1, -1), x: currX, y, width: currW, height: 36 });
        y += 46; return;
      }
      
      // Card start: <Card Title> or <card>
      if (trimmed.match(/^<(.+)>$/) && !trimmed.includes('/')) {
        const label = trimmed.slice(1, -1);
        const card = { id: `wf-${i}`, type: 'card', label: label === 'card' ? '' : label, x: currX, y, width: currW, startY: y, children: [] };
        elements.push(card);
        containerStack.push(card);
        y += label && label !== 'card' ? 45 : 15;
        return;
      }
      
      // Card end: </card> or </>
      if (trimmed === '</card>' || trimmed === '</>' || trimmed === '</Card>') {
        if (containerStack.length > 0) {
          const card = containerStack.pop();
          card.height = y - card.startY + 15;
        }
        y += 15; return;
      }
      
      // Modal: {{Modal Title}}
      if (trimmed.match(/^\{\{(.+)\}\}$/)) {
        elements.push({ id: `wf-${i}`, type: 'modal', label: trimmed.slice(2, -2), x: currX + 20, y, width: currW - 40, height: 200 });
        y += 220; return;
      }
      
      // Navbar: [[ item1 | item2 | item3 ]]
      if (trimmed.match(/^\[\[(.+)\]\]$/)) {
        const items = trimmed.slice(2, -2).split('|').map(s => s.trim());
        elements.push({ id: `wf-${i}`, type: 'navbar', items, x: currX, y, width: currW, height: 44 });
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
      
      // Primary Button: [Label]
      if (trimmed.match(/^\[(.+)\]$/) && !trimmed.match(/^\[_{2,}\]$/) && !trimmed.match(/^\[(x| )\]/i) && !trimmed.match(/^\[v\s/)) {
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
      const propMatch = line.match(/^([+\-#~])?\s*(\w+)\s*:\s*(.+)$/);
      if (propMatch && currentClass) { currentClass.properties.push({ visibility: propMatch[1] || '+', name: propMatch[2], type: propMatch[3] }); return; }
      const methodMatch = line.match(/^([+\-#~])?\s*(\w+)\s*\(([^)]*)\)\s*(?::\s*(.+))?$/);
      if (methodMatch && currentClass) { currentClass.methods.push({ visibility: methodMatch[1] || '+', name: methodMatch[2], params: methodMatch[3], returns: methodMatch[4] || 'void' }); }
    });
    if (currentClass) classes.push(currentClass);
    return { classes, relationships };
  },

  activity: (text) => {
    const nodes = [], edges = [];
    let y = 60;
    text.split('\n').forEach((line, i) => {
      line = line.trim();
      if (!line || line.startsWith('#')) return;
      if (line === '[start]' || line === 'start') { nodes.push({ id: `act-${i}`, type: 'start', label: '', x: 300, y }); y += 80; return; }
      if (line === '[end]' || line === 'end') { nodes.push({ id: `act-${i}`, type: 'end', label: '', x: 300, y }); y += 80; return; }
      const decMatch = line.match(/^<(.+)>$/);
      if (decMatch) { nodes.push({ id: `act-${i}`, type: 'decision', label: decMatch[1], x: 300, y }); y += 80; return; }
      const actMatch = line.match(/^:(.+);?$/);
      if (actMatch) { nodes.push({ id: `act-${i}`, type: 'action', label: actMatch[1], x: 300, y }); y += 80; return; }
      if (line && !line.includes('->')) { nodes.push({ id: `act-${i}`, type: 'action', label: line, x: 300, y }); y += 80; }
    });
    for (let i = 0; i < nodes.length - 1; i++) edges.push({ id: `ae-${i}`, source: nodes[i].id, target: nodes[i + 1].id });
    return { nodes, edges };
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
    const requirements = [];
    let current = null;
    text.split('\n').forEach((line, i) => {
      line = line.trim();
      if (!line || line.startsWith('#')) return;
      const reqMatch = line.match(/^requirement\s+(.+?)(?:\s*{)?$/i);
      if (reqMatch) { if (current) requirements.push(current); current = { id: `req-${i}`, name: reqMatch[1].trim(), text: '', risk: '', priority: '' }; return; }
      if (current) {
        if (line.startsWith('text:')) current.text = line.replace('text:', '').trim();
        else if (line.startsWith('risk:')) current.risk = line.replace('risk:', '').trim();
        else if (line.startsWith('priority:')) current.priority = line.replace('priority:', '').trim();
        else if (line === '}') { requirements.push(current); current = null; }
      }
    });
    if (current) requirements.push(current);
    return { requirements };
  }
};

// ============================================
// DRAGGABLE DIAGRAM COMPONENTS
// ============================================

// Mind Map with draggable nodes
function MindMapDiagram({ data, theme = THEMES.dark }) {
  const canvas = useInteractiveCanvas({ x: 100, y: 0 });
  const [collapsed, setCollapsed] = useState(new Set());

  const layout = useMemo(() => {
    const nodes = [], edges = [];
    const getHeight = (node) => (!node.children?.length || collapsed.has(node.id)) ? 38 : node.children.reduce((s, c) => s + getHeight(c) + 16, -16);
    const layoutNode = (node, level, yOff, parentId, color) => {
      const h = getHeight(node), y = yOff + h / 2, w = Math.max(120, (node.label?.length || 5) * 9 + 50);
      const c = level === 0 ? COLORS.purple : color;
      nodes.push({ id: node.id, label: node.label || '', defaultX: level * 220, defaultY: y, width: w, level, color: c, hasChildren: node.children?.length > 0, isCollapsed: collapsed.has(node.id), childCount: node.children?.length || 0 });
      if (parentId) edges.push({ id: `e-${parentId}-${node.id}`, source: parentId, target: node.id, color: c });
      if (node.children?.length && !collapsed.has(node.id)) {
        let cy = yOff;
        node.children.forEach((child, i) => { layoutNode(child, level + 1, cy, node.id, level === 0 ? BRANCH_COLORS[i % BRANCH_COLORS.length] : color); cy += getHeight(child) + 16; });
      }
    };
    if (data?.label) {
      layoutNode(data, 0, 0, null, BRANCH_COLORS[0]);
      if (nodes.length) { const minY = Math.min(...nodes.map(n => n.defaultY)), maxY = Math.max(...nodes.map(n => n.defaultY)); nodes.forEach(n => { n.defaultY += -(minY + maxY) / 2 + 300; }); }
    }
    return { nodes, edges };
  }, [data, collapsed]);

  const getPos = (node) => canvas.getNodePosition(node.id, node.defaultX, node.defaultY);

  const getBezier = (src, tgt) => {
    const sp = getPos(src), tp = getPos(tgt);
    return `M ${sp.x + src.width + 5} ${sp.y} C ${(sp.x + src.width + tp.x) / 2} ${sp.y}, ${(sp.x + src.width + tp.x) / 2} ${tp.y}, ${tp.x - 5} ${tp.y}`;
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}` }}>
      <div ref={canvas.canvasRef} className="canvas-bg" onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={canvas.handleMouseUp} onMouseLeave={canvas.handleMouseUp} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : canvas.dragging ? 'grabbing' : 'grab' }}>
        <div className="canvas-bg" style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${theme.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridColor} 1px, transparent 1px)`, backgroundSize: `${30 * canvas.zoom}px ${30 * canvas.zoom}px`, backgroundPosition: `${canvas.pan.x}px ${canvas.pan.y}px`, pointerEvents: 'none' }} />
        <svg width="100%" height="100%" style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none' }}>
          <g transform={`translate(${canvas.pan.x}, ${canvas.pan.y}) scale(${canvas.zoom})`}>
            {layout.edges.map(e => { const src = layout.nodes.find(n => n.id === e.source), tgt = layout.nodes.find(n => n.id === e.target); return src && tgt ? <path key={e.id} d={getBezier(src, tgt)} fill="none" stroke={e.color} strokeWidth={2.5} opacity={0.7} /> : null; })}
          </g>
        </svg>
        <div style={{ position: 'absolute', transform: `translate(${canvas.pan.x}px, ${canvas.pan.y}px) scale(${canvas.zoom})`, transformOrigin: '0 0' }}>
          {layout.nodes.map(node => {
            const pos = getPos(node);
            return (
              <div key={node.id} onMouseDown={(e) => canvas.handleNodeMouseDown(e, node.id, pos.x, pos.y)} onClick={() => node.hasChildren && setCollapsed(p => { const n = new Set(p); n.has(node.id) ? n.delete(node.id) : n.add(node.id); return n; })} style={{ position: 'absolute', left: pos.x, top: pos.y - 19, width: node.width, height: 38, background: node.level === 0 ? node.color : `${node.color}18`, border: `2px solid ${node.color}`, borderRadius: node.level === 0 ? 19 : 8, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: canvas.dragging === node.id ? 'grabbing' : 'grab', boxShadow: canvas.dragging === node.id ? `0 0 20px ${node.color}60` : 'none', transition: canvas.dragging === node.id ? 'none' : 'box-shadow 0.2s' }}>
                <span style={{ color: node.level === 0 ? '#fff' : theme.textPrimary, fontSize: node.level === 0 ? 14 : 13, fontWeight: node.level === 0 ? 700 : 500 }}>{node.label}</span>
                {node.hasChildren && <div style={{ position: 'absolute', right: -28, width: 24, height: 24, borderRadius: '50%', background: node.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 16, fontWeight: 700 }}>{node.isCollapsed ? '+' : '−'}</div>}
              </div>
            );
          })}
        </div>
      </div>
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.2, 3))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.8, 0.2))} onFit={() => {}} onReset={() => { canvas.resetView(); setCollapsed(new Set()); }} zoom={canvas.zoom} />
    </div>
  );
}

// Architecture with draggable nodes
function ArchitectureDiagram({ data, theme = THEMES.dark }) {
  const canvas = useInteractiveCanvas({ x: 0, y: 30 });
  const getPos = (node) => canvas.getNodePosition(node.id, node.x, node.y);
  const getShape = (type) => { if (['database', 'cache', 'storage'].includes(type)) return 'cylinder'; if (['gateway', 'loadbalancer'].includes(type)) return 'hexagon'; return 'rect'; };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}` }}>
      <div ref={canvas.canvasRef} className="canvas-bg" onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={canvas.handleMouseUp} onMouseLeave={canvas.handleMouseUp} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : canvas.dragging ? 'grabbing' : 'grab' }}>
        <div className="canvas-bg" style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${theme.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * canvas.zoom}px ${25 * canvas.zoom}px`, backgroundPosition: `${canvas.pan.x}px ${canvas.pan.y}px`, pointerEvents: 'none' }} />
        <svg width="100%" height="100%" style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none' }}>
          <defs><marker id="arch-arr" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><polygon points="0 0, 10 4, 0 8" fill={COLORS.purple} /></marker></defs>
          <g transform={`translate(${canvas.pan.x}, ${canvas.pan.y}) scale(${canvas.zoom})`}>
            {data.edges.map(e => {
              const src = data.nodes.find(n => n.id === e.source), tgt = data.nodes.find(n => n.id === e.target);
              if (!src || !tgt) return null;
              const sp = getPos(src), tp = getPos(tgt);
              const dx = tp.x - sp.x, dy = tp.y - sp.y, dist = Math.sqrt(dx * dx + dy * dy) || 1;
              return <line key={e.id} x1={sp.x + (dx / dist) * 55} y1={sp.y + (dy / dist) * 45} x2={tp.x - (dx / dist) * 55} y2={tp.y - (dy / dist) * 45} stroke={COLORS.purple} strokeWidth={2} strokeDasharray="6,4" markerEnd="url(#arch-arr)" opacity={0.7} />;
            })}
          </g>
        </svg>
        <div style={{ position: 'absolute', transform: `translate(${canvas.pan.x}px, ${canvas.pan.y}px) scale(${canvas.zoom})`, transformOrigin: '0 0' }}>
          {data.nodes.map(node => {
            const pos = getPos(node);
            const shape = getShape(node.type);
            let style = { position: 'absolute', left: pos.x - 65, top: pos.y - 37, width: 130, height: 75, background: `${node.color}20`, border: `2px solid ${node.color}`, borderRadius: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: canvas.dragging === node.id ? 'grabbing' : 'grab', boxShadow: canvas.dragging === node.id ? `0 0 25px ${node.color}50` : `0 4px 20px ${node.color}30`, transition: canvas.dragging === node.id ? 'none' : 'box-shadow 0.2s' };
            if (shape === 'cylinder') { style.borderRadius = '50% / 15%'; style.height = 85; }
            if (shape === 'hexagon') { style.clipPath = 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)'; style.width = 145; }
            return <div key={node.id} onMouseDown={(e) => canvas.handleNodeMouseDown(e, node.id, pos.x, pos.y)} style={style}><div style={{ fontSize: '1.5rem', marginBottom: 4 }}>{node.icon}</div><div style={{ fontSize: '0.8rem', fontWeight: 600, color: theme.textPrimary, textAlign: 'center' }}>{node.label}</div></div>;
          })}
        </div>
      </div>
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.2, 2.5))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.8, 0.3))} onFit={() => {}} onReset={canvas.resetView} zoom={canvas.zoom} />
    </div>
  );
}

// User Journey with draggable nodes
function UserJourneyDiagram({ data, theme = THEMES.dark }) {
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

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}`, touchAction: 'none' }}>
      <div ref={canvas.canvasRef} className="canvas-bg" onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={canvas.handleMouseUp} onMouseLeave={canvas.handleMouseUp} onTouchStart={canvas.handleTouchStart} onTouchMove={canvas.handleTouchMove} onTouchEnd={canvas.handleTouchEnd} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : canvas.dragging ? 'grabbing' : 'grab', touchAction: 'none' }}>
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
                  {/* Background line */}
                  <path d={path} fill="none" stroke="rgba(124,58,237,0.15)" strokeWidth={4} strokeLinecap="round" />
                  {/* Main line */}
                  <path d={path} fill="none" stroke={COLORS.purple} strokeWidth={2} markerEnd="url(#journey-arrow)" strokeLinecap="round" opacity="0.7" />
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
          </g>
        </svg>

        <div style={{ position: 'absolute', transform: `translate(${canvas.pan.x}px, ${canvas.pan.y}px) scale(${canvas.zoom})`, transformOrigin: '0 0' }}>
          {nodes.map(node => {
            const pos = getPos(node);
            const isDragging = canvas.dragging === node.id;

            if (node.shape === 'circle') {
              return (
                <div key={node.id} onMouseDown={(e) => canvas.handleNodeMouseDown(e, node.id, pos.x, pos.y)} onTouchStart={(e) => canvas.handleNodeTouchStart(e, node.id, pos.x, pos.y)} style={{ position: 'absolute', left: pos.x - 50, top: pos.y - 50, width: 100, height: 100, borderRadius: '50%', background: `${node.color}15`, border: `2px solid ${node.color}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: isDragging ? 'grabbing' : 'grab', boxShadow: isDragging ? `0 0 20px ${node.color}40` : 'none', transition: isDragging ? 'none' : 'box-shadow 0.2s', touchAction: 'none' }}>
                  <span style={{ fontSize: 24 }}>{node.icon}</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: theme.textPrimary, marginTop: 4 }}>{node.label}</span>
                </div>
              );
            }

            return (
              <div key={node.id} onMouseDown={(e) => canvas.handleNodeMouseDown(e, node.id, pos.x, pos.y)} onTouchStart={(e) => canvas.handleNodeTouchStart(e, node.id, pos.x, pos.y)} style={{ position: 'absolute', left: pos.x - 70, top: pos.y - 45, width: 140, height: 90, background: `${node.color}15`, border: `2px solid ${node.color}`, borderRadius: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: isDragging ? 'grabbing' : 'grab', boxShadow: isDragging ? `0 0 20px ${node.color}40` : 'none', transition: isDragging ? 'none' : 'box-shadow 0.2s', touchAction: 'none' }}>
                {node.badge && <div style={{ position: 'absolute', top: -10, right: -10, background: COLORS.red, color: '#fff', fontSize: 10, fontWeight: 600, padding: '3px 8px', borderRadius: 10 }}>{node.badge}</div>}
                <span style={{ fontSize: 22 }}>{node.icon}</span>
                <span style={{ fontSize: 11, fontWeight: 600, color: theme.textPrimary, marginTop: 4 }}>{node.label}</span>
              </div>
            );
          })}
        </div>
      </div>
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.2, 3))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.8, 0.2))} onFit={() => canvas.fitToView(contentBounds)} onReset={canvas.resetView} zoom={canvas.zoom} />
    </div>
  );
}

// Flow Diagram with draggable nodes
function FlowDiagram({ nodes: initNodes, edges, theme = THEMES.dark }) {
  const canvas = useInteractiveCanvas({ x: 50, y: 50 });
  const styles = { start: { color: COLORS.green, icon: '▶' }, end: { color: COLORS.red, icon: '■' }, process: { color: COLORS.blue, icon: '⚙️' }, decision: { color: COLORS.orange, icon: '◇' }, action: { color: COLORS.blue, icon: '▹' }, default: { color: COLORS.purple, icon: '📦' } };
  const getPos = (node) => canvas.getNodePosition(node.id, node.x, node.y);

  const contentBounds = useMemo(() => {
    if (!initNodes || initNodes.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const xs = initNodes.map(n => n.x);
    const ys = initNodes.map(n => n.y);
    return { x: Math.min(...xs) - 100, y: Math.min(...ys) - 80, width: Math.max(...xs) - Math.min(...xs) + 200, height: Math.max(...ys) - Math.min(...ys) + 160 };
  }, [initNodes]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}`, touchAction: 'none' }}>
      <div ref={canvas.canvasRef} className="canvas-bg" onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={canvas.handleMouseUp} onMouseLeave={canvas.handleMouseUp} onTouchStart={canvas.handleTouchStart} onTouchMove={canvas.handleTouchMove} onTouchEnd={canvas.handleTouchEnd} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : canvas.dragging ? 'grabbing' : 'grab', touchAction: 'none' }}>
        <div className="canvas-bg" style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${theme.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * canvas.zoom}px ${25 * canvas.zoom}px`, backgroundPosition: `${canvas.pan.x}px ${canvas.pan.y}px`, pointerEvents: 'none' }} />
        <svg width="100%" height="100%" style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none' }}>
          <defs><marker id="flow-arr" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><polygon points="0 0, 10 4, 0 8" fill={COLORS.purple} /></marker></defs>
          <g transform={`translate(${canvas.pan.x}, ${canvas.pan.y}) scale(${canvas.zoom})`}>
            {edges.map(e => {
              const src = initNodes.find(n => n.id === e.source), tgt = initNodes.find(n => n.id === e.target);
              if (!src || !tgt) return null;
              const sp = getPos(src), tp = getPos(tgt);
              const dx = tp.x - sp.x, dy = tp.y - sp.y, dist = Math.sqrt(dx * dx + dy * dy) || 1;
              return (
                <g key={e.id}>
                  <line x1={sp.x + (dx / dist) * 40} y1={sp.y + (dy / dist) * 30} x2={tp.x - (dx / dist) * 40} y2={tp.y - (dy / dist) * 30} stroke={COLORS.purple} strokeWidth={2} strokeDasharray="6,4" markerEnd="url(#flow-arr)" opacity={0.7} />
                  {e.label && <text x={(sp.x + tp.x) / 2} y={(sp.y + tp.y) / 2 - 8} textAnchor="middle" fill={theme.textSecondary} fontSize={10}>{e.label}</text>}
                </g>
              );
            })}
          </g>
        </svg>
        <div style={{ position: 'absolute', transform: `translate(${canvas.pan.x}px, ${canvas.pan.y}px) scale(${canvas.zoom})`, transformOrigin: '0 0' }}>
          {initNodes.map(node => {
            const pos = getPos(node);
            const s = styles[node.type] || styles.default;
            const isDragging = canvas.dragging === node.id;
            const isDiamond = node.type === 'decision';
            let style = { position: 'absolute', left: pos.x - 65, top: pos.y - 30, width: 130, height: 60, background: `${s.color}20`, border: `2px solid ${s.color}`, borderRadius: ['start', 'end'].includes(node.type) ? 30 : 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: isDragging ? 'grabbing' : 'grab', boxShadow: isDragging ? `0 0 25px ${s.color}50` : 'none', transition: isDragging ? 'none' : 'box-shadow 0.2s', touchAction: 'none' };
            if (isDiamond) { style.width = 65; style.height = 65; style.left = pos.x - 32; style.top = pos.y - 32; style.transform = 'rotate(45deg)'; style.borderRadius = 8; }
            return <div key={node.id} onMouseDown={(e) => canvas.handleNodeMouseDown(e, node.id, pos.x, pos.y)} onTouchStart={(e) => canvas.handleNodeTouchStart(e, node.id, pos.x, pos.y)} style={style}><div style={{ transform: isDiamond ? 'rotate(-45deg)' : 'none', textAlign: 'center' }}>{s.icon && <div style={{ fontSize: '1.2rem' }}>{s.icon}</div>}<div style={{ fontSize: '0.8rem', fontWeight: 600, color: theme.textPrimary }}>{node.label}</div></div></div>;
          })}
        </div>
      </div>
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.2, 2.5))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.8, 0.3))} onFit={() => canvas.fitToView(contentBounds)} onReset={canvas.resetView} zoom={canvas.zoom} />
    </div>
  );
}

// ERD with draggable tables
function ERDDiagram({ tables, theme = THEMES.dark }) {
  const canvas = useInteractiveCanvas();
  const layout = useMemo(() => {
    const cols = Math.min(3, Math.ceil(Math.sqrt(tables.length)));
    return tables.map((t, i) => ({ ...t, defaultX: (i % cols) * 280 + 60, defaultY: Math.floor(i / cols) * 250 + 60, width: 230 }));
  }, [tables]);
  const getPos = (t) => canvas.getNodePosition(t.name, t.defaultX, t.defaultY);

  const contentBounds = useMemo(() => {
    if (!layout || layout.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const xs = layout.map(t => t.defaultX);
    const ys = layout.map(t => t.defaultY);
    return { x: Math.min(...xs) - 60, y: Math.min(...ys) - 60, width: Math.max(...xs) - Math.min(...xs) + 300, height: Math.max(...ys) - Math.min(...ys) + 300 };
  }, [layout]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}`, touchAction: 'none' }}>
      <div ref={canvas.canvasRef} className="canvas-bg" onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={canvas.handleMouseUp} onMouseLeave={canvas.handleMouseUp} onTouchStart={canvas.handleTouchStart} onTouchMove={canvas.handleTouchMove} onTouchEnd={canvas.handleTouchEnd} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : canvas.dragging ? 'grabbing' : 'grab', touchAction: 'none' }}>
        <div className="canvas-bg" style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${theme.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * canvas.zoom}px ${25 * canvas.zoom}px`, backgroundPosition: `${canvas.pan.x}px ${canvas.pan.y}px`, pointerEvents: 'none' }} />
        <svg width="100%" height="100%" style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none' }}>
          <defs><marker id="erd-crow" markerWidth="16" markerHeight="12" refX="14" refY="6" orient="auto"><path d="M 0 6 L 10 0 M 0 6 L 10 6 M 0 6 L 10 12" stroke={COLORS.blue} strokeWidth="2" fill="none" /></marker></defs>
          <g transform={`translate(${canvas.pan.x}, ${canvas.pan.y}) scale(${canvas.zoom})`}>
            {layout.flatMap(t => t.fields?.filter(f => f.fk && f.references).map((f, fi) => {
              const tgt = layout.find(tt => tt.name === f.references);
              if (!tgt) return null;
              const sp = getPos(t), tp = getPos(tgt);
              const sy = sp.y + 44 + fi * 30 + 15, sx = sp.x + t.width, tx = tp.x, ty = tp.y + 22;
              return <path key={`${t.name}-${f.name}`} d={`M ${sx} ${sy} C ${(sx + tx) / 2} ${sy}, ${(sx + tx) / 2} ${ty}, ${tx} ${ty}`} fill="none" stroke={COLORS.blue} strokeWidth={2} markerEnd="url(#erd-crow)" opacity={0.7} />;
            }) || [])}
          </g>
        </svg>
        <div style={{ position: 'absolute', transform: `translate(${canvas.pan.x}px, ${canvas.pan.y}px) scale(${canvas.zoom})`, transformOrigin: '0 0' }}>
          {layout.map(t => {
            const pos = getPos(t);
            const isDragging = canvas.dragging === t.name;
            return (
              <div key={t.name} onMouseDown={(e) => canvas.handleNodeMouseDown(e, t.name, pos.x, pos.y)} onTouchStart={(e) => canvas.handleNodeTouchStart(e, t.name, pos.x, pos.y)} style={{ position: 'absolute', left: pos.x, top: pos.y, width: t.width, background: theme.surface, border: `2px solid ${COLORS.orange}`, borderRadius: 12, overflow: 'hidden', cursor: isDragging ? 'grabbing' : 'grab', boxShadow: isDragging ? `0 0 30px ${COLORS.orange}40` : '0 4px 20px rgba(0,0,0,0.3)', transition: isDragging ? 'none' : 'box-shadow 0.2s', touchAction: 'none' }}>
                <div style={{ padding: '12px 16px', background: `linear-gradient(135deg, ${COLORS.orange}, ${COLORS.amber}dd)` }}><span style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>📊 {t.name}</span></div>
                <div style={{ padding: '8px 0' }}>
                  {t.fields?.map((f, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '7px 16px', borderBottom: i < t.fields.length - 1 ? `1px solid ${theme.border}` : 'none', gap: 10 }}>
                      <span style={{ width: 20, fontSize: '0.8rem' }}>{f.key ? '🔑' : f.fk ? '🔗' : ''}</span>
                      <span style={{ flex: 1, color: f.key ? COLORS.orange : f.fk ? COLORS.blue : theme.textPrimary, fontSize: '0.85rem', fontWeight: f.key ? 600 : 400 }}>{f.name}</span>
                      <span style={{ color: theme.textMuted, fontSize: '0.75rem', fontFamily: 'monospace' }}>{f.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.2, 2))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.8, 0.3))} onFit={() => canvas.fitToView(contentBounds)} onReset={canvas.resetView} zoom={canvas.zoom} />
    </div>
  );
}

// Network with draggable devices
function NetworkDiagram({ data, theme = THEMES.dark }) {
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

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}`, touchAction: 'none' }}>
      <div ref={canvas.canvasRef} className="canvas-bg" onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={canvas.handleMouseUp} onMouseLeave={canvas.handleMouseUp} onTouchStart={canvas.handleTouchStart} onTouchMove={canvas.handleTouchMove} onTouchEnd={canvas.handleTouchEnd} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : canvas.dragging ? 'grabbing' : 'grab', touchAction: 'none' }}>
        <div className="canvas-bg" style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${theme.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * canvas.zoom}px ${25 * canvas.zoom}px`, backgroundPosition: `${canvas.pan.x}px ${canvas.pan.y}px`, pointerEvents: 'none' }} />
        <svg width="100%" height="100%" style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none' }}>
          <g transform={`translate(${canvas.pan.x}, ${canvas.pan.y}) scale(${canvas.zoom})`}>
            {layout.connections.map(conn => {
              const src = layout.devices.find(d => d.id === conn.source), tgt = layout.devices.find(d => d.id === conn.target);
              if (!src || !tgt) return null;
              const sp = getPos(src), tp = getPos(tgt);
              return <g key={conn.id}><line x1={sp.x + 65} y1={sp.y + 55} x2={tp.x + 65} y2={tp.y + 55} stroke={COLORS.blue} strokeWidth={2} strokeDasharray="6,4" opacity={0.7} />{conn.protocol && <><rect x={(sp.x + tp.x) / 2 + 65 - 28} y={(sp.y + tp.y) / 2 + 55 - 10} width={56} height={18} rx={4} fill="rgba(0,0,0,0.8)" /><text x={(sp.x + tp.x) / 2 + 65} y={(sp.y + tp.y) / 2 + 55 + 3} textAnchor="middle" fill={COLORS.blue} fontSize={10}>{conn.protocol}</text></>}</g>;
            })}
          </g>
        </svg>
        <div style={{ position: 'absolute', transform: `translate(${canvas.pan.x}px, ${canvas.pan.y}px) scale(${canvas.zoom})`, transformOrigin: '0 0' }}>
          {layout.devices.map(device => {
            const pos = getPos(device);
            const isDragging = canvas.dragging === device.id;
            return (
              <div key={device.id} onMouseDown={(e) => canvas.handleNodeMouseDown(e, device.id, pos.x, pos.y)} onTouchStart={(e) => canvas.handleNodeTouchStart(e, device.id, pos.x, pos.y)} style={{ position: 'absolute', left: pos.x, top: pos.y, width: 130, background: theme.surface, border: `2px solid ${COLORS.blue}`, borderRadius: 12, padding: 12, textAlign: 'center', cursor: isDragging ? 'grabbing' : 'grab', boxShadow: isDragging ? `0 0 30px ${COLORS.blue}40` : 'none', transition: isDragging ? 'none' : 'box-shadow 0.2s', touchAction: 'none' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 6 }}>{icons[device.type] || '📦'}</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: theme.textPrimary }}>{device.label}</div>
                {device.ip && <div style={{ fontSize: '0.7rem', color: theme.textSecondary, fontFamily: 'monospace', marginTop: 4 }}>{device.ip}</div>}
              </div>
            );
          })}
        </div>
      </div>
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.2, 2))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.8, 0.3))} onFit={() => canvas.fitToView(contentBounds)} onReset={canvas.resetView} zoom={canvas.zoom} />
    </div>
  );
}

// Class Diagram with draggable classes
function ClassDiagram({ data, theme = THEMES.dark }) {
  const canvas = useInteractiveCanvas();
  const layout = useMemo(() => {
    const cols = Math.min(3, Math.ceil(Math.sqrt(data.classes.length)));
    return data.classes.map((c, i) => ({ ...c, defaultX: 60 + (i % cols) * 280, defaultY: 60 + Math.floor(i / cols) * 200 }));
  }, [data.classes]);
  const getPos = (c) => canvas.getNodePosition(c.id, c.defaultX, c.defaultY);

  const contentBounds = useMemo(() => {
    if (!layout || layout.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const xs = layout.map(c => c.defaultX);
    const ys = layout.map(c => c.defaultY);
    return { x: Math.min(...xs) - 60, y: Math.min(...ys) - 60, width: Math.max(...xs) - Math.min(...xs) + 300, height: Math.max(...ys) - Math.min(...ys) + 250 };
  }, [layout]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}`, touchAction: 'none' }}>
      <div ref={canvas.canvasRef} className="canvas-bg" onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={canvas.handleMouseUp} onMouseLeave={canvas.handleMouseUp} onTouchStart={canvas.handleTouchStart} onTouchMove={canvas.handleTouchMove} onTouchEnd={canvas.handleTouchEnd} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : canvas.dragging ? 'grabbing' : 'grab', touchAction: 'none' }}>
        <div className="canvas-bg" style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${theme.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * canvas.zoom}px ${25 * canvas.zoom}px`, backgroundPosition: `${canvas.pan.x}px ${canvas.pan.y}px`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', transform: `translate(${canvas.pan.x}px, ${canvas.pan.y}px) scale(${canvas.zoom})`, transformOrigin: '0 0' }}>
          {layout.map(cls => {
            const pos = getPos(cls);
            const isDragging = canvas.dragging === cls.id;
            return (
              <div key={cls.id} onMouseDown={(e) => canvas.handleNodeMouseDown(e, cls.id, pos.x, pos.y)} onTouchStart={(e) => canvas.handleNodeTouchStart(e, cls.id, pos.x, pos.y)} style={{ position: 'absolute', left: pos.x, top: pos.y, width: 220, background: theme.surface, border: `2px solid ${COLORS.purple}`, borderRadius: 8, overflow: 'hidden', cursor: isDragging ? 'grabbing' : 'grab', boxShadow: isDragging ? `0 0 30px ${COLORS.purple}40` : 'none', transition: isDragging ? 'none' : 'box-shadow 0.2s', touchAction: 'none' }}>
                <div style={{ padding: '10px 14px', background: `${COLORS.purple}30`, borderBottom: `1px solid ${COLORS.purple}` }}><span style={{ color: theme.textPrimary, fontWeight: 700 }}>{cls.name}</span></div>
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
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.2, 2))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.8, 0.3))} onFit={() => canvas.fitToView(contentBounds)} onReset={canvas.resetView} zoom={canvas.zoom} />
    </div>
  );
}

// Org Chart with draggable nodes
function OrgChartDiagram({ data, theme = THEMES.dark }) {
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

  const contentBounds = useMemo(() => {
    if (!layout.nodes || layout.nodes.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const xs = layout.nodes.map(n => n.defaultX);
    const ys = layout.nodes.map(n => n.defaultY);
    return { x: Math.min(...xs) - 60, y: Math.min(...ys) - 60, width: Math.max(...xs) - Math.min(...xs) + 250, height: Math.max(...ys) - Math.min(...ys) + 180 };
  }, [layout]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}`, touchAction: 'none' }}>
      <div ref={canvas.canvasRef} className="canvas-bg" onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={canvas.handleMouseUp} onMouseLeave={canvas.handleMouseUp} onTouchStart={canvas.handleTouchStart} onTouchMove={canvas.handleTouchMove} onTouchEnd={canvas.handleTouchEnd} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : canvas.dragging ? 'grabbing' : 'grab', touchAction: 'none' }}>
        <div className="canvas-bg" style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${theme.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * canvas.zoom}px ${25 * canvas.zoom}px`, backgroundPosition: `${canvas.pan.x}px ${canvas.pan.y}px`, pointerEvents: 'none' }} />
        <svg width="100%" height="100%" style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none' }}>
          <g transform={`translate(${canvas.pan.x}, ${canvas.pan.y}) scale(${canvas.zoom})`}>
            {layout.edges.map(e => {
              const src = layout.nodes.find(n => n.id === e.source), tgt = layout.nodes.find(n => n.id === e.target);
              if (!src || !tgt) return null;
              const sp = getPos(src), tp = getPos(tgt);
              const sx = sp.x + 80, sy = sp.y + 70, tx = tp.x + 80, ty = tp.y, my = (sy + ty) / 2;
              return <path key={e.id} d={`M ${sx} ${sy} L ${sx} ${my} L ${tx} ${my} L ${tx} ${ty}`} fill="none" stroke={COLORS.purple} strokeWidth={2} strokeDasharray="6,4" opacity={0.6} />;
            })}
          </g>
        </svg>
        <div style={{ position: 'absolute', transform: `translate(${canvas.pan.x}px, ${canvas.pan.y}px) scale(${canvas.zoom})`, transformOrigin: '0 0' }}>
          {layout.nodes.map(node => {
            const pos = getPos(node);
            const isDragging = canvas.dragging === node.id;
            return (
              <div key={node.id} onMouseDown={(e) => canvas.handleNodeMouseDown(e, node.id, pos.x, pos.y)} onTouchStart={(e) => canvas.handleNodeTouchStart(e, node.id, pos.x, pos.y)} style={{ position: 'absolute', left: pos.x, top: pos.y, width: 160, background: `${node.color}15`, border: `2px solid ${node.color}`, borderRadius: 12, padding: 12, textAlign: 'center', cursor: isDragging ? 'grabbing' : 'grab', boxShadow: isDragging ? `0 0 30px ${node.color}40` : 'none', transition: isDragging ? 'none' : 'box-shadow 0.2s', touchAction: 'none' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: theme.textPrimary }}>{node.label}</div>
                {node.title && <div style={{ fontSize: '0.75rem', color: node.color, marginTop: 4 }}>{node.title}</div>}
              </div>
            );
          })}
        </div>
      </div>
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.2, 2))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.8, 0.3))} onFit={() => canvas.fitToView(contentBounds)} onReset={canvas.resetView} zoom={canvas.zoom} />
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
                  <rect x={pos.x} y={30} width={120} height={45} rx={8} fill={`${BRANCH_COLORS[i % BRANCH_COLORS.length]}20`} stroke={BRANCH_COLORS[i % BRANCH_COLORS.length]} strokeWidth={2} style={{ cursor: canvas.dragging === p.id ? 'grabbing' : 'grab', touchAction: 'none' }} onMouseDown={(e) => { e.stopPropagation(); canvas.handleNodeMouseDown(e, p.id, pos.x, 0); }} onTouchStart={(e) => { e.stopPropagation(); canvas.handleNodeTouchStart(e, p.id, pos.x, 0); }} />
                  <text x={pos.x + 60} y={58} textAnchor="middle" fill={theme.textPrimary} fontSize={13} fontWeight={600} style={{ pointerEvents: 'none' }}>{p.label}</text>
                </g>
              );
            })}
            {messages.map((msg, i) => {
              const from = participants.find(p => p.id === msg.from), to = participants.find(p => p.id === msg.to);
              if (!from || !to) return null;
              const fp = getPos(from), tp = getPos(to);
              const y = 110 + i * 60, fromX = fp.x + 60, toX = tp.x + 60;
              return (
                <g key={`msg-${i}`}>
                  <defs><marker id={`seq-arr-${i}`} markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto"><polygon points="0 0, 10 4, 0 8" fill={msg.isReturn ? theme.textSecondary : COLORS.purple} /></marker></defs>
                  <line x1={fromX} y1={y} x2={toX - (fromX < toX ? 8 : -8)} y2={y} stroke={msg.isReturn ? theme.textSecondary : COLORS.purple} strokeWidth={2} strokeDasharray={msg.isReturn ? "4,3" : "none"} markerEnd={`url(#seq-arr-${i})`} />
                  <rect x={Math.min(fromX, toX) + Math.abs(toX - fromX) / 2 - 50} y={y - 20} width={100} height={18} rx={4} fill="rgba(0,0,0,0.85)" />
                  <text x={Math.min(fromX, toX) + Math.abs(toX - fromX) / 2} y={y - 7} textAnchor="middle" fill={msg.isReturn ? theme.textSecondary : COLORS.purple} fontSize={11}>{msg.label}</text>
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
                <div style={{ background: event.isMilestone ? `${COLORS.orange}15` : theme.surface, border: `2px solid ${color}`, borderRadius: 12, padding: 16, textAlign: 'center', minHeight: 110, boxShadow: isDragging ? `0 0 30px ${color}40` : 'none', transition: isDragging ? 'none' : 'box-shadow 0.2s' }}>
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
              if (c.type === 'seq') return <line key={i} x1={fp.x} y1={fp.y} x2={tp.x} y2={tp.y} stroke={c.color} strokeWidth={4} strokeLinecap="round" />;
              const mx = (fp.x + tp.x) / 2;
              return <path key={i} d={`M ${fp.x} ${fp.y} C ${mx} ${fp.y}, ${mx} ${tp.y}, ${tp.x} ${tp.y}`} fill="none" stroke={c.color} strokeWidth={3} strokeDasharray={c.type === 'merge' ? '6,4' : 'none'} opacity={0.8} />;
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
            <div style={{ position: 'absolute', left: task.start * 40 + 2, top: 10, width: task.duration * 40 - 4, height: 24, background: BRANCH_COLORS[i % BRANCH_COLORS.length], borderRadius: 6 }} />
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

function DeploymentDiagram({ data, theme = THEMES.dark }) {
  const canvas = useInteractiveCanvas({ x: 30, y: 30 });
  const typeStyles = { cloud: { color: COLORS.sky, icon: '☁️' }, cluster: { color: COLORS.teal, icon: '🌐' }, container: { color: COLORS.cyan, icon: '📦' }, database: { color: COLORS.green, icon: '🗄️' }, storage: { color: COLORS.emerald, icon: '💾' }, device: { color: COLORS.pink, icon: '📱' }, server: { color: COLORS.violet, icon: '🖧' }, component: { color: COLORS.purple, icon: '⚙️' } };
  const layout = useMemo(() => {
    const nodes = data.nodes, positioned = [];
    const getChildren = (pid) => nodes.filter(n => n.parentId === pid);
    const getHeight = (id) => { const children = getChildren(id); return children.length === 0 ? 70 : 60 + children.reduce((s, c) => s + getHeight(c.id) + 15, 0); };
    const positionNode = (node, x, y, level) => {
      const style = typeStyles[node.type] || typeStyles.component;
      const children = getChildren(node.id), h = getHeight(node.id);
      positioned.push({ ...node, x, y, width: 220, height: h, level, ...style, hasChildren: children.length > 0 });
      let cy = y + 55;
      children.forEach(child => { positionNode(child, x + 20, cy, level + 1); cy += getHeight(child.id) + 15; });
    };
    const roots = nodes.filter(n => !n.parentId);
    let rx = 40;
    roots.forEach(root => { positionNode(root, rx, 40, 0); rx += 280; });
    return { nodes: positioned.sort((a, b) => a.level - b.level) };
  }, [data]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}` }}>
      <div ref={canvas.canvasRef} className="canvas-bg" onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={canvas.handleMouseUp} onMouseLeave={canvas.handleMouseUp} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : 'grab' }}>
        <div className="canvas-bg" style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${theme.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * canvas.zoom}px ${25 * canvas.zoom}px`, backgroundPosition: `${canvas.pan.x}px ${canvas.pan.y}px`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', transform: `translate(${canvas.pan.x}px, ${canvas.pan.y}px) scale(${canvas.zoom})`, transformOrigin: '0 0' }}>
          {layout.nodes.map(node => (
            <div key={node.id} style={{ position: 'absolute', left: node.x, top: node.y, width: node.width, height: node.height, background: `${node.color}10`, border: `2px ${node.level === 0 ? 'solid' : 'dashed'} ${node.color}`, borderRadius: 12, boxSizing: 'border-box' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderBottom: node.hasChildren ? `1px solid ${node.color}30` : 'none' }}>
                <span style={{ fontSize: '1.3rem' }}>{node.icon}</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: theme.textPrimary }}>{node.label}</span>
                <span style={{ fontSize: '0.6rem', color: node.color, marginLeft: 'auto', background: `${node.color}20`, padding: '3px 8px', borderRadius: 4 }}>«{node.type}»</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.2, 2))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.8, 0.3))} onFit={() => {}} onReset={canvas.resetView} zoom={canvas.zoom} />
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
          <div key={el.id} style={{ ...base, width: el.width, height: el.height, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 12 }}>
            {el.label && <div style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)', fontWeight: 600, color: theme.textPrimary, fontSize: '0.9rem' }}>{el.label}</div>}
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

function SimpleCardDiagram({ items, title, icon, color, theme = THEMES.dark }) {
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'auto', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}`, padding: 20 }}>
      <h3 style={{ color: theme.textPrimary, marginBottom: 16 }}>{title}</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {items.map((item, i) => (
          <div key={i} style={{ width: 200, background: `${color}15`, border: `2px solid ${color}`, borderRadius: 12, padding: 16 }}>
            <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>{icon}</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: theme.textPrimary }}>{item.label || item.name}</div>
            {(item.description || item.text) && <div style={{ fontSize: '0.75rem', color: theme.textSecondary, marginTop: 4 }}>{item.description || item.text}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

// Use Case Diagram with actors, ovals, and connections
function UseCaseDiagram({ data, theme = THEMES.dark }) {
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

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: theme.canvasBg, borderRadius: 12, border: `1px solid ${theme.border}`, touchAction: 'none' }}>
      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
        @keyframes flow { from { stroke-dashoffset: 20; } to { stroke-dashoffset: 0; } }
      `}</style>
      <div ref={canvas.canvasRef} className="canvas-bg" onMouseDown={canvas.handleCanvasMouseDown} onMouseMove={canvas.handleMouseMove} onMouseUp={canvas.handleMouseUp} onMouseLeave={canvas.handleMouseUp} onTouchStart={canvas.handleTouchStart} onTouchMove={canvas.handleTouchMove} onTouchEnd={canvas.handleTouchEnd} onWheel={canvas.handleWheel} style={{ width: '100%', height: '100%', cursor: canvas.isPanning ? 'grabbing' : canvas.dragging ? 'grabbing' : 'grab', touchAction: 'none' }}>
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
          </g>
        </svg>

        <div style={{ position: 'absolute', transform: `translate(${canvas.pan.x}px, ${canvas.pan.y}px) scale(${canvas.zoom})`, transformOrigin: '0 0' }}>
          {/* Actors - modern card style with icon */}
          {actorPositions.map(actor => {
            const pos = getActorPos(actor);
            const isDragging = canvas.dragging === actor.id;
            return (
              <div key={actor.id} onMouseDown={(e) => canvas.handleNodeMouseDown(e, actor.id, pos.x, pos.y)} onTouchStart={(e) => canvas.handleNodeTouchStart(e, actor.id, pos.x, pos.y)} style={{ position: 'absolute', left: pos.x - 45, top: pos.y - 55, width: 90, display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: isDragging ? 'grabbing' : 'grab', transition: isDragging ? 'none' : 'transform 0.2s', transform: isDragging ? 'scale(1.05)' : 'scale(1)', touchAction: 'none' }}>
                {/* Modern avatar circle */}
                <div style={{ width: 70, height: 70, borderRadius: '50%', background: `linear-gradient(135deg, ${COLORS.pink}30, ${COLORS.purple}20)`, border: `2px solid ${COLORS.pink}`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: isDragging ? `0 8px 32px ${COLORS.pink}40` : `0 4px 20px rgba(0,0,0,0.3)`, transition: 'box-shadow 0.2s' }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="4" stroke={COLORS.pink} strokeWidth="1.5" fill={`${COLORS.pink}20`} />
                    <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke={COLORS.pink} strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  </svg>
                </div>
                <div style={{ marginTop: 10, padding: '4px 12px', background: 'rgba(0,0,0,0.4)', borderRadius: 12, backdropFilter: 'blur(8px)' }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: theme.textPrimary }}>{actor.label}</span>
                </div>
              </div>
            );
          })}

          {/* Use Cases - modern pill style */}
          {useCasePositions.map(uc => {
            const pos = getUseCasePos(uc);
            const isDragging = canvas.dragging === uc.id;
            return (
              <div key={uc.id} onMouseDown={(e) => canvas.handleNodeMouseDown(e, uc.id, pos.x, pos.y)} onTouchStart={(e) => canvas.handleNodeTouchStart(e, uc.id, pos.x, pos.y)} style={{ position: 'absolute', left: pos.x - 80, top: pos.y - 35, width: 160, height: 70, background: `linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(124, 58, 237, 0.1))`, border: `1.5px solid rgba(14, 165, 233, 0.5)`, borderRadius: 35, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: isDragging ? 'grabbing' : 'grab', boxShadow: isDragging ? `0 8px 32px ${COLORS.blue}30, inset 0 0 20px ${COLORS.blue}10` : `0 4px 20px rgba(0,0,0,0.2), inset 0 0 15px rgba(255,255,255,0.03)`, backdropFilter: 'blur(8px)', transition: isDragging ? 'none' : 'box-shadow 0.2s, transform 0.2s', transform: isDragging ? 'scale(1.03)' : 'scale(1)', touchAction: 'none' }}>
                <span style={{ fontSize: 12, fontWeight: 500, color: theme.textPrimary, textAlign: 'center', padding: '0 12px', lineHeight: 1.3 }}>{uc.label}</span>
              </div>
            );
          })}
        </div>
      </div>
      <CanvasControls onZoomIn={() => canvas.setZoom(z => Math.min(z * 1.15, 3))} onZoomOut={() => canvas.setZoom(z => Math.max(z * 0.85, 0.2))} onFit={() => canvas.fitToView(contentBounds)} onReset={canvas.resetView} zoom={canvas.zoom} />
    </div>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================

export function UniversalDiagram({ type, data, source, theme = 'dark' }) {
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
    case 'mindmap': case 'wbs': return <MindMapDiagram data={parsed} theme={t} />;
    case 'erd': return <ERDDiagram tables={Array.isArray(parsed) ? parsed : []} theme={t} />;
    case 'architecture': return <ArchitectureDiagram data={parsed} theme={t} />;
    case 'flowchart': return <FlowDiagram nodes={parsed.nodes || []} edges={parsed.edges || []} theme={t} />;
    case 'state': return <FlowDiagram nodes={parsed.states || []} edges={parsed.transitions?.map((tr, i) => ({ id: `t-${i}`, source: tr.from, target: tr.to, label: tr.event })) || []} theme={t} />;
    case 'activity': return <FlowDiagram nodes={parsed.nodes || []} edges={parsed.edges || []} theme={t} />;
    case 'journey': return <UserJourneyDiagram data={parsed} theme={t} />;
    case 'timeline': return <TimelineDiagram events={parsed} theme={t} />;
    case 'sequence': return <SequenceDiagram data={parsed} theme={t} />;
    case 'orgchart': return <OrgChartDiagram data={parsed} theme={t} />;
    case 'network': return <NetworkDiagram data={parsed} theme={t} />;
    case 'gantt': return <GanttDiagram tasks={parsed} theme={t} />;
    case 'deployment': return <DeploymentDiagram data={parsed} theme={t} />;
    case 'pie': return <PieChartDiagram data={parsed} theme={t} />;
    case 'quadrant': return <QuadrantDiagram data={parsed} theme={t} />;
    case 'git': return <GitGraphDiagram data={parsed} theme={t} />;
    case 'wireframe': return <WireframeDiagram data={parsed} theme={t} />;
    case 'class': return <ClassDiagram data={parsed} theme={t} />;
    case 'usecase': return <UseCaseDiagram data={parsed} theme={t} />;
    case 'component': return <SimpleCardDiagram items={parsed.components} title="Component Diagram" icon="📦" color={COLORS.purple} theme={t} />;
    case 'c4': return <SimpleCardDiagram items={parsed.elements} title="C4 Context Diagram" icon="🏗️" color={COLORS.cyan} theme={t} />;
    case 'requirement': return <SimpleCardDiagram items={parsed.requirements} title="Requirements" icon="📋" color={COLORS.orange} theme={t} />;
    default: return <div style={{ padding: 20, color: '#888' }}>Unknown: {type}</div>;
  }
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
  class: { title: '📐 Class', source: `class User\n+id: string\n+name: string\n+getFullName(): string\n\nclass Post\n+title: string\n+publish(): void` },
  activity: { title: '🔄 Activity', source: `[start]\n:Open App;\n:Login;\n<Authenticated?>\n:Show Dashboard;\n[end]` },
  usecase: { title: '👤 Use Case', source: `actor Customer\nactor Admin\n(Browse Products)\n(Checkout)\n(Manage Inventory)\n(View Reports)\n\nCustomer -> Browse Products\nCustomer -> Checkout\nAdmin -> Manage Inventory\nAdmin -> View Reports` },
  component: { title: '📦 Component', source: `[component] Frontend\n[component] API Gateway\n[component] Auth Service\n[component] Database` },
  c4: { title: '🏛️ C4', source: `[person] User: App customer\n[system] WebApp: Main app\n[system] API: Backend\n[database] DB: PostgreSQL` },
  requirement: { title: '📋 Requirement', source: `requirement Login {\ntext: Users must authenticate\nrisk: low\npriority: high\n}\n\nrequirement Security {\ntext: All data encrypted\npriority: high\n}` }
};

export default function Demo() {
  const [active, setActive] = useState('journey');
  const [source, setSource] = useState('');
  const [showEditor, setShowEditor] = useState(false);
  const demo = DEMOS[active];
  const src = showEditor && source ? source : demo.source;

  return (
    <div style={{ minHeight: '100vh', background: THEMES.dark.background, fontFamily: 'system-ui', color: '#e0e0e0' }}>
      <div style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 800, background: 'linear-gradient(135deg, #fff, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: 0 }}>Universal Diagram Engine v8</h1>
          <p style={{ color: '#888', margin: 0, fontSize: '0.75rem' }}>22 types • All nodes draggable • Pan & Zoom</p>
        </div>
        <div style={{ background: 'rgba(124,58,237,0.2)', padding: '4px 12px', borderRadius: 20, fontSize: '0.75rem', color: '#a78bfa' }}>✨ Drag any node!</div>
      </div>

      <div style={{ display: 'flex', gap: 4, padding: '8px 20px', flexWrap: 'wrap', borderBottom: '1px solid rgba(255,255,255,0.1)', alignItems: 'center' }}>
        {Object.keys(DEMOS).map(key => (
          <button key={key} onClick={() => { setActive(key); setSource(''); }} style={{ padding: '4px 8px', background: active === key ? 'rgba(124,58,237,0.3)' : 'rgba(255,255,255,0.05)', border: `1px solid ${active === key ? COLORS.purple : 'rgba(255,255,255,0.1)'}`, borderRadius: 6, color: active === key ? '#a78bfa' : '#666', fontSize: '0.65rem', cursor: 'pointer' }}>{DEMOS[key].title}</button>
        ))}
        <button onClick={() => setShowEditor(!showEditor)} style={{ marginLeft: 'auto', padding: '4px 8px', background: showEditor ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.05)', border: `1px solid ${showEditor ? COLORS.green : 'rgba(255,255,255,0.1)'}`, borderRadius: 6, color: showEditor ? COLORS.green : '#666', fontSize: '0.65rem', cursor: 'pointer' }}>{showEditor ? '✓ Editor' : '</>'}</button>
      </div>

      <div style={{ display: 'flex', height: 'calc(100vh - 105px)' }}>
        {showEditor && (
          <div style={{ width: 300, borderRight: '1px solid rgba(255,255,255,0.1)' }}>
            <textarea value={source || demo.source} onChange={e => setSource(e.target.value)} style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.3)', border: 'none', padding: 12, color: '#a78bfa', fontFamily: 'Monaco, monospace', fontSize: '0.65rem', lineHeight: 1.5, resize: 'none', outline: 'none', boxSizing: 'border-box' }} />
          </div>
        )}
        <div style={{ flex: 1, padding: 10 }}>
          <UniversalDiagram key={`${active}-${src}`} type={active} source={src} theme="dark" />
        </div>
      </div>
    </div>
  );
}

export { MindMapDiagram, ERDDiagram, ArchitectureDiagram, FlowDiagram, UserJourneyDiagram, TimelineDiagram, SequenceDiagram, OrgChartDiagram, NetworkDiagram, GanttDiagram, DeploymentDiagram, PieChartDiagram, QuadrantDiagram, GitGraphDiagram, WireframeDiagram, ClassDiagram, UseCaseDiagram, Parsers, THEMES, COLORS };
