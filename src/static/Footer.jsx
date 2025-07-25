import React from "react";

const Footer = () => {
  return (
    <main className="border flex justify-between mx-auto max-w-[2560px] items-center ">
      <section className=" border px-2 flex w-[70%] mx-auto text-center justify-between ">
        <div className=" min-w-[20%] border">
          <img src={""} alt="logo here" className=" w-[100%]" />
        </div>

        <div className=" ">(c) 2025. All Rights Reserved !</div>
      </section>

      <section className=" flex flex-col justify-center mx-auto">
        <div>Design by : Michael John Chukwunyem</div>
        <div>
          {" "}
          for: <b>1311 Visuals </b>
        </div>
      </section>
    </main>
  );
};

export default Footer;
