"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LOG_MESSAGES = [
  "Initializing intelligence engine...",
  "Syncing with Salesforce/Slack/Zoom...",
  "Mapping organizational graph...",
  "Identifying decision makers...",
  "Evaluating play: 'Enterprise Expansion'",
  "Simulation: Scenario A-294 running...",
  "Predicting outcome: 84.2% success...",
  "Anomaly detected in play: 'Renewal'",
  "Adjusting simulation parameters...",
  "Efficacy score: 9.2/10",
  "Processing live telemetry...",
];

export const ClientSimulationAscii = () => {
  const [phase, setPhase] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [currentLog, setCurrentLog] = useState(0);

  useEffect(() => {
    const phaseInterval = setInterval(() => {
      setPhase((prev) => (prev + 1) % ASCII_PHASES.length);
    }, 4000);

    const logInterval = setInterval(() => {
      setLogs((prev) => {
        const next = [...prev, LOG_MESSAGES[currentLog]];
        return next.slice(-8);
      });
      setCurrentLog((prev) => (prev + 1) % LOG_MESSAGES.length);
    }, 1500);

    return () => {
      clearInterval(phaseInterval);
      clearInterval(logInterval);
    };
  }, [currentLog]);

  return (
    <div className="w-full h-full bg-zinc-950 rounded-xl border border-zinc-800 p-6 font-mono text-[10px] md:text-[12px] overflow-hidden shadow-2xl relative flex flex-col">
      {/* Terminal Header */}
      <div className="mt-6 flex-1 flex flex-col md:flex-row gap-6">
        {/* Live Logs Sidebar */}
        <div className="w-full md:w-64 border-t md:border-t-0 md:border-l border-zinc-800 pt-4 md:pt-0 md:pl-6 flex flex-col">
          <div className="text-zinc-500 text-[9px] mb-2 uppercase tracking-tighter">Live telemetry</div>
          <div className="space-y-1">
            {logs.map((log, i) => (
              <div key={i} className="text-zinc-400 overflow-hidden text-ellipsis whitespace-nowrap">
                <span className="text-brand-purple opacity-50 mr-1">λ</span>
                {log}
              </div>
            ))}
            <motion.div 
              animate={{ opacity: [0, 1] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-1.5 h-3 bg-brand-purple inline-block ml-1"
            />
          </div>
        </div>
      </div>

      {/* Decorative Matrix Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] text-emerald-500 text-[8px] overflow-hidden leading-none select-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="whitespace-nowrap">
            {Array.from({ length: 50 }).map(() => Math.random() > 0.5 ? '1' : '0').join(' ')}
          </div>
        ))}
      </div>
    </div>
  );
};
