chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "geminiTranslate",
        title: "Translate with GeminiLingo",
        contexts: ["selection"]
    });

    chrome.contextMenus.create({
        id: "geminiRewrite",
        title: "Rewrite with GeminiLingo",
        contexts: ["selection"]
    });

    chrome.contextMenus.create({
        id: "geminiSummarize",
        title: "Summarize with GeminiLingo",
        contexts: ["selection"]
    });

    console.log("GeminiLingo context menus created!");
});

// Handle context menu actions
chrome.contextMenus.onClicked.addListener((info) => {
    const { menuItemId, selectionText } = info;

    switch (menuItemId) {
        case "geminiTranslate":
            translateSelection(selectionText);
            break;
        case "geminiRewrite":
            rewriteSelection(selectionText);
            break;
        case "geminiSummarize":
            summarizeSelection(selectionText);
            break;
        default:
            console.warn("Unknown menu item selected");
    }
});

function translateSelection(text) {
    chrome.runtime.sendMessage(
        { action: "translate", text },
        (response) => alert(`Translation: ${response}`)
    );
}

function rewriteSelection(text) {
    chrome.runtime.sendMessage(
        { action: "rewrite", text },
        (response) => alert(`Rewritten Text: ${response}`)
    );
}

function summarizeSelection(text) {
    chrome.runtime.sendMessage(
        { action: "summarize", text },
        (response) => alert(`Summary: ${response}`)
    );
}
