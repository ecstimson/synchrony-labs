import React from 'react';
import { Logo } from './ui/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy py-16 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
          
          <div className="flex-shrink-0">
            <Logo theme="dark" className="scale-110 origin-top-left" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
            <div>
              <h4 className="font-bold text-lg mb-2">Mission:</h4>
              <p className="text-gray-300 leading-relaxed">
                "Empowering Medical Innovation, Enhancing Human Lives"
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Vision:</h4>
              <p className="text-gray-300 leading-relaxed">
                "Driving innovative pre-clinical trials by synchronizing our expertise, passion and commitment to create a brighter future for patients and healthcare professionals worldwide"
              </p>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
          <div className="flex space-x-6 mb-4 sm:mb-0">
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
          <div className="text-right">
            <p>© 2025 Synchrony Labs</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};