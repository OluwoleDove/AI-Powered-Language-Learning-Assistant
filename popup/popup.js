document.addEventListener("DOMContentLoaded", () => {
    const translateBtn = document.getElementById("translate-btn");
    const summarizeBtn = document.getElementById("summarize-btn");
    const rewriteBtn = document.getElementById("rewrite-btn");
    const vocabBtn = document.getElementById("vocab-btn");
    const resultDiv = document.getElementById("result");
    const selectedTextParagraph = document.getElementById("selected-text");
  
    // Get selected text from background script
    chrome.runtime.sendMessage({ action: "getSelectedText" }, (response) => {
      if (response && response.selectedText) {
        selectedTextParagraph.textContent = `Selected Text: "${response.selectedText}"`;
      } else {
        selectedTextParagraph.textContent = "Select text to get started.";
      }
    });
  
    const displayResult = (message) => {
      resultDiv.textContent = message;
    };
  
    translateBtn.addEventListener("click", async () => {
      chrome.runtime.sendMessage({ action: "getSelectedText" }, async (response) => {
        if (response.selectedText) {
          const translated = await window.translateText(response.selectedText);
          displayResult(`Translated: ${translated}`);
        }
      });
    });
  
    summarizeBtn.addEventListener("click", async () => {
      chrome.runtime.sendMessage({ action: "getSelectedText" }, async (response) => {
        if (response.selectedText) {
          const summary = await window.summarizeText(response.selectedText);
          displayResult(`Summary: ${summary}`);
        }
      });
    });
  
    rewriteBtn.addEventListener("click", async () => {
      chrome.runtime.sendMessage({ action: "getSelectedText" }, async (response) => {
        if (response.selectedText) {
          const rewritten = await window.rewriteText(response.selectedText);
          displayResult(`Rewritten: ${rewritten}`);
        }
      });
    });
  
    vocabBtn.addEventListener("click", async () => {
      chrome.runtime.sendMessage({ action: "getSelectedText" }, async (response) => {
        if (response.selectedText) {
          await window.addToVocabulary(response.selectedText);
          displayResult(`Added to Vocabulary: "${response.selectedText}"`);
        }
      });
    });
  });
  