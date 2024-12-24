"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MovingCalculator: React.FC = () => {
  const [movingFrom, setMovingFrom] = useState<string>("");
  const [movingTo, setMovingTo] = useState<string>("");
  const [movingType, setMovingType] = useState<string>("");
  const [movingDate, setMovingDate] = useState<Date | null>(null);

  const movingOptions = [
    "Studio residence",
    "1 bedroom residence",
    "2 bedroom residence",
    "3 bedroom residence",
    "4+ bedroom residence",
    "Office move",
  ];

  const handleCalculate = () => {
    if (!movingFrom || !movingTo || !movingType || !movingDate) {
      alert("Please fill out all fields before proceeding.");
      return;
    }
    alert(
      `Calculating cost for moving from ${movingFrom} to ${movingTo}, ${movingType}, on ${movingDate.toDateString()}`
    );
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="bg-white bg-transparent p-12 rounded-xl shadow-lg  max-w-4xl border-2 border-[#0F0702] ">
        <h2 className="text-3xl font-bold text-center text-amber-700 mb-6">
          Moving Cost Calculator
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="moving-from"
              className="block text-lg font-medium text-gray-700"
            >
              Where are you moving from?
            </label>
            <input
              type="text"
              id="moving-from"
              placeholder="Zip Code, City, State"
              value={movingFrom}
              onChange={(e) => setMovingFrom(e.target.value)}
              className="mt-2 w-full p-3 text-lg text-black border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-400"
            />
          </div>

          <div>
            <label
              htmlFor="moving-to"
              className="block text-lg font-medium text-gray-700"
            >
              Where are you moving to?
            </label>
            <input
              type="text"
              id="moving-to"
              placeholder="Zip Code, City, State"
              value={movingTo}
              onChange={(e) => setMovingTo(e.target.value)}
              className="mt-2 w-full p-3 text-lg border text-black border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-400"
            />
          </div>

          <div>
            <label
              htmlFor="moving-type"
              className="block text-lg font-medium text-gray-700"
            >
              What are you moving?
            </label>
            <select
              id="moving-type"
              value={movingType}
              onChange={(e) => setMovingType(e.target.value)}
              className="mt-2 w-full p-3 text-lg border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-400 text-black"
            >
              <option value="" disabled>
                Select Moving Size
              </option>
              {movingOptions.map((option, index) => (
                <option
                  key={index}
                  value={option}
                  className="hover:text-green-400"
                >
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="moving-date"
              className="block text-lg font-medium text-gray-700"
            >
              When are you moving?
            </label>
            <DatePicker
              id="moving-date"
              selected={movingDate}
              onChange={(date: Date | null) => setMovingDate(date)}
              placeholderText="Pick your moving date"
              className="mt-2 w-full p-3 text-lg border text-black border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-400"
              minDate={new Date()}
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={handleCalculate}
            className="px-6 py-3 bg-amber-600 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovingCalculator;
