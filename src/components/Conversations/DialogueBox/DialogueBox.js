import React from "react";
import ChatInput from "../ChatInpu/ChatInput";
import DialogueHeader from "./DialogueHeader/DialogueHeader";
import "./DialogueBox.css";

export default function DialogueBox({ data }) {
  return (
    <div className="dialogue-box">
      <DialogueHeader />
      <div className="dialogue-content">
    
          <h2>Chat{data}</h2>
     
      </div>
      <div>
        <ChatInput />
      </div>
      {/* <img src={speechBubble} alt="Speech" /> */}
    </div>
  );
}
