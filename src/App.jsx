import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#080b11] text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* Background Fine Grid Overlay */}
      <div className="fixed inset-0 bg-grid-lines opacity-20 pointer-events-none z-0"></div>

      {/* Main Content Sections */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Achievements />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>

    </div>
  );
}
