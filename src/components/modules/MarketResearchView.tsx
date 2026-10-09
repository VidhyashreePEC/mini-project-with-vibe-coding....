import React, { useState } from 'react';
import { useStartup } from '../../context/StartupContext';
import { formatCurrency } from '../../lib/currency/currencies';
import { PieChart, Save, Sparkles, TrendingUp, ShieldAlert, Compass, Layers, CheckCircle2 } from 'lucide-react';

export const MarketResearchView: React.FC = () => {
  const { startup, currency, updateStartup } = useStartup();
  const [isSaved, setIsSaved] = useState(false);
  const [newStrength, setNewStrength] = useState('');
  const [newWeakness, setNewWeakness] = useState('');
  const [newOpportunity, setNewOpportunity] = useState('');
  const [newThreat, setNewThreat] = useState('');

  const c = (amt: number) => formatCurrency(amt, currency, { compact: true });

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleAddSwot = (type: 'strengths' | 'weaknesses' | 'opportunities' | 'threats') => {
    if (type === 'strengths' && newStrength.trim()) {
      updateStartup(prev => ({
        ...prev,
        swot: { ...prev.swot, strengths: [...prev.swot.strengths, newStrength.trim()] }
      }));
      setNewStrength('');
    } else if (type === 'weaknesses' && newWeakness.trim()) {
      updateStartup(prev => ({
        ...prev,
        swot: { ...prev.swot, weaknesses: [...prev.swot.weaknesses, newWeakness.trim()] }
      }));
      setNewWeakness('');
    } else if (type === 'opportunities' && newOpportunity.trim()) {
      updateStartup(prev => ({
        ...prev,
        swot: { ...prev.swot, opportunities: [...prev.swot.opportunities, newOpportunity.trim()] }
      }));
      setNewOpportunity('');
    } else if (type === 'threats' && newThreat.trim()) {
      updateStartup(prev => ({
        ...prev,
        swot: { ...prev.swot, threats: [...prev.swot.threats, newThreat.trim()] }
      }));
      setNewThreat('');
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Banner (Matching Slide 16) */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <PieChart className="w-4 h-4" />
            <span>Module 2: Strategic Market Sizing & Frameworks</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Market Research & Strategic Frameworks
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            TAM/SAM/SOM addressable sizing, SWOT matrix, Porter's 5 Forces, and macro PESTLE landscape.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-md shadow-indigo-600/30 self-start sm:self-auto"
        >
          {isSaved ? <CheckCircle2 className="w-4 h-4 text-white" /> : <Save className="w-4 h-4" />}
          <span>{isSaved ? 'Research Saved' : 'Save Research'}</span>
        </button>
      </div>

      {/* 4 TAM / SAM / SOM Cards (Matching Slide 16 top cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
          <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1">
            TOTAL ADDRESSABLE MARKET (TAM)
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight mt-1">
            {c(startup.tamSamSom.tam)}
          </div>
          <p className="text-[11px] text-slate-400 mt-2">
            Total market expenditure across the entire commercial sector.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
          <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1">
            SERVICEABLE ADDRESSABLE MARKET (SAM)
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold font-mono text-indigo-400 tracking-tight mt-1">
            {c(startup.tamSamSom.sam)}
          </div>
          <p className="text-[11px] text-slate-400 mt-2">
            Target regional customer segment within reach of current distribution.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
          <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1">
            SERVICEABLE OBTAINABLE MARKET (SOM)
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400 tracking-tight mt-1">
            {c(startup.tamSamSom.som)}
          </div>
          <p className="text-[11px] text-slate-400 mt-2">
            Realistic 24-month achievable capture target (approx 7.6% of SAM).
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
          <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1">
            OPPORTUNITY SCORE
          </div>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">84</span>
            <span className="text-xs text-slate-400 font-mono">/ 100 (High Potential)</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">
            Driven by structural tailwinds, rapid payback, and low substitution friction.
          </p>
        </div>
      </div>

      {/* Strategic SWOT Analysis (Exact replication of Slide 16 grid) */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6 shadow-xl space-y-4">
        <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
          <Compass className="w-4 h-4 text-indigo-400" />
          <span>Strategic SWOT Analysis</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {/* Strengths */}
          <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-bold text-emerald-400 uppercase tracking-wider text-[11px] mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>STRENGTHS (INTERNAL)</span>
              </div>
              <ul className="space-y-2 text-slate-300">
                {startup.swot.strengths.map((str, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    <span className="leading-relaxed">{str}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-800/80 flex gap-2">
              <input
                type="text"
                value={newStrength}
                onChange={(e) => setNewStrength(e.target.value)}
                placeholder="+ Add strength..."
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-slate-200 focus:outline-none focus:border-emerald-500 text-[11px]"
              />
              <button
                onClick={() => handleAddSwot('strengths')}
                className="px-2.5 py-1 rounded-lg bg-emerald-600/20 text-emerald-300 font-semibold text-[11px] hover:bg-emerald-600/30"
              >
                Add
              </button>
            </div>
          </div>

          {/* Weaknesses */}
          <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-bold text-amber-400 uppercase tracking-wider text-[11px] mb-3">
                <ShieldAlert className="w-4 h-4" />
                <span>WEAKNESSES (INTERNAL)</span>
              </div>
              <ul className="space-y-2 text-slate-300">
                {startup.swot.weaknesses.map((w, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400">•</span>
                    <span className="leading-relaxed">{w}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-800/80 flex gap-2">
              <input
                type="text"
                value={newWeakness}
                onChange={(e) => setNewWeakness(e.target.value)}
                placeholder="+ Add weakness..."
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-slate-200 focus:outline-none focus:border-amber-500 text-[11px]"
              />
              <button
                onClick={() => handleAddSwot('weaknesses')}
                className="px-2.5 py-1 rounded-lg bg-amber-600/20 text-amber-300 font-semibold text-[11px] hover:bg-amber-600/30"
              >
                Add
              </button>
            </div>
          </div>

          {/* Opportunities */}
          <div className="p-4 rounded-xl bg-slate-950 border border-indigo-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-bold text-indigo-400 uppercase tracking-wider text-[11px] mb-3">
                <TrendingUp className="w-4 h-4" />
                <span>OPPORTUNITIES (EXTERNAL)</span>
              </div>
              <ul className="space-y-2 text-slate-300">
                {startup.swot.opportunities.map((opp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-400">•</span>
                    <span className="leading-relaxed">{opp}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-800/80 flex gap-2">
              <input
                type="text"
                value={newOpportunity}
                onChange={(e) => setNewOpportunity(e.target.value)}
                placeholder="+ Add opportunity..."
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-slate-200 focus:outline-none focus:border-indigo-500 text-[11px]"
              />
              <button
                onClick={() => handleAddSwot('opportunities')}
                className="px-2.5 py-1 rounded-lg bg-indigo-600/20 text-indigo-300 font-semibold text-[11px] hover:bg-indigo-600/30"
              >
                Add
              </button>
            </div>
          </div>

          {/* Threats */}
          <div className="p-4 rounded-xl bg-slate-950 border border-rose-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-bold text-rose-400 uppercase tracking-wider text-[11px] mb-3">
                <ShieldAlert className="w-4 h-4" />
                <span>THREATS (EXTERNAL)</span>
              </div>
              <ul className="space-y-2 text-slate-300">
                {startup.swot.threats.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-400">•</span>
                    <span className="leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-800/80 flex gap-2">
              <input
                type="text"
                value={newThreat}
                onChange={(e) => setNewThreat(e.target.value)}
                placeholder="+ Add threat..."
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-slate-200 focus:outline-none focus:border-rose-500 text-[11px]"
              />
              <button
                onClick={() => handleAddSwot('threats')}
                className="px-2.5 py-1 rounded-lg bg-rose-600/20 text-rose-300 font-semibold text-[11px] hover:bg-rose-600/30"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Porter's 5 Forces Matrix */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6 shadow-xl space-y-4">
        <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
          <Layers className="w-4 h-4 text-indigo-400" />
          <span>Porter's Five Competitive Forces Analysis</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
          {Object.entries(startup.portersForces).map(([forceKey, data]) => {
            const formatted = forceKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            return (
              <div key={forceKey} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-slate-200 leading-tight">{formatted}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono font-bold ${
                      data.level === 'Low' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                      data.level === 'Medium' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                      'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    }`}>
                      {data.level}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                    {data.notes}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
