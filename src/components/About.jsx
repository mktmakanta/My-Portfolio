import React from "react";
import Nav from "./Navigation";
import Social from "./SocialHandles";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <section className="bg-[url('/images/backgrounds/about-light-small.png')] dark:bg-[url('/images/backgrounds/about-dark-small.png')] md:bg-[url('/images/backgrounds/about-light-large.png')] dark:md:bg-[url('/images/backgrounds/about-dark-large.png')] bg-cover bg-center h-screen p-8 md:p-12 lg:p-20 overflow-scroll ">
        <Nav />
        <div className=" space-y-2 max-w-7xl mx-auto px-3 mt-20 pb-20 md:ml-44 md:mr-12 md:mt-44 lg:mt-24 lg:grid lg:grid-cols-5 gap-5 dark:text-white font-montserrat ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className=" space-y-4 col-span-3 lg:pt-24"
          >
            <h1 className="text-6xl md:text-9xl font-inter font-semibold">
              ABOUT
            </h1>
            <h2 className="text-3xl md:text-4xl">
              Makanta, A frontend developer
            </h2>
            <div className="  overflow-hidden">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                voluptatibus nostrum dolores porro sit id itaque eum. Error
                architecto in esse debitis vitae obcaecati ex totam! Dolores
                sapiente non reiciendis.
              </p>

              <div className="space-y-4">
                <div className="space-y-3 ">
                  <h1 className="font-medium text-xl">Languages</h1>
                  <ul className="flex gap-3 flex-wrap dark:text-white">
                    <li className=" flex justify-center items-center font-medium  px-3 py-1 bg-violet-500/40 rounded-full">
                      HTML
                    </li>
                    <li className=" flex justify-center items-center font-medium flex- px-3 py-1 bg-violet-500/40 rounded-full">
                      CSS & SCSS
                    </li>
                    <li className=" flex justify-center items-center font-medium  px-3 py-1 bg-violet-500/40 rounded-full">
                      Javascript
                    </li>
                    <li className=" flex justify-center items-center font-medium  px-3 py-1 bg-violet-500/40 rounded-full">
                      React
                    </li>
                    <li className=" flex justify-center items-center font-medium  px-3 py-1 bg-violet-500/40 rounded-full">
                      Next.js
                    </li>
                    <li className=" flex justify-center items-center font-medium  px-3 py-1 bg-violet-500/40 rounded-full">
                      Node.js
                    </li>
                    <li className=" flex justify-center items-center font-medium  px-3 py-1 bg-violet-500/40 rounded-full">
                      Git
                    </li>
                    <li className=" flex justify-center items-center font-medium  px-3 py-1 bg-violet-500/40 rounded-full">
                      Redux
                    </li>
                  </ul>
                </div>
                <div className="space-y-3 ">
                  <h1 className="font-medium text-xl">Tools</h1>
                  <ul className="flex gap-3 flex-wrap dark:text-white">
                    <li className=" flex justify-center items-center font-medium  px-3 py-1 bg-violet-500/40 rounded-full">
                      Tailwind CSS
                    </li>
                    <li className=" flex justify-center items-center font-medium  px-3 py-1 bg-violet-500/40 rounded-full">
                      Figma
                    </li>
                    <li className=" flex justify-center items-center font-medium  px-3 py-1 bg-violet-500/40 rounded-full">
                      GitHub
                    </li>

                    <li className=" flex justify-center items-center font-medium  px-3 py-1 bg-violet-500/40 rounded-full">
                      VS Code
                    </li>
                    <li className=" flex justify-center items-center font-medium  px-3 py-1 bg-violet-500/40 rounded-full">
                      Framer-Motion
                    </li>
                    <li className=" flex justify-center items-center font-medium  px-3 py-1 bg-violet-500/40 rounded-full">
                      Vercel
                    </li>
                    <li className=" flex justify-center items-center font-medium  px-3 py-1 bg-violet-500/40 rounded-full">
                      Shadcn UI
                    </li>
                    <li className=" flex justify-center items-center font-medium  px-3 py-1 bg-violet-500/40 rounded-full">
                      More ...
                    </li>
                  </ul>
                </div>
              </div>

              <button
                className="my-4 py-2 px-6 lg:px-8 lg:py-3 lg:text-2xl bg-neutral-800 dark:bg-white dark:text-black hover:text-violet-600 dark:hover:text-violet-500 transition  hover:duration-700 hover:ease-in-ou text-white rounded-full font-medium  md:text-lg"
                type="submit"
              >
                My CV
              </button>
            </div>
            <div className="space-y-3 text-lg">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora quibusdam ullam soluta quia enim facere consequatur quae
                beatae aut commodi?
              </p>
              <button
                className=" py-2 px-6 lg:px-8 lg:py-3 lg:text-2xl bg-neutral-800 dark:bg-white dark:text-black hover:text-violet-600 dark:hover:text-violet-500 transition  hover:duration-700 hover:ease-in-out text-white rounded-full font-medium md:text-lg"
                type="submit"
              >
                Contact Me
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 400, opacity: 0, scale: 1.1 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.1 }}
            whileHover={{ scale: 1.1 }}
            className="w-72 md:w-96 mt-4 col-span-2"
          >
            <img src="/images/my-profile.jpg" alt="profile picture" />
          </motion.div>
          <Social />
        </div>
      </section>
    </>
  );
}
