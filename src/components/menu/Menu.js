import React from "react";
import useActiveSection from "../../hooks/useActiveSection";

  const Menu = () => {
    /* Define which section ID's are observed by useActiveSection observer */
    const sectionIds = ["hero", "about", "psycho-work", "offer", "contact"];
    const activeSection = useActiveSection(sectionIds);
  
    function ScrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
        offset: -100,
      });
    
    }


  const MenuLink = ({ text, sectionId }) => {
    return (
      <>
        <li>
          <button
            className={sectionId === activeSection ? "active-section" : ""}
            onClick={() => ScrollToSection(sectionId)}
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
        <MenuLink text="Przestrzeń" sectionId="" />
        <MenuLink text="Kontakt" sectionId="contact" />
      </ul>
    </>
  );
};

export default Menu;
