import React, { useState } from 'react';
import { journeyTimeline, TimelineItem } from '../data/portfolioData';
import { CheckCircle2, GraduationCap } from 'lucide-react';

export const Journey: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<TimelineItem>(
    journeyTimeline.find((m) => m.isCurrent) || journeyTimeline[3]
  );

  return (
    <section id="journey" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider">05 //</span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">PROGRESSION PATH</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
            Academic & Engineering Path.
          </h2>
        </div>
        <p className="text-slate-400 text-sm font-mono max-w-md">
          // The chronological evolution from foundational CS concepts to practical web and mobile development.
        </p>
      </div>

      {/* Horizontal Timeline Track (Desktop & Tablet) */}
      <div className="relative mb-12">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 -translate-y-1/2 z-0" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 relative z-10">
          {journeyTimeline.map((item) => {
            const isSelected = selectedMilestone.year === item.year;
            return (
              <button
                key={item.year}
                type="button"
                onClick={() => setSelectedMilestone(item)}
                className={`group flex flex-col p-5 rounded-2xl border text-left transition-all duration-300 last:col-span-2 sm:last:col-span-1 md:last:col-span-1 ${
                  isSelected
                    ? 'bg-[#0f1118] border-emerald-500/60 shadow-[0_0_25px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/40'
                    : 'bg-[#0f1118]/60 border-white/10 hover:border-white/25 hover:bg-[#0f1118]'
                }`}
                data-cursor="pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-display font-bold text-xl sm:text-2xl transition-colors ${
                      isSelected ? 'text-emerald-400' : 'text-slate-400 group-hover:text-white'
                    }`}
                  >
                    {item.year}
                  </span>
                  {item.isCurrent && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                  )}
                  {item.year === '2027' && (
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                  )}
                </div>

                <span className="text-xs font-semibold text-white line-clamp-1 mb-1">
                  {item.title}
                </span>

                <span className="text-[11px] font-mono text-slate-400 line-clamp-1">
                  {item.subtitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Milestone Detail Banner */}
      <div className="rounded-3xl bg-[#0f1118]/90 border border-white/15 p-6 sm:p-10 relative overflow-hidden backdrop-blur-md shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-white/10 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl sm:text-3xl font-display font-bold text-white">
                {selectedMilestone.year}
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                {selectedMilestone.subtitle}
              </span>
              {selectedMilestone.isCurrent && (
                <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  CURRENT FOCUS
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-white">
              {selectedMilestone.title}
            </h3>
          </div>

          <span className="text-xs font-mono text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 shrink-0 self-start">
            B.E. CSE Progression
          </span>
        </div>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-4xl">
          {selectedMilestone.description}
        </p>

        {/* Milestone Key Competencies */}
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
            // KEY DOMAINS EXPLORED IN {selectedMilestone.year}
          </span>
          <div className="flex flex-wrap gap-2.5">
            {selectedMilestone.focus.map((f, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-200 flex items-center gap-2"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
