"use client";

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { InteractiveSimulationGrid } from '@/components/ui/interactive-simulation-grid';

const heroTexts = [
  "Simulate your audience.",
  "Predict your performance.",
  "Win all your Sales.",
];

export default function CombinedHero() {
  const heroRef = useRef<HTMLElement>(null);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full bg-[#FAFAFA] overflow-hidden"
    >
      {/* Background "Persen" text with very light gradient */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <span
          style={{
            fontFamily: 'var(--font-techno)',
            fontSize: 'clamp(200px, 30vw, 500px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            background: 'linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.03) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            whiteSpace: 'nowrap',
          }}
        >
          Persen
        </span>
      </div>

      {/* Light Dashed Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          zIndex: 1,
        }}
      />

      {/* Interactive Grid Canvas - societies.io style */}
      <div className="absolute inset-0 pointer-events-auto" style={{ zIndex: 2 }}>
        <InteractiveSimulationGrid columns={35} rows={18} />
      </div>

      {/* Subtle gradient overlay for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(250, 250, 250, 0.4) 70%)',
          zIndex: 3,
        }}
      />

      {/* Top Section: Title */}
      <div className="relative grid grid-cols-1 md:grid-cols-12 w-full min-h-[80vh] md:min-h-[90vh]" style={{ zIndex: 4 }}>
        <div className="col-span-12 flex items-center justify-center">
          {/* Centered Alternating Title with Techno Font */}
          <div className="flex items-center justify-center px-6">
            <AnimatePresence mode="wait">
              <motion.h1
                key={textIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="text-black text-center font-medium tracking-tighter"
                style={{ 
                  fontFamily: 'var(--font-techno)',
                  fontSize: 'clamp(56.76px, 9.425vw, 98.53px)',
                  lineHeight: 0.9,
                  letterSpacing: '-0.02em',
                  fontWeight: 500,
                  willChange: 'transform, opacity'
                }}
              >
                {heroTexts[textIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom Interactive Grid Section */}
      <div className="relative w-full h-[200px]" style={{ zIndex: 2 }}>
        <InteractiveSimulationGrid columns={35} rows={6} />
      </div>

      {/* Bottom Dashed Border */}
      <div className="relative w-full h-px border-t border-dashed border-[#D0D0D0]" style={{ zIndex: 5 }} />
    </section>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
