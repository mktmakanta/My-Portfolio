import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Nav() {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const location = useLocation();

  return (
    <nav>
      <ul>
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
      </ul>
    </nav>
  );
}

export default Nav;
