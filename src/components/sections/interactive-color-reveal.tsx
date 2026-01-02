"use client";

import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface ColorSpot {
  x: number;
  y: number;
  color: string;
  label: string;
}

const colorSpots: ColorSpot[] = [
  { x: 15, y: 30, color: '#0A1628', label: 'Analytics' },    // Dark navy blue
  { x: 35, y: 60, color: '#0D3D2E', label: 'Insights' },     // Dark forest green
  { x: 55, y: 25, color: '#1E3A5F', label: 'Growth' },       // Deep blue
  { x: 75, y: 55, color: '#0B4D3C', label: 'Revenue' },      // Dark teal green
  { x: 25, y: 75, color: '#152238', label: 'Engagement' },   // Midnight blue
  { x: 65, y: 80, color: '#1A4D3A', label: 'Performance' },  // Deep green
  { x: 85, y: 35, color: '#0F2942', label: 'Strategy' },     // Dark ocean blue
  { x: 45, y: 45, color: '#0D5242', label: 'Optimization' }, // Dark emerald
];

const InteractiveColorReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  }, []);

  const getDistance = (spot: ColorSpot) => {
    const dx = mousePosition.x - spot.x;
    const dy = mousePosition.y - spot.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const getOpacity = (spot: ColorSpot) => {
    if (!isHovering) return 0;
    const distance = getDistance(spot);
    const maxDistance = 30; // Reveal radius
    return Math.max(0, 1 - distance / maxDistance);
  };

  const getScale = (spot: ColorSpot) => {
    if (!isHovering) return 0.5;
    const distance = getDistance(spot);
    const maxDistance = 30;
    const scale = Math.max(0.5, 1.2 - distance / maxDistance);
    return scale;
  };

  return (
    <section className="relative w-full bg-[#F7F7F7] overflow-hidden">
      {/* Top Dashed Border */}
      <div className="w-full h-[1px] dashed-border-h opacity-50" />

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="relative min-h-[500px] md:min-h-[600px] cursor-crosshair"
      >
        {/* Base Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D4D4D4" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        {/* Color Spots */}
        {colorSpots.map((spot, index) => (
          <motion.div
            key={index}
            className="absolute pointer-events-none"
            style={{
              left: `${spot.x}%`,
              top: `${spot.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              opacity: getOpacity(spot),
              scale: getScale(spot),
            }}
            transition={{
              duration: 0.3,
              ease: 'easeOut',
            }}
          >
            {/* Glow Effect */}
            <div
              className="absolute -inset-16 rounded-full blur-3xl"
              style={{
                background: `radial-gradient(circle, ${spot.color}40 0%, transparent 70%)`,
              }}
            />

            {/* Color Orb */}
            <motion.div
              className="relative w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${spot.color}, ${spot.color}99)`,
                boxShadow: `0 0 60px ${spot.color}60, 0 0 100px ${spot.color}40`,
              }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-white text-xs md:text-sm font-medium tracking-wide opacity-90">
                {spot.label}
              </span>
            </motion.div>
          </motion.div>
        ))}

        {/* Mouse Follower Gradient */}
        {isHovering && (
          <motion.div
            className="absolute pointer-events-none w-64 h-64 md:w-96 md:h-96"
            style={{
              left: `${mousePosition.x}%`,
              top: `${mousePosition.y}%`,
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(circle, rgba(10, 22, 40, 0.25) 0%, rgba(13, 61, 46, 0.2) 30%, transparent 70%)',
              filter: 'blur(40px)',
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          />
        )}

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-[10px] md:text-[12px] uppercase tracking-wider text-[#808080] mb-4 block">
              [Interactive Discovery]
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#222222] mb-6">
              Explore the possibilities
            </h2>
            <p className="text-[#808080] text-base md:text-lg max-w-md mx-auto mb-8">
              Move your cursor to discover the different dimensions of AI-powered intelligence.
            </p>

            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#E0E0E0] text-sm text-[#666666]"
              animate={{
                boxShadow: isHovering
                  ? '0 0 20px rgba(10, 22, 40, 0.3)'
                  : '0 0 0px rgba(10, 22, 40, 0)',
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="w-2 h-2 rounded-full bg-[#0A1628] animate-pulse" />
              {isHovering ? 'Discovering...' : 'Hover to explore'}
            </motion.div>
          </motion.div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-[#E0E0E0]" />
        <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-[#E0E0E0]" />
        <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-[#E0E0E0]" />
        <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-[#E0E0E0]" />
      </div>

      {/* Bottom Dashed Border */}
      <div className="w-full h-[1px] dashed-border-h opacity-50" />
    </section>
  );
};

export default InteractiveColorReveal;
