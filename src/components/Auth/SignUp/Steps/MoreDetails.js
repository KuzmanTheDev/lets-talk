import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../../Button/Button";
import { RoleContext } from "../../../../Context/RoleContext";
import arrowLeftIcon from "../../../../assets/images/arrowLeft.png";
import "./UserDetails/UserDetails.css";

export default function UserDetails({ values, nextStep, prevStep, onChange }) {
  const context = useContext(RoleContext);

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
        <h2>Knowing our {capitalize(context.role)}s Better</h2>
        <p>Sign Up by entering the information below</p>

        <div className="fields-block">
          <div className="field">
            <label>
              {context.role === "student" ? "Matric Number" : "ID Number"}
            </label>
            <input
              type="text"
              placeholder="160401107"
              defaultValue={values.matricOOrIDNumber}
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
              <option disabled hidden defaultValue>
                Choose Faculty
              </option>
              <option defaultValue="Engineering">Engineering</option>
              <option defaultValue="Science">Science</option>
              <option defaultValue="Accounting">Accounting</option>
              <option defaultValue="Art">Art</option>
            </select>
            {/* <input
              type="text"
              placeholder="okemati@gmail.com"
              defaultValue={values.faculty}
              onChange={onChange("faculty")}
              required
            /> */}
          </div>
          <div className="field">
            <label>Department</label>
            <input
              type="text"
              placeholder="Civil Engineering"
              defaultValue={values.department}
              onChange={onChange("department")}
              required
            />
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
            width: "537px",
            height: "56px",
            top: "670px",
          }}
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
          onClick={nextStep}
        />
      </div>
    </div>
  );
}
