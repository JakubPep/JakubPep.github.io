import styled from "styled-components";
import { COLORS } from "../Vars";

export const ReservationCircle = styled.div`
  width: 100px;
  height: 100px;
  color: black;
  border-radius: 50%;
  z-index: 1000;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: transform 0.5s;

  :hover {
    transform: scale(1.1);
  }
  a {
    width: 100%;
    height: 100%;
    display: flex;
    text-decoration: none;
    h3 {
      margin: auto auto;
      width: 100%;
      color: white;
      text-align: center;
      vertical-align: center;
      text-transform: uppercase;
      font-weight: 500;
    }
  }
`;
