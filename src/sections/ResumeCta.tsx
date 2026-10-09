import React, { useState } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { ResumeModal } from '../components/ResumeModal';
import { FileText, Download, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ResumeCta: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showNotice, setShowNotice] = useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    if (portfolioConfig.resume.isPlaceholder) {
      e.preventDefault();
      setShowNotice(true);
      setTimeout(() => setShowNotice(false), 4000);
    }
  };

  return (
    <section id="resume" className="relative py-20 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Resume Banner Container */}
      <div className="rounded-3xl bg-[#0f1118]/95 border border-cyan-500/30 p-8 sm:p-12 lg:p-16 relative overflow-hidden backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_25px_60px_-15px_rgba(56,189,248,0.2)]">
        {/* Top Multi-Color Accent Edge */}
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">09 //</span>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">CREDENTIALS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-4">
              Academic &amp; Project Summary.
            </h2>

            <p className="text-slate-200 text-base sm:text-lg font-light leading-relaxed mb-6">
              A transparent breakdown of my core technical stack, practical project builds, and academic progression as a final-year Computer Science Engineering student.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                B.E. Computer Science Engineering
              </span>
              <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Class of {portfolioConfig.graduationYear}
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 shrink-0">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:via-teal-300 hover:to-cyan-300 text-slate-950 font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] transform hover:-translate-y-0.5 active:translate-y-0"
              data-cursor="pointer"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume Summary</span>
            </button>

            <a
              href={portfolioConfig.resume.downloadUrl}
              download={portfolioConfig.resume.fileName}
              onClick={handleDownload}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/15 hover:border-cyan-400/40 backdrop-blur-xl font-mono text-xs font-semibold tracking-wider uppercase transition-all hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] transform hover:-translate-y-0.5"
              data-cursor="pointer"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Informative placeholder notice if PDF is not yet linked */}
        {showNotice && (
          <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 animate-in fade-in duration-200">
            PDF file is currently being finalized. You can view the full interactive summary by clicking &quot;View Resume Summary&quot; above.
          </div>
        )}
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};
