"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Large Language Models",
      description:
        "Powerful AI at your fingertips for chatbots, content generation, and more.",
      icon: <Brain className="w-8 h-8 text-pink-500" />,
    },
    {
      title: "Live Sentiment Analysis",
      description:
        "Monitor emotions in real-time to make data-driven decisions.",
      icon: <Code2 className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Custom AI Solutions",
      description:
        "Tailored AI tools to fit your business needs, helping you stay ahead.",
      icon: <Sparkles className="w-8 h-8 text-blue-500" />,
    },
  ];

  return (
    <div className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We <span className="text-pink-500">Offer</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive suite of AI-powered solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
              <div className="mt-6">
                <button className="text-pink-500 font-semibold group-hover:text-purple-500 transition-colors duration-300 flex items-center gap-2">
                  Learn More
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
