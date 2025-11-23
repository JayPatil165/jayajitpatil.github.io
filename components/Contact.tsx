import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-white text-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.8]"
            >
              LET'S <br/> BUILD.
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4 pt-8"
            >
              <a 
                href={`mailto:${CONTACT_INFO.email}`} 
                className="flex items-center gap-4 text-xl hover:translate-x-2 transition-transform duration-300"
              >
                <Mail strokeWidth={1.5} /> <span className="border-b border-black/20 pb-1">{CONTACT_INFO.email}</span>
              </a>
              <div className="flex items-center gap-4 text-xl text-gray-600">
                <Phone strokeWidth={1.5} /> {CONTACT_INFO.phone}
              </div>
              <div className="flex items-center gap-4 text-xl text-gray-600">
                <MapPin strokeWidth={1.5} /> {CONTACT_INFO.location}
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start md:items-end gap-6"
          >
            <a 
              href="#" 
              className="group flex items-center gap-2 text-3xl font-bold hover:gap-4 transition-all"
            >
              DOWNLOAD CV <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="font-mono text-sm text-gray-500 text-right max-w-xs leading-relaxed">
              Currently available for internships in AI, Data Science, and Embedded Systems.
            </p>
          </motion.div>
        </div>
        
        <div className="mt-32 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center font-mono text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Jay Patil. All rights reserved.</p>
          <p className="opacity-50">System Version 2.0.4</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;