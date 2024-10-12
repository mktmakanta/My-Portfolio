import React from "react";
import Nav from "./Navigation";
import Social from "./SocialHandles";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <section className="bg-[url('/images/backgrounds/about-light-small.png')] dark:bg-[url('/images/backgrounds/about-dark-small.png')] md:bg-[url('/images/backgrounds/about-light-large.png')] dark:md:bg-[url('/images/backgrounds/about-dark-large.png')] bg-cover bg-center h-screen p-8 md:p-12 lg:p-20 overflow-scroll ">
        <Nav />
        <div className="max-w-7xl mx-auto px-10 mt-20 pb-20 md:ml-44 md:mr-12 md:mt-44 lg:mt-24 lg:grid lg:grid-cols-5 gap-5 dark:text-white font-montserrat ">
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
              I'm Makanta, A frontend developer
            </h2>
            <div className="text-justify md:text-lg overflow-hidden">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                voluptatibus nostrum dolores porro sit id itaque eum. Error
                architecto in esse debitis vitae obcaecati ex totam! Dolores
                sapiente non reiciendis.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
                sint ipsa excepturi minus natus commodi consectetur, dignissimos
                deserunt odio maxime magnam ad blanditiis qui reprehenderit
                quisquam? Minima earum, aperiam rerum facilis quod nobis totam
                id. Aut repellat pariatur, quisquam nobis illum sit laborum
                exercitationem tenetur!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                praesentium voluptas aperiam officia ipsum, et tenetur
                reiciendis ducimus minus consectetur sit, quasi magnam. Commodi
                eos nulla officia distinctio suscipit! Natus dolores fugit
                molestiae reiciendis.
              </p>
            </div>
            <div className="space-y-2 text-lg">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Excepturi, et. Repellat soluta exercitationem natus eaque? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Nisi, beatae.
              </p>
              <button
                className=" py-2 px-6 lg:px-8 lg:py-3 lg:text-2xl bg-neutral-800 dark:bg-white dark:text-black hover:text-violet-500 dark:hover:text-violet-500 text-white rounded-full font-medium  md:text-lg"
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
                className=" py-2 px-6 lg:px-8 lg:py-3 lg:text-2xl bg-neutral-800 dark:bg-white dark:text-black hover:text-violet-500 dark:hover:text-violet-500 text-white rounded-full font-medium md:text-lg"
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
            <img src="/images/my-profile.jpg" alt="" />
          </motion.div>
          <Social />
        </div>
      </section>
    </>
  );
}
