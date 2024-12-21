import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative text-white py-16"
      style={{
        backgroundImage: "url(/image/truck.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Where we empower you to embrace your unique{" "}
            <span role="img" aria-label="emoji">
              🧑‍🤝‍🧑
            </span>{" "}
            personality and unleash your full potential
          </h1>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300">
            Start Test
          </button>
          <div className="flex gap-6 items-center mt-8">
            <div>
              <h2 className="text-2xl font-bold">236+</h2>
              <p className="text-gray-200 text-sm">Tests taken today</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">98%</h2>
              <p className="text-gray-200 text-sm">Results rated</p>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        {/* <div className="md:w-1/2 flex justify-center">
          <img
            src="/image/movers.png"
            alt="Illustration of people"
            className="w-full max-w-md md:max-w-lg"
          />
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
