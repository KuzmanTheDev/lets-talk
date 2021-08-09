import React from "react";
import conversation from "../../assets/images/conversation.png";
import cog from "../../assets/images/cog.png";
import question from "../../assets/images/question-circle.png";
import logout from "../../assets/images/logout.png";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div>
      <div className="nav">
        <div className="nav-item" style={{ backgroundColor: "#9a2219" }}>
          <img
            src={conversation}
            alt="Conversation"
            className="nav-icon-convo"
          />
          <p className="conversation">Conversations</p>
          <div className="message-count">6</div>
        </div>
      </div>

      <div className="nav">
        <h5>SUPPORT</h5>
        <div className="nav-item">
          <img src={question} alt="Question" className="nav-icon-question" />
          <p className="need-help">Need Help?</p>
        </div>
      </div>

      <div className="nav">
        <h5>SETTINGS</h5>
        <div className="nav-item" style={{ marginBottom: "26px" }}>
          <img src={cog} alt="Account" className="nav-icon-cog" />
          <p>Account</p>
        </div>
        <div className="nav-item">
          <img src={logout} alt="Logout" className="nav-icon-logout" />
          <p>Log Out</p>
        </div>
      </div>
    </div>
  );
}
