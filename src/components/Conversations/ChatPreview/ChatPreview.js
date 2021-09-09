import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../../assets/images/recipient-avatar.png";
import "./ChatPreview.css";

export default function ChatPreview({ contact }) {
  return (
    <Link
      style={{ textDecoration: "none" }}
      // className="sidebar-contact"
      to={`/chat/${contact.id}`}
      // onClick={() => setUserAsUnread(contact.id)}
    >
      <div className="chat-preview">
        <div>
          <img src={avatar} alt="Avatar" />
        </div>

        <div className="chat-preview-content">
          <div className="top_block-content">
            <h5>Okemati Lanre</h5>
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
    </Link>
  );
}
