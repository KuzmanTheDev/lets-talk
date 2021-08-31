import React from "react";
import Footer from "../Footer/Footer";

export default function Profile({ isActive, profile, convo, settings }) {
  const onConvo = () => {
    convo();
  };
  const onSettings = () => {
    settings();
  };
  const onProfile = () => {
    profile();
  };
  return (
    <div>
      <p>Profile</p>
      <Footer
        active={isActive}
        convo={onConvo}
        settings={onSettings}
        profile={onProfile}
      />
    </div>
  );
}
