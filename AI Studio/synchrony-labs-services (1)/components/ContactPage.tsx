
import React from 'react';
import { ArrowRight, CheckSquare } from 'lucide-react';

interface ContactPageProps {
  darkMode: boolean;
}

const ContactPage: React.FC<ContactPageProps> = ({ darkMode }) => {
  return (
    <div className={`animate-in fade-in duration-500`}>
      {/* Contact Hero Section - Matching Hero.tsx style */}
      <section className={`relative pt-32 pb-12 md:pt-40 md:pb-16 flex flex-col items-center justify-center overflow-hidden ${
        darkMode ? 'bg-slate-950' : 'bg-[#F1F5F9]'
      }`}>
        {/* Background Glow Effect */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none ${
            darkMode ? 'opacity-30' : 'opacity-0'
        }`}>
           <div className="absolute top-[-10%] left-[20%] w-[60%] h-[50%] rounded-full bg-blue-900/40 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center leading-[1.1] mb-6">
            <span className={darkMode ? 'text-white' : 'text-[#0f172a]'}>Contact Us</span>
          </h1>

          <p className={`max-w-2xl mx-auto text-lg sm:text-xl font-medium leading-relaxed mb-8 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Partner with Synchrony Labs for expert preclinical support and turn your medical device concepts into reality.
          </p>

          <div className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-lg font-medium ${
            darkMode ? 'text-white' : 'text-slate-800'
          }`}>
            <div className="flex items-center gap-2">
                <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Phone:</span>
                <span>919-541-9977 ext. 105</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            <div className="flex items-center gap-2">
                <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Email:</span>
                <span className="hover:text-blue-500 transition-colors cursor-pointer">sales@synchronylabs.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={`py-16 px-4 border-t ${darkMode ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-200'}`}>
        <div className="max-w-4xl mx-auto">
          <form className="space-y-8">
            
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className={`block text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                className={`w-full px-4 py-3 rounded-md border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                  darkMode 
                    ? 'bg-slate-900 border-slate-800 text-white focus:border-blue-500' 
                    : 'bg-gray-100 border-gray-200 text-slate-900 focus:bg-white focus:border-blue-500'
                }`}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className={`block text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                className={`w-full px-4 py-3 rounded-md border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                  darkMode 
                    ? 'bg-slate-900 border-slate-800 text-white focus:border-blue-500' 
                    : 'bg-gray-100 border-gray-200 text-slate-900 focus:bg-white focus:border-blue-500'
                }`}
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label htmlFor="phone" className={`block text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Phone
              </label>
              <input 
                type="tel" 
                id="phone" 
                className={`w-full px-4 py-3 rounded-md border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                  darkMode 
                    ? 'bg-slate-900 border-slate-800 text-white focus:border-blue-500' 
                    : 'bg-gray-100 border-gray-200 text-slate-900 focus:bg-white focus:border-blue-500'
                }`}
              />
            </div>

            {/* Company */}
            <div className="space-y-2">
              <label htmlFor="company" className={`block text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Company
              </label>
              <input 
                type="text" 
                id="company" 
                className={`w-full px-4 py-3 rounded-md border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                  darkMode 
                    ? 'bg-slate-900 border-slate-800 text-white focus:border-blue-500' 
                    : 'bg-gray-100 border-gray-200 text-slate-900 focus:bg-white focus:border-blue-500'
                }`}
              />
            </div>

            {/* Details */}
            <div className="space-y-2">
              <label htmlFor="details" className={`block text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Details
              </label>
              <textarea 
                id="details" 
                rows={6}
                className={`w-full px-4 py-3 rounded-md border focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-y ${
                  darkMode 
                    ? 'bg-slate-900 border-slate-800 text-white focus:border-blue-500' 
                    : 'bg-gray-100 border-gray-200 text-slate-900 focus:bg-white focus:border-blue-500'
                }`}
              ></textarea>
            </div>

            {/* How did you hear about us */}
            <div className="space-y-2">
              <label htmlFor="referral" className={`block text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                How did you hear about us?
              </label>
              <input 
                type="text" 
                id="referral" 
                className={`w-full px-4 py-3 rounded-md border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                  darkMode 
                    ? 'bg-slate-900 border-slate-800 text-white focus:border-blue-500' 
                    : 'bg-gray-100 border-gray-200 text-slate-900 focus:bg-white focus:border-blue-500'
                }`}
              />
            </div>

            {/* reCAPTCHA Placeholder */}
            <div className="py-4">
              <div className={`inline-flex items-center gap-4 px-4 py-3 rounded border shadow-sm ${
                darkMode ? 'bg-slate-900 border-slate-700' : 'bg-gray-50 border-gray-300'
              }`}>
                <div className={`w-6 h-6 border-2 rounded-sm flex items-center justify-center cursor-pointer ${
                   darkMode ? 'border-slate-500' : 'border-gray-400'
                }`}>
                </div>
                <span className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>I'm not a robot</span>
                <div className="ml-4 flex flex-col items-center justify-center">
                   <div className="w-8 h-8 rounded-full border-2 border-blue-500/30 border-t-blue-500 animate-spin opacity-0"></div>
                   <span className="text-[10px] text-slate-400 leading-none mt-1">reCAPTCHA</span>
                   <span className="text-[8px] text-slate-500 leading-none">Privacy - Terms</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button 
                type="submit"
                className={`px-12 py-3 rounded-full font-bold text-lg shadow-lg transition-all hover:translate-y-[-2px] ${
                  darkMode 
                  ? 'bg-[#335c81] hover:bg-[#284865] text-white shadow-blue-900/20' 
                  : 'bg-[#335c81] hover:bg-[#284865] text-white shadow-slate-400/20'
                }`}
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
