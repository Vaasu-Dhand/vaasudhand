import React, { useState } from 'react';
import {
  Nav,
  Hero,
  Skills,
  Projects,
  Contact,
  Footer,
  Background,
} from './components';
import { motion, AnimatePresence } from 'framer-motion';
import { ViewportProvider } from './hooks/useViewport';
import usePreLoadScreen from './hooks/usePreLoadScreen';

function App() {
  // * PreLoadScreen Hook
  const { loading, PreLoadScreenComponent } = usePreLoadScreen(4000);
  const [show, setShow] = useState(true)

  setTimeout(() => {
    setShow(false)
  }, 3300);

  return loading ? (
    <AnimatePresence>
      {show && (<motion.div
        key="preload-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <PreLoadScreenComponent />
      </motion.div>)}
    </AnimatePresence>
  ) : (
    <div className="App">
      <div className="stars">
        <div className="twinkling">
          <Background />
          <Nav />
          <Hero />
          <ViewportProvider>
            <Skills />
          </ViewportProvider>
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
