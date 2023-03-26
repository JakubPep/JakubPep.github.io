import styled from "styled-components";
import { COLORS } from "../Vars";

export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AboutDescription = styled.div`
    dusplay: flex;
    flex-direction: column;
    flex-basis: 50%;
    gap: 26px;
    h3 {
        color: ${COLORS.font_black};
    }
    p {
        font-size: 22px;
        line-height: 32px;
        color: ${COLORS.font_black};
    }
`