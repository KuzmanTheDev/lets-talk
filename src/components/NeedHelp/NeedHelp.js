import React, { useState } from "react";
import HelpLayout from "./HelpLayout/HelpLayout";
import HelpCenter from "./HelpCenter/HelpCenter";
import PrivacyPoloicy from "./PrivacyPolicy/PrivacyPolicy";
import AppInfo from "./AppInfo/AppInfo";

export default function NeedHelp() {
  const [screen, setScreen] = useState("HELP");

  const helpCenter = () => {
    setScreen("HELP");
  };
  const privacyPolicy = () => {
    setScreen("PRIVACY POLICY");
  };
  const app = () => {
    setScreen("APP INFO");
  };

  switch (screen) {
    case "HELP":
      return (
        <HelpLayout
          helpScreen={helpCenter}
          privacyScreen={privacyPolicy}
          appScreen={app}
        >
          <HelpCenter />
        </HelpLayout>
      );
    case "PRIVACY POLICY":
      return (
        <HelpLayout
          helpScreen={helpCenter}
          privacyScreen={privacyPolicy}
          appScreen={app}
        >
          <PrivacyPoloicy />
        </HelpLayout>
      );
    case "APP INFO":
      return (
        <HelpLayout
          helpScreen={helpCenter}
          privacyScreen={privacyPolicy}
          appScreen={app}
        >
          <AppInfo />
        </HelpLayout>
      );

    default:
      break;
  }
}
