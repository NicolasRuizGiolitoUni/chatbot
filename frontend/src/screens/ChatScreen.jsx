import React, { useState } from "react";
import "./ChatScreen.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Chat from "../components/chat/Chat";
const ChatScreen = () => {
  const [chatLog, setChatLog] = useState([]);
  const [systemPrompt, setSystemPrompt] = useState("");
  const [useOpenRouter, setUseOpenRouter] = useState(false);
  const [selectedOpenRouterModel, setSelectedOpenRouterModel] =
    useState("GPT-4o");
  const [knowledgeDataSet, setKnowledgeDataSet] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="chat-screen">
      {isSidebarOpen && (
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          setSystemPrompt={setSystemPrompt}
          useOpenRouter={useOpenRouter}
          setUseOpenRouter={setUseOpenRouter}
          selectedOpenRouterModel={selectedOpenRouterModel}
          setSelectedOpenRouterModel={setSelectedOpenRouterModel}
          knowledgeDataSet={knowledgeDataSet}
          setKnowledgeDataSet={setKnowledgeDataSet}
          chatLog={chatLog}
        />
      )}
      <Chat
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        systemPrompt={systemPrompt}
        useOpenRouter={useOpenRouter}
        selectedOpenRouterModel={selectedOpenRouterModel}
        knowledgeDataSet={knowledgeDataSet}
        chatLog={chatLog}
        setChatLog={setChatLog}
      />
    </div>
  );
};

export default ChatScreen;
