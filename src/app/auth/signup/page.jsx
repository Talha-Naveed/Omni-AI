"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // Add error state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous errors

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      // Changed endpoint from /login to /signup
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name, // Include name in request
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to sign up");
      }

      const data = await response.json();

      // Show success splash screen
      const splashScreen = document.createElement("div");
      splashScreen.className =
        "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
      splashScreen.innerHTML = `
        <div class="bg-white p-8 rounded-lg text-center">
          <h2 class="text-2xl font-bold mb-4">Sign Up Successful!</h2>
          <p>Welcome ${formData.name || "User"}!</p>
        </div>
      `;
      document.body.appendChild(splashScreen);

      // Wait 2 seconds then redirect
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Remove splash screen and redirect
      splashScreen.remove();
      window.location.href = "/"; // Redirect to landing page
    } catch (error) {
      console.error("Signup error:", error);
      setError(error.message || "Failed to sign up");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1E1B31] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Join <span className="text-pink-500">OmniAI</span>
            </h1>
            <p className="text-gray-400">Create your account to get started</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500 text-red-500 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label
                className="block text-gray-300 mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
            >
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-400">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-pink-500 hover:text-pink-400 font-semibold"
            >
              Log In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
