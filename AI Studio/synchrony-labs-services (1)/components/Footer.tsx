import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Logo & Mission */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <div className="flex items-center gap-3 mb-8">
                <div className="relative w-12 h-14 flex items-center justify-center">
                   <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
                     <path d="M12 2L3 7V12C3 17.5228 12 22 12 22C12 22 21 17.5228 21 12V7L12 2Z" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2"/>
                     <path d="M12 2L3 7V12C3 17.5228 12 22 12 22" fill="#2563EB" stroke="none"/>
                     <path d="M12 2L21 7V12C21 17.5228 12 22 12 22" fill="#DC2626" stroke="none"/>
                     <path d="M2 12H7L9 9L13 15L16 11L18 12H22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-90"/>
                   </svg>
                </div>
             </div>
             
             <div className="space-y-6 max-w-md">
                 <p className="text-lg leading-relaxed text-gray-300">
                    <span className="font-bold text-white">Mission:</span> "Empowering Medical Innovation, Enhancing Human Lives"
                 </p>
                 <p className="text-lg leading-relaxed text-gray-300">
                    <span className="font-bold text-white">Vision:</span> Driving innovative pre-clinical trials by synchronizing our expertise, passion and commitment to create a brighter future for patients and healthcare professionals worldwide.
                 </p>
             </div>
          </div>

          {/* Links & Copyright */}
          <div className="flex flex-col items-center md:items-end justify-between h-full space-y-12">
            <div className="flex space-x-8 text-sm font-medium text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Contact</a>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
            
            <div className="text-xs text-gray-500 text-center md:text-right">
                <p>&copy; 2025 Synchrony Labs</p>
                <p>All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;