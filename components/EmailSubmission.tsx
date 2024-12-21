import React from "react";

const EmailSubscription = () => {
  return (
    <section className="bg-gray-900 text-white rounded-lg p-6 md:flex items-center">
      <div className="md:w-2/3 md:pr-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide mb-2">
          Subscribe to us for New Upadats
        </h2>
        <h3 className="text-2xl font-bold mb-2">Don't miss anything!</h3>
        <p className="text-sm text-gray-400 mb-4">
          Join our community of 60,000+ who regularly receive the best in
          Moiving Company in USA.
        </p>
        <form className="flex items-center">
          <div className="flex items-center bg-gray-800 rounded-md w-full max-w-md">
            <span className="px-4 text-gray-400">&#x2709;</span>
            <input
              type="email"
              placeholder="buzzmoving@gmail.com"
              className="bg-transparent focus:outline-none text-sm text-white placeholder-gray-500 w-full py-2"
            />
          </div>
          <button
            type="submit"
            className="ml-4 bg-lime-500 text-black font-semibold px-6 py-2 rounded-md hover:bg-lime-600 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="hidden md:block md:w-1/3 md:pl-6">
        <div className="relative">
          <img
            src="/image/moving-truck.jpg"
            alt="Creative Brief"
            className="rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-lime-500 font-bold text-lg">
            Moving Taxas
          </div>
          <div className="absolute bottom-2 left-4 text-white text-sm">
            Superside
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSubscription;
