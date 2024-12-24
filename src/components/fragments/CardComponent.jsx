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
        <div className="w-80 h-96">
          <div
            className={`cursor-grab flex justify-between ${
              theme === "dark"
                ? "hover:bg-[#dc143c] bg-[#1f1f1f] text-white hover:text-[#1f1f1f]"
                : "hover:bg-[#1e649a] bg-[#FFFFE4] text-[#1f1f1f] hover:text-white"
            } w-full p-2 fivo`}
          >
            <p className="uppercase font-bold tracking-wide ">{props.title}</p>
            <p onClick={handleClick} className="text-xl cursor-pointer">
              {openCard ? "-" : "+"}
            </p>
          </div>
          <div className="gridLayer"></div>
          <div
            className={`pointer-events-none h-96  ${
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
