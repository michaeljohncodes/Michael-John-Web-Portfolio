import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import piggy from "../assets/piggy-desktop.png";
import piggy2 from "../assets/piggy-mobile.png";

const Projects = () => {
  return (
    <div className=" flex-col flex gap-30 max-tablet:gap-22 my-[80px]  max-mobile:px-4">
      <div className="cursor-pointer width flex justify-between items-center gap-[20px] max-tablet:flex-col">
        <div className="max-w-[50%] flex flex-col gap-5 max-tablet:w-full max-mobile:gap-3">
          <div className=" flex gap-[30px] items-center">
            <h2 className="font-bold text-6xl text-transparent stroke-text max-mobile:text-5xl">
              01
            </h2>
            <p className="font-semibold text-[#00FD9A] text-[40px] max-mobile:text-[24px]">
              PiggyVest
            </p>
          </div>
          <p className=" w-[100%] leading-7 text-[15px] text-[#BDBDC1] max-mobile:text-[12px] max-mobile:leading-6">
            Cloned a Real life website, to build more knowledge on how Pro Devs
            create websites. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Amet nostrum beatae aliquam inventore omnis maxime animi
            ipsam! Fugiat dolores earum sint id soluta numquam commodi. Esse
            voluptatem ullam debitis commodi! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Voluptas veniam officiis, eos magni
            assumenda numquam aut quas doloremque ipsa culpa enim illum debitis
            est, consectetur quaerat totam aliquid quos eum.
          </p>
          <div className="flex gap-3 text-[#08c17a] max-mobile:text-[13px]">
            <p>React.js,</p>
            <p>Tailwind.css,</p>
            <p>React State</p>
          </div>
          <div className="w-[95%] h-[1px] bg-[#BDBDC1] mb-3"></div>
          <div className="flex gap-5 max-tablet:mx-auto max-tablet:my-3 max-mobile:my-0">
            <a href="https://piggyvest-orpin.vercel.app/ " target="_blank">
              <div className="text-white hover:text-[#00FD9A] bg-[#33333355] rounded-full p-3">
                <BsArrowUpRight size={23} />
              </div>
            </a>
            <a
              href="https://github.com/michaeljohncodes/Piggyvest"
              target="_blank"
            >
              <div className="text-white hover:text-[#00FD9A] bg-[#33333355] rounded-full p-3">
                <FaGithub size={23} />
              </div>
            </a>
          </div>
        </div>
        <div
          className=" min-w-[50%] flex items-center justify-end bg-[#266361] relative max-Laptop:w-[50%]  h-fit pt-4 w-[60%] hover:pt-0 transition-all duration-400 ease-in-out max-tablet:w-full max-tablet:justify-center max-tablet:bg-[#3330] max-tablet:transition-none max-tablet:pt-0  max-mobile:max-w-[70%]"
          onClick={() =>
            window.open("https://piggyvest-orpin.vercel.app/", "_blank")
          }
        >
          <div className="w-[450px] hover:w-[480px] transition-all duration-400 ease-in-out max-Laptop:hover:w-[450px] max-tablet:transition-none">
            <img src={piggy} alt="" />
          </div>
          <div className="w-[200px] absolute top-10 left-6 max-Laptop:w-[140px] max-tablet:hidden">
            <img src={piggy2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
// https://piggyvest-orpin.vercel.app/                         https://github.com/michaeljohncodes/Piggyvest
// https://calculator-chi-eight-53.vercel.app/         https://calculator-chi-eight-53.vercel.app/
// https://moviesite-ivory-pi.vercel.app/          https://github.com/michaeljohncodes/moviesite
// https://moove-mu.vercel.app/
// https://nomba.vercel.app/            https://github.com/michaeljohncodes/Nomba
