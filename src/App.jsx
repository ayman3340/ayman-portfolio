import "./App.css";
import About from "./Component/About";
import Project from "./Component/Project";
import Contact from "./Component/Contact";
import Certifications from "./Component/Certifications";
import Navbar from "./Component/Carousel/Navbar";
import Hero from "./Component/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Certifications />
      <Project />
      <About />
      <Contact />

    </>
  );
}

export default App;
