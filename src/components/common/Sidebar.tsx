import React from 'react';
import { useStartup } from '../../context/StartupContext';
import { ActiveModuleTab } from '../../types/startup';
import {
  LayoutDashboard,
  FileText,
  Bot,
  GitBranch,
  CalendarCheck,
  Target,
  Users2,
  PieChart,
  Swords,
  AlertOctagon,
  Award,
  Shuffle,
  Lightbulb,
  UserCheck,
  Users,
  Cpu,
  Receipt,
  Factory,
  TrendingUp,
  CreditCard,
  Calculator,
  Coins,
  Landmark,
  ShieldAlert,
  FolderArchive,
  DownloadCloud,
  GraduationCap,
  Settings,
  LogOut,
  FolderKanban
} from 'lucide-react';

interface NavSection {
  label: string;
  items: {
    id: ActiveModuleTab;
    label: string;
    icon: React.ElementType;
    badge?: string;
  }[];
}

export const Sidebar: React.FC = () => {
  const { activeTab, setActiveTab, startup, t, user, logoutUser, projects, setIsProjectsModalOpen, hasConfiguredProject } = useStartup();

  const sections: NavSection[] = [
    {
      label: "CORE COMMAND",
      items: [
        { id: 'dashboard', label: t('dashboard'), icon: LayoutDashboard },
        { id: 'profile', label: t('startupProfile'), icon: FileText },
        { id: 'ai-cofounder', label: t('aiCofounder'), icon: Bot, badge: 'AI' },
        { id: 'lifecycle', label: t('lifecycle'), icon: GitBranch, badge: `P${startup.currentPhaseIndex + 1}` },
        { id: 'timeline', label: t('timeline'), icon: CalendarCheck },
      ]
    },
    {
      label: "ANALYSIS & MARKET",
      items: [
        { id: 'problem-solution', label: t('problemSolution'), icon: Target },
        { id: 'target-customers', label: t('targetCustomers'), icon: Users2 },
        { id: 'market-research', label: t('marketResearch'), icon: PieChart },
        { id: 'competitors', label: t('competitors'), icon: Swords },
        { id: 'failure-audit', label: t('failureAudit'), icon: AlertOctagon, badge: 'Crucial' },
        { id: 'validation-scorecard', label: t('validationScorecard'), icon: Award },
        { id: 'alternative-ideas', label: t('alternativeIdeas'), icon: Shuffle },
        { id: 'explore-ideas', label: t('exploreIdeas'), icon: Lightbulb },
      ]
    },
    {
      label: "EXECUTION & PEOPLE",
      items: [
        { id: 'solo-founder', label: t('soloFounder'), icon: UserCheck, badge: startup.isSoloFounder ? 'Active' : undefined },
        { id: 'team-builder', label: t('teamBuilder'), icon: Users },
      ]
    },
    {
      label: "TECHNOLOGY & PRODUCTION",
      items: [
        { id: 'tech-planner', label: t('techPlanner'), icon: Cpu },
        { id: 'software-licenses', label: t('softwareLicenses'), icon: Receipt },
        { id: 'hardware-ops', label: t('hardwareOps'), icon: Factory, badge: startup.isHardwareMode ? 'Active' : 'Off' },
      ]
    },
    {
      label: "FINANCIALS & VALUATION",
      items: [
        { id: 'financials', label: t('financials'), icon: TrendingUp },
        { id: 'revenue-models', label: t('revenueModels'), icon: CreditCard },
        { id: 'break-even', label: t('breakEven'), icon: Calculator },
        { id: 'valuation', label: t('valuation'), icon: Coins },
        { id: 'funding-loans', label: t('fundingLoans'), icon: Landmark },
      ]
    },
    {
      label: "GOVERNANCE & OUTPUT",
      items: [
        { id: 'risk-matrix', label: t('riskMatrix'), icon: ShieldAlert },
        { id: 'sources', label: t('sources'), icon: FolderArchive },
        { id: 'report-generator', label: t('reportGenerator'), icon: DownloadCloud, badge: 'SRS' },
        { id: 'academic-presentation', label: t('academicPresentation'), icon: GraduationCap, badge: 'PEC' },
        { id: 'admin-settings', label: t('adminSettings'), icon: Settings },
      ]
    }
  ];

  return (
    <aside className="w-64 flex-shrink-0 border-r border-slate-800/80 bg-slate-950/60 overflow-y-auto max-h-[calc(100vh-53px)] select-none py-3 px-2 flex flex-col justify-between">
      <div className="space-y-4">
        {/* Projects Hub Quick Switcher Banner */}
        <div className="px-1">
          <button
            onClick={() => setIsProjectsModalOpen(true)}
            className="w-full p-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-indigo-500/30 text-left transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-2 min-w-0">
              <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 flex-shrink-0">
                <FolderKanban className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Active Venture</div>
                <div className="text-xs font-semibold text-white truncate">{startup.name}</div>
              </div>
            </div>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 flex-shrink-0">
              {projects.length}
            </span>
          </button>
        </div>

        {sections.map((sec, idx) => (
          <div key={idx} className="space-y-1">
            <div className="px-3 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
              {sec.label}
            </div>
            <div className="space-y-0.5">
              {sec.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all text-left ${
                      isActive
                        ? 'bg-indigo-600/15 text-indigo-400 border border-indigo-500/30 font-semibold shadow-sm shadow-indigo-500/10'
                        : 'text-slate-300 hover:text-white hover:bg-slate-900 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${isActive ? 'text-indigo-400' : 'text-slate-400'}`} />
                      <span className="truncate">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono font-medium ${
                        isActive 
                          ? 'bg-indigo-500/20 text-indigo-300' 
                          : item.badge === 'Crucial'
                          ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Mini Status Banner & User Profile with Logout */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 px-2 text-[10px] text-slate-400 space-y-2.5">
        <div>
          <div className="flex items-center justify-between font-mono mb-1 text-slate-400">
            <span>HEALTH: {hasConfiguredProject ? `${startup.healthScore}%` : '--'}</span>
            <span className={hasConfiguredProject ? 'text-emerald-400' : 'text-amber-400'}>
              {hasConfiguredProject ? startup.healthGrade : 'Setup Required'}
            </span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${
                hasConfiguredProject 
                  ? 'bg-gradient-to-r from-indigo-500 to-emerald-400' 
                  : 'bg-amber-500/30'
              }`}
              style={{ width: hasConfiguredProject ? `${startup.healthScore}%` : '0%' }}
            />
          </div>
        </div>

        {/* User Account & Direct Logout Button */}
        <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-6 h-6 rounded-full bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 font-bold flex items-center justify-center text-[10px] flex-shrink-0">
              {user.fullName ? user.fullName.charAt(0) : 'U'}
            </div>
            <div className="truncate">
              <div className="font-semibold text-slate-200 text-[11px] truncate">{user.fullName}</div>
              <div className="text-[9px] text-slate-400 truncate">{user.role}</div>
            </div>
          </div>
          <button
            onClick={() => logoutUser()}
            title="Log Out of InnovAI Hub"
            className="px-2 py-1 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 hover:text-rose-200 border border-rose-500/30 transition-colors flex items-center gap-1 flex-shrink-0"
          >
            <LogOut className="w-3 h-3 text-rose-400" />
            <span className="text-[10px] font-semibold">Log Out</span>
          </button>
        </div>

        <p className="text-slate-400 text-[9px] leading-tight text-center">
          InnovAI Hub Enterprise · Multi-Project Architecture
        </p>
      </div>
    </aside>
  );
};
