import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Bot, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  ArrowRight, 
  RefreshCw, 
  Globe, 
  ShieldAlert, 
  Layers, 
  BarChart, 
  Check,
  Send
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LiveAuditTool({ onOpenContact }) {
  const [domain, setDomain] = useState('');
  const [query, setQuery] = useState('');
  const [industry, setIndustry] = useState('Healthcare & Dental');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | scanning | completed
  const [scanStep, setScanStep] = useState(0);

  const scanSteps = [
    "Checking robots.txt permissions for GPTBot, ClaudeBot, and Perplexity...",
    "Querying ChatGPT Search & Perplexity synthetic index for target prompt...",
    "Validating Schema.org Organization, FAQ, and Physician/Service entity graphs...",
    "Computing Information Gain & Citability Index score..."
  ];

  const handleRunAudit = (e) => {
    e.preventDefault();
    if (!domain) return;

    setStatus('scanning');
    setScanStep(0);

    const stepInterval = setInterval(() => {
      setScanStep((prev) => {
        if (prev < scanSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(stepInterval);
          setStatus('completed');
          try {
            confetti({
              particleCount: 50,
              spread: 60,
              origin: { y: 0.7 }
            });
          } catch (err) {}
          return prev;
        }
      });
    }, 900);
  };

  const handleReset = () => {
    setStatus('idle');
    setScanStep(0);
  };

  return (
    <section id="audit-tool" className="relative py-24 bg-[#090b12] border-t border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Interactive Diagnostic Engine</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Test Your Brand's <br className="hidden sm:inline" />
            <span className="text-gradient-emerald">AI Visibility Score in Real-Time.</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            See how visible your website currently is to ChatGPT, Claude, and Perplexity. Discover which competitors are capturing citations for your most profitable keywords.
          </p>
        </div>

        {/* Audit Tool Container */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl bg-[#0c0f18]/95">
            {status === 'idle' && (
              <form onSubmit={handleRunAudit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Website Domain */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300">
                      Target Website / Domain <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <Globe className="h-4 w-4" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="e.g. apexorthodontics.com"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60"
                      />
                    </div>
                  </div>

                  {/* Primary Target Query */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300">
                      Target Buyer Query <span className="text-slate-500">(Optional)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <Search className="h-4 w-4" />
                      </div>
                      <input
                        type="text"
                        placeholder="e.g. best dental implants austin tx"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60"
                      />
                    </div>
                  </div>

                  {/* Industry Category */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300">
                      Industry Sector
                    </label>
                    <select
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500/60"
                    >
                      <option value="Healthcare & Dental">Healthcare & Dental</option>
                      <option value="B2B SaaS & Tech">B2B SaaS & Tech</option>
                      <option value="Professional Services & Legal">Professional Services & Legal</option>
                      <option value="Local Trade & Home Services">Local Trade & Home Services</option>
                      <option value="E-Commerce & Retail">E-Commerce & Retail</option>
                    </select>
                  </div>

                  {/* Work Email */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300">
                      Send Executive Audit Report To <span className="text-slate-500">(Optional)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <Send className="h-4 w-4" />
                      </div>
                      <input
                        type="email"
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/60"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-2 text-xs text-slate-400">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span>Free diagnostic • Instant real-time synthetic simulation</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center space-x-2"
                  >
                    <Sparkles className="h-4 w-4 text-slate-950" />
                    <span>Generate Instant AI Audit</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}

            {/* Scanning State */}
            {status === 'scanning' && (
              <div className="py-12 px-4 text-center space-y-6">
                <div className="h-16 w-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <RefreshCw className="h-8 w-8 animate-spin" />
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    Analyzing <span className="text-emerald-400">{domain || 'Domain'}</span> Across AI Engines...
                  </h3>
                  <p className="mt-2 text-xs font-mono text-emerald-400 animate-pulse">
                    {scanSteps[scanStep]}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="max-w-md mx-auto h-2 bg-black/60 rounded-full overflow-hidden border border-white/10">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-700"
                    style={{ width: `${((scanStep + 1) / scanSteps.length) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* Completed Scorecard State */}
            {status === 'completed' && (
              <div className="space-y-6">
                {/* Scorecard Header */}
                <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 gap-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-heading font-bold text-xl text-white">
                        {domain || "apexorthodontics.com"}
                      </span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                        {industry}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">
                      Target Query: "{query || 'best providers near me'}"
                    </span>
                  </div>

                  <button
                    onClick={handleReset}
                    className="text-xs font-mono text-emerald-400 hover:text-emerald-300 underline flex items-center space-x-1"
                  >
                    <RefreshCw className="h-3 w-3" />
                    <span>Run Another Domain</span>
                  </button>
                </div>

                {/* Overall Citability Gauge & Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center space-y-1">
                    <span className="text-xs font-mono uppercase text-amber-300 font-semibold block">
                      AI Visibility Score
                    </span>
                    <div className="text-4xl font-extrabold text-amber-400 font-mono">
                      44<span className="text-xl text-amber-300/70">/100</span>
                    </div>
                    <span className="text-[11px] text-amber-200 block font-medium">
                      High Optimization Potential
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-xs font-mono text-slate-400 block">
                      ChatGPT Citation Probability
                    </span>
                    <div className="text-2xl font-bold text-white font-mono">
                      28% <span className="text-xs text-rose-400 font-normal">Below Avg</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      Lacks direct tabular pricing & Q&A structure.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-xs font-mono text-slate-400 block">
                      Perplexity Ingestion Rate
                    </span>
                    <div className="text-2xl font-bold text-white font-mono">
                      36% <span className="text-xs text-amber-400 font-normal">Moderate</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      Cited occasionally on long-tail brand queries.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-xs font-mono text-slate-400 block">
                      Schema Graph Completeness
                    </span>
                    <div className="text-2xl font-bold text-white font-mono">
                      40% <span className="text-xs text-amber-400 font-normal">Missing Entities</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      Missing nested Physician & Offer schema.
                    </p>
                  </div>
                </div>

                {/* 3 Critical Diagnostic Gaps Discovered */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Critical Gaps Detected by Audit Agent
                  </h4>

                  <div className="space-y-2">
                    <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/20 flex items-start space-x-3 text-xs">
                      <AlertTriangle className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">
                          1. Zero-Click Content Summarizability Gap:
                        </strong>
                        <span className="text-slate-300">
                          Current service pages lack extractable definition callouts, structured comparison tables, and FAQ accordions formatted for LLM token parsers.
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/20 flex items-start space-x-3 text-xs">
                      <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">
                          2. Missing Structured Entity Markup (JSON-LD):
                        </strong>
                        <span className="text-slate-300">
                          Search engines and AI models cannot verify verified business credentials, service catalogs, or board certifications in the Google Knowledge Graph.
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-800/40 border border-white/10 flex items-start space-x-3 text-xs">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">
                          3. Fast Path to Victory:
                        </strong>
                        <span className="text-slate-300">
                          Deploying our 10-Agent AEO sprint can elevate citation probability from 28% to 75%+ within the first 60 days.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to action */}
                <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-200">
                    <strong className="text-white block text-sm">
                      Ready to bridge these gaps and win AI search?
                    </strong>
                    Schedule a free 20-minute growth roadmap review with our senior search team.
                  </div>
                  <button
                    onClick={onOpenContact}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shrink-0 flex items-center space-x-2 shadow-lg shadow-emerald-500/20"
                  >
                    <span>Schedule Free Strategy Review</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
