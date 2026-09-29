import React from 'react';
import { Trophy, Award, Globe, Bookmark, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Trophy':
        return Trophy;
      case 'Award':
        return Award;
      case 'Globe':
        return Globe;
      default:
        return Bookmark;
    }
  };

  return (
    <section id="achievements" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors, Patents & Research</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Recognitions & <span className="text-gradient-accent">Publications</span>
          </h2>
          <p className="mt-2 text-slate-400 text-base max-w-2xl">
            Verified competition honors, published IEEE research papers, patent filings, and incubation recognitions.
          </p>
        </div>

        {/* Achievement Timeline / Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item) => {
            const Icon = getIcon(item.icon);

            return (
              <div
                key={item.id}
                className="glass-card glass-card-hover p-6 rounded-3xl border-white/10 flex flex-col justify-between"
              >
                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 border border-amber-500/20 text-amber-300">
                      {item.badge}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-slate-900 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-sm">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-100 mb-1.5">
                    {item.title}
                  </h3>

                  {/* Organization */}
                  <div className="text-xs font-mono text-indigo-400 mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{item.organization}</span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Footer Link / Verification */}
                <div className="mt-5 pt-4 border-t border-white/10 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Wording</span>
                  </span>

                  {item.ieeeUrl && (
                    <a
                      href={item.ieeeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-indigo-300 hover:text-white transition-colors"
                    >
                      <span>IEEE Xplore</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
