import React from "react";


const Home = () => {

  return (
    <div className="flex pl-36 min-h-screen">
      <div className=" h-full mt-72 flex flex-col gap-4">
        <div >
          <p  className="text text-2xl font-semibold tracking-wide">
            Hey, This is Prince.
          </p>
        </div>
        <div className="uppercase text-[#F2E8DE] text-8xl font-bold fivo tracking-wide">
          <div className="flex gap-4 items-center">
            <p className=" -rotate-6 bg-[#D9F24F] h-20 px-4 text-[#1f1f1f] text-center">
              Tech
            </p>
            <p>ninja</p>
          </div>
          <p>mastering</p>
          <p>digital domains.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
