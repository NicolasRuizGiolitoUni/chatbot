const openai = require("../config/openai");

exports.getCompletion = async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.createCompletion({
      model: "text-davinci-003", // You can choose other models like "gpt-3.5-turbo"
      prompt,
      max_tokens: 150,
    });
    res.status(200).json({ completion: response.data.choices[0].text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
