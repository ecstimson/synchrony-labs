import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// --- Data Definitions ---

const subpages = [
  { 
    title: 'Heart Failure Testing', 
    description: 'Mechanical circulatory support validation including LVAD pump performance, hemocompatibility, and durability testing with infection resistance protocols.', 
    href: '/services/cardiovascular/heart-failure' 
  },
  { 
    title: 'Heart Valve Testing', 
    description: 'TAVR, TMVR, and transcatheter valve evaluation with deployment mechanics, hydrodynamic performance, and durability assessment.', 
    href: '/services/cardiovascular/heart-valve' 
  },
  { 
    title: 'Structural Heart Testing', 
    description: 'Comprehensive evaluation of septal occluders, LAA closure devices, and other structural interventions with specialized anatomical models.', 
    href: '/services/cardiovascular/structural-heart' 
  },
  { 
    title: 'Arrhythmia Device Testing', 
    description: 'Pacemaker and ICD device validation with electrical performance testing and lead system biocompatibility protocols.', 
    href: '/services/cardiovascular/arrhythmia' 
  },
  { 
    title: 'Coronary Stent Testing', 
    description: 'Drug-eluting stent evaluation including drug release kinetics, polymer biocompatibility, and vascular healing assessment.', 
    href: '/services/cardiovascular/coronary-stent' 
  },
  {
    title: 'Electrophysiology Studies',
    description: 'Advanced mapping and ablation catheter testing utilizing high-fidelity cardiac modeling and real-time signal analysis.',
    href: '/services/cardiovascular/electrophysiology'
  }
];

const featuredServices = [
  {
    title: 'Heart Valve Testing',
    content: 'Transcatheter heart valves need to prove they can deploy accurately, function properly, and seal completely under real-world conditions. We test valve performance against ISO 5840 standards, run durability cycles exceeding 400 million beats, and validate anatomical fit across TAVR, TMVR, and tricuspid platforms. Our imaging capabilities, including TEE and high-resolution fluoroscopy, let us track valve positioning, leaflet movement, and any regurgitation throughout the entire study.',
    image: 'https://placehold.co/800x600/e2e8f0/475569?text=Heart+Valve+Testing',
    link: '/services/cardiovascular/heart-valve'
  },
  {
    title: 'Structural Heart Testing',
    content: 'Our structural heart testing program covers a wide range of devices including LAA occluders, PFO/ASD closure devices, and septal repair technologies. We utilize advanced imaging modalities to assess device deployment, anchoring stability, and tissue interaction. Our chronic models allow for long-term evaluation of endothelialization and healing responses, critical for regulatory submissions.',
    image: 'https://placehold.co/800x600/e2e8f0/475569?text=Structural+Heart+Testing',
    link: '/services/cardiovascular/structural-heart'
  },
  {
    title: 'Coronary Stent Testing',
    content: 'We provide comprehensive evaluation of coronary stents, including BMS, DES, and bioresorbable scaffolds. Our protocols assess deliverability, expansion characteristics, and long-term vascular response. Advanced histopathology and histomorphometry services provide detailed analysis of neointimal hyperplasia, inflammation, and endothelial coverage.',
    image: 'https://placehold.co/800x600/e2e8f0/475569?text=Coronary+Stent+Testing',
    link: '/services/cardiovascular/coronary-stent'
  }
];

const whyChooseData = [
  {
    title: 'Dual Catheterization Laboratories',
    description: 'Two fully-equipped cath labs with high-resolution fluoroscopy, digital subtraction angiography, IVUS integration, and hemodynamic monitoring systems.'
  },
  {
    title: 'Cardiovascular Specialists',
    description: 'Our team includes board-certified interventional cardiologists, veterinary pathologists, and regulatory experts ensuring precision in study design and execution.'
  },
  {
    title: 'Proven Regulatory Success',
    description: 'Over four decades of exclusive cardiovascular device testing has produced hundreds of successful FDA submissions and approved devices.'
  }
];

const relatedServices = [
  {
    title: 'Neurovascular Testing',
    description: 'Neurovascular devices require specialized testing protocols addressing unique anatomical challenges and biomechanical considerations in cerebrovascular applications.',
    linkText: 'Explore Neurovascular Testing'
  },
  {
    title: 'Peripheral Vascular Testing',
    description: 'Peripheral vascular intervention devices used outside coronary applications require specialized testing addressing unique biomechanical stresses and anatomical considerations.',
    linkText: 'Explore Peripheral Testing'
  },
  {
    title: 'Drug-Coated Balloon Testing',
    description: 'Cardiovascular devices incorporating drug-coating technologies require specialized combination product testing addressing both device performance and pharmaceutical aspects.',
    linkText: 'Explore DCB Testing'
  }
];

const ServiceHub: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-slate-950 font-sans">
      
      {/* 1. Hero Section */}
      <section className="bg-[#f0f5fa] dark:bg-slate-900 pt-28 pb-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] dark:text-white mb-6 tracking-tight">
            Cardiovascular Disease Testing
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Complete cardiovascular testing solutions for every device category and therapeutic application.
          </p>
        </div>
      </section>

      {/* 2. Breadcrumbs Section */}
      <section className="bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide overflow-x-auto whitespace-nowrap no-scrollbar">
            <Link to="/" className="hover:text-[#1a365d] dark:hover:text-white transition-colors">Home</Link>
            <span className="mx-2 text-slate-300 dark:text-slate-600">&gt;</span>
            <span className="hover:text-[#1a365d] dark:hover:text-white cursor-pointer transition-colors">Preclinical Services</span>
            <span className="mx-2 text-slate-300 dark:text-slate-600">&gt;</span>
            <span className="text-[#1a365d] dark:text-white">Cardiovascular Disease Testing</span>
          </div>
        </div>
      </section>

      {/* 3. Subpages (Portfolio) Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1a365d] dark:text-white mb-6">
              Complete Cardiovascular Testing Portfolio
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Select your specific testing need below, or scroll down to learn more about our cardiovascular testing approach and specialized capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subpages.map((item, idx) => (
              <Link key={idx} to={item.href} className="block h-full">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] border border-slate-100 dark:border-slate-800 transition-all duration-300 flex flex-col group h-full">
                  <h3 className="text-xl font-bold text-[#1a365d] dark:text-white mb-4 group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                    {item.description}
                  </p>
                  <div className="inline-flex items-center text-sm font-bold text-[#38b2ac] hover:text-[#2c7a7b] transition-colors mt-auto uppercase tracking-wide">
                     <ArrowRight size={16} className="mr-2" /> {item.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Services Section */}
      <section className="py-24 bg-[#f8fafc] dark:bg-slate-900/50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
            <h2 className="text-3xl font-bold text-[#1a365d] dark:text-white">Featured Cardiovascular Testing Services</h2>
         </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {featuredServices.map((service, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a365d] dark:text-white">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  {service.content}
                </p>
                <div className="pt-4">
                  <Link to={service.link}>
                    <button className="px-8 py-3 rounded border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-bold hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all bg-transparent uppercase text-sm tracking-wide">
                      Learn More About {service.title}
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-slate-200 dark:bg-slate-800 aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                   {/* Placeholder for images */}
                   <img 
                     src={service.image} 
                     alt={service.title}
                     className="w-full h-full object-cover"
                   />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Why Choose Synchrony Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1a365d] dark:text-white mb-6">
              Why Choose Synchrony for Cardiovascular Testing
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Select your specific testing need below, or scroll down to learn more about our cardiovascular testing approach and specialized capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseData.map((item, idx) => (
              <div key={idx} className="p-10 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all text-center h-full flex flex-col justify-center items-center">
                 <h3 className="text-xl font-bold text-[#1a365d] dark:text-sky-400 mb-6 px-2">
                   {item.title}
                 </h3>
                 <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                   {item.description}
                 </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-24 bg-[#f0f5fa] dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] dark:text-white mb-6">
            Ready to Start Your Cardiovascular Testing Program?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Our cardiovascular testing experts are ready to discuss your device, regulatory pathway, and study requirements to optimize your path to FDA approval.
          </p>
          <button className="bg-[#3182ce] hover:bg-[#2c5282] text-white font-bold py-4 px-10 rounded shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-wide text-sm">
             Schedule Consultation
          </button>
        </div>
      </section>

      {/* 7. Related Services Section */}
      <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1a365d] dark:text-white mb-6">
              Related Testing Services
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
               Select your specific testing need below, or scroll down to learn more about our cardiovascular testing approach and specialized capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {relatedServices.map((service, idx) => (
               <div key={idx} className="p-8 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
                  <h3 className="text-xl font-bold text-[#1a365d] dark:text-slate-200 mb-4">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <a href="#" className="flex items-center text-sm font-bold text-[#38b2ac] hover:text-[#2c7a7b] mt-auto uppercase tracking-wide">
                    <ArrowRight size={16} className="mr-2" /> {service.linkText}
                  </a>
               </div>
             ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceHub;