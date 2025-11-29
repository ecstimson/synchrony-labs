import React, { useRef, useEffect, useState } from 'react';
import { HeartPulse, Pill, Bot, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Cardiovascular Devices',
    description: 'From TAVR valves and structural heart interventions to peripheral stents and novel combination therapies. Our GLP-compliant protocols are designed to accelerate your path.',
    icon: HeartPulse,
    color: 'text-red',
    cta: 'Cardiovascular Testing'
  },
  {
    title: 'Drug-Device Combinations',
    description: 'Specialized evaluation of drug-coated balloons, drug-eluting stents, and novel combination therapies. Pharmacokinetic analysis and tissue distribution studies.',
    icon: Pill,
    color: 'text-teal',
    cta: 'Drug-Device Testing'
  },
  {
    title: 'Surgical Robotics',
    description: 'Advanced testing capabilities for robotic surgical systems, endoscopic devices, and next-generation surgical technologies. Replicating real clinical settings.',
    icon: Bot,
    color: 'text-steel',
    cta: 'Surgical Device Testing'
  }
];

export const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-24 relative bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
          <h2 className="text-3xl font-bold text-navy dark:text-white sm:text-4xl transition-colors duration-500">Core Study Areas</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-500">Decades of expertise across the full spectrum of medical device innovation.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
                key={index} 
                className={`group glass-card rounded-xl p-8 transition-all duration-700 reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-navy/5 dark:bg-white/5 border border-navy/10 dark:border-white/10 ${service.color} transition-transform duration-500 group-hover:scale-110 shadow-lg`}>
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-navy dark:text-white tracking-wide transition-colors duration-500">{service.title}</h3>
              <p className="mb-8 flex-grow text-gray-600 dark:text-gray-400 leading-relaxed text-sm transition-colors duration-500">
                {service.description}
              </p>
              <div className="flex items-center text-sm font-medium text-navy dark:text-white group-hover:text-teal dark:group-hover:text-teal-bright transition-colors cursor-pointer">
                {service.cta} <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-16 text-center reveal-hidden ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '600ms' }}>
            <button className="text-gray-500 dark:text-gray-400 hover:text-navy dark:hover:text-white transition-colors border-b border-navy/20 dark:border-white/20 hover:border-navy dark:hover:border-white pb-0.5 text-sm font-medium tracking-wide">
                View All Study Types
            </button>
        </div>
      </div>
    </section>
  );
};