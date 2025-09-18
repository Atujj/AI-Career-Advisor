import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 4000;

// Enable CORS for frontend
app.use(cors());
app.use(express.json());

// ✅ Serve frontend files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../frontend")));

// Example API route
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  // Mock response for now
  res.json({ reply: `Career advice for: ${message}` });
});

// Catch-all to serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Gemini Career Advisor running at port ${PORT}`);
});
