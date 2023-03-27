import styled from "styled-components";
import { COLORS } from "../Vars";
import circlePhoto from "../images/aboutPhoto.jpg"

export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 46px;
`

export const AboutDescription = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 45%;
    gap: 20px;
    h3 {
        color: ${COLORS.font_black};
    }
    p {
        font-size: 22px;
        line-height: 32px;
        color: ${COLORS.font_black};
    }
`

export const AboutPhoto = styled.div`
    width: 600px;
    height: 600px;
    margin: 10px;

    background-image: url(${circlePhoto});
    background-size: cover;
    background-position: center;

    border: 10px solid ${COLORS.light_pink};
    border-radius: 50%;
`