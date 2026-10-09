import React, { useState } from 'react';
import { useStartup } from '../../context/StartupContext';
import { FileText, Save, Sparkles, CheckCircle2, Factory, UserCheck } from 'lucide-react';

export const StartupProfileView: React.FC = () => {
  const { startup, updateStartup } = useStartup();
  const [name, setName] = useState(startup.name);
  const [tagline, setTagline] = useState(startup.tagline);
  const [industry, setIndustry] = useState(startup.industry);
  const [businessType, setBusinessType] = useState(startup.businessType);
  const [country, setCountry] = useState(startup.country);
  const [targetMarket, setTargetMarket] = useState(startup.targetMarket);
  const [problemStatement, setProblemStatement] = useState(startup.problemStatement);
  const [currentSolution, setCurrentSolution] = useState(startup.currentSolution);
  const [proposedSolution, setProposedSolution] = useState(startup.proposedSolution);
  const [uvpInnovation, setUvpInnovation] = useState(startup.uvpInnovation);
  const [isSoloFounder, setIsSoloFounder] = useState(startup.isSoloFounder);
  const [isHardwareMode, setIsHardwareMode] = useState(startup.isHardwareMode);
  const [savedNote, setSavedNote] = useState('');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateStartup({
      name,
      tagline,
      industry,
      businessType,
      country,
      targetMarket,
      problemStatement,
      currentSolution,
      proposedSolution,
      uvpInnovation,
      isSoloFounder,
      isHardwareMode
    });
    setSavedNote('Startup profile and core parameters saved successfully!');
    setTimeout(() => setSavedNote(''), 2500);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <FileText className="w-4 h-4" />
            <span>Module 2: Startup Idea Input & Blueprint Formulation</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Startup Profile & Blueprint Architecture
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Configure venture fundamentals, industry classification, and problem-solution definitions.
          </p>
        </div>
      </div>

      {savedNote && (
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{savedNote}</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-5 text-xs">
        {/* Core Identity */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">
            1. Venture Identity & Classification
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 font-medium mb-1">Venture Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-medium mb-1">Industry Domain</label>
              <input
                type="text"
                required
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">Elevator Tagline & Value Prop</label>
            <input
              type="text"
              required
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-slate-300 font-medium mb-1">Business Model Type</label>
              <input
                type="text"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-medium mb-1">Operating Country</label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-medium mb-1">Target Market Segment</label>
              <input
                type="text"
                value={targetMarket}
                onChange={(e) => setTargetMarket(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Mode Toggles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-purple-400" />
                <span className="font-semibold text-slate-200">Solo Founder Mode</span>
              </div>
              <input
                type="checkbox"
                checked={isSoloFounder}
                onChange={(e) => setIsSoloFounder(e.target.checked)}
                className="w-4 h-4 rounded text-indigo-600 bg-slate-900 border-slate-700"
              />
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Factory className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-slate-200">Hardware & Factory Ops Mode</span>
              </div>
              <input
                type="checkbox"
                checked={isHardwareMode}
                onChange={(e) => setIsHardwareMode(e.target.checked)}
                className="w-4 h-4 rounded text-indigo-600 bg-slate-900 border-slate-700"
              />
            </div>
          </div>
        </div>

        {/* Problem & Solution Deep Dive */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">
            2. Problem & Solution Formulation
          </h2>

          <div>
            <label className="block text-slate-300 font-medium mb-1">Customer Problem Statement</label>
            <textarea
              rows={3}
              value={problemStatement}
              onChange={(e) => setProblemStatement(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">Current Ineffective Solutions / Alternatives</label>
            <textarea
              rows={2}
              value={currentSolution}
              onChange={(e) => setCurrentSolution(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">Proposed Innovation & Core Solution</label>
            <textarea
              rows={3}
              value={proposedSolution}
              onChange={(e) => setProposedSolution(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">Unique Value Proposition (UVP) & Defensible Moat</label>
            <textarea
              rows={2}
              value={uvpInnovation}
              onChange={(e) => setUvpInnovation(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-colors flex items-center gap-2 shadow-md shadow-indigo-600/30"
          >
            <Save className="w-4 h-4" />
            <span>Update Venture Parameters</span>
          </button>
        </div>
      </form>
    </div>
  );
};
