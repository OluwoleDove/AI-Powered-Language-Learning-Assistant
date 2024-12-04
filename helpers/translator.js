async function translateText(text, targetLang = "en") {
    try {
      const response = await fetch("https://api.gemini-nano.com/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, targetLang }),
      });
      const result = await response.json();
      return result.translation;
    } catch (error) {
      console.error("Error translating text:", error);
      return "Translation error!";
    }
  }
  
  // Expose to global scope
  window.translateText = translateText;
  