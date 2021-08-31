import React from "react";
import GetStarted from "../../components/GetStarted/GetStarted";
import LandingPage from "../../components/LandingPage/LandingPage";
import Layout from "../../components/NoAuthLayout/Layout";
import "./Home.css";

export default function Home() {
  return (
    <main>
      <div className="small-display">
        <LandingPage />
      </div>

      <div className="large-display">
        <Layout>
          <GetStarted />
        </Layout>
      </div>
    </main>
  );
}
