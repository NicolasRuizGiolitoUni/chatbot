import React, { useState } from "react";
import ChatMessage from "../chat-message/ChatMessage";
import "./Chat.css";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);

  // Submitting the message by clicking on send icon
  async function handleSubmit() {
    if (message.trim() === "") return;

    // Adding user message to chat log
    setChatLog([...chatLog, { id: Date.now(), role: "user", text: message }]);

    const currentChatLog = [
      ...chatLog,
      { id: Date.now(), role: "user", text: message },
    ];

    console.log("Chat log sent to backend:", currentChatLog);

    // Clearing the input field
    setMessage("");

    // Fetching response from the server
    try {
      const repsonse = await fetch("http://localhost:5000/api/completion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chatLog: currentChatLog }), // send the whole chat log to the server to get the whole conversation context
      });
      if (!repsonse.ok) {
        throw new Error("Failed to fetch response from server");
      }
      const data = await repsonse.json();

      // Adding AI response to chat log
      setChatLog((prevChatLog) => [
        ...prevChatLog,
        { id: Date.now(), role: "ai", text: data.completion },
      ]);
    } catch (error) {
      console.error("Error: ", error);

      setChatLog((prevChatLog) => [
        ...prevChatLog, // current chat log
        {
          id: Date.now(),
          role: "ai",
          text: "Sorry, I am not able to process your request at the moment.",
        },
      ]);
    }
  }

  //Submiting the message by pressing enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <section className="chat-area">
      <header>
        <h1>ChatBOT</h1>
      </header>
      <div className="chat-log">
        <ChatMessage chatLog={chatLog} />
      </div>
      <div className="bottom-section">
        <div className="input-container">
          <textarea
            className="text-input"
            placeholder="Type something"
            onKeyDown={handleKeyPress}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <span className="material-symbols-outlined" onClick={handleSubmit}>
            send
          </span>
        </div>
      </div>
    </section>
  );
};

export default Chat;
