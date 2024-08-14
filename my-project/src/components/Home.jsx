import React from "react";
import { NavLink } from "react-router-dom";
import Social from "./SocialHandles";
import { Mode } from "./Dark/Mode";

export default function Home() {
  return (
    <>
      <main className="overflow-scroll bg-[url('src/images/backgrounds/home-light-small.png')] dark:bg-[url('src/images/backgrounds/home-dark-small.png')] md:bg-[url('src/images/backgrounds/home-light-large.png')] dark:md:bg-[url('src/images/backgrounds/home-dark-large.png')] bg-cover bg-center h-screen p-8 md:p-12 lg:p-20 lg:py-10">
        <header className="flex justify-between">
          <div className="logo-wrapper h-10 w-10 md:h-12 md:w-12 ">
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
          <div className=" flex items-center">
            <a href="src/assets/resume.pdf" download="My_Resume.pdf">
              <button className="bg-neutral-800 dark:bg-white dark:text-neutral-800 text-white px-4 py-2 md:px-6  md:text-xl font-medium rounded-full">
                Resume
              </button>
            </a>
            <div className="p-2 ml-3 px-4 text-white dark:text-black md:px-6 md:text-xl bg-neutral-800 dark:bg-white rounded-full">
              <Mode />
            </div>
          </div>
        </header>
        <section className="lg:flex flex-row-reverse space-y-10 md:space-y-16 mt-32 pb-20 md:mt-44 lg:mt-40 md:mr-12 md:ml-44 ">
          <nav className="text-7xl mt-20 lg:mt-2 dark:text-white text-right ">
            <ul className="text-8xl md:text-9xl space-y-3 lg:space-y-4 font-inter font-bold">
              {" "}
              <li className="hover:line-through decoration-2 ">
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
          <div className="space-y-2 dark:text-white lg:self-end lg:space-y-3 font-montserrat">
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
