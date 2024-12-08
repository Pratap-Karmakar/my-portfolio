import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import octoworld from "../public/projects/octoworld.png";
import sharkchat from "../public/projects/sharkchat.png";
import foxmovies from '../public/projects/foxmovies.png'
import jewellery from '../public/projects/jewellery.png'
import codecraftstudio from '../public/projects/codecraftstudio.png'
import { TbBrandGithub } from "react-icons/tb";
import { BsGlobe2 } from "react-icons/bs";

const Projects = () => {
  return (
    <section id="projects" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Sites I have Built" titleno="02" />

      <div className="w-full flex flex-col items-center justify-between gap-14 mt-10">
        {/* Project 1 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://jewellery-orpin.vercel.app/"
              target="_blank"
            >
              <div>
                <Image
                  src={jewellery}
                  alt="project image"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-left xl:-ml-16 z-10">
              <p className="font-titleFont text-textOrange text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Jewellery</h3>
              <p className="bg-[#333232]   shadow-navbarShadow text-sm md:text-base p-2 md:p-6 rounded-md">
                A E-Commerce web site built with{" "}
                <span className="text-textOrange">
                  React.js, tailwind, Firebase Auth, Firebase
                </span>{" "}
                where user can choose jewellery by their category or search for a specific jewellery and add to cart, we can also increase or decrease the quantity of jewellery or remove from the cart and place the order after filling the required details. and the admin can add jewellery or delete jewellery and update the jewellery details as well as manage all the orders and users as well.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>React.js</li>
                <li>Firebaase-Auth</li>
                <li>Tailwind</li>
                <li>Firebase</li>
                <li>vercel Deployement</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="text-textOrange"
                  href="https://github.com/Pratap-Karmakar/jewellery"
                  target="_blank"
                >
                  <TbBrandGithub className="animate-pulse hover:animate-none"/>
                </a>

                <a
                  className="text-textOrange"
                  href="https://jewellery-orpin.vercel.app/"
                  target="_blank"
                >
                  <BsGlobe2 className="animate-pulse hover:animate-none"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://sharkchat.vercel.app/"
              target="_blank"
            >
              <div>
                <Image
                  src={sharkchat}
                  alt="project image"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
              <p className="font-titleFont text-textOrange text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">SharkChat</h3>
              <p className="bg-[#333232] xl:-mr-16 shadow-navbarShadow text-sm md:text-base p-2 md:p-6 rounded-md">
                A RealTime Chat web site built with{" "}
                <span className="text-textOrange">
                  Next.js, tailwind, NextAuth, Firebase,
                </span>{" "}
                It&#39;s a group chat web application where a lot of people can login at a same time and can have the experience of a RealTime Chat.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Next.js</li>
                <li>Next-Auth</li>
                <li>Tailwind</li>
                <li>Firebase</li>
                <li>vercel Deployement</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="text-textOrange"
                  href="https://github.com/Pratap-Karmakar/chat"
                  target="_blank"
                >
                  <TbBrandGithub className="animate-pulse hover:animate-none"/>
                </a>

                <a
                  className="text-textOrange"
                  href="https://sharkchat.vercel.app/"
                  target="_blank"
                >
                  <BsGlobe2 className="animate-pulse hover:animate-none"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://bright-trifle-bb4e1d.netlify.app/"
              target="_blank"
            >
              <div>
                <Image
                  src={foxmovies}
                  alt="project image"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-left xl:-ml-16 z-10">
              <p className="font-titleFont text-textOrange text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">FoxMovies</h3>
              <p className="bg-[#333232] text-sm shadow-navbarShadow   md:text-base p-2 md:p-6 rounded-md">
                A Video Streaming web site built with{" "}
                <span className="text-textOrange">
                  Next.js, tailwind, NextAuth, Firebase
                </span>{" "}
                where one can signin using google id with the help of Next Authentication, can Stream online videos provided by TMDB Api, videos are categories in to it&#39;s genres so it&#39;s very easy to select videos from them and play.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Next.js</li>
                <li>Next-Auth</li>
                <li>Tailwind</li>
                <li>Firebase</li>
                <li>Netlify Deployement</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="text-textOrange"
                  href="https://github.com/Pratap-Karmakar/video-app"
                  target="_blank"
                >
                  <TbBrandGithub className="animate-pulse hover:animate-none"/>
                </a>

                <a
                  className="text-textOrange"
                  href="https://bright-trifle-bb4e1d.netlify.app/"
                  target="_blank"
                >
                  <BsGlobe2 className="animate-pulse hover:animate-none"/>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://codecraft-studio.vercel.app/"
              target="_blank"
            >
              <div>
                <Image
                  src={codecraftstudio}
                  alt="project image"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
              <p className="font-titleFont text-textOrange text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">CodeCraft Studio</h3>
              <p className="bg-[#333232] xl:-mr-16 shadow-navbarShadow text-sm md:text-base p-2 md:p-6 rounded-md">
                A RealTime Chat web site built with{" "}
                <span className="text-textOrange">
                  Next.js, tailwind, TypeScript, Framer Motiion
                </span>{" "}
                The CodeCraft Studio website represents a digital solutions company specializing in custom web applications, website design, e-commerce, mobile app development, and digital strategy consulting. It highlights their mission to deliver innovative, high-quality solutions tailored to business needs, emphasizing creativity, collaboration, and excellence. The site also features information about their services, core values, and projects.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Next.js</li>
                <li>Tailwind</li>
                <li>TypeScript</li>
                <li>Framer Motiion</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="text-textOrange"
                  href="https://github.com/Pratap-Karmakar/somethingnew"
                  target="_blank"
                >
                  <TbBrandGithub className="animate-pulse hover:animate-none"/>
                </a>

                <a
                  className="text-textOrange"
                  href="https://codecraft-studio.vercel.app/"
                  target="_blank"
                >
                  <BsGlobe2 className="animate-pulse hover:animate-none"/>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 5 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://octoworld.vercel.app/"
              target="_blank"
            >
              <div>
                <Image
                  src={octoworld}
                  alt="project image"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-left xl:-ml-16 z-10">
              <p className="font-titleFont text-textOrange text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">OctoWorld</h3>
              <p className="bg-[#333232]   shadow-navbarShadow text-sm md:text-base p-2 md:p-6 rounded-md">
                A Social media web site built with{" "}
                <span className="text-textOrange">
                  Next.js, tailwind, NextAuth, Firebase
                </span>{" "}
                where one can post any Thoughts, Images along with emojies,
                everyone can like any post and one can delete any post if he is
                the author of that post.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Next.js</li>
                <li>Next-Auth</li>
                <li>Tailwind</li>
                <li>Firebase</li>
                <li>vercel Deployement</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="text-textOrange"
                  href="https://github.com/Pratap-Karmakar/octoworld"
                  target="_blank"
                >
                  <TbBrandGithub className="animate-pulse hover:animate-none"/>
                </a>

                <a
                  className="text-textOrange"
                  href="https://octoworld.vercel.app/"
                  target="_blank"
                >
                  <BsGlobe2 className="animate-pulse hover:animate-none"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
