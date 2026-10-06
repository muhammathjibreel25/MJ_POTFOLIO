import React, { useEffect } from 'react';
import { portfolioConfig, skillsData, projectsData, journeyTimeline } from '../data/portfolioData';
import { X, FileText, Download, CheckCircle2, GraduationCap, MapPin, Mail, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#08090d]/85 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl my-auto bg-[#0f1118] border border-white/15 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.8)] overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10 bg-[#0f1118]/90 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-emerald-400" />
            <h3 id="resume-modal-title" className="font-display font-bold text-white text-lg">
              Resume Overview • {portfolioConfig.fullName}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors focus:outline-none"
            aria-label="Close resume preview"
            data-cursor="pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Resume Content Body */}
        <div className="overflow-y-auto px-6 sm:px-10 py-8 space-y-8 font-sans custom-scrollbar text-xs sm:text-sm">
          {/* Note Banner */}
          <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-300 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              This is an interactive verified resume summary. You can configure your custom PDF document in{' '}
              <code className="bg-black/40 px-1.5 py-0.5 rounded text-emerald-200 font-mono">
                src/data/portfolioData.ts
              </code>.
            </span>
          </div>

          {/* Personal Bio */}
          <div className="pb-6 border-b border-white/10">
            <h2 className="text-2xl font-display font-bold text-white">{portfolioConfig.fullName}</h2>
            <p className="text-emerald-400 font-mono text-xs mb-3">
              {portfolioConfig.role} • {portfolioConfig.targetRole}
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {portfolioConfig.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400" /> {portfolioConfig.contact.email}
              </span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3 pb-6 border-b border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
              EDUCATION
            </h4>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-white">{portfolioConfig.college}</p>
                <p className="text-xs text-slate-300">{portfolioConfig.degree}</p>
              </div>
              <span className="font-mono text-xs text-emerald-400">2023 – {portfolioConfig.graduationYear}</span>
            </div>
            <p className="text-xs text-slate-400 font-mono">Status: Final Year Student</p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3 pb-6 border-b border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
              TECHNICAL SKILLS
            </h4>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="text-xs font-mono text-slate-400 w-32 shrink-0">CORE:</span>
                <span className="text-slate-200">HTML, CSS, JavaScript, Java</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="text-xs font-mono text-slate-400 w-32 shrink-0">PROJECT / LEARNING:</span>
                <span className="text-slate-200">React Native, Node.js, Express, MySQL, Gemini API, Python Basics, UI/UX / Designing</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-4 pb-6 border-b border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
              PERSONAL PROJECTS
            </h4>
            {projectsData.map((p) => (
              <div key={p.id} className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-white">{p.title}</span>
                  <span className="text-xs font-mono text-slate-400">{p.year}</span>
                </div>
                <p className="text-xs text-slate-300">{p.description}</p>
                <p className="text-[11px] font-mono text-emerald-400">
                  Tech: {p.technologies.join(', ')}
                </p>
              </div>
            ))}
          </div>

          {/* Download & Links Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <span className="text-xs font-mono text-slate-400">
              Student Profile • B.E. CSE (Class of 2027)
            </span>

            {portfolioConfig.resume.isPlaceholder ? (
              <span className="text-xs font-mono text-emerald-400/90 bg-emerald-950/40 border border-emerald-500/20 px-3.5 py-1.5 rounded-full">
                Interactive Summary • PDF Available on Request
              </span>
            ) : (
              <a
                href={portfolioConfig.resume.downloadUrl}
                download={portfolioConfig.resume.fileName}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg"
                data-cursor="pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF Resume</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
