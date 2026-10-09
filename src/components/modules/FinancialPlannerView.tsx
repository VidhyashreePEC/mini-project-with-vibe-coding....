import React from 'react';
import { useStartup } from '../../context/StartupContext';
import { formatCurrency } from '../../lib/currency/currencies';
import { TrendingUp, Flame, Calendar, DollarSign, Wallet } from 'lucide-react';

export const FinancialPlannerView: React.FC = () => {
  const { startup, currency } = useStartup();

  const c = (amt: number, compact = true) => formatCurrency(amt, currency, { compact });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <TrendingUp className="w-4 h-4" />
            <span>Module 7: Financial Modeler & Projections</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Financial Planner & 5-Year Forecasts
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Burn rate diagnostics, runway modeling, and multi-year P&L forecasts.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <div className="px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
            <span>Runway: </span>
            <strong className="text-amber-400">{startup.runwayMonths} Mo</strong>
          </div>
        </div>
      </div>

      {/* Burn Rate & Runway Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
          <div className="flex items-center gap-2 text-rose-400 font-bold uppercase text-[10px] tracking-wider mb-1">
            <Flame className="w-4 h-4" />
            <span>Monthly Cash Burn Rate</span>
          </div>
          <div className="text-2xl font-bold font-mono text-white mt-1">
            {c(startup.monthlyBurnRate, false)}
          </div>
          <p className="text-[11px] text-slate-400 mt-2">
            Salaries (₹2.35L), cloud licenses (₹45k), lab testing & office overhead.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
          <div className="flex items-center gap-2 text-amber-400 font-bold uppercase text-[10px] tracking-wider mb-1">
            <Calendar className="w-4 h-4" />
            <span>Available Cash Runway</span>
          </div>
          <div className="text-2xl font-bold font-mono text-amber-400 mt-1">
            {startup.runwayMonths} Months
          </div>
          <p className="text-[11px] text-slate-400 mt-2">
            Safe runway to reach Phase 12 (Go-To-Market) without emergency bridge financing.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
          <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase text-[10px] tracking-wider mb-1">
            <Wallet className="w-4 h-4" />
            <span>Total Capital Injected</span>
          </div>
          <div className="text-2xl font-bold font-mono text-emerald-400 mt-1">
            {c(startup.founderCapital + startup.fundingReceived, false)}
          </div>
          <p className="text-[11px] text-slate-400 mt-2">
            Founder capital ({c(startup.founderCapital)}) + grants & angel ({c(startup.fundingReceived)}).
          </p>
        </div>
      </div>

      {/* 5-Year Multi-Year Financial Forecast Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6 shadow-xl space-y-4 text-xs">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span>5-Year Forward-Looking Income Statement (P&L)</span>
          </h2>
          <span className="text-[10px] text-slate-400 font-mono">Currency: {startup.currency}</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 text-[10px] uppercase font-mono">
                <th className="py-2.5 px-3">Period</th>
                <th className="py-2.5 px-3">Projected Revenue</th>
                <th className="py-2.5 px-3">Cost of Goods Sold (COGS)</th>
                <th className="py-2.5 px-3">Gross Profit</th>
                <th className="py-2.5 px-3">Operating Expenses</th>
                <th className="py-2.5 px-3">Net EBITDA</th>
                <th className="py-2.5 px-3">Paid Accounts</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/70 text-slate-300 text-[11px] font-mono">
              {startup.financialForecasts.map((f) => {
                const isPositive = f.netProfit >= 0;
                return (
                  <tr key={f.year} className="hover:bg-slate-850/50">
                    <td className="py-3 px-3 font-bold text-white">Year {f.year}</td>
                    <td className="py-3 px-3 text-indigo-300 font-semibold">{c(f.revenue, false)}</td>
                    <td className="py-3 px-3 text-slate-400">{c(f.costOfGoodsSold, false)}</td>
                    <td className="py-3 px-3 text-slate-200">{c(f.grossProfit, false)}</td>
                    <td className="py-3 px-3 text-slate-400">{c(f.operatingExpenses, false)}</td>
                    <td className={`py-3 px-3 font-bold ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {c(f.netProfit, false)}
                    </td>
                    <td className="py-3 px-3 text-slate-300">{f.customerCount.toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
