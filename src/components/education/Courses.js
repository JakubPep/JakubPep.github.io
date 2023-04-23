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
          borderColor={COLORS.font_black}
          borderWidth="2px"
        />
        <CourseRight>
          <Course courseName="Kurs zorganizowany przez ministerstwo kultury i rozwoju w temacie pomocy niepełnoletnim z ich zdrowiem psychicznym." />
          <Course courseName="Szkolenie z pierwszej pomocy." />
          <Course courseName="Szkolenie z pierwszej pomocy." />
        </CourseRight>
      </CoursesContainer>
    </>
  );
};

export default Courses;
