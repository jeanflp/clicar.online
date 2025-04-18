'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export function Particles() {
  const { width, height } = useWindowSize();

  return (
    <div className="absolute inset-0 pointer-events-none">
      {width > 0 && height > 0 && [...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
          initial={{
            opacity: 0,
            x: Math.random() * width,
            y: Math.random() * height,
          }}
          animate={{
            opacity: [0, 1, 0],
            x: Math.random() * width,
            y: Math.random() * height,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
} 