import React, { useRef, useEffect, useState } from 'react';
import { Button } from './ui/Button';

export const CallToAction: React.FC = () => {
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
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-transparent">
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-t from-teal/10 via-transparent to-transparent pointer-events-none transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
            <h2 className="text-4xl font-bold text-navy dark:text-white sm:text-5xl mb-6 transition-colors duration-500">Start Your Study</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400 mb-10 transition-colors duration-500">
            Get expert guidance on your cardiovascular device study from the team with decades of specialized testing experience.
            </p>
        </div>
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 reveal-hidden ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '300ms' }}>
          <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-lg shadow-teal/20">
            Schedule Your Consultation
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};