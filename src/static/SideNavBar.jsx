import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";

const SideNavBar = () => {
  const [sideNav, setSideNav] = useState(false);

  return (
    <div>
      <div className=" w-[100%] flex justify-between items-center bg-[#06141B] text-[#CCD0CF] p-[20px] fixed min-[835px]:hidden ">
        <div className=" min-w-[20%] my-auto">
          <img src={""} alt="logo here" className=" w-[100%]" />
        </div>
           
        <div
          onClick={() => {
            setSideNav(!sideNav);
          }}
        >
          {sideNav ? (
            <FaTimes className="w-[50px] h-[50px]" />
          ) : (
            <IoMenu className="w-[50px] h-[50px]" />
          )}
        </div>
      </div>

      <div
        className={
          !sideNav ? "hidden" : "h-screen w-[100%] space-y-[30px] px-[10px]"
        }
      >
        <div className=" flex flex-col items-center h-[100%] w-[100%] mx-[160px] pt-[100px] gap-y-[10px] ">
          <a href="#Hero">
            <nav className="">HOME</nav>
          </a>

          <a href="#About">
            <nav className="">ABOUT ME</nav>
          </a>

          <a href="#Services">
            {" "}
            <nav className="">MY SERVICES</nav>
          </a>

          <a href="#Portfolio">
            {" "}
            <nav className="">PORTFOLIO</nav>
          </a>

          <a href="#Experience">
            {" "}
            <nav className="">RESUME</nav>
          </a>

          <a href="#Contact">
            {" "}
            <nav className="">CONTACT</nav>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
