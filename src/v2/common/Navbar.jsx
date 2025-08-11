import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ onSwitch }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-wide text-gray-900 dark:text-white"
        >
          My Portfolio<span className="text-blue-500">.</span>
        </NavLink>
        <div className="hidden md:flex gap-6">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-blue-500 ${isActive ? "text-blue-500" : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              `hover:text-blue-500 ${isActive ? "text-blue-500" : ""}`
            }
          >
            Work
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `hover:text-blue-500 ${isActive ? "text-blue-500" : ""}`
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-blue-500 ${isActive ? "text-blue-500" : ""}`
            }
          >
            Contact
          </NavLink>
        </div>
        <button
          onClick={onSwitch}
          className="px-4 py-2 text-sm font-semibold rounded-md border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          View Classic Version
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
