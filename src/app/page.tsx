"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/components/sections/header';
import CombinedHero from '@/components/sections/combined-hero';
import IntelligenceEngine from '@/components/sections/intelligence-engine';
import TransformationWorkflow from '@/components/sections/transformation-workflow';
import UseCases from '@/components/sections/use-cases';
import TeamInstitutions from '@/components/sections/team-institutions';
import PreFooterSection from '@/components/sections/pre-footer';
import Footer from '@/components/sections/footer';

export default function Home() {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress into background color
  // Starts at off-white (#F7F7F7) and goes to a deeper neutral/dark shade
  const backgroundColor = '#FFFFFF';

  return (
    <motion.main 
      className="min-h-screen"
      style={{ backgroundColor, willChange: 'background-color', transform: 'translateZ(0)' }}
    >
      {/* Navigation */}
      <Header />

      {/* Hero Section - Hybrid of Pointer and a37 */}
      <div className="border-b border-[#1a472a]">
        <CombinedHero />
      </div>

      {/* Intelligence Visualization - a37 */}
      <div className="border-b border-[#1a472a]">
        <IntelligenceEngine />
      </div>

      {/* Industry Use Cases - a37 (Dark Section) */}
      <div className="border-b border-[#1a472a]">
        <UseCases />
      </div>

      {/* Team & Authority - a37 */}
      <div className="border-b border-[#1a472a]">
        <TeamInstitutions />
      </div>

      {/* Secondary CTA - Pointer */}
      <div className="border-b border-[#1a472a]">
        <PreFooterSection />
      </div>

      {/* Global Footer - Pointer */}
      <Footer />
    </motion.main>
  );
}
