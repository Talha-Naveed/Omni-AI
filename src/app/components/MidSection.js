const MidSection = () => {
  return (
    // Here te slider would come

    // <div className=" bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center ">
    <div className=" relative w-full h-auto text-white overflow-hidden ">
      <video className="w-full h-auto" autoPlay muted loop playsInline>
        <source
          src="https://cdn.pixabay.com/video/2022/06/13/120172-720504774_large.mp4"
          type="video/mp4"
        ></source>
      </video>

      <div className="container-custom absolute top-1/4 text-5xl text-left lg:text-9xl  md:text-7xl px-5 ">
        Welcome...
        <div className="lg:text-5xl text-3xl md:text-3xl">
          All your AI need at one place
        </div>
      </div>

      {/* <h1 className="text-4xl font-bold text-black mb-4 ">
        Welcome to Modular AI Web
      </h1>
      <p className="text-lg mb-8 text-black ">Create your work productive!</p>
      <button className="px-6 py-3 bg-white text-blue-500 font-bold rounded-md shadow-lg hover:bg-gray-200">
        Get Started
      </button> */}
    </div>
  );
};

export default MidSection;
