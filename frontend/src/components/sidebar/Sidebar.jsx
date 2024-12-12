import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ setSystemPrompt }) => {
  const handleSystemPromptChange = (e) => {
    setSystemPrompt(e.target.value); // update the parent systemprompt state
  };

  return (
    <section className="side-bar">
      <div className="feature-container">
        <p>Instructions</p>
        <textarea
          className="systemprompt-input"
          onChange={handleSystemPromptChange}
        ></textarea>
      </div>
    </section>
  );
};

export default Sidebar;
