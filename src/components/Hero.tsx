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
      id="hero"
      style={{ opacity: opacity }}
      onScroll={() => setOpacity(1 - window.scrollY / 800)}
    >
      <div className="hero-content">
        <h1>Vaasu Dhand</h1>
        <h2>I Build Things Out of This World.</h2>
      </div>
      <div className="hero-image">
        <img src={`/images/memoji-${getHeroImage}.png`} alt="Memoji" />
      </div>
    </section>
  );
}
