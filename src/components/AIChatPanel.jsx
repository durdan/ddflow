import React, { useState, useRef, useEffect } from 'react';
import { generateDiagram, isAIConfigured, getProviderName } from '../services/aiService.js';

const COLORS = {
  purple: '#7C3AED',
  blue: '#0EA5E9',
  green: '#10B981',
  red: '#EF4444',
};

function AIChatPanel({ onApplyDiagram, isOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setError(null);

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    setIsLoading(true);
    try {
      // Build conversation history for context
      const history = messages.map(m => ({
        role: m.role,
        content: m.content
      }));

      const result = await generateDiagram(userMessage, history);

      // Add AI response
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: result.raw,
        type: result.type,
        dsl: result.dsl
      }]);
    } catch (err) {
      setError(err.message);
      setMessages(prev => [...prev, {
        role: 'error',
        content: err.message
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleApply = (message) => {
    if (message.dsl && message.type) {
      onApplyDiagram(message.type, message.dsl);
    }
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setError(null);
  };

  if (!isOpen) return null;

  const configured = isAIConfigured();
  const providerName = getProviderName();

  return (
    <div style={{
      position: 'fixed',
      right: 0,
      top: 0,
      bottom: 0,
      width: '380px',
      background: 'rgba(10, 10, 15, 0.98)',
      borderLeft: '1px solid rgba(124, 58, 237, 0.3)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1000,
      backdropFilter: 'blur(20px)',
    }}>
      {/* Header */}
      <div style={{
        padding: '16px 20px',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(124, 58, 237, 0.1)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '20px' }}>🤖</span>
          <div>
            <div style={{ color: '#fff', fontWeight: 600, fontSize: '14px' }}>AI Diagram Assistant</div>
            <div style={{ color: '#888', fontSize: '11px' }}>Powered by {providerName}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={clearChat}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '6px',
              padding: '6px 10px',
              color: '#888',
              cursor: 'pointer',
              fontSize: '12px',
            }}
            title="Clear chat"
          >
            Clear
          </button>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#888',
              cursor: 'pointer',
              fontSize: '18px',
              padding: '4px 8px',
            }}
          >
            ✕
          </button>
        </div>
      </div>

      {/* Messages */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}>
        {!configured && (
          <div style={{
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '8px',
            padding: '12px',
            color: '#f87171',
            fontSize: '13px',
          }}>
            <strong>API Key Required</strong>
            <p style={{ margin: '8px 0 0 0', color: '#fca5a5' }}>
              Please configure your API key in <code style={{ background: 'rgba(0,0,0,0.3)', padding: '2px 6px', borderRadius: '4px' }}>.env</code> file.
              Copy <code style={{ background: 'rgba(0,0,0,0.3)', padding: '2px 6px', borderRadius: '4px' }}>.env.example</code> to <code style={{ background: 'rgba(0,0,0,0.3)', padding: '2px 6px', borderRadius: '4px' }}>.env</code> and add your key.
            </p>
          </div>
        )}

        {messages.length === 0 && configured && (
          <div style={{
            textAlign: 'center',
            color: '#666',
            padding: '40px 20px',
          }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>💬</div>
            <div style={{ fontSize: '14px', marginBottom: '8px' }}>Describe the diagram you want to create</div>
            <div style={{ fontSize: '12px', color: '#555' }}>
              Try: "Create a flowchart for user login with email verification"
            </div>
          </div>
        )}

        {messages.map((message, index) => (
          <div key={index} style={{
            alignSelf: message.role === 'user' ? 'flex-end' : 'flex-start',
            maxWidth: '90%',
          }}>
            {message.role === 'user' ? (
              <div style={{
                background: 'linear-gradient(135deg, #7C3AED, #6366F1)',
                borderRadius: '12px 12px 4px 12px',
                padding: '10px 14px',
                color: '#fff',
                fontSize: '13px',
              }}>
                {message.content}
              </div>
            ) : message.role === 'error' ? (
              <div style={{
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '12px 12px 12px 4px',
                padding: '10px 14px',
                color: '#f87171',
                fontSize: '13px',
              }}>
                ⚠️ {message.content}
              </div>
            ) : (
              <div style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px 12px 12px 4px',
                padding: '12px',
                width: '100%',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '8px',
                }}>
                  <span style={{
                    background: `${COLORS.purple}30`,
                    color: COLORS.purple,
                    padding: '3px 8px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                  }}>
                    {message.type}
                  </span>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button
                      onClick={() => handleCopy(message.dsl)}
                      style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '4px 8px',
                        color: '#888',
                        cursor: 'pointer',
                        fontSize: '11px',
                      }}
                    >
                      Copy
                    </button>
                    <button
                      onClick={() => handleApply(message)}
                      style={{
                        background: COLORS.green,
                        border: 'none',
                        borderRadius: '4px',
                        padding: '4px 10px',
                        color: '#fff',
                        cursor: 'pointer',
                        fontSize: '11px',
                        fontWeight: 600,
                      }}
                    >
                      Apply
                    </button>
                  </div>
                </div>
                <pre style={{
                  background: 'rgba(0,0,0,0.3)',
                  borderRadius: '6px',
                  padding: '10px',
                  margin: 0,
                  fontSize: '11px',
                  color: '#e0e0e0',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  maxHeight: '200px',
                  overflowY: 'auto',
                  fontFamily: 'Monaco, Consolas, monospace',
                }}>
                  {message.dsl}
                </pre>
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div style={{
            alignSelf: 'flex-start',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px 12px 12px 4px',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              background: COLORS.purple,
              borderRadius: '50%',
              animation: 'pulse 1s infinite',
            }} />
            <span style={{ color: '#888', fontSize: '13px' }}>Generating diagram...</span>
            <style>{`
              @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.3; }
              }
            `}</style>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} style={{
        padding: '16px',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        background: 'rgba(0,0,0,0.2)',
      }}>
        <div style={{
          display: 'flex',
          gap: '8px',
        }}>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={configured ? "Describe your diagram..." : "Configure API key first"}
            disabled={!configured || isLoading}
            style={{
              flex: 1,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              padding: '12px 14px',
              color: '#fff',
              fontSize: '13px',
              outline: 'none',
            }}
          />
          <button
            type="submit"
            disabled={!configured || isLoading || !input.trim()}
            style={{
              background: configured && input.trim() ? COLORS.purple : 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 16px',
              color: configured && input.trim() ? '#fff' : '#666',
              cursor: configured && input.trim() ? 'pointer' : 'not-allowed',
              fontSize: '14px',
            }}
          >
            {isLoading ? '...' : '→'}
          </button>
        </div>
        <div style={{
          marginTop: '8px',
          fontSize: '11px',
          color: '#555',
          textAlign: 'center',
        }}>
          Press Enter to send • Supports all 22 diagram types
        </div>
      </form>
    </div>
  );
}

export default AIChatPanel;
