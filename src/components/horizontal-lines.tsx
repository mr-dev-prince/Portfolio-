import React from "react";

interface HorizontalLinesProps {
  top?: string | number;
  className?: string;
}

const HorizontalLines = ({ top, className = "" }: HorizontalLinesProps) => {
  const positionClass = top !== undefined ? "absolute" : "relative";
  return (
    <div 
      className={`${positionClass} w-full h-[1px] ${className}`}
      style={top !== undefined ? { top } : undefined}
    >
      <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.35)_1px,transparent_1px)] bg-[size:5px_2px] bg-repeat-x" />
      <div className="absolute left-96 top-[0.5px] -translate-y-1/2 -translate-x-[calc(50%-0.5px)] w-0.5 h-0.5 bg-white rounded-full shadow-[0_0_8px_1px_rgba(255,255,255,0.8)]" />
      <div className="absolute right-96 top-[0.5px] -translate-y-1/2 translate-x-[calc(50%-0.5px)] w-0.5 h-0.5 bg-white rounded-full shadow-[0_0_8px_1px_rgba(255,255,255,0.8)]" />
    </div>
  );
};

export default HorizontalLines;
