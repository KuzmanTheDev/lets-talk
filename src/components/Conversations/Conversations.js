import React, { useState } from "react";
import Chats from "./Chats/Chats";
import Filter from "./Filter/Filter";
import { useUsersContext } from "../../Context/UsersContext";
import "./Conversations.css";

export default function Conversations({ children }) {
  return (
    <div className="conversations">
      <div className="filter-block">
        <Filter />
      </div>
      <div className="chats-block">
        <div>
          <Chats />
        </div>
        {children}
      </div>
    </div>
  );
}
