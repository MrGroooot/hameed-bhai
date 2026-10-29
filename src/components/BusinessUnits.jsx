import React, { useState } from 'react';
import { 
  Search, 
  Bot, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Workflow, 
  Cpu, 
  ShieldCheck, 
  LineChart, 
  Globe, 
  Share2, 
  FileText,
  Sliders,
  ChevronRight
} from 'lucide-react';

export default function BusinessUnits({ onOpenAudit, onOpenContact }) {
  const [activeUnit, setActiveUnit] = useState(0);

  const units = [
    {
      id: "search",
      badge: "Engine 01 • Immediate Revenue",
      title: "AI Search & Growth Agency",
      tagline: "Done-for-you organic search & generative answer optimization",
      description: "We handle the entire growth pipeline. From foundational technical crawlability to advanced entity graph schema and high-density citation assets, our senior strategists and AI agents optimize your brand to win both Google and AI engines.",
      icon: Search,
      accent: "from-emerald-500 to-teal-400",
      pillColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
      capabilities: [
        { name: "Answer Engine Optimization (AEO)", desc: "Engineering your site structure so LLMs parse and cite you as the primary source." },
        { name: "Generative Engine Optimization (GEO)", desc: "Optimizing statistical entity co-occurrences across datasets crawled by Claude & ChatGPT." },
        { name: "Full-Stack Technical SEO", desc: "Core Web Vitals, headless rendering, robots.txt authorization for AI crawlers." },
        { name: "Nested JSON-LD Schema Architecture", desc: "Building comprehensive, error-free Google Knowledge Graph entity trees." },
        { name: "Topical Authority & Information Gain", desc: "Creating original research, benchmarks, and data that other sites and AI models reference." },
        { name: "Digital PR & Strategic Co-Citations", desc: "Securing authoritative brand mentions on high-authority platforms favored by LLMs." }
      ],
      stats: { primary: "+240%", label: "Average organic citation lift in 90 days" }
    },
    {
      id: "automation",
      badge: "Engine 02 • High-Margin Delivery",
      title: "AI Marketing & Workflow Automation",
      tagline: "Eliminate repetitive execution without sacrificing quality or brand voice",
      description: "Unlike traditional agencies that waste weeks on routine drafting, we deploy customized agentic workflows that automatically research, draft, cross-link, and repurpose marketing assets—queued directly for your 1-click review.",
      icon: Workflow,
      accent: "from-teal-400 to-cyan-500",
      pillColor: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
      capabilities: [
        { name: "Autonomous Competitor Semantic Scans", desc: "Daily monitoring of competitor keyword ranks and newly gained AI citations." },
        { name: "Multi-Channel Social Repurposing", desc: "Transforming long-form pillar articles into LinkedIn carousels, X threads, and newsletter briefs." },
        { name: "Google Business Profile Automation", desc: "Automating weekly updates, promotional posts, and local service announcements." },
        { name: "Intelligent Review Response Drafting", desc: "Drafting personalized, brand-aligned responses to customer reviews in seconds." },
        { name: "Automated Lead Enrichment & Scoring", desc: "Qualifying incoming organic leads against search queries and intent scores." },
        { name: "Deterministic Brief & FAQ Generators", desc: "Generating citation-ready Q&A accordions directly aligned with user prompt patterns." }
      ],
      stats: { primary: "80%", label: "Reduction in production turnaround time" }
    },
    {
      id: "platform",
      badge: "Engine 03 • Scalable Software Ecosystem",
      title: "Proprietary AI Growth OS & Portal",
      tagline: "One unified cockpit for transparency, real-time citation tracking, and approvals",
      description: "No more messy spreadsheets or opaque monthly emails. Our proprietary client portal gives you a live mission control dashboard to monitor your AI share of voice, approve pending deliverables with one tap, and inspect real-time attribution.",
      icon: Layers,
      accent: "from-indigo-500 to-violet-400",
      pillColor: "border-indigo-500/30 text-indigo-400 bg-indigo-500/10",
      capabilities: [
        { name: "Synthetic AI Citation Tracker", desc: "Automated daily simulations tracking brand mention frequency on ChatGPT, Perplexity & Claude." },
        { name: "Mobile Human-in-the-Loop Approval Center", desc: "Review, edit, or authorize content and site changes directly from your phone." },
        { name: "Unified Organic & AI Attribution", desc: "Direct multi-touch visibility linking organic sessions to booked appointments and demos." },
        { name: "Granular Role-Based Access", desc: "Isolate company data with enterprise security, OAuth, and encrypted integrations." },
        { name: "Instant Audit & Gap Visualizer", desc: "Continuously highlights missing schema entities, broken citation links, and prompt opportunities." },
        { name: "White-Label Agency Mode", desc: "Deploy our portal under your agency's custom domain for client-facing growth delivery." }
      ],
      stats: { primary: "100%", label: "Client control over published assets" }
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-4">
            <Cpu className="h-3.5 w-3.5" />
            <span>The Hybrid Growth Flywheel</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Three Interconnected Engines. <br className="hidden sm:inline" />
            <span className="text-gradient-emerald">One Exponential Growth Model.</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            We don't merely run an agency, and we don't sell an empty software tool. We merge managed search mastery, agentic workflows, and a client-facing growth platform into a single powerhouse.
          </p>
        </div>

        {/* Tab selection buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {units.map((unit, idx) => {
            const Icon = unit.icon;
            const isSelected = activeUnit === idx;
            return (
              <button
                key={unit.id}
                onClick={() => setActiveUnit(idx)}
                className={`flex items-center space-x-3 px-5 py-3.5 rounded-xl border text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-slate-900 border-emerald-500/50 text-white shadow-lg shadow-emerald-500/10 scale-[1.02]'
                    : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]'
                }`}
              >
                <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/[0.05] text-slate-400'}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <span>{unit.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Engine Card */}
        <div className="mt-8 glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden shadow-2xl">
          {/* Subtle background gradient splash */}
          <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${units[activeUnit].accent} opacity-10 blur-3xl pointer-events-none rounded-full`} />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 5 cols: Overview */}
            <div className="lg:col-span-5 space-y-6">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold border ${units[activeUnit].pillColor}`}>
                {units[activeUnit].badge}
              </span>

              <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                {units[activeUnit].title}
              </h3>

              <p className="text-emerald-400 font-medium text-sm sm:text-base">
                "{units[activeUnit].tagline}"
              </p>

              <p className="text-slate-300 text-sm leading-relaxed">
                {units[activeUnit].description}
              </p>

              {/* Metric Card */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center space-x-4">
                <div className="text-3xl font-extrabold text-white font-mono">
                  {units[activeUnit].stats.primary}
                </div>
                <div className="text-xs text-slate-400 font-medium leading-snug">
                  {units[activeUnit].stats.label}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenContact}
                  className="px-6 py-3 rounded-xl text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center space-x-2"
                >
                  <span>Inquire About This Engine</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right 7 cols: Capabilities Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {units[activeUnit].capabilities.map((cap, cIdx) => (
                <div 
                  key={cIdx} 
                  className="p-4 rounded-xl bg-slate-900/70 border border-white/10 hover:border-emerald-500/30 transition-all group space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <h4 className="font-semibold text-sm text-white group-hover:text-emerald-300 transition-colors">
                      {cap.name}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-6">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
