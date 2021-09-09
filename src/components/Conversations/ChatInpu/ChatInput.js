import React from "react";

export default function ChatInput() {
  const detectEnterPress = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
    //   submitNewMessage();
    }
  };
  return (
    <div className="chat__input-wrapper">
      <input
        className="chat__input"
        placeholder="Type a message"
        // onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={detectEnterPress}
      />
    </div>
  );
}
