require("dotenv").config();
const { OpenAI } = require("openai");

const useOpenRouter = process.env.USE_OPEN_ROUTER === "true";
console.log("USE_OPENROUTER:", process.env.USE_OPENROUTER);

const openai = new OpenAI({
  apiKey: useOpenRouter
    ? process.env.OPENROUTER_API_KEY
    : process.env.OPENAI_API_KEY,
  baseURL: useOpenRouter
    ? "https://openrouter.ai/api/v1"
    : "https://api.openai.com/v1",
});

module.exports = { openai, useOpenRouter };
