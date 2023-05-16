import React from "react";
import {
  AboutContainer,
  AboutDescription,
} from "../styledComponents/about.styled";
import { CirclePhoto } from "../styledComponents/circlePhoto.styled";
import aboutPhoto from "../images/aboutPhoto.jpg";
import { COLORS } from "../Vars";

const About = () => {
  return (
    <>
      <AboutContainer className="about-section">
        <AboutDescription>
          <h2 className="section-title">O mnie</h2>
          <p>
            Nazywam się Dominika Szałkowska. Jestem psycholożką i
            psychodietetyczką.
          </p>
          <p>
            Konsultacje, które prowadzę to spotkania w partnerskiej atmosferze,
            skupiające się na przepracowaniu doświadczanych trudności.
          </p>
          <p>
            W swojej pracy opieram się na metodach podejścia
            poznawczo-behawioralnego, humanistyczno-egzystencjalnego oraz
            Porozumienia Bez Przemocy (NVC).
          </p>
        </AboutDescription>
        <CirclePhoto
          height="30vw"
          width="30vw"
          alt="zdjęcie portretowe"
          photoUrl={aboutPhoto}
          borderWidth="7px"
          borderColor={COLORS.light_pink}
        />
      </AboutContainer>
    </>
  );
};

export default About;
