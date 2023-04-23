import styled from "styled-components";
import { COLORS } from "../Vars";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 60px;
  img{
    min-width: 300px;
    min-height: 300px;
  }
`;

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
`;
