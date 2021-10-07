import React, { useContext, useState } from "react";
import { WSMessageType } from "../../../utilities/Constants";
import ChatPreview from "../ChatPreview/ChatPreview";
import search from "../../../assets/images/search.png";
import "./Chats.css";
import { AuthContext } from "../../../Context/AuthContext";

export default function Chats({ chats, getChat, sendWSMessage, getRoomName }) {
  const {
    user: { userID },
  } = useContext(AuthContext);
  // console.log(chats?.joinedRooms?.data[0]);
const [currentRoom, setCurrentRoom] = useState(null)

  function getChatContent(roomID) {
    const message = {
      msgType: WSMessageType.RequestMessages,
      userID: userID,
      roomID: roomID,
    };
    sendWSMessage(JSON.stringify(message));
    getChat();
  }

  const getChatInfo = (id, name) => {
    getChatContent(id);
    getRoomName(name);
    setCurrentRoom(id)
  };

  return (
    <div className="chats">
      <div className="search-block">
        <img src={search} alt="serach" />
        <input type="text" placeholder="Type to search" />
      </div>

      <div className="chat-preview-block">
        {chats?.roomList?.data?.map((room, index) => (
          <div
            key={index}
            onClick={() => {
              getChatInfo(room._id, room.roomName);
            }}
            style={{ cursor: "pointer" }}
          >
            <ChatPreview roomInfo={room}  activeChat={currentRoom}/>
          </div>
        ))}
      </div>
    </div>
  );
}
