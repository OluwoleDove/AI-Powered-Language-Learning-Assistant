// Set up the context menu when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "GeminiLingo",
      title: "Use GeminiLingo for AI Tasks",
      contexts: ["selection"],
    });
  });
  
  // Handle context menu clicks
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "GeminiLingo" && info.selectionText) {
      chrome.runtime.sendMessage({
        action: "processText",
        text: info.selectionText,
      });
    }
  });
  
  // Message listener for communication with popup or content scripts
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "processText") {
      console.log(`Processing text: "${message.text}"`);
      // Handle text processing or call APIs here
      sendResponse({ status: "success", text: `Processed: "${message.text}"` });
    }
  });
  