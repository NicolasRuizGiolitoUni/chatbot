// API call to fetch chat completion from the server
export async function fetchChatCompletion({
  chatLog,
  systemPrompt,
  useOpenRouter,
  selectedOpenRouterModel,
  knowledgeDataSet,
}) {
  try {
    const response = await fetch("http://localhost:5000/api/completion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chatLog,
        systemPrompt,
        useOpenRouter,
        selectedOpenRouterModel,
        knowledgeDataSet,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch response from server");
    }

    const data = await response.json();
    return data.completion;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
}
