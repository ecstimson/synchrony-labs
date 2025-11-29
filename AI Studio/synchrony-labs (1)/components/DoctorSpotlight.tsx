import React, { useRef, useEffect, useState } from 'react';
import { Play } from 'lucide-react';

export const DoctorSpotlight: React.FC = () => {
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
    <section ref={sectionRef} className="py-24 bg-transparent relative border-t border-navy/5 dark:border-white/5 transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className={`mb-12 text-center md:text-left reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
          <h2 className="text-3xl font-bold text-navy dark:text-white sm:text-4xl mb-4 transition-colors duration-500">Meet Dr. Hubbard, DVM</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl transition-colors duration-500">
            Our team is composed of seasoned veterinarians, physicians, interventional specialists, data scientists, and research professionals. They drive innovative preclinical trials by synchronizing our expertise, passion, and commitment.
          </p>
        </div>

        <div className={`relative aspect-video w-full overflow-hidden rounded-2xl glass-card transition-all duration-300 group cursor-pointer reveal-hidden ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '300ms' }}>
          {/* Video Placeholder Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 bg-gray-200/50 dark:bg-navy-dark/40 group-hover:bg-gray-200/30 dark:group-hover:bg-navy-dark/20">
             {/* Logo Watermark */}
            <div className="flex flex-col items-center opacity-10 scale-125 grayscale group-hover:grayscale-0 transition-all duration-700">
                 <div className="flex items-center gap-3">
                    <svg width="60" height="72" viewBox="0 0 40 48" fill="none" className="shrink-0">
                        <path d="M20 48C20 48 40 40 40 12V4L20 0L0 4V12C0 40 20 48 20 48Z" fill="#4682B4"/>
                        <path d="M20 44C20 44 36 37 36 14V6L20 2L4 6V14C4 37 20 44 20 44Z" fill="white"/>
                        <path d="M20 44C20 44 4 37 4 14V6L20 2V44Z" fill="#4682B4"/>
                        <path d="M20 2V44C20 44 36 37 36 14V6L20 2Z" fill="#CF0000"/>
                    </svg>
                 </div>
            </div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:scale-110 group-hover:bg-teal group-hover:border-teal group-hover:shadow-[0_0_50px_rgba(70,130,180,0.6)]">
                <Play className="h-8 w-8 text-navy dark:text-white ml-1 fill-navy dark:fill-white group-hover:text-white group-hover:fill-white transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};