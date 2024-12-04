import {
    addToVocabulary,
    getVocabulary,
    removeFromVocabulary,
    translateText,
    summarizeText,
    rewriteText
  } from "../helpers/helpers.js";
  
  document.addEventListener("DOMContentLoaded", async () => {
    const languageSelect = document.getElementById("languageSelect");
  
    // Load saved settings for preferred language
    chrome.storage.sync.get(["preferredLanguage"], (data) => {
      if (data.preferredLanguage) {
        languageSelect.value = data.preferredLanguage;
      }
    });
  
    // Save preferred language settings
    document.getElementById("saveSettingsBtn").addEventListener("click", () => {
      const preferredLanguage = languageSelect.value;
      chrome.storage.sync.set({ preferredLanguage }, () => {
        alert("Settings saved successfully!");
      });
    });
  
    // Display vocabulary list
    const vocabList = document.getElementById("vocabulary-list");
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
  
    // Add word to vocabulary
    const addWordInput = document.createElement("input");
    addWordInput.placeholder = "Add new word...";
    const addBtn = document.createElement("button");
    addBtn.innerText = "Add Word";
    addBtn.addEventListener("click", async () => {
      const word = addWordInput.value.trim();
      if (word) {
        await addToVocabulary(word);
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
        addWordInput.value = ""; // Clear the input field
      }
    });
  
    // Add the add word input and button to the settings section
    const settingsSection = document.querySelector(".settings-section");
    settingsSection.appendChild(addWordInput);
    settingsSection.appendChild(addBtn);
  
    // Example usage of translateText, summarizeText, and rewriteText in the options page
    const translateBtn = document.createElement("button");
    translateBtn.innerText = "Translate Text";
    translateBtn.addEventListener("click", async () => {
      const textToTranslate = prompt("Enter text to translate:");
      if (textToTranslate) {
        const translation = await translateText(textToTranslate, "fr"); // Example to translate to French
        alert(`Translated text: ${translation}`);
      }
    });
  
    const summarizeBtn = document.createElement("button");
    summarizeBtn.innerText = "Summarize Text";
    summarizeBtn.addEventListener("click", async () => {
      const textToSummarize = prompt("Enter text to summarize:");
      if (textToSummarize) {
        const summary = await summarizeText(textToSummarize);
        alert(`Summarized text: ${summary}`);
      }
    });
  
    const rewriteBtn = document.createElement("button");
    rewriteBtn.innerText = "Rewrite Text";
    rewriteBtn.addEventListener("click", async () => {
      const textToRewrite = prompt("Enter text to rewrite:");
      if (textToRewrite) {
        const rewrittenText = await rewriteText(textToRewrite);
        alert(`Rewritten text: ${rewrittenText}`);
      }
    });
  
    // Add the buttons to the settings section
    settingsSection.appendChild(translateBtn);
    settingsSection.appendChild(summarizeBtn);
    settingsSection.appendChild(rewriteBtn);
  });
  