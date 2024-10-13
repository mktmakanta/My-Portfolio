// Logo.jsx
import React from "react";
import { motion } from "framer-motion";
import { ReactComponent as LogoSvg } from "../assets/Logo.svg"; // Adjust the path to your SVG file

const Logo = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 179.78 148.45"
        className="w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }} // Fade in effect
      >
        <motion.path
          d="M4,144.45S24.62,4,69.62,4C84.45,5,90.25,17.3,90.25,29.23c-.55,15.86-6.31,100.9-27.53,94.34C56.84,119.91,63,96,69.45,77.38c4.29-11.23,18.47-43.26,37.25-56.59,15-9.14,28.56,1.11,32.54,19.27,11.3,55.34-6.67,67.52-11.29,66.5-2.14-.81-4.54-3.6-2.07-18.77,2.13-9.54,10.26-30.11,22.36-47.61C156.65,27.79,162,29.54,162,29.54c13.45.54,11.55,41.7,11.55,41.7" // Adjust this path as necessary
          fill="none"
          strokeWidth="8"
          strokeDasharray="300" // Set based on the path length
          strokeDashoffset="300" // Same as strokeDasharray to start hidden
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDashoffset: 300 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2 }} // Adjust duration as needed
        />
      </motion.svg>
    </div>
  );
};

export default Logo;
