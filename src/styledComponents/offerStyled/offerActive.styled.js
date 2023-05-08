import styled from "styled-components";
import { COLORS, SIZES } from "../../Vars";

export const OfferDescrContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding-top: 60px;
`;

export const OfferDetailsContainer = styled.div`
  animation: slideInOut 0.5s ease-out;

  @keyframes slideInOut {
    0% {
      right: -35vw;
      opacity: 0;
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
  overflow: hidden;

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

  @media (max-width: ${SIZES.medium}) {
    width: 95%;
    min-height: auto;
    border: 2px solid ${COLORS.dark_pink};
    border-radius: 75px;
    background-color: white;
    padding-bottom: 10px;
    margin-bottom: 20px;
    animation: scrollDown 0.5s ease-in-out;
    transform-origin: 50% 0;

    @keyframes scrollDown {
      0% {
        height: 0;
        top: -20px;
        opacity: 0;
        transform: scaleY(0.7);
      }

      100% {
        height: 100%;
        top: 0;
        opacity: 1;
        transform: scaleY(1);
      }
    }

    .descr-title {
      text-align: start;
      font-size: 1.2rem;
    }
    .descr-paragraph {
      font-size: 1.1rem;
      line-height: 1.3rem;
    }
  }
`;
