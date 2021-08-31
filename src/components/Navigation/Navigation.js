import React from "react";
import { Link } from "react-router-dom";
import conversation from "../../assets/images/conversation.png";
import cog from "../../assets/images/cog.png";
import question from "../../assets/images/question-circle.png";
import logout from "../../assets/images/logout.png";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div>
      <div className="nav">
        <Link
          className="nav-item"
          to="/dashboard"
          style={{
            textDecoration: "none",
            // backgroundColor: "#9a2219",
          }}
        >
          <img
            src={conversation}
            alt="Conversation"
            className="nav-icon-convo"
          />
          <p className="conversation">Conversations</p>
          <div className="message-count">6</div>
        </Link>
      </div>

      <div className="nav">
        <h5>SUPPORT</h5>
        <Link
          to="/help"
          className="nav-item"
          style={{
            textDecoration: "none",
          }}
        >
          <img src={question} alt="Question" className="nav-icon-question" />
          <p className="need-help">Need Help?</p>
        </Link>
      </div>

      <div className="nav">
        <h5>SETTINGS</h5>
        <Link
          to="/account"
          className="nav-item"
          style={{
            textDecoration: "none",
            marginBottom: "26px",
          }}
        >
          <img src={cog} alt="Account" className="nav-icon-cog" />
          <p>Account</p>
        </Link>
        <div className="nav-item">
          <img src={logout} alt="Logout" className="nav-icon-logout" />
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <p>Log Out</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
