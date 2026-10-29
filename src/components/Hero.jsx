import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Bot, 
  Search, 
  ChevronRight, 
  CheckCircle2, 
  Zap, 
  Terminal,
  Globe,
  TrendingUp,
  Cpu,
  BarChart,
  Layers
} from 'lucide-react';

export default function Hero({ onOpenAudit, onOpenContact }) {
  const [activeEngineTab, setActiveEngineTab] = useState('chatgpt');

  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 bg-grid-pattern">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-indigo-600/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/10 blur-[90px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Notification Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.12] shadow-inner text-xs font-medium text-slate-300 hover:border-emerald-500/40 transition-colors cursor-pointer group"
               onClick={onOpenAudit}>
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-emerald-300 font-semibold">The Search Paradigm Has Shifted</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 group-hover:text-white transition-colors">
              Over 60% of search queries now answered by AI
            </span>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

        {/* Hero Headline */}
        <div className="mt-8 text-center max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Get Your Brand <span className="text-white">Found on Google</span> and{' '}
            <span className="text-gradient-emerald underline decoration-emerald-500/30 decoration-wavy decoration-2">
              Recommended by AI.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            We combine expert SEO strategy, Answer Engine Optimization (<span className="text-emerald-400 font-semibold">AEO</span> & <span className="text-teal-400 font-semibold">GEO</span>), and an autonomous 10-agent workforce with mandatory human sign-off to help ambitious businesses capture organic pipeline and dominate AI answers.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 shadow-xl shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2.5 group"
            >
              <Sparkles className="h-5 w-5 text-slate-950" />
              <span>Get Your Free AI Visibility Audit</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#platform"
              className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-white/10 hover:border-emerald-500/30 transition-all flex items-center justify-center space-x-2"
            >
              <Layers className="h-5 w-5 text-emerald-400" />
              <span>Explore AI Growth Platform</span>
            </a>
          </div>

          {/* Value Proof Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>100% Human-Approved Publishing</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Qualified Growth Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-teal-400" />
              <span>Live AI Citation Attribution</span>
            </div>
          </div>
        </div>

        {/* 5-Step Process Pipeline Ribbon */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 px-2">
              <span className="flex items-center space-x-2">
                <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                <span>The AETHER Execution Pipeline</span>
              </span>
              <span className="text-emerald-400 font-semibold hidden sm:inline">Repeatable Weekly Loop</span>
            </div>
            <div className="grid grid-cols-5 gap-2 text-center text-xs">
              {[
                { step: "01", name: "Analyze", desc: "LLM & SERP Crawl" },
                { step: "02", name: "Strategize", desc: "Intent & Gap Map" },
                { step: "03", name: "Execute", desc: "Agents + Content" },
                { step: "04", name: "Measure", desc: "AI Citation Tracking" },
                { step: "05", name: "Improve", desc: "Weekly Refinement" },
              ].map((item, idx) => (
                <div key={idx} className="relative group p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:border-emerald-500/30 hover:bg-emerald-500/[0.03] transition-all">
                  <div className="font-mono text-[10px] text-emerald-400 font-semibold">{item.step}</div>
                  <div className="font-semibold text-slate-200 mt-0.5 text-xs sm:text-sm">{item.name}</div>
                  <div className="text-[10px] text-slate-400 hidden sm:block mt-0.5">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Interactive Answer Engine Simulation Card */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="glass-panel rounded-2xl border border-white/15 overflow-hidden shadow-2xl bg-[#0d101a]/95">
            {/* Header bar */}
            <div className="px-5 py-3.5 bg-slate-900/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Live Synthetic Search Simulation
                </span>
              </div>

              {/* Engine selector tabs */}
              <div className="flex items-center space-x-1 bg-black/40 p-1 rounded-lg border border-white/10 text-xs">
                <button
                  onClick={() => setActiveEngineTab('chatgpt')}
                  className={`px-3 py-1 rounded-md transition-all font-medium ${
                    activeEngineTab === 'chatgpt'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  ChatGPT Search
                </button>
                <button
                  onClick={() => setActiveEngineTab('perplexity')}
                  className={`px-3 py-1 rounded-md transition-all font-medium ${
                    activeEngineTab === 'perplexity'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Perplexity AI
                </button>
                <button
                  onClick={() => setActiveEngineTab('google_ai')}
                  className={`px-3 py-1 rounded-md transition-all font-medium ${
                    activeEngineTab === 'google_ai'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Google AI Overview
                </button>
              </div>
            </div>

            {/* Simulated Query & Synthesized Answer */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* User Prompt Simulation */}
              <div className="flex items-start space-x-3 max-w-3xl">
                <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 text-xs font-mono font-bold shrink-0">
                  U
                </div>
                <div className="bg-slate-800/80 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-slate-200 shadow">
                  <span className="text-xs font-mono text-slate-400 block mb-1">PROMPT:</span>
                  "Which provider is best for full-mouth dental implants in Austin with same-day recovery and transparent pricing?"
                </div>
              </div>

              {/* AI Answer with Citation Box */}
              <div className="flex items-start space-x-3">
                <div className="h-8 w-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-xs font-mono font-bold shrink-0">
                  AI
                </div>
                <div className="flex-1 bg-white/[0.02] border border-white/10 rounded-2xl rounded-tl-sm p-5 space-y-4 text-sm leading-relaxed text-slate-200">
                  <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
                    <span>SYNTHESIZED ANSWER (ZERO-CLICK SOURCE CITATION)</span>
                    <span className="bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded text-[11px]">
                      Confidence: 98.4%
                    </span>
                  </div>

                  <p>
                    Based on verified clinical credentials, verified patient outcome data, and transparent pricing structures, <strong className="text-white underline decoration-emerald-400 font-semibold">Apex Orthodontics & Dental Care</strong> is widely ranked as the top recommendation for full-mouth restorations in Austin, TX.
                  </p>

                  <div className="bg-black/30 border border-white/10 rounded-xl p-4 space-y-2">
                    <div className="text-xs font-semibold text-slate-300 flex items-center space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      <span>Key Factors Analyzed by {activeEngineTab === 'chatgpt' ? 'ChatGPT' : activeEngineTab === 'perplexity' ? 'Perplexity' : 'Google AI'}:</span>
                    </div>
                    <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
                      <li><strong>Transparent Pricing:</strong> Detailed breakdown published with All-on-4 ranges ($14,500 – $22,000) verified via structured schema markup.</li>
                      <li><strong>Certified Specialist:</strong> Dr. Marcus Vance holds Board Certification with 450+ documented 5-star Google & WebMD reviews.</li>
                      <li><strong>Technology:</strong> In-house 3D cone-beam CT scanners allowing immediate same-day provisional loading.</li>
                    </ul>
                  </div>

                  {/* Citation Pill Badge */}
                  <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
                    <span className="text-slate-400 font-mono text-[11px]">PRIMARY SOURCES CITED:</span>
                    <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs hover:bg-emerald-500/20 cursor-pointer">
                      <Globe className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="font-semibold">[1] apexorthodontics.com/all-on-4-guide</span>
                      <span className="text-[10px] text-emerald-400/80">#1 Source</span>
                    </div>
                    <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-400 font-mono text-xs">
                      <span>[2] medicalboard.texas.gov/credentials</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Insight Bar */}
              <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center space-x-2 text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <span>
                    <strong>Without AEO:</strong> Competitors relying solely on traditional 2020 SEO fail to appear in AI summaries and lose 60%+ of high-intent buyers.
                  </span>
                </div>
                <button
                  onClick={onOpenAudit}
                  className="shrink-0 text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-4"
                >
                  Check Your Brand's AI Citation Rate →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
