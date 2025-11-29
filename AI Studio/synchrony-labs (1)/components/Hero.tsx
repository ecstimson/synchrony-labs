import React, { useEffect, useState } from 'react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Small delay to ensure smooth entry after page load
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Note: Background is now global in App.tsx for the parallax effect */}

      {/* ECG Line Animation Container */}
      <div className={`absolute top-[45%] left-0 w-full -translate-y-1/2 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-32 md:h-48 opacity-80"
        >
          {/* Defs for gradients */}
          <defs>
            <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4682B4" stopOpacity="0" /> 
              <stop offset="20%" stopColor="#4682B4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
            
            {/* The Path Definition */}
            <path id="heartbeat-path"
              d="M0,60 L200,60 L230,60 L240,40 L250,80 L260,20 L275,100 L290,60 L350,60 L380,60 L390,45 L400,75 L410,60 L600,60 L630,60 L640,30 L650,90 L665,60 L800,60 L830,60 L840,40 L850,80 L860,20 L875,100 L890,60 L1200,60"
            />
          </defs>

          {/* Static Background Line (Very Faint) */}
          <use href="#heartbeat-path"
            fill="none"
            stroke="#1e293b" // Dark gray-blue, visible on white and black
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            className="opacity-30 dark:opacity-100"
          />

          {/* Animated Trail Line ONLY - No leading ball */}
          <use href="#heartbeat-path"
            fill="none"
            stroke="url(#line-gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-ecg-draw"
            style={{
              strokeDasharray: '1200',
              filter: 'url(#glow)'
            }}
            vectorEffect="non-scaling-stroke"
          />

        </svg>
      </div>

      <div className={`container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 transition-all duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="mx-auto max-w-5xl text-5xl font-bold tracking-tight text-navy dark:text-white sm:text-6xl lg:text-7xl mb-8 leading-tight drop-shadow-lg dark:drop-shadow-2xl transition-colors duration-500">
          <span className="block">Specialized Cardiovascular</span>
          <span className="block text-teal mt-2">Preclinical Research</span>
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed font-light transition-colors duration-500">
          Four decades of GLP expertise advancing structural heart, neurovascular, and peripheral vascular innovation.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" className="w-full sm:w-auto">
            Schedule Consultation
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Explore Capabilities
          </Button>
        </div>
      </div>
    </section>
  );
};