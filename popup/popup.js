// popup.js
import { detectLanguage, summarizeText, translateText, generatePromptResponse } from "../helpers/helpers.js";

const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");

// Utility to display output
function displayOutput(message) {
  outputText.textContent = message;
}

// Event listeners for buttons
document.getElementById("translate-btn").addEventListener("click", async () => {
  const text = inputText.value.trim();
  if (!text) return displayOutput("Please enter text to translate.");
  const translated = await translateText(text, "en", "es");
  displayOutput(translated || "Translation failed.");
});

document.getElementById("summarize-btn").addEventListener("click", async () => {
  const text = inputText.value.trim();
  if (!text) return displayOutput("Please enter text to summarize.");
  const summary = await summarizeText(text, { length: "medium" });
  displayOutput(summary || "Summarization failed.");
});

document.getElementById("detect-btn").addEventListener("click", async () => {
  const text = inputText.value.trim();
  if (!text) return displayOutput("Please enter text to detect language.");
  const results = await detectLanguage(text);
  displayOutput(results.map(r => `${r.language}: ${r.confidence}`).join("\n"));
});

document.getElementById("prompt-btn").addEventListener("click", async () => {
  const prompt = inputText.value.trim();
  if (!prompt) return displayOutput("Please enter a prompt.");
  const response = await generatePromptResponse(prompt);
  displayOutput(response || "Prompt generation failed.");
});
