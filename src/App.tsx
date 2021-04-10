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
import usePreLoadScreen from './hooks/usePreLoadScreen'

function App() {

  // * PreLoadScreen Hook
  const {loading, PreLoadScreenComponent} = usePreLoadScreen();

  return (
    loading ? (
    <PreLoadScreenComponent duration={4000} />
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
    )
  );
}

export default App;
