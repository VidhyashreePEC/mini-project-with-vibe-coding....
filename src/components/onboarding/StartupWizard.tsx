import React, { useState } from 'react';
import { useStartup } from '../../context/StartupContext';
import { INITIAL_17_PHASES } from '../../lib/data/sampleStartup';
import { X, Sparkles, ArrowRight, ArrowLeft, CheckCircle2, Factory, UserCheck, Layers } from 'lucide-react';

export const StartupWizard: React.FC = () => {
  const { isWizardOpen, setIsWizardOpen, initializeProjectFromIntake, user } = useStartup();
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form State
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [industry, setIndustry] = useState('CleanTech & Commercial EV Logistics');
  const [businessType, setBusinessType] = useState('B2B SaaS & Fleet IoT');
  const [country, setCountry] = useState(user.country || 'India');
  const [targetMarket, setTargetMarket] = useState('Commercial Fleet Operators & Logistics Providers');
  const [problemStatement, setProblemStatement] = useState('');
  const [proposedSolution, setProposedSolution] = useState('');
  const [uvpInnovation, setUvpInnovation] = useState('');
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [isSoloFounder, setIsSoloFounder] = useState(false);
  const [isHardwareMode, setIsHardwareMode] = useState(false);
  const [founderName, setFounderName] = useState(user.fullName || 'Founder');
  const [coFoundersInput, setCoFoundersInput] = useState('');

  if (!isWizardOpen) return null;

  const handleFinish = () => {
    const coFounders = coFoundersInput
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    initializeProjectFromIntake({
      name: name || 'My Next-Gen Startup',
      tagline: tagline || 'AI-Powered enterprise solution',
      industry,
      businessType,
      country,
      targetMarket,
      problemStatement: problemStatement || 'High manual friction and unoptimized operational expenditure across target sector.',
      proposedSolution: proposedSolution || 'Intelligent autonomous cloud platform automating end-to-end workflows with measurable ROI.',
      uvpInnovation: uvpInnovation || 'Sub-second real-time inference delivering 40% cost reduction.',
      currentPhaseIndex,
      isSoloFounder,
      isHardwareMode,
      founderName: founderName || 'Founder',
      coFounders
    });

    setIsWizardOpen(false);
    setStep(1);
  };

  const industries = [
    'CleanTech & Commercial EV Logistics',
    'AI & Enterprise Software (B2B SaaS)',
    'AgriTech & Smart Farming Robotics',
    'HealthTech & Medical Devices',
    'FinTech & Micro-Lending Platforms',
    'EdTech & Vernacular Learning',
    'E-Commerce & Smart Logistics'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-8 text-slate-100 my-8">
        <button
          onClick={() => setIsWizardOpen(false)}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Progress Stepper */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
            <span className={step >= 1 ? 'text-indigo-400' : ''}>1. Venture Concept</span>
            <span className={step >= 2 ? 'text-indigo-400' : ''}>2. 17-Phase Stage Picker</span>
            <span className={step >= 3 ? 'text-indigo-400' : ''}>3. Operational Engine</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden flex">
            <div
              className="h-full bg-indigo-500 transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* STEP 1: Basic Concept */}
        {step === 1 && (
          <div className="space-y-4 text-xs">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Step 1: Startup Concept & Core Value Proposition</span>
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">Tell InnovAI About Your Startup Idea</h2>
              <p className="text-slate-400">Our AI Co-Founder will evaluate market viability, TAM, and technical feasibility.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Startup / Project Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. EcoFleet AI or AgriScan"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-medium mb-1">Industry Vertical</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                >
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">One-Line Elevator Tagline *</label>
              <input
                type="text"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                placeholder="e.g. Sub-second battery impedance telemetry predicting EV failure 48 hrs in advance"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Business Model Type</label>
                <input
                  type="text"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  placeholder="e.g. B2B SaaS, Hardware-Enabled SaaS, Marketplace"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-medium mb-1">Target Market / Geography</label>
                <input
                  type="text"
                  value={targetMarket}
                  onChange={(e) => setTargetMarket(e.target.value)}
                  placeholder="e.g. Tier-1 Delivery Fleets across South Asia"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">The Critical Problem You Are Solving *</label>
              <textarea
                rows={2}
                value={problemStatement}
                onChange={(e) => setProblemStatement(e.target.value)}
                placeholder="Describe the painful customer problem, existing friction, and financial costs of inaction..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">Your Proposed Solution & Innovation *</label>
              <textarea
                rows={2}
                value={proposedSolution}
                onChange={(e) => setProposedSolution(e.target.value)}
                placeholder="How does your technology or business solve this problem 5x faster, cheaper, or safer?"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center gap-2"
              >
                <span>Next: Lifecycle Stage</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: 17-Phase Stage Picker */}
        {step === 2 && (
          <div className="space-y-4 text-xs">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 font-semibold mb-1">
                <Layers className="w-3.5 h-3.5" />
                <span>Step 2: 17-Phase Venture Lifecycle Selection</span>
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">Select Current Development Milestone</h2>
              <p className="text-slate-400">InnovAI Hub will configure tailored tasks, risk warnings, and valuation metrics for this stage.</p>
            </div>

            <div className="max-h-72 overflow-y-auto space-y-1.5 pr-1 border border-slate-800 rounded-xl p-2 bg-slate-950/60">
              {INITIAL_17_PHASES.map((p, idx) => (
                <div
                  key={p.id}
                  onClick={() => setCurrentPhaseIndex(idx)}
                  className={`p-2.5 rounded-lg border cursor-pointer transition-all flex items-center justify-between ${
                    currentPhaseIndex === idx
                      ? 'bg-indigo-600/20 border-indigo-500 text-white font-medium shadow-sm'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-[10px] text-slate-400">{p.summary}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 font-mono">~{p.estimatedWeeks} wks</span>
                    {currentPhaseIndex === idx && (
                      <span className="ml-2 text-indigo-400 font-bold">Selected</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center gap-2"
              >
                <span>Next: Operations & Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Operational Engine & Team */}
        {step === 3 && (
          <div className="space-y-4 text-xs">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 font-semibold mb-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Step 3: Operational Mode & Team Architecture</span>
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">Configure Your Execution Engine</h2>
              <p className="text-slate-400">Activate specialized modules based on your venture requirements.</p>
            </div>

            {/* Solo Founder Mode Toggle */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-white">Enable Solo Founder Mode</div>
                  <div className="text-[11px] text-slate-400">
                    Generates a solo execution roadmap, build-vs-outsource recommendations, and co-founder qualification checklist.
                  </div>
                </div>
              </div>
              <input
                type="checkbox"
                checked={isSoloFounder}
                onChange={(e) => setIsSoloFounder(e.target.checked)}
                className="w-5 h-5 rounded border-slate-800 bg-slate-900 text-indigo-600 focus:ring-0 cursor-pointer"
              />
            </div>

            {/* Hardware & Physical Mode Toggle */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Factory className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-white">Enable Hardware & Factory Ops Mode</div>
                  <div className="text-[11px] text-slate-400">
                    Includes Bill of Materials (BOM), manufacturing machinery, factory floor rent, and unit manufacturing cost calculations.
                  </div>
                </div>
              </div>
              <input
                type="checkbox"
                checked={isHardwareMode}
                onChange={(e) => setIsHardwareMode(e.target.checked)}
                className="w-5 h-5 rounded border-slate-800 bg-slate-900 text-indigo-600 focus:ring-0 cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Lead Founder Name</label>
                <input
                  type="text"
                  value={founderName}
                  onChange={(e) => setFounderName(e.target.value)}
                  placeholder="e.g. Vidhyashree L.G."
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-medium mb-1">Co-Founders (comma-separated)</label>
                <input
                  type="text"
                  value={coFoundersInput}
                  onChange={(e) => setCoFoundersInput(e.target.value)}
                  placeholder="e.g. Dr. Raman (CTO), Priya (Sales)"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="flex justify-between pt-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                type="button"
                onClick={handleFinish}
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/30"
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch Venture in Command Center</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
