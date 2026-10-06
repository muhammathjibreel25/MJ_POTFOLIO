import React from 'react';
import { currentFocusList } from '../data/portfolioData';

export const CurrentFocus: React.FC = () => {
  return (
    <section id="focus" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider">06 //</span>
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

      {/* Focus Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentFocusList.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl bg-[#0f1118]/80 border border-white/10 hover:border-emerald-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)] backdrop-blur-sm"
          >
            <div>
              {/* Card Header with Status Beacon */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-emerald-400 transition-colors">
                  {item.number}
                </span>

                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-[10px] font-mono text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{item.status}</span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-display font-semibold text-white group-hover:text-emerald-300 transition-colors mb-3 leading-snug">
                {item.title}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">
                {item.description}
              </p>
            </div>

            {/* Tag Pills */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-white/[0.03] border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
