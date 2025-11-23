import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer className="w-full border-t border-gray-200/30 dark:border-white/5 pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-void mt-auto">
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 text-xs text-gray-600 dark:text-gray-400"
        >
          {/* Left: Copyright */}
          <div className="text-center md:text-left">
            <p>© {year} Jay Ajitkumar Patil</p>
          </div>

          {/* Center: Component Names & Heart */}
          <div className="text-center">
            <p>
              Designed with <span className="mx-1 inline-block">❤️</span>
              <br />
              <span className="text-[10px] font-mono text-gray-500">React • TypeScript • Tailwind</span>
            </p>
          </div>

          {/* Right: Collaboration Link */}
          <button
            onClick={() => navigate('/contact')}
            className="text-center md:text-right hover:text-accent-twitter transition-colors duration-300 cursor-pointer"
          >
            <p className="font-medium text-xs sm:text-sm">Have an idea?</p>
            <p className="font-semibold text-xs sm:text-sm hover:underline">Let's collaborate</p>
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
