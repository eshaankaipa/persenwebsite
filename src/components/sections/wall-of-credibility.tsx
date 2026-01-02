import React from 'react';
import Image from 'next/image';

const DashedLineHorizontal = () => (
  <svg className="w-full h-[1.5px]" width="100%" height="1.5">
    <pattern
      id="dashed-pattern-h"
      width="4"
      height="2"
      patternUnits="userSpaceOnUse"
    >
      <line
        x1="0"
        y1="1"
        x2="2"
        y2="1"
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="1"
      />
    </pattern>
    <rect width="100%" height="1" fill="url(#dashed-pattern-h)" />
  </svg>
);

const DashedLineVertical = ({ className }: { className?: string }) => (
  <svg className={`h-full w-[1px] ${className}`} width="1" height="100%">
    <pattern
      id="dashed-pattern-v"
      width="2"
      height="4"
      patternUnits="userSpaceOnUse"
    >
      <line
        x1="0.5"
        y1="0"
        x2="0.5"
        y2="2"
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="1"
      />
    </pattern>
    <rect width="1" height="100%" fill="url(#dashed-pattern-v)" />
  </svg>
);

const ComplianceCard = ({ eyebrow, src, alt }: { eyebrow: string; src: string; alt: string }) => (
  <div className="relative flex flex-col items-center justify-center aspect-square p-10 bg-white/50">
    <div className="absolute top-8 left-8 text-[14px] font-mono text-[#666666] uppercase tracking-wider">
      [{eyebrow}]
    </div>
    <div className="w-full h-full flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
      <Image 
        src={src} 
        alt={alt} 
        width={189} 
        height={189} 
        className="object-contain max-w-[160px] max-h-[160px]"
      />
    </div>
  </div>
);

export default function WallOfCredibility() {
  return (
    <section className="relative w-full bg-[#F3F3F3]">
      <DashedLineHorizontal />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative">
        {/* Vertical Dividers */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          <div className="flex w-full h-full justify-evenly">
            <DashedLineVertical className="hidden lg:block" />
            <DashedLineVertical className="hidden lg:block" />
            <DashedLineVertical className="hidden lg:block" />
          </div>
        </div>

        {/* Row 1 */}
        {/* HIPAA */}
        <ComplianceCard 
          eyebrow="HIPAA" 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2012baa5-1d76-425f-8a62-80a20744d0c7-pointer-so/assets/images/hippa-7.png" 
          alt="HIPAA Compliant"
        />

        {/* SOC2 */}
        <ComplianceCard 
          eyebrow="SOC2" 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2012baa5-1d76-425f-8a62-80a20744d0c7-pointer-so/assets/images/soc2-8.png" 
          alt="SOC2 Type II"
        />

        {/* AIUC */}
        <ComplianceCard 
          eyebrow="AIUC" 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2012baa5-1d76-425f-8a62-80a20744d0c7-pointer-so/assets/images/security-badge-aiuc-9.png" 
          alt="AIUC Security"
        />

        {/* Enterprise Card (Orange) */}
        <div className="bg-[#FF530E] text-white p-12 flex flex-col justify-between aspect-square">
          <h3 className="text-[32px] font-medium leading-[1.1] tracking-tight">
            Enterprise-grade, fully secure.
          </h3>
          <p className="text-[18px] leading-relaxed opacity-90 font-sans mt-auto">
            Pointer is fully compliant with SOC 2 Type II, HIPAA, GDPR, and ISO 27001 standards.
          </p>
        </div>

        {/* Separator across the middle (Desktop only) */}
        <div className="lg:col-span-4 w-full">
           <DashedLineHorizontal />
        </div>

        {/* Row 2 */}
        {/* Quote/Governance Card (Purple) */}
        <div className="bg-[#8B92FF] text-white p-12 flex items-end aspect-square lg:aspect-auto">
          <p className="text-[20px] font-medium leading-[1.4] tracking-tight max-w-[280px]">
            Fast, accurate, and fully governed AI responses — with enterprise-grade guardrails and low latency at scale.
          </p>
        </div>

        {/* Stat Card with Video (99.9% Uptime) */}
        <div className="relative aspect-square overflow-hidden flex flex-col items-center justify-center text-white bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          >
            <source src="https://a.storyblok.com/f/286886172940351/x/db6f2fad1c/pointer-person-background-vid-loop-compressed-1.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 flex flex-col items-center">
            <span className="text-[110px] font-medium leading-none tracking-tighter">99.9%</span>
            <span className="text-[14px] font-mono uppercase tracking-[0.2em] mt-2">uptime sla</span>
          </div>
        </div>

        {/* GDPR */}
        <ComplianceCard 
          eyebrow="GDPR" 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2012baa5-1d76-425f-8a62-80a20744d0c7-pointer-so/assets/images/gdpr-11.png" 
          alt="GDPR"
        />

        {/* ISO 27001 */}
        <ComplianceCard 
          eyebrow="ISO 27001" 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2012baa5-1d76-425f-8a62-80a20744d0c7-pointer-so/assets/images/iso-badge-12.png" 
          alt="ISO 27001 Certified"
        />
      </div>

      <DashedLineHorizontal />
    </section>
  );
}