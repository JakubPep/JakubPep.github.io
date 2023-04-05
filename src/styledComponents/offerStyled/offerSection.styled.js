import styled from "styled-components";
import { COLORS } from "../../Vars";

export const OfferListContainer = styled.div`
  min-height: 500px;
  width: 45%;
  padding-bottom: 100px;

  display: flex;
  flex-direction: column;
align-items: flex-end;

  background-color: ${COLORS.light_pink};
  border-radius: 0 165px 165px 0;
  h3.section-title {
    padding: 60px;
    color: ${COLORS.dark_pink};
    align-self: flex-start;
  }
`;

export const Offer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 60px;
  min-width: 310px;
  width: 90%;
  left: 30px;
  background-color: white;
  margin-bottom: 20px;
  border: 2px solid ${COLORS.light_pink};
  border-radius: 25vh;
  transition: left 0.7s ease;
  p {
    color: ${COLORS.dark_pink};
    margin-bottom: auto;
    margin-top: auto;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  :hover {
    left: 60px;
  }
`;
