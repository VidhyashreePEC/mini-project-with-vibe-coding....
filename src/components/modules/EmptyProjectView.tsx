import React, { useState } from 'react';
import { useStartup } from '../../context/StartupContext';
import {
  Sparkles,
  Layers,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Bot,
  AlertCircle,
  FolderPlus,
  Rocket,
  CheckCircle2,
  Lock,
  Cpu,
  Factory
} from 'lucide-react';

export const EmptyProjectView: React.FC = () => {
  const {
    setIsWizardOpen,
    initializeProjectFromIntake,
    user
  } = useStartup();

  // In-page quick setup form state
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [industry, setIndustry] = useState('AI & Enterprise Software (B2B SaaS)');
  const [problemStatement, setProblemStatement] = useState('');
  const [proposedSolution, setProposedSolution] = useState('');
  const [targetMarket, setTargetMarket] = useState('');
  const [businessType, setBusinessType] = useState('B2B SaaS');
  const [isHardwareMode, setIsHardwareMode] = useState(false);
  const [isSoloFounder, setIsSoloFounder] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const industries = [
    'AI & Enterprise Software (B2B SaaS)',
    'CleanTech & Commercial EV Logistics',
    'AgriTech & Smart Farming Robotics',
    'HealthTech & Medical Devices',
    'FinTech & Micro-Lending Platforms',
    'EdTech & Vernacular Learning',
    'Cybersecurity & Cloud Infrastructure',
    'E-Commerce & Smart Logistics'
  ];

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      initializeProjectFromIntake({
        name: name.trim(),
        tagline: tagline.trim() || 'AI-Powered enterprise platform validating ideas and structuring execution.',
        industry,
        businessType: businessType.trim() || 'B2B SaaS',
        targetMarket: targetMarket.trim() || 'Founders, project teams, and enterprise innovators',
        problemStatement: problemStatement.trim() || 'High friction, unvalidated market assumptions, and fragmented project planning.',
        proposedSolution: proposedSolution.trim() || 'Autonomous AI co-founder engine generating 17-phase lifecycle plans and verifiable financials.',
        uvpInnovation: 'Sub-second real-time multi-dimensional validation with zero mock fallbacks.',
        currentPhaseIndex: 2,
        isSoloFounder,
        isHardwareMode,
        founderName: user.fullName || 'Lead Founder',
        coFounders: []
      });
      setIsSubmitting(false);
    }, 450);
  };

  const handlePreloadDemo = () => {
    setName('InnovAI Hub');
    setTagline('An AI-Powered Platform for Startup Idea Validation and Intelligent Project Planning');
    setIndustry('AI & Enterprise Software (B2B SaaS)');
    setProblemStatement('Early-stage founders lose 8-12 months building unvalidated ideas due to fragmented roadmaps, inaccurate financial assumptions, and lack of technical architecture.');
    setProposedSolution('An end-to-end intelligent platform that guides founders across 17 structured lifecycle phases, automated financial break-even models, competitor benchmarking, and verified documentation.');
    setTargetMarket('Founders, university incubation cells, aspiring entrepreneurs, and venture studios');
    setBusinessType('B2B Enterprise SaaS');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-5xl mx-auto py-4">
      {/* Top Alert Banner */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 flex-shrink-0">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-amber-200">
              Project Details Required — All Features Currently Empty
            </h4>
            <p className="text-xs text-amber-300/80 mt-0.5">
              InnovAI Hub keeps all modules (AI Studio, Financials, Lifecycle Roadmap, Scorecards) in an empty state until you define your project details.
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsWizardOpen(true)}
          className="flex-shrink-0 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-amber-500/20"
        >
          <Sparkles className="w-4 h-4" />
          <span>Launch 3-Step Wizard</span>
        </button>
      </div>

      {/* Main Project Intake Hero & Form */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-2">
              <Rocket className="w-3.5 h-3.5 text-indigo-400" />
              <span>Step 1: Setup Your Startup Project</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Tell InnovAI Hub About Your Startup
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Enter your venture details below. Once submitted, our AI engine will generate your entire 17-phase lifecycle roadmap, market research, unit economics, and slide decks.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePreloadDemo}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Autofill "InnovAI Hub"</span>
            </button>
            <button
              type="button"
              onClick={() => setIsWizardOpen(true)}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-lg shadow-indigo-600/20 flex items-center gap-1.5"
            >
              <span>Guided Wizard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Quick In-Page Intake Form */}
        <form onSubmit={handleQuickSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Startup / Project Name <span className="text-indigo-400">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. InnovAI Hub or AgriScan Drone AI"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Industry Vertical <span className="text-indigo-400">*</span>
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors"
              >
                {industries.map((ind) => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              One-Line Elevator Tagline
            </label>
            <input
              type="text"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              placeholder="e.g. An AI-Powered Platform for Startup Idea Validation and Intelligent Project Planning"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Target Market / Customer Segment
              </label>
              <input
                type="text"
                value={targetMarket}
                onChange={(e) => setTargetMarket(e.target.value)}
                placeholder="e.g. Student founders, tech startups, and incubation cells"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Business Model Type
              </label>
              <input
                type="text"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                placeholder="e.g. B2B SaaS, Hardware-Enabled SaaS, Marketplace"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              The Critical Problem You Are Solving <span className="text-indigo-400">*</span>
            </label>
            <textarea
              rows={2}
              required
              value={problemStatement}
              onChange={(e) => setProblemStatement(e.target.value)}
              placeholder="Describe what pain points your target customers experience and why current alternatives fail..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Your Proposed Solution & Core Innovation <span className="text-indigo-400">*</span>
            </label>
            <textarea
              rows={2}
              required
              value={proposedSolution}
              onChange={(e) => setProposedSolution(e.target.value)}
              placeholder="Explain how your solution works, what technology it uses, and why it provides 10x value..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* Operational Engine Toggles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <label className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between cursor-pointer hover:border-slate-700">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Factory className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Hardware / IoT Mode</div>
                  <div className="text-[10px] text-slate-400">Includes bill of materials & factory floor ops</div>
                </div>
              </div>
              <input
                type="checkbox"
                checked={isHardwareMode}
                onChange={(e) => setIsHardwareMode(e.target.checked)}
                className="w-4 h-4 rounded border-slate-800 text-indigo-600 focus:ring-0 cursor-pointer"
              />
            </label>

            <label className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between cursor-pointer hover:border-slate-700">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Solo Founder Mode</div>
                  <div className="text-[10px] text-slate-400">Optimizes for lean solo execution roadmap</div>
                </div>
              </div>
              <input
                type="checkbox"
                checked={isSoloFounder}
                onChange={(e) => setIsSoloFounder(e.target.checked)}
                className="w-4 h-4 rounded border-slate-800 text-indigo-600 focus:ring-0 cursor-pointer"
              />
            </label>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>All 17 modules will generate tailored analyses from these inputs</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !name.trim()}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Configuring All Features...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Configure Project & Unlock All Features</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Feature Preview Grid in Empty State */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Features Pending Project Activation (Currently Empty)
          </h3>
          <span className="text-[11px] text-slate-500">17 Specialized Modules</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {[
            {
              title: 'AI Co-Founder Studio',
              icon: Bot,
              desc: 'Multi-turn strategic advisory, prompt engineering, and risk defense.',
              tag: 'Awaiting Problem Statement'
            },
            {
              title: '17-Phase Lifecycle Engine',
              icon: Layers,
              desc: 'From ideation to pre-seed, seed, scaling, and exit milestones.',
              tag: 'Awaiting Venture Stage'
            },
            {
              title: 'Financial & Break-Even Modeler',
              icon: TrendingUp,
              desc: 'Burn rate, runway projections, and unit economics calculations.',
              tag: 'Awaiting Business Model'
            },
            {
              title: 'Idea Validation Scorecard',
              icon: ShieldCheck,
              desc: 'Comprehensive feasibility score, market viability, and risk audit.',
              tag: 'Awaiting Concept Input'
            },
            {
              title: 'Tech Stack & Architecture',
              icon: Cpu,
              desc: 'Recommended frontend, backend, cloud infra, and database stack.',
              tag: 'Awaiting Industry Vertical'
            },
            {
              title: 'Pitch Deck & Academic Slides',
              icon: Sparkles,
              desc: '17-slide investor and presentation deck generated with citations.',
              tag: 'Awaiting Project Name'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl border border-dashed border-slate-800 bg-slate-900/40 relative overflow-hidden group hover:border-slate-700 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="p-2 rounded-xl bg-slate-800/80 text-slate-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/50">
                    <Lock className="w-3 h-3 text-slate-500" />
                    <span>Empty</span>
                  </span>
                </div>
                <h4 className="font-bold text-white text-xs mt-3">{item.title}</h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                <div className="mt-3 pt-2.5 border-t border-slate-800/60 text-[10px] text-indigo-400 font-mono">
                  → {item.tag}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
