const Header = () => {
  return (
    <>
      <main className=" fixed w-[100%] top-0 z-100 bg-[#06141B] text-[#CCD0CF] ">
        <div className=" header flex max-w-[2560px] mx-auto ">
          <section className=" min-w-[90%] pb-1 mx-auto flex justify-between ">
            <div className=" min-w-[20%] my-auto">
              <img src={""} alt="logo here" className=" w-[100%]" />
            </div>

            <div className=" flex items-center font-medium font-mono ">
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
          </section>
          {/* <div>
          <SideNavBar />
        </div> */}
        </div>
      </main>
    </>
  );
};

export default Header;
