import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center space-x-2 mb-6">
                <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-900 to-red-600 rounded-b-full rounded-tr-full shadow-lg text-white">
                   <ShieldCheck size={24} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-bold text-lg tracking-wide uppercase">Synchrony</span>
                  <span className="font-bold text-lg tracking-wide uppercase">Labs</span>
                </div>
             </div>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Mission</h3>
            <p className="text-slate-400 mb-8 max-w-lg">
              "Empowering Medical Innovation, Enhancing Human Lives"
            </p>
            <h3 className="text-xl font-bold mb-4">Vision</h3>
            <p className="text-slate-400 max-w-lg">
              Driving innovative pre-clinical trials by synchronizing our expertise, passion and commitment to create a brighter future for patients and healthcare professionals worldwide.
            </p>
          </div>

          <div className="col-span-1">
            <div className="flex flex-col space-y-4 text-right md:text-right text-left">
               <a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a>
               <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; 2025 Synchrony Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;