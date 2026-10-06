import React from 'react';
import { internshipData } from '../data/portfolioData';
import { Briefcase, MapPin, Smartphone } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider">02 //</span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">EXPERIENCE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
            Current Experience.
          </h2>
        </div>
        <p className="text-slate-400 text-sm font-mono max-w-md">
          // Practical internship experience — currently active.
        </p>
      </div>

      {/* Internship Card */}
      <div className="relative rounded-3xl bg-[#0f1118]/80 border border-white/10 p-8 sm:p-10 overflow-hidden hover:border-emerald-500/30 transition-all duration-300">
        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8">
          <div className="flex items-start gap-5">
            {/* Company Icon Block */}
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <Briefcase className="w-6 h-6 text-emerald-400" />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-white mb-1">
                {internshipData.role}
              </h3>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-emerald-400 font-semibold font-mono">{internshipData.company}</span>
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-2 shrink-0 self-start">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 px-3 py-1.5 rounded-full uppercase tracking-wider">
              Present
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-3xl">
          {internshipData.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {internshipData.technologies.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-300"
            >
              <Smartphone className="w-3 h-3 text-emerald-400" />
              {tech}
            </span>
          ))}
        </div>

        {/* Type label */}
        <div className="flex items-center gap-2 mt-8 pt-6 border-t border-white/5">
          <MapPin className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">
            Internship / Work Experience — Not a Personal Project
          </span>
        </div>
      </div>
    </section>
  );
};
