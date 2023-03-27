import React from "react";
import {
  AboutContainer,
  AboutDescription,
  AboutPhoto,
} from "../styledComponents/about.styled";

const About = (props) => {
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
        <AboutPhoto />
      </AboutContainer>
    </>
  );
};

export default About;
