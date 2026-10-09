import React from 'react';
import { useStartup } from '../../context/StartupContext';
import { GraduationCap, Award, BookOpen, Layers, CheckCircle2, FileText, ExternalLink, ShieldCheck } from 'lucide-react';

export const AcademicPresentationView: React.FC = () => {
  const { startup } = useStartup();
  const info = startup.academicInfo;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* College & Department Title Banner (Matching Slide 1) */}
      <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-slate-900 to-indigo-950/40 p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold mb-3">
          <GraduationCap className="w-4 h-4 text-amber-400" />
          <span>{info.presentationType}</span>
        </div>

        <h2 className="text-sm sm:text-base font-extrabold tracking-widest uppercase text-amber-200">
          {info.institution}
        </h2>
        <p className="text-xs text-amber-300/80 tracking-wider">
          {info.institutionSubtitle}
        </p>

        <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-300 mt-2">
          {info.department}
        </h3>

        <div className="my-5 py-4 border-y border-amber-500/20 max-w-3xl mx-auto">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
            {info.projectTitle}
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-xs text-left pt-2">
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
              Presented By
            </span>
            <div className="font-bold text-white text-sm">{info.presenter}</div>
            <div className="font-mono text-slate-400 text-[11px]">Register No: {info.studentId}</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block mb-1">
              Internal Supervisor
            </span>
            <div className="font-bold text-white text-sm">{info.supervisor}</div>
            <div className="text-slate-400 text-[11px]">{info.supervisorDesignation}</div>
          </div>
        </div>
      </div>

      {/* Sustainable Development Goals (SDG 9, 8, 4) - Slide 2 */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6 shadow-xl space-y-4">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          <Award className="w-4 h-4" />
          <span>Mapped Sustainable Development Goals (SDGs)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {/* Primary SDG 9 */}
          <div className="p-4 rounded-xl bg-slate-950 border border-indigo-500/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                  PRIMARY SDG
                </span>
                <span className="font-mono font-extrabold text-indigo-400 text-sm">SDG 9</span>
              </div>
              <h3 className="font-bold text-white text-sm mb-2">
                Industry, Innovation and Infrastructure
              </h3>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                InnovAI Hub fosters innovation by providing an AI-powered platform that helps aspiring entrepreneurs and students validate startup ideas, generate intelligent project plans, technology stack recommendations, and structured documentation. It strengthens the innovation ecosystem and supports digital infrastructure for early-stage ventures.
              </p>
            </div>
          </div>

          {/* Secondary SDG 8 */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  SECONDARY SDG
                </span>
                <span className="font-mono font-extrabold text-emerald-400 text-sm">SDG 8</span>
              </div>
              <h3 className="font-bold text-white text-sm mb-2">
                Decent Work & Economic Growth
              </h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Encourages youth entrepreneurship, formal startup business development, and scalable employment generation in green-tech, AI, and domestic hardware manufacturing.
              </p>
            </div>
          </div>

          {/* Secondary SDG 4 */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  SECONDARY SDG
                </span>
                <span className="font-mono font-extrabold text-amber-400 text-sm">SDG 4</span>
              </div>
              <h3 className="font-bold text-white text-sm mb-2">
                Quality Education
              </h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Provides engineering students with an accessible, interactive digital mentor to learn systematic product requirements elicitation (IEEE 830) and venture financial modeling.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Abstract & Base Journal Paper - Slide 3, 4, 5 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        {/* Project Abstract */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 font-bold text-white text-xs uppercase tracking-wider mb-2">
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>Project Abstract</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-[11px]">
              In the current entrepreneurial landscape, aspiring founders and students frequently struggle to validate startup ideas and plan projects effectively due to limited access to expert guidance, fragmented tools, and high risks of failure. InnovAI Hub addresses this challenge through an AI-powered web platform that enables users to submit startup ideas in natural language and receive comprehensive, intelligent evaluations across market potential, SWOT, business model, technology stack, development roadmap, and cost estimation.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] text-slate-400">
            Acts as a complete digital mentor bridging the gap between raw idea and scalable implementation.
          </div>
        </div>

        {/* Primary Base Paper */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 font-bold text-amber-400 text-xs uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Primary IEEE Base Paper</span>
            </div>
            <h3 className="font-bold text-white text-xs leading-snug mb-1">
              {info.basePaper.title}
            </h3>
            <p className="text-[11px] text-slate-400">
              <strong>Authors:</strong> {info.basePaper.authors}
            </p>
            <p className="text-[11px] text-slate-400">
              <strong>Published in:</strong> {info.basePaper.journal} ({info.basePaper.year}) · <strong>DOI:</strong> {info.basePaper.doi}
            </p>
            <div className="mt-3 p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300">
              <strong>Why chosen:</strong> Discusses AI techniques for economic decision-making, predictive risk management, and market analysis, providing the foundation for our decision support engine.
            </div>
          </div>
        </div>
      </div>

      {/* Literature Survey Comparison Table - Slide 6 */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6 shadow-xl space-y-4 text-xs">
        <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
          <Layers className="w-4 h-4 text-indigo-400" />
          <span>Literature Survey & Comparative Benchmarking</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 text-[10px] uppercase font-mono">
                <th className="py-2 px-3">Reference Paper</th>
                <th className="py-2 px-3">Year</th>
                <th className="py-2 px-3">Technology Used</th>
                <th className="py-2 px-3">Advantages</th>
                <th className="py-2 px-3">Disadvantages / Limitations</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/70 text-slate-300 text-[11px]">
              {info.literatureSurvey.map((lit, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50">
                  <td className="py-3 px-3 font-semibold text-white">{lit.reference}</td>
                  <td className="py-3 px-3 font-mono text-slate-400">{lit.year}</td>
                  <td className="py-3 px-3 font-mono text-indigo-300">{lit.technologyUsed}</td>
                  <td className="py-3 px-3 text-emerald-400">{lit.advantages}</td>
                  <td className="py-3 px-3 text-rose-400/90">{lit.disadvantages}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Experimental Results Observed - Slide 20 */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6 shadow-xl space-y-4 text-xs">
        <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Experimental Evaluation Results (Slide 20)</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 text-[10px] uppercase font-mono">
                <th className="py-2 px-3">Evaluation Parameter</th>
                <th className="py-2 px-3">Observed Platform Result</th>
                <th className="py-2 px-3">System Verification Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/70 text-slate-300 text-[11px]">
              {info.experimentalResults.map((exp, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50">
                  <td className="py-3 px-3 font-semibold text-white">{exp.parameter}</td>
                  <td className="py-3 px-3 text-indigo-300">{exp.observedResult}</td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      ✓ {exp.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 15 Academic Citations - Slide 24 */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6 shadow-xl space-y-3 text-xs">
        <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-slate-400" />
          <span>IEEE Academic References (Slide 24)</span>
        </h2>
        <div className="max-h-60 overflow-y-auto space-y-2 pr-2 font-mono text-[11px] text-slate-400">
          <p>[1] A. Author et al., "Leveraging artificial intelligence for innovative technopreneurial business models," in Proc. IEEE ICCIT, 2024.</p>
          <p>[2] A. Author et al., "Artificial intelligence startup preference ranking by circular intuitionistic fuzzy PROMETHEE," in Proc. IEEE ICCIT, 2024.</p>
          <p>[3] A. Author et al., "Entrepreneurial risk analytics: Machine learning-based prediction of startup failures," in Proc. IEEE ICTBIG, 2025.</p>
          <p>[4] A. Author et al., "The artificial intelligence revolution in new-product development," IEEE Engineering Management Review, vol. 52, 2024.</p>
          <p>[5] A. Author et al., "Current state, potentials and challenges for the use of artificial intelligence in the early phase of product development: A survey," in Proc. IEEE IEEM, 2024.</p>
          <p>[6] A. Author et al., "Driving business value: A strategic framework for AI adoption and deployment success," IEEE Engineering Management Review, 2026.</p>
          <p>[7] A. Author et al., "Artificial intelligence in business process modelling: A structured overview of trends, challenges and future research direction," in Proc. IEEE SISY, 2025.</p>
          <p>[8] A. Author et al., "Analysis of natural language processing techniques and tools for requirements elicitation: A systematic literature review," in Proc. IEEE, 2024.</p>
        </div>
      </div>
    </div>
  );
};
