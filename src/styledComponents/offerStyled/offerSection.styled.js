import styled from "styled-components";
import { COLORS } from "../../Vars";

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
    transition: left 0.7s ease;
    color: ${COLORS.font_black};
    margin-bottom: 0.85rem;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.1em;

    :hover {
      left: 17%;
    }
    :active {
      background-color: ${COLORS.dark_pink};
      color: #fff;
    }
  }
`;
