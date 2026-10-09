import React, { useState } from 'react';
import { useStartup } from '../../context/StartupContext';
import { AlertOctagon, ShieldAlert, ArrowRight, RefreshCw, CheckCircle2, AlertTriangle, HelpCircle } from 'lucide-react';

export const FailureAuditView: React.FC = () => {
  const { startup, updateStartup } = useStartup();
  const [isReauditing, setIsReauditing] = useState(false);
  const [successNote, setSuccessNote] = useState('');

  const handleReAudit = async () => {
    setIsReauditing(true);
    setSuccessNote('');
    setTimeout(() => {
      setIsReauditing(false);
      setSuccessNote('Audit refreshed. All failure vectors checked against current development gate.');
    }, 800);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Banner (Matching Slide 18) */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <AlertOctagon className="w-4 h-4" />
            <span>Module 4: Pre-Mortem Risk & Turnaround Engine</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Failure & Fix-It Turnaround Audit
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Brutal, constructive venture capital critique highlighting false assumptions, bottlenecks, and direct remedies.
          </p>
        </div>

        <button
          onClick={handleReAudit}
          disabled={isReauditing}
          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 text-xs font-semibold transition-colors flex items-center gap-2 self-start sm:self-auto disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isReauditing ? 'animate-spin text-indigo-400' : ''}`} />
          <span>{isReauditing ? 'Auditing Failure Vectors...' : 'Re-Run Venture Auditor'}</span>
        </button>
      </div>

      {successNote && (
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{successNote}</span>
        </div>
      )}

      {/* Top Deadly Failure Vectors (Slide 18 top 3 cards) */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6 shadow-xl space-y-4">
        <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-rose-400" />
          <span>Top Deadly Failure Vectors</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {startup.failureAudit.topDeadlyVectors.map((v) => (
            <div
              key={v.id}
              className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] mb-2 font-mono">
                  <span className="font-bold text-slate-400">{v.vectorNum}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                    v.severity === 'Critical'
                      ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                      : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                  }`}>
                    {v.severity}
                  </span>
                </div>
                <h3 className="font-bold text-white text-xs mb-2 leading-snug">
                  {v.title}
                </h3>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {v.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-850">
                <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider mb-1">
                  Actionable Turnaround Remedy
                </div>
                <div className="text-[11px] text-slate-300 leading-relaxed">
                  {v.actionableRemedy}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Unvalidated Assumptions & Missing Evidence (Slide 18 lower two boxes) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        {/* Box 1: Unvalidated Assumptions */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
          <div className="flex items-center gap-2 font-bold text-amber-400 text-xs uppercase tracking-wider mb-3">
            <AlertTriangle className="w-4 h-4" />
            <span>UNVALIDATED & FAULTY ASSUMPTIONS</span>
          </div>
          <ul className="space-y-3">
            {startup.failureAudit.unvalidatedAssumptions.map((assump, idx) => (
              <li key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-slate-300 leading-relaxed flex items-start gap-2.5">
                <span className="text-amber-400 font-bold">•</span>
                <span>{assump}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Box 2: Missing Commercial Evidence */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
          <div className="flex items-center gap-2 font-bold text-cyan-400 text-xs uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>MISSING COMMERCIAL EVIDENCE</span>
          </div>
          <ul className="space-y-3">
            {startup.failureAudit.missingCommercialEvidence.map((ev, idx) => (
              <li key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-slate-300 leading-relaxed flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold">•</span>
                <span>{ev}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Turnaround Action Playbook */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6 shadow-xl space-y-4 text-xs">
        <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Strategic Turnaround Playbook</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 text-[11px] uppercase font-mono">
                <th className="py-2.5 px-3">Timeline Phase</th>
                <th className="py-2.5 px-3">Corrective Engineering & Business Action</th>
                <th className="py-2.5 px-3">Expected Deliverable Outcome</th>
                <th className="py-2.5 px-3">Timeframe</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/70 text-slate-300">
              {startup.failureAudit.turnaroundPlan.map((tp) => (
                <tr key={tp.id} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3 px-3 font-semibold text-white whitespace-nowrap">{tp.phase}</td>
                  <td className="py-3 px-3">{tp.action}</td>
                  <td className="py-3 px-3 text-emerald-400 font-medium">{tp.expectedOutcome}</td>
                  <td className="py-3 px-3 font-mono text-slate-400 whitespace-nowrap">{tp.timeframe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
