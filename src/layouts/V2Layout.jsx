import { Outlet } from "react-router-dom";
import Navbar from "../v2/common/Navbar";

export default function V2Layout({ onSwitch }) {
  return (
    <div className="relative">
      <div className="flex w-full items-center justify-center">
        <Navbar onSwitch={onSwitch} />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
