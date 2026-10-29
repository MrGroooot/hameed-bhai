import React, { useState } from 'react';
import { 
  Cpu, 
  Terminal, 
  Play, 
  CheckCircle2, 
  Code, 
  FileText, 
  Search, 
  ShieldCheck, 
  Share2, 
  BarChart, 
  Sparkles,
  ArrowRight,
  RefreshCw,
  Zap,
  Globe
} from 'lucide-react';
import { AGENTS_DATA } from '../data/mockData';

export default function AgentWorkforce({ onOpenAudit }) {
  const [selectedAgentId, setSelectedAgentId] = useState('research');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationStep, setSimulationStep] = useState(null);

  const currentAgent = AGENTS_DATA.find(a => a.id === selectedAgentId) || AGENTS_DATA[0];

  const handleSimulate = () => {
    setIsSimulating(true);
    setSimulationStep("Ingesting target domain & prompt graphs...");
    setTimeout(() => {
      setSimulationStep("Synthesizing context across LLM indices...");
    }, 900);
    setTimeout(() => {
      setSimulationStep("Generating structured schema & actionable brief...");
    }, 1800);
    setTimeout(() => {
      setIsSimulating(false);
      setSimulationStep(null);
    }, 2600);
  };

  return (
    <section id="agents" className="relative py-24 bg-[#090b12] border-t border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-4">
            <Cpu className="h-3.5 w-3.5" />
            <span>Autonomous Intelligence Grid</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Meet the 10-Agent Workforce. <br className="hidden sm:inline" />
            <span className="text-gradient-emerald">Specialized Precision, Unified Output.</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Rather than relying on a single generic AI prompt, we orchestrate 10 specialized autonomous agents coordinated by deterministic workflows and verified by senior human strategists.
          </p>
        </div>

        {/* Interactive Agent Workstation */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Agent Selector List (Left 4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider px-2 mb-2 flex items-center justify-between">
              <span>Autonomous Agents (10 Active)</span>
              <span className="text-emerald-400 flex items-center space-x-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Operational</span>
              </span>
            </div>

            <div className="space-y-1.5 max-h-[600px] overflow-y-auto pr-1">
              {AGENTS_DATA.map((agent) => {
                const isSelected = agent.id === selectedAgentId;
                return (
                  <button
                    key={agent.id}
                    onClick={() => setSelectedAgentId(agent.id)}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between group ${
                      isSelected
                        ? 'bg-slate-800/90 border-emerald-500/50 shadow-md shadow-emerald-500/10'
                        : 'bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className={`font-mono text-xs px-2 py-0.5 rounded font-semibold ${
                        isSelected 
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                          : 'bg-white/5 text-slate-400'
                      }`}>
                        {agent.badge.replace('Agent ', '#')}
                      </span>
                      <div>
                        <div className={`text-sm font-semibold transition-colors ${
                          isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                        }`}>
                          {agent.name}
                        </div>
                        <div className="text-[11px] text-slate-400 truncate max-w-[170px]">
                          {agent.role}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Agent Live Inspection Terminal (Right 8 cols) */}
          <div className="lg:col-span-8">
            <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-[#0c0f18]/95">
              {/* Terminal Title Bar */}
              <div className="px-6 py-4 bg-slate-900/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Terminal className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-heading font-bold text-white text-base">
                        {currentAgent.name}
                      </h3>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {currentAgent.badge}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">
                      Engine: {currentAgent.model}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleSimulate}
                  disabled={isSimulating}
                  className="px-4 py-2 rounded-lg text-xs font-semibold font-mono bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 transition-all flex items-center space-x-2"
                >
                  {isSimulating ? (
                    <>
                      <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                      <span>Computing...</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-3.5 w-3.5" />
                      <span>Trigger Simulation</span>
                    </>
                  )}
                </button>
              </div>

              {/* Simulation Status Overlay if running */}
              {isSimulating && (
                <div className="p-4 bg-emerald-950/40 border-b border-emerald-500/30 flex items-center space-x-3 text-xs font-mono text-emerald-300 animate-pulse">
                  <Zap className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>[AGENT WORKFLOW IN PROGRESS]: {simulationStep}</span>
                </div>
              )}

              {/* Terminal Content Body */}
              <div className="p-6 space-y-6 text-sm">
                {/* Agent Mission & Active Task */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Core Objective
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {currentAgent.description}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1">
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block flex items-center space-x-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      <span>Current Active Execution</span>
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed font-mono">
                      "{currentAgent.currentTask}"
                    </p>
                  </div>
                </div>

                {/* Simulated Input Prompt */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <Code className="h-3.5 w-3.5 text-slate-400" />
                    <span>Dispatched Prompt Trigger</span>
                  </span>
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 font-mono text-xs text-slate-300 leading-relaxed">
                    <code>&gt; {currentAgent.sampleInput}</code>
                  </div>
                </div>

                {/* Formatted Agent Output */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 uppercase tracking-wider">
                    <span className="flex items-center space-x-1.5">
                      <FileText className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Synthesized Agent Output ({currentAgent.sampleOutput.type})</span>
                    </span>
                    <span className="text-emerald-400">Validated • Zero Hallucination</span>
                  </div>

                  <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-slate-200 overflow-x-auto shadow-inner">
                    <pre className="text-emerald-300">
                      {JSON.stringify(currentAgent.sampleOutput, null, 2)}
                    </pre>
                  </div>
                </div>

                {/* Bottom Workflow Integration Note */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="text-slate-400">
                    <strong className="text-slate-200">How this connects:</strong> Output is piped automatically to the downstream agent (or human approval queue) without human re-entry.
                  </div>
                  <button
                    onClick={onOpenAudit}
                    className="text-emerald-400 hover:text-emerald-300 font-semibold underline shrink-0"
                  >
                    Deploy for Your Brand →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
