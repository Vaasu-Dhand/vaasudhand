import React, { useState, useEffect } from 'react';
import { times } from 'lodash';
import { useCountUp } from 'use-count-up';

export default function PreLoadScreen({ duration }: PropTypes) {
  
  const { value } = useCountUp({
    isCounting: true,
    end: 100,
    duration: duration / 1000,
  });

  return (
        <section
        id="preload-screen"
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
      </section>

  );
}

interface PropTypes {
  duration: number;
}
