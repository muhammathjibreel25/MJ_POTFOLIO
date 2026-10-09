import React, { useState } from 'react';
import { skillsData, SkillItem } from '../data/portfolioData';
import { Code2, Server, Smartphone, Database, Bot, Sparkles, Info, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<SkillItem>(skillsData[0]);
  const [activeTab, setActiveTab] = useState<'all' | 'core' | 'project' | 'learning'>('all');

  const coreSkills = skillsData.filter((s) => s.category === 'core');
  const projectSkills = skillsData.filter((s) => s.category === 'project');
  const learningSkills = skillsData.filter((s) => s.category === 'learning');

  const getTechIcon = (name: string) => {
    switch (name) {
      case 'HTML':
      case 'CSS':
      case 'JavaScript':
      case 'Java':
        return <Code2 className="w-4 h-4 text-emerald-400" />;
      case 'React Native':
        return <Smartphone className="w-4 h-4 text-cyan-400" />;
      case 'Node.js':
      case 'Express':
        return <Server className="w-4 h-4 text-emerald-400" />;
      case 'MySQL':
        return <Database className="w-4 h-4 text-amber-400" />;
      case 'Gemini API':
        return <Bot className="w-4 h-4 text-purple-400" />;
      case 'Python Basics':
        return <Code2 className="w-4 h-4 text-sky-400" />;
      case 'UI/UX / Designing':
        return <Sparkles className="w-4 h-4 text-pink-400" />;
      case 'TypeScript':
        return <Code2 className="w-4 h-4 text-blue-400" />;
      case 'Backend for React Native':
        return <Server className="w-4 h-4 text-violet-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-lime-400 font-semibold tracking-wider">04 //</span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
            Skills &amp; Toolkit.
          </h2>
        </div>
        <p className="text-slate-400 text-sm font-mono max-w-md">
          // Factual breakdown of core fundamentals and practical technologies explored through builds.
        </p>
      </div>

      {/* Filter Tabs — wraps on small screens */}
      <div className="skills-filter-tabs">
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all ${
            activeTab === 'all'
              ? 'bg-gradient-to-r from-lime-400 to-cyan-400 text-slate-950 font-bold shadow-lg shadow-cyan-950/40'
              : 'bg-white/5 text-slate-300 hover:text-white border border-white/10 hover:border-white/20'
          }`}
          data-cursor="pointer"
        >
          All Skills ({skillsData.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('core')}
          className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all ${
            activeTab === 'core'
              ? 'bg-emerald-400 text-slate-950 font-bold shadow-lg shadow-emerald-950/40'
              : 'bg-white/5 text-slate-300 hover:text-emerald-300 border border-white/10 hover:border-emerald-500/30'
          }`}
          data-cursor="pointer"
        >
          Core Skills ({coreSkills.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('project')}
          className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all ${
            activeTab === 'project'
              ? 'bg-cyan-400 text-slate-950 font-bold shadow-lg shadow-cyan-950/40'
              : 'bg-white/5 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/30'
          }`}
          data-cursor="pointer"
        >
          Project / Experience ({projectSkills.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('learning')}
          className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all ${
            activeTab === 'learning'
              ? 'bg-violet-400 text-slate-950 font-bold shadow-lg shadow-violet-950/40'
              : 'bg-white/5 text-slate-300 hover:text-violet-300 border border-white/10 hover:border-violet-500/30'
          }`}
          data-cursor="pointer"
        >
          Currently Learning ({learningSkills.length})
        </button>
      </div>

      {/* Main Grid: Skills Matrix & Real-Time Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Skill Chips Matrix (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Core Skills Group */}
          {(activeTab === 'all' || activeTab === 'core') && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
                  CORE SKILLS
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                {coreSkills.map((skill) => {
                  const isSelected = activeSkill.name === skill.name;
                  return (
                    <button
                      key={skill.name}
                      type="button"
                      onClick={() => setActiveSkill(skill)}
                      onMouseEnter={() => setActiveSkill(skill)}
                      className={`group flex items-center justify-between p-4 rounded-xl text-left border transition-all duration-200 ${
                        isSelected
                          ? 'bg-emerald-950/40 border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/30'
                          : 'bg-[#0f1118]/80 border-white/10 hover:border-white/20'
                      }`}
                      data-cursor="pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                          {getTechIcon(skill.name)}
                        </div>
                        <div>
                          <span className="font-display font-medium text-sm text-white block">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono text-emerald-400/80 uppercase">
                            Core Fundamental
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 group-hover:text-emerald-400 transition-colors">
                        INSPECT
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Project Experience Group */}
          {(activeTab === 'all' || activeTab === 'project') && (
            <div>
              <div className="flex items-center gap-2 mb-4 pt-4">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
                  PROJECT &amp; ADDITIONAL EXPERIENCE
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {projectSkills.map((skill) => {
                  const isSelected = activeSkill.name === skill.name;
                  return (
                    <button
                      key={skill.name}
                      type="button"
                      onClick={() => setActiveSkill(skill)}
                      onMouseEnter={() => setActiveSkill(skill)}
                      className={`group flex items-center justify-between p-4 rounded-xl text-left border transition-all duration-200 ${
                        isSelected
                          ? 'bg-cyan-950/40 border-cyan-500/60 shadow-[0_0_20px_rgba(56,189,248,0.15)] ring-1 ring-cyan-500/30'
                          : 'bg-[#0f1118]/80 border-white/10 hover:border-white/20'
                      }`}
                      data-cursor="pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                          {getTechIcon(skill.name)}
                        </div>
                        <div>
                          <span className="font-display font-medium text-sm text-white block">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono text-cyan-400/80 uppercase">
                            Applied In Projects
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Currently Learning Group */}
          {(activeTab === 'all' || activeTab === 'learning') && (
            <div>
              <div className="flex items-center gap-2 mb-4 pt-4">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
                  CURRENTLY LEARNING
                </h3>
                <span className="text-[10px] font-mono text-amber-400/80 border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 rounded-full">
                  In Progress
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {learningSkills.map((skill) => {
                  const isSelected = activeSkill.name === skill.name;
                  return (
                    <button
                      key={skill.name}
                      type="button"
                      onClick={() => setActiveSkill(skill)}
                      onMouseEnter={() => setActiveSkill(skill)}
                      className={`group flex items-center justify-between p-4 rounded-xl text-left border transition-all duration-200 ${
                        isSelected
                          ? 'bg-amber-950/30 border-amber-500/60 shadow-[0_0_20px_rgba(245,158,11,0.1)] ring-1 ring-amber-500/30'
                          : 'bg-[#0f1118]/80 border-white/10 hover:border-amber-500/20'
                      }`}
                      data-cursor="pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                          {getTechIcon(skill.name)}
                        </div>
                        <div>
                          <span className="font-display font-medium text-sm text-white block">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono text-amber-400/80 uppercase">
                            Currently Learning
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Live Technology Inspector Card (5 cols) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="rounded-3xl bg-[#0f1118]/95 border border-cyan-500/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl transition-all duration-300">
            {/* Top Multi-Color Accent */}
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Inspector Header */}
            <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                  {getTechIcon(activeSkill.name)}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                    INSPECTING TECHNOLOGY
                  </span>
                  <h4 className="text-2xl font-display font-bold text-white">
                    {activeSkill.name}
                  </h4>
                </div>
              </div>
              <span className="text-xs font-mono uppercase px-2.5 py-1 rounded bg-white/5 text-emerald-300 border border-white/10">
                {activeSkill.category === 'core' ? 'CORE' : activeSkill.category === 'learning' ? 'LEARNING' : 'APPLIED'}
              </span>
            </div>

            {/* Practical Application Breakdown */}
            <div className="space-y-6 text-xs">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  // PRACTICAL EXPERIENCE OVERVIEW
                </span>
                <p className="text-slate-300 leading-relaxed text-sm font-light">
                  {activeSkill.experienceDescription}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 block mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  REAL-WORLD IMPLEMENTATION
                </span>
                <p className="text-slate-300 leading-relaxed text-xs">
                  {activeSkill.practicalUse}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  // ASSOCIATED BUILDS
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeSkill.relatedProjects.map((proj) => (
                    <span
                      key={proj}
                      className="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10 font-mono text-[11px] flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <Info className="w-3.5 h-3.5 text-emerald-400" />
                Active Knowledge Base
              </span>
              <span>Continuously Improving</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
