import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServiceHub from './pages/ServiceHub';
import ServiceDetail from './pages/ServiceDetail';
import SubServiceDetail from './pages/SubServiceDetail';
import { Moon, Sun } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference or local storage on mount
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className={`min-h-screen flex flex-col font-sans selection:bg-primary-500 selection:text-white`}>
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/cardiovascular" element={<ServiceHub />} />
            <Route path="/services/cardiovascular/:serviceId" element={<ServiceDetail />} />
            <Route path="/services/cardiovascular/:serviceId/:subServiceId" element={<SubServiceDetail />} />
            {/* Fallback to Home for demo purposes if other links are clicked */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;