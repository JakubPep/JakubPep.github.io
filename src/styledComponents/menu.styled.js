import styled from "styled-components";
import { COLORS } from "../Vars";

export const MenuBar = styled.nav`
  ul {
    height: 60px;
    width: 100%;
    position: fixed;
    top:0;
    left:0;
    z-index: 100;
    display: flex;
    justify-content: end;
    align-items: center;
    background-color: ${COLORS.light_green};
    box-shadow: 0px 3px 5px ${COLORS.light_green_opacity};
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
        font-size: 1.3rem;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
    }
  }
`;
