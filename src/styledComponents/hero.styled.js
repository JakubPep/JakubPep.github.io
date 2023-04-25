import styled from "styled-components";
import { COLORS } from "../Vars";
import bgImage from "../images/heroPhoto.jpg";

export const HeroContainer = styled.div`
  height: ${(props) => props.height};
  @media (max-width: 450px) {
    height: 55vh;
  }
`;

export const HeroImage = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  height: 100%;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  @media (max-width: 450px) {
    justify-content: center;
    background-position-x: 20%;
  }
`;

export const HeroLogo = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  border-radius: 50%;
  img {
    height: 80%;
    width: auto;
    background-color: ${COLORS.light_green_opacity};
    border-radius: 50%;
    max-height: 90%;
  }

  @media (max-width: 450px) {
    justify-content: center;
    /* position: relative;
    top: 20px;
    right: 20px;
    height: 60%; */
    img {
    }
  }
`;
