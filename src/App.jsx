import "./App.css";
import About from "./layouts/About";
import Contact from "./layouts/Contact";
import Hero from "./layouts/Hero";
import Portfolio from "./layouts/Portfolio";
import Services from "./layouts/Services";
import WorkExperience from "./layouts/WorkExperience";
import Footer from "./static/Footer";
import Header from "./static/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <WorkExperience />
      <Portfolio />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
