import React from "react";

const Hero = () => {
  return (
    <main
      id="Hero"
      className=" flex flex-wrap items-center h-[100vh] pt-[70px] mx-auto max-w-[2560px] text-[#CCD0CF] max-[835px]:max-h-[100vh] max-[835px]:pt-[20px] max-[835px]:h-[auto] max-[835px]:mt-[90px] max-[835px]:pb-[50px]"
    >
      <div className=" flex justify-between items-center h-[50vh] mx-auto max-w-[90%] max-[835px]:flex-col-reverse max-[835px]:h-auto max-[835px]:max-w-[90%] ">
        <section className=" flex flex-col gap-[10px] max-w-[50%] max-[835px]:min-w-[100%] max-[835px] ">
          <div className=" hero flex flex-col gap-[20px] items-start mt-[20px]">
            <h1 className=" text-[20px]"> Hello !</h1>
            <p className=" text-[50px] font-medium font-mono ">
              I am
              <span style={{ color: "Red" }}> Michael</span> John{" "}
            </p>
            <p className=" text-[15px] font-mono w-[100%] flex flex-wrap">
              <button>M.E.R.N Stack Web Developer</button>
              <button>UI/UX Designer</button>
              <button>Visual Branding Expert</button>
              <button>Pro Level Photographer</button>
              <button>Image Retoucher</button>
              <button>Videographer and Editor</button>
              <button>Sales and Business Developer.</button>
            </p>

            <button className=" px-[15px] py-[8px] mt-[20px] rounded-[10px] border-[#06141b] border-[4px] text-[#06141b] font-medium">
              Download Resume
            </button>
          </div>
        </section>

        <section className=" min-w-[50%] h-auto flex flex-col justify-center items-center overflow-hidden max-[835px]:min-w-[100%] max-[835px]:h-auto ">
          <img
            src="/images/1.jpg"
            style={{ objectFit: "cover", width: "600px" }}
          />
        </section>
      </div>
    </main>
  );
};

export default Hero;
