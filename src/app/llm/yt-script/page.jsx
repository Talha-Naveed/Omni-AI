"use client";

import { useState } from "react";
import { marked } from "marked";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("");
  const [transcriptGenerated, setTranscriptGenerated] = useState("");
  const [savedResponses, setSavedResponses] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoadingMessage("Generating your YouTube script...");
    try {
      const content = await generateContent();
      setTranscriptGenerated(content);
      // Save response to database
      await saveResponse(content);
      // Refresh saved responses
      await fetchSavedResponses();
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
        body: JSON.stringify({ title: url }),
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

  async function saveResponse(content) {
    try {
      await fetch("/api/save-response", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: url,
          content: content,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error("Error saving response:", error);
    }
  }

  async function fetchSavedResponses() {
    try {
      const response = await fetch("/api/get-responses");
      if (response.ok) {
        const data = await response.json();
        setSavedResponses(data);
      }
    } catch (error) {
      console.error("Error fetching saved responses:", error);
    }
  }

  // Fetch saved responses on component mount
  useState(() => {
    fetchSavedResponses();
  }, []);

  function formatMarkdown(text) {
    // Convert markdown to HTML
    const htmlContent = marked(text);
    return htmlContent;
  }

  return (
    <div className="min-h-screen bg-[#1E1B31] text-white flex flex-col items-center pt-20 p-6">
      <Dialog open={!!loadingMessage} onOpenChange={() => {}}>
        <DialogContent className="bg-[#1E1B31]/95 border-gray-800">
          <DialogHeader>
            <DialogTitle className="text-center text-white">
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                  <Loader2 className="h-8 w-8 animate-spin text-pink-500" />
                  <span className="text-xl">AI is working its magic</span>
                </div>
                <p className="text-sm text-gray-400 font-normal">
                  {loadingMessage}
                </p>
              </div>
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-6 text-center">
          <span className="text-pink-500">YouTube</span>{" "}
          <span className="text-blue-500">Script</span> Generator
        </h1>
        <p className="text-lg mb-6 text-center">
          Instantly, without uploading any file.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4 w-full max-w-lg mx-auto"
        >
          <input
            className="border rounded-lg bg-transparent text-white px-4 py-3 w-full"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            placeholder="Enter your title Ex...  Independence of Pakistan"
          />
          <button
            className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 w-full"
            type="submit"
          >
            Get Script
          </button>
        </form>

        <p className="text-gray-400 mt-4 text-center">
          Quick and simple. No catch.
        </p>

        {transcriptGenerated && (
          <div className="bg-gray-800/50 p-8 rounded-lg mt-6 w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Generated Script:
            </h2>
            <div
              className="text-justify space-y-4 prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{
                __html: formatMarkdown(transcriptGenerated),
              }}
            />
          </div>
        )}

        {/* Saved Responses Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Saved Scripts</h2>
          <div className="space-y-6">
            {savedResponses.map((response, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{response.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {new Date(response.timestamp).toLocaleString()}
                </p>
                <div
                  className="text-justify prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: formatMarkdown(response.content),
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
