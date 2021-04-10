import React, { useState } from 'react'
import { PreLoadScreen } from '../components/'

export default function usePreLoadScreen(duration: number) {

  const [loading, setLoading] = useState(true);

    setTimeout(() => {
      setLoading(false);
    }, 4000); 

  console.log(loading, duration);
  
  const PreLoadScreenComponent: React.FC = () => {
    return (<PreLoadScreen duration={duration} />);
  };

  return {loading, PreLoadScreenComponent}
}