import React from "react";
import avatar from "../../../assets/images/recipient-avatar.png";
import "./ChatPreview.css";

export default function ChatPreview({ roomsInfo, activeChat }) {
  // console.log(roomInfo);
  return (
    <div
      className="chat-preview"
      style={{
        background:
          activeChat === roomsInfo._id ? "rgba(160, 174, 192, 0.1)" : "",
      }}
    >
      <div>
        <img src={avatar} alt="Avatar" />
      </div>

      <div className="chat-preview-content">
        <div className="top_block-content">
          <h5>{roomsInfo.roomName}</h5>
          <div className="chat-timestamp">
            <p>8:30am</p>
          </div>
        </div>

        <div className="bottom_block-content">
          <p>
            {/* <span>{roomInfo[roomInfo.length - 1]}</span> */}
          </p>
          <div className="bottom_block-icon">4</div>
        </div>
      </div>
    </div>
  );
}
