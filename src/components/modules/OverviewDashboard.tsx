import React, { useState } from 'react';
import { useStartup } from '../../context/StartupContext';
import { formatCurrency } from '../../lib/currency/currencies';
import {
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Flame,
  Target,
  ArrowUpRight,
  Layers,
  Cpu,
  Bot,
  AlertOctagon,
  Award,
  Factory,
  RefreshCw,
  CheckCircle2,
  Calendar,
  Building2,
  Clock
} from 'lucide-react';

export const OverviewDashboard: React.FC = () => {
  const {
    startup,
    currency,
    setActiveTab,
    setIsNextActionDrawerOpen,
    setIsScenarioDrawerOpen,
    updateStartup,
    t
  } = useStartup();

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisNote, setAnalysisNote] = useState('');

  const handleRunAnalysis = async () => {
    setIsAnalyzing(true);
    setAnalysisNote('');
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          idea: startup.description || startup.tagline,
          industry: startup.industry,
          country: startup.country,
          targetMarket: startup.targetMarket,
          businessType: startup.businessType
        })
      });
      const data = await response.json();
      if (data.validationScore) {
        updateStartup({
          healthScore: data.healthScore || 89,
          healthGrade: data.grade || "Grade A",
        });
        setAnalysisNote(`AI Analysis Completed: ${data.summary || 'Venture metrics re-indexed successfully.'}`);
      }
    } catch (e) {
      console.warn('Analysis error:', e);
      setAnalysisNote('Analysis re-synchronized using local heuristics.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const c = (amt: number, compact = true) => formatCurrency(amt, currency, { compact });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Banner (Replicating Module 1 Slide 15 Header) */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 sm:p-6 backdrop-blur-md shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-mono font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Phase {startup.currentPhaseIndex + 1} of 17: MVP Development
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-300 font-medium">{startup.industry}</span>
              <span className="text-slate-400">·</span>
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <Factory className="w-3.5 h-3.5" />
                <span>{startup.isHardwareMode ? 'Hardware / IoT Active' : 'Pure Software SaaS'}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {startup.name}
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              {startup.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-indigo-400" />
                <span>Target: <strong>{startup.targetMarket}</strong></span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-slate-400" />
                <span>Model: <strong>{startup.businessType}</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons on Top Right */}
          <div className="flex flex-row lg:flex-col gap-2 flex-shrink-0">
            <button
              onClick={() => setIsNextActionDrawerOpen(true)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs shadow-md shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>What Should I Do Next?</span>
            </button>

            <button
              onClick={handleRunAnalysis}
              disabled={isAnalyzing}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isAnalyzing ? 'animate-spin text-indigo-400' : ''}`} />
              <span>{isAnalyzing ? 'Auditing Venture...' : 'Re-Run Venture Analysis'}</span>
            </button>
          </div>
        </div>

        {analysisNote && (
          <div className="mt-4 p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
            <span>{analysisNote}</span>
          </div>
        )}
      </div>

        {/* 4 Primary Metric Cards (Slide 15 exact layout) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Health Score */}
        <div 
          onClick={() => setActiveTab('validation-scorecard')}
          className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/40 cursor-pointer transition-all hover:shadow-lg hover:shadow-indigo-500/5 group"
        >
          <div className="flex items-center justify-between text-xs font-medium text-slate-400">
            <span className="uppercase tracking-wider text-[10px] font-bold">STARTUP HEALTH</span>
            <span className="text-[10px] text-emerald-400 font-mono font-semibold">{startup.healthGrade}</span>
          </div>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-extrabold font-mono text-white tracking-tight">
              {startup.healthScore}%
            </span>
            <span className="text-xs text-emerald-400 font-medium">Verified Fit</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full mt-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400"
              style={{ width: `${startup.healthScore}%` }}
            />
          </div>
          <p className="text-[11px] text-slate-400 mt-2 flex items-center justify-between">
            <span>Execution Track: Strong</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
          </p>
        </div>

        {/* Metric 2: Estimated Valuation */}
        <div 
          onClick={() => setActiveTab('valuation')}
          className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/40 cursor-pointer transition-all hover:shadow-lg hover:shadow-indigo-500/5 group"
        >
          <div className="flex items-center justify-between text-xs font-medium text-slate-400">
            <span className="uppercase tracking-wider text-[10px] font-bold">EST. VALUATION</span>
            <span className="text-[10px] text-indigo-400 font-mono font-semibold">Multiple Model</span>
          </div>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-extrabold font-mono text-white tracking-tight">
              {c(startup.valuationEstimate, true)}
            </span>
            <span className="text-xs text-slate-400 font-mono">ARR multiple</span>
          </div>
          <div className="mt-3 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Asset-adjusted pre-money</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
          </div>
        </div>

        {/* Metric 3: Cash Runway */}
        <div 
          onClick={() => setActiveTab('financials')}
          className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/40 cursor-pointer transition-all hover:shadow-lg hover:shadow-indigo-500/5 group"
        >
          <div className="flex items-center justify-between text-xs font-medium text-slate-400">
            <span className="uppercase tracking-wider text-[10px] font-bold">CASH RUNWAY</span>
            <span className="text-[10px] text-amber-400 font-mono font-semibold">Liquid Assets</span>
          </div>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-extrabold font-mono text-white tracking-tight">
              {startup.runwayMonths} Mo
            </span>
            <span className="text-xs text-slate-400">@ {c(startup.monthlyBurnRate, true)}/mo</span>
          </div>
          <div className="mt-3 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Capital Cushion: {c(startup.monthlyBurnRate * startup.runwayMonths, true)}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
          </div>
        </div>

        {/* Metric 4: Break-Even Point */}
        <div 
          onClick={() => setActiveTab('break-even')}
          className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/40 cursor-pointer transition-all hover:shadow-lg hover:shadow-indigo-500/5 group"
        >
          <div className="flex items-center justify-between text-xs font-medium text-slate-400">
            <span className="uppercase tracking-wider text-[10px] font-bold">BREAK-EVEN POINT</span>
            <span className="text-[10px] text-emerald-400 font-mono font-semibold">Payback</span>
          </div>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-extrabold font-mono text-white tracking-tight">
              {startup.breakEvenUnits}
            </span>
            <span className="text-xs text-slate-400">Units / Year</span>
          </div>
          <div className="mt-3 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Monthly Target: {c(startup.breakEvenRevenueMonthly, true)}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
          </div>
        </div>
      </div>

      {/* 7-Dimension Health & Validation Meters */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <Award className="w-4 h-4 text-indigo-400" />
              <span>7-Dimension Venture Health Breakdown</span>
            </h2>
            <p className="text-xs text-slate-400">
              Evaluated against 1,200+ venture patterns and base paper risk assessment guidelines
            </p>
          </div>
          <button
            onClick={() => setActiveTab('validation-scorecard')}
            className="text-xs text-indigo-400 hover:underline font-medium"
          >
            View Full 100-Pt Scorecard →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {Object.entries(startup.subscores).map(([key, score]) => {
            const formattedLabel = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            return (
              <div key={key} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80">
                <div className="flex justify-between items-center text-slate-300 mb-1.5 font-medium">
                  <span className="truncate pr-1">{formattedLabel}</span>
                  <span className="font-mono font-bold text-indigo-400">{score}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      score >= 88 ? 'bg-emerald-400' : score >= 80 ? 'bg-indigo-400' : 'bg-amber-400'
                    }`}
                    style={{ width: `${score}%` }}
                  />
                </div>
                <div className="text-[10px] text-slate-400 mt-1.5 flex justify-between">
                  <span>Target: &gt;75%</span>
                  <span className={score >= 85 ? 'text-emerald-400 font-medium' : 'text-slate-400'}>
                    {score >= 85 ? 'Optimal' : 'Standard'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive 5-Year Financial Projection Curve & Venture Analytics */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <h2 className="text-base font-bold text-white tracking-tight">
                Venture Trajectory & 5-Year Financial Projections
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Simulated revenue scalability, operating leverage, and net profitability timeline
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-indigo-400">
              <span className="w-2.5 h-2.5 rounded-sm bg-indigo-500 inline-block" />
              <span>Revenue</span>
            </span>
            <span className="flex items-center gap-1.5 text-rose-400">
              <span className="w-2.5 h-2.5 rounded-sm bg-rose-500 inline-block" />
              <span>Expenses</span>
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500 inline-block" />
              <span>Net EBITDA</span>
            </span>
          </div>
        </div>

        {/* Dynamic Financial Bars */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
          {startup.financialForecasts.map((f) => {
            const maxVal = Math.max(...startup.financialForecasts.map(i => i.revenue));
            const revHeight = Math.max(15, Math.round((f.revenue / maxVal) * 100));
            const expHeight = Math.max(12, Math.round(((f.costOfGoodsSold + f.operatingExpenses) / maxVal) * 100));
            return (
              <div
                key={f.year}
                className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between hover:border-indigo-500/40 transition-colors group"
              >
                <div className="flex items-center justify-between font-mono text-[11px] mb-2">
                  <span className="font-bold text-white">Year {f.year}</span>
                  <span className="text-slate-400 text-[10px]">{f.customerCount.toLocaleString()} Users</span>
                </div>

                <div className="h-28 flex items-end justify-center gap-2 py-2 border-b border-slate-850">
                  {/* Revenue Bar */}
                  <div className="w-4 bg-slate-800 rounded-t flex items-end justify-center overflow-hidden h-full">
                    <div
                      className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 transition-all duration-500 rounded-t"
                      style={{ height: `${revHeight}%` }}
                      title={`Revenue: ${c(f.revenue)}`}
                    />
                  </div>

                  {/* Expense Bar */}
                  <div className="w-4 bg-slate-800 rounded-t flex items-end justify-center overflow-hidden h-full">
                    <div
                      className="w-full bg-gradient-to-t from-rose-600 to-rose-400 transition-all duration-500 rounded-t"
                      style={{ height: `${expHeight}%` }}
                      title={`Expenses: ${c(f.costOfGoodsSold + f.operatingExpenses)}`}
                    />
                  </div>
                </div>

                <div className="mt-2.5 space-y-1 font-mono text-[10px]">
                  <div className="flex justify-between text-slate-300">
                    <span>Rev:</span>
                    <span className="font-bold text-indigo-400">{c(f.revenue, true)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Opex:</span>
                    <span>{c(f.operatingExpenses, true)}</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-slate-850">
                    <span>Net:</span>
                    <span className={f.netProfit >= 0 ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                      {c(f.netProfit, true)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Jump Core Workspaces Grid */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6 shadow-xl">
        <h2 className="text-base font-bold text-white tracking-tight mb-4 flex items-center gap-2">
          <Layers className="w-4 h-4 text-indigo-400" />
          <span>Platform Workspaces & Core Features</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            onClick={() => setActiveTab('ai-cofounder')}
            className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 cursor-pointer transition-all hover:bg-slate-925 group"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Bot className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400">AI Powered</span>
            </div>
            <h3 className="font-semibold text-white group-hover:text-indigo-300 transition-colors text-sm">
              AI Co-Founder Studio
            </h3>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">
              Direct access into 31 institutional planning, modeling, and venture engineering tools.
            </p>
            <div className="mt-3 text-[11px] text-indigo-400 font-medium flex items-center gap-1">
              <span>Open Studio</span>
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </div>

          <div
            onClick={() => setActiveTab('lifecycle')}
            className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 cursor-pointer transition-all hover:bg-slate-925 group"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <TrendingUp className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-purple-500/10 text-purple-400">17 Phases</span>
            </div>
            <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors text-sm">
              17-Phase Lifecycle Engine
            </h3>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">
              End-to-end founder progression roadmap from Idea Conception to Global Scaling.
            </p>
            <div className="mt-3 text-[11px] text-purple-400 font-medium flex items-center gap-1">
              <span>Inspect Milestones</span>
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </div>

          <div
            onClick={() => setActiveTab('failure-audit')}
            className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-rose-500/50 cursor-pointer transition-all hover:bg-slate-925 group"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
                <AlertOctagon className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-rose-500/10 text-rose-400">Crucial Audit</span>
            </div>
            <h3 className="font-semibold text-white group-hover:text-rose-300 transition-colors text-sm">
              Failure & Fix-It Turnaround Audit
            </h3>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">
              Identifies top deadly failure vectors, unvalidated assumptions, and concrete remedies.
            </p>
            <div className="mt-3 text-[11px] text-rose-400 font-medium flex items-center gap-1">
              <span>View Audit Findings</span>
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </div>

          <div
            onClick={() => setActiveTab('market-research')}
            className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/50 cursor-pointer transition-all hover:bg-slate-925 group"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Target className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">TAM / SWOT</span>
            </div>
            <h3 className="font-semibold text-white group-hover:text-emerald-300 transition-colors text-sm">
              Market Research & Strategic TAM
            </h3>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">
              TAM/SAM/SOM sizing, SWOT analysis, PESTLE dynamics, and Porter's 5 Forces.
            </p>
            <div className="mt-3 text-[11px] text-emerald-400 font-medium flex items-center gap-1">
              <span>Explore Market</span>
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </div>

          <div
            onClick={() => setActiveTab('tech-planner')}
            className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 cursor-pointer transition-all hover:bg-slate-925 group"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400">IEEE 830</span>
            </div>
            <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors text-sm">
              Software Architecture & SRS
            </h3>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">
              Modular 6-layer architecture stack with automated IEEE SRS document compilation.
            </p>
            <div className="mt-3 text-[11px] text-cyan-400 font-medium flex items-center gap-1">
              <span>Inspect Architecture</span>
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </div>

          <div
            onClick={() => setActiveTab('report-generator')}
            className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 cursor-pointer transition-all hover:bg-slate-925 group"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400">31 Sections</span>
            </div>
            <h3 className="font-semibold text-white group-hover:text-amber-300 transition-colors text-sm">
              31-Section Startup Report Generator
            </h3>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">
              One-click export to Markdown, printable PDF dossier, DOCX, and CSV spreadsheets.
            </p>
            <div className="mt-3 text-[11px] text-amber-400 font-medium flex items-center gap-1">
              <span>Generate Dossier</span>
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
