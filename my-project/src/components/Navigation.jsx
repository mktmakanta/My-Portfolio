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
    <nav className="px-14">
      <ul className=" flex justify-between">
        <li>
          <NavLink to="/">
            <img className="w-12" src="src/images/logo.png" alt="" />
          </NavLink>
        </li>
        <div className="flex space-x-16">
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
          <Mode />
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
