const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const prompt = `You are a YouTube script generator. I want you to write me a script for my new YouTube video. I want to make a video on the following title: ${req.body.title}. 
  Please write a detailed, engaging script that includes:
  - An attention-grabbing introduction
  - Main points and key information
  - A clear structure
  - A strong call-to-action at the end
  Make it conversational and suitable for YouTube.`;

  try {
    const result = await model.generateContent(prompt);
    res.status(200).json({ text: result.response.text() });
  } catch (error) {
    console.error("Error generating content:", error);
    res.status(500).json({ error: "Error generating content" });
  }
}
