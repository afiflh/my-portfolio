import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Smooth scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'skills':
        return <SkillsPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="font-sans" style={{ backgroundColor: '#FDFFB6', minHeight: '100vh' }}>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}