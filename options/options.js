// Load stored preferences on load
document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.sync.get(["preferredLanguage", "vocabulary"], (data) => {
        const languageSelect = document.getElementById("language-select");
        if (data.preferredLanguage) {
            languageSelect.value = data.preferredLanguage;
        }
    });
});

// Save preferred language
document.getElementById("language-select").addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    chrome.storage.sync.set({ preferredLanguage: selectedLanguage }, () => {
        alert("Preferred language saved!");
    });
});

// Clear vocabulary
document.getElementById("clear-vocab").addEventListener("click", () => {
    chrome.storage.sync.set({ vocabulary: [] }, () => {
        document.getElementById("vocab-status").innerText = "Vocabulary cleared!";
    });
});
