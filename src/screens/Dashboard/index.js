import React from "react";
import MobileDashboard from "../../components/Dashboard/MobileDashboard";
import Conversations from "../../components/Conversations/Conversations";
// import Convo from "../../components/MobileUI/Conversations/Convo";

export default function Index() {
  return (
    <main>
      <div className="large-display">
        <Conversations />
      </div>

      <div className="small-display">
        <MobileDashboard />
      </div>
    </main>
  );
}
