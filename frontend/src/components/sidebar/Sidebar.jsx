import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import Instructions from "./instructions/Instructions";
import Model from "./model/model";
import Dataset from "./dataset/Dataset";
import Export from "./export/Export";

const Sidebar = ({
  setSystemPrompt,
  useOpenRouter,
  setUseOpenRouter,
  selectedOpenRouterModel,
  setSelectedOpenRouterModel,
  knowledgeDataSet,
  setKnowledgeDataSet,
  chatLog,
}) => {
  return (
    <section className="side-bar">
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
      <Export chatLog={chatLog} />
    </section>
  );
};

export default Sidebar;
