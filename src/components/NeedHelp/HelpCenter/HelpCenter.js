import React from "react";
import Button from "../../Button/Button";
import "./HelpCenter.css";

export default function HelpCenter() {
  return (
    <div className="help-center">
      <div className="help-block">
        <h2>Send us a Message</h2>
        <p>Something something blah blah</p>
        <form action="">
          <textarea
            name="help-message"
            id=""
            cols="30"
            rows="10"
            required
            placeholder="Tell us your concerns"
          ></textarea>
        </form>

        <div className="help-center__button">
          <Button
            text="SEND"
            type="primary"
            style={{
              fontSize: "16px",
              width: "79px",
              height: "35px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
