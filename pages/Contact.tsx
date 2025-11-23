import React from 'react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants';
import { Mail, Copy, ArrowUpRight, MapPin, Phone, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import AnimatedBackground from '../components/AnimatedBackground';

const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = React.useState(false);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const getSocialColor = (platform: string) => {
    switch(platform.toLowerCase()) {
        case 'linkedin': return 'hover:border-blue-600 hover:shadow-blue-600/20 text-blue-600';
        case 'github': return 'hover:border-gray-800 dark:hover:border-white hover:shadow-gray-800/20 dark:text-white text-black';
        case 'twitter': return 'hover:border-sky-500 hover:shadow-sky-500/20 text-sky-500';
        case 'discord': return 'hover:border-indigo-600 hover:shadow-indigo-600/20 text-indigo-600';
        case 'leetcode': return 'hover:border-orange-500 hover:shadow-orange-500/20 text-orange-500';
        default: return 'hover:border-gray-400 hover:shadow-gray-400/20 text-gray-500';
    }
  };

  return (
    <PageTransition>
      <div className="w-full bg-white dark:bg-void flex flex-col">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-center py-12">
          <AnimatedBackground variant="contact" />
        
          <div className="flex flex-col gap-8 items-stretch pt-24 md:pt-32 w-full max-w-4xl mx-auto">
            {/* Top Section: Heading & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col flex-shrink-0"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-4 leading-tight">
                Let's connect.
              </h1>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-2xl">
                I am currently seeking opportunities in AI - ML, Data Science and Full Stack Engineering. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </motion.div>

            {/* Contact & Social Grid - Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6 items-end">
              {/* Left Column: Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-2 h-fit"
              >
                {/* Bento Link */}
                <a
                  href="https://bento.me/jaypatil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg transition-all hover:border-accent-twitter hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-between hover:scale-105 transform duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-gradient-to-br from-accent-twitter/30 to-cyan-400/30 text-accent-twitter flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-gray-500 dark:text-gray-400 block">Quick Links</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">bento.me/jaypatil</span>
                    </div>
                  </div>
                  <ArrowUpRight className="text-gray-400 group-hover:text-accent-twitter transition-colors flex-shrink-0" size={20} />
                </a>

                {/* Email */}
                <motion.a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=patiljay32145@gmail.com&su=Hi%20Jay"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="group p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg transition-all hover:border-accent-twitter hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 relative"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex-shrink-0 mt-0.5">
                      <Mail size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-mono uppercase text-gray-500 block">Email Me</span>
                      <span className="text-sm font-medium break-all text-gray-900 dark:text-white">{CONTACT_INFO.email}</span>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      copyToClipboard(CONTACT_INFO.email);
                    }}
                    className="absolute top-3 right-3 p-2 rounded-md bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-all"
                    title="Copy email"
                  >
                    {copiedEmail ? (
                      <Check size={16} className="text-green-600 dark:text-green-400" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </motion.a>

                {/* Phone */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg transition-all hover:border-accent-twitter hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex-shrink-0 mt-0.5">
                      <Phone size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-mono uppercase text-gray-500 dark:text-gray-400 block">Phone</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{CONTACT_INFO.phone}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg transition-all hover:border-accent-twitter hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex-shrink-0 mt-0.5">
                      <MapPin size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-mono uppercase text-gray-500 dark:text-gray-400 block">Location</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{CONTACT_INFO.location}</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column: Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-2.5 h-fit"
              >
                {/* Socials Heading - Above LinkedIn */}
                <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-0 flex items-center gap-2">
                  <motion.span 
                    className="w-2 h-2 rounded-full bg-green-500"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.span>
                  Socials
                </h2>

                {/* LinkedIn - Horizontal Block - Increased Height */}
                {SOCIAL_LINKS.filter(link => link.platform === 'LinkedIn').map((link, index) => {
                  const colorClass = getSocialColor(link.platform);
                  return (
                    <motion.a 
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className={`
                        group relative p-4 rounded-lg 
                        bg-white dark:bg-gray-900
                        border border-gray-200 dark:border-gray-700
                        flex items-center justify-between
                        h-20
                        transition-all duration-300 hover:shadow-lg hover:border-current
                        ${colorClass}
                      `}
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <span className="p-3 rounded-lg bg-gray-50 dark:bg-white/10 transition-colors group-hover:bg-white dark:group-hover:bg-white/20 flex-shrink-0">
                          {React.cloneElement(link.icon as React.ReactElement<any>, { size: 24 })}
                        </span>
                        <div className="flex-1">
                          <span className="text-xs font-mono opacity-70 block">Connect on</span>
                          <span className="text-xl font-bold">{link.platform}</span>
                        </div>
                      </div>
                      <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" size={20} />
                    </motion.a>
                  );
                })}
                
                {/* 2x2 Grid - GitHub, Discord, Twitter, LeetCode */}
                <div className="grid grid-cols-2 gap-3">
                  {['GitHub', 'Discord', 'Twitter', 'LeetCode'].map((platformName, gridIndex) => {
                    const link = SOCIAL_LINKS.find(l => l.platform === platformName);
                    if (!link) return null;
                    const colorClass = getSocialColor(link.platform);
                    return (
                      <motion.a 
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (gridIndex + 1) * 0.05 }}
                        whileHover={{ scale: 1.05, y: -4 }}
                        className={`
                          group relative p-4 rounded-lg 
                          bg-white dark:bg-gray-900
                          border border-gray-200 dark:border-gray-700
                          flex flex-col justify-between h-32
                          transition-all duration-300 hover:shadow-lg hover:border-current
                          ${colorClass}
                        `}
                      >
                        <div className="flex justify-between items-start w-full">
                          <span className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors group-hover:bg-gray-200 dark:group-hover:bg-gray-700 flex-shrink-0">
                            {React.cloneElement(link.icon as React.ReactElement<any>, { size: 24 })}
                          </span>
                          <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-current" size={18} />
                        </div>
                        
                        <div>
                          <span className="text-xs font-mono opacity-70 mb-1 block">Connect on</span>
                          <span className="text-base font-bold leading-tight">{link.platform}</span>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
