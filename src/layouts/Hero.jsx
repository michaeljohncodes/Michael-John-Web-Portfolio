import React from "react";
import { FiDownload } from "react-icons/fi";
import Photo from "../assets/11111.jpg";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import myCV from "../assets/Michael_John_Chukwunyem.pdf";

const Hero = () => {
  return (
    <div
      className=" width flex justify-center items-center my-[80px]
    max-tablet:flex-col-reverse max-tablet:gap-8 max-tablet:pt-20
    max-mobile:gap-6 max-mobile:pt-0 max-mobile:my-[20px]
    "
    >
      <div className=" flex flex-col gap-4">
        <div className=" mb-3 max-tablet:text-center flex flex-col gap-2">
          <h2 className=" text-3xl font-medium text-white max-tablet:text-[55px] max-mobile:text-[40px] max-mobile:mb-2">
            Hello, I am{" "}
          </h2>
          <h2 className=" text-6xl font-semibold text-[#00FD9A] max-mobile:text-[45px] max-mobile:mb-2">
            Michael John Chukwunyem
          </h2>
        </div>
        <div className=" w-[90%] max-tablet:mx-auto">
          <p
            className="text-[#dadadb] text-[18px] mb-4
          max-tablet:text-center max-tablet:text-[17px]
          max-mobile:text-[13px]
          "
          >
            A Front-End Web Developer, and Creative Visual Storyteller. I build
            responsive, user-friendly web solutions with React.js, Tailwind CSS
            and Javascript, while crafting powerful visual content through
            photography and cinematography.
            <br /> From coding sleek interfaces to capturing iconic brand
            moments, I blend tech skills and creative vision to deliver results
            that inspire and perform.
            <br />
          </p>
          <div
            className=" flex  gap-6
          max-tablet:flex-col
          "
          >
            <a href={myCV} download>
              <button
                className="text-[#dadadb] border-2 border-[#dadadb] px-4 py-2 rounded-2xl flex items-center gap-2 font-light hover:bg-[#dadadb] hover:font-semibold hover:text-[#1C1B22] transition-colors duration-500 ease-in-out
            max-tablet:mx-auto max-tablet:text-[17px]
            max-mobile:text-[13px]
            "
              >
                <p className=" text-[13px] max-tablet:text-[17px] max-mobile:text-[13px]">
                  DOWNLOAD CV
                </p>
                <FiDownload />
              </button>
            </a>
            <div
              className=" flex justify-center items-center gap-3
            max-tablet:gap-7 max-mobile:gap-5
            "
            >
              <a
                href="https://linkedin.com/in/michaeljohnchukwunyem"
                target="blank"
              >
                <div
                  className=" border-[#dadadb] text-[#dadadb] border-2 w-fit p-2 rounded-full hover:bg-[#dadadb] hover:font-semibold hover:text-black transition-colors duration-500 ease-in-out
              max-tablet:text-[24px] max-mobile:text-[18px] 
              "
                >
                  <FaLinkedin />
                </div>
              </a>
              <a href="https://github.com/michaeljohncodes" target="blank">
                <div
                  className=" border-[#dadadb] text-[#dadadb] border-2 w-fit p-2 rounded-full hover:bg-[#dadadb] hover:font-semibold hover:text-black transition-colors duration-500 ease-in-out
              max-tablet:text-[24px] max-mobile:text-[18px] 
              "
                >
                  <FaGithub />
                </div>
              </a>
              <a
                href="https://wa.me/2347056841559"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className=" border-[#dadadb] text-[#dadadb] border-2 w-fit p-2 rounded-full hover:bg-[#dadadb] hover:font-semibold hover:text-black transition-colors duration-500 ease-in-out
              max-tablet:text-[24px] max-mobile:text-[18px] 
              "
                >
                  <FaWhatsapp />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-2 rounded-[50%] overflow-clip min-w-[35%] pt-5 max-tablet:w-[35%] max-mobile:w-[35%]">
        <img src={Photo} alt="" className="w-[100%]" />
      </div>
    </div>
  );
};

export default Hero;
