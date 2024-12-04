async function rewriteText(text) {
    try {
      const response = await fetch("https://api.gemini-nano.com/rewrite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const result = await response.json();
      return result.rewrittenText;
    } catch (error) {
      console.error("Error rewriting text:", error);
      return "Rewriting error!";
    }
  }
  
  // Expose to global scope
  window.rewriteText = rewriteText;
  