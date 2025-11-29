import React from 'react';

export const Logo: React.FC<{ className?: string; theme?: 'light' | 'dark' }> = ({ className = '', theme = 'light' }) => {
  const textColor = theme === 'dark' ? 'text-white' : 'text-navy';
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="40" height="48" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <path d="M20 48C20 48 40 40 40 12V4L20 0L0 4V12C0 40 20 48 20 48Z" fill="#032235"/>
        <path d="M20 44C20 44 36 37 36 14V6L20 2L4 6V14C4 37 20 44 20 44Z" fill="white"/>
        <path d="M20 44C20 44 4 37 4 14V6L20 2V44Z" fill="#4682B4"/> {/* Changed from #55B9BE to #4682B4 (Steel Blue) */}
        <path d="M20 2V44C20 44 36 37 36 14V6L20 2Z" fill="#CF0000"/>
        <path d="M4 25H12L15 15L18 35L22 25H36" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div className={`flex flex-col font-bold uppercase leading-none tracking-wide ${textColor}`}>
        <span className="text-xl">Synchrony</span>
        <span className="text-xl">Labs</span>
      </div>
    </div>
  );
};