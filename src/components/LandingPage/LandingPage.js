import React from "react";
import { useHistory } from "react-router-dom";
import unilagLogo from "../../assets/images/lag-logo-lg.png";
import Button from "../Button/Button";
import "./LandingPage.css";

export default function LandingPage() {
  const history = useHistory();

  const onSignUp = () => {
    history.push("/get-started");
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
          <h2>Content goes here</h2>
          <p>
            So doing the Lord's work is a thread that's run through our politics
            since the very beginning.
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
