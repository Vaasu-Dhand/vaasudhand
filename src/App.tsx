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
import { ViewportProvider } from './hooks/useViewport';

function App() {
  return (
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
