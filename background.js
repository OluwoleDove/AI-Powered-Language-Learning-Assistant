chrome.runtime.onInstalled.addListener(() => {
    console.log("GeminiLingo extension installed!");
  
    // Create context menu items
    chrome.contextMenus.create({
      id: "translate",
      title: "Translate Text",
      contexts: ["selection"] // Only show when text is selected
    });
  
    chrome.contextMenus.create({
      id: "summarize",
      title: "Summarize Text",
      contexts: ["selection"]
    });
  
    chrome.contextMenus.create({
      id: "detectLanguage",
      title: "Detect Language",
      contexts: ["selection"]
    });
  });
  
  // Listen for context menu item clicks
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "translate") {
      sendActionToContent(tab.id, "translate", info.selectionText);
    } else if (info.menuItemId === "summarize") {
      sendActionToContent(tab.id, "summarize", info.selectionText);
    } else if (info.menuItemId === "detectLanguage") {
      sendActionToContent(tab.id, "detect", info.selectionText);
    }
  });
  
  // Helper function to send action to the content script
  function sendActionToContent(tabId, action, text) {
    chrome.tabs.sendMessage(tabId, { action, text }, (response) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
      } else if (response && response.success) {
        console.log(`${action} result:`, response.result);
      }
    });
  }
  