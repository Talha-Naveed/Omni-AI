import React from "react";

export default function Why() {
  return (
    <section className="bg-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-4xl text-blue-500 mb-4">
              <i className="fas fa-cogs"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Modular Design
            </h3>
            <p className="text-gray-600">
              Pick and choose the AI tools you need. No unnecessary extras.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-4xl text-green-500 mb-4">
              <i className="fas fa-brain"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Cutting-Edge Technology
            </h3>
            <p className="text-gray-600">
              Built on the latest advancements in AI and machine learning.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-4xl text-yellow-500 mb-4">
              <i className="fas fa-user"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              User-Friendly Interface
            </h3>
            <p className="text-gray-600">
              Accessible for experts and beginners alike.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-4xl text-red-500 mb-4">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Real-Time Insights
            </h3>
            <p className="text-gray-600">
              Stay ahead with live sentiment and performance tracking.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-4xl text-purple-500 mb-4">
              <i className="fas fa-arrows-alt"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Scalable Solutions
            </h3>
            <p className="text-gray-600">
              Grow your toolkit as your needs evolve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
