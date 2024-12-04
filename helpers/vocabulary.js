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
  
  async function getVocabulary() {
    return new Promise((resolve) => {
      chrome.storage.sync.get(["vocabulary"], (data) => {
        resolve(data.vocabulary || []);
      });
    });
  }
  
  async function removeFromVocabulary(word) {
    chrome.storage.sync.get(["vocabulary"], (data) => {
      const vocabulary = (data.vocabulary || []).filter((item) => item !== word);
      chrome.storage.sync.set({ vocabulary }, () => {
        console.log(`Word "${word}" removed from vocabulary.`);
      });
    });
  }
  