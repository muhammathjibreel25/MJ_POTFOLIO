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
            <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider">01 //</span>
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
          <div className="p-8 rounded-2xl bg-[#0f1118]/80 border border-white/10 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <p className="mb-6">
              I am <strong className="font-semibold text-white">Muhammath Jibreel</strong>, a final-year{' '}
              <strong className="font-semibold text-white">B.E. Computer Science Engineering student</strong> at{' '}
              <span className="text-emerald-300 font-normal">{portfolioConfig.college}</span> in Tamil Nadu, India, graduating in 2027.
            </p>

            <p className="mb-6">
              My primary passion is <span className="text-white font-medium">frontend development</span>. I care deeply about building clean, responsive user interfaces and smooth user experiences that feel natural across screens. I learn best by building real projects from scratch, writing clean code, and working through practical challenges.
            </p>

            <p className="mb-6">
              My personal projects include <span className="text-white font-normal">Native Bites Farming</span> (a farm-to-table web storefront with Node.js and MySQL) and <span className="text-white font-normal">AI Driven Precision Agriculture</span> (a website-focused advisory tool powered by the Gemini API).
            </p>

            <p>
              Currently, I am expanding my skills through frontend mobile development on <span className="text-white font-normal">Doctor App</span> using React Native, while also learning backend development to connect mobile applications seamlessly. I am actively preparing for internship and entry-level software opportunities.
            </p>
          </div>

          {/* 3 Core Approach Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
                <Cpu className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">Learn by Building</h4>
              <p className="text-xs text-slate-400 leading-normal">
                Hands-on project work is the best way to understand how components, state, and layouts come together.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
                <Layers className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">Clean UI &amp; UX</h4>
              <p className="text-xs text-slate-400 leading-normal">
                Interfaces should look sharp, load fast, and work responsively across phones, tablets, and desktops.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
                <Compass className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">Growth Mindset</h4>
              <p className="text-xs text-slate-400 leading-normal">
                Consistently expanding skills from web frontend to React Native and server integration.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Genuine Student Profile Card (5 cols) */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-[#0f1118] border border-white/10 p-6 sm:p-7 relative shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            {/* Header Badge */}
            <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs text-slate-300 font-semibold tracking-wider uppercase">
                  DEVELOPER PROFILE
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/60 border border-emerald-500/20 px-2.5 py-1 rounded">
                CLASS OF 2027
              </span>
            </div>

            {/* Spec Attributes */}
            <div className="space-y-4 text-xs font-mono">
              <div className="flex items-start justify-between pb-3 border-b border-white/5">
                <span className="text-slate-400 uppercase">FULL NAME</span>
                <span className="text-white font-medium text-right">{portfolioConfig.fullName}</span>
              </div>

              <div className="flex items-start justify-between pb-3 border-b border-white/5">
                <span className="text-slate-400 uppercase">CURRENT ROLE</span>
                <span className="text-emerald-300 font-medium text-right">
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
                <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium text-right">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
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


