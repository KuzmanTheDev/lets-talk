import React from "react";
import arrowLeftIcon from "../../../../../assets/images/arrowLeft.png";
import mailbox from "../../../../../assets/images/mailbox.png";
import "./EmailConfirmation.css";

export default function EmailConfirmation({ nextStep, prevStep, values }) {
  return (
    <div>
      <div className="top-block">
        <button onClick={prevStep}>
          <span>
            <img src={arrowLeftIcon} alt="Arrow" className="arrow-icon" />
          </span>
          Back
        </button>
      </div>
      <div className="confirmation-block">
        <img
          src={mailbox}
          alt="Mailbox"
          className="mailbox-icon"
          style={{ width: "121px", marginBottom: "50px" }}
        />
        <h2>Email Confirmation</h2>
        <p>
          Click the link sent to the email <strong>{values.email}</strong> email
        </p>
      </div>
    </div>
  );
}
