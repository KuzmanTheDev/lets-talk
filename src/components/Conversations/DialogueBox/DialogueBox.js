import React, { useEffect, useState } from "react";
import ChatInput from "../ChatInpu/ChatInput";
import DialogueHeader from "./DialogueHeader/DialogueHeader";
import "./DialogueBox.css";

export default function DialogueBox({
  createRoom,
  roomData,
  name,
  sendWSMessage,
}) {
  const [messages, setMessages] = useState([]);
  // const [Info, Info] = useState([]);

  useEffect(() => {
    setMessages(roomData?.data?.data || []);
  }, [roomData]);
  // console.log(roomData?.data?.data, "messages");
  // console.log(messages, "m");

  // const create = () => {
  //   createRoom();
  // };
  return (
    <div className="dialogue-box">
      <DialogueHeader roomName={name} />
      <div className="dialogue-content">
        {messages.map((message, index) => (
          <p
            key={index}
            className="room_info"
            style={{
              display: message.type === "NewInfo" ? "block" : "none",
            }}
          >
            {message?.message}
          </p>
        ))}

        {/* // style={{ */}
        {/* //   display:
//     roomData?.data?.data[0]?.type === "Message" ? "block" : "none",
// }} */}
        {messages.map((message, index) => (
          <p
            key={index}
            className="room_message"
            style={{
              display: message.type === "Message" ? "block" : "none",
            }}
          >
            {message?.message}
          </p>
        ))}

        {/* <button onClick={create}>Create</button> */}
      </div>

      <ChatInput
        roomID={roomData?.data?.data[0]?.roomID}
        sendWSMessage={sendWSMessage}
      />
    </div>
  );
}
