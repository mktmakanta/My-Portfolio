import React from "react";
import { NavLink } from "react-router-dom";
import Social from "./SocialHandles";

export default function Home() {
  return (
    <>
      <main className="bg-[url('src/images/backgrounds/home-light-large.png')] bg-cover bg-center h-screen">
        <header className="flex items-center">
          <div className="logo-wrapper ">
            <img src="src/images/logo.png" alt="" />
          </div>
          <div>Resume</div>
        </header>
        <section>
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
        </section>
      </main>
    </>
  );
}
