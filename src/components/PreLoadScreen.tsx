import React from 'react';
import { times } from 'lodash';
import { useCountUp } from 'use-count-up'

export default function PreLoadScreen({ duration }: PropTypes) {

  const { value } = useCountUp({
    isCounting: true,
    end: 100,
    duration: duration/1000,
  })

  return (
    <>
      <canvas id="field"></canvas>
      {/* ClassName Options - preloader-1 and preloader-2 */}
      <div className="preloader-2">
        <div>{value}%</div>
        <div>Loading</div>
        <div>
          {times(9, (i) => <span key={i} className={`line line-${i + 1}`} />)}
        </div>
      </div>
    </>
  );
}

interface PropTypes {
  duration: number
}