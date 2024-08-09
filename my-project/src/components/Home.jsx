import React from "react";
import { NavLink } from "react-router-dom";
import Social from "./SocialHandles";

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
        <Social />
      </div>
    </>
  );
}
