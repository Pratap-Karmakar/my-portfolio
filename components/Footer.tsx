import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { RiLinkedinLine, RiFacebookLine } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div className=" mdl:inline-flex xl:hidden items-center w-full flex justify-center gap-3 pb-6 pt-14">
      <a href="https://github.com/Pratap-Karmakar" target="_blank">
        <span className="w-10 h-10  text-xl bg-hoverColor rounded-full inline-flex items-center justify-center text-gray-700 cursor-pointer transition-all duration-300">
          <TbBrandGithub />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/pratap-karmakar-2b25b2103/"
        target="_blank"
      >
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center text-gray-700 cursor-pointer transition-all duration-300">
          <RiLinkedinLine />
        </span>
      </a>
      <a href="https://www.facebook.com/pratap.karmakar.144" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center text-gray-700 cursor-pointer transition-all duration-300">
          <RiFacebookLine />
        </span>
      </a>
      <a href="https://www.instagram.com/hashtag_pratap/" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center text-gray-700 cursor-pointer transition-all duration-300">
          <FiInstagram />
        </span>
      </a>
    </div>
  );
};

export default Footer;
