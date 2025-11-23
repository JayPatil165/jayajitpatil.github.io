import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  pauseDuration?: number;
  className?: string;
  cursorHeight?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  speed = 50, 
  pauseDuration = 1000,
  className = '',
  cursorHeight = 'h-6'
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < text.length) {
      // Typing forward
      timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
    } else if (!isDeleting && displayedText.length === text.length) {
      // Pause before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting
      timer = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, speed / 2);
    } else if (isDeleting && displayedText.length === 0) {
      // Start typing again
      setIsDeleting(false);
      setLoop(loop + 1);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text, speed, pauseDuration, loop]);

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className={`inline-block w-0.5 ${cursorHeight} bg-current ml-0.5`}
      />
    </span>
  );
};

export default TypewriterText;
