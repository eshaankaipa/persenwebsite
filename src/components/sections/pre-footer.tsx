"use client";

import React, { useState } from 'react';

const faqs = [
  {
    question: "What is Persen?",
    answer: "Persen is a simulation platform that models your audience behavior, allowing you to test and optimize your go-to-market strategies before execution."
  },
  {
    question: "How does the simulation work?",
    answer: "Our AI analyzes your historical data and market signals to create predictive models of how your audience will respond to different plays, messaging, and timing."
  },
  {
    question: "What data do I need to get started?",
    answer: "You can start with your CRM data, engagement metrics, and campaign history. The more data you provide, the more accurate your simulations become."
  },
  {
    question: "How accurate are the simulations?",
    answer: "Our simulations typically achieve 85-95% accuracy in predicting engagement patterns and conversion likelihood based on validated backtesting."
  },
  {
    question: "Can I integrate Persen with my existing tools?",
    answer: "Yes, Persen integrates with major CRMs, marketing automation platforms, and sales engagement tools through native integrations and APIs."
  }
];

const PreFooterSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="sections-pre-footer pre-footer relative bg-zinc-950">
      <svg className="svg-dashed-line horizontal line top w-full h-[1px] block" width="100%" height="1.5">
        <pattern id="dashed-pattern-h-prefooter-top" width="4" height="2" patternUnits="userSpaceOnUse">
          <line x1="0" y1="1" x2="2" y2="1" stroke="#3f3f46" strokeWidth="1" opacity="0.5" />
        </pattern>
        <rect width="100%" height="1" fill="url(#dashed-pattern-h-prefooter-top)" />
      </svg>

      <div className="py-[120px] px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-12">
            
            {/* FAQ Section - 2/3 */}
            <div className="lg:w-2/3 order-2 lg:order-1">
              <div className="mb-8">
                <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium font-sans">
                  [Frequently Asked]
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

            {/* CTA Section - 1/3 */}
            <div className="lg:w-1/3 order-1 lg:order-2 lg:pl-12 lg:border-l lg:border-zinc-800">
              <div className="lg:sticky lg:top-32">
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
