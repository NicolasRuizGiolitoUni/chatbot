import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import Instructions from "./instructions/Instructions";
import Model from "./model/model";
import Dataset from "./dataset/Dataset";
import Export from "./export/Export";

const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  systemPrompt,
  setSystemPrompt,
  useOpenRouter,
  setUseOpenRouter,
  selectedOpenRouterModel,
  setSelectedOpenRouterModel,
  knowledgeDataSet,
  setKnowledgeDataSet,
  chatLog,
  exportOutput,
  setExportOutput,
}) => {
  return (
    <>
      <section className="side-bar">
        <span
          className="material-symbols-outlined sidebar close"
          onClick={() => {
            setIsSidebarOpen(false);
          }}
        >
          dock_to_right
        </span>
        <Instructions setSystemPrompt={setSystemPrompt} />
        <Dataset
          knowledgeDataSet={knowledgeDataSet}
          setKnowledgeDataSet={setKnowledgeDataSet}
        />
        <Model
          setUseOpenRouter={setUseOpenRouter}
          selectedOpenRouterModel={selectedOpenRouterModel}
          setSelectedOpenRouterModel={setSelectedOpenRouterModel}
        />
        <Export
          chatLog={chatLog}
          systemPrompt={systemPrompt}
          useOpenRouter={useOpenRouter}
          selectedOpenRouterModel={selectedOpenRouterModel}
          knowledgeDataSet={knowledgeDataSet} // TODO: do we need this?
          exportOutput={exportOutput}
          setExportOutput={setExportOutput}
        />
      </section>
    </>
  );
};

export default Sidebar;
