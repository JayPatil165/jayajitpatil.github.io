import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import { ThemeProvider } from './context/ThemeContext';
import Footer from './components/Footer';

const AppContent = () => {
  const location = useLocation();
  const showFooter = location.pathname !== '/contact';
  
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      {showFooter && <Footer />}
    </>
  );
};

function App() {
  useEffect(() => {
    // Apply background directly to body for persistent rendering
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.style.backgroundColor = prefersDark ? '#0a0a0a' : '#ffffff';
    document.body.style.backgroundImage = 'none';
    document.body.style.transition = 'background-color 0.3s ease';

    // Listen for theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = (e: MediaQueryListEvent) => {
      document.body.style.backgroundColor = e.matches ? '#0a0a0a' : '#ffffff';
    };
    mediaQuery.addEventListener('change', handleThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen w-screen overflow-x-hidden bg-paper dark:bg-void text-ink dark:text-white transition-colors duration-300">
          <AppContent />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
