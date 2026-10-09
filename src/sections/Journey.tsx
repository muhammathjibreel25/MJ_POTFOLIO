import React, { useState } from 'react';
import { journeyTimeline, TimelineItem } from '../data/portfolioData';
import { CheckCircle2, GraduationCap, Sparkles } from 'lucide-react';

export const Journey: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<TimelineItem>(
    journeyTimeline.find((m) => m.isCurrent) || journeyTimeline[3]
  );

  const getYearColor = (year: string) => {
    switch (year) {
      case '2023':
        return { text: 'text-blue-400', border: 'border-blue-500/40', bg: 'bg-blue-950/30', glow: 'rgba(59,130,246,0.2)' };
      case '2024':
        return { text: 'text-cyan-400', border: 'border-cyan-500/40', bg: 'bg-cyan-950/30', glow: 'rgba(56,189,248,0.2)' };
      case '2025':
        return { text: 'text-emerald-400', border: 'border-emerald-500/40', bg: 'bg-emerald-950/30', glow: 'rgba(16,185,129,0.2)' };
      case '2026':
        return { text: 'text-lime-300', border: 'border-lime-400/50', bg: 'bg-lime-950/40', glow: 'rgba(194,242,63,0.25)' };
      case '2027':
        return { text: 'text-violet-400', border: 'border-violet-500/40', bg: 'bg-violet-950/30', glow: 'rgba(139,92,246,0.2)' };
      default:
        return { text: 'text-cyan-400', border: 'border-cyan-500/40', bg: 'bg-cyan-950/30', glow: 'rgba(56,189,248,0.2)' };
    }
  };

  return (
    <section id="journey" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-amber-400 font-semibold tracking-wider">05 //</span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">PROGRESSION PATH</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
            Academic &amp; Engineering Path.
          </h2>
        </div>
        <p className="text-slate-400 text-sm font-mono max-w-md">
          // The chronological evolution from foundational CS concepts to practical web and mobile development.
        </p>
      </div>

      {/* Horizontal Timeline Track (Desktop & Tablet) */}
      <div className="relative mb-12">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/30 via-emerald-500/30 via-lime-500/30 to-violet-500/30 -translate-y-1/2 z-0" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 relative z-10">
          {journeyTimeline.map((item) => {
            const isSelected = selectedMilestone.year === item.year;
            const theme = getYearColor(item.year);

            return (
              <button
                key={item.year}
                type="button"
                onClick={() => setSelectedMilestone(item)}
                className={`group flex flex-col p-5 rounded-2xl border text-left transition-all duration-300 last:col-span-2 sm:last:col-span-1 md:last:col-span-1 backdrop-blur-md ${
                  isSelected
                    ? `bg-[#0f1118] ${theme.border} ring-1 ring-white/20 shadow-xl`
                    : 'bg-[#0f1118]/70 border-white/10 hover:border-white/25 hover:bg-[#0f1118]'
                }`}
                style={isSelected ? { boxShadow: `0 0 25px ${theme.glow}` } : undefined}
                data-cursor="pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-display font-bold text-xl sm:text-2xl transition-colors ${
                      isSelected ? theme.text : 'text-slate-400 group-hover:text-white'
                    }`}
                  >
                    {item.year}
                  </span>
                  {item.isCurrent && (
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-400" />
                    </span>
                  )}
                  {item.year === '2027' && (
                    <GraduationCap className="w-4 h-4 text-violet-400" />
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
      <div className="rounded-3xl bg-[#0f1118]/95 border border-white/15 p-6 sm:p-10 relative overflow-hidden backdrop-blur-xl shadow-2xl">
        {/* Top Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-amber-400 via-lime-400 to-cyan-400" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-lime-400/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-white/10 mb-6 relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="text-2xl sm:text-3xl font-display font-bold text-white">
                {selectedMilestone.year}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-semibold">
                {selectedMilestone.subtitle}
              </span>
              {selectedMilestone.isCurrent && (
                <span className="text-[10px] font-mono bg-lime-400/20 text-lime-300 border border-lime-400/40 px-2.5 py-0.5 rounded-full font-semibold shadow-sm">
                  ACTIVE PHASE
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-white">
              {selectedMilestone.title}
            </h3>
          </div>

          <span className="text-xs font-mono text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 shrink-0 self-start shadow-sm">
            B.E. CSE Progression
          </span>
        </div>

        <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-4xl relative z-10">
          {selectedMilestone.description}
        </p>

        {/* Milestone Key Competencies */}
        <div className="relative z-10">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
            // KEY DOMAINS EXPLORED IN {selectedMilestone.year}
          </span>
          <div className="flex flex-wrap gap-2.5">
            {selectedMilestone.focus.map((f, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-200 flex items-center gap-2 shadow-sm"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

