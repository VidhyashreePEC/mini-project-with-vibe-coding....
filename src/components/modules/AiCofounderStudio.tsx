import React, { useState, useRef, useEffect } from 'react';
import { useStartup } from '../../context/StartupContext';
import { Bot, Send, Sparkles, User, RefreshCw, Terminal, Layers } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export const AiCofounderStudio: React.FC = () => {
  const { startup } = useStartup();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm-1',
      sender: 'assistant',
      text: `Hello! I'm your AI Co-Founder and Senior Venture Architect at InnovAI Hub. 
I have reviewed your active venture **${startup.name}** (${startup.industry}, Phase ${startup.currentPhaseIndex + 1} of 17). 

Your current runway is **${startup.runwayMonths} months** with an estimated valuation of **₹${(startup.valuationEstimate / 10000000).toFixed(2)} Cr**. How can I help you accelerate progress today?`,
      timestamp: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input;
    if (!textToSend.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!messageText) setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          startupContext: {
            name: startup.name,
            tagline: startup.tagline,
            industry: startup.industry,
            phase: startup.currentPhaseIndex + 1,
            runway: startup.runwayMonths,
            burnRate: startup.monthlyBurnRate,
            isHardwareMode: startup.isHardwareMode,
            problem: startup.problemStatement,
            solution: startup.proposedSolution,
            tam: startup.tamSamSom.tam
          }
        })
      });

      const data = await response.json();
      const assistantMsg: ChatMessage = {
        id: `a-${Date.now()}`,
        sender: 'assistant',
        text: data.reply || "I've reviewed your request and generated architectural guidance.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, assistantMsg]);
    } catch (e) {
      console.warn('Chat error:', e);
      const fallbackMsg: ChatMessage = {
        id: `a-${Date.now()}`,
        sender: 'assistant',
        text: `Based on your venture roadmap for **${startup.name}**:
1. Focus on validating commercial evidence with 2-3 Letters of Intent (LOIs).
2. Keep BOM cost constrained to prevent early margin compression.
3. Align with AIS-140/AIS-156 safety requirements early to secure institutional fleet trust.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  const starterPrompts = [
    "How can I reduce our hardware BOM cost by 30%?",
    "Coach me through a 2-minute elevator pitch for seed investors",
    "What are the top 3 unvalidated risks in our B2B pricing model?",
    "How do I structure a 30-day pilot charter for commercial fleets?"
  ];

  return (
    <div className="h-[calc(100vh-130px)] flex flex-col rounded-2xl border border-slate-800 bg-slate-900 shadow-xl overflow-hidden animate-in fade-in duration-300">
      {/* Studio Top Bar */}
      <div className="p-4 border-b border-slate-800 bg-slate-950/70 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <span>AI Co-Founder Studio</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Gemini 3.8 Flash Engine
              </span>
            </h2>
            <p className="text-[11px] text-slate-400">
              Interactive venture sparring, technical architecture tuning, and pitch rehearsal
            </p>
          </div>
        </div>

        <button
          onClick={() => setMessages(messages.slice(0, 1))}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 text-xs flex items-center gap-1"
          title="Reset conversation"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Clear Chat</span>
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-xs">
        {messages.map((m) => {
          const isUser = m.sender === 'user';
          return (
            <div
              key={m.id}
              className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              {!isUser && (
                <div className="w-7 h-7 rounded-lg bg-indigo-600/30 border border-indigo-500/40 text-indigo-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div
                className={`max-w-2xl rounded-2xl p-4 leading-relaxed ${
                  isUser
                    ? 'bg-indigo-600 text-white rounded-tr-xs'
                    : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-tl-xs whitespace-pre-line'
                }`}
              >
                <div>{m.text}</div>
                <div className={`mt-2 text-[10px] ${isUser ? 'text-indigo-200' : 'text-slate-500'} text-right font-mono`}>
                  {m.timestamp}
                </div>
              </div>
              {isUser && (
                <div className="w-7 h-7 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}
        {loading && (
          <div className="flex gap-3 justify-start items-center">
            <div className="w-7 h-7 rounded-lg bg-indigo-600/30 border border-indigo-500/40 text-indigo-400 flex items-center justify-center">
              <Bot className="w-4 h-4 animate-pulse" />
            </div>
            <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-slate-400 text-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
              <span>Analyzing startup context and synthesizing response...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Starter Prompts */}
      <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800/80 flex gap-2 overflow-x-auto no-scrollbar">
        {starterPrompts.map((p, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(p)}
            className="flex-shrink-0 px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[11px] text-slate-300 hover:text-white transition-colors"
          >
            💡 {p}
          </button>
        ))}
      </div>

      {/* Input Box */}
      <div className="p-3 border-t border-slate-800 bg-slate-950 flex gap-2">
        <textarea
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder={`Ask your AI Co-Founder about ${startup.name}...`}
          className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 resize-none"
        />
        <button
          onClick={() => handleSend()}
          disabled={!input.trim() || loading}
          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors disabled:opacity-50 shadow-md shadow-indigo-600/30"
        >
          <Send className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Send</span>
        </button>
      </div>
    </div>
  );
};
