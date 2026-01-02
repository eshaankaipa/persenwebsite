import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * CtaContact Component
 * 
 * A high-impact call-to-action section featuring large centered text
 * and an underlined email contact link with an arrow icon.
 * Adheres to the "Corporate Tech Minimalist" aesthetic with precise typography.
 */
const CtaContact: React.FC = () => {
  return (
    <section 
      id="contact" 
      className="relative bg-white py-[144px] flex flex-col items-center justify-center text-center overflow-hidden"
    >
      <div className="container px-6 max-w-[1400px]">
        {/* Main Headline */}
        <h2 className="text-black text-[3rem] md:text-[4.5rem] leading-[1.1] font-normal tracking-tight mb-8 max-w-4xl mx-auto">
          Experience data-driven AI transformation
        </h2>

        {/* Subtext Paragraph */}
        <p className="text-zinc-description text-zinc-500 mb-12 max-w-2xl mx-auto">
          Get a personalized demo and see how a37 can transform your operations.
        </p>

        {/* Contact Link */}
        <div className="flex justify-center">
          <a
            href="mailto:contact@a37.ai"
            className="group relative inline-flex items-center gap-2 text-xl md:text-2xl font-medium tracking-tight text-black pb-2 border-b-2 border-black transition-all hover:gap-4"
          >
            <span>contact@a37.ai</span>
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaContact;