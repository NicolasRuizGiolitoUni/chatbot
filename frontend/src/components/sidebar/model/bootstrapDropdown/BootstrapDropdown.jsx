import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const BootstrapDropdown = ({
  selectedOpenRouterModel,
  setSelectedOpenRouterModel,
}) => {
  const models = [
    "GPT-4o",
    "google/gemini-flash-1.5-8b",
    "meta-llama/llama-3.3-70b-instruct",
    "anthropic/claude-3.5-haiku",
  ];
  const handleSelect = (eventKey) => {
    setSelectedOpenRouterModel(eventKey);
  };

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        {selectedOpenRouterModel}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {models.map((model) => (
          <Dropdown.Item key={model} eventKey={model}>
            {model}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default BootstrapDropdown;
