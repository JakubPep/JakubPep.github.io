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
    margin-bottom: 20px;
    border: 2px solid ${COLORS.light_pink};
    border-radius: 25vh;
    transition: left 0.7s ease;
    p.offer-name {
      color: ${COLORS.font_black};
      margin-top: 0.85rem;
      margin-bottom: 0.85rem;
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    :hover {
      left: 17%;
    }
    :active {
      background-color: ${COLORS.dark_pink};
      p {
        color: #fff;
      }
    }
  }
`;
