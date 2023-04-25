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
    max-width: 450px;
    min-height: 300px;
    max-height: 450px;
  }

  @media (max-width: 450px){
    flex-direction: column;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
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

  @media (max-width: 450px){
    align-items: center;
  }
`;
