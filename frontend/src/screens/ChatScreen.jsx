import React, { useState } from "react";
import "./ChatScreen.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Chat from "../components/chat/Chat";
const ChatScreen = () => {
  const [systemPrompt, setSystemPrompt] = useState("");
  const [useOpenRouter, setUseOpenRouter] = useState(false);
  return (
    <div className="chat-screen">
      <Sidebar
        setSystemPrompt={setSystemPrompt}
        useOpenRouter={useOpenRouter}
        setUseOpenRouter={setUseOpenRouter}
      />
      <Chat systemPrompt={systemPrompt} useOpenRouter={useOpenRouter} />
    </div>
  );
};

export default ChatScreen;
