import React, { useState } from "react";
import angleDouble from "../../../assets/images/angle-double.png";
import "./HelpLayout.css";

export default function HelpLayout({
  children,
  helpScreen,
  appScreen,
  privacyScreen,
}) {
  const [active, setActive] = useState("help");

  const onHelp = () => {
    setActive("help");
    helpScreen();
  };
  const onPrivacy = () => {
    setActive("privacy");
    privacyScreen();
  };
  const onApp = () => {
    setActive("app");
    appScreen();
  };

  return (
    <section className="help-layout">
      <div className="help-nav">
        <div className="help-nav-item">
          <p
            onClick={onHelp}
            style={{
              color: active === "help" ? "#9a2219" : "",
            }}
          >
            Help Center
          </p>
          <img
            src={angleDouble}
            alt="angle"
            style={{
              display: active !== "help" ? "none" : "",
            }}
          />
        </div>

        <div className="help-nav-item">
          <p
            onClick={onPrivacy}
            style={{
              color: active === "privacy" ? "#9a2219" : "",
            }}
          >
            Privacy Policy
          </p>
          <img
            src={angleDouble}
            alt="angle"
            style={{
              display: active !== "privacy" ? "none" : "",
            }}
          />
        </div>

        <div className="help-nav-item">
          <p
            onClick={onApp}
            style={{
              color: active === "app" ? "#9a2219" : "",
            }}
          >
            App Info
          </p>
          <img
            src={angleDouble}
            alt="angle"
            style={{
              display: active !== "app" ? "none" : "",
            }}
          />
        </div>
      </div>

      <div>{children}</div>
    </section>
  );
}
