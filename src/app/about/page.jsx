"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-[#1E1B31] text-white">
      {/* Hero Section */}
      <div className="container-custom pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-pink-500">OmniAI</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Empowering creators and businesses with cutting-edge AI solutions
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              At OmniAI, we're dedicated to making artificial intelligence
              accessible and practical for everyone. Our platform combines
              powerful AI tools with user-friendly interfaces, enabling creators
              and businesses to harness the full potential of AI technology.
            </p>
          </div>
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">What Sets Us Apart</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 bg-pink-500 rounded-full" />
                <span>Modular AI Solutions</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 bg-pink-500 rounded-full" />
                <span>User-Centric Design</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 bg-pink-500 rounded-full" />
                <span>Cutting-Edge Technology</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 bg-pink-500 rounded-full" />
                <span>Continuous Innovation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "Constantly pushing boundaries to deliver cutting-edge AI solutions",
                icon: "🚀",
              },
              {
                title: "Accessibility",
                description:
                  "Making advanced AI technology accessible to everyone",
                icon: "🌟",
              },
              {
                title: "Excellence",
                description:
                  "Committed to delivering the highest quality solutions",
                icon: "💎",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-colors"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 pb-20">
          {[
            { number: "50+", label: "AI Models" },
            { number: "1000+", label: "Happy Users" },
            { number: "24/7", label: "Support" },
            { number: "99%", label: "Satisfaction" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl"
            >
              <div className="text-3xl font-bold text-pink-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
