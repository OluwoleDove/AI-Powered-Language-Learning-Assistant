// Add a word to vocabulary
async function addToVocabulary(word) {
    chrome.storage.sync.get(["vocabulary"], (data) => {
        const vocabulary = data.vocabulary || [];
        if (!vocabulary.includes(word)) {
            vocabulary.push(word);
            chrome.storage.sync.set({ vocabulary }, () => {
                console.log(`Word "${word}" added to vocabulary.`);
            });
        }
    });
}

// Get all vocabulary
async function getVocabulary() {
    return new Promise((resolve) => {
        chrome.storage.sync.get(["vocabulary"], (data) => {
            resolve(data.vocabulary || []);
        });
    });
}

// Remove a word from vocabulary
async function removeFromVocabulary(word) {
    chrome.storage.sync.get(["vocabulary"], (data) => {
        const vocabulary = (data.vocabulary || []).filter((item) => item !== word);
        chrome.storage.sync.set({ vocabulary }, () => {
            console.log(`Word "${word}" removed from vocabulary.`);
        });
    });
}

// Example Usage (Remove these in production)
(async () => {
    await addToVocabulary("bonjour");
    const vocab = await getVocabulary();
    console.log("Vocabulary:", vocab);
})();
