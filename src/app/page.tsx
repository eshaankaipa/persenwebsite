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
      <CombinedHero />
      <div className="h-[1px] bg-[#1a472a]" />

      {/* Intelligence Visualization - a37 */}
      <IntelligenceEngine />
      <div className="h-[1px] bg-[#1a472a]" />

      {/* Industry Use Cases - a37 (Dark Section) */}
      <UseCases />
      <div className="h-[1px] bg-[#1a472a]" />

      {/* Team & Authority - a37 */}
      <TeamInstitutions />
      <div className="h-[1px] bg-[#1a472a]" />

      {/* Secondary CTA - Pointer */}
      <PreFooterSection />
      <div className="h-[1px] bg-[#1a472a]" />

      {/* Global Footer - Pointer */}
      <Footer />
    </motion.main>
  );
}
