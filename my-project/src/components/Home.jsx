import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>
        <div>Resume</div>
        <nav>
          <ul>
            {" "}
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
