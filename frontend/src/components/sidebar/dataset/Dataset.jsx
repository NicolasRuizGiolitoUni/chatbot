import React, { useState } from "react";

const Dataset = ({ knowledgeDataSet, setKnowledgeDataSet }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setKnowledgeDataSet(e.target.result); // Store the file content
        console.log("File content:", e.target.result);
      };

      reader.onerror = (e) => {
        console.error("Error reading file:", e.target.error);
      };

      reader.readAsText(file); // Read the file as text
    }
  };

  return (
    <div className="feature-container dataset">
      <p>Dataset</p>
      <div className="feature-content dataset">
        <input type="file" accept=".txt" onChange={handleFileUpload} />
      </div>
    </div>
  );
};

export default Dataset;
