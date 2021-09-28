import React from "react";
import { NavLink } from "react-router-dom";
import ChatIcon from "../../../assets/images/chat.js";
import CogIcon from "../../../assets/images/cog.js";
import UserIcon from "../../../assets/images/user.js";
import "./Footer.css";

export default function Footer() {
  // console.log(window.location.pathname === "/chat");
  return (
    <div className="mobile-footer">
      <NavLink to="/account" className="footer__nav-icons">
        <UserIcon isActive={window.location.pathname === "/account"} />
      </NavLink>

      <NavLink
        to="/chat"
        className="footer__nav-icons"
        style={{ paddingTop: "9px" }}
      >
        <ChatIcon isActive={window.location.pathname === "/chat"} />
      </NavLink>

      <NavLink to="/help" className="footer__nav-icons">
        <CogIcon isActive={window.location.pathname === "/help"} />
      </NavLink>
    </div>
  );
}
