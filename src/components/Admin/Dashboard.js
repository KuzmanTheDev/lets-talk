import React from "react";
import unilagLogo from "../../assets/images/lag-logo-lg.png";
import Users from "./Users/Users";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-nav">
        <div className="dashboard-nav__logo">
          <img src={unilagLogo} alt="Unilag Logo" />
          <h5>UNILAG APP</h5>
        </div>

        <ol>
          <li>
            <p
              style={{
                background: "rgba(154, 34, 25, 0.2)",
                borderRadius: "5px 0px 0px 5px",
              }}
            >
              Users
            </p>
          </li>
          <li>
            <p>Logout</p>
          </li>
        </ol>
      </div>

      <div className="users">
        <Users />
      </div>
    </div>
  );
}
