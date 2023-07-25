import React from "react";
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
import ContactForm from "./form-contact/ContactForm";


const Footer = () => {
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
            <a className="footer-link" href="Tel: 881 636 634">
              {phoneNumber}
            </a>
          </p>

          <p className="contact-detail">
            <img src={mailIcon} alt="Email"></img>
            <a className="footer-link" href="mailto:pracownia.klient@gmail.com">
              {email}
            </a>
          </p>
          <p className="contact-detail">
            <img src={placeIcon} alt="Adres"></img>
            {address}
          </p>
          <Socials>
            <a
              href="https://www.instagram.com/psycho_pracownia/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={igIcon} alt="Instagram"></img>
            </a>
            <a
              href="https://www.facebook.com/pracowniapsychologiiipsychodietetyki"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={fbIcon} alt="Facebook"></img>
            </a>
          </Socials>
        </ContactContainer>
      </>
    );
  };
  return (
    <>
      <FooterBg className="contact-section">
        <ContactForm></ContactForm>
        <FooterContainer>
          <CirclePhoto
            className="logo-photo contact-logo"
            photoUrl={Logo}
            width="35vw"
            height="35vw"
          />
          <ContactDetails
            companyName="Pracownia Psychologii i Psychodietetyki"
            ownerName="Dominika Szałkowska"
            address="Chojnice, ul. Gdańska 26"
            phoneNumber="881 636 634"
            email="kontakt@psycho-pracownia.pl"
          />
        </FooterContainer>
        <MapElement />
      </FooterBg>
    </>
  );
};

export default Footer;
