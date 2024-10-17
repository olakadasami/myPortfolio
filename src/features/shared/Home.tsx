import { useState } from "react";
import About from "../about/About";
import Contact from "../contact/Contact";
import Experience from "../experiences/Experience";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import Work from "../projects/Project";

function Home() {
  const [navToggle, setNavToggle] = useState(false);

  const ToggleHandler = () => {
    setNavToggle(!navToggle);
  };

  return (
    <>
      <Nav ToggleHandler={ToggleHandler} navToggle={navToggle} />
      <Header />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
