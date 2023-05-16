import React, { useState } from "react";
import { MenuBar } from "../../styledComponents/menu.styled";
import {
  MenuHidden,
  MenuHideIcon,
  MenuVisible,
  MenuVisibleBg,
  MenuSocials,
} from "../../styledComponents/menuMobile.styled";
import faBars from "../../images/svg/fa-bars-icon.svg";
import faXmark from "../../images/svg/fa-xmark-icon.svg";
import logoSmall from "../../images/pracownia-logo.png";
import igIcon from "../../images/svg/fa-ig-icon.svg";
import fbIcon from "../../images/svg/fa-fb-icon.svg";
import { CirclePhoto } from "../../styledComponents/circlePhoto.styled";
import Menu from "./Menu";

const MenuMobile = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenuActive = function () {
    setMenuActive(!menuActive);
  };

  function ScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <MenuBar>
        <MenuHidden>
          <button className="menu-toggler" onClick={toggleMenuActive}>
            <img src={faBars} alt="rozwiń menu"></img>
          </button>
          <button className="menubar-logo" onClick={ScrollToTop}>
            <img
              className="menuLogoSmall"
              src={logoSmall}
              alt="logo pracowni"
            ></img>
          </button>
        </MenuHidden>
        {menuActive && (
          <MenuVisibleBg onClick={toggleMenuActive}>
            <MenuVisible onClick={(e) => e.stopPropagation()}>
              <MenuHideIcon className="menuCloseIcon" src={faXmark} onClick={toggleMenuActive} />
              <CirclePhoto
                className="menuOpenLogo"
                photoUrl={logoSmall}
                width="55vw"
                height="55vw"
                borderWidth="none"
                boxShadow="none"
              />
              <Menu toggleMenuActive={toggleMenuActive} menuActive={menuActive} />
              <MenuSocials>
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
              </MenuSocials>
            </MenuVisible>
          </MenuVisibleBg>
        )}
      </MenuBar>
    </>
  );
};

export default MenuMobile;
