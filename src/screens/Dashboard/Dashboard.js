import React from "react";
import Layout from "../../components/AuthorisedLayout/AuthLayout";
import Conversations from "../../components/Conversations/Conversations";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <Layout>
      <Conversations />
    </Layout>
  );
}
