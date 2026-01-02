import React from 'react';
import Image from 'next/image';
import { Rocket, RefreshCw, BarChart3, Target, MousePointer2 } from 'lucide-react';

const BenefitsMarquee = () => {
  const benefits = [
    { icon: <Rocket className="w-3 h-3" />, text: "Accelerate Development" },
    { icon: <RefreshCw className="w-3 h-3" />, text: "Continuous Optimization" },
    { icon: <BarChart3 className="w-3 h-3" />, text: "Actionable Analytics" },
    { icon: <Target className="w-3 h-3" />, text: "Direct UX Insights" },
    { icon: <MousePointer2 className="w-3 h-3" />, text: "Data-Driven Decisions" },
  ];

  // Repeat for seamless loop
  const totalBenefits = [...benefits, ...benefits, ...benefits, ...benefits];

  return (
    <div className="relative flex overflow-x-hidden py-12">
      <div className="animate-marquee whitespace-nowrap flex gap-8 py-2">
        {totalBenefits.map((benefit, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-black/[0.05] rounded-full shadow-sm"
          >
            <span className="text-muted-foreground">{benefit.icon}</span>
            <span className="text-[13px] font-medium text-muted-foreground">{benefit.text}</span>
          </div>
        ))}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-8 py-2 ml-8">
        {totalBenefits.map((benefit, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-black/[0.05] rounded-full shadow-sm"
          >
            <span className="text-muted-foreground">{benefit.icon}</span>
            <span className="text-[13px] font-medium text-muted-foreground">{benefit.text}</span>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
};

const UnlockEngineeringVelocity = () => {
  return (
    <section id="benefits" className="relative py-24 bg-[#F5F5F7] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-black/[0.08] rounded-full shadow-sm mb-6">
            <div className="w-4 h-4 rounded-sm flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-[11px] font-bold tracking-widest text-[#666666]">BENEFITS</span>
          </div>

          <h2 className="text-[48px] font-semibold leading-[1.1] tracking-tight mb-6 text-black">
            Unlock Engineering Velocity
          </h2>
          
          <p className="max-w-[640px] text-[18px] leading-[1.6] text-[#666666]">
            Integrate AI-driven user simulations into the development loop to ship a product that’s already tested and refined
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {/* Real-Time Analytics Card */}
          <div className="neumorphic-card bg-white rounded-[32px] p-8 min-h-[420px] flex flex-col group border border-black/[0.03]">
            <div className="flex-1 flex items-center justify-center mb-8">
              {/* Neumorphic Clock Simulation */}
              <div className="relative w-44 h-44 rounded-full bg-white shadow-[10px_10px_30px_#d1d1d1,-10px_-10px_30px_#ffffff] flex items-center justify-center border border-black/[0.01]">
                <div className="absolute w-[80%] h-[2px] bg-black/5 rounded-full rotate-45"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-black z-10"></div>
                <div className="absolute top-[20%] right-[30%] w-3 h-3 rounded-full bg-black/10 blur-[1px]"></div>
              </div>
            </div>
            <div className="mt-auto">
              <h3 className="text-[20px] font-semibold mb-2 text-black">Real-Time Analytics</h3>
              <p className="text-[15px] leading-relaxed text-[#666666]">Catch UX issues directly during development</p>
            </div>
          </div>

          {/* AI-Driven Growth Card */}
          <div className="neumorphic-card bg-white rounded-[32px] p-8 min-h-[420px] flex flex-col group border border-black/[0.03]">
            <div className="flex-1 flex flex-col items-center justify-center space-y-6 relative mb-8">
              {/* Data Vis Simulation */}
              <div className="flex items-end gap-3 h-32">
                <div className="w-8 bg-[#F5F5F7] rounded-lg shadow-inner h-[40%]"></div>
                <div className="w-8 bg-[#F5F5F7] rounded-lg shadow-inner h-[60%] relative">
                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-black/40 whitespace-nowrap uppercase">20% Automation</div>
                </div>
                <div className="w-8 bg-[#F5F5F7] rounded-lg shadow-inner h-[100%]"></div>
                <div className="w-8 bg-[#F5F5F7] rounded-lg shadow-inner h-[30%] relative">
                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-black/40 whitespace-nowrap uppercase">60% Cost</div>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                 <span className="text-[10px] font-bold text-black/30 tracking-widest uppercase py-1 px-3 border border-black/[0.05] rounded-full">BEFORE</span>
                 <span className="text-[10px] font-bold text-black/80 tracking-widest uppercase py-1 px-3 bg-[#F5F5F7] rounded-full">AFTER</span>
              </div>
            </div>
            <div className="mt-auto">
              <h3 className="text-[20px] font-semibold mb-2 text-black">AI-Driven Growth</h3>
              <p className="text-[15px] leading-relaxed text-[#666666]">Close the developer feedback loop. Eliminate manual testing.</p>
            </div>
          </div>

          {/* Precision User Feedback Card */}
          <div className="neumorphic-card bg-white rounded-[32px] p-8 min-h-[420px] flex flex-col group border border-black/[0.03]">
            <div className="flex-1 flex items-center justify-center mb-8 relative">
              {/* Synthetic User Logo Visualization */}
              <div className="relative">
                <div className="w-40 h-40 rounded-full bg-white shadow-[Inset_4px_4px_10px_rgba(0,0,0,0.05)] flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white shadow-soft flex items-center justify-center overflow-hidden border border-black/[0.05]">
                    <Image 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2012baa5-1d76-425f-8a62-80a20744d0c7-syntheticsociety-ai/assets/images/OIqHT5E4wWNx5m62c8ZLZsRZ4ao-2.png" 
                      width={96} 
                      height={96} 
                      alt="Synthetic User Logo" 
                      className="p-4 opacity-90"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center border border-black/[0.05]">
                  <div className="w-4 h-4 rounded-full bg-black"></div>
                </div>
              </div>
            </div>
            <div className="mt-auto">
              <h3 className="text-[20px] font-semibold mb-2 text-black">Precision User Feedback</h3>
              <p className="text-[15px] leading-relaxed text-[#666666]">Realistic synthetic user testing and feedback lets you ship faster</p>
            </div>
          </div>
        </div>

        {/* Benefits Marquee */}
        <BenefitsMarquee />
      </div>

      {/* Background gradients and blobs based on screenshots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-gradient-radial from-white via-transparent to-transparent opacity-50 z-0 pointer-events-none" />
    </section>
  );
};

export default UnlockEngineeringVelocity;