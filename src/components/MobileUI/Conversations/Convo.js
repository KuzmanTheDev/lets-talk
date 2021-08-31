import React from "react";
import Footer from "../Footer/Footer";

export default function Convo({ isActive, convo, profile, settings }) {
  const onProfile = () => {
    profile();
  };
  const onSettings = () => {
    settings();
  };
  const onConvo = () => {
    convo();
  };
  return (
    <div>
      <p>Convo</p>
      <Footer
        active={isActive}
        convo={onConvo}
        profile={onProfile}
        settings={onSettings}
      />
    </div>
  );
}
