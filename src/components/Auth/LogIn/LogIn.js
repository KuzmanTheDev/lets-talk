import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext";
import { useMutation } from "react-query";
import Button from "../../Button/Button";
import Layout from "../../NoAuthLayout/Layout";
import arrowLeftIcon from "../../../assets/images/arrowLeft.png";
import * as api from "../../../utilities/API";
import { isValidEmail, isRequired } from "../../../utilities/InputValidators";

export default function UserDetails() {
  const context = useContext(AuthContext);
  const [values, setValues] = useState({
    email: "150408002@live.unilag.edu.ng",
    password: "michaelUti",
  });
  const [errors, setErrors] = useState({
    email: [],
    password: [],
  });

  const history = useHistory();
  const previousPage = () => {
    history.goBack();
  };

  const handleChange = (input) => (e) => {
    setValues({ ...values, [input]: e.target.value });
  };

  const { mutate, isLoading } = useMutation(api.login, {
    onSuccess: ({ data: userdata }) => {
      history.push("/");
      context.login(userdata);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(values);
  };
  
  function validate(validations) {
    setErrors(
      validations
        .map((errorsFor) => errorsFor(values.email))
        .filter((errorMsg) => errorMsg.length > 0)
    );
  }

  return (
    <Layout>
      <form>
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
                placeholder="150408002@live.unilag.edu.ng"
                defaultValue={values.email}
                onChange={handleChange("email")}
                onBlur={() => validate([isRequired, isValidEmail])}
                required
              />
              {errors.length > 0 ? (
                <small className="has-error">{errors.join(", ")}</small>
              ) : null}
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                placeholder="*************"
                defaultValue={values.password}
                onChange={handleChange("password")}
                required
              />
            </div>

            <p>
              <Link
                to="/recover-password"
                style={{
                  textDecoration: "none",
                  color: "#9a2219",
                }}
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
            loading={isLoading}
            onClick={handleSubmit}
          />
        </div>

        <div className="mobile-view__button">
          <div className="previous" onClick={previousPage}>
            <img src={arrowLeftIcon} alt="Previous" />
          </div>
          <Button
            text="Proceed"
            type="mobile"
            style={{
              width: "248px",
              height: "56px",
            }}
            // onClick={nextStep}
          />
        </div>
      </form>
    </Layout>
  );
}
