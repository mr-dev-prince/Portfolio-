import { useState } from "react";
import logo from "../Assets/name2.png";
import logo2 from "../Assets/P.png";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import Dashboard from "../components/Dashboard";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [animation, setAnimation] = useState("");

  const handleAnimationClick = () => {
    setAnimation("animate-bounce");
    void document.body.offsetWidth;
    setTimeout(() => {
      setAnimation("");
    }, 1000);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center lg:px-8 pr-8">
      <div className="hidden lg:block">
        <Link onClick={handleAnimationClick}>
          <img className={`h-16 ${animation}`} src={logo2} alt="" />
        </Link>
      </div>
      <div className="">
        <Link onClick={handleAnimationClick} to={"/"}>
          <img
            className={`h-24 ${animation} backdrop:shadow-xl backdrop:shadow-white`}
            src={logo}
            alt=""
          />
        </Link>
      </div>
      <Link
        onClick={() => setMenuOpen(!menuOpen)}
        className=" outline outline-1 flex text-white lg:hidden p-2"
      >
        <RiMenu3Fill size={20} />
      </Link>
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } fixed lg:static right-7 top-20`}
      >
        <Dashboard />
      </div>
    </div>
  );
};
