import React from "react";
import unilagLogo from "../../assets/images/lag-logo-lg.png";
import avatar from "../../assets/images/avatar.png";
import Navigation from "../Navigation/Navigation";
import "./AuthLayout.css";

export default function Layout({
  children,
  convoScreen,
  needHelpScreen,
  accountScreen,
}) {
  return (
    <section className="layout">
      <div className="left-block">
        <div className="logo-block">
          <div className="unilag-logo">
            <img src={unilagLogo} alt="Unilag Logo" className="imgLogo" />
          </div>
          <h2>UNILAG</h2>
        </div>

        <div className="user-avatar-block">
          <img src={avatar} alt="Avatar" />
          <p>Okemati Lanre</p>
        </div>

        <div className="nav-block">
          <Navigation
            onConversations={convoScreen}
            onNeedHelp={needHelpScreen}
            onAccount={accountScreen}
          />
        </div>
        <div className="footer">
          <h5>Unilag Inc. 2021</h5>
          <p>something blah blah blah</p>
        </div>
      </div>
      <div className="right-block">{children}</div>
    </section>
  );
}
