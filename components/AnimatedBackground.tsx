import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  variant?: 'hero' | 'skills' | 'education' | 'work' | 'contact';
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ variant = 'hero' }) => {
  const getBackgroundVariant = () => {
    switch (variant) {
      case 'hero':
        return (
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-white dark:bg-gray-950"></div>
          </div>
        );
      
      case 'skills':
        return (
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-white dark:bg-gray-950"></div>
          </div>
        );
      
      case 'education':
        return (
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-white dark:bg-gray-950"></div>
          </div>
        );
      
      default:
        return (
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-white dark:bg-gray-950"></div>
          </div>
        );
    }
  };

  return getBackgroundVariant();
};

export default AnimatedBackground;
