import React from "react";
import Hero from "./components/Hero";
import SectionDivider from "./components/SectionDivider";
import About from "./components/About";

function App() {
  return (
    <>
      <Hero height="800px" />
      <SectionDivider />
      <About />
    </>
  );
}

export default App;
