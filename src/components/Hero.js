import React from "react";
import { HeroContainer, HeroImage, HeroLogo } from "../styledComponents/hero.styled.js";

const Hero = (props) => {
  return (
    <>
    <HeroContainer
    height={props.height}>
      <HeroImage ></HeroImage>
      <HeroLogo></HeroLogo>
      
      
      </HeroContainer>
    </>
  );
};

export default Hero;
