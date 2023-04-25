import styled from "styled-components";
import { COLORS } from "../Vars";

export const PsychoElement = styled.div`
  width: 80%;
  margin-bottom: 60px;

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
  }
  .section-title.right {
    text-align: end;
    margin-top: 100px;
  }
  .photo-right {
    float: right;
    margin: 0 0 20px 20px;
  }
  .photo-left {
    float: left;
    margin: 0 40px 0px 0;
  }
  p {
    font-size: 1.25rem;
    line-height: 1.6rem;
    color: ${COLORS.font_black};
  }

  @media (max-width: 450px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    .photo-right,
    .photo-left {
      float: none;
      margin: 0 auto;
    }
    .section-title.right {
      margin-top: 50px;
    }
  }
`;
