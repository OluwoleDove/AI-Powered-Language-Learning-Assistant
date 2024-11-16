document.getElementById("review-vocab").addEventListener("click", async () => {
    const vocab = await getVocabulary();
    alert("Your vocabulary: " + vocab.join(", "));
});

document.getElementById("settings").addEventListener("click", () => {
    chrome.runtime.openOptionsPage();
});
