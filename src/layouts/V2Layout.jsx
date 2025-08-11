import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Navbar from "../v2/common/Navbar";

export default function V2Layout({ onSwitch }) {
  return (
    <>
      <Navbar onSwitch={onSwitch} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
