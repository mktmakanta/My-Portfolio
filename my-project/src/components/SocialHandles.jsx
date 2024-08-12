import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {  } from "@fortawesome/free-solid-svg-icons";

export default function Social() {
  return (
    <>
      <div className=" flex justify-center fixed ">
        <ul className=" flex justify-center fixed z-50 m-0 p-0">
          <li className="bg-white m-2 h-12 w-12 rounded-full">
            <a href="#">
              {" "}
              {/* <FontAwesomeIcon
                icon={}
                className="text-blue-500 text-2xl"
              /> */}
            </a>
            1
          </li>
          <li className="bg-white m-2 h-12 w-12 rounded-full">
            <a href="#">
              <img src="" alt="" />2
            </a>
          </li>
          <li className="bg-white m-2 h-12 w-12 rounded-full">
            <a href="#">
              <img src="" alt="" />
            </a>
          </li>
          <li className="bg-white m-2 h-12 w-12 rounded-full">
            <a href="#">
              <img src="" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
