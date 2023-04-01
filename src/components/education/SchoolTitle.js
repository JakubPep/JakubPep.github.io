import React from "react";
import { SchoolTitles } from "../../styledComponents/education/education.styled";

const SchoolTitle = (props) => {
    return(
        <>
        <SchoolTitles>
        <p className="school-name">{props.univName}</p>
        <p className="school-years">{props.univYears}</p>
        </SchoolTitles>
        </>
    );
}; export default SchoolTitle;