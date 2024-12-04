chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "highlightVocabulary") {
      const words = message.words || [];
      document.body.querySelectorAll(".highlight").forEach((el) => el.classList.remove("highlight"));
      words.forEach((word) => {
        const regex = new RegExp(`\\b${word}\\b`, "gi");
        document.body.innerHTML = document.body.innerHTML.replace(
          regex,
          `<span class="highlight">${word}</span>`
        );
      });
      sendResponse({ success: true });
    }
  });
  