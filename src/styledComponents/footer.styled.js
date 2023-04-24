import styled from "styled-components";
import { COLORS } from "../Vars";

export const FooterContainer = styled.div`
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${COLORS.light_green};
  padding-top: 30px;
  padding-bottom: 30px;
  img {
    box-shadow: none;
    border: none;
    background-repeat: no-repeat;
  }
  img.logo-photo {
    min-width: 350px;
    min-height: 350px;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  animation-delay: .7s;

  .company-name {
    max-width: 500px;

    font-size: 1.8rem;
    font-family: "Times New Roman", Times, serif;
    font-weight: 700;
    line-height: 2.2rem;
    margin: 0;
  }
  .owner-name {
    font-family: "Times New Roman", Times, serif;
    font-size: 1.6rem;
    letter-spacing: 1px;
    margin-top: 0.6rem;
    margin-bottom: 0.8rem;
  }
  .details-divider {
    width: 60%;
    border: none;
    margin: 0 0 15px 0;
    border-top: 3px solid ${COLORS.font_black};
  }

  .contact-detail {
    font-size: 1.3rem;
    margin: 0.6rem 0 0.6rem 0;
  }
  img {
    height: 30px;
    width: 30px;
    display: inline;
    vertical-align: middle;
    margin-right: 10px;
  }
`;

export const Socials = styled.div`
  display: flex;
  width: 50%;
  gap: 20px;
  margin-top: 40px;
  img {
    width: 40px;
    height: 40px;
  }
`;
