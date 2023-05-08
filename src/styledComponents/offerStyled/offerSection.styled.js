import styled from "styled-components";
import { COLORS, SIZES } from "../../Vars";

export const OfferListContainer = styled.div`
  min-height: 500px;
  width: 50%;
  padding-bottom: 100px;

  background-color: ${COLORS.light_pink};
  border-radius: 0 165px 165px 0;

  h3.section-title {
    padding: 60px;
    color: #fff;
  }
  .single-offer {
    position: relative;
    min-width: 310px;
    width: 90%;
    left: 13%;
    background-color: white;
    border: 2px solid ${COLORS.light_pink};
    border-radius: 25vh;
    color: ${COLORS.font_black};
    margin-bottom: 0.85rem;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: left 0.5s;

    :hover {
      left: 17%;
    }
    :active {
      background-color: ${COLORS.dark_pink};
      color: #fff;
    }
  }

  .single-offer.single-offer--active {
    background-color: ${COLORS.dark_pink};
    color: #fff;
    left: 17%;
  }

  @media (max-width: ${SIZES.small}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    h3.section-title {
      padding-left: 20px;
      align-self: flex-start;
    }

    .single-offer {
      position: static;
      font-size: 1.3rem;
    }
  }
`;
