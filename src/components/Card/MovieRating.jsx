import React from "react";

const MovieRating = ({ value }) => {
  // Value should be between 0 and 100
  const normalizedValue = Math.max(0, Math.min(100, value));
  const radius = 25; // Adjusted radius for a smaller circle
  const strokeWidth = 4; // Adjusted stroke width for the smaller circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const progress = (normalizedValue / 100) * circumference; // Progress in pixels

  return (
    <div className="relative flex items-center justify-center">
      <svg
        width="60" // Adjusted width for a smaller SVG
        height="60" // Adjusted height for a smaller SVG
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
        className="rotate-[-90deg]" // Rotate the SVG to make progress start from the top
      >
        {/* Background Circle */}
        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress Circle */}
        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="#3b82f6"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          fill="none"
          className="transition-all duration-500"
        />
        {/* Percentage Text */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-xs font-bold"
          style={{ fill: "white" }}
          transform="rotate(90 30 30)" // Counter-rotate the text to keep it upright
        >
          {`${normalizedValue}%`}
        </text>
      </svg>
    </div>
  );
};

export default MovieRating;
