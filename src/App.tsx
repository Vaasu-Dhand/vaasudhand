import React from 'react';
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

  return (
    <AnimatePresence>
      (
      {loading ? (
        <motion.div
          key="preload-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0}}
        >
          <PreLoadScreenComponent />
        </motion.div>
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
      )}
      )
    </AnimatePresence>
  );
}

export default App;