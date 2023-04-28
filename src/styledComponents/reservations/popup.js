import styled from 'styled-components';

export const PopupBox = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px);
`;
export const PopupFormContainer = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  width: 50%;
  height: 50%;
  margin: auto;
  box-shadow: 4px 4px 10px #888;
`;
export const PopupExit = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  align-self: flex-end;
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: all.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #000;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

export const PopupForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-self: center;
  gap: 5px;
  input {
    font-size: 1.2rem;
    padding: 8px 2px;
    box-shadow: 4px 4px 10px #888;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: all.2s ease-in-out;
    &:focus {
        transform: scale(1.02);
    }
  }
  button {
    background-color: #fff;
    margin-top: 10px;
    border: 1px solid #888;
    border-radius: 5px;
    padding: 8px 2px;
  }
`;
