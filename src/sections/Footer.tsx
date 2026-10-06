import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-6 sm:px-8 border-t border-white/10 bg-[#06070a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Degree Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a
            href="#home"
            className="font-display font-bold text-xl tracking-wider text-white hover:text-emerald-400 transition-colors mb-1"
          >
            {portfolioConfig.brandName}
          </a>
          <p className="text-xs font-mono text-slate-400">
            {portfolioConfig.degree} • Class of {portfolioConfig.graduationYear}
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
            className="text-slate-400 hover:text-white transition-colors"
            data-cursor="pointer"
          >
            GitHub
          </a>
          <a
            href={portfolioConfig.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            data-cursor="pointer"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${portfolioConfig.contact.email}`}
            className="text-slate-400 hover:text-white transition-colors"
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
            className="p-2.5 rounded-full bg-white/5 hover:bg-emerald-500/20 text-slate-400 hover:text-emerald-400 border border-white/10 transition-colors focus:outline-none"
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
