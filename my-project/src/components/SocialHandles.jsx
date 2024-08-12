import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {  } from "@fortawesome/free-solid-svg-icons";

export default function Social() {
  return (
    <>
      <div className="  ">
        <ul className=" space-x-6 inset-x-0 flex flex-row px-10 fixed bottom-5">
          <li className="bg-white h-12 w-12 rounded-full">
            <a href="#">
              {" "}
              {/* <FontAwesomeIcon
                icon={}
                className="text-blue-500 text-2xl"
              /> */}
            </a>
            1
          </li>
          <li className="bg-white  h-12 w-12 rounded-full">
            <a href="#">
              <img src="" alt="" />2
            </a>
          </li>
          <li className="bg-white h-12 w-12 rounded-full">
            <a href="#">
              <img src="" alt="" />
            </a>
          </li>
          <li className="bg-white h-12 w-12 rounded-full">
            <a href="#">
              <img src="" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
