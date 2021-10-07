import React from "react";
import avatar from "../../../assets/images/recipient-avatar.png";
import "./ChatPreview.css";

export default function ChatPreview({ roomInfo, activeChat }) {
  return (
    <div
      className="chat-preview"
      style={{
        background: activeChat === roomInfo._id ? "rgb(33 35 36 / 10%)" : "",
      }}
    >
      <div>
        <img src={avatar} alt="Avatar" />
      </div>

      <div className="chat-preview-content">
        <div className="top_block-content">
          <h5>{roomInfo.roomName}</h5>
          <div className="chat-timestamp">
            <p>8:30am</p>
          </div>
        </div>

        <div className="bottom_block-content">
          <p>
            <span>
              Hello Jakub, We are seeking a Product Designer to blah blah blah
              blah blah blah blah blah blah
            </span>
          </p>
          <div className="bottom_block-icon">4</div>
        </div>
      </div>
    </div>
  );
}
