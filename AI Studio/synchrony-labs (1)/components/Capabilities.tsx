import React, { useRef, useEffect, useState } from 'react';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';

const features = [
  "AAALAC-accredited GLP facility with continuous oversight",
  "Advanced imaging suites with fluoroscopy & CT capabilities",
  "Multiple operating rooms for cardiovascular procedures",
  "Dedicated veterinary staff ensuring optimal care",
  "Climate-controlled housing with 24/7 monitoring",
  "Ethical research practices aligned with IACUC guidelines"
];

export const Capabilities: React.FC = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="facility" className="py-24 relative overflow-hidden bg-transparent border-t border-navy/5 dark:border-white/5 transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Text Content */}
          <div className={`flex-1 order-2 lg:order-1 reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
            <h2 className="text-3xl font-bold text-navy dark:text-white sm:text-4xl mb-8 leading-tight transition-colors duration-500">
              Experienced Team, <br/><span className="text-teal">Complete Capabilities</span>
            </h2>
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 group" style={{ transitionDelay: `${idx * 100}ms` }}>
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center group-hover:bg-teal group-hover:border-teal transition-all duration-300">
                        <Check className="h-3 w-3 text-teal group-hover:text-white" />
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light transition-colors duration-500">{feature}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button variant="outline">View Our Facility</Button>
            </div>
          </div>

          {/* Image */}
          <div className={`flex-1 w-full order-1 lg:order-2 reveal-hidden ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '300ms' }}>
            <div className="relative overflow-hidden rounded-2xl glass-card p-2 shadow-2xl">
              <div className="bg-gray-100 dark:bg-navy-dark/50 rounded-xl overflow-hidden aspect-[4/3] relative flex items-center justify-center border border-navy/5 dark:border-white/5 group transition-colors duration-500">
                  {/* Internal Grid Effect */}
                  <div className="absolute inset-0 bg-grid-slate opacity-10 dark:opacity-20 group-hover:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-700"></div>
                  
                  <div className="text-center relative z-10">
                    <div className="mx-auto w-16 h-16 rounded-full bg-white dark:bg-white/5 flex items-center justify-center mb-4 border border-navy/10 dark:border-white/10 group-hover:scale-110 group-hover:bg-teal/20 group-hover:border-teal/50 transition-all duration-500 shadow-sm">
                        <svg className="w-8 h-8 text-gray-400 group-hover:text-navy dark:group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <span className="text-sm text-gray-500 font-medium group-hover:text-navy dark:group-hover:text-gray-300 transition-colors">Facility Image Placeholder</span>
                  </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};