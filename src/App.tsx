import React from "react";
import {
  Nav,
  Hero,
  Toolkit,
  Projects,
  Contact,
  Footer,
  Background,
  SideBar,
} from "./components";
import { motion, AnimatePresence } from "framer-motion";
import { ViewportProvider } from "./hooks/useViewport";
import { usePreLoadScreen } from "./hooks";

function App() {
  // * PreLoadScreen Hook
  const duration = import.meta.env.MODE === "development" ? 100 : 4000;
  const { loading, PreLoadScreenComponent } = usePreLoadScreen(duration);

  return (
    <AnimatePresence>
      (
      {loading ? (
        <motion.div
          key="preload-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <PreLoadScreenComponent />
        </motion.div>
      ) : (
        <ViewportProvider>
          <div className="App">
            <SideBar />
            <main>
              <div className="stars">
                <div className="twinkling">
                  <Background />
                  {/* <Nav /> */}
                  <Hero />
                  <Toolkit />
                  <Projects />
                  <Contact />
                  <Footer />
                </div>
              </div>
            </main>
          </div>
        </ViewportProvider>
      )}
      )
    </AnimatePresence>
  );
}

export default App;
