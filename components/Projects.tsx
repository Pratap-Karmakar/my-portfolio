import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import octoworld from "../public/octoworld.png";
import sharkchat from "../public/sharkchat.png";
import screenshot from '../public/Screenshot.png'
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

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
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textOrange text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">OctoWorld</h3>
              <p className="bg-[#333232] text-sm md:text-base p-2 md:p-6 rounded-md">
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
                  <RxOpenInNewWindow className="animate-pulse hover:animate-none"/>
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
              <p className="bg-[#333232] xl:-mr-16 text-sm md:text-base p-2 md:p-6 rounded-md">
                A RealTime Chat web site built with{" "}
                <span className="text-textOrange">
                  Next.js, tailwind, NextAuth, Firebase,
                </span>{" "}
                It's a group chat web application where a lot of people can login at a same time and can have the experience of a RealTime Chat.
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
                  <RxOpenInNewWindow className="animate-pulse hover:animate-none"/>
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
              href="https://social-media-pratap.vercel.app/"
              target="_blank"
            >
              <div>
                <Image
                  src={screenshot}
                  alt="project image"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textOrange text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">OctoWorld</h3>
              <p className="bg-[#333232] text-sm md:text-base p-2 md:p-6 rounded-md">
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
                  href="https://social-media-pratap.vercel.app/"
                  target="_blank"
                >
                  <RxOpenInNewWindow className="animate-pulse hover:animate-none"/>
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
