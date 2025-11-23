import React, { useState } from 'react';
import { DRAFTING_BOARD } from '../constants';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const statusColors: Record<string, { 
  badge: string; 
  badgeText: string; 
  badgeBorder: string; 
  gradient: string; 
  tagBg: string; 
  tagText: string; 
  tagBorder: string;
  borderColor: string;
  hoverBorder: string;
  bgGradient: string;
  accentText: string;
}> = {
  'Concept Phase': {
    badge: 'bg-blue-100/60 dark:bg-blue-500/15',
    badgeText: 'text-blue-700 dark:text-blue-300',
    badgeBorder: 'border-blue-300/60 dark:border-blue-400/40',
    gradient: 'from-blue-500 to-cyan-500',
    tagBg: 'bg-blue-100/50 dark:bg-blue-500/20',
    tagText: 'text-blue-700 dark:text-blue-300',
    tagBorder: 'border-blue-300/60 dark:border-blue-400/40',
    borderColor: 'border-blue-200/50 dark:border-blue-500/20',
    hoverBorder: 'border-blue-300/80 dark:border-blue-500/50',
    bgGradient: 'from-blue-50/40 dark:from-blue-950/20 to-cyan-50/20 dark:to-cyan-950/10',
    accentText: 'text-blue-600 dark:text-blue-300'
  },
  'Designing': {
    badge: 'bg-purple-100/60 dark:bg-purple-500/15',
    badgeText: 'text-purple-700 dark:text-purple-300',
    badgeBorder: 'border-purple-300/60 dark:border-purple-400/40',
    gradient: 'from-purple-500 to-pink-500',
    tagBg: 'bg-purple-100/50 dark:bg-purple-500/20',
    tagText: 'text-purple-700 dark:text-purple-300',
    tagBorder: 'border-purple-300/60 dark:border-purple-400/40',
    borderColor: 'border-purple-200/50 dark:border-purple-500/20',
    hoverBorder: 'border-purple-300/80 dark:border-purple-500/50',
    bgGradient: 'from-purple-50/40 dark:from-purple-950/20 to-pink-50/20 dark:to-pink-950/10',
    accentText: 'text-purple-600 dark:text-purple-300'
  },
  'Need Co-founder': {
    badge: 'bg-emerald-100/60 dark:bg-emerald-500/15',
    badgeText: 'text-emerald-700 dark:text-emerald-300',
    badgeBorder: 'border-emerald-300/60 dark:border-emerald-400/40',
    gradient: 'from-emerald-500 to-teal-500',
    tagBg: 'bg-emerald-100/50 dark:bg-emerald-500/20',
    tagText: 'text-emerald-700 dark:text-emerald-300',
    tagBorder: 'border-emerald-300/60 dark:border-emerald-400/40',
    borderColor: 'border-emerald-200/50 dark:border-emerald-500/20',
    hoverBorder: 'border-emerald-300/80 dark:border-emerald-500/50',
    bgGradient: 'from-emerald-50/40 dark:from-emerald-950/20 to-teal-50/20 dark:to-teal-950/10',
    accentText: 'text-emerald-600 dark:text-emerald-300'
  }
};

interface IdeaCardProps {
  idea: typeof DRAFTING_BOARD[0];
  index: number;
  isMobile: boolean;
  isInView: boolean;
}

const IdeaCard: React.FC<IdeaCardProps> = ({ idea, index, isMobile, isInView }) => {
  const [isHoveredDesktop, setIsHoveredDesktop] = useState(false);
  const colors = statusColors[idea.status];
  
  // Only middle card (Hospital IoT) grows on hover
  const shouldGrow = index === 1;
  const isAnimating = isHoveredDesktop || (isMobile && isInView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: false, margin: "-100px" }}
      onMouseEnter={() => !isMobile && setIsHoveredDesktop(true)}
      onMouseLeave={() => !isMobile && setIsHoveredDesktop(false)}
      className="group relative h-full"
    >
      {/* Main card */}
      <motion.div
        whileHover={shouldGrow ? { scale: 1.05, y: -8 } : {}}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`relative p-8 md:p-9 rounded-2xl backdrop-blur-md border-2 bg-gradient-to-br transition-all duration-300 h-full flex flex-col overflow-hidden ${
          isAnimating
            ? `${colors.hoverBorder} ${colors.bgGradient}`
            : `${colors.borderColor} from-white/50 dark:from-white/[0.04] to-transparent dark:to-transparent`
        }`}
      >
        {/* Content wrapper */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Title with icon - grows and changes color */}
          <div className="flex items-start gap-3 mb-2">
            <motion.h3
              animate={isAnimating ? { fontSize: '1.375rem' } : { fontSize: '1.25rem' }}
              className={`font-bold leading-tight transition-all duration-300 flex-1 ${
                isAnimating
                  ? `text-transparent bg-gradient-to-r ${colors.gradient} bg-clip-text`
                  : `text-gray-900 dark:text-white`
              }`}
            >
              {idea.title}
            </motion.h3>

            {/* Icon - next to title on hover */}
            <motion.div
              animate={isAnimating ? { scale: 1.2, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex-shrink-0 mt-1 ${isAnimating ? colors.accentText : 'text-gray-300 dark:text-gray-700'}`}
            >
              <motion.div
                animate={isAnimating ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles className="w-5 h-5" strokeWidth={1.5} />
              </motion.div>
            </motion.div>
          </div>

          {/* Status badge - directly under title */}
          <motion.div
            animate={isAnimating ? { scale: 0.9 } : { scale: 1 }}
            className="flex-shrink-0 mb-4"
          >
            <motion.span
              className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${colors.badge} ${colors.badgeText} ${colors.badgeBorder} border ${
                isAnimating ? colors.badgeBorder : 'border-gray-300/40 dark:border-white/10'
              }`}
            >
              {idea.status}
            </motion.span>
          </motion.div>

          {/* Description - slight growth with more margin */}
          <motion.p
            animate={isAnimating ? { fontSize: '0.9375rem', marginBottom: '1.5rem' } : { fontSize: '0.875rem', marginBottom: '1.25rem' }}
            className="text-gray-700 dark:text-gray-300 flex-grow leading-relaxed transition-colors"
          >
            {idea.description}
          </motion.p>

          {/* Tech Stack - grows and changes colors */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {idea.tech.map((tech, idx) => (
                <motion.span
                  key={idx}
                  animate={isAnimating ? { scale: 1.08 } : { scale: 1 }}
                  className={`text-xs px-3 py-1.5 rounded-md border transition-all duration-200 font-medium ${
                    isAnimating
                      ? `${colors.tagBg} ${colors.tagText} ${colors.tagBorder} border`
                      : `bg-gray-200/50 dark:bg-white/[0.05] text-gray-700 dark:text-gray-400 border-gray-300/50 dark:border-white/10 border`
                  }`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Let's Collaborate Button - smaller with animation */}
          <a
            href="/contact"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="relative group/btn mt-auto block"
          >
            {/* Button glow effect */}
            <motion.div
              animate={isAnimating ? { opacity: 1 } : { opacity: 0.6 }}
              className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} rounded-lg blur-md transition-all duration-300`}
            />

            {/* Button */}
            <motion.button
              animate={isAnimating ? { scale: 1.06, y: -1 } : { scale: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              className={`relative w-full px-4 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r ${colors.gradient} overflow-hidden flex items-center justify-center gap-1.5 transition-all duration-300`}
            >
              <span className="relative">Let's Collaborate</span>

              {/* Arrow animation */}
              <motion.span
                animate={isAnimating ? { x: 3 } : { x: 0 }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                className="relative text-sm font-bold"
              >
                →
              </motion.span>

              {/* Shine effect on hover */}
              <motion.div
                animate={isAnimating ? { x: '100%' } : { x: '-100%' }}
                transition={{ duration: 0.6, repeat: isAnimating ? Infinity : 0, repeatType: 'loop' }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 pointer-events-none"
              />
            </motion.button>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const DraftingBoard: React.FC = () => {
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

  const handleInView = (index: number, inView: boolean) => {
    setIsInView(prev => ({ ...prev, [index]: inView }));
  };

  return (
    <section className="py-8 md:py-10 relative z-10 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: "-100px" }}
          className="mb-10 md:mb-12 text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false, margin: "-100px" }}
            className="inline-block mb-3"
          >
            <span className="text-xs md:text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 dark:from-blue-400 dark:via-purple-400 dark:to-emerald-400 uppercase tracking-widest">
              ✨ Open for Collaboration
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
            The Drafting Board
          </h2>

          <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Concepts in incubation. Ideas I'm passionate about building. Let's create something amazing together.
          </p>
        </motion.div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6">
          {DRAFTING_BOARD.map((idea, index) => (
            <motion.div
              key={index}
              onViewportEnter={() => handleInView(index, true)}
              onViewportLeave={() => handleInView(index, false)}
              viewport={{ once: false, margin: "-100px" }}
            >
              <IdeaCard
                idea={idea}
                index={index}
                isMobile={isMobile}
                isInView={isInView[index] || false}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-400/6 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-emerald-400/6 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
    </section>
  );
};

export default DraftingBoard;
