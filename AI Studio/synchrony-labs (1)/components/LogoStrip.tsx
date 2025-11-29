import React from 'react';

export const LogoStrip: React.FC = () => {
  return (
    <section className="py-12 border-y border-navy/5 dark:border-white/5 bg-navy/5 dark:bg-white/[0.02] backdrop-blur-sm relative z-10 transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 items-center justify-items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
             {/* Simulating the logos with text that adapts to theme */}
            <div className="font-bold text-2xl text-navy dark:text-white tracking-tighter hover:text-teal transition-colors cursor-default">NIH</div>
            <div className="font-serif text-2xl text-navy dark:text-white italic font-bold hover:text-teal transition-colors cursor-default">USDA</div>
            <div className="font-sans text-2xl text-navy dark:text-white font-bold lowercase hover:text-teal transition-colors cursor-default">nabr</div>
            <div className="font-mono text-xl text-navy dark:text-white border-2 border-navy dark:border-white p-1 rounded hover:text-teal hover:border-teal transition-colors cursor-default">AAALAC</div>
        </div>
      </div>
    </section>
  );
};