import React from "react";
import { useHistory } from "react-router-dom";
import unilagLogo from "../../assets/images/lag-logo-lg.png";
import Button from "../Button/Button";
import "./LandingPage.css";

export default function LandingPage() {
  const history = useHistory();

  const onSignUp = () => {
    history.push("/signup");
  };
  const onLogin = () => {
    history.push("/login");
  };
  return (
    <section className="mobile-landing">
      <div className="mobile-content">
        <div className="logo">
          <img src={unilagLogo} alt="Unilag Logo" className="imgLogo" />
        </div>

        <div className="content-block">
          <h2>UNILAG Let's Talk</h2>
          <p>
            The web communication platform for students and staff of the
            University of Lagos.
          </p>
          <div className="button-block">
            <Button
              text="Sign Up"
              type="mobile"
              style={{
                width: "40%",
                height: "56px",
                top: "515px",
                marginRight: "30px",
              }}
              onClick={onSignUp}
            />
            <Button
              text="Login"
              type="mobile"
              style={{
                width: "40%",
                height: "56px",
                top: "515px",
                color: "#9A2219",
                background: "white",
              }}
              onClick={onLogin}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
