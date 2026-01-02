"use client";

import React from 'react';
import { 
  Check, 
  MessageSquare, 
  RefreshCw, 
  Rocket, 
  BarChart3, 
  Target, 
  MousePointer2,
  TrendingUp,
  Zap,
  Activity,
  FileText,
  Mail
} from 'lucide-react';
import { motion } from 'framer-motion';

const BenefitsMarquee = () => {
  const benefits = [
    { text: "Buyer Response Prediction", icon: Target },
    { text: "Play Optimization", icon: Zap },
    { text: "Pre-Market Validation", icon: Check },
    { text: "Revenue Estimation", icon: BarChart3 },
    { text: "Continuous Optimization", icon: RefreshCw },
    { text: "Actionable Analytics", icon: Activity },
      { text: "Data-Driven Decisions", icon: TrendingUp },
    { text: "Message-Level Testing", icon: MessageSquare },
  ];

  const totalBenefits = [...benefits, ...benefits, ...benefits, ...benefits];

  return (
    <div className="relative flex overflow-x-hidden mt-20 py-6">
      <div className="flex whitespace-nowrap gap-4 animate-marquee-reverse">
        {totalBenefits.map((benefit, idx) => {
          const Icon = benefit.icon;
          return (
              <div 
                key={idx}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-full hover:border-blue-400/50 transition-colors"
              >
                <Icon size={12} className="text-blue-400" />
                <span className="text-[11px] font-medium text-blue-300">{benefit.text}</span>
              </div>
          );
        })}
      </div>
      
      <style jsx>{`
        .animate-marquee-reverse {
          animation: marquee-reverse 48s linear infinite;
          will-change: transform;
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

const UseCases = () => {
  const useCases = [
    {
      title: "SDR Managers",
      description: "Simulate outbound plays to validate messaging before assigning leads.",
      illustration: (
        <div className="relative w-full h-[280px] bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-6 left-6 w-16 h-16 rounded-full border border-blue-500/30" />
            <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full border border-emerald-500/20" />
          </div>
          <div className="relative z-10 flex flex-col items-center gap-4 w-full px-4">
            <div className="flex items-center gap-3 p-3 bg-zinc-800/80 border border-zinc-700 rounded-lg w-full max-w-[180px]">
              <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <MessageSquare size={16} className="text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] text-zinc-400 mb-0.5">Outbound Play</div>
                <div className="text-[11px] text-white font-medium">Cold Email Sequence</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-blue-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span className="text-[9px] text-zinc-500 uppercase tracking-wider">Simulating</span>
            </div>
            <div className="flex gap-2">
              <motion.div 
                className="px-3 py-2 bg-emerald-500/15 border border-emerald-500/30 rounded-lg"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-[9px] text-emerald-400/70 mb-0.5">Predicted Reply Rate</div>
                <span className="text-lg text-emerald-400 font-bold">24.3%</span>
              </motion.div>
              <div className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg">
                <div className="text-[9px] text-zinc-500 mb-0.5">Leads Qualified</div>
                <span className="text-lg text-white font-bold">847</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "VP of Sales",
      description: "Forecast meeting volume with 90%+ accuracy before going to market.",
      illustration: (
        <div className="relative w-full h-[280px] bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center overflow-hidden">
          <div className="relative z-10 flex flex-col items-center w-full px-4">
            <div className="text-[9px] text-zinc-500 uppercase tracking-wider mb-3">Q1 Meeting Forecast</div>
            <div className="flex items-end gap-1.5 mb-4 h-[100px]">
              {[
                { h: 35, label: 'Jan', actual: true },
                { h: 48, label: 'Feb', actual: true },
                { h: 62, label: 'Mar', actual: false },
                { h: 58, label: 'Apr', actual: false },
                { h: 72, label: 'May', actual: false },
                { h: 85, label: 'Jun', actual: false },
              ].map((bar, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <motion.div
                    className={`w-6 rounded-t ${bar.actual ? 'bg-blue-500' : 'bg-blue-500/40 border border-blue-500/50 border-dashed'}`}
                    initial={{ height: 0 }}
                    animate={{ height: bar.h }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                  />
                  <span className="text-[8px] text-zinc-500">{bar.label}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 text-[9px]">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-blue-500 rounded-sm" />
                <span className="text-zinc-400">Actual</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-blue-500/40 border border-blue-500/50 border-dashed rounded-sm" />
                <span className="text-zinc-400">Forecast</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 px-3 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
              <TrendingUp size={14} className="text-emerald-400" />
              <span className="text-xl font-bold text-white">92.4%</span>
              <span className="text-[10px] text-emerald-400">Forecast Accuracy</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Revenue Operations",
      description: "Unified intelligence across sales, marketing, and customer success.",
      illustration: (
        <div className="relative w-full h-[280px] bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center overflow-hidden">
          <div className="relative z-10 flex flex-col items-center w-full px-4">
            <div className="flex items-center gap-2 mb-4">
              {[
                { icon: Target, label: 'Sales', color: 'blue' },
                { icon: Zap, label: 'Marketing', color: 'purple' },
                { icon: RefreshCw, label: 'CS', color: 'emerald' },
              ].map((dept, i) => (
                <motion.div 
                  key={i}
                  className={`px-2 py-1.5 rounded-lg border ${
                    dept.color === 'blue' ? 'bg-blue-500/10 border-blue-500/30' :
                    dept.color === 'purple' ? 'bg-purple-500/10 border-purple-500/30' :
                    'bg-emerald-500/10 border-emerald-500/30'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                >
                  <dept.icon size={12} className={
                    dept.color === 'blue' ? 'text-blue-400' :
                    dept.color === 'purple' ? 'text-purple-400' :
                    'text-emerald-400'
                  } />
                </motion.div>
              ))}
            </div>
            <motion.div 
              className="w-px h-6 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-emerald-500/50"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.4 }}
            />
            <div className="bg-zinc-800/90 border border-zinc-700 rounded-xl p-4 w-full max-w-[180px]">
              <div className="flex items-center gap-2 mb-3">
                <Activity size={14} className="text-blue-400" />
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider">Unified Pipeline</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-zinc-500">MQLs → SQLs</span>
                  <span className="text-[11px] text-white font-medium">34.2%</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "78%" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-[10px] text-zinc-500">Revenue Impact</span>
                  <span className="text-[11px] text-emerald-400 font-medium">+$2.4M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Content Strategy",
      description: "Test messaging variations and optimize for engagement.",
      illustration: (
        <div className="relative w-full h-[280px] bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center overflow-hidden">
          <div className="relative z-10 flex flex-col gap-3 w-full px-4">
            <div className="text-[9px] text-zinc-500 uppercase tracking-wider text-center mb-1">Message A/B Test Results</div>
            <motion.div 
              className="flex items-center gap-3 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-6 h-6 bg-emerald-500/20 rounded flex items-center justify-center">
                <span className="text-[10px] text-emerald-400 font-bold">A</span>
              </div>
              <div className="flex-1">
                <div className="text-[10px] text-zinc-300 mb-1">"Boost revenue by 40%..."</div>
                <div className="h-1.5 bg-zinc-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-emerald-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "67%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </div>
              </div>
              <div className="text-right">
                <span className="text-lg text-emerald-400 font-bold">67%</span>
                <div className="text-[8px] text-emerald-400/70">Winner</div>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-center gap-3 p-3 bg-zinc-800/50 border border-zinc-700/50 rounded-lg"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 0.7 }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-6 h-6 bg-zinc-700 rounded flex items-center justify-center">
                <span className="text-[10px] text-zinc-400 font-bold">B</span>
              </div>
              <div className="flex-1">
                <div className="text-[10px] text-zinc-500 mb-1">"Transform your sales..."</div>
                <div className="h-1.5 bg-zinc-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-zinc-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "33%" }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  />
                </div>
              </div>
              <div className="text-right">
                <span className="text-lg text-zinc-400 font-bold">33%</span>
              </div>
            </motion.div>
            <div className="flex justify-center gap-3 mt-1">
              <div className="flex items-center gap-1.5 px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded">
                <Mail size={10} className="text-blue-400" />
                <span className="text-[9px] text-blue-400">2,847 sends</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-zinc-800 border border-zinc-700 rounded">
                <Check size={10} className="text-zinc-400" />
                <span className="text-[9px] text-zinc-400">95% confidence</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

    return (
      <section id="use-cases" className="bg-zinc-950 text-white py-24 md:py-36 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Header Text */}
          <div className="max-w-[1200px] mx-auto text-center mb-20">
<h2 className="text-base md:text-lg font-medium tracking-tight text-white mb-6 font-sans">
                    Embedded Testing Layer Before Execution
                  </h2>
<p className="max-w-3xl mx-auto text-[21px] md:text-[23px] text-zinc-500 leading-relaxed font-sans">
                  <span className="text-zinc-300 text-[23px] md:text-[25px]">We provide a shared testing layer</span> across the revenue organization, giving reps, leaders, and strategy teams clear insight into which plays drive engagement, pipeline, and revenue—before and after execution.
                </p>
          </div>

        {/* 4-Column Grid - Matched syntheticsociety.ai layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-sm p-6 flex flex-col rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group"
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="mb-5 overflow-hidden rounded-xl">
                {useCase.illustration}
              </div>

              <div className="flex-1">
<h3 className="text-[18px] font-medium mb-2 text-white group-hover:text-blue-400 transition-colors font-sans">
                    {useCase.title}
                  </h3>
                  <p className="text-zinc-500 text-[14px] leading-relaxed font-sans">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Marquee - Matched syntheticsociety.ai feature */}
        <BenefitsMarquee />
      </div>
    </section>
  );
};

export default UseCases;
