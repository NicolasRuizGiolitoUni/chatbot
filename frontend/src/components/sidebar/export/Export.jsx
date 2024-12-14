import React, { useState } from "react";
import { fetchChatCompletion, handleDownloadConfig } from "../../../api/api";
import "./Export.css";

const Export = ({
  chatLog,
  systemPrompt,
  useOpenRouter,
  selectedOpenRouterModel,
  knowledgeDataSet,
}) => {
  const [exportInstructions, setExportInstructions] = useState("");

  const handleExportOutput = async () => {
    if (exportInstructions.trim() === "") {
      alert("No instructions to export!");
      return;
    }

    try {
      const updatedChatLog = [
        ...chatLog,
        { id: Date.now(), role: "user", text: exportInstructions },
      ];

      const apiResponse = await fetchChatCompletion({
        chatLog: updatedChatLog,
        systemPrompt,
        useOpenRouter,
        selectedOpenRouterModel,
        knowledgeDataSet,
      });

      const blob = new Blob([apiResponse], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "export-output.txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error fetching or exporting output:", error);
      alert("Failed to export output. Please try again.");
    }
  };

  const exportChat = () => {
    if (!chatLog || chatLog.length === 0) {
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

  const downloadConfig = async () => {
    try {
      const config = {
        systemPrompt,
        useOpenRouter,
        selectedOpenRouterModel,
        knowledgeDataSet,
      };

      await handleDownloadConfig(config); // Call the API function to handle config download
    } catch (error) {
      console.error("Error downloading config:", error);
      alert("Failed to download config file. Please try again.");
    }
  };

  return (
    <div className="feature-container export">
      <p>Export</p>
      <div className="feature-content">
        <textarea
          className="user-input"
          placeholder="Enter instructions for export..."
          value={exportInstructions}
          onChange={(e) => setExportInstructions(e.target.value)}
        ></textarea>
        <div className="button-container export">
          <button
            className={`side-bar-button download-output ${
              exportInstructions.trim() === "" ? "disabled" : ""
            }`}
            onClick={handleExportOutput}
          >
            Download Output
          </button>
          <button
            className={`side-bar-button download-output ${
              !chatLog || chatLog.length === 0 ? "disabled" : ""
            }`}
            onClick={exportChat}
          >
            Download Chat
          </button>
          <button className="side-bar-button config" onClick={downloadConfig}>
            Download Config
          </button>
        </div>
      </div>
    </div>
  );
};

export default Export;
