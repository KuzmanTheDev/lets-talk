import React from "react";
import avatar from "../../../../assets/images/recipient-avatar.png";
import "./ChatPreview.css";

export default function ChatPreview() {
  return (
    <div className="chat-preview">
      <div>
        <img src={avatar} alt="Avatar" />
      </div>
      <div className="chat-content">
        <h5>Okemati Lanre</h5>
        <p>
          Hello Jakub, We are seeking a Product Designer to join our team in...
        </p>
      </div>
      <div className="chat-timestamp">
        <p>8:30am</p>
      </div>
    </div>
  );
}
