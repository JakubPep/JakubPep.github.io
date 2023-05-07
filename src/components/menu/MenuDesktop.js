import React from "react";
import { MenuBar, MenuBarLogo } from "../../styledComponents/menu.styled";
import Menu from "./Menu";
import { useLogoInMenu } from "../../hooks/useLogoInMenu";
import menuLogo from "../../images/pracownia-logo.png";

const MenuDesktop = () => {
  const showLogo = useLogoInMenu(false);

  function ScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <MenuBar>
        {showLogo && <MenuBarLogo photoUrl={menuLogo} onClick={ScrollToTop}/>}
        <Menu />
      </MenuBar>
    </>
  );
};

export default MenuDesktop;
