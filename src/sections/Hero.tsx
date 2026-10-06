import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { HeroCanvas } from '../components/HeroCanvas';
import { ArrowDown, ArrowUpRight, Terminal, Code2, MapPin, FileText } from 'lucide-react';

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
      {/* Interactive Background Particle Cosmos Canvas */}
      <HeroCanvas />

      {/* Hero Content Area */}
      <div className="relative z-10 my-auto max-w-4xl flex flex-col items-start pt-4 sm:pt-8 lg:pt-16 w-full">
        {/* Top Identification Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 sm:mb-8 hover:border-emerald-500/30 transition-colors max-w-full">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          {/* Pill text: show abbreviated on very small screens */}
          <span className="text-[10px] sm:text-xs font-mono tracking-wider uppercase text-emerald-300 font-medium truncate hero-pill-text">
            <span className="hidden xs:inline">FRONTEND DEVELOPER • </span>
            FINAL-YEAR CSE • {portfolioConfig.graduationYear}
          </span>
        </div>

        {/* Large Editorial Headline — fluid sizing with clamp */}
        <h1
          className="font-display font-bold tracking-tight text-white mb-5 sm:mb-6 leading-[1.08] w-full"
          style={{ fontSize: 'clamp(2rem, 7vw, 4.5rem)' }}
        >
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-emerald-400">
            {portfolioConfig.fullName}.
          </span>
        </h1>

        {/* Dynamic Positioning Statement */}
        <p
          className="font-light text-slate-300 max-w-3xl leading-relaxed mb-6 sm:mb-8 w-full"
          style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}
        >
          Crafting responsive, clean user interfaces and{' '}
          <span className="text-white font-normal underline decoration-emerald-500/50 underline-offset-8">
            practical software solutions.
          </span>
        </p>

        {/* Authentic Sub-Statement */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-mono text-slate-400 mb-8 sm:mb-10 w-full">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Tamil Nadu, India</span>
          </div>
          <span className="text-white/20 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <Code2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>HTML • CSS • JavaScript • Java</span>
          </div>
          <span className="text-white/20 hidden sm:inline">•</span>
          <div className="flex items-center gap-2 min-w-0">
            <Terminal className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="truncate max-w-[200px] sm:max-w-none">{portfolioConfig.college}</span>
          </div>
        </div>

        {/* Primary Call to Actions */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full">
          <button
            type="button"
            onClick={() => scrollTo('work')}
            className="group relative inline-flex items-center justify-center gap-2.5 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] transform hover:-translate-y-0.5 active:translate-y-0"
            data-cursor="pointer"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="group inline-flex items-center justify-center gap-2.5 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 hover:border-white/25 backdrop-blur-md font-mono text-xs font-medium tracking-wider uppercase transition-all duration-300"
            data-cursor="pointer"
          >
            <span>Contact Me</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button
            type="button"
            onClick={() => scrollTo('resume')}
            className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/[0.02] hover:bg-white/[0.06] text-slate-300 hover:text-emerald-300 border border-white/10 hover:border-emerald-500/30 font-mono text-xs font-medium tracking-wider uppercase transition-all duration-300"
            data-cursor="pointer"
          >
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>Resume</span>
          </button>
        </div>
      </div>

      {/* Bottom Status & Scroll Indicator */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between pt-8 sm:pt-12 border-t border-white/5 gap-3 sm:gap-4 w-full">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-slate-400 uppercase leading-snug break-anywhere">
            STATUS: FINAL-YEAR CSE (2027) • OPEN FOR FRONTEND ROLES
          </span>
        </div>

        <button
          type="button"
          onClick={() => scrollTo('about')}
          className="group flex items-center gap-3 text-[11px] font-mono tracking-widest text-slate-400 hover:text-emerald-300 transition-colors cursor-pointer shrink-0"
          data-cursor="pointer"
        >
          <span>SCROLL TO EXPLORE</span>
          <div className="w-5 h-8 rounded-full border border-white/20 group-hover:border-emerald-400/50 flex items-start justify-center p-1 transition-colors">
            <div className="w-1 h-2 rounded-full bg-emerald-400 animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};
