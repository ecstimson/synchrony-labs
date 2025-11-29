
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Scan, Monitor, Activity, Zap, Video, ArrowRight } from 'lucide-react';

interface FacilityPageProps {
  darkMode: boolean;
  onNavigate: (page: string) => void;
}

interface EquipmentItem {
  id: string;
  name: string;
  features: string[];
  icon: React.ElementType;
}

const FacilityPage: React.FC<FacilityPageProps> = ({ darkMode, onNavigate }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const equipment: EquipmentItem[] = [
    {
      id: 'ge-optima',
      name: 'GE Optima 220 Dual Imaging System',
      icon: Scan,
      features: [
        'High-resolution X-ray for orthopedic studies',
        'Fluoroscopic guidance during procedures',
        'Multiple positioning options for complete evaluation',
        'Digital enhancement for better visualization'
      ]
    },
    {
      id: 'siemens-somatom',
      name: 'Siemens Somatom Flash Echo CT Scanner',
      icon: Zap,
      features: [
        'Resolution fine enough to catch submillimeter details',
        'Contrast studies showing blood flow and tissue response',
        '3D data that makes regulatory reviewers happy',
        'Long-term imaging showing integration and healing'
      ]
    },
    {
      id: 'philips-ultrasound',
      name: 'Philips Ultrasound System',
      icon: Activity,
      features: [
        'Sharp cardiac visualization for structural heart studies',
        'Precise vascular access during complex procedures',
        'Continuous monitoring while devices deploy',
        'Follow-up imaging at scheduled intervals'
      ]
    },
    {
      id: 'stryker-tower',
      name: 'Stryker Laparoscopic Tower',
      icon: Video,
      features: [
        'Ultra-clear imaging for exact device placement',
        'Built-in recording for training and validation',
        'Documentation from multiple angles for submissions',
        'Remote streaming for off-site monitoring'
      ]
    },
    {
      id: 'ge-vivid',
      name: 'GE Vivid E9',
      icon: Monitor,
      features: [
        'Doppler studies proving device performance',
        'Vessel analysis supporting biocompatibility studies',
        'Extended protocols showing long-term safety',
        'Quantitative data meeting regulatory requirements'
      ]
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`animate-in fade-in duration-500`}>
      {/* Hero Section - Matching components/Hero.tsx */}
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
            <span className={darkMode ? 'text-white' : 'text-[#0f172a]'}>Our Lab</span>
          </h1>

          <p className={`max-w-2xl mx-auto text-lg sm:text-xl font-medium leading-relaxed mb-8 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Synchrony Labs offers 3 OR's, advanced imaging, and fully equipped support spaces designed for high integrity preclinical research.
          </p>

          <div>
            <button className={`px-6 py-3 rounded-md font-bold text-base shadow-lg transition-all flex items-center gap-2 hover:translate-y-[-1px] ${
                 darkMode 
                 ? 'bg-[#335c81] hover:bg-[#284865] text-white shadow-blue-900/20' 
                 : 'bg-[#335c81] hover:bg-[#284865] text-white shadow-slate-400/20'
            }`}>
              Schedule Consultation
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Tools & Equipment Section */}
      <section className={`py-12 md:py-20 px-4 border-t ${darkMode ? 'bg-slate-950 border-slate-900' : 'bg-[#F1F5F9] border-slate-200'}`}>
        <div className="max-w-7xl mx-auto">
          
          {/* Controls - Positioned above carousel */}
          <div className="flex justify-end mb-4 px-1">
            <div className="flex gap-2">
              <button 
                onClick={() => scroll('left')}
                className={`p-3 rounded-full border transition-all ${
                  darkMode 
                    ? 'border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white' 
                    : 'border-slate-300 text-slate-600 hover:bg-white hover:border-slate-400'
                }`}
                aria-label="Scroll left"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className={`p-3 rounded-full border transition-all ${
                  darkMode 
                    ? 'border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white' 
                    : 'border-slate-300 text-slate-600 hover:bg-white hover:border-slate-400'
                }`}
                 aria-label="Scroll right"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Carousel Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide mb-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {equipment.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id} 
                  className={`min-w-[320px] md:min-w-[380px] max-w-[380px] snap-center rounded-xl overflow-hidden border flex flex-col shadow-lg transition-all duration-300 ${
                    darkMode 
                      ? 'bg-slate-900 border-slate-800 hover:border-slate-600' 
                      : 'bg-white border-slate-200 hover:shadow-xl'
                  }`}
                >
                  {/* Image Placeholder Area */}
                  <div className={`h-56 flex items-center justify-center border-b ${
                    darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-100 border-slate-200'
                  }`}>
                    <div className={`p-6 rounded-full ${
                      darkMode ? 'bg-slate-800 text-blue-400' : 'bg-white text-[#335c81] shadow-sm'
                    }`}>
                      <Icon size={64} strokeWidth={1} />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className={`text-xl font-bold mb-6 leading-tight ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {item.name}
                    </h3>

                    <ul className="space-y-4">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                             darkMode ? 'bg-blue-400' : 'bg-[#335c81]'
                          }`}></span>
                          <span className={`text-sm leading-relaxed ${
                            darkMode ? 'text-slate-400' : 'text-slate-600'
                          }`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Text Content - Centered Below Carousel */}
          <div className="max-w-4xl mx-auto text-center">
             <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              The Tools Behind the Science
            </h2>
            
            <div className={`space-y-6 text-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <p>
                Walk into our facility and you'll immediately notice something different. Our three dedicated operating rooms provide unmatched versatility for diverse study protocols. Two cath labs handle interventional procedures while our surgical suite manages complex operations. We can dedicate the optimal environment to your study without scheduling conflicts.
              </p>
              <p>
                Each room comes equipped with complete GLP compliance. They meet every FDA standard, with monitoring systems for cardiovascular, orthopedic, and neurosurgical procedures.
              </p>
              <p>
                Our room layouts and data collection systems were specifically designed for large models, device implantation, surgical training, and physician education. That helps insure no delays or downtime so you stay on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Standards CTA Section */}
      <section className={`py-20 px-4 border-t ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
        <div className="max-w-5xl mx-auto">
          {/* Bordered Content Box */}
          <div className={`border-2 p-8 md:p-12 rounded-lg mb-12 ${
            darkMode ? 'border-blue-500/50 bg-slate-900/30' : 'border-blue-400 bg-white'
          }`}>
            {/* Expertise List */}
            <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-[#335c81]'
            }`}>
              Expertise Matched to Your Device Type
            </h2>
            <ul className={`space-y-3 mb-12 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              <li className="flex gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                <span>
                  <strong>Cardiovascular Applications:</strong> Complete evaluation from initial deployment through extended follow-up
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                <span>
                  <strong>Orthopedic Solutions:</strong> Imaging protocols supporting integration studies, stability assessment, and biocompatibility evaluation
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                <span>
                  <strong>Neurological Devices:</strong> Monitoring designed specifically for CNS safety and performance evaluation
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                <span>
                  <strong>Regenerative Medicine:</strong> Healing protocols for wound care and dermatology applications
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                <span>
                  <strong>Combination Products:</strong> Analysis capabilities for complex drug-device combinations
                </span>
              </li>
            </ul>

            {/* Standards Section */}
            <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-[#335c81]'
            }`}>
              Standards You Can Count On
            </h2>
            <p className={`mb-8 leading-relaxed text-lg ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              AAALAC International accreditation represents our commitment to ethical animal care. GLP compliance under 21 CFR Part 58 ensures every study meets regulatory expectations. Our quality assurance programs protect data integrity throughout your development process.
            </p>

            {/* Disclaimer */}
            <p className={`text-sm italic ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
              This information serves educational purposes and doesn't constitute medical, regulatory, or legal advice. Requirements vary by device classification, intended use, and jurisdiction. Consult qualified regulatory professionals for device-specific guidance.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className={`px-8 py-3 rounded-md font-bold text-white shadow-lg transition-all w-full sm:w-auto hover:translate-y-[-2px] ${
              darkMode ? 'bg-[#335c81] hover:bg-[#284865] shadow-blue-900/20' : 'bg-[#335c81] hover:bg-[#284865] shadow-slate-400/20'
            }`}>
              Schedule Consultation
            </button>
            <button 
              onClick={() => onNavigate('home')}
              className={`px-8 py-3 rounded-md font-bold border-2 transition-all w-full sm:w-auto ${
              darkMode 
                ? 'border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-600' 
                : 'border-slate-300 text-slate-700 hover:bg-white hover:text-[#335c81] hover:border-[#335c81]'
            }`}>
              Explore Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacilityPage;
