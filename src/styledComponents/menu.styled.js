import styled from "styled-components";
import { COLORS } from "../Vars";

export const MenuBar = styled.nav`
  ul {
    height: 60px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: end;
    align-items: center;
    background-color: ${COLORS.light_green};
    box-shadow: 0px 1px 5px ${COLORS.light_green_opacity};
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      display: inline;
      margin-right: 1.8rem;
      button {
        cursor: pointer;
        padding: 13px;
        max-height: 60px;
        background-color: transparent;

        border: none;
        font-size: 1.2rem;
        letter-spacing: 1px;
        /* text-transform: uppercase; */
      }

      .active-section {
        animation: underlineAppear 1s;
        text-decoration: underline;
        text-decoration-color: ${COLORS.light_pink};
        text-decoration-thickness: 4px;
      }

      @keyframes underlineAppear {
        0% {
          text-decoration-color: transparent;
          text-decoration-thickness: 0px;
        }
        100% {
          text-decoration-thickness: 4px;
        }
      }
    }
  }
`;

export const MenuBarLogo = styled.div`
  cursor: pointer;
  height: 150px;
  width: 150px;
  position: fixed;
  left: 5%;
  top: 0;
  background-color: ${COLORS.light_green};
  background-image: url(${(props) => props.photoUrl});
  background-position: center;
  background-size: cover;
  border-radius: 0 0 50% 50%;
  z-index: 101;
  animation: smoothAppear 1s;
  
`;
