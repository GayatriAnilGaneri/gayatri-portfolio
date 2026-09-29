import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, Github, Cpu, Radio, ExternalLink, Play, Layers } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Flagship AI & <span className="text-gradient-accent">Hardware Systems</span>
          </h2>
          <p className="mt-2 text-slate-400 text-base max-w-2xl">
            Detailed engineering showcases documenting AI voice-text frameworks, production full-stack modules, and award-winning IoT prototypes.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => {
            const isLangBridge = project.id === 'langbridge';
            const Icon = isLangBridge ? Cpu : Radio;

            return (
              <div
                key={project.id}
                className="glass-card glass-card-hover rounded-3xl p-7 sm:p-8 flex flex-col justify-between border-white/10 relative overflow-hidden group"
              >
                <div>
                  {/* Badge & Icon Header */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span className="px-3 py-1 rounded-full bg-slate-900 border border-white/15 text-xs font-mono text-indigo-300">
                      {project.badge}
                    </span>
                    <div className={`w-10 h-10 rounded-xl bg-slate-900 border ${
                      isLangBridge ? 'border-indigo-500/40 text-indigo-400' : 'border-cyan-500/40 text-cyan-400'
                    } flex items-center justify-center shadow-sm`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-indigo-300 transition-colors">
                    {project.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {project.shortDescription}
                  </p>

                  {/* IEEE Banner Link for LangBridge */}
                  {project.ieeeUrl && (
                    <div className="p-3.5 rounded-xl bg-indigo-950/80 border border-indigo-500/30 text-xs font-mono text-indigo-200 mb-5 flex items-center justify-between gap-3">
                      <div className="truncate">
                        <span className="text-white font-bold block">IEEE Published:</span>
                        <span className="text-slate-300 font-sans text-[11px] truncate block">{project.publicationTitle}</span>
                      </div>
                      <a
                        href={project.ieeeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-[11px] transition-colors"
                      >
                        <span>View Publication</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}

                  {/* Crucial Engineering Focus */}
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/10 text-xs font-mono text-slate-300 mb-6 leading-relaxed">
                    <span className="text-indigo-400 font-bold block mb-1">Architectural Focus:</span>
                    {project.positioningHighlight}
                  </div>

                  {/* Quick Problem & Solution Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10">
                      <span className="text-rose-400 font-bold block mb-1">Problem:</span>
                      <span className="text-slate-400 font-sans text-[12px] line-clamp-2">{project.problem}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10">
                      <span className="text-emerald-400 font-bold block mb-1">Solution:</span>
                      <span className="text-slate-400 font-sans text-[12px] line-clamp-2">{project.solution}</span>
                    </div>
                  </div>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 text-[11px] font-mono text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs font-mono shadow-md transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none group/btn"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Explore System & Demo</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>

                  <a
                    href={project.ieeeUrl || project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-indigo-300 hover:text-white transition-colors"
                  >
                    {project.ieeeUrl ? <ExternalLink className="w-3.5 h-3.5 text-indigo-400" /> : <Github className="w-3.5 h-3.5 text-indigo-400" />}
                    <span>{project.ieeeUrl ? "IEEE Xplore" : "GitHub Repo"}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Detailed Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
