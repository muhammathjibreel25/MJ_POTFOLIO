import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, Sparkles, CheckCircle2, ArrowRight, Lightbulb, Rocket } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#08090d]/85 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl my-auto bg-[#0f1118] border border-white/15 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.8)] overflow-hidden max-h-[90vh] flex flex-col">
        {/* Top Sticky Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10 bg-[#0f1118]/90 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/20">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider hidden sm:inline">
              {project.category}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            aria-label="Close project modal"
            data-cursor="pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto px-6 sm:px-10 py-8 space-y-10 custom-scrollbar">
          {/* Title & Tagline */}
          <div>
            <h3 id="modal-title" className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
              {project.title}
            </h3>
            <p className="text-base sm:text-lg text-emerald-300/90 font-light leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg shadow-emerald-900/30"
                data-cursor="pointer"
              >
                <span>Live Website Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 font-mono text-xs font-medium tracking-wider transition-colors"
                data-cursor="pointer"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.isExperimental && (
              <span className="text-[11px] font-mono text-amber-300 bg-amber-950/40 border border-amber-500/30 px-3 py-1.5 rounded-full">
                Experimental / Hackathon Project
              </span>
            )}
          </div>

          {/* Technology Badges */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
              TECHNOLOGIES EMPLOYED
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono text-slate-200 bg-white/[0.04] border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Overview & Problem & Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Problem Statement</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{project.problem}</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Engineering Approach</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{project.approach}</p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Key Implemented Features</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What I Learned */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
              <span>What I Learned Through Building</span>
            </h4>
            <ul className="space-y-2.5">
              {project.whatILearned.map((learning, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Future Improvements */}
          <div className="pb-4">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Rocket className="w-3.5 h-3.5 text-cyan-400" />
              <span>Planned Enhancements</span>
            </h4>
            <ul className="space-y-2">
              {project.futureImprovements.map((imp, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                  <span className="text-cyan-400 font-mono">0{idx + 1}.</span>
                  <span>{imp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
