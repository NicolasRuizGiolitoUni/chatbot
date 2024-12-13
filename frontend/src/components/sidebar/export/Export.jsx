import React from "react";

const Export = ({ chatLog }) => {
  const exportChat = () => {
    console.log("Chatlog:", chatLog);
    if (!chatLog || chatLog.length === 0) {
      console.error("Chat log is empty or undefined.");
      alert("No chat to export!");
      return;
    }

    const chatText = chatLog
      .map((entry) => `[${entry.role}]: ${entry.text}`)
      .join("\n");

    const blob = new Blob([chatText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "chat-log.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="feature-container export">
      <p>Export</p>
      <div className="feature-content">
        <div className="button-container">
          <button className="side-bar-button" onClick={exportChat}>
            Download Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Export;
