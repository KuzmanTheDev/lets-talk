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
  const [homeData, setHomeData] = useState({});
  const [currentRoomMessages, setCurrentRoomMessages] = useState([]);
  const [roomContents, setRoomContents] = useState({});
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

  function onMessage(e) {
    const jsonContent = JSON.parse(e.data);
    console.log(jsonContent, "buggy");
    // console.log("------");
    // console.log(jsonContent.msgType);
    // console.log(WSMessageType.CreateRoom);
    // console.log("------");

    switch (jsonContent.msgType) {
      case WSMessageType.WebsocketOpen:
        // setRooms(jsonContent.joinedRooms.data)
        // console.log(jsonContent.joinedRooms.data, "room")
        // setRoomsData(jsonContent);
        // setHomeData(jsonContent.joinedRooms.data);
        break;
      case WSMessageType.CreateRoom:
        createRoom();
        console.log("room created");
        break;
      case WSMessageType.NewMessage:
        onRequestMessages(jsonContent);
        break;
      case WSMessageType.RequestMessages:
        setRoomContents(jsonContent);
        console.log("i clicked on a room", jsonContent);
        break;
      default:
        break;
    }
  }

  function createRoom() {
    const message = {
      msgType: WSMessageType.CreateRoom,
      createByUserID: `${userID}`,
      roomName: "C301",
      roomIcon: "Image Link. For now we should use a default image of unilag",
    };
    socket.current.send(JSON.stringify(message));
  }

  function sendWSMessage(message) {
    socket.current.send(message);
  }

  function onRequestMessages(roomData) {
    // for (let i = roomData.data.data.length - 1; i >= 0; i--) {
    //   currentRoomMessages.unshift(roomData.data[i]);
    // }
    // console.log(roomData.data.data.length);
  }
  // console.log(homeData, "rd2");
  return (
    <main>
      {web ? (
        <Conversations
          data={homeData}
          roomContents={roomContents}
          req={onRequestMessages}
          create={createRoom}
          send={sendWSMessage}
        />
      ) : (
        <div>
          <h2 className="convo-title">Conversations</h2>
          {/* <div className="chat-preview-block">
            {contacts.map((contact, index) => (
              <ChatPreview key={index} contact={contact} />
            ))}
          </div> */}
          <Footer />
        </div>
      )}
    </main>
  );
}
