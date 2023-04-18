import React from "react";
import { CirclePhoto } from "../styledComponents/circlePhoto.styled";
import { PsychoElement } from "../styledComponents/psycho.styled";
import { COLORS } from "../Vars";
import brainPhoto from "../images/brain-photo.png"
import platePhoto from "../images/plate-photo.png"
import forkPhoto from "../images/fork-photo.png"

const PsychoSection = () => {
  return (
    <>
      <PsychoElement>
        <h3 className="section-title">Psychologia</h3>
        <CirclePhoto
          className="photo-right"
          photoUrl={brainPhoto}
          width="22vw"
          height="22vw"
          borderColor={COLORS.light_pink}
          borderWidth="3px"
        />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis pharetra dolor lobortis viverra. Aliquam lobortis mauris iaculis molestie sagittis. Proin consectetur est eu nisi pretium cursus. Cras tellus libero, malesuada quis elit eget, scelerisque fringilla ligula. Morbi accumsan in.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis pharetra dolor lobortis viverra. Aliquam lobortis mauris iaculis molestie sagittis. Proin consectetur est eu nisi pretium cursus. Cras tellus libero, malesuada quis elit eget, scelerisque fringilla ligula. Morbi accumsan in.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis pharetra dolor lobortis viverra. Aliquam lobortis mauris iaculis molestie sagittis. Proin consectetur est eu nisi pretium cursus. Cras tellus libero, malesuada quis elit eget, scelerisque fringilla ligula. Morbi accumsan in.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis pharetra dolor lobortis viverra. Aliquam lobortis mauris iaculis molestie sagittis. Proin consectetur est eu nisi pretium cursus. Cras tellus libero, malesuada quis elit eget, scelerisque fringilla ligula. Morbi accumsan in.</p>
      </PsychoElement>
      <PsychoElement>
        <h3 className="section-title right">Psychodietetyka</h3>
        <CirclePhoto
          className="photo-left"
          photoUrl={forkPhoto}
          width="22vw"
          height="22vw"
          borderColor={COLORS.light_pink}
          borderWidth="3px"
        />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis pharetra dolor lobortis viverra. Aliquam lobortis mauris iaculis molestie sagittis. Proin consectetur est eu nisi pretium cursus. Cras tellus libero, malesuada quis elit eget, scelerisque fringilla ligula. Morbi accumsan in.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis pharetra dolor lobortis viverra. Aliquam lobortis mauris iaculis molestie sagittis. Proin consectetur est eu nisi pretium cursus. Cras tellus libero, malesuada quis elit eget, scelerisque fringilla ligula. Morbi accumsan in.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis pharetra dolor lobortis viverra. Aliquam lobortis mauris iaculis molestie sagittis. Proin consectetur est eu nisi pretium cursus. Cras tellus libero, malesuada quis elit eget, scelerisque fringilla ligula. Morbi accumsan in.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis pharetra dolor lobortis viverra. Aliquam lobortis mauris iaculis molestie sagittis. Proin consectetur est eu nisi pretium cursus. Cras tellus libero, malesuada quis elit eget, scelerisque fringilla ligula. Morbi accumsan in.</p>
      </PsychoElement>
    </>
  );
};

export default PsychoSection;
