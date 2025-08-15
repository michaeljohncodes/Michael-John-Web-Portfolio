import React from "react";
import Navbar from "../layouts/Navbar";
import Hero from "../layouts/Hero";
// import Numbers from "../layouts/Numbers";
// import Resume from "../layouts/Resume";
// import Projects from "../layouts/Projects";
// import Contact from "../layouts/Contact";

const Homepage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <Numbers /> */}
      {/* <h2 className=" text-center max-tablet:text-4xl  text-5xl bg-[#dadadb] font-semibold mt-26">
        RESUME
      </h2>
      <Resume /> */}
      {/* <h2 className=" text-center max-tablet:text-4xl  text-5xl bg-[#dadadb] font-semibold mt-26 mb-16">
        PROJECTS
      </h2>
      <Projects /> */}
      {/* <h2 className=" text-center max-tablet:text-4xl  text-5xl bg-[#dadadb] font-semibold mt-26">
        CONTACT
      </h2>
      <Contact /> */}
    </main>
  );
};

export default Homepage;
