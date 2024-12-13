const { getOpenAIInstance } = require("../config/openai");

exports.getCompletion = async (req, res) => {
  try {
    const {
      systemPrompt,
      chatLog,
      useOpenRouter,
      selectedOpenRouterModel,
      knowledgeDataSet,
    } = req.body;

    const model = useOpenRouter ? selectedOpenRouterModel : "gpt-3.5-turbo";
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
      max_tokens: 150,
    });

    res.status(200).json({ completion: response.choices[0].message.content });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: error.message });
  }
};
