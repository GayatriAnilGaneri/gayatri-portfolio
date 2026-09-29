import React from 'react';
import { GraduationCap, BookOpen, CheckCircle2, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Education & <span className="text-gradient-accent">Background</span>
          </h2>
          <p className="mt-2 text-slate-400 text-base max-w-2xl">
            B.Tech in Artificial Intelligence & Data Science with strong academic standing and specialized course certifications.
          </p>
        </div>

        {/* Education Card */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border-indigo-500/30 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-xs font-mono text-indigo-300">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                <span>{educationData.degree}</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight mb-1">
                  {educationData.college}
                </h3>
                <div className="text-sm font-mono text-indigo-300">
                  Affiliated to {educationData.university}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-white/10">
                  <span className="text-slate-500 text-[10px] block">Timeline:</span>
                  <span className="text-cyan-300 font-semibold">{educationData.graduationYear}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-white/10">
                  <span className="text-slate-500 text-[10px] block">B.Tech Percentage:</span>
                  <span className="text-emerald-300 font-semibold">{educationData.gpa}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-white/10">
                  <span className="text-slate-500 text-[10px] block">S.S.C. Score:</span>
                  <span className="text-amber-300 font-semibold">{educationData.ssc}</span>
                </div>
              </div>

            </div>

            {/* Right Coursework Column */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/80 border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1">
                <BookOpen className="w-4 h-4" />
                <span>Core Engineering Focus</span>
              </div>

              <div className="space-y-2.5">
                {educationData.keyAreas.map((area, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>

              {/* NPTEL Certifications */}
              <div className="pt-4 border-t border-white/10 text-xs font-mono space-y-1">
                <div className="text-indigo-300 font-bold flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-cyan-400" />
                  <span>IIT Kharagpur NPTEL Certified:</span>
                </div>
                <div className="text-slate-400 text-[11px]">
                  • DBMS (NPTEL IIT Kharagpur, Mar 2025)
                  <br />
                  • Java Programming (NPTEL IIT Kharagpur, Feb 2024)
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
