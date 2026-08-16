import React, { useEffect, useRef } from "react";
import anime from "animejs";

const ParticleElement = () => {
  const containerRef = useRef(null);

  // Create random particles within the container
  const createParticles = () => {
    const container = containerRef.current;

    for (let i = 0; i < 700; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.left = `${Math.random() * container.offsetWidth}px`;
      particle.style.top = `${Math.random() * container.offsetHeight}px`;

      container.appendChild(particle);

      // Animate particle in random motion
      anime({
        targets: particle,
        translateX: () => Math.random() * 200 - 100, // Move randomly within X
        translateY: () => Math.random() * 200 - 100, // Move randomly within Y
        easing: "easeInOutSine",
        duration: 2000 + Math.random() * 2000, // Random duration
        loop: true,
        direction: "alternate",
      });
    }
  };

  useEffect(() => {
    createParticles();

    return () => {
      // Cleanup particles on unmount
      const container = containerRef.current;
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "200px",
        height: "200px",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "transparent",
        borderTop: "2px solid white",
        borderEndEndRadius: "100%",
        margin: "50px auto",
      }}
    ></div>
  );
};

export default ParticleElement;
