import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";


function Courses({ courses, setCourses }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [editedCourse, setEditedCourse] = useState({
    id: "",
    categoryId: "",
    title: "",
    instructorName: "",
    instructorSurname: "",
    duration: "",
    price: "",
    image: "",
    content: ""
  });

  const handleEdit = (course) => {
    setEditedCourse({
      id: course.id,
      categoryId: course.categoryId,
      title: course.title,
      instructorName: course.instructorName,
      instructorSurname: course.instructorSurname,
      duration: course.duration,
      price: course.price,
      image: course.image,
      content: course.content,
    });
    setShowEdit(true);
  };

  const onUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:3000/courses/${editedCourse.id}`,
        editedCourse
      );

      const updatedCourseList = courses.map((course) =>
        course.id === editedCourse.id ? editedCourse : course
      );

      setCourses(updatedCourseList);
      setShowEdit(false);
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };
  const onDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/courses/${id}`);
      const updatedCourses = courses.filter((course) => course.id !== id);
      setCourses(updatedCourses);
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const sortCoursesByPrice = () => {
    const sortedCourses = [...courses].sort((a, b) => a.price - b.price);
    setCourses(sortedCourses);
  };

  const filterCoursesByCategory = () => {
    if (!selectedCategory) {
      return courses;
    }
    const lowerCaseCategory = selectedCategory.toLowerCase();
    return courses.filter(
      (course) => course.categoryId.toLowerCase() === lowerCaseCategory
    );
  };

  return (
    <div className="container mt-4">
      {showEdit ? (
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2>Edit Course</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="editTitle" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editTitle"
                  value={editedCourse.title}
                  onChange={(e) =>
                    setEditedCourse({ ...editedCourse, title: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editDuration" className="form-label">
                  Duration
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editDuration"
                  value={editedCourse.duration}
                  onChange={(e) =>
                    setEditedCourse({
                      ...editedCourse,
                      duration: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editImage" className="form-label">
                  Image
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editImage"
                  value={editedCourse.image}
                  onChange={(e) =>
                    setEditedCourse({
                      ...editedCourse,
                      image: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editPrice" className="form-label">
                  Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editPrice"
                  value={editedCourse.price}
                  onChange={(e) =>
                    setEditedCourse({
                      ...editedCourse,
                      price: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editContent" className="form-label">
                  Content
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editContent"
                  value={editedCourse.content}
                  onChange={(e) =>
                    setEditedCourse({
                      ...editedCourse,
                      content: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editInsName" className="form-label">
                  Instructor Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editInsName"
                  value={editedCourse.instructorName}
                  onChange={(e) =>
                    setEditedCourse({
                      ...editedCourse,
                      instructorName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editInsSurname" className="form-label">
                  Instructor Surname
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editInsSurname"
                  value={editedCourse.instructorSurname}
                  onChange={(e) =>
                    setEditedCourse({
                      ...editedCourse,
                      instructorSurname: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editCategoryId" className="form-label">
                  Category
                </label>
                <select
                  className="form-select"
                  id="editCategoryId"
                  value={editedCourse.categoryId}
                  onChange={(e) =>
                    setEditedCourse({
                      ...editedCourse,
                      categoryId: e.target.value,
                    })
                  }
                >
                  <option value="">Select a category</option>
                  <option value="Backend">Backend</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Communication">Communication</option>
                </select>
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
        
          <div className="text-end mb-3">
            <button className="btn btn-dark" onClick={sortCoursesByPrice}>
              Sort by Price
            </button>
          </div>
          <div className="text-end mb-3">
            <select
              className="form-select"
              id="categorySelect"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              <option value="Backend">Backend</option>
              <option value="Frontend">Frontend</option>
              <option value="Communication">Communication</option>
            </select>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
            {filterCoursesByCategory().map((course) => (
              <div key={course.id} className="col mb-4">
                <div className="card">
                  <img
                    src={course.image}
                    className="card-img-top"
                    alt={course.title}
                    style={{width:"400px", height:"400px"}}
                  />
                  <div className="card-body">
                    <h2 className="card-title">{course.title}</h2>
                    <table className="table table-striped">
                      <tbody>
                        <tr>
                          <th scope="row">Instructor Name</th>
                          <td>{course.instructorName}</td>
                        </tr>
                        <tr>
                          <th scope="row">Instructor Surname</th>
                          <td>{course.instructorSurname}</td>
                        </tr>
                        <tr>
                          <th scope="row">Duration</th>
                          <td>{course.duration} Weeks</td>
                        </tr>
                        <tr>
                          <th scope="row">Price</th>
                          <td>{course.price}TL</td>
                        </tr>
                        <tr>
                          <th scope="row">Content</th>
                          <td>{course.content}</td>
                        </tr>
                        <tr>
                          <th scope="row">Category</th>
                          <td>{course.categoryId}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <button
                    className="btn btn-danger m-2"
                    onClick={(id) => onDelete(course.id)} 
                  >
                    Delete Course
                  </button>
                  <button
                    className="btn btn-warning m-2"
                    onClick={() => handleEdit(course)}
                  >
                    Edit Course
                  </button>
                  <NavLink
                    to={`/payment/${course.id}`}
                    className="btn btn-secondary m-2"
                  >
                    Apply Course
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 text-center">
            <NavLink to="/createCourse" className="navbar-brand">
              <button className="btn btn-primary m-3">Add New Course</button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default Courses;