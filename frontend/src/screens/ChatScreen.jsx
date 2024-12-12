import React, { useState } from "react";
import "./ChatScreen.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Chat from "../components/chat/Chat";
const ChatScreen = () => {
  const [systemPrompt, setSystemPrompt] = useState("");
  return (
    <div className="chat-screen">
      <Sidebar setSystemPrompt={setSystemPrompt} />
      <Chat systemPrompt={systemPrompt} />
    </div>
  );
};

export default ChatScreen;
