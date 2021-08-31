import React from "react";
import unilagLogo from "../../assets/images/lag-logo-lg.png";
import facebook from "../../assets/images/facebook.png";
import linkedin from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/twitter.png";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <section className="container">
      <div className="content">
        <div className="logo">
          <img src={unilagLogo} alt="Unilag Logo" className="imgLogo" />
        </div>

        <div className="content-block">
          <h2>Content goes here</h2>
          <p>
            So doing the Lord's work is a thread that's run through our politics
            since the very beginning.
          </p>
          <div className="socials">
            {/* <a href="/"> */}
            <img
              src={facebook}
              alt="Facebook Logo"
              className="socials-logo-fb"
            />
            {/* </a> */}
            <img
              src={linkedin}
              alt="Linkedin Logo"
              className="socials-logo-ln"
            />
            <img src={twitter} alt="Twitter Logo" className="socials-logo-tw" />
          </div>
        </div>
      </div>

      <div>{children}</div>
    </section>
  );
}
