import React from "react";

const LoadingDots = () => {
  return (
    <div className="flex items-center justify-center space-x-1">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="w-2 h-2 bg-black rounded-full animate-bounce"
          style={{ animationDelay: `${index * 100}ms` }}
        />
      ))}
    </div>
  );
};

export default LoadingDots;
