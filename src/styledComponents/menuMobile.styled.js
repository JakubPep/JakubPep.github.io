import styled from "styled-components";
import { COLORS } from "../Vars";

export const MenuHidden = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    height: 60px;
    width: 60px;
    padding: 0;
    background-color: transparent;
    border: none;
    img {
      height: 80%;
      width: 80%;
    }
    .menuLogoSmall {
      height: 100%;
      width: 100%;
    }
  }
`;

export const MenuVisibleBg = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const MenuVisible = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 70vw;
  background-color: ${COLORS.light_green};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  img {
    box-shadow: none;
  }
`;

export const MenuHideIcon = styled.img`
  height: 40px;
  width: 40px;
  padding: 10px;
  align-self: flex-end;
`;

export const MenuSocials = styled.div`
  display: flex;
  gap: 30px;
  a {
    width: 40px;
    height: 40px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
