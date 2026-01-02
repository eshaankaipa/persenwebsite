import React from 'react';
import Image from 'next/image';

/**
 * ComplianceGrid Component
 * 
 * Clones the "Wall of Credibility" section with a 4x2 grid aesthetic.
 * Features:
 * - Precise dashed border grid lines.
 * - Compliance badge cards (HIPAA, SOC2, AIUC, GDPR, ISO 27001).
 * - Enterprise-grade orange callout card.
 * - Purple stat card with video loop background and 99.9% uptime.
 */
export default function ComplianceGrid() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7F7F7]">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-[1px]">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <pattern id="dashed-h-top" width="4" height="1" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0.5" x2="2" y2="0.5" stroke="#E0E0E0" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="1" fill="url(#dashed-h-top)" />
        </svg>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative">
          
          {/* Vertical Grid Lines (Desktop) */}
          <div className="hidden lg:block absolute left-1/4 top-0 w-[1px] h-full z-10">
            <svg className="h-full w-full" preserveAspectRatio="none">
              <pattern id="dashed-v-1" width="1" height="4" patternUnits="userSpaceOnUse">
                <line x1="0.5" y1="0" x2="0.5" y2="2" stroke="#E0E0E0" strokeWidth="1" />
              </pattern>
              <rect width="1" height="100%" fill="url(#dashed-v-1)" />
            </svg>
          </div>
          <div className="absolute left-1/2 top-0 w-[1px] h-full z-10 hidden md:block">
            <svg className="h-full w-full" preserveAspectRatio="none">
              <pattern id="dashed-v-2" width="1" height="4" patternUnits="userSpaceOnUse">
                <line x1="0.5" y1="0" x2="0.5" y2="2" stroke="#E0E0E0" strokeWidth="1" />
              </pattern>
              <rect width="1" height="100%" fill="url(#dashed-v-2)" />
            </svg>
          </div>
          <div className="hidden lg:block absolute left-3/4 top-0 w-[1px] h-full z-10">
            <svg className="h-full w-full" preserveAspectRatio="none">
              <pattern id="dashed-v-3" width="1" height="4" patternUnits="userSpaceOnUse">
                <line x1="0.5" y1="0" x2="0.5" y2="2" stroke="#E0E0E0" strokeWidth="1" />
              </pattern>
              <rect width="1" height="100%" fill="url(#dashed-v-3)" />
            </svg>
          </div>

          {/* Row 1 */}
          
          {/* HIPAA Card */}
          <div className="relative flex flex-col items-center justify-center min-h-[300px] lg:min-h-[400px] p-10 group border-b border-dashed border-[#E0E0E0] md:border-b-0">
            <span className="absolute top-8 left-8 text-[10px] font-mono tracking-widest text-[#808080] uppercase">[HIPAA]</span>
            <div className="relative w-[140px] h-[140px] md:w-[189px] md:h-[189px]">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2012baa5-1d76-425f-8a62-80a20744d0c7-pointer-so/assets/images/hippa-7.png" 
                alt="HIPAA Compliant Badge"
                fill
                className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* SOC2 Card */}
          <div className="relative flex flex-col items-center justify-center min-h-[300px] lg:min-h-[400px] p-10 group border-b border-dashed border-[#E0E0E0] md:border-b-0">
            <span className="absolute top-8 left-8 text-[10px] font-mono tracking-widest text-[#808080] uppercase">[SOC2]</span>
            <div className="relative w-[140px] h-[140px] md:w-[189px] md:h-[189px]">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2012baa5-1d76-425f-8a62-80a20744d0c7-pointer-so/assets/images/soc2-8.png" 
                alt="SOC2 Badge"
                fill
                className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* AIUC Card */}
          <div className="relative flex flex-col items-center justify-center min-h-[300px] lg:min-h-[400px] p-10 group border-b border-dashed border-[#E0E0E0] md:border-b-0">
            <span className="absolute top-8 left-8 text-[10px] font-mono tracking-widest text-[#808080] uppercase">[AIUC]</span>
            <div className="relative w-[140px] h-[140px] md:w-[200px] md:h-[200px]">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2012baa5-1d76-425f-8a62-80a20744d0c7-pointer-so/assets/images/security-badge-aiuc-9.png" 
                alt="AIUC Security Badge"
                fill
                className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Orange Info Card */}
          <div className="relative bg-[#FF5216] flex flex-col justify-end min-h-[300px] lg:min-h-[400px] p-12 text-white border-b border-dashed border-[#E0E0E0] md:border-b-0">
            <h3 className="text-[32px] font-semibold leading-tight mb-6">Enterprise-grade, fully secure.</h3>
            <p className="text-[15px] font-medium leading-relaxed opacity-90 max-w-[280px]">
              Pointer is fully compliant with SOC 2 Type II, HIPAA, GDPR, and ISO 27001 standards.
            </p>
          </div>

          {/* Horizontal Line Break (Desktop/Mid) */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] z-10 hidden lg:block">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <pattern id="dashed-h-mid" width="4" height="1" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0.5" x2="2" y2="0.5" stroke="#E0E0E0" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="1" fill="url(#dashed-h-mid)" />
            </svg>
          </div>

          {/* Row 2 */}

          {/* Uptime Text Block */}
          <div className="relative bg-[#8E9AFF] flex flex-col justify-end min-h-[300px] lg:min-h-[400px] p-12 text-[#222222] border-b border-dashed border-[#E0E0E0] md:border-b-0">
            <p className="text-[18px] md:text-[20px] font-semibold leading-relaxed tracking-tight">
              Fast, accurate, and fully governed AI responses — with enterprise-grade guardrails and low latency at scale.
            </p>
          </div>

          {/* 99.9% Uptime Stat Card with Video */}
          <div className="relative overflow-hidden flex flex-col items-center justify-center min-h-[300px] lg:min-h-[400px] bg-[#8E9AFF] border-b border-dashed border-[#E0E0E0] md:border-b-0">
            <div className="absolute inset-0 z-0">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover mix-blend-multiply opacity-20"
              >
                <source src="https://a.storyblok.com/f/286886172940351/x/db6f2fad1c/pointer-person-background-vid-loop-compressed-1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="text-[80px] md:text-[100px] font-semibold tracking-tighter leading-none text-white">
                99.9%
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] mt-2 text-white/80">uptime sla</div>
            </div>
          </div>

          {/* GDPR Card */}
          <div className="relative flex flex-col items-center justify-center min-h-[300px] lg:min-h-[400px] p-10 group border-b border-dashed border-[#E0E0E0] md:border-b-0 lg:border-b-0">
            <span className="absolute top-8 left-8 text-[10px] font-mono tracking-widest text-[#808080] uppercase">[GDPR]</span>
            <div className="relative w-[140px] h-[140px] md:w-[189px] md:h-[189px]">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2012baa5-1d76-425f-8a62-80a20744d0c7-pointer-so/assets/images/gdpr-11.png" 
                alt="GDPR Badge"
                fill
                className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* ISO 27001 Card */}
          <div className="relative flex flex-col items-center justify-center min-h-[300px] lg:min-h-[400px] p-10 group">
            <span className="absolute top-8 left-8 text-[10px] font-mono tracking-widest text-[#808080] uppercase">[ISO 27001]</span>
            <div className="relative w-[140px] h-[140px] md:w-[200px] md:h-[200px]">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2012baa5-1d76-425f-8a62-80a20744d0c7-pointer-so/assets/images/iso-badge-12.png" 
                alt="ISO 27001 Certification Badge"
                fill
                className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[1px]">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <pattern id="dashed-h-bottom" width="4" height="1" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0.5" x2="2" y2="0.5" stroke="#E0E0E0" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="1" fill="url(#dashed-h-bottom)" />
        </svg>
      </div>
    </section>
  );
}