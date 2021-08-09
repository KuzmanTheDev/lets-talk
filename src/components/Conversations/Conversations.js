import React from "react";
import Chats from "./Chats/Chats";
import DialogueBox from "./DialogueBox/DialogueBox";
import Filter from "./Filter/Filter";
import "./Conversations.css";

export default function Conversations() {
  return (
    <div className="conversations">
      <div className="filter-block">
        <Filter />
      </div>
      <div className="chats-block">
        <div>
          <Chats />
        </div>
        <div>
          <DialogueBox />
        </div>
      </div>
    </div>
  );
}
