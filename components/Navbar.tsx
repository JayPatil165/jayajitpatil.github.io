import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import TypewriterText from './TypewriterText';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-gradient-to-b from-white/80 to-white/50 dark:from-void/80 dark:to-void/50 border-b border-gray-200/50 dark:border-white/10 shadow-sm dark:shadow-lg dark:shadow-indigo-500/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex justify-between items-center">
          <Link 
            to="/" 
            className="text-xl font-display font-bold tracking-tight hover:opacity-80 transition-opacity group min-w-fit flex items-center"
          >
            <span className="text-accent-indigo mr-0.5">&gt;</span>
            <TypewriterText 
              text="Jay Patil" 
              speed={60}
              pauseDuration={2000}
              className="text-black dark:text-white"
              cursorHeight="h-5"
            />
          </Link>

          {/* Desktop Nav - Centered */}
          <div className="hidden md:flex items-center gap-12 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => window.scrollTo(0, 0)}
                className={`text-sm font-bold uppercase tracking-widest transition-all hover:-translate-y-0.5 relative group ${
                  location.pathname === link.href 
                    ? 'bg-gradient-to-r from-accent-indigo to-accent-cyan bg-clip-text text-transparent' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Theme Toggle - Desktop */}
          <button 
            onClick={toggleTheme}
            className="hidden md:flex p-2 rounded-full text-gray-600 hover:text-black dark:hover:text-white transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
                onClick={toggleTheme}
                className="text-gray-500"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button 
              className="text-black dark:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 bg-paper dark:bg-void pt-24 px-6 md:hidden overflow-hidden"
          >
            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-400"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
