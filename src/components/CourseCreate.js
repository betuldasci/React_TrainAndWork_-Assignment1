import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function CourseCreate({ createCourse }) {

  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState(0);
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const [instructorSurname, setInstructorSurname] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [addedCourse, setAddedCourse] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // const addedCourse = {
 
    //   categoryId,
    //   title,
    //   instructorName,
    //   instructorSurname, 
    //   duration, 
    //   price, 
    //   image, 
    //   content 
    // };

    createCourse(
      categoryId,
      title,
      instructorName,
      instructorSurname,
      duration,
      price,
      image,
      content
    );

    // setAddedCourse(addedCourse);
    setShowModal(true);

    setTitle("");
    setDuration(0);
    setPrice(0);
    setImage("");
    setContent("");
    setInstructorName("");
    setInstructorSurname("");
    setCategoryId("");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="container mt-5">
        <h3 className="text-center">Add Course</h3>
       <form>
        
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Duration</label>
            <input
              type="number"
              className="form-control"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Content</label>
            <textarea
              className="form-control"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image</label>
            <input
              type="text"
              className="form-control"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Instructor Name</label>
            <input
              type="text"
              className="form-control"
              value={instructorName}
              onChange={(e) => setInstructorName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Instructor Surname</label>
            <input
              type="text"
              className="form-control"
              value={instructorSurname}
              onChange={(e) => setInstructorSurname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="form-select"
            >
              <option value="">Select a category</option>
              <option value="Backend">Backend</option>
              <option value="Frontend">Frontend</option>
              <option value="Communication">Communication</option>
            </select>
          </div>

          <button className="btn btn-primary" onClick={handleSubmit}>
            Yeni Kurs Ekle
          </button>
        </form>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Kurs Eklendi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Kurs başarıyla eklendi!</p>
          {addedCourse && (
            <>
              <p>
                <strong>Kurs Adı:</strong> {addedCourse.title}
              </p>
              <p>
                <strong>Eğitmen:</strong> {addedCourse.instructorName}{" "}
                {addedCourse.instructorSurname}
              </p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Kapat
          </Button>
          <Button
            variant="primary"
            onClick={() => alert("Navigate to the course!")}
          >
            Kursa Git
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CourseCreate;
