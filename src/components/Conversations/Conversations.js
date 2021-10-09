import React, { useState } from "react";
import Chats from "./Chats/Chats";
import Filter from "./Filter/Filter";
import speechBubble from "../../assets/images/speech-bubble.png";
import Layout from "../AuthorisedLayout/AuthLayout";
import DialogueBox from "./DialogueBox/DialogueBox";
import Modal from "../CreateRoom Modal/Modal";
import Backdrop from "../Backdrop/Backdrop";
import "./Conversations.css";

export default function Conversations({ data, create, roomContents, send }) {
  const [convo, setConvo] = useState(null);
  const [roomName, setRoomName] = useState("");
  const [visibility, setVisibility] = useState(false);
  // console.log(data, "rc");

  const onChat = () => {
    setConvo(true);
  };
  const onRoomName = (name) => {
    setRoomName(name);
  };
  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <Layout>
      <div className="conversations">
        <Backdrop visible={visibility}  />
        <Modal visible={visibility} toggle={toggleVisibility} sendWSMessage={send}/>
        <div className="filter-block">
          <Filter toggle={toggleVisibility} />
        </div>
        <div className="chats-block">
          <div>
            <Chats
              chats={data}
              getChat={onChat}
              sendWSMessage={send}
              getRoomName={onRoomName}
              roomData={roomContents}
            />
          </div>
          {convo ? (
            <DialogueBox
              chatData={data}
              roomData={roomContents}
              name={roomName}
              // getRoomID={onRoomID}
              sendWSMessage={send}
            />
          ) : (
            <div className="chat_welcome-img">
              <img src={speechBubble} alt="Speech" />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
