import React from 'react';
import { times } from 'lodash';
import { motion, AnimatePresence } from 'framer-motion';
import { useCountUp } from 'use-count-up';

export default function PreLoadScreen({ duration }: PropTypes) {
  
  const { value } = useCountUp({
    isCounting: true,
    end: 100,
    duration: duration / 1000,
  });

  return (
    <AnimatePresence>
      <motion.section
        id="preload-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Stars BG */}
        <canvas id="field"></canvas>
        <div className="wrapper">
          <div className="spinner spinner3"></div>
          <div className="load-percentage">{value}%</div>
        </div>
        {/* ClassName Options - preloader-1 and preloader-2 */}
        <div className="preloader-2">
          <div>Loading</div>
          <div>
            {times(9, (i) => (
              <span key={i} className={`line line-${i + 1}`} />
            ))}
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}

interface PropTypes {
  duration: number;
}
