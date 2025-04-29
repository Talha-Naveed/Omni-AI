const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const {
    postType,
    targetAudience,
    keywords,
    tone,
    length,
    keyDetails,
    hashtags,
    callToAction,
    includeMedia,
  } = req.body;

  const prompt = `You are a professional LinkedIn content writer. Create a LinkedIn post with the following specifications:

Post Type: ${postType}
Target Audience: ${targetAudience}
Main Keywords: ${keywords}
Tone of Voice: ${tone}
Length: ${length}
Key Details to Include: ${keyDetails}
Call to Action: ${callToAction}
${hashtags ? `Hashtags to Include: ${hashtags}` : ""}
${
  includeMedia
    ? "Please suggest relevant media (image/video) ideas for this post."
    : ""
}

Please write an engaging LinkedIn post that:
1. Has an attention-grabbing opening
2. Incorporates the key details naturally
3. Uses appropriate formatting for LinkedIn
4. Maintains the specified tone
5. Includes the hashtags organically
6. Ends with the specified call-to-action
7. ${
    includeMedia
      ? "Includes media suggestions"
      : "Is optimized for text-only viewing"
  }

Format the response with proper line breaks and spacing for LinkedIn.`;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response.text();
    res.status(200).json({ text: response });
  } catch (error) {
    console.error("Error generating content:", error);
    res.status(500).json({ error: "Error generating content" });
  }
}
