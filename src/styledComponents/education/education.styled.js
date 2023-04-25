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
  width: 90%;
  margin-top: 40px;
  margin-bottom: 60px;

  justify-content: center;
  gap: 60px;
`;

export const SchoolElements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 200px;
  min-width: 300px;

  padding: 20px;

  background-color: ${COLORS.white_opacity};
  border: 1px solid ${COLORS.font_black};
  border-radius: 5px;
`;

export const SchoolTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

export const SchoolLogo = styled.div`
  background-image: url(${(props) => props.logoUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 60px;
  height: 60px;
`;

export const SchoolTitles = styled.div`
  text-align: center;
  max-width: 300px;

  .school-name {
    font-size: 22px;
    font-weight: 600;
    color: ${COLORS.font_black};
    margin: 0px;
  }
  .school-years {
    font-size: 12px;
    color: ${COLORS.font_black};
    margin: 0;
  }
`;

export const SchoolDescription = styled.span`
  font-size: 20px;
  margin: 0;
  max-width: 350px;
  text-align: center;
`;
