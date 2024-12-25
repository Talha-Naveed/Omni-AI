const Features = () => {
  const features = [
    { title: "Module 1", description: "write here for module 1" },
    { title: "Module 2", description: "Module 2 description" },
    { title: "Module 3", description: "Module 3 description" },
  ];

  return (
    <div className="bg-gray-200 py-16 w-full h-auto">
      <div className="container-custom">
        <div className="lg:text-6xl text-4xl md:text-3xl font-sans text-left mb-16 border border-black">
          What We Offer...
        </div>
        <div className="flex justify-center flex-wrap gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white shadow-lg rounded-2xl max-w-sm hover:shadow-xl transition-shadow hover:cursor-pointer"
            >
              <div className="p-10">
                <div className="text-xl font-bold mb-2 text-gray-800">
                  {feature.title}
                </div>
                <div className="text-gray-600">{feature.description}</div>
              </div>
              <div className="bg-gray-500 p-5 text-white text-xl rounded-b-xl">
                {"Learn More =>"}
                {/* Yahan icon dalna hai */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
