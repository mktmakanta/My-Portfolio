import React from "react";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

//animation
const variants = {
  hovered: { scale: 1.2, rotote: 90 },
  unhovered: { scale: 1, rotate: 0 },
};

export default function Social() {
  return (
    <>
      <div className=" flex justify-center fixed dark:text-white  bottom-5 md:rotate-90 lg:bottom-1/4  md:right-3/4 right-0 left-0 z-50  ">
        <ul className=" flex justify-center md:-ml-64 lg:mt-40 lg:ml-44  ">
          <motion.li
            whileHover={{ scale: 1.3, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="cursor-pointer m-2 h-12 w-12 rounded-full flex items-center  justify-center"
          >
            <NavLink to="https://x.com/IbrahimMakanta">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-2xl md:text-lg"
              />
            </NavLink>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.3, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="cursor-pointer m-2  h-12 w-12 rounded-full flex items-center  justify-center"
          >
            <NavLink to="https://github.com/mktmakanta">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-2xl md:text-lg"
              />
            </NavLink>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.3, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="cursor-pointer m-2  h-12 w-12 rounded-full flex items-center justify-center "
          >
            <NavLink to="https://www.linkedin.com/in/muhammad-ibrahim-a18764246/">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-2xl md:text-lg"
              />
            </NavLink>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.3, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="cursor-pointer m-2  h-12 w-12 rounded-full flex items-center justify-center "
          >
            <NavLink href="#">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-2xl md:text-lg"
              />
            </NavLink>
          </motion.li>
        </ul>
      </div>
    </>
  );
}
