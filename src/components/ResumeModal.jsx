import React, { useState, useEffect } from 'react';
import { X, FileText, Download, CheckCircle2, Copy, Check, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copiedPath, setCopiedPath] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyPath = () => {
    navigator.clipboard.writeText('/resume.pdf');
    setCopiedPath(true);
    setTimeout(() => setCopiedPath(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-slate-900 border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-8 p-6 sm:p-8 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-xl font-bold text-slate-100">Curriculum Vitae / Resume</h3>
              <p className="text-xs text-slate-400 font-mono">Gayatri Ganeri • Software & AI Candidate</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Instructions Box */}
        <div className="p-6 rounded-2xl bg-slate-950/80 border border-indigo-500/20 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-indigo-400 font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Resume PDF Link Configured</span>
            </span>
            <span className="text-emerald-400">PDF Path Ready</span>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">
            The resume button is configured for direct PDF linking. Place your resume file inside <code className="text-indigo-300 font-mono bg-indigo-950 px-1.5 py-0.5 rounded">public/resume.pdf</code> or update <code className="text-indigo-300 font-mono bg-indigo-950 px-1.5 py-0.5 rounded">portfolioData.js</code>.
          </p>

          <div className="p-3.5 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-between font-mono text-xs text-slate-300">
            <div>
              <span className="text-slate-500 text-[10px] block">Current Configured Target Link:</span>
              <span className="text-cyan-300 font-semibold">{personalInfo.resumeUrl}</span>
            </div>
            <button
              onClick={handleCopyPath}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/80 hover:bg-indigo-500 text-white text-xs font-mono transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
            >
              {copiedPath ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedPath ? 'Path Copied!' : 'Copy /resume.pdf Path'}</span>
            </button>
          </div>
        </div>

        {/* Candidate Profile Summary */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Candidate Credentials Summary:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-sans">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/50 border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Software Engineering Student</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/50 border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>LangBridge Local AI Developer</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/50 border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Adhyatma Bandha Wearable IoT Dev</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/50 border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Dassault Systèmes Winner</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
          >
            Close
          </button>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (personalInfo.resumeUrl === "#") {
                alert("Resume PDF link is currently set to placeholder '#'. You can place your PDF at public/resume.pdf and update portfolioData.js!");
              }
            }}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs font-mono shadow-md transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume PDF</span>
          </a>
        </div>

      </div>
    </div>
  );
}
