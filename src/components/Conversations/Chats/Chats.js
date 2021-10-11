import React, { useContext, useState } from "react";
import { WSMessageType } from "../../../utilities/Constants";
import ChatPreview from "../ChatPreview/ChatPreview";
import search from "../../../assets/images/search.png";
import "./Chats.css";
import { AuthContext } from "../../../Context/AuthContext";
import { useEffect } from "react/cjs/react.development";

export default function Chats({
  chats,
  getChat,
  sendWSMessage,
  getRoomName,
  user,
}) {
  const {
    user: { userID },
  } = useContext(AuthContext);
  // console.log(chats?.roomList?.data, "rd");
  const [currentRoom, setCurrentRoom] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(false);
  // const searchInput = useRef("");

  useEffect(() => {
    if (searchValue.trim().length < 4) return;
    const delayDebounceFn = setTimeout(() => {
      console.log(searchValue);
      setShowResult(!showResult);
      searchUser();
      // Send Axios request here
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
    // eslint-disable-next-line
  }, [searchValue, showResult]);

  function getChatContent(roomID) {
    const message = {
      msgType: WSMessageType.RequestMessages,
      userID: userID,
      roomID: roomID,
    };
    sendWSMessage(JSON.stringify(message));
    getChat();
  }
  function searchUser() {
    const message = {
      msgType: WSMessageType.SearchUser,
      searchText: searchValue,
    };
    sendWSMessage(JSON.stringify(message));
  }

  const getChatInfo = (id, name) => {
    getChatContent(id);
    getRoomName(name);
    setCurrentRoom(id);
  };

  return (
    <div className="chats">
      <div className="search-block">
        <img src={search} alt="serach" />
        <input
          type="text"
          placeholder="Search by Matric Number"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          required
        />
      </div>
      <div
        className="search_results"
        style={{ display: showResult ?  "block" : "none" }}
      >
        {user._id}
      </div>

      <div className="chat-preview-block">
        {chats.length ? (
          chats?.roomList?.data?.map((room, index) => (
            <div
              key={index}
              onClick={() => {
                getChatInfo(room._id, room.roomName);
              }}
              style={{ cursor: "pointer" }}
            >
              <ChatPreview roomsInfo={room} activeChat={currentRoom} />
            </div>
          ))
        ) : (
          <p
            style={{
              position: "absolute",
              top: "50%",
              margin: "30px",
              width: "50%",
            }}
          >
            You have no chats
          </p>
        )}
      </div>
    </div>
  );
}
