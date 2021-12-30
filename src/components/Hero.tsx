import React, { useState, useEffect, useMemo } from "react";
import { Viewport } from "../hooks/useViewport";
import { useViewport } from "../hooks";

export default function Hero() {
  // * Hooks
  const [opacity, setOpacity] = useState(1);
  const deviceType = useViewport();

  // * Chooses Image based on screen size
  const getHeroImage = useMemo(
    () =>
      deviceType === Viewport.LAPTOP || deviceType === Viewport.DESKTOP ? 1 : 2,
    [deviceType]
  );

  // * Set's Section Opacity on Scroll
  useEffect(() => {
    window.onscroll = () => {
      setOpacity(1 - window.scrollY / 800);
    };
  }, []);

  return (
    <section
      id="home"
      style={{ opacity: opacity }}
      onScroll={() => setOpacity(1 - window.scrollY / 800)}
    >
      <div className="hero-content">
        <h1 className="glitch" data-text="Vaasu Dhand">Vaasu Dhand</h1>
        <h2 className="glitch" data-text="I Build Things Out of This World.">I Build Things Out of This World.</h2>
      </div>
      <div className="hero-image">
        <img src={`/images/memoji-${getHeroImage}.png`} alt="Memoji" />
      </div>
    </section>
  );
}
