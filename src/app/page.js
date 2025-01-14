import MidSection from "./components/MidSection";
import Features from "./components/Features";
import Team from "./components/team";
import Why from "./components/why";

const Home = () => {
  return (
    <div className="bg-[#1E1B31]">
      {/* Hero Section with Video Background */}
      <MidSection />

      {/* Features Section */}
      <div className="bg-gradient-to-b from-[#1E1B31] to-gray-200">
        <Features />
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-b from-gray-200 to-[#1E1B31]">
        <Why />
      </div>

      {/* Team Section */}
      <div className="bg-gradient-to-b from-[#1E1B31] to-gray-200">
        <Team />
      </div>
    </div>
  );
};

export default Home;
