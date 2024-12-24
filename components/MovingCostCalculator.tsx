"use client";

import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import MovingCalculator from "./CostCalculator";

const MovingCostCalculator: React.FC = () => {
  const [movingDate, setMovingDate] = useState<Date | null>(null);
  const [movingFrom, setMovingFrom] = useState("");
  const [movingTo, setMovingTo] = useState("");
  const [movingType, setMovingType] = useState("2 Bedrooms");

  const movingOptions = [
    "A few items",
    "Studio apartment",
    "Office move",
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
      className=" flex items-center h-full justify-between px-10 bg-cover bg-center p-10"
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
      <MovingCalculator />
    </div>
  );
};

export default MovingCostCalculator;
