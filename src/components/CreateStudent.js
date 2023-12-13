import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function CreateStudent({ createStudent }) {
  const [graduationYear, setGraduationYear] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname ] = useState("");
  const [avatar, setAvatar] = useState("");
  const [birthDate, setBirthDate] = useState(Date);
  const [university, setUniversity] = useState("");
  const [department, setDepartment] = useState("");
  const [mail, setMail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    createStudent(
      graduationYear,
      university,
      department,
      name,
      surname,
      avatar,
      birthDate,
      mail
    );

    setShowModal(true);
    setGraduationYear(Date.now);
    setName("");
    setSurname ("");
    setAvatar("");
    setBirthDate(Date.now);
    setUniversity("");
    setDepartment("");
    setMail("");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="container mt-5">
      <h3 className="text-center">Add Student</h3>
      <form>
        <div className="mb-3">
          <label className="form-label">Graduation Year</label>
          <input
            type="date"
            className="form-control"
            value={graduationYear}
            onChange={(e) => setGraduationYear(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Surname</label>
          <input
            type="text"
            className="form-control"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Birth Date</label>
          <input
            className="form-control"
          type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mail</label>
          <input
            typle="email"
            className="form-control"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>

        {/* <div className="mb-3">
          <label className="form-label">Avatar</label>
          <input
            type="text"
            className="form-control"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div> */}
        <div className="mb-3">
          <label className="form-label">University</label>
          <input
            type="text"
            className="form-control"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Department</label>
          <input
            type="text"
            className="form-control"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Yeni Student Ekle
        </button>
      </form>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Student Eklendi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Student başarıyla eklendi!</p>
          <p>
            <strong>Student Adı:</strong> {name}
          </p>
          <p>
            <strong>Department:</strong> {university} {department}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Kapat
          </Button>
          <Button
            variant="primary"
            onClick={() => alert("Navigate to the Student!")}
          >
            Studenta Git
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateStudent;
