import styled from "styled-components";
import { COLORS } from "../Vars";
import bgImage from "../images/heroPhoto.jpg";

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
position: absolute;
top: 15px;
left: 50%;
background-color: ${COLORS.light_green_opacity};
border-radius: 50%;
img{
    height: 45vw;
    width: auto;
    border-radius: 50%;
    max-height: 90vh;

    
}
`