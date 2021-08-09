import React from "react";
import { useHistory, Link } from "react-router-dom";
import Button from "../../../../Button/Button";
import arrowLeftIcon from "../../../../../assets/images/arrowLeft.png";
import "./UserDetails.css";

export default function UserDetails({ values, nextStep, onChange }) {
  const history = useHistory();

  const previousPage = () => {
    history.goBack();
  };

  // const handleChange = () => {
  //   onChange();
  //   // console.log(values);
  // };

  return (
    <div>
      <div className="top-block">
        <button onClick={previousPage}>
          <span>
            <img src={arrowLeftIcon} alt="Arrow icon" className="arrow-icon" />
            {/* <i className="fas fa-arrow-left"></i> */}
          </span>
          Back
        </button>
        <div>
          <p>
            Already have an account?
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span style={{ color: "#9A2219" }}> Log in</span>
            </Link>
          </p>
        </div>
      </div>

      <div className="form-block">
        <h2>Let's get started</h2>
        <p>Sign Up by entering the information below</p>

        <div className="fields-block">
          <div className="field">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              defaultValue={values.fullName}
              onChange={onChange("fullName")}
              required
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              placeholder="okemati@gmail.com"
              defaultValue={values.email}
              onChange={onChange("email")}
              required
            />
          </div>
          <div className="field">
            <label>Date of Birth</label>
            <input
              // type="text"
              // placeholder="MM/DD/YYYY"
              type="date"
              defaultValue={values.dateOfBirth}
              onChange={onChange("dateOfBirth")}
              required
            />
          </div>
        </div>

        {/* {values.email} */}
        <Button
          text="Proceed"
          type="primary"
          style={{
            position: "absolute",
            width: "537px",
            height: "56px",
            top: "670px",
          }}
          onClick={nextStep}
        />
      </div>
    </div>
  );
}
