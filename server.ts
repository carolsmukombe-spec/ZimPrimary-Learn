import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client lazily/safely
const getGenAI = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

// API Routes

// 1. AI Concept Breakdown & Step-by-Step Guide
app.post("/api/tutor/explain", async (req, res) => {
  try {
    const { grade, subject, topic, question, languagePreference } = req.body;
    const ai = getGenAI();

    if (!ai) {
      return res.status(503).json({
        error: "Gemini API key is not configured. Using offline guide mode.",
      });
    }

    const systemInstruction = `You are Teacher Chipo (Mfundisi Ndlovu), a warm, encouraging, expert primary school teacher in Zimbabwe.
You teach students following the Ministry of Primary and Secondary Education (MoPSE) Competency-Based and Heritage-Based Curriculum (ECD A to Grade 7).
Always keep language simple, age-appropriate, encouraging, and include Zimbabwean real-life examples (e.g. Great Zimbabwe, Zambezi River, local wildlife, agriculture, family, traditional games like nhodo/pada, local food like sadza/mutakura, ZiG currency, etc.).
Language Preference: ${languagePreference || 'English with brief Shona/Ndebele key terms'}.`;

    const prompt = `Grade: ${grade || 'Grade 5'}
Subject: ${subject || 'General Science'}
Topic: ${topic || 'General Topic'}
Question / Concept to Explain: "${question}"

Provide a clear step-by-step master guide breakdown in JSON format with:
1. "summary": A brief 1-2 sentence child-friendly summary.
2. "steps": An array of 3 to 4 easy steps. Each step object has "title" and "description" and "localExample".
3. "keyVocabulary": An array of 3 key words with simple definitions and Shona/Ndebele translation where relevant.
4. "quickCheck": A 1-question check for understanding with 4 options, correctIndex, and "explanation".
5. "encouragement": A warm Zimbabwean teacher sign-off phrase (e.g., "Makorokoto! Keep shining!").`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
      },
    });

    const jsonText = response.text || "{}";
    const data = JSON.parse(jsonText);
    res.json({ success: true, data });
  } catch (err: any) {
    console.error("Error in /api/tutor/explain:", err);
    res.status(500).json({ error: err.message || "Failed to generate concept guide." });
  }
});

// 2. AI Question Generator for Test Bank & Practice
app.post("/api/practice/generate", async (req, res) => {
  try {
    const { grade, subject, topic, count = 3 } = req.body;
    const ai = getGenAI();

    if (!ai) {
      return res.status(503).json({ error: "Gemini API key not configured." });
    }

    const prompt = `Generate ${count} authentic Zimbabwe Primary School exam-style practice questions for:
Grade: ${grade}
Subject: ${subject}
Topic: ${topic}

Follow MoPSE ZIMSEC primary exam standard format.
Return JSON with key "questions" which is an array of objects.
Each object must contain:
- "id": string
- "question": string
- "options": array of 4 strings
- "correctIndex": number (0-3)
- "explanation": concise explanation of why the answer is correct
- "difficulty": "Easy" | "Medium" | "Hard"`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const data = JSON.parse(response.text || "{}");
    res.json({ success: true, questions: data.questions || [] });
  } catch (err: any) {
    console.error("Error generating practice questions:", err);
    res.status(500).json({ error: err.message || "Failed to generate practice questions." });
  }
});

// 3. AI CALA / Heritage Project Guide Assistant
app.post("/api/project/assist", async (req, res) => {
  try {
    const { grade, subject, projectTitle, userIdea } = req.body;
    const ai = getGenAI();

    if (!ai) {
      return res.status(503).json({ error: "Gemini API key not configured." });
    }

    const prompt = `Help a Zimbabwean student in ${grade} working on a School Based Project / CALA for ${subject}.
Project Title: "${projectTitle}"
Student's initial idea: "${userIdea || 'I want to start my project'}"

Provide a structured guide in JSON with:
1. "projectOverview": clear, encouraging explanation of what the learner will do.
2. "materialsNeeded": array of easy-to-find local Zimbabwean materials (e.g. soil, seeds, plastic bottles, cardboard, grass, wire, clay).
3. "stepByStepActionPlan": array of 4-5 actionable steps. Each step has "stepNumber", "title", "actionDescription", and "tip".
4. "presentationTips": 3 practical tips for presenting to teacher/classmates.
5. "safetyAdvice": 1-2 simple safety tips.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const data = JSON.parse(response.text || "{}");
    res.json({ success: true, projectGuide: data });
  } catch (err: any) {
    console.error("Error generating project assist:", err);
    res.status(500).json({ error: err.message || "Failed to assist with project." });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`ZimPrimary Learn server running on http://localhost:${PORT}`);
  });
}

startServer();
