import { StartupProject, LifecyclePhase } from '../../types/startup';

export const INITIAL_17_PHASES: LifecyclePhase[] = [
  {
    id: 1,
    name: "1. Idea & Opportunity Identification",
    estimatedWeeks: 2,
    status: "Completed",
    completionPercentage: 100,
    summary: "Good qualitative depth achieved. Proceed to technical CAN-bus reverse-engineering.",
    tasks: [
      { id: "t1-1", title: "Document initial problem hypotheses and customer friction points", completed: true },
      { id: "t1-2", title: "Conduct primary qualitative interviews with 10 commercial fleet managers", completed: true },
      { id: "t1-3", title: "Synthesize target market macro trends and SDG 9 alignment", completed: true }
    ],
    resources: ["Customer survey scripts", "Notion workspace", "Fleet interview transcripts"],
    aiGuidance: "Opportunity is validated by high commercial EV fleet expansion mandates across Tier 1 & 2 cities."
  },
  {
    id: 2,
    name: "2. Problem Identification & Need Assessment",
    estimatedWeeks: 2,
    status: "Completed",
    completionPercentage: 100,
    summary: "Thermal spike patterns verified across 3 distinct vehicle chemistries.",
    tasks: [
      { id: "t2-1", title: "Map root causes of battery thermal runaway and sudden fleet breakdowns", completed: true },
      { id: "t2-2", title: "Quantify financial loss per immobilized commercial EV (₹14,500/day)", completed: true },
      { id: "t2-3", title: "Validate existing telematics failure to detect sub-surface cell degradation", completed: true }
    ],
    resources: ["Thermal camera data", "CAN-bus sniffer logs", "OEM battery maintenance manuals"],
    aiGuidance: "Pain point severity is critical (8.9/10). Fleet operators incur heavy contractual penalties on downtime."
  },
  {
    id: 3,
    name: "3. Market Research & TAM/SAM/SOM",
    estimatedWeeks: 3,
    status: "Completed",
    completionPercentage: 100,
    summary: "Target market is expanding rapidly at 42% CAGR. Focus on B2B delivery fleets.",
    tasks: [
      { id: "t3-1", title: "Calculate Total Addressable Market (TAM) for South Asian commercial EVs (₹4,500 Cr)", completed: true },
      { id: "t3-2", title: "Determine SAM (₹850 Cr) and 24-month SOM target (₹65 Cr / 7.5% share)", completed: true },
      { id: "t3-3", title: "Draft competitive SWOT, PESTLE, and Porter's 5 Forces analysis", completed: true }
    ],
    resources: ["Vahan database stats", "Industry analyst reports", "NITI Aayog EV Whitepaper"],
    aiGuidance: "Market opportunity score is 84/100. FAME-II and PM E-DRIVE policies create strong regulatory demand."
  },
  {
    id: 4,
    name: "4. Value Proposition Design & UVP",
    estimatedWeeks: 2,
    status: "Completed",
    completionPercentage: 100,
    summary: "Sub-second electrochemical impedance spectroscopy edge algorithm locked.",
    tasks: [
      { id: "t4-1", title: "Formulate crisp Unique Value Proposition (48-hr early thermal runaway warning)", completed: true },
      { id: "t4-2", title: "Map customer gain creators and pain relievers onto Value Proposition Canvas", completed: true },
      { id: "t4-3", title: "Define measurable proof: 96.4% precision vs legacy 62% threshold sensors", completed: true }
    ],
    resources: ["Strategyzer Canvas", "Comparative accuracy bench", "Patent prior art search"],
    aiGuidance: "UVP is defensible if edge algorithm parameters remain encrypted in local secure microcontroller enclaves."
  },
  {
    id: 5,
    name: "5. Competitor & Moat Benchmarking",
    estimatedWeeks: 2,
    status: "Completed",
    completionPercentage: 100,
    summary: "Benchmarked against 3 legacy telematics vendors and 2 global EV analytics players.",
    tasks: [
      { id: "t5-1", title: "Construct feature matrix benchmarking pricing, hardware BOM, and edge AI capability", completed: true },
      { id: "t5-2", title: "Audit competitor weaknesses (cloud latency, high monthly recurring fees)", completed: true },
      { id: "t5-3", title: "Establish proprietary data network effects moat from multi-fleet telemetry", completed: true }
    ],
    resources: ["Teardown reports", "Pricing sheets", "Customer switching friction study"],
    aiGuidance: "Our moat relies on on-device edge inference without requiring costly 24/7 high-bandwidth 4G streaming."
  },
  {
    id: 6,
    name: "6. Feasibility & Tech Architecture",
    estimatedWeeks: 3,
    status: "Completed",
    completionPercentage: 100,
    summary: "Layered architecture specified adhering to IEEE 830 software standards.",
    tasks: [
      { id: "t6-1", title: "Draft system architecture: Frontend Dashboard, Node/Express, TimescaleDB, MQTT", completed: true },
      { id: "t6-2", title: "Select edge silicon: STM32F4 + ESP32-S3 cellular gateway", completed: true },
      { id: "t6-3", title: "Draft IEEE SRS (Software Requirements Specification) document", completed: true }
    ],
    resources: ["IEEE 830 SRS draft", "C4 architecture diagrams", "Hardware schematic v1"],
    aiGuidance: "Architecture validated with 99.9% uptime target and sub-500ms telemetry alert delivery."
  },
  {
    id: 7,
    name: "7. Concept Validation & MVP Scoping",
    estimatedWeeks: 3,
    status: "Completed",
    completionPercentage: 100,
    summary: "MVP scope locked to core thermal prediction and real-time fleet dashboard.",
    tasks: [
      { id: "t7-1", title: "Define minimum viable feature set (P0: Alerting & RUL; P1: Driver score)", completed: true },
      { id: "t7-2", title: "Secure non-binding Letters of Intent (LOI) from 2 pilot fleet operators", completed: true },
      { id: "t7-3", title: "Validate willingness to pay ₹1,800/vehicle/month SaaS subscription", completed: true }
    ],
    resources: ["LOI templates", "MVP feature backlog", "Figma prototype walkthrough"],
    aiGuidance: "Customer commitments verified. Focus engineering only on P0 alerts to de-risk timeline."
  },
  {
    id: 8,
    name: "8. Prototype & MVP Development",
    estimatedWeeks: 4,
    status: "In Progress",
    completionPercentage: 75,
    summary: "Hardware PCB fabricated; edge firmware passing lab endurance tests.",
    tasks: [
      { id: "t8-1", title: "Fabricate 10 units of prototype Rev-B edge telematics hardware", completed: true },
      { id: "t8-2", title: "Integrate MQTT broker and real-time telemetry streaming ingestion pipeline", completed: true },
      { id: "t8-3", title: "Deploy web dashboard with real-time fleet telemetry visualization", completed: true },
      { id: "t8-4", title: "Conduct hardware bench stress test under 45°C ambient thermal chamber", completed: false }
    ],
    resources: ["PCB Gerbers", "Firmware repo", "Docker compose dev environment"],
    aiGuidance: "Current Milestone Gate: MVP Development. Priority is closing thermal chamber validation."
  },
  {
    id: 9,
    name: "9. Hardware BOM & Manufacturing Ops",
    estimatedWeeks: 4,
    status: "In Progress",
    completionPercentage: 40,
    summary: "BOM cost optimized to ₹4,850/unit; tooling quotations requested in Pune.",
    tasks: [
      { id: "t9-1", title: "Finalize Component Bill of Materials (BOM) with dual-source distributors", completed: true },
      { id: "t9-2", title: "Contract SMT assembly partner for pilot batch of 100 units", completed: true },
      { id: "t9-3", title: "Design IP67 injection molded enclosure with automotive wiring harness", completed: false },
      { id: "t9-4", title: "Establish quality assurance pass/fail calibration rig", completed: false }
    ],
    resources: ["BOM cost model", "SMT quotation matrix", "3D CAD enclosure step files"],
    aiGuidance: "Hardware lead times are 6-8 weeks for automotive CAN transceivers. Buffer inventory early."
  },
  {
    id: 10,
    name: "10. Alpha/Beta Testing & Pilots",
    estimatedWeeks: 4,
    status: "Upcoming",
    completionPercentage: 0,
    summary: "On-vehicle deployment scheduled across 25 logistics 3-wheelers in Chennai.",
    tasks: [
      { id: "t10-1", title: "Install devices on 25 commercial EV delivery vehicles", completed: false },
      { id: "t10-2", title: "Record 50,000 km of real-world operational driving telemetry", completed: false },
      { id: "t10-3", title: "Verify false positive rate remains under 1.5% during rapid charging", completed: false }
    ],
    resources: ["Fleet pilot agreement", "Technician installation checklist"],
    aiGuidance: "Ensure vehicle mechanics sign off on CAN-bus splice-free OBD-II/J1939 cable harnesses."
  },
  {
    id: 11,
    name: "11. Regulatory & IP Compliance",
    estimatedWeeks: 3,
    status: "Upcoming",
    completionPercentage: 0,
    summary: "AIS-140 compliance pre-testing and provisional patent filing.",
    tasks: [
      { id: "t11-1", title: "File Indian provisional patent for EIS edge predictive algorithm", completed: false },
      { id: "t11-2", title: "Obtain ARAI / ICAT certification guidance for AIS-140 vehicle tracking", completed: false },
      { id: "t11-3", title: "Implement GDPR & DPDP Act compliance for driver location telemetry", completed: false }
    ],
    resources: ["Patent attorney brief", "ARAI AIS-140 standard document"],
    aiGuidance: "AIS-140 compliance is mandatory for commercial fleet permits in India. Do not delay."
  },
  {
    id: 12,
    name: "12. Business Model & Pricing Strategy",
    estimatedWeeks: 2,
    status: "Upcoming",
    completionPercentage: 0,
    summary: "Hardware-enabled SaaS model with upfront device deposit and recurring MRR.",
    tasks: [
      { id: "t12-1", title: "Formalize Tier 1 (₹1,499/mo) and Tier 2 Enterprise (₹2,499/mo) pricing", completed: false },
      { id: "t12-2", title: "Model unit economics: ₹4,850 BOM vs 4-month payback on SaaS revenue", completed: false },
      { id: "t12-3", title: "Prepare master services agreement and SLA guarantees (99.8%)", completed: false }
    ],
    resources: ["SaaS financial model", "Enterprise MSA contract template"],
    aiGuidance: "A zero-down hardware lease model lowers barrier to entry and drives 3x faster fleet adoption."
  },
  {
    id: 13,
    name: "13. Launch & Go-To-Market",
    estimatedWeeks: 4,
    status: "Upcoming",
    completionPercentage: 0,
    summary: "Targeting top 5 cold-chain and last-mile EV logistics companies in South India.",
    tasks: [
      { id: "t13-1", title: "Launch customer self-serve web portal and fleet mobile app", completed: false },
      { id: "t13-2", title: "Publish pilot case study showing 38% battery lifespan extension", completed: false },
      { id: "t13-3", title: "Initiate targeted outbound outreach to 50 EV fleet directors", completed: false }
    ],
    resources: ["Product marketing deck", "Case study PDF", "Press release draft"],
    aiGuidance: "Lead with battery replacement cost savings (ROI within 60 days of prevented pack failure)."
  },
  {
    id: 14,
    name: "14. Customer Feedback & Iteration",
    estimatedWeeks: 3,
    status: "Upcoming",
    completionPercentage: 0,
    summary: "Weekly telemetry accuracy reviews with fleet maintenance dispatchers.",
    tasks: [
      { id: "t14-1", title: "Setup automated CSAT and bug tracking for fleet operators", completed: false },
      { id: "t14-2", title: "Iterate firmware OTA update pipeline for algorithm tuning", completed: false },
      { id: "t14-3", title: "Measure Net Promoter Score (target NPS > 55)", completed: false }
    ],
    resources: ["Zendesk / Linear board", "OTA firmware deployment server"],
    aiGuidance: "Fleet operators care about simple WhatsApp alerts over complex dashboard charts."
  },
  {
    id: 15,
    name: "15. Seed / Angel Fundraising",
    estimatedWeeks: 6,
    status: "Upcoming",
    completionPercentage: 0,
    summary: "Targeting ₹2.5 Cr seed round at ₹12 Cr post-money valuation.",
    tasks: [
      { id: "t15-1", title: "Finalize 10-slide institutional investor pitch deck and data room", completed: false },
      { id: "t15-2", title: "Pitch CleanTech and Mobility angel syndicates in Bangalore & Chennai", completed: false },
      { id: "t15-3", title: "Negotiate term sheet with lead investor for 15-18% dilution", completed: false }
    ],
    resources: ["Pitch deck slides", "Cap table spreadsheet", "Virtual data room"],
    aiGuidance: "Highlight 16-month runway and strong unit economics (LTV:CAC ratio > 4.2x)."
  },
  {
    id: 16,
    name: "16. Team Scaling & Operations",
    estimatedWeeks: 4,
    status: "Upcoming",
    completionPercentage: 0,
    summary: "Hire Lead Embedded Engineer, Field Deployment Technicians, and B2B Account Executive.",
    tasks: [
      { id: "t16-1", title: "Recruit Senior Firmware Engineer with automotive CAN-bus experience", completed: false },
      { id: "t16-2", title: "Establish field operations hub in Sriperumbudur / Chennai auto corridor", completed: false },
      { id: "t16-3", title: "Formulate Employee Stock Ownership Plan (ESOP) pool (10%)", completed: false }
    ],
    resources: ["Job descriptions", "ESOP policy document", "Offer letter templates"],
    aiGuidance: "Keep burn rate controlled by tying non-core compensation to milestone-based equity."
  },
  {
    id: 17,
    name: "17. Product-Market Fit & Scale",
    estimatedWeeks: 8,
    status: "Upcoming",
    completionPercentage: 0,
    summary: "Expand deployment to 10,000 connected commercial vehicles across South Asia.",
    tasks: [
      { id: "t17-1", title: "Achieve ₹25 Lakh Monthly Recurring Revenue (MRR)", completed: false },
      { id: "t17-2", title: "Partner with top 3 EV battery pack OEMs for factory pre-installation", completed: false },
      { id: "t17-3", title: "Expand sales presence to Delhi-NCR, Mumbai, and Hyderabad corridors", completed: false }
    ],
    resources: ["OEM partnership agreement", "National sales playbook"],
    aiGuidance: "Scale OEM integrations to turn software into an industry-standard pre-installed safety layer."
  }
];

export const ECOFLEET_STARTUP_SAMPLE: StartupProject = {
  id: "ecofleet-ai",
  name: "EcoFleet AI",
  tagline: "Proprietary sub-second electrochemical impedance spectroscopy (EIS) edge algorithm that predicts thermal runaway and remaining useful battery life (RUL) 48 hours before failure with 96.4% precision.",
  founderName: "Priya Sharma",
  coFounders: ["Dr. K. Raman (Hardware Architect)", "Vidhyashree L.G. (AI & Systems Lead)"],
  industry: "CleanTech & Commercial EV Logistics",
  businessType: "Hardware-Enabled B2B SaaS & Fleet IoT",
  country: "India",
  targetMarket: "Tier 1 & Tier 2 Commercial EV Fleet Operators & Logistics Providers across South Asia",
  
  description: "EcoFleet AI builds edge-computing battery telemetry gateways and AI predictive maintenance software for commercial electric vehicle fleets. By sampling cell impedance in real time, it identifies micro-short circuits and thermal runaway risks 48 hours before failure, protecting lives, cargo, and multi-crore fleet investments.",
  problemStatement: "Commercial EV delivery and bus fleets suffer catastrophic battery degradation, unpredicted roadside breakdowns, and thermal runaway fires due to extreme tropical temperatures (40-48°C) and aggressive fast-charging cycles. Existing OBD telematics only read superficial voltage/current thresholds when damage is already irreversible.",
  currentSolution: "Fleet operators rely on reactive roadside assistance, arbitrary 6-month battery replacement schedules, and basic GPS trackers with rudimentary temperature alarms that trigger only after cells overheat past 60°C.",
  proposedSolution: "An edge-computed electrochemical impedance spectroscopy (EIS) telematics device coupled with cloud predictive algorithms that monitors cell health at 100Hz, forecasting cell degradation and thermal runaway 48 hours in advance.",
  uvpInnovation: "First commercially viable sub-second EIS sensor capable of operating in noisy automotive electrical environments, packaged into a plug-and-play IP67 gateway costing under ₹5,000 BOM.",
  
  currentPhaseIndex: 7, // Phase 8: MVP Development
  isSoloFounder: false,
  isHardwareMode: true,
  
  healthScore: 89,
  healthGrade: "Grade A",
  subscores: {
    marketPotential: 92,
    technicalFeasibility: 88,
    unitEconomics: 85,
    competitiveMoat: 91,
    riskMitigation: 84,
    teamExecution: 90,
    regulatoryReadiness: 92,
  },
  
  valuationEstimate: 22100000, // ₹2.21 Cr ($265,000)
  initialInvestment: 3500000,  // ₹35 Lakh
  founderCapital: 2000000,     // ₹20 Lakh
  fundingReceived: 1500000,    // ₹15 Lakh grant & angel
  monthlyBurnRate: 357000,     // ₹3.57 Lakh/month
  runwayMonths: 16,            // 16 Months runway
  breakEvenUnits: 479,         // 479 Units / year
  breakEvenRevenueMonthly: 1104200, // ₹11.04 Lakh / month
  currency: 'INR',
  
  customerPersonas: [
    {
      id: "cp-1",
      name: "Commercial EV Fleet Director",
      role: "VP Operations / Fleet Head",
      demographics: "35-50 yrs, manages 200-1500 EV delivery vans & 3-wheelers for e-commerce giants",
      painPoints: [
        "Unscheduled battery failure halts delivery routes costing ₹15,000/day in SLA breach",
        "Battery pack replacements cost ₹2.5-4.5 Lakhs per vehicle outside warranty",
        "Driver anxiety regarding real-time remaining range in heavy traffic"
      ],
      buyingTriggers: [
        "One thermal fire incident triggers insurance audit and enterprise brand crisis",
        "Urgent requirement to extend vehicle operational lifespan from 3 to 5 years"
      ],
      budgetAuthority: "High (Authority over ₹50L+ annual maintenance contracts)",
      preferredChannels: ["Direct enterprise sales", "Automotive mobility expos", "OEM supplier referrals"]
    },
    {
      id: "cp-2",
      name: "EV Battery Pack Manufacturer (OEM)",
      role: "Chief Technology Officer / VP Quality",
      demographics: "Automotive battery pack manufacturing companies in Chennai, Pune, NCR",
      painPoints: [
        "High warranty claims due to abusive fast-charging by fleet drivers",
        "Lack of field telemetry on cell aging across diverse regional climates"
      ],
      buyingTriggers: [
        "Mandatory AIS-156 safety standards requiring predictive thermal protection",
        "Desire to offer battery-as-a-service (BaaS) with guaranteed performance"
      ],
      budgetAuthority: "Enterprise procurement (annual licensing & white-label hardware)",
      preferredChannels: ["Technical co-engineering pilots", "IEEE automotive conferences"]
    }
  ],

  tamSamSom: {
    tam: 45000000000, // ₹4,500 Cr
    sam: 8500000000,  // ₹850 Cr
    som: 650000000,   // ₹65 Cr
    cagrPct: 38.6,
    forecastYear: 2030,
  },

  swot: {
    strengths: [
      "Proprietary sub-second CAN-bus edge firmware compatible with 18+ commercial EV models",
      "Dual co-founders with ex-Ather Energy and Bosch automotive R&D backgrounds",
      "96.4% verified accuracy in predicting cell thermal hotspots in pilot tests",
      "Cost advantage: Edge gateway manufactured domestically in Pune at 40% lower BOM cost"
    ],
    weaknesses: [
      "Hardware inventory requires working capital for raw PCB components and microcontrollers",
      "Longer B2B sales cycles (60-90 days for enterprise fleet pilots)",
      "Brand awareness currently limited to Western & Southern India automotive hubs"
    ],
    opportunities: [
      "Mandatory Indian government FAME-II and PM E-DRIVE safety compliance mandates for EV telemetry",
      "Commercial fleet electrification projected to grow at 42% CAGR through 2030",
      "Carbon credit trading integration for commercial fleets demonstrating certified emission cuts"
    ],
    threats: [
      "Automotive OEMs locking down vehicle CAN-bus encrypted protocols in future model iterations",
      "Global semiconductor lead-time spikes affecting microcontroller unit availability",
      "Aggressive pricing discounts from legacy GPS tracking giants entering EV segments"
    ]
  },

  pestle: {
    political: ["PM E-DRIVE subsidy scheme promotes commercial vehicle telematics", "Make in India domestic manufacturing tax deductions"],
    economic: ["High fuel prices accelerating commercial transition to electric fleets", "Rising capital costs for vehicle leasing companies"],
    social: ["Urban demand for silent, non-polluting last-mile deliveries", "Growing driver awareness of EV battery safety"],
    technological: ["Advancements in ultra-low power ARM microcontrollers (Cortex-M4)", "High-speed 4G/5G cellular IoT network coverage"],
    legal: ["AIS-140 and AIS-156 Amendment 3 safety norms enforce strict battery monitoring", "Digital Personal Data Protection Act compliance"],
    environmental: ["Direct reduction of battery scrap by extending cell lifecycle by 2.2 years", "Avoidance of toxic lithium fire emissions"]
  },

  portersForces: {
    supplierPower: { level: "Medium", notes: "Multiple electronics distributors exist for STM32 microchips, though lead times fluctuate." },
    buyerPower: { level: "Medium", notes: "Large fleet operators have negotiating power, but our 48-hr safety feature provides unique leverage." },
    competitiveRivalry: { level: "Low", notes: "Existing competitors only do basic GPS and speed tracking, not electrochemical cell spectroscopy." },
    threatOfSubstitution: { level: "Low", notes: "OEM built-in BMS sensors lack predictive RUL algorithms and external cloud intelligence." },
    threatOfNewEntrants: { level: "Medium", notes: "High technical barriers in automotive CAN reverse engineering and hardware reliability certification." }
  },

  competitors: [
    {
      id: "c-1",
      name: "FleetLocate Legacy GPS",
      category: "Legacy",
      marketShare: "28%",
      keyStrengths: "Installed base of 40,000 vehicles, low-cost GPS hardware",
      criticalWeaknesses: "No battery impedance telemetry, high false-alarm rates, cloud latency > 15s",
      pricingStrategy: "₹450/month device fee",
      innovAiMoat: "We provide sub-second edge AI thermal safety 48 hours before cell failure."
    },
    {
      id: "c-2",
      name: "VoltaSense US",
      category: "Direct",
      marketShare: "8%",
      keyStrengths: "Advanced cloud models, strong VC funding ($15M)",
      criticalWeaknesses: "Extremely expensive ($45/vehicle/mo), hardware incompatible with Asian 3W/2W protocols",
      pricingStrategy: "$45/month SaaS + $400 hardware fee",
      innovAiMoat: "Engineered specifically for Indian ambient heat (45°C) and priced at 70% lower total cost of ownership."
    },
    {
      id: "c-3",
      name: "OEM In-House Dashboards",
      category: "Indirect",
      marketShare: "35%",
      keyStrengths: "Pre-installed by vehicle manufacturers at factory gate",
      criticalWeaknesses: "Locked to single OEM brand; fleet operators with mixed fleets cannot view a single dashboard",
      pricingStrategy: "Bundled in vehicle purchase",
      innovAiMoat: "Universal multi-brand compatibility across Tata, Mahindra, Piaggio, and Euler vehicles."
    }
  ],

  failureAudit: {
    topDeadlyVectors: [
      {
        id: "fv-1",
        vectorNum: "VECTOR 01",
        title: "B2B Sales Inertia & Slow Pilot Conversion",
        severity: "Critical",
        description: "Fleet operators agree to try free pilots but take 4-8 months to sign commercial contracts due to conservative executive sign-offs.",
        actionableRemedy: "Offer a zero-risk 30-day performance guarantee: if we do not detect at least 1 critical battery anomaly or save 5% maintenance cost, full hardware refund."
      },
      {
        id: "fv-2",
        vectorNum: "VECTOR 02",
        title: "Over-Engineering Hardware Features Before Proving Unit Margins",
        severity: "Critical",
        description: "Adding too many auxiliary sensors drives BOM cost from ₹5,000 to ₹8,500, crushing hardware gross margins.",
        actionableRemedy: "Freeze Rev-B schematic to essential CAN transceiver and STM32 MCU. Move all secondary analytics to cloud microservices."
      },
      {
        id: "fv-3",
        vectorNum: "VECTOR 03",
        title: "OEM CAN-bus Protocol Fragmentation",
        severity: "Warning",
        description: "Each Indian EV manufacturer uses non-standard proprietary DBC files, requiring custom reverse-engineering per vehicle model.",
        actionableRemedy: "Develop auto-baud and neural DBC decoders that automatically map battery voltage and temperature PIDs without manual calibration."
      }
    ],
    unvalidatedAssumptions: [
      "Assumption that fleet managers look at dashboards every day (in reality, they only care about automated WhatsApp/SMS emergency alerts).",
      "Assumption that mechanics will handle gateway wiring carefully without stripping delicate CAN wires.",
      "Assumption that 4G network coverage is continuous along commercial intercity logistics highways."
    ],
    missingCommercialEvidence: [
      "Lack of published third-party laboratory verification proving battery lifespan is truly extended by 38% under Indian ambient heat.",
      "Customer churn rate data after the first 12 months of pilot deployment."
    ],
    turnaroundPlan: [
      {
        id: "tp-1",
        phase: "Week 1-2",
        action: "Deploy WhatsApp Business API Webhooks for instant red-alert notifications to dispatchers",
        expectedOutcome: "Immediate 95% open rate on thermal warnings within 60 seconds",
        timeframe: "14 Days"
      },
      {
        id: "tp-2",
        phase: "Week 3-4",
        action: "Partner with IIT Madras or ARAI for accredited third-party validation report",
        expectedOutcome: "Irrefutable academic and government certification for marketing collateral",
        timeframe: "28 Days"
      },
      {
        id: "tp-3",
        phase: "Month 2",
        action: "Switch to OBD-II snap-on harness to eliminate wire-splicing during garage installation",
        expectedOutcome: "Installation time reduced from 45 minutes to 4 minutes per vehicle",
        timeframe: "45 Days"
      }
    ]
  },

  validationScorecard: {
    totalScore: 84,
    grade: "Grade A (High Potential)",
    categories: [
      { category: "Problem-Solution Fit", score: 9.2, maxScore: 10, grade: "Exceptional", rationale: "Validated battery fires and pack replacement costs represent top operational headaches for commercial fleets." },
      { category: "Market Size & Growth", score: 8.8, maxScore: 10, grade: "Strong", rationale: "Commercial EV segment growing at 38%+ CAGR driven by government incentives and delivery economics." },
      { category: "Technical Feasibility", score: 8.5, maxScore: 10, grade: "High", rationale: "STM32 edge architecture proven in bench tests; pending final high-temperature environmental chamber test." },
      { category: "Competitive Moat & IP", score: 8.9, maxScore: 10, grade: "Defensible", rationale: "Proprietary EIS algorithm and multi-fleet machine learning feedback loop create high switching barriers." },
      { category: "Monetization & Unit Economics", score: 8.2, maxScore: 10, grade: "Solid", rationale: "Hardware break-even in 4 months via SaaS subscription of ₹1,499-2,499/vehicle/mo." },
      { category: "Customer Acquisition & Sales", score: 7.4, maxScore: 10, grade: "Moderate", rationale: "B2B enterprise sales cycles require dedicated account reps and pilot deployment assistance." },
      { category: "Regulatory & Compliance Readiness", score: 9.0, maxScore: 10, grade: "Compliant", rationale: "Aligned with AIS-140 and AIS-156 mandates; DPIIT Startup India registered." },
      { category: "Capital Efficiency & Runway", score: 8.6, maxScore: 10, grade: "Safe", rationale: "16 months of runway with ₹57.20 Lakh current liquid assets and low fixed overhead." },
      { category: "Team Execution Strength", score: 8.7, maxScore: 10, grade: "Experienced", rationale: "Complementary technical, automotive, and AI engineering skill sets." },
      { category: "Scalability & Global Potential", score: 8.1, maxScore: 10, grade: "Expansive", rationale: "Easily portable to Southeast Asian and Middle Eastern fleet markets with hot climates." },
      { category: "SDG & Social Impact", score: 9.5, maxScore: 10, grade: "Transformative", rationale: "Direct contribution to SDG 9 (Innovation & Infrastructure) and SDG 8 (Green Economy)." }
    ]
  },

  alternativeIdeas: [
    {
      id: "pi-1",
      title: "Battery Health Passport for Used EV Resale Financing",
      industry: "FinTech & InsurTech",
      pivotRationale: "Instead of monthly fleet telematics, sell certified battery health certificates to NBFCs and banks financing second-hand EV vehicles.",
      complexity: "Low",
      estimatedCost: "₹3,50,000",
      projectedRevenue: "₹85 Lakh/year via ₹1,500 per certification",
      targetNiche: "Used vehicle platforms (Cars24, Spinny) & NBFC lenders"
    },
    {
      id: "pi-2",
      title: "Second-Life Battery Energy Storage Systems (BESS) Optimizer",
      industry: "CleanTech & Grid Storage",
      pivotRationale: "Repurpose retired EV batteries for solar farm microgrids using the same impedance algorithm to balance degraded cells.",
      complexity: "Medium",
      estimatedCost: "₹8,00,000",
      projectedRevenue: "₹1.4 Cr/year in renewable storage consulting and management",
      targetNiche: "Commercial solar rooftop and telecom tower battery banks"
    },
    {
      id: "pi-3",
      title: "BMS Chipset Intellectual Property Licensing to Tier 1 Suppliers",
      industry: "Semiconductor IP",
      pivotRationale: "Eliminate hardware manufacturing entirely; license the embedded EIS C-code directly to Infineon, TI, or NXP battery management chips.",
      complexity: "High",
      estimatedCost: "₹15,00,000",
      projectedRevenue: "₹4.2 Cr in recurring silicon royalty fees ($0.80 per chip)",
      targetNiche: "Automotive semiconductor tier 1 and tier 2 suppliers"
    }
  ],

  soloFounderPlan: {
    roadmapSteps: [
      "Month 1: Focus 100% on software web dashboard and simulated CAN data ingestion.",
      "Month 2: Outsource PCB layout and SMT soldering to specialized electronics assembly houses in Bangalore/Pune.",
      "Month 3: Secure 2 pilot fleet champions using founder-led outreach on LinkedIn.",
      "Month 4: Hire a contract firmware engineer once initial pilot milestone revenue is validated."
    ],
    whatToBuildSolo: [
      "Full-stack React / Express / TimescaleDB fleet tracking dashboard",
      "Customer discovery interviews and B2B pricing model",
      "Python data science scripts for EIS feature extraction",
      "Investor pitch deck and grant applications (BIRAC, Startup India)"
    ],
    whatToOutsource: [
      "Multi-layer PCB layout & EMC/EMI compliance pre-testing",
      "Automotive wiring harness assembly and crimping",
      "IP67 plastic enclosure tooling and injection molding",
      "Legal trademark, patent drafting, and company incorporation"
    ],
    cofounderCriteria: [
      "Embedded C / Automotive Firmware Engineer with 3+ years experience with STM32/CAN protocols",
      "Enterprise B2B mobility sales lead who has sold to Delhivery, Bluedart, or BigBasket fleets"
    ]
  },

  teamMembers: [
    {
      id: "tm-1",
      name: "Priya Sharma",
      role: "Founder & CEO",
      skills: ["Product Strategy", "B2B Sales", "CleanTech Policy", "Financial Modeling"],
      salaryMonthly: 75000,
      equityPct: 52,
      employmentType: "Co-Founder",
      joinedDate: "2024-06-01"
    },
    {
      id: "tm-2",
      name: "Dr. K. Raman",
      role: "Chief Technology Officer",
      skills: ["Electrochemical Impedance", "Battery Chemistry", "Embedded Hardware"],
      salaryMonthly: 90000,
      equityPct: 28,
      employmentType: "Co-Founder",
      joinedDate: "2024-06-15"
    },
    {
      id: "tm-3",
      name: "Vidhyashree L.G.",
      role: "Lead Systems & AI Engineer",
      skills: ["Full-Stack Architecture", "Time-Series ML", "Edge Gateway Integration", "IEEE Compliance"],
      salaryMonthly: 70000,
      equityPct: 15,
      employmentType: "Full-time",
      joinedDate: "2024-08-01"
    }
  ],

  recommendedHires: [
    {
      id: "rh-1",
      role: "Senior Embedded C / RTOS Engineer",
      priority: "Immediate (Month 1-3)",
      salaryRange: "₹80,000 - ₹1,10,000 / mo",
      keyResponsibilities: "Own CAN-bus firmware, FreeRTOS task scheduling, and secure OTA flash updates.",
      impactOnMilestone: "Directly unlocks Phase 10 beta test across 25 vehicles."
    },
    {
      id: "rh-2",
      role: "Field Operations & Fleet Installation Lead",
      priority: "Mid-Term (Month 3-6)",
      salaryRange: "₹45,000 - ₹60,000 / mo",
      keyResponsibilities: "Manage vehicle garage installations, mechanic training, and physical RMA debugging.",
      impactOnMilestone: "Reduces installation turnaround time by 75%."
    },
    {
      id: "rh-3",
      role: "B2B Mobility Account Executive",
      priority: "Scale (Month 6-12)",
      salaryRange: "₹70,000 + performance bonus",
      keyResponsibilities: "Scale commercial pipeline to 50 enterprise fleets and close multi-year SaaS contracts.",
      impactOnMilestone: "Accelerates path to ₹25 Lakh MRR."
    }
  ],

  techArchitecture: {
    frontend: ["React 19 (TypeScript)", "Tailwind CSS v4 (Glassmorphic Dark UI)", "Motion for smooth transitions", "Lucide React Icons"],
    backend: ["Node.js with Express & TypeScript", "RESTful API Controllers", "MQTT WebSocket Ingestion", "JWT & Role-Based Auth"],
    database: ["PostgreSQL / TimescaleDB (Time-series telemetry)", "Redis (High-speed telemetry cache)", "Local SQLite Sync"],
    cloudDevops: ["Docker containerization", "Cloud Run / AWS ECS", "Grafana telemetry monitoring", "GitHub Actions CI/CD"],
    aiEngine: ["Google Gemini 3.8 Flash SDK (@google/genai)", "Edge EIS Impedance Feature Extraction", "Heuristic Failure Synthesizer"],
    security: ["TLS 1.3 encryption", "Hardware Secure Enclave (ATECC608A)", "AES-256 telemetry encryption at rest", "AIS-140 safety guardrails"],
    srsSummary: "Compliant with IEEE Std 830-1998 Software Requirements Specification. Modular 3-tier microservices with sub-second latency SLA."
  },

  softwareLicenses: [
    {
      id: "sw-1",
      name: "TimescaleDB Cloud / PostgreSQL",
      category: "Database",
      purpose: "Time-series battery voltage, current, and temperature storage",
      isPaid: true,
      monthlyCost: 4500,
      licenseType: "Commercial Cloud",
      freeAlternative: "Self-hosted PostgreSQL with Timescale extension on Hetzner VPS"
    },
    {
      id: "sw-2",
      name: "EMQX MQTT Broker Cluster",
      category: "Cloud / Hosting",
      purpose: "Ingesting 100Hz real-time telematics pings from 1,000+ vehicle gateways",
      isPaid: true,
      monthlyCost: 6500,
      licenseType: "Managed Cloud",
      freeAlternative: "Self-hosted Mosquitto MQTT server (zero software cost)"
    },
    {
      id: "sw-3",
      name: "Google Gemini 3.8 Flash API",
      category: "AI / LLM",
      purpose: "Intelligent diagnostic synthesis, risk audit, and report generation",
      isPaid: true,
      monthlyCost: 3200,
      licenseType: "API Pay-as-you-go",
      freeAlternative: "Local Ollama / Llama 3.2 quant on private server"
    },
    {
      id: "sw-4",
      name: "Twilio / WhatsApp Business API",
      category: "Analytics & CRM",
      purpose: "Automated emergency dispatch alerts for thermal spikes",
      isPaid: true,
      monthlyCost: 2800,
      licenseType: "Per-message usage",
      freeAlternative: "Telegram Bot API webhooks (completely free)"
    },
    {
      id: "sw-5",
      name: "GitHub Enterprise & CI/CD Actions",
      category: "DevOps & CI/CD",
      purpose: "Automated firmware regression tests and web build pipelines",
      isPaid: true,
      monthlyCost: 1800,
      licenseType: "Team Plan",
      freeAlternative: "GitHub Free / GitLab self-hosted"
    }
  ],

  hardwareOps: {
    required: true,
    rawMaterials: [
      { id: "bom-1", component: "STM32F405 Automotive Microcontroller", spec: "ARM Cortex-M4 168MHz with FPU", quantity: 1, unitCost: 850, supplier: "Mouser / ST Micro", leadTimeDays: 14 },
      { id: "bom-2", component: "Dual High-Speed CAN Transceiver", spec: "ISO 11898-2 compliant with fault protection", quantity: 2, unitCost: 180, supplier: "Texas Instruments", leadTimeDays: 7 },
      { id: "bom-3", component: "Quectel EG915N 4G LTE-M / 2G Cellular Modem", spec: "GNSS GPS integrated with micro-SIM slot", quantity: 1, unitCost: 1450, supplier: "Quectel Wireless", leadTimeDays: 21 },
      { id: "bom-4", component: "Electrochemical Impedance Analog Front-End", spec: "Custom precision excitation capacitor & op-amps", quantity: 1, unitCost: 620, supplier: "Analog Devices", leadTimeDays: 10 },
      { id: "bom-5", component: "4-Layer Automotive Grade FR4 PCB", spec: "1.6mm thickness, ENIG gold finish", quantity: 1, unitCost: 380, supplier: "JLCPCB / Domestic SMT", leadTimeDays: 12 },
      { id: "bom-6", component: "IP67 Polycarbonate Enclosure & Cable Gland", spec: "Flame retardant UL94-V0 with automotive seal", quantity: 1, unitCost: 420, supplier: "Domestic Tooling Pune", leadTimeDays: 15 },
      { id: "bom-7", component: "Automotive Wire Harness (J1939 / OBD-II)", spec: "Shielded twisted pair with automotive fuse tap", quantity: 1, unitCost: 350, supplier: "Local Tier-2 Harness Maker", leadTimeDays: 7 }
    ],
    machinery: [
      { id: "m-1", name: "SMT Pick-and-Place Machine (Contract Leased)", purpose: "Automated surface-mount component soldering", purchaseCost: 1400000, monthlyMaintenance: 15000, capacityPerMonth: 2500 },
      { id: "m-2", name: "Thermal Environmental Chamber (-20°C to +80°C)", purpose: "Automotive stress testing and calibration", purchaseCost: 450000, monthlyMaintenance: 8000, capacityPerMonth: 500 },
      { id: "m-3", name: "CAN-Bus Automated Emulation Test Rig", purpose: "End-of-line functional hardware verification", purchaseCost: 180000, monthlyMaintenance: 3500, capacityPerMonth: 3000 }
    ],
    factoryRentMonthly: 45000,
    workforceHeadcount: 4,
    avgWorkerSalaryMonthly: 28000,
    utilitiesMonthly: 14000,
    unitManufacturingCost: 4850,
    monthlyProductionCapacity: 800
  },

  financialForecasts: [
    { year: 1, revenue: 3850000, costOfGoodsSold: 1250000, grossProfit: 2600000, operatingExpenses: 4284000, netProfit: -1684000, customerCount: 450 },
    { year: 2, revenue: 16800000, costOfGoodsSold: 4800000, grossProfit: 12000000, operatingExpenses: 7800000, netProfit: 4200000, customerCount: 2200 },
    { year: 3, revenue: 48500000, costOfGoodsSold: 12800000, grossProfit: 35700000, operatingExpenses: 14500000, netProfit: 21200000, customerCount: 6500 },
    { year: 4, revenue: 112000000, costOfGoodsSold: 28500000, grossProfit: 83500000, operatingExpenses: 28000000, netProfit: 55500000, customerCount: 15000 },
    { year: 5, revenue: 245000000, costOfGoodsSold: 58000000, grossProfit: 187000000, operatingExpenses: 52000000, netProfit: 135000000, customerCount: 32000 }
  ],

  pricingTiers: [
    {
      id: "pt-1",
      name: "Pilot Fleet Starter",
      priceMonthly: 1499,
      billingFrequency: "Monthly",
      targetSegment: "Small fleets (10-49 vehicles)",
      features: [
        "Real-time GPS & 15-minute battery health polling",
        "Thermal hotspot warning (12 hours advance alert)",
        "WhatsApp critical incident alerts",
        "Web dashboard access for 3 dispatchers"
      ],
      projectedCustomerSharePct: 25
    },
    {
      id: "pt-2",
      name: "Commercial Enterprise Fleet",
      priceMonthly: 2199,
      billingFrequency: "Monthly",
      targetSegment: "Mid-to-large logistics operators (50-500 vehicles)",
      features: [
        "Sub-second CAN-bus high frequency telemetry",
        "48-hour advance electrochemical impedance predictive warning",
        "Automated Remaining Useful Life (RUL) pack degradation tracking",
        "Rest API export to existing ERP / Transport Management Systems (TMS)",
        "Dedicated customer success engineer & garage warranty support"
      ],
      projectedCustomerSharePct: 60
    },
    {
      id: "pt-3",
      name: "OEM Battery Partner",
      priceMonthly: 3499,
      billingFrequency: "Monthly",
      targetSegment: "Battery pack manufacturers & leasing consortiums",
      features: [
        "Cell-level impedance degradation distribution heatmaps",
        "Warranty fraud detection (illegal fast-charger tampering)",
        "White-label branded customer telematics portal",
        "Direct CAN DBC firmware custom adaptation"
      ],
      projectedCustomerSharePct: 15
    }
  ],

  unitEconomics: {
    cac: 12500, // ₹12,500 Customer Acquisition Cost per account
    ltv: 78500, // ₹78,500 Lifetime Value (36-month average retention)
    ltvCacRatio: 6.28,
    paybackMonths: 3.8,
    grossMarginPct: 68.5,
    monthlyChurnPct: 1.2
  },

  breakEvenModel: {
    unitSellingPrice: 2199 * 12, // Annualized subscription revenue: ₹26,388
    unitVariableCost: 7200,      // Server, SIM data, cloud & warranty support
    fixedMonthlyCost: 357000,    // Engineering salaries, rent, software licenses
    contributionMarginPerUnit: 19188,
    breakEvenUnitsMonthly: 40,   // ~40 new vehicles/month (or 479 active vehicles)
    breakEvenRevenueMonthly: 1104200
  },

  loanFundingAdvisor: {
    recommendedPath: "Hybrid: ₹50L Govt Grants (BIRAC / Startup India) + ₹1.5 Cr Seed Equity Round to preserve founder ownership above 65%.",
    fundingStages: [
      {
        stage: "Pre-Seed / Grants",
        targetAmount: 5000000, // ₹50 Lakh
        timing: "Months 1-4",
        investorType: "Govt Incubator & Angel Syndicates",
        dilutionPct: "0-5%",
        keyRequirement: "Functional hardware prototype & 2 signed LOIs"
      },
      {
        stage: "Seed Round",
        targetAmount: 25000000, // ₹2.5 Cr
        timing: "Months 6-9",
        investorType: "CleanTech VC / Mobility Micro-Funds",
        dilutionPct: "15-18%",
        keyRequirement: "₹5L MRR and 300 active paid vehicles on road"
      },
      {
        stage: "Series A",
        targetAmount: 120000000, // ₹12 Cr
        timing: "Months 18-24",
        investorType: "Tier-1 Institutional Venture Capital",
        dilutionPct: "18-20%",
        keyRequirement: "₹35L MRR, multi-city deployment, OEM factory partnership"
      }
    ],
    bankLoan: {
      principal: 2500000, // ₹25 Lakh CGTMSE collateral-free MSME loan
      annualInterestRate: 9.5,
      tenureMonths: 36,
      monthlyEmi: 80072,
      totalInterest: 382592
    },
    governmentGrants: [
      {
        id: "g-1",
        schemeName: "Startup India Seed Fund Scheme (SISFS)",
        issuingBody: "DPIIT, Ministry of Commerce & Industry",
        grantAmount: "₹20,00,000 to ₹50,00,000",
        eligibility: "DPIIT-recognized startups incorporated within 2 years with MVP",
        deadline: "Rolling applications via approved incubators",
        applicationLink: "https://seedfund.startupindia.gov.in"
      },
      {
        id: "g-2",
        schemeName: "BIRAC BIG / Clean Mobility Innovation Grant",
        issuingBody: "Department of Biotechnology & Technology Development Board",
        grantAmount: "Up to ₹50,00,000 non-dilutive grant",
        eligibility: "Novel indigenous hardware / sensor technology addressing environmental sustainability",
        deadline: "Next cycle closes Q2 2026",
        applicationLink: "https://birac.nic.in"
      },
      {
        id: "g-3",
        schemeName: "Tamil Nadu Startup Seed Grant Fund (TANSEED 6.0)",
        issuingBody: "StartupTN, Government of Tamil Nadu",
        grantAmount: "₹15,00,000 equity-free grant",
        eligibility: "Tamil Nadu registered tech and hardware startups",
        deadline: "Bi-annual cohort application",
        applicationLink: "https://startuptn.in"
      }
    ]
  },

  riskMatrix: [
    {
      id: "r-1",
      category: "Technology",
      title: "Noise and Electromagnetic Interference (EMI) Corrupting Edge Sensor Data",
      probability: "Medium",
      impact: "High",
      riskScore: 7.5,
      mitigationStrategy: "Deploy shielded automotive cabling, hardware differential amplifiers, and a rolling Kalman filter in STM32 firmware to reject 400V inverter switching noise.",
      contingencyPlan: "Fallback to time-averaged voltage delta analysis if high-frequency impedance channel detects SNR degradation."
    },
    {
      id: "r-2",
      category: "Market",
      title: "Vehicle Fleet Operators Delaying Upgrades Due to Low Margins",
      probability: "High",
      impact: "Medium",
      riskScore: 7.2,
      mitigationStrategy: "Bundle hardware for zero upfront capex into an all-inclusive ₹1,499/month operational lease that is offset by single-pack battery replacement savings.",
      contingencyPlan: "Offer 60-day deferred billing contingent on achieving 5% battery health optimization."
    },
    {
      id: "r-3",
      category: "Regulatory",
      title: "Delay in ARAI / ICAT AIS-140 Hardware Certification",
      probability: "Medium",
      impact: "High",
      riskScore: 8.0,
      mitigationStrategy: "Partner with an already certified domestic telematics contract manufacturer in Pune to leverage their existing AIS-140 Type Approval chassis.",
      contingencyPlan: "Sell as private off-highway fleet telematics while government public-transport certification is pending."
    },
    {
      id: "r-4",
      category: "Cybersecurity",
      title: "Unauthorized Remote Firmware Tampering via Cellular Gateway",
      probability: "Low",
      impact: "High",
      riskScore: 6.8,
      mitigationStrategy: "Implement cryptographic hardware root of trust (ATECC608A) with RSA-2048 signed firmware verification and mutual TLS certificate pinning.",
      contingencyPlan: "Dual-partition flash memory allows instant automated rollback to golden factory firmware if signature mismatch is detected."
    },
    {
      id: "r-5",
      category: "Operational",
      title: "Semiconductor Lead-Time Spike for STM32 Microcontrollers",
      probability: "Medium",
      impact: "Medium",
      riskScore: 6.0,
      mitigationStrategy: "Maintain modular hardware pinout compatible with both STM32 and ESP32-S3 / GD32 alternative chips. Buffer 6 months of critical passives.",
      contingencyPlan: "Source buffer stock through authorized global distributors (DigiKey, Mouser) under scheduled forward purchase orders."
    },
    {
      id: "r-6",
      category: "Financial",
      title: "Hardware Working Capital Shortage During Rapid Pilot Scaling",
      probability: "Medium",
      impact: "High",
      riskScore: 7.4,
      mitigationStrategy: "Establish vendor credit line with SMT partner (45-day payment terms) and utilize MSME factoring on signed customer purchase orders.",
      contingencyPlan: "Prioritize enterprise customer pre-payments (annual upfront billing discounted by 15%)."
    },
    {
      id: "r-7",
      category: "Competition",
      title: "Legacy GPS Vendors Bundling Basic Battery Features for Free",
      probability: "High",
      impact: "Medium",
      riskScore: 6.9,
      mitigationStrategy: "Educate clients that standard GPS voltage probes cannot predict thermal runaway; publish comparative bench test whitepapers.",
      contingencyPlan: "Offer an add-on sensor module that plugs alongside existing third-party GPS boxes."
    },
    {
      id: "r-8",
      category: "Team & Talent",
      title: "Difficulty Retaining Specialized Automotive Embedded Engineers",
      probability: "Medium",
      impact: "Medium",
      riskScore: 6.2,
      mitigationStrategy: "Institute a competitive ESOP equity pool (10%) with 4-year vesting and flexible remote/hybrid engineering culture.",
      contingencyPlan: "Engage university research partnerships with IIT Madras and PEC IT faculty for sponsored capstone hiring pipelines."
    },
    {
      id: "r-9",
      category: "Execution",
      title: "Improper Installation by Third-Party Garage Mechanics Damaging Wires",
      probability: "High",
      impact: "Medium",
      riskScore: 7.1,
      mitigationStrategy: "Design snap-fit OBD-II and J1939 pass-through T-harnesses that require zero wire cutting or soldering during vehicle fitting.",
      contingencyPlan: "Provide video-based technician certification app with photo-verification check before device activation."
    },
    {
      id: "r-10",
      category: "Macroeconomic",
      title: "Fluctuation in Lithium and Rare Earth Raw Material Prices",
      probability: "Medium",
      impact: "Low",
      riskScore: 4.8,
      mitigationStrategy: "Rising battery prices actually increases the economic urgency for fleet managers to preserve their existing batteries with EcoFleet AI.",
      contingencyPlan: "Highlight return-on-investment savings multipliers as lithium cell replacement costs climb."
    }
  ],

  sourceDocuments: [
    {
      id: "src-1",
      title: "Applications of Artificial Intelligence in the Economy: Market Analysis & Risk Management",
      type: "IEEE Paper",
      authorOrSource: "Amir Masoud Rahmani et al., IEEE Access 2023 (Base Paper)",
      dateAdded: "2024-09-15",
      credibilityScore: 98,
      keyInsights: "Foundational survey establishing ML/DL taxonomy in market analysis, predictive risk modeling, and algorithmic economic decision support."
    },
    {
      id: "src-2",
      title: "NITI Aayog Commercial Electric Vehicle Fleet Transition Roadmap 2030",
      type: "Government Policy",
      authorOrSource: "NITI Aayog & Rocky Mountain Institute (RMI)",
      dateAdded: "2024-10-10",
      credibilityScore: 95,
      keyInsights: "Projects 3.8 million commercial 2W/3W/4W electric delivery vehicles in India by 2030, with mandatory battery tracking regulations."
    },
    {
      id: "src-3",
      title: "Electrochemical Impedance Spectroscopy for Early Battery Fault Detection",
      type: "Market Report",
      authorOrSource: "Journal of Power Sources / Automotive Battery Research",
      dateAdded: "2024-11-04",
      credibilityScore: 94,
      keyInsights: "Confirms that 100Hz impedance phase angle changes precede thermal runaway events by 36-72 hours, enabling actionable intervention."
    }
  ],

  nextActions: [
    {
      id: "act-1",
      title: "Lock In 3 Unpaid Pilot Agreements with Letters of Intent (LOI)",
      category: "Market & Validation",
      priority: "Critical",
      estimatedTime: "2 Weeks",
      estimatedCost: "₹15,000",
      riskLevel: "Low",
      description: "Engage prospective fleet operators in Chennai and Bangalore with a written 30-day pilot charter offering early access in exchange for verified vehicle telemetry.",
      deliverable: "3 Signed Non-Binding LOIs"
    },
    {
      id: "act-2",
      title: "Finalize Component Bill of Materials (BOM) & Microcontroller Sourcing",
      category: "Hardware & Tech",
      priority: "High",
      estimatedTime: "10 Days",
      estimatedCost: "₹45,000",
      riskLevel: "Medium",
      description: "Standardize PCB architecture on STM32 / ESP32-S3 modules with dual CAN-bus transceivers to prevent chip shortage delays.",
      deliverable: "Verified Component Sourcing Sheet & Gerbers"
    },
    {
      id: "act-3",
      title: "Apply for Startup India Seed Fund Scheme & AIS-140 Certification Pre-audit",
      category: "Regulatory & Grants",
      priority: "High",
      estimatedTime: "3 Weeks",
      estimatedCost: "₹25,000",
      riskLevel: "Low",
      description: "Submit DPIIT registration and prepare documentation for institutional incubator grants up to ₹20-50 Lakhs without diluting equity.",
      deliverable: "DPIIT Certificate & Grant Dossier"
    }
  ],

  scenarioParams: {
    best: {
      name: 'best',
      label: 'Optimistic / Rapid Scale',
      monthlyGrowthRatePct: 28,
      unitPriceMultiplier: 1.25,
      churnRatePct: 0.8,
      burnRateMultiplier: 1.15,
      runwayMonths: 24,
      estimatedValuation: 38000000 // ₹3.8 Cr
    },
    expected: {
      name: 'expected',
      label: 'Base Plan / Execution',
      monthlyGrowthRatePct: 15,
      unitPriceMultiplier: 1.0,
      churnRatePct: 1.5,
      burnRateMultiplier: 1.0,
      runwayMonths: 16,
      estimatedValuation: 22100000 // ₹2.21 Cr
    },
    worst: {
      name: 'worst',
      label: 'Conservative / Downside Stress',
      monthlyGrowthRatePct: 6,
      unitPriceMultiplier: 0.85,
      churnRatePct: 3.5,
      burnRateMultiplier: 1.25,
      runwayMonths: 10,
      estimatedValuation: 14500000 // ₹1.45 Cr
    }
  },
  activeScenario: 'expected',

  academicInfo: {
    institution: "PRATHYUSHA ENGINEERING COLLEGE",
    institutionSubtitle: "(An Autonomous Institution)",
    department: "DEPARTMENT OF INFORMATION TECHNOLOGY",
    presentationType: "MINI PROJECT PRESENTATION",
    projectTitle: "InnovAI Hub : An AI-Powered Platform for Startup Idea Validation and Intelligent Project Planning",
    presenter: "Vidhyashree L.G.",
    studentId: "11142301IT11055",
    supervisor: "MS N VAISHNAVI VAUNIYA",
    supervisorDesignation: "ASSISTANT PROFESSOR",
    sdgs: [
      {
        number: 9,
        name: "Industry, Innovation and Infrastructure",
        type: "Primary",
        reason: "InnovAI Hub fosters innovation by providing an AI-powered platform that helps aspiring entrepreneurs and students validate startup ideas, generate intelligent project plans, technology stack recommendations, and structured documentation. It strengthens the innovation ecosystem and supports digital infrastructure for early-stage ventures."
      },
      {
        number: 8,
        name: "Decent Work and Economic Growth",
        type: "Secondary",
        reason: "Encourages entrepreneurship, scalable business model formation, and technological upskilling."
      },
      {
        number: 4,
        name: "Quality Education",
        type: "Secondary",
        reason: "Provides students with an accessible experiential digital mentor to learn structured product and financial planning."
      }
    ],
    basePaper: {
      title: "Applications of Artificial Intelligence in the Economy, Including Applications in Stock Trading, Market Analysis, and Risk Management",
      authors: "Amir Masoud Rahmani, Bahareh Rezazadeh, Majid Haghparast, Wei-Che Chang, Shen Guan Ting",
      journal: "IEEE Access",
      year: 2023,
      doi: "10.1109/ACCESS.2023.3300036",
      relevanceSummary: "Discusses AI techniques for market analysis and risk management, providing mathematical foundation for predictive analytics and economic decision support."
    },
    literatureSurvey: [
      {
        reference: "Applications of AI in the Economy",
        year: 2023,
        description: "Survey of AI in market analysis, stock trading and risk management.",
        technologyUsed: "ML, DL, Neural Networks, RL",
        advantages: "Broad coverage of AI techniques for market & risk analysis",
        disadvantages: "Too general, not focused on startup idea validation or project planning"
      },
      {
        reference: "AI-Powered Business Analytics for Smart Manufacturing",
        year: 2024,
        description: "AI analytics for manufacturing and supply chain resilience.",
        technologyUsed: "Business Analytics, Predictive Models",
        advantages: "Good for predictive analytics",
        disadvantages: "Domain is manufacturing, not early-stage startups"
      },
      {
        reference: "E-validation – Unleashing AI for Validation",
        year: 2024,
        description: "AI for validating new toxicology methods",
        technologyUsed: "ML, Clustering, Simulation",
        advantages: "Novel validation concept",
        disadvantages: "Completely different domain (toxicology)"
      },
      {
        reference: "Joint Optimization of Freshness and Fidelity",
        year: 2023,
        description: "Optimization of data freshness and fidelity in communication systems.",
        technologyUsed: "Age of Information, Optimization",
        advantages: "Strong technical contribution",
        disadvantages: "Unrelated to startups or idea validation"
      }
    ],
    experimentalResults: [
      { parameter: "AI Idea Analysis", observedResult: "Structured Startup Insights", status: "Verified" },
      { parameter: "Result Integration", observedResult: "Organized Analysis Displayed in Command Center", status: "Verified" },
      { parameter: "Dashboard", observedResult: "Startup Analysis Overview with 7 Subscores", status: "Verified" },
      { parameter: "Report Generation", observedResult: "Structured 31-Section Reports Created", status: "Verified" },
      { parameter: "Report Download", observedResult: "Download Functionality Implemented (Markdown, PDF, DOCX, CSV)", status: "Verified" }
    ]
  },
  createdAt: "2024-09-01T09:00:00.000Z",
  updatedAt: "2024-10-08T18:30:00.000Z"
};

export const ALTERNATIVE_STARTUP_PRESETS: Partial<StartupProject>[] = [
  {
    id: "agriscan-ai",
    name: "AgriScan Drone AI",
    tagline: "Autonomous multispectral drone imagery and soil pest prediction platform delivering actionable fertilizer dosage maps for smallholder farmers.",
    industry: "AgriTech & Robotics",
    businessType: "Hardware & Drone-as-a-Service",
    country: "India",
    targetMarket: "Farmer Producer Organizations (FPOs) and agricultural cooperatives across Punjab, Haryana, and Tamil Nadu",
    isSoloFounder: false,
    isHardwareMode: true,
    healthScore: 82,
    healthGrade: "Grade A",
    valuationEstimate: 16500000,
    monthlyBurnRate: 280000,
    runwayMonths: 14,
    breakEvenUnits: 320,
    breakEvenRevenueMonthly: 840000
  },
  {
    id: "eduspark-tutor",
    name: "EduSpark AI",
    tagline: "Vernacular multimodal AI tutor for engineering and STEM diploma students, generating interactive code labs and voice-guided explanations in Indian languages.",
    industry: "EdTech & Generative AI",
    businessType: "B2C & B2B SaaS",
    country: "India",
    targetMarket: "Engineering college students and tier-2/3 polytechnic institutions",
    isSoloFounder: true,
    isHardwareMode: false,
    healthScore: 78,
    healthGrade: "Grade B+",
    valuationEstimate: 12500000,
    monthlyBurnRate: 140000,
    runwayMonths: 20,
    breakEvenUnits: 850,
    breakEvenRevenueMonthly: 590000
  }
];
