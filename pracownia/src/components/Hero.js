import React from "react";
import { HeroImage } from "../styledComponents/hero.styled.js";

const Hero = (props) => {
  return (
    <>
      <HeroImage
      height={props.height}
      >
        <p>tekst</p>
      </HeroImage>
    </>
  );
};

export default Hero;
