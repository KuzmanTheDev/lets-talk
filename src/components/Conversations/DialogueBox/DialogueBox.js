import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import ChatInput from "../ChatInpu/ChatInput";
import DialogueHeader from "./DialogueHeader/DialogueHeader";
import "./DialogueBox.css";

export default function DialogueBox({
  createRoom,
  roomData,
  name,
  sendWSMessage,
}) {
  const {
    user: { userID },
  } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(roomData || []);
  }, [roomData]);

  return (
    <div className="dialogue-box">
      <DialogueHeader roomName={name} />
      <div className="dialogue-content">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${message.type} ${message.userID === userID ? "user" : ""} message`}
          >
            {message?.message}
          </div>
        ))}
      </div>
      <ChatInput roomID={roomData[0]?.roomID} sendWSMessage={sendWSMessage} />
    </div>
  );
}
