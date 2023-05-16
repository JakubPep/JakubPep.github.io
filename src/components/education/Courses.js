import React from "react";
import {
  CourseRight,
  CoursesContainer,
  SingleCourse,
} from "../../styledComponents/education/courses.styled";
import { CirclePhoto } from "../../styledComponents/circlePhoto.styled";
import { COLORS } from "../../Vars";
import coursesPhoto from "../../images/booksPhoto.jpg";

const Course = (props) => {
  return (
    <>
      <SingleCourse>
        <p>{props.courseName}</p>
      </SingleCourse>
    </>
  );
};

const Courses = () => {
  return (
    <>
      <CoursesContainer>
        <CirclePhoto
          className="float-left"
          height="25vw"
          width="25vw"
          photoUrl={coursesPhoto}
          alt="zdjęcie z książkami"
          borderColor={COLORS.font_black}
          borderWidth="2px"
        />
        <CourseRight>
          <Course courseName='Szkolenie: "Jak pracować z pacjentem, który żyje w ciągłym lęku i zamartwianiu?"' />
          <Course courseName='Szkolenie: "Podstawy porozumienia bez przemocy (NVC) dla psychologów i psychoterapeutów"' />
          <Course courseName='Szkolenie: "Jak dostosować strategię pomocy do sytuacji pacjenta?"' />
        </CourseRight>
      </CoursesContainer>
    </>
  );
};

export default Courses;
