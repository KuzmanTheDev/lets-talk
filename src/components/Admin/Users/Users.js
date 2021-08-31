import React from "react";
import "./Users.css";

export default function Users() {
  return (
    <div className="users">
      <div className="users-header">
        <h2>Users</h2>
      </div>

      <div className="users-list">
        <div className="users-list__search">
          <input name="search" type="text" placeholder="Search users" />
          <div>Filter</div>
        </div>
        
      </div>
    </div>
  );
}
