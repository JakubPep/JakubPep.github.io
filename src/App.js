import React from "react";
import Hero from "./components/Hero";
import SectionDivider from "./components/SectionDivider";
import About from "./components/About";
import Education from "./components/education/Education";
import PsychoSection from "./components/PsychoSection";

function App() {
  return (
    <>
      <Hero height="100vh" />
      <SectionDivider />
      <About />
      <Education />
      <SectionDivider />
      <PsychoSection />
    </>
  );
}

export default App;
