import React from "react";
import { useHistory } from "react-router-dom";
import balloons from "../../assets/images/small-balloons.png";
import Balloons from "../../assets/images/Balloons.png";
import Button from "../Button/Button";
import "./Success.css";

export default function Success() {
  const history = useHistory();

  const goToDashboard = () => {
    history.push("./dashboard");
  };

  return (
    <div className="succcess-block">
      <div className="balloons">
        <div className="large-balloons">
          <img src={Balloons} alt="Balloons" />
        </div>
        <div className="small-balloons">
          <img src={balloons} alt="Balloons" />
        </div>
      </div>
      <div>
        <h2>All Done</h2>
        <p>Let's get you set up</p>
      </div>
      <Button
        text="Proceed to Dashboard"
        type="primary"
        style={{
          position: "absolute",
          width: "537px",
          height: "56px",
          top: "483px",
        }}
        onClick={goToDashboard}
      />

      <div className="mobile-view__button" style={{ justifyContent: "center" }}>
        <Button
          text="Proceed to Chats"
          type="mobile"
          style={{
            width: "448px",
            height: "56px",
          }}
          onClick={goToDashboard}
        />
      </div>
    </div>
  );
}
