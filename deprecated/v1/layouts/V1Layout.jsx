import { Outlet } from "react-router-dom";
import { Header } from "../common/Header";
import Footer from "../common/Footer";

const V1Layout = ({ onSwitch }) => {
  return (
    <>
      <Header onSwitch={onSwitch} />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default V1Layout;
