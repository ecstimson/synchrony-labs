
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import FacilityPage from './components/FacilityPage';
import ContactPage from './components/ContactPage';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen font-sans antialiased selection:bg-blue-500/30 ${
        darkMode ? 'bg-slate-950' : 'bg-white'
    }`}>
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      
      <main>
        {currentPage === 'home' && <HomePage darkMode={darkMode} />}
        {currentPage === 'facility' && <FacilityPage darkMode={darkMode} onNavigate={setCurrentPage} />}
        {currentPage === 'contact' && <ContactPage darkMode={darkMode} />}
        {/* Fallback for 'services' to Home since it's a section on home for now, or could be separate */}
        {currentPage === 'services' && <HomePage darkMode={darkMode} />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
