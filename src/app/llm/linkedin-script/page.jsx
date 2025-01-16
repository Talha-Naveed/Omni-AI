"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const LinkedInCaptionGenerator = () => {
  const [formData, setFormData] = useState({
    postType: "",
    targetAudience: "",
    keywords: "",
    tone: "formal",
    length: "medium",
    keyDetails: "",
    hashtags: "",
    callToAction: "",
    includeMedia: false,
  });

  const [loading, setLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const [savedResponses, setSavedResponses] = useState([]);

  // Fetch saved responses when component mounts
  useEffect(() => {
    fetchSavedResponses();
  }, []);

  const fetchSavedResponses = async () => {
    try {
      const response = await fetch("/api/linked-responses");
      if (!response.ok) throw new Error("Failed to fetch responses");
      const data = await response.json();
      setSavedResponses(data);
    } catch (error) {
      console.error("Error fetching responses:", error);
    }
  };

  const saveResponse = async (content) => {
    try {
      const response = await fetch("/api/linked-responses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "LinkedIn Post",
          content: content,
        }),
      });

      if (!response.ok) throw new Error("Failed to save response");
      await fetchSavedResponses(); // Refresh the list after saving
    } catch (error) {
      console.error("Error saving response:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/linked", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to generate content");
      }

      const data = await response.json();
      setGeneratedContent(data.text);
      await saveResponse(data.text); // Save the generated content
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to generate content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1E1B31] text-white py-20">
      <Dialog open={loading} onOpenChange={() => {}}>
        <DialogContent className="bg-[#1E1B31]/95 border-gray-800">
          <DialogHeader>
            <DialogTitle className="text-center text-white">
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                  <Loader2 className="h-8 w-8 animate-spin text-pink-500" />
                  <span className="text-xl">
                    Generating your LinkedIn post...
                  </span>
                </div>
              </div>
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            LinkedIn{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Caption
            </span>{" "}
            Generator
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Create engaging LinkedIn posts with AI-powered captions
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-gray-800/50 p-8 rounded-2xl border border-gray-700"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <label className="block">
                <span className="text-gray-300 mb-1 block">Type of Post</span>
                <input
                  type="text"
                  name="postType"
                  value={formData.postType}
                  onChange={handleChange}
                  placeholder="e.g., Project Update, Industry News"
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors"
                />
              </label>

              <label className="block">
                <span className="text-gray-300 mb-1 block">
                  Target Audience
                </span>
                <input
                  type="text"
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleChange}
                  placeholder="e.g., Recruiters, Clients"
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors"
                />
              </label>

              <label className="block">
                <span className="text-gray-300 mb-1 block">
                  Keywords or Topics
                </span>
                <input
                  type="text"
                  name="keywords"
                  value={formData.keywords}
                  onChange={handleChange}
                  placeholder="e.g., AI, Data Science"
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors"
                />
              </label>
            </div>

            <div className="space-y-4">
              <label className="block">
                <span className="text-gray-300 mb-1 block">Tone of Voice</span>
                <select
                  name="tone"
                  value={formData.tone}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-pink-500 transition-colors"
                >
                  <option value="formal">Formal</option>
                  <option value="casual">Casual</option>
                  <option value="motivational">Motivational</option>
                  <option value="storytelling">Storytelling</option>
                </select>
              </label>

              <label className="block">
                <span className="text-gray-300 mb-1 block">Caption Length</span>
                <select
                  name="length"
                  value={formData.length}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-pink-500 transition-colors"
                >
                  <option value="short">Short</option>
                  <option value="medium">Medium</option>
                  <option value="long">Long</option>
                </select>
              </label>

              <label className="block">
                <span className="text-gray-300 mb-1 block">Hashtags</span>
                <input
                  type="text"
                  name="hashtags"
                  value={formData.hashtags}
                  onChange={handleChange}
                  placeholder="e.g., #AI, #CareerGrowth"
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors"
                />
              </label>
            </div>
          </div>

          <div className="mt-6">
            <label className="block">
              <span className="text-gray-300 mb-1 block">
                Key Details or Points
              </span>
              <textarea
                name="keyDetails"
                value={formData.keyDetails}
                onChange={handleChange}
                placeholder="Enter specific details to include..."
                rows="4"
                className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors"
              />
            </label>
          </div>

          <div className="mt-6">
            <label className="block">
              <span className="text-gray-300 mb-1 block">Call-to-Action</span>
              <input
                type="text"
                name="callToAction"
                value={formData.callToAction}
                onChange={handleChange}
                placeholder="e.g., Check out my portfolio"
                className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors"
              />
            </label>
          </div>

          <div className="mt-6 flex items-center">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="includeMedia"
                checked={formData.includeMedia}
                onChange={handleChange}
                className="w-5 h-5 rounded border-gray-700 bg-gray-900/50 text-pink-500 focus:ring-pink-500"
              />
              <span className="text-gray-300">Include Media Suggestions</span>
            </label>
          </div>

          <button
            type="submit"
            className="mt-8 w-full py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Generate Caption
          </button>
        </motion.form>

        {generatedContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 p-6 bg-gray-800/50 rounded-lg border border-gray-700 max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-4">
              Generated LinkedIn Post:
            </h2>
            <div className="prose prose-invert max-w-none whitespace-pre-wrap">
              {generatedContent}
            </div>
          </motion.div>
        )}

        {savedResponses.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Previous Responses</h2>
            <div className="space-y-4">
              {savedResponses.map((response, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{response.title}</h3>
                    <span className="text-sm text-gray-400">
                      {new Date(response.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-300 whitespace-pre-wrap">
                    {response.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkedInCaptionGenerator;
