import React from 'react';
import { Hammer, Bug, Flame, BookOpen, CheckCircle2 } from 'lucide-react';

export const ExperiencePhilosophy: React.FC = () => {
  return (
    <section className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider">08 //</span>
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
        <div className="p-8 rounded-3xl bg-[#0f1118]/80 border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-5">
            <Hammer className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-display font-semibold text-white mb-3">
            Hands-On Project Building
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed font-light mb-4">
            Instead of getting trapped in passive tutorial loops, I choose a real-world problem and write code to solve it. Whether it's organizing agricultural catalogs or structuring patient onboarding, building end-to-end applications forces me to confront real implementation challenges.
          </p>
          <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>Applied in Native Bites &amp; Doctor App</span>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-[#0f1118]/80 border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-5">
            <Bug className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-display font-semibold text-white mb-3">
            Debugging as a Core Discipline
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed font-light mb-4">
            Errors, race conditions, CORS problems, and layout shifts are not setbacks—they are where deep learning occurs. I inspect browser devtools, analyze stack traces, and understand why things break rather than blindly copying quick fixes.
          </p>
          <div className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>Methodical problem diagnosis & refactoring</span>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-[#0f1118]/80 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-5">
            <Flame className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-display font-semibold text-white mb-3">
            Experimentation &amp; Practical Tooling
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed font-light mb-4">
            I actively experiment with modern developer tools, including Google's Gemini API for contextual assistants and modern CSS layouts. I believe developers should understand how to integrate intelligent tooling cleanly and responsibly.
          </p>
          <div className="text-xs font-mono text-purple-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>Integrated in AI Driven Precision Agriculture</span>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-[#0f1118]/80 border border-white/10 hover:border-amber-500/30 transition-all duration-300">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-5">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-display font-semibold text-white mb-3">
            Solid Computer Science Foundation
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed font-light mb-4">
            My B.E. Computer Science degree at Aalim Muhammed Salegh College of Engineering provides grounding in object-oriented programming (Java), data structures, operating systems, and algorithmic thinking that underpins every line of practical code I write.
          </p>
          <div className="text-xs font-mono text-amber-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>Graduating Class of 2027</span>
          </div>
        </div>
      </div>
    </section>
  );
};
