import React, { useState } from 'react';
import { EDUCATION } from '../constants';
import { motion } from 'framer-motion';
import { BookOpen, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const [isInView, setIsInView] = React.useState<{ [key: number]: boolean }>({});

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      className="space-y-4 md:space-y-5"
    >
      {EDUCATION.map((edu, index) => (
        <motion.div 
          key={index}
          variants={itemVariants}
          onMouseEnter={() => !isMobile && setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onViewportEnter={() => setIsInView(prev => ({ ...prev, [index]: true }))}
          onViewportLeave={() => setIsInView(prev => ({ ...prev, [index]: false }))}
          className={`group relative rounded-lg transition-all duration-300 overflow-hidden p-5 md:p-6 border ${
            hoveredIndex === index || (isMobile && isInView[index])
              ? 'bg-gradient-to-br from-accent-twitter/10 to-cyan-500/5 dark:from-accent-twitter/15 dark:to-cyan-500/10 border-accent-twitter/40 dark:border-accent-twitter/50'
              : 'bg-gradient-to-br from-white to-gray-50/50 dark:from-white/5 dark:to-white/[0.02] border-gray-200/50 dark:border-white/10'
          }`}
        >
          {/* Background gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-twitter/5 via-cyan-500/5 to-accent-twitter/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

          {/* Content */}
          <div className="relative z-10">
            {/* Header - responsive flex direction */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-3 mb-4">
              <div className="flex items-start gap-3 flex-1 mb-3 sm:mb-0">
                <motion.div 
                  animate={hoveredIndex === index || (isMobile && isInView[index]) ? { scale: 1.1 } : { scale: 1 }}
                  className={`p-2.5 rounded-lg flex-shrink-0 ${
                    hoveredIndex === index || (isMobile && isInView[index])
                      ? 'bg-gradient-to-br from-accent-twitter/30 to-cyan-500/30 text-accent-twitter'
                      : 'bg-gradient-to-br from-accent-twitter/15 to-cyan-500/15 text-accent-twitter'
                  } transition-all duration-300`}
                >
                  <BookOpen className="w-5 h-5" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <motion.h3 
                    animate={hoveredIndex === index || (isMobile && isInView[index]) ? { scale: 1.08 } : { scale: 1 }}
                    className={`text-base md:text-lg font-bold transition-colors duration-300 origin-left ${
                      hoveredIndex === index || (isMobile && isInView[index])
                        ? 'text-accent-twitter dark:text-accent-twitter'
                        : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    {edu.institution}
                  </motion.h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1.5 mt-2">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">{edu.location}</span>
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs md:text-sm px-3 py-1 rounded whitespace-nowrap flex-shrink-0 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400">
                {edu.duration}
              </span>
            </div>

            {/* Degree and Score */}
            <div className="space-y-3">
              <p 
                className={`text-sm md:text-base font-semibold transition-colors duration-300 ${
                  hoveredIndex === index || (isMobile && isInView[index])
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-800 dark:text-gray-200'
                }`}
              >
                {edu.degree}
              </p>
              <div 
                className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold px-3 py-1.5 rounded bg-accent-twitter/10 text-accent-twitter"
              >
                <Award className="w-3.5 h-3.5" />
                Score: {edu.score}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Education;
