import React from "react";

const Menu = () => {
  function ScrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }

  const MenuLink = ({ text, sectionId }) => {
    return (
      <>
        <li>
          <button onClick={() => ScrollToSection(sectionId)}>{text}</button>
        </li>
      </>
    );
  };

  return (
    <>
      <ul>
        <MenuLink text="O mnie" sectionId="about"/>
        <MenuLink text="Moja praca" sectionId="psycho-work"/>
        <MenuLink text="Oferta" sectionId="offer"/>
        <MenuLink text="Gabinet" sectionId=""/>
        <MenuLink text="Kontakt" sectionId="contact"/>
      </ul>
    </>
  );
};

export default Menu;
