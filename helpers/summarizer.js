async function summarizeText(text) {
    try {
      const response = await fetch("https://api.gemini-nano.com/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
      });
      const result = await response.json();
      return result.summary;
    } catch (error) {
      console.error("Error summarizing text:", error);
      return "Summarization error!";
    }
  }
  