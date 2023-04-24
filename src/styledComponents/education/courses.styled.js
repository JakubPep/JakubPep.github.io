import styled from "styled-components";
import { COLORS } from "../../Vars";

export const CoursesContainer = styled.div`
  width: 90%;

  align-items: center;

  img{
    margin-right: 40px;
    min-width: 300px;
    max-width: 400px;
    min-height: 300px;
    max-height: 400px;
  }
`;

export const CourseRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-width: 50%;
  max-width: 60%;
  gap: 20px;
`;

export const SingleCourse = styled.div`
  width: 100%;
  min-height: 50px;
  padding-left: 15px;
  padding-right: 15px;

  background-color: ${COLORS.white_opacity};
  border: 1px solid ${COLORS.font_black};
  border-radius: 5px;

  p {
    font-size: 1.1rem;
    line-height: 1.4rem;
    text-align: center;
  }
`;
