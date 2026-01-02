"use client";

import React, { useState, useRef, useEffect } from 'react';

const faqs = [
  {
    question: "How does Persen integrate with our existing revenue tech stack?",
    answer: "Persen connects natively with Salesforce, HubSpot, Marketo, Outreach, and 40+ enterprise platforms via API. Our implementation team handles the integration in under two weeks with zero disruption to your existing workflows."
  },
  {
    question: "What ROI can we expect from deploying Persen?",
    answer: "Enterprise customers typically see a 3-5x increase in pipeline conversion rates and 40% reduction in sales cycle length within the first quarter. We provide detailed ROI projections during your initial assessment."
  },
  {
    question: "How does Persen ensure data security and compliance?",
    answer: "Persen is SOC 2 Type II certified and GDPR compliant. All data is encrypted at rest and in transit. We offer single-tenant deployment options for organizations with strict data residency requirements."
  },
  {
    question: "What level of support do enterprise customers receive?",
    answer: "Enterprise plans include dedicated customer success managers, 24/7 priority support, quarterly business reviews, and custom training sessions for your revenue teams."
  },
  {
    question: "Can Persen scale with our organization's growth?",
    answer: "Persen is built for enterprise scale. Our platform handles millions of contact simulations daily and supports unlimited users. Pricing scales with value delivered, not seat count."
  }
];

const PreFooterSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [ctaPosition, setCtaPosition] = useState<'relative' | 'fixed' | 'absolute'>('relative');
  const [ctaTop, setCtaTop] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !ctaRef.current) return;

      const section = sectionRef.current.getBoundingClientRect();
      const ctaHeight = ctaRef.current.offsetHeight;
      const topOffset = 120;
      const bottomPadding = 120;

      if (section.top > topOffset) {
        setCtaPosition('relative');
      } else if (section.bottom - ctaHeight - bottomPadding < topOffset) {
        setCtaPosition('absolute');
        setCtaTop(section.height - ctaHeight - bottomPadding - 120);
      } else {
        setCtaPosition('fixed');
        setCtaTop(topOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="sections-pre-footer pre-footer relative bg-zinc-950">
      <svg className="svg-dashed-line horizontal line top w-full h-[1px] block" width="100%" height="1.5">
        <pattern id="dashed-pattern-h-prefooter-top" width="4" height="2" patternUnits="userSpaceOnUse">
          <line x1="0" y1="1" x2="2" y2="1" stroke="#3f3f46" strokeWidth="1" opacity="0.5" />
        </pattern>
        <rect width="100%" height="1" fill="url(#dashed-pattern-h-prefooter-top)" />
      </svg>

      <div className="py-[120px] px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 relative">
            
            {/* FAQ Section - 2/3 */}
            <div className="lg:w-2/3 order-2 lg:order-1">
              <div className="mb-8">
                <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium font-sans">
                  [Frequently Asked Questions]
                </span>
              </div>
              
              <div className="space-y-0">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="border-b border-zinc-800"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full py-6 flex items-center justify-between text-left group"
                    >
                      <span className="text-[18px] md:text-[20px] font-medium text-white font-sans pr-8">
                        {faq.question}
                      </span>
                      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                        <svg 
                          className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor" 
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                      </span>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openIndex === index ? 'max-h-[300px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-zinc-400 text-[16px] leading-relaxed font-sans pr-12">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section - 1/3 with fixed positioning */}
            <div className="lg:w-1/3 order-1 lg:order-2 lg:pl-12 lg:border-l lg:border-zinc-800 relative">
              {/* Spacer for layout */}
              <div className="hidden lg:block" style={{ height: ctaPosition !== 'relative' ? ctaRef.current?.offsetHeight : 0 }} />
              
              <div 
                ref={ctaRef}
                className={`bg-zinc-950 ${
                  ctaPosition === 'fixed' 
                    ? 'lg:fixed lg:w-[calc((100%-6rem)/3-3rem)] lg:max-w-[340px]' 
                    : ctaPosition === 'absolute'
                    ? 'lg:absolute lg:w-full'
                    : ''
                }`}
                style={{
                  top: ctaPosition === 'fixed' ? `${ctaTop}px` : ctaPosition === 'absolute' ? `${ctaTop}px` : undefined,
                  right: ctaPosition === 'fixed' ? 'auto' : undefined,
                }}
              >
                <h3 className="title text-[28px] md:text-[36px] font-medium leading-tight tracking-tight mb-6 text-white font-sans">
                  Get hours back every week.
                </h3>
                <div className="mb-10">
                  <p className="text-zinc-400 text-[16px] leading-relaxed font-sans">
                    Persen simulates your audience behavior so you can focus on building relationships, not guessing metrics.
                  </p>
                </div>
                
                <div className="w-full">
                  <div className="mb-4">
                    <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium font-sans">
                      [Simulate your next play]
                    </span>
                  </div>
                  
                  <div className="relative flex items-center w-full">
                    <div className="relative flex-1">
                      <input 
                        type="email" 
                        placeholder="you@yourcompany.com"
                        className="w-full bg-transparent border-none outline-none text-[16px] text-white placeholder:text-zinc-600 py-2"
                      />
                      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-zinc-700 opacity-50" />
                    </div>
                    
                    <button className="ml-4 group relative flex items-center justify-center w-10 h-10 transition-all hover:scale-105 active:scale-95 bg-white text-zinc-950 rounded-lg shadow-lg hover:bg-zinc-200">
                      <ArrowRightIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
