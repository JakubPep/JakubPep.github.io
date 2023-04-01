import React from "react";
import Hero from "./components/Hero";
import SectionDivider from "./components/SectionDivider";
import About from "./components/About";
import Education from "./components/education/Education";

function App() {
  return (
    <>
      <Hero height="90vh" />
      <SectionDivider />
      <About />
      <Education />
      <SectionDivider />
    </>
  );
}

export default App;
