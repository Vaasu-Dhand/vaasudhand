import React, { useState, useEffect } from 'react';
import {
  Nav,
  Hero,
  Skills,
  Projects,
  Contact,
  Footer,
  Background,
  PreLoadScreen,
} from './components';
import { ViewportProvider } from './hooks/useViewport';

function App() {
  const duration: number = 4000;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, duration);
  }, []);

  return (
    // loading ? (
    <PreLoadScreen duration={duration} />
  // ) : (
  //   <div className="App">
  //     <div className="stars">
  //       <div className="twinkling">
  //         <Background />
  //         <Nav />
  //         <Hero />
  //         <ViewportProvider>
  //           <Skills />
  //         </ViewportProvider>
  //         <Projects />
  //         <Contact />
  //         <Footer />
  //       </div>
  //     </div>
  //   </div>
  //   )
  );
}

export default App;
