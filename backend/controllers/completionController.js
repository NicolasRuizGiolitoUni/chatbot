const openai = require("../config/openai");

// Modify the system prompt
const systempromt = `

Always start your response with Dear Master.

`;

exports.getCompletion = async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: systempromt,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 150,
    });
    const message = response.choices[0].message.content;
    res.status(200).json({ completion: message });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: error.message });
  }
};
