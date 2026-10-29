import React, { useState } from 'react';
import { 
  BarChart3, 
  Layers, 
  Bot, 
  TrendingUp, 
  CheckCircle2, 
  ArrowUpRight, 
  Calendar, 
  Globe, 
  Search, 
  Sparkles, 
  Activity, 
  FileText,
  Sliders,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export default function PlatformCockpit({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('citations');

  return (
    <section id="platform" className="relative py-24 bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-4">
            <Layers className="h-3.5 w-3.5" />
            <span>Proprietary Client Operating System</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            One Unified Cockpit. <br className="hidden sm:inline" />
            <span className="text-gradient-emerald">Total Visibility, Zero Complexity.</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Stop juggling 5 disconnected SEO tools, chaotic spreadsheets, and opaque agencies. Our proprietary software platform consolidates citation monitoring, human sign-off, and business attribution into a single login.
          </p>
        </div>

        {/* Dashboard Mockup Container */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl bg-[#0c0f18]/95">
            {/* Top Navigation Bar of the Portal */}
            <div className="px-6 py-4 bg-slate-900/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs font-mono">
                  AO
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-heading font-bold text-sm text-white">Apex Orthodontics Portal</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Active Retainer: Growth Engine • Q4 2026</span>
                </div>
              </div>

              {/* Cockpit Tabs */}
              <div className="flex items-center space-x-1 bg-black/40 p-1 rounded-xl border border-white/10 text-xs">
                <button
                  onClick={() => setActiveTab('citations')}
                  className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
                    activeTab === 'citations'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  AI Citation Radar
                </button>
                <button
                  onClick={() => setActiveTab('attribution')}
                  className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
                    activeTab === 'attribution'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Lead Attribution
                </button>
                <button
                  onClick={() => setActiveTab('roadmap')}
                  className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
                    activeTab === 'roadmap'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Agent Roadmap
                </button>
              </div>
            </div>

            {/* Tab 1: AI Citation Radar */}
            {activeTab === 'citations' && (
              <div className="p-6 sm:p-8 space-y-6">
                {/* 3 Top KPIs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-xs font-mono text-slate-400 block">Brand AI Share of Voice</span>
                    <div className="text-3xl font-extrabold text-emerald-400 font-mono">
                      62.4% <span className="text-xs text-emerald-400/80 font-normal">+18.2%</span>
                    </div>
                    <span className="text-[11px] text-slate-400">Across 120 tracked high-intent queries</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-xs font-mono text-slate-400 block">ChatGPT Recommendation Rank</span>
                    <div className="text-3xl font-extrabold text-teal-400 font-mono">
                      #1 Ranked <span className="text-xs text-slate-400 font-normal">in Austin</span>
                    </div>
                    <span className="text-[11px] text-slate-400">Target: "All-on-4 dental implants"</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-xs font-mono text-slate-400 block">AI Zero-Click Impressions</span>
                    <div className="text-3xl font-extrabold text-indigo-400 font-mono">
                      44,820 <span className="text-xs text-indigo-400/80 font-normal">+31% MoM</span>
                    </div>
                    <span className="text-[11px] text-slate-400">Estimated synthetic audience reach</span>
                  </div>
                </div>

                {/* Simulated Citation Feed */}
                <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 uppercase tracking-wider">
                    <span>Recent LLM Citation Logs</span>
                    <span className="text-emerald-400">Live Stream</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-emerald-400 font-semibold">[Perplexity]</span>
                        <span className="text-slate-200">"Top cosmetic orthodontist near downtown Austin"</span>
                      </div>
                      <span className="text-emerald-400 font-mono text-[11px]">Cited Source #1 (99.1% conf)</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-teal-400 font-semibold">[ChatGPT 4o]</span>
                        <span className="text-slate-200">"What does clear aligner therapy cost in Texas?"</span>
                      </div>
                      <span className="text-emerald-400 font-mono text-[11px]">Pricing Table Extracted</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-indigo-400 font-semibold">[Google AI]</span>
                        <span className="text-slate-200">"Emergency tooth replacement procedure Austin"</span>
                      </div>
                      <span className="text-emerald-400 font-mono text-[11px]">Featured Knowledge Panel</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Lead Attribution */}
            {activeTab === 'attribution' && (
              <div className="p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-xs font-mono text-slate-400 block">Monthly Inbound Appointments</span>
                    <div className="text-3xl font-extrabold text-emerald-400 font-mono">148</div>
                    <span className="text-[11px] text-emerald-400/80">+215% vs pre-AEO baseline</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-xs font-mono text-slate-400 block">Attributed Case Value</span>
                    <div className="text-3xl font-extrabold text-white font-mono">$642,000</div>
                    <span className="text-[11px] text-slate-400">High-ticket restoration pipeline</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-xs font-mono text-slate-400 block">Blended ROI Multiplier</span>
                    <div className="text-3xl font-extrabold text-teal-400 font-mono">14.2x</div>
                    <span className="text-[11px] text-teal-400/80">Retainer to Revenue Ratio</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 text-xs text-slate-300">
                  <strong className="text-white block mb-1">Transparent Multi-Touch Attribution:</strong>
                  Every phone call, consultation form, and online booking is tagged with the referring search surface (Traditional Google Organic vs AI Referral vs Direct Citation).
                </div>
              </div>
            )}

            {/* Tab 3: Agent Roadmap */}
            {activeTab === 'roadmap' && (
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span>Current 14-Day Growth Sprint</span>
                  <span className="text-emerald-400">Sprint 12 • 88% Completed</span>
                </div>

                <div className="space-y-3">
                  {[
                    { agent: "Schema Agent", task: "Deploy MedicalBusiness + AggregateRating JSON-LD", status: "Completed", date: "Yesterday" },
                    { agent: "Content Agent", task: "Publish 2,400-word Full-Mouth Restoration Guide", status: "Approved & Live", date: "2 days ago" },
                    { agent: "Authority Agent", task: "Secure 2 guest contributor citations in Healthcare Today", status: "In Progress", date: "Target: Friday" },
                    { agent: "Social Agent", task: "Syndicate 4 LinkedIn carousels & GBP emergency updates", status: "Awaiting Client Sign-off", date: "Pending" },
                  ].map((task, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-3">
                        <CheckCircle2 className={`h-4 w-4 ${task.status === 'Completed' || task.status === 'Approved & Live' ? 'text-emerald-400' : 'text-amber-400'}`} />
                        <div>
                          <span className="font-semibold text-white">{task.task}</span>
                          <span className="text-slate-400 font-mono ml-2">({task.agent})</span>
                        </div>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                        task.status === 'Approved & Live' || task.status === 'Completed'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      }`}>
                        {task.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Cockpit Footer Banner */}
            <div className="p-4 bg-slate-900 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <span className="text-slate-400">
                Want this exact platform monitoring your brand's AI search visibility?
              </span>
              <button
                onClick={onOpenContact}
                className="px-4 py-2 rounded-lg text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center space-x-1"
              >
                <span>Request Client Access</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
