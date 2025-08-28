import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandAdobePhotoshop, TbBrandAdobePremier } from "react-icons/tb";
import { SiAdobelightroom } from "react-icons/si";
import { TiVendorMicrosoft } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
const Skill = () => {
  return (
    <div className=" flex flex-col gap-[30px]">
      <div>
        <h2 className="text-white text-[43px] max-mobile:text-[32px]">
          My Skills
        </h2>
      </div>
      <div
        className=" grid grid-cols-4 max-Laptop:grid-cols-3 max-Laptop:w-[420px] max-Laptop:h-[300px] max-mobile:h-[350px] custom-scroll overflow-y-scroll gap-5 w-[560px]
          max-mobile:grid-cols-2 max-mobile:w-[270px] max-mobile:mx-auto
          "
      >
        <div className=" bg-[#28272B] w-[120px] h-[120px] items-center flex justify-center py-5 text-white hover:text-[#00FD9A] transition-colors ease-in-out duration-400 rounded">
          <FaHtml5 size={50} />
        </div>
        <div className=" bg-[#28272B] w-[120px] h-[120px] items-center flex justify-center py-5 text-white hover:text-[#00FD9A] transition-colors ease-in-out duration-400 rounded">
          <RiReactjsFill size={50} />
        </div>
        <div className=" bg-[#28272B] w-[120px] h-[120px] items-center flex justify-center py-5 text-white hover:text-[#00FD9A] transition-colors ease-in-out duration-400 rounded">
          <IoLogoCss3 size={50} />
        </div>
        <div className=" bg-[#28272B] w-[120px] h-[120px] items-center flex justify-center py-5 text-white hover:text-[#00FD9A] transition-colors ease-in-out duration-400 rounded">
          <IoLogoJavascript size={50} />
        </div>
        <div className=" bg-[#28272B] w-[120px] h-[120px] items-center flex justify-center py-5 text-white hover:text-[#00FD9A] transition-colors ease-in-out duration-400 rounded">
          <SiTailwindcss size={50} />
        </div>

        <div className=" bg-[#28272B] w-[120px] h-[120px] items-center flex justify-center py-5 text-white hover:text-[#00FD9A] transition-colors ease-in-out duration-400 rounded">
          <IoLogoNodejs size={50} />
        </div>
        <div className=" bg-[#28272B] w-[120px] h-[120px] items-center flex justify-center py-5 text-white hover:text-[#00FD9A] transition-colors ease-in-out duration-400 rounded">
          <FaGitAlt size={50} />
        </div>
        <div className=" bg-[#28272B] w-[120px] h-[120px] items-center flex justify-center py-5 text-white hover:text-[#00FD9A] transition-colors ease-in-out duration-400 rounded">
          <TiVendorMicrosoft size={50} />
        </div>
        <div className=" bg-[#28272B] w-[120px] h-[120px] items-center flex justify-center py-5 text-white hover:text-[#00FD9A] transition-colors ease-in-out duration-400 rounded">
          <SiAdobelightroom size={50} />
        </div>
        <div className=" bg-[#28272B] w-[120px] h-[120px] items-center flex justify-center py-5 text-white hover:text-[#00FD9A] transition-colors ease-in-out duration-400 rounded">
          <TbBrandAdobePhotoshop size={50} />
        </div>
        <div className=" bg-[#28272B] w-[120px] h-[120px] items-center flex justify-center py-5 text-white hover:text-[#00FD9A] transition-colors ease-in-out duration-400 rounded">
          <TbBrandAdobePremier size={50} />
        </div>
        <div className=" bg-[#28272B] w-[120px] h-[120px] items-center flex justify-center py-5 text-white hover:text-[#00FD9A] transition-colors ease-in-out duration-400 rounded">
          <FaGithub size={50} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
