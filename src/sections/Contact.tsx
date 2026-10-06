import React, { useState } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { Mail, Copy, Check, ArrowUpRight, Send, MapPin, Sparkles } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../components/Icons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(portfolioConfig.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || 'Collaborator'}`);
    const body = encodeURIComponent(
      `Hi Muhammath Jibreel,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`
    );
    window.location.href = `mailto:${portfolioConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider">10 //</span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
            Let's build something.
          </h2>
        </div>
        <p className="text-slate-400 text-sm font-mono max-w-md">
          // I'm always interested in learning, building, and connecting with people working on meaningful technology.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Info & Channels (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Main Direct Email Card */}
          <div className="p-7 rounded-3xl bg-[#0f1118]/90 border border-white/10 relative overflow-hidden backdrop-blur-md">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>DIRECT INQUIRIES</span>
            </div>

            <h3 className="text-xl font-display font-semibold text-white mb-2">
              Start a Conversation
            </h3>

            <p className="text-xs text-slate-300 font-light leading-relaxed mb-6">
              Whether you are recruiting for software engineering internships, entry roles, or want to discuss practical web applications, my inbox is open.
            </p>

            {/* Email Address & Quick Copy */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/10 mb-4">
              <span className="font-mono text-xs sm:text-sm text-slate-200 truncate select-all">
                {portfolioConfig.contact.email}
              </span>
              <button
                type="button"
                onClick={copyEmailToClipboard}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-mono text-xs border border-emerald-500/30 transition-colors shrink-0 ml-2"
                data-cursor="pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>{portfolioConfig.contact.locationDisplay}</span>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href={portfolioConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-[#0f1118]/80 border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              data-cursor="pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <LinkedinIcon className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div>
                <span className="font-display font-semibold text-white text-sm block">LinkedIn</span>
                <span className="text-[10px] font-mono text-slate-400">Professional Network</span>
              </div>
            </a>

            <a
              href={portfolioConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-[#0f1118]/80 border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              data-cursor="pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <GithubIcon className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div>
                <span className="font-display font-semibold text-white text-sm block">GitHub</span>
                <span className="text-[10px] font-mono text-slate-400">Code & Repositories</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Quick Dispatch Form (7 cols) */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSendMessage}
            className="p-8 sm:p-10 rounded-3xl bg-[#0f1118]/80 border border-white/10 backdrop-blur-md space-y-6 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
                SEND A MESSAGE DIRECTLY
              </span>
              <span className="text-[10px] font-mono text-emerald-400">
                Direct Dispatch (Mailto)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Chen"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-emerald-400 text-white text-sm font-sans focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-colors placeholder:text-slate-400"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-emerald-400 text-white text-sm font-sans focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-colors placeholder:text-slate-400"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                Message or Project Scope
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Muhammath Jibreel, we came across your projects and would like to discuss an opportunity..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-emerald-400 text-white text-sm font-sans focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-colors placeholder:text-slate-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-xs font-semibold tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] transform hover:-translate-y-0.5"
              data-cursor="pointer"
            >
              <span>Launch Email Client</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
