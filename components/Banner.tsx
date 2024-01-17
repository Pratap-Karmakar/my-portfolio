import { motion } from "framer-motion";
import React from "react";
import BackgroundCircles from "./Background Circles";

const Banner = () => {
  return (
    <div className="text-center md:text-left h-screen md:-mt-10 -mt-20  flex flex-col space-y-5 justify-center items-center overflow-hidden z-10 ">
      <BackgroundCircles/>
      <section
        id="home"
        className="max-w-contentContainer mx-auto py-10 md:ml-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 z-20"
      >
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg font-titleFont tracking-wide text-textOrange"
        >
          Hi, my name is
        </motion.h3>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
        >
          Pratap Karmakar{" "}
          <span className="text-textDark mt-2 lgl:mt-4">
            I build things for the web.
          </span>
        </motion.h1>
        <motion.p
        initial={{opacity:0, y:10}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.8}}
         className="text-base md:max-w-[650px] text-textDark font-medium">
          I am a web developer with 18 months of development experience in React. I have a
          strong foundation in front-end development and skilled in creating
          responsive as well as user-friendly web applications using React and it's
          ecosystem.I love coding and enjoy learning new languages and frameworks to enhance my skills.{" "}
        </motion.p>{" "}
      </section>
    </div>
  );
};

export default Banner;
