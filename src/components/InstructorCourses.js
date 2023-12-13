import React from "react";

function InstructorCourses({ instructorName, instructorSurname, courses }) {
  const instructorCourses = courses.filter(
    (course) =>
      course.instructorName === instructorName &&
      course.instructorSurname === instructorSurname
  );

  return (
    <div>
      <h2>Kursları</h2>
      <ul>
        {instructorCourses.map((course) => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default InstructorCourses;
