export const AGENTS_DATA = [
  {
    id: "research",
    name: "Research Agent",
    badge: "Agent 01",
    role: "Intent Discovery & Entity Mining",
    status: "Active",
    model: "DeepSeek R1 / Claude 3.5 Sonnet",
    description: "Monitors search queries, conversational prompts across ChatGPT & Perplexity, and competitor semantic graphs to surface high-converting topics.",
    currentTask: "Synthesizing 140 conversational buyer queries for Dental Implantology in Austin, TX",
    sampleInput: "Identify top 20 transactional queries asked to ChatGPT regarding clear aligners vs braces with price intent.",
    sampleOutput: {
      type: "JSON Analysis",
      primaryEntity: "Clear Aligners vs Traditional Orthodontics",
      intentScore: "94/100 (High Commercial Intent)",
      discoveredQuestions: [
        "What is the average out-of-pocket cost for clear aligners in 2026?",
        "Which clinics in Austin offer same-day digital 3D scans?",
        "Does dental insurance cover accelerated aligner treatments?"
      ],
      aiOpportunityGap: "68% of competitors lack structured Q&A schema answering direct cost breakdowns."
    }
  },
  {
    id: "audit",
    name: "Audit Agent",
    badge: "Agent 02",
    role: "Technical SEO & LLM Crawlability",
    status: "Active",
    model: "Custom Crawler + GPT-4o",
    description: "Audits DOM hierarchy, Core Web Vitals, server response times, and verifies whether LLM crawlers (GPTBot, ClaudeBot, PerplexityBot) can index your site.",
    currentTask: "Running automated robots.txt & semantic tag validation across 412 client pages",
    sampleInput: "Verify robots.txt permissions for GPTBot, CCBot, and PerplexityBot. Check header semantic tagging.",
    sampleOutput: {
      type: "Audit Health",
      score: "96/100",
      crawlersStatus: {
        GPTBot: "Allowed (200 OK)",
        PerplexityBot: "Allowed (200 OK)",
        ClaudeBot: "Allowed (200 OK)"
      },
      criticalIssuesFound: 0,
      optimizationsIdentified: "2 tables lacking ARIA markdown summaries for headless AI scraping"
    }
  },
  {
    id: "strategy",
    name: "Strategy Agent",
    badge: "Agent 03",
    role: "Growth Prioritization & Roadmap Engine",
    status: "Active",
    model: "Gemini 1.5 Pro (2M Context)",
    description: "Evaluates keyword difficulty against domain authority and predicts ROI to generate a weekly high-impact execution backlog.",
    currentTask: "Ranking 45 content briefs by expected AI recommendation volume for Q4",
    sampleInput: "Prioritize 12 target topics for a B2B SaaS accounting tool based on search volume vs citation probability.",
    sampleOutput: {
      type: "Prioritized Sprint",
      topPriority: "Enterprise Multi-Entity Consolidation Guide",
      projectedAiCitations: "+42 citations/mo across Perplexity & ChatGPT",
      expectedTimeframe: "14 days to indexation",
      difficultyTier: "Medium (Authority gap can be closed with 2 authoritative co-citations)"
    }
  },
  {
    id: "content",
    name: "Content Agent",
    badge: "Agent 04",
    role: "Information-Dense Content Drafting",
    status: "Active",
    model: "Claude 3.5 Sonnet",
    description: "Writes original, citation-optimized articles, comparison tables, FAQ blocks, and case studies tailored for both human readers and LLM extractors.",
    currentTask: "Drafting 2,400-word comprehensive guide on Zero-Knowledge Proofs for FinTech Compliance",
    sampleInput: "Generate a factual, data-backed guide with extractable definition snippets, comparison tables, and verified statistics.",
    sampleOutput: {
      type: "Structured Content Draft",
      title: "How B2B SaaS Founders Cut SOC-2 Audit Times by 70% in 2026",
      wordCount: "2,420 words",
      readabilityIndex: "Grade 11 (Expert Yet Accessible)",
      informationDensityScore: "9.4/10 (High quote/fact density per paragraph)"
    }
  },
  {
    id: "seo",
    name: "SEO Agent",
    badge: "Agent 05",
    role: "On-Page & Internal Link Orchestration",
    status: "Active",
    model: "Custom Graph Neural Network",
    description: "Calculates PageRank distribution, automates contextual internal links, generates semantic meta headers, and structures anchor text.",
    currentTask: "Injecting 28 contextual semantic internal links across service cluster pages",
    sampleInput: "Optimize internal link topology between /services/dental-implants and /guides/implant-recovery-timeline.",
    sampleOutput: {
      type: "Optimization Map",
      linksUpdated: 14,
      anchorTextDistribution: "Natural / Non-cannibalized",
      pageRankFlowImprovement: "+31% link equity routed to high-intent conversion pages"
    }
  },
  {
    id: "schema",
    name: "Schema Agent",
    badge: "Agent 06",
    role: "Nested JSON-LD Entity Graph Builder",
    status: "Active",
    model: "Custom LLM Entity Parser",
    description: "Builds rigorous, error-free Schema.org JSON-LD markup connecting Organizations, Authors, Medical/Technical Services, Reviews, and FAQs.",
    currentTask: "Validating schema entity graph for Google Rich Results & Perplexity entity ingestion",
    sampleInput: "Construct nested MedicalBusiness + FAQPage + AggregateRating JSON-LD schema.",
    sampleOutput: {
      type: "JSON-LD Entity Graph",
      validationStatus: "100% Valid (Schema.org / Google Search Console)",
      entityTypes: ["MedicalClinic", "Dentist", "FAQPage", "OfferCatalog"],
      verifiedProperties: 32
    }
  },
  {
    id: "authority",
    name: "Authority Agent",
    badge: "Agent 07",
    role: "Digital PR & Co-Citation Network",
    status: "Active",
    model: "Outreach Intelligence Engine",
    description: "Identifies top industry publications, podcasts, and authoritative platforms that LLMs use as primary source training data, coordinating brand mentions.",
    currentTask: "Securing 4 expert commentary placements in VentureBeat and Healthcare Tech Today",
    sampleInput: "Find 15 journalist queries related to AI automation in healthcare and draft bespoke executive quotes.",
    sampleOutput: {
      type: "PR Pipeline",
      journalistsContacted: 18,
      opportunitiesClaimed: 4,
      targetDomainAuthority: "DA 78-91",
      citationImpact: "High (Domains heavily sampled in Common Crawl & Perplexity indices)"
    }
  },
  {
    id: "social",
    name: "Social Agent",
    badge: "Agent 08",
    role: "Multi-Channel Content Repurposing",
    status: "Active",
    model: "GPT-4o Mini",
    description: "Translates approved long-form articles into LinkedIn executive carousels, X threads, and Google Business Profile updates with human sign-off.",
    currentTask: "Drafting 5 Google Business Profile weekly updates and 3 LinkedIn thought leadership posts",
    sampleInput: "Transform the dental implants pillar article into 3 high-engagement LinkedIn posts and 1 GBP announcement.",
    sampleOutput: {
      type: "Social Multi-Pack",
      assetsGenerated: ["LinkedIn Carousel (8 slides)", "X Thread (6 tweets)", "GBP Event Post with CTA"],
      approvalRequired: true,
      readyForReview: "Awaiting Client Sign-off in Mobile Cockpit"
    }
  },
  {
    id: "analytics",
    name: "Analytics Agent",
    badge: "Agent 09",
    role: "AI Citation Tracker & Multi-Touch Attribution",
    status: "Active",
    model: "Proprietary Synthetic Evaluation Engine",
    description: "Simulates thousands of user queries daily across ChatGPT, Claude, Perplexity, and Google AI Overviews to measure citation frequency and sentiment.",
    currentTask: "Running 500 synthetic queries tracking client brand mentions vs 4 primary competitors",
    sampleInput: "Track brand share of voice for query 'best inventory forecasting software for Shopify brands'.",
    sampleOutput: {
      type: "AI Share of Voice",
      brandMentionRate: "42.8% (+14.2% MoM)",
      competitor1MentionRate: "28.1%",
      competitor2MentionRate: "19.4%",
      sentimentScore: "98% Positive / Authoritative"
    }
  },
  {
    id: "reporting",
    name: "Reporting Agent",
    badge: "Agent 10",
    role: "Executive Performance & ROI Synthesizer",
    status: "Active",
    model: "Deterministic Report Compiler",
    description: "Generates weekly transparent client dashboards connecting completed agent tasks to organic sessions, pipeline generated, and revenue lift.",
    currentTask: "Compiling weekly executive growth briefing for 34 client retainers",
    sampleInput: "Aggregate Google Analytics 4, Search Console, and AI Citation data into 1-page executive summary.",
    sampleOutput: {
      type: "Client Executive Report",
      organicSessions: "48,290 (+28% MoM)",
      aiAssistedLeads: "184 qualified demos",
      tasksCompletedThisWeek: 37,
      topWin: "Captured #1 source citation in ChatGPT Search for high-intent target query"
    }
  }
];

export const CASE_STUDIES = [
  {
    client: "Apex Orthodontics & Dental Care",
    category: "Healthcare & Local Services",
    location: "Austin & Dallas, TX",
    timeline: "90 Days",
    summary: "Dominated local Google search and became the #1 recommended dental provider across ChatGPT and Google AI Overviews.",
    metrics: [
      { label: "AI Search Citations", value: "+385%", note: "Across Perplexity & ChatGPT" },
      { label: "Qualified Patient Leads", value: "+215%", note: "Direct appointment bookings" },
      { label: "Cost Per Acquisition", value: "-44%", note: "Reduced reliance on Google Ads" }
    ],
    quote: "Patients walk into our clinic saying 'ChatGPT recommended you when I asked who the top implant surgeon in Austin is'. AETHER's system paid for itself 10x over in the first 60 days.",
    author: "Dr. Marcus Vance, Founder & Chief Surgeon"
  },
  {
    client: "CloudScale DevSecOps",
    category: "B2B SaaS / Enterprise",
    location: "San Francisco, CA",
    timeline: "120 Days",
    summary: "Replaced 3 fragmented content tools and an expensive manual SEO agency with an automated AEO pipeline and human review.",
    metrics: [
      { label: "Perplexity Recommendation Share", value: "62%", note: "Up from 4% baseline" },
      { label: "Enterprise Pipeline Created", value: "$1.4M+", note: "Attributed organic ARR" },
      { label: "Content Turnaround", value: "3.2x Faster", note: "With 1-click team approval" }
    ],
    quote: "Our buyers don't browse 10 blue links anymore—they ask Claude or Perplexity for architectural comparisons. AETHER made sure our software is the cited authority in every evaluation.",
    author: "Sarah Lindqvist, VP of Demand Generation"
  },
  {
    client: "NovaTrade Global",
    category: "FinTech & Compliance",
    location: "London & New York",
    timeline: "60 Days",
    summary: "Rapid authority building and structured schema deployment across 5 global jurisdictions.",
    metrics: [
      { label: "Zero-Click AI Presence", value: "91/100", note: "Authoritative citation rating" },
      { label: "Organic Inbound Sessions", value: "+178%", note: "High commercial intent traffic" },
      { label: "Hours Saved Weekly", value: "24 hrs/wk", note: "Automated reporting & syndication" }
    ],
    quote: "The combination of automated AI agent execution with a mandatory mobile approval gate gave our legal and marketing team complete peace of mind. Exceptional ROI.",
    author: "Julian Thorne, Head of Digital Growth"
  }
];

export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter Engine",
    subtitle: "For boutique brands & local service leaders seeking dominant AI visibility",
    monthlyPrice: 750,
    quarterlyPrice: 637,
    target: "Small businesses & local multi-location firms",
    badge: "Foundation",
    features: [
      "Traditional SEO + AEO Core Setup",
      "4 Citation-Optimized Content Pieces / mo",
      "Basic AI Visibility & Citation Tracking (Perplexity + ChatGPT)",
      "Technical SEO & Core Web Vitals Monitoring",
      "Schema.org Structured JSON-LD Implementation",
      "Human-in-the-Loop Mobile Approval Portal",
      "Monthly Strategy & Executive Performance Review",
      "Standard Email & Slack Support"
    ],
    cta: "Launch Starter Engine",
    highlight: false
  },
  {
    id: "growth",
    name: "Growth Engine",
    subtitle: "For scaling companies ready to capture category-leading AI & Google search market share",
    monthlyPrice: 1500,
    quarterlyPrice: 1275,
    target: "Growing B2B SaaS, mid-market & regional leaders",
    badge: "Most Popular",
    features: [
      "Comprehensive AEO, GEO & Full-Funnel SEO",
      "12 Citation-Optimized Content Pieces / mo",
      "Real-Time AI Citation Tracker (ChatGPT, Claude, Perplexity, Google AI)",
      "Continuous Competitor Semantic Gap Intelligence",
      "Automated Social & Google Business Profile Syndication",
      "Digital PR & High-Authority Co-Citation Placements",
      "Weekly Progress Briefings & Dedicated Strategist",
      "Client Dashboard with Custom Domain Access",
      "Guaranteed Performance Milestone Review"
    ],
    cta: "Start Growth Retainer",
    highlight: true
  },
  {
    id: "scale",
    name: "Scale & Enterprise",
    subtitle: "For aggressive category dominance, enterprise multi-brands & high-volume pipelines",
    monthlyPrice: 3000,
    quarterlyPrice: 2550,
    target: "Established brands & high-growth enterprise scaleups",
    badge: "Maximum Impact",
    features: [
      "Total Search & AI Ecosystem Domination Program",
      "20+ High-Density Research & Thought Leadership Assets / mo",
      "Enterprise Multi-Jurisdiction Schema Architecture",
      "Custom AI Agent Workflow Integration into Internal CRM/Slack",
      "Aggressive Digital PR & Tier-1 Media Placement Engine",
      "Weekly Executive Strategy & Dedicated Fractional Head of Search",
      "Custom AI Search Sandbox & Synthetic Query Simulator",
      "24/7 Priority Support & Dedicated Private Slack Channel",
      "Contractual Qualified Lead Growth SLA"
    ],
    cta: "Contact Enterprise Team",
    highlight: false
  }
];

export const MODULAR_ADDONS = [
  {
    title: "AI Marketing Workflow Engine",
    type: "One-Time Setup",
    price: "$500 – $2,000",
    desc: "Custom agent architecture connecting your CRM, research pipelines, and CMS with automated webhooks."
  },
  {
    title: "Autonomous Content & Social Engine",
    type: "Monthly Retainer",
    price: "$300 – $800/mo",
    desc: "End-to-end multi-platform content generation with human approval queues for LinkedIn, X, and blogs."
  },
  {
    title: "Local Market & Review Dominance",
    type: "Monthly Retainer",
    price: "$200 – $600/mo",
    desc: "AI review response drafting, Google Business Profile regular updates, and local citation defense."
  },
  {
    title: "Custom AI Agent System Development",
    type: "Project Based",
    price: "$1,000+ / project",
    desc: "Bespoke AI agents built with custom knowledge graphs tailored to your proprietary company workflows."
  }
];

export const MOCK_APPROVAL_ITEMS = [
  {
    id: "appr-1",
    agent: "Content Agent",
    type: "Article Publication",
    title: "The 2026 Patient Guide to All-on-4 Dental Implants in Austin",
    targetUrl: "https://apexorthodontics.com/blog/all-on-4-guide-austin",
    date: "12 mins ago",
    summary: "Optimized for conversational Perplexity & ChatGPT queries. Includes verified cost breakdowns, recovery timeline table, and MedicalWebPage schema markup.",
    riskLevel: "Low",
    wordCount: 1850,
    status: "pending"
  },
  {
    id: "appr-2",
    agent: "SEO & Schema Agent",
    type: "Core Schema Update",
    title: "Inject Nested Physician & MedicalBusiness Entity Graph",
    targetUrl: "https://apexorthodontics.com/services/implant-surgery",
    date: "35 mins ago",
    summary: "Connects Dr. Marcus Vance to NPI Registry, Google Knowledge Graph CID, and adds 6 direct question-answer pairs for Google AI Overviews.",
    riskLevel: "Medium",
    codePreview: '<script type="application/ld+json">{"@context":"https://schema.org","@type":"MedicalClinic","name":"Apex Orthodontics"}</script>',
    status: "pending"
  },
  {
    id: "appr-3",
    agent: "Social Agent",
    type: "Google Business Post",
    title: "Spring Weekend Emergency Dental Consultations Announcement",
    targetUrl: "Google Business Profile: Apex Orthodontics Austin",
    date: "1 hour ago",
    summary: "Promotional local update highlighting same-day emergency slots with verified phone tracking number and direct appointment booking CTA.",
    riskLevel: "Low",
    status: "pending"
  }
];
