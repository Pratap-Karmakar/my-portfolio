import React from "react";
import SectionTitle from "./SectionTitle";
import javascript from "../public/skills/javascript.png";
import react from "../public/skills/react.png";
import redux from "../public/skills/redux.png";
import nextjs from "../public/skills/nextjs.png";
import bootstrap from "../public/skills/bootstrap.png";
import tailwind from "../public/skills/tailwind.png";
import typescript from "../public/skills/typescript.png";
import firebase from "../public/skills/firebase.png";
import avatar from "../public/avatar.png";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About" titleno="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello! I am a skilled Web Application Developer with a deep passion for Frontend Web Development. My expertise revolves around crafting highly responsive client-side web applications, utilizing technologies such as React.js, Next.js, JavaScript, TypeScript, HTML, CSS, Bootstrap, and Tailwind CSS.
          </p>
          <p className="pt-5 text-textLight">
            Here are few technologies I have been working with recently :
          </p>

          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6 md:ml-0 ml-12">
            <li className="flex items-center gap-2">
              <Image src={javascript} alt="javascript" className="h-5 w-5" />
              JavaScript
            </li>
            <li className="flex items-center gap-2">
              <Image src={nextjs} alt="nextjs" className="h-5 w-5 bg-gray-300 rounded-sm" />
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <Image src={react} alt="react" className="h-5 w-5" />
              React
            </li>
            <li className="flex items-center gap-2">
              <Image src={typescript} alt="typescript" className="h-5 w-5" />
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <Image src={redux} alt="typescript" className="h-5 w-5" />
              Redux
            </li>
            <li className="flex items-center gap-2">
              <Image src={tailwind} alt="tailwind" className="h-5 w-5" />
              Tailwind
            </li>
            <li className="flex items-center gap-2">
              <Image src={bootstrap} alt="bootstrap" className="h-5 w-5" />
              Bootstrap
            </li>
            <li className="flex items-center gap-2">
              <Image src={firebase} alt="firebase" className="h-5 w-5" />
              Firebase
            </li>
          </ul>
        </div>
        {/* <div className="w-full lgl:w-1/2 h-80 relative goup">
          <div className="absolute w-full h-80 md:-left-6  rounded-lg "> */}
            <div>
                <Image
                  src={avatar}
                  alt="avatar"
                  className="md:h-[350px] h-[200px] md:w-[550px] w-[200px] object-cover items-center justify-center rounded-full md:rounded-lg bg-gradient-to-b bg-[#F7AB0A]/10 md:-ml-6 md:-mt-0 -mt-6 ml-30"
                />
              {/* <div className="hidden lgl:inline-block absolute w-full h-80 bg-textOrange/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
              <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textOrange rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div> */}
            </div>
          </div>
        {/* </div>
      </div> */}
    </section>
  );
};

export default About;
