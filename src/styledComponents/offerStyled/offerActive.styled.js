import styled from "styled-components";
import { COLORS } from "../../Vars";

export const OfferDescrContainer = styled.div`
width: 100vw;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

export const OfferDescr = styled.div`
position: relative;
  width: 35vw;
  padding-bottom: 30px;
  min-height: 300px;
  max-height: 80%;
  border: 2px solid ${COLORS.light_pink};
  border-right: none;
  border-radius: 100px 0 0 100px;
  transition: disabled;
  h4 {
    font-size: 1.3rem;
    margin-left: 15%;
    text-align: start;
    color: ${COLORS.dark_pink};
  }
  p {
    font-size: 1.1rem;
    margin-left: 10%;
    margin-right: 10%;
  }
`;
