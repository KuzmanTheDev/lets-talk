import React from "react";
import balloons from "../../assets/images/Balloons.png";
import Button from "../Button/Button";
import "./Success.css";

export default function Success() {
  return (
    <div className="succcess-block">
      <div className="balloons">
        <img src={balloons} alt="Balloons" />
      </div>
      <div >
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
          top: "383px",
        }}
        // onClick={nextStep}
      />
    </div>
  );
}
