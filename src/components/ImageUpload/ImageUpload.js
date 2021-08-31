import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../Button/Button";
import arrowLeftIcon from "../../assets/images/arrowLeft.png";

export default function ImageUpload() {
  const history = useHistory();

  const previousPage = () => {
    history.goBack();
  };
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
      <div className="mobile-view__button">
        <div className="previous" onClick={previousPage}>
          <img src={arrowLeftIcon} alt="Previous" />
        </div>
        <Button
          text="Next"
          type="mobile"
          style={{
            width: "248px",
            height: "56px",
          }}
          // onClick={nextStep}
        />
      </div>
    </div>
  );
}
