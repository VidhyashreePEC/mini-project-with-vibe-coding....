import React, { useState } from 'react';
import { useStartup } from '../../context/StartupContext';
import { NextActionRecommendation } from '../../types/startup';
import { X, Sparkles, Clock, AlertTriangle, ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';

export const NextActionDrawer: React.FC = () => {
  const { isNextActionDrawerOpen, setIsNextActionDrawerOpen, startup, updateStartup } = useStartup();
  const [loading, setLoading] = useState(false);
  const [completedActions, setCompletedActions] = useState<string[]>([]);

  if (!isNextActionDrawerOpen) return null;

  const handleToggleComplete = (actionId: string) => {
    setCompletedActions(prev =>
      prev.includes(actionId) ? prev.filter(id => id !== actionId) : [...prev, actionId]
    );
  };

  const handleRefreshActions = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/recommendations/next-action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ startup })
      });
      const data = await response.json();
      if (data.actions) {
        updateStartup({ nextActions: data.actions });
      }
    } catch (e) {
      console.warn('Action refresh error:', e);
    } finally {
      setTimeout(() => setLoading(false), 500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs">
      <div className="w-full max-w-xl h-full bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col justify-between p-6 overflow-y-auto animate-in slide-in-from-right duration-300">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                  <span>What Should I Do Next?</span>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    Phase {startup.currentPhaseIndex + 1}
                  </span>
                </h2>
                <p className="text-xs text-slate-400">
                  AI-prioritized execution gates with time, budget, and deliverables
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsNextActionDrawerOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Context Summary */}
          <div className="my-4 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs">
            <div className="flex items-center justify-between text-slate-300 font-medium">
              <span>Active Venture: <strong>{startup.name}</strong></span>
              <span className="text-emerald-400 font-mono">Health: {startup.healthScore}%</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
              {startup.tagline}
            </p>
          </div>

          {/* Actions List */}
          <div className="space-y-3.5">
            {startup.nextActions.map((action, idx) => {
              const isDone = completedActions.includes(action.id);
              return (
                <div
                  key={action.id}
                  className={`p-4 rounded-xl border transition-all ${
                    isDone
                      ? 'bg-slate-950/60 border-emerald-500/30 opacity-75'
                      : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2.5">
                      <button
                        onClick={() => handleToggleComplete(action.id)}
                        className={`mt-0.5 p-0.5 rounded border transition-colors ${
                          isDone
                            ? 'bg-emerald-500 border-emerald-500 text-white'
                            : 'border-slate-700 hover:border-indigo-400 text-transparent'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                      </button>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-slate-500">#{idx + 1}</span>
                          <span className={`text-xs font-semibold ${isDone ? 'line-through text-slate-400' : 'text-white'}`}>
                            {action.title}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                          {action.description}
                        </div>
                      </div>
                    </div>

                    <span className={`text-[10px] px-2 py-0.5 rounded font-medium flex-shrink-0 ${
                      action.priority === 'Critical'
                        ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                        : action.priority === 'High'
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        : 'bg-slate-800 text-slate-300'
                    }`}>
                      {action.priority}
                    </span>
                  </div>

                  {/* Metadata Chips (Clean separators, no generic pill bloat) */}
                  <div className="mt-3 pt-2.5 border-t border-slate-850 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-300 font-medium">{action.category}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-500" />
                        <span>{action.estimatedTime}</span>
                      </span>
                      <span>·</span>
                      <span>{action.estimatedCost}</span>
                    </div>

                    <div className="text-indigo-400 font-medium text-[10px]">
                      Deliverable: {action.deliverable}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-3 text-xs">
          <button
            onClick={handleRefreshActions}
            disabled={loading}
            className="px-3 py-2 rounded-lg bg-slate-850 hover:bg-slate-800 text-slate-300 font-medium flex items-center gap-1.5 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-indigo-400' : ''}`} />
            <span>Re-Audit Priorities</span>
          </button>

          <button
            onClick={() => setIsNextActionDrawerOpen(false)}
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors flex items-center gap-1.5 shadow-md shadow-indigo-600/20"
          >
            <span>Proceed to Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
