"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MovingCostCalculator: React.FC = () => {
  const [movingDate, setMovingDate] = useState<Date | null>(null);
  const [movingFrom, setMovingFrom] = useState("");
  const [movingTo, setMovingTo] = useState("");
  const [movingType, setMovingType] = useState("2 Bedrooms");

  const movingOptions = [
    "A few items",
    "Studio apartment",
    "1 bedroom residence",
    "2 bedroom residence",
    "3 bedroom residence",
    "4 bedroom residence",
    "5+ bedroom residence",
  ];

  const handleCalculate = () => {
    console.log({
      movingFrom,
      movingTo,
      movingType,
      movingDate,
    });
  };

  return (
    <div
      className=" flex items-center justify-between px-10 bg-cover bg-center p-10"
      style={{
        backgroundImage: `url('/image/moving_calculate.jpg')`,
      }}
    >
      {/* Left Content */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-teal-800">
          Best Moving Companies in Texas
        </h1>
        <ul className="mt-4 text-gray-700 space-y-2">
          <li>✔ Instant Free Moving Quotes</li>
          <li>✔ Compare Quotes & Save</li>
          <li>✔ Insured & Licensed</li>
        </ul>
      </div>

      {/* Right Content - Form */}
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Moving Cost Calculator
        </h2>
        <div className="space-y-4">
          {/* Moving From */}
          <div>
            <label
              htmlFor="moving-from"
              className="block text-sm font-medium text-gray-700"
            >
              Where are you Moving From?
            </label>
            <input
              type="text"
              id="moving-from"
              placeholder="Enter Zip Code"
              value={movingFrom}
              onChange={(e) => setMovingFrom(e.target.value)}
              className="mt-1 w-full p-2 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Moving To */}
          <div>
            <label
              htmlFor="moving-to"
              className="block text-sm font-medium text-gray-700"
            >
              Moving To
            </label>
            <input
              type="text"
              id="moving-to"
              placeholder="zip/city, state"
              value={movingTo}
              onChange={(e) => setMovingTo(e.target.value)}
              className="mt-1 w-full p-2 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Moving Type */}
          <div>
            <label
              htmlFor="moving-type"
              className="block text-sm font-medium text-gray-700"
            >
              Moving Size
            </label>
            <select
              id="moving-type"
              value={movingType}
              onChange={(e) => setMovingType(e.target.value)}
              className="mt-1 w-full p-2 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              {movingOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Moving Date */}
          <div>
            <label
              htmlFor="moving-date"
              className="block text-sm font-medium text-gray-700"
            >
              When is your move?
            </label>
            <DatePicker
              id="moving-date"
              selected={movingDate}
              onChange={(date) => setMovingDate(date)}
              className="mt-1 w-full p-2 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholderText="Pick a date"
              minDate={new Date()}
            />
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="mt-6 w-full bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default MovingCostCalculator;
