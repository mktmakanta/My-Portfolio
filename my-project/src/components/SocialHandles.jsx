import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {  } from "@fortawesome/free-solid-svg-icons";

export default function Social() {
  return (
    <>
      <div className="fixed bottom-10 inset-x-0 ">
        <ul className="w-80 h-16 mx-auto p-2 bg-red-950/25 flex justify-between rounded-full">
          <li className="bg-white h-12 w-12 rounded-full">
            <a href="#">
              {" "}
              {/* <FontAwesomeIcon
                icon={}
                className="text-blue-500 text-2xl"
              /> */}
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
