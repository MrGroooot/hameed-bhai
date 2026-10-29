import React from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  ArrowRight, 
  Sparkles, 
  Search, 
  Bot, 
  TrendingDown, 
  TrendingUp,
  Cpu
} from 'lucide-react';

export default function ParadigmShift({ onOpenAudit }) {
  return (
    <section id="problem" className="relative py-24 bg-[#090b11] border-t border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono font-medium mb-4">
            <AlertTriangle className="h-3.5 w-3.5" />
            <span>The Reality of Modern Search</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Search Has Splitted in Two. <br className="hidden sm:inline" />
            <span className="text-gradient-emerald">Is Your Brand Visible in Both?</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Buyers don’t click through 10 generic blue links anymore. They ask nuanced, conversational questions to ChatGPT, Perplexity, Claude, and Google AI Overviews—and act on direct recommendations.
          </p>
        </div>

        {/* 3 Critical Numbers */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel rounded-2xl p-6 border border-white/10 relative overflow-hidden group">
            <div className="text-3xl sm:text-4xl font-extrabold text-rose-400 font-mono">64.8%</div>
            <div className="mt-2 text-sm font-semibold text-white">Zero-Click Searches in 2026</div>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              Nearly two-thirds of search queries are answered directly on the results page or conversational interface without the user ever clicking a traditional organic link.
            </p>
            <div className="mt-4 flex items-center text-xs text-rose-400 font-medium">
              <TrendingDown className="h-4 w-4 mr-1" />
              <span>Standard organic CTR down 38%</span>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-white/10 relative overflow-hidden group">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">4.2x</div>
            <div className="mt-2 text-sm font-semibold text-white">Higher Conversion on AI Citations</div>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              When an AI engine synthesizes an answer and cites your business as the authoritative recommendation, buyers enter your funnel with pre-built trust and high purchase intent.
            </p>
            <div className="mt-4 flex items-center text-xs text-emerald-400 font-medium">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>Direct-to-demo conversion velocity</span>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-white/10 relative overflow-hidden group">
            <div className="text-3xl sm:text-4xl font-extrabold text-teal-400 font-mono">&lt; 15%</div>
            <div className="mt-2 text-sm font-semibold text-white">Brands Have an Active AEO Strategy</div>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              Most businesses are still stuck spending thousands on legacy keyword stuffing. Capturing AI share-of-voice right now represents a massive, uncontested window of opportunity.
            </p>
            <div className="mt-4 flex items-center text-xs text-teal-400 font-medium">
              <Sparkles className="h-4 w-4 mr-1" />
              <span>First-mover category advantage</span>
            </div>
          </div>
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div className="mt-16 glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* The Old Way */}
            <div className="p-8 bg-slate-950/40 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400">
                  <Search className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">The Old Model: Traditional SEO Only</h3>
                  <span className="text-xs text-slate-400 font-mono">Legacy agencies (2015 – 2023)</span>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start space-x-3">
                  <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-100">Keyword stuffing & volume games:</strong> Floods the web with generic 500-word articles that AI engines summarize away in seconds.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-100">Hidden below the fold:</strong> Traditional rankings (positions 1-5) are now pushed below massive AI Overview widgets and sponsored snippets.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-100">Opaque monthly PDFs:</strong> Reports report on arbitrary keyword ranks with zero insight into whether AI engines cite your brand.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-100">Manual, slow agency overhead:</strong> Hundreds of billable hours spent manually checking links, resulting in sluggish delivery and high costs.
                  </div>
                </li>
              </ul>
            </div>

            {/* The New AETHER Way */}
            <div className="p-8 bg-emerald-950/20 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">The AETHER Model: Unified AEO + SEO Engine</h3>
                  <span className="text-xs text-emerald-400 font-mono">Autonomous Agents + Human Strategy</span>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Citation-Engineered Content:</strong> Information-dense structuring with schema, clear data tables, and expert quotes that LLMs love to extract.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Dual-Surface Domination:</strong> Optimizes for both traditional Google SERPs and conversational engines (ChatGPT, Perplexity, Claude, Gemini).
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Synthetic Citation Tracking:</strong> Continuously measures brand recommendation frequency and sentiment across LLMs.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">10-Agent Automation + Human Approval:</strong> Drastically reduces turnaround times while keeping sovereign control in your hands before anything publishes.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom callout */}
          <div className="p-6 bg-slate-900/80 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-300">
              Don't let your competitors monopolize AI recommendations while you only fight for diminishing blue clicks.
            </p>
            <button
              onClick={onOpenAudit}
              className="px-5 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shrink-0 flex items-center space-x-2"
            >
              <span>Scan Your Site's AI Presence</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
