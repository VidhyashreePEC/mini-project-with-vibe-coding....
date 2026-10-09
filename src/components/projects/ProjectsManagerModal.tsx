import React, { useState } from 'react';
import { useStartup } from '../../context/StartupContext';
import { formatCurrency } from '../../lib/currency/currencies';
import {
  FolderKanban,
  Plus,
  Copy,
  Trash2,
  CheckCircle2,
  X,
  Search,
  ArrowRight,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Calendar,
  Layers,
  Sparkles
} from 'lucide-react';

export const ProjectsManagerModal: React.FC = () => {
  const {
    projects,
    activeProjectId,
    switchProject,
    duplicateProject,
    deleteProject,
    isProjectsModalOpen,
    setIsProjectsModalOpen,
    setIsWizardOpen,
    startNewEmptyProject,
    setHasConfiguredProject,
    currency
  } = useStartup();

  const [searchQuery, setSearchQuery] = useState('');

  if (!isProjectsModalOpen) return null;

  const filteredProjects = projects.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.businessType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200 font-sans">
      <div className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <FolderKanban className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-white tracking-tight">Venture Projects Hub</h2>
                <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono">
                  {projects.length} Total Projects
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Switch between live startup projects, duplicate blueprints, or launch new ventures.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setIsProjectsModalOpen(false);
                startNewEmptyProject();
              }}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs flex items-center gap-1.5 transition-all border border-slate-700"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Start Blank Project</span>
            </button>
            <button
              onClick={() => {
                setIsProjectsModalOpen(false);
                setIsWizardOpen(true);
              }}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-indigo-600/20"
            >
              <Plus className="w-4 h-4" />
              <span>Guided Wizard</span>
            </button>
            <button
              onClick={() => setIsProjectsModalOpen(false)}
              className="p-2 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-slate-800/80 bg-slate-950/40">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search ventures by project name, industry, or business model..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Project Grid */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProjects.map((p) => {
            const isActive = p.id === activeProjectId;
            return (
              <div
                key={p.id}
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-indigo-950/30 border-indigo-500/50 shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500/30'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-950/90'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-white text-base tracking-tight">{p.name}</h3>
                        {isActive && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-[10px] font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            Active
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5 font-medium">
                        {p.industry} · {p.businessType}
                      </p>
                    </div>

                    <div className="text-right font-mono">
                      <div className="text-[10px] text-slate-400 font-semibold">Phase {p.currentPhaseIndex + 1}/17</div>
                      <div className="text-xs font-bold text-indigo-400">{p.healthGrade}</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                    {p.tagline}
                  </p>

                  {/* Key Stats Bar */}
                  <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800/80 text-[11px] font-mono mb-4">
                    <div>
                      <div className="text-[9px] text-slate-400 uppercase">Valuation</div>
                      <div className="font-bold text-white truncate">{formatCurrency(p.valuationEstimate, currency)}</div>
                    </div>
                    <div>
                      <div className="text-[9px] text-slate-400 uppercase">Runway</div>
                      <div className="font-bold text-amber-300">{p.runwayMonths} Mos</div>
                    </div>
                    <div>
                      <div className="text-[9px] text-slate-400 uppercase">Health</div>
                      <div className="font-bold text-emerald-400">{p.healthScore}%</div>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-800/60">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => duplicateProject(p.id)}
                      title="Duplicate this project"
                      className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                    {projects.length > 1 && (
                      <button
                        onClick={() => {
                          if (confirm(`Are you sure you want to delete "${p.name}"?`)) {
                            deleteProject(p.id);
                          }
                        }}
                        title="Delete project"
                        className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 hover:text-rose-300 border border-rose-500/20 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {!isActive ? (
                    <button
                      onClick={() => {
                        switchProject(p.id);
                        setHasConfiguredProject(true);
                        setIsProjectsModalOpen(false);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white font-semibold text-xs transition-colors flex items-center gap-1"
                    >
                      <span>Switch to Project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsProjectsModalOpen(false)}
                      className="px-3 py-1.5 rounded-lg bg-indigo-600/30 text-indigo-300 font-semibold text-xs border border-indigo-500/30"
                    >
                      Currently In View
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400">
          <span>Enterprise Workspace: Independent multi-venture data isolation</span>
          <button
            onClick={() => {
              setIsProjectsModalOpen(false);
              setIsWizardOpen(true);
            }}
            className="text-indigo-400 hover:text-indigo-300 font-semibold"
          >
            + Create New Startup Venture
          </button>
        </div>
      </div>
    </div>
  );
};
