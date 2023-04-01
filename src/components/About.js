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
      <AboutContainer>
        <AboutDescription>
          <h3 className="section-title">O mnie</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sagittis pharetra dolor lobortis viverra. Aliquam lobortis mauris
            iaculis molestie sagittis. Proin consectetur est eu nisi pretium
            cursus. Cras tellus libero, malesuada quis elit eget, scelerisque
            fringilla ligula. Morbi accumsan in.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sagittis pharetra dolor lobortis viverra. Aliquam lobortis mauris
            iaculis molestie sagittis. Proin consectetur est eu nisi pretium
            cursus. Cras tellus libero, malesuada quis elit eget, scelerisque
            fringilla ligula. Morbi accumsan in.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sagittis pharetra dolor lobortis viverra. Aliquam lobortis mauris
            iaculis molestie sagittis. Proin consectetur est eu nisi pretium
            cursus. Cras tellus libero, malesuada quis elit eget, scelerisque
            fringilla ligula. Morbi accumsan in.
          </p>
        </AboutDescription>
        <CirclePhoto
          height="30vw"
          width="30vw"
          photoUrl={aboutPhoto}
          borderColor={COLORS.light_pink}
        />
      </AboutContainer>
    </>
  );
};

export default About;
