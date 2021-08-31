import React from "react";
import MobileDashboard from "../../components/Dashboard/MobileDashboard";
import Conversations from "../../components/Conversations/Conversations";

export default function index() {
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
