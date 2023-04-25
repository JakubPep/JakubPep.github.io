import React from "react";
import { HeroContainer, HeroImage, HeroLogo } from "../styledComponents/hero.styled.js";
import logoImage from "../images/pracownia-logo.png"

const Hero = (props) => {

  const LogoImage = () => {
    return(
      <>
      <HeroLogo>
      <img src={logoImage} alt="pracownia-logo"></img>
      </HeroLogo>
      </>
    )
  }

  return (
    <>
    <HeroContainer
    height={props.height}>
      <HeroImage >
      <LogoImage></LogoImage>
      </HeroImage>
      
      
      
      
      
      </HeroContainer>
    </>
  );
};

export default Hero;
