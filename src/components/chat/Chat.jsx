import React from "react";
import "./Chat.css";

const Chat = () => {
  return (
    <section className="chat">
      <header>
        <h1>ChatBOT</h1>
      </header>
      <div className="bottom-section">
        <div className="input-container">
          <textarea
            className="text-input"
            placeholder="Type something"
          ></textarea>
          <span class="material-symbols-outlined">send</span>
        </div>
      </div>
    </section>
  );
};

export default Chat;
