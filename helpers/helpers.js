export async function translateText(text, targetLang = "en") {
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

export async function summarizeText(text) {
  try {
    const response = await fetch("https://api.gemini-nano.com/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const result = await response.json();
    return result.summary;
  } catch (error) {
    console.error("Error summarizing text:", error);
    return "Summarization error!";
  }
}

export async function rewriteText(text) {
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

export async function addToVocabulary(word) {
  chrome.storage.sync.get(["vocabulary"], (data) => {
    const vocabulary = data.vocabulary || [];
    if (!vocabulary.includes(word)) {
      vocabulary.push(word);
      chrome.storage.sync.set({ vocabulary });
    }
  });
}

export async function getVocabulary() {
  return new Promise((resolve) => {
    chrome.storage.sync.get(["vocabulary"], (data) => {
      resolve(data.vocabulary || []);
    });
  });
}

export async function removeFromVocabulary(word) {
  chrome.storage.sync.get(["vocabulary"], (data) => {
    const vocabulary = (data.vocabulary || []).filter((item) => item !== word);
    chrome.storage.sync.set({ vocabulary });
  });
}
