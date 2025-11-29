import React, { useState, useEffect } from 'react';
import { Logo } from './ui/Logo';
import { Menu, X, Sun, Moon } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Facility', href: '#facility' },
  { label: 'Contact', href: '#contact' },
];

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-navy-dark/70 backdrop-blur-md border-b border-navy/5 dark:border-white/5 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            {/* In light mode, we want the logo to be readable (theme='light' -> dark text), in dark mode -> light text */}
            <Logo theme={theme} />
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-navy dark:text-gray-300 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="text-sm font-medium text-navy dark:text-gray-300 hover:text-teal dark:hover:text-teal transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-navy dark:text-white transition-colors"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              className="p-2 text-navy dark:text-white hover:text-teal transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-navy-dark border-b border-gray-100 dark:border-gray-800 backdrop-blur-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-navy dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5 hover:text-teal"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};