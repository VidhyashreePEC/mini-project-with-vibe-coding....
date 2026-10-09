import React, { useState } from 'react';
import { useStartup } from '../../context/StartupContext';
import { formatCurrency } from '../../lib/currency/currencies';
import { Calculator, DollarSign, TrendingUp, CheckCircle2 } from 'lucide-react';

export const ProfitBreakEvenView: React.FC = () => {
  const { startup, currency, updateStartup } = useStartup();
  const b = startup.breakEvenModel;

  const [unitSellingPrice, setUnitSellingPrice] = useState(b.unitSellingPrice);
  const [unitVariableCost, setUnitVariableCost] = useState(b.unitVariableCost);
  const [fixedMonthlyCost, setFixedMonthlyCost] = useState(b.fixedMonthlyCost);

  const contributionMargin = Math.max(1, unitSellingPrice - unitVariableCost);
  const breakEvenUnits = Math.ceil((fixedMonthlyCost * 12) / contributionMargin);
  const breakEvenMonthlyRev = Math.round(breakEvenUnits * (unitSellingPrice / 12));

  const c = (amt: number) => formatCurrency(amt, currency, { compact: false });

  const handleApply = () => {
    updateStartup({
      breakEvenUnits,
      breakEvenRevenueMonthly: breakEvenMonthlyRev,
      breakEvenModel: {
        unitSellingPrice,
        unitVariableCost,
        fixedMonthlyCost,
        contributionMarginPerUnit: contributionMargin,
        breakEvenUnitsMonthly: Math.ceil(breakEvenUnits / 12),
        breakEvenRevenueMonthly: breakEvenMonthlyRev
      }
    });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4" />
            <span>Module 8: Unit Economics & Break-Even Modeler</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Profit & Break-Even Calculator
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Interactive calculation of contribution margin, break-even unit threshold, and annual payback timeline.
          </p>
        </div>

        <button
          onClick={handleApply}
          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-md shadow-indigo-600/30 self-start sm:self-auto"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>Save Calculated Model</span>
        </button>
      </div>

      {/* Break-Even Results Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
          <span className="text-[10px] uppercase font-bold text-slate-400">Contribution Margin / Unit</span>
          <div className="text-2xl font-bold font-mono text-emerald-400 mt-1">{c(contributionMargin)}</div>
          <p className="text-[11px] text-slate-400 mt-1">
            Selling Price ({c(unitSellingPrice)}) - Variable Cost ({c(unitVariableCost)})
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
          <span className="text-[10px] uppercase font-bold text-slate-400">Annual Break-Even Units</span>
          <div className="text-2xl font-bold font-mono text-white mt-1">{breakEvenUnits} Units / Yr</div>
          <p className="text-[11px] text-slate-400 mt-1">
            Equals approx {Math.ceil(breakEvenUnits / 12)} new paid fleet units per month
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
          <span className="text-[10px] uppercase font-bold text-slate-400">Monthly Revenue at Break-Even</span>
          <div className="text-2xl font-bold font-mono text-indigo-400 mt-1">{c(breakEvenMonthlyRev)}</div>
          <p className="text-[11px] text-slate-400 mt-1">
            Covers monthly fixed burn rate of {c(fixedMonthlyCost)}
          </p>
        </div>
      </div>

      {/* Sliders Area */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6 shadow-xl space-y-5 text-xs">
        <h2 className="text-sm font-bold text-white uppercase tracking-wider">
          Unit Cost & Pricing Sensitivity Sliders
        </h2>

        <div>
          <div className="flex justify-between text-slate-300 mb-1.5 font-medium">
            <span>Annualized Unit Selling Price / SaaS Contract</span>
            <span className="font-mono text-indigo-400 font-bold">{c(unitSellingPrice)}</span>
          </div>
          <input
            type="range"
            min={10000}
            max={60000}
            step={500}
            value={unitSellingPrice}
            onChange={(e) => setUnitSellingPrice(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-slate-300 mb-1.5 font-medium">
            <span>Annualized Unit Variable Cost (Server, Warranty, Support)</span>
            <span className="font-mono text-amber-400 font-bold">{c(unitVariableCost)}</span>
          </div>
          <input
            type="range"
            min={2000}
            max={20000}
            step={250}
            value={unitVariableCost}
            onChange={(e) => setUnitVariableCost(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-slate-300 mb-1.5 font-medium">
            <span>Fixed Monthly Operating Overhead (Salaries, Rent, Cloud)</span>
            <span className="font-mono text-rose-400 font-bold">{c(fixedMonthlyCost)} / mo</span>
          </div>
          <input
            type="range"
            min={100000}
            max={900000}
            step={10000}
            value={fixedMonthlyCost}
            onChange={(e) => setFixedMonthlyCost(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
        </div>
      </div>
    </div>
  );
};
