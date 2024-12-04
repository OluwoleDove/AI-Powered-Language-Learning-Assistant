// options/options.js
document.addEventListener("DOMContentLoaded", () => {
    const languageSelect = document.getElementById("languageSelect");
    const vocabList = document.getElementById("vocabulary-list");
    const saveSettingsBtn = document.getElementById("saveSettingsBtn");
  
    // Load and display vocabulary from storage
    chrome.storage.sync.get(["vocabulary"], (data) => {
      const vocabulary = data.vocabulary || [];
      vocabulary.forEach((word) => {
        const listItem = document.createElement("li");
        listItem.innerText = word;
        vocabList.appendChild(listItem);
      });
    });
  
    saveSettingsBtn.addEventListener("click", () => {
      const selectedLang = languageSelect.value;
      chrome.storage.sync.set({ selectedLang }, () => {
        alert("Settings saved!");
      });
    });
  });
  