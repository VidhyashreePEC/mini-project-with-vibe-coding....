import React, { useState } from 'react';
import { useStartup } from '../../context/StartupContext';
import { Cpu, FileCode, CheckCircle2, Download, Copy, ShieldCheck, Terminal, Layers } from 'lucide-react';

export const TechnologyPlannerView: React.FC = () => {
  const { startup } = useStartup();
  const [copied, setCopied] = useState(false);
  const tech = startup.techArchitecture;

  const ieeeSrsDocument = `# SOFTWARE REQUIREMENTS SPECIFICATION (IEEE Std 830-1998 Format)
## PROJECT: ${startup.name.toUpperCase()}

### 1. INTRODUCTION
1.1 Purpose: This document defines the architectural specifications and functional requirements for ${startup.name}.
1.2 Scope: High-frequency telemetry ingestion, real-time analytics, and automated predictive alerting.
1.3 Target Audience: Engineering leads, system architects, and technical compliance auditors.

### 2. OVERALL ARCHITECTURAL PERSPECTIVE
The platform adopts a 3-tier decoupled microservices architecture:
- Presentation Tier: ${tech.frontend.join(', ')}
- Application & Business Logic Tier: ${tech.backend.join(', ')}
- Data Persistence Tier: ${tech.database.join(', ')}
- Cloud Infrastructure & DevOps: ${tech.cloudDevops.join(', ')}
- Intelligent AI & Diagnostic Services: ${tech.aiEngine.join(', ')}
- Security & Compliance Tier: ${tech.security.join(', ')}

### 3. SPECIFIC REQUIREMENTS
3.1 Ingestion Latency: Sub-500ms end-to-end telemetry propagation SLA.
3.2 High Availability: 99.9% uptime with automated zero-downtime container rolling deployments.
3.3 Data Encryption: Transport Layer Security (TLS 1.3) in transit; AES-256 for resting telemetry.
3.4 Compliance: Conforms to AIS-140 safety guardrails and regional DPDP data privacy standards.
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(ieeeSrsDocument);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Cpu className="w-4 h-4" />
            <span>Module 6: Technical Architecture & System Engineering</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Software Architecture & IEEE 830 SRS Planner
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Six-layer software specification compliant with IEEE Std 830-1998 Software Requirements Specification.
          </p>
        </div>

        <button
          onClick={handleCopy}
          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 text-xs font-semibold transition-colors flex items-center gap-2 self-start sm:self-auto"
        >
          {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? 'IEEE SRS Copied!' : 'Copy IEEE SRS Text'}</span>
        </button>
      </div>

      {/* 6 Layered Architecture Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
          <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider">
            Layer 1: Frontend & Presentation
          </span>
          <div className="space-y-1.5 pt-1">
            {tech.frontend.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-300 font-mono text-[11px]">
                <span className="text-indigo-400 font-bold">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
          <span className="text-[10px] uppercase font-bold text-purple-400 tracking-wider">
            Layer 2: Backend & Microservices
          </span>
          <div className="space-y-1.5 pt-1">
            {tech.backend.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-300 font-mono text-[11px]">
                <span className="text-purple-400 font-bold">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
          <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">
            Layer 3: Database & Cache
          </span>
          <div className="space-y-1.5 pt-1">
            {tech.database.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-300 font-mono text-[11px]">
                <span className="text-cyan-400 font-bold">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
          <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
            Layer 4: Cloud & DevOps
          </span>
          <div className="space-y-1.5 pt-1">
            {tech.cloudDevops.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-300 font-mono text-[11px]">
                <span className="text-emerald-400 font-bold">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
          <span className="text-[10px] uppercase font-bold text-pink-400 tracking-wider">
            Layer 5: AI & Diagnostic Engine
          </span>
          <div className="space-y-1.5 pt-1">
            {tech.aiEngine.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-300 font-mono text-[11px]">
                <span className="text-pink-400 font-bold">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
          <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
            Layer 6: Security & Compliance
          </span>
          <div className="space-y-1.5 pt-1">
            {tech.security.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-300 font-mono text-[11px]">
                <span className="text-amber-400 font-bold">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* IEEE 830 Preview Box */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6 shadow-xl space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <FileCode className="w-4 h-4 text-cyan-400" />
            <span>Compiled IEEE Std 830 Software Requirements Document</span>
          </h2>
          <span className="text-[10px] text-slate-400 font-mono">Academic & Audit Ready</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-[11px] text-slate-300 whitespace-pre-wrap leading-relaxed max-h-80 overflow-y-auto">
          {ieeeSrsDocument}
        </div>
      </div>
    </div>
  );
};
