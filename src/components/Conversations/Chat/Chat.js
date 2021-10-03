import React from "react";
import { useMediaQuery } from "../../../utilities/MediaQuery";
import Conversations from "../Conversations";
import DialogueBox from "../DialogueBox/DialogueBox";
import "./Chat.css";

export default function Chat({ match }) {
  const web = useMediaQuery("(min-width : 776px)");

  // @KuzmanTheDev global data
  //
  // let videoTransceiver: RTCRtpTransceiver;
  // let audioTransceiver: RTCRtpTransceiver;
  // let videoTrack: MediaStreamTrack;
  // let audioTrack: MediaStreamTrack;
  // let stream: MediaStream;

  // //TODO: @Michael
  const startPeerConnection = () => {
    const peerConnection = new RTCPeerConnection({
      iceServers: [
        {
          urls: ["stun:stun.l.google.com:19302"],
        },
      ],
    });

    peerConnection.oniceconnectionstatechange = () => {
      console.log("ICE connection state", peerConnection.iceConnectionState);

      if (peerConnection.iceConnectionState === "failed") {
        // @KuzmanTheDev this indicates that the video call is
        // failed, so we exit the call.
        // You can close the Video call UI at this point.
      }
    };

    peerConnection.onicecandidate = (event) => {
      console.log("New candidate added", event);

      // At this point we can send the request to the
      // websocket about the required information.
      if (
        event.candidate === null &&
        peerConnection.localDescription &&
        peerConnection.localDescription.sdp &&
        peerConnection.iceConnectionState === "new"
      ) {
        const message = {
          msgType: "StartClassSession",
          sdp: peerConnection.localDescription.sdp,
          roomID: this.currentViewedRoom.roomID,
          userID: this.userID,
        };

        // @KuzmanTheDev we need to send the  message to
        // the websocket channel.
        // socket.send(JSON.stringify(message));
      }
    };

    peerConnection.onnegotiationneeded = (event) => {
      // @metaclips we might need to resend peerconnection state
      // again, maybe?.
      console.log("Negotiation needed", event);
    };

    const MediaConstraints = {
      video: { width: 640, height: 480 },
      audio: true,
    };

    // @KuzmanTheDev is this a right way to call
    // the `getUserMedia` function.
    this.getUserMedia(MediaConstraints, (e) => {
      this.videoTrack = e.getVideoTracks()[0];
      this.audioTrack = e.getAudioTracks()[0];

      this.audioTransceiver = peerConnection.addTransceiver(this.audioTrack, {
        direction: "sendrecv",
      });

      this.videoTransceiver = peerConnection.addTransceiver(this.videoTrack, {
        direction: "sendrecv",
      });

      // @KuzmanTheDev please note this videoID.
      const el = document.getElementById("videoID");

      if (!el) {
        this.dialogError = "Error getting video element.";
        this.dialog = true;
        console.log("Could not get video ID element");
        return;
      }

      const mediaStreamTrack = [this.videoTrack];
      this.stream = new MediaStream(mediaStreamTrack);

      el.srcObject = this.stream;
      el.autoplay = true;

      peerConnection
        .createOffer()
        .then((sdp) => {
          peerConnection.setLocalDescription(sdp);
        })
        .catch((log) =>
          console.log("Error creating peer connection offer, error:", log)
        );
    });

    peerConnection.ontrack = ({ transceiver, streams: [event] }) => {
      event.onaddtrack = (event) => {
        console.log("On add track called for start session.");
        this.stream.addTrack(event.track);
        console.log(event.track.id);
      };

      event.onremovetrack = (event) => {
        console.log("On remove track called for start video session.");
        this.stream.removeTrack(event.track);
        console.log(event.track.id);
      };

      transceiver.receiver.track.onmute = () => {
        console.log("Track muted for start session.");
      };

      transceiver.receiver.track.onended = () => {
        console.log("Track ended for start session");

        // @KuzmanTheDev a user has gone off the call at this
        // point so we delete their ID and UPDATE the page.
        // const id = event.id;

        // delete this.classSessionConnectedUsers[id];
      };

      // If the video or audio of a user is connected or
      // the user is unmuted, this function is called.
      transceiver.receiver.track.onunmute = () => {
        console.log("Track started for start session.");
        console.log("track", transceiver, "\n event", event);

        // We add them as the set of connected users and show
        // them to users.
        //
        // const id = event.id;
        // this.classSessionConnectedUsers[id] = {
        //   name: id,
        //   isOnline: true,
        // };

        this.stream.addTrack(transceiver.receiver.track);
      };
    };
  }

  // Sesseion data is the message sent by the websocket.
  const joinPeerConnection = (sessionData) => {
    const peerConnection = new RTCPeerConnection({
      iceServers: [
        {
          urls: ["stun:stun.l.google.com:19302"],
        },
      ],
    });

    peerConnection.oniceconnectionstatechange = () => {
      console.log(peerConnection.iceConnectionState);

      // @KuzmanTheDev close the video call UI
      if (peerConnection.iceConnectionState === "failed") {
        this.dialogError = "Connection state failed";
        this.dialog = true;
      }
    };

    peerConnection.onnegotiationneeded = (event) => {
      console.log("Negotiation needed", event);
    };

    peerConnection.onicecandidate = (event) => {
      console.log("A new user added", event);

      if (
        event.candidate == null &&
        peerConnection.localDescription &&
        peerConnection.localDescription.sdp &&
        peerConnection.iceConnectionState === "new"
      ) {
        console.log("Calling join class session");

        const message = {
          msgType: "JoinClassSession",
          sdp: peerConnection.localDescription.sdp,
          roomID: this.currentViewedRoom.roomID,
          userID: this.userID,
          sessionID: sessionData.hash,
          publisherID: sessionData.userID,
        };

        // @KuzmanTheDev send the websocket message here.
        // socket.send(JSON.stringify(message));
      }
    };

    const MediaConstraints = {
      audio: true,
    };

    this.getUserMedia(MediaConstraints, (e) => {
      console.log("Adding audio track");
      this.audioTrack = e.getAudioTracks()[0];
      this.audioTrack.enabled = true;
      this.audioTransceiver = peerConnection.addTransceiver(this.audioTrack, {
        direction: "sendrecv",
      });

      const el = document.getElementById("videoID");

      if (!el) {
        this.dialogError = "Error getting video element.";
        this.dialog = true;

        console.log("Could not get video ID element");
        return;
      }

      this.stream = new MediaStream();

      el.srcObject = this.stream;
      el.autoplay = true;

      console.log("Sending to server to create offer.");
      peerConnection
        .createOffer()
        .then((sdp) => {
          peerConnection.setLocalDescription(sdp);
        })
        .catch((log) => {
          console.log("Error creating offer on join session, error:", log);
          this.dialogError = "Error creating peer offer";
          this.dialog = true;
        });
    });

    peerConnection.ontrack = ({ transceiver, streams: [event] }) => {
      event.onaddtrack = (event) => {
        console.log("On add track called for join video session");
        this.stream.addTrack(event.track);
        console.log("track ID", event.track.id);
      };

      event.onremovetrack = (track) => {
        console.log("On remove track called for join video session.");
        this.stream.removeTrack(track.track);
        console.log(track.track.id);
      };

      transceiver.receiver.track.onmute = () =>
        console.log("Track muted for join session");

      transceiver.receiver.track.onended = () => {
        console.log("Track ended for Join session");
        // User has exited
        // const id = track.track.id;
        // delete this.classSessionConnectedUsers[id];
      };

      transceiver.receiver.track.onunmute = () => {
        if (transceiver.receiver.track.kind === "audio") {
          const id = transceiver.receiver.track.id;
          // this.classSessionConnectedUsers[id] = {
          //   name: event.id,
          //   isOnline: true,
          // };

          // A user started video or audio track, so we show user
          // as a connected user.
        }

        console.log("Track unmuted");

        console.log("Track started for Join session");

        console.log("track", transceiver, "\n event", event);
        this.stream.addTrack(transceiver.receiver.track);
      };
    };
  }

  // @KuzmanTheDev get user media starts the camera and audio
  // of the device and then allows the callback function `onMedia`
  // to consume it.
  const getUserMedia = () => (
    mediaConstraints,
    onMedia
  ) => {
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(function (e) {
        // Calls the callback function that
        // consumes `getUserMedia`.
        onMedia(e);
      })
      // @KuzmanTheDev We should close the audio UI if this fails
      .catch((error) => {
        console.log("Error getting media device, error:", error);
        this.dialogError = "Error starting media devices";
        this.dialog = true;
      });
  }

  // @KuzmanTheDev changeVideo, changeAudio, and startDesktopSharing
  // interacts with a variable `videoTrack` and `audioTrack` to disable
  // or enable their states and also start desktop sharing.
  const changeVideo = () => {
    this.videoTrack.enabled = !this.videoTrack.enabled;

    this.videoTrack.enabled
      ? this.videoTransceiver.sender.replaceTrack(this.videoTrack)
      : this.videoTransceiver.sender.replaceTrack(null);
  }

  const changeAudio = () => {
    this.audioTrack.enabled = !this.audioTrack.enabled;
    this.audioTrack.enabled
      ? this.audioTransceiver.sender.replaceTrack(this.audioTrack)
      : this.audioTransceiver.sender.replaceTrack(null);
  }

  const startDesktopSharing = () => {
    // 480p video constraints.
    const mediaConstraints = { video: { width: 640, height: 480 } };

    navigator.mediaDevices
      .getDisplayMedia(mediaConstraints)
      .then((event) => {
        // Disable webcam and remove video from stream.
        this.videoTrack.enabled = false;
        this.stream.removeTrack(this.videoTrack);

        const tracks = event.getVideoTracks();
        this.addTracks(tracks);

        if (tracks.length > 0) {
          this.videoTransceiver.sender.replaceTrack(tracks[0]);
        } else {
          console.log("Could not find any track for desktop sharing");

          // @KuzmanTheDev we close the window at this point showing the error.
          this.dialogError = "Could not get track for desktop sharing.";
          this.dialog = true;
        }
      })
      .catch((error) => {
        console.log("Error creating desktop sharing", error);
        this.dialogError = "Error starting desktop sharing.";
        this.dialog = true;
      });
  }

  const stopDesktopSharing = (isVideoOn) => {
    const tracks = this.stream.getVideoTracks();
    this.removeTracks(tracks);

    this.videoTrack.enabled = isVideoOn;
    this.stream.addTrack(this.videoTrack);

    this.videoTransceiver.sender.replaceTrack(this.videoTrack);
  }

  const removeTracks = (tracks) => {
    for (let i = 0; i < tracks.length; i++) {
      tracks[i].enabled = false;
      this.stream.removeTrack(tracks[i]);
    }
  }

  const addTracks = (tracks) => {
    for (let i = 0; i < tracks.length; i++) {
      this.stream.addTrack(tracks[i]);
    }
  }

  return (
    <div>
      {web ? (
        <Conversations>
          <DialogueBox data={match.params.id} />
        </Conversations>
      ) : (
        <div>
          <h2>Chat{match.params.id}</h2>
        </div>
      )}
    </div>
  );
}
