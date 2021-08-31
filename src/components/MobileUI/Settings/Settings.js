import React from "react";
import Footer from "../Footer/Footer";

export default function Settings({ isActive, settings, convo, profile }) {
  const onConvo = () => {
    convo();
  };
  const onProfile = () => {
    profile();
  };
  const onSettings = () => {
    settings();
  };
  return (
    <div>
      <p>settings</p>
      <Footer
        active={isActive}
        convo={onConvo}
        profile={onProfile}
        settings={onSettings}
      />
    </div>
  );
}
