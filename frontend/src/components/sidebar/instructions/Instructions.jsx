import React, { useState, useEffect } from "react";

const Instructions = ({ setSystemPrompt }) => {
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
    <div className="feature-container instructions">
      <p>Instructions</p>
      <div className="feature-content instructions">
        <textarea
          className="user-input"
          value={localSystemPrompt}
          onChange={(e) => setLocalSystemPrompt(e.target.value)}
        ></textarea>
        <div className="button-container">
          <button
            className={`side-bar-button ${isButtonDisabled ? "disabled" : ""}`}
            onClick={handleApply}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
