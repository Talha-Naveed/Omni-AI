"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Users } from "lucide-react";

export default function Why() {
  const reasons = [
    {
      icon: <Shield className="w-12 h-12 text-pink-500" />,
      title: "User-Friendly Interface",
      description: "Accessible for experts and beginners alike.",
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-500" />,
      title: "Real-Time Insights",
      description: "Stay ahead with live sentiment and performance tracking.",
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Scalable Solutions",
      description: "Grow your toolkit as your needs evolve.",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Why Choose <span className="text-pink-500">Us</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience the difference with our cutting-edge AI solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-8 rounded-2xl text-center hover:bg-gray-800/70 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white">
                {reason.title}
              </h3>
              <p className="text-gray-300">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
