
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ServiceArea } from '../types';

interface ServiceCardProps {
  service: ServiceArea;
  darkMode: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, darkMode }) => {
  const Icon = service.icon;

  return (
    <div className={`group relative p-8 rounded-xl border transition-all duration-300 h-full flex flex-col ${
      darkMode 
        ? 'bg-slate-900/50 border-slate-800 hover:border-slate-600 hover:bg-slate-800/80' 
        : 'bg-white border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200'
    }`}>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors ${
        darkMode 
          ? 'bg-slate-800 border border-slate-700 group-hover:border-slate-600' 
          : 'bg-slate-50 border border-gray-100'
      }`}>
        <Icon size={24} className={service.iconColor} strokeWidth={1.5} />
      </div>

      <h3 className={`text-xl font-bold mb-3 ${
        darkMode ? 'text-white' : 'text-slate-900'
      }`}>
        {service.title.replace(' Testing', '')}
      </h3>

      <p className={`text-sm leading-relaxed mb-8 flex-grow ${
        darkMode ? 'text-slate-400' : 'text-slate-600'
      }`}>
        {service.description.length > 120 
          ? service.description.substring(0, 120) + '...' 
          : service.description}
      </p>

      <div className={`flex items-center text-sm font-semibold mt-auto ${
        darkMode ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-600'
      } transition-colors`}>
        {service.title.split(' ')[0]} Testing
        <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};

export default ServiceCard;
