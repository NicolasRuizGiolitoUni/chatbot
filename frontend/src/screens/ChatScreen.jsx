import React, { useState } from "react";
import "./ChatScreen.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Chat from "../components/chat/Chat";
const ChatScreen = () => {
  const [systemPrompt, setSystemPrompt] = useState("");
  const [useOpenRouter, setUseOpenRouter] = useState(false);
  const [selectedOpenRouterModel, setSelectedOpenRouterModel] =
    useState("GPT-4o");
  return (
    <div className="chat-screen">
      <Sidebar
        setSystemPrompt={setSystemPrompt}
        useOpenRouter={useOpenRouter}
        setUseOpenRouter={setUseOpenRouter}
        selectedOpenRouterModel={selectedOpenRouterModel}
        setSelectedOpenRouterModel={setSelectedOpenRouterModel}
      />
      <Chat
        systemPrompt={systemPrompt}
        useOpenRouter={useOpenRouter}
        selectedOpenRouterModel={selectedOpenRouterModel}
      />
    </div>
  );
};

export default ChatScreen;
