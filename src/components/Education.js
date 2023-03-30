import React from "react";
import {
  EducationContainer,
  SchoolContainer,
} from "../styledComponents/education.styled";
import SchoolElement from "./SchoolElement";
import uniTerra from "../images/svg/logo-uniterra.svg";
import uam from "../images/svg/logo-uam.svg";

const Education = (props) => {
  return (
    <>
      <EducationContainer>
        <h3 className="section-title">Edukacja</h3>
        <SchoolContainer>
          <SchoolElement
            logoUrl={uam}
            univName="Uniwersytet im. Adama Mickiewicza w Poznaniu"
            univYears="2017-2022"
            descr="Psychologia. 5-letnie studia magisterskie. Specjalizacje: psychologia kliniczna, psychologia edukacji."
          />
          <SchoolElement
            logoUrl={uniTerra}
            univName="Wyższa Szkoła Uni-Terra w Poznaniu"
            univYears="2020-2023"
            descr="Dietetyka. 3-letnie studia licencjackie. Specjalizacja: dietetyka kliniczna."
          />
        </SchoolContainer>
      </EducationContainer>
    </>
  );
};

export default Education;
