
import React from 'react';
import { Check, Image as ImageIcon } from 'lucide-react';

interface FacilitySectionProps {
  darkMode: boolean;
}

const FacilitySection: React.FC<FacilitySectionProps> = ({ darkMode }) => {
  const capabilities = [
    "AAALAC-accredited GLP facility with continuous oversight",
    "Advanced imaging suites with fluoroscopy & CT capabilities",
    "Multiple operating rooms for cardiovascular procedures",
    "Dedicated veterinary staff ensuring optimal care",
    "Climate-controlled housing with 24/7 monitoring",
    "Ethical research practices aligned with IACUC guidelines"
  ];

  return (
    <section className="bg-[#020617] text-white py-24 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Accreditation Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500 mb-24 border-b border-slate-800 pb-12">
            <div className="text-2xl font-bold tracking-tighter text-slate-400">NIH</div>
            <div className="text-2xl font-serif italic font-bold text-slate-400">USDA</div>
            <div className="text-xl font-bold lowercase text-slate-400">nabr</div>
            <div className="border border-slate-500 px-2 py-1 text-sm font-semibold tracking-widest text-slate-400">AAALAC</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">
              Experienced Team,<br />
              <span className="text-[#335c81] text-blue-500">Complete Capabilities</span>
            </h2>
            
            <div className="mt-12 space-y-6">
              {capabilities.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border border-blue-500/30 flex items-center justify-center mt-0.5 group-hover:bg-blue-500/10 transition-colors">
                    <Check size={14} className="text-blue-500" />
                  </div>
                  <span className="text-slate-300 text-lg group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
               <button className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-md font-semibold transition-all">
                  View Our Facility
               </button>
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 shadow-2xl group cursor-pointer">
             <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600 group-hover:text-slate-400 transition-colors">
                <div className="w-16 h-16 rounded-full border-2 border-current flex items-center justify-center mb-4 opacity-50 group-hover:scale-110 transition-transform">
                   <ImageIcon size={32} />
                </div>
                <span className="text-sm font-medium tracking-wide">Facility Image Placeholder</span>
             </div>
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FacilitySection;
