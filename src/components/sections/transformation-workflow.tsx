"use client";

import React from 'react';
import { Database, FileText, Share2, MessageSquare, Cloud, User, Check, RefreshCw, Layout, ZoomIn } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Ingest Historical Plays',
    description: 'Persen connects to your CRM and email providers to ingest past outbound performance, identifying the specific patterns that drive engagement.',
  },
  {
    number: '02',
    title: 'Generate Audience Replicas',
    description: 'Our custom simulation algorithm creates thousands of digital replicas of your target personas, accurately matching their industry behavior and decision patterns.',
  },
  {
    number: '03',
    title: 'Run Play Simulations',
    description: 'Deploy your new sales plays into the testing layer. Persen simulates audience reactions, uncovering friction points before you ever go live.',
  },
  {
    number: '04',
    title: 'Predict & Optimize',
    description: 'Receive detailed forecasts on open rates and sentiment. Refine your messaging based on simulated feedback to ensure maximum real-world ROI.',
  },
];

const TransformationWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <section className="bg-white py-36 relative overflow-hidden" id="approach">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Main Content Card */}
        <div className="glass-panel rounded-[32px] overflow-hidden flex flex-col lg:flex-row min-h-[720px] shadow-sm">
          
          {/* Left Column: Progress Steps */}
          <div className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-start">
            <header className="mb-20">
              <span className="technical-label block mb-4">Workflow</span>
              <h2 className="text-[48px] leading-[1.1] font-medium text-black">
                How We Deliver <br />Transformation
              </h2>
            </header>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`group relative pl-10 border-l-2 transition-all duration-500 cursor-pointer ${
                    activeStep === index 
                      ? 'border-black opacity-100' 
                      : 'border-transparent opacity-30 hover:opacity-50'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <span className="absolute left-[-11px] top-0 flex items-center justify-center w-5 h-5 bg-white border border-gray-200 rounded-full">
                    <span 
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        activeStep === index ? 'bg-black' : 'bg-transparent'
                      }`} 
                    />
                  </span>
                  
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[12px] text-zinc-400">{step.number}</span>
                    <h3 className="text-[20px] font-medium text-black">{step.title}</h3>
                  </div>
                  
                  {activeStep === index && (
                    <p className="text-[16px] text-zinc-500 leading-relaxed max-w-md animate-in fade-in slide-in-from-top-2 duration-500">
                      {step.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

            {/* Right Column: Interaction Illustration */}
            <div className="w-full lg:w-1/2 bg-zinc-50/50 relative border-l border-black/5">
              {/* Background Grid Mesh */}
              <div className="absolute inset-0 grid-mesh opacity-40"></div>
              
              <div className="relative h-full flex items-center justify-center p-8 lg:p-20">
                {/* Interactive Mockup Panel */}
                <div className="w-full max-w-[520px] bg-white rounded-2xl shadow-xl border border-black/5 p-8 flex flex-col gap-6 scale-90 lg:scale-100 transition-transform duration-700">
                  
                  {/* Data Inputs Header */}
                  <div className="text-center">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-semibold mb-6 block">Historical Source Data</span>
                    <div className="flex justify-center gap-3">
                      {[Database, Layout, Share2, FileText, Cloud, MessageSquare].map((Icon, i) => (
                        <div key={i} className="w-10 h-10 rounded-lg border border-black/5 flex items-center justify-center text-zinc-400 bg-white shadow-sm hover:text-black hover:border-black/20 transition-all cursor-default">
                          <Icon size={18} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Intelligence Engine Core */}
                  <div className="bg-[#121212] rounded-xl p-6 text-white shadow-2xl relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-[14px] font-medium tracking-tight">Persen Simulation Engine</h4>
                      <div className="active-dot shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        { icon: RefreshCw, text: 'Replicates Ideal Customer Profiles' },
                        { icon: User, text: 'Simulates Decision-Maker Behavior' },
                        { icon: ZoomIn, text: 'Validates Messaging Sentiment' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg py-2.5 px-3 border border-white/5 text-[12px] opacity-80 group-hover:opacity-100 transition-opacity">
                          <item.icon size={14} className="text-zinc-400" />
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Living Digital Twin Output */}
                  <div className="border border-indigo-100 bg-indigo-50/30 rounded-xl p-6 text-center shadow-inner">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Cloud size={16} className="text-indigo-500" />
                      <h4 className="text-[14px] font-semibold text-indigo-900">Predicted Performance Layer</h4>
                    </div>
                    
                    <div className="flex justify-center flex-wrap gap-2 mb-3">
                      <span className="text-[10px] bg-white px-2 py-1 rounded-full border border-indigo-100 text-indigo-600">Metric Probability Maps</span>
                      <span className="text-[10px] bg-white px-2 py-1 rounded-full border border-indigo-100 text-indigo-600">Friction Detection</span>
                    </div>
                    
                    <p className="text-[10px] text-indigo-400 uppercase tracking-widest font-bold">The Testing Layer for Sales</p>
                  </div>

                </div>

              {/* Decorative elements */}
              <div className="absolute top-1/4 right-[10%] w-24 h-24 bg-gradient-to-tr from-cyan-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 left-[10%] w-32 h-32 bg-gradient-to-br from-orange-400/5 to-pink-400/5 rounded-full blur-3xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TransformationWorkflow;