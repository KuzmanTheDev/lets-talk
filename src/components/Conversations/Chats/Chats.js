import React from "react";
import search from "../../../assets/images/search.png";
import ChatPreview from "./ChatPreview/ChatPreview";
import "./Chats.css";

export default function Chats() {
  return (
    <div className="chats">
      <div className="search-block">
        <img src={search} alt="serach" />
        <input type="text" placeholder="Type to search" />
      </div>

      <div className="chat-preview-block">
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
      </div>
    </div>
  );
}
