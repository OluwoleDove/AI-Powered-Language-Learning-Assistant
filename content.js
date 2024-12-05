chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "translate") {
      console.log("Translating text:", request.text);
      translateText(request.text, "en", "es").then((result) => {
        sendResponse({ success: true, result });
      }).catch((error) => {
        console.error("Translation failed:", error);
        sendResponse({ success: false, message: error.message });
      });
    } else if (request.action === "summarize") {
      console.log("Summarizing text:", request.text);
      summarizeText(request.text).then((summary) => {
        sendResponse({ success: true, result: summary });
      }).catch((error) => {
        console.error("Summarization failed:", error);
        sendResponse({ success: false, message: error.message });
      });
    } else if (request.action === "detect") {
      console.log("Detecting language:", request.text);
      detectLanguage(request.text).then((language) => {
        sendResponse({ success: true, result: language });
      }).catch((error) => {
        console.error("Language detection failed:", error);
        sendResponse({ success: false, message: error.message });
      });
    }
  
    return true; // Ensures the response is sent asynchronously
  });
  