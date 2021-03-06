import React, { useContext, useEffect, useRef, useState } from "react";
import { WSMessageType } from "../../utilities/Constants";
import { AuthContext } from "../../Context/AuthContext";
import Conversations from "../../components/Conversations/Conversations";
import Footer from "../../components/MobileUI/Footer/Footer";
import SecureLS from "secure-ls";
import axios from "../../utilities/axios";
import { useMediaQuery } from "../../utilities/MediaQuery";

const ls = new SecureLS();

export default function Index() {
  const [homeData, setHomeData] = useState(null);
  const [roomContents, setRoomContents] = useState([]);
  const [searchUser, setSearchUser] = useState([]);
  const web = useMediaQuery("(min-width : 776px)");
  const {
    user: { userID, wsTicket },
  } = useContext(AuthContext);
  const socket = useRef(null);
  const { token } = ls.get("userData");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios
        .get("/home", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setHomeData(res.data.data);
          console.log(res.data.data, "home");
          // getChatInfo(res.data.data.roomList.data[0]._id);
        })
        .catch((err) => {
          console.log(err);
        });
      return res;
    };
    // onToken();
    fetchData();
  }, [token]);

  useEffect(() => {
    connect();

    socket.current.onopen = onOpen;
    socket.current.onclose = onClose;
    socket.current.onerror = onError;
    socket.current.onmessage = onMessage;

    return () => {
      socket.current.close();
    };
    // eslint-disable-next-line
  }, []);

  function connect() {
    socket.current = new WebSocket(
      `wss://188.166.170.44:8080/v1/ws/${userID}/${wsTicket}`
    );
  }

  function onOpen(e) {
    console.log("connected");
    const message = {
      msgType: WSMessageType.WebsocketOpen,
      userID: `${userID}`,
    };
    socket.current.send(JSON.stringify(message));
  }
  function onClose(e) {
    console.log("websocket closed.");
  }
  function onError(e) {
    console.log(e);
  }

  const onMessage = (e) => {
    const jsonContent = JSON.parse(e.data);
    console.log(jsonContent, "e");
    switch (jsonContent.msgType) {
      case WSMessageType.WebsocketOpen:
        // setRooms(jsonContent.joinedRooms.data)
        break;
      case WSMessageType.CreateRoom:
        // createRoom();
        console.log("room created");
        break;
      case WSMessageType.NewMessage:
        onNewMessages(jsonContent.data);
        break;
      case WSMessageType.RequestMessages:
        onRequestMessages(jsonContent.data.data);
        break;
      case WSMessageType.SearchUser:
        console.log("su");
        setSearchUser(jsonContent.data.data);
        break;
      default:
        break;
    }
  };

  function sendWSMessage(message) {
    socket.current.send(message);
  }

  function onNewMessages(messageData) {
    // console.log(roomContents, "rc");
    roomContents.push(messageData);
    // const newRoomContents = [...roomContents, messageData];
    // setRoomContents(newRoomContents);
  }
  function onRequestMessages(messages) {
    const reversedMessages = [...messages].reverse();
    setRoomContents(reversedMessages);
    console.log("req");
  }
  console.log(roomContents, "index");
  // console.log(homeData || {});
  return (
    <main>
      {web ? (
        <Conversations
          data={homeData}
          roomContents={roomContents}
          send={sendWSMessage}
          user={searchUser}
        />
      ) : (
        <div>
          {/* <h2 className="convo-title">Conversations</h2>
          {homeData.length ? (
          homeData?.roomList?.data?.map((room, index) => (
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
        )} */}
          <Footer />
        </div>
      )}
    </main>
  );
}
