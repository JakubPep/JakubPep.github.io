import styled from "styled-components";
import { COLORS } from "../Vars";
import circlePhoto from "../images/aboutPhoto.jpg"

export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 60px;
`

export const AboutDescription = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 40%;
    gap: 20px;
    h3 {
        color: ${COLORS.font_black};
    }
    p {
        font-size: 18px;
        line-height: 24px;
        color: ${COLORS.font_black};
        margin: 0;
    }
`

export const AboutPhoto = styled.div`
    width: 30vw;
    height: 30vw;
    margin: 10px;

    background-image: url(${circlePhoto});
    background-size: cover;
    background-position: center ;

    border: 7px solid ${COLORS.light_pink};
    border-radius: 50%;
`