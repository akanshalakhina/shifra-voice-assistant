const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("✅ Shifra Gemini AI backend is running.");
});
// ✅ Initialize Gemini with API Key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ✅ Route to handle user question
app.post("/ask", async (req, res) => {
  const { message } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });


    const result = await model.generateContent(message);
    const reply = result.response.text();

    res.json({ reply }); // Send the AI's reply back to frontend
  } catch (err) {
    console.error("❌ Gemini AI Error:", err?.response?.data || err?.message || err);
    res.status(500).json({ error: "Gemini AI Error", details: err.message });
  }
});

// ✅ Start server
app.listen(3001, () => {
  console.log("✅ Gemini AI backend running on http://localhost:3001");
});
