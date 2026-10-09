import React, { useState } from 'react';
import { useStartup } from '../../context/StartupContext';
import { formatCurrency } from '../../lib/currency/currencies';
import {
  CalendarCheck,
  Target,
  Users2,
  Swords,
  Shuffle,
  Lightbulb,
  UserCheck,
  Users,
  Receipt,
  CreditCard,
  Coins,
  Landmark,
  ShieldAlert,
  FolderArchive,
  Settings,
  Plus,
  Trash2,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Percent,
  Calculator,
  RefreshCw
} from 'lucide-react';

/* =========================================================================
   1. Tasks & Milestones Timeline View
   ========================================================================= */
export const TimelineMilestonesView: React.FC = () => {
  const { startup } = useStartup();
  const [tasks, setTasks] = useState([
    { id: 'ts-1', title: 'STM32 MCU & CAN transceiver Rev-B PCB fabrication in Pune', phase: 'Gate 8: MVP Prototype', owner: 'Hardware CTO', completed: true, deadline: 'Completed' },
    { id: 'ts-2', title: 'MQTT Telematics ingestion service unit testing under 1,000 req/sec', phase: 'Gate 8: MVP Prototype', owner: 'Vidhyashree L.G.', completed: true, deadline: 'Completed' },
    { id: 'ts-3', title: 'Vehicle in-cabin thermal chamber stress testing at 45°C ambient heat', phase: 'Gate 8: MVP Prototype', owner: 'Priya & Lab Team', completed: false, deadline: 'Due in 5 Days' },
    { id: 'ts-4', title: 'Secure 3rd signed non-binding LOI with logistics courier fleet in Chennai', phase: 'Gate 9: Pilot Fleet', owner: 'Priya Sharma', completed: false, deadline: 'Due in 12 Days' },
    { id: 'ts-5', title: 'ARAI / ICAT AIS-140 compliance pre-certification dossier submission', phase: 'Gate 11: Compliance', owner: 'Compliance Lead', completed: false, deadline: 'Next Month' },
  ]);
  const [newTitle, setNewTitle] = useState('');
  const [newOwner, setNewOwner] = useState('');

  const handleToggle = (id: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    setTasks(prev => [
      ...prev,
      {
        id: `ts-${Date.now()}`,
        title: newTitle.trim(),
        phase: `Gate ${startup.currentPhaseIndex + 1}: Execution`,
        owner: newOwner.trim() || 'Core Team',
        completed: false,
        deadline: 'Upcoming Sprint'
      }
    ]);
    setNewTitle('');
    setNewOwner('');
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const progressPct = Math.round((completedCount / tasks.length) * 100);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <CalendarCheck className="w-4 h-4" />
            <span>Interactive Timeline & Milestone Gates</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Tasks & Milestones Tracker</h1>
          <p className="text-xs text-slate-400 mt-0.5">Chronological roadmapping with deadline alerts and dependency tracking.</p>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-right self-start sm:self-auto font-mono text-xs">
          <div className="text-[10px] text-slate-400 uppercase font-bold">Sprint Progress</div>
          <div className="text-xl font-bold text-emerald-400">{completedCount} / {tasks.length} Completed ({progressPct}%)</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-300"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Add New Milestone Task Form */}
      <form onSubmit={handleAddTask} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-2.5 text-xs">
        <input
          type="text"
          required
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="+ Add new execution task or milestone deliverable..."
          className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
        />
        <input
          type="text"
          value={newOwner}
          onChange={(e) => setNewOwner(e.target.value)}
          placeholder="Owner (e.g. Lead Engineer)"
          className="sm:w-44 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-indigo-600/20"
        >
          <Plus className="w-4 h-4" />
          <span>Add Task</span>
        </button>
      </form>

      {/* Tasks List */}
      <div className="space-y-2.5 text-xs">
        {tasks.map((task) => (
          <div
            key={task.id}
            onClick={() => handleToggle(task.id)}
            className={`p-4 rounded-xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
              task.completed
                ? 'bg-slate-950/60 border-slate-850 opacity-80'
                : 'bg-slate-900 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => {}}
                className="w-4 h-4 rounded border-slate-700 bg-slate-950 text-indigo-600 focus:ring-0 cursor-pointer"
              />
              <div>
                <span className={`font-medium ${task.completed ? 'line-through text-slate-500' : 'text-white'}`}>
                  {task.title}
                </span>
                <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                  <span className="text-indigo-400 font-mono">{task.phase}</span>
                  <span>·</span>
                  <span>Owner: {task.owner}</span>
                </div>
              </div>
            </div>

            <span className={`text-[10px] px-2.5 py-0.5 rounded font-mono font-medium flex-shrink-0 ${
              task.completed
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
            }`}>
              {task.deadline}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* =========================================================================
   2. Problem & Solution AI View
   ========================================================================= */
export const ProblemSolutionView: React.FC = () => {
  const { startup, updateStartup } = useStartup();
  const [painSeverity, setPainSeverity] = useState(8.9);
  const [jobsToBeDone, setJobsToBeDone] = useState([
    { id: 'j-1', role: 'Fleet Maintenance Director', job: 'Prevent unscheduled battery fire incidents before they reach irreversible thermal runaway', importance: 'Critical P0' },
    { id: 'j-2', role: 'EV Fleet Operations Dispatcher', job: 'Ensure 100% on-time delivery schedule without vehicle roadside stranding in traffic', importance: 'High P1' },
    { id: 'j-3', role: 'Chief Financial Officer', job: 'Extend vehicle asset amortization lifespan from 3 years to 5 years to boost ROIC', importance: 'High P1' },
  ]);
  const [saved, setSaved] = useState(false);

  const handleSaveCanvas = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Target className="w-4 h-4" />
            <span>Problem-Solution Fit Analysis</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Problem & Solution AI Architecture</h1>
          <p className="text-xs text-slate-400 mt-0.5">In-depth validation of the core customer pain severity, jobs-to-be-done, and proposed solution.</p>
        </div>

        <button
          onClick={handleSaveCanvas}
          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors self-start sm:self-auto shadow-md shadow-indigo-600/20"
        >
          {saved ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Sparkles className="w-4 h-4" />}
          <span>{saved ? 'Canvas Saved' : 'Save Fit Canvas'}</span>
        </button>
      </div>

      {/* Pain Severity Metric Slider */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-bold text-white uppercase tracking-wider text-[11px]">
            Customer Pain Severity Index
          </span>
          <span className="font-mono text-base font-bold text-rose-400">
            {painSeverity.toFixed(1)} / 10.0 ({painSeverity >= 8.5 ? 'Catastrophic Friction' : 'Severe'})
          </span>
        </div>
        <input
          type="range"
          min={5}
          max={10}
          step={0.1}
          value={painSeverity}
          onChange={(e) => setPainSeverity(Number(e.target.value))}
          className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
        />
        <div className="flex justify-between text-[10px] text-slate-400">
          <span>5.0 (Moderate Inconvenience)</span>
          <span>10.0 (Existential / Urgent Business Halting Risk)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="p-5 rounded-2xl bg-slate-900 border border-rose-500/30 space-y-3">
          <div className="font-bold text-rose-400 uppercase tracking-wider text-[11px]">
            Unsolved Problem & Financial Inefficiency
          </div>
          <p className="text-slate-300 leading-relaxed text-[11px]">{startup.problemStatement}</p>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
            <strong>Current Ineffective Workarounds:</strong> {startup.currentSolution}
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-emerald-500/30 space-y-3">
          <div className="font-bold text-emerald-400 uppercase tracking-wider text-[11px]">
            Proposed Innovation & Technological Resolution
          </div>
          <p className="text-slate-300 leading-relaxed text-[11px]">{startup.proposedSolution}</p>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-300">
            <strong>Defensible UVP Moat:</strong> {startup.uvpInnovation}
          </div>
        </div>
      </div>

      {/* Customer Jobs-To-Be-Done (JTBD) */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6 shadow-xl space-y-3 text-xs">
        <h3 className="font-bold text-white uppercase tracking-wider text-[11px]">
          Customer Jobs-To-Be-Done (JTBD) Framework
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {jobsToBeDone.map((j) => (
            <div key={j.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-indigo-400 font-bold block mb-1">{j.role}</span>
                <p className="text-[11px] text-slate-300 leading-relaxed">{j.job}</p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-850 flex justify-between items-center text-[10px]">
                <span className="text-slate-400">Priority Gate</span>
                <span className="text-emerald-400 font-mono font-semibold">{j.importance}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   3. Target Customers View
   ========================================================================= */
export const TargetCustomersView: React.FC = () => {
  const { startup } = useStartup();
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
          <Users2 className="w-4 h-4" />
          <span>Audience Archetypes & Demographics</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Customer Personas & Segments</h1>
        <p className="text-xs text-slate-400 mt-0.5">Buyer profiles, pain triggers, decision power, and acquisition channels.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        {startup.customerPersonas.map((persona) => (
          <div key={persona.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white text-sm">{persona.name}</h3>
                <span className="text-[11px] text-indigo-400 font-medium">{persona.role}</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                {persona.budgetAuthority}
              </span>
            </div>
            <p className="text-[11px] text-slate-400">{persona.demographics}</p>
            <div className="space-y-2 pt-2 border-t border-slate-800 text-[11px]">
              <div>
                <strong className="text-rose-400 block mb-1">Core Pain Points:</strong>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  {persona.painPoints.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="pt-1">
                <strong className="text-emerald-400 block mb-1">Buying Triggers:</strong>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  {persona.buyingTriggers.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* =========================================================================
   4. Competitor Matrix View
   ========================================================================= */
export const CompetitorMatrixView: React.FC = () => {
  const { startup } = useStartup();
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
          <Swords className="w-4 h-4" />
          <span>Competitive Landscape & Benchmarking</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Competitor Moat & Teardown Matrix</h1>
        <p className="text-xs text-slate-400 mt-0.5">Feature benchmarking, weaknesses analysis, and defensible unfair advantages.</p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl overflow-x-auto text-xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 text-[10px] uppercase font-mono">
              <th className="py-2.5 px-3">Competitor</th>
              <th className="py-2.5 px-3">Type</th>
              <th className="py-2.5 px-3">Market Share</th>
              <th className="py-2.5 px-3">Pricing</th>
              <th className="py-2.5 px-3">Critical Vulnerability</th>
              <th className="py-2.5 px-3">Our Defensible Moat</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/70 text-slate-300 text-[11px]">
            {startup.competitors.map((comp) => (
              <tr key={comp.id} className="hover:bg-slate-850/50">
                <td className="py-3 px-3 font-bold text-white">{comp.name}</td>
                <td className="py-3 px-3 font-mono text-slate-400">{comp.category}</td>
                <td className="py-3 px-3 font-mono text-indigo-300">{comp.marketShare}</td>
                <td className="py-3 px-3 text-slate-300">{comp.pricingStrategy}</td>
                <td className="py-3 px-3 text-rose-400">{comp.criticalWeaknesses}</td>
                <td className="py-3 px-3 text-emerald-400 font-medium">{comp.innovAiMoat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* =========================================================================
   5. Alternative Ideas View
   ========================================================================= */
export const AlternativeIdeasView: React.FC = () => {
  const { startup } = useStartup();
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
          <Shuffle className="w-4 h-4" />
          <span>Strategic Pivot Opportunities</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Alternative Ideas & Pivot Generator</h1>
        <p className="text-xs text-slate-400 mt-0.5">High-upside adjacent pivots leveraging the same core intellectual property.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        {startup.alternativeIdeas.map((alt) => (
          <div key={alt.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-bold text-slate-400 font-mono">{alt.industry}</span>
                <span className="text-[10px] px-2 py-0.5 rounded font-mono font-medium bg-indigo-500/10 text-indigo-400">
                  {alt.complexity} Complexity
                </span>
              </div>
              <h3 className="font-bold text-white text-sm mb-2">{alt.title}</h3>
              <p className="text-[11px] text-slate-300 leading-relaxed mb-3">{alt.pivotRationale}</p>
            </div>
            <div className="pt-3 border-t border-slate-800 text-[11px] space-y-1 font-mono">
              <div className="flex justify-between text-slate-400">
                <span>Setup Cost:</span>
                <span className="text-white font-semibold">{alt.estimatedCost}</span>
              </div>
              <div className="flex justify-between text-emerald-400">
                <span>Revenue Upside:</span>
                <span className="font-semibold">{alt.projectedRevenue}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* =========================================================================
   6. Explore Curated Startup Ideas
   ========================================================================= */
export const ExploreIdeasView: React.FC = () => {
  const { switchStartupPreset } = useStartup();
  const ideas = [
    { id: 'ecofleet-ai', name: 'EcoFleet AI', tag: 'CleanTech / IoT', desc: 'Sub-second battery impedance telemetry forecasting EV pack failure 48 hrs in advance.' },
    { id: 'agriscan-ai', name: 'AgriScan Drone AI', tag: 'AgriTech / Robotics', desc: 'Autonomous multispectral drone imagery generating fertilizer prescription maps.' },
    { id: 'eduspark-tutor', name: 'EduSpark AI', tag: 'EdTech / GenAI', desc: 'Vernacular multimodal code lab mentor for diploma and engineering college students.' }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
          <Lightbulb className="w-4 h-4" />
          <span>Venture Catalog & Templates</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Explore Curated Startup Blueprints</h1>
        <p className="text-xs text-slate-400 mt-0.5">Switch active venture models instantly to explore pre-configured architectures.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        {ideas.map((idea) => (
          <div key={idea.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-indigo-400 font-semibold">{idea.tag}</span>
              <h3 className="font-bold text-white text-base mt-1 mb-2">{idea.name}</h3>
              <p className="text-slate-400 text-[11px] leading-relaxed">{idea.desc}</p>
            </div>
            <button
              onClick={() => switchStartupPreset(idea.id)}
              className="mt-4 w-full py-2 rounded-xl bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-200 font-semibold text-xs transition-colors"
            >
              Load Blueprint into InnovAI
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

/* =========================================================================
   7. Solo Founder Mode View
   ========================================================================= */
export const SoloFounderView: React.FC = () => {
  const { startup } = useStartup();
  const plan = startup.soloFounderPlan;
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="rounded-2xl border border-purple-500/30 bg-slate-900 p-6">
        <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-1">
          <UserCheck className="w-4 h-4" />
          <span>1-Person Venture Acceleration</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Solo Founder Execution Engine</h1>
        <p className="text-xs text-slate-400 mt-0.5">Tailored strategy for single founders: what to code alone, what to outsource, and co-founder criteria.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <h3 className="font-bold text-emerald-400 uppercase tracking-wider text-[11px]">
            What to Build Solo (Founder Core)
          </h3>
          <ul className="space-y-2 text-slate-300">
            {plan.whatToBuildSolo.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-400">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <h3 className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">
            What to Outsource to Contract Agencies
          </h3>
          <ul className="space-y-2 text-slate-300">
            {plan.whatToOutsource.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-amber-400">⚡</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-xs space-y-3">
        <h3 className="font-bold text-indigo-400 uppercase tracking-wider text-[11px]">
          Ideal Co-Founder Qualification Criteria
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {plan.cofounderCriteria.map((c, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
              {c}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   8. Team & Compensation View
   ========================================================================= */
export const TeamBuilderView: React.FC = () => {
  const { startup, currency, updateStartup } = useStartup();
  const c = (amt: number) => formatCurrency(amt, currency, { compact: false });
  const [members, setMembers] = useState(startup.teamMembers);
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newSalary, setNewSalary] = useState('');
  const [newEquity, setNewEquity] = useState('');

  const totalMonthlyPayroll = members.reduce((acc, m) => acc + m.salaryMonthly, 0);
  const allocatedEquity = members.reduce((acc, m) => acc + m.equityPct, 0);
  const unallocatedEsop = Math.max(0, 100 - allocatedEquity);

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newRole.trim()) return;
    const newMember = {
      id: `tm-${Date.now()}`,
      name: newName.trim(),
      role: newRole.trim(),
      skills: ['Domain Engineering', 'Agile Operations'],
      salaryMonthly: Number(newSalary) || 50000,
      equityPct: Number(newEquity) || 2,
      employmentType: 'Full-time' as const,
      joinedDate: new Date().toISOString().split('T')[0]
    };
    const updated = [...members, newMember];
    setMembers(updated);
    updateStartup({ teamMembers: updated });
    setNewName('');
    setNewRole('');
    setNewSalary('');
    setNewEquity('');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Users className="w-4 h-4" />
            <span>Human Capital & Compensation</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Team Builder & Hiring Plan</h1>
          <p className="text-xs text-slate-400 mt-0.5">Founding roster, equity distribution, and milestone-tied hiring roadmap.</p>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-right self-start sm:self-auto font-mono text-xs">
          <div className="text-[10px] text-slate-400 uppercase font-bold">Monthly Payroll Burn</div>
          <div className="text-xl font-bold text-indigo-400">{c(totalMonthlyPayroll)} / mo</div>
        </div>
      </div>

      {/* Cap Table Equity Allocation Bar */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 text-xs">
        <div className="flex justify-between items-center">
          <span className="font-bold text-white uppercase tracking-wider text-[11px]">Cap Table Equity Allocation</span>
          <span className="font-mono text-slate-400 text-[11px]">
            Allocated: <strong className="text-white">{allocatedEquity}%</strong> · Available ESOP: <strong className="text-emerald-400">{unallocatedEsop}%</strong>
          </span>
        </div>

        <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden flex">
          <div className="bg-indigo-500 h-full" style={{ width: `${Math.min(100, allocatedEquity)}%` }} title="Team Allocated Equity" />
          <div className="bg-emerald-500/60 h-full" style={{ width: `${unallocatedEsop}%` }} title="ESOP / Investor Reserve Pool" />
        </div>

        <div className="flex justify-between text-[10px] text-slate-400 font-mono">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-indigo-500" /> Active Team ({allocatedEquity}%)</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500/60" /> Unallocated ESOP / Investor Reserve ({unallocatedEsop}%)</span>
        </div>
      </div>

      {/* Add New Team Member Form */}
      <form onSubmit={handleAddMember} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 grid grid-cols-1 sm:grid-cols-5 gap-2.5 text-xs">
        <input
          type="text"
          required
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Full Name (e.g. Alex Kumar)"
          className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
        />
        <input
          type="text"
          required
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          placeholder="Role (e.g. Full-Stack Lead)"
          className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
        />
        <input
          type="number"
          value={newSalary}
          onChange={(e) => setNewSalary(e.target.value)}
          placeholder={`Salary / Mo (${currency})`}
          className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-mono"
        />
        <input
          type="number"
          step="0.5"
          value={newEquity}
          onChange={(e) => setNewEquity(e.target.value)}
          placeholder="Equity % (e.g. 5)"
          className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-mono"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-indigo-600/20"
        >
          <Plus className="w-4 h-4" />
          <span>Add Member</span>
        </button>
      </form>

      {/* Active Team Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl overflow-x-auto text-xs">
        <h3 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">Active Founding & Engineering Team</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 text-[10px] uppercase font-mono">
              <th className="py-2.5 px-3">Name</th>
              <th className="py-2.5 px-3">Role</th>
              <th className="py-2.5 px-3">Core Skills</th>
              <th className="py-2.5 px-3">Monthly Salary</th>
              <th className="py-2.5 px-3">Equity Ownership</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/70 text-slate-300 text-[11px]">
            {members.map((tm) => (
              <tr key={tm.id} className="hover:bg-slate-850/50">
                <td className="py-3 px-3 font-bold text-white">{tm.name}</td>
                <td className="py-3 px-3 text-indigo-300">{tm.role}</td>
                <td className="py-3 px-3 text-slate-400">{tm.skills.join(', ')}</td>
                <td className="py-3 px-3 font-mono">{c(tm.salaryMonthly)}</td>
                <td className="py-3 px-3 font-mono text-emerald-400 font-semibold">{tm.equityPct}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl text-xs space-y-3">
        <h3 className="font-bold text-indigo-400 uppercase tracking-wider text-[11px]">Recommended Next Hires & Priorities</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {startup.recommendedHires.map((rh) => (
            <div key={rh.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-indigo-400 font-semibold">{rh.priority}</span>
                <h4 className="font-bold text-white text-xs mt-1 mb-2">{rh.role}</h4>
                <p className="text-[11px] text-slate-400 mb-2">{rh.keyResponsibilities}</p>
              </div>
              <div className="pt-2 border-t border-slate-850 text-[11px] text-slate-300">
                <strong>Budget:</strong> {rh.salaryRange}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   9. Software Licenses View
   ========================================================================= */
export const SoftwareLicensesView: React.FC = () => {
  const { startup, currency } = useStartup();
  const c = (amt: number) => formatCurrency(amt, currency, { compact: false });
  const totalMonthlyLicenses = startup.softwareLicenses.reduce((acc, curr) => acc + (curr.isPaid ? curr.monthlyCost : 0), 0);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Receipt className="w-4 h-4" />
            <span>SaaS Stack & License Budget</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Software Licenses & Cost Planner</h1>
          <p className="text-xs text-slate-400 mt-0.5">Software tooling expenditure with free open-source alternatives.</p>
        </div>
        <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 self-start sm:self-auto">
          <span>Monthly SaaS Cost: </span>
          <strong className="text-emerald-400">{c(totalMonthlyLicenses)}</strong>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl overflow-x-auto text-xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 text-[10px] uppercase font-mono">
              <th className="py-2.5 px-3">Software Tool</th>
              <th className="py-2.5 px-3">Category</th>
              <th className="py-2.5 px-3">Monthly Cost</th>
              <th className="py-2.5 px-3">Purpose in Architecture</th>
              <th className="py-2.5 px-3">Free Open-Source Alternative</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/70 text-slate-300 text-[11px]">
            {startup.softwareLicenses.map((lic) => (
              <tr key={lic.id} className="hover:bg-slate-850/50">
                <td className="py-3 px-3 font-bold text-white">{lic.name}</td>
                <td className="py-3 px-3 text-slate-400">{lic.category}</td>
                <td className="py-3 px-3 font-mono text-indigo-400 font-semibold">
                  {lic.isPaid ? c(lic.monthlyCost) : 'Free'}
                </td>
                <td className="py-3 px-3 text-slate-300">{lic.purpose}</td>
                <td className="py-3 px-3 text-emerald-400">{lic.freeAlternative}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* =========================================================================
   10. Revenue Models View
   ========================================================================= */
export const RevenueModelView: React.FC = () => {
  const { startup, currency } = useStartup();
  const c = (amt: number) => formatCurrency(amt, currency, { compact: false });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
          <CreditCard className="w-4 h-4" />
          <span>Monetization & Pricing Strategy</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Revenue Models & Pricing Tiers</h1>
        <p className="text-xs text-slate-400 mt-0.5">SaaS subscription packages, gross margins, and customer lifetime value metrics.</p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        {startup.pricingTiers.map((tier) => (
          <div key={tier.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono text-indigo-400 font-semibold mb-1">
                {tier.targetSegment}
              </div>
              <h3 className="text-base font-bold text-white">{tier.name}</h3>
              <div className="my-3 text-2xl font-extrabold font-mono text-white">
                {c(tier.priceMonthly)} <span className="text-xs font-normal text-slate-400">/ mo</span>
              </div>
              <ul className="space-y-2 text-slate-300 text-[11px]">
                {tier.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] text-slate-400 font-mono">
              Projected Customer Share: {tier.projectedCustomerSharePct}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* =========================================================================
   11. Business Valuation View
   ========================================================================= */
export const BusinessValuationView: React.FC = () => {
  const { startup, currency } = useStartup();
  const c = (amt: number, compact = false) => formatCurrency(amt, currency, { compact });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Coins className="w-4 h-4" />
            <span>Cap Table & Enterprise Worth</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Business Valuation & Net Worth Tracker</h1>
          <p className="text-xs text-slate-400 mt-0.5">Asset-adjusted revenue multiple valuation formula based on industry standard multiples.</p>
        </div>
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-right self-start sm:self-auto">
          <div className="text-[10px] text-slate-400 uppercase font-bold">Estimated Pre-Money Worth</div>
          <div className="text-3xl font-extrabold font-mono text-emerald-400">{c(startup.valuationEstimate, true)}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-slate-400 text-[10px] uppercase font-bold">Projected ARR Multiple</span>
          <div className="text-xl font-bold font-mono text-white mt-1">6.5x ARR</div>
          <p className="text-[11px] text-slate-400 mt-1">Benchmark multiple for CleanTech / Fleet IoT software</p>
        </div>
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-slate-400 text-[10px] uppercase font-bold">Liquid Balance</span>
          <div className="text-xl font-bold font-mono text-indigo-400 mt-1">{c(startup.monthlyBurnRate * startup.runwayMonths, true)}</div>
          <p className="text-[11px] text-slate-400 mt-1">Uncommitted cash reserve across accounts</p>
        </div>
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-slate-400 text-[10px] uppercase font-bold">IP & Prototype Assets</span>
          <div className="text-xl font-bold font-mono text-amber-400 mt-1">{c(startup.initialInvestment, true)}</div>
          <p className="text-[11px] text-slate-400 mt-1">Patents, PCB tooling, software codebase</p>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   12. Funding & Loan Advisor View (with EMI simulator)
   ========================================================================= */
export const FundingLoanAdvisorView: React.FC = () => {
  const { startup, currency } = useStartup();
  const c = (amt: number) => formatCurrency(amt, currency, { compact: false });
  const [loanAmount, setLoanAmount] = useState(startup.loanFundingAdvisor.bankLoan.principal);
  const [interestRate, setInterestRate] = useState(startup.loanFundingAdvisor.bankLoan.annualInterestRate);
  const [tenureMonths, setTenureMonths] = useState(startup.loanFundingAdvisor.bankLoan.tenureMonths);

  // EMI Formula
  const r = (interestRate / 12) / 100;
  const emi = Math.round((loanAmount * r * Math.pow(1 + r, tenureMonths)) / (Math.pow(1 + r, tenureMonths) - 1));

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
          <Landmark className="w-4 h-4" />
          <span>Capital Acquisition & Debt Financing</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Funding & Bank Loan Advisor</h1>
        <p className="text-xs text-slate-400 mt-0.5">Government grant schemes, VC equity dilution milestones, and interactive EMI loan calculator.</p>
      </div>

      {/* Interactive Bank Loan EMI Calculator */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-xs space-y-4">
        <h3 className="font-bold text-white uppercase tracking-wider text-[11px] flex items-center gap-2">
          <Calculator className="w-4 h-4 text-emerald-400" />
          <span>Interactive Collateral-Free MSME Loan EMI Simulator</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="text-slate-300 font-medium mb-1 block">Loan Amount ({currency})</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 font-mono text-white"
            />
          </div>
          <div>
            <label className="text-slate-300 font-medium mb-1 block">Interest Rate (% p.a.)</label>
            <input
              type="number"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 font-mono text-white"
            />
          </div>
          <div>
            <label className="text-slate-300 font-medium mb-1 block">Tenure (Months)</label>
            <input
              type="number"
              value={tenureMonths}
              onChange={(e) => setTenureMonths(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 font-mono text-white"
            />
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center font-mono">
          <span className="text-slate-300">Monthly EMI Repayment:</span>
          <span className="text-lg font-bold text-emerald-400">{c(emi)} / month</span>
        </div>
      </div>

      {/* Government Grants Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl text-xs space-y-3">
        <h3 className="font-bold text-indigo-400 uppercase tracking-wider text-[11px]">Non-Dilutive Government Grants</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {startup.loanFundingAdvisor.governmentGrants.map((g) => (
            <div key={g.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">{g.grantAmount}</span>
                <h4 className="font-bold text-white text-xs mt-1 mb-1">{g.schemeName}</h4>
                <p className="text-[11px] text-slate-400 mb-2">{g.eligibility}</p>
              </div>
              <div className="pt-2 border-t border-slate-850 text-[10px] text-slate-500 font-mono">
                Agency: {g.issuingBody}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   13. 10-Category Risk Matrix View
   ========================================================================= */
export const RiskMatrixView: React.FC = () => {
  const { startup, updateStartup } = useStartup();
  const [risks, setRisks] = useState(startup.riskMatrix);
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<any>('Technology');
  const [newMitigation, setNewMitigation] = useState('');
  const [newScore, setNewScore] = useState('7.0');

  const filteredRisks = filterCategory === 'All'
    ? risks
    : risks.filter(r => r.category.toLowerCase().includes(filterCategory.toLowerCase()));

  const handleAddRisk = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const newRiskItem = {
      id: `r-${Date.now()}`,
      category: newCategory,
      title: newTitle.trim(),
      probability: 'Medium' as const,
      impact: 'High' as const,
      riskScore: Number(newScore) || 7.0,
      mitigationStrategy: newMitigation.trim() || 'Establish fail-safe redundancy protocols.',
      contingencyPlan: 'Implement automated rollback and secondary supplier buffer.'
    };
    const updated = [newRiskItem, ...risks];
    setRisks(updated);
    updateStartup({ riskMatrix: updated });
    setNewTitle('');
    setNewMitigation('');
  };

  const categories = ['All', 'Technology', 'Market', 'Regulatory', 'Operational', 'Financial', 'Cybersecurity'];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <ShieldAlert className="w-4 h-4" />
            <span>Enterprise Pre-Mortem Risk Audit</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">10-Category Risk Matrix & Mitigations</h1>
          <p className="text-xs text-slate-400 mt-0.5">Comprehensive audit across Market, Tech, Financial, Cybersecurity, Regulatory, and Macro vectors.</p>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-right self-start sm:self-auto font-mono text-xs">
          <div className="text-[10px] text-slate-400 uppercase font-bold">Tracked Risk Vectors</div>
          <div className="text-xl font-bold text-rose-400">{risks.length} Risk Factors</div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 text-xs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-3 py-1.5 rounded-lg border font-medium transition-colors flex-shrink-0 ${
              filterCategory === cat
                ? 'bg-indigo-600 border-indigo-500 text-white shadow-sm'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Add New Risk Form */}
      <form onSubmit={handleAddRisk} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 grid grid-cols-1 sm:grid-cols-4 gap-2.5 text-xs">
        <input
          type="text"
          required
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="New Risk Factor (e.g. Inverter EMI Noise)..."
          className="sm:col-span-2 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
        />
        <select
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-2 text-white focus:outline-none focus:border-rose-500"
        >
          {['Technology', 'Market', 'Regulatory', 'Operational', 'Financial', 'Cybersecurity', 'Execution'].map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <button
          type="submit"
          className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-rose-600/20"
        >
          <Plus className="w-4 h-4" />
          <span>Add Risk Vector</span>
        </button>
      </form>

      {/* Risk List */}
      <div className="space-y-3 text-xs">
        {filteredRisks.map((r) => (
          <div key={r.id} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-mono text-indigo-400 font-semibold">{r.category}</span>
                <span className="text-slate-500">·</span>
                <h3 className="font-bold text-white text-xs">{r.title}</h3>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                Score: {r.riskScore}/10
              </span>
            </div>
            <p className="text-[11px] text-slate-300">
              <strong className="text-emerald-400">Mitigation Strategy:</strong> {r.mitigationStrategy}
            </p>
            <p className="text-[11px] text-slate-400">
              <strong className="text-amber-400">Contingency Plan:</strong> {r.contingencyPlan}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* =========================================================================
   14. Sources & Documents View
   ========================================================================= */
export const SourcesDocsView: React.FC = () => {
  const { startup, updateStartup } = useStartup();
  const [docs, setDocs] = useState(startup.sourceDocuments);
  const [newTitle, setNewTitle] = useState('');
  const [newSource, setNewSource] = useState('');
  const [newInsights, setNewInsights] = useState('');

  const handleAddDoc = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const newDocItem = {
      id: `src-${Date.now()}`,
      title: newTitle.trim(),
      type: 'Market Report' as const,
      authorOrSource: newSource.trim() || 'Research Analyst',
      dateAdded: new Date().toISOString().split('T')[0],
      credibilityScore: 92,
      keyInsights: newInsights.trim() || 'Verified market data reference.'
    };
    const updated = [newDocItem, ...docs];
    setDocs(updated);
    updateStartup({ sourceDocuments: updated });
    setNewTitle('');
    setNewSource('');
    setNewInsights('');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <FolderArchive className="w-4 h-4" />
            <span>Research Dossier & Verification Library</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Sources & Document Verification Manager</h1>
          <p className="text-xs text-slate-400 mt-0.5">Academic papers, market reports, and government policy citations.</p>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-right self-start sm:self-auto">
          <div className="text-[10px] text-slate-400 uppercase font-bold">Verified Citations</div>
          <div className="text-xl font-bold text-emerald-400">{docs.length} Sources Logged</div>
        </div>
      </div>

      {/* Add New Research Source Form */}
      <form onSubmit={handleAddDoc} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 grid grid-cols-1 sm:grid-cols-4 gap-2.5 text-xs">
        <input
          type="text"
          required
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Document / Paper Title..."
          className="sm:col-span-2 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
        />
        <input
          type="text"
          value={newSource}
          onChange={(e) => setNewSource(e.target.value)}
          placeholder="Author / Institution (e.g. IEEE / NITI Aayog)"
          className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-indigo-600/20"
        >
          <Plus className="w-4 h-4" />
          <span>Add Research Source</span>
        </button>
      </form>

      {/* Grid of Documents */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        {docs.map((doc) => (
          <div key={doc.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-indigo-400">{doc.type}</span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">{doc.credibilityScore}% Reliability</span>
              </div>
              <h3 className="font-bold text-white text-xs mb-2 leading-snug">{doc.title}</h3>
              <p className="text-[11px] text-slate-400 mb-2">Source: {doc.authorOrSource}</p>
              <p className="text-[11px] text-slate-300 leading-relaxed">{doc.keyInsights}</p>
            </div>
            <div className="pt-3 border-t border-slate-850 text-[10px] text-slate-500 font-mono">
              Added: {doc.dateAdded}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* =========================================================================
   15. Admin & Settings View
   ========================================================================= */
export const AdminSettingsView: React.FC = () => {
  const { startup, user, resetToDefault, logoutUser, setIsAuthModalOpen } = useStartup();
  const [resetDone, setResetDone] = useState(false);
  const [logoutMessage, setLogoutMessage] = useState('');

  const handleReset = () => {
    if (confirm('Reset application back to official Prathyusha Engineering College demo state?')) {
      resetToDefault();
      setResetDone(true);
      setTimeout(() => setResetDone(false), 2000);
    }
  };

  const handleLogout = () => {
    logoutUser();
    setLogoutMessage('Logged out. You are now in Guest Mode.');
    setTimeout(() => setLogoutMessage(''), 2500);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
          <Settings className="w-4 h-4" />
          <span>Platform Diagnostics & Governance</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Admin Console & Platform Settings</h1>
        <p className="text-xs text-slate-400 mt-0.5">Session controls, academic credits, and data persistence state.</p>
      </div>

      {logoutMessage && (
        <div className="p-3 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-amber-400" />
          <span>{logoutMessage}</span>
        </div>
      )}

      {resetDone && (
        <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Platform demo successfully reset!</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-white uppercase tracking-wider text-[11px] mb-2">Active Session Telemetry</h3>
            <div className="space-y-1.5 font-mono text-slate-300">
              <div>User: <strong>{user.fullName}</strong></div>
              <div>Email: {user.email}</div>
              <div>Role: {user.role}</div>
              <div>Institution: {user.institution}</div>
              <div>Active Venture: {startup.name}</div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 flex gap-2">
            {user.id !== 'usr-guest' ? (
              <button
                onClick={handleLogout}
                className="flex-1 py-2 rounded-xl bg-slate-950 hover:bg-rose-500/10 border border-slate-800 hover:border-rose-500/30 text-rose-400 font-semibold text-xs transition-colors"
              >
                Log Out Current Session
              </button>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="flex-1 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors"
              >
                Sign In to an Account
              </button>
            )}
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
            >
              Switch User
            </button>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-rose-400 uppercase tracking-wider text-[11px]">Factory Reset & Demo Sync</h3>
            <p className="text-slate-400 text-[11px] mt-1 leading-relaxed">
              Restore the pristine EcoFleet AI presentation dataset with all 17 phases, BOM items, and IEEE documents matching the presentation slides.
            </p>
          </div>
          <button
            onClick={handleReset}
            className="w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reset Demo to Prathyusha College Showcase</span>
          </button>
        </div>
      </div>
    </div>
  );
};
