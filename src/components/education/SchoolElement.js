import React from "react";
import {
  SchoolElements,
  SchoolTitleContainer,
  SchoolLogo,
  SchoolDescription,
} from "../../styledComponents/education/education.styled";
import SchoolTitle from "./SchoolTitle";

const SchoolElement = (props) => {
  return (
    <>
      <SchoolElements>
        <SchoolTitleContainer>
          <SchoolLogo logoUrl={props.logoUrl} />
          <SchoolTitle univName={props.univName} univYears={props.univYears} />
        </SchoolTitleContainer>
        <SchoolDescription>
          <p>{props.descr1}</p>
          <p>{props.descr2}</p>
          <p>{props.descr3}</p>
          <p>{props.descr4}</p>
        </SchoolDescription>
      </SchoolElements>
    </>
  );
};

export default SchoolElement;
