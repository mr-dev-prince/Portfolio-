import React from "react";
import { Link, NavLink } from "react-router-dom";

const Experiences = [
  { id: "001", title: "Aerchain", image: "", link: "/" },
  { id: "002", title: "Sherwa.tech", image: "", link: "/" },
  { id: "003", title: "SIH'23", image: "", link: "/" },
];

const Ventures = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <p className="font-slabo text-4xl text-white">Experiences.</p>
        <Link
          to="/work"
          className="text-xs JetBrains text-gray-300 bg-gray-600 px-3 py-1 rounded-md 
             hover:scale-110 transition-transform duration-200
             hover:bg-gray-800 hover:text-blue-500 cursor-pointer"
          style={{ display: "inline-block" }}
        >
          <p className="text-sm transform-none">View more</p>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-6">
        {Experiences.map((e) => (
          <Card key={e.id} {...e} />
        ))}
      </div>
    </>
  );
};

const Card = ({ image, link }) => {
  return (
    <NavLink
      to={link}
      className="flex justify-center items-center flex-col border border-gray-700 py-12 rounded-xl gap-4"
    >
      <div className="h-12 w-12 bg-gradient-to-br from-pink-500 via-sky-400 to-blue-600 rounded-md blur-sm" />
      <p className="text-sm text-white">Aug 2024 - Mar 2025</p>
    </NavLink>
  );
};

export default Ventures;
