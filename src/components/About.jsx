import React from "react";
import Nav from "./Navigation";
import Social from "./SocialHandles";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Tools } from "../db/tools";
import { Languages } from "../db/languages";

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

            <div className="  overflow-hidden">
              <p>
                I'm a frontend developer with 3+ years of experience in crafting
                accessible, engaging, and pixel-perfect digital experiences. I
                specialize in transforming complex UI/UX designs into optimized,
                user-friendly applications, prioritizing security, performance,
                inclusivity, and client collaboration to ensure solutions that
                meet diverse user needs.
              </p>
              <div className="space-y-2 mt-6 ">
                <h1 className="font-medium text-xl">Education</h1>
                <p>
                  I hold a Bachelor of Technology in Electrical and Electronics
                  Engineering from the{" "}
                  <span className="font-semibold text-violet-500">
                    Federal University of Technology, Minna, Nigeria.
                  </span>{" "}
                  While my primary focus during my studies was on engineering
                  principles and systems, I also cultivated a strong interest in
                  programming and web development through various courses and
                  personal projects. This blend of engineering knowledge and
                  programming skills has provided me with a unique perspective
                  on problem-solving and designing user-centric digital
                  solutions. My background in engineering enables me to approach
                  frontend development with a logical and structured mindset,
                  making me well-equipped to create secure, efficient, and
                  scalable applications.
                </p>
              </div>
              <div className="space-y-5 mt-5">
                <div className="space-y-3 ">
                  <h1 className="font-medium text-xl">Languages</h1>
                  <ul className="flex gap-3 flex-wrap dark:text-white">
                    {Languages.map((lang) => (
                      <li className="flex justify-center items-center  font-medium gap-3  px-3 py-1 bg-violet-500/40 rounded-full">
                        {lang}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3 ">
                  <h1 className="font-medium text-xl">Tools</h1>
                  <ul className="flex gap-3 flex-wrap dark:text-white">
                    {Tools.map((tool) => (
                      <li className=" flex justify-center items-center font-medium  px-3 py-1 bg-violet-500/40 rounded-full">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-3 text-lg ">
              <p>
                I'm actively seeking job opportunities where I can contribute,
                grow, and continue learning. If you have a role that aligns with
                my skills and experience, feel free to reach out!{" "}
                <div className="animate-bounce inline-block">👇 </div>
              </p>
              <div className="md:space-x-3">
                <NavLink to="/contact">
                  <button
                    className=" py-2 px-5 lg:px-7 lg:py-2 lg:text-2xl bg-neutral-800 dark:bg-white dark:text-black hover:text-violet-600 dark:hover:text-violet-500 transition  hover:duration-700 hover:ease-in-out text-white rounded-full font-medium md:text-lg"
                    type="submit"
                  >
                    Contact Me
                  </button>
                </NavLink>
                <button
                  className="my-4 py-2 px-5 lg:px-7 lg:py-2 lg:text-2xl bg-neutral-800 dark:bg-white dark:text-black hover:text-violet-600 dark:hover:text-violet-500 transition  hover:duration-700 hover:ease-in-ou text-white rounded-full font-medium  md:text-lg"
                  type="submit"
                >
                  <a href="/resume.pdf" download="resume.pdf">
                    Resume
                  </a>
                </button>
              </div>
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
