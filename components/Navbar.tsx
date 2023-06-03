import Image from "next/image";
import { useRef, useState } from "react";
import logo from "../public/logo.png";
import Link from "next/link";
import { easeOut, motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { TbBrandGithub } from "react-icons/tb";
import { RiLinkedinLine, RiFacebookFill } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between z-50">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image src={logo} alt="logo" className="h-12 w-12" />
        </motion.div>
        <div className="hidden mdl:inline-flex  items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            {/* <Link
              href="#home"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textOrange cursor-pointer duration-300 nav-link"
              
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link> */}
            <Link
              href="#about"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textOrange cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                <span className="text-textOrange">01.</span>About
              </motion.li>
            </Link>
            <Link
              href="#projects"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textOrange cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <span className="text-textOrange">02.</span>Projects
              </motion.li>
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textOrange cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.5 }}
              >
                <span className="text-textOrange">03.</span>Contact
              </motion.li>
            </Link>
          </ul>
          <a href="#assets/Certificate.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="px-4 py-2 rounded-md text-textOrange text-[13px] border border-textOrange hover:bg-hoverColor duration-500 hover:text-black"
            >
              Resume
            </motion.button>
          </a>
        </div>

        {/* Icon for phone*/}
        {/* we made this dis group so theat inside this div everything will be their children */}
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textOrange cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textOrange inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textOrange inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textOrange  inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {showMenu && (
          <div className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, ease: easeOut }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#333232] flex flex-col items-center px-4 py-10 relative"
            >
              <CgClose
                className="text-4xl cursor-pointer text-textOrange absolute top-4 right-4"
                onClick={() => setShowMenu(false)}
              />
              <div className="flex flex-col items-center gap-7 mt-10">
                <ul className="flex flex-col text-base gap-7">
                  {/* <Link
              href="#home"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textOrange cursor-pointer duration-300 nav-link"
              
              onClick={()=>setShowMenu(false)}
            >
              <motion.li
                initial={{ x:20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2,delay:0.1, ease:"easeIn" }}
              >
                Home
              </motion.li>
            </Link> */}
                  <Link
                    href="#about"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textOrange cursor-pointer duration-300 nav-link"
                    onClick={() => setShowMenu(false)}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                    >
                      <span className="text-textOrange">01.</span>About
                    </motion.li>
                  </Link>
                  <Link
                    href="#projects"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textOrange cursor-pointer duration-300 nav-link"
                    onClick={() => setShowMenu(false)}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}
                    >
                      <span className="text-textOrange">02.</span>Projects
                    </motion.li>
                  </Link>
                  <Link
                    href="#contact"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textOrange cursor-pointer duration-300 nav-link"
                    onClick={() => setShowMenu(false)}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.7, ease: "easeIn" }}
                    >
                      <span className="text-textOrange">03.</span>Contact
                    </motion.li>
                  </Link>
                </ul>
                <a
                  href="#assets/Certificate.pdf"
                  target="_blank"
                  onClick={() => setShowMenu(false)}
                >
                  <motion.button
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8, ease: "easeIn" }}
                    className="px-4 py-2 rounded-md text-textOrange text-[13px] border border-textOrange hover:bg-hoverColor duration-500 hover:text-black"
                  >
                    Resume
                  </motion.button>
                </a>
                <div className=" mdl:inline-flex xl:hidden items-center w-full flex justify-center gap-3 pb-6 mt-24">
                  <motion.a
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, ease: "easeIn" }}
                    onClick={() => setShowMenu(false)}
                    href="https://github.com/Pratap-Karmakar"
                    target="_blank"
                  >
                    <span className="w-10 h-10  text-xl bg-hoverColor rounded-full inline-flex items-center justify-center text-black cursor-pointer transition-all duration-300">
                      <TbBrandGithub />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, ease: "easeIn" }}
                    onClick={() => setShowMenu(false)}
                    href="https://www.linkedin.com/in/pratap-karmakar-2b25b2103/"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center text-black cursor-pointer transition-all duration-300">
                      <RiLinkedinLine />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, ease: "easeIn" }}
                    onClick={() => setShowMenu(false)}
                    href="https://www.facebook.com/pratap.karmakar.144"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center text-black cursor-pointer transition-all duration-300">
                      <RiFacebookFill />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8, ease: "easeIn" }}
                    onClick={() => setShowMenu(false)}
                    href="https://www.instagram.com/hashtag_pratap/"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center text-black cursor-pointer transition-all duration-300">
                      <FiInstagram />
                    </span>
                  </motion.a>
                </div>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, ease: "easeIn" }}
                className="mt-24 text-2xl font-titleFont font-bold"
              >
                Get In Touch
              </motion.p>
              <motion.a
                href="mailto:pratapkarmakar255@gmail.com"
                onClick={() => setShowMenu(false)}
              >
                <motion.button
                  initial={{ y: +500, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, ease: "easeIn" }}
                  className="px-4 py-2 rounded-md text-textOrange text-[13px] border border-textOrange hover:bg-hoverColor duration-500 hover:text-black mt-6"
                >
                  Contact Me
                </motion.button>
              </motion.a>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
