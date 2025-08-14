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
    <div className="group relative">
      <NavLink to={href}>
        {({ isActive }) => {
          if (active !== isActive) {
            setActive(isActive);
          }

          const isBlue = hovered || isActive;

          return (
            <div
              className={`relative block overflow-hidden rounded-lg p-2 duration-200 ${
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
                className={`absolute bottom-1 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full blur-md transition-opacity duration-300 ${
                  isBlue
                    ? "bg-blue-500 opacity-90"
                    : "bg-blue-400 opacity-0 group-hover:opacity-50"
                }`}
              />
              <div
                ref={containerRef}
                style={{ width: 30, height: 30, cursor: "pointer", zIndex: 10 }}
              ></div>
              <span
                className={`absolute bottom-1 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full transition-all duration-300 ${
                  isBlue
                    ? "scale-100 bg-blue-400"
                    : "scale-0 bg-transparent group-hover:scale-100 group-hover:bg-blue-400"
                }`}
              />
            </div>
          );
        }}
      </NavLink>
      <div className="absolute left-[140%] top-1/2 hidden -translate-y-1/2 translate-x-2 scale-90 whitespace-nowrap rounded-lg bg-gray-800 px-3 py-1.5 text-sm font-medium capitalize text-white opacity-0 shadow-lg transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 md:block">
        {text}
        <div className="absolute -left-1 top-1/2 h-2 w-2 rotate-45 bg-gray-800"></div>
      </div>
    </div>
  );
};

export default NavButton;
