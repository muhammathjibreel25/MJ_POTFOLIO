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
      <div className="rounded-3xl bg-gradient-to-b from-[#0f1118] to-[#0a0d14] border border-white/10 p-8 sm:p-12 lg:p-16 relative overflow-hidden backdrop-blur-md shadow-2xl">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider">09 //</span>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">CREDENTIALS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-4">
              Academic &amp; Project Summary.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-6">
              A transparent breakdown of my core technical stack, practical project builds, and academic progression as a final-year Computer Science Engineering student.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                B.E. Computer Science Engineering
              </span>
              <span className="flex items-center gap-1.5">
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
              className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-xs font-semibold tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] transform hover:-translate-y-0.5 active:translate-y-0"
              data-cursor="pointer"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume Summary</span>
            </button>

            <a
              href={portfolioConfig.resume.downloadUrl}
              download={portfolioConfig.resume.fileName}
              onClick={handleDownload}
              className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 hover:border-white/25 backdrop-blur-md font-mono text-xs font-medium tracking-wider uppercase transition-all"
              data-cursor="pointer"
            >
              <Download className="w-4 h-4" />
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
