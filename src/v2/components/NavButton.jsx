import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import { NavLink } from "react-router-dom";

const NavButton = ({ icon, iconBlue, href, text }) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  const loadAnimation = (animationData) => {
    animationRef.current?.destroy();
    animationRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData,
    });
  };

  useEffect(() => {
    const isBlue = hovered || active;
    loadAnimation(isBlue ? iconBlue : icon);
  }, [hovered, active, icon, iconBlue]);

  return (
    <div className="relative group">
      <NavLink to={href}>
        {({ isActive }) => {
          if (active !== isActive) {
            setActive(isActive);
          }

          const isBlue = hovered || isActive;

          return (
            <div
              className={`overflow-hidden duration-200 p-2 rounded-lg block relative ${
                isActive ? "bg-slate-800" : "hover:bg-slate-700"
              }`}
              onMouseEnter={() => {
                setHovered(true);
                animationRef.current?.play();
              }}
              onMouseLeave={() => {
                setHovered(false);
                animationRef.current?.stop();
              }}
            >
              <span
                className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full blur-md transition-opacity duration-300 ${
                  isBlue
                    ? "opacity-90 bg-blue-500"
                    : "opacity-0 group-hover:opacity-50 bg-blue-400"
                }`}
              />
              <div
                ref={containerRef}
                style={{ width: 30, height: 30, cursor: "pointer", zIndex: 10 }}
              ></div>
              <span
                className={`absolute h-[3px] w-[3px] bottom-1 left-1/2 -translate-x-1/2 rounded-full transition-all duration-300 ${
                  isBlue
                    ? "bg-blue-400 scale-100"
                    : "bg-transparent scale-0 group-hover:bg-blue-400 group-hover:scale-100"
                }`}
              />
            </div>
          );
        }}
      </NavLink>
      <div
        className="absolute left-[140%] top-1/2 -translate-y-1/2 
          bg-gray-800 text-white text-sm font-medium rounded-lg px-3 py-1.5
          opacity-0 scale-90 translate-x-2
          group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0
          transition-all duration-300 ease-out shadow-lg whitespace-nowrap capitalize"
      >
        {text}
        <div className="absolute top-1/2 -left-1 w-2 h-2 bg-gray-800 rotate-45"></div>
      </div>
    </div>
  );
};

export default NavButton;
