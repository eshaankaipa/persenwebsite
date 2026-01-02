import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

/**
 * CTAFooter component
 * Clones the final call-to-action section and the dark themed footer.
 * Optimized for Next.js 15, TypeScript, and Tailwind CSS.
 */
export default function CTAFooter() {
  return (
    <div className="flex flex-col w-full">
      {/* CTA Section */}
      <section id="contact" className="bg-white py-[120px] px-6 flex flex-col items-center text-center">
        <div className="max-w-[1400px] w-full mx-auto">
          <h2 className="text-[48px] md:text-[56px] leading-[1.1] font-medium tracking-tight text-black mb-6">
            Experience data-driven AI<br className="hidden md:block" /> transformation
          </h2>
          
          <p className="text-[18px] text-[#52525B] font-light max-w-[600px] mx-auto mb-10">
            Get a personalized demo and see how a37 can transform your operations.
          </p>

          <div className="relative inline-block group">
            <a 
              href="mailto:contact@a37.ai" 
              className="inline-flex items-center gap-2 text-[20px] font-medium text-black transition-opacity hover:opacity-70"
            >
              contact@a37.ai
              <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <div className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-black transition-transform origin-left scale-x-100 group-hover:scale-x-110" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#121212] pt-24 pb-12 px-6 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 border-b border-white/10 pb-20">
          
          {/* Left Column: Copyright & Badge */}
          <div className="md:col-span-6 flex flex-col justify-between items-start">
            <div className="flex flex-col gap-8">
              <span className="text-[#a1a1aa] text-[14px]">
                © 2025 a37 Inc. All rights reserved.
              </span>
              
              <div className="relative w-[110px] h-[110px] opacity-80">
                {/* SOC2 Badge placeholder based on screenshot */}
                <div className="w-full h-full rounded-full border border-white/20 flex items-center justify-center p-2 bg-gradient-to-b from-white/5 to-transparent">
                  <div className="text-center">
                    <div className="text-[8px] tracking-widest text-white/40 uppercase">AICPA</div>
                    <div className="text-[16px] font-bold text-white tracking-widest">SOC2</div>
                    <div className="text-[8px] text-white/60">TYPE II</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Columns: Links */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8 md:justify-items-end">
            {/* Contact Column */}
            <div className="flex flex-col gap-6 md:min-w-[140px]">
              <h4 className="text-white text-[14px] font-bold uppercase tracking-wider">Contact</h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="https://linkedin.com" className="text-[#a1a1aa] hover:text-white transition-colors text-[14px]">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@a37.ai" className="text-[#a1a1aa] hover:text-white transition-colors text-[14px]">
                    Email
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col gap-6 md:min-w-[140px]">
              <h4 className="text-white text-[14px] font-bold uppercase tracking-wider">Legal</h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="/privacy" className="text-[#a1a1aa] hover:text-white transition-colors text-[14px]">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-[#a1a1aa] hover:text-white transition-colors text-[14px]">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Optional colorful strip at the very bottom seen in some screenshots */}
        <div className="mt-12 h-1.5 w-full bg-gradient-to-r from-[#4FD1C5] via-[#6366F1] via-[#F472B6] to-[#FB923C] opacity-30" />
      </footer>
    </div>
  );
}