import styled from "styled-components";
import { COLORS, SIZES } from "../Vars";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  gap: 25px;
  background-color: white;

  @media (max-width: ${SIZES.laptop}) {
    border-radius: 0;
    padding: 20px 0;
  }

  span.contact-form__cta-text {
    font-size: 2rem;
    font-weight: 600;
  }

  .section-title {
    color: ${COLORS.font_black};
  }

  div {
    input,
    textarea {
      border: 2px solid ${COLORS.light_pink};
      border-radius: 50px;
      background-color: rgba(255, 255, 255, 0.3);
      font-size: 1.1rem;
      font-family: inherit;
      :focus-visible {
        border-color: ${COLORS.dark_pink};
        outline: none;
      }
    }
  }

  button {
    cursor: pointer;
    padding: 10px 25px;
    font-size: 1.5rem;
    border-radius: 30px;
    box-shadow: none;
    color: white;
    background-color: ${COLORS.dark_pink};
    border: 2px solid ${COLORS.dark_pink};
    transition: all 0.2s linear;
    :hover {
      color: ${COLORS.light_pink};
      background-color: transparent;
      border-color: ${COLORS.light_pink};
    }
  }

  button.contact-form__button.contact-form__sent {
    cursor: default;
    background-color: ${COLORS.dark_green};
    border-color: ${COLORS.dark_green};
    :hover {
        color: white;
    }
  }

  .loader {
    margin: auto;
    border: 7px solid ${COLORS.light_pink};
    border-radius: 50%;
    border-top: 7px solid ${COLORS.light_green};
    height: 13.5px;
    width: 13.5px;
    animation: spinner 0.5s ease-in-out infinite;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const FormDataContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  gap: 20px;
  input {
    width: 100%;
    padding: 10px 10px;
  }

  @media (max-width: ${SIZES.laptop}) {
    width: 80%;
    flex-direction: column;
    align-items: center;
    input {
        width: 100%;
    }
  }
`;

export const FormMessageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  textarea {
    width: 100%;
    height: 90px;
    padding: 1rem 25px;
    resize: none;
  }

  @media (max-width: ${SIZES.laptop}) {
    width: 90%;
    textarea {
        height: 120px;
    }
  }
`;

export const FormConsentContainer = styled.div`
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;

  a {
    color: ${COLORS.dark_pink};
    text-decoration: none;
    transition: color 0.2s linear;
    :hover {
      color: ${COLORS.light_pink};
    }
  }

  label {
    cursor: pointer;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    input {
      cursor: pointer;
      margin: 0 10px;
      height: 1.2rem;
      width: 1.2rem;
      border-radius: 50%;
      accent-color: white;
      :checked {
        accent-color: ${COLORS.dark_pink};
      }
      :hover {
        accent-color: ${COLORS.light_pink};
      }
    }
  }

  @media (max-width: ${SIZES.laptop}) {
    width: 90%;
    
  }
`;
