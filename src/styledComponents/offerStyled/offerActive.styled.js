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
  width: 40vw;
  padding-bottom: 50px;
  padding-top: 40px;
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
  p {
    span.bold {
      font-weight: 700;
    }
  }
  .descr-time {
    margin-top: 25px;
  }

  .descr-time, .descr-price {
    text-align: end;
    font-size: 1.1rem;
    margin: 0 10% 15px 0;
  }

  @media (max-width: ${SIZES.offerActive}) {
    width: 95%;
    min-height: auto;
    border: 2px solid ${COLORS.dark_pink};
    border-radius: 75px;
    background-color: white;
    padding-bottom: 15px;
    padding-top: 10px;
    margin-bottom: 20px;
    animation: scrollDown 0.3s ease-in-out;
    transform-origin: 50% 0;

    @keyframes scrollDown {
      0% {
        height: 0;
        top: -20px;
        opacity: 0;
        transform: scale(0.7);
      }

      100% {
        height: 100%;
        top: 0;
        opacity: 1;
        transform: scale(1);
      }
    }

    .descr-title {
      text-align: start;
      font-size: 1.2rem;
    }
    .descr-paragraph {
      font-size: 1.05rem;
      line-height: 1.3rem;
    }
  }
`;
