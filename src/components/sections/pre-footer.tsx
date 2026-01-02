import React from 'react';

/**
 * PreFooterSection Component
 * 
 * A call-to-action section featuring a headline, description, 
 * and a centered email input with a "Book a demo" button.
 */
const PreFooterSection = () => {
  return (
    <section className="sections-pre-footer pre-footer relative bg-zinc-950">
      {/* Top Dashed Line */}
      <svg className="svg-dashed-line horizontal line top w-full h-[1px] block" width="100%" height="1.5">
        <pattern id="dashed-pattern-h-prefooter-top" width="4" height="2" patternUnits="userSpaceOnUse">
          <line x1="0" y1="1" x2="2" y2="1" stroke="#3f3f46" strokeWidth="1" opacity="0.5" />
        </pattern>
        <rect width="100%" height="1" fill="url(#dashed-pattern-h-prefooter-top)" />
      </svg>

      {/* Header Container */}
      <div className="inner grid grid-cols-12 header py-[200px] px-8 md:px-0">
        <div className="text-wrapper col-start-1 col-span-12 md:col-start-4 md:col-span-6 flex flex-col items-center text-center">
          <div className="eyebrow mb-6 text-[12px] font-medium uppercase tracking-wider text-zinc-500 font-sans">
            [Persen Simulation Layer]
          </div>
          <h3 className="title text-[32px] md:text-[56px] font-medium leading-none tracking-tight mb-8 text-white font-sans">
            Get hours back every week.
          </h3>
          <div className="storyblok-content description max-w-[540px] mb-12">
            <p className="text-zinc-400 text-[18px] leading-relaxed font-sans">
              Persen simulates your audience behavior so you can focus on building relationships, not guessing metrics.
            </p>
          </div>
          
          {/* Email Subscription UI */}
          <div className="w-full flex flex-col items-center">
            <div className="mb-4">
              <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium font-sans">
                [Simulate your next play]
              </span>
            </div>
            
            <div className="relative flex items-center w-full max-w-[400px]">
              <div className="relative flex-1">
                <input 
                  type="email" 
                  placeholder="you@yourcompany.com"
                  className="w-full bg-transparent border-none outline-none text-[18px] text-white placeholder:text-zinc-600 py-2"
                />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-zinc-700 opacity-50" />
              </div>
              
              <button className="ml-4 group relative flex items-center justify-center w-12 h-12 transition-all hover:scale-105 active:scale-95 bg-white text-zinc-950 rounded-lg shadow-lg hover:bg-zinc-200">
                <ArrowRightIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Dashed Line */}
      <svg className="svg-dashed-line horizontal line w-full h-[1px]" width="100%" height="1.5">
        <pattern id="dashed-pattern-h-prefooter-bottom" width="4" height="2" patternUnits="userSpaceOnUse">
          <line x1="0" y1="1" x2="2" y2="1" stroke="#3f3f46" strokeWidth="1" opacity="0.5" />
        </pattern>
        <rect width="100%" height="1" fill="url(#dashed-pattern-h-prefooter-bottom)" />
      </svg>
    </section>
  );
};

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

export default PreFooterSection;

