import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Bot, 
  Cpu, 
  Layers 
} from 'lucide-react';

export default function FinalCta({ onOpenAudit, onOpenContact }) {
  return (
    <section className="relative py-28 overflow-hidden bg-grid-pattern border-t border-white/[0.08]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-emerald-500/15 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Category Leadership Awaits</span>
        </div>

        <h2 className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Ready to Grow Your Visibility Across <br className="hidden sm:inline" />
          <span className="text-gradient-emerald">Google and AI-Generated Search?</span>
        </h2>

        <p className="max-w-2xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed">
          Get a personalized, comprehensive assessment of your website, your primary competitors, and the exact citation gaps waiting to be captured across ChatGPT, Perplexity, and Claude.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 shadow-xl shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2.5"
          >
            <Sparkles className="h-5 w-5 text-slate-950" />
            <span>Get Your Free AI Visibility Audit</span>
            <ArrowRight className="h-5 w-5" />
          </button>

          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-emerald-500/30 transition-all flex items-center justify-center space-x-2"
          >
            <span>Book a Strategy Call</span>
          </button>
        </div>

        {/* Reassurance pills */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>No pushy sales calls • Pure diagnostic value</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>Actionable 14-day execution roadmap included</span>
          </div>
        </div>
      </div>
    </section>
  );
}
