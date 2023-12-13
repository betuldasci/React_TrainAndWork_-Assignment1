import React from 'react'

function Course({courses}) {

  return (
    <div key={courses.id}>
      <div className="col mb-4">
        <div className="card">
          <img
            src={courses.image}
            className="card-img-top"
            alt={courses.title}
          />
          <div className="card-body">
            <h2 className="card-title">{courses.title}</h2>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th scope="row">Instructor Name</th>
                  <td>{courses.instructorName}</td>
                </tr>
                <tr>
                  <th scope="row">Instructor Surname</th>
                  <td>{courses.instructorSurname}</td>
                </tr>
                <tr>
                  <th scope="row">Duration</th>
                  <td>{courses.duration} Weeks</td>
                </tr>
                <tr>
                  <th scope="row">Price</th>
                  <td>{courses.price}TL</td>
                </tr>
                <tr>
                  <th scope="row">Content</th>
                  <td>{courses.content}</td>
                </tr>
                <tr>
                  <th scope="row">Category</th>
                  <td>{courses.categoryId}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;