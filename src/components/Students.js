import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Students({ students, setStudents }) {
  const [showEdit, setShowEdit] = useState(false);
  const [editedStudent, setEditedStudent] = useState({
    id: "",
    avatar: "",
    name: "",
    surname: "",
    birthDate: "",
    university: "",
    department: "",
    graduationYear: "",
    mail: ""
  });

  const handleEdit = (student) => {
    setEditedStudent({
      id: student.id,
      avatar: student.avatar,
      name: student.name,
      surname: student.surname,
      birthDate: student.birthDate,
      university: student.university,
      department: student.department,
      graduationYear: student.graduationYear,
      mail: student.mail,
    });
    setShowEdit(true); 
  };

  const onUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:3000/students/${editedStudent.id}`,
        editedStudent
      );

      const updatedstudentList = students.map((student) =>
        student.id === editedStudent.id ? editedStudent : student
      );

      setStudents(updatedstudentList);
      setShowEdit(false);
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };
  const onDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/students/${id}`);
      const updatedstudents = students.filter((student) => student.id !== id);
      setStudents(updatedstudents);
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="container mt-4">
      {showEdit ? (
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2>Edit student</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="editName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editName"
                  value={editedStudent.name}
                  onChange={(e) =>
                    setEditedStudent({
                      ...editedStudent,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editSurname" className="form-label">
                  Surname
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editSurname"
                  value={editedStudent.surname}
                  onChange={(e) =>
                    setEditedStudent({
                      ...editedStudent,
                      surname: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editAvatar" className="form-label">
                  Avatar
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editAvatar"
                  value={editedStudent.avatar}
                  onChange={(e) =>
                    setEditedStudent({
                      ...editedStudent,
                      avatar: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editBirthDate" className="form-label">
                  Birth Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="editBirthDate"
                  value={editedStudent.birthDate}
                  onChange={(e) =>
                    setEditedStudent({
                      ...editedStudent,
                      birthDate: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editUni" className="form-label">
                  University
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editUni"
                  value={editedStudent.university}
                  onChange={(e) =>
                    setEditedStudent({
                      ...editedStudent,
                      university: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editDepartment" className="form-label">
                  Department
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editDepartment"
                  value={editedStudent.department}
                  onChange={(e) =>
                    setEditedStudent({
                      ...editedStudent,
                      department: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editGraduation" className="form-label">
                  Graduation Year
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="editGraduation"
                  value={editedStudent.graduationYear}
                  onChange={(e) =>
                    setEditedStudent({
                      ...editedStudent,
                      graduationYear: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editMail" className="form-label">
                  Mail
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="editGraduation"
                  value={editedStudent.mail}
                  onChange={(e) =>
                    setEditedStudent({
                      ...editedStudent,
                      mail: e.target.value,
                    })
                  }
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onUpdate}
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
            {students.map((student) => (
              <div key={student.id} className="col mb-4">
                <div className="card">
                  <img
                    src={student.avatar}
                    className="card-img-top"
                    alt={student.name}
                  />
                  <div className="card-body">
                    <h2 className="card-title">{student.name}</h2>
                    <table className="table table-striped">
                      <tbody>
                        <tr>
                          <th scope="row">Student Name</th>
                          <td>{student.name}</td>
                        </tr>
                        <tr>
                          <th scope="row">Student Surname</th>
                          <td>{student.surname}</td>
                        </tr>
                        <tr>
                          <th scope="row">Birth Date</th>
                          <td>{student.birthDate}</td>
                        </tr>
                        <tr>
                          <th scope="row">University</th>
                          <td>{student.university}</td>
                        </tr>
                        <tr>
                          <th scope="row">Department</th>
                          <td>{student.department}</td>
                        </tr>
                        <tr>
                          <th scope="row">Graduation Year</th>
                          <td>{student.graduationYear}</td>
                        </tr>
                        <tr>
                          <th scope="row">Mail</th>
                          <td>{student.mail}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <button
                    className="btn btn-danger m-2"
                    onClick={(id) => onDelete(student.id)}
                  >
                    Delete student
                  </button>
                  <button
                    className="btn btn-warning m-2"
                    onClick={() => handleEdit(student)}
                  >
                    Edit student
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-3 text-center">
              <NavLink to="/createStudent" className="navbar-brand">
                <button className="btn btn-primary m-3">Add New student</button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Students;
