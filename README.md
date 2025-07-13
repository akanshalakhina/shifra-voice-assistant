# 🤖 Shifra - Voice AI Assistant

**Shifra** is a voice-based virtual assistant built using HTML, CSS, JavaScript, and powered by the Gemini AI API. It can recognize your speech, respond intelligently, and perform tasks like telling time, opening websites, and answering questions using AI.

---

## ⚡ Features

- 🎤 Voice input using Web Speech API  
- 🗣️ Voice output using SpeechSynthesis  
- 🌐 Opens Google, YouTube, WhatsApp  
- 🧠 AI replies using Gemini (via backend)  
- 🕒 Tells current time and date  
- 👋 Greets based on time of day  
- 📱 Mobile responsive design  

## 🔧 Tech Stack

- Frontend: HTML, CSS, JavaScript  
- Backend: Node.js, Express.js  
- AI: Gemini API (Google Generative AI)  

## 📄 License

MIT – free to use, share, and improve.


## 🚀 Run Locally

```bash
# Backend setup
cd backend
npm install
echo GEMINI_API_KEY=your_api_key > .env
node server.js
