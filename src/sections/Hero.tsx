import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, Terminal, Code2, MapPin, FileText, Sparkles, Smartphone } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-32 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto overflow-hidden"
    >
      {/* Hero Ambient Radial Lighting Aura */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-violet-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[420px] h-[420px] bg-gradient-to-br from-violet-600/10 via-pink-500/5 to-amber-500/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Hero Content Area */}
      <div className="relative z-10 my-auto max-w-5xl flex flex-col items-start pt-4 sm:pt-8 lg:pt-12 w-full">
        {/* Top Identification Pill with Dual-Color Ping */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-xl mb-6 sm:mb-8 hover:border-cyan-400/40 hover:bg-slate-900/90 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.4)] max-w-full">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          {/* Pill text: responsive sizing */}
          <span className="text-[10px] sm:text-xs font-mono tracking-wider uppercase text-slate-200 font-medium truncate hero-pill-text">
            <span className="text-emerald-400 font-semibold">FRONTEND DEVELOPER</span>
            <span className="text-white/20 mx-1.5">•</span>
            <span className="text-cyan-300">FINAL-YEAR CSE (2027)</span>
          </span>
        </div>

        {/* Large Editorial Headline with Multi-Color Gradient */}
        <h1
          className="font-display font-bold tracking-tight text-white mb-5 sm:mb-6 leading-[1.08] w-full"
          style={{ fontSize: 'clamp(2.25rem, 7.5vw, 4.75rem)' }}
        >
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text text-gradient-hero drop-shadow-sm">
            {portfolioConfig.fullName}.
          </span>
        </h1>

        {/* Dynamic Positioning Statement */}
        <p
          className="font-light text-slate-200 max-w-3xl leading-relaxed mb-6 sm:mb-8 w-full"
          style={{ fontSize: 'clamp(1.05rem, 3vw, 1.45rem)' }}
        >
          Crafting responsive, clean user interfaces and{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-white font-normal underline decoration-cyan-400/50 underline-offset-8">
            practical software solutions.
          </span>
        </p>

        {/* Floating Active Feature Pills (Desktop & Tablet) */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-300 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
            <span>Intern @ Zithtech (Mobile App Developer)</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>Interactive Web &amp; AI Builds</span>
          </div>
        </div>

        {/* Authentic Sub-Statement with Coordinated Accent Icons */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-mono text-slate-400 mb-8 sm:mb-10 w-full">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Tamil Nadu, India</span>
          </div>
          <span className="text-white/20 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <Code2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="text-slate-300">HTML • CSS • JavaScript • Java</span>
          </div>
          <span className="text-white/20 hidden sm:inline">•</span>
          <div className="flex items-center gap-2 min-w-0">
            <Terminal className="w-3.5 h-3.5 text-violet-400 shrink-0" />
            <span className="truncate max-w-[200px] sm:max-w-none">{portfolioConfig.college}</span>
          </div>
        </div>

        {/* Primary Call to Actions */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full">
          <button
            type="button"
            onClick={() => scrollTo('work')}
            className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:via-teal-300 hover:to-cyan-300 text-slate-950 font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_40px_rgba(56,189,248,0.5)] transform hover:-translate-y-0.5 active:translate-y-0"
            data-cursor="pointer"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 hover:border-cyan-400/40 backdrop-blur-xl font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-[0_0_25px_rgba(56,189,248,0.2)] transform hover:-translate-y-0.5"
            data-cursor="pointer"
          >
            <span>Contact Me</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
          </button>

          <button
            type="button"
            onClick={() => scrollTo('resume')}
            className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-white/[0.02] hover:bg-white/[0.06] text-slate-300 hover:text-violet-300 border border-white/10 hover:border-violet-500/40 font-mono text-xs font-medium tracking-wider uppercase transition-all duration-300"
            data-cursor="pointer"
          >
            <FileText className="w-4 h-4 text-violet-400 group-hover:scale-110 transition-transform" />
            <span>Resume</span>
          </button>
        </div>
      </div>

      {/* Bottom Status & Scroll Indicator */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between pt-8 sm:pt-12 border-t border-white/10 gap-3 sm:gap-4 w-full">
        <div className="flex items-center gap-3 min-w-0">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-400" />
          </span>
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-slate-400 uppercase leading-snug break-anywhere">
            STATUS: FINAL-YEAR CSE (2027) • OPEN FOR FRONTEND ROLES
          </span>
        </div>

        <button
          type="button"
          onClick={() => scrollTo('about')}
          className="group flex items-center gap-3 text-[11px] font-mono tracking-widest text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer shrink-0"
          data-cursor="pointer"
        >
          <span>SCROLL TO EXPLORE</span>
          <div className="w-5 h-8 rounded-full border border-white/20 group-hover:border-cyan-400/60 flex items-start justify-center p-1 transition-colors">
            <div className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};

