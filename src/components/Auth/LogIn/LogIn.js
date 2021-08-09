import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import arrowLeftIcon from "../../../assets/images/arrowLeft.png";
import Button from "../../Button/Button";
import Layout from "../../NoAuthLayout/Layout";
import "../SignUp/Steps/UserDetails/UserDetails.css";
import "./LogIn.css";

export default function UserDetails() {
  const history = useHistory();

  const previousPage = () => {
    history.goBack();
  };
  const [values, setValues] = useState({
    email: "",
    password: "",
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
          <div>
            <p>
              Don't have an account?
              <Link to="/" style={{ textDecoration: "none" }}>
                <span style={{ color: "#9A2219" }}> Sign Up</span>
              </Link>
            </p>
          </div>
        </div>

        <div className="form-block">
          <h2>Welcome Back!</h2>
          <p>Blah blah bah </p>

          <div className="fields-block">
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                placeholder="John Doe"
                defaultValue={values.email}
                onChange={handleChange("email")}
                required
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                placeholder="okemati@gmail.com"
                defaultValue={values.password}
                onChange={handleChange("password")}
                required
              />
            </div>
            <p

>
              <Link
                to="/recover-password"
                style={{
                  textDecoration: "none",
                }}
                className="link"
              >
                Forgot Password?
              </Link>
            </p>
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
