// popup/popup.js
import {
    translateText,
    summarizeText,
    rewriteText,
    addToVocabulary,
    getVocabulary,
    removeFromVocabulary
  } from "../helpers/helpers.js";
  
  document.addEventListener("DOMContentLoaded", async () => {
    const translateBtn = document.getElementById("translateBtn");
    const summarizeBtn = document.getElementById("summarizeBtn");
    const rewriteBtn = document.getElementById("rewriteBtn");
    const vocabList = document.getElementById("vocabulary-list");
  
    // Fetch and display the vocabulary in the popup
    const vocabulary = await getVocabulary();
    vocabulary.forEach((word) => {
      const listItem = document.createElement("li");
      listItem.innerText = word;
  
      const removeBtn = document.createElement("button");
      removeBtn.innerText = "Remove";
      removeBtn.addEventListener("click", async () => {
        await removeFromVocabulary(word);
        listItem.remove();
      });
  
      listItem.appendChild(removeBtn);
      vocabList.appendChild(listItem);
    });
  
    // Translate Text Functionality
    translateBtn.addEventListener("click", async () => {
      const textToTranslate = prompt("Enter text to translate:");
      if (textToTranslate) {
        const translation = await translateText(textToTranslate, "fr"); // Translate to French
        alert(`Translated text: ${translation}`);
      }
    });
  
    // Summarize Text Functionality
    summarizeBtn.addEventListener("click", async () => {
      const textToSummarize = prompt("Enter text to summarize:");
      if (textToSummarize) {
        const summary = await summarizeText(textToSummarize);
        alert(`Summarized text: ${summary}`);
      }
    });
  
    // Rewrite Text Functionality
    rewriteBtn.addEventListener("click", async () => {
      const textToRewrite = prompt("Enter text to rewrite:");
      if (textToRewrite) {
        const rewrittenText = await rewriteText(textToRewrite);
        alert(`Rewritten text: ${rewrittenText}`);
      }
    });
  });
  