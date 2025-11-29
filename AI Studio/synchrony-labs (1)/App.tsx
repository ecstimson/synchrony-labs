import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { LogoStrip } from './components/LogoStrip';
import { Capabilities } from './components/Capabilities';
import { DoctorSpotlight } from './components/DoctorSpotlight';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Initialize theme based on preference or default to dark
  useEffect(() => {
    // Check local storage or system preference could go here
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    } else {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className="min-h-screen font-sans text-navy dark:text-white selection:bg-steel selection:text-white overflow-x-hidden relative transition-colors duration-500">
      
      {/* FIXED GLOBAL 3D BACKGROUND */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-white dark:bg-black transition-colors duration-700">
        
        {/* Grid Pattern - Subtle Texture */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            maskImage: 'linear-gradient(to bottom, black 40%, transparent 95%)'
          }}
        ></div>

        {/* --- DARK MODE RAYS --- */}
        <div className={`absolute top-[-30vh] left-1/2 -translate-x-1/2 w-[160vw] h-[160vh] pointer-events-none z-10 mix-blend-screen perspective-1000 transition-opacity duration-1000 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>
            {/* Ray 1: Bright White Core */}
            <div className="absolute inset-0 animate-ray-drift-1 opacity-70 blur-[40px] transform-gpu" 
                style={{ background: 'conic-gradient(from 170deg at 50% 0%, transparent 0deg, rgba(255,255,255,0.1) 5deg, rgba(255,255,255,0.6) 10deg, rgba(255,255,255,0.1) 15deg, transparent 20deg)' }}>
            </div>
            {/* Ray 2: Steel Blue Wide Beam */}
            <div className="absolute inset-0 animate-ray-drift-2 opacity-60 blur-[50px] transform-gpu" 
                style={{ background: 'conic-gradient(from 160deg at 50% 0%, transparent 0deg, rgba(176,196,222,0.1) 10deg, rgba(176,196,222,0.4) 20deg, rgba(176,196,222,0.1) 30deg, transparent 40deg)' }}>
            </div>
             {/* Ray 3: Light Steel Blue / White Mix */}
             <div className="absolute inset-0 animate-ray-drift-3 opacity-60 blur-[30px] transform-gpu" 
                style={{ background: 'conic-gradient(from 175deg at 50% 0%, transparent 0deg, rgba(255,255,255,0.1) 2deg, rgba(255,255,255,0.7) 5deg, rgba(255,255,255,0.1) 8deg, transparent 10deg)' }}>
            </div>
            {/* Ray 4: Ambient Wide Wash */}
            <div className="absolute inset-0 animate-ray-flash opacity-40 blur-[80px] transform-gpu" 
                style={{ background: 'conic-gradient(from 140deg at 50% 0%, transparent 0deg, rgba(70,130,180,0.2) 40deg, transparent 80deg)' }}>
            </div>
             {/* Ray 5: Sharp White Highlight */}
             <div className="absolute inset-0 animate-pulse-slow opacity-30 blur-[20px] transform-gpu" 
                style={{ background: 'conic-gradient(from 178deg at 50% 0%, transparent 0deg, rgba(255,255,255,0.5) 2deg, transparent 4deg)' }}>
            </div>
        </div>

        {/* --- LIGHT MODE RAYS (Light Blue Beams) --- */}
        <div className={`absolute top-[-30vh] left-1/2 -translate-x-1/2 w-[160vw] h-[160vh] pointer-events-none z-10 perspective-1000 transition-opacity duration-1000 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}>
            {/* Ray 1: Steel Blue Core (Darker than white background) */}
            <div className="absolute inset-0 animate-ray-drift-1 opacity-40 blur-[50px] transform-gpu" 
                style={{ background: 'conic-gradient(from 170deg at 50% 0%, transparent 0deg, rgba(70,130,180,0.05) 5deg, rgba(70,130,180,0.5) 10deg, rgba(70,130,180,0.05) 15deg, transparent 20deg)' }}>
            </div>
            {/* Ray 2: Light Blue/Teal Wide Beam */}
            <div className="absolute inset-0 animate-ray-drift-2 opacity-50 blur-[60px] transform-gpu" 
                style={{ background: 'conic-gradient(from 160deg at 50% 0%, transparent 0deg, rgba(173,216,230,0.1) 10deg, rgba(70,130,180,0.3) 20deg, rgba(173,216,230,0.1) 30deg, transparent 40deg)' }}>
            </div>
             {/* Ray 3: Sharp Steel Highlight */}
             <div className="absolute inset-0 animate-ray-drift-3 opacity-30 blur-[30px] transform-gpu" 
                style={{ background: 'conic-gradient(from 175deg at 50% 0%, transparent 0deg, rgba(70,130,180,0.1) 2deg, rgba(30,60,90,0.2) 5deg, rgba(70,130,180,0.1) 8deg, transparent 10deg)' }}>
            </div>
        </div>

        {/* Top Light Source Glow */}
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] blur-[80px] pointer-events-none transition-colors duration-1000 bg-[radial-gradient(ellipse_at_center,rgba(176,196,222,0.5)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(176,196,222,0.3)_0%,transparent_70%)]"></div>

        {/* Bottom Vignette */}
        <div className="absolute inset-0 pointer-events-none transition-colors duration-1000 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(255,255,255,0.8)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.8)_100%)]"></div>
        
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow">
          <Hero />
          <Services />
          <LogoStrip />
          <Capabilities />
          <DoctorSpotlight />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;