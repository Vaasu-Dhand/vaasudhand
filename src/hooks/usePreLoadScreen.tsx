import React, { useState, useEffect } from 'react'
import { PreLoadScreen } from '../components/'

export default function usePreLoadScreen(duration: number) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, duration); 
  }, [])

  const PreLoadScreenComponent: React.FC = () => {
    return (<PreLoadScreen duration={duration} />);
  };

  return {loading, PreLoadScreenComponent}
}