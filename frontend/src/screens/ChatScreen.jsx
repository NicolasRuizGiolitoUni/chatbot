import React from "react";
import "./ChatScreen.css";
import Sidebar from "../components/sidebar/Sidebar";
import Chat from "../components/chat/Chat";
const ChatScreen = () => {
  return (
    <div className="chat-screen">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default ChatScreen;
