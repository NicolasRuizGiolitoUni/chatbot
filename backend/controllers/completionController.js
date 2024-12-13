const { openai, useOpenRouter } = require("../config/openai");

exports.getCompletion = async (req, res) => {
  try {
    console.log("Request Body Received:", req.body);
    console.log(`Using ${useOpenRouter ? "OpenRouter" : "OpenAI"} API`);
    const { systemPrompt, chatLog } = req.body;

    // Extracting user messages from chat log into OpenAI format
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
    const message = response.choices[0].message.content;
    res.status(200).json({ completion: message });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: error.message });
  }
};
