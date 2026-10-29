import React from 'react';
import { Cpu, Globe, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onOpenAudit, onOpenContact }) {
  return (
    <footer className="bg-[#06070a] border-t border-white/[0.08] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-indigo-600 p-[1px]">
                <div className="h-full w-full bg-[#0b0d13] rounded-[11px] flex items-center justify-center">
                  <Cpu className="h-5 w-5 text-emerald-400" />
                </div>
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                AETHER <span className="text-emerald-400">AEO</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The autonomous AI search & growth company. Combining senior search strategists, Answer Engine Optimization (AEO/GEO), and a 10-agent workforce with mandatory human approval.
            </p>

            <div className="flex items-center space-x-2 pt-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-mono text-[11px]">
                Global Nodes: Austin • San Francisco • London • Bengaluru
              </span>
            </div>
          </div>

          {/* Col 1: Solutions */}
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
              3 Growth Engines
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  AI Search & AEO Agency
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Marketing Automation Workflows
                </a>
              </li>
              <li>
                <a href="#platform" className="hover:text-emerald-400 transition-colors">
                  Proprietary Growth OS
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Technical SEO & JSON-LD
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Digital PR & Co-Citations
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: The Agent Grid */}
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
              The 10-Agent Grid
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#agents" className="hover:text-emerald-400 transition-colors">Research Agent (Intent)</a></li>
              <li><a href="#agents" className="hover:text-emerald-400 transition-colors">Audit Agent (Crawlability)</a></li>
              <li><a href="#agents" className="hover:text-emerald-400 transition-colors">Strategy Agent (Roadmap)</a></li>
              <li><a href="#agents" className="hover:text-emerald-400 transition-colors">Content Agent (Citations)</a></li>
              <li><a href="#agents" className="hover:text-emerald-400 transition-colors">Schema Agent (Knowledge Graph)</a></li>
              <li><a href="#agents" className="hover:text-emerald-400 transition-colors">Analytics Agent (LLM Radar)</a></li>
            </ul>
          </div>

          {/* Col 3: Resources & Trust */}
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
              Governance & Proof
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#approvals" className="hover:text-emerald-400 transition-colors">
                  Human-in-the-Loop Protocol
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-emerald-400 transition-colors">
                  Client Case Studies
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-emerald-400 transition-colors">
                  Qualified Growth Guarantee
                </a>
              </li>
              <li>
                <button onClick={onOpenAudit} className="hover:text-emerald-400 text-left transition-colors">
                  Free AI Visibility Audit
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-emerald-400 text-left transition-colors">
                  Book Executive Strategy Call
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} AETHER AEO Systems Inc. Engineered on the Denver AI Tech & AEO Engine architecture.
          </div>
          <div className="flex items-center space-x-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy & Data Isolation</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Security Protocol</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">SLA & Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
