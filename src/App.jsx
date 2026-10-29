import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParadigmShift from './components/ParadigmShift';
import BusinessUnits from './components/BusinessUnits';
import AgentWorkforce from './components/AgentWorkforce';
import HumanInTheLoopApproval from './components/HumanInTheLoopApproval';
import LiveAuditTool from './components/LiveAuditTool';
import PlatformCockpit from './components/PlatformCockpit';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import RoiCalculator from './components/RoiCalculator';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import AuditModal from './components/AuditModal';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openAudit = () => setIsAuditModalOpen(true);
  const closeAudit = () => setIsAuditModalOpen(false);

  const openContact = () => setIsContactModalOpen(true);
  const closeContact = () => setIsContactModalOpen(false);

  return (
    <div className="min-h-screen bg-[#08090d] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/25 selection:text-emerald-300">
      {/* Top Navbar */}
      <Navbar onOpenAudit={openAudit} onOpenContact={openContact} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenAudit={openAudit} onOpenContact={openContact} />

        {/* Section 2: The Problem / The Paradigm Shift */}
        <ParadigmShift onOpenAudit={openAudit} />

        {/* Section 3: The 3 Growth Engines */}
        <BusinessUnits onOpenAudit={openAudit} onOpenContact={openContact} />

        {/* Section 4: The 10-Agent Autonomous Workforce Visualizer */}
        <AgentWorkforce onOpenAudit={openAudit} />

        {/* Section 5: Denver AI Tech Human-in-the-Loop Sovereign Approval */}
        <HumanInTheLoopApproval />

        {/* Section 6: Live Diagnostic AI Audit Tool */}
        <LiveAuditTool onOpenContact={openContact} />

        {/* Section 7: Proprietary Client Growth Platform Cockpit */}
        <PlatformCockpit onOpenContact={openContact} />

        {/* Section 8: Verified Case Studies & Measurable Outcomes */}
        <CaseStudies onOpenAudit={openAudit} />

        {/* Section 9: Pricing & Managed Growth Retainers */}
        <Pricing onOpenContact={openContact} />

        {/* Section 10: Interactive ROI & Pipeline Calculator */}
        <RoiCalculator onOpenContact={openContact} />

        {/* Final Conversion Section */}
        <FinalCta onOpenAudit={openAudit} onOpenContact={openContact} />
      </main>

      {/* Footer */}
      <Footer onOpenAudit={openAudit} onOpenContact={openContact} />

      {/* Pop-up Modals */}
      <AuditModal isOpen={isAuditModalOpen} onClose={closeAudit} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContact} />
    </div>
  );
}
