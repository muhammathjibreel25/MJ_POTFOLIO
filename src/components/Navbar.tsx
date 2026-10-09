import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  scrollProgress: number;
}

export const Navbar: React.FC<NavbarProps> = ({ scrollProgress }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Journey', href: '#journey' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['home', 'about', 'experience', 'work', 'skills', 'journey', 'terminal', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#08090d]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
            : 'py-6 bg-transparent'
        }`}
      >
        {/* Top Multi-Color Scroll Indicator Line */}
        <div
          className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-lime-400 via-cyan-400 to-violet-500 transition-all duration-100 ease-out z-50 shadow-[0_0_10px_rgba(56,189,248,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1 -m-1"
            data-cursor="pointer"
          >
            <div className="relative flex items-center justify-center w-9 h-8 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/15 group-hover:border-cyan-400/60 transition-all px-1.5 shadow-sm group-hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]">
              <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-cyan-300 transition-colors leading-none">
                MJ
              </span>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-400" />
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-widest text-sm text-slate-100 group-hover:text-cyan-200 transition-colors">
                {portfolioConfig.brandName}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                CSE • {portfolioConfig.graduationYear}
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#0f1118]/80 border border-white/10 backdrop-blur-xl shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative px-4 py-1.5 text-xs font-mono tracking-wider transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-cyan-300 font-semibold bg-white/10 shadow-sm border border-cyan-400/30'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                  }`}
                  data-cursor="pointer"
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Let's Talk */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-cyan-300 bg-gradient-to-r from-cyan-950/50 via-slate-900 to-violet-950/50 hover:from-cyan-900/60 hover:to-violet-900/60 border border-cyan-500/30 hover:border-cyan-400/60 rounded-full transition-all duration-200 shadow-[0_0_15px_rgba(56,189,248,0.15)] hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]"
              data-cursor="pointer"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative p-2 text-slate-300 hover:text-white rounded-lg bg-white/5 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 z-40 bg-[#08090d]/95 backdrop-blur-xl md:hidden flex flex-col justify-between p-8 pt-24 animate-in fade-in duration-200"
        >
          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-mono tracking-widest text-emerald-400 uppercase">
              // Navigation Index
            </span>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="group flex items-center justify-between py-2 border-b border-white/5"
                >
                  <span className="text-2xl font-display font-medium text-slate-200 group-hover:text-emerald-300 transition-colors">
                    {link.name}
                  </span>
                  <span className="text-xs font-mono text-slate-400 group-hover:text-emerald-400">
                    0{idx + 1}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Available for Frontend Developer Roles</span>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-sm rounded-lg transition-colors"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
