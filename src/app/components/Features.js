const Features = () => {
  const features = [
    {
      title: "Large Language Models",
      description:
        "Powerful AI at your fingertips for chatbots, content generation, and more.",
    },
    {
      title: "Live Sentiment Analysis",
      description:
        "Monitor emotions in real-time to make data-driven decisions.",
    },
    // {
    //   title: "Retrieval Augmented Generation",
    //   description:
    //     "Empower your data-driven workflows with AI-assisted content retrieval.",
    // },
    {
      title: "Custom AI Solution",
      description:
        "Tailored AI tools to fit your business needs, helping you stay ahead.  ",
    },
  ];

  return (
    <div className="bg-gray-200 py-16 w-full h-auto">
      <div className="container-custom">
        <div className="lg:text-6xl text-4xl md:text-3xl font-sans text-left mb-16 pl-5 ">
          What We Offer...
        </div>
        <div className="flex justify-center flex-wrap gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white shadow-lg rounded-2xl max-w-sm hover:shadow-xl transition-shadow hover:cursor-pointer"
            >
              <div className="p-10">
                <div className="text-xl font-bold  text-gray-800">
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
        <div className="flex justify-center mt-10">
          <button className="border border-gray-500 p-5 hover:bg-black hover:text-white rounded">
            Explore All Features
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
