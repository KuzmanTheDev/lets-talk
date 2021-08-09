import React from "react";
import speechBubble from "../../../assets/images/speech-bubble.png";
import "./DialogueBox.css";

export default function DialogueBox() {
  return (
    <div className="dialogue-box">
      <img src={speechBubble} alt="Speech" />
    </div>
  );
}
