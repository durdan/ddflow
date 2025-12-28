// DDFlow Undo/Redo Hook - Manages history stack for state changes

import { useState, useCallback, useRef } from 'react';

const MAX_HISTORY = 50;

/**
 * Custom hook for undo/redo functionality
 * Uses past/present/future pattern similar to Redux undo
 *
 * @param {Object} initialState - Initial state object
 * @returns {Object} - History state and control methods
 */
function useUndoRedo(initialState) {
  const [history, setHistory] = useState({
    past: [],
    present: { ...initialState, timestamp: Date.now(), changeType: 'initial' },
    future: []
  });

  // Track if we're currently applying undo/redo to prevent re-captures
  const isApplyingRef = useRef(false);

  /**
   * Push a new state to history
   * Clears the future stack (redo history)
   */
  const pushState = useCallback((newState, changeType = 'unknown') => {
    // Don't push if we're applying an undo/redo operation
    if (isApplyingRef.current) return;

    setHistory(prev => {
      // Don't push duplicate states
      if (
        prev.present.source === newState.source &&
        prev.present.type === newState.type &&
        prev.present.diagramName === newState.diagramName &&
        JSON.stringify(prev.present.positions) === JSON.stringify(newState.positions)
      ) {
        return prev;
      }

      return {
        past: [...prev.past.slice(-MAX_HISTORY + 1), prev.present],
        present: {
          ...newState,
          timestamp: Date.now(),
          changeType
        },
        future: [] // Clear redo stack on new change
      };
    });
  }, []);

  /**
   * Undo - Move present to future, pop last past to present
   */
  const undo = useCallback(() => {
    setHistory(prev => {
      if (prev.past.length === 0) return prev;

      const previous = prev.past[prev.past.length - 1];
      isApplyingRef.current = true;

      // Schedule reset of applying flag
      setTimeout(() => { isApplyingRef.current = false; }, 0);

      return {
        past: prev.past.slice(0, -1),
        present: previous,
        future: [prev.present, ...prev.future]
      };
    });
  }, []);

  /**
   * Redo - Move present to past, pop first future to present
   */
  const redo = useCallback(() => {
    setHistory(prev => {
      if (prev.future.length === 0) return prev;

      const next = prev.future[0];
      isApplyingRef.current = true;

      // Schedule reset of applying flag
      setTimeout(() => { isApplyingRef.current = false; }, 0);

      return {
        past: [...prev.past, prev.present],
        present: next,
        future: prev.future.slice(1)
      };
    });
  }, []);

  /**
   * Clear all history and reset to current present
   */
  const clear = useCallback(() => {
    setHistory(prev => ({
      past: [],
      present: prev.present,
      future: []
    }));
  }, []);

  /**
   * Reset history with a new initial state
   */
  const reset = useCallback((newInitialState) => {
    setHistory({
      past: [],
      present: { ...newInitialState, timestamp: Date.now(), changeType: 'reset' },
      future: []
    });
  }, []);

  /**
   * Check if currently applying undo/redo
   */
  const isApplying = useCallback(() => isApplyingRef.current, []);

  return {
    // Current state
    state: history.present,

    // Boolean flags
    canUndo: history.past.length > 0,
    canRedo: history.future.length > 0,

    // History info
    historyLength: history.past.length,
    futureLength: history.future.length,

    // Actions
    undo,
    redo,
    pushState,
    clear,
    reset,
    isApplying
  };
}

export default useUndoRedo;
