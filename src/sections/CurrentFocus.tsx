import React from 'react';
import { currentFocusList } from '../data/portfolioData';

export const CurrentFocus: React.FC = () => {
  const getFocusTheme = (idx: number) => {
    switch (idx % 5) {
      case 0:
        return {
          topLine: 'bg-gradient-to-r from-emerald-400 to-lime-400',
          borderHover: 'hover:border-emerald-400/50 hover:shadow-[0_15px_35px_rgba(16,185,129,0.18)]',
          statusBadge: 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300',
          dot: 'bg-emerald-400',
          titleHover: 'group-hover:text-emerald-300',
        };
      case 1:
        return {
          topLine: 'bg-gradient-to-r from-cyan-400 to-blue-400',
          borderHover: 'hover:border-cyan-400/50 hover:shadow-[0_15px_35px_rgba(56,189,248,0.18)]',
          statusBadge: 'bg-cyan-950/60 border-cyan-500/40 text-cyan-300',
          dot: 'bg-cyan-400',
          titleHover: 'group-hover:text-cyan-300',
        };
      case 2:
        return {
          topLine: 'bg-gradient-to-r from-blue-400 to-violet-400',
          borderHover: 'hover:border-blue-400/50 hover:shadow-[0_15px_35px_rgba(59,130,246,0.18)]',
          statusBadge: 'bg-blue-950/60 border-blue-500/40 text-blue-300',
          dot: 'bg-blue-400',
          titleHover: 'group-hover:text-blue-300',
        };
      case 3:
        return {
          topLine: 'bg-gradient-to-r from-violet-400 to-purple-400',
          borderHover: 'hover:border-violet-400/50 hover:shadow-[0_15px_35px_rgba(139,92,246,0.18)]',
          statusBadge: 'bg-violet-950/60 border-violet-500/40 text-violet-300',
          dot: 'bg-violet-400',
          titleHover: 'group-hover:text-violet-300',
        };
      case 4:
        return {
          topLine: 'bg-gradient-to-r from-amber-400 to-orange-400',
          borderHover: 'hover:border-amber-400/50 hover:shadow-[0_15px_35px_rgba(245,158,11,0.18)]',
          statusBadge: 'bg-amber-950/60 border-amber-500/40 text-amber-300',
          dot: 'bg-amber-400',
          titleHover: 'group-hover:text-amber-300',
        };
      default:
        return {
          topLine: 'bg-gradient-to-r from-emerald-400 to-cyan-400',
          borderHover: 'hover:border-cyan-400/50 hover:shadow-[0_15px_35px_rgba(56,189,248,0.18)]',
          statusBadge: 'bg-cyan-950/60 border-cyan-500/40 text-cyan-300',
          dot: 'bg-cyan-400',
          titleHover: 'group-hover:text-cyan-300',
        };
    }
  };

  return (
    <section id="focus" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">06 //</span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">PRESENT FOCUS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
            Current Focus.
          </h2>
        </div>
        <p className="text-slate-400 text-sm font-mono max-w-md">
          // Active learning direction, responsive UI development, and preparation for engineering opportunities.
        </p>
      </div>

      {/* Focus Cards with Individual Themes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentFocusList.map((item, idx) => {
          const theme = getFocusTheme(idx);

          return (
            <div
              key={item.id}
              className={`group relative rounded-3xl bg-[#0f1118]/90 border border-white/10 ${theme.borderHover} p-7 flex flex-col justify-between transition-all duration-300 backdrop-blur-xl shadow-xl overflow-hidden`}
            >
              {/* Top Dynamic Gradient Accent */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] ${theme.topLine}`} />

              <div>
                {/* Card Header with Status Beacon */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-white transition-colors">
                    FOCUS {item.number}
                  </span>

                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] font-mono shadow-sm font-medium ${theme.statusBadge}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${theme.dot} animate-pulse`} />
                    <span>{item.status}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className={`text-lg font-display font-semibold text-white ${theme.titleHover} transition-colors mb-3 leading-snug`}>
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">
                  {item.description}
                </p>
              </div>

              {/* Tag Pills */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[10px] font-mono text-slate-300 bg-white/[0.04] border border-white/10 group-hover:border-white/20 transition-colors shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

