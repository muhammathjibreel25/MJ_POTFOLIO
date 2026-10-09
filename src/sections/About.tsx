import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { Compass, Cpu, Layers, GraduationCap, MapPin, Code2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">01 //</span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">ABOUT ME</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
            Background &amp; Focus.
          </h2>
        </div>
        <p className="text-slate-400 text-sm font-mono max-w-md">
          // Final-year B.E. Computer Science Engineering student focused on frontend development.
        </p>
      </div>

      {/* Main Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Authentic Story (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-slate-300 text-base sm:text-lg leading-relaxed font-light">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0f1118]/85 border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            {/* Top Multi-Color Gradient Edge */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-cyan-500/10 via-violet-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
            
            <p className="mb-6">
              I am <strong className="font-semibold text-white">Muhammath Jibreel</strong>, a final-year{' '}
              <strong className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">
                B.E. Computer Science Engineering student
              </strong>{' '}
              at <span className="text-slate-200 font-normal">{portfolioConfig.college}</span> in Tamil Nadu, India, graduating in 2027.
            </p>

            <p className="mb-6">
              My primary passion is <span className="text-white font-medium">frontend development</span>. I care deeply about building clean, responsive user interfaces and smooth user experiences that feel natural across screens. I learn best by building real projects from scratch, writing clean code, and working through practical challenges.
            </p>

            <p className="mb-6">
              My personal projects include <span className="text-emerald-300 font-normal">Native Bites Farming</span> (a farm-to-table web storefront with Node.js and MySQL) and <span className="text-cyan-300 font-normal">AI Driven Precision Agriculture</span> (a website-focused advisory tool powered by the Gemini API).
            </p>

            <p>
              Currently, I am expanding my skills through frontend mobile development on <span className="text-violet-300 font-normal">Doctor App</span> using React Native, while also learning backend development to connect mobile applications seamlessly. I am actively preparing for internship and entry-level software opportunities.
            </p>
          </div>

          {/* 3 Core Approach Pillars with Distinct Color Personas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="group p-5 rounded-2xl bg-[#0f1118]/80 border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-[#0f1118] transition-all duration-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-300 mb-3.5 group-hover:scale-110 transition-transform">
                <Cpu className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors">Learn by Building</h4>
              <p className="text-xs text-slate-400 leading-normal">
                Hands-on project work is the best way to understand how components, state, and layouts come together.
              </p>
            </div>

            <div className="group p-5 rounded-2xl bg-[#0f1118]/80 border border-emerald-500/20 hover:border-emerald-400/50 hover:bg-[#0f1118] transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-300 mb-3.5 group-hover:scale-110 transition-transform">
                <Layers className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-emerald-300 transition-colors">Clean UI &amp; UX</h4>
              <p className="text-xs text-slate-400 leading-normal">
                Interfaces should look sharp, load fast, and work responsively across phones, tablets, and desktops.
              </p>
            </div>

            <div className="group p-5 rounded-2xl bg-[#0f1118]/80 border border-violet-500/20 hover:border-violet-400/50 hover:bg-[#0f1118] transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]">
              <div className="w-9 h-9 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-300 mb-3.5 group-hover:scale-110 transition-transform">
                <Compass className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-violet-300 transition-colors">Growth Mindset</h4>
              <p className="text-xs text-slate-400 leading-normal">
                Consistently expanding skills from web frontend to React Native and server integration.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Genuine Student Profile Card (5 cols) */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl bg-[#0f1118]/90 border border-white/10 p-6 sm:p-8 relative shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl overflow-hidden hover:border-cyan-500/30 transition-all">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-violet-500/10 via-cyan-500/5 to-transparent rounded-full blur-2xl pointer-events-none" />

            {/* Header Badge */}
            <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-mono text-xs text-slate-200 font-semibold tracking-wider uppercase">
                  DEVELOPER PROFILE
                </span>
              </div>
              <span className="text-[10px] font-mono text-lime-300 bg-lime-950/60 border border-lime-400/30 px-2.5 py-1 rounded-full font-medium shadow-sm">
                CLASS OF 2027
              </span>
            </div>

            {/* Spec Attributes */}
            <div className="space-y-4 text-xs font-mono relative z-10">
              <div className="flex items-start justify-between pb-3 border-b border-white/5">
                <span className="text-slate-400 uppercase">FULL NAME</span>
                <span className="text-white font-medium text-right">{portfolioConfig.fullName}</span>
              </div>

              <div className="flex items-start justify-between pb-3 border-b border-white/5">
                <span className="text-slate-400 uppercase">CURRENT ROLE</span>
                <span className="text-cyan-300 font-medium text-right">
                  Frontend Developer + CSE Student
                </span>
              </div>

              <div className="flex items-start justify-between pb-3 border-b border-white/5">
                <span className="text-slate-400 uppercase">DEGREE</span>
                <span className="text-white font-medium text-right">{portfolioConfig.degree}</span>
              </div>

              <div className="flex items-start justify-between pb-3 border-b border-white/5">
                <span className="text-slate-400 uppercase">COLLEGE</span>
                <span className="text-slate-200 font-medium text-right max-w-[220px]">
                  {portfolioConfig.college}
                </span>
              </div>

              <div className="flex items-start justify-between pb-3 border-b border-white/5">
                <span className="text-slate-400 uppercase">GRADUATION</span>
                <span className="text-white font-medium text-right">2027 (Final-Year)</span>
              </div>

              <div className="flex items-start justify-between pb-3 border-b border-white/5">
                <span className="text-slate-400 uppercase">LOCATION</span>
                <span className="text-white font-medium text-right">{portfolioConfig.location}</span>
              </div>

              <div className="flex items-start justify-between pb-3 border-b border-white/5">
                <span className="text-slate-400 uppercase">CORE STACK</span>
                <span className="text-emerald-300 font-medium text-right">HTML • CSS • JavaScript • Java</span>
              </div>

              <div className="flex items-start justify-between">
                <span className="text-slate-400 uppercase">STATUS</span>
                <span className="inline-flex items-center gap-1.5 text-lime-400 font-medium text-right">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                  Available for Internships &amp; Roles
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


