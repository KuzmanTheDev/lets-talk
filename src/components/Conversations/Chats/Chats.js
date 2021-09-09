import React from "react";
import { useUsersContext } from "../../../Context/UsersContext";
import ChatPreview from "../ChatPreview/ChatPreview";
import search from "../../../assets/images/search.png";
import "./Chats.css";

export default function Chats() {
  const { users: contacts } = useUsersContext();
  // console.log(contacts);

  return (
    <div className="chats">
      <div className="search-block">
        <img src={search} alt="serach" />
        <input type="text" placeholder="Type to search" />
      </div>

      <div className="chat-preview-block">
        {contacts.map((contact, index) => (
          <ChatPreview key={index} contact={contact} />
        ))}
      </div>
    </div>
  );
}

