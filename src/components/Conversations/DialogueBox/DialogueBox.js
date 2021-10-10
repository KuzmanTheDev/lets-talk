import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import ChatInput from "../ChatInpu/ChatInput";
import DialogueHeader from "./DialogueHeader/DialogueHeader";
import "./DialogueBox.css";
import { WSMessageType } from "../../../utilities/Constants";

export default function DialogueBox({ roomData, name, sendWSMessage }) {
  const scrollRef = useRef(null);
  const {
    user: { userID },
  } = useContext(AuthContext);
  // const [messages, setMessages] = useState([]);

  useEffect(() => {
    // setMessages(roomData);
    setTimeout(() => {
      scrollRef.current?.scrollIntoView();
    }, 100);
  }, [roomData, roomData.length]);

  const loadMoreMessages = () => {
    const message = {
      msgType: WSMessageType.RequestMessages,
      userID: userID,
      roomID: roomData[0].roomID,
    };
    sendWSMessage(JSON.stringify(message));
  };

  const onScroll = (e) => {
    if (
      e.target &&
      e.target.scrollTop < 100 &&
      roomData.length > 0 &&
      roomData[0].index > 1
    ) {
      loadMoreMessages();
    }
  };
  // useEffect(()=>{

  // })
  return (
    <div className="dialogue-box">
      <DialogueHeader roomName={name} />
      <div className="dialogue-content">
        {roomData.map((message, index) => (
          <div
            key={index}
            className={`${message.type} ${
              message.userID === userID ? "user" : ""
            } message`}
          >
            {message?.message}
            {roomData.length - 1 === index && <div ref={scrollRef}></div>}
          </div>
        ))}
      </div>
      <ChatInput roomID={roomData[0]?.roomID} sendWSMessage={sendWSMessage} />
    </div>
  );
}
