
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ServiceArea } from '../types';

interface ServiceSectionProps {
  service: ServiceArea;
  index: number; // To determine background color alternation
  darkMode: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ service, index, darkMode }) => {
  const Icon = service.icon;
  // Alternate backgrounds: Even = White/Dark, Odd = Light Gray/Darker
  const isEven = index % 2 === 0;

  const lightBg = isEven ? 'bg-white' : 'bg-[#F8FAFC]'; // slate-50
  const darkBg = isEven ? 'bg-slate-950' : 'bg-slate-900';

  return (
    <div className={`py-20 md:py-28 ${darkMode ? darkBg : lightBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Icon + Title + Description */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-6 mb-8">
                <div className={`p-4 rounded-2xl shadow-sm border ${
                    darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'
                }`}>
                    <Icon size={40} strokeWidth={1.5} className={service.iconColor} />
                </div>
                <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {service.title}
                </h2>
            </div>
            
            <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {service.description}
            </p>

            {service.linkOnly && (
                 <a href="#" className="inline-flex items-center text-teal-600 font-bold hover:text-teal-500 transition-colors group text-lg">
                 View All {service.title.replace('Testing', '')} Services 
                 <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
               </a>
            )}
          </div>

          {/* Right Column: Featured Services List */}
          {service.featuredServices && (
            <div className="lg:col-span-5 pt-4">
              <h3 className={`text-xs font-bold uppercase tracking-widest mb-8 ${darkMode ? 'text-slate-400' : 'text-slate-900'}`}>
                Featured Services:
              </h3>
              <ul className="space-y-5 mb-10">
                {service.featuredServices.map((item, idx) => (
                  <li key={idx} className="group">
                    <a href={item.link || '#'} className={`flex items-center text-lg transition-colors ${
                        darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'
                    }`}>
                      <span className="w-2 h-2 rounded-full bg-blue-400 mr-4 mt-1.5 flex-shrink-0"></span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              <a href="#" className="inline-flex items-center text-teal-600 font-bold hover:text-teal-500 transition-colors group">
                View All {service.title.split(' ')[0]} Services 
                <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
