import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import arrowLeftIcon from "../.././assets/images/arrowLeft.png";
import Button from "../Button/Button";
import Layout from "../NoAuthLayout/Layout";
import "./SignUp/Steps/UserDetails/UserDetails.css";

export default function UserDetails() {
  const history = useHistory();

  const previousPage = () => {
    history.goBack();
  };
  const [values, setValues] = useState({
    email: "",
  });

  const handleChange = (input) => (e) => {
    setValues({ ...values, [input]: e.target.value });
  };

  return (
    <Layout>
      <div>
        <div className="top-block">
          <button onClick={previousPage}>
            <span>
              <img
                src={arrowLeftIcon}
                alt="Arrow icon"
                className="arrow-icon"
              />
            </span>
            Back
          </button>
        </div>

        <div className="form-block">
          <h2>Recover Password!</h2>
          <p>Provide your email address</p>

          <div className="fields-block">
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                placeholder="okemati@gmail.com"
                defaultValue={values.email}
                onChange={handleChange("email")}
                required
              />
            </div>
          </div>

          <Button
            text="Proceed"
            type="primary"
            style={{
              position: "absolute",
              width: "537px",
              height: "56px",
              top: "555px",
            }}
            // onClick={nextStep}
          />
        </div>
      </div>
    </Layout>
  );
}
