import React, { useState, useEffect } from "react";

const Menu = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sectionIds = ["hero", "about", "psycho-work", "offer", "contact"];
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);
  function ScrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
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
        <MenuLink text="Moja praca" sectionId="psycho-work" />
        <MenuLink text="Oferta" sectionId="offer" />
        <MenuLink text="Gabinet" sectionId="" />
        <MenuLink text="Kontakt" sectionId="contact" />
      </ul>
    </>
  );
};

export default Menu;
