import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const BootstrapDropdown = () => {
  const handleSelect = (eventKey) => {
    alert(`Selected: ${eventKey}`);
  };

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Select model
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="Option 1">GPT-4o</Dropdown.Item>
        <Dropdown.Item eventKey="Option 2">Gemini 1.5 Pro</Dropdown.Item>
        <Dropdown.Item eventKey="Option 3">Llama 3.1 405GB</Dropdown.Item>
        <Dropdown.Item eventKey="Option 4">Claude 3.5 Sonnet</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default BootstrapDropdown;
