import React from 'react';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-1/3"
        >
          <h2 className="text-5xl font-bold mb-6 tracking-tighter text-white">Experience</h2>
          <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
            Professional Trajectory
          </p>
        </motion.div>

        <div className="md:w-2/3 space-y-16">
          {EXPERIENCE.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 border-l-2 border-white/10 group hover:border-accent-twitter transition-colors duration-300"
            >
              {/* Timeline Dot - positioned on the line */}
              <div className="absolute -left-[7px] top-1 w-3 h-3 bg-white border-2 border-white/30 rounded-full group-hover:bg-accent-twitter group-hover:border-accent-twitter group-hover:w-4 group-hover:h-4 group-hover:-left-[8px] transition-all duration-300 shadow-lg group-hover:shadow-accent-twitter/50"></div>
              
              {/* Green line indicator on hover */}
              <div className="absolute -left-1 top-0 h-full w-1 bg-gradient-to-b from-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3 gap-2">
                <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:translate-x-2 transition-transform duration-300">{exp.role}</h3>
                <span className="font-mono text-sm text-gray-400 group-hover:text-accent-twitter group-hover:font-bold transition-all duration-300 bg-white/5 px-3 py-1 rounded border border-white/10 group-hover:border-accent-twitter/50 whitespace-nowrap">{exp.duration}</span>
              </div>
              
              <div className="text-lg text-gray-400 mb-6 font-light">{exp.company} • <span className="text-xs font-mono text-gray-600">{exp.location}</span></div>
              
              <ul className="space-y-3">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-400 text-sm md:text-base leading-relaxed flex items-start group-hover:text-gray-300 transition-colors">
                    <span className="mr-3 text-white/30 mt-1.5 text-[10px]">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
