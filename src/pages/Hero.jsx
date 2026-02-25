import React, { useEffect, useRef } from "react";
import "../styles/Hero.css";
import Apply from "../components/Apply";
import Typewriter from 'typewriter-effect';

function Hero() {
  const orbit1Count = 4; 
  const orbit2Count = 3;

  const sat1BackRefs = useRef([]);
  const sat1FrontRefs = useRef([]);
  const sat2BackRefs = useRef([]);
  const sat2FrontRefs = useRef([]);

  useEffect(() => {
    let angle = 0;
    const animate = () => {
      angle += 0.015;

      for (let i = 0; i < orbit1Count; i++) {
        const spacing = (Math.PI * 2) / orbit1Count;
        const currentAngle = angle + (i * spacing);
        const x = 399 * Math.cos(currentAngle);
        const y = 106 * Math.sin(currentAngle);
        const transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;

        const backEl = sat1BackRefs.current[i];
        const frontEl = sat1FrontRefs.current[i];

        if (backEl) backEl.style.transform = transform;
        if (frontEl) frontEl.style.transform = transform;

        if (y < 0) {
          if (backEl) backEl.style.opacity = "1";
          if (frontEl) frontEl.style.opacity = "0";
        } else {
          if (backEl) backEl.style.opacity = "0";
          if (frontEl) frontEl.style.opacity = "1";
        }
      }

      for (let i = 0; i < orbit2Count; i++) {
        const spacing = (Math.PI * 2) / orbit2Count;
        const currentAngle = (-angle * 1.2) + (i * spacing);
        const x = 313 * Math.cos(currentAngle);
        const y = 100 * Math.sin(currentAngle);
        const transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;

        const backEl = sat2BackRefs.current[i];
        const frontEl = sat2FrontRefs.current[i];

        if (backEl) backEl.style.transform = transform;
        if (frontEl) frontEl.style.transform = transform;

        if (y < 0) {
          if (backEl) backEl.style.opacity = "1";
          if (frontEl) frontEl.style.opacity = "0";
        } else {
          if (backEl) backEl.style.opacity = "0";
          if (frontEl) frontEl.style.opacity = "1";
        }
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [orbit1Count, orbit2Count]);

  const createSats = (count, refs) => 
    Array.from({ length: count }).map((_, i) => (
      <div key={i} className="satellite-js" ref={el => refs.current[i] = el} />
    ));

  return (
    <section id="hero">
      <div className="heroRow">
        <div className="left">
          <div className="texts">
            <Typewriter
              options={{
                strings: [
                  'SHARE<br/>YOUR<br/><span class="orange">ABILITY</span>',
                  'MY<br/><span class="orange">ABILITY</span><br/>SHARE'
                ],
                autoStart: true, loop: true, pauseFor: 2000,
              }}
            />
          </div>
          <Apply/>
        </div>

        <div className="planet-container">

          <div className="orbit-1-size orbit-1-border orbit-line-container layer-back" />
          <div className="orbit-2-size orbit-2-border orbit-line-container layer-back" />
          
          <div className="orbit-1-size orbit-sat-container layer-back">
            {createSats(orbit1Count, sat1BackRefs)}
          </div>
          <div className="orbit-2-size orbit-sat-container layer-back">
            {createSats(orbit2Count, sat2BackRefs)}
          </div>

          <div className="main-planet"></div>

          <div className="orbit-1-size orbit-1-border orbit-line-container layer-front" />
          <div className="orbit-2-size orbit-2-border orbit-line-container layer-front" />
          
          <div className="orbit-1-size orbit-sat-container layer-front">
            {createSats(orbit1Count, sat1FrontRefs)}
          </div>
          <div className="orbit-2-size orbit-sat-container layer-front">
            {createSats(orbit2Count, sat2FrontRefs)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;