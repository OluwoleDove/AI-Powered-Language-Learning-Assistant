chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "GeminiLingo",
      title: "Use GeminiLingo for AI Tasks",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId === "GeminiLingo") {
      const selectedText = info.selectionText;
      if (selectedText) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: (text) => alert(`Processing text: "${text}"`),
          args: [selectedText]
        });
      }
    }
  });
  