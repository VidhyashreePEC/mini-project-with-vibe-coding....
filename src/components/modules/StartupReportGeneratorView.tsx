import React, { useState } from 'react';
import { useStartup } from '../../context/StartupContext';
import { generateFullStartupReportMarkdown } from '../../lib/ai/synthesizer';
import { DownloadCloud, FileText, Printer, Copy, CheckCircle2, ShieldCheck, FileSpreadsheet } from 'lucide-react';

export const StartupReportGeneratorView: React.FC = () => {
  const { startup, currency } = useStartup();
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState('');

  const markdownReport = generateFullStartupReportMarkdown(startup, currency);

  const handleDownloadMarkdown = () => {
    const blob = new Blob([markdownReport], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${startup.name.toLowerCase().replace(/\s+/g, '_')}_startup_report.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setDownloadSuccess('Markdown (.md) downloaded!');
    setTimeout(() => setDownloadSuccess(''), 2500);
  };

  const handleDownloadCsv = () => {
    const headers = 'Year,Revenue,COGS,GrossProfit,Opex,NetProfit,Customers\n';
    const rows = startup.financialForecasts
      .map(f => `${f.year},${f.revenue},${f.costOfGoodsSold},${f.grossProfit},${f.operatingExpenses},${f.netProfit},${f.customerCount}`)
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${startup.name.toLowerCase().replace(/\s+/g, '_')}_financials.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setDownloadSuccess('Financial CSV exported!');
    setTimeout(() => setDownloadSuccess(''), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(markdownReport);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <DownloadCloud className="w-4 h-4" />
            <span>Module 9: Automated 31-Section Dossier & SRS Exporter</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Complete Startup Report & IEEE SRS Generator
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Compiled institutional venture dossier formatted for academic thesis submission, grants, and investor data rooms.
          </p>
        </div>

        {/* Export Buttons */}
        <div className="flex flex-wrap gap-2 self-start sm:self-auto">
          <button
            onClick={handleDownloadMarkdown}
            className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-md shadow-indigo-600/30"
          >
            <DownloadCloud className="w-3.5 h-3.5" />
            <span>Download .MD</span>
          </button>

          <button
            onClick={handleDownloadCsv}
            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors flex items-center gap-1.5 border border-slate-700"
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors flex items-center gap-1.5 border border-slate-700"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / PDF</span>
          </button>

          <button
            onClick={handleCopy}
            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors flex items-center gap-1.5 border border-slate-700"
          >
            {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {downloadSuccess && (
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{downloadSuccess}</span>
        </div>
      )}

      {/* Live Markdown Render Box */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
            <FileText className="w-4 h-4 text-indigo-400" />
            <span>{startup.name}_report_v2.4.md</span>
          </div>
          <span className="text-[10px] text-slate-400 font-mono">31 Comprehensive Sections</span>
        </div>

        <div className="p-5 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed max-h-[600px] overflow-y-auto selection:bg-indigo-600">
          {markdownReport}
        </div>
      </div>
    </div>
  );
};
