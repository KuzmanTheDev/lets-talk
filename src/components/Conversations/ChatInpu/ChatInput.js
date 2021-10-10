import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { MessageType, WSMessageType } from "../../../utilities/Constants";
import Button from "../../Button/Button";
import "./ChatInput.css";

export default function ChatInput({ roomID, sendWSMessage }) {
  const [messageValue, setMessageValue] = useState("");
  const {
    user: { userID },
  } = useContext(AuthContext);
  const detectEnterPress = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      sendMessage();
    }
  };
  // console.log(roomID, sendWSMessage);

  function sendMessage() {
    const message = {
      msgType: WSMessageType.NewMessage,
      userID: userID,
      roomID: roomID,
      message: messageValue,
      type: MessageType.Message,
    };
    sendWSMessage(JSON.stringify(message));
    setMessageValue("");

    const message2 = {
      msgType: WSMessageType.RequestMessages,
      userID: userID,
      roomID: roomID,
    };
    sendWSMessage(JSON.stringify(message2));
  }
  return (
    <div className="chat__input-wrapper">
      <input
        className="chat__input"
        placeholder="Type a message"
        onChange={(e) => setMessageValue(e.target.value)}
        value={messageValue}
        onKeyDown={detectEnterPress}
      />
      <Button
        text="SEND"
        type="secondary"
        style={{
          width: "79px",
          height: "36px",
          marginLeft: "auto",
        }}
        onClick={sendMessage}
      />
    </div>
  );
}
