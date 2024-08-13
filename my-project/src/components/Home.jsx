import React from "react";
import { NavLink } from "react-router-dom";
import Social from "./SocialHandles";
import { Mode } from "./Dark/Mode";

export default function Home({ darkMode }) {
  return (
    <>
      <main className="overflow-scroll bg-[url('src/images/backgrounds/home-light-small.png')] dark:bg-[url('src/images/backgrounds/home-dark-small.png')] md:bg-[url('src/images/backgrounds/home-light-large.png')] dark:md:bg-[url('src/images/backgrounds/home-dark-large.png')] bg-cover bg-center h-screen p-8 md:p-12 lg:p-20 lg:py-10">
        <header className="flex justify-between">
          <div className="logo-wrapper h-10 w-10 md:h-12 md:w-12 ">
            {/* <img
              className={`w-full h-full ${darkMode ? "block" : "hidden"}`}
              src="src/images/logo-dark.png"
              alt="Dark Mode Logo"
            /> */}
            <img
              className={`w-full h-full ${darkMode ? "hidden" : "block"}`}
              src="src/images/logo-light.png"
              alt="Light Mode Logo"
            />
          </div>
          <div className=" flex items-center">
            <div className="bg-neutral-800 dark:bg-white dark:text-neutral-800 text-white px-4 py-2 md:px-6  md:text-xl font-medium rounded-full">
              Resume
            </div>
            <div className="p-2 ml-3 px-4 text-white dark:text-black md:px-6 md:text-xl bg-neutral-800 dark:bg-white rounded-full">
              <Mode />
            </div>
          </div>
        </header>
        <section className="lg:flex flex-row-reverse space-y-10 md:space-y-16 mt-32 pb-20 md:mt-44 lg:mt-40 md:mr-12 md:ml-44 ">
          <nav className="text-7xl mt-20 lg:mt-2 dark:text-white text-right ">
            <ul className="text-8xl md:text-9xl space-y-3 lg:space-y-4">
              {" "}
              <li className="hover:line-through decoration-2 j">
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
          <div className="space-y-2 dark:text-white lg:self-end lg:space-y-3">
            <h1 className="font-medium text-2xl md:text-3xl">
              MUHAMMAD MAKANTA IBRAHIM
            </h1>
            <h3 className="text-2xl md:text-3xl">Front End Developer</h3>
            <p className="text-neutral-700 dark:text-slate-300 md:text-xl">
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
