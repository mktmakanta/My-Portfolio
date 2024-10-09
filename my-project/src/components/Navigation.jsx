import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Mode } from "./Dark/Mode";

function Nav() {
  const navItems = [
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const location = useLocation();

  return (
    <nav className="flex justify-between items-center sticky dark:text-white top-0">
      <div>
        <NavLink to="/">
          <div className="w-10 lg:w-14">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 179.78 148.45"
              className="w-full h-full"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    className="stroke-current text-black dark:text-white"
                    d="M4,144.45S24.62,4,69.62,4C84.45,5,90.25,17.3,90.25,29.23c-.55,15.86-6.31,100.9-27.53,94.34C56.84,119.91,63,96,69.45,77.38c4.29-11.23,18.47-43.26,37.25-56.59,15-9.14,28.56,1.11,32.54,19.27,11.3,55.34-6.67,67.52-11.29,66.5-2.14-.81-4.54-3.6-2.07-18.77,2.13-9.54,10.26-30.11,22.36-47.61C156.65,27.79,162,29.54,162,29.54c13.45.54,11.55,41.7,11.55,41.7"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    className="fill-red-500"
                    cx="172.44"
                    cy="88.97"
                    r="7.33"
                  />
                </g>
              </g>
            </svg>
          </div>
        </NavLink>
      </div>
      <ul className="flex space-x-6 md:space-x-16 lg:text-lg font-medium items-center ">
        {navItems.map((item) => {
          // Check if the current path is the active one
          const isActive =
            location.pathname === item.path ||
            (item.path === "/" && location.pathname === "");

          return (
            !isActive && (
              <li className="hover:opacity-50" key={item.path}>
                <NavLink to={item.path}>{item.label}</NavLink>
              </li>
            )
          );
        })}
        <li className="py-1 px-3 lg:px-4 bg-neutral-800 text-white hover:opacity-60  rounded-full">
          <Mode />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
