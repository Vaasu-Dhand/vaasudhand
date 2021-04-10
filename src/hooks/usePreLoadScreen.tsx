import React, { useEffect, useState } from 'react'
import { PreLoadScreen } from '../components/'

export default function usePreLoadScreen() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000); 
  }, []);

  const PreLoadScreenComponent: React.FC<PropTypes> = ({ duration }) => {
    return <PreLoadScreen duration={duration} />;
  };

  return {loading, PreLoadScreenComponent}
}

interface PropTypes {
  duration: number;
}