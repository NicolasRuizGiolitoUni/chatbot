const { getOpenAIInstance } = require("../config/openai");

exports.getCompletion = async (req, res) => {
  try {
    const { systemPrompt, chatLog, useOpenRouter } = req.body;
    console.log(`Using ${useOpenRouter ? "OpenRouter" : "OpenAI"} API`);

    const openai = getOpenAIInstance(useOpenRouter); // Get the appropriate OpenAI instance

    const conversation_history = [
      { role: "system", content: systemPrompt },
      ...chatLog.map((msg) => ({
        role: msg.role === "ai" ? "assistant" : "user",
        content: msg.text,
      })),
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: conversation_history,
      max_tokens: 150,
    });

    res.status(200).json({ completion: response.choices[0].message.content });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: error.message });
  }
};
