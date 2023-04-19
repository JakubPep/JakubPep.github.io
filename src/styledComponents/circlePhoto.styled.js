import styled from "styled-components";
import { COLORS } from "../Vars";

export const CirclePhoto = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 10px;

  background-image: url(${(props) => props.photoUrl});
  background-size: cover;
  background-position: center;

  border: ${(props) => props.borderWidth} solid;
  border-color: ${(props) => props.borderColor};
  border-radius: 50%;

  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
`;
