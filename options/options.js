document.addEventListener("DOMContentLoaded", () => {
    const languageSelect = document.getElementById("languageSelect");
  
    // Load saved settings
    chrome.storage.sync.get(["preferredLanguage"], (data) => {
      if (data.preferredLanguage) {
        languageSelect.value = data.preferredLanguage;
      }
    });
  
    document.getElementById("saveSettingsBtn").addEventListener("click", () => {
      const preferredLanguage = languageSelect.value;
      chrome.storage.sync.set({ preferredLanguage }, () => {
        alert("Settings saved successfully!");
      });
    });
  });
  