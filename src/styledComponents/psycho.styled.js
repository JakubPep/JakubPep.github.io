import styled from "styled-components";
import { COLORS, SIZES } from "../Vars";
import arrowRight from "../images/svg/fa-arrow-right.svg";

export const PsychoElement = styled.div`
  width: 80%;
  margin-bottom: 60px;
  margin-left: 0;
  margin-right: 0;
  max-width: 100%;

  margin-left: auto;
  margin-right: auto;
  justify-content: center;

  img {
    min-width: 200px;
    max-width: 400px;
    min-height: 200px;
    max-height: 400px;
  }

  .section-title {
    margin-bottom: 30px;
    width: 100%;
  }
  .section-title.right {
    text-align: end;
  }

  p,
  li {
    font-size: 1.15rem;
    line-height: 1.6rem;
    color: ${COLORS.font_black};
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    margin-bottom: 10px;
  }

  .arrow {
    color: ${COLORS.light_pink};
  }

  li::before {
    content: " ";
    background-image: url(${arrowRight});
    background-size: cover;
    background-position: center;
    display: inline-block;
    vertical-align: middle;
    height: 1.15rem;
    width: 1.15rem;
    margin-left: -2rem;
    margin-right: 1rem;
  }

  .reverse {
    flex-direction: row-reverse;
  }

  @media (max-width: ${SIZES.large}) {
    width: 90%;
    display: flex;
    flex-direction: column;

    .section-title,
    .section-title.right {
      text-align: center;
      font-size: 2rem;
    }
    .section-title {
      margin-top: 1rem;
      margin-bottom: 2rem;
    }
    p,
    li {
      font-size: 1.15rem;
    }
    li {
      margin-left: 2rem;
    }
    .reverse {
      flex-direction: column;
    }
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  gap: 50px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${SIZES.large}) {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0;
  }
`;
