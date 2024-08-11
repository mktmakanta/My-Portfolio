import React from "react";
import { NavLink } from "react-router-dom";
import Social from "./SocialHandles";
import { Mode } from "./Dark/Mode";

export default function Home() {
  return (
    <>
      <main className="bg-[url('src/images/backgrounds/home-light-small.png')] md:bg-[url('src/images/backgrounds/home-light-large.png')] bg-cover bg-center h-screen p-8">
        <header className="">
          <div className="logo-wrapper h-10 w-10">
            <img className="w-full h-full" src="src/images/logo.png" alt="" />
          </div>
          <div className="">
            <div className="">Resume</div>
            <div className="p-2 ml-4 px-4 text-white bg-neutral-800 rounded-full">
              <Mode />
            </div>
          </div>
        </header>
        <section className="grid grid-cols-2 px-32 pt-32 pl-64  items-end">
          <div className="space-y-4">
            <h1 className="font-bold">MUHAMMAD MAKANTA IBRAHIM</h1>
            <h3>Front End Developer</h3>
            <p>
              I build and turn complex UI/UX designs into a real world
              application taking into account acccessibility, security and
              optimization.
            </p>
          </div>
          <nav className="text-9xl justify-self-end text-right">
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
