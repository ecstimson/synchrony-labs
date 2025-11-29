
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' }, // For now, maps to home
    { name: 'Facility', id: 'facility' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    if (id === 'services') {
        onNavigate('home');
    } else {
        onNavigate(id);
    }
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-800'
            : 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <div className="relative w-10 h-12 flex items-center justify-center">
               {/* Shield Logo Simulation */}
               <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                 <path d="M12 2L3 7V12C3 17.5228 12 22 12 22C12 22 21 17.5228 21 12V7L12 2Z" fill={darkMode ? "#1e293b" : "#1e293b"} stroke={darkMode ? "#cbd5e1" : "#1e293b"} strokeWidth="2"/>
                 <path d="M12 2L3 7V12C3 17.5228 12 22 12 22" fill="#2563EB" stroke="none"/>
                 <path d="M12 2L21 7V12C21 17.5228 12 22 12 22" fill="#DC2626" stroke="none"/>
                 <path d="M2 12H7L9 9L13 15L16 11L18 12H22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-90"/>
               </svg>
            </div>
            <div className={`font-bold text-lg leading-tight tracking-wide ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              SYNCHRONY<br />LABS
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${
                darkMode ? 'text-gray-300 hover:text-white hover:bg-slate-800' : 'text-gray-600 hover:text-black hover:bg-gray-100'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === link.id
                    ? (darkMode ? 'text-white font-bold' : 'text-blue-600 font-bold')
                    : (darkMode ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-blue-600')
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                darkMode ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-black'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className={`md:hidden ${darkMode ? 'bg-slate-900 border-b border-slate-800' : 'bg-white border-b border-gray-100'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === link.id
                   ? (darkMode ? 'bg-slate-800 text-white' : 'bg-blue-50 text-blue-600')
                   : (darkMode
                    ? 'text-gray-300 hover:text-white hover:bg-slate-800'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-gray-50')
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
