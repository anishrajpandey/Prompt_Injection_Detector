# Prompt Injection Detector

## Overview
This project is a web-based tool designed to detect and block possible prompt injection attacks targeting Large Language Models (LLMs). It utilizes **HTML, Tailwind CSS, and JavaScript** to provide a clean and interactive interface. The system scans user inputs for potentially malicious instructions before forwarding them to the LLM API.

## Features
- **Prompt Injection Detection**: Uses the PromptFoo API to analyze user input and identify potential prompt injection attacks.
- **Safe Input Handling**: If an injection is detected, the request is blocked, and an alert is shown.
- **Interactive UI**: Built with Tailwind CSS for a responsive and modern design.
- **LLM Querying**: If the input is safe, the request is sent to Google's Gemini LLM API for processing.

## Tech Stack
- **Frontend**: HTML, Tailwind CSS
- **Backend**: JavaScript (Client-side)
- **APIs Used**:
  - **PromptFoo** (for prompt injection detection)
  - **Google Gemini LLM API** (for generating responses)

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/prompt-injection-detector.git
   cd prompt-injection-detector
   ```
2. Open `index.html` in a browser.
3. Ensure an internet connection to access the external APIs.

## How It Works
1. **User Input**: The user types a prompt into the input box.
2. **Injection Check**: The input is sent to the PromptFoo API for analysis.
3. **Result Handling**:
   - If an injection is detected, the request is blocked, and an alert is shown.
   - If safe, the prompt is forwarded to the Google Gemini API.
4. **Response Display**: The AI-generated response is displayed on the webpage.

## File Structure
```
/
│── index.html      # Main HTML structure
│── script.js       # JavaScript logic for API calls and validation
│── Assets/         # Directory for images and other assets
```

## Usage
- Open the webpage.
- Enter a query in the text box.
- Click the send button.
- If the input is safe, you’ll receive an AI-generated response; otherwise, a warning will be displayed.

## Future Improvements
- Add backend support for improved security.
- Enhance detection methods using custom AI models.
- Improve UI/UX with better feedback mechanisms.

## Contributors
- Anish Raj Pandey
- Oasis Pandey
- Niraj Bhattarai
  
## License
This project is open-source and available under the [MIT License](LICENSE).

