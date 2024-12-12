import React from "react";
import "./ChatMessage.css";

const ChatMessage = ({ chatLog }) => {
  return (
    <>
      {chatLog.map((message) => (
        <div key={message.id} className={`chat-item ${message.role}`}>
          {message.role === "ai" && ( // If role is AI, then display AI avatar
            <span className="material-symbols-outlined ai-avatar">
              smart_toy
            </span>
          )}
          <div className="chat-item-message-content">{message.text}</div>
        </div>
      ))}
    </>
  );
};

export default ChatMessage;
