import React, { useState } from 'react';
import { useStartup } from '../../context/StartupContext';
import { formatCurrency } from '../../lib/currency/currencies';
import { X, Sliders, TrendingUp, TrendingDown, RefreshCw, Check } from 'lucide-react';

export const ScenarioSimulatorModal: React.FC = () => {
  const { isScenarioDrawerOpen, setIsScenarioDrawerOpen, startup, currency, updateStartup } = useStartup();
  const [activeScenario, setActiveScenario] = useState<'best' | 'expected' | 'worst'>(startup.activeScenario);
  
  // Custom slider values
  const [growthRate, setGrowthRate] = useState(startup.scenarioParams[activeScenario].monthlyGrowthRatePct);
  const [churnRate, setChurnRate] = useState(startup.scenarioParams[activeScenario].churnRatePct);
  const [priceMultiplier, setPriceMultiplier] = useState(startup.scenarioParams[activeScenario].unitPriceMultiplier);

  if (!isScenarioDrawerOpen) return null;

  const currentParams = startup.scenarioParams[activeScenario];

  // Dynamic calculations based on sliders
  const simulatedRunway = Math.round(startup.runwayMonths * (1 / (1 + (churnRate - 1.5) * 0.1)));
  const simulatedValuation = Math.round(startup.valuationEstimate * (growthRate / 15) * priceMultiplier);

  const handleApplyScenario = () => {
    updateStartup({
      activeScenario,
      valuationEstimate: simulatedValuation,
      runwayMonths: Math.max(3, simulatedRunway)
    });
    setIsScenarioDrawerOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-6 text-slate-100">
        <button
          onClick={() => setIsScenarioDrawerOpen(false)}
          className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-2">
          <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">Venture Scenario Simulator</h2>
            <p className="text-xs text-slate-400">Model the impact of customer churn, pricing power, and growth on runway and valuation.</p>
          </div>
        </div>

        {/* 3 Scenario Presets */}
        <div className="grid grid-cols-3 gap-3 my-5 text-xs">
          {(['best', 'expected', 'worst'] as const).map((sc) => {
            const isSelected = activeScenario === sc;
            const p = startup.scenarioParams[sc];
            return (
              <button
                key={sc}
                onClick={() => {
                  setActiveScenario(sc);
                  setGrowthRate(p.monthlyGrowthRatePct);
                  setChurnRate(p.churnRatePct);
                  setPriceMultiplier(p.unitPriceMultiplier);
                }}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-indigo-600/20 border-indigo-500 text-white font-medium shadow-md shadow-indigo-500/10'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold capitalize">{sc} Case</span>
                  {sc === 'best' ? (
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  ) : sc === 'worst' ? (
                    <TrendingDown className="w-3.5 h-3.5 text-rose-400" />
                  ) : (
                    <span className="text-[10px] text-indigo-400 font-mono">Base</span>
                  )}
                </div>
                <div className="text-[11px] text-slate-300 font-medium">{p.label}</div>
                <div className="mt-2 text-[10px] font-mono text-slate-400 space-y-0.5">
                  <div>Growth: +{p.monthlyGrowthRatePct}%/mo</div>
                  <div>Runway: {p.runwayMonths} Mo</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Sliders */}
        <div className="space-y-4 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs">
          <div>
            <div className="flex justify-between text-slate-300 mb-1.5 font-medium">
              <span>Monthly Revenue Growth Rate</span>
              <span className="font-mono text-indigo-400 font-bold">{growthRate}% / month</span>
            </div>
            <input
              type="range"
              min={2}
              max={45}
              value={growthRate}
              onChange={(e) => setGrowthRate(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>Conservative (2%)</span>
              <span>Hyper-growth (45%)</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-slate-300 mb-1.5 font-medium">
              <span>Monthly Customer Churn Rate</span>
              <span className="font-mono text-indigo-400 font-bold">{churnRate}% / month</span>
            </div>
            <input
              type="range"
              min={0.5}
              max={6.0}
              step={0.1}
              value={churnRate}
              onChange={(e) => setChurnRate(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>Enterprise Stickiness (0.5%)</span>
              <span>High Churn (6.0%)</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-slate-300 mb-1.5 font-medium">
              <span>Pricing Power Multiplier</span>
              <span className="font-mono text-indigo-400 font-bold">{priceMultiplier.toFixed(2)}x Price</span>
            </div>
            <input
              type="range"
              min={0.7}
              max={1.6}
              step={0.05}
              value={priceMultiplier}
              onChange={(e) => setPriceMultiplier(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>Discounted (-30%)</span>
              <span>Premium Tier (+60%)</span>
            </div>
          </div>
        </div>

        {/* Calculated Impacts */}
        <div className="grid grid-cols-2 gap-3 my-4">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
            <span className="text-[11px] text-slate-400 font-medium">Simulated Cash Runway</span>
            <div className="text-xl font-bold font-mono text-white mt-1">
              {simulatedRunway} <span className="text-xs text-slate-400">Months</span>
            </div>
            <div className="text-[10px] text-slate-500 mt-1">
              Baseline: {startup.runwayMonths} Months
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
            <span className="text-[11px] text-slate-400 font-medium">Simulated Valuation Estimate</span>
            <div className="text-xl font-bold font-mono text-emerald-400 mt-1">
              {formatCurrency(simulatedValuation, currency, { compact: true })}
            </div>
            <div className="text-[10px] text-slate-500 mt-1">
              Baseline: {formatCurrency(startup.valuationEstimate, currency, { compact: true })}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2.5 pt-2 text-xs">
          <button
            onClick={() => setIsScenarioDrawerOpen(false)}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleApplyScenario}
            className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors flex items-center gap-1.5 shadow-md shadow-indigo-600/30"
          >
            <Check className="w-4 h-4" />
            <span>Apply to Active Model</span>
          </button>
        </div>
      </div>
    </div>
  );
};
