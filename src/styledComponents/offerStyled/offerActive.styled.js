import styled from "styled-components";
import { COLORS } from "../../Vars";

export const OfferDescrContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding-top: 60px;

  .offer-descr {
    animation: slideInOut 0.5s ease-out both;

    @keyframes slideInOut  {
      0% {
        right: -35vw;
        opacity: 0
      }
      100% {
        right: 0vw;
        opacity: 1;
      }
    }
    position: relative;
    width: 35vw;
    padding-bottom: 50px;
    min-height: 300px;
    border: 2px solid ${COLORS.light_pink};
    border-right: none;
    border-radius: 100px 0 0 100px;
    transition: disabled;
    .descr-title {
      font-size: 1.3rem;
      margin-left: 15%;
      text-align: start;
      color: ${COLORS.dark_pink};
    }
    .descr-paragraph {
      font-size: 1.3rem;
      line-height: 1.5rem;
      letter-spacing: 1px;
      margin-left: 10%;
      margin-right: 10%;
    }
  }
`;