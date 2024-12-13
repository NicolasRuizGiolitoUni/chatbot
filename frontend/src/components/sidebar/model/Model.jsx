import React, { useState } from "react";
import "./Model.css";
import BootstrapDropdown from "./bootstrapDropdown/BootstrapDropdown";

const Model = ({ useOpenRouter, setUseOpenRouter }) => {
  const [activeButton, setActiveButton] = useState("openai");

  const handleButtonClick = (button) => {
    setActiveButton(button);
    if (button === "openai") {
      setUseOpenRouter(false);
    } else {
      setUseOpenRouter(true);
    }
  };

  return (
    <div className="feature-container model">
      <p> Model</p>
      <div className="feature-content model">
        <div className="button-container">
          <div
            className={`model-button openai ${
              activeButton === "openai" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("openai")}
          >
            Open AI
          </div>
          <div
            className={`model-button openrouter ${
              activeButton === "openrouter" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("openrouter")}
          >
            Open Router
          </div>
        </div>
        {activeButton === "openrouter" && (
          <div className="boostrap-container">
            <BootstrapDropdown />
          </div>
        )}
      </div>
    </div>
  );
};

export default Model;
