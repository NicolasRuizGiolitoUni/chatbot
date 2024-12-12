import React, { useState, useEffect } from "react";
import "./Sidebar.css";

const Sidebar = ({ setSystemPrompt }) => {
  const [localSystemPrompt, setLocalSystemPrompt] = useState(""); // Local input value
  const [previousSystemPrompt, setPreviousSystemPrompt] = useState(""); // Tracks the last applied instruction
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Tracks if the button is disabled

  useEffect(() => {
    // Disable the button if:
    // 1. The text area is empty.
    // 2. The current input matches the last applied instruction.
    setIsButtonDisabled(
      localSystemPrompt.trim() === "" ||
        localSystemPrompt === previousSystemPrompt
    );
  }, [localSystemPrompt, previousSystemPrompt]);

  // Update the system prompt when pressing the apply button
  const handleApply = () => {
    if (isButtonDisabled) return; // Do nothing if the button is disabled
    console.log("Applying instruction:", localSystemPrompt); // Log the instruction
    setSystemPrompt(localSystemPrompt); // Apply the instruction
    setPreviousSystemPrompt(localSystemPrompt); // Update the last applied instruction
  };

  return (
    <section className="side-bar">
      <div className="feature-container">
        <p>Instructions</p>
        <textarea
          className="systemprompt-input"
          value={localSystemPrompt}
          onChange={(e) => setLocalSystemPrompt(e.target.value)}
        ></textarea>
        <button
          className={`side-bar-button ${isButtonDisabled ? "disabled" : ""}`}
          onClick={handleApply}
        >
          apply
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
