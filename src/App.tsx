import React from 'react';
import { Nav, Hero, Skills, Projects, Contact, Footer } from './components';
import { ViewportProvider } from './hooks/useViewport';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <ViewportProvider>
        <Skills />
      </ViewportProvider>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
