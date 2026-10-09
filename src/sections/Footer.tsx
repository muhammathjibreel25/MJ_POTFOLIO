import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-6 sm:px-8 border-t border-white/10 bg-[#06070a]/90 backdrop-blur-md overflow-hidden">
      {/* Top subtle multi-color gradient border */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-emerald-400/50 via-cyan-400/50 to-violet-400/50" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Brand & Degree Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a
            href="#home"
            className="font-display font-bold text-xl tracking-wider text-white hover:text-cyan-400 transition-colors mb-1"
          >
            {portfolioConfig.brandName}
          </a>
          <p className="text-xs font-mono text-slate-400">
            {portfolioConfig.degree} • <span className="text-emerald-400/80 font-medium">Class of {portfolioConfig.graduationYear}</span>
          </p>
          <p className="text-[11px] font-mono text-slate-400 mt-1">
            {portfolioConfig.college} • {portfolioConfig.location}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-xs font-mono">
          <a
            href={portfolioConfig.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-300 transition-colors"
            data-cursor="pointer"
          >
            GitHub
          </a>
          <a
            href={portfolioConfig.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors"
            data-cursor="pointer"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${portfolioConfig.contact.email}`}
            className="text-slate-400 hover:text-emerald-300 transition-colors"
            data-cursor="pointer"
          >
            Email
          </a>
        </div>

        {/* Design Credit & Back to Top */}
        <div className="flex items-center gap-6">
          <span className="text-xs font-mono text-slate-400">
            Developed by Jibreel
          </span>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all focus:outline-none"
            aria-label="Scroll back to top"
            title="Back to top"
            data-cursor="pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
