import React, { useEffect } from 'react';
import { useScrollProgress } from './hooks/useScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { InteractiveBackground } from './components/InteractiveBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Journey } from './sections/Journey';
import { CurrentFocus } from './sections/CurrentFocus';
import { Terminal } from './sections/Terminal';
import { ExperiencePhilosophy } from './sections/ExperiencePhilosophy';
import { ResumeCta } from './sections/ResumeCta';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

export const App: React.FC = () => {
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    // Ensure on page refresh/initial load that the viewport starts at top Hero
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#08090d] text-slate-100 selection:bg-lime-400 selection:text-slate-950 font-sans">
      {/* Live Interactive Background */}
      <InteractiveBackground />

      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar scrollProgress={scrollProgress} />

      {/* Main Flow */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Journey />
        <CurrentFocus />
        <Terminal />
        <ExperiencePhilosophy />
        <ResumeCta />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
