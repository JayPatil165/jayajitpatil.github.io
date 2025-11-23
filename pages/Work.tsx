import React from 'react';
import { PROJECTS, EXPERIENCE } from '../constants';
import { ArrowUpRight, Lock, Github, Code2, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import AnimatedBackground from '../components/AnimatedBackground';
import DraftingBoard from '../components/DraftingBoard';

const Tooltip: React.FC<{ text: string; children: React.ReactNode }> = ({ text, children }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <div className="relative inline-flex">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="cursor-pointer"
      >
        {children}
      </div>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 4, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 4, scale: 0.95 }}
          transition={{ duration: 0.15 }}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-950 dark:bg-gray-100 text-white dark:text-gray-950 text-xs rounded-md whitespace-nowrap pointer-events-none z-[9999] font-semibold shadow-xl"
        >
          {text}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-950 dark:bg-gray-100 transform rotate-45 -mt-1"></div>
        </motion.div>
      )}
    </div>
  );
};

const Work: React.FC = () => {
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

  const handleProjectInView = (index: number, inView: boolean) => {
    setIsInView(prev => ({ ...prev, [index]: inView }));
  };

  return (
    <PageTransition>
      <div className="w-full bg-white dark:bg-void flex flex-col">
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col py-8 md:py-12 flex-1">
          <AnimatedBackground variant="work" />
          
          {/* Header */}
          <div className="mb-16 md:mb-20 max-w-4xl relative z-10 pt-24 md:pt-32">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-accent-indigo to-accent-cyan uppercase tracking-widest">Projects</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">Professional Work</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-2xl">
                A collection of projects showcasing problem-solving capabilities in Embedded Systems, IoT, and AI Data Pipelines.
            </p>
        </div>

        {/* Projects Grid */}
        <div className="mb-24 md:mb-32 relative z-10 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-gray-100/60 to-gray-100/40 dark:from-gray-900/60 dark:to-gray-900/40">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {PROJECTS.map((project, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ delay: index * 0.1 }}
                    animate={isMobile && isInView[index] ? { 
                        y: -10, 
                        scale: 1.05,
                        boxShadow: "0 20px 25px -5px rgb(79, 70, 229, 0.1)"
                    } : { y: 0, scale: 1 }}
                    whileHover={!isMobile ? { y: -10, scale: 1.08 } : {}}
                    onViewportEnter={() => handleProjectInView(index, true)}
                    onViewportLeave={() => handleProjectInView(index, false)}
                    className={`group relative flex flex-col h-full p-6 md:p-8 rounded-2xl bg-white dark:bg-white/5 border transition-all duration-500 ${
                      isMobile && isInView[index] 
                        ? 'border-accent-indigo/80 dark:border-accent-cyan/80 shadow-2xl shadow-accent-indigo/10' 
                        : 'border-black/10 dark:border-white/10 hover:shadow-2xl hover:shadow-accent-indigo/10 hover:border-accent-indigo/80 dark:hover:border-accent-cyan/80'
                    }`}
                >
                    {/* Decorative elements */}
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent-indigo/5 rounded-full blur-3xl group-hover:bg-accent-indigo/10 transition-colors"></div>

                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start gap-2 md:gap-4 mb-6">
                            <div className="flex flex-col gap-2 flex-grow min-w-0">
                                <h3 
                                    className={`font-bold text-ink dark:text-white transition-all duration-300 origin-left block ${
                                      isMobile && isInView[index]
                                        ? 'text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-accent-indigo to-accent-cyan'
                                        : 'text-xl md:text-2xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-indigo group-hover:to-accent-cyan group-hover:text-2xl lg:group-hover:text-3xl'
                                    }`}
                                >
                                    {project.title}
                                </h3>
                                {/* Animation line under title */}
                                <div className={`h-0.5 bg-gradient-to-r from-accent-indigo to-accent-cyan transition-all duration-500 ${
                                  isMobile && isInView[index] ? 'w-12' : 'w-0 group-hover:w-12'
                                }`}></div>
                            </div>
                            
                            <div className="flex-shrink-0 flex flex-col items-center gap-2">
                                {project.linkType === 'Link' && project.url ? (
                                    <Tooltip text="GitHub link">
                                        <a 
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-2 md:p-2.5 rounded-full transition-all duration-300 shadow-sm flex items-center justify-center transform ${
                                              isMobile && isInView[index]
                                                ? 'bg-ink dark:bg-white text-white dark:text-black scale-110'
                                                : 'bg-gray-100 dark:bg-white/10 text-gray-500 group-hover:bg-ink dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black hover:scale-110 group-hover:scale-125'
                                            }`}
                                        >
                                            <Github size={18} className="md:w-5 md:h-5" />
                                        </a>
                                    </Tooltip>
                                ) : (
                                    <Tooltip text="Private repo">
                                        <div 
                                            className={`p-2 md:p-2.5 rounded-full transition-all duration-300 shadow-sm flex items-center justify-center transform ${
                                              isMobile && isInView[index]
                                                ? 'bg-ink dark:bg-white text-white dark:text-black scale-110'
                                                : 'bg-gray-100 dark:bg-white/10 text-gray-500 group-hover:bg-ink dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black hover:scale-110 group-hover:scale-125'
                                            }`}
                                        >
                                            <Lock size={18} className="md:w-5 md:h-5" />
                                        </div>
                                    </Tooltip>
                                )}
                                <span className={`text-xs font-semibold dark:text-gray-400 transition-opacity duration-300 whitespace-nowrap h-4 ${
                                  isMobile && isInView[index]
                                    ? 'opacity-100 text-gray-500'
                                    : 'opacity-0 text-gray-500 group-hover:opacity-100'
                                }`}>
                                    {project.linkType === 'Link' && project.url ? 'View' : 'Private'}
                                </span>
                            </div>
                        </div>

                        <span className="text-xs font-mono text-gray-400 mb-6">
                            {project.duration}
                        </span>

                        <div className="flex-grow mb-6 md:mb-8">
                            <ul className="space-y-2 md:space-y-3">
                                {project.description.map((desc, i) => (
                                    <li key={i} className={`text-xs md:text-sm leading-relaxed flex items-start gap-2 md:gap-3 transition-colors ${
                                      isMobile && isInView[index]
                                        ? 'text-gray-800 dark:text-gray-300'
                                        : 'text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300'
                                    }`}>
                                        <span className="text-accent-indigo mt-0.5 font-mono">›</span>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tech Chips */}
                        <div className="pt-4 md:pt-6 border-t border-gray-100 dark:border-white/5">
                            <div className="flex flex-wrap gap-1.5 md:gap-2">
                                {project.tech.split(', ').map((tech, idx) => (
                                    <motion.span 
                                        key={idx}
                                        whileHover={!isMobile ? { scale: 1.25, y: -3 } : {}}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        className={`px-2 md:px-2.5 py-0.5 md:py-1 rounded-md text-[9px] md:text-[10px] font-mono font-medium uppercase tracking-wider border transition-colors duration-300 transform origin-bottom ${
                                          isMobile && isInView[index]
                                            ? 'bg-accent-indigo/5 text-accent-indigo border-accent-indigo/20'
                                            : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border-transparent group-hover:border-accent-indigo/20 group-hover:bg-accent-indigo/5 group-hover:text-accent-indigo'
                                        }`}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
            </div>
            </div>
        </div>

        {/* Drafting Board Section */}
        <DraftingBoard />

        {/* Experience Section */}
        <div className="relative z-10 max-w-4xl mx-auto mt-24 md:mt-32 w-full pb-16 md:pb-24">
             <div className="mb-16">
                <div className="inline-block mb-6">
                  <span className="text-sm font-semibold text-accent-indigo dark:text-accent-cyan uppercase tracking-widest">Experience</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional History</h2>
             </div>
             
             <div className="space-y-6 relative pl-0">
                {/* Timeline line with accent color */}
                <div className="absolute left-[11px] md:left-[13px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-teal/10 via-accent-teal/40 to-accent-teal/10 rounded-full"></div>
                
                {EXPERIENCE.map((exp, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onViewportEnter={() => handleProjectInView(`exp-${index}` as any, true)}
                        onViewportLeave={() => handleProjectInView(`exp-${index}` as any, false)}
                        className={`relative group pl-10 md:pl-16 transition-all duration-300 cursor-default`}
                    >
                        {/* Timeline Dot - border only, fills on hover with transparency */}
                        <motion.div 
                          whileHover={{ scale: 1.5, boxShadow: '0 0 25px rgba(45, 212, 191, 0.5)' }}
                          animate={isMobile && isInView[`exp-${index}`] ? { scale: 1.4, boxShadow: '0 0 20px rgba(45, 212, 191, 0.4)' } : { scale: 1, boxShadow: '0 0 0px rgba(45, 212, 191, 0)' }}
                          className={`absolute left-1 md:left-1.5 top-2.5 w-5 h-5 rounded-full transition-all duration-300 border-2 z-50 bg-white dark:bg-void ${
                            isMobile && isInView[`exp-${index}`]
                              ? 'bg-accent-teal/30 dark:bg-accent-teal/40 border-accent-teal'
                              : 'bg-white dark:bg-void border-accent-teal dark:border-accent-teal/50 group-hover:bg-accent-teal/30 dark:group-hover:bg-accent-teal/40 group-hover:border-accent-teal'
                          }`}
                        ></motion.div>

                        {/* Card Container */}
                        <motion.div
                          whileHover={!isMobile ? { scale: 1.08, y: -6 } : {}}
                          animate={isMobile && isInView[`exp-${index}`] ? { scale: 1.06, y: -4 } : { scale: 1, y: 0 }}
                          className={`p-4 md:p-6 rounded-lg border-2 transition-all duration-300 ${
                            isMobile && isInView[`exp-${index}`]
                              ? 'bg-accent-teal/10 dark:bg-accent-teal/12 border-accent-teal/50 dark:border-accent-teal/60 shadow-md shadow-accent-teal/15'
                              : 'bg-white/50 dark:bg-white/5 border-gray-300/50 dark:border-white/15 group-hover:bg-accent-teal/10 dark:group-hover:bg-accent-teal/12 group-hover:border-accent-teal/50 dark:group-hover:border-accent-teal/60 group-hover:shadow-md group-hover:shadow-accent-teal/15'
                          }`}
                        >
                          {/* Title with enlargement on hover */}
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                            <motion.h3 
                              whileHover={!isMobile ? { scale: 1.08, letterSpacing: '0.01em' } : {}}
                              animate={isMobile && isInView[`exp-${index}`] ? { scale: 1.08, letterSpacing: '0.01em' } : { scale: 1, letterSpacing: '0em' }}
                              transition={{ duration: 0.3 }}
                              className={`text-lg md:text-2xl font-bold transition-all duration-300 origin-left ${
                                isMobile && isInView[`exp-${index}`]
                                  ? 'text-accent-teal'
                                  : 'text-gray-900 dark:text-white group-hover:text-accent-teal'
                              }`}
                            >
                              {exp.role}
                            </motion.h3>
                            <span className="font-mono text-xs text-gray-500 flex-shrink-0">{exp.duration}</span>
                          </div>
                          
                          <div className={`text-base md:text-lg font-medium mb-4 transition-colors ${
                            isMobile && isInView[`exp-${index}`]
                              ? 'text-gray-900 dark:text-gray-100'
                              : 'text-gray-800 dark:text-gray-200'
                          }`}>
                            {exp.company} <span className="text-gray-400 font-normal text-sm mx-1 md:mx-2">•</span> <span className="text-xs md:text-sm text-gray-500">{exp.location}</span>
                          </div>
                          
                          <ul className="space-y-2">
                            {exp.description.map((item, i) => (
                              <li key={i} className={`text-xs md:text-sm leading-relaxed pl-4 border-l-2 transition-all duration-300 ${
                                isMobile && isInView[`exp-${index}`]
                                  ? 'text-gray-700 dark:text-gray-300 border-accent-teal/40'
                                  : 'text-gray-600 dark:text-gray-400 border-gray-300/40 dark:border-white/10 group-hover:border-accent-teal/40'
                              }`}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                    </motion.div>
                ))}
             </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Work;
