import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../Button/Button";
import arrowLeftIcon from "../../../../assets/images/arrowLeft.png";
import "./UserDetails/UserDetails.css";

export default function UserDetails({ values, nextStep, prevStep, onChange }) {
  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div>
      <div className="top-block">
        <button onClick={prevStep}>
          <span>
            <img src={arrowLeftIcon} alt="Arrow icon" className="arrow-icon" />
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
        <h2>Knowing our {capitalize(localStorage.getItem("role"))}s Better</h2>
        <p>Sign Up by entering the information below</p>
        <div className="fields-block">
          <div className="field">
            <label>
              {localStorage.getItem("role") === "student"
                ? "Matric Number"
                : "ID Number"}
            </label>
            <input
              type="text"
              placeholder="160401107"
              defaultValue={values.matricOrIDNumber}
              onChange={onChange("matricOrIDNumber")}
              required
            />
          </div>
          <div className="field">
            <label>Faculty</label>
            <select
              defaultValue={values.faculty}
              onChange={onChange("faculty")}
              required
            >
              <option value="default" disabled>
                Choose Faculty...
              </option>
              <option value="Engineering">Engineering</option>
              <option value="Science">Science</option>
              <option value="Accounting">Accounting</option>
              <option value="Art">Art</option>
            </select>
          </div>
          <div className="field">
            <label>Department</label>
            <select
              defaultValue={values.department}
              onChange={onChange("department")}
              required
            >
              <option value="default" disabled>
                Choose Department...
              </option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Marine Science">Marine Science</option>
              <option value="Accounting">Accounting</option>
              <option value="Visual Art">Visual Art</option>
            </select>
          </div>
          <div className="terms-block">
            <input type="checkbox" required />
            <p>
              By clicking this, you agree to the{" "}
              <Link to="/privacypolicy" style={{ textDecoration: "none" }}>
                <span style={{ color: "#9A2219" }}> Terms & Conditions</span>
              </Link>{" "}
              and{" "}
              <Link to="/privacypolicy" style={{ textDecoration: "none" }}>
                <span style={{ color: "#9A2219" }}> Privacy Policy.</span>
              </Link>
            </p>
          </div>
        </div>

        {/* {values.email} */}
        <Button
          text="Proceed"
          type="primary"
          style={{
            position: "absolute",
            width: "520px",
            height: "56px",
            top: "652px",
          }}
          disabled={
            (values.faculty.trim() &&
              values.department.trim() &&
              values.matricOrIDNumber.trim()) === ""
              ? true
              : false
          }
          onClick={nextStep}
        />
      </div>

      <div className="mobile-view__button">
        <div className="previous" onClick={prevStep}>
          <img src={arrowLeftIcon} alt="Previous" />
        </div>
        <Button
          text="Proceed"
          type="mobile"
          style={{
            width: "248px",
            height: "56px",
          }}
          disabled={
            (values.faculty.trim() &&
              values.department.trim() &&
              values.matricOrIDNumber.trim()) === ""
              ? true
              : false
          }
          onClick={nextStep}
        />
      </div>
    </div>
  );
}
