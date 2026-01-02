"use client";

import React, { useState } from 'react';
import { Database, Layout, GitBranch, FileText, Cloud, MessageSquare, RefreshCw, Users, ShieldCheck } from 'lucide-react';

const workflowSteps = [
  {
    id: "01",
    title: "Build Your Digital Twin",
    description: "a37 connects to your data sources and interviews employees intelligently, producing a dynamic, real-time model of your organization's processes.",
  },
  {
    id: "02",
    title: "Derive Actionable Insights",
    description: "We surface bottlenecks, inefficiencies, and opportunities—giving you clear, data-driven visibility into where automation and AI will create the highest impact.",
  },
  {
    id: "03",
    title: "Design Automations & AI Systems",
    description: "We work with your team to define high-impact outcomes, grounded in the actual truth of how your organization operates.",
  },
  {
    id: "04",
    title: "Deploy, Validate, and Scale",
    description: "We launch solutions, measure ROI, and continuously refine to ensure lasting performance gains.",
  }
];

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="approach" className="py-36 bg-white overflow-hidden">
      <div className="container px-6">
        <div className="rounded-[1.5rem] border border-black/5 bg-white/50 backdrop-blur-sm overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Content Column */}
          <div className="w-full md:w-[45%] p-12 lg:p-16 border-b md:border-b-0 md:border-r border-black/5">
            <div className="mb-16">
              <span className="nav-caps text-zinc-500 mb-4 block">Workflow</span>
              <h2 className="text-[3rem] leading-[1.1] font-normal tracking-tight max-w-sm">
                How We Deliver Transformation
              </h2>
            </div>

            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <div 
                  key={step.id}
                  className={`group cursor-pointer transition-all duration-300 ${activeStep === index ? 'opacity-100' : 'opacity-30 hover:opacity-50'}`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold transition-colors ${activeStep === index ? 'bg-black text-white' : 'bg-transparent text-black border border-black/10'}`}>
                      {step.id}
                    </div>
                    <div>
                      <h3 className="text-[1.125rem] font-medium mb-2 leading-tight">
                        {step.title}
                      </h3>
                      {activeStep === index && (
                        <p className="text-zinc-description text-[0.9375rem] leading-[1.5] max-w-xs animate-in fade-in slide-in-from-top-2 duration-500">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Column (Grid Background) */}
          <div className="w-full md:w-[55%] relative min-h-[500px] md:min-h-full bg-white grid-overlay">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="relative w-full max-w-md">
                
                {/* Data Inputs Card */}
                <div className="relative z-10 bg-white/90 backdrop-blur border border-black/5 p-6 shadow-sm rounded-xl mb-6">
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4 text-center">Data Inputs</div>
                  <div className="flex justify-between items-center px-4">
                    <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100"><Database size={18} className="text-zinc-400" /></div>
                    <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100"><Layout size={18} className="text-zinc-400" /></div>
                    <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100"><GitBranch size={18} className="text-zinc-400" /></div>
                    <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100"><FileText size={18} className="text-zinc-400" /></div>
                    <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100"><Cloud size={18} className="text-zinc-400" /></div>
                    <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100"><MessageSquare size={18} className="text-zinc-400" /></div>
                  </div>
                </div>

                {/* Intelligence Engine Center */}
                <div className="relative z-20 bg-[#121212] rounded-xl overflow-hidden shadow-2xl mb-6 -mx-4 md:-mx-8">
                  <div className="p-4 border-b border-white/10 flex items-center justify-center">
                    <div className="text-[11px] font-bold text-white tracking-wider">a37 Intelligence Engine</div>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-3 py-2 px-3 bg-white/5 rounded-md border border-white/5">
                      <RefreshCw size={14} className="text-zinc-400 animate-spin-slow" />
                      <span className="text-[12px] text-zinc-300">Connects to all data sources</span>
                    </div>
                    <div className="flex items-center gap-3 py-2 px-3 bg-white/5 rounded-md border border-white/5">
                      <Users size={14} className="text-zinc-400" />
                      <span className="text-[12px] text-zinc-300">Conducts intelligent employee interviews</span>
                    </div>
                    <div className="flex items-center gap-3 py-2 px-3 bg-white/5 rounded-md border border-white/5">
                      <GitBranch size={14} className="text-zinc-400" />
                      <span className="text-[12px] text-zinc-300">Normalizes structured & unstructured data</span>
                    </div>
                  </div>
                </div>

                {/* Living Digital Twin Card */}
                <div className="relative z-10 bg-white/95 backdrop-blur border border-black/5 p-6 shadow-lg rounded-xl">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2 mb-4">
                      <Cloud size={16} className="text-[#0ea5e9]" />
                      <h4 className="text-[0.9375rem] font-semibold">Living Digital Twin</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-2 w-full mb-3">
                      <div className="bg-sky-50 py-1.5 px-2 rounded text-[9px] text-sky-700 font-medium text-center border border-sky-100/50">Continuously updated</div>
                      <div className="bg-sky-50 py-1.5 px-2 rounded text-[9px] text-sky-700 font-medium text-center border border-sky-100/50">Org-wide visibility</div>
                    </div>
                    <div className="w-full bg-zinc-50 py-1.5 px-2 rounded text-[9px] text-zinc-400 font-medium text-center border border-zinc-100">Single source of truth</div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none">
                  <div className="absolute top-[20%] right-[10%] w-24 h-24 bg-sky-400/10 blur-[60px] rounded-full" />
                  <div className="absolute bottom-[20%] left-[10%] w-32 h-32 bg-purple-400/10 blur-[60px] rounded-full" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <style jsx global>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}