import React, { useState } from 'react';
import { ArrowRight, FileText, Github, Linkedin, Sparkles, Code, CheckCircle, Copy, Check, Briefcase } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import HeroVisualizer from './HeroVisualizer';

export default function Hero() {
  const [copiedLink, setCopiedLink] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(type);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Core Candidate Identity */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-xs font-mono text-indigo-300 mb-5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>AI & Data Science Graduate • Software Developer</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.1] mb-3">
              Gayatri Anil Ganeri
            </h1>

            {/* Primary Headline */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gradient-accent tracking-tight mb-4">
              AI & Data Science Student / Software Developer
            </h2>

            {/* Internship Tag */}
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 bg-cyan-950/60 px-3 py-1 rounded-lg border border-cyan-500/30 mb-5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Software Developer Intern @ Uptiq.ai (Pune)</span>
            </div>

            {/* Supporting Statement */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 max-w-2xl">
              I build practical AI-powered software, full-stack web applications, and real-world IoT technology that turns ideas into useful products.
            </p>

            {/* Key Accomplishments Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-indigo-400" /> LangBridge IEEE Publication
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Adhyatma Bandha Design Patent
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Aakruti 2025 Finalist
              </span>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href="#projects"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-md shadow-indigo-500/20 transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-white/15 hover:border-indigo-500/40 transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10 w-full max-w-md text-xs font-mono">
              <span className="text-slate-400 uppercase tracking-wider text-[11px]">Profiles:</span>
              
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                  title="GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5 text-indigo-400" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Clean System Architecture Overview */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroVisualizer />
          </div>

        </div>
      </div>
    </section>
  );
}
