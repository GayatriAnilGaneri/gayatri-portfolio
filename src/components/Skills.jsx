import React, { useState } from 'react';
import { Code, Cpu, Terminal, Radio, CheckCircle2, Sparkles } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Programming / Software":
        return Code;
      case "AI / Development":
        return Cpu;
      case "Tools & Ecosystem":
        return Terminal;
      case "Hardware / IoT":
        return Radio;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Tools & Engineering <span className="text-gradient-accent">Stack</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-2xl">
            A practical tech stack built around local AI inference, web engineering, hardware prototyping, and REST services.
          </p>
        </div>

        {/* 4 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((group, idx) => {
            const Icon = getCategoryIcon(group.category);
            const isSelected = selectedCategory === group.category;

            return (
              <div
                key={idx}
                onClick={() => setSelectedCategory(isSelected ? null : group.category)}
                className={`glass-card p-8 rounded-3xl transition-all duration-300 cursor-pointer ${
                  isSelected ? 'border-indigo-500/60 shadow-xl shadow-indigo-500/10' : 'hover:border-white/20'
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-100">{group.category}</h3>
                      <p className="text-xs text-slate-400">{group.description}</p>
                    </div>
                  </div>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/10">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group/chip flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-indigo-950/60 border border-white/10 hover:border-indigo-500/40 transition-all duration-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 group-hover/chip:text-cyan-400 transition-colors" />
                      <span className="text-sm font-medium text-slate-200 group-hover/chip:text-white">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-400 group-hover/chip:bg-indigo-500/20 group-hover/chip:text-indigo-300">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Supporting Notice */}
        <div className="mt-12 p-4 rounded-2xl bg-slate-900/60 border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <span>✓ All skill categories reflect verified project implementations in LangBridge & Adhyatma Bandha</span>
          <span className="text-indigo-400">Zero inflated skill percentages or unsupported expert claims</span>
        </div>

      </div>
    </section>
  );
}
