import React from "react";
import { NavLink } from "react-router-dom";
import Social from "./SocialHandles";
import { Mode } from "./Dark/Mode";
import "../styles/name.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <main className=" overflow-scroll bg-[url('/images/backgrounds/home-light-small.png')] dark:bg-[url('/images/backgrounds/home-dark-small.png')] md:bg-[url('/images/backgrounds/home-light-large.png')] dark:md:bg-[url('/images/backgrounds/home-dark-large.png')] bg-cover bg-center h-screen p-8 md:p-12 lg:p-20 lg:py-10">
        <div className="max-w-7xl mx-auto ">
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
              <a href="/resume.pdf" download="resume.pdf">
                <button className="bg-neutral-800 dark:bg-white hover:opacity-50 hover:duration-500 hover:ease-linear dark:text-neutral-800 text-white px-4 py-2 md:px-6  md:text-xl font-medium rounded-full">
                  Resume
                </button>
              </a>
              <div className="p-2 ml-3 px-4 text-white dark:text-black md:px-6 md:text-xl bg-neutral-800 dark:bg-white rounded-full hover:opacity-50 hover:duration-500">
                <Mode />
              </div>
            </div>
          </header>

          {/* section
           */}
          <section className="lg:flex flex-row-reverse space-y-10 md:space-y-16 mt-32 pb-20 md:mt-44 lg:mt-40 md:mr-12 md:ml-44 ">
            <nav className="mt-20 lg:mt-2 dark:text-white text-right ">
              <ul className="text-7xl md:text-9xl space-y-3 lg:space-y-4 font-inter font-bold">
                {" "}
                <motion.li
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.7 }}
                  initial={{ x: 400, opacity: 0, scale: 0.1 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  className=""
                >
                  <NavLink to="/about">About</NavLink>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 1.1 }}
                  initial={{ x: 400, opacity: 0, scale: 0.1 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  className=""
                >
                  <NavLink to="/projects">Projects</NavLink>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 1.5 }}
                  initial={{ x: 400, opacity: 0, scale: 0.1 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  className=""
                >
                  <NavLink to="/contact">Contact</NavLink>
                </motion.li>
              </ul>
            </nav>

            <div className="space-y-2 dark:text-white lg:self-end lg:space-y-3 font-montserrat">
              <h1 className="my-name font-semibold text-3xl">
                Hey, I'm Makanta
              </h1>
              <h3 className="text-2xl md:text-3xl">A Frontend Developer</h3>

              <p className=" text-neutral-700 dark:text-slate-300 md:text-lg ">
                Passionate React & Next.js Developer | Specializing in Frontend
                Development with TypeScript, Modern UI Design, and Scalable Web
                Applications. I excel at transforming complex UI/UX designs into
                optimized, user-friendly applications that prioritize security,
                performance, and inclusivity.
              </p>
            </div>
            <Social />
          </section>
        </div>
      </main>
    </>
  );
}
