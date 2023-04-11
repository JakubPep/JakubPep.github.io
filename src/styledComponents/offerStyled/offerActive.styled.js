import styled from "styled-components";
import { COLORS } from "../../Vars";

export const OfferDescrContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  .offer-descr {
    position: relative;
    width: 35vw;
    padding-bottom: 50px;
    min-height: 300px;
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
      line-height: 1.5rem;
      letter-spacing: 1px;
      margin-left: 10%;
      margin-right: 10%;
    }
  }
`;
