import React from "react";
// import { Link } from "react-router-dom";
import arrowLeftIcon from "../../../../assets/images/arrowLeft.png";
import Button from "../../../Button/Button";
import "./UserDetails/UserDetails.css";

export default function UserDetails({ values, nextStep, prevStep, onChange }) {
  //   const history = useHistory();

  return (
    <div>
      <div className="top-block">
        <button onClick={prevStep}>
          <span>
            <img src={arrowLeftIcon} alt="Arrow icon" className="arrow-icon" />
          </span>
          Back
        </button>
      </div>

      <div className="form-block">
        <h2>Set a Password</h2>
        <p>Set a password that can be used to access your account</p>

        <div className="fields-block">
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              placeholder="******************"
              defaultValue={values.password}
              onChange={onChange("password")}
              required
            />
          </div>
          <div className="field">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="******************"
              defaultValue={values.confirmPassword}
              onChange={onChange("confirmPassword")}
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
            top: "535px",
          }}
          onClick={nextStep}
        />
      </div>
    </div>
  );
}
