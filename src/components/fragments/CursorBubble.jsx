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
      className={`pointer-events-none fixed h-4 w-4 cursor-pointer ${
        theme === "light" ? "bg-[#1e649a]" : "bg-[#dc143c]"
      } -translate-x-1/2 -translate-y-1/2 transform rounded-full transition-transform`}
      style={{
        left: `${cursorPosition.x + 15}px`,
        top: `${cursorPosition.y + 25}px`,
      }}
    ></div>
  );
};

export default CursorBubble;
