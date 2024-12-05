const translateAction = {
    action: "translate",
    text: "Hello, how are you?",
    sourceLang: "en",
    targetLang: "es"
  };
  
  const summarizeAction = {
    action: "summarize",
    text: "This is a long paragraph that needs summarization...",
    options: {
      length: "short",
      sharedContext: "General context."
    }
  };
  
  function sendTranslateRequest() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, translateAction, function(response) {
        if (response.success) {
          console.log("Translation successful:", response.translatedText);
        } else {
          console.error("Translation failed:", response.message);
        }
      });
    });
  }
  
  function sendSummarizeRequest() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, summarizeAction, function(response) {
        if (response.success) {
          console.log("Summarization successful:", response.summary);
        } else {
          console.error("Summarization failed:", response.message);
        }
      });
    });
  }
  
  // Example usage:
  // sendTranslateRequest();  // Call to translate the text
  // sendSummarizeRequest();  // Call to summarize the text
  