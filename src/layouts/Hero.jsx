import React from "react";

const Hero = () => {
  return (
    <main
      id="Hero"
      className=" flex flex-wrap items-center h-[100vh] pt-[70px] mx-auto max-w-[2560px] text-[#CCD0CF] "
    >
      <div className=" flex justify-between items-center h-[50vh] mx-auto w-[90%] ">
        <section className=" flex flex-col gap-[10px] max-w-[50%] ">
          <div className=" mt-[20px]">
            <h1 className=" text-[20px]"> Hello !</h1>
          </div>
          <div className=" hero flex flex-col gap-[20px] items-start">
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

            <button className=" bg-[#06141b] px-[15px] py-[8px]">
              Download Resume
            </button>
          </div>
        </section>

        <section className=" min-w-[50%] h-full flex flex-col justify-center items-center ">
          <div>
            <> </>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Hero;
