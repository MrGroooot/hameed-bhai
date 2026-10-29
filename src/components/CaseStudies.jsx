import React, { useState } from 'react';
import { 
  CheckCircle2, 
  TrendingUp, 
  Quote, 
  Building2, 
  Sparkles, 
  ArrowRight, 
  MapPin, 
  Clock,
  Layers
} from 'lucide-react';
import { CASE_STUDIES } from '../data/mockData';

export default function CaseStudies({ onOpenAudit }) {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const currentCase = CASE_STUDIES[activeCaseIdx];

  return (
    <section id="case-studies" className="relative py-24 bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-4">
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>Verified Results & Case Studies</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Proof of Work. <br className="hidden sm:inline" />
            <span className="text-gradient-emerald">Documented Growth Across Sectors.</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            See how forward-thinking leaders replaced legacy agencies with our hybrid search and agent engine to capture AI search citations and increase customer acquisition.
          </p>
        </div>

        {/* Case Study Selector Pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {CASE_STUDIES.map((cs, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCaseIdx(idx)}
              className={`px-5 py-3 rounded-xl text-xs font-semibold border transition-all ${
                activeCaseIdx === idx
                  ? 'bg-slate-800 border-emerald-500/50 text-white shadow-lg shadow-emerald-500/10'
                  : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              <span>{cs.client}</span>
              <span className="ml-2 text-[10px] font-mono text-emerald-400 font-normal">
                ({cs.category.split('/')[0]})
              </span>
            </button>
          ))}
        </div>

        {/* Active Case Study Spotlight Card */}
        <div className="mt-8 glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden bg-[#0c0f18]/95">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 7 cols: Story & Quote */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full font-semibold">
                  {currentCase.category}
                </span>
                <span className="flex items-center text-slate-400 font-mono">
                  <MapPin className="h-3.5 w-3.5 mr-1 text-slate-500" />
                  {currentCase.location}
                </span>
                <span className="flex items-center text-slate-400 font-mono">
                  <Clock className="h-3.5 w-3.5 mr-1 text-slate-500" />
                  Sprint Timeline: {currentCase.timeline}
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                {currentCase.client}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentCase.summary}
              </p>

              {/* Quote block */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 relative space-y-3">
                <Quote className="h-8 w-8 text-emerald-500/20 absolute top-4 right-4" />
                <p className="text-sm italic text-slate-200 leading-relaxed">
                  "{currentCase.quote}"
                </p>
                <div className="text-xs font-semibold text-emerald-400 font-mono">
                  — {currentCase.author}
                </div>
              </div>
            </div>

            {/* Right 5 cols: Verified Metrics Badge Grid */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block px-1">
                Verified Outcome Metrics ({currentCase.timeline})
              </span>

              {currentCase.metrics.map((metric, mIdx) => (
                <div
                  key={mIdx}
                  className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-emerald-500/30 transition-all flex items-center justify-between"
                >
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">
                      {metric.label}
                    </span>
                    <span className="text-xs text-emerald-400/80 font-mono mt-0.5 block">
                      {metric.note}
                    </span>
                  </div>
                  <div className="text-3xl font-extrabold text-white font-mono">
                    {metric.value}
                  </div>
                </div>
              ))}

              <div className="pt-2">
                <button
                  onClick={onOpenAudit}
                  className="w-full py-3.5 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Build Similar Growth Engine for Your Brand</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
