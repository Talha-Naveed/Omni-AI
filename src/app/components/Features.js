const Features = () => {
  const features = [
    { title: "Module 1", description: "write here for module 1" },
    { title: "Module 2", description: "Module 2 description" },
    { title: "Module 3", description: "Module 3 description" },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
      <div className="flex justify-center flex-wrap gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white p-6 shadow-lg rounded-lg max-w-sm text-center hover:shadow-xl transition-shadow hover:cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
