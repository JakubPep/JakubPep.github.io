import React from "react";
import useActiveSection from "../../hooks/useActiveSection";

const Menu = ({menuActive, toggleMenuActive}) => {
  /* Define which section ID's are observed by useActiveSection observer */
  const sectionIds = ["hero", "about", "psycho-work", "offer", "contact"];
  const activeSection = useActiveSection(sectionIds);

  function ScrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({
      behavior: "smooth",
    });
    
  }

  const MenuLink = ({ text, sectionId }) => {
    const handleClick = () => {
      ScrollToSection(sectionId);
      toggleMenuActive();
    };

    return (
      <>
        <li>
          <button
            className={sectionId === activeSection ? "active-section" : ""}
            onClick={handleClick}
          >
            {text}
          </button>
        </li>
      </>
    );
  };

  return (
    <>
      <ul>
        <MenuLink text="O mnie" sectionId="about" />
        <MenuLink text="Jak pracuję?" sectionId="psycho-work" />
        <MenuLink text="Oferta" sectionId="offer" />
        <MenuLink text="Kontakt" sectionId="contact" />
      </ul>
    </>
  );
};

export default Menu;
