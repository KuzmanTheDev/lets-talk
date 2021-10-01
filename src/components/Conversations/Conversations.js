import React from "react";
import Chats from "./Chats/Chats";
import Filter from "./Filter/Filter";
import speechBubble from "../../assets/images/speech-bubble.png";
import Layout from "../AuthorisedLayout/AuthLayout";
import "./Conversations.css";

export default function Conversations({ children }) {
  return (
    <Layout>
      <div className="conversations">
        <div className="filter-block">
          <Filter />
        </div>
        <div className="chats-block">
          <div>
            <Chats />
          </div>
          {children ? (
            children
          ) : (
            <div className="chat_welcome-img">
              <img src={speechBubble} alt="Speech" />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
