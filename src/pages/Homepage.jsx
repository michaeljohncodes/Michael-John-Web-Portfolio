import React from "react";
import Navbar from "../layouts/Navbar";
import Hero from "../layouts/Hero";
import Numbers from "../layouts/Numbers";
import Resume from "../layouts/Resume";
import Projects from "../layouts/Projects";
import Contact from "../layouts/Contact";

const Homepage = () => {
  return (
    <main id="home">
      <Navbar />
      <Hero />

      <Numbers />

      <div id="resume" className=" h-[10px] mb-[70px]"></div>
      <h2 className=" width text-center max-tablet:text-4xl text-5xl bg-[#dadadb] font-semibold  ">
        RESUME
      </h2>
      <Resume />

      {/* <div id="work" className=" h-[10px] mb-[70px]"></div>
      <h2 className=" width text-center max-tablet:text-4xl  text-5xl bg-[#dadadb] font-semibold">
        PROJECTS
      </h2>
      <Projects /> */}

      <div id="contact" className=" h-[10px] mb-[70px]"></div>
      <h2 className=" width text-center max-tablet:text-4xl  text-5xl bg-[#dadadb] font-semibold ">
        CONTACT
      </h2>
      <Contact />
    </main>
  );
};

export default Homepage;
