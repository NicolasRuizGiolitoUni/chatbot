const { getOpenAIInstance } = require("../config/openai");

// Get completion from OpenAI API
exports.getCompletion = async (req, res) => {
  try {
    const {
      systemPrompt,
      chatLog,
      useOpenRouter,
      selectedOpenRouterModel,
      knowledgeDataSet,
    } = req.body;

    const model = useOpenRouter ? selectedOpenRouterModel : "gpt-4o";
    const dataset = knowledgeDataSet ? `\nDataset:\n${knowledgeDataSet}` : ""; // Include dataset if available

    console.log(`Using ${useOpenRouter ? "OpenRouter" : "OpenAI"} API`);
    console.log(`Selected model: ${model}`);

    const openai = getOpenAIInstance(useOpenRouter); // Get the appropriate OpenAI instance

    // Append dataset to the system prompt
    const updatedSystemPrompt = `
    ${systemPrompt}
    
    Dataset: 
    ${dataset}
    `;

    const conversation_history = [
      { role: "system", content: updatedSystemPrompt },
      ...chatLog.map((msg) => ({
        role: msg.role === "ai" ? "assistant" : "user",
        content: msg.text,
      })),
    ];

    const response = await openai.chat.completions.create({
      model: model,
      messages: conversation_history,
      max_tokens: 5000,
    });

    res.status(200).json({ completion: response.choices[0].message.content });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: error.message });
  }
};

// Generate configuration file
exports.generateConfig = async (req, res) => {
  try {
    const {
      systemPrompt,
      useOpenRouter,
      selectedOpenRouterModel,
      knowledgeDataSet,
    } = req.body;

    // Create the configuration object
    const config = {
      systemPrompt,
      useOpenRouter,
      selectedOpenRouterModel,
      knowledgeDataSet,
    };

    // Convert the configuration to a JSON string
    const configJson = JSON.stringify(config, null, 2);

    // Set headers to make the file downloadable
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=chatbot-config.json"
    );
    res.setHeader("Content-Type", "application/json");

    // Send the JSON string as the response
    res.status(200).send(configJson);
  } catch (error) {
    console.error("Error generating config file:", error);
    res.status(500).json({ error: error.message });
  }
};
