import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { RoleContext } from "../../Context/RoleContext";
import studentIcon from "../../assets/images/student.png";
import lecturerIcon from "../../assets/images/lecturer.png";
import Button from "../Button/Button";
import arrowLeftIcon from "../../assets/images/arrowLeft.png";
import "./GetStarted.css";

export default function GetStarted() {
  const history = useHistory();
  const context = useContext(RoleContext);

  const [state, setState] = useState({ role: "", active: "" });

  const studentRole = () => {
    setState({ ...state, role: "student", active: "student" });
    context.studentRole("student");
  };
  const lecturerRole = () => {
    setState({ ...state, role: "lecturer", active: "lecturer" });
    context.lecturerRole("lecturer");
  };
  const onRole = () => {
    if (state.role === "") {
      alert("Please selct a role (Student or Lecturer)");
    } else {
      history.push("/signup");
    }
  };

  return (
    <div>
      <div className="header">
        <p>
          Already have an account?
          <Link to="/login" style={{ textDecoration: "none" }}>
            <span style={{ color: "#9A2219" }}> Log in</span>
          </Link>
        </p>
      </div>

      <div className="welcome-block">
        <h2>Let's get started !</h2>
        <p>Sign up as a lecturer or student...</p>

        <div className="role-block">
          <div className="role">
            <div
              className={`role-square ${
                state.role === "lecturer" ? "active" : ""
              }`}
              onClick={lecturerRole}
            >
              <img
                src={lecturerIcon}
                alt="Lecturer icon"
                className="roles-icon"
              />
            </div>
            <p
              onClick={lecturerRole}
              style={{ color: state.active === "lecturer" ? "#9A2219" : "" }}
            >
              Lecturer
            </p>
          </div>
          <div className="role">
            <div
              className={`role-square ${
                state.active === "student" ? "active" : ""
              }`}
              onClick={studentRole}
            >
              <img
                src={studentIcon}
                alt="Student icon"
                className="roles-icon"
              />
            </div>
            <p
              onClick={studentRole}
              style={{ color: state.active === "student" ? "#9A2219" : "" }}
            >
              Student
            </p>
          </div>
        </div>

        <Button
          text="Proceed"
          type="primary"
          style={{
            position: "absolute",
            width: "537px",
            height: "56px",
            top: "515px",
          }}
          onClick={onRole}
        />
      </div>

      <div className="mobile-view__button">
        <div className="previous">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={arrowLeftIcon} alt="Previous" />
          </Link>
        </div>
        <Button
          text="Proceed"
          type="mobile"
          style={{
            width: "248px",
            height: "56px",
          }}
          onClick={onRole}
        />
      </div>
    </div>
  );
}
