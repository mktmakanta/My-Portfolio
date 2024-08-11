import React from "react";
import { NavLink } from "react-router-dom";
import Social from "./SocialHandles";
import { Mode } from "./Dark/Mode";

export default function Home() {
  return (
    <>
      <main className="overflow-scroll bg-[url('src/images/backgrounds/home-light-small.png')] md:bg-[url('src/images/backgrounds/home-light-large.png')] bg-cover bg-center h-screen p-8">
        <header className="flex justify-between">
          <div className="logo-wrapper h-10 w-10">
            <img className="w-full h-full" src="src/images/logo.png" alt="" />
          </div>
          <div className=" flex items-center">
            <div className="bg-neutral-800 text-white px-4 py-2 font-medium rounded-full">
              Resume
            </div>
            <div className="p-2 ml-3 px-4 text-white bg-neutral-800 rounded-full">
              <Mode />
            </div>
          </div>
        </header>
        <section className=" space-y-10">
          <nav className="text-7xl mt-20 text-right ">
            <ul className="text-8xl space-y-3">
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
          <div className="space-y-4">
            <h1 className="font-medium text-2xl">MUHAMMAD MAKANTA IBRAHIM</h1>
            <h3 className="text-2xl">Front End Developer</h3>
            <p className="text-neutral-700">
              I build and turn complex UI/UX designs into a real world
              application taking into account acccessibility, security and
              optimization.
            </p>
          </div>
          <Social />
        </section>
      </main>
    </>
  );
}
