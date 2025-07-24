const Header = () => {
  return (
    <main className="w-[100%] fixed top-0 z-100 border ">
      <div className=" max-w-[1200px] py-6 mx-auto flex h-full items-center justify-between ">
        <section className=" min-w-[20%]">
          <img src={""} alt="logo here" className=" w-[100%]" />
        </section>

        <section className=" flex mx-12 gap-9 items-center font-medium max-tablet:hidden ">
          <nav className="">
            <a href="#">HOME</a>
          </nav>
          <nav className="">
            <a href="#">ABOUT ME</a>
          </nav>
          <nav className="">
            <a href="#">MY SERVICES</a>
          </nav>
          <nav className="">
            <a href="#">PORTFOLIO</a>
          </nav>
          <nav className="">
            <a href="#">RESUME</a>
          </nav>
          <nav className="">
            <a href="#">CONTACT</a>
          </nav>
        </section>
      </div>
      {/* <div>
          <SideNavBar />
        </div> */}
    </main>
  );
};

export default Header;
