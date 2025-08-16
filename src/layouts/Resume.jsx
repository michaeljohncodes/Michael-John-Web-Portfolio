import React, { useState } from "react";

import Experience from "../resumeState/Experience";
import Education from "../resumeState/Education";
import Skill from "../resumeState/Skill";
import About from "../resumeState/About";

const Resume = () => {
  // const [experience, setExperience] = useState(true)
  // const [education, setEducation] = useState(false)
  // const [skill, setSkill] = useState(false)
  // const [about, setAbout] = useState(false)

  const [activeSection, setActiveSection] = useState("experience");

  // const toggle = () => {
  //   setEducation(!education)
  // }

  return (
    <div className=" width flex justify-between my-[80px] gap-22 max-tablet:flex-col max-tablet:items-center max-tablet:gap-10">
      <div className=" w-[40%] max-tablet:w-full max-tablet:flex max-tablet:flex-col max-tablet:items-center">
        <div className="  max-tablet:text-center">
          <h2
            className=" text-[55px] text-[#dadadb] w-[400px] max-Laptop:text-[50px] max-tablet:w-full
          max-mobile:text-[40px]
          "
          >
            Why hire me?
          </h2>
          <p
            className=" text-[#dadadb] w-[80%] mb-8 mt-5 leading-8 max-tablet:mx-auto max-tablet:mt-2 max-tablet:leading-6
          max-mobile:text-[14px]
          "
          >
            Quick Result Driven Solutions.
          </p>
        </div>
        <div className=" flex flex-col gap-5 w-[400px] max-mobile:w-[300px]">
          <div
            onClick={() => setActiveSection("experience")}
            className={`text-[#dadadb] py-3 w-full border-transparent border rounded-xl text-center font-bold cursor-pointer ${
              activeSection === "experience"
                ? "bg-[#dadadb] text-black"
                : "bg-[#28272B] hover:border-[#dadadb] border border-transparent"
            }`}
          >
            <p>Experience</p>
          </div>

          <div
            onClick={() => setActiveSection("education")}
            className={`text-[#dadadb] py-3 w-full border-transparent border rounded-xl text-center font-bold cursor-pointer ${
              activeSection === "education"
                ? "bg-[#dadadb] text-black"
                : "bg-[#28272B] hover:border-[#dadadb] border border-transparent"
            }`}
          >
            <p>Education & Trainings</p>
          </div>

          <div
            onClick={() => setActiveSection("skill")}
            className={`text-[#dadadb] py-3 w-full border-transparent rounded-xl text-center font-bold cursor-pointer ${
              activeSection === "skill"
                ? "bg-[#dadadb] text-black"
                : "bg-[#28272B] hover:border-[#dadadb] border border-transparent"
            }`}
          >
            <p>Skills</p>
          </div>

          <div
            onClick={() => setActiveSection("about")}
            className={`text-[#dadadb] py-3 w-full rounded-xl text-center font-bold cursor-pointer ${
              activeSection === "about"
                ? "bg-[#dadadb] text-black"
                : "bg-[#28272B] hover:border-[#dadadb] border border-transparent"
            }`}
          >
            <p>About me</p>
          </div>
        </div>
      </div>
      <div className=" w-[60%] max-mobile:w-full max-mobile:px-6">
        {activeSection === "experience" && <Experience />}
        {activeSection === "education" && <Education />}
        {activeSection === "skill" && <Skill />}
        {activeSection === "about" && <About />}
      </div>
    </div>
  );
};

export default Resume;
