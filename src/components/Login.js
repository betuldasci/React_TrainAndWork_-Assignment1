import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ students, setStudents, setLoggedInStudent, loggedInStudent }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = () => {
    const student = students.find((s) => s.mail === email);

    if (student) {
      setLoggedInStudent(student);
      navigate("/courses");
    } else {
      setError("Invalid email. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Login</h2>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={login}>
            Login
          </button>
          {error && <p className="text-danger mt-2">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Login;
