import React from "react";
import recepientScreen from "../../assets/images/video-recepient.png";
import phone from "../../assets/images/terminate.png";
import video from "../../assets/images/videoButton.png";
import speaker from "../../assets/images/speaker.png";
import callerScreen from "../../assets/images/caller-screen.png";
import "./Video.css";

export default function Video() {
  return (
    <div className="video">
      <div className="left_spacing"></div>

      <div>
        <div className="video_top-block">
          <p>Video call with Boluwatife</p>
        </div>

        <div className="video_screen-box">
          <div className="recepient_screen">
            <img src={recepientScreen} alt="Recepient" />

            <div className="caller_screen">
              <img src={callerScreen} alt="User" />

             
            </div>

            <div className="call_functions">
                  <img src={speaker} alt="Speaker" />
                  <img src={phone} alt="End Call" />
                  <img src={video} alt="Video" />
              </div>
          </div>
        </div>
      </div>

      <div className="right_spacing"></div>
    </div>
  );
}
