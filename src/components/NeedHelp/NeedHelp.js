import React, { useState } from "react";
import { useMediaQuery } from "../../utilities/MediaQuery";
import HelpLayout from "./HelpLayout/HelpLayout";
import HelpCenter from "./HelpCenter/HelpCenter";
import PrivacyPoloicy from "./PrivacyPolicy/PrivacyPolicy";
import AppInfo from "./AppInfo/AppInfo";
import Layout from "../AuthorisedLayout/AuthLayout";
import Settings from "../MobileUI/Settings/Settings";

export default function NeedHelp() {
  const [screen, setScreen] = useState("HELP");
  const web = useMediaQuery("(min-width : 776px)");

  const helpCenter = () => {
    setScreen("HELP");
  };
  const privacyPolicy = () => {
    setScreen("PRIVACY POLICY");
  };
  const app = () => {
    setScreen("APP INFO");
  };

  function renderScreen() {
    switch (screen) {
      case "HELP":
        return (
          <Layout>
            <HelpLayout
              helpScreen={helpCenter}
              privacyScreen={privacyPolicy}
              appScreen={app}
            >
              <HelpCenter />
            </HelpLayout>
          </Layout>
        );
      case "PRIVACY POLICY":
        return (
          <Layout>
            <HelpLayout
              helpScreen={helpCenter}
              privacyScreen={privacyPolicy}
              appScreen={app}
            >
              <PrivacyPoloicy />
            </HelpLayout>
          </Layout>
        );
      case "APP INFO":
        return (
          <Layout>
            <HelpLayout
              helpScreen={helpCenter}
              privacyScreen={privacyPolicy}
              appScreen={app}
            >
              <AppInfo />
            </HelpLayout>
          </Layout>
        );

      default:
        break;
    }
  }

  return <div>{web ? renderScreen() : <Settings />}</div>;
}
