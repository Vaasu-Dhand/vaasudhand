import React, { useState, useEffect } from 'react';

export default function Hero() {
  // * Hooks
  const [opacity, setOpacity] = useState(1)

  // * Set's Section Opacity on Scroll
  useEffect(() => {
    window.onscroll = () => {
      setOpacity(1 - window.scrollY / 800)
    }
  }, []);


  // console.log(window.scrollY);

  return (
    <section id="hero" style={{ opacity: opacity }} onScroll={() => setOpacity(1 - window.scrollY / 800)}>
      
      <div className="hero-content">
        <h1>Vaasu Dhand</h1>
        <h2>I Build Things Out of This World.</h2>
      </div>
      <div className="hero-image">
        {/* <img src="./Images/LinkedIn Profile Pic.png" alt="Picture"> */}
      </div>
    </section>
  );
}
