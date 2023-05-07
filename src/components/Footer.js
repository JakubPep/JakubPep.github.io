import React, { useState } from "react";
import { CirclePhoto } from "../styledComponents/circlePhoto.styled";
import {
  FooterContainer,
  ContactContainer,
  Socials,
  FooterBg,
} from "../styledComponents/footer.styled";
import Logo from "../images/pracownia-logo.png";
import phoneIcon from "../images/svg/fa-phone-icon.svg";
import mailIcon from "../images/svg/fa-mail-icon.svg";
import placeIcon from "../images/svg/fa-place-icon.svg";
import igIcon from "../images/svg/fa-ig-icon.svg";
import fbIcon from "../images/svg/fa-fb-icon.svg";
import MapElement from "./Map";

import Popup from "./reservations/popup";

const Footer = () => {
  const [trigger, setTrigger] = useState(false);
  const ContactDetails = ({
    companyName,
    ownerName,
    address,
    phoneNumber,
    email,
  }) => {
    return (
      <>
        <ContactContainer>
          <p className="company-name">{companyName}</p>
          <p className="owner-name">{ownerName}</p>
          <hr className="details-divider" />
          <p className="contact-detail">
            <img src={phoneIcon} alt="Tel."></img>
            {phoneNumber}
          </p>

          <p className="contact-detail">
            <img src={mailIcon} alt="Email"></img>
            {email}
          </p>
          <p className="contact-detail">
            <img src={placeIcon} alt="Adres"></img>
            {address}
          </p>
          <Socials>
            <img src={igIcon} alt="Instagram"></img>
            <img src={fbIcon} alt="Facebook"></img>
          </Socials>
        </ContactContainer>
      </>
    );
  };
    const showHideReservationsPopup = () => setTrigger(!trigger);
  return (
    <>
      <FooterBg className="contact-section">
        <h2 className="section-title">Zapraszam do kontaktu!</h2>
        <FooterContainer>
          <CirclePhoto
            className="logo-photo contact-logo"
            photoUrl={Logo}
            width="35vw"
            height="35vw"
          />
          <ContactDetails
            companyName="Pracownia psychologii i psychodietetyki"
            ownerName="Dominika Szałkowska"
            address="Chojnice, ul. Gdańska 26"
            phoneNumber="881 636 634"
            email="pracownia.klient@gmail.com"
          />
        </FooterContainer>
        <MapElement />
        <button onClick={showHideReservationsPopup} >rezerwuj</button>
      </FooterBg>
      {trigger ? <Popup setTrigger={showHideReservationsPopup} /> : null}
    </>
  );
};

export default Footer;