import React, { useState } from 'react';
import { projectsData, frontendWorkData, Project } from '../data/portfolioData';
import { ProjectModal } from '../components/ProjectModal';
import {
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Globe,
  Bot,
  Calendar,
  HeartPulse,
  CheckCircle2,
  Code2
} from 'lucide-react';
import { GithubIcon } from '../components/Icons';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-violet-400 font-semibold tracking-wider">03 //</span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">SELECTED WORK</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
            Personal Projects.
          </h2>
        </div>
        <p className="text-slate-400 text-sm font-mono max-w-md">
          // Applications built end-to-end to solve real problems and test technical architectures. Click any card for the detailed breakdown.
        </p>
      </div>

      {/* Personal Projects List (Only Native Bites Farming & AI Precision Agriculture) */}
      <div className="space-y-16">
        {projectsData.map((project) => {
          const isNativeBites = project.id === 'native-bites';
          const themeAccent = isNativeBites ? 'emerald' : 'cyan';
          const badgeClass = isNativeBites
            ? 'text-emerald-300 bg-emerald-950/70 border-emerald-500/40'
            : 'text-cyan-300 bg-cyan-950/70 border-cyan-500/40';
          const topLineClass = isNativeBites
            ? 'bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400'
            : 'bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500';
          const cardHoverBorder = isNativeBites
            ? 'hover:border-emerald-400/50 hover:shadow-[0_25px_60px_-15px_rgba(16,185,129,0.22)]'
            : 'hover:border-cyan-400/50 hover:shadow-[0_25px_60px_-15px_rgba(56,189,248,0.22)]';
          const titleHoverColor = isNativeBites ? 'group-hover:text-emerald-300' : 'group-hover:text-cyan-300';
          const linkHoverColor = isNativeBites ? 'text-emerald-400 group-hover:text-emerald-300' : 'text-cyan-400 group-hover:text-cyan-300';

          return (
            <article
              key={project.id}
              data-cursor="explore"
              onClick={() => setSelectedProject(project)}
              className={`group relative rounded-3xl bg-[#0f1118]/90 border border-white/10 backdrop-blur-xl p-6 sm:p-10 lg:p-12 transition-all duration-300 ${cardHoverBorder} cursor-pointer overflow-hidden shadow-2xl`}
            >
              {/* Top Colored Accent Edge */}
              <div className={`absolute top-0 left-0 right-0 h-[2.5px] ${topLineClass}`} />

              {/* Ambient Background Glow on Hover */}
              <div
                className={`absolute top-0 right-1/4 w-96 h-96 ${
                  isNativeBites ? 'bg-emerald-500/10' : 'bg-cyan-500/10'
                } group-hover:scale-125 rounded-full blur-3xl pointer-events-none transition-all duration-500`}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                {/* Left Column: Project Narrative & Details (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className={`font-mono text-xs font-semibold px-3 py-1 rounded-full border shadow-sm ${badgeClass}`}>
                        PROJECT {project.number}
                      </span>
                      <span className="font-mono text-xs text-slate-400">
                        {project.year} • {project.category}
                      </span>
                    </div>

                    <h3 className={`text-3xl sm:text-4xl font-display font-bold text-white ${titleHoverColor} transition-colors mb-3`}>
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light mb-6">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2.5 mb-6 text-xs text-slate-300">
                      {project.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isNativeBites ? 'bg-emerald-400' : 'bg-cyan-400'
                            } shrink-0`}
                          />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Pills & Actions */}
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-200 bg-white/[0.04] border border-white/10 group-hover:border-white/20 transition-colors shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className={`inline-flex items-center gap-2 text-xs font-mono font-medium ${linkHoverColor}`}>
                        <span>View Case Study</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>

                      <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/5 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-300 border border-white/10 transition-colors"
                            title="View Live Demo"
                            data-cursor="pointer"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                            title="View GitHub Repository"
                            data-cursor="pointer"
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Abstract UI Representation (7 cols) */}
                <div className="lg:col-span-7">
                  <div className={`relative rounded-2xl bg-[#090b10] border border-white/15 p-4 sm:p-6 overflow-hidden ${
                    isNativeBites ? 'group-hover:border-emerald-500/40' : 'group-hover:border-cyan-500/40'
                  } transition-colors shadow-2xl`}>
                    {/* Browser Chrome Bar for Web Projects */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-[11px] font-mono text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-rose-500/70" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                      </div>
                      <div className="px-4 py-1 rounded-md bg-white/5 border border-white/10 text-slate-200 text-[10px] flex items-center gap-2">
                        <Globe className={`w-3 h-3 ${isNativeBites ? 'text-emerald-400' : 'text-cyan-400'}`} />
                        <span>{project.liveUrl ? 'https://nativebites.neocities.org' : 'AI Precision Agriculture Web App'}</span>
                      </div>
                      <span className="text-[10px] text-slate-400">Verified Web Build</span>
                    </div>

                  {/* Custom Representation for Native Bites */}
                  {project.id === 'native-bites' && (
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-[#0f141c] border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold mb-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            NATIVE BITES // FARM STORE
                          </div>
                          <p className="text-xs text-slate-300">Fresh Country Poultry & Organic Farm Direct Harvests</p>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                          Direct Sourcing
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                          <div className="h-16 rounded-lg bg-emerald-950/40 border border-white/5 flex items-center justify-center mb-2.5 relative">
                            <span className="text-xl">🐓</span>
                            <span className="absolute bottom-1 right-2 text-[9px] font-mono text-emerald-300 bg-black/60 px-1.5 py-0.5 rounded">
                              Pasture-Raised
                            </span>
                          </div>
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-xs font-medium text-white">Country Chicken</span>
                            <span className="text-xs font-mono text-emerald-400">Fresh Stock</span>
                          </div>
                          <p className="text-[11px] text-slate-400">100% naturally fed traditional breed.</p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                          <div className="h-16 rounded-lg bg-amber-950/40 border border-white/5 flex items-center justify-center mb-2.5 relative">
                            <span className="text-xl">🥚</span>
                            <span className="absolute bottom-1 right-2 text-[9px] font-mono text-amber-300 bg-black/60 px-1.5 py-0.5 rounded">
                              Morning Batch
                            </span>
                          </div>
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-xs font-medium text-white">Free-Range Farm Eggs</span>
                            <span className="text-xs font-mono text-amber-400">Pack of 12</span>
                          </div>
                          <p className="text-[11px] text-slate-400">Collected fresh daily from local co-ops.</p>
                        </div>
                      </div>

                      {/* Gemini Assistant Preview */}
                      <div className="p-3.5 rounded-xl bg-[#0b0e14] border border-emerald-500/30 text-xs">
                        <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 mb-2">
                          <Bot className="w-3.5 h-3.5" />
                          <span>Gemini API Farm Query Assistant</span>
                        </div>
                        <div className="text-[11px] text-slate-300 leading-relaxed pl-2 border-l-2 border-emerald-400">
                          Intelligent query handling for batch availability, freshness timelines, and farm sourcing verification.
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Custom Representation for Precision Agriculture */}
                  {project.id === 'precision-agriculture' && (
                    <div className="space-y-4">
                      {/* Web Advisory Query Parameters */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                          <span className="text-[10px] font-mono text-slate-400 block uppercase">Target Crop</span>
                          <span className="text-sm font-mono font-semibold text-white">Paddy (Rice)</span>
                          <span className="text-[9px] text-emerald-400 block font-mono">Selected Input</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                          <span className="text-[10px] font-mono text-slate-400 block uppercase">Soil Characteristic</span>
                          <span className="text-sm font-mono font-semibold text-white">Clay Loam</span>
                          <span className="text-[9px] text-cyan-400 block font-mono">User Parameter</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                          <span className="text-[10px] font-mono text-slate-400 block uppercase">Advisory Model</span>
                          <span className="text-sm font-mono font-semibold text-purple-300">Gemini API</span>
                          <span className="text-[9px] text-slate-400 block font-mono">Prompt Engine</span>
                        </div>
                      </div>

                      {/* Gemini Advisory Response Card */}
                      <div className="p-4 rounded-xl bg-[#0a0d14] border border-white/10 font-mono text-xs">
                        <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 text-[10px] text-slate-400">
                          <div className="flex items-center gap-2 text-emerald-400">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>GEMINI ADVISORY RESPONSE</span>
                          </div>
                          <span className="text-emerald-400/80">INTERACTIVE GUIDANCE</span>
                        </div>
                        <div className="text-slate-300 text-xs mb-2">
                          <span className="text-emerald-400">&gt;</span> Query: Crop health recommendations and water management
                        </div>
                        <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-[11px] text-slate-300 leading-relaxed font-sans">
                          Maintain shallow standing water (2–3 cm) during the early tillering phase. Ensure balanced nutrient application and monitor moisture retention in clay loam soil.
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>
        );
      })}
      </div>

      {/* DEDICATED ONGOING FRONTEND DEVELOPMENT WORK */}
      <div className="mt-20 pt-16 border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                ACTIVE WORKFLOW • FRONTEND DEVELOPMENT
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Ongoing Frontend Work: {frontendWorkData.title}
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full shrink-0 self-start sm:self-auto">
            {frontendWorkData.workType}
          </span>
        </div>

        <div className="rounded-3xl bg-[#0c0e15]/95 border border-cyan-500/35 hover:border-cyan-400/60 p-6 sm:p-10 relative overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_25px_60px_-15px_rgba(6,182,212,0.22)] backdrop-blur-xl">
          {/* Top Multi-Color Accent Edge */}
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Context Banner */}
          <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-cyan-200 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>
                <strong>Project Context:</strong> This is frontend development work I am actively engineering in React Native, focusing on mobile UI layouts, authentication flows, and component architecture.
              </span>
            </div>
            {frontendWorkData.githubUrl && (
              <a
                href={frontendWorkData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-mono text-xs border border-cyan-500/40 transition-colors shrink-0 shadow-sm"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View Repository</span>
              </a>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Scope & Key Contributions (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-2">
                  // SCOPE OF WORK
                </span>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-4">
                  {frontendWorkData.description}
                </p>
                <p className="text-xs text-slate-400 font-mono">
                  Role Scope: {frontendWorkData.roleScope}
                </p>
              </div>

              {/* Implemented Mobile Features */}
              <div className="space-y-2.5">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-2">
                  // FRONTEND MODULES IMPLEMENTED
                </span>
                {frontendWorkData.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="pt-2">
                <div className="flex flex-wrap gap-2">
                  {frontendWorkData.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-xs font-mono text-cyan-200 bg-cyan-950/40 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: React Native Mobile Preview Mockup (6 cols) */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-sm rounded-3xl bg-[#090b10] border-2 border-white/15 p-4 shadow-2xl relative">
                {/* Mobile Camera Notch */}
                <div className="w-20 h-4 bg-black rounded-b-xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-800" />
                </div>

                {/* Mobile App Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-1.5 font-medium text-white">
                    <HeartPulse className="w-4 h-4 text-rose-500" />
                    <span>Doctor App Prototype</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                    React Native UI
                  </span>
                </div>

                {/* OTP Verification UI Showcase */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 mb-3 text-center">
                  <span className="text-[10px] font-mono text-slate-400 block mb-2">Two-Factor Mobile Authentication</span>
                  <div className="flex justify-center gap-2 mb-2">
                    {['4', '9', '2', '0'].map((digit, i) => (
                      <div
                        key={i}
                        className="w-8 h-9 rounded-lg bg-white/5 border border-cyan-400/60 flex items-center justify-center font-mono text-sm font-bold text-cyan-300 shadow-sm"
                      >
                        {digit}
                      </div>
                    ))}
                  </div>
                  <span className="text-[9px] font-mono text-slate-400">SMS Verification Code Confirmed</span>
                </div>

                {/* Doctor Consultation Card */}
                <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs mb-3">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-xs">
                      DR
                    </div>
                    <div>
                      <span className="font-semibold text-white block text-xs">Dr. K. Ramesh</span>
                      <span className="text-[10px] text-cyan-400 block font-mono">Cardiologist • Consultation Booking</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-slate-300">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-cyan-400" /> Slot: 4:30 PM
                    </span>
                    <span className="text-cyan-400 font-semibold">Ready for Review</span>
                  </div>
                </div>

                {/* Bottom Home Indicator */}
                <div className="w-24 h-1 bg-white/20 rounded-full mx-auto mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
