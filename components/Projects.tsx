import React from 'react';
import { PROJECTS } from '../constants';
import { FolderGit2, Lock, ExternalLink, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6"
      >
        <div>
          <h2 className="text-5xl font-bold mb-4 tracking-tighter">Selected Works</h2>
          <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
            // Engineering & Development
          </p>
        </div>
        <div className="h-[1px] bg-white/10 flex-grow ml-8 hidden md:block"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white/[0.02] border border-white/5 p-8 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500 flex flex-col justify-between h-full"
          >
            <div className="absolute top-6 right-6 text-gray-600 group-hover:text-white transition-colors duration-300">
              {project.linkType === 'Private Repo' ? <Lock size={18} /> : <ArrowUpRight size={24} />}
            </div>

            <div>
              <div className="text-gray-500 font-mono text-[10px] uppercase tracking-wider mb-6 border-b border-white/5 pb-4 inline-block">
                {project.duration}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-gray-400 mb-8">
                {project.tech}
              </p>
              <ul className="space-y-4 mb-8">
                {project.description.map((desc, idx) => (
                  <li key={idx} className="text-gray-400 text-sm leading-relaxed pl-2 border-l border-white/10">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 group-hover:text-white transition-colors">
              <FolderGit2 size={12} />
              {project.linkType}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;