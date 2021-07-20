import React from "react";
import { Container, Content, HeaderSection, CoursesTaught } from "./styles";

import iconCourses from "../../assets/svgs/icon-courses.svg";
import iconEducation from "../../assets/svgs/icon_education.svg";

import { courses } from "../../repository";

export function Courses() {
  return (
    <Container id="courses">
      <HeaderSection>
        <img src={iconCourses} alt="cursos" />
        <h1>CURSOS MINISTRADOS</h1>
      </HeaderSection>
      <Content>
        <CoursesTaught>
          {courses.map((item) => (
            <ul key={item}>
              <div></div>
              {item}
            </ul>
          ))}
        </CoursesTaught>
        <img src={iconEducation} alt="education" />
      </Content>
    </Container>
  );
}
