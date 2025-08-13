import { Outlet } from "react-router-dom";
import Navbar from "../v2/common/Navbar";

export default function V2Layout({ onSwitch }) {
  return (
    <div className="relative">
      <Navbar onSwitch={onSwitch} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
