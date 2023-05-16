import React from "react";
import {
  EducationContainer,
  SchoolContainer,
} from "../../styledComponents/education/education.styled";
import SchoolElement from "./SchoolElement";
import uniTerra from "../../images/svg/logo-uniterra.svg";
import uam from "../../images/svg/logo-uam.svg";
import Courses from "./Courses";

const Education = () => {
  return (
    <>
      <EducationContainer>
        <h2 className="section-title">Wykształcenie</h2>
        <SchoolContainer>
          <SchoolElement
            logoUrl={uam}
            univName="Uniwersytet im. Adama Mickiewicza w Poznaniu"
            univYears="2017-2022"
            descr1="Pięcioletnie studia magisterskie"
            descr2="Wydział Psychologii i Kognitywistyki"
            descr3="Psychologia"
            descr4="Specjalności: Psychologia Edukacji, Psychologia Kliniczna"
          />
          <SchoolElement
            logoUrl={uniTerra}
            univName="Wyższa Szkoła Uni-Terra w Poznaniu"
            univYears="2020-2023"
            descr1="Trzyletnie studia licencjackie"
            descr2="Wydział Nauk Społecznych i Nauk o Zdrowiu"
            descr3="Dietetyka"
            descr4="Specjalność: Dietetyka Kliniczna"
          />
        </SchoolContainer>
        <Courses />
      </EducationContainer>
    </>
  );
};

export default Education;
