"use client";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("");
  const [transcriptGenerated, setTranscriptGenerated] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setLoadingMessage("Generating transcript...");
    setTimeout(() => {
      setTranscriptGenerated(`Generated transcript for YouTube video: ${url}`);
      setLoadingMessage("");
    }, 2000);
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
        <span className="text-blue-500">Transcript</span> Generator
      </h1>
      <p className="text-lg mb-6 text-center">
        Instantly, without uploading video files.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 w-full max-w-lg"
      >
        <input
          className="border rounded-lg bg-transparent text-white px-4 py-2 w-full"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="url"
          placeholder="Enter YouTube URL... https://www.youtube.com/watch?v=example"
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
