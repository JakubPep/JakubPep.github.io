import React, { useEffect } from "react";
import Hero from "./components/Hero";
import SectionDivider from "./components/SectionDivider";
import About from "./components/About";
import Education from "./components/education/Education";
import PsychoSection from "./components/PsychoSection";
import OfferSection from "./components/offer/OfferSection";
import Footer from "./components/Footer";
import MenuDesktop from "./components/menu/MenuDesktop";
import { useWindowWidth } from "./hooks/useWindowWidth";

function App() {
  console.log(useWindowWidth());
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add("anim-smooth-appear");
        return;
      }
      entry.target.classList.remove("anim-smooth-appear");
    });
  });
  useEffect(() => {
    observer.observe(document.querySelector(".about-section"));
    observer.observe(document.querySelector(".contact-section"));
    observer.observe(document.querySelector(".contact-logo"));
  });



  return (
    <>
      <MenuDesktop />
      <Hero height="100vh" />
      <SectionDivider id="about"/>
      <About />
      <Education />
      <SectionDivider id="psycho-work"/>
      <PsychoSection />
      <SectionDivider id="offer"/>
      <OfferSection />
      <SectionDivider id="contact"/>
      <Footer />
    </>
  );
}

export default App;
