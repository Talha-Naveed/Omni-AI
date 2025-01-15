"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

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

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to log in");
      }

      const data = await response.json();

      // Show success splash screen
      const splashScreen = document.createElement("div");
      splashScreen.className =
        "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
      splashScreen.innerHTML = `
        <div class="bg-white p-8 rounded-lg text-center">
          <h2 class="text-2xl font-bold mb-4">Login Successful!</h2>
          <p>Welcome back ${data.name || "User"}!</p>
        </div>
      `;
      document.body.appendChild(splashScreen);

      // Wait 2 seconds then redirect
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Remove splash screen and redirect
      splashScreen.remove();
      window.location.href = "/"; // Redirect to landing page
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message || "Failed to log in");
    }

    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
              Welcome Back to <span className="text-pink-500">OmniAI</span>
            </h1>
            <p className="text-gray-400">Log in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-700 bg-gray-900/50 text-pink-500 focus:ring-pink-500"
                />
                <span className="ml-2 text-sm text-gray-400">Remember me</span>
              </label>
              <Link
                href="/auth/forgot-password"
                className="text-sm text-pink-500 hover:text-pink-400"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
            >
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                "Log In"
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-400">
            Don't have an account?{" "}
            <Link
              href="/auth/signup"
              className="text-pink-500 hover:text-pink-400 font-semibold"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
