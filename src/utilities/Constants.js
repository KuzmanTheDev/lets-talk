export const WSMessageType = {
    UnauthorizedAccess: "UnauthorizedAccess",
    WebsocketOpen: "WebsocketOpen",
    RequestMessages: "RequestMessages",
    NewMessage: "NewMessage",
    JoinRoom: "JoinRoom",
    CreateRoom: "CreateRoom",
    SearchUser: "SearchUser",
    RequestUsersToJoinRoom: "RequestUsersToJoinRoom",
    SentRoomRequest: "SentRoomRequest",
    OnlineStatus: "OnlineStatus",
    ExitRoom: "ExitRoom",
    NewFileUpload: "NewFileUpload",
    UploadFileChunk: "UploadFileChunk",
    UploadFileError: "UploadFileError",
    FileUploadSuccess: "FileUploadSuccess",
    FileRequestDownload: "RequestDownload",
    DownloadFileChunk: "DownloadFileChunk",
    StartClassSession: "StartClassSession",
    ClassSession: "ClassSession",
    ClassSessionLink: "ClassSessionLink",
    JoinClassSession: "JoinClassSession",
    EndClassSession: "EndClassSession",
    NegotiateSDP: "NegotiateSDP",
    RenegotiateSDP: "RenegotiateSDP",
    ClassSessionError: "ClassSessionError",
}

export const DefaultChunkSize = 125 * 1024

export const SideBarOptions = {
    Notifications: "Notifications",
    Rooms: "Rooms",
    AddRoom: "AddRoom",
}

export const MessageType = {
    Info: "Info",
    Message: "Message",
    File: "File",
    ClassSession: "ClassSession",
    ClassSessionLink: "ClassSessionLink",
}

export const JoinedRoomsFilter = {
    All: "All",
    Unread: "Unread",
    Read: "Read",
}