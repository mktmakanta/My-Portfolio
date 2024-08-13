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
          <img
            className="w-10 lg:w-14"
            src="src/images/logo-light.png"
            alt=""
          />
        </NavLink>
      </div>
      <ul className="flex space-x-6 md:space-x-16 lg:text-lg font-medium items-center">
        {navItems.map((item) => {
          // Check if the current path is the active one
          const isActive =
            location.pathname === item.path ||
            (item.path === "/" && location.pathname === "");

          return (
            !isActive && (
              <li key={item.path}>
                <NavLink to={item.path}>{item.label}</NavLink>
              </li>
            )
          );
        })}
        <li className="py-1 px-3 lg:px-4 bg-neutral-800 text-white  rounded-full">
          <Mode />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
