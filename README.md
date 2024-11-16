# AI-Powered-Language-Learning-Assistant
The AI-Powered Language Learning Assistant aims to transform everyday browsing into an immersive language-learning experience. Users can interact with web content in their target language, practice language skills dynamically, and receive personalized learning prompts.

GeminiLingo/
├── manifest.json
├── background.js
├── content.js
├── popup/
│   ├── popup.html
│   ├── popup.js
│   └── popup.css
├── options/
│   ├── options.html
│   ├── options.js
│   └── options.css
├── assets/
│   ├── logo128.png
│   ├── logo48.png
│   └── logo16.png
├── styles/
│   └── tooltip.css
├── helpers/
│   ├── translator.js
│   ├── summarizer.js
│   ├── rewriter.js
│   └── vocabulary.js
└── README.md

# GeminiLingo: AI-Powered Language Learning Assistant

GeminiLingo is a cutting-edge Chrome extension designed to make language learning seamless and dynamic. It integrates real-time translation, rewriting, summarization, and vocabulary building directly into your browser.

## Features
- **Real-Time Translation:** Translate selected text with one click.
- **Content Rewriting:** Rephrase text dynamically to enhance learning.
- **Summarization:** Simplify lengthy content into concise summaries.
- **Vocabulary Builder:** Save and review unfamiliar words for better retention.

## Installation
1. Clone or download this repository.
2. Open `chrome://extensions/` in your Chrome browser.
3. Enable Developer Mode.
4. Click **Load Unpacked** and select the `GeminiLingo` folder.

## Usage
1. Highlight text on any webpage.
2. Right-click and select a GeminiLingo action (Translate, Rewrite, Summarize).
3. Use the popup or options page to review vocabulary or change settings.

## Technologies Used
- **Gemini Nano API:** Powers all translation, rewriting, and summarization features.
- **Chrome Storage API:** Stores user vocabulary and preferences.
- **HTML/CSS/JavaScript:** Builds the UI and functionality.

## License
MIT
