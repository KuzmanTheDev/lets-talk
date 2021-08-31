import React, { useState } from "react";
import Button from "../../components/Button/Button";
import unilagLogo from "../../assets/images/lag-logo-lg.png";
import "./Admin.css";

export default function Admin() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (input) => (e) => {
    setValues({ ...values, [input]: e.target.value });
  };
  return (
    <div className="admin">
      <div className="admin-form">
        <img src={unilagLogo} alt="Unilag Logo" />

        <p>LET'S TALK</p>

        <div className="admin-field">
          <label>Email</label>
          <input
            type="email"
            placeholder="okemati@gmail.com"
            defaultValue={values.email}
            onChange={handleChange("email")}
            required
          />
        </div>
        <div className="admin-field">
          <label>Password</label>
          <input
            type="password"
            placeholder="**************"
            defaultValue={values.password}
            onChange={handleChange("password")}
            required
          />
        </div>
        <Button
          text="Next"
          type="primary"
          style={{
            width: "333px",
            height: "53px",
          }}
          // onClick={onRole}
        />
      </div>
    </div>
  );
}
