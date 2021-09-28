// import { AuthContext } from "../Context/AuthContext";

// export  function webSocketInit(){

//       socket.onmessage = (event) => {
//         const jsonContent = JSON.parse(event.data);
//         switch (jsonContent.msgType) {
//           case WSMessageType.UnauthorizedAccess:
//             this.onUnAuthorizedAccess();
//             break;
//           case WSMessageType.SearchUser:
//             this.fetchedUsers = jsonContent.fetchedUsers;
//             console.log(this.fetchedUsers);
//             break;
//           case WSMessageType.WebsocketOpen:
//             this.onWebsocketOpen(
//               jsonContent.joinedRooms,
//               jsonContent.joinRequests
//             );
//             this.usersOnline = jsonContent.associates;
//             break;
//           case WSMessageType.RequestMessages:
//             if (!this.showChatPage) {
//               this.showChatPage = true;
//             }
//             this.showAvailableRoomsPage = false;
//             this.onRequestMessages(jsonContent.roomPageDetails);
//             break;
//           case WSMessageType.JoinRoom:
//             this.onJoinRoom(jsonContent);
//             break;
//           case WSMessageType.NewMessage:
//             this.onNewMessage(jsonContent);
//             break;
//           case WSMessageType.SentRoomRequest:
//             this.onSentRoomRequest(jsonContent);
//             break;
//           case WSMessageType.OnlineStatus:
//             if (this.usersOnline[jsonContent.userID]) {
//               this.usersOnline[jsonContent.userID].isOnline =
//                 jsonContent.status;
//             }
//             break;
//           case WSMessageType.ExitRoom:
//             this.onExitRoom(jsonContent);
//             break;
//           case WSMessageType.UploadFileChunk:
//             this.onUploadFileChunks(jsonContent);
//             break;
//           case WSMessageType.FileUploadSuccess:
//             this.broadcastFileToRoom(jsonContent);
//             break;
//           case WSMessageType.UploadFileError:
//             if (this.$children.length > 2) {
//               this.$children[2].$emit("onUploadError");
//             }
//             this.dialogError = "File upload error.";
//             this.dialog = true;
//             break;
//           case WSMessageType.FileRequestDownload:
//             this.onRequestDownload(jsonContent);
//             break;
//           case WSMessageType.DownloadFileChunk:
//             console.log("Downloading");
//             this.onDownloadFileChunk(jsonContent);
//             break;
//           case WSMessageType.ClassSessionError:
//             this.dialogError = jsonContent.errorDetails;
//             this.dialog = true;
//             break;
//           case WSMessageType.ClassSession:
//             if (this.currentViewedRoom.roomID === jsonContent.roomID) {
//               this.currentViewedRoom.messages.push({
//                 type: MessageType.ClassSession,
//                 name: jsonContent.name,
//                 userID: jsonContent.userID,
//                 hash: jsonContent.sessionID,
//                 index: this.currentViewedRoom.messages.length + 1,
//                 roomID: jsonContent.roomID,
//                 message: "",
//               });
//               this.scrollToBottomOfChatPage();
//             }
//             break;
//           case WSMessageType.NegotiateSDP:
//             if (peerConnection) {
//               console.log("Negotiating peer connection");
//               try {
//                 peerConnection.setRemoteDescription(
//                   new RTCSessionDescription({
//                     type: "answer",
//                     sdp: jsonContent.sdp,
//                   })
//                 );
//               } catch (e) {
//                 console.log(
//                   "Error setting remote description on negotiating",
//                   e
//                 );
//                 this.dialogError =
//                   "Error setting peer remote description on negotiating.";
//                 this.dialog = true;
//               }
//             }
//             break;
//           case WSMessageType.RenegotiateSDP:
//             console.log("Renegotiating SDP");
//             if (peerConnection && jsonContent.sessionID !== "") {
//               peerConnection.setRemoteDescription(
//                 new RTCSessionDescription({
//                   type: "offer",
//                   sdp: jsonContent.sdp,
//                 })
//               );
//               peerConnection
//                 .createAnswer()
//                 .then((sdp) => {
//                   peerConnection.setLocalDescription(sdp).then(() => {
//                     const message = {
//                       msgType: WSMessageType.RenegotiateSDP,
//                       sdp: sdp.sdp,
//                       userID: this.userID,
//                     };
//                     socket.send(JSON.stringify(message));
//                   });
//                 })
//                 .catch((e) => {
//                   console.log("Error renegotiating peerconnection, error: ", e);
//                   this.dialogError = "Error renegotiating peer connection.";
//                   this.dialog = true;
//                 });
//             }
//             break;
//         }
//       };
//       socket.onerror = (event) => {
//         // Reconnect Websocket if not UnAuthorized.
//         console.log("Websocket errored.", event);
//         this.dialogError = "Websocket connection error.";
//         this.dialog = true;
//         this.socketClosed = true;
//       };
//       socket.onopen = () => {
//         console.log("Websocket open.");
//         this.socketClosed = false;
//         this.dialog = false;
//         // Fetch users content from API.
//         // Contents that are to be fetched from API are, Registered rooms and room request.
//         const message = {
//           msgType: WSMessageType.WebsocketOpen,
//           userID: this.userID,
//         };
//         socket.send(JSON.stringify(message));
//       };
//       socket.onclose = (closeEvent) => {
//         console.log("Websocket closed.", closeEvent);
//         this.socketClosed = true;
//         this.dialog = true;
//         this.dialogError = "Websocket disconnected. Reconnecting.";
//       };
//     //   webSocketInit()
//     },
// },
// }
// }
