import React from 'react';
import { SKILLS, EDUCATION } from '../constants';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { Cpu, Database, Globe, Wrench, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  // Helper to get icon for skill category
  const getIcon = (category: string) => {
    if (category.includes("Lang")) return <Globe size={20} />;
    if (category.includes("Web")) return <Globe size={20} />;
    if (category.includes("Data")) return <Database size={20} />;
    if (category.includes("IoT")) return <Cpu size={20} />;
    return <Wrench size={20} />;
  };

  return (
    <PageTransition>
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Skills Matrix */}
        <section className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-black/10 dark:border-white/10 pb-8">
                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-ink dark:text-white">ARSENAL</h2>
                <p className="font-mono text-right text-sm max-w-md text-gray-500 mt-4 md:mt-0">
                    A comprehensive toolkit architected for scalability. From low-level embedded systems to high-level AI implementations.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SKILLS.map((category, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-50 dark:bg-white/[0.03] p-6 border border-black/5 dark:border-white/5 hover:border-alert-red dark:hover:border-neon-lime transition-colors group"
                    >
                        <div className="flex items-center gap-3 mb-6 text-alert-red dark:text-neon-lime">
                            {getIcon(category.category)}
                            <h3 className="font-mono uppercase tracking-widest text-sm font-bold text-ink dark:text-white">
                                {category.category}
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, idx) => (
                                <span 
                                    key={idx} 
                                    className="px-3 py-1 bg-white dark:bg-black border border-black/10 dark:border-white/10 text-xs font-mono text-gray-600 dark:text-gray-300 group-hover:bg-ink dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* Education */}
        <section>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tighter flex items-center gap-4">
                <GraduationCap size={40} className="text-alert-red dark:text-neon-lime" />
                ACADEMICS
            </h2>

            <div className="grid gap-6">
                {EDUCATION.map((edu, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row justify-between items-center p-8 bg-ink text-white dark:bg-white dark:text-black rounded-none hover:scale-[1.01] transition-transform"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                            <p className="text-lg opacity-80 mb-1">{edu.institution}</p>
                            <p className="font-mono text-sm opacity-60">{edu.location}</p>
                        </div>
                        <div className="flex flex-col items-end mt-6 md:mt-0">
                             <span className="text-4xl font-bold text-alert-red dark:text-neon-lime mb-2">{edu.score}</span>
                             <span className="font-mono text-xs uppercase tracking-widest opacity-60">{edu.duration}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>

        </div>
      </div>
    </PageTransition>
  );
};

export default About;
