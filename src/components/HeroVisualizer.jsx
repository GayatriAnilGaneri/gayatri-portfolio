import React from 'react';
import { Cpu, Radio, Server, ArrowRight, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';

export default function HeroVisualizer() {
  return (
    <div className="w-full max-w-lg mx-auto space-y-4">
      
      {/* Top Banner: Real Engineering Highlights */}
      <div className="flex items-center justify-between px-4 py-2.5 rounded-2xl bg-slate-900/90 border border-white/10 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-slate-200 font-semibold">2 Flagship Hardware & AI Prototypes</span>
        </div>
        <span className="text-indigo-400 text-[11px]">System Verified</span>
      </div>

      {/* System Flow Card 1: LangBridge */}
      <div className="p-5 rounded-2xl bg-slate-900/80 border border-indigo-500/30 hover:border-indigo-500/50 transition-all group">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
              <Cpu className="w-4.5 h-4.5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                LangBridge AI Pipeline
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">Local Multilingual AI Assistant</p>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded bg-indigo-950 border border-indigo-500/30 text-[10px] font-mono text-indigo-300">
            Qwen2.5 3B
          </span>
        </div>

        {/* Pipeline Nodes Flow */}
        <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-mono mb-3">
          <div className="p-2 rounded-lg bg-slate-950/80 border border-white/10 text-slate-300">
            Query Input
            <span className="block text-[9px] text-slate-500">Hindi / Marathi</span>
          </div>
          <div className="p-2 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-indigo-200">
            Ollama Inference
            <span className="block text-[9px] text-indigo-400">FastAPI API</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-950/80 border border-white/10 text-slate-300">
            Target Answer
            <span className="block text-[9px] text-emerald-400">English / Regional</span>
          </div>
        </div>

        <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
          <span>Local execution with zero cloud API dependency or latency costs</span>
        </div>
      </div>

      {/* System Flow Card 2: Adhyatma Bandha */}
      <div className="p-5 rounded-2xl bg-slate-900/80 border border-cyan-500/30 hover:border-cyan-500/50 transition-all group">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Radio className="w-4.5 h-4.5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                Adhyatma Bandha Wearable
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">Healthcare IoT Hardware Prototype</p>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
            ESP32 Microcontroller
          </span>
        </div>

        {/* Hardware Sensors Grid */}
        <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-mono mb-3">
          <div className="p-2 rounded-lg bg-slate-950/80 border border-white/10 text-slate-300">
            MAX30102
            <span className="block text-[9px] text-rose-400">BPM & SpO₂</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-950/80 border border-white/10 text-slate-300">
            DS18B20
            <span className="block text-[9px] text-amber-400">Temp Sensor</span>
          </div>
          <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-200">
            OLED & QR
            <span className="block text-[9px] text-cyan-400">Patient ID</span>
          </div>
        </div>

        <div className="text-[11px] text-slate-400 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>Monitored Parameters: Heart Rate, SpO₂, Temperature</span>
          </span>
          <span className="text-amber-300 font-mono text-[10px]">Dassault Awardee</span>
        </div>
      </div>

    </div>
  );
}
