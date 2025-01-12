"use client";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("");
  const [transcriptGenerated, setTranscriptGenerated] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingMessage("Generating transcript...");
    setTimeout(() => {
      setTranscriptGenerated(`Generated transcript for LinkedIn profile: ${url}`);
      setLoadingMessage("");
      setShowModal(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#1E1B31] text-white flex flex-col items-center justify-center p-6">
      {loadingMessage && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-10 text-xl">{loadingMessage}</div>
      )}

      <h1 className="text-5xl font-bold mb-4">
        LinkedIn <span className="text-pink-500">Transcript</span> Generator
      </h1>
      <p className="text-xl text-gray-300 mb-6">Enter a LinkedIn URL to generate a transcript.</p>

      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter LinkedIn URL"
          className="w-full p-4 bg-transparent border-2 border-gray-400 rounded-lg text-white placeholder-gray-300"
        />
        <button type="submit" className="w-full py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-lg">
          Generate Transcript
        </button>
      </form>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-30" onClick={() => setShowModal(false)}>
          <div className="bg-white text-black p-6 w-96 rounded-lg shadow-lg" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-semibold mb-4">Transcript Generated</h2>
            <p className="text-lg">{transcriptGenerated}</p>
            <button onClick={() => setShowModal(false)} className="mt-6 py-2 px-4 bg-red-500 text-white rounded-lg">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
