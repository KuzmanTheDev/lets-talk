import React, { useState } from "react";
// import { useQuery } from "react-query";
import Chats from "./Chats/Chats";
import Filter from "./Filter/Filter";
import speechBubble from "../../assets/images/speech-bubble.png";
import Layout from "../AuthorisedLayout/AuthLayout";
import DialogueBox from "./DialogueBox/DialogueBox";
import "./Conversations.css";

export default function Conversations({ data, create, roomContents, send }) {
  const [convo, setConvo] = useState(null);
  const [roomName, setRoomName] = useState("");
  // const [roomID, setRoomID] = useState(null);

  // console.log(data.data)

  const onChat = () => {
    setConvo(true);
    // req();
    // setRoomDetails(data.roomList.data.)
  };

  const onRoomName = (name) => {
    setRoomName(name);
  };
  // const onRoomID = (id) => {
  //   setRoomID(id);
  // };

  return (
    <Layout>
      <div className="conversations">
        <div className="filter-block">
          <Filter />
        </div>
        <div className="chats-block">
          <div>
            <Chats
              chats={data}
              getChat={onChat}
              sendWSMessage={send}
              getRoomName={onRoomName}
            />
          </div>
          {convo ? (
            <DialogueBox
              chatData={data}
              createRoom={create}
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
