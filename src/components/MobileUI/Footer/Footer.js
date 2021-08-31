import React from "react";
import ChatIcon from "../../../assets/images/chat.js";
import CogIcon from "../../../assets/images/cog.js";
import UserIcon from "../../../assets/images/user.js";
import "./Footer.css";

export default function Footer({ active, convo, profile, settings }) {
  const convoScreen = () => {
    convo();
  };
  const profileScreen = () => {
    profile();
  };
  const settingsScreen = () => {
    settings();
  };

  return (
    <div className="mobile-footer">
      <div
        onClick={profileScreen}
        className={`footer__nav-icons ${
          active === "profile" ? "nav-active" : ""
        }`}
      >
        <UserIcon isActive={active} />
        {/* <img src={user} alt="user" style={{ width: "18px", height: "23px" }} /> */}
      </div>

      <div
        onClick={convoScreen}
        className={`footer__nav-icons ${
          active === "convo" ? "nav-active" : ""
        }`}
        style={{ paddingTop: "9px" }}
      >
        <ChatIcon isActive={active} />
        {/* <img
          src={chat}
          alt="conversation"
          style={{ width: "21px", height: "23px" }}
        /> */}
      </div>

      <div
        onClick={settingsScreen}
        className={`footer__nav-icons ${
          active === "settings" ? "nav-active" : ""
        }`}
      >
        <CogIcon isActive={active} />
        {/* <img
          src={cog}
          alt="settings"
          style={{ width: "18px", height: "21px" }}
        /> */}
      </div>
    </div>
  );
}
