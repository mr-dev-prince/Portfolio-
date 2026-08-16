import { Outlet } from "react-router-dom";
import Navbar from "../v2/common/Navbar";

export default function V2Layout({ onSwitch }) {
  return (
    <div className="relative">
      <img
        className="fixed top-4 right-4 rounded-md p-1"
        src="https://hits.sh/dev-prince.vercel.app.svg?style=flat-square&label=🙋🏻‍♂️&color=blue"
        alt="visitors badge"
      />
      <div className="flex w-full items-center justify-center">
        <Navbar onSwitch={onSwitch} />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
