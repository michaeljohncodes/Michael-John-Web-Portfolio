import React from "react";

const Footer = () => {
  return (
    <main className=" max-w-[2560px] pb-[50px] max-[835px]:pt-[100px]">
      <div className=" flex justify-between max-w-[90%] items-center mx-auto ">
        <section className=" px-2 flex w-[60%] text-center justify-between items-center ">
          <div className=" min-w-[20%] flex ">
            <img src={""} alt="logo here" className=" w-[100%]" />
          </div>

          <div className=" text-[10px] ">(c) 2025. All Rights Reserved !</div>
        </section>

        <section className=" flex flex-col text-right w-[30%] text-[10%]">
          <div>Design by : Michael John Chukwunyem</div>
          <div>
            {" "}
            for: <b>1311 Visuals </b>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Footer;
