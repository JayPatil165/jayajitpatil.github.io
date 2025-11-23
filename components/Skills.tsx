import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';
import { Cpu, Settings, CircuitBoard } from 'lucide-react';

// Mapping skill names to DevIcon URLs and specific hover styles
const getSkillMeta = (skillName: string) => {
  const normalized = skillName.toLowerCase().replace(/\s+/g, '');
  
  const iconMap: Record<string, string> = {
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    c: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    "c++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    sql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    reactjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    neo4j: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg",
    arduino: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
    tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    arduinoide: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
  };

  // Return specific border/shadow/bg colors for hover states
  const colorMap: Record<string, string> = {
    python: "from-blue-500 to-blue-600",
    javascript: "from-yellow-400 to-yellow-500",
    reactjs: "from-cyan-400 to-cyan-500",
    nextjs: "from-white to-gray-200 dark:from-gray-800 dark:to-black",
    html: "from-orange-500 to-orange-600",
    css: "from-blue-600 to-blue-700",
    "c++": "from-blue-700 to-blue-800",
    sql: "from-blue-400 to-blue-500",
    mysql: "from-blue-600 to-blue-700",
    neo4j: "from-blue-500 to-blue-600",
    tailwind: "from-cyan-500 to-cyan-600",
    arduino: "from-teal-500 to-teal-600",
    git: "from-orange-600 to-orange-700",
    github: "from-gray-700 to-gray-900 dark:from-white dark:to-gray-200",
    arduinoide: "from-teal-600 to-teal-700",
    proteus: "from-indigo-500 to-indigo-600",
    "8051microcontroller": "from-red-500 to-red-600",
    controlpanels: "from-slate-500 to-slate-600",
    default: "from-gray-400 to-gray-500"
  };

  return {
    icon: iconMap[normalized] || null,
    gradient: colorMap[normalized] || colorMap.default
  };
};

const getSkillDetails = (skillName: string) => {
    const details: Record<string, { level: string, desc: string }> = {
        "Python": { level: "Basic", desc: "Primary language for scripting and basic data manipulation." },
        "C++": { level: "Intermediate", desc: "System programming and algorithmic problem solving." },
        "SQL": { level: "Intermediate", desc: "Querying databases and managing relational structures." },
        "JavaScript": { level: "Basic", desc: "Adding interactivity and logic to web applications." },
        "ReactJS": { level: "Intermediate", desc: "Building component-based user interfaces." },
        "NextJS": { level: "Basic", desc: "Server-side rendering and static site generation." },
        "HTML": { level: "Advanced", desc: "Semantic markup and accessibility standards." },
        "CSS": { level: "Advanced", desc: "Responsive design, flexbox, grid, and animations." },
        "MySQL": { level: "Intermediate", desc: "Relational database management." },
        "Neo4j": { level: "Basic", desc: "Graph database fundamentals." },
        "8051 Microcontroller": { level: "Advanced", desc: "Assembly programming and embedded control logic." },
        "Arduino": { level: "Intermediate", desc: "Prototyping with sensors and actuators." },
        "Control Panels": { level: "Intermediate", desc: "Industrial automation and circuit design." },
        "Git": { level: "Advanced", desc: "Version control workflows and branching strategies." },
        "GitHub": { level: "Intermediate", desc: "Collaboration, pull requests, and actions." },
        "Arduino IDE": { level: "Intermediate", desc: "Firmware development and library management." },
        "Proteus": { level: "Intermediate", desc: "Circuit simulation and PCB design." },
        "Tailwind": { level: "Basic", desc: "Utility-first CSS framework for responsive design." },
        "English": { level: "Proficient", desc: "Professional fluency in technical communication." },
        "Hindi": { level: "Native", desc: "Native fluency." },
        "Marathi": { level: "Native", desc: "Native fluency." },
        
        // Languages
        "English (Prof)": { level: "Professional", desc: "Fluent technical communication." },
        "Hindi (Nat)": { level: "Native", desc: "Native or bilingual proficiency." },
        "Marathi (Nat)": { level: "Native", desc: "Native or bilingual proficiency." }
    };

    return details[skillName] || { level: "Competent", desc: "Practical application in projects." };
}

const getLevelStyle = (level: string) => {
    const l = level.toLowerCase();
    if (l.includes('basic')) return "text-blue-500 bg-blue-500/10 border border-blue-500/20";
    if (l.includes('intermediate')) return "text-yellow-500 bg-yellow-500/10 border border-yellow-500/20";
    if (l.includes('advanced') || l.includes('expert') || l.includes('prof') || l.includes('native')) return "text-emerald-500 bg-emerald-500/10 border border-emerald-500/20";
    return "text-gray-500 bg-gray-500/10 border border-gray-500/20";
};

// Helper function to extract color from gradient for box shadow
const getGradientColor = (gradient: string): string => {
    const colorMap: Record<string, string> = {
        "from-blue-500 to-blue-600": "#3b82f6",
        "from-yellow-400 to-yellow-500": "#fbbf24",
        "from-cyan-400 to-cyan-500": "#22d3ee",
        "from-white to-gray-200 dark:from-gray-800 dark:to-black": "#d1d5db",
        "from-orange-500 to-orange-600": "#f97316",
        "from-blue-600 to-blue-700": "#2563eb",
        "from-blue-700 to-blue-800": "#1d4ed8",
        "from-blue-400 to-blue-500": "#60a5fa",
        "from-teal-500 to-teal-600": "#14b8a6",
        "from-orange-600 to-orange-700": "#ea580c",
        "from-gray-700 to-gray-900 dark:from-white dark:to-gray-200": "#374151",
        "from-indigo-500 to-indigo-600": "#6366f1",
        "from-red-500 to-red-600": "#ef4444",
        "from-slate-500 to-slate-600": "#64748b",
        "from-gray-400 to-gray-500": "#9ca3af",
    };
    
    return colorMap[gradient] || "#9ca3af";
};

const Skills: React.FC = () => {
  return (
    <div className="w-full">
      {/* Grid layout for categories side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILLS.map((category, index) => (
            <motion.div 
              key={index} 
              className="space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.3 }}
            >
                <div className="flex items-center gap-3">
                    <h3 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                        {category.category}
                    </h3>
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-gray-200 dark:from-white/10 to-transparent"></div>
                </div>
                
                {/* Cluster Layout */}
                <div className="flex flex-wrap gap-2.5 items-start">
                    {category.skills.map((skill, idx) => {
                        const { icon, gradient } = getSkillMeta(skill);
                        const { level, desc } = getSkillDetails(skill);
                        const isWebDev = category.category.toLowerCase().includes('web');
                        
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.15, delay: idx * 0.01 }}
                                whileHover={{ scale: 1.12, y: -4 }}
                                className="group relative px-5 py-3 rounded-lg 
                                    bg-gray-50 dark:bg-white/5
                                    border border-gray-200 dark:border-white/10
                                    transition-all duration-200
                                    cursor-default overflow-visible w-auto flex items-center gap-2.5 z-10 hover:z-50"
                            >
                                {/* Icon */}
                                <div className="flex-shrink-0">
                                    {icon ? (
                                        <img 
                                          src={icon} 
                                          alt={skill} 
                                          className={`w-6 h-6 object-contain ${skill === 'GitHub' ? 'dark:invert' : ''}`} 
                                          onError={(e) => {
                                              e.currentTarget.style.display = 'none';
                                          }}
                                        />
                                    ) : skill === 'Proteus' ? (
                                        <CircuitBoard className="w-6 h-6 text-indigo-500" />
                                    ) : skill.includes('8051') ? (
                                        <Cpu className="w-6 h-6 text-red-500" />
                                    ) : skill.includes('Control Panels') ? (
                                        <Settings className="w-6 h-6 text-slate-500" />
                                    ) : (
                                        <div className="w-6 h-6 rounded bg-gray-200 dark:bg-white/10 flex items-center justify-center text-[7px] font-bold text-gray-500">
                                            {skill.slice(0, 2).toUpperCase()}
                                        </div>
                                    )}
                                </div>

                                {/* Skill Name and Level */}
                                <div className="flex items-center gap-2">
                                    <span className="font-medium text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                        {skill}
                                    </span>
                                    <span className={`text-[8px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${getLevelStyle(level)}`}>
                                        {level}
                                    </span>
                                </div>

                                {/* Background overlay on hover - increased 5% for light theme only */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:${isWebDev ? 'opacity-13' : 'opacity-8'} dark:group-hover:opacity-15 transition-opacity duration-150 rounded-lg pointer-events-none`}></div>
                                
                                {/* Colored border glow on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150 rounded-lg pointer-events-none"
                                  style={{
                                    borderColor: `${getGradientColor(gradient)}70`,
                                    boxShadow: `inset 0 0 10px ${getGradientColor(gradient)}20, 0 0 15px ${getGradientColor(gradient)}15`,
                                    border: `1.5px solid ${getGradientColor(gradient)}70`,
                                  }}
                                ></div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
