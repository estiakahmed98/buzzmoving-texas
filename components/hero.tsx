import React from "react";
import MovingCalculator from "./CostCalculator";

const HeroSection: React.FC = () => {
  return (
    <section className="relative text-white lg:h-[600px] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/image/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="absolute inset-0 flex flex-col md:flex-row ">
        <div className="relative md:w-1/2 text-center md:text-left left-[10%] top-[45%]">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Moving Quote Taxes
          </h1>
          <p className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Trusted Moving Company
          </p>

          <div className="flex gap-6 items-center mt-8">
            <div>
              <h2 className="text-2xl font-bold">126+</h2>
              <p className="text-gray-300 text-sm">moves today</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">98%</h2>
              <p className="text-gray-300 text-sm">Results rated</p>
            </div>
          </div>
        </div>
        {/* <div className="relative md:text-left left-[10%] top-[15%] ">
          <MovingCalculator />
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
