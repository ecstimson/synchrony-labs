
import React from 'react';
import Hero from './Hero';
import ServiceCard from './ServiceCard';
import ServiceSection from './ServiceSection';
import { ServiceArea } from '../types';
import { Activity, Brain, Share2, Bot, Syringe, ClipboardCheck, ArrowRight } from 'lucide-react';

interface HomePageProps {
  darkMode: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ darkMode }) => {
  // Data for the service sections
  const services: ServiceArea[] = [
    {
      id: 'cardio',
      title: 'Cardiovascular Disease Testing',
      description: 'Your cardiovascular device faces unique hemodynamic forces and vascular interactions that generic testing cannot adequately evaluate. Synchrony Labs delivers comprehensive cardiac device validation across coronary, structural heart, and electrophysiology applications.',
      icon: Activity,
      iconColor: 'text-red-500',
      featuredServices: [
        { name: 'Heart Failure Testing' },
        { name: 'Heart Valve Testing' },
        { name: 'Structural Heart Testing' },
        { name: 'Arrhythmia Device Testing' },
        { name: 'Coronary Stent Testing' },
      ],
      hasBackground: false,
    },
    {
      id: 'neuro',
      title: 'Neurovascular Testing',
      description: 'Neurovascular devices demand specialized validation addressing tortuous cerebral anatomy, delicate vessel walls, and complex navigation requirements.',
      icon: Brain,
      iconColor: 'text-blue-500',
      featuredServices: [
        { name: 'Liquid Embolic Testing' },
        { name: 'Thrombectomy Testing' },
        { name: 'Aspiration Thrombectomy' },
      ],
      hasBackground: true,
    },
     {
      id: 'peripheral',
      title: 'Peripheral Vascular Testing',
      description: 'Peripheral intervention devices face unique biomechanical stresses from vessel compression, flexion points, and chronic loading conditions.',
      icon: Share2, 
      iconColor: 'text-red-500',
      featuredServices: [
        { name: 'Carotid Stent Testing' },
        { name: 'AAA Device Testing' },
        { name: 'IVC Filter Testing' },
        { name: 'Embolic Protection Devices' },
      ],
      hasBackground: false,
    },
    {
      id: 'robotics',
      title: 'Surgical Robotics Testing',
      description: 'Your surgical robotics platform requires validation protocols addressing teleoperation accuracy, force feedback calibration, and tremor filtration effectiveness.',
      icon: Bot,
      iconColor: 'text-sky-500',
      featuredServices: [
        { name: 'Endoscopic Device Testing' },
        { name: 'Laparoscopic Testing' },
      ],
      hasBackground: true,
    },
    {
      id: 'dcb',
      title: 'Drug-Device Combinations',
      description: 'Synchrony Labs specializes in comprehensive DCB evaluation addressing combination drug-device challenges, from coating uniformity to tissue uptake quantification.',
      icon: Syringe,
      iconColor: 'text-blue-400',
      linkOnly: true,
      hasBackground: false,
    },
    {
      id: 'device',
      title: 'Medical Device Testing',
      description: 'FDA submissions require rigorous GLP-compliant documentation and comprehensive biocompatibility assessment.',
      icon: ClipboardCheck,
      iconColor: 'text-blue-600',
      featuredServices: [
        { name: 'GLP Testing Laboratory' },
        { name: 'Biocompatibility Testing' },
        { name: 'FDA Regulatory Testing' },
      ],
      hasBackground: true,
    },
  ];

  return (
    <>
      <Hero darkMode={darkMode} />

      {/* Core Study Areas - Cards Grid Section */}
      <section className={`relative py-12 px-4 border-b ${darkMode ? 'bg-slate-950 border-slate-900' : 'bg-[#F1F5F9] border-slate-200'}`}>
         {/* Grid Background Effect */}
         {darkMode && (
           <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
         )}
         
         <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Core Study Areas
              </h2>
              <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Decades of expertise across the full spectrum of medical device innovation.
              </p>
            </div>

            {/* Grid of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(0, 3).map((service) => (
                <ServiceCard key={service.id} service={service} darkMode={darkMode} />
              ))}
              {services.slice(3).map((service) => (
                 <ServiceCard key={service.id} service={service} darkMode={darkMode} />
              ))}
            </div>
            
            <div className="mt-12 text-center pb-4">
               <button className={`inline-flex items-center text-sm font-semibold border-b border-transparent hover:border-current transition-all ${
                   darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-800'
               }`}>
                   View All Study Types
               </button>
            </div>
         </div>
      </section>

      {/* Detailed Services Lists */}
      <section>
          {services.map((service, index) => (
             <ServiceSection 
               key={service.id} 
               service={service} 
               index={index} 
               darkMode={darkMode} 
             />
          ))}
      </section>

      {/* Start Your Study CTA */}
      <section className={`py-24 ${darkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
         <div className="max-w-5xl mx-auto px-4 text-center">
           <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Start Your Study</h2>
           <p className={`text-xl mb-12 max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
             Get expert guidance on your study design from the team with decades of specialized testing experience.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className={`px-8 py-4 rounded-md font-bold shadow-lg transition-all flex items-center justify-center gap-2 hover:translate-y-[-2px] ${
                darkMode ? 'bg-[#335c81] hover:bg-[#284865] text-white' : 'bg-[#335c81] hover:bg-[#284865] text-white'
              }`}>
                Schedule Your Pre-Study Consultation
                <ArrowRight size={18} />
              </button>
              <button className={`px-8 py-4 rounded-md border-2 font-bold transition-all ${
                darkMode ? 'border-slate-700 text-gray-300 hover:border-slate-500 hover:bg-slate-800' : 'border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-white'
              }`}>
                Explore Our Facility
              </button>
           </div>
         </div>
      </section>
    </>
  );
};

export default HomePage;
