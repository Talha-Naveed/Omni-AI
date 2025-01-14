"use client";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("");
  const [transcriptGenerated, setTranscriptGenerated] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setLoadingMessage("Generating Script...");
    try {
      const content = await generateContent();
      setTranscriptGenerated(content);
    } catch (error) {
      console.error("Error generating content:", error);
    } finally {
      setLoadingMessage("");
    }
  }

  async function generateContent() {
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: "Explain how AI works" }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch content");
      }
      const data = await response.json();
      return data.text;
    } catch (error) {
      console.error("Error in generateContent:", error);
      return "An error occurred while generating the content.";
    }
  }

  return (
    <div className="min-h-screen bg-[#1E1B31] text-white flex flex-col items-center justify-center p-6">
      {loadingMessage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center">
          <p className="text-2xl">{loadingMessage}</p>
        </div>
      )}

      <h1 className="text-4xl font-bold mb-6">
        <span className="text-pink-500">YouTube</span>{" "}
        <span className="text-blue-500">Script</span> Generator
      </h1>
      <p className="text-lg mb-6 text-center">
        Instantly, without uploading any file.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 w-full max-w-lg"
      >
        <input
          className="border rounded-lg bg-transparent text-white px-4 py-2 w-full"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="text"
          placeholder="Enter your title Ex...  Independence of Pakistan"
        />
        <button
          className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          type="submit"
        >
          Get Video Transcript
        </button>
      </form>

      <p className="text-gray-400 mt-4">Quick and simple. No catch.</p>

      {transcriptGenerated && (
        <div className="bg-gray-800 p-4 rounded-lg mt-6 w-full max-w-lg text-center">
          <h2 className="text-lg font-bold mb-2">Generated Transcript:</h2>
          <p>{transcriptGenerated}</p>
        </div>
      )}
    </div>
  );
}
