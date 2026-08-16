import React, { useState } from "react";
import Draggable from "react-draggable";
import { useRecoilState } from "recoil";
import { ThemeState } from "../../context/atoms/themeState";

const CardComponent = (props) => {
  const [openCard, setOpenCard] = useState(true);
  const themeState = useRecoilState(ThemeState);
  const theme = themeState[0];

  const handleClick = () => {
    setOpenCard(!openCard);
  };

  return (
    <div className={`${props.className}`} onMouseDown={props.onMouseDown}>
      <Draggable
        bounds={{ left: -9999, right: 9999, top: -9999, bottom: 9999 }}
      >
        <div className="h-96 w-80">
          <div
            className={`flex cursor-grab justify-between ${
              theme === "dark"
                ? "bg-[#1f1f1f] text-white hover:bg-[#dc143c] hover:text-[#1f1f1f]"
                : "bg-[#FFFFE4] text-[#1f1f1f] hover:bg-[#1e649a] hover:text-white"
            } fivo w-full p-2`}
          >
            <p className="font-bold uppercase tracking-wide">{props.title}</p>
            <p onClick={handleClick} className="cursor-pointer text-xl">
              {openCard ? "-" : "+"}
            </p>
          </div>
          <div className="gridLayer"></div>
          <div
            className={`pointer-events-none h-96 ${
              openCard ? "block" : "hidden"
            } `}
          >
            <img
              className="h-full w-full object-cover"
              src={props.src}
              alt="image_src"
            />
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default CardComponent;
