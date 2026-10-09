import React from 'react';
import { internshipData } from '../data/portfolioData';
import { Briefcase, MapPin, Smartphone, ExternalLink, Sparkles } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-lime-400 font-semibold tracking-wider">02 //</span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">EXPERIENCE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
            Current Experience.
          </h2>
        </div>
        <p className="text-slate-400 text-sm font-mono max-w-md">
          // Practical internship experience — actively engineering mobile application interfaces.
        </p>
      </div>

      {/* Internship Card with Zithtech Tech Styling */}
      <div className="relative rounded-3xl bg-[#0f1118]/90 border border-lime-400/25 hover:border-lime-400/60 p-8 sm:p-12 overflow-hidden transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_60px_-15px_rgba(194,242,63,0.18)] backdrop-blur-xl group">
        {/* Top Gradient Accent */}
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-lime-400 via-cyan-400 to-violet-500" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-lime-400/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none group-hover:from-lime-400/15 transition-all" />

        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8 relative z-10">
          <div className="flex items-start gap-5">
            {/* Company Icon Block */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-lime-400/15 via-emerald-500/10 to-transparent border border-lime-400/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(194,242,63,0.15)] group-hover:scale-105 transition-transform">
              <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-lime-400" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 mb-1.5">
                <span className="text-lime-300 font-bold font-mono text-base tracking-wide flex items-center gap-1.5">
                  <span>{internshipData.company}</span>
                  <Sparkles className="w-3.5 h-3.5 text-lime-400" />
                </span>
                <span className="text-white/20">•</span>
                <span className="text-xs font-mono text-slate-400">Software &amp; Product Engineering</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white">
                {internshipData.role}
              </h3>
            </div>
          </div>

          {/* Active Status Badge */}
          <div className="flex items-center gap-2 shrink-0 self-start">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-400" />
            </span>
            <span className="text-xs font-mono text-lime-300 bg-lime-950/70 border border-lime-400/40 px-3.5 py-1.5 rounded-full uppercase tracking-wider font-semibold shadow-sm">
              Active Internship
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-3xl relative z-10">
          {internshipData.description}
        </p>

        {/* Technologies with Colorful Badges */}
        <div className="flex flex-wrap gap-2.5 relative z-10">
          {internshipData.technologies.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-lime-400/25 hover:border-lime-400/50 text-xs font-mono text-lime-200 transition-colors shadow-sm"
            >
              <Smartphone className="w-3.5 h-3.5 text-lime-400" />
              {tech}
            </span>
          ))}
        </div>

        {/* Type label */}
        <div className="flex items-center gap-2 mt-8 pt-6 border-t border-white/10 relative z-10">
          <MapPin className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
            Internship / Work Experience — Hands-on Mobile &amp; Frontend Engineering
          </span>
        </div>
      </div>
    </section>
  );
};

