import React from 'react';
import Image from 'next/image';

const IntelligenceEngine = () => {
  const historicalDataSources = [
    { name: 'Salesforce', icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2012baa5-1d76-425f-8a62-80a20744d0c7-a37-ai/assets/svgs/salesforce-7.svg' },
    { name: 'HubSpot', icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2012baa5-1d76-425f-8a62-80a20744d0c7-a37-ai/assets/svgs/servicenow-9.svg' }, // Using available icon
    { name: 'Apollo', icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2012baa5-1d76-425f-8a62-80a20744d0c7-a37-ai/assets/svgs/oracle-5.svg' },
    { name: 'Outreach', icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2012baa5-1d76-425f-8a62-80a20744d0c7-a37-ai/assets/svgs/workday-8.svg' },
  ];



  return (
    <>
      {/* Card Icons Section */}
      <section className="bg-white py-24 px-6 overflow-hidden">
        {/* Header Text */}
          <div className="max-w-[1200px] mx-auto text-center mb-12">
            <h2 className="text-lg md:text-xl font-medium tracking-tight text-black mb-6 font-sans">
              Predictive Intelligence for Sales
            </h2>
            <p className="max-w-3xl mx-auto text-[19px] md:text-[21px] text-zinc-500 leading-relaxed font-sans">
              <span className="font-semibold text-[21px] md:text-[23px] text-black">Persen</span> builds custom models of enterprise audiences to predict how buyers will respond — before a single message is sent. We provide a testing layer for sales executives to validate plays and forecast performance before going to market.
            </p>
          </div>
        
        <div className="max-w-[1400px] mx-auto relative min-h-[650px]">
          {/* Top Left Card - Historical Play Data */}
          <div className="absolute left-0 top-0 w-72 bg-white border border-black/5 rounded-lg p-6 shadow-sm z-0">
            <div className="mb-4">
              <h4 className="text-sm font-medium">Historical Play Data</h4>
              <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Deep CRM Integration</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {historicalDataSources.map((brand, i) => (
                <div key={i} className="flex items-center gap-2 p-2 bg-zinc-50 border border-black/5">
                  <img src={brand.icon} alt={brand.name} className="w-4 h-4 opacity-70" />
                  <span className="text-[10px] font-medium text-zinc-600">{brand.name}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 p-2 bg-zinc-50 border border-black/5">
                <div className="w-4 h-4 border border-zinc-300 flex items-center justify-center text-[8px] text-zinc-400 bg-white">?</div>
                <span className="text-[10px] font-medium text-zinc-600">Custom Logs</span>
              </div>
            </div>
          </div>

          {/* Top Right Card - Predicted Metrics */}
          <div className="absolute right-0 top-0 w-72 bg-white border border-black/5 rounded-lg p-6 shadow-sm z-0">
            <div className="mb-4">
              <h4 className="text-sm font-medium">Predicted Metrics</h4>
              <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Performance Forecasts</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2.5 bg-zinc-50 border border-black/5">
                <span className="text-zinc-400">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect width="10" height="10" x="1" y="1" stroke="currentColor" strokeWidth="1"/><path d="M3 4H9M3 6H9M3 8H6" stroke="currentColor" strokeWidth="1"/></svg>
                </span>
                <span className="text-[11px] font-medium text-zinc-600">Open & Reply Probabilities</span>
              </div>
              <div className="flex items-center gap-3 p-2.5 bg-zinc-50 border border-black/5">
                <span className="text-zinc-400">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1"/><path d="M6 3V9M3 6L6 9L9 6" stroke="currentColor" strokeWidth="1"/></svg>
                </span>
                <span className="text-[11px] font-medium text-zinc-600">Engagement Decay Curves</span>
              </div>
              <div className="flex items-center gap-3 p-2.5 bg-zinc-50 border border-black/5">
                <span className="text-zinc-400">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10L6 2L10 10" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-[11px] font-medium text-zinc-600">Objection Sentiment Forecast</span>
              </div>
            </div>
          </div>

          {/* Main Central Card */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white border border-black/5 shadow-xl rounded-lg z-10">
            <div className="bg-black text-white px-5 py-3 flex justify-between items-center">
              <h2 className="text-sm font-medium tracking-tight">Simulation Algorithm</h2>
              <div className="flex items-center gap-4">
                <span className="text-[10px] text-zinc-400 font-mono">1.2B Data Points</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-zinc-400 font-mono">ACTIVE SIM</span>
                  <div className="flex gap-0.5">
                    <div className="w-0.5 h-3 bg-emerald-500"></div>
                    <div className="w-0.5 h-3 bg-emerald-500"></div>
                    <div className="w-0.5 h-3 bg-emerald-500"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Live Play Simulation */}
              <div>
                <div className="flex items-center gap-2 mb-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  <div className="w-3 h-3 border border-zinc-400 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-zinc-400"></div>
                  </div>
                  Live Play Simulation
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-3 bg-zinc-50 border border-black/5">
                    <span className="block text-[10px] text-zinc-400 mb-1 uppercase">Personas</span>
                    <span className="text-lg font-medium">4,200</span>
                  </div>
                  <div className="p-3 bg-zinc-50 border border-black/5">
                    <span className="block text-[10px] text-zinc-400 mb-1 uppercase">Iterations</span>
                    <span className="text-lg font-medium">50k+</span>
                  </div>
                  <div className="p-3 bg-zinc-50 border border-black/5">
                    <span className="block text-[10px] text-zinc-400 mb-1 uppercase">Accuracy</span>
                    <span className="text-lg font-medium">94.2%</span>
                  </div>
                </div>
              </div>

              {/* Predictive Metrics */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-400">
                      <path d="M1 4.5L6 2L11 4.5V4.5L6 7L1 4.5V4.5Z" stroke="currentColor" strokeWidth="1.2"/>
                      <path d="M1 7L6 9.5L11 7" stroke="currentColor" strokeWidth="1.2"/>
                    </svg>
                    Predictive Performance
                  </div>
                  <span className="px-1.5 py-0.5 bg-zinc-100 text-[9px] text-zinc-500 font-medium">ESTIMATING</span>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Open Rate", progress: "32%", color: "bg-blue-400" },
                    { label: "Reply Rate", progress: "8%", color: "bg-fuchsia-400" },
                    { label: "Meeting Conversion", progress: "4.5%", color: "bg-orange-400" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 ${item.color}`}></div>
                      <div className="w-32 text-xs text-zinc-700">{item.label}</div>
                      <div className="flex-1 h-1.5 bg-zinc-100 relative rounded-full">
                        <div className={`absolute left-0 top-0 h-full rounded-full ${item.color}`} style={{ width: item.progress }}></div>
                      </div>
                      <div className="text-[10px] text-zinc-500 tabular-nums w-10 text-right">{item.progress}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Algorithm Status */}
              <div>
                <div className="flex items-center justify-between mb-3 border-t border-black/5 pt-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-400">
                      <path d="M1 7L3.5 4.5L5.5 8L8.5 2L11 5" stroke="currentColor" strokeWidth="1.2"/>
                    </svg>
                    Simulation Status
                  </div>
                  <span className="px-1.5 py-0.5 bg-black text-[9px] text-white font-medium">3 ANALYSES</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-zinc-600">Audience Persona Replication</span>
                    <span className="text-[10px] font-medium text-emerald-500 uppercase">Synced</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-zinc-600">Historical Play Benchmarking</span>
                    <span className="text-[10px] font-medium text-emerald-500 uppercase">Running</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-zinc-600">Behavioral Anomaly Detection</span>
                    <span className="text-[10px] font-medium text-zinc-400 uppercase">Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Left Card - Replicated Clients */}
          <div className="absolute left-0 bottom-0 w-72 bg-white border border-black/5 rounded-lg p-6 shadow-sm z-0">
            <div className="mb-4">
              <h4 className="text-sm font-medium">Replicated Clients</h4>
              <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Audience Simulation Layer</p>
            </div>
            <div className="grid grid-cols-8 gap-x-2 gap-y-3 opacity-40">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="flex justify-center">
                  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" className="text-blue-500">
                    <circle cx="4" cy="2" r="2" fill="currentColor"/>
                    <path d="M0 10C0 6.68629 2.68629 6 4 6C5.31371 6 8 6.68629 8 10V12H0V10Z" fill="currentColor"/>
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Right Card - 24/7 Feedback Loop */}
          <div className="absolute right-0 bottom-0 w-72 bg-white border border-black/5 rounded-lg p-6 shadow-sm z-0">
            <div className="mb-4">
              <h4 className="text-sm font-medium">24/7 Feedback Loop</h4>
              <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Compounding Intelligence</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-zinc-50 border border-black/5">
                <div className="flex items-center gap-3">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-emerald-500">
                    <path d="M7 1V3M7 11V13M1 7H3M11 7H13M2.5 2.5L4 4M10 10L11.5 11.5M11.5 2.5L10 4M4 10L2.5 11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  <span className="text-[11px] font-medium text-zinc-800">Deploy & Observe</span>
                </div>
                <span className="text-[9px] text-emerald-500 font-medium uppercase">Active</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-zinc-50 border border-black/5">
                <div className="flex items-center gap-3">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-blue-500">
                    <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    <path d="M1 7L3 5M1 7L3 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[11px] font-medium text-zinc-800">Capture Responses</span>
                </div>
                <span className="text-[9px] text-blue-500 font-medium uppercase">Learning</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gradient-to-r from-fuchsia-50 to-blue-50 border border-black/5">
                <div className="flex items-center gap-3">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-fuchsia-500">
                    <path d="M7 1L8.5 5H13L9.5 8L11 13L7 10L3 13L4.5 8L1 5H5.5L7 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[11px] font-medium text-zinc-800">Model Improves</span>
                </div>
                <span className="text-[9px] text-fuchsia-500 font-medium uppercase">+2.3%</span>
              </div>
            </div>
            </div>
          </div>
        </section>
      </>
    );
  };

export default IntelligenceEngine;