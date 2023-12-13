import { useState } from "react";
import { NavLink } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import InstructorCourses from "./InstructorCourses";

function Instructors({ instructors, courses }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [title, setTitle] = useState("");
  const [mail, setMail] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [image, setImage] = useState("");
console.log(courses);

const handleShowModal = (
  instructorName,
  instructorSurname,
  title,
  mail,
  portfolio,
  image
) => {
  setName(instructorName);
  setSurname(instructorSurname);
  setTitle(title);
  setMail(mail);
  setPortfolio(portfolio);
  setImage(image);

  setSelectedInstructor({ name: instructorName, surname: instructorSurname });

  setShowModal(true);
};

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
        {instructors.map((instructor) => (
          <div key={instructor.id} className="col mb-4">
            <div className="card">
              <img
                src={instructor.image}
                className="card-img-top img-fluid"
                alt={instructor.name}
              />
              <div className="card-body">
                <h2 className="card-title">
                  {instructor.name} {instructor.surname}
                </h2>
                <p className="card-text">{instructor.title}</p>
                <p className="card-text">
                  <strong>Mail:</strong> {instructor.mail}
                </p>
                <div className="d-flex justify-content-between mt-2">
                  {/* <NavLink
                    to={`/instructorCourses/${instructor.name}-${instructor.surname}`}
                    className="btn btn-outline-primary"
                    onClick={() =>
                      setSelectedInstructor({
                        name: instructor.name,
                        surname: instructor.surname,
                      })
                    }
                  >
                    Kursları Görüntüle
                  </NavLink> */}
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() =>
                      handleShowModal(
                        instructor.name,
                        instructor.surname,
                        instructor.title,
                        instructor.mail,
                        instructor.portfolio,
                        instructor.image
                      )
                    }
                  >
                    Portföyü Görüntüle
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {name} {surname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h4>İsim Soyisim:</h4>
            <p>
              {name} {surname}
            </p>
          </div>
          <div>
            <h4>Ünvanı:</h4>
            <p>{title}</p>
          </div>
          <div>
            <h4>Portföy:</h4>
            <p>{portfolio}</p>
          </div>
          <div>
            <h4>İletişim Bilgileri:</h4>
            <p>Mail: {mail}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* {selectedInstructor && (
        <InstructorCourses
          instructorName={selectedInstructor.name}
          instructorSurname={selectedInstructor.surname}
          courses={courses}
        />
      )} */}
    </div>
  );
}

export default Instructors;
