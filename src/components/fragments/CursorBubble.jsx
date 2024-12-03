import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ThemeState } from "../../context/atoms/themeState";

const CursorBubble = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const themeState = useRecoilState(ThemeState);
  const theme = themeState[0];

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      className={`fixed pointer-events-none cursor-pointer w-4 h-4 ${
        theme === "light" ? "bg-[#1e649a]" : "bg-[#dc143c]"
      }  rounded-full transition-transform transform -translate-x-1/2 -translate-y-1/2`}
      style={{
        left: `${cursorPosition.x + 15}px`,
        top: `${cursorPosition.y + 25}px`,
      }}
    ></div>
  );
};

export default CursorBubble;
