import React from "react";
import { NavLink } from "react-router-dom";

function Navi({ loggedInStudent }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        {loggedInStudent ? (
          <>
            <NavLink to="/" className="navbar-brand">
              Home
            </NavLink>
            <NavLink to="/courses" className="navbar-brand">
              Courses
            </NavLink>
            <NavLink to="/students" className="navbar-brand">
              Students
            </NavLink>
            <NavLink to="/instructors" className="navbar-brand">
              Instructors
            </NavLink>
          </>
        ) : (
          <form className="d-flex ms-auto">
            <NavLink to="/login" className="navbar-brand">
              Login
            </NavLink>
          </form>
        )}
      </div>
    </nav>
  );
}

export default Navi;
