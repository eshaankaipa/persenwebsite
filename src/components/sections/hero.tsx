import React from 'react';
import Image from 'next/image';

/**
 * HeroSection Component
 * Featuring "Automate your operations." headline, email input, and dashboard visualization.
 * Adheres to the Pointer "Blueprint" / "Swiss Grid" design system.
 */
export default function HeroSection() {
  const dashboardImages = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2012baa5-1d76-425f-8a62-80a20744d0c7-pointer-so/assets/images/hero-dashboards-01-1.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2012baa5-1d76-425f-8a62-80a20744d0c7-pointer-so/assets/images/hero-dashboards-02-2.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2012baa5-1d76-425f-8a62-80a20744d0c7-pointer-so/assets/images/hero-dashboards-03-3.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2012baa5-1d76-425f-8a62-80a20744d0c7-pointer-so/assets/images/hero-dashboards-04-4.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2012baa5-1d76-425f-8a62-80a20744d0c7-pointer-so/assets/images/hero-dashboards-05-5.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2012baa5-1d76-425f-8a62-80a20744d0c7-pointer-so/assets/images/hero-dashboards-06-6.png"
  ];

  return (
    <section className="relative w-full bg-[#F7F7F7] overflow-hidden">
      {/* Top Section: Eyebrow and Title */}
      <div className="grid grid-cols-1 md:grid-cols-12 w-full">
        {/* Empty left spacer column or vertical line defined by global layout */}
        <div className="col-span-12 md:col-start-2 md:col-span-10 pt-20 pb-12 px-6 md:px-0">
          <div className="hero__eyebrow mb-6">
            <span className="eyebrow">[Intelligent process automation]</span>
          </div>
          <h1 className="hero__title max-w-[900px]">
            Automate your operations.
          </h1>
        </div>
      </div>

      {/* Dashed Horizontal Line */}
      <div className="w-full h-px border-t border-dashed border-[#E0E0E0]" />

      {/* Mid Section: Description and Email Form */}
      <div className="grid grid-cols-1 md:grid-cols-12 w-full">
        <div className="col-span-12 md:col-start-2 md:col-span-5 py-12 px-6 md:px-0 pr-8">
          <p className="text-[#000000] text-[18px] leading-[1.5] max-w-[480px]">
            Deploy AI agents that handle repetitive processes exactly like your team does across any system. Save time and scale operations without adding headcount.
          </p>
        </div>

        {/* Form area with vertical dashed line for MD+ */}
        <div className="col-span-12 md:col-span-6 relative border-l-0 md:border-l border-dashed border-[#E0E0E0] py-12 px-6 md:px-12 flex flex-col justify-end">
          <div className="mb-4">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#8E9AFF]">
              [See pointer on your product]
            </span>
          </div>
          
          <div className="relative flex items-center max-w-[400px]">
            <div className="relative flex-1">
              <input 
                type="email" 
                placeholder="you@yourcompany.com"
                className="w-full bg-transparent border-none outline-none text-[18px] text-[#000000] placeholder:text-[#E0E0E0] py-2"
              />
              {/* Decorative underline */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#E0E0E0]" />
            </div>
            
            <button className="ml-4 group relative flex items-center justify-center w-10 h-10 transition-transform hover:scale-105 active:scale-95">
              {/* Dashed border around button */}
              <svg className="absolute inset-0 w-full h-full" width="40" height="40">
                <rect 
                  x="1" 
                  y="1" 
                  width="38" 
                  height="38" 
                  fill="none" 
                  stroke="#E0E0E0" 
                  strokeWidth="1" 
                  strokeDasharray="4 2"
                />
              </svg>
              <ArrowRightIcon className="w-6 h-6 text-[#000000]" />
            </button>
          </div>
        </div>
      </div>

      {/* Dashed Horizontal Line */}
      <div className="w-full h-px border-t border-dashed border-[#E0E0E0]" />

      {/* Lower Hero: Product Visualizations */}
      <div className="relative w-full min-h-[500px] md:min-h-[800px] flex items-center justify-center p-6 md:p-20">
        
        {/* Vertical background bars pattern (hinted in Screenshots & Specs) */}
        <div className="absolute inset-0 bg-blueprint-lines opacity-40 pointer-events-none" />

        {/* Dashboard Stack */}
        <div className="relative w-full max-w-[1240px] aspect-[1740/1024]">
          {dashboardImages.map((src, index) => (
            <div 
              key={index}
              className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out"
              style={{
                zIndex: index,
                // Simple layering effect based on center
                transform: `translateY(${index * -4}px) scale(${1 - (dashboardImages.length - 1 - index) * 0.01})`,
                boxShadow: index === dashboardImages.length - 1 ? '0 20px 80px rgba(0,0,0,0.06)' : 'none'
              }}
            >
              <Image 
                src={src}
                alt={`Dashboard View ${index + 1}`}
                fill
                className="object-contain"
                priority={index === dashboardImages.length - 1}
              />
            </div>
          ))}

          {/* Interactive Pointer Targets (Lavender dots seen in Screenshots) */}
          <div className="absolute top-[60%] left-[30%] z-[20]">
            <div className="w-2 h-2 rounded-full bg-[#8E9AFF] animate-pulse" />
          </div>
          <div className="absolute top-[45%] left-[70%] z-[20]">
            <div className="w-2 h-2 rounded-full bg-[#8E9AFF] animate-pulse" />
          </div>
          <div className="absolute top-[80%] left-[55%] z-[20]">
            <div className="w-2 h-2 rounded-full bg-[#8E9AFF] animate-pulse" />
          </div>
        </div>
      </div>

      {/* Bottom Dashed Border */}
      <div className="w-full h-px border-t border-dashed border-[#E0E0E0]" />
    </section>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}