import React from 'react';
import { User, Cpu, Code2, Globe2, ShieldCheck, Sparkles, GraduationCap, MapPin, Briefcase } from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

export default function About() {
  const corePrinciples = [
    {
      icon: Cpu,
      title: "AI & Data Science",
      desc: "Architecting machine learning pipelines, NLP voice-text frameworks (LangBridge IEEE paper), and integrating OpenAI/gTTS APIs."
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      desc: "Building production backends and frontend workflows using React, TypeScript, FastAPI, PostgreSQL, and Drizzle ORM at Uptiq.ai."
    },
    {
      icon: Globe2,
      title: "Wearable IoT Hardware",
      desc: "Integrating ESP32 microcontrollers with biological sensors (MAX30102, RTD, DHT11) for elderly safety and pilgrimage wristband design."
    },
    {
      icon: ShieldCheck,
      title: "Patents & Competition Honors",
      desc: "Design Patent filed, Utility Patent in progress, and AAKRUTI Global Finalist 2025 recognition by Dassault Systèmes."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Candidate Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Driven by technical precision, <span className="text-gradient-accent">built for real impact</span>
          </h2>
          <p className="mt-2 text-slate-400 text-base max-w-2xl">
            A software developer and AI/DS student combining machine learning research with practical full-stack and embedded hardware development.
          </p>
        </div>

        {/* Top Grid: Bio Card & Quick Facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Main Professional Introduction Card */}
          <div className="lg:col-span-8 glass-card p-7 sm:p-8 rounded-3xl relative overflow-hidden group">
            
            <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span>AI & Data Science Student / Software Developer</span>
            </h3>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                {personalInfo.aboutBrief}
              </p>
              <p>
                During my internship at <strong className="text-indigo-300 font-semibold">Uptiq.ai (Pune)</strong>, I built backend modules for commercial real estate loan origination platforms using TypeScript, PostgreSQL, and Drizzle ORM, as well as full-stack transaction features for Cedar Ground Flow using React and FastAPI.
              </p>
              <p>
                My technical innovations include <strong className="text-indigo-300 font-semibold">LangBridge</strong>—an IEEE-published Edge-AI multilingual voice-text translation framework—and <strong className="text-cyan-300 font-semibold">Adhyatma Bandha</strong>—a smart biological health and safety wristband recognized as an AAKRUTI Global 2025 Finalist by Dassault Systèmes, with a Design Patent filed and Utility Patent in progress.
              </p>
            </div>

            {/* Verification Footer */}
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>Based in {personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-300">
                <Briefcase className="w-4 h-4" />
                <span>Internship: Uptiq.ai (Pune)</span>
              </div>
            </div>
          </div>

          {/* Academic Standing Card */}
          <div className="lg:col-span-4 glass-card p-7 rounded-3xl flex flex-col justify-between border-indigo-500/20">
            <div>
              <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-2">Academic Standing</div>
              <h4 className="text-lg font-bold text-slate-100 mb-4">Degree Credentials</h4>
              
              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-white/10">
                  <div className="text-slate-500 text-[10px]">Degree:</div>
                  <div className="text-slate-200 font-semibold">{educationData.degree}</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-white/10">
                  <div className="text-slate-500 text-[10px]">Institution:</div>
                  <div className="text-indigo-300 font-semibold">{educationData.college}</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-white/10">
                  <div className="text-slate-500 text-[10px]">Timeline & Score:</div>
                  <div className="text-cyan-300 font-semibold">{educationData.graduationYear} • {educationData.gpa}</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Verified resume academic record</span>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePrinciples.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-100 mb-2">{pillar.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
