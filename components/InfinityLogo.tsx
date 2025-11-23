import React from 'react';
import { motion } from 'framer-motion';

interface InfinityLogoProps {
  isHovered?: boolean;
  size?: number;
}

const InfinityLogo: React.FC<InfinityLogoProps> = ({ isHovered = false, size = 120 }) => {
  const pathLength = 200;

  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 220 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="infinityStroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgb(168, 85, 247)" />
          <stop offset="50%" stopColor="rgb(99, 102, 241)" />
          <stop offset="100%" stopColor="rgb(6, 182, 212)" />
        </linearGradient>
      </defs>

      <motion.path
        d="M 20 40 C 20 20, 40 10, 55 20 C 70 30, 70 50, 55 60 C 40 70, 20 60, 20 40 M 55 40 C 55 20, 75 10, 90 20 C 105 30, 105 50, 90 60 C 75 70, 55 60, 55 40 M 90 40 C 90 20, 110 10, 125 20 C 140 30, 140 50, 125 60 C 110 70, 90 60, 90 40 M 125 40 C 125 20, 145 10, 160 20 C 175 30, 175 50, 160 60 C 145 70, 125 60, 125 40 M 160 40 C 160 20, 180 10, 195 20 C 210 30, 210 50, 195 60 C 180 70, 160 60, 160 40"
        stroke="url(#infinityStroke)"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        strokeDasharray={pathLength}
        initial={{ strokeDashoffset: pathLength }}
        animate={
          isHovered
            ? { strokeDashoffset: 0 }
            : { strokeDashoffset: [pathLength, 0, pathLength] }
        }
        transition={{
          duration: isHovered ? 1 : 3,
          repeat: isHovered ? 0 : Infinity,
          ease: "linear",
        }}
      />
    </svg>
  );
};

export default InfinityLogo;
