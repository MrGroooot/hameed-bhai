import React, { useState } from 'react';
import { 
  Sparkles, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  BarChart3, 
  ArrowRight, 
  Menu, 
  X,
  Activity,
  CheckCircle2
} from 'lucide-react';

export default function Navbar({ onOpenAudit, onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#08090d]/85 border-b border-white/[0.08] transition-all">
      {/* Top Banner ticker */}
      <div className="bg-gradient-to-r from-emerald-950/60 via-slate-900 to-indigo-950/60 border-b border-white/[0.05] py-1.5 px-4 text-xs font-mono text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-semibold tracking-wide">SYSTEM LIVE:</span>
            <span className="hidden sm:inline text-slate-400">10 AI Agents Active</span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-400">Synthesizing 4,800+ LLM queries / hr</span>
          </div>
          <div className="flex items-center space-x-3 text-xs">
            <span className="text-slate-400 hidden sm:inline">Human-in-the-Loop Safe</span>
            <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-[11px] font-medium">
              v2.4 Engine Active
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400 via-teal-500 to-indigo-600 p-[1px] shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all">
            <div className="h-full w-full bg-[#0b0d13] rounded-[11px] flex items-center justify-center">
              <Cpu className="h-5 w-5 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-1.5">
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                AETHER
              </span>
              <span className="text-xs font-mono font-bold px-1.5 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded">
                AEO
              </span>
            </div>
            <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
              Autonomous Growth Engine
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 text-sm font-medium text-slate-300">
          <a href="#problem" className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/[0.05] transition-colors">
            Why AEO?
          </a>
          <a href="#services" className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/[0.05] transition-colors">
            3 Growth Engines
          </a>
          <a href="#agents" className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/[0.05] transition-colors flex items-center space-x-1.5">
            <span>10-Agent System</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
          </a>
          <a href="#approvals" className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/[0.05] transition-colors">
            Human Approval
          </a>
          <a href="#pricing" className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/[0.05] transition-colors">
            Pricing
          </a>
          <a href="#calculator" className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/[0.05] transition-colors">
            ROI Calculator
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={onOpenAudit}
            className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:text-white border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all flex items-center space-x-1.5"
          >
            <Sparkles className="h-4 w-4 text-emerald-400" />
            <span>Instant AI Audit</span>
          </button>
          
          <button
            onClick={onOpenContact}
            className="relative group overflow-hidden px-4 py-2 rounded-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-lg shadow-emerald-500/25 flex items-center space-x-1.5"
          >
            <span>Book Growth Call</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center space-x-2">
          <button
            onClick={onOpenAudit}
            className="px-3 py-1.5 text-xs font-semibold rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
          >
            Audit
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/[0.08] bg-[#0c0e16] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-300">
            <a 
              href="#problem" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/[0.05]"
            >
              Why AEO Matters
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/[0.05]"
            >
              3 Growth Engines
            </a>
            <a 
              href="#agents" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/[0.05]"
            >
              The 10-Agent System
            </a>
            <a 
              href="#approvals" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/[0.05]"
            >
              Human Approval Portal
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/[0.05]"
            >
              Managed Retainers & Pricing
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/[0.05]"
            >
              Interactive ROI Calculator
            </a>
          </div>

          <div className="pt-3 border-t border-white/[0.08] flex flex-col space-y-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAudit(); }}
              className="w-full py-2.5 rounded-lg text-sm font-medium text-slate-200 border border-white/10 bg-white/[0.03] flex items-center justify-center space-x-2"
            >
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span>Run Free AI Visibility Audit</span>
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="w-full py-2.5 rounded-lg text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 flex items-center justify-center space-x-2"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
