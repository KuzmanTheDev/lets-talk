import React from "react";
import Button from "../Button/Button";

export default function ImageUpload() {
  return (
    <div>
      <div className="top-block"></div>

      <div className="form-block">
        <h2>Upload Picture</h2>
        <p>Let's get you set up</p>

        <div className="fields-block">
          <div className="field">Drag and Drop Box</div>
        </div>

        <Button
          text="Next"
          type="primary"
          style={{
            position: "absolute",
            width: "537px",
            height: "56px",
            top: "494px",
          }}
          // onClick={nextStep}
        />
        <div>
          <p>Skip</p>
        </div>
      </div>
    </div>
  );
}
