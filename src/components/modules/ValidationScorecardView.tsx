import React from 'react';
import { useStartup } from '../../context/StartupContext';
import { Award, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';

export const ValidationScorecardView: React.FC = () => {
  const { startup } = useStartup();
  const scorecard = startup.validationScorecard;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Award className="w-4 h-4" />
            <span>Venture Validation Engine</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            100-Point Multi-Dimension Validation Scorecard
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Objective feasibility, market readiness, and financial viability audit across 11 critical dimensions.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-right self-start sm:self-auto flex items-baseline gap-3">
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400">Total Score</div>
            <div className="text-3xl font-extrabold font-mono text-white tracking-tight">
              {scorecard.totalScore} <span className="text-sm font-normal text-slate-400">/ 100</span>
            </div>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold font-mono">
            {scorecard.grade}
          </span>
        </div>
      </div>

      {/* Categories Score List */}
      <div className="space-y-3">
        {scorecard.categories.map((cat, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors space-y-2 text-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-slate-500 font-semibold">#{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                <h3 className="font-bold text-white text-sm">{cat.category}</h3>
                <span className="text-[10px] px-2 py-0.5 rounded font-mono font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {cat.grade}
                </span>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto font-mono">
                <span className="font-bold text-white text-base">{cat.score}</span>
                <span className="text-slate-500">/ {cat.maxScore} pts</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
              <div
                className={`h-full ${
                  cat.score >= 9 ? 'bg-emerald-400' : cat.score >= 8 ? 'bg-indigo-400' : 'bg-amber-400'
                }`}
                style={{ width: `${(cat.score / cat.maxScore) * 100}%` }}
              />
            </div>

            <p className="text-[11px] text-slate-400 pt-1 leading-relaxed">
              <strong>Audit Rationale:</strong> {cat.rationale}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
