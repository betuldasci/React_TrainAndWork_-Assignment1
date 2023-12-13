import './App.css';
import {React, useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Courses from './components/Courses';
import Students from './components/Students';
import Instructors from './components/Instructors';
import CourseCreate from './components/CourseCreate';
import {Routes, Route} from 'react-router-dom';
import Navi from './components/Navi';
import PaymentScreen from './components/PaymentScreen';
import CreateStudent from './components/CreateStudent';
import InstructorCourses from './components/InstructorCourses';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const [courses, setCourses] = useState([])
  const [students, setStudents] = useState([])
  const [instructors, setInstructors] = useState([])
   const [loggedInStudent, setLoggedInStudent] = useState(null);
  

   const createCourse = async (
     title,
     instructorName,
     instructorSurname,
     duration,
     price,
     image,
     content,
     categoryId
   ) => {
     try {
       const response = await axios.post("http://localhost:3000/courses", {
         title,
         instructorName,
         instructorSurname,
         duration,
         price,
         image,
         content,
         categoryId,
       });

       const createdCourse = [...courses, response.data];
       console.log(createdCourse);
       setCourses(createdCourse);
     } catch (error) {
       console.error("Error creating course:", error);
     }
   };


   const createStudent = async (
     avatar,
     name,
     surname,
     birthDate,
     university,
     department,
     graduationYear,
     mail
   ) => {
     try {
       const response = await axios.post("http://localhost:3000/students", {
         avatar,
         name,
         surname,
         birthDate,
         university,
         department,
         graduationYear,
         mail,
       });

       const createdStudent = [...students, response.data];
       setStudents(createdStudent);
     } catch (error) {
       console.error("Error creating student:", error);
     }
   };


  const fetchCourses=async ()=>{
    const response = await axios.get("http://localhost:3000/courses");
    setCourses(response.data);
  }
   
const fetchStudents = async () => {
    const response = await axios.get("http://localhost:3000/students");
    setStudents(response.data);
    };

const fetchInstructors = async () => {
    const response = await axios.get("http://localhost:3000/instructors");
    setInstructors(response.data);
   };

  useEffect(() => {
    fetchCourses();  
   
  }, [])
  useEffect(() => {
     fetchStudents();
  }, [])
    useEffect(() => {
      fetchInstructors();
    }, []);
  
 
  return (
    <div className="App">
      <Navi loggedInStudent={loggedInStudent} />

      <Routes>
        <Route
          path="/courses"
          element={<Courses courses={courses} setCourses={setCourses} />}
        />
        <Route
          path="/students"
          element={<Students students={students} setStudents={setStudents} />}
        />
        <Route
          path="/instructors"
          element={<Instructors instructors={instructors} />}
        />
        <Route
          path="/createCourse"
          element={<CourseCreate createCourse={createCourse} />}
        />
        <Route
          path="/createStudent"
          element={<CreateStudent createStudent={createStudent} />}
        />
        <Route
          path="/payment/:id"
          element={<PaymentScreen courses={courses} />}
        />

        <Route path="/" element={<Home />} />
        <Route
          path="/instructorCourses/:name-:surname/"
          element={<InstructorCourses courses={courses} />}
        />
        <Route
          path="/login"
          element={
            <Login
              students={students}
              setStudents={setStudents}
              setLoggedInStudent={setLoggedInStudent}
              loggedInStudent={loggedInStudent}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
