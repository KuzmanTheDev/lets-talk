import React, { useState } from "react";
import Convo from "../MobileUI/Conversations/Convo";
import Profile from "../MobileUI/Profile/Profile";
import Settings from "../MobileUI/Settings/Settings";

export default function MobileDashboard() {
  const [screen, setScreen] = useState("Convo");
  const [active, setActive] = useState("convo");

  const onConvo = () => {
    setScreen("Convo");
    setActive("convo");
  };
  const onProfile = () => {
    setScreen("Profile");
    setActive("profile");
  };
  const onSettings = () => {
    setScreen("Settings");
    setActive("settings");
  };

  switch (screen) {
    case "Convo":
      return (
        <Convo
          isActive={active}
          convo={onConvo}
          profile={onProfile}
          settings={onSettings}
        />
      );
    case "Profile":
      return (
        <Profile
          isActive={active}
          profile={onProfile}
          convo={onConvo}
          settings={onSettings}
        />
      );
    case "Settings":
      return (
        <Settings
          isActive={active}
          settings={onSettings}
          convo={onConvo}
          profile={onProfile}
        />
      );
    default:
      break;
  }
}
