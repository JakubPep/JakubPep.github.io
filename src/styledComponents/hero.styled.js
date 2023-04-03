import styled from "styled-components";
import { COLORS } from "../Vars";
import bgImage from "../images/heroPhoto.jpg";
import logoImage from "../images/pracownia-logo.png";

export const HeroContainer = styled.div`
height: ${(props) => props.height};
`

export const HeroImage = styled.div`
width: 100%;
height: 100%;
background-image: url(${bgImage});
background-size: cover;
background-position: center;
filter: blur(2px);
`;

export const HeroLogo = styled.div`
height: 75vh;
width: 75vh;
border-radius: 50%;

position: absolute;
top: 10%;
left: 50%;

background: url(${logoImage}), ${COLORS.light_green_opacity};
background-size: cover;
`