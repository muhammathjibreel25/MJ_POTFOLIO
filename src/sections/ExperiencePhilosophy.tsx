import React from 'react';
import { Hammer, Bug, Flame, BookOpen, CheckCircle2 } from 'lucide-react';

export const ExperiencePhilosophy: React.FC = () => {
  return (
    <section className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-violet-400 font-semibold tracking-wider">08 //</span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">DEVELOPER PHILOSOPHY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
            Learning by Building.
          </h2>
        </div>
        <p className="text-slate-400 text-sm font-mono max-w-md">
          // A genuine breakdown of how I learn, write code, and build practical applications.
        </p>
      </div>

      {/* 4 Pillars of Project-First Growth */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Pillar 1: Hands-On Building */}
        <div className="group relative rounded-3xl bg-[#0f1118]/90 border border-emerald-500/25 hover:border-emerald-400/60 p-8 sm:p-10 transition-all duration-300 backdrop-blur-xl shadow-xl hover:shadow-[0_20px_50px_rgba(16,185,129,0.18)] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 to-lime-400" />
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-105 transition-transform shadow-sm">
            <Hammer className="w-6 h-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3 group-hover:text-emerald-300 transition-colors">
            Hands-On Project Building
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed font-light mb-5">
            Instead of getting trapped in passive tutorial loops, I choose a real-world problem and write code to solve it. Whether it's organizing agricultural catalogs or structuring patient onboarding, building end-to-end applications forces me to confront real implementation challenges.
          </p>
          <div className="text-xs font-mono text-emerald-300 flex items-center gap-2 pt-4 border-t border-white/5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Applied in Native Bites &amp; Doctor App</span>
          </div>
        </div>

        {/* Pillar 2: Debugging */}
        <div className="group relative rounded-3xl bg-[#0f1118]/90 border border-cyan-500/25 hover:border-cyan-400/60 p-8 sm:p-10 transition-all duration-300 backdrop-blur-xl shadow-xl hover:shadow-[0_20px_50px_rgba(56,189,248,0.18)] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-400" />
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-105 transition-transform shadow-sm">
            <Bug className="w-6 h-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
            Debugging as a Core Discipline
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed font-light mb-5">
            Errors, race conditions, CORS problems, and layout shifts are not setbacks—they are where deep learning occurs. I inspect browser devtools, analyze stack traces, and understand why things break rather than blindly copying quick fixes.
          </p>
          <div className="text-xs font-mono text-cyan-300 flex items-center gap-2 pt-4 border-t border-white/5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>Methodical problem diagnosis &amp; refactoring</span>
          </div>
        </div>

        {/* Pillar 3: Experimentation */}
        <div className="group relative rounded-3xl bg-[#0f1118]/90 border border-violet-500/25 hover:border-violet-400/60 p-8 sm:p-10 transition-all duration-300 backdrop-blur-xl shadow-xl hover:shadow-[0_20px_50px_rgba(139,92,246,0.18)] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-400 to-purple-400" />
          <div className="w-12 h-12 rounded-2xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-5 group-hover:scale-105 transition-transform shadow-sm">
            <Flame className="w-6 h-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3 group-hover:text-violet-300 transition-colors">
            Experimentation &amp; Practical Tooling
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed font-light mb-5">
            I actively experiment with modern developer tools, including Google's Gemini API for contextual assistants and modern CSS layouts. I believe developers should understand how to integrate intelligent tooling cleanly and responsibly.
          </p>
          <div className="text-xs font-mono text-violet-300 flex items-center gap-2 pt-4 border-t border-white/5">
            <CheckCircle2 className="w-4 h-4 text-violet-400" />
            <span>Integrated in AI Driven Precision Agriculture</span>
          </div>
        </div>

        {/* Pillar 4: Solid CS Foundation */}
        <div className="group relative rounded-3xl bg-[#0f1118]/90 border border-amber-500/25 hover:border-amber-400/60 p-8 sm:p-10 transition-all duration-300 backdrop-blur-xl shadow-xl hover:shadow-[0_20px_50px_rgba(245,158,11,0.18)] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-400 to-orange-400" />
          <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-105 transition-transform shadow-sm">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3 group-hover:text-amber-300 transition-colors">
            Solid Computer Science Foundation
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed font-light mb-5">
            My B.E. Computer Science degree at Aalim Muhammed Salegh College of Engineering provides grounding in object-oriented programming (Java), data structures, operating systems, and algorithmic thinking that underpins every line of practical code I write.
          </p>
          <div className="text-xs font-mono text-amber-300 flex items-center gap-2 pt-4 border-t border-white/5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Graduating Class of 2027</span>
          </div>
        </div>
      </div>
    </section>
  );
};

