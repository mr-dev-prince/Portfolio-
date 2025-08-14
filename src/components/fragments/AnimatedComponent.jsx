import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const AnimatedComponent = ({ children, delay = 0 }) => {
  const divRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      divRef.current,
      { y: 150, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay, ease: "power3.out" },
    );
  }, [delay]);

  return <div ref={divRef}>{children}</div>;
};

export default AnimatedComponent;
