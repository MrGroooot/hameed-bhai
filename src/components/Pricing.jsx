import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  HelpCircle,
  Clock,
  Layers
} from 'lucide-react';
import { PRICING_PLANS, MODULAR_ADDONS } from '../data/mockData';

export default function Pricing({ onOpenContact }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // monthly | quarterly

  return (
    <section id="pricing" className="relative py-24 bg-[#090b12] border-t border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-4">
            <Zap className="h-3.5 w-3.5" />
            <span>Transparent Growth Retainers</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Predictable Investment. <br className="hidden sm:inline" />
            <span className="text-gradient-emerald">Uncompromising Execution.</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            We don’t compete on vanity article counts. We deliver full-funnel search dominance, structured authority, and transparent business outcomes with 10-agent automation.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-white/[0.03] border border-white/10">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Retainer
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                billingCycle === 'quarterly'
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Quarterly Sprint</span>
              <span className="px-1.5 py-0.5 rounded-full bg-emerald-950/40 text-[10px] text-emerald-300 font-bold border border-emerald-400/30">
                Save 15%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Core Retainers Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.quarterlyPrice;
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  plan.highlight
                    ? 'glass-panel border-emerald-500/60 shadow-2xl shadow-emerald-500/15 ring-1 ring-emerald-500/30 scale-105 z-10 bg-[#0d121c]/95'
                    : 'glass-panel border-white/10 hover:border-white/20 bg-slate-950/50'
                }`}
              >
                {/* Most Popular Badge */}
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-emerald-400">
                      {plan.name}
                    </span>
                    {!plan.highlight && (
                      <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-xs text-slate-400 min-h-[36px]">
                    {plan.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline space-x-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono">
                      ${price.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">/ month</span>
                  </div>

                  <div className="mt-2 text-xs text-slate-400 font-medium">
                    Target: <span className="text-slate-300">{plan.target}</span>
                  </div>

                  {/* Deliverables checklist */}
                  <div className="mt-8 space-y-3 pt-6 border-t border-white/10">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Included Capabilities:
                    </span>
                    <ul className="space-y-3 text-xs text-slate-300">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2.5">
                          <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <button
                    onClick={onOpenContact}
                    className={`w-full py-3.5 rounded-xl text-xs font-bold tracking-wide transition-all flex items-center justify-center space-x-2 ${
                      plan.highlight
                        ? 'bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-lg shadow-emerald-500/25'
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Qualified Growth Guarantee Banner */}
        <div className="mt-14 max-w-4xl mx-auto glass-panel rounded-2xl p-6 sm:p-8 border border-emerald-500/30 bg-emerald-950/20 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="h-14 w-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-heading font-bold text-lg text-white">
                The Qualified Growth Milestone Guarantee
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                For eligible clients enrolled in Growth or Scale engines, we commit to measurable milestones within 90 days. If your verified AI citation frequency and qualified organic pipeline do not expand according to agreed benchmark targets, we work for free until they do.
              </p>
            </div>
          </div>
        </div>

        {/* Standalone Automation & Custom Agent Modules */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
              Need Standalone Automation Without a Full Retainer?
            </h3>
            <p className="mt-2 text-xs text-slate-400">
              Deploy our modular AI agents and workflows as standalone capabilities for your in-house team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {MODULAR_ADDONS.map((mod, mIdx) => (
              <div 
                key={mIdx}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                    {mod.type}
                  </span>
                  <h4 className="font-semibold text-sm text-white mt-3">
                    {mod.title}
                  </h4>
                  <div className="text-base font-bold text-emerald-400 font-mono mt-1">
                    {mod.price}
                  </div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5">
                  <button
                    onClick={onOpenContact}
                    className="text-xs text-slate-300 hover:text-emerald-300 font-medium flex items-center space-x-1"
                  >
                    <span>Configure module</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
