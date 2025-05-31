import React from "react";
import SectionTitle from "./SectionTitle";
import { FaGraduationCap, FaBriefcase, FaChalkboardTeacher } from "react-icons/fa";

const ExperienceSection = () => {
  return (
    <section id="experience" className="max-w-container mx-auto lgl:px-20 lgl:py-24 sm:py-10">
      <SectionTitle title="My Training & Experience" titleno="02" />

      <div className="w-full flex flex-col gap-14 mt-10">
        {/* Training at Coding Ninjas */}
        <div className="flex flex-col md:flex-row gap-6 items-start bg-[#333232] p-6 rounded-lg shadow-navbarShadow">
          <div className="text-4xl text-textOrange">
            <FaGraduationCap />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white"><span className="text-textOrange">MERN Stack Training</span> - Coding Ninjas</h3>
            <p className="text-sm text-textLight mt-2">
              Successfully completed MERN Stack web development training from Coding Ninjas, with a specialization in Frontend Development. Earned a <span className="text-textOrange font-medium">Certificate of Excellence</span> for outstanding performance. Covered React, Redux, Node.js, Express, and MongoDB. Built multiple real-world projects during training.
            </p>
            <p className="text-xs text-textDark mt-2">Duration: 6 Months</p>
          </div>
        </div>

        {/* Teaching Assistant at Sunrise */}
        <div className="flex flex-col md:flex-row gap-6 items-start bg-[#333232] p-6 rounded-lg shadow-navbarShadow">
          <div className="text-4xl text-textOrange">
            <FaChalkboardTeacher />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white"><span className="text-textOrange">Teaching Assistant</span> - Sunrise Mentors Private Limited</h3>
            <p className="text-sm text-textLight mt-2">
              Assisted students in understanding web development concepts, resolved coding doubts, and helped in debugging code during practical sessions. Supported lead instructors in managing classes, preparing learning materials, and mentoring students throughout the course.
            </p>
            <p className="text-xs text-textDark mt-2">Duration: July 2023 – November 2023</p>
          </div>
        </div>

        {/* Work Experience at Webskitters */}
        <div className="flex flex-col md:flex-row gap-6 items-start bg-[#333232] p-6 rounded-lg shadow-navbarShadow">
          <div className="text-4xl text-textOrange">
            <FaBriefcase />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white"><span className="text-textOrange">Trainee Web Designer</span> - Webskitters Technology Solutions Private Limited</h3>
            <p className="text-sm text-textLight mt-2">
              Worked on multiple responsive Live Projects using React.js, Next.js, TypeScript, JavaScript, SCSS, Material UI and more. Collaborated with senior developers to develop and improve UI components and implemented features in line with client specifications. Gained hands-on experience with real-world web development practices and agile workflows.
            </p>
            <p className="text-xs text-textDark mt-2">Duration: Jan 2025 – May 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
