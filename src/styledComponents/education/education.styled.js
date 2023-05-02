import styled from "styled-components";
import { COLORS } from "../../Vars";

export const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 60px;

  align-items: center;
  justify-content: center;

  background-color: ${COLORS.light_pink};

  h3 {
    width: 75vw;
    margin-bottom: 30px;
    text-align: center;
  }

  @media (max-width: 450px) {
    padding: 50px 0;
  }
`;

export const SchoolContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 0;
  width: 90%;
  margin-top: 40px;
  margin-bottom: 60px;

  justify-content: center;
  gap: 60px;
`;

export const SchoolElements = styled.div`
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  align-items: center;
  min-height: 200px;
  min-width: 300px;
  max-width: 90%;

  padding: 20px;

  background-color: ${COLORS.white_opacity};
  border: 1px solid ${COLORS.font_black};
  border-radius: 5px;
  @media (max-width: 450px) {
    border-radius: 0;
  }
`;

export const SchoolTitleContainer = styled.div`
  margin-bottom: 15px;
`;

export const SchoolLogo = styled.div`
  background-image: url(${(props) => props.logoUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 60px;
  height: 60px;
  margin: 10px auto;
`;

export const SchoolTitles = styled.div`
  text-align: center;

  .school-name {
    font-size: 22px;
    font-weight: 600;
    color: ${COLORS.font_black};
    margin: 0px;
  }
  .school-years {
    font-size: 0.9rem;
    color: ${COLORS.font_black};
    margin: 0;
  }
`;

export const SchoolDescription = styled.span`
  margin: 0;
  max-width: 350px;
  text-align: center;
  white-space: break-spaces;
  p{
    margin: 0;
    margin-bottom: 0.2rem;
    font-size: 1.1rem;
  }
`;
