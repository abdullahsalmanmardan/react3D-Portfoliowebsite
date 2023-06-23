import React from "react";
import { styles } from "../Styles";
import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <>
      <section className="h-screen">
        <div className="relative flex flex-row">
          <div className="flex flex-col">
            {/* todo is ke ander 2 div for circle and the line */}
            <div className="my-4 ml-12 w-5 h-5 rounded-full bg-violet-600"></div>
            <div className="ml-14 w-1 h-40 md:h-45  bg-violet-600 violet-gradient"></div>
          </div>
          <div className="flex flex-col ml-2 mt-4">
            <h1 className="text-white text-4xl md:text-3xl font-bold">
              Hi, I am <span className=" text-violet-500">ABDULLAH.</span>
            </h1>
            <p className="text-white text-2xl md:text-xl py-4 font-bold">
              I Develop Desktop and Web Applications.
            </p>
          </div>
        </div>
        <ComputersCanvas />
      </section>
    </>
  );
};

export default Hero;
