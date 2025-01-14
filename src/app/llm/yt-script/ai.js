const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") }); // Load environment variables
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function generateContent() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "Explain how AI works";
  try {
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
  } catch (error) {
    console.error("Error generating content:", error);
  }
}

// console.log(process.env.GEMINI_KEY);
generateContent();
