document.addEventListener("DOMContentLoaded", () => {
    const inputText = document.getElementById("inputText");
    const output = document.getElementById("output");
  
    const apiCall = async (endpoint, data) => {
      try {
        const response = await fetch(`https://api.gemini-nano.com/${endpoint}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });
        const result = await response.json();
        return result;
      } catch (error) {
        console.error("API Error:", error);
        return { error: "Failed to connect to server." };
      }
    };
  
    const translate = async () => {
      const text = inputText.value.trim();
      if (text) {
        const result = await apiCall("translate", { text });
        output.textContent = result.translation || result.error;
      }
    };
  
    const summarize = async () => {
      const text = inputText.value.trim();
      if (text) {
        const result = await apiCall("summarize", { text });
        output.textContent = result.summary || result.error;
      }
    };
  
    const rewrite = async () => {
      const text = inputText.value.trim();
      if (text) {
        const result = await apiCall("rewrite", { text });
        output.textContent = result.rewrittenText || result.error;
      }
    };
  
    const saveWord = () => {
      const word = inputText.value.trim();
      if (word) {
        chrome.storage.sync.get(["vocabulary"], (data) => {
          const vocabulary = data.vocabulary || [];
          if (!vocabulary.includes(word)) {
            vocabulary.push(word);
            chrome.storage.sync.set({ vocabulary }, () => {
              alert(`Saved "${word}" to your vocabulary!`);
            });
          } else {
            alert(`"${word}" is already in your vocabulary.`);
          }
        });
      }
    };
  
    document.getElementById("translateBtn").addEventListener("click", translate);
    document.getElementById("summarizeBtn").addEventListener("click", summarize);
    document.getElementById("rewriteBtn").addEventListener("click", rewrite);
    document.getElementById("saveBtn").addEventListener("click", saveWord);
  });
  