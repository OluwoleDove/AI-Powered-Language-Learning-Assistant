document.addEventListener("DOMContentLoaded", async () => {
    const languageSelect = document.getElementById("languageSelect");
  
    // Load saved settings
    chrome.storage.sync.get(["preferredLanguage"], (data) => {
      if (data.preferredLanguage) {
        languageSelect.value = data.preferredLanguage;
      }
    });
  
    // Save settings
    document.getElementById("saveSettingsBtn").addEventListener("click", () => {
      const preferredLanguage = languageSelect.value;
      chrome.storage.sync.set({ preferredLanguage }, () => {
        alert("Settings saved successfully!");
      });
    });
  
    // Vocabulary display
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
  });
  