import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Check, 
  X, 
  Edit3, 
  Smartphone, 
  Globe, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  Sparkles,
  Lock,
  ThumbsUp,
  RefreshCw
} from 'lucide-react';
import { MOCK_APPROVAL_ITEMS } from '../data/mockData';

export default function HumanInTheLoopApproval() {
  const [items, setItems] = useState(MOCK_APPROVAL_ITEMS);
  const [actionFeedback, setActionFeedback] = useState(null);

  const handleApprove = (id, title) => {
    setItems(prev => prev.filter(item => item.id !== id));
    setActionFeedback({
      type: 'approved',
      message: `Approved: "${title}" is now deployed & live on CMS!`
    });
    setTimeout(() => setActionFeedback(null), 4000);
  };

  const handleReject = (id, title) => {
    setItems(prev => prev.filter(item => item.id !== id));
    setActionFeedback({
      type: 'rejected',
      message: `Rejected: "${title}" archived. AI agents notified.`
    });
    setTimeout(() => setActionFeedback(null), 4000);
  };

  const handleReset = () => {
    setItems(MOCK_APPROVAL_ITEMS);
    setActionFeedback({
      type: 'reset',
      message: 'Demo queue reset to 3 pending items.'
    });
    setTimeout(() => setActionFeedback(null), 3000);
  };

  return (
    <section id="approvals" className="relative py-24 bg-[#08090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-4">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Denver AI Tech Philosophy</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Autonomous Speed. <br className="hidden sm:inline" />
            <span className="text-gradient-emerald">Human Sovereign Control.</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            We never publish unchecked AI content or push unauthorized website changes. AI agents do the heavy lifting of research and drafting, while you retain total control with 1-click mobile approvals.
          </p>
        </div>

        {/* Live Interactive Mobile & Approval Simulator */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Why This Matters (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center space-x-3 text-emerald-400">
                <Lock className="h-5 w-5" />
                <h3 className="font-heading font-bold text-lg text-white">The Zero-Risk Protocol</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Most agencies fail because they either move too slowly with manual human labor or ruin brand reputation by unleashing unchecked AI spam.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300">
                    <strong className="text-white">Review from your phone in 30 seconds:</strong> Get a mobile SMS or Slack ping when a batch of content, schema, or social posts is ready.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300">
                    <strong className="text-white">Full diff inspection:</strong> See exact metadata, word counts, and citation references before signing off.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300">
                    <strong className="text-white">Automated deployment on approval:</strong> Once you tap 'Approve', webhooks instantly publish to your CMS and ping search engine sitemaps.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <Smartphone className="h-4 w-4 text-emerald-400" />
                <span>Works seamlessly on iOS, Android, Slack, and Desktop.</span>
              </div>
              {items.length === 0 && (
                <button
                  onClick={handleReset}
                  className="text-emerald-400 hover:text-emerald-300 font-semibold underline flex items-center space-x-1"
                >
                  <RefreshCw className="h-3 w-3" />
                  <span>Reset Demo Queue</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Approval Cockpit (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl bg-[#0d101a]/95">
              {/* Cockpit Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-heading font-bold text-white text-base">
                    Client Approval Queue
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold">
                    {items.length} Pending Approval
                  </span>
                  {items.length < MOCK_APPROVAL_ITEMS.length && (
                    <button
                      onClick={handleReset}
                      title="Reset demo items"
                      className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/5"
                    >
                      <RefreshCw className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Action Toast Feedback */}
              {actionFeedback && (
                <div className={`mb-4 p-3 rounded-xl border text-xs font-mono flex items-center space-x-2 ${
                  actionFeedback.type === 'approved' 
                    ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                    : actionFeedback.type === 'rejected'
                    ? 'bg-rose-950/60 border-rose-500/40 text-rose-300'
                    : 'bg-slate-800 border-white/10 text-slate-300'
                }`}>
                  <Sparkles className="h-4 w-4 shrink-0" />
                  <span>{actionFeedback.message}</span>
                </div>
              )}

              {/* Items List */}
              {items.length > 0 ? (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition-all space-y-3"
                    >
                      {/* Top metadata */}
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-medium">
                            {item.agent}
                          </span>
                          <span className="text-slate-500">•</span>
                          <span className="text-slate-400">{item.type}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-slate-400 text-[11px] font-mono">
                          <Clock className="h-3 w-3" />
                          <span>{item.date}</span>
                        </div>
                      </div>

                      {/* Title & summary */}
                      <div>
                        <h4 className="font-semibold text-white text-sm sm:text-base">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                          {item.summary}
                        </p>
                      </div>

                      {/* Code preview if present */}
                      {item.codePreview && (
                        <div className="p-2.5 rounded-lg bg-black/50 border border-white/5 font-mono text-[11px] text-teal-300 overflow-x-auto">
                          <code>{item.codePreview}</code>
                        </div>
                      )}

                      {/* Action buttons */}
                      <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-white/5">
                        <div className="text-[11px] font-mono text-slate-400">
                          Target: <span className="text-slate-300">{item.targetUrl}</span>
                        </div>

                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleReject(item.id, item.title)}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 border border-white/10 hover:border-rose-500/30 transition-colors flex items-center space-x-1"
                          >
                            <X className="h-3.5 w-3.5" />
                            <span>Reject</span>
                          </button>

                          <button
                            onClick={() => handleApprove(item.id, item.title)}
                            className="px-4 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center space-x-1.5 shadow-md shadow-emerald-500/20"
                          >
                            <Check className="h-3.5 w-3.5 stroke-[3]" />
                            <span>Approve & Publish</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* All approved celebration state */
                <div className="text-center py-12 px-4 space-y-4">
                  <div className="h-16 w-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-white">
                    All Deliverables Approved & Deployed!
                  </h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Your site changes, schema graph updates, and citation articles are published live to Google & LLM indexes.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/15 text-white transition-colors"
                  >
                    Reload Sample Queue
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
