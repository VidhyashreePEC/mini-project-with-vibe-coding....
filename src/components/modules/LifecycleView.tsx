import React, { useState } from 'react';
import { useStartup } from '../../context/StartupContext';
import { INITIAL_17_PHASES } from '../../lib/data/sampleStartup';
import { GitBranch, CheckCircle2, Clock, ChevronDown, ChevronUp, RefreshCw, Layers, ShieldCheck } from 'lucide-react';

export const LifecycleView: React.FC = () => {
  const { startup, updateStartup } = useStartup();
  const [phases, setPhases] = useState(INITIAL_17_PHASES);
  const [expandedPhaseId, setExpandedPhaseId] = useState<number | null>(startup.currentPhaseIndex + 1);
  const [syncNote, setSyncNote] = useState('');

  // Calculate total completed phases
  const completedCount = phases.filter(p => p.status === 'Completed').length;
  const inProgressCount = phases.filter(p => p.status === 'In Progress').length;
  const overallPercentage = Math.round(((completedCount + inProgressCount * 0.4) / 17) * 100);

  const toggleTask = (phaseId: number, taskId: string) => {
    setPhases(prev =>
      prev.map(p => {
        if (p.id !== phaseId) return p;
        const updatedTasks = p.tasks.map(t =>
          t.id === taskId ? { ...t, completed: !t.completed } : t
        );
        const doneTasks = updatedTasks.filter(t => t.completed).length;
        const pct = Math.round((doneTasks / updatedTasks.length) * 100);
        const status = pct === 100 ? 'Completed' : pct > 0 ? 'In Progress' : 'Upcoming';
        return {
          ...p,
          tasks: updatedTasks,
          completionPercentage: pct,
          status
        };
      })
    );
  };

  const handleSyncProgress = () => {
    setSyncNote('Progress synchronized with active roadmap and health score.');
    updateStartup({
      currentPhaseIndex: Math.min(16, completedCount),
      healthScore: Math.min(98, 70 + Math.round(overallPercentage * 0.28))
    });
    setTimeout(() => setSyncNote(''), 2500);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Banner (Matching Slide 19) */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <GitBranch className="w-4 h-4" />
            <span>Module 5: 17-Phase Systematic Stage-Gate Engine</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            17-Phase Development Lifecycle Timeline
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Systematic stage-gate execution engine mapping your venture from Idea Conception to Global Scale.
          </p>
        </div>

        <button
          onClick={handleSyncProgress}
          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors flex items-center gap-2 self-start sm:self-auto shadow-md shadow-indigo-600/30"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Sync Progress</span>
        </button>
      </div>

      {syncNote && (
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{syncNote}</span>
        </div>
      )}

      {/* Progress Metric Header Card (Matching Slide 19 top card) */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
            OVERALL STARTUP COMPLETION
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold font-mono text-emerald-400">{overallPercentage}%</span>
            <span className="text-sm font-semibold text-white">Accomplished</span>
          </div>
          <p className="text-xs text-slate-400">
            {completedCount} phases completed · {inProgressCount} in progress · {17 - completedCount - inProgressCount} remaining
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-auto">
          <div className="px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-right">
            <div className="text-[10px] text-slate-400 font-medium">Current Milestone Gate</div>
            <div className="text-xs font-bold text-indigo-400 font-mono">
              Phase {startup.currentPhaseIndex + 1}: {phases[startup.currentPhaseIndex]?.name.split('.')[1] || 'MVP'}
            </div>
          </div>
        </div>
      </div>

      {/* Lifecycle Phase Progression Bar */}
      <div className="w-full h-2.5 bg-slate-850 rounded-full overflow-hidden p-0.5 border border-slate-800">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 rounded-full transition-all duration-500"
          style={{ width: `${overallPercentage}%` }}
        />
      </div>

      {/* 17 Phases Interactive Accordion / Timeline List (Slide 19 visual style) */}
      <div className="space-y-3">
        {phases.map((phase) => {
          const isExpanded = expandedPhaseId === phase.id;
          const isDone = phase.status === 'Completed';
          const isInProgress = phase.status === 'In Progress';

          return (
            <div
              key={phase.id}
              className={`rounded-2xl border transition-all ${
                isInProgress
                  ? 'bg-slate-900 border-indigo-500/50 shadow-lg shadow-indigo-500/5'
                  : isDone
                  ? 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                  : 'bg-slate-950/40 border-slate-850 opacity-70 hover:opacity-100'
              }`}
            >
              <div
                onClick={() => setExpandedPhaseId(isExpanded ? null : phase.id)}
                className="p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer select-none"
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isDone
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : isInProgress
                      ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 font-bold'
                      : 'bg-slate-800 text-slate-500'
                  }`}>
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <span className="font-mono text-xs">{phase.id}</span>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                        {phase.name}
                      </h3>
                      <span className="text-[10px] text-slate-400 font-mono">
                        ({phase.estimatedWeeks} weeks)
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                      {phase.summary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                    isDone
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : isInProgress
                      ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {phase.status}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  )}
                </div>
              </div>

              {/* Expanded Tasks & Guidance */}
              {isExpanded && (
                <div className="px-5 pb-5 pt-2 border-t border-slate-850 space-y-4 text-xs animate-in fade-in duration-200">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="text-[10px] font-bold uppercase text-indigo-400 tracking-wider block mb-1">
                      AI Stage Guidance
                    </span>
                    <p className="text-[11px] leading-relaxed text-slate-300">{phase.aiGuidance}</p>
                  </div>

                  {/* Tasks Checklist */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block">
                      Required Stage-Gate Tasks ({phase.tasks.filter(t => t.completed).length} / {phase.tasks.length} Done)
                    </span>
                    <div className="space-y-1.5">
                      {phase.tasks.map((task) => (
                        <div
                          key={task.id}
                          onClick={() => toggleTask(phase.id, task.id)}
                          className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-950 border border-slate-800/80 hover:border-slate-700 cursor-pointer transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => {}}
                            className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-indigo-600 focus:ring-0 cursor-pointer"
                          />
                          <span className={`text-[11px] ${task.completed ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                            {task.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Resources / Artifacts */}
                  {phase.resources.length > 0 && (
                    <div className="pt-2">
                      <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block mb-1.5">
                        Key Deliverables & Resources
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {phase.resources.map((res, rIdx) => (
                          <span
                            key={rIdx}
                            className="px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700 text-[11px] text-slate-300"
                          >
                            📄 {res}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
