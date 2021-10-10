import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import conversation from "../../assets/images/conversation.png";
import cog from "../../assets/images/cog.png";
import question from "../../assets/images/question-circle.png";
import logoutIcon from "../../assets/images/logout.png";
import "./Navigation.css";

export default function Navigation() {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <div className="nav">
        <NavLink className="nav-item" to="/chat">
          <img
            src={conversation}
            alt="Conversation"
            className="nav-icon-convo"
          />
          <p className="conversation">Conversations</p>
        </NavLink>
      </div>

      <div className="nav">
        <h5>SUPPORT</h5>
        <NavLink to="/help" className="nav-item">
          <img src={question} alt="Question" className="nav-icon-question" />
          <p className="need-help">Need Help?</p>
        </NavLink>
      </div>

      <div className="nav">
        <h5>SETTINGS</h5>
        <NavLink
          to="/account"
          className="nav-item"
          style={{ marginBottom: "20px" }}
        >
          <img src={cog} alt="Account" className="nav-icon-cog" />
          <p>Account</p>
        </NavLink>
        <div className="nav-item" onClick={logout}>
          <img src={logoutIcon} alt="Logout" className="nav-icon-logout" />
          <p>Log Out</p>
        </div>
      </div>
    </div>
  );
}
