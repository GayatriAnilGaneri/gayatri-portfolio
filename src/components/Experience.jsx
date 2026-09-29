import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Work Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Industry <span className="text-gradient-accent">Internship</span>
          </h2>
          <p className="mt-2 text-slate-400 text-base max-w-2xl">
            Software development internship experience building production backend modules and full-stack enterprise features.
          </p>
        </div>

        {/* Experience Cards List */}
        <div className="space-y-6">
          {experienceData.map((exp) => (
            <div key={exp.id} className="glass-card p-7 sm:p-8 rounded-3xl border-indigo-500/30 relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-xs font-mono text-indigo-300 mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{exp.badge}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100">{exp.role}</h3>
                  <div className="text-lg font-bold text-gradient-accent">{exp.company}</div>
                </div>

                <div className="flex flex-col sm:flex-row md:items-end gap-3 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-950/60 border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-950/60 border border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-6 space-y-3">
                {exp.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-300 font-sans leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-indigo-300">
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
