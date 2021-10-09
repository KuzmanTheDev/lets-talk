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
  const [roomContents, setRoomContents] = useState([]);
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
      default:
        break;
    }
  }

  // function createRoom() {
  //   const message = {
  //     msgType: WSMessageType.CreateRoom,
  //     createByUserID: `${userID}`,
  //     roomName: "C301",
  //     roomIcon: "Unilag logo",
  //   };
  //   socket.current.send(JSON.stringify(message));
  // }

  function sendWSMessage(message) {
    socket.current.send(message);
  }

  function onNewMessages(messageData) {
    const newRoomContents = [...roomContents, messageData];
    setRoomContents(newRoomContents);
  }
  function onRequestMessages(messages) {
    const reversedMessages = [...messages].reverse();
    setRoomContents(reversedMessages);
  }

  // console.log(homeData || {});
  return (
    <main>
      {web ? (
        <Conversations
          data={homeData}
          roomContents={roomContents}
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
