import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  return (
    <>
      <div className=" flex justify-center fixed dark:text-white  bottom-5 md:rotate-90 lg:bottom-1/4  md:right-3/4 right-0 left-0 z-50  ">
        <ul className=" flex justify-center md:-ml-64 lg:mt-40 lg:ml-44  ">
          <li className="cursor-pointer m-2 h-12 w-12 rounded-full flex items-center hover:opacity-50 justify-center">
            <a href="#">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-2xl md:text-lg"
              />
            </a>
          </li>
          <li className="cursor-pointer m-2  h-12 w-12 rounded-full flex items-center hover:opacity-50 justify-center">
            <a href="#">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-2xl md:text-lg"
              />
            </a>
          </li>
          <li className="cursor-pointer m-2  h-12 w-12 rounded-full flex items-center justify-center hover:opacity-50">
            <a href="#">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-2xl md:text-lg"
              />
            </a>
          </li>

          <li className="cursor-pointer m-2  h-12 w-12 rounded-full flex items-center justify-center hover:opacity-50">
            <a href="#">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-2xl md:text-lg"
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
