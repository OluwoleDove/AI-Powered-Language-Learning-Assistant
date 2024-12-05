document.getElementById("saveBtn").addEventListener("click", () => {
    const defaultLang = document.getElementById("defaultLang").value;
    chrome.storage.sync.set({ defaultLang }, () => {
      alert("Settings saved!");
    });
  });
  
  // Load saved language on page load
  chrome.storage.sync.get("defaultLang", (data) => {
    if (data.defaultLang) {
      document.getElementById("defaultLang").value = data.defaultLang;
    }
  });
  