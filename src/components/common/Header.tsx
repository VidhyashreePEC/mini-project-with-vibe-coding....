import React, { useState } from 'react';
import { useStartup } from '../../context/StartupContext';
import { CURRENCY_LABELS } from '../../lib/currency/currencies';
import { CurrencyCode, LanguageCode } from '../../types/startup';
import {
  Sparkles,
  Zap,
  Globe2,
  DollarSign,
  User,
  PlusCircle,
  Sliders,
  GraduationCap,
  ChevronDown,
  Layers,
  Cpu,
  BarChart3,
  LogOut,
  LogIn,
  ShieldCheck,
  FolderKanban,
  Copy,
  Users,
  Check
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    startup,
    projects,
    activeProjectId,
    switchProject,
    duplicateProject,
    setIsProjectsModalOpen,
    hasConfiguredProject,
    startNewEmptyProject,
    currency,
    language,
    user,
    users,
    switchUser,
    setCurrency,
    setLanguage,
    setActiveTab,
    setIsScenarioDrawerOpen,
    setIsNextActionDrawerOpen,
    setIsAuthModalOpen,
    setIsWizardOpen,
    logoutUser,
    t
  } = useStartup();

  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const languages: { code: LanguageCode; label: string; native: string }[] = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
    { code: 'te', label: 'Telugu', native: 'తెలుగు' },
    { code: 'ml', label: 'Malayalam', native: 'മലയാളം' },
    { code: 'kn', label: 'Kannada', native: 'ಕನ್ನಡ' }
  ];

  const currencies: CurrencyCode[] = ['INR', 'USD', 'EUR', 'GBP'];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/85 backdrop-blur-md px-4 py-2.5 flex items-center justify-between gap-4">
      {/* Left: Brand & Multi-Project Switcher */}
      <div className="flex items-center gap-3">
        <div 
          onClick={() => setActiveTab('dashboard')} 
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-0.5 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Zap className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300" />
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                InnovAI <span className="text-indigo-400 font-medium">Hub</span>
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Multi-Venture
              </span>
            </div>
            <p className="text-[11px] text-slate-400 leading-none">
              Startup Validation & Project Planning
            </p>
          </div>
        </div>

        <div className="h-5 w-px bg-slate-800 hidden md:block" />

        {/* Multi-Project Quick Switcher Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setIsProjectMenuOpen(!isProjectMenuOpen);
              setIsUserMenuOpen(false);
              setIsCurrencyOpen(false);
              setIsLanguageOpen(false);
            }}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 text-xs text-slate-200 transition-colors shadow-sm"
          >
            <div className={`w-2 h-2 rounded-full ${hasConfiguredProject ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
            <div className="text-left">
              <span className="font-semibold max-w-[130px] truncate block leading-tight">
                {hasConfiguredProject ? startup.name : 'Setup Project'}
              </span>
            </div>
            <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono hidden md:inline border ${
              hasConfiguredProject 
                ? 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' 
                : 'text-amber-400 bg-amber-500/10 border-amber-500/30'
            }`}>
              {hasConfiguredProject ? `${projects.length} Projects` : 'Pending Setup'}
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {isProjectMenuOpen && (
            <div 
              className="absolute left-0 mt-1.5 w-72 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl py-2 z-50 text-xs"
              onClick={() => setIsProjectMenuOpen(false)}
            >
              <div className="px-3.5 py-1.5 flex items-center justify-between text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800/80 mb-1">
                <span>Select Project ({projects.length})</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsProjectMenuOpen(false);
                    setIsProjectsModalOpen(true);
                  }}
                  className="text-indigo-400 hover:text-indigo-300 font-bold lowercase text-[11px] normal-case"
                >
                  view all hub ↗
                </button>
              </div>

              {/* Projects List */}
              <div className="max-h-56 overflow-y-auto py-0.5 space-y-0.5">
                {projects.map((p) => {
                  const isActive = p.id === activeProjectId;
                  return (
                    <button
                      key={p.id}
                      onClick={() => switchProject(p.id)}
                      className={`w-full text-left px-3.5 py-2 flex items-center justify-between hover:bg-slate-800/80 transition-colors ${
                        isActive ? 'text-indigo-300 bg-indigo-500/15 font-semibold' : 'text-slate-300'
                      }`}
                    >
                      <div className="min-w-0 pr-2">
                        <div className="font-medium truncate flex items-center gap-1.5">
                          <span>{p.name}</span>
                          {isActive && <span className="text-[10px] text-emerald-400 font-bold">✓</span>}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate">
                          {p.industry} · Phase {p.currentPhaseIndex + 1}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 flex-shrink-0">
                        {p.healthGrade}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="border-t border-slate-800 my-1.5" />

              {/* Action Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsProjectMenuOpen(false);
                  startNewEmptyProject();
                }}
                className="w-full text-left px-3.5 py-2 flex items-center gap-2 text-indigo-400 hover:bg-indigo-500/10 transition-colors font-semibold"
              >
                <PlusCircle className="w-4 h-4" />
                <span>+ Start Fresh Project (Ask Details First)</span>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsProjectMenuOpen(false);
                  setIsWizardOpen(true);
                }}
                className="w-full text-left px-3.5 py-2 flex items-center gap-2 text-slate-300 hover:bg-slate-800 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Launch 3-Step Wizard</span>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  duplicateProject(startup.id);
                  setIsProjectMenuOpen(false);
                }}
                className="w-full text-left px-3.5 py-2 flex items-center gap-2 text-slate-300 hover:bg-slate-800 transition-colors"
              >
                <Copy className="w-4 h-4 text-slate-400" />
                <span>Duplicate Current Project</span>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsProjectMenuOpen(false);
                  setIsProjectsModalOpen(true);
                }}
                className="w-full text-left px-3.5 py-2 flex items-center gap-2 text-slate-300 hover:bg-slate-800 transition-colors border-t border-slate-800/60"
              >
                <FolderKanban className="w-4 h-4 text-amber-400" />
                <span>Manage All Projects Hub...</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Center / Right: Primary Actions & Settings */}
      <div className="flex items-center gap-2 sm:gap-2.5">
        {/* Projects Hub Button */}
        <button
          onClick={() => setIsProjectsModalOpen(true)}
          className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors text-xs font-medium"
          title="Manage Multiple Projects"
        >
          <FolderKanban className="w-3.5 h-3.5 text-indigo-400" />
          <span>Projects ({projects.length})</span>
        </button>

        {/* Academic Presentation Button */}
        <button
          onClick={() => setActiveTab('academic-presentation')}
          className="hidden xl:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 hover:bg-amber-500/20 transition-colors text-xs font-medium"
          title="SDG 9 & Academic Architecture"
        >
          <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
          <span>SDG 9 & Academic</span>
        </button>

        {/* Scenario Simulator Button */}
        <button
          onClick={() => setIsScenarioDrawerOpen(true)}
          className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors text-xs"
        >
          <Sliders className="w-3.5 h-3.5 text-slate-400" />
          <span className="hidden lg:inline">{t('simulate')}</span>
        </button>

        {/* Prominent "What Should I Do Next?" AI Action Engine Button */}
        <button
          onClick={() => setIsNextActionDrawerOpen(true)}
          className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs shadow-md shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span className="font-bold">{t('whatShouldIDoNext')}</span>
        </button>

        {/* Currency Switcher */}
        <div className="relative">
          <button
            onClick={() => {
              setIsCurrencyOpen(!isCurrencyOpen);
              setIsLanguageOpen(false);
              setIsProjectMenuOpen(false);
              setIsUserMenuOpen(false);
            }}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-200 transition-colors font-mono"
            title="Switch Currency"
          >
            <span>{currency}</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>

          {isCurrencyOpen && (
            <div 
              className="absolute right-0 mt-1.5 w-32 rounded-xl bg-slate-900 border border-slate-800 shadow-xl py-1 z-50 text-xs"
              onClick={() => setIsCurrencyOpen(false)}
            >
              {currencies.map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-slate-800 transition-colors ${
                    currency === curr ? 'text-indigo-400 font-semibold bg-indigo-500/10' : 'text-slate-300'
                  }`}
                >
                  <span>{CURRENCY_LABELS[curr]}</span>
                  {currency === curr && <span>✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Language Switcher */}
        <div className="relative">
          <button
            onClick={() => {
              setIsLanguageOpen(!isLanguageOpen);
              setIsCurrencyOpen(false);
              setIsProjectMenuOpen(false);
              setIsUserMenuOpen(false);
            }}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-200 transition-colors"
            title="Switch Language"
          >
            <Globe2 className="w-3.5 h-3.5 text-slate-400" />
            <span className="uppercase font-mono text-[11px]">{language}</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>

          {isLanguageOpen && (
            <div 
              className="absolute right-0 mt-1.5 w-44 rounded-xl bg-slate-900 border border-slate-800 shadow-xl py-1 z-50 text-xs"
              onClick={() => setIsLanguageOpen(false)}
            >
              <div className="px-3 py-1 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                Select Language
              </div>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-slate-800 transition-colors ${
                    language === lang.code ? 'text-indigo-400 font-semibold bg-indigo-500/10' : 'text-slate-300'
                  }`}
                >
                  <div>
                    <span className="font-medium">{lang.native}</span>
                    <span className="text-[10px] text-slate-400 ml-1.5">({lang.label})</span>
                  </div>
                  {language === lang.code && <span>✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Multi-User Profile Button & Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setIsUserMenuOpen(!isUserMenuOpen);
              setIsCurrencyOpen(false);
              setIsLanguageOpen(false);
              setIsProjectMenuOpen(false);
            }}
            className="flex items-center gap-2 pl-2 pr-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-200 transition-colors text-xs"
          >
            <div className="w-6 h-6 rounded-full bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 font-bold flex items-center justify-center text-[11px]">
              {user.fullName ? user.fullName.charAt(0) : 'U'}
            </div>
            <div className="text-left hidden sm:block">
              <div className="font-semibold text-[11px] leading-tight max-w-[95px] truncate">{user.fullName}</div>
              <div className="text-[9px] text-slate-400 leading-tight">{user.role}</div>
            </div>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>

          {isUserMenuOpen && (
            <div
              className="absolute right-0 mt-1.5 w-64 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl py-2 z-50 text-xs"
              onClick={() => setIsUserMenuOpen(false)}
            >
              {/* Active User Card */}
              <div className="px-3.5 py-2.5 border-b border-slate-800">
                <div className="font-bold text-white text-xs truncate">{user.fullName}</div>
                <div className="text-[11px] text-slate-400 truncate">{user.email}</div>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {user.role}
                  </span>
                  {user.companyOrOrg && (
                    <span className="text-[10px] text-slate-400 truncate">
                      · {user.companyOrOrg}
                    </span>
                  )}
                </div>
              </div>

              {/* Multi-User Switcher List */}
              <div className="py-1">
                <div className="px-3.5 py-1 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  Switch Active User ({users.length})
                </div>
                {users.map((u) => {
                  const isCurrent = u.id === user.id;
                  return (
                    <button
                      key={u.id}
                      onClick={() => switchUser(u.id)}
                      className={`w-full text-left px-3.5 py-1.5 flex items-center justify-between hover:bg-slate-800 transition-colors ${
                        isCurrent ? 'text-indigo-400 bg-indigo-500/10 font-semibold' : 'text-slate-300'
                      }`}
                    >
                      <div className="truncate pr-2">
                        <div className="text-xs truncate">{u.fullName}</div>
                        <div className="text-[9px] text-slate-400 truncate">{u.role}</div>
                      </div>
                      {isCurrent && <span className="text-xs text-indigo-400 font-bold">✓</span>}
                    </button>
                  );
                })}

                <div className="border-t border-slate-800/80 my-1" />

                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="w-full text-left px-3.5 py-2 hover:bg-slate-800 text-indigo-400 hover:text-indigo-300 flex items-center gap-2 transition-colors font-medium"
                >
                  <LogIn className="w-4 h-4 text-indigo-400" />
                  <span>+ Add / Switch User Profile</span>
                </button>

                <button
                  onClick={() => logoutUser()}
                  className="w-full text-left px-3.5 py-2 hover:bg-rose-500/10 text-rose-400 hover:text-rose-300 flex items-center gap-2 transition-colors font-medium border-t border-slate-800/80 mt-1"
                >
                  <LogOut className="w-4 h-4 text-rose-400" />
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Explicit 1-Click Log Out Button */}
        <button
          onClick={() => logoutUser()}
          title="Log Out of InnovAI Hub"
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 text-rose-300 hover:text-rose-200 transition-colors text-xs font-semibold"
        >
          <LogOut className="w-3.5 h-3.5 text-rose-400" />
          <span className="hidden md:inline">Log Out</span>
        </button>
      </div>
    </header>
  );
};
