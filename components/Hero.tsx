import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center relative px-6 pt-20 max-w-7xl mx-auto overflow-hidden">
      {/* Abstract Background Elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl -z-10"
      />
      
      <div className="space-y-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <p className="font-mono text-gray-500 text-xs tracking-[0.2em] uppercase">
            System Online
          </p>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-8xl md:text-[14rem] font-bold tracking-tighter leading-[0.9] text-white mix-blend-difference"
        >
          JAY <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-500 to-gray-900">
            PATIL
          </span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-3xl space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400">Intelligence</span>. Visualizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Value</span>.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed border-l-2 border-white/10 pl-6">
            Building scalable software at the nexus of algorithms and infrastructure. I transform complex predictive models into elegant, production-grade systems—ensuring raw data is not just analyzed, but applied.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-3 pt-4"
        >
          {SOCIAL_LINKS.map((link) => (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-white/10 bg-white/5 hover:bg-accent-twitter hover:text-black hover:scale-110 hover:border-accent-twitter transition-all duration-300 rounded-full group"
              aria-label={link.platform}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-6"
      >
        <a href="#experience" className="flex items-center gap-3 text-[10px] font-mono text-gray-500 uppercase hover:text-white transition-colors tracking-widest">
          <span className="animate-bounce"><ArrowDown size={14} /></span>
          Scroll for data
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
