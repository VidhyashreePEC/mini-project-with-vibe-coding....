import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  StartupProject,
  CurrencyCode,
  LanguageCode,
  ActiveModuleTab,
  UserSession,
  LifecyclePhase
} from '../types/startup';
import { ECOFLEET_STARTUP_SAMPLE, INITIAL_17_PHASES } from '../lib/data/sampleStartup';
import { TRANSLATIONS } from '../lib/i18n/translations';

export const INITIAL_USERS_LIST: UserSession[] = [
  {
    id: "usr-priya",
    fullName: "Priya Sharma",
    email: "priya@ecofleet.ai",
    role: "Founder",
    country: "India",
    preferredLanguage: "en",
    currency: "INR",
    isVerified: true,
    companyOrOrg: "EcoFleet Technologies Pvt Ltd"
  },
  {
    id: "usr-vidhu",
    fullName: "Vidhyashree L.",
    email: "vidhu@innovai.net",
    role: "Founder",
    country: "India",
    preferredLanguage: "en",
    currency: "INR",
    isVerified: true,
    companyOrOrg: "InnovAI Ventures"
  },
  {
    id: "usr-alex",
    fullName: "Alex Rivera",
    email: "alex@venturepulse.io",
    role: "Investor",
    country: "United States",
    preferredLanguage: "en",
    currency: "USD",
    isVerified: true,
    companyOrOrg: "VenturePulse Capital"
  },
  {
    id: "usr-guest",
    fullName: "Guest Explorer",
    email: "guest@innovai.net",
    role: "Entrepreneur",
    country: "India",
    preferredLanguage: "en",
    currency: "INR",
    isVerified: false,
    companyOrOrg: "Independent Venture"
  }
];

export const INITIAL_PROJECTS_LIST: StartupProject[] = [
  ECOFLEET_STARTUP_SAMPLE,
  {
    ...ECOFLEET_STARTUP_SAMPLE,
    id: "agriscan-ai",
    name: "AgriScan Drone AI",
    tagline: "Autonomous multispectral drone imagery and soil pest prediction platform delivering actionable fertilizer dosage maps for smallholder farmers.",
    industry: "AgriTech & Robotics",
    businessType: "Hardware & Drone-as-a-Service",
    country: "India",
    founderName: "Vikram Sengupta",
    targetMarket: "Farmer Producer Organizations (FPOs) and agricultural cooperatives across Punjab, Haryana, and Tamil Nadu",
    isSoloFounder: false,
    isHardwareMode: true,
    currentPhaseIndex: 5,
    healthScore: 82,
    healthGrade: "Grade A",
    valuationEstimate: 16500000,
    monthlyBurnRate: 280000,
    runwayMonths: 14,
    breakEvenUnits: 320,
    breakEvenRevenueMonthly: 840000,
    problemStatement: "Smallholder farmers lose 30-40% of crop yield due to delayed pest detection and arbitrary chemical spraying.",
    proposedSolution: "Sub-$800 lightweight multispectral drone with edge NDVI processing that generates localized prescription spraying maps within 15 minutes.",
    uvpInnovation: "On-device edge AI inference without needing 4G cellular upload in remote rural fields.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    ...ECOFLEET_STARTUP_SAMPLE,
    id: "eduspark-tutor",
    name: "EduSpark AI",
    tagline: "Vernacular multimodal AI tutor for engineering and STEM diploma students, generating interactive code labs and voice-guided explanations in Indian languages.",
    industry: "EdTech & Generative AI",
    businessType: "B2C & B2B SaaS",
    country: "India",
    founderName: "Ananya Iyer",
    targetMarket: "Engineering college students, polytechnic institutions, and vocational technical universities",
    isSoloFounder: true,
    isHardwareMode: false,
    currentPhaseIndex: 3,
    healthScore: 78,
    healthGrade: "Grade B+",
    valuationEstimate: 12500000,
    monthlyBurnRate: 140000,
    runwayMonths: 20,
    breakEvenUnits: 850,
    breakEvenRevenueMonthly: 590000,
    problemStatement: "Over 68% of engineering students in regional institutions struggle with English-only textbooks and lack 1-on-1 coding mentorship.",
    proposedSolution: "AI tutor that translates complex algorithms and system design into Tamil, Hindi, and Telugu with interactive in-browser compiler sandboxes.",
    uvpInnovation: "Code-to-vernacular real-time speech explanations fine-tuned on curriculum syllabi.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    ...ECOFLEET_STARTUP_SAMPLE,
    id: "medpulse-health",
    name: "MedPulse Telemetry",
    tagline: "Low-cost clinical IoT patch and AI cardiac event alert engine for post-discharge cardiology monitoring in Tier 2/3 hospitals.",
    industry: "HealthTech & MedTech",
    businessType: "B2B MedTech Hardware & SaaS",
    country: "India",
    founderName: "Dr. Siddharth Rao",
    targetMarket: "Private nursing homes, district hospital cardiology wards, and home health care providers",
    isSoloFounder: false,
    isHardwareMode: true,
    currentPhaseIndex: 9,
    healthScore: 89,
    healthGrade: "Grade A+",
    valuationEstimate: 38000000,
    monthlyBurnRate: 420000,
    runwayMonths: 18,
    breakEvenUnits: 450,
    breakEvenRevenueMonthly: 1200000,
    problemStatement: "Post-operative cardiac patients have a 24% 30-day readmission rate due to undetected early arrhythmias at home.",
    proposedSolution: "Reusable 3-lead dry-electrode wearable with continuous BLE telemetry to doctor dashboard and family WhatsApp emergency alerts.",
    uvpInnovation: "Clinical grade arrhythmia detection at 1/10th the cost of imported Holter monitors.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    ...ECOFLEET_STARTUP_SAMPLE,
    id: "cybersentinel-x",
    name: "CyberSentinel X",
    tagline: "Autonomous AI threat triage and zero-day containment platform for multi-cloud Kubernetes deployments.",
    industry: "Cybersecurity & Cloud",
    businessType: "Enterprise B2B SaaS",
    country: "India",
    founderName: "Karthik Ramanathan",
    targetMarket: "Mid-market FinTechs, digital banking APIs, and SaaS scaleups",
    isSoloFounder: false,
    isHardwareMode: false,
    currentPhaseIndex: 7,
    healthScore: 86,
    healthGrade: "Grade A",
    valuationEstimate: 45000000,
    monthlyBurnRate: 350000,
    runwayMonths: 16,
    breakEvenUnits: 180,
    breakEvenRevenueMonthly: 1450000,
    problemStatement: "SOC analysts face 10,000+ noisy alerts per day with average breach dwell time exceeding 180 days.",
    proposedSolution: "Agentic eBPF kernel observation that quarantines infected microservices in sub-50 milliseconds without killing the cluster.",
    uvpInnovation: "Autonomous containment playbooks with zero false positive rollback guarantees.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

interface StartupContextType {
  // Multi-Project State
  projects: StartupProject[];
  startup: StartupProject;
  activeProjectId: string;
  isProjectsModalOpen: boolean;
  setIsProjectsModalOpen: (open: boolean) => void;
  switchProject: (projectId: string) => void;
  createNewProject: (newProject: Partial<StartupProject>) => void;
  duplicateProject: (projectId: string) => void;
  deleteProject: (projectId: string) => void;
  updateStartup: (updater: Partial<StartupProject> | ((prev: StartupProject) => StartupProject)) => void;

  // Multi-User State
  users: UserSession[];
  user: UserSession;
  isAuthenticated: boolean;
  setIsAuthenticated: (auth: boolean) => void;
  loginUser: (u: UserSession, options?: { isNewUser?: boolean }) => void;
  logoutUser: () => void;
  switchUser: (userId: string) => void;
  addUser: (newUser: UserSession) => void;
  deleteUser: (userId: string) => void;
  setUser: (u: UserSession) => void;

  // Preferences & Layout
  currency: CurrencyCode;
  language: LanguageCode;
  activeTab: ActiveModuleTab;
  setCurrency: (c: CurrencyCode) => void;
  setLanguage: (l: LanguageCode) => void;
  setActiveTab: (tab: ActiveModuleTab) => void;
  t: (key: keyof typeof TRANSLATIONS.en) => string;

  // Drawers & Modals
  isScenarioDrawerOpen: boolean;
  isNextActionDrawerOpen: boolean;
  isAuthModalOpen: boolean;
  isWizardOpen: boolean;
  hasConfiguredProject: boolean;
  setHasConfiguredProject: (configured: boolean) => void;
  initializeProjectFromIntake: (details: Partial<StartupProject>) => void;
  startNewEmptyProject: () => void;
  setIsScenarioDrawerOpen: (open: boolean) => void;
  setIsNextActionDrawerOpen: (open: boolean) => void;
  setIsAuthModalOpen: (open: boolean) => void;
  setIsWizardOpen: (open: boolean) => void;

  // Backward compatibility helpers
  switchStartupPreset: (presetId: string) => void;
  createNewStartup: (newProject: Partial<StartupProject>) => void;
  toggleTaskCompletion: (phaseId: number, taskId: string) => void;
  resetToDefault: () => void;
}

const StartupContext = createContext<StartupContextType | undefined>(undefined);

export const StartupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Multi-Project Repository
  const [projects, setProjects] = useState<StartupProject[]>(() => {
    try {
      const saved = localStorage.getItem('innovai_projects_list');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Failed to load projects list from localStorage:', e);
    }
    return INITIAL_PROJECTS_LIST;
  });

  const [activeProjectId, setActiveProjectId] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('innovai_active_project_id');
      if (saved) return saved;
    } catch {}
    return INITIAL_PROJECTS_LIST[0].id;
  });

  // Current active project reference derived from projects list
  const activeProject = projects.find(p => p.id === activeProjectId) || projects[0] || ECOFLEET_STARTUP_SAMPLE;

  // 2. Multi-User Repository
  const [users, setUsers] = useState<UserSession[]>(() => {
    try {
      const saved = localStorage.getItem('innovai_user_accounts');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return INITIAL_USERS_LIST;
  });

  const [user, setUserState] = useState<UserSession>(() => {
    try {
      const saved = localStorage.getItem('innovai_user_session');
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_USERS_LIST[1]; // Vidhyashree L. default
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      const auth = localStorage.getItem('innovai_is_authenticated');
      return auth === 'true';
    } catch {}
    return false; // Initially show login and signup page
  });

  // 3. UI, Currency & Language
  const [currency, setCurrencyState] = useState<CurrencyCode>(() => {
    try {
      const saved = localStorage.getItem('innovai_currency') as CurrencyCode;
      if (saved && ['INR', 'USD', 'EUR', 'GBP'].includes(saved)) return saved;
    } catch {}
    return 'INR';
  });

  const [language, setLanguageState] = useState<LanguageCode>(() => {
    try {
      const saved = localStorage.getItem('innovai_language') as LanguageCode;
      if (saved && ['en', 'ta', 'hi', 'te', 'ml', 'kn'].includes(saved)) return saved;
    } catch {}
    return 'en';
  });

  const [activeTab, setActiveTab] = useState<ActiveModuleTab>('dashboard');
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [isScenarioDrawerOpen, setIsScenarioDrawerOpen] = useState(false);
  const [isNextActionDrawerOpen, setIsNextActionDrawerOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [hasConfiguredProject, setHasConfiguredProjectState] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(`innovai_project_configured_${user.id}`);
      if (saved !== null) return saved === 'true';
    } catch {}
    // Preset demo users start configured; custom users start unconfigured
    return ['usr-priya', 'usr-vidhu', 'usr-alex'].includes(user.id);
  });

  const setHasConfiguredProject = (configured: boolean) => {
    setHasConfiguredProjectState(configured);
    try {
      localStorage.setItem(`innovai_project_configured_${user.id}`, String(configured));
    } catch {}
  };

  // Persistence effects
  useEffect(() => {
    try {
      localStorage.setItem('innovai_projects_list', JSON.stringify(projects));
      localStorage.setItem('innovai_startup_data', JSON.stringify(activeProject));
    } catch (e) {
      console.warn('LocalStorage save error (projects):', e);
    }
  }, [projects, activeProject]);

  useEffect(() => {
    try {
      localStorage.setItem('innovai_active_project_id', activeProjectId);
    } catch {}
  }, [activeProjectId]);

  useEffect(() => {
    try {
      localStorage.setItem('innovai_user_accounts', JSON.stringify(users));
    } catch {}
  }, [users]);

  useEffect(() => {
    try {
      localStorage.setItem('innovai_user_session', JSON.stringify(user));
    } catch {}
  }, [user]);

  useEffect(() => {
    try {
      localStorage.setItem('innovai_currency', currency);
    } catch {}
  }, [currency]);

  useEffect(() => {
    try {
      localStorage.setItem('innovai_language', language);
    } catch {}
  }, [language]);

  const setCurrency = (c: CurrencyCode) => {
    setCurrencyState(c);
    updateStartup({ currency: c });
  };

  const setLanguage = (l: LanguageCode) => {
    setLanguageState(l);
  };

  const t = (key: keyof typeof TRANSLATIONS.en): string => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS.en;
    return (dict as any)[key] || TRANSLATIONS.en[key] || String(key);
  };

  // --- Multi-Project Operations ---
  const switchProject = (projectId: string) => {
    const exists = projects.find(p => p.id === projectId);
    if (exists) {
      setActiveProjectId(projectId);
    }
  };

  const createNewProject = (newProject: Partial<StartupProject>) => {
    const newId = `proj-${Date.now()}`;
    const created: StartupProject = {
      ...ECOFLEET_STARTUP_SAMPLE,
      id: newId,
      name: newProject.name || "Untitled Venture",
      tagline: newProject.tagline || "Early-stage strategic innovation project",
      description: newProject.description || "",
      problemStatement: newProject.problemStatement || "",
      currentSolution: newProject.currentSolution || "",
      proposedSolution: newProject.proposedSolution || "",
      uvpInnovation: newProject.uvpInnovation || "",
      industry: newProject.industry || "Software & Technology",
      businessType: newProject.businessType || "B2B SaaS",
      country: newProject.country || user.country || "India",
      targetMarket: newProject.targetMarket || "Enterprise & Emerging Startups",
      founderName: newProject.founderName || user.fullName,
      ownerId: user.id,
      coFounders: newProject.coFounders || [],
      isSoloFounder: newProject.isSoloFounder ?? false,
      isHardwareMode: newProject.isHardwareMode ?? false,
      currentPhaseIndex: newProject.currentPhaseIndex ?? 0,
      healthScore: 78,
      healthGrade: "Grade B+",
      valuationEstimate: 12000000,
      monthlyBurnRate: 150000,
      runwayMonths: 18,
      breakEvenUnits: 250,
      breakEvenRevenueMonthly: 600000,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    setProjects(prev => [created, ...prev]);
    setActiveProjectId(newId);
    setActiveTab('dashboard');
  };

  const duplicateProject = (projectId: string) => {
    const source = projects.find(p => p.id === projectId) || activeProject;
    const duplicated: StartupProject = {
      ...source,
      id: `proj-${Date.now()}`,
      name: `${source.name} (Copy)`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setProjects(prev => [duplicated, ...prev]);
    setActiveProjectId(duplicated.id);
  };

  const deleteProject = (projectId: string) => {
    if (projects.length <= 1) {
      alert("At least one project must remain in the platform.");
      return;
    }
    const remaining = projects.filter(p => p.id !== projectId);
    setProjects(remaining);
    if (activeProjectId === projectId) {
      setActiveProjectId(remaining[0].id);
    }
  };

  const updateStartup = (updater: Partial<StartupProject> | ((prev: StartupProject) => StartupProject)) => {
    setProjects(prev => {
      return prev.map(p => {
        if (p.id === activeProjectId) {
          const next = typeof updater === 'function' ? updater(p) : { ...p, ...updater };
          return { ...next, updatedAt: new Date().toISOString() };
        }
        return p;
      });
    });
  };

  const initializeProjectFromIntake = (details: Partial<StartupProject>) => {
    const newId = `proj-${Date.now()}`;
    const name = details.name || "InnovAI Hub";
    const tagline = details.tagline || "An AI-Powered Platform for Startup Idea Validation and Intelligent Project Planning";
    const industry = details.industry || "AI & Enterprise Software (B2B SaaS)";
    const businessType = details.businessType || "B2B SaaS";
    const targetMarket = details.targetMarket || "Founders, project teams, and enterprise innovators";
    const problemStatement = details.problemStatement || "High friction and unvalidated assumptions causing early venture failure.";
    const proposedSolution = details.proposedSolution || "Autonomous AI platform providing 17-phase lifecycle execution and automated financial modeling.";
    const uvpInnovation = details.uvpInnovation || "Real-time multidimensional validation with live verifiable financial engines.";
    const currentPhaseIndex = details.currentPhaseIndex ?? 2;
    const isSoloFounder = details.isSoloFounder ?? false;
    const isHardwareMode = details.isHardwareMode ?? false;
    const founderName = details.founderName || user.fullName || "Lead Founder";
    const coFounders = details.coFounders || [];

    const customProject: StartupProject = {
      ...ECOFLEET_STARTUP_SAMPLE,
      id: newId,
      name,
      tagline,
      description: details.description || `${name} is an enterprise startup in ${industry} providing ${tagline}.`,
      problemStatement,
      currentSolution: details.currentSolution || "Manual spreadsheets, fragmented consulting, and trial-and-error execution.",
      proposedSolution,
      uvpInnovation,
      industry,
      businessType,
      country: details.country || user.country || "India",
      targetMarket,
      founderName,
      ownerId: user.id,
      coFounders,
      isSoloFounder,
      isHardwareMode,
      currentPhaseIndex,
      healthScore: 88,
      healthGrade: "Grade A",
      subscores: {
        marketPotential: 90,
        technicalFeasibility: 87,
        unitEconomics: 84,
        competitiveMoat: 86,
        riskMitigation: 82,
        teamExecution: 89,
        regulatoryReadiness: 85
      },
      valuationEstimate: isHardwareMode ? 28000000 : 18500000,
      monthlyBurnRate: isHardwareMode ? 320000 : 160000,
      runwayMonths: 18,
      breakEvenUnits: isHardwareMode ? 240 : 650,
      breakEvenRevenueMonthly: isHardwareMode ? 960000 : 520000,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      academicInfo: {
        ...ECOFLEET_STARTUP_SAMPLE.academicInfo,
        projectTitle: name,
        presenter: founderName,
        presentationType: `${name} Comprehensive Startup Feasibility & Architecture Defense`
      }
    };

    setProjects(prev => [customProject, ...prev]);
    setActiveProjectId(newId);
    setHasConfiguredProjectState(true);
    setIsWizardOpen(false);
    setActiveTab('dashboard');

    try {
      localStorage.setItem(`innovai_project_configured_${user.id}`, 'true');
      localStorage.setItem('innovai_active_project_id', newId);
    } catch {}
  };

  const startNewEmptyProject = () => {
    setHasConfiguredProjectState(false);
    setIsWizardOpen(true);
    try {
      localStorage.setItem(`innovai_project_configured_${user.id}`, 'false');
    } catch {}
  };

  // --- Multi-User Operations ---
  const loginUser = (session: UserSession, options?: { isNewUser?: boolean }) => {
    // Save to users list if not present or update existing
    setUsers(prev => {
      const idx = prev.findIndex(u => u.email.toLowerCase() === session.email.toLowerCase() || u.id === session.id);
      if (idx >= 0) {
        const updated = [...prev];
        updated[idx] = { ...updated[idx], ...session };
        return updated;
      }
      return [session, ...prev];
    });

    setUserState(session);
    setIsAuthenticated(true);

    const isNew = options?.isNewUser ?? (session.hasConfiguredProject === false || !['usr-priya', 'usr-vidhu', 'usr-alex'].includes(session.id));
    const savedConfig = localStorage.getItem(`innovai_project_configured_${session.id}`);
    const configured = savedConfig !== null ? savedConfig === 'true' : !isNew;

    setHasConfiguredProjectState(configured);
    if (!configured) {
      setIsWizardOpen(true);
    }

    try {
      localStorage.setItem('innovai_is_authenticated', 'true');
      localStorage.setItem('innovai_user_session', JSON.stringify(session));
      localStorage.setItem(`innovai_project_configured_${session.id}`, String(configured));
    } catch {}
  };

  const logoutUser = () => {
    setIsAuthenticated(false);
    try {
      localStorage.removeItem('innovai_is_authenticated');
    } catch {}
  };

  const switchUser = (userId: string) => {
    const target = users.find(u => u.id === userId);
    if (target) {
      setUserState(target);
      setIsAuthenticated(true);

      const savedConfig = localStorage.getItem(`innovai_project_configured_${target.id}`);
      const configured = savedConfig !== null ? savedConfig === 'true' : ['usr-priya', 'usr-vidhu', 'usr-alex'].includes(target.id);
      setHasConfiguredProjectState(configured);
      if (!configured) {
        setIsWizardOpen(true);
      }

      try {
        localStorage.setItem('innovai_is_authenticated', 'true');
        localStorage.setItem('innovai_user_session', JSON.stringify(target));
      } catch {}
    }
  };

  const addUser = (newUser: UserSession) => {
    setUsers(prev => [newUser, ...prev.filter(u => u.id !== newUser.id)]);
  };

  const deleteUser = (userId: string) => {
    if (users.length <= 1) return;
    const remaining = users.filter(u => u.id !== userId);
    setUsers(remaining);
    if (user.id === userId) {
      setUserState(remaining[0]);
    }
  };

  const setUser = (u: UserSession) => {
    setUserState(u);
    setUsers(prev => {
      const idx = prev.findIndex(item => item.id === u.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = u;
        return copy;
      }
      return [u, ...prev];
    });
  };

  // Backward compatibility
  const switchStartupPreset = (presetId: string) => {
    switchProject(presetId);
  };

  const createNewStartup = (newProject: Partial<StartupProject>) => {
    createNewProject(newProject);
  };

  const toggleTaskCompletion = (phaseId: number, taskId: string) => {
    updateStartup(prev => ({
      ...prev,
      updatedAt: new Date().toISOString()
    }));
  };

  const resetToDefault = () => {
    setProjects(INITIAL_PROJECTS_LIST);
    setActiveProjectId(INITIAL_PROJECTS_LIST[0].id);
    setCurrencyState('INR');
    setLanguageState('en');
    setUserState(INITIAL_USERS_LIST[1]);
  };

  return (
    <StartupContext.Provider
      value={{
        projects,
        startup: activeProject,
        activeProjectId,
        isProjectsModalOpen,
        setIsProjectsModalOpen,
        switchProject,
        createNewProject,
        duplicateProject,
        deleteProject,
        updateStartup,

        users,
        user,
        isAuthenticated,
        setIsAuthenticated,
        loginUser,
        logoutUser,
        switchUser,
        addUser,
        deleteUser,
        setUser,

        currency,
        language,
        activeTab,
        setCurrency,
        setLanguage,
        setActiveTab,
        t,

        isScenarioDrawerOpen,
        isNextActionDrawerOpen,
        isAuthModalOpen,
        isWizardOpen,
        hasConfiguredProject,
        setHasConfiguredProject,
        initializeProjectFromIntake,
        startNewEmptyProject,
        setIsScenarioDrawerOpen,
        setIsNextActionDrawerOpen,
        setIsAuthModalOpen,
        setIsWizardOpen,

        switchStartupPreset,
        createNewStartup,
        toggleTaskCompletion,
        resetToDefault,
      }}
    >
      {children}
    </StartupContext.Provider>
  );
};

export const useStartup = () => {
  const context = useContext(StartupContext);
  if (!context) {
    throw new Error('useStartup must be used within a StartupProvider');
  }
  return context;
};
