chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "GeminiLingo",
      title: "Use GeminiLingo for AI Tasks",
      contexts: ["selection"],
    });
  });
  
  let selectedText = "";
  
  chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === "GeminiLingo" && info.selectionText) {
      selectedText = info.selectionText;
      chrome.runtime.sendMessage({ action: "storeSelectedText", text: selectedText });
    }
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getSelectedText") {
      sendResponse({ selectedText });
    } else if (message.action === "storeSelectedText") {
      selectedText = message.text;
      sendResponse({ success: true });
    }
  });
  