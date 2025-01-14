"use client";

import { motion } from "framer-motion";

export default function MidSection() {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://cdn.pixabay.com/video/2022/06/13/120172-720504774_large.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative z-10 container-custom h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              OmniAI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mt-6">
            All your AI needs in one place. Streamline your workflow with our
            powerful AI tools.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
