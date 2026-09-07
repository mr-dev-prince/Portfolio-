import React from "react";
import { IHeading } from "../interfaces/components";

const Heading = ({ text, top }: IHeading) => {
  const positionClass = top !== undefined ? "absolute left-96 right-96" : "relative";
  return (
    <div
      className={`${positionClass} mx-96 px-3 text-2xl font-serif tracking-wide h-[50px] flex justify-center items-center w-fit`}
      style={top !== undefined ? { top } : undefined}
    >
      {text}
    </div>
  );
};

export default Heading;
