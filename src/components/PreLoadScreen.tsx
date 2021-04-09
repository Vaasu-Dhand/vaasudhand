import React from 'react';
import { times } from 'lodash';

export default function PreLoadScreen() {
  return (
    <>
      {/* ClassName Options - preloader-1 and preloader-2 */}
      <div className="preloader-2"> 
        <div>Loading</div>
        <div>
          {times(9, (i) => <span key={i} className={`line line-${i + 1}`} />)}
        </div>
      </div>
    </>
  );
}
