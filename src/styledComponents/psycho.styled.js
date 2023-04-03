import styled from "styled-components";
import { COLORS } from "../Vars";

export const PsychoElement = styled.div`
  width: 80%;
margin-bottom: 60px;

  margin-left: auto;
  margin-right: auto;
  justify-content: center;

  .section-title {
    margin-bottom: 30px;
  }
  .section-title.right{
    text-align: end;
  }
  .photo-right {
    float: right;
    margin: 0 0 0 20px;
  }
  .photo-left {
    float: left;
    margin: 0 40px 0 0;
  }
  p {
    font-size: 1.25rem;
    line-height: 1.6rem;
    color: ${COLORS.font_black};
  }
`;
