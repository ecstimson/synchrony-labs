
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section className={`relative pt-32 pb-12 md:pt-40 md:pb-16 flex flex-col items-center justify-center overflow-hidden ${
      darkMode ? 'bg-slate-950' : 'bg-[#F1F5F9]'
    }`}>
      {/* Background Glow Effect */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none ${
          darkMode ? 'opacity-30' : 'opacity-0'
      }`}>
         <div className="absolute top-[-10%] left-[20%] w-[60%] h-[50%] rounded-full bg-blue-900/40 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center leading-[1.1] mb-6">
          <span className={darkMode ? 'text-white' : 'text-[#0f172a]'}>Preclinical Testing</span>
          <br />
          <span className={darkMode ? 'text-white' : 'text-[#0f172a]'}>Built on Experience</span>
        </h1>

        <p className={`max-w-2xl mx-auto text-lg sm:text-xl font-medium leading-relaxed mb-8 ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
        }`}>
          Specialized GLP research expertise across the full spectrum of medical device innovation
        </p>

        <div>
          <button className={`px-6 py-3 rounded-md font-bold text-base shadow-lg transition-all flex items-center gap-2 hover:translate-y-[-1px] ${
               darkMode 
               ? 'bg-[#335c81] hover:bg-[#284865] text-white shadow-blue-900/20' 
               : 'bg-[#335c81] hover:bg-[#284865] text-white shadow-slate-400/20'
          }`}>
            Schedule Your Pre-Study Consultation
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
