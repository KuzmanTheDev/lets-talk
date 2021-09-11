import React from "react";
import Chats from "./Chats/Chats";
import Filter from "./Filter/Filter";
// import { useUsersContext } from "../../Context/UsersContext";
import speechBubble from "../../assets/images/speech-bubble.png";
import "./Conversations.css";

export default function Conversations({ children }) {
  // const ws = new WebSocket()
  return (
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
  );
}
