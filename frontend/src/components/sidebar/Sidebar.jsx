import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import Instructions from "./instructions/Instructions";
import Model from "./model/model";

const Sidebar = ({
  setSystemPrompt,
  useOpenRouter,
  setUseOpenRouter,
  selectedOpenRouterModel,
  setSelectedOpenRouterModel,
}) => {
  return (
    <section className="side-bar">
      <Instructions setSystemPrompt={setSystemPrompt} />
      <Model
        setUseOpenRouter={setUseOpenRouter}
        selectedOpenRouterModel={selectedOpenRouterModel}
        setSelectedOpenRouterModel={setSelectedOpenRouterModel}
      />
    </section>
  );
};

export default Sidebar;
