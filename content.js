// Listen for messages from background.js or popup.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "highlight") {
        highlightText(message.content);
        sendResponse({ status: "Highlighted text!" });
    }

    if (message.action === "showTooltip") {
        displayTooltip(message.content);
        sendResponse({ status: "Tooltip displayed!" });
    }
});

// Highlight selected text on the webpage
function highlightText(text) {
    const range = window.getSelection().getRangeAt(0);
    const span = document.createElement("span");
    span.textContent = text;
    span.style.backgroundColor = "yellow";
    range.deleteContents();
    range.insertNode(span);
}

// Display a tooltip with provided content
function displayTooltip(content) {
    const tooltip = document.createElement("div");
    tooltip.className = "gemini-tooltip";
    tooltip.textContent = content;
    tooltip.style.position = "fixed";
    tooltip.style.top = `${window.scrollY + 50}px`;
    tooltip.style.left = "50px";
    tooltip.style.background = "#333";
    tooltip.style.color = "white";
    tooltip.style.padding = "10px";
    tooltip.style.borderRadius = "5px";
    tooltip.style.zIndex = "9999";

    document.body.appendChild(tooltip);

    setTimeout(() => tooltip.remove(), 3000);
}
