export type CurrencyCode = 'INR' | 'USD' | 'EUR' | 'GBP';
export type LanguageCode = 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn';

export type UserRole = 'Student' | 'Founder' | 'Co-Founder' | 'Entrepreneur' | 'Business Owner' | 'Investor' | 'Academic Supervisor';

export interface UserSession {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  phone?: string;
  country: string;
  preferredLanguage: LanguageCode;
  currency: CurrencyCode;
  isVerified: boolean;
  avatarUrl?: string;
  hasConfiguredProject?: boolean;
  companyOrOrg?: string;
  institution?: string; // Optional legacy compatibility
}

export interface CustomerPersona {
  id: string;
  name: string;
  role: string;
  demographics: string;
  painPoints: string[];
  buyingTriggers: string[];
  budgetAuthority: string;
  preferredChannels: string[];
}

export interface CompetitorItem {
  id: string;
  name: string;
  category: 'Direct' | 'Indirect' | 'Legacy';
  marketShare: string;
  keyStrengths: string;
  criticalWeaknesses: string;
  pricingStrategy: string;
  innovAiMoat: string;
}

export interface FailureVector {
  id: string;
  vectorNum: string;
  title: string;
  severity: 'Critical' | 'Warning' | 'High';
  description: string;
  actionableRemedy: string;
}

export interface TurnaroundAction {
  id: string;
  phase: string;
  action: string;
  expectedOutcome: string;
  timeframe: string;
}

export interface ScorecardCategory {
  category: string;
  score: number;
  maxScore: number;
  grade: string;
  rationale: string;
}

export interface AlternativeIdea {
  id: string;
  title: string;
  industry: string;
  pivotRationale: string;
  complexity: 'Low' | 'Medium' | 'High';
  estimatedCost: string;
  projectedRevenue: string;
  targetNiche: string;
}

export interface LifecyclePhase {
  id: number;
  name: string;
  estimatedWeeks: number;
  status: 'Completed' | 'In Progress' | 'Upcoming';
  completionPercentage: number;
  summary: string;
  tasks: {
    id: string;
    title: string;
    completed: boolean;
  }[];
  resources: string[];
  aiGuidance: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  skills: string[];
  salaryMonthly: number;
  equityPct: number;
  employmentType: 'Full-time' | 'Part-time' | 'Contractor' | 'Co-Founder';
  joinedDate: string;
}

export interface RecommendedHire {
  id: string;
  role: string;
  priority: 'Immediate (Month 1-3)' | 'Mid-Term (Month 3-6)' | 'Scale (Month 6-12)';
  salaryRange: string;
  keyResponsibilities: string;
  impactOnMilestone: string;
}

export interface SoftwareLicenseItem {
  id: string;
  name: string;
  category: 'Cloud / Hosting' | 'Database' | 'AI / LLM' | 'DevOps & CI/CD' | 'Security & Auth' | 'Analytics & CRM' | 'Productivity';
  purpose: string;
  isPaid: boolean;
  monthlyCost: number;
  licenseType: string;
  freeAlternative: string;
}

export interface BOMItem {
  id: string;
  component: string;
  spec: string;
  quantity: number;
  unitCost: number;
  supplier: string;
  leadTimeDays: number;
}

export interface MachineItem {
  id: string;
  name: string;
  purpose: string;
  purchaseCost: number;
  monthlyMaintenance: number;
  capacityPerMonth: number;
}

export interface HardwareOps {
  required: boolean;
  rawMaterials: BOMItem[];
  machinery: MachineItem[];
  factoryRentMonthly: number;
  workforceHeadcount: number;
  avgWorkerSalaryMonthly: number;
  utilitiesMonthly: number;
  unitManufacturingCost: number;
  monthlyProductionCapacity: number;
}

export interface FinancialForecastYear {
  year: number;
  revenue: number;
  costOfGoodsSold: number;
  grossProfit: number;
  operatingExpenses: number;
  netProfit: number;
  customerCount: number;
}

export interface PricingTier {
  id: string;
  name: string;
  priceMonthly: number;
  billingFrequency: 'Monthly' | 'Annual';
  targetSegment: string;
  features: string[];
  projectedCustomerSharePct: number;
}

export interface FundingStageItem {
  stage: string;
  targetAmount: number;
  timing: string;
  investorType: string;
  dilutionPct: string;
  keyRequirement: string;
}

export interface GrantItem {
  id: string;
  schemeName: string;
  issuingBody: string;
  grantAmount: string;
  eligibility: string;
  deadline: string;
  applicationLink: string;
}

export interface RiskItem {
  id: string;
  category: 'Market' | 'Technology' | 'Financial' | 'Regulatory' | 'Operational' | 'Team & Talent' | 'Execution' | 'Cybersecurity' | 'Competition' | 'Macroeconomic';
  title: string;
  probability: 'Low' | 'Medium' | 'High';
  impact: 'Low' | 'Medium' | 'High';
  riskScore: number;
  mitigationStrategy: string;
  contingencyPlan: string;
}

export interface SourceDocument {
  id: string;
  title: string;
  type: 'Market Report' | 'IEEE Paper' | 'Government Policy' | 'Competitor Teardown' | 'User Interview';
  authorOrSource: string;
  dateAdded: string;
  credibilityScore: number;
  keyInsights: string;
  urlOrFile?: string;
}

export interface NextActionRecommendation {
  id: string;
  title: string;
  category: string;
  priority: 'Critical' | 'High' | 'Medium';
  estimatedTime: string;
  estimatedCost: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  description: string;
  deliverable: string;
}

export interface ScenarioParams {
  name: 'best' | 'expected' | 'worst';
  label: string;
  monthlyGrowthRatePct: number;
  unitPriceMultiplier: number;
  churnRatePct: number;
  burnRateMultiplier: number;
  runwayMonths: number;
  estimatedValuation: number;
}

export interface AcademicProjectInfo {
  institution: string;
  institutionSubtitle: string;
  department: string;
  presentationType: string;
  projectTitle: string;
  presenter: string;
  studentId: string;
  supervisor: string;
  supervisorDesignation: string;
  sdgs: {
    number: number;
    name: string;
    type: 'Primary' | 'Secondary';
    reason: string;
  }[];
  basePaper: {
    title: string;
    authors: string;
    journal: string;
    year: number;
    doi: string;
    relevanceSummary: string;
  };
  literatureSurvey: {
    reference: string;
    year: number;
    description: string;
    technologyUsed: string;
    advantages: string;
    disadvantages: string;
  }[];
  experimentalResults: {
    parameter: string;
    observedResult: string;
    status: string;
  }[];
}

export interface StartupProject {
  id: string;
  name: string;
  tagline: string;
  ownerId?: string;
  founderName: string;
  coFounders: string[];
  industry: string;
  businessType: string;
  country: string;
  targetMarket: string;
  
  description: string;
  problemStatement: string;
  currentSolution: string;
  proposedSolution: string;
  uvpInnovation: string;
  
  currentPhaseIndex: number; // 0 to 16 (17 phases)
  isSoloFounder: boolean;
  isHardwareMode: boolean;
  
  healthScore: number;
  healthGrade: string;
  subscores: {
    marketPotential: number;
    technicalFeasibility: number;
    unitEconomics: number;
    competitiveMoat: number;
    riskMitigation: number;
    teamExecution: number;
    regulatoryReadiness: number;
  };
  
  valuationEstimate: number;
  initialInvestment: number;
  founderCapital: number;
  fundingReceived: number;
  monthlyBurnRate: number;
  runwayMonths: number;
  breakEvenUnits: number;
  breakEvenRevenueMonthly: number;
  currency: CurrencyCode;
  
  // Modules
  customerPersonas: CustomerPersona[];
  tamSamSom: {
    tam: number;
    sam: number;
    som: number;
    cagrPct: number;
    forecastYear: number;
  };
  swot: {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
  };
  pestle: {
    political: string[];
    economic: string[];
    social: string[];
    technological: string[];
    legal: string[];
    environmental: string[];
  };
  portersForces: {
    supplierPower: { level: 'Low' | 'Medium' | 'High', notes: string };
    buyerPower: { level: 'Low' | 'Medium' | 'High', notes: string };
    competitiveRivalry: { level: 'Low' | 'Medium' | 'High', notes: string };
    threatOfSubstitution: { level: 'Low' | 'Medium' | 'High', notes: string };
    threatOfNewEntrants: { level: 'Low' | 'Medium' | 'High', notes: string };
  };
  competitors: CompetitorItem[];
  failureAudit: {
    topDeadlyVectors: FailureVector[];
    unvalidatedAssumptions: string[];
    missingCommercialEvidence: string[];
    turnaroundPlan: TurnaroundAction[];
  };
  validationScorecard: {
    totalScore: number;
    grade: string;
    categories: ScorecardCategory[];
  };
  alternativeIdeas: AlternativeIdea[];
  soloFounderPlan: {
    roadmapSteps: string[];
    whatToBuildSolo: string[];
    whatToOutsource: string[];
    cofounderCriteria: string[];
  };
  teamMembers: TeamMember[];
  recommendedHires: RecommendedHire[];
  techArchitecture: {
    frontend: string[];
    backend: string[];
    database: string[];
    cloudDevops: string[];
    aiEngine: string[];
    security: string[];
    srsSummary: string;
  };
  softwareLicenses: SoftwareLicenseItem[];
  hardwareOps: HardwareOps;
  financialForecasts: FinancialForecastYear[];
  pricingTiers: PricingTier[];
  unitEconomics: {
    cac: number;
    ltv: number;
    ltvCacRatio: number;
    paybackMonths: number;
    grossMarginPct: number;
    monthlyChurnPct: number;
  };
  breakEvenModel: {
    unitSellingPrice: number;
    unitVariableCost: number;
    fixedMonthlyCost: number;
    contributionMarginPerUnit: number;
    breakEvenUnitsMonthly: number;
    breakEvenRevenueMonthly: number;
  };
  loanFundingAdvisor: {
    recommendedPath: string;
    fundingStages: FundingStageItem[];
    bankLoan: {
      principal: number;
      annualInterestRate: number;
      tenureMonths: number;
      monthlyEmi: number;
      totalInterest: number;
    };
    governmentGrants: GrantItem[];
  };
  riskMatrix: RiskItem[];
  sourceDocuments: SourceDocument[];
  nextActions: NextActionRecommendation[];
  scenarioParams: {
    best: ScenarioParams;
    expected: ScenarioParams;
    worst: ScenarioParams;
  };
  activeScenario: 'best' | 'expected' | 'worst';
  academicInfo: AcademicProjectInfo;
  createdAt: string;
  updatedAt: string;
}

export type ActiveModuleTab =
  | 'dashboard'
  | 'profile'
  | 'ai-cofounder'
  | 'lifecycle'
  | 'timeline'
  | 'problem-solution'
  | 'target-customers'
  | 'market-research'
  | 'competitors'
  | 'failure-audit'
  | 'validation-scorecard'
  | 'alternative-ideas'
  | 'explore-ideas'
  | 'solo-founder'
  | 'team-builder'
  | 'tech-planner'
  | 'software-licenses'
  | 'hardware-ops'
  | 'financials'
  | 'revenue-models'
  | 'break-even'
  | 'valuation'
  | 'funding-loans'
  | 'risk-matrix'
  | 'sources'
  | 'report-generator'
  | 'academic-presentation'
  | 'admin-settings';
