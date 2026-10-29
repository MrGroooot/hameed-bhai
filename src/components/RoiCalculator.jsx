import React, { useState } from 'react';
import { 
  BarChart, 
  TrendingUp, 
  DollarSign, 
  ArrowRight, 
  Sparkles, 
  Sliders, 
  CheckCircle2,
  Cpu
} from 'lucide-react';

export default function RoiCalculator({ onOpenContact }) {
  const [visitors, setVisitors] = useState(15000);
  const [dealValue, setDealValue] = useState(3500);
  const [conversionRate, setConversionRate] = useState(1.5);

  // Calculations
  // Current monthly leads
  const currentLeads = Math.round((visitors * (conversionRate / 100)));
  // With AEO + Agent Growth Engine: projected +35% citation traffic & +50% qualified conversion velocity
  const projectedLeads = Math.round(currentLeads * 1.65);
  const incrementalMonthlyLeads = projectedLeads - currentLeads;
  
  // Annual incremental revenue (assuming 25% close rate on qualified leads)
  const monthlyClosedDeals = Math.round(incrementalMonthlyLeads * 0.25);
  const incrementalMonthlyRevenue = monthlyClosedDeals * dealValue;
  const projectedAnnualRevenue = incrementalMonthlyRevenue * 12;

  // Growth retainer ROI calculation ($1,500/mo * 12 = $18,000/yr)
  const annualRetainerCost = 18000;
  const roiMultiple = projectedAnnualRevenue > 0 
    ? (projectedAnnualRevenue / annualRetainerCost).toFixed(1) 
    : '5.2';

  return (
    <section id="calculator" className="relative py-24 bg-[#090b12] border-t border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-4">
            <Sliders className="h-3.5 w-3.5" />
            <span>Interactive Financial Model</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Calculate Your Projected <br className="hidden sm:inline" />
            <span className="text-gradient-emerald">AI Search Revenue Multiplier.</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            See the compounding business impact of capturing AI search citations across ChatGPT, Perplexity, and Google AI Overviews.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="mt-14 max-w-5xl mx-auto glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl bg-[#0c0f18]/95">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Sliders (Left 6 cols) */}
            <div className="lg:col-span-6 space-y-8">
              {/* Slider 1: Monthly Organic Visitors */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-300 uppercase tracking-wider">
                    Current Monthly Visitors
                  </span>
                  <span className="text-emerald-400 font-bold text-sm">
                    {visitors.toLocaleString()} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="100000"
                  step="1000"
                  value={visitors}
                  onChange={(e) => setVisitors(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>2,000</span>
                  <span>50,000</span>
                  <span>100,000+</span>
                </div>
              </div>

              {/* Slider 2: Average Deal / Patient Value */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-300 uppercase tracking-wider">
                    Average Deal / Client Value
                  </span>
                  <span className="text-emerald-400 font-bold text-sm">
                    ${dealValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="25000"
                  step="250"
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>$500</span>
                  <span>$10,000</span>
                  <span>$25,000+</span>
                </div>
              </div>

              {/* Slider 3: Current Conversion Rate */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-300 uppercase tracking-wider">
                    Current Visitor-to-Lead Rate
                  </span>
                  <span className="text-emerald-400 font-bold text-sm">
                    {conversionRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="5.0"
                  step="0.1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>0.5%</span>
                  <span>2.5%</span>
                  <span>5.0%</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400 space-y-1">
                <div className="flex items-center space-x-2 text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Conservative benchmark model based on 60-day client averages.</span>
                </div>
              </div>
            </div>

            {/* Projected ROI Results Card (Right 6 cols) */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-900/90 to-teal-950/40 border border-emerald-500/30 space-y-6">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block font-semibold">
                Estimated Growth Impact
              </span>

              {/* Incremental Annual Revenue */}
              <div>
                <span className="text-xs text-slate-400 font-medium block">
                  Projected Incremental Annual Revenue:
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono mt-1 text-gradient-emerald">
                  +${projectedAnnualRevenue.toLocaleString()}
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  Based on +{incrementalMonthlyLeads} additional qualified leads / month
                </span>
              </div>

              {/* ROI multiple & break-even */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-[11px] font-mono text-slate-400 block">
                    Estimated Retainer ROI
                  </span>
                  <div className="text-2xl font-extrabold text-emerald-400 font-mono mt-0.5">
                    {roiMultiple}x
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Annual multiple
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-[11px] font-mono text-slate-400 block">
                    Break-Even Timeline
                  </span>
                  <div className="text-2xl font-extrabold text-teal-400 font-mono mt-0.5">
                    &lt; 45 Days
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">
                    First client wins
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenContact}
                  className="w-full py-4 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/20"
                >
                  <span>Build Your Custom Growth Roadmap</span>
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
