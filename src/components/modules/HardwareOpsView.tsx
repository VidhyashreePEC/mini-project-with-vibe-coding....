import React from 'react';
import { useStartup } from '../../context/StartupContext';
import { formatCurrency } from '../../lib/currency/currencies';
import { Factory, Wrench, Users, DollarSign, Package, CheckCircle2 } from 'lucide-react';

export const HardwareOpsView: React.FC = () => {
  const { startup, currency } = useStartup();
  const hw = startup.hardwareOps;

  const c = (amt: number, compact = false) => formatCurrency(amt, currency, { compact });

  const totalBomCost = hw.rawMaterials.reduce((acc, curr) => acc + (curr.unitCost * curr.quantity), 0);
  const totalMachineryCost = hw.machinery.reduce((acc, curr) => acc + curr.purchaseCost, 0);
  const monthlyMachineryMaintenance = hw.machinery.reduce((acc, curr) => acc + curr.monthlyMaintenance, 0);
  const monthlyWorkforceCost = hw.workforceHeadcount * hw.avgWorkerSalaryMonthly;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Factory className="w-4 h-4" />
            <span>Hardware & Factory Operations Planner</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Hardware BOM & Manufacturing Economics
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Component Bill of Materials (BOM), surface-mount machinery, workforce headcount, and unit manufacturing costs.
          </p>
        </div>

        <div className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold flex items-center gap-2 self-start sm:self-auto font-mono">
          <span>Unit Mfg Cost: {c(hw.unitManufacturingCost)}</span>
        </div>
      </div>

      {/* 4 Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-[10px] uppercase font-bold text-slate-400">Total Raw BOM Cost</span>
          <div className="text-xl font-bold font-mono text-white mt-1">{c(totalBomCost)}</div>
          <p className="text-[10px] text-slate-400 mt-1">7 key automotive components</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-[10px] uppercase font-bold text-slate-400">Monthly Workforce</span>
          <div className="text-xl font-bold font-mono text-indigo-400 mt-1">{c(monthlyWorkforceCost)}</div>
          <p className="text-[10px] text-slate-400 mt-1">{hw.workforceHeadcount} technicians @ {c(hw.avgWorkerSalaryMonthly)}</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-[10px] uppercase font-bold text-slate-400">Monthly Factory Rent</span>
          <div className="text-xl font-bold font-mono text-amber-400 mt-1">{c(hw.factoryRentMonthly)}</div>
          <p className="text-[10px] text-slate-400 mt-1">+ {c(hw.utilitiesMonthly)} monthly utilities</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-[10px] uppercase font-bold text-slate-400">Monthly Production Cap</span>
          <div className="text-xl font-bold font-mono text-emerald-400 mt-1">{hw.monthlyProductionCapacity} Units</div>
          <p className="text-[10px] text-slate-400 mt-1">Single 8-hour shift in Pune</p>
        </div>
      </div>

      {/* Bill of Materials (BOM) Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6 shadow-xl space-y-3 text-xs">
        <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Package className="w-4 h-4 text-emerald-400" />
          <span>Component Bill of Materials (BOM)</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 text-[10px] uppercase font-mono">
                <th className="py-2 px-3">Component Name</th>
                <th className="py-2 px-3">Technical Specification</th>
                <th className="py-2 px-3">Qty</th>
                <th className="py-2 px-3">Unit Cost</th>
                <th className="py-2 px-3">Approved Supplier</th>
                <th className="py-2 px-3">Lead Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/70 text-slate-300 text-[11px]">
              {hw.rawMaterials.map((item) => (
                <tr key={item.id} className="hover:bg-slate-850/50">
                  <td className="py-2.5 px-3 font-semibold text-white">{item.component}</td>
                  <td className="py-2.5 px-3 text-slate-400">{item.spec}</td>
                  <td className="py-2.5 px-3 font-mono">{item.quantity}</td>
                  <td className="py-2.5 px-3 font-mono text-emerald-400 font-semibold">{c(item.unitCost)}</td>
                  <td className="py-2.5 px-3 text-indigo-300">{item.supplier}</td>
                  <td className="py-2.5 px-3 font-mono text-slate-400">{item.leadTimeDays} Days</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Manufacturing Machinery & Tooling */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6 shadow-xl space-y-3 text-xs">
        <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Wrench className="w-4 h-4 text-amber-400" />
          <span>Production Machinery & Calibration Rigs</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {hw.machinery.map((m) => (
            <div key={m.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-white text-xs mb-1">{m.name}</h3>
                <p className="text-[11px] text-slate-400 mb-3">{m.purpose}</p>
              </div>
              <div className="pt-2 border-t border-slate-850 space-y-1 font-mono text-[11px]">
                <div className="flex justify-between text-slate-300">
                  <span>Capex Cost:</span>
                  <span className="font-semibold text-white">{c(m.purchaseCost)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Maint:</span>
                  <span>{c(m.monthlyMaintenance)}/mo</span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span>Capacity:</span>
                  <span>{m.capacityPerMonth} units/mo</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
