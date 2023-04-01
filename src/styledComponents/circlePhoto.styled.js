import styled from "styled-components";

export const CirclePhoto = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 10px;

  background-image: url(${(props) => props.photoUrl});
  background-size: cover;
  background-position: center;

  border: 7px solid;
  border-color: ${(props) => props.borderColor};
  border-radius: 50%;
`;